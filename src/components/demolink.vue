<template>
    <div class="item">

        <div style="display:inline-block;">
            {{casename}}
        </div>

        <div style="padding-left:5px;"></div>

        <w-button-circle
            :icon="mdiLaunch"
            :iconSize="16"
            :paddingStyle="{v:3,h:3}"
            :iconColor="'red darken-1'"
            :iconColorHover="'red darken-1'"
            :iconColorFocus="'red darken-1'"
            :backgroundColor="'#fff'"
            :backgroundColorHover="'#fff5f5'"
            :backgroundColorFocus="'#fff2f2'"
            :tooltip="'example'"
            @click="ckExample"
        ></w-button-circle>

        <div style="padding-left:5px;"></div>

        <w-button-circle
            :icon="mdiUnfoldMoreVertical"
            :iconSize="16"
            :paddingStyle="{v:3,h:3}"
            :iconColor="'red darken-1'"
            :iconColorHover="'red darken-1'"
            :iconColorFocus="'red darken-1'"
            :backgroundColor="'#fff'"
            :backgroundColorHover="'#fff5f5'"
            :backgroundColorFocus="'#fff2f2'"
            :tooltip="'code'"
            @click="ckCode"
        ></w-button-circle>

    </div>
</template>

<script>
import { mdiLaunch, mdiUnfoldMoreVertical } from '@mdi/js'
import cvCasename from '../../toolg/cvCasename.mjs'
import WButtonCircle from './WButtonCircle.vue'


export default {
    components: {
        WButtonCircle,
    },
    props: {
        kbname: {
            type: String,
        },
        casename: {
            type: String,
        },
    },
    data: function() {
        return {
            mdiLaunch,
            mdiUnfoldMoreVertical
        }
    },
    mounted: function() {
    },
    computed: {

        fn: function() {
            let fnc = `${this.casename}`
            return `${this.kbname}_${cvCasename(fnc)}`
        },

    },
    methods: {

        ckExample: function() {
            let vo = this
            let url = 'https://yuda-lyu.github.io/w-component-vue/examples/' + vo.fn + '.html'
            window.open(url, '_blank')
        },

        ckCode: function() {
            let vo = this
            let url = 'https://github.com/yuda-lyu/w-component-vue/blob/master/docs/examples/' + vo.fn + '.html'
            window.open(url, '_blank')
        },

    },
}
</script>

<style scoped>
/* 組件所須全域樣式 */
.item {
    border-left: 3px solid #ffba75;
    margin: 5px 5px 8px 0px;
    padding: 3px 3px 5px 10px;
    font-size: 0.9rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.cpitem {
    transition: all 0.3s;
    padding: 5px 15px;
    cursor: pointer;
}
.cpitem-white {
    background: #fff;
}
.cpitem-white:hover {
    background: #eee;
}
.cpitem-black {
    background: #333;
}
.cpitem-black:hover {
    background: #555;
}
</style>
