<template>
    <!-- 整棵樹只能有一個display:inline-block且須在最外層: 呼叫端之根節點必須直接是本元件, 不得再包div,
         否則inline-block內含inline-level子會產生line box, 版面高度會多出strut之descender -->
    <!-- 手勢隔離: touch-action避免瀏覽器接手捲動, user-select與touch-callout避免選字與長按選單 -->
    <div
        :style="`display:inline-block; touch-action:none; user-select:none; -webkit-user-select:none; -webkit-touch-callout:none;`"
        @contextmenu="contextmenuCur"
    >

        <!-- 座標基準為本層而非根層: 根層會吃到呼叫端傳入之style與class, 一旦有padding或border, 座標即整體偏移 -->
        <div
            ref="divSurface"
            :style="`position:relative; width:${width}px; height:${height}px;`"
        >

            <!-- 背景層之滿版外框由本元件自備, 故slot內容不需自行position:absolute;
                 本層須為相對定位容器之第一個子節點, 因四層皆無z-index, 疊層與命中順序純由樹序決定;
                 本層不可加overflow:hidden, 呼叫端若需裁切應自行於slot內處理 -->
            <div :style="`position:absolute; left:0px; top:0px; width:${width}px; height:${height}px;`">
                <slot
                    :width="width"
                    :height="height"
                    :locLeft="curLocLeft"
                    :locTop="curLocTop"
                    :editable="editable"
                ></slot>
            </div>

            <!-- 游標外框. 其上下各溢出感應區1px, 該1px帶之命中元素為本層而非感應區, 故其@pointerdown為活碼, 不可省略 -->
            <div :style="`
                position:absolute; left:${curLocLeft-Math.floor(cursorSize/2)-1}px; top:${isPlanar?(curLocTop-Math.floor(cursorSize/2)-1):-1}px;
                width:${cursorSize+2}px; height:${isPlanar?(cursorSize+2):(height+2)}px;
                box-sizing:border-box;
                background:transparent;
                ${isPlanar?'border-radius:50%;':''}
                border:1px solid ${useCursorBorderColor};
                ${editable?'cursor:pointer;':''}
                user-select:none;
                _pointer-events:none;
                `"
                @pointerdown="mousedownCur"
            ></div>

            <div :style="`
                position:absolute; left:${curLocLeft-Math.floor(cursorSize/2)}px; top:${isPlanar?(curLocTop-Math.floor(cursorSize/2)):0}px;
                width:${cursorSize}px; height:${isPlanar?cursorSize:height}px;
                box-sizing:border-box;
                background:transparent;
                ${isPlanar?'border-radius:50%;':''}
                border:1px solid ${useCursorColor};
                ${editable?'cursor:pointer;':''}
                user-select:none;
                _pointer-events:none;
                `"
                @pointerdown="mousedownCur"
            ></div>

            <!-- 滿版感應區, 須為最後一個子節點 -->
            <div :style="`
                position:absolute; left:0px; top:0px;
                width:${width}px; height:${height}px;
                ${editable?'cursor:pointer;':''}
                user-select:none;
                _pointer-events:none;
                `"
                @pointerdown="mousedownCur"
            ></div>

        </div>

    </div>
</template>

<script>
import domPickPointer from '../js/domPickPointer.mjs'
import convertColor from '../js/convertColor.mjs'


/**
 * 拾取面，於一個平面上以指標(滑鼠、觸控、觸控筆)挑選一個位置
 *
 * 本元件與顏色無關，只負責承載背景、繪製游標、接手勢並回報座標，背景由呼叫端以default slot傳入。
 * 可用於色票選色、影像熱點標註、XY參數控制盤等任何「於平面上挑一點」之場景。
 *
 * 為完全受控元件：自身不保存座標，游標位置一律由locLeft與locTop決定，不綁定事件即不會有任何反應。
 * 按下當下即發出一次pick，其後拖曳期間持續發出，放開或手勢被取消時發出pick-end。亦發出update:locLeft與update:locTop，故可用.sync綁定。
 *
 * 座標以px計，原點為感應面左上角，範圍為0至width-1與0至height-1(非width與height)，payload另附已換算之0至1比例。
 * axis為'x'時，pick之top與ratioTop恆為0，locTop亦不使用。
 *
 * 呼叫端之根節點必須直接是本元件，不得再包任何div，否則版面高度會多出inline-block之descender。
 *
 * @vue-prop {Number} [width=200] 輸入寬度數字，單位px，預設200
 * @vue-prop {Number} [height=20] 輸入高度數字，單位px，預設20
 * @vue-prop {Number} [cursorSize=7] 輸入游標尺寸數字，單位px，預設7
 * @vue-prop {String} [axis='x'] 輸入追蹤維度字串，可選'x'、'xy'，'x'為滿高直條游標且只追蹤橫向，'xy'為圓點游標且追蹤橫縱向，預設'x'
 * @vue-prop {Number} [locLeft=0] 輸入游標橫向位置數字，單位px，可用.sync雙向綁定，預設0
 * @vue-prop {Number} [locTop=0] 輸入游標縱向位置數字，單位px，僅axis為'xy'時使用，可用.sync雙向綁定，預設0
 * @vue-prop {String} [cursorColor='#fff'] 輸入游標內框顏色字串，預設'#fff'
 * @vue-prop {String} [cursorBorderColor='#666'] 輸入游標外框顏色字串，預設'#666'
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式布林值，預設true
 * @vue-event {Object} pick 使用者按下或拖曳時發射，帶出位置物件，格式為{left,top,ratioLeft,ratioTop,pointerType}，left與top單位px且已夾擠於0至width-1與0至height-1之間，ratioLeft與ratioTop為換算之0至1比例，pointerType為'mouse'、'touch'或'pen'，axis為'x'時top與ratioTop恆為0
 * @vue-event {Number} update:locLeft 使用者按下或拖曳時發射，帶出游標橫向位置數字，供.sync使用
 * @vue-event {Number} update:locTop 使用者按下或拖曳時發射，帶出游標縱向位置數字，供.sync使用，axis為'x'時不發射此事件
 * @vue-event {Object} pick-end 使用者放開或手勢被系統取消時發射，不帶參數；元件銷毀時不發射
 * @vue-slot {Object} default 輸入背景層，slot props為{ width, height, locLeft, locTop, editable }，本元件已提供滿版外框，slot內容不需自行定位
 */
export default {
    components: {
    },
    props: {
        width: {
            type: Number,
            default: 200,
        },
        height: {
            type: Number,
            default: 20,
        },
        cursorSize: {
            type: Number,
            default: 7,
        },
        axis: {
            type: String,
            default: 'x',
        },
        locLeft: {
            type: Number,
            default: 0,
        },
        locTop: {
            type: Number,
            default: 0,
        },
        cursorColor: {
            type: String,
            default: '#fff',
        },
        cursorBorderColor: {
            type: String,
            default: '#666',
        },
        editable: {
            type: Boolean,
            default: true,
        },
    },
    data: function() {
        return {

            pickPointer: null,

        }
    },
    mounted: function() {
        //console.log('mounted')

        let vo = this

        //pickPointer, 手勢通道; 須於mounted建立, 因domPickPointer於呼叫當下即掛window監聽
        let pickPointer = domPickPointer({
            onPick: (e) => {
                vo.pickByEvent(e)
            },
            onFree: () => {
                //事件名須為kebab-case: 公開範例頁為in-DOM template, 瀏覽器會把屬性名全部小寫,
                //  camelCase之事件名於該處會靜默失效(本庫已有一例: AppZoneWTextSuggest之@update:showPanel於產出頁變成@update:show-panel)
                vo.$emit('pick-end')
            },
        })

        //save
        vo.pickPointer = pickPointer

    },
    beforeDestroy: function() {
        //console.log('beforeDestroy')

        let vo = this

        //clear, 宿主可能以v-if於拖曳中被銷毀; clear內含解鎖與移除window監聽, 且不觸發pickEnd
        if (vo.pickPointer) {
            vo.pickPointer.clear()
        }

    },
    computed: {

        isPlanar: function() {
            let vo = this
            return vo.axis === 'xy'
        },

        curLocLeft: function() {
            let vo = this
            return vo.locLeft
        },

        curLocTop: function() {
            let vo = this
            return vo.locTop
        },

        useCursorColor: function() {
            let vo = this
            return convertColor(vo.cursorColor)
        },

        useCursorBorderColor: function() {
            let vo = this
            return convertColor(vo.cursorBorderColor)
        },

    },
    methods: {

        pickByEvent: function(e) {
            let vo = this

            //ele, 座標基準為內層定位容器, 不可用$el: 根層會吃到呼叫端fallthrough之style與class,
            //  一旦根層有padding或border, 以$el換算之座標便會整體偏移且無任何徵兆
            let ele = vo.$refs.divSurface
            if (!ele) {
                return
            }
            let rt = ele.getBoundingClientRect()

            let left = e.clientX - rt.left
            left = Math.min(Math.max(left, 0), (vo.width - 1))

            let top = 0
            if (vo.isPlanar) {
                top = e.clientY - rt.top
                top = Math.min(Math.max(top, 0), (vo.height - 1))
            }

            //ratio, 上限為width-1與height-1, 與夾擠一致
            let ratioLeft = 0
            if ((vo.width - 1) > 0) {
                ratioLeft = left / (vo.width - 1)
            }
            let ratioTop = 0
            if (vo.isPlanar && (vo.height - 1) > 0) {
                ratioTop = top / (vo.height - 1)
            }

            //pointerType
            let pointerType = (e.pointerType !== undefined) ? e.pointerType : 'mouse'

            //emit, 必須同步發出, 不得改為nextTick、setTimeout或debounce:
            //  呼叫端可能於本次事件內回吐值以解除其上鎖機制(如WColorSelectPanelHsva之lock), 延後會使其卡死
            vo.$emit('pick', { left, top, ratioLeft, ratioTop, pointerType })
            vo.$emit('update:locLeft', left)

            //update:locTop僅於二維時發出: 一維時top恆為0, 若無條件發出, 呼叫端以.sync綁定locTop之變數會被靜默歸零
            if (vo.isPlanar) {
                vo.$emit('update:locTop', top)
            }

        },

        //mousedownCur與contextmenuCur為模板綁定之入口
        //  不可於模板直接綁 pickPointer.down, 因其於mounted才建立, 首次render時尚不存在
        mousedownCur: function(e) {
            let vo = this

            //check, 唯讀時不得定值, 比照WSlider之pointerdownRow
            if (!vo.editable) {
                return
            }

            //check, 僅主鍵生效, 中鍵與右鍵不得定值, 比照WSlider之pointerdownRow; 觸控之button為0故不受影響
            if (e.button !== 0) {
                return
            }

            if (vo.pickPointer) {
                vo.pickPointer.down(e)
            }
        },

        contextmenuCur: function(e) {
            let vo = this
            if (vo.pickPointer) {
                vo.pickPointer.contextmenu(e)
            }
        },

    },
}
</script>

<style scoped>
</style>
