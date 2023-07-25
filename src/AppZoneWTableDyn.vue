<template>
    <div>


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-table-dyn</span></div>


        <div style="font-size:0.9rem; margin-bottom:10px;">
            <span style="margin-right:10px;">Wrap from:</span>
            <a href="//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp=w-aggrid-vue-dyn" target="_blank" rel="noreferrer noopener">w-aggrid-vue-dyn</a>
        </div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-table-dyn'"
                    :casename="'default'"
                ></demolink>

                <w-table-dyn
                    style="width:600px; height:400px;"
                    :opt="WTableDyn.opt1"
                    @success="evSuccess"
                    @error="evError"
                ></w-table-dyn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-table-dyn'"
                    :casename="'name & description'"
                ></demolink>

                <w-table-dyn
                    style="width:600px; height:400px;"
                    :name="WTableDyn.name"
                    :description="WTableDyn.description"
                    :opt="WTableDyn.opt1"
                    @success="evSuccess"
                    @error="evError"
                ></w-table-dyn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-table-dyn'"
                    :casename="'no useInfor'"
                ></demolink>

                <w-table-dyn
                    style="width:600px; height:400px;"
                    :useInfor="false"
                    :name="WTableDyn.name"
                    :description="WTableDyn.description"
                    :opt="WTableDyn.opt1"
                    @success="evSuccess"
                    @error="evError"
                ></w-table-dyn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-table-dyn'"
                    :casename="'no useMenu'"
                ></demolink>

                <w-table-dyn
                    style="width:600px; height:400px;"
                    :useMenu="false"
                    :name="WTableDyn.name"
                    :description="WTableDyn.description"
                    :opt="WTableDyn.opt1"
                    @success="evSuccess"
                    @error="evError"
                ></w-table-dyn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-table-dyn'"
                    :casename="'opt.kpHead'"
                ></demolink>

                <w-table-dyn
                    style="width:600px; height:400px;"
                    :name="WTableDyn.name"
                    :description="WTableDyn.description"
                    :opt="WTableDyn.opt3"
                    @success="evSuccess"
                    @error="evError"
                ></w-table-dyn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-table-dyn'"
                    :casename="'sortColIds (sort by order)'"
                ></demolink>

                <w-table-dyn
                    style="width:600px; height:400px;"
                    :name="WTableDyn.name"
                    :description="WTableDyn.description"
                    :opt="WTableDyn.opt2"
                    :sortColIds="'order'"
                    @success="evSuccess"
                    @error="evError"
                ></w-table-dyn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-table-dyn'"
                    :casename="'hideIds (hide mappingId)'"
                ></demolink>

                <w-table-dyn
                    style="width:600px; height:400px;"
                    :name="WTableDyn.name"
                    :description="WTableDyn.description"
                    :opt="WTableDyn.opt2"
                    :hideIds="'mappingId'"
                    _hideIds="['id','mappingId','order']"
                    @success="evSuccess"
                    @error="evError"
                ></w-table-dyn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-table-dyn'"
                    :casename="'fixIds (fix id)'"
                ></demolink>

                <w-table-dyn
                    style="width:600px; height:400px;"
                    :name="WTableDyn.name"
                    :description="WTableDyn.description"
                    :opt="WTableDyn.opt2"
                    :fixIds="'id'"
                    _fixIds="['id','mappingId']"
                    @success="evSuccess"
                    @error="evError"
                ></w-table-dyn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-table-dyn'"
                    :casename="'removeIdsWhenDownload (remove id, mappingId, order, isActive)'"
                ></demolink>

                <w-table-dyn
                    style="width:600px; height:400px;"
                    :name="WTableDyn.name"
                    :description="WTableDyn.description"
                    :opt="WTableDyn.opt2"
                    :removeIdsWhenDownload="['id','mappingId','order','isActive']"
                    @success="evSuccess"
                    @error="evError"
                ></w-table-dyn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-table-dyn'"
                    :casename="'slot infor (name & description)'"
                ></demolink>

                <w-table-dyn
                    style="width:600px; height:400px;"
                    :name="WTableDyn.name"
                    :description="WTableDyn.description"
                    :opt="WTableDyn.opt1"
                    @success="evSuccess"
                    @error="evError"
                >
                    <template v-slot:infor="{infor}">
                        <div msg="外層有flex故添加一層div避免影響">
                            <div style="display:flex; align-items:center;">
                                <div style="color:#62f;">{{infor.name}}</div>
                                <div style="margin-left:5px; padding:0px 7px; color:#fff; font-size:0.7rem; border-radius:30px; background:#f26;">Agent</div>
                                <div style="margin-left:5px; padding:0px 7px; color:#fff; font-size:0.7rem; border-radius:30px; background:#fa6;">Dealer</div>
                            </div>
                            <div style="color:#888; font-size:0.7rem;">[{{infor.description}}]</div>
                        </div>
                    </template>
                </w-table-dyn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-table-dyn'"
                    :casename="'slot btns'"
                ></demolink>

                <w-table-dyn
                    style="width:600px; height:400px;"
                    :name="WTableDyn.name"
                    :description="WTableDyn.description"
                    :opt="WTableDyn.opt1"
                    @success="evSuccess"
                    @error="evError"
                >
                    <template v-slot:btns="props">
                        <select style="padding:0px 10px; background:rgba(255,255,255,0.1); color:#666; font-size:0.7rem; border:1px solid rgba(0,0,0,0.3); border-radius:30px; outline:none;">
                            <option style="color:#666; font-size:0.7rem;" value="0">Select Item</option>
                            <option style="color:#666; font-size:0.7rem;" value="1">Quisquam</option>
                            <option style="color:#666; font-size:0.7rem;" value="2">Dolorem</option>
                            <option :style="`${props.editable?'color:#666;':'color:#aaa;'} font-size:0.7rem;`" value="3" :disabled="!props.editable">Ipsum</option>
                        </select>
                    </template>
                </w-table-dyn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-table-dyn'"
                    :casename="'editable'"
                ></demolink>

                <w-table-dyn
                    style="width:600px; height:400px;"
                    :name="WTableDyn.name"
                    :description="WTableDyn.description"
                    :opt="WTableDyn.opt2"
                    :editable="true"
                    @success="evSuccess"
                    @error="evError"
                ></w-table-dyn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-table-dyn'"
                    :casename="'editable & no useInfor'"
                ></demolink>

                <w-table-dyn
                    style="width:600px; height:400px;"
                    :useInfor="false"
                    :name="WTableDyn.name"
                    :description="WTableDyn.description"
                    :opt="WTableDyn.opt2"
                    :editable="true"
                    @success="evSuccess"
                    @error="evError"
                ></w-table-dyn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-table-dyn'"
                    :casename="'editable & no useMenu'"
                ></demolink>

                <w-table-dyn
                    style="width:600px; height:400px;"
                    :useMenu="false"
                    :name="WTableDyn.name"
                    :description="WTableDyn.description"
                    :opt="WTableDyn.opt2"
                    :editable="true"
                    @success="evSuccess"
                    @error="evError"
                ></w-table-dyn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-table-dyn'"
                    :casename="'editable & inforPaddingStyle & menuBackgroundColor'"
                ></demolink>

                <div style="background:#fafafa;">
                    <w-table-dyn
                        style="width:600px; height:400px;"
                        :name="WTableDyn.name"
                        :description="WTableDyn.description"
                        :opt="WTableDyn.opt2"
                        :editable="true"
                        :inforPaddingStyle="{top:15,right:20,bottom:20,left:20}"
                        :menuBackgroundColor="'#eaeaea'"
                        @success="evSuccess"
                        @error="evError"
                    ></w-table-dyn>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-table-dyn'"
                    :casename="'editable & checkId'"
                ></demolink>

                <w-table-dyn
                    style="width:600px; height:400px;"
                    :name="WTableDyn.name"
                    :description="WTableDyn.description"
                    :opt="WTableDyn.opt2"
                    :editable="true"
                    :checkId="'id'"
                    @success="evSuccess"
                    @error="evError"
                ></w-table-dyn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-table-dyn'"
                    :casename="'editable & opt.beforeAddRow'"
                ></demolink>

                <w-table-dyn
                    style="width:600px; height:400px;"
                    :name="WTableDyn.name"
                    :description="WTableDyn.description"
                    :opt="WTableDyn.opt4"
                    :editable="true"
                    @success="evSuccess"
                    @error="evError"
                ></w-table-dyn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-table-dyn'"
                    :casename="'editable & opt.kpConvertKeysWhenUploadData'"
                ></demolink>

                <w-table-dyn
                    style="width:600px; height:400px;"
                    :name="WTableDyn.name"
                    :description="WTableDyn.description"
                    :opt="WTableDyn.opt5"
                    :editable="true"
                    @success="evSuccess"
                    @error="evError"
                ></w-table-dyn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-table-dyn'"
                    :casename="'editable & opt.optForUploadData'"
                ></demolink>

                <w-table-dyn
                    style="width:600px; height:400px;"
                    :name="WTableDyn.name"
                    :description="WTableDyn.description"
                    :opt="WTableDyn.opt6"
                    :editable="true"
                    @success="evSuccess"
                    @error="evError"
                ></w-table-dyn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-table-dyn'"
                    :casename="'editable & textLabelDataName & textPlaceholderDataName & textLabelDataDescription & textPlaceholderDataDescription'"
                ></demolink>

                <w-table-dyn
                    style="width:600px; height:400px;"
                    :name="WTableDyn.name"
                    :description="WTableDyn.description"
                    :opt="WTableDyn.opt2"
                    :editable="true"
                    :textLabelDataName="'名稱'"
                    :textPlaceholderDataName="'請輸入數據名稱'"
                    :textLabelDataDescription="'說明'"
                    :textPlaceholderDataDescription="'請輸入數據說明'"
                    @success="evSuccess"
                    @error="evError"
                ></w-table-dyn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-table-dyn'"
                    :casename="'editable & checkId & tooltipAddRow & tooltipDeleteSelectedRows & tooltipDownloadExcelFile & tooltipUploadExcelFile & uploadModeTitle & uploadModeTextForReplace & uploadModeTextForAppend'"
                ></demolink>

                <w-table-dyn
                    style="width:600px; height:400px;"
                    :name="WTableDyn.name"
                    :description="WTableDyn.description"
                    :opt="WTableDyn.opt2"
                    :editable="true"
                    :checkId="'id'"
                    :tooltipAddRow="'新增數據'"
                    :tooltipDeleteSelectedRows="'刪除選擇數據'"
                    :tooltipDownloadExcelFile="'下載 Excel(xlsx) 數據檔案'"
                    :tooltipUploadExcelFile="'上傳 Excel(xlsx) 數據檔案'"
                    :uploadModeTitle="'請選擇上傳模式：'"
                    :uploadModeTextForReplace="'取代'"
                    :uploadModeTextForAppend="'於最後加入'"
                    @success="evSuccess"
                    @error="evError"
                ></w-table-dyn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-table-dyn'"
                    :casename="'editable & checkId & successMsgFromAddRow & errorMsgFromAddRow & errorMsgFromRemoveRow & errorMsgFromUploadEmptyData & errorMsgFromUploadData & successMsgFromDownloadData & errorMsgFromDownloadData'"
                ></demolink>

                <w-table-dyn
                    style="width:600px; height:400px;"
                    :name="WTableDyn.name"
                    :description="WTableDyn.description"
                    :opt="WTableDyn.opt2"
                    :editable="true"
                    :checkId="'id'"
                    :successMsgFromAddRow="'新增數據成功'"
                    :errorMsgFromAddRow="'無法新增數據'"
                    :errorMsgFromRemoveRow="'移除數據失敗'"
                    :successMsgFromUploadData="'上傳數據成功'"
                    :errorMsgFromUploadData="'無法上傳數據'"
                    :errorMsgFromUploadEmptyData="'上傳檔案中無有效數據'"
                    :successMsgFromDownloadData="'下載檔案成功'"
                    :errorMsgFromDownloadData="'無法下載檔案'"
                    @success="evSuccess"
                    @error="evError"
                ></w-table-dyn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-table-dyn'"
                    :casename="'editable & slot btns'"
                ></demolink>

                <w-table-dyn
                    style="width:600px; height:400px;"
                    :name="WTableDyn.name"
                    :description="WTableDyn.description"
                    :opt="WTableDyn.opt1"
                    :editable="true"
                    @success="evSuccess"
                    @error="evError"
                >
                    <template v-slot:btns="props">
                        <select style="padding:0px 10px; background:rgba(255,255,255,0.1); color:#666; font-size:0.7rem; border:1px solid rgba(0,0,0,0.3); border-radius:30px; outline:none;">
                            <option style="color:#666; font-size:0.7rem;" value="0">Select Item</option>
                            <option style="color:#666; font-size:0.7rem;" value="1">Quisquam</option>
                            <option style="color:#666; font-size:0.7rem;" value="2">Dolorem</option>
                            <option :style="`${props.editable?'color:#666;':'color:#aaa;'} font-size:0.7rem;`" value="3" :disabled="!props.editable">Ipsum</option>
                        </select>
                    </template>
                </w-table-dyn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-table-dyn'"
                    :casename="'editable & checkId & opt.modifyDataWhenSave & save(call cmp. method) & errorMsgFromNoName & errorMsgFromNoData'"
                ></demolink>

                <v-btn depressed small elevation="2" @click="saveData">save data</v-btn>

                <w-table-dyn
                    ref="table"
                    style="width:600px; height:400px;"
                    :name="WTableDyn.name"
                    :description="WTableDyn.description"
                    :opt="WTableDyn.opt7"
                    :editable="true"
                    :checkId="'id'"
                    :errorMsgFromNoName="'未輸入數據名稱'"
                    :errorMsgFromNoData="'未給予有效數據'"
                    @success="evSuccess"
                    @error="evError"
                ></w-table-dyn>

                <pre id="disp-save-data" style="font-size:0.7rem; width:600px; height:200px; overflow-y:auto;"></pre>

            </div>


        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WTableDyn from './components/WTableDyn.vue'


