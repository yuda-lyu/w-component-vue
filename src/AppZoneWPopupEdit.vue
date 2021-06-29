<template>
    <div>


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-popup-edit</span></div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-popup-edit'"
                    :casename="'default'"
                ></demolink>

                <div style="display:inline-block; border:1px dashed #999;">

                    <w-popup-edit
                        v-model="WPopupEdit.text"
                    ></w-popup-edit>

                </div>

            </div>


        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WPopupEdit from './components/WPopupEdit.vue'


export default {
    components: {
        demolink,
        WPopupEdit,
    },
    props: {
    },
    data: function() {
        return {
            'WPopupEdit': {
                'text': 'test測試中文',
            },
            'actions': [
                {
                    'mode': 'eleclick',
                    'selector': 'span[class="v-chip__content"]'
                }
            ],
        }
    },
}
</script>

<style scoped>
</style>
