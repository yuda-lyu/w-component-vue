<template>
    <div class="bkh">


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-vditor-dyn</span></div>


        <div style="font-size:0.9rem; margin-bottom:10px;">
            <span style="margin-right:10px;">Links:</span>
            <a href="//github.com/Vanessa219/vditor" target="_blank" rel="noreferrer noopener">vditor</a>
            <span style="margin:0px 10px">|</span>
            <a href="//b3log.org/vditor/" target="_blank" rel="noreferrer noopener">vditor examples</a>
        </div>


        <div>


            <div class="bk">
                <demolink
                    :kbname="'w-vditor-dyn'"
                    :casename="'default'"
                ></demolink>

                <w-vditor-dyn
                    style="width:620px;"
                    v-model="WVditorDyn.content"
                ></w-vditor-dyn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-vditor-dyn'"
                    :casename="'height'"
                ></demolink>

                <w-vditor-dyn
                    style="width:620px;"
                    :height="400"
                    v-model="WVditorDyn.content"
                ></w-vditor-dyn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-vditor-dyn'"
                    :casename="'fontSize'"
                ></demolink>

                <w-vditor-dyn
                    style="width:620px; font-size:0.85rem;"
                    v-model="WVditorDyn.content"
                ></w-vditor-dyn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-vditor-dyn'"
                    :casename="'slot & keyHint'"
                ></demolink>

                <div style="color:#f26; font-size:0.8rem;">* type [/ ht] to show popup</div>

                <w-vditor-dyn
                    style="width:620px;"
                    :keyHint="'ht'"
                    v-model="WVditorDyn.content"
                >

                    <template v-slot:content="props">
                        <div style="padding:4px 0px;">
                            <div
                                class="item item-white"
                                :key="kitem"
                                v-for="(item,kitem) in WVditorDyn.items"
                                @click="props.funInsert(item); props.funHide();"
                            >
                                Item {{item}}
                            </div>
                        </div>
                    </template>

                </w-vditor-dyn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-vditor-dyn'"
                    :casename="'slot & keyHint & hintBorderRadius'"
                ></demolink>

                <div style="color:#f26; font-size:0.8rem;">* type [/ ht] to show popup</div>

                <w-vditor-dyn
                    style="width:620px;"
                    :keyHint="'ht'"
                    :hintBorderRadius="0"
                    v-model="WVditorDyn.content"
                >

                    <template v-slot:content="props">
                        <div style="padding:4px 0px;">
                            <div
                                class="item item-white"
                                :key="kitem"
                                v-for="(item,kitem) in WVditorDyn.items"
                                @click="props.funInsert(item); props.funHide();"
                            >
                                Item {{item}}
                            </div>
                        </div>
                    </template>

                </w-vditor-dyn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-vditor-dyn'"
                    :casename="'slot & keyHint & hintBackgroundColor'"
                ></demolink>

                <div style="color:#f26; font-size:0.8rem;">* type [/ ht] to show popup</div>

                <w-vditor-dyn
                    style="width:620px;"
                    :keyHint="'ht'"
                    :hintBackgroundColor="'#333'"
                    v-model="WVditorDyn.content"
                >

                    <template v-slot:content="props">
                        <div style="padding:4px 0px;">
                            <div
                                class="item item-black"
                                style="color:#fff;"
                                :key="kitem"
                                v-for="(item,kitem) in WVditorDyn.items"
                                @click="props.funInsert(item); props.funHide();"
                            >
                                Item {{item}}
                            </div>
                        </div>
                    </template>

                </w-vditor-dyn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-vditor-dyn'"
                    :casename="'not editable'"
                ></demolink>

                <w-vditor-dyn
                    style="width:620px;"
                    :editable="false"
                    v-model="WVditorDyn.content"
                ></w-vditor-dyn>

            </div>


        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WVditorDyn from './components/WVditorDyn.vue'


export default {
    components: {
        demolink,
        WVditorDyn,
    },
    props: {
    },
    data: function() {
        return {
            'WVditorDyn': {
                'content': 'abc中文123',
                'items': ['foo', 'bar', 'fizz', 'buzz'],
            },
            'actions': [
            ],
        }
    },
}
</script>

<style scoped>
.item {
    transition: all 0.3s;
    padding: 5px 15px;
    cursor: pointer;
}
.item-white {
    background: #fff;
}
.item-white:hover {
    background: #eee;
}
.item-black {
    background: #333;
}
.item-black:hover {
    background: #555;
}
</style>
