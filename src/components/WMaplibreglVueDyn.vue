<template>
    <!-- ref=$self為供外部存取組件之用 -->
    <component ref="$self" :is="cmpName" :opt="opt">

        <!-- contour -->
        <template v-slot:contour-tooltip="props">
            <slot name="contour-tooltip" v-bind="props"></slot>
        </template>
        <template v-slot:contour-popup="props">
            <slot name="contour-popup" v-bind="props"></slot>
        </template>

        <!-- geojson -->
        <template v-slot:geojson-tooltip="props">
            <slot name="geojson-tooltip" v-bind="props"></slot>
        </template>
        <template v-slot:geojson-popup="props">
            <slot name="geojson-popup" v-bind="props"></slot>
        </template>

        <!-- polygon -->
        <template v-slot:polygon-tooltip="props">
            <slot name="polygon-tooltip" v-bind="props"></slot>
        </template>
        <template v-slot:polygon-popup="props">
            <slot name="polygon-popup" v-bind="props"></slot>
        </template>

        <!-- polyline -->
        <template v-slot:polyline-tooltip="props">
            <slot name="polyline-tooltip" v-bind="props"></slot>
        </template>
        <template v-slot:polyline-popup="props">
            <slot name="polyline-popup" v-bind="props"></slot>
        </template>

        <!-- point -->
        <template v-slot:point-tooltip="props">
            <slot name="point-tooltip" v-bind="props"></slot>
        </template>
        <template v-slot:point-popup="props">
            <slot name="point-popup" v-bind="props"></slot>
        </template>


    </component>
</template>

<script>
import importResExt from '../js/importResExt.mjs'
import getVue from '../js/getVue.mjs'
import WIconLoading from './WIconLoading.vue'


