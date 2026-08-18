<script>
import WImageViewer from './WImageViewer.vue'


/**
 * 本組件為WImageViewer之別名(兩者為同一組件), 因已改用domShowImages無須動態加載, 故實作統一置於WImageViewer, 此處僅保留w-image-viewer-dyn名稱供既有html網頁引用
 * @vue-prop {Array} [images=[]] 輸入圖片網址陣列，預設[]
 * @vue-prop {Object} [imageStyle={}] 輸入圖片style物件，預設{}
 * @vue-prop {Object} [opt={}] 輸入viewerjs設定物件，預設使用optOne或optMuti，若img僅一個則使用optOne，反之使用optMuti
 * @vue-prop {Boolean} [multiple=false] 輸入
 */
export default WImageViewer
</script>
