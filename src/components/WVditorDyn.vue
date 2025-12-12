<template>
    <div
        :changeValue="changeValue"
        :changeEditable="changeEditable"
        :changeShowPopper="changeShowPopper"
    >

        <WIconLoading v-if="loading"></WIconLoading>

        <div
            class="WVditorFix"
            :style="`${loading?'heigh:0px; max-height:0px; overflow-y:hidden;':''}`"
        >

            <div ref="divVditor"></div>

            <div
                ref="divContent"
                class="WPopperFix"
                :style="`z-index:${cmpZIndex};`"
                v-show="showPopper"
                v-domresize
                @domresize="updatePopper"
            >
                <div
                    :style="`${contentStyle} background:${useHintBackgroundColor}; ${useHintBorderRadius} ${useHintShadow}`"
                    v-if="showPopper"
                >
                    <slot
                        name="content"
                        :hint="useHint"
                        :funInsert="(v)=>{insertValue(v,'slot')}"
                        :funHide="()=>{updateValue(false,'slot')}"
                    ></slot>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
import get from 'lodash-es/get.js'
import each from 'lodash-es/each.js'
import last from 'lodash-es/last.js'
import pull from 'lodash-es/pull.js'
import isNumber from 'lodash-es/isNumber.js'
import genID from 'wsemi/src/genID.mjs'
import genPm from 'wsemi/src/genPm.mjs'
import replace from 'wsemi/src/replace.mjs'
import waitFun from 'wsemi/src/waitFun.mjs'
import isfun from 'wsemi/src/isfun.mjs'
import isestr from 'wsemi/src/isestr.mjs'
import iseobj from 'wsemi/src/iseobj.mjs'
import isearr from 'wsemi/src/isearr.mjs'
import isEle from 'wsemi/src/isEle.mjs'
import importResExt from '../js/importResExt.mjs'
import convertColor from '../js/convertColor.mjs'
import domResize from '../js/domResize.mjs'
import BuildPopper from '../js/buildPopper.mjs'
import WIconLoading from './WIconLoading.vue'


//tootip與popup不共用已出現項目清單, 避免互相影響
let kpRespList = {
    tooltip: [],
    popup: [],
}
function addTriggerMode(mode, mmkey) {
    kpRespList[mode].push(mmkey)
}
function checkTriggerEffMode(mode, mmkey) {
    return last(kpRespList[mode]) === mmkey
}
function removeTriggerMode(mode, mmkey) {
    pull(kpRespList[mode], mmkey)
}


let def_settings = {
    mode: 'wysiwyg', //sv: 雙欄位, ir:即時渲染, wysiwyg:所見即所得
    // debugger: true,
    // height: 500,
    // placeholder: '請輸入Markdown格式文字',
    theme: 'classic',
    lang: 'zh_TW',
    counter: {
        enable: false,
        type: 'markdown',
    },
    tab: '\t',
    typewriterMode: true,
    toolbarConfig: {
        pin: true
    },
    cache: {
        enable: false
    },
    toolbar: [
        // 'emoji',
        'headings',
        'bold',
        'italic',
        'strike',
        'link',
        '|',
        'list',
        'ordered-list',
        // 'check',
        'outdent',
        'indent',
        '|',
        'quote',
        'line',
        // 'code',
        // 'inline-code',
        'insert-before',
        'insert-after',
        '|',
        // 'record',
        'table',
        '|',
        'undo',
        'redo',
        '|',
        'edit-mode',
        // 'content-theme',
        // 'code-theme',
        'export',
        // {
        //     name: 'more',
        //     toolbar: [
        //         'fullscreen',
        //         'both',
        //         // 'preview',
        //         // 'info',
        //         // 'help',
        //     ],
        // },
        // {
        //     hotkey: '⇧⌘S',
        //     name: 'sponsor',
        //     tipPosition: 's',
        //     tip: 'toolbar icon tip',
        //     className: 'right',
        //     icon: '<svg></svg>',
        //     click: () => {
        //         console.log('toolbar click')
        //     },
        // },
    ],
    hint: {
        parse: true,
        delay: 0,
        extend: [
            // {
            //     key: 'md',
            //     hint: async (value) => {
            //         console.log('hint.extend hint', value)
            //         let ts = [
            //             {
            //                 html: '<h6>md1</h6>',
            //                 value: '[google](https://www.google.com/)',
            //             },
            //             {
            //                 html: `<div>md2 <span style="color:#f26;">test2</span></div>`,
            //                 value: 'vvv2',
            //             },
            //         ]
            //         return ts
            //     },
            // },
        ],
    },
    // input: (msg) => {
    //     console.log('input', msg)
    // },
    preview: {
        maxWidth: 1e10,
        delay: 0,
        actions: [], //['desktop', 'tablet', 'mobile', 'mp-wechat', 'zhihu'] //移除分享按鈕
        hljs: {
            style: 'monokai',
            lineNumber: true
        },
        // parse: (ele) => { //預覽回調
        //     console.log('preview.parse', ele) //僅分割預覽之預覽區有效
        //     return ele
        // },
        // transform: (h) => { //渲染之前回調
        //     console.log('preview.transform', h) //僅分割預覽之預覽區有效
        //     return h
        // },
    },
}


