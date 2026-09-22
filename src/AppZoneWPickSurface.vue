<template>
    <div class="bkh">


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-pick-surface</span></div>


        <div>


            <div class="bk">
                <demolink
                    :kbname="'w-pick-surface'"
                    :casename="'default'"
                ></demolink>

                <!-- 本組件為完全受控, 自身不保存座標, 不綁定事件即完全不會有反應 -->
                <!-- 最簡用法為以.sync雙向綁定locLeft, 不需自行撰寫事件處理 -->
                <!-- 座標單位為px, 上限為width-1而非width, 故寬200時最大值為199 -->
                <!-- 背景由slot傳入, 組件已備滿版外框, slot內容不需自行定位 -->
                <div style="padding:5px 0px;">
                    <div :style="`font-size:0.8rem; display:inline-block; vertical-align:middle;`">locLeft:</div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WPickSurface.loc1}}</div>
                    <div :style="`padding-left:15px; font-size:0.8rem; display:inline-block; vertical-align:middle; cursor:pointer; color:#1565c0;`" @click="WPickSurface.loc1=0">set 0</div>
                    <div :style="`padding-left:15px; font-size:0.8rem; display:inline-block; vertical-align:middle; cursor:pointer; color:#1565c0;`" @click="WPickSurface.loc1=199">set 199 (width-1)</div>
                </div>

                <w-pick-surface
                    :locLeft.sync="WPickSurface.loc1"
                >
                    <div style="width:100%; height:100%; background:repeating-linear-gradient(to right, #f5f5f5 0px, #f5f5f5 19px, #cccccc 19px, #cccccc 20px);"></div>
                </w-pick-surface>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-pick-surface'"
                    :casename="'axis'"
                ></demolink>

                <!-- axis為'xy'時改為二維, 游標變為圓點且同時追蹤橫縱向 -->
                <!-- 本組件與顏色無關, 此例為一般座標盤, 背景可為任意內容 -->
                <div style="padding:5px 0px;">
                    <div :style="`font-size:0.8rem; display:inline-block; vertical-align:middle;`">x:</div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WPickSurface.loc2.left}}</div>
                    <div :style="`padding-left:15px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">y:</div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WPickSurface.loc2.top}}</div>
                </div>

                <w-pick-surface
                    :width="200"
                    :height="200"
                    :cursorSize="14"
                    :axis="'xy'"
                    :locLeft="WPickSurface.loc2.left"
                    :locTop="WPickSurface.loc2.top"
                    @pick="(msg)=>{WPickSurface.loc2=msg}"
                >
                    <div style="width:100%; height:100%; background-color:#fafafa; background-image:linear-gradient(to right, #dddddd 1px, transparent 1px), linear-gradient(to bottom, #dddddd 1px, transparent 1px); background-size:20px 20px;"></div>
                </w-pick-surface>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-pick-surface'"
                    :casename="'width & height'"
                ></demolink>

                <div style="padding:5px 0px;">
                    <div :style="`font-size:0.8rem; display:inline-block; vertical-align:middle;`">locLeft:</div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WPickSurface.loc3}}</div>
                </div>

                <w-pick-surface
                    :width="300"
                    :height="40"
                    :locLeft.sync="WPickSurface.loc3"
                >
                    <div style="width:100%; height:100%; background:repeating-linear-gradient(to right, #f5f5f5 0px, #f5f5f5 19px, #cccccc 19px, #cccccc 20px);"></div>
                </w-pick-surface>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-pick-surface'"
                    :casename="'cursorSize & cursorColor & cursorBorderColor'"
                ></demolink>

                <!-- 顏色字串亦可使用色票名稱, 例如'blue darken-3' -->
                <div style="padding:5px 0px;">
                    <div :style="`font-size:0.8rem; display:inline-block; vertical-align:middle;`">locLeft:</div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WPickSurface.loc4}}</div>
                </div>

                <w-pick-surface
                    :cursorSize="15"
                    :cursorColor="'#ffffff'"
                    :cursorBorderColor="'blue darken-3'"
                    :locLeft.sync="WPickSurface.loc4"
                >
                    <div style="width:100%; height:100%; background:repeating-linear-gradient(to right, #f5f5f5 0px, #f5f5f5 19px, #cccccc 19px, #cccccc 20px);"></div>
                </w-pick-surface>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-pick-surface'"
                    :casename="'locLeft(sync) & locTop(sync)'"
                ></demolink>

                <!-- 二維時locLeft與locTop皆可各自以.sync綁定 -->
                <!-- axis為'x'時不發出update:locTop, 故一維面上綁定locTop不會把外部變數歸零 -->
                <div style="padding:5px 0px;">
                    <div :style="`font-size:0.8rem; display:inline-block; vertical-align:middle;`">locLeft:</div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WPickSurface.loc5Left}}</div>
                    <div :style="`padding-left:15px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">locTop:</div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WPickSurface.loc5Top}}</div>
                </div>

                <w-pick-surface
                    :width="200"
                    :height="120"
                    :cursorSize="14"
                    :axis="'xy'"
                    :locLeft.sync="WPickSurface.loc5Left"
                    :locTop.sync="WPickSurface.loc5Top"
                >
                    <div style="width:100%; height:100%; background-color:#fafafa; background-image:linear-gradient(to right, #dddddd 1px, transparent 1px), linear-gradient(to bottom, #dddddd 1px, transparent 1px); background-size:20px 20px;"></div>
                </w-pick-surface>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-pick-surface'"
                    :casename="'events'"
                ></demolink>

                <!-- pick於按下當下即發出一次, 其後拖曳期間持續發出 -->
                <!-- pick-end於放開或手勢被系統取消時發出, 組件銷毀時不發出 -->
                <div style="padding:5px 0px;">
                    <div :style="`font-size:0.8rem; display:inline-block; vertical-align:middle;`">pick:</div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WPickSurface.pick6}}</div>
                </div>

                <div style="padding:5px 0px;">
                    <div :style="`font-size:0.8rem; display:inline-block; vertical-align:middle;`">狀態:</div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WPickSurface.dragging6?'拖曳中':'已放開'}}</div>
                </div>

                <w-pick-surface
                    :locLeft="WPickSurface.loc6"
                    @pick="pickEv"
                    @pick-end="pickEndEv"
                >
                    <div style="width:100%; height:100%; background:repeating-linear-gradient(to right, #f5f5f5 0px, #f5f5f5 19px, #cccccc 19px, #cccccc 20px);"></div>
                </w-pick-surface>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-pick-surface'"
                    :casename="'slot'"
                ></demolink>

                <!-- slot為scoped slot, 可取得width、height、locLeft、locTop與editable -->
                <div style="padding:5px 0px;">
                    <div :style="`font-size:0.8rem; display:inline-block; vertical-align:middle;`">locLeft:</div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WPickSurface.loc7}}</div>
                </div>

                <w-pick-surface
                    :height="24"
                    :locLeft.sync="WPickSurface.loc7"
                >
                    <template v-slot:default="{ locLeft }">
                        <div style="width:100%; height:100%; background:#eeeeee;"></div>
                        <div :style="`position:absolute; left:0px; top:0px; width:${locLeft}px; height:100%; background:#90caf9;`"></div>
                    </template>
                </w-pick-surface>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-pick-surface'"
                    :casename="'not editable'"
                ></demolink>

                <div style="padding:5px 0px;">
                    <div :style="`font-size:0.8rem; display:inline-block; vertical-align:middle;`">locLeft:</div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WPickSurface.loc8}}</div>
                </div>

                <w-pick-surface
                    :locLeft.sync="WPickSurface.loc8"
                    :editable="false"
                >
                    <div style="width:100%; height:100%; background:repeating-linear-gradient(to right, #f5f5f5 0px, #f5f5f5 19px, #cccccc 19px, #cccccc 20px);"></div>
                </w-pick-surface>

            </div>


        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WPickSurface from './components/WPickSurface.vue'


export default {
    components: {
        demolink,
        WPickSurface,
    },
    props: {
    },
    data: function() {
        return {
            'WPickSurface': {

                'loc1': 60,

                'loc2': { left: 100, top: 60 },

                'loc3': 150,

                'loc4': 80,

                'loc5Left': 70,
                'loc5Top': 40,

                'loc6': 100,
                'pick6': '',
                'dragging6': false,

                'loc7': 90,

                'loc8': 140,

            },
            'actions': [
            ],
        }
    },
    methods: {

        pickEv: function(msg) {
            let vo = this
            vo.WPickSurface.loc6 = msg.left
            vo.WPickSurface.pick6 = `left:${msg.left} ratioLeft:${msg.ratioLeft.toFixed(3)} pointerType:${msg.pointerType}`
            vo.WPickSurface.dragging6 = true
        },

        pickEndEv: function() {
            let vo = this
            vo.WPickSurface.dragging6 = false
        },

    }
}
</script>

<style scoped>
</style>
