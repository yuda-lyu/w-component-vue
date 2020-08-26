<template>
    <div>


        <div class="head1">w-group-tags</div>


        <div style="padding:0px;">


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'default'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                ></w-group-tags>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'icon (material)'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :icon="mdiChartBubble"
                ></w-group-tags>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'icon (fontawesome)'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :icon="'fas fa-clipboard-check'"
                ></w-group-tags>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'iconShiftLeft'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :icon="'fas fa-clipboard-check'"
                    :iconShiftLeft="-3"
                ></w-group-tags>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'inputTextButtonTooltip'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :inputTextButtonTooltip="'新增'"
                ></w-group-tags>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'inputTextColor & inputTextBorderColor & inputTextBorderColorFocus & inputTextButtonColor & inputTextButtonColorHover & inputTextBackgroundColor & inputTextBackgroundColorFocus'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :inputTextColor="'indigo darken-1'"
                    :inputTextBorderColor="'indigo darken-1'"
                    :inputTextBorderColorFocus="'indigo darken-2'"
                    :inputTextButtonColor="'indigo'"
                    :inputTextButtonColorFocus="'indigo darken-1'"
                    :inputTextBackgroundColor="'white'"
                    :inputTextBackgroundColorFocus="'#f2f2ff'"
                ></w-group-tags>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'object items'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.objects"
                    @click-add="ckBtnAddObj"
                ></w-group-tags>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'object items & keyText'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.objectsText"
                    :keyText="'value'"
                    @click-add="ckBtnAddObjText"
                ></w-group-tags>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'object items & keyIcon'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.objectsIcon"
                    :keyIcon="'icon'"
                    @click-add="ckBtnAddObjIcon"
                ></w-group-tags>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'object items & keyTooltip'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.objectsTooltip"
                    :keyTooltip="'tooltip'"
                    @click-add="ckBtnAddObjTooltip"
                ></w-group-tags>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'object items & addButtonText & addButtonTooltip'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>
aaa
                <w-group-tags
                    v-model="WGroupTags.objects"
                    :addButtonText="'新增'"
                    :addButtonTooltip="'新增項目'"
                    @click-add="ckBtnAddObj"
                ></w-group-tags>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'object items & addButtonTextColor & addButtonTextColorHover & addButtonIconColor & addButtonIconColorHover & addButtonBackgroundColor &  addButtonBackgroundColorHover'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>
aaa
                <w-group-tags
                    v-model="WGroupTags.objects"
                    :addButtonTextColor="'white'"
                    :addButtonTextColorHover="'white'"
                    :addButtonIconColor="'white'"
                    :addButtonIconColorHover="'white'"
                    :addButtonBackgroundColor="'yellow darken-3'"
                    :addButtonBackgroundColorHover="'yellow darken-2'"
                    @click-add="ckBtnAddObj"
                ></w-group-tags>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'slot item'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    @click="ckBtn"
                    @click-close="ckBtnClose"
                >
                    <template v-slot:items="props">
                        <div style="display:flex; align-items:center;">
                            <div style="display:flex; margin-right:5px;">
                                <w-button-chip
                                    :text="props.item"
                                    :textFontSize="'0.75rem'"
                                    :sizePadding="'0px 8px'"
                                    :textColor="'#fff'"
                                    :textColorHover="'#fff'"
                                    :backgroundColor="'rgba(250,50,120,0.9)'"
                                    :backgroundColorHover="'rgba(250,50,120,0.9)'"
                                    @click.stop="ckBtnItem1(props)"
                                ></w-button-chip>
                            </div>
                            <div style="display:flex;">
                                <w-button-chip
                                    :text="'View'"
                                    :textFontSize="'0.75rem'"
                                    :sizePadding="'0px 8px'"
                                    :textColor="'#fff'"
                                    :textColorHover="'#fff'"
                                    :backgroundColor="'rgba(200,20,170,0.9)'"
                                    :backgroundColorHover="'rgba(200,20,170,0.9)'"
                                    @click.stop="ckBtnItem2(props)"
                                ></w-button-chip>
                            </div>
                        </div>
                    </template>
                </w-group-tags>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'object items & slot item'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>