/**
 * @vue-prop {Array} [pathItems=['詳見原始碼']] 輸入vditor套件的css與js檔案位置字串陣列，預設詳見原始碼處props->pathItems->default
 * @vue-prop {String} [value=''] 輸入富文本字串，預設為''
 * @vue-prop {Number} [height=250] 輸入高度數字，單位為px，預設為250
 * @vue-prop {Object} [settings={}] 輸入vditor設定物件，預設值為{}，內部預設值詳見vditor原始碼
 * @vue-prop {String|Array} [keyHint=''] 輸入打字時調用提示區字串或陣列，例如若給予'ht'，則輸入「/ ht」或「@ ht」則可顯示提示區，或給予['ht','kw']陣列，預設為''
 * @vue-prop {Number} [hintBorderRadius=4] 輸入提示窗框圓角度數字，單位為px，預設4
 * @vue-prop {String} [hintBackgroundColor='rgba(60,60,60,0.75)'] 輸入提示窗背景顏色字串，預設'rgba(60,60,60,0.75)'
 * @vue-prop {Boolean} [hintShadow=true] 輸入提示窗是否顯示陰影布林值，預設true
 * @vue-prop {String} [hintShadowStyle=''] 輸入提示窗陰影顏色字串，預設值詳見props
 * @vue-prop {Number} [cmpZIndex=3000] 輸入提示窗使用z-index數字，預設3000
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式布林值，預設true
 */
