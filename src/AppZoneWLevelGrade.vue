<template>
    <div>


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-level-grade</span></div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-level-grade'"
                    :casename="'default'"
                ></demolink>

                <w-level-grade
                    :levels="WLevelGrade.levels"
                    :value="12"
                ></w-level-grade>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-level-grade'"
                    :casename="'keyColor & keyLow & keyUp & keyDelimiter & keyText'"
                ></demolink>

                <w-level-grade
                    :levels="WLevelGrade.levelsForKey"
                    :value="55"
                    :keyColor="'c'"
                    :keyLow="'min'"
                    :keyUp="'max'"
                    :keyDelimiter="'dlm'"
                    :keyText="'t'"
                ></w-level-grade>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-level-grade'"
                    :casename="'tickDig'"
                ></demolink>

                <w-level-grade
                    :levels="WLevelGrade.levelsForDig"
                    :value="0.12"
                    :tickDig="2"
                ></w-level-grade>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-level-grade'"
                    :casename="'tickDig & text'"
                ></demolink>

                <w-level-grade
                    :levels="WLevelGrade.levelsForText"
                    :value="0.12"
                    :tickDig="2"
                ></w-level-grade>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-level-grade'"
                    :casename="'tickDig & text & spaceForText'"
                ></demolink>

                <w-level-grade
                    :levels="WLevelGrade.levelsForText"
                    :value="0.12"
                    :tickDig="2"
                    :spaceForText="10"
                ></w-level-grade>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-level-grade'"
                    :casename="'gradeSize'"
                ></demolink>

                <w-level-grade
                    :levels="WLevelGrade.levels"
                    :value="12"
                    :gradeSize="26"
                ></w-level-grade>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-level-grade'"
                    :casename="'gradeTextFontSize & gradeTextColor'"
                ></demolink>

                <w-level-grade
                    :levels="WLevelGrade.levels"
                    :value="12"
                    :gradeTextFontSize="'0.8rem'"
                    :gradeTextColor="'#a44'"
                ></w-level-grade>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-level-grade'"
                    :casename="'spaceForGrade'"
                ></demolink>

                <w-level-grade
                    :levels="WLevelGrade.levels"
                    :value="12"
                    :spaceForGrade="10"
                ></w-level-grade>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-level-grade'"
                    :casename="'arrowColor'"
                ></demolink>

                <w-level-grade
                    :levels="WLevelGrade.levels"
                    :value="12"
                    :arrowColor="'#AD1457'"
                ></w-level-grade>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-level-grade'"
                    :casename="'arrowSize'"
                ></demolink>

                <w-level-grade
                    :levels="WLevelGrade.levels"
                    :value="12"
                    :arrowSize="8"
                ></w-level-grade>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-level-grade'"
                    :casename="'slot low & up & delimiter & text'"
                ></demolink>

                <w-level-grade
                    :levels="WLevelGrade.levelsForSep"
                    :value="0.12"
                >
                    <template v-slot:low="props">
                        <span v-if="props.level.up<=0.4">
                            {{props.level.low}}
                        </span>
                        <span v-else>

                        </span>
                    </template>
                    <template v-slot:up="props">
                        <span v-if="props.level.up<=0.4">
                            {{props.level.up}}
                        </span>
                        <span v-else>
                            0.4
                        </span>
                    </template>
                    <template v-slot:delimiter="props">
                        <span v-if="props.level.up<=0.4">
                            ~
                        </span>
                        <span v-else>
                            >
                        </span>
                    </template>
                    <template v-slot:text="props">
                        <span style="color:#db0b39" v-if="props.klevel===0">
                            {{props.level.text}}
                        </span>
                        <span style="color:#bc8d12" v-if="props.klevel===1">
                            {{props.level.text}}
                        </span>
                        <span style="color:#6fa036" v-if="props.klevel===2">
                            {{props.level.text}}
                        </span>
                    </template>
                </w-level-grade>

            </div>


        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WLevelGrade from './components/WLevelGrade.vue'


