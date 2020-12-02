<template>
    <div>


        <div class="head1">w-tree</div>


        <div style="padding:0px;">


            <div class="bk dz">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'default'"
                ></demolink>

                <w-tree
                    style="border:1px solid #ddd;"
                    :data="WTree.option.items"
                ></w-tree>

            </div>


            <div class="bk dz">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'viewHeightMax'"
                ></demolink>

                <w-tree
                    style="border:1px solid #ddd;"
                    :viewHeightMax="300"
                    :data="WTree.option.items"
                ></w-tree>

            </div>


            <div class="bk dz">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'paddingStyle'"
                ></demolink>

                <w-tree
                    style="border:1px solid #ddd;"
                    :paddingStyle="{v:5,h:5}"
                    :data="WTree.option.items"
                ></w-tree>

            </div>


            <div class="bk dz">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'indent'"
                ></demolink>

                <w-tree
                    style="border:1px solid #ddd;"
                    :indent="0.5"
                    :data="WTree.option.items"
                ></w-tree>

            </div>


            <div class="bk dz">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'iconToggleColor & iconToggleBackgroundColor & iconToggleBackgroundColorHover'"
                ></demolink>

                <w-tree
                    style="border:1px solid #ddd;"
                    :iconToggleColor="'#d39a70'"
                    :iconToggleBackgroundColor="'rgba(211,154,112,0.1)'"
                    :iconToggleBackgroundColorHover="'rgba(211,154,112,0.3)'"
                    :data="WTree.option.items"
                ></w-tree>

            </div>


            <div class="bk dz">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'keyPrimary & keyText & keyChildren'"
                ></demolink>

                <w-tree
                    style="border:1px solid #ddd;"
                    :keyPrimary="'sid'"
                    :keyText="'name'"
                    :keyChildren="'packages'"
                    :data="WTree.optionKeys.items"
                ></w-tree>

            </div>


            <div class="bk dz">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'mouseenter & mouseleave'"
                ></demolink>

                <w-tree
                    style="border:1px solid #ddd;"
                    :data="WTree.option.items"
                    @mouseenter="mouseenter"
                    @mouseleave="mouseleave"
                ></w-tree>

            </div>


            <div class="bk dz">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'slot'"
                ></demolink>

                <w-tree
                    style="border:1px solid #ddd;"
                    :data="WTree.option.items"
                >
                    <template v-slot:block="props">
                        <div style="display:flex;" @click="click(props)">

                            <div style="display:flex; align-items:center; padding-right:5px;" v-if="props.data.avatar">
                                <img style="border-radius:50%; width:24px; height:24px;" :src="props.data.avatar" />
                            </div>

                            <div style="display:flex; align-items:center; padding-right:5px;" v-if="props.data.icon">
                                <v-icon size="18" color="deep-orange">{{props.data.icon}}</v-icon>
                            </div>

                            <div style="padding:5px 0px;">
                                <div style="display:flex; align-items:center;">
                                    <div style="margin-right:7px;">{{props.data.text}}</div>
                                    <div style="padding:0px 9px; font-size:0.7rem; color:#fff; border-radius:30px; background:#f26;" v-if="props.data.key">{{props.data.key}}</div>
                                </div>
                                <div style="padding-right:20px;" v-if="props.data.msg">
                                    <div style="font-size:0.7rem; color:#999; text-indent:1rem; padding:12px 18px; background:#fefafa;">{{props.data.msg}}</div>
                                </div>
                            </div>

                        </div>

                    </template>
                </w-tree>

            </div>


            <div class="bk" style="display:block; margin:0px 10px 0px 0px;">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'selectable'"
                ></demolink>

                <!-- 用:style才能支援IE11因vue會自動把overflow-x:auto轉為-ms-overflow-x:auto -->
                <div :style="'overflow-x:auto;'">

                    <div style="display:table-cell; vertical-align:top;">
                        <w-tree
                            style="width:500px; border:1px solid #ddd;"
                            :data="WTree.option.items"
                            :selectable="true"
                            :selections.sync="WTree.option.selections"
                        >
                            <template v-slot:block="props">
                                <div style="display:flex;">

                                    <div style="display:flex; align-items:center; padding-right:5px;" v-if="props.data.avatar">
                                        <img style="border-radius:50%; width:24px; height:24px;" :src="props.data.avatar" />
                                    </div>

                                    <div style="display:flex; align-items:center; padding-right:5px;" v-if="props.data.icon">
                                        <v-icon size="18" color="deep-orange">{{props.data.icon}}</v-icon>
                                    </div>

                                    <div style="padding:5px 0px;">
                                        <div style="display:flex; align-items:center;">
                                            <div style="margin-right:7px;">
                                                {{props.data.text}}
                                                <div style="display:inline-block; color:#26f; font-size:0.7rem;">[id:{{props.data.id}}]</div>
                                            </div>
                                            <div style="padding:0px 9px; font-size:0.7rem; color:#fff; border-radius:30px; background:#f26;" v-if="props.data.key">{{props.data.key}}</div>
                                        </div>
                                        <div style="padding-right:20px;" v-if="props.data.msg">
                                            <div style="font-size:0.7rem; color:#999; text-indent:1rem; padding:12px 18px; background:#fefafa;">{{props.data.msg}}</div>
                                        </div>
                                    </div>

                                </div>

                            </template>
                        </w-tree>
                    </div>

                    <div style="display:table-cell; vertical-align:top;">
                        <!-- 用:style才能支援IE11因vue會自動把overflow-y:auto轉為-ms-overflow-y:auto -->
                        <div :style="'padding:10px 20px; height:402px; overflow-y:auto; border:1px solid #ddd; border-left-width:0px;'">
                            <div style="margin-bottom:5px;">selections: </div>
                            <pre style="font-size:0.7rem;">{{JSON.stringify(showSelection(WTree.option.selections),null,4)}}</pre>
                        </div>
                    </div>

                </div>

            </div>


            <div class="bk" style="display:block; margin:0px 10px 0px 0px;">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'filterKeywords & searchEmpty & selectable'"
                ></demolink>

                <div style="margin-bottom:10px;">
                    <span style="padding-right:10px;">Search :</span>
                    <input
                        style="padding:2px 15px; color:#666; border:1px solid #fca; border-radius:30px; outline:none;"
                        v-model="WTree.option.keywords"
                    />
                </div>

                <!-- 用:style才能支援IE11因vue會自動把overflow-x:auto轉為-ms-overflow-x:auto -->
                <div :style="'overflow-x:auto;'">

                    <div style="display:table-cell; vertical-align:top;">
                        <w-tree
                            style="width:500px; border:1px solid #ddd;"
                            :data="WTree.option.items"
                            :selectable="true"
                            :selections.sync="WTree.option.selections"
                            :filterKeywords="WTree.option.keywords"
                            :searchEmpty="'There are no items to show...'"
                        >
                            <template v-slot:block="props">
                                <div style="display:flex;">

                                    <div style="display:flex; align-items:center; padding-right:5px;" v-if="props.data.avatar">
                                        <img style="border-radius:50%; width:24px; height:24px;" :src="props.data.avatar" />
                                    </div>

                                    <div style="display:flex; align-items:center; padding-right:5px;" v-if="props.data.icon">
                                        <v-icon size="18" color="deep-orange">{{props.data.icon}}</v-icon>
                                    </div>

                                    <div style="padding:5px 0px;">
                                        <div style="display:flex; align-items:center;">
                                            <div style="margin-right:7px;">
                                                {{props.data.text}}
                                                <div style="display:inline-block; color:#26f; font-size:0.7rem;">[id:{{props.data.id}}]</div>
                                            </div>
                                            <div style="padding:0px 9px; font-size:0.7rem; color:#fff; border-radius:30px; background:#f26;" v-if="props.data.key">{{props.data.key}}</div>
                                        </div>
                                        <div style="padding-right:20px;" v-if="props.data.msg">
                                            <div style="font-size:0.7rem; color:#999; text-indent:1rem; padding:12px 18px; background:#fefafa;">{{props.data.msg}}</div>
                                        </div>
                                    </div>

                                </div>

                            </template>
                        </w-tree>
                    </div>

                    <div style="display:table-cell; vertical-align:top;">
                        <!-- 用:style才能支援IE11因vue會自動把overflow-y:auto轉為-ms-overflow-y:auto -->
                        <div :style="'padding:10px 20px; height:402px; overflow-y:auto; border:1px solid #ddd; border-left-width:0px;'">
                            <div style="margin-bottom:5px;">selections: </div>
                            <pre style="font-size:0.7rem;">{{JSON.stringify(showSelection(WTree.option.selections),null,4)}}</pre>
                        </div>
                    </div>

                </div>

            </div>


            <div class="bk" style="display:block; margin:0px 10px 0px 0px;">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'locked & selectable'"
                ></demolink>

                <!-- 用:style才能支援IE11因vue會自動把overflow-x:auto轉為-ms-overflow-x:auto -->
                <div :style="'overflow-x:auto;'">

                    <div style="display:table-cell; vertical-align:top;">
                        <w-tree
                            style="width:500px; border:1px solid #ddd;"
                            :data="WTree.optionLocked.items"
                            :selectable="true"
                            :selections.sync="WTree.optionLocked.selections"
                            :locked="'locked'"
                        >
                            <template v-slot:block="props">
                                <div style="display:flex;">

                                    <div style="display:flex; align-items:center; padding-right:5px;" v-if="props.data.avatar">
                                        <img style="border-radius:50%; width:24px; height:24px;" :src="props.data.avatar" />
                                    </div>

                                    <div style="display:flex; align-items:center; padding-right:5px;" v-if="props.data.icon">
                                        <v-icon size="18" color="deep-orange">{{props.data.icon}}</v-icon>
                                    </div>

                                    <div style="padding:5px 0px;">
                                        <div style="display:flex; align-items:center;">
                                            <div style="margin-right:7px;">
                                                {{props.data.text}}
                                                <div style="display:inline-block; color:#26f; font-size:0.7rem;">[id:{{props.data.id}}]</div>
                                            </div>
                                            <div style="padding:0px 9px; font-size:0.7rem; color:#fff; border-radius:30px; background:#f26;" v-if="props.data.key">{{props.data.key}}</div>
                                        </div>
                                        <div style="padding-right:20px;" v-if="props.data.msg">
                                            <div style="font-size:0.7rem; color:#999; text-indent:1rem; padding:12px 18px; background:#fefafa;">{{props.data.msg}}</div>
                                        </div>
                                    </div>

                                </div>

                            </template>
                        </w-tree>
                    </div>

                    <div style="display:table-cell; vertical-align:top;">
                        <!-- 用:style才能支援IE11因vue會自動把overflow-y:auto轉為-ms-overflow-y:auto -->
                        <div :style="'padding:10px 20px; height:402px; overflow-y:auto; border:1px solid #ddd; border-left-width:0px;'">
                            <div style="margin-bottom:5px;">selections: </div>
                            <pre style="font-size:0.7rem;">{{JSON.stringify(showSelection(WTree.optionLocked.selections),null,4)}}</pre>
                        </div>
                    </div>

                </div>

            </div>


            <div class="bk" style="display:block; margin:0px 10px 0px 0px;">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'iconUncheckedColor & iconUncheckedDisabledColor & iconCheckedColor & iconCheckedDisabledColor & iconCheckedPartiallyColor & iconCheckedPartiallyDisabledColor & locked & selectable'"
                ></demolink>

                <!-- 用:style才能支援IE11因vue會自動把overflow-x:auto轉為-ms-overflow-x:auto -->
                <div :style="'overflow-x:auto;'">

                    <div style="display:table-cell; vertical-align:top;">
                        <w-tree
                            style="width:500px; border:1px solid #ddd;"
                            :data="WTree.optionLocked.items"
                            :selectable="true"
                            :selections.sync="WTree.optionLocked.selections"
                            :locked="'locked'"
                            :iconUncheckedColor="'grey darken-1'"
                            :iconUncheckedDisabledColor="'orange lighten-4'"
                            :iconCheckedColor="'orange darken-2'"
                            :iconCheckedDisabledColor="'orange lighten-4'"
                            :iconCheckedPartiallyColor="'orange lighten-2'"
                            :iconCheckedPartiallyDisabledColor="'orange lighten-4'"
                        >
                            <template v-slot:block="props">
                                <div style="display:flex;">

                                    <div style="display:flex; align-items:center; padding-right:5px;" v-if="props.data.avatar">
                                        <img style="border-radius:50%; width:24px; height:24px;" :src="props.data.avatar" />
                                    </div>

                                    <div style="display:flex; align-items:center; padding-right:5px;" v-if="props.data.icon">
                                        <v-icon size="18" color="deep-orange">{{props.data.icon}}</v-icon>
                                    </div>

                                    <div style="padding:5px 0px;">
                                        <div style="display:flex; align-items:center;">
                                            <div style="margin-right:7px;">
                                                {{props.data.text}}
                                                <div style="display:inline-block; color:#26f; font-size:0.7rem;">[id:{{props.data.id}}]</div>
                                            </div>
                                            <div style="padding:0px 9px; font-size:0.7rem; color:#fff; border-radius:30px; background:#f26;" v-if="props.data.key">{{props.data.key}}</div>
                                        </div>
                                        <div style="padding-right:20px;" v-if="props.data.msg">
                                            <div style="font-size:0.7rem; color:#999; text-indent:1rem; padding:12px 18px; background:#fefafa;">{{props.data.msg}}</div>
                                        </div>
                                    </div>

                                </div>

                            </template>
                        </w-tree>
                    </div>

                    <div style="display:table-cell; vertical-align:top;">
                        <!-- 用:style才能支援IE11因vue會自動把overflow-y:auto轉為-ms-overflow-y:auto -->
                        <div :style="'padding:10px 20px; height:402px; overflow-y:auto; border:1px solid #ddd; border-left-width:0px;'">
                            <div style="margin-bottom:5px;">selections: </div>
                            <pre style="font-size:0.7rem;">{{JSON.stringify(showSelection(WTree.optionLocked.selections),null,4)}}</pre>
                        </div>
                    </div>

                </div>

            </div>


            <div class="bk" style="display:block; margin:0px 10px 0px 0px;">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'large data (100,000 items)'"
                ></demolink>

                <!-- 用:style才能支援IE11因vue會自動把overflow-x:auto轉為-ms-overflow-x:auto -->
                <div :style="'overflow-x:auto;'">

                    <div style="display:table-cell; vertical-align:top;">
                        <w-tree
                            style="width:500px; border:1px solid #ddd;"
                            :data="WTree.optionLarge.items"
                            :selectable="true"
                            :selections.sync="WTree.optionLarge.selections"
                        >
                            <template v-slot:block="props">
                                <div style="height:100%; display:flex; align-items:center;">
                                    <div style="margin-right:5px;">
                                        {{props.data.text}}
                                    </div>
                                    <div style="color:#26f; font-size:0.7rem;">
                                        [id:{{props.data.id}}]
                                    </div>
                                </div>
                            </template>
                        </w-tree>
                    </div>

                    <div style="display:table-cell; vertical-align:top;">
                        <!-- 用:style才能支援IE11因vue會自動把overflow-y:auto轉為-ms-overflow-y:auto -->
                        <div :style="'padding:10px 20px; height:402px; overflow-y:auto; border:1px solid #ddd; border-left-width:0px;'">
                            <div style="margin-bottom:5px;">selections: </div>
                            <pre style="font-size:0.7rem;">{{JSON.stringify(showSelection(WTree.optionLarge.selections),null,4)}}</pre>
                        </div>
                    </div>

                </div>

            </div>


        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WTree from './components/WTree.vue'