/**
 * @vue-prop {Array} [pathItems=['base:w-maplibregl-vue']] 輸入w-maplibregl-vue組件js檔案位置字串陣列，maplibre-gl與其css皆已打包於w-maplibregl-vue內故無須另行載入，預設['base:w-maplibregl-vue']
 * @vue-prop {Object} opt 輸入資料設定物件
 * @vue-prop {Array} [opt.center=[23.5, 121.1]] 輸入地圖顯示中點陣列，陣列為WGS84[緯度,經度]，預設[23.5, 121.1]
 * @vue-prop {Number} [opt.zoom=6] 輸入地圖顯示層級數字，會夾在1~18之間，預設6
 * @vue-prop {String} [opt.panelBackgroundColor='rgba(255,255,255,0.95)'] 輸入各顯示資訊區背景顏色字串，預設'rgba(255,255,255,0.95)'
 * @vue-prop {String} [opt.projection=''] 輸入地圖投影方式字串，''代表自動(顯示層級≤8用球面globe、以上用平面mercator)，可選'globe'、'mercator'，預設''
 * @vue-prop {Boolean} [opt.displayPopupOnlyone=true] 輸入是否同時只顯示一個popup布林值，開啟時點擊新圖徵會關閉其他已開的popup，預設true
 * @vue-prop {Boolean} [opt.displayOrderByType=true] 輸入是否依圖徵型別面積序堆疊布林值，開啟時圖層由上而下為點>線>面>等值線>影像，且點擊命中最上層型別(小面積優先)，預設true
 * @vue-prop {String} [opt.popupPosition='top'] 輸入popup預設彈出方向字串，可選'top'、'bottom'、'left'、'right'，靠近地圖邊緣時會自動翻轉，預設'top'
 * @vue-prop {String} [opt.tooltipPosition='left'] 輸入tooltip預設彈出方向字串，可選'top'、'bottom'、'left'、'right'，預設'left'
 * @vue-prop {Array} [opt.panelsOrder=詳見程式碼] 輸入各角落內面板的堆疊順序陣列，預設值詳見程式碼的defPanelsOrder
 * @vue-prop {Object} [opt.popupResize={}] 輸入popup可拖曳調整大小的設定物件，預設{}
 * @vue-prop {Boolean} [opt.popupResize.resizable=false] 輸入是否開啟popup四邊/四角拖曳調整大小布林值，false時為純穿透、行為與未啟用一致，預設false
 * @vue-prop {Array} [opt.popupResize.resizeModes=詳見程式碼] 輸入可拖曳的把手方向陣列，元素可為'top'、'bottom'、'left'、'right'、'top-left'、'top-right'、'bottom-left'、'bottom-right'，預設為八向全開
 * @vue-prop {Number} [opt.popupResize.minWidth=200] 輸入popup可調整的最小寬度數字，單位px，預設200
 * @vue-prop {Number} [opt.popupResize.minHeight=200] 輸入popup可調整的最小高度數字，單位px，預設200
 * @vue-prop {Number} [opt.popupResize.width=400] 輸入popup初始寬度數字，單位px，預設400
 * @vue-prop {Number} [opt.popupResize.height=300] 輸入popup初始高度數字，單位px，預設300
 * @vue-prop {Boolean} [opt.clusterPoints=false] 輸入是否啟用點叢集布林值，預設false
 * @vue-prop {Number} [opt.clusterPointsRadius=50] 輸入點叢集半徑數字，單位px，預設50
 * @vue-prop {Number} [opt.clusterPointsMaxZoom=14] 輸入點叢集套用的最大顯示層級數字，預設14
 * @vue-prop {Number} [opt.clusterPointsLevelNum=3] 輸入點叢集分級數量數字(需≥1)，預設3
 * @vue-prop {Array} [opt.clusterPointsLevelValues=[10,100]] 輸入點叢集各級的點數門檻陣列，長度需為分級數量-1，預設[10,100]
 * @vue-prop {Array} [opt.clusterPointsLevelRadius=[10,15,20]] 輸入點叢集各級的圓半徑陣列，單位px，長度需為分級數量，預設[10,15,20]
 * @vue-prop {Array} [opt.clusterPointsLevelFillColors=詳見程式碼] 輸入點叢集各級的填充顏色陣列，長度需為分級數量，預設值詳見程式碼
 * @vue-prop {Array} [opt.clusterPointsLevelLineColors=['#fff','#fff','#fff']] 輸入點叢集各級的框線顏色陣列，預設['#fff','#fff','#fff']
 * @vue-prop {Array} [opt.clusterPointsLevelLineWidths=[2,2,2]] 輸入點叢集各級的框線寬度陣列，單位px，預設[2,2,2]
 * @vue-prop {Array} [opt.clusterPointsLevelTextSizes=[12,12,12]] 輸入點叢集各級的計數文字大小陣列，單位px，預設[12,12,12]
 * @vue-prop {Array} [opt.clusterPointsLevelTextColors=['#fff','#fff','#fff']] 輸入點叢集各級的計數文字顏色陣列，預設['#fff','#fff','#fff']
 * @vue-prop {Boolean} [opt.panelBaseMaps.show=true] 輸入是否顯示底圖選擇區布林值，預設true
 * @vue-prop {Array} [opt.panelBaseMaps.baseMaps=詳見程式碼] 輸入底圖選擇清單陣列，各元素為底圖設定物件(欄位見下)，預設值詳見程式碼的defBaseMaps
 * @vue-prop {String} [opt.panelBaseMaps.baseMaps[i].name=詳見程式碼] 輸入第i個底圖的名稱字串，供面板清單顯示
 * @vue-prop {String} [opt.panelBaseMaps.baseMaps[i].url=詳見程式碼] 輸入第i個底圖的圖磚或服務連結字串，支援{s}(子網域a/b/c)、{z}/{x}/{y}、//(自動補https)
 * @vue-prop {String} [opt.panelBaseMaps.baseMaps[i].type=raster] 輸入第i個底圖的來源類型字串，省略代表raster圖磚，可為'wms'、'vector'、'style'(url指向完整MapLibre style JSON，整組sources/layers注入現有地圖，glyphs/sprite為全域單例由最後套用者決定)，預設raster
 * @vue-prop {String} [opt.panelBaseMaps.baseMaps[i].colorShade=''] 輸入第i個底圖的色調字串，非空(如'light'/'dark')代表底圖(radio單選)，空字串''代表疊加層(checkbox多選並有透明度滑桿)，預設''
 * @vue-prop {Boolean} [opt.panelBaseMaps.baseMaps[i].visible=false] 輸入是否顯示第i個底圖布林值，預設false
 * @vue-prop {Number} [opt.panelBaseMaps.baseMaps[i].opacity=1] 輸入第i個底圖的透明度數字(0~1)，raster預設1、vector預設0.8，type為'style'時不支援(各層自帶opacity)
 * @vue-prop {String} [opt.panelBaseMaps.baseMaps[i].layerType='fill'] 輸入第i個底圖(type為vector時)的圖層類型字串，可選'fill'、'line'、'fill-extrusion'，預設'fill'
 * @vue-prop {String} [opt.panelBaseMaps.baseMaps[i].layer=''] 輸入第i個底圖(type為vector時)的source-layer名稱字串，預設''
 * @vue-prop {String} [opt.panelBaseMaps.baseMaps[i].layers=''] 輸入第i個底圖(type為wms時)的LAYERS參數字串，預設''
 * @vue-prop {String} [opt.panelBaseMaps.baseMaps[i].colorFillExtrusion=null] 輸入第i個底圖(layerType為fill-extrusion時)的統一建物顏色字串，不傳則回退用資料colour屬性，預設null
 * @vue-prop {String} [opt.panelBaseMaps.position='topleft'] 輸入底圖選擇區位置字串，可選'topleft'、'topright'、'bottomleft'、'bottomright'，預設'topleft'
 * @vue-prop {Number} [opt.panelBaseMaps.width=null] 輸入底圖選擇區寬度數字，單位px，預設null
 * @vue-prop {Number} [opt.panelBaseMaps.maxWidth=null] 輸入底圖選擇區最大寬度數字，單位px，預設null
 * @vue-prop {Number} [opt.panelBaseMaps.height=null] 輸入底圖選擇區高度數字，單位px，預設null
 * @vue-prop {Number} [opt.panelBaseMaps.maxHeight=null] 輸入底圖選擇區最大高度數字，單位px，預設null
 * @vue-prop {Boolean} [opt.panelBaseMaps.stopWheel=false] 輸入底圖選擇區當過高出現垂直捲軸時，是否可接收捲軸布林值，預設false
 * @vue-prop {Boolean} [opt.panelLabels.show=true] 輸入是否顯示地圖資訊區布林值，預設true
 * @vue-prop {String} [opt.panelLabels.position='topright'] 輸入地圖資訊區位置字串，可選'topleft'、'topright'、'bottomleft'、'bottomright'，預設'topright'
 * @vue-prop {String} [opt.panelLabels.title=''] 輸入地圖資訊區內標題字串，預設''
 * @vue-prop {String} [opt.panelLabels.lng='Longitude'] 輸入地圖資訊區內標注經度字串，預設'Longitude'
 * @vue-prop {String} [opt.panelLabels.lat='Latitude'] 輸入地圖資訊區內標注緯度字串，預設'Latitude'
 * @vue-prop {String} [opt.panelLabels.zoom='Zoom'] 輸入地圖資訊區內標注顯示層級字串，預設'Zoom'
 * @vue-prop {Array} [opt.panelLabels.useItems=['lng','lat','zoom']] 輸入地圖資訊區內呈現項目陣列，各元素給字串，'lng'代表經度，'lat'代表緯度，'zoom'代表顯示層級，預設['lng','lat','zoom']
 * @vue-prop {Number} [opt.panelLabels.width=null] 輸入地圖資訊區寬度數字，單位px，預設null
 * @vue-prop {Number} [opt.panelLabels.maxWidth=null] 輸入地圖資訊區最大寬度數字，單位px，預設null
 * @vue-prop {Number} [opt.panelLabels.height=null] 輸入地圖資訊區高度數字，單位px，預設null
 * @vue-prop {Number} [opt.panelLabels.maxHeight=null] 輸入地圖資訊區最大高度數字，單位px，預設null
 * @vue-prop {Boolean} [opt.panelCompassRose.show=false] 輸入是否顯示玫瑰羅盤區布林值，預設false
 * @vue-prop {String} [opt.panelCompassRose.position='topright'] 輸入玫瑰羅盤區位置字串，可選'topleft'、'topright'、'bottomleft'、'bottomright'，預設'topright'
 * @vue-prop {Number} [opt.panelCompassRose.size=120] 輸入玫瑰羅盤區尺寸(長寬)數字，單位px，預設120
 * @vue-prop {Boolean} [opt.panelCompassRose.withPanel=false] 輸入是否顯示玫瑰羅盤區底部面板布林值，預設false
 * @vue-prop {String} [opt.panelCompassRose.iconSrcLight=詳見程式碼] 輸入淺色系玫瑰羅盤圖標來源字串，可使用base64格式或網址，預設值詳見程式碼
 * @vue-prop {String} [opt.panelCompassRose.iconSrcDark=詳見程式碼] 輸入深色系玫瑰羅盤圖標來源字串，可使用base64格式或網址，預設值詳見程式碼
 * @vue-prop {String} [opt.panelCompassRose.iconSrc=null] 輸入玫瑰羅盤圖標來源字串，若有則直接使用；若為null則withPanel為true時用iconSrcDark，否則自動依底圖colorShade決定(空或'light'用iconSrcDark，'dark'用iconSrcLight)，預設null
 * @vue-prop {Boolean} [opt.panelCompass3d.show=true] 輸入是否顯示3D指北針區布林值(可點擊重設正北/俯仰)，預設true
 * @vue-prop {String} [opt.panelCompass3d.position='topright'] 輸入3D指北針區位置字串，可選'topleft'、'topright'、'bottomleft'、'bottomright'，預設'topright'
 * @vue-prop {Number} [opt.panelCompass3d.size=44] 輸入3D指北針尺寸數字，單位px，預設44
 * @vue-prop {Boolean} [opt.panelZoom.show=true] 輸入是否顯示縮放按鈕區布林值，預設true
 * @vue-prop {String} [opt.panelZoom.position='bottomleft'] 輸入縮放按鈕區位置字串，可選'topleft'、'topright'、'bottomleft'、'bottomright'，預設'bottomleft'
 * @vue-prop {Boolean} [opt.panelScale.show=true] 輸入是否顯示比例尺區布林值，預設true
 * @vue-prop {String} [opt.panelScale.position='bottomright'] 輸入比例尺區位置字串，可選'topleft'、'topright'、'bottomleft'、'bottomright'，預設'bottomright'
 * @vue-prop {Boolean} [opt.panelItems.show=true] 輸入圖層顯隱切換區是否顯示布林值，預設true
 * @vue-prop {String} [opt.panelItems.position='topleft'] 輸入圖層顯隱切換區位置字串，可選'topleft'、'topright'、'bottomleft'、'bottomright'，預設'topleft'
 * @vue-prop {Number} [opt.panelItems.width=null] 輸入圖層顯隱切換區寬度數字，單位px，預設null
 * @vue-prop {Number} [opt.panelItems.maxWidth=null] 輸入圖層顯隱切換區最大寬度數字，單位px，預設null
 * @vue-prop {Number} [opt.panelItems.height=null] 輸入圖層顯隱切換區高度數字，單位px，預設null
 * @vue-prop {Number} [opt.panelItems.maxHeight=null] 輸入圖層顯隱切換區最大高度數字，單位px，預設null
 * @vue-prop {Boolean} [opt.panelItems.stopWheel=false] 輸入圖層顯隱切換區當過高出現垂直捲軸時，是否可接收捲軸布林值，預設false
 * @vue-prop {Boolean} [opt.panelLegends.show=true] 輸入是否顯示圖例區布林值(僅有可見等值線時呈現)，預設true
 * @vue-prop {String} [opt.panelLegends.position='bottomright'] 輸入圖例區位置字串，可選'topleft'、'topright'、'bottomleft'、'bottomright'，預設'bottomright'
 * @vue-prop {Number} [opt.panelLegends.width=null] 輸入圖例區寬度數字，單位px，預設null
 * @vue-prop {Number} [opt.panelLegends.maxWidth=300] 輸入圖例區最大寬度數字，單位px，預設300
 * @vue-prop {Number} [opt.panelLegends.height=null] 輸入圖例區高度數字，單位px，預設null
 * @vue-prop {Number} [opt.panelLegends.maxHeight=null] 輸入圖例區最大高度數字，單位px，預設null
 * @vue-prop {Array} [opt.pointSets=[]] 輸入點集合陣列，各元素為物件，預設[]
 * @vue-prop {String} [opt.pointSets[i].title=''] 輸入第i個點集合的標題字串，預設''
 * @vue-prop {String} [opt.pointSets[i].msg=''] 輸入第i個點集合的說明字串，預設''
 * @vue-prop {String} [opt.pointSets[i].key=null] 輸入第i個點集合的穩定識別鍵字串，需於陣列內唯一；提供後陣列插入或重排時該組身分不變(未變更組可增量跳過不重建)，未給則以陣列索引識別，預設null
 * @vue-prop {Number} [opt.pointSets[i].order=null] 輸入第i個點集合的排序用數字，預設null
 * @vue-prop {Boolean} [opt.pointSets[i].visible=true] 輸入是否顯示第i個點集合布林值，預設true
 * @vue-prop {String} [opt.pointSets[i].type='circle'] 輸入第i個點集合的預設呈現類型字串，可選'circle'(圓)、'icon'(圖標)，預設'circle'
 * @vue-prop {String} [opt.pointSets[i].lineColor='rgba(255,255,255,1)'] 輸入第i個點集合(circle)的框線顏色字串，預設'rgba(255,255,255,1)'
 * @vue-prop {Number} [opt.pointSets[i].lineWidth=1] 輸入第i個點集合(circle)的框線寬度數字，預設1
 * @vue-prop {String} [opt.pointSets[i].fillColor='rgba(0,150,255,0.65)'] 輸入第i個點集合(circle)的填充顏色字串，預設'rgba(0,150,255,0.65)'
 * @vue-prop {Number} [opt.pointSets[i].size=10] 輸入第i個點集合(circle)的圓半徑數字，預設10
 * @vue-prop {String} [opt.pointSets[i].iconSrc=詳見程式碼] 輸入第i個點集合(icon)的圖標來源字串，可使用base64格式或網址，預設為內建點圖標，詳見程式碼
 * @vue-prop {Array} [opt.pointSets[i].iconSize=[24,40]] 輸入第i個點集合(icon)的圖標尺寸陣列[寬,高]，單位px，預設[24,40]
 * @vue-prop {Array} [opt.pointSets[i].iconAnchor=[iconSize[0]/2,iconSize[1]]] 輸入第i個點集合(icon)的圖標定位位置陣列，由圖標左上角起算，往左為+x、往上為+y，單位px，預設[iconSize[0]/2,iconSize[1]]
 * @vue-prop {Array} [opt.pointSets[i].popupAnchor=[0,-iconSize[1]/1.0]] 輸入第i個點集合顯示popup時的指向偏移陣列[x,y]，由實際定位點起算，往右為+x、往下為+y，單位px，未給時自動依半徑或iconSize計算
 * @vue-prop {Array} [opt.pointSets[i].tooltipAnchor=[0,-iconSize[1]/1.0]] 輸入第i個點集合顯示tooltip時的指向偏移陣列[x,y]，未給時自動依半徑或iconSize計算
 * @vue-prop {Array} [opt.pointSets[i].points=[]] 輸入第i個點集合的各點數據陣列，各元素為物件或緯經度陣列(即[{p1},...]或[[lat,lng],...])，預設[]
 * @vue-prop {Array} [opt.pointSets[i].points[j].latLng=[]] 輸入第i個點集合第j個點的緯經度座標陣列[lat,lng]，預設[]
 * @vue-prop {String} [opt.pointSets[i].points[j].title=''] 輸入第i個點集合第j個點的標題字串，預設''
 * @vue-prop {String} [opt.pointSets[i].points[j].msg=''] 輸入第i個點集合第j個點的說明字串，預設''
 * @vue-prop {String} [opt.pointSets[i].points[j].type=繼承pointSet] 輸入第i個點集合第j個點的呈現類型字串，可選'circle'、'icon'，未給則繼承所屬點集合
 * @vue-prop {String} [opt.pointSets[i].points[j].lineColor=繼承pointSet] 輸入第i個點集合第j個點的框線顏色字串，未給則繼承所屬點集合
 * @vue-prop {Number} [opt.pointSets[i].points[j].lineWidth=繼承pointSet] 輸入第i個點集合第j個點的框線寬度數字，未給則繼承所屬點集合
 * @vue-prop {String} [opt.pointSets[i].points[j].fillColor=繼承pointSet] 輸入第i個點集合第j個點的填充顏色字串，未給則繼承所屬點集合
 * @vue-prop {Number} [opt.pointSets[i].points[j].size=繼承pointSet] 輸入第i個點集合第j個點的圓半徑數字，未給則繼承所屬點集合
 * @vue-prop {String} [opt.pointSets[i].points[j].iconSrc=繼承pointSet] 輸入第i個點集合第j個點的圖標來源字串，未給則繼承所屬點集合
 * @vue-prop {Array} [opt.pointSets[i].points[j].iconSize=繼承pointSet] 輸入第i個點集合第j個點的圖標尺寸陣列[寬,高]，未給則繼承所屬點集合
 * @vue-prop {Array} [opt.pointSets[i].points[j].iconAnchor=繼承pointSet] 輸入第i個點集合第j個點的圖標定位位置陣列，未給則繼承所屬點集合
 * @vue-prop {Array} [opt.pointSets[i].points[j].popupAnchor=null] 輸入第i個點集合第j個點顯示popup時的指向偏移陣列[x,y]，預設null
 * @vue-prop {Array} [opt.pointSets[i].points[j].tooltipAnchor=null] 輸入第i個點集合第j個點顯示tooltip時的指向偏移陣列[x,y]，預設null
 * @vue-prop {Function} [opt.pointSetsClick=function(){}] 輸入全域點集合的click呼叫函數，引數為{ point, pointSet, pointSets }，預設function(){}
 * @vue-prop {Array} [opt.polylineSets=[]] 輸入折線集合陣列，各元素為物件，預設[]
 * @vue-prop {String} [opt.polylineSets[i].title=''] 輸入第i個折線集合的標題字串，預設''
 * @vue-prop {String} [opt.polylineSets[i].msg=''] 輸入第i個折線集合的說明字串，預設''
 * @vue-prop {Number} [opt.polylineSets[i].order=null] 輸入第i個折線集合的排序用數字，預設null
 * @vue-prop {Boolean} [opt.polylineSets[i].visible=true] 輸入是否顯示第i個折線集合布林值，預設true
 * @vue-prop {String} [opt.polylineSets[i].lineColor='rgba(0,150,255,1)'] 輸入第i個折線集合的框線顏色字串，預設'rgba(0,150,255,1)'
 * @vue-prop {Number} [opt.polylineSets[i].lineWidth=3] 輸入第i個折線集合的框線寬度數字，預設3
 * @vue-prop {Array} [opt.polylineSets[i].latLngs=[]] 輸入第i個折線集合的數據陣列，可為polyline([[lat,lng],...])或multiPolyline，各點座標為緯經度，預設[]
 * @vue-prop {Function} [opt.polylineSetsClick=function(){}] 輸入全域折線集合的click呼叫函數，引數為{ ev, polylineSet, kpolylineSet, polylineSets }，預設function(){}
 * @vue-prop {Array} [opt.polygonSets=[]] 輸入多邊形集合陣列，各元素為物件，預設[]
 * @vue-prop {String} [opt.polygonSets[i].title=''] 輸入第i個多邊形集合的標題字串，預設''
 * @vue-prop {String} [opt.polygonSets[i].msg=''] 輸入第i個多邊形集合的說明字串，預設''
 * @vue-prop {Number} [opt.polygonSets[i].order=null] 輸入第i個多邊形集合的排序用數字，預設null
 * @vue-prop {Boolean} [opt.polygonSets[i].visible=true] 輸入是否顯示第i個多邊形集合布林值，預設true
 * @vue-prop {String} [opt.polygonSets[i].lineColor='rgba(0,150,255,1)'] 輸入第i個多邊形集合的框線顏色字串，預設'rgba(0,150,255,1)'
 * @vue-prop {Number} [opt.polygonSets[i].lineWidth=3] 輸入第i個多邊形集合的框線寬度數字，預設3
 * @vue-prop {String} [opt.polygonSets[i].fillColor='rgba(0,150,255,0.25)'] 輸入第i個多邊形集合的填充顏色字串，預設'rgba(0,150,255,0.25)'
 * @vue-prop {Array} [opt.polygonSets[i].latLngs=[]] 輸入第i個多邊形集合的數據陣列，各點座標為緯經度，預設[]。可為單一環([[lat,lng],...])、環陣列([[[lat,lng],...],...]，代表1個polygon，環間為XOR套疊可表示挖洞)、或polygon陣列([[[[lat,lng],...],...],...]，代表1個multiPolygon，各polygon之環各自XOR後合併)
 * @vue-prop {Function} [opt.polygonSetsClick=function(){}] 輸入全域多邊形集合的click呼叫函數，引數為{ ev, polygonSet, kpolygonSet, polygonSets }，預設function(){}
 * @vue-prop {Array} [opt.geojsonSets=[]] 輸入geojson集合陣列，各元素為物件，預設[]
 * @vue-prop {String} [opt.geojsonSets[i].title=''] 輸入第i個geojson集合的標題字串，預設''
 * @vue-prop {String} [opt.geojsonSets[i].msg=''] 輸入第i個geojson集合的說明字串，預設''
 * @vue-prop {Number} [opt.geojsonSets[i].order=null] 輸入第i個geojson集合的排序用數字，預設null
 * @vue-prop {Boolean} [opt.geojsonSets[i].visible=true] 輸入是否顯示第i個geojson集合布林值，預設true
 * @vue-prop {String} [opt.geojsonSets[i].lineColor='rgba(0,150,255,1)'] 輸入第i個geojson集合的框線顏色字串，預設'rgba(0,150,255,1)'
 * @vue-prop {Number} [opt.geojsonSets[i].lineWidth=3] 輸入第i個geojson集合的框線寬度數字，預設3
 * @vue-prop {String} [opt.geojsonSets[i].fillColor='rgba(0,150,255,0.25)'] 輸入第i個geojson集合的填充顏色字串，預設'rgba(0,150,255,0.25)'
 * @vue-prop {Object} [opt.geojsonSets[i].geojson={}] 輸入第i個geojson集合的GeoJSON物件(自動拆成點/線/面子圖層)，各點座標為緯經度，預設{}
 * @vue-prop {Function} [opt.geojsonSetsClick=function(){}] 輸入全域geojson集合的click呼叫函數，引數為{ ev, lat, lng, geojsonSet, kgeojsonSet, geojsonSets }，預設function(){}
 * @vue-prop {Array} [opt.contourSets=[]] 輸入等值線集合陣列，各元素為物件，預設[]
 * @vue-prop {String} [opt.contourSets[i].title=''] 輸入第i個等值線集合的標題字串(圖例與圖層清單顯示用)，預設''
 * @vue-prop {String} [opt.contourSets[i].msg=''] 輸入第i個等值線集合的說明字串，預設''
 * @vue-prop {String} [opt.contourSets[i].legendMsg=''] 輸入第i個等值線集合的圖例副標題字串，預設''
 * @vue-prop {Number} [opt.contourSets[i].order=null] 輸入第i個等值線集合的排序用數字，預設null
 * @vue-prop {Boolean} [opt.contourSets[i].visible=true] 輸入是否顯示第i個等值線集合布林值，預設true
 * @vue-prop {Array} [opt.contourSets[i].points=[]] 輸入第i個等值線集合的數據陣列，各點座標為緯經度，自動以三角網格技術計算等值線，預設[]
 * @vue-prop {Array} [opt.contourSets[i].thresholds=[]] 輸入第i個等值線集合的門檻值陣列，給予非有效陣列則自動計算各線門檻值，預設[]
 * @vue-prop {Object} [opt.contourSets[i].gradient=詳見程式碼] 輸入第i個等值線集合的色階(color map)設定物件，鍵範圍0至1、值為對應顏色，各鍵之間採內插取色，預設值詳見程式碼
 * @vue-prop {Function} [opt.contourSets[i].getColor=null] 輸入第i個等值線集合的顏色函數，引數為{ defaultColor, k, n, polygonSet }，預設null
 * @vue-prop {String} [opt.contourSets[i].lineColor=''] 輸入第i個等值線集合的框線顏色字串，''則用填充顏色，預設''
 * @vue-prop {Number} [opt.contourSets[i].lineWidth=1] 輸入第i個等值線集合的框線寬度數字，預設1
 * @vue-prop {Number} [opt.contourSets[i].fillOpacity=0.2] 輸入第i個等值線集合的填充透明度數字，預設0.2
 * @vue-prop {String} [opt.contourSets[i].lineColorHover=同lineColor] 輸入滑鼠移入時第i個等值線集合的框線顏色字串，預設同lineColor
 * @vue-prop {Number} [opt.contourSets[i].lineWidthHover=3] 輸入滑鼠移入時第i個等值線集合的框線寬度數字，預設3
 * @vue-prop {Number} [opt.contourSets[i].fillOpacityHover=0.5] 輸入滑鼠移入時第i個等值線集合的填充透明度數字，預設0.5
 * @vue-prop {Boolean} [opt.contourSets[i].changeStyleWhenHover=true] 輸入第i個等值線集合是否啟用滑鼠移入切換style效果布林值，預設true
 * @vue-prop {Number} [opt.contourSets[i].legendNumDig=null] 輸入第i個等值線集合對圖例內數字取的小數位數，null代表不取，預設null
 * @vue-prop {Function} [opt.contourSets[i].legendTextFormater=null] 輸入第i個等值線集合對圖例各色階產生顯示文字的函數，引數為{ low, up, legends, index }，預設null
 * @vue-prop {Function} [opt.contourSets[i].legendTextExtra=null] 輸入第i個等值線集合對圖例各色階附加額外文字的函數，引數為{ k, n, polygonSet }，預設null
 * @vue-prop {Array} [opt.contourSets[i].polygonClipOuter=null] 輸入第i個等值線集合剔除以外之多邊形(polygon)陣列，預設null
 * @vue-prop {Array} [opt.contourSets[i].polygonsClipInner=null] 輸入第i個等值線集合剔除以內之複數多邊形(multiPolygon)陣列，預設null
 * @vue-prop {Array} [opt.contourSets[i].polygonsContainInner=null] 輸入第i個等值線集合保留以內之複數多邊形(multiPolygon)陣列，預設null
 * @vue-prop {Function} [opt.contourSetsClick=function(){}] 輸入全域等值線集合的click呼叫函數，引數為{ ev, lat, lng, latLngs, polygonSet, kpolygonSet, contourSet, kcontourSet, contourSets }，預設function(){}
 * @vue-prop {Array} [opt.imageSets=[]] 輸入影像集合陣列，各元素為物件，預設[]
 * @vue-prop {String} [opt.imageSets[i].title=''] 輸入第i個影像集合的標題字串，預設''
 * @vue-prop {String} [opt.imageSets[i].msg=''] 輸入第i個影像集合的說明字串，預設''
 * @vue-prop {String} [opt.imageSets[i].key=null] 輸入第i個影像集合的穩定識別鍵字串，需於陣列內唯一；提供後陣列插入或重排時該組身分不變(未變更組不重載影像)，未給則以陣列索引識別，預設null
 * @vue-prop {Number} [opt.imageSets[i].order=null] 輸入第i個影像集合的排序用數字，預設null
 * @vue-prop {Boolean} [opt.imageSets[i].visible=false] 輸入是否顯示第i個影像集合布林值，預設false
 * @vue-prop {Object} [opt.imageSets[i].image={}] 輸入第i個影像集合的影像來源物件，含url(影像連結字串)與lngMin/lngMax/latMin/latMax(四至經緯度數字)，預設{}。四至以實際數值判定東西南北(較大緯度即為北邊)，不依欄位命名方向，故latMin填北緯之像素列慣例亦可正確貼合不致上下顛倒
 * @vue-prop {Number} [opt.imageSets[i].opacity=1] 輸入第i個影像集合的透明度數字，範圍0~1，超出範圍將夾限，預設1
 */
export default {
    components: {
        WIconLoading,
    },
    props: {
        pathItems: {
            type: Array,
            default: () => [
                'base:w-maplibregl-vue',
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

        //importResExt
        importResExt(vo.pathItems)
            .then((res) => {
                //console.log('res', res)
                if (res !== 'loaded') {

                    //cmp
                    let cmp = window['w-maplibregl-vue']
                    if (cmp.default) {
                        cmp = cmp.default
                    }

                    //use
                    getVue().component('w-maplibregl-vue', cmp)

                }
                vo.cmpName = 'w-maplibregl-vue'
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
