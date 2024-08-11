<template>
    <div
        :changeImages="changeImages"
        :changeStyle="changeStyle"
        v-domresize
        @domresize="resize"
    >

        <!-- 初始化無圖片時先撐開寬度 -->
        <div style="margin-top:-1px; height:1px;"></div>

        <WIconLoading v-if="loading"></WIconLoading>

        <div :style="`${loading?'heigh:0px; max-height:0px; overflow-y:hidden;':''}`">

            <div
                :style="`display:table-cell; vertical-align:top; margin:0; padding-left:${kimgs>0?space:0}px;`"
                :key="`c-${kimgs}`"
                v-for="(imgs,kimgs) in imageCols"
            >

                <div
                    :class="`${first?'':'fadeIn'}`"
                    :style="`margin:${kimg>0?space:0}px 0 0 0; width:${uesImageWidth}px; user-select:none; outline:none;`"
                    tabindex="0"
                    :key="`kimg-${kimg}`"
                    v-for="(img,kimg) in imgs"
                >

                    <div :style="`display:flex;`">
                        <img
                            :style="useImageStyle"
                            :src="img.src"
                            @keyup.enter="(e)=>{showImg(e,img)}"
                            @click="(e)=>{showImg(e,img)}"
                        >
                    </div>

                    <div style="background:rgba(0,0,0,0.65); padding:5px;">
                        <input
                            type="text"
                            class="inp"
                            style="font-size:0.8rem; color:#fff;"
                            _spellcheck="false"
                            readonly
                            :value="img.name"
                        >
                    </div>

                    <div style="background:rgba(200,200,200,0.5); padding:3px 5px;">
                        <input
                            type="text"
                            class="inp"
                            style="font-size:0.7rem; opacity:0.75;"
                            _spellcheck="false"
                            readonly
                            :value="img.src"
                        >
                    </div>

                </div>

            </div>

        </div>

    </div>
</template>

<script>
import each from 'lodash-es/each.js'
import map from 'lodash-es/map.js'
import get from 'lodash-es/get.js'
import times from 'lodash-es/times.js'
import size from 'lodash-es/size.js'
import isNumber from 'lodash-es/isNumber.js'
import importResources from 'wsemi/src/importResources.mjs'
import domShowImagesDyn from 'wsemi/src/domShowImagesDyn.mjs'
import ispint from 'wsemi/src/ispint.mjs'
import cint from 'wsemi/src/cint.mjs'
import isarr from 'wsemi/src/isarr.mjs'
import genPm from 'wsemi/src/genPm.mjs'
import genID from 'wsemi/src/genID.mjs'
import pmQueue from 'wsemi/src/pmQueue.mjs'
import domRemove from 'wsemi/src/domRemove.mjs'
import evem from 'wsemi/src/evem.mjs'
import debounce from 'wsemi/src/debounce.mjs'
import domResize from '../js/domResize.mjs'
import WIconLoading from './WIconLoading.vue'


//showViewer, 得要跨組件共用, 因彈出viewer會影響全部組件
let showViewer = false


function getFileName(str) {
    return str.split('\\').pop().split('/').pop()
}