aaa
                <w-group-tags
                    v-model="WGroupTags.objectsSlotText"
                    @click="ckBtn"
                    @click-close="ckBtnClose"
                    @click-add="ckBtnAddObjSlotText"
                >
                    <template v-slot:items="props">
                        <div style="display:flex; align-items:center;">
                            <div style="display:flex; margin-right:5px;">
                                <w-button-chip
                                    :text="props.item.slotTextKind"
                                    :textFontSize="'0.75rem'"
                                    :sizePadding="'0px 8px'"
                                    :textColor="'#fff'"
                                    :textColorHover="'#fff'"
                                    :backgroundColor="'rgba(250,50,120,0.9)'"
                                    :backgroundColorHover="'rgba(250,50,120,0.9)'"
                                    @click.stop="ckBtnItem1(props)"
                                ></w-button-chip>
                            </div>
                            <div style="display:flex;">
                                <w-button-chip
                                    :text="props.item.slotTextLevel"
                                    :textFontSize="'0.75rem'"
                                    :sizePadding="'0px 8px'"
                                    :textColor="'#fff'"
                                    :textColorHover="'#fff'"
                                    :backgroundColor="'rgba(200,20,170,0.9)'"
                                    :backgroundColorHover="'rgba(200,20,170,0.9)'"
                                    @click.stop="ckBtnItem2(props)"
                                ></w-button-chip>
                            </div>
                        </div>
                    </template>
                </w-group-tags>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'slot input'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    @click="ckBtn"
                    @click-close="ckBtnClose"
                >
                    <template v-slot:input>
                        <w-button-chip
                            :icon="mdiPlusCircle"
                            :iconColor="'#fff'"
                            :iconColorHover="'#fff'"
                            :text="'Add'"
                            :textColor="'#fff'"
                            :textColorHover="'#fff'"
                            :backgroundColor="'rgba(200,20,170,0.9)'"
                            :backgroundColorHover="'rgba(200,20,170,0.9)'"
                            @click.stop="ckBtnAddString"
                        ></w-button-chip>
                    </template>
                </w-group-tags>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'sizePadding & icon & iconSize & textFontSize'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :sizePadding="'10px 24px'"
                    :icon="mdiCodepen"
                    :iconSize="26"
                    :textFontSize="'0.9rem'"
                ></w-group-tags>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'textColor'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :textColor="'light-blue darken-3'"
                ></w-group-tags>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'textColor & textColorHover'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :textColor="'purple darken-1'"
                    :textColorHover="'purple darken-4'"
                ></w-group-tags>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'icon & iconColor & iconColorHover'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :icon="mdiChartBubble"
                    :iconColor="'orange'"
                    :iconColorHover="'orange darken-2'"
                ></w-group-tags>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'borderRadius'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :icon="mdiChartBubble"
                    :borderRadius="0"
                ></w-group-tags>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'borderColor & borderColorHover'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :icon="mdiChartBubble"
                    :borderColor="'transparent'"
                    :borderColorHover="'grey darken-1'"
                ></w-group-tags>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'backgroundColor & backgroundColorHover'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :icon="mdiChartBubble"
                    :backgroundColor="'amber lighten-5'"
                    :backgroundColorHover="'amber lighten-4'"
                ></w-group-tags>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'no shadow & borderColor & borderColorHover'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :borderColor="'grey lighten-1'"
                    :borderColorHover="'grey'"
                    :shadow="false"
                ></w-group-tags>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'shadowStyle'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :shadowStyle="'0 12px 20px -10px rgba(250,120,155,0.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(250,120,155,0.2)'"
                ></w-group-tags>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'modify prog by callback in click'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    @click="ckBtnModProg"
                ></w-group-tags>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'progColor & progBackgroundColor'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :progColor="'rgba(250,50,150,0.4)'"
                    :progBackgroundColor="'rgba(250,50,150,0.075)'"
                    @click="ckBtnModProg"
                ></w-group-tags>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'modify loading by callback in click'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    @click="ckBtnModLoading"
                ></w-group-tags>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'modify loading & textColor & textColorHover'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :textColor="'rgba(255,30,60,0.9)'"
                    :textColorHover="'rgba(255,20,50,1)'"
                    @click="ckBtnModLoading"
                ></w-group-tags>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'closeWithInterceptor'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :icon="mdiChartBubble"
                    :closeWithInterceptor="true"
                    @click-close="ckBtnClosePm"
                ></w-group-tags>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'not editable'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :icon="mdiChartBubble"
                    :editable="false"
                ></w-group-tags>
            </div>


        </div>


    </div>
