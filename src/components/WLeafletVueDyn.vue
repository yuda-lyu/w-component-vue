<template>
    <component ref="$self" :is="cmpName" :opt="opt"></component>
    <!-- ref=$self為供外部存取組件之用 -->
</template>

<script>
import importResources from 'wsemi/src/importResources.mjs'
import WIconLoading from './WIconLoading.vue'
import getVue from '../js/getVue.mjs'


/**
 * @vue-prop {Array} [pathItems=['詳見原始碼']] 輸入ag-grid與w-aggrid-vue組件js檔案位置字串陣列，預設詳見原始碼處props->pathItems->default
 * @vue-prop {Object} [opt={}] 輸入w-leaflet-vue設定物件，預設{}
 * @vue-prop {Array} [opt.center=[23.5, 121.1]] 輸入地圖顯示中點陣列，陣列為WGS84[緯度,經度]，預設[23.5, 121.1]
 * @vue-prop {Number} [opt.zoom=7] 輸入地圖顯示層級整數，預設7
 * @vue-prop {Object} [opt.panelBackgroundColor='rgba(255,255,255,0.95)'] 輸入各顯示資訊區背景顏色字串，預設'rgba(255,255,255,0.95)'
 * @vue-prop {Boolean} [opt.panelBaseMaps.show=true] 輸入底圖選擇區是否顯示布林值，預設true
 * @vue-prop {Array} [opt.panelBaseMaps.baseMaps=詳見程式碼] 輸入底圖選擇清單陣列，各元素為底圖設定物件，需提供欄位為name(底圖名稱字串)、url(底圖連結字串)、visible(是否顯示布林值)，預設值詳見程式碼的defBaseMaps預設值
 * @vue-prop {String} [opt.panelBaseMaps.position='topleft'] 輸入底圖選擇區位置字串，可選'topleft'、'topright'、'bottomleft'、'bottomright'，預設'topleft'
 * @vue-prop {Boolean} [opt.panelLabels.show=true] 輸入地圖資訊區是否顯示布林值，預設true
 * @vue-prop {String} [opt.panelLabels.position='topright'] 輸入地圖資訊區位置字串，可選'topleft'、'topright'、'bottomleft'、'bottomright'，預設'topright'
 * @vue-prop {String} [opt.panelLabels.title=''] 輸入地圖資訊區內標題字串，預設''
 * @vue-prop {String} [opt.panelLabels.lng='Longitude'] 輸入地圖資訊區內標注經度字串，預設'Longitude'
 * @vue-prop {String} [opt.panelLabels.lat='Latitude'] 輸入地圖資訊區內標注緯度字串，預設'Latitude'
 * @vue-prop {String} [opt.panelLabels.zoom='Zoom'] 輸入地圖資訊區內標注顯示層級字串，預設'Zoom'
 * @vue-prop {Array} [opt.panelLabels.useItems=['lng','lat','zoom']] 輸入地圖資訊區內呈現項目陣列，各元素給字串，'lng'代表經度，'lat'代表緯度，'zoom'代表顯示層級，預設['lng','lat','zoom']
 * @vue-prop {Boolean} [opt.panelZoom.show=true] 輸入縮放按鈕區是否顯示布林值，預設true
 * @vue-prop {String} [opt.panelZoom.position='bottomleft'] 輸入縮放按鈕區位置字串，可選'topleft'、'topright'、'bottomleft'、'bottomright'，預設'bottomleft'
 * @vue-prop {Boolean} [opt.panelItems.show=true] 輸入圖層顯隱切換區是否顯示布林值，預設true
 * @vue-prop {String} [opt.panelItems.position='topleft'] 輸入圖層顯隱切換區位置字串，可選'topleft'、'topright'、'bottomleft'、'bottomright'，預設'topleft'
 * @vue-prop {Boolean} [opt.panelItems.show=true] 輸入圖例區是否顯示布林值，預設true
 * @vue-prop {String} [opt.panelItems.position='bottomright'] 輸入圖例區位置字串，可選'topleft'、'topright'、'bottomleft'、'bottomright'，預設'bottomright'
 * @vue-prop {Number} [opt.panelItems.maxWidth=300] 輸入圖例區最大寬度數字，單位px，預設300
 * @vue-prop {Array} [opt.pointSets=[]] 輸入點集合陣列，各元素為物件，預設[]
 * @vue-prop {String} [opt.pointSets[i].title=''] 輸入第i個點集合的標題字串，預設為''
 * @vue-prop {String} [opt.pointSets[i].msg=''] 輸入第i個點集合的說明字串，預設為''
 * @vue-prop {Number} [opt.pointSets[i].order=null] 輸入第i個點集合的排序用數字，預設null
 * @vue-prop {String} [opt.pointSets[i].iconSrc=詳見程式碼] 輸入第i個點集合的顯示圖標來源字串，可使用base64格式或網址，預設為google map的點圖標，值詳見程式碼
 * @vue-prop {Array} [opt.pointSets[i].iconSize=[24,40]] 輸入第i個點集合的顯示圖標尺寸陣列，使用[寬,高]，長寬單位px，預設[24,40]
 * @vue-prop {Array} [opt.pointSets[i].iconAnchor=[iconSize[0]/2,iconSize[1]]] 輸入第i個點集合的顯示圖標的實際定位位置陣列，由圖標左上角代表實際定位點起算，往左移動為+x，往上移動為+y，x與y單位px，需給予[x,y]，預設[iconSize[0]/2,iconSize[1]]
 * @vue-prop {Array} [opt.pointSets[i].popupAnchor=[0,-iconSize[1]/1.5]] 輸入第i個點集合的顯示popup或tooltip時的指向位置陣列，由實際定位點起算，往右移動為+x，往下移動為+y，x與y單位px，需給予[x,y]，預設[0,-iconSize[1]/1.5]
 * @vue-prop {Array} [opt.pointSets[i].points=[]] 輸入第i個點集合的各點陣列，各元素為物件或為緯經度(注意非經緯度)陣列，也就是[{p1},{p2},...]或是[[p1lat,p1lng],[p2lat,p2lng],...]，預設為[]
 * @vue-prop {String} [opt.pointSets[i].points[j].title=''] 輸入第i個點集合的第j個點的標題字串，預設為''
 * @vue-prop {String} [opt.pointSets[i].points[j].msg=''] 輸入第i個點集合的第j個點的說明字串，預設為''
 * @vue-prop {Array} [opt.pointSets[i].points[j].latLng=[]] 輸入第i個點集合的第j個點的緯經度(注意非經緯度)座標陣列，也就是給予[lat,lng]，預設[]
 * @vue-prop {String} [opt.pointSets[i].points[j].iconSrc=詳見程式碼] 輸入第i個點集合的第j個點的顯示圖標來源字串，可使用base64格式或網址，預設為google map的點圖標，值詳見程式碼
 * @vue-prop {Array} [opt.pointSets[i].points[j].iconSize=[24,40]] 輸入第i個點集合的第j個點的顯示圖標尺寸陣列，使用[寬,高]，長寬單位px，預設[24,40]
 * @vue-prop {Array} [opt.pointSets[i].points[j].iconAnchor=[iconSize[0]/2,iconSize[1]]] 輸入第i個點集合的第j個點的顯示圖標的實際定位位置陣列，由圖標左上角代表實際定位點起算，往左移動為+x，往上移動為+y，x與y單位px，需給予[x,y]，預設[iconSize[0]/2,iconSize[1]]
 * @vue-prop {Array} [opt.pointSets[i].points[j].popupAnchor=[0,-iconSize[1]/1.5]] 輸入第i個點集合的第j個點的顯示popup或tooltip時的指向位置陣列，由實際定位點起算，往右移動為+x，往下移動為+y，x與y單位px，需給予[x,y]，預設[0,-iconSize[1]/1.5]
 * @vue-prop {Function} [opt.defPointSetsClick=function(){}] 輸入全域點集合的click呼叫函數，可給予函數接收點擊事件，預設為function(){}
 * @vue-prop {Function} [opt.pointSets[i].click=function(){}] 輸入第i個點集合的click呼叫函數，預設為function(){}
 * @vue-prop {Function} [opt.pointSets[i].points[j].click=function(){}] 輸入第i個點集合的第j個點的click呼叫函數，預設為function(){}
 * @vue-prop {Function} [opt.defPointSetsPopup=function(){}] 輸入全域點集合的popup內容產生函數，可基於傳入資料回傳顯示文字或html內容，預設為function(){}
 * @vue-prop {Function} [opt.pointSets[i].popup=function(){}] 輸入第i個點集合的popup內容產生函數，可基於傳入資料回傳顯示文字或html內容，預設為function(){}
 * @vue-prop {Function} [opt.pointSets[i].points[j].popup=function(){}] 輸入第i個點集合的第j個點的popup內容產生函數，可基於傳入資料回傳顯示文字或html內容，預設為function(){}
 * @vue-prop {Function} [opt.defPointSetsTooltip=function(){}] 輸入全域點集合的tooltip內容產生函數，可基於傳入資料回傳顯示文字或html內容，預設為function(){}
 * @vue-prop {Function} [opt.pointSets[i].tooltip=function(){}] 輸入第i個點集合的tooltip內容產生函數，可基於傳入資料回傳顯示文字或html內容，預設為function(){}
 * @vue-prop {Function} [opt.pointSets[i].points[j].tooltip=function(){}] 輸入第i個點集合的第j個點的tooltip內容產生函數，可基於傳入資料回傳顯示文字或html內容，預設為function(){}
 * @vue-prop {Array} [opt.polygonSets=[]] 輸入多邊形集合陣列，各元素為物件，預設[]
 * @vue-prop {String} [opt.polygonSets[i].title=''] 輸入第i個多邊形集合的標題字串，預設為''
 * @vue-prop {String} [opt.polygonSets[i].msg=''] 輸入第i個多邊形集合的說明字串，預設為''
 * @vue-prop {Number} [opt.polygonSets[i].order=null] 輸入第i個多邊形集合的排序用數字，預設null
 * @vue-prop {String} [opt.polygonSets[i].lineColor='rgba(0,150,255,1)'] 輸入第i個多邊形集合的框線顏色字串，預設為'rgba(0,150,255,1)'
 * @vue-prop {String} [opt.polygonSets[i].lineColorHover='rgba(0,150,255,1)'] 輸入滑鼠移入時第i個多邊形集合的框線顏色字串，預設為'rgba(0,150,255,1)'
 * @vue-prop {Number} [opt.polygonSets[i].lineWidth=3] 輸入第i個多邊形集合的框線寬度數字，預設為3
 * @vue-prop {Number} [opt.polygonSets[i].lineWidthHover=3] 輸入滑鼠移入時第i個多邊形集合的框線寬度數字，預設為3
 * @vue-prop {String} [opt.polygonSets[i].fillColor='rgba(0,150,255,0.25)'] 輸入第i個多邊形集合的填充顏色字串，預設為'rgba(0,150,255,0.25)'
 * @vue-prop {String} [opt.polygonSets[i].fillColorHover='rgba(0,150,255,0.25)'] 輸入滑鼠移入時第i個多邊形集合的填充顏色字串，預設為'rgba(0,150,255,0.25)'
 * @vue-prop {Function} [opt.defPolygonSetsClick=function(){}] 輸入全域多邊形集合的click呼叫函數，可給予函數接收點擊事件，預設為function(){}
 * @vue-prop {Function} [opt.polygonSets[i].click=function(){}] 輸入第i個多邊形集合的click呼叫函數，預設為function(){}
 * @vue-prop {Function} [opt.defPolygonSetsPopup=function(){}] 輸入全域多邊形集合的popup內容產生函數，可基於傳入資料回傳顯示文字或html內容，預設為function(){}
 * @vue-prop {Function} [opt.polygonSets[i].popup=function(){}] 輸入第i個多邊形集合的popup內容產生函數，可基於傳入資料回傳顯示文字或html內容，預設為function(){}
 * @vue-prop {Function} [opt.defPolygonSetsTooltip=function(){}] 輸入全域多邊形集合的tooltip內容產生函數，可基於傳入資料回傳顯示文字或html內容，預設為function(){}
 * @vue-prop {Function} [opt.polygonSets[i].tooltip=function(){}] 輸入第i個多邊形集合的tooltip內容產生函數，可基於傳入資料回傳顯示文字或html內容，預設為function(){}
 * @vue-prop {Array} [opt.contourSets=[]] 輸入等值線集合陣列，各元素為物件，預設[]
 * @vue-prop {Number} [opt.contourSets[i].order=null] 輸入第i個等值線集合的排序用數字，預設null
 * @vue-prop {Object} [opt.contourSets[i].gradient=詳見程式碼] 輸入第i個等值線集合的色階(color map)設定物件，鍵範圍0至1，值為對應之顏色，於各鍵之間則採用內插取色，預設值詳見程式碼
 * @vue-prop {Boolean} [opt.contourSets[i].changeStyleWhenHover=true] 輸入第i個等值線集合的是否使用滑鼠移入時切換style效果布林值，預設true
 * @vue-prop {Number} [opt.contourSets[i].legendNumDig=null] 輸入第i個等值線集合的對圖例內數字取小數位數，null代表不取，預設null
 * @vue-prop {Function} [opt.contourSets[i].legendTextFormater=null] 輸入第i個等值線集合的對圖例內各色階的內容產生函數，可基於傳入資料回傳顯示文字或html內容，null代表不取，預設null
 * @vue-prop {Array} [opt.contourSets[i].polygonClipOuter=[]] 輸入第i個等值線集合的剔除以外之多邊形(polygon，深度為2，例如[[p1lat,p1lng],[p2lat,p2lng],...])陣列，預設[]
 * @vue-prop {Array} [opt.contourSets[i].polygonsClipInner=[]] 輸入第i個等值線集合的剔除以內之複數多邊形(multi-polygon，深度為3，例如[[[p1lat,p1lng]],[[p2lat,p2lng]],...])陣列，預設[]
 * @vue-prop {Array} [opt.contourSets[i].polygonsContainInner=[]] 輸入第i個等值線集合的保留以內之複數多邊形(multi-polygon，深度為3，例如[[[p1lat,p1lng]],[[p2lat,p2lng]],...])陣列，預設[]
 * @vue-prop {Function} [opt.defContourSetsClick=function(){}] 輸入全域等值線集合的click呼叫函數，可給予函數接收點擊事件，預設為function(){}
 * @vue-prop {Function} [opt.ContourSets[i].click=function(){}] 輸入第i個等值線集合的click呼叫函數，預設為function(){}
 * @vue-prop {Function} [opt.defContourSetsPopup=function(){}] 輸入全域等值線集合的popup內容產生函數，可基於傳入資料回傳顯示文字或html內容，預設為function(){}
 * @vue-prop {Function} [opt.ContourSets[i].popup=function(){}] 輸入第i個等值線集合的popup內容產生函數，可基於傳入資料回傳顯示文字或html內容，預設為function(){}
 * @vue-prop {Function} [opt.defContourSetsTooltip=function(){}] 輸入全域等值線集合的tooltip內容產生函數，可基於傳入資料回傳顯示文字或html內容，預設為function(){}
 * @vue-prop {Function} [opt.ContourSets[i].tooltip=function(){}] 輸入第i個等值線集合的tooltip內容產生函數，可基於傳入資料回傳顯示文字或html內容，預設為function(){}
 */
export default {
    components: {
        WIconLoading,
    },
    props: {
        pathItems: {
            type: Array,
            default: () => [
                'https://cdn.jsdelivr.net/npm/w-leaflet-vue@1.0.2/dist/w-leaflet-vue.umd.js',
            ],
        },
        opt: {
            type: Object,
            default: () => {},
        },
    },
    data: function() {
        return {
            cmpName: 'WIconLoading',
        }
    },
    mounted: function() {
        //console.log('mounted')

        let vo = this

        //importResources
        importResources(vo.pathItems)
            .then((res) => {
                //console.log('res', res)
                if (res !== 'loaded') {

                    //cmp
                    let cmp = window['w-leaflet-vue']
                    if (cmp.default) {
                        cmp = cmp.default
                    }

                    //use
                    getVue().component('w-leaflet-vue', cmp)

                }
                vo.cmpName = 'w-leaflet-vue'
            })

    },
    computed: {
    },
    methods: {
    },
}
</script>

<style scoped>
</style>
