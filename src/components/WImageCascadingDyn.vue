<script>
import WImageCascading from './WImageCascading.vue'


/**
 * 本組件為WImageCascading之別名(兩者為同一組件), 因已改用domShowImages無須動態加載, 故實作統一置於WImageCascading, 此處僅保留w-image-cascading-dyn名稱供既有html網頁引用
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
export default WImageCascading
</script>