</template>

<script>
import { mdiEmailVariant, mdiChartBubble, mdiCodepen, mdiPlusCircle } from '@mdi/js'
import demolink from './components/demolink.vue'
import WShellMaterial from './components/WShellMaterial.vue'
import WGroupTags from './components/WGroupTags.vue'
import WButtonChip from './components/WButtonChip.vue'


export default {
    components: {
        demolink,
        WShellMaterial,
        WGroupTags,
        WButtonChip,
    },
    props: {
        modeBorder: {
            type: String,
        },
        modeShell: {
            type: String,
        },
    },
    data: function() {
        return {
            mdiEmailVariant,
            mdiChartBubble,
            mdiCodepen,
            mdiPlusCircle,
            'WGroupTags': {
                'strings': [
                    'Dashboard',
                    'Schedule',
                    'Profile',
                    'History',
                    'Map',
                    '聯絡方式'
                ],
                'objects': [
                    {
                        id: 'id-Dashboard',
                        text: 'Dashboard',
                    },
                    {
                        id: 'id-Schedule',
                        text: 'Schedule',
                    },
                    {
                        id: 'id-Profile',
                        text: 'Profile',
                    },
                    {
                        id: 'id-History',
                        text: 'History',
                    },
                    {
                        id: 'id-Map',
                        text: 'Map',
                    },
                    {
                        id: 'id-contact',
                        text: '聯絡方式',
                    },
                ],
                'objectsText': [
                    {
                        id: 'id-Dashboard',
                        value: 'cmDashboard',
                    },
                    {
                        id: 'id-Schedule',
                        value: 'cmSchedule',
                    },
                    {
                        id: 'id-Profile',
                        value: 'cmProfile',
                    },
                    {
                        id: 'id-History',
                        value: 'cmHistory',
                    },
                    {
                        id: 'id-Map',
                        value: 'cmMap',
                    },
                    {
                        id: 'id-contact',
                        value: 'cm聯絡方式',
                    },
                ],
                'objectsIcon': [
                    {
                        id: 'id-Dashboard',
                        text: 'Dashboard',
                        icon: 'fab fa-accessible-icon',
                    },
                    {
                        id: 'id-Schedule',
                        text: 'Schedule',
                        icon: 'fab fa-asymmetrik',
                    },
                    {
                        id: 'id-Profile',
                        text: 'Profile',
                        icon: 'fas fa-baby',
                    },
                    {
                        id: 'id-History',
                        text: 'History',
                        icon: 'fas fa-balance-scale',
                    },
                    {
                        id: 'id-Map',
                        text: 'Map',
                        icon: 'fas fa-blender',
                    },
                    {
                        id: 'id-contact',
                        text: '聯絡方式',
                        icon: 'fas fa-hands-helping',
                    },
                ],
                'objectsTooltip': [
                    {
                        id: 'id-Dashboard',
                        text: 'Dashboard',
                        tooltip: 'Dashboard for tooltip',
                    },
                    {
                        id: 'id-Schedule',
                        text: 'Schedule',
                        tooltip: 'Schedule for tooltip',
                    },
                    {
                        id: 'id-Profile',
                        text: 'Profile',
                        tooltip: 'Profile for tooltip',
                    },
                    {
                        id: 'id-History',
                        text: 'History',
                        tooltip: 'History for tooltip',
                    },
                    {
                        id: 'id-Map',
                        text: 'Map',
                        tooltip: 'Map for tooltip',
                    },
                    {
                        id: 'id-contact',
                        text: '聯絡方式',
                        tooltip: '聯絡方式 for tooltip',
                    },
                ],
                'objectsSlotText': [
                    {
                        id: 'id-Dashboard',
                        text: 'Dashboard',
                        slotTextKind: 'Efficacy',
                        slotTextLevel: 'High',
                    },
                    {
                        id: 'id-Schedule',
                        text: 'Schedule',
                        slotTextKind: 'Efficacy',
                        slotTextLevel: 'Slow',
                    },
                    {
                        id: 'id-Profile',
                        text: 'Profile',
                        slotTextKind: 'Basic',
                        slotTextLevel: 'None',
                    },
                    {
                        id: 'id-History',
                        text: 'History',
                        slotTextKind: 'Basic',
                        slotTextLevel: 'None',
                    },
                    {
                        id: 'id-Map',
                        text: 'Map',
                        slotTextKind: 'Efficacy',
                        slotTextLevel: 'High',
                    },
                    {
                        id: 'id-contact',
                        text: '聯絡方式',
                        slotTextKind: 'Basic',
                        slotTextLevel: 'None',
                    },
                ],
                'empty': [],
            },
            'actions': [
            ],
        }
    },
    methods: {
        ckBtn: function(ev, msg) {
            console.log('ckBtn', msg)
        },
        ckBtnAddString: function(ev) {
            console.log('ckBtnAddString')
            this.WGroupTags.strings.push('test')
        },
        ckBtnAddObj: function(ev) {
            console.log('ckBtnAddObj')
            this.WGroupTags.objects.push({ id: 'id-test', text: 'test' })
        },
        ckBtnAddObjText: function(ev) {
            console.log('ckBtnAddObjText')
            this.WGroupTags.objectsText.push({ id: 'id-test', value: 'test' })
        },
        ckBtnAddObjIcon: function(ev) {
            console.log('ckBtnAddObjIcon')
            this.WGroupTags.objectsIcon.push({ id: 'id-test', text: 'test', icon: 'fas fa-hands-wash' })
        },
        ckBtnAddObjTooltip: function(ev) {
            console.log('ckBtnAddObjTooltip')
            this.WGroupTags.objectsIcon.push({ id: 'id-test', text: 'test', tooltip: 'test for tooltip' })
        },
        ckBtnAddObjSlotText: function(ev) {
            console.log('ckBtnAddObjSlotText')
            this.WGroupTags.objectsSlotText.push({ id: 'id-test', text: 'test', slotTextKind: 'Basic', slotTextLevel: 'None' })
        },
        ckBtnClose: function(ev, item) {
            console.log('ckBtnClose', item)
        },
        ckBtnClosePm: function(ev, item) {
            console.log('ckBtnClosePm', item)
            alert('pm.resolve() for close')
            item.pm.resolve()
            //item.pm.reject()
        },
        ckBtnItem1: function(msg) {
            console.log('ckBtnItem1', msg)
        },
        ckBtnItem2: function(msg) {
            console.log('ckBtnItem2', msg)
        },
        ckBtnModProg: function(ev, msg) {
            console.log('ckBtnModProg', msg)
            let n = 0
            let t = setInterval(function() {
                n += 0.5
                msg.setProg(n)
                if (n >= 100) {
                    //當prog>=100時會由內部自動設定為null
                    clearInterval(t)
                }
            }, 10)
        },
        ckBtnModLoading: function(ev, msg) {
            console.log('ckBtnModLoading', msg)
            msg.setLoading(true)
            setTimeout(function() {
                msg.setLoading(false)
            }, 2000)
        },
    },
}
</script>

<style scoped>
</style>
