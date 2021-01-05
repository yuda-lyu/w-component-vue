<template>
    <div class="item">
        <!-- 因v-btn的icon與elevation屬性衝突, 使用elevation會導致color變成背景色, 故改由class設定按鈕陰影 -->

        <div style="display:inline-block;">
            {{casename}}
        </div>

        <v-tooltip bottom transition="slide-y-transition">
            <template v-slot:activator="{ on }">
                <v-btn
                    class="bx"
                    style="margin-left:10px;"
                    v-on="on"
                    x-small
                    icon
                    _elevation="2"
                    color="red darken-1"
                    target="_blank"
                    rel="noreferrer noopener"
                    :href="web"
                >
                    <v-icon small>{{mdiLaunch}}</v-icon>
                </v-btn>
            </template>
            <span>example</span>
        </v-tooltip>

        <v-tooltip bottom transition="slide-y-transition">
            <template v-slot:activator="{ on }">
                <v-btn
                    class="bx"
                    style="margin-left:10px;"
                    v-on="on"
                    x-small
                    icon
                    _elevation="2"
                    color="red darken-1"
                    target="_blank" rel="noreferrer noopener"
                    :href="src"
                >
                    <v-icon small>{{mdiUnfoldMoreVertical}}</v-icon>
                </v-btn>
            </template>
            <span>code</span>
        </v-tooltip>

    </div>
</template>

<script>
import { mdiLaunch, mdiUnfoldMoreVertical } from '@mdi/js'
import cvCasename from '../../toolg/cvCasename.mjs'


export default {
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

        web: function() {
            return 'https://yuda-lyu.github.io/w-component-vue/examples/' + this.fn + '.html'
        },

        src: function() {
            return 'https://github.com/yuda-lyu/w-component-vue/blob/master/docs/examples/' + this.fn + '.html'
        },

    },
}
</script>

<style scoped>
.item {
    border-left: 3px solid #ffba75;
    margin: 5px 5px 8px 0px;
    padding: 3px 3px 5px 10px;
    font-size: 0.9rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.bx {
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
</style>
