<template>
    <div>


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-icon</span></div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-icon'"
                    :casename="'icon (material)'"
                ></demolink>

                <w-icon
                    :icon="WIcon.mdiFruitCherries"
                ></w-icon>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-icon'"
                    :casename="'icon (fontawesome)'"
                ></demolink>

                <w-icon
                    :icon="'fas fa-pause-circle'"
                ></w-icon>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-icon'"
                    :casename="'icon (fontawesome2)'"
                ></demolink>

                <w-icon
                    :icon="'fab fa-angular'"
                ></w-icon>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-icon'"
                    :casename="'icon (material) & color & colorHover'"
                ></demolink>

                <w-icon
                    :icon="WIcon.mdiShieldCrownOutline"
                    :color="'orange darken-3'"
                    :colorHover="'orange lighten-1'"
                ></w-icon>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-icon'"
                    :casename="'icon (fontawesome) & color & colorHover'"
                ></demolink>

                <w-icon
                    :icon="'fas fa-hospital-user'"
                    :color="'orange darken-3'"
                    :colorHover="'orange lighten-1'"
                ></w-icon>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-icon'"
                    :casename="'icon (material) & size'"
                ></demolink>

                <w-icon
                    :icon="WIcon.mdiAccessPoint"
                    :size="64"
                ></w-icon>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-icon'"
                    :casename="'icon (fontawesome) & size'"
                ></demolink>

                <w-icon
                    :icon="'fas fa-tags'"
                    :size="64"
                ></w-icon>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-icon'"
                    :casename="'icon (material) & timeTransition'"
                ></demolink>

                <w-icon
                    :icon="WIcon.mdiOctagramEditOutline"
                    :timeTransition="0.2"
                ></w-icon>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-icon'"
                    :casename="'icon (fontawesome) & timeTransition'"
                ></demolink>

                <w-icon
                    :icon="'fas fa-fingerprint'"
                    :timeTransition="0.2"
                ></w-icon>

            </div>


        </div>


    </div>
</template>

<script>
import { mdiFruitCherries, mdiShieldCrownOutline, mdiAccessPoint, mdiOctagramEditOutline } from '@mdi/js'
import demolink from './components/demolink.vue'
import WIcon from './components/WIcon.vue'


export default {
    components: {
        demolink,
        WIcon,
    },
    props: {
    },
    data: function() {
        return {
            'WIcon': {
                mdiFruitCherries,
                mdiShieldCrownOutline,
                mdiAccessPoint,
                mdiOctagramEditOutline,
            },
            'actions': [
            ],
        }
    },
}
</script>

<style scoped>
</style>