// let data = (function (n) {
//     n /= 20
//     let msg = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.'
//     let cItems = '{"id":"{n+1}","text":"Satisfied customers","avatar":"https://cdn.vuetifyjs.com/images/lists/1.jpg","children":[{"id":"{n+2}","text":"Good food","icon":"fas fa-utensils","children":[{"id":"{n+3}","text":"Quality ingredients","children":[{"id":"{n+4}","text":"Character","key":"Genus","msg":"{msg}"},{"id":"{n+5}","text":"Fabric","key":"Genus","msg":"{msg}"}]},{"id":"{n+6}","text":"Good recipe","key":"Family","msg":"{msg}"}]},{"id":"{n+7}","text":"Good service","icon":"fas fa-concierge-bell","children":[{"id":"{n+8}","text":"Prompt attention","key":"Order","msg":"{msg}"},{"id":"{n+9}","text":"Professional waiter","key":"Order","children":[{"id":"{n+10}","text":"Others customers","avatar":"https://cdn.vuetifyjs.com/images/lists/2.jpg","children":[{"id":"{n+11}","text":"Conformance to requirements","key":"Phylum"},{"id":"{n+12}","text":"Fitness for use","children":[{"id":"{n+13}","text":"Refers","key":"Expanded","msg":"{msg}"}]},{"id":"{n+14}","text":"Need to care","children":[{"id":"{n+15}","text":"Models","key":"Disables","msg":"{msg}"}]}]}]}]},{"id":"{n+16}","text":"Pleasant surroundings","icon":"fas fa-camera-retro","children":[{"id":"{n+17}","text":"Happy atmosphere","key":"Class","msg":"{msg}"},{"id":"{n+18}","text":"Good table presentation","key":"Class","msg":"{msg}"},{"id":"{n+19}","text":"Pleasing decor","key":"Class","msg":"{msg}"},{"id":"{n+20}","text":"Special experience","key":"Class","msg":"{msg}"}]}]}'
//     function getOneObj(j) {
//         let t = cItems
//         t = t.replace(new RegExp('{msg}', 'g'), msg)
//         for (let i = 1; i <= 20; i++) {
//             t = t.replace(`{n+${i}}`, `${j + i}`)
//         }
//         return JSON.parse(t)
//     }
//     let rs = []
//     for (let j = 0; j < n; j++) {
//         let r = getOneObj(j * 20)
//         rs.push(r)
//     }
//     return rs
// })(100)
// console.log(data)


