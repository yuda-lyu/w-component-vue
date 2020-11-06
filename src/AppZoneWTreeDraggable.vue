<template>
    <div>


        <div class="head1">w-tree-draggable</div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-tree-draggable'"
                    :casename="'default'"
                ></demolink>

                <w-tree-draggable
                    :items="WTreeDraggable.option1.items"
                >
                    <template v-slot:item="props">
                        <div style="padding:7px;">
                            <div style="display:table-cell; white-space:nowrap; padding-right:10px;">
                                <v-chip
                                    style="margin-right:5px;"
                                    small
                                    label
                                    dark
                                    color="purple darken-1"
                                >
                                    {{props.node.id}}
                                </v-chip>
                                <v-chip
                                    small
                                    label
                                    color="blue lighten-4"
                                >
                                    Lv{{(props.node.nk.length+1)/2}}
                                </v-chip>
                            </div>
                            <div style="display:table-cell;">
                                {{props.node.name}}
                                <div style="font-size:0.8rem; color:#aaa;">{{props.node}}</div>
                            </div>
                        </div>
                    </template>
                </w-tree-draggable>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tree-draggable'"
                    :casename="'bindChildren'"
                ></demolink>

                <w-tree-draggable
                    :items="WTreeDraggable.option2.items"
                    :bindChildren="'items'"
                >
                    <template v-slot:item="props">
                        <div style="padding:7px;">
                            <v-chip
                                style="margin-right:5px;"
                                small
                                label
                                dark
                                color="purple darken-1"
                            >
                                {{props.node.id}}
                            </v-chip>
                            <v-chip
                                small
                                label
                                color="blue lighten-4"
                            >
                                Lv{{(props.node.nk.length+1)/2}}
                            </v-chip>
                            {{props.node.name}}
                        </div>
                    </template>
                </w-tree-draggable>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tree-draggable'"
                    :casename="'indent'"
                ></demolink>

                <w-tree-draggable
                    :items="WTreeDraggable.option3.items"
                    :indent="30"
                >
                    <template v-slot:item="props">
                        <div style="padding:7px;">
                            <v-chip
                                style="margin-right:5px;"
                                small
                                label
                                dark
                                color="purple darken-1"
                            >
                                {{props.node.id}}
                            </v-chip>
                            <v-chip
                                small
                                label
                                color="blue lighten-4"
                            >
                                Lv{{(props.node.nk.length+1)/2}}
                            </v-chip>
                            {{props.node.name}}
                        </div>
                    </template>
                </w-tree-draggable>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tree-draggable'"
                    :casename="'textDisabled & textDisabledColor & textDisabledPaddingLeft & textDisabledFontSize & textDisabledBackgroundColor'"
                ></demolink>

                <w-tree-draggable
                    :items="WTreeDraggable.option4.items"
                    :textDisabled="'禁止拖曳至自己子節點當中'"
                    :textDisabledColor="'pink accent-3'"
                    :textDisabledPaddingLeft="13"
                    :textDisabledFontSize="'0.8rem'"
                    :textDisabledBackgroundColor="'rgba(255,255,255,0.8)'"
                >
                    <template v-slot:item="props">
                        <div style="padding:7px;">
                            <v-chip
                                style="margin-right:5px;"
                                small
                                label
                                dark
                                color="purple darken-1"
                            >
                                {{props.node.id}}
                            </v-chip>
                            <v-chip
                                small
                                label
                                color="blue lighten-4"
                            >
                                Lv{{(props.node.nk.length+1)/2}}
                            </v-chip>
                            {{props.node.name}}
                        </div>
                    </template>
                </w-tree-draggable>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tree-draggable'"
                    :casename="'shiftLineColor & shiftBlockColor & joinBlockColor'"
                ></demolink>

                <w-tree-draggable
                    :items="WTreeDraggable.option5.items"
                    :shiftLineColor="'rgba(120,220,150,0.9)'"
                    :shiftBlockColor="'rgba(50,220,100,0.1)'"
                    :joinBlockColor="'rgba(50,220,100,0.2)'"
                >
                    <template v-slot:item="props">
                        <div style="padding:7px;">
                            <v-chip
                                style="margin-right:5px;"
                                small
                                label
                                dark
                                color="purple darken-1"
                            >
                                {{props.node.id}}
                            </v-chip>
                            <v-chip
                                style="margin-right:5px;"
                                small
                                label
                                color="blue lighten-4"
                            >
                                Lv{{(props.node.nk.length+1)/2}}
                            </v-chip>
                            <span style="font-size:0.85rem;">{{props.node.name}}</span>
                        </div>
                    </template>
                </w-tree-draggable>

            </div>


        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WTreeDraggable from './components/WTreeDraggable.vue'