/**
 * @vue-prop {Array} [pathItems=['詳見原始碼']] 輸入viewerjs組件js與css檔案位置字串陣列，預設詳見原始碼處props->pathItems->default
 * @vue-prop {Array} [images=[]] 輸入圖片網址陣列，預設[]
 * @vue-prop {Number} [imageWidth=300] 輸入圖片寬度數字，單位為px，預設300
 * @vue-prop {Number} [imageWidthSoft=null] 輸入自動計算最小需滿足的圖片寬度數字，單位為px，預設null
 * @vue-prop {Number} [colNum=null] 輸入組件寬度圖片欄位(水平向有幾張圖片)數量數字，預設null
 * @vue-prop {Number} [space=15] 輸入圖片間間距長度數字，單位為px，預設15
 * @vue-prop {Object} [imageStyle={}] 輸入圖片style物件，預設{}
 * @vue-prop {Object} [arrangeWhenFinish=false] 輸入是否於圖片載入完畢時依照原本圖片順序排序布林值，預設false
 * @vue-prop {Number} [numParallel=5] 輸入同時載入圖片數量數字，預設5
 * @vue-prop {Object} [opt={}] 輸入viewerjs設定物件，預設使用optOne或optMuti，若img僅一個則使用optOne，反之使用optMuti
 * @vue-prop {Boolean} [multiple=false] 輸入
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
            default: () => [ //預設值詳見 wsemi/src/domShowImagesDyn.mjs, 因此處有預載, 故所使用viewerjs的版本得相同
                'https://cdn.jsdelivr.net/npm/viewerjs@1.10.5/dist/viewer.min.css',
                'https://cdn.jsdelivr.net/npm/viewerjs@1.10.5/dist/viewer.min.js',
            ],
        },
        images: {
            type: Array,
            default: () => [],
        },
        imageWidth: {
            type: Number,
            default: 300,
        },
        imageWidthSoft: {
            type: Number,
            default: null,
        },
        colNum: {
            type: Number,
            default: null,
        },
        space: {
            type: Number,
            default: 15,
        },
        imageStyle: {
            type: Object,
            default: () => {},
        },
        arrangeWhenFinish: {
            type: Boolean,
            default: false,
        },
        numParallel: {
            type: Number,
            default: 5,
        },
        opt: {
            type: Object,
            default: () => {},
        },
    },
    data: function() {
        return {
            dbc: debounce(),

            loading: true,
            first: false,

            widthPanel: 0,
            heightPanel: 0,
            imageCols: [],
            imageLocs: [],
            useImageStyle: {},
            uesImageWidth: 0,

            imagesRes: [],

        }
    },
    mounted: function() {
        //console.log('mounted')

        let vo = this

        //importResources
        importResources(vo.pathItems)
            .then((res) => {
                //console.log('res', res)

                //loading
                vo.loading = false

            })

    },
    computed: {

        changeImages: function() {
            // console.log('computed changeImages')

            let vo = this

            let images = vo.images

            //refreshDebounce
            vo.refreshDebounce({ images })

            return ''
        },

        changeStyle: function() {
            // console.log('computed changeStyle')

            let vo = this

            //for trigger
            let widthPanel = vo.widthPanel
            let imageWidth = vo.imageWidth
            let imageStyle = vo.imageStyle
            let colNum = vo.colNum
            let space = vo.space

            //refreshDebounce
            vo.refreshDebounce({ widthPanel, imageWidth, imageStyle, colNum, space })

            return ''
        },

    },
    methods: {

        resize: function(msg) {
            // console.log('methods resize', msg)

            let vo = this

            //widthPanel
            let widthPanel = get(vo, '$el.offsetWidth', 0)

            //check, 因開啟viewer會改變視窗尺寸, 進而觸發resize, 會導致觸發changeStyle並重算圖片, 故得使用showViewer判斷是否為開啟viewer狀態, 避免重算圖片
            if (showViewer) {
                return
            }

            //check
            if (vo.widthPanel === widthPanel) {
                return
            }

            //save
            vo.widthPanel = widthPanel

        },

        getImgSize: function(src, uesImageWidth) {
            //console.log('methods getImgSize', src, uesImageWidth)

            // let vo = this

            //pm
            let pm = genPm()

            //id
            let id = `g${genID()}`

            //img
            let img = document.createElement('img')
            img.src = src
            img.style.maxWidth = `${uesImageWidth}px`

            //div
            let div = document.createElement('div')
            div.id = `img-${id}`
            div.style.position = 'absolute'
            div.style.width = 0
            div.style.height = 0
            div.style.opacity = 0
            div.style.overflow = 'hidden'
            div.appendChild(img)

            //body
            document.body.appendChild(div)

            //onload
            img.onload = function() {
                // setTimeout(() => {
                //     pm.resolve({
                //         src,
                //         id,
                //         w: img.clientWidth,
                //         h: img.clientHeight,
                //         err: null,
                //     })
                //     domRemove(div)
                // }, random(10, 2500))
                pm.resolve({
                    src,
                    id,
                    w: img.clientWidth,
                    h: img.clientHeight,
                    err: null,
                })
                domRemove(div)
            }

            //onerror
            img.onerror = function(err) {
                pm.reject({
                    src,
                    w: 0,
                    h: 0,
                    err,
                })
                domRemove(div)
            }

            return pm
        },

        getImgsSize: function(uesImageWidth, evKey) {
            //console.log('methods getImgsSize', uesImageWidth, evKey)

            let vo = this

            //ev
            let ev = evem()

            //pmQueue
            let pmq = pmQueue(vo.numParallel) //1次取得numParallel個圖片

            //getImgSize
            vo.imagesRes = []
            let j = -1
            each(vo.images, (src, k) => {
                pmq(vo.getImgSize, src, uesImageWidth)
                    .then((r) => {
                        j++

                        //ind
                        let ind = j
                        if (vo.arrangeWhenFinish) { //需依照原始順序排序
                            ind = k
                        }

                        //o
                        let o = {
                            ...r,
                            name: getFileName(r.src),
                            ind,
                            evKey,
                        }

                        //save imagesRes
                        vo.imagesRes[ind] = o

                        //emit
                        ev.emit('get', o)

                    })
                    .catch((err) => {
                        console.log(err)
                    })
            })

            return ev
        },

        refreshDebounce: function() {
            //console.log('methods refreshDebounce')

            let vo = this

            //dbc
            vo.dbc(() => {

                //refresh
                vo.refresh()

            })

        },

        refresh: function() {
            // console.log('methods refresh')

            let vo = this

            //uesImageWidth, colNum
            let uesImageWidth = null
            let colNum = null
            if (isNumber(vo.imageWidthSoft) && vo.imageWidthSoft > 0) {
                // console.log('優先使用imageWidthSoft計算colNum與imageWidth')

                //colNum
                colNum = (vo.widthPanel + vo.space) / (vo.imageWidthSoft + vo.space)
                colNum = Math.floor(colNum)
                colNum = Math.max(colNum, 1)
                // console.log('colNum', colNum)

                //uesImageWidth
                uesImageWidth = (vo.widthPanel - vo.space * (colNum - 1)) / colNum
                // console.log('uesImageWidth', uesImageWidth)

            }
            else if (ispint(vo.colNum)) {
                // console.log('次先使用colNum計算imageWidth')

                //colNum
                colNum = cint(vo.colNum)

                //uesImageWidth
                uesImageWidth = (vo.widthPanel - (colNum - 1) * vo.space) / colNum
                uesImageWidth = Math.floor(uesImageWidth)

            }
            else if (isNumber(vo.imageWidth) && vo.imageWidth > 0) {
                // console.log('最後使用imageWidth計算colNum')

                //uesImageWidth
                uesImageWidth = vo.imageWidth

                //colNum
                let wa = vo.widthPanel + vo.space
                wa = Math.max(wa, 0)
                let wis = uesImageWidth + vo.space
                wis = Math.max(wis, 1)
                colNum = Math.floor(wa / wis)

            }
            else {
                console.log('invalid colNum or imageWidth or imageWidthSoft', vo.colNum, vo.imageWidth, vo.imageWidthSoft)
                colNum = 4
                uesImageWidth = 300
            }
            vo.uesImageWidth = uesImageWidth

            //useImageStyle
            let useImageStyle = {
                ...vo.imageStyle,
                'max-width': `${uesImageWidth}px`,
                'user-select': 'none',
                'cursor': 'pointer',
                'outline': 'none',
            }
            vo.useImageStyle = useImageStyle

            function getMinHeightCol() {
                let hmin = vo.imageLocs[0]
                let ihmin = 0
                each(vo.imageLocs, (v, i) => {
                    if (hmin > v) {
                        hmin = v
                        ihmin = i
                    }
                })
                return ihmin
            }

            function resetImageColsAndLocs() {
                vo.imageCols = map(times(colNum), () => {
                    return []
                })
                vo.imageLocs = map(times(colNum), () => {
                    return 0
                })
            }

            function pushImage(img) {

                //check, 開發階段可能hot reload組件導致出現上一輪事件
                if (!isarr(vo.imageCols)) {
                    return
                }

                //getMinHeightCol
                let i = getMinHeightCol()

                try {

                    //push
                    vo.imageCols[i].push(img)

                    //update
                    vo.imageLocs[i] += img.h + vo.space + (29 + 24) //29是圖名區高度, 24是位址區高度

                }
                catch (err) { }

            }

            function build() {

                //pm
                let pm = genPm()

                //resetImageColsAndLocs
                resetImageColsAndLocs()

                //evKey
                let evKey = genID()

                //num
                let num = size(vo.images)

                //getImgsSize
                let ev = vo.getImgsSize(uesImageWidth, evKey)

                //pushImage
                let n = 0
                ev.on('get', (img) => {
                    // console.log('get', img)

                    //check
                    if (img.evKey !== evKey) {
                        return
                    }

                    //pushImage
                    pushImage(img)

                    //check
                    n++
                    if (n >= num) {

                        //first
                        vo.first = true

                        //arrange
                        if (vo.arrangeWhenFinish) {
                            arrange()
                        }

                        //resolve
                        pm.resolve()

                    }

                })

                return pm
            }

            function arrange() {

                //resetImageColsAndLocs
                resetImageColsAndLocs()

                //pushImage
                each(vo.imagesRes, (img) => {
                    pushImage(img)
                })

            }

            if (!vo.first) {
                // console.log('build')
                build()
            }
            else {
                // console.log('arrange')
                arrange()
            }

        },

        showImg: function(e, img) {
            // console.log('methods showImg', e, img)

            let vo = this

            //showViewer
            showViewer = true

            //domShowImagesDyn
            domShowImagesDyn(e.currentTarget, null, vo.opt, vo.pathItems)
                .finally(() => {

                    //showViewer
                    showViewer = false

                })

            //emit
            vo.$emit('click', img)

        },

    },
}
</script>

<style scoped>
.inp {
    font: inherit;
    height: 1rem;
    line-height: 1rem;
    width: 100%;
    margin: 0;
    padding: 0;
    display: block;
    background: transparent;
    border-style: none;
}
.inp:focus {
    outline: none;
}
.fadeIn {
    animation: aniFadeIn 0.3s;
}
@keyframes aniFadeIn
{
    from {opacity: 0;}
    to {opacity: 1}
}
</style>