export default {
    components: {
        demolink,
        WTree,
    },
    props: {
    },
    data: function() {
        return {
            'WTree': {
                'option': {
                    keywords: 'abr care att',
                    selections: [
                        { 'id': 5 },
                        { 'id': 9 },
                        { 'id': 18 },
                        //勾選id:18會自動再加入id:19
                    ],
                    items: [
                        {
                            id: 1,
                            text: 'Satisfied customers',
                            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                            children: [
                                {
                                    id: 2,
                                    text: 'Good food',
                                    icon: 'fas fa-utensils',
                                    children: [
                                        {
                                            id: 3,
                                            text: 'Quality ingredients',
                                            children: [
                                                {
                                                    id: 4,
                                                    text: 'Character',
                                                    key: 'Genus',
                                                    msg: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.',
                                                },
                                                {
                                                    id: 5,
                                                    text: 'Fabric',
                                                    key: 'Genus',
                                                    msg: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.',
                                                }
                                            ]
                                        },
                                        {
                                            id: 6,
                                            text: 'Good recipe',
                                            key: 'Family',
                                            msg: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.',
                                        }
                                    ]
                                },
                                {
                                    id: 7,
                                    text: 'Good service',
                                    icon: 'fas fa-concierge-bell',
                                    children: [
                                        {
                                            id: 8,
                                            text: 'Prompt attention',
                                            key: 'Order',
                                            msg: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.',
                                        },
                                        {
                                            id: 9,
                                            text: 'Professional waiter',
                                            key: 'Order',
                                            msg: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.',
                                        }
                                    ]
                                },
                                {
                                    id: 10,
                                    text: 'Pleasant surroundings',
                                    icon: 'fas fa-camera-retro',
                                    children: [
                                        {
                                            id: 11,
                                            text: 'Happy atmosphere',
                                            key: 'Class',
                                            msg: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.',
                                        },
                                        {
                                            id: 12,
                                            text: 'Good table presentation',
                                            key: 'Class',
                                            msg: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.',
                                        },
                                        {
                                            id: 13,
                                            text: 'Pleasing decor',
                                            key: 'Class',
                                            msg: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.',
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 14,
                            text: 'Others customers',
                            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                            children: [
                                {
                                    id: 15,
                                    text: 'Conformance to requirements',
                                    key: 'Phylum',
                                },
                                {
                                    id: 16,
                                    text: 'Fitness for use',
                                    children: [
                                        {
                                            id: 17,
                                            text: 'Refers',
                                            key: 'Expanded',
                                            msg: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.',
                                        }
                                    ]
                                },
                                {
                                    id: 18,
                                    text: 'Need to care',
                                    children: [
                                        {
                                            id: 19,
                                            text: 'Models',
                                            key: 'Disables',
                                            msg: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.',
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                },
                'optionKeys': {
                    items: [
                        {
                            sid: 's1',
                            name: 'Applications :',
                            packages: [
                                { sid: 's2', name: 'Calendar : app' },
                                { sid: 's3', name: 'Chrome : app' },
                                { sid: 's4', name: 'Webstorm : app' },
                            ],
                        },
                        {
                            sid: 's5',
                            name: 'Documents :',
                            packages: [
                                {
                                    sid: 's6',
                                    name: 'vuetify :',
                                    packages: [
                                        {
                                            sid: 's7',
                                            name: 'src :',
                                            packages: [
                                                { sid: 's8', name: 'index : ts' },
                                                { sid: 's9', name: 'bootstrap : ts' },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    sid: 's10',
                                    name: 'material2 :',
                                    packages: [
                                        {
                                            sid: 's11',
                                            name: 'src :',
                                            packages: [
                                                { sid: 's12', name: 'v-btn : ts' },
                                                { sid: 's13', name: 'v-card : ts' },
                                                { sid: 's14', name: 'v-window : ts' },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            sid: 's15',
                            name: 'Downloads :',
                            packages: [
                                { sid: 's16', name: 'October : pdf' },
                                { sid: 's17', name: 'November : pdf' },
                                { sid: 's18', name: 'Tutorial : html' },
                            ],
                        },
                        {
                            sid: 's19',
                            name: 'Videos :',
                            packages: [
                                {
                                    sid: 's20',
                                    name: 'Tutorials :',
                                    packages: [
                                        { sid: 's21', name: 'Basic layouts : mp4' },
                                        { sid: 's22', name: 'Advanced techniques : mp4' },
                                        { sid: 's23', name: 'All about app : dir' },
                                    ],
                                },
                                { sid: 's24', name: 'Intro : mov' },
                                { sid: 's25', name: 'Conference introduction : avi' },
                            ],
                        },
                    ],
                },
                'optionLocked': {
                    selections: [
                        { 'id': 5 },
                        { 'id': 9 },
                        { 'id': 18 },
                        //勾選id:18會自動再加入id:19
                    ],
                    items: [
                        {
                            id: 1,
                            text: 'Satisfied customers',
                            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                            children: [
                                {
                                    id: 2,
                                    locked: true,
                                    text: 'Good food',
                                    icon: 'fas fa-utensils',
                                    children: [
                                        {
                                            id: 3,
                                            text: 'Quality ingredients',
                                            children: [
                                                {
                                                    id: 4,
                                                    locked: true,
                                                    text: 'Character',
                                                    key: 'Genus',
                                                    msg: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.',
                                                },
                                                {
                                                    id: 5,
                                                    text: 'Fabric',
                                                    key: 'Genus',
                                                    msg: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.',
                                                }
                                            ]
                                        },
                                        {
                                            id: 6,
                                            text: 'Good recipe',
                                            key: 'Family',
                                            msg: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.',
                                        }
                                    ]
                                },
                                {
                                    id: 7,
                                    text: 'Good service',
                                    icon: 'fas fa-concierge-bell',
                                    children: [
                                        {
                                            id: 8,
                                            text: 'Prompt attention',
                                            key: 'Order',
                                            msg: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.',
                                        },
                                        {
                                            id: 9,
                                            text: 'Professional waiter',
                                            key: 'Order',
                                            msg: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.',
                                        }
                                    ]
                                },
                                {
                                    id: 10,
                                    text: 'Pleasant surroundings',
                                    icon: 'fas fa-camera-retro',
                                    children: [
                                        {
                                            id: 11,
                                            text: 'Happy atmosphere',
                                            key: 'Class',
                                            msg: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.',
                                        },
                                        {
                                            id: 12,
                                            text: 'Good table presentation',
                                            key: 'Class',
                                            msg: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.',
                                        },
                                        {
                                            id: 13,
                                            text: 'Pleasing decor',
                                            key: 'Class',
                                            msg: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.',
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 14,
                            text: 'Others customers',
                            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                            children: [
                                {
                                    id: 15,
                                    text: 'Conformance to requirements',
                                    key: 'Phylum',
                                },
                                {
                                    id: 16,
                                    text: 'Fitness for use',
                                    children: [
                                        {
                                            id: 17,
                                            text: 'Refers',
                                            key: 'Expanded',
                                            msg: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.',
                                        }
                                    ]
                                },
                                {
                                    id: 18,
                                    text: 'Need to care',
                                    children: [
                                        {
                                            id: 19,
                                            text: 'Models',
                                            key: 'Disables',
                                            msg: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.',
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                },
                'optionLarge': {
                    selections: [],
                    items: (function (n) {
                        n /= 20; let msg = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.'; let cItems = '{"id":"{n+1}","text":"Satisfied customers","avatar":"https://cdn.vuetifyjs.com/images/lists/1.jpg","children":[{"id":"{n+2}","text":"Good food","icon":"fas fa-utensils","children":[{"id":"{n+3}","text":"Quality ingredients","children":[{"id":"{n+4}","text":"Character","key":"Genus","msg":"{msg}"},{"id":"{n+5}","text":"Fabric","key":"Genus","msg":"{msg}"}]},{"id":"{n+6}","text":"Good recipe","key":"Family","msg":"{msg}"}]},{"id":"{n+7}","text":"Good service","icon":"fas fa-concierge-bell","children":[{"id":"{n+8}","text":"Prompt attention","key":"Order","msg":"{msg}"},{"id":"{n+9}","text":"Professional waiter","key":"Order","children":[{"id":"{n+10}","text":"Others customers","avatar":"https://cdn.vuetifyjs.com/images/lists/2.jpg","children":[{"id":"{n+11}","text":"Conformance to requirements","key":"Phylum"},{"id":"{n+12}","text":"Fitness for use","children":[{"id":"{n+13}","text":"Refers","key":"Expanded","msg":"{msg}"}]},{"id":"{n+14}","text":"Need to care","children":[{"id":"{n+15}","text":"Models","key":"Disables","msg":"{msg}"}]}]}]}]},{"id":"{n+16}","text":"Pleasant surroundings","icon":"fas fa-camera-retro","children":[{"id":"{n+17}","text":"Happy atmosphere","key":"Class","msg":"{msg}"},{"id":"{n+18}","text":"Good table presentation","key":"Class","msg":"{msg}"},{"id":"{n+19}","text":"Pleasing decor","key":"Class","msg":"{msg}"},{"id":"{n+20}","text":"Special experience","key":"Class","msg":"{msg}"}]}]}'; function getOneObj(j) {
                            let t = cItems; t = t.replace(new RegExp('{msg}', 'g'), msg); for (let i = 1; i <= 20; i++) {
                                t = t.replace('{n+'.concat(i, '}'), ''.concat(j + i))
                            } return JSON.parse(t)
                        } let rs = []; for (let j = 0; j < n; j++) {
                            let r = getOneObj(j * 20); rs.push(r)
                        } return rs
                    })(100000), //1000000, 100000, 1000
                },
            },
            'actions': [
            ],
        }
    },
    methods: {
        showSelection: function(selections) {
            let ss = {}
            for (let i = 0; i < selections.length; i++) {
                let s = JSON.parse(JSON.stringify(selections[i]))
                delete s.msg
                let id = parseInt(s.id, 10) //原本為字串, 轉成整數
                ss[id] = s
            }
            let t = []
            Object.keys(ss)
                .sort(function(a, b) {
                    return a - b
                })
                .forEach(function(key) {
                    t.push(ss[key])
                })
            return t
        },
        click: function(msg) {
            console.log('click', msg, 'getEle', msg.getEle())
        },
        mouseenter: function(msg) {
            //console.log('mouseenter', msg)
            msg.ele.style.transition = 'all 0.3s'
            msg.ele.style.background = '#f0f0f0'
            //msg.ele.style.color = '#fff'
        },
        mouseleave: function(msg) {
            //console.log('mouseleave', msg)
            msg.ele.style.background = 'rgba(255, 255, 255, 0)'
            //msg.ele.style.color = 'black'
        },
    },
}
</script>

<style scoped>
</style>
