<template>
    <div>


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-group-dragdrop</span></div>


        <div style="padding:0px;">


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
            },
            'actions': [
            ],
        }
    },
    methods: {
        dragdrop: function(msg) {
            console.log('dragdrop', msg)
        },
    },
}
</script>

<style scoped>
</style>