export default {
    components: {
        demolink,
        WLevelGrade,
    },
    props: {
    },
    data: function() {
        return {
            'WLevelGrade': {
                'levels': [{ 'color': 'rgba(180, 30, 60, 1)', 'low': 40, 'up': 45, 'delimiter': '-', 'text': '' }, { 'color': 'rgba(193, 36, 37, 1)', 'low': 35, 'up': 40, 'delimiter': '-', 'text': '' }, { 'color': 'rgba(205, 45, 27, 1)', 'low': 30, 'up': 35, 'delimiter': '-', 'text': '' }, { 'color': 'rgba(218, 56, 36, 1)', 'low': 25, 'up': 30, 'delimiter': '-', 'text': '' }, { 'color': 'rgba(236, 68, 40, 1)', 'low': 20, 'up': 25, 'delimiter': '-', 'text': '' }, { 'color': 'rgba(252, 91, 46, 1)', 'low': 15, 'up': 20, 'delimiter': '-', 'text': '' }, { 'color': 'rgba(254, 153, 68, 1)', 'low': 10, 'up': 15, 'delimiter': '-', 'text': '' }, { 'color': 'rgba(254, 207, 143, 1)', 'low': 5, 'up': 10, 'delimiter': '-', 'text': '' }, { 'color': 'rgba(255, 230, 200, 1)', 'low': 0, 'up': 5, 'delimiter': '-', 'text': '' }],
                'levelsForKey': [{ 'c': 'rgba(225, 227, 24, 1)', 'min': 70, 'max': 80, 'dlm': '-', 't': '' }, { 'c': 'rgba(136, 210, 73, 1)', 'min': 60, 'max': 70, 'dlm': '-', 't': '' }, { 'c': 'rgba(70, 185, 111, 1)', 'min': 50, 'max': 60, 'dlm': '-', 't': '' }, { 'c': 'rgba(32, 156, 135, 1)', 'min': 40, 'max': 50, 'dlm': '-', 't': '' }, { 'c': 'rgba(40, 127, 141, 1)', 'min': 30, 'max': 40, 'dlm': '-', 't': '' }, { 'c': 'rgba(52, 95, 139, 1)', 'min': 20, 'max': 30, 'dlm': '-', 't': '' }, { 'c': 'rgba(116, 127, 171, 0.857)', 'min': 10, 'max': 20, 'dlm': '-', 't': '' }, { 'c': 'rgba(200, 200, 200, 0.5)', 'min': 0, 'max': 10, 'dlm': '-', 't': '' }],
                'levelsForDig': [
                    { 'color': '#EC407A', 'low': 0.45, 'up': 0.72, 'delimiter': '-', 'text': '' },
                    { 'color': '#FFEB3B', 'low': 0.2, 'up': 0.45, 'delimiter': '-', 'text': '' },
                    { 'color': '#8BC34A', 'low': 0, 'up': 0.2, 'delimiter': '-', 'text': '' },
                ],
                'levelsForText': [
                    { 'color': '#EC407A', 'low': 0.45, 'up': 0.72, 'delimiter': '-', 'text': '(High)' },
                    { 'color': '#FFEB3B', 'low': 0.2, 'up': 0.45, 'delimiter': '-', 'text': '(Medium)' },
                    { 'color': '#8BC34A', 'low': 0, 'up': 0.2, 'delimiter': '-', 'text': '(Low)' },
                ],
                'levelsForSep': [
                    { 'color': '#EC407A', 'low': 0.4, 'up': 1e20, 'delimiter': '', 'text': '(High)' },
                    { 'color': '#FFEB3B', 'low': 0.2, 'up': 0.4, 'delimiter': '', 'text': '(Medium)' },
                    { 'color': '#8BC34A', 'low': 0, 'up': 0.2, 'delimiter': '', 'text': '(Low)' },
                ],
            },
            'actions': [
            ],
        }
    },
    methods: {
    }
}
</script>

<style scoped>
</style>
