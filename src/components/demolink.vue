<template>
    <div class="item">

        <div style="display:inline-block;">
            {{casename}}
        </div>

        <v-tooltip bottom transition="slide-y-transition">
            <template v-slot:activator="{ on }">
                <v-btn
                    style="margin-left:10px;"
                    v-on="on"
                    x-small
                    icon
                    elevation="2"
                    color="red darken-1"
                    target="_blank"
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
                    style="margin-left:10px;"
                    v-on="on"
                    x-small
                    icon
                    elevation="2"
                    color="red darken-1"
                    target="_blank"
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
        kind: {
            type: String,
        },
        shell: {
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
            let fnc = `${this.casename}_${this.kind}_${this.shell}`
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
</style>
