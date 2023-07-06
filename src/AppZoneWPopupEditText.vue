<template>
    <div>


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-popup-edit-text</span></div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-popup-edit-text'"
                    :casename="'default'"
                ></demolink>

                <div style="display:inline-block; border:1px dashed #999;">

                    <w-popup-edit-text
                        v-model="WPopupEditText.text"
                    ></w-popup-edit-text>

                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-popup-edit-text'"
                    :casename="'no title'"
                ></demolink>

                <div style="display:inline-block; border:1px dashed #999;">

                    <w-popup-edit-text
                        :title="''"
                        v-model="WPopupEditText.text"
                    ></w-popup-edit-text>

                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-popup-edit-text'"
                    :casename="'title & titleColor & titleFontSize & headerBackgroundColor'"
                ></demolink>

                <div style="display:inline-block; border:1px dashed #999;">

                    <w-popup-edit-text
                        :title="'Information'"
                        :titleColor="'white'"
                        :titleFontSize="'1rem'"
                        :headerBackgroundColor="'pink accent-4'"
                        v-model="WPopupEditText.text"
                    ></w-popup-edit-text>

                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-popup-edit-text'"
                    :casename="'title & contentIcon & contentIconColor & contentIconSize'"
                ></demolink>

                <div style="display:inline-block; border:1px dashed #999;">

                    <w-popup-edit-text
                        :title="'Configure your information'"
                        :contentIcon="'fab fa-buffer'"
                        :contentIconColor="'pink'"
                        :contentIconSize="22"
                        v-model="WPopupEditText.text"
                    ></w-popup-edit-text>

                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-popup-edit-text'"
                    :casename="'title & saveBtnText & saveBtnTextColor & saveBtnTextColorHover & saveBtnIconSize & saveBtnIconColor & saveBtnIconColorHover & saveBtnIconRippleColor & saveBtnBackgroundColor & saveBtnBackgroundColorHover'"
                ></demolink>

                <div style="display:inline-block; border:1px dashed #999;">

                    <w-popup-edit-text
                        :title="'Configure your information'"
                        :saveBtnText="'儲存'"
                        :saveBtnTextColor="'pink darken-1'"
                        :saveBtnTextColorHover="'pink darken-3'"
                        :saveBtnIconSize="24"
                        :saveBtnIconColor="'pink darken-1'"
                        :saveBtnIconColorHover="'pink darken-3'"
                        :saveBtnIconRippleColor="'rgba(200, 200, 200, 0.5)'"
                        :saveBtnBackgroundColor="'white'"
                        :saveBtnBackgroundColorHover="'pink lighten-5'"
                        v-model="WPopupEditText.text"
                    ></w-popup-edit-text>

                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-popup-edit-text'"
                    :casename="'title & inputTextColor & contentIconColor & contentBackgroundColor & inputTextBottomLineBorderColor & inputTextBottomLineBorderColorHover & inputTextBottomLineBorderColorFocus'"
                ></demolink>

                <div style="display:inline-block; border:1px dashed #999;">

                    <w-popup-edit-text
                        :title="'Configure your information'"
                        :inputTextColor="'white'"
                        :contentIconColor="'white'"
                        :contentBackgroundColor="'orange'"
                        :inputTextBottomLineBorderColor="'rgba(255,255,255,0.6)'"
                        :inputTextBottomLineBorderColorHover="'rgba(255,255,255,0.8)'"
                        :inputTextBottomLineBorderColorFocus="'rgba(255,255,255,1)'"
                        v-model="WPopupEditText.text"
                    ></w-popup-edit-text>

                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-popup-edit-text'"
                    :casename="'title & footerBackgroundColor'"
                ></demolink>

                <div style="display:inline-block; border:1px dashed #999;">

                    <w-popup-edit-text
                        :title="'Configure your information'"
                        :footerBackgroundColor="'brown lighten-1'"
                        v-model="WPopupEditText.text"
                    ></w-popup-edit-text>

                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-popup-edit-text'"
                    :casename="'minWidthForValue'"
                ></demolink>

                <div style="display:inline-block; border:1px dashed #999;">

                    <w-popup-edit-text
                        :minWidthForValue="300"
                        v-model="WPopupEditText.text"
                    ></w-popup-edit-text>

                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-popup-edit-text'"
                    :casename="'minWidthForPopup'"
                ></demolink>

                <div style="display:inline-block; border:1px dashed #999;">

                    <w-popup-edit-text
                        :minWidthForPopup="500"
                        v-model="WPopupEditText.text"
                    ></w-popup-edit-text>

                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-popup-edit-text'"
                    :casename="'in table'"
                ></demolink>

                <table>
                    <tbody>
                        <tr :key="'rk-'+rk" v-for="(r,rk) in WPopupEditText.mat">
                            <td style="padding:5px; border:1px solid #ddd;" :key="'ck-'+ck" v-for="(c,ck) in r">

                                <w-popup-edit-text
                                    :title="'Edit Cell'"
                                    v-model="WPopupEditText.mat[rk][ck]"
                                ></w-popup-edit-text>

                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>


        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WPopupEditText from './components/WPopupEditText.vue'


export default {
    components: {
        demolink,
        WPopupEditText,
    },
    props: {
    },
    data: function() {
        return {
            'WPopupEditText': {
                'text': 'click to edit string',
                'mat': [['r1c1', 'r1c2', 'r1c3'], ['r2c1', 'r2c2', 'r2c3']],
            },
            'actions': [
            ],
        }
    },
}
</script>

<style scoped>
</style>