export default {
    directives: {
        domresize: domResize(),
    },
    components: {
        WIconLoading,
    },
    props: {
        pathItems: {
            type: Array,
            default: () => [
                'https://cdn.jsdelivr.net/npm/vditor@3.10.5/dist/index.css',
                'https://cdn.jsdelivr.net/npm/vditor@3.10.5/dist/index.min.js',
                // 'https://cdn.jsdelivr.net/npm/vditor@3.11.2/dist/index.css',
                // 'https://cdn.jsdelivr.net/npm/vditor@3.11.2/dist/index.min.js', //此版有問題, 待之後新版更新
            ],
        },
        value: {
            type: String,
            default: '',
        },
        height: {
            type: Number,
            default: 250,
        },
        settings: {
            type: Object,
            default: () => {},
        },
        keyHint: {
            type: [String, Array],
            default: '',
        },
        hintBorderRadius: {
            type: Number,
            default: 4,
        },
        hintBackgroundColor: {
            type: String,
            default: '#fff',
        },
        hintShadow: {
            type: Boolean,
            default: true,
        },
        hintShadowStyle: {
            type: String,
            default: '0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12)',
        },
        cmpZIndex: {
            type: Number,
            default: 3000,
        },
        editable: {
            type: Boolean,
            default: true,
        },
    },
    data: function() {
        return {

            loading: true,

            mmkey: genID(), //beforeMount內無法變更data, mounted內會晚於computed, 故優先放於data生成
            // mmkey: (() => {
            //     let id = genID()
            //     console.log('data gen mmkey', id)
            //     return id
            // })(),

            bp: null,

            mode: 'popup', //tooltip, popup
            kind: 'click', //hover, click
            isolated: true, //因完全使用事件觸發, 故isolated=true
            transitionTime: 200,
            triggerWidth: null,
            contentStyle: '',

            contentEditor: null,

            showPopper: false,
            placement: 'bottom-start', //定位左下
            placementDistX: 0,
            placementDistY: -15,

            valueTrans: '',

            useHint: '',

        }
    },
    mounted: function() {
        //console.log('mounted')

        let vo = this

        async function core() {

            //wait $el
            await waitFun(() => {
                return vo.$el !== undefined
            })

            //importResExt
            await importResExt(vo.pathItems)
            // console.log('res', res)

            //Vditor
            let Vditor = window['Vditor']
            // console.log('Vditor', Vditor)

            //wait divVditor, 因loading=false之後才能開始顯示divVditor, 故須等待divVditor是否出現
            await waitFun(() => {
                let ele = get(vo, '$refs.divVditor')
                return isEle(ele)
            })

            //divVditor
            let divVditor = vo.$refs.divVditor
            // console.log('divVditor', divVditor)

            //contentEditor
            vo.contentEditor = new Vditor(divVditor, vo.useSettings)
            // console.log('contentEditor', vo.contentEditor)

            //wait contentEditor, 因new Vditor後會需一小段時間初始化, 故須等待vditor來判斷vditor是否初始化完成
            await waitFun(() => {
                // let getCurrentMode = get(vo, 'contentEditor.getCurrentMode') //因contentEditor.getCurrentMode是原型已為function, 故無法用此做判斷
                // return isfun(getCurrentMode)
                let v = get(vo, 'contentEditor.vditor')
                return iseobj(v)
            })
            // console.log(`vo.contentEditor.getCurrentMode()`, vo.contentEditor.getCurrentMode())

            //loading, 組件不依照loading顯隱, loading為依賴、組件完成載入、組件初始化後才改為false
            vo.loading = false

            //update valueTrans, 於mounted進行第1次賦值觸發, 故直接更新valueTrans, 避免emit出去再進來更新
            vo.valueTrans = vo.value

            //setValue, 於mounted進行第1次賦值, 之後給computed偵測修改
            vo.contentEditor.setValue(vo.value)

            // //emit, 於組件內初始化第一次觸發故不須emit
            // vo.$emit('input', value)

        }

        //core
        core()
            .catch((err) => {
                console.log(err)
            })

        //BuildPopper
        let keyShow = 'showPopper'
        let evNameValue = 'change-show-popper'
        vo.bp = new BuildPopper(vo,
            vo.funGetDivTrigger,
            vo.funGetDivContent,
            keyShow,
            evNameValue,
            {
                addTriggerMode,
                checkTriggerEffMode,
                removeTriggerMode,
            })

        //監聽evNameValue
        vo.bp.on(evNameValue, (showPopper) => {
            // console.log(vo.mmkey, 'bp.on', evNameValue, showPopper)
            if (!showPopper) { //僅處理隱藏事件
                vo.useHint = '' //隱藏時清空useHint
            }
        })

        //mounted
        vo.bp.mounted()

    },
    beforeDestroy: function() {
        //console.log('beforeDestroy')

        let vo = this

        //destroy
        if (vo.contentEditor) {
            vo.contentEditor.destroy()
            vo.contentEditor = null
        }

        //destroy
        if (vo.bp) {
            vo.bp.destroy()
        }

    },
    computed: {

        keyHints: function() {
            let vo = this

            //hts
            let hts = vo.keyHint
            if (isestr(vo.keyHint)) {
                hts = [vo.keyHint]
            }
            // console.log('hts', hts)

            return hts
        },

        useSettings: function() {
            //console.log('computed useSettings')

            let vo = this

            let st = {
                ...def_settings,
                ...vo.settings,
            }
            // console.log('st', st)

            //add height
            st.height = vo.height

            //extend
            let extend = []
            each(vo.keyHints, (v) => {
                if (!isestr(v)) {
                    return true //跳出換下一個
                }
                let ht = {
                    key: v,
                    hint: async (value) => {
                        // console.log('hint.extend hint', value)
                        let ts = [
                            {
                                html: `<div name="tar" tpht="${v}" style="display:none;"></div>`,
                                value: '',
                            },
                        ]
                        return ts
                    },
                }
                extend.push(ht)
            })
            st.hint.extend = extend
            // console.log('st.hint.extend', st.hint.extend)

            //add input
            st.input = (value) => {
                // console.log(vo.mmkey, 'input', value)

                //update valueTrans, 由組件內input觸發, 故直接更新valueTrans, 避免emit出去再進來更新
                vo.valueTrans = value

                //detectAndShowHint
                vo.detectAndShowHint(value)

                //emit
                vo.$emit('input', value)

            }

            // console.log('st', st)
            return st
        },

        changeValue: function() {
            // console.log('computed changeValue')

            let vo = this

            //trigger
            let value = vo.value

            //relaValue
            vo.relaValue(value)

            return ''
        },

        changeEditable: function() {
            //console.log('computed changeEditable')

            let vo = this

            //trigger
            let editable = vo.editable

            //relaEditable
            vo.relaEditable(editable)

            return ''
        },

        changeShowPopper: function () {
            //console.log('computed changeShowPopper')

            let vo = this

            //trigger
            let showPopper = vo.showPopper
            let isolated = vo.isolated

            //updateValue
            if (!isolated) {
                vo.updateValue(showPopper, 'changeShowPopper')
            }

            return ''
        },

        useHintBorderRadius: function() {
            //console.log('computed useHintBorderRadius')

            let vo = this

            if (isNumber(vo.hintBorderRadius)) {
                return `border-radius:${vo.hintBorderRadius}px;`
            }
            return ''
        },

        useHintBackgroundColor: function() {
            //console.log('computed useHintBackgroundColor')

            let vo = this

            return convertColor(vo.hintBackgroundColor)
        },

        useHintShadow: function() {
            //console.log('computed useHintShadow')

            let vo = this

            //check
            if (!vo.hintShadow) {
                return ''
            }

            //hintShadowStyle
            let s = replace(vo.hintShadowStyle, ';', '')
            if (s !== '') {
                return `box-shadow:${s};`
            }

            return ''
        },

    },
    methods: {

        relaValue: function() {

            let vo = this

            //check
            //避免使用waitFun, 因多組件value非同步更新, 會導致打字時或hint時連動觸發更新value問題
            //第1次調用value為空字串, 第2次loading可能為true, 此處統一處理loading=false情形
            if (vo.loading) {
                return
            }

            //check, 避免多組件時使用hint會反覆觸發
            if (vo.value === vo.valueTrans) {
                return
            }

            //update valueTrans, 由組件外變更value觸發, 故須再另外儲存至valueTrans
            vo.valueTrans = vo.value

            //setValue
            vo.contentEditor.setValue(vo.value)

            // //emit, 由外部變更value觸發故不須emit
            // vo.$emit('input', value)

        },

        relaEditable: function() {

            let vo = this

            async function core() {

                //wait
                await waitFun(() => {
                    return !vo.loading
                })

                //editable
                if (vo.editable) {
                    vo.contentEditor.enable()
                }
                else {
                    vo.contentEditor.disabled()
                }

            }

            //core
            core()
                .catch((err) => {
                    console.log(err)
                })

        },

        funGetDivTrigger: function() {
            let vo = this
            let divTrigger = null
            try {
                divTrigger = vo.$el.querySelector('[class="vditor-hint"]')
            }
            catch (err) {}
            return divTrigger
        },

        funGetDivContent: function() {
            let vo = this
            let divContent = get(vo, '$refs.divContent', null)
            return divContent
        },

        findAnchor: function() {
            let vo = this

            let pm = genPm()

            let n = 0
            let t = setInterval(() => {
                n++

                //funGetDivTrigger
                let ele = vo.funGetDivTrigger()

                //check
                if (isEle(ele)) {
                    clearInterval(t)
                    pm.resolve(ele)
                }

                //check
                if (n > 100) {
                    clearInterval(t)
                    pm.reject('can not find the ele')
                }

            }, 50)

            return pm
        },

        getUseHint: function(divTrigger) {
            // let vo = this

            //tpht
            let tpht = ''
            try {
                tpht = divTrigger.querySelector('div[name="tar"]').getAttribute('tpht')
            }
            catch (err) {}

            return tpht
        },

        detectAndShowHint: function(v) {
            let vo = this

            //check
            if (!isearr(vo.keyHints)) {
                return
            }

            //findAnchor
            vo.findAnchor()
                .then((divTrigger) => {
                    // console.log('divTrigger', divTrigger)

                    //check
                    if (divTrigger.style.display === 'none') {
                        return
                    }
                    // console.log('divTrigger', divTrigger)

                    //完全透明
                    // divTrigger.style.opacity = 0 //因顯示之後再偵測隱藏會有顯隱問題, 使用者體驗不佳, 改為使用css強制隱藏

                    //顯示時取得與儲存useHint
                    vo.useHint = vo.getUseHint(divTrigger)
                    // console.log('divTrigger', divTrigger, 'useHint', vo.useHint)

                    //evShow
                    vo.evShow('click', 'call')

                    //blur, 編輯器移除焦點, 避免使用者此時通過鍵盤刪除或再變更
                    vo.contentEditor.blur()

                })
                .catch((err) => {
                    console.log(err)
                })

        },

        evShow: function(kind, from) {
            let vo = this
            let f = get(vo, 'bp.evShow')
            if (isfun(f)) {
                vo.bp.evShow(kind, from)
            }
        },

        evHide: function(kind, from) {
            let vo = this
            let f = get(vo, 'bp.evHide')
            if (isfun(f)) {
                vo.bp.evHide(kind, from)
            }
        },

        updatePopper: function(msg, from) {
            let vo = this
            let f = get(vo, 'bp.updatePopper')
            if (isfun(f)) {
                vo.bp.updatePopper(msg, from)
            }
        },

        updateValue: function(value, from) {
            let vo = this
            let f = get(vo, 'bp.updateValue')
            if (isfun(f)) {
                vo.bp.updateValue(value, from)
            }
        },

        insertValue: function(v, from) {
            let vo = this
            let f = get(vo, 'contentEditor.insertValue')
            if (isfun(f)) {

                //insertValue
                vo.contentEditor.insertValue(v)

                //取得當前value
                let value = vo.contentEditor.getValue()

                //取代hint符號
                // console.log('value(ori)', value)
                each(vo.keyHints, (keyHint) => {
                    value = value.replaceAll(`/ ${keyHint}`, '')
                })
                // console.log('value(replace)', value)

                //update valueTrans, 由組件內insertValue觸發, 故直接更新valueTrans, 避免emit出去再進來更新
                vo.valueTrans = vo.value

                //setValue
                vo.contentEditor.setValue(value)

                //emit
                vo.$emit('input', value)

            }
        },

    },
}
</script>

<style scoped>
.WPopperFix[data-popper-reference-hidden] {
    visibility: hidden;
    pointer-events: none;
}
.WVditorFix >>> .vditor-reset {
    font-size: inherit;
}
.WVditorFix >>> div.vditor-hint:has(div[name="tar"]) { /* 使觸發區divTrigger(原本彈窗)完全透明 */
    visibility: hidden;
    pointer-events: none;
    outline: none;
}
</style>