export default {
    components: {
        demolink,
        WTreeDraggable,
    },
    props: {
    },
    data: function() {
        let items = [
            {
                id: 1,
                name: 'Display',
                children: [
                    { id: 2, name: 'Interpolate' },
                    {
                        id: 3,
                        name: 'Graph',
                        children: [
                            { id: 4, name: 'Animate' },
                        ],
                    },
                ],
            },
            {
                id: 5,
                name: 'Analysis',
            },
        ]
        return {
            'WTreeDraggable': {
                'option1': {
                    items: [
                        {
                            id: 1,
                            name: 'Applications :',
                            children: [
                                { id: 2, name: 'Calendar : app' },
                                { id: 3, name: 'Chrome : app' },
                                { id: 4, name: 'Webstorm : app' },
                            ],
                        },
                        {
                            id: 5,
                            name: 'Documents :',
                            children: [
                                {
                                    id: 6,
                                    name: 'vuetify :',
                                    children: [
                                        {
                                            id: 7,
                                            name: 'src :',
                                            children: [
                                                { id: 8, name: 'index : ts' },
                                                { id: 9, name: 'bootstrap : ts' },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    id: 10,
                                    name: 'material2 :',
                                    children: [
                                        {
                                            id: 11,
                                            name: 'src :',
                                            children: [
                                                { id: 12, name: 'v-btn : ts' },
                                                { id: 13, name: 'v-card : ts' },
                                                { id: 14, name: 'v-window : ts' },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            id: 15,
                            name: 'Downloads :',
                            children: [
                                { id: 16, name: 'October : pdf' },
                                { id: 17, name: 'November : pdf' },
                                { id: 18, name: 'Tutorial : html' },
                            ],
                        },
                        {
                            id: 19,
                            name: 'Videos :',
                            children: [
                                {
                                    id: 20,
                                    name: 'Tutorials :',
                                    children: [
                                        { id: 21, name: 'Basic layouts : mp4' },
                                        { id: 22, name: 'Advanced techniques : mp4' },
                                        { id: 23, name: 'All about app : dir' },
                                    ],
                                },
                                { id: 24, name: 'Intro : mov' },
                                { id: 25, name: 'Conference introduction : avi' },
                            ],
                        },
                    ],
                },
                'option2': {
                    items: [
                        {
                            id: 1,
                            name: 'Display',
                            items: [
                                { id: 2, name: 'Interpolate' },
                                {
                                    id: 3,
                                    name: 'Graph',
                                    items: [
                                        { id: 4, name: 'Animate' },
                                    ],
                                },
                            ],
                        },
                        {
                            id: 5,
                            name: 'Analysis',
                        },
                    ]
                },
                'option3': {
                    items: JSON.parse(JSON.stringify(items)),
                },
                'option4': {
                    items: JSON.parse(JSON.stringify(items)),
                },
                'option5': {
                    items: [
                        {
                            id: 1,
                            name: 'A Smarter Way to Learn JavaScript: The new tech-assisted approach that requires half the effort',
                        },
                        {
                            id: 2,
                            name: 'Eloquent JavaScript: A Modern Introduction to Programming',
                        },
                        {
                            id: 3,
                            name: 'JavaScript & JQuery: Interactive Front-End Web Development',
                        },
                        {
                            id: 4,
                            name: 'JavaScript: The Good Parts',
                        },
                        {
                            id: 5,
                            name: 'Learn JavaScript VISUALLY',
                        },
                    ],
                },
            },
            'actions': [
            ],
        }
    },
}
</script>

<style scoped>
</style>
