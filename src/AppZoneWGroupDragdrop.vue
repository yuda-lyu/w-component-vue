<template>
    <div class="bkh">


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-group-dragdrop</span></div>


        <div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-dragdrop'"
                    :casename="'default'"
                ></demolink>

                <w-group-dragdrop
                    v-model="WGroupDragdrop.itemsObj"
                >
                    <template v-slot="props">

                        <div style="padding:0px 10px 10px 0px;">
                            <div style="display:flex; align-items:center; padding:3px 8px; border-radius:30px; border:1px solid #ddd;">

                                <div style="margin-right:5px; padding:0px 5px; border-radius:30px; background:#f26; color:#fff; font-size:0.8rem;">
                                    {{props.item.id}}
                                </div>

                                <div>
                                    {{props.item.name}}
                                </div>

                            </div>
                        </div>

                    </template>
                </w-group-dragdrop>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-dragdrop'"
                    :casename="'items(string array)'"
                ></demolink>

                <w-group-dragdrop
                    v-model="WGroupDragdrop.itemsStr"
                >
                    <template v-slot="props">

                        <div style="padding:0px 10px 10px 0px;">
                            <div style="display:flex; align-items:center; padding:3px 10px; border-radius:30px; border:1px solid #ddd;">

                                <div>
                                    {{props.item}}
                                </div>

                            </div>
                        </div>

                    </template>
                </w-group-dragdrop>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-dragdrop'"
                    :casename="'event (dragdrop)'"
                ></demolink>

                <w-group-dragdrop
                    v-model="WGroupDragdrop.itemsObj"
                    @dragdrop="dragdrop"
                >
                    <template v-slot="props">

                        <div style="padding:0px 10px 10px 0px;">
                            <div style="display:flex; align-items:center; padding:3px 8px; border-radius:30px; border:1px solid #ddd;">

                                <div style="margin-right:5px; padding:0px 5px; border-radius:30px; background:#f26; color:#fff; font-size:0.8rem;">
                                    {{props.item.id}}
                                </div>

                                <div>
                                    {{props.item.name}}
                                </div>

                            </div>
                        </div>

                    </template>
                </w-group-dragdrop>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-dragdrop'"
                    :casename="'not itemStyleInline (block)'"
                ></demolink>

                <w-group-dragdrop
                    v-model="WGroupDragdrop.itemsObj"
                    :itemStyleInline="false"
                >
                    <template v-slot="props">

                        <div style="padding:0px 10px 10px 0px;">
                            <div style="display:flex; align-items:center; padding:3px 8px; border-radius:30px; border:1px solid #ddd;">

                                <div style="margin-right:5px; padding:0px 5px; border-radius:30px; background:#f26; color:#fff; font-size:0.8rem;">
                                    {{props.item.id}}
                                </div>

                                <div>
                                    {{props.item.name}}
                                </div>

                            </div>
                        </div>

                    </template>
                </w-group-dragdrop>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-dragdrop'"
                    :casename="'keyBinder'"
                ></demolink>

                <w-group-dragdrop
                    :keyBinder="(v)=>{return v.id}"
                    :value="WGroupDragdrop.itemsObjWhidRandomProp"
                    @input="randomProp"
                >
                    <template v-slot="props">

                        <div style="padding:0px 10px 10px 0px;">
                            <div style="display:flex; align-items:center; padding:3px 8px; border-radius:30px; border:1px solid #ddd;">

                                <div style="padding:0px 5px 0px 7px; border-top-left-radius:30px; border-bottom-left-radius:30px; background:#f26; color:#fff; font-size:0.8rem;">
                                    {{props.item.id}}
                                </div>

                                <div style="padding:0px 7px 0px 5px; border-top-right-radius:30px; border-bottom-right-radius:30px; background:#62f; color:#fff; font-size:0.8rem;">
                                    {{props.item.rnd}}
                                </div>

                                <div style="margin-left:5px;">
                                    {{props.item.name}}
                                </div>

                            </div>
                        </div>

                    </template>
                </w-group-dragdrop>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-dragdrop'"
                    :casename="'not draggable'"
                ></demolink>

                <w-group-dragdrop
                    v-model="WGroupDragdrop.itemsObj"
                    :draggable="false"
                >
                    <template v-slot="props">

                        <div style="padding:0px 10px 10px 0px;">
                            <div style="display:flex; align-items:center; padding:3px 8px; border-radius:30px; border:1px solid #ddd;">

                                <div style="margin-right:5px; padding:0px 5px; border-radius:30px; background:#f26; color:#fff; font-size:0.8rem;">
                                    {{props.item.id}}
                                </div>

                                <div>
                                    {{props.item.name}}
                                </div>

                            </div>
                        </div>

                    </template>
                </w-group-dragdrop>

            </div>


        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WGroupDragdrop from './components/WGroupDragdrop.vue'


export default {
    components: {
        demolink,
        WGroupDragdrop,
    },
    props: {
    },
    data: function() {
        return {
            'WGroupDragdrop': {
                'itemsStr': [
                    'Lorem',
                    'Ipsum',
                    'Dolor',
                    'Sitamet',
                ],
                'itemsObj': [
                    {
                        'name': 'Lorem',
                        'id': 'A0',
                    },
                    {
                        'name': 'Ipsum',
                        'id': 'A2',
                    },
                    {
                        'name': 'Dolor',
                        'id': 'A1',
                    },
                    {
                        'name': 'Sitamet',
                        'id': 'A3',
                    },
                ],
                'itemsObjWhidRandomProp': [
                    {
                        'name': 'Lorem',
                        'id': 'A0',
                        'rnd': 0,
                    },
                    {
                        'name': 'Ipsum',
                        'id': 'A2',
                        'rnd': 0,
                    },
                    {
                        'name': 'Dolor',
                        'id': 'A1',
                        'rnd': 0,
                    },
                    {
                        'name': 'Sitamet',
                        'id': 'A3',
                        'rnd': 0,
                    },
                ],
            },
            'actions': [
            ],
        }
    },
    methods: {
        dragdrop: function(msg) {
            console.log('dragdrop', msg)
        },
        randomProp: function(items) {
            console.log('randomProp', items)
            items = JSON.parse(JSON.stringify(items))
            for (let i = 0; i < items.length; i++) {
                items[i].rnd = Math.floor(Math.random() * 100)
            }
            this.WGroupDragdrop.itemsObjWhidRandomProp = items
        },
    },
}
</script>

<style scoped>
</style>