export default {
    components: {
        demolink,
        WTableDyn,
    },
    props: {
    },
    data: function() {
        let keys1 = ['make', 'model', 'price']
        let rows1 = [
            { make: 'Toyota', model: 'Celica', price: 35000 },
            { make: 'Ford', model: 'Mondeo', price: 32000 },
            { make: 'Porsche', model: 'Boxter', price: 72000 },
            { make: 'BMW', model: 'Sedan', price: 66000 },
            { make: 'Nissan', model: 'March', price: 61000 },
            { make: 'Lexus', model: 'RX', price: 56000 },
            { make: 'Audi', model: 'A6 Allroad', price: 45000 },
            { make: 'Mazda', model: 'MX-5', price: 36000 },
            { make: 'Mercedes-Benz', model: 'Cabriolet', price: 86000 },
            { make: 'Volkswagen', model: 'Beetle', price: 68000 },
            { make: 'Honda', model: 'City', price: 69000 },
            { make: 'Volvo', model: 'S60', price: 71000 },
            { make: 'Subaru', model: 'BRZ', price: 48000 },
        ]
        let keys2 = ['id', 'mappingId', 'order', 'make', 'model', 'price', 'isActive']
        let rows2 = [
            { id: 'id-Toyota', mappingId: 'car_table', order: 0, make: 'Toyota', model: 'Celica', price: 35000, isActive: 'y' },
            { id: 'id-Ford', mappingId: 'car_table', order: 1, make: 'Ford', model: 'Mondeo', price: 32000, isActive: 'y' },
            { id: 'id-Porsche', mappingId: 'car_table', order: 2, make: 'Porsche', model: 'Boxter', price: 72000, isActive: 'y' },
            { id: 'id-BMW', mappingId: 'car_table', order: 11, make: 'BMW', model: 'Sedan', price: 66000, isActive: 'y' },
            { id: 'id-Nissan', mappingId: 'car_table', order: 8, make: 'Nissan', model: 'March', price: 61000, isActive: 'y' },
            { id: 'id-Lexus', mappingId: 'car_table', order: 4, make: 'Lexus', model: 'RX', price: 56000, isActive: 'y' },
            { id: 'id-Audi', mappingId: 'car_table', order: 5, make: 'Audi', model: 'A6 Allroad', price: 45000, isActive: 'y' },
            { id: 'id-Mazda', mappingId: 'car_table', order: 6, make: 'Mazda', model: 'MX-5', price: 36000, isActive: 'y' },
            { id: 'id-Mercedes', mappingId: 'car_table', order: 7, make: 'Mercedes-Benz', model: 'Cabriolet', price: 86000, isActive: 'y' },
            { id: 'id-Volkswagen', mappingId: 'car_table', order: 9, make: 'Volkswagen', model: 'Beetle', price: 68000, isActive: 'y' },
            { id: 'id-Honda', mappingId: 'car_table', order: 10, make: 'Honda', model: 'City', price: 69000, isActive: 'y' },
            { id: 'id-Volvo', mappingId: 'car_table', order: 12, make: 'Volvo', model: 'S60', price: 71000, isActive: 'y' },
            { id: 'id-Subaru', mappingId: 'car_table', order: 3, make: 'Subaru', model: 'BRZ', price: 48000, isActive: 'y' },
        ]
        let keys3 = ['id', 'mappingId', 'order', 'make', 'model', 'price', 'isActive']
        let rows3 = [
            { id: '', mappingId: '', order: 0, make: 'Toyota', model: 'Celica', price: 35000 },
            { id: '', mappingId: '', order: 1, make: 'Ford', model: 'Mondeo', price: 32000 },
            { id: '', mappingId: '', order: 2, make: 'Porsche', model: 'Boxter', price: 72000 },
            { id: '', mappingId: '', order: 11, make: 'BMW', model: 'Sedan', price: 66000 },
            { id: '', mappingId: '', order: 8, make: 'Nissan', model: 'March', price: 61000 },
            { id: '', mappingId: '', order: 4, make: 'Lexus', model: 'RX', price: 56000 },
            { id: '', mappingId: '', order: 5, make: 'Audi', model: 'A6 Allroad', price: 45000 },
            { id: '', mappingId: '', order: 6, make: 'Mazda', model: 'MX-5', price: 36000 },
            { id: '', mappingId: '', order: 7, make: 'Mercedes-Benz', model: 'Cabriolet', price: 86000 },
            { id: '', mappingId: '', order: 9, make: 'Volkswagen', model: 'Beetle', price: 68000 },
            { id: '', mappingId: '', order: 10, make: 'Honda', model: 'City', price: 69000 },
            { id: '', mappingId: '', order: 12, make: 'Volvo', model: 'S60', price: 71000 },
            { id: '', mappingId: '', order: 3, make: 'Subaru', model: 'BRZ', price: 48000 },
        ]
        return {
            'WTableDyn': {
                'name': 'Car Price',
                'description': 'The relationship between different car types and prices',
                'opt1': {
                    keys: keys1,
                    rows: rows1,
                },
                'opt2': {
                    keys: keys2,
                    rows: rows2,
                },
                'opt3': {
                    keys: keys2,
                    rows: rows2,
                    kpHead: {
                        id: '主鍵',
                        mappingId: '所屬主鍵',
                        order: '順序',
                        make: 'Ecirp',
                        model: 'Ledom',
                        price: 'Ecirp',
                        isActive: '有效',
                    },
                },
                'opt4': {
                    keys: keys2,
                    rows: rows2,
                    beforeAddRow: function(newRow) {
                        newRow.id = 'id-random-' + Math.random()
                        return newRow
                    },
                },
                'opt5': {
                    keys: keys2,
                    rows: rows2,
                    kpConvertKeysWhenUploadData: {
                        makeTemp: 'make',
                        modelTemp: 'model',
                        priceTemp: 'price',
                    },
                },
                'opt6': {
                    keys: keys2,
                    rows: rows2,
                    optForUploadData: { //input for uploadData in w-aggrid-vue, https://github.com/yuda-lyu/w-aggrid-vue
                        pathItems: null,
                        beforeUpload: null,
                        parseSheetInd: 1, //取第2個sheet, 預設0(取第1個sheet)
                    },
                },
                'opt7': {
                    keys: keys3,
                    rows: rows3,
                    modifyDataWhenSave: function(rows) {
                        console.log('modifyDataWhenSave', rows)
                        for (let k = 0; k < rows.length; k++) {
                            let v = rows[k]
                            v.id = 'id-random-' + Math.random()
                            v.mappingId = 'auto_car_table'
                            v.order = k
                            v.isActive = 'y'
                        }
                        return rows
                    },
                },
            },
            'actions': [
            ],
        }
    },
    methods: {
        evSuccess: function(msg) {
            console.log('evSuccess:', msg)
        },
        evError: function(msg) {
            console.log('evError:', msg)
        },
        saveData: function() {
            let data = this.$refs.table.save()
            document.querySelector('#disp-save-data').innerHTML = JSON.stringify(data, null, 2)
            console.log('saveData:', data)
        },
    },
}
</script>

<style scoped>
</style>
