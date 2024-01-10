<template>
    <div class="bkh">


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-panel-stripe</span></div>


        <div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-stripe'"
                    :casename="'slot icon, slot title, slot description, slot content and slot footer'"
                ></demolink>

                <w-panel-stripe style="width:600px;">

                    <template v-slot:icon>
                        <w-icon
                            style="margin-right:15px;"
                            :icon="'fab fa-angular'"
                            :size="72"
                        ></w-icon>
                    </template>

                    <template v-slot:title>
                        <div style="font-size:2rem;">{{WPanelStripe.title}}</div>
                    </template>

                    <template v-slot:description>
                        <div style="opacity:0.7;">{{WPanelStripe.description}}</div>
                    </template>

                    <template v-slot:content>
                        <div style="padding:20px;">
                            {{WPanelStripe.content}}
                        </div>
                    </template>

                    <template v-slot:footer>
                        {{WPanelStripe.footer}}
                    </template>

                </w-panel-stripe>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-stripe'"
                    :casename="'slot icon (fontawesome)'"
                ></demolink>

                <w-panel-stripe style="width:600px;">

                    <template v-slot:icon>
                        <w-icon
                            style="margin-right:15px;"
                            :icon="'fas fa-allergies'"
                            :size="72"
                        ></w-icon>
                    </template>

                    <template v-slot:title>
                        <div style="font-size:2rem;">{{WPanelStripe.title}}</div>
                    </template>

                    <template v-slot:description>
                        <div style="opacity:0.7;">{{WPanelStripe.description}}</div>
                    </template>

                    <template v-slot:content>
                        <div style="padding:20px;">
                            {{WPanelStripe.content}}
                        </div>
                    </template>

                    <template v-slot:footer>
                        {{WPanelStripe.footer}}
                    </template>

                </w-panel-stripe>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-stripe'"
                    :casename="'headerBackgroundColor & footerBackgroundColor'"
                ></demolink>

                <w-panel-stripe
                    style="width:600px;"
                    :headerBackgroundColor="'orange lighten-4'"
                    :footerBackgroundColor="'orange lighten-5'"
                >

                    <template v-slot:icon>
                        <w-icon
                            style="margin-right:15px;"
                            :icon="'fab fa-angular'"
                            :size="72"
                        ></w-icon>
                    </template>

                    <template v-slot:title>
                        <div style="font-size:2rem;">{{WPanelStripe.title}}</div>
                    </template>

                    <template v-slot:description>
                        <div style="opacity:0.7;">{{WPanelStripe.description}}</div>
                    </template>

                    <template v-slot:content>
                        <div style="padding:20px;">
                            {{WPanelStripe.content}}
                        </div>
                    </template>

                    <template v-slot:footer>
                        {{WPanelStripe.footer}}
                    </template>

                </w-panel-stripe>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-stripe'"
                    :casename="'borderRadius'"
                ></demolink>

                <w-panel-stripe
                    style="width:600px;"
                    :borderRadius="30"
                >

                    <template v-slot:icon>
                        <w-icon
                            style="margin-right:15px;"
                            :icon="'fab fa-angular'"
                            :size="72"
                        ></w-icon>
                    </template>

                    <template v-slot:title>
                        <div style="font-size:2rem;">{{WPanelStripe.title}}</div>
                    </template>

                    <template v-slot:description>
                        <div style="opacity:0.7;">{{WPanelStripe.description}}</div>
                    </template>

                    <template v-slot:content>
                        <div style="padding:20px;">
                            {{WPanelStripe.content}}
                        </div>
                    </template>

                    <template v-slot:footer>
                        {{WPanelStripe.footer}}
                    </template>

                </w-panel-stripe>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-stripe'"
                    :casename="'with grey outer'"
                ></demolink>

                <div style="display:inline-block; padding:40px; background:#b2b2b2;">

                    <w-panel-stripe
                        style="width:520px;"
                    >

                        <template v-slot:icon>
                            <w-icon
                            style="margin-right:15px;"
                            :icon="'fab fa-angular'"
                            :size="72"
                        ></w-icon>
                        </template>

                        <template v-slot:title>
                            <div style="font-size:2rem;">{{WPanelStripe.title}}</div>
                        </template>

                        <template v-slot:description>
                            <div style="opacity:0.7;">{{WPanelStripe.description}}</div>
                        </template>

                        <template v-slot:content>
                            <div style="padding:20px;">
                                {{WPanelStripe.content}}
                            </div>
                        </template>

                        <template v-slot:footer>
                            {{WPanelStripe.footer}}
                        </template>

                    </w-panel-stripe>

                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-stripe'"
                    :casename="'no shadow, with crimson outer'"
                ></demolink>

                <div style="display:inline-block; padding:40px; background:#a77;">

                    <w-panel-stripe
                        style="width:520px;"
                        :shadow="false"
                    >

                        <template v-slot:icon>
                            <w-icon
                            style="margin-right:15px;"
                            :icon="'fab fa-angular'"
                            :size="72"
                        ></w-icon>
                        </template>

                        <template v-slot:title>
                            <div style="font-size:2rem;">{{WPanelStripe.title}}</div>
                        </template>

                        <template v-slot:description>
                            <div style="opacity:0.7;">{{WPanelStripe.description}}</div>
                        </template>

                        <template v-slot:content>
                            <div style="padding:20px;">
                                {{WPanelStripe.content}}
                            </div>
                        </template>

                        <template v-slot:footer>
                            {{WPanelStripe.footer}}
                        </template>

                    </w-panel-stripe>

                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-stripe'"
                    :casename="'only slot icon and slot title in header'"
                ></demolink>

                <w-panel-stripe style="width:600px;">

                    <template v-slot:icon>
                        <w-icon
                            style="margin-right:10px;"
                            :icon="'fas fa-allergies'"
                            :size="72"
                        ></w-icon>
                    </template>

                    <template v-slot:title>
                        <div style="font-size:2rem;">Panel Title</div>
                    </template>

                    <template v-slot:content>
                        <div style="padding:20px;">
                            {{WPanelStripe.content}}
                        </div>
                    </template>

                    <template v-slot:footer>
                        {{WPanelStripe.footer}}
                    </template>

                </w-panel-stripe>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-stripe'"
                    :casename="'only slot title in header'"
                ></demolink>

                <w-panel-stripe style="width:600px;">

                    <template v-slot:title>
                        <div style="font-size:2rem;">Panel Title</div>
                    </template>

                    <template v-slot:content>
                        <div style="padding:20px;">
                            {{WPanelStripe.content}}
                        </div>
                    </template>

                    <template v-slot:footer>
                        {{WPanelStripe.footer}}
                    </template>

                </w-panel-stripe>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-stripe'"
                    :casename="'padding'"
                ></demolink>

                <w-panel-stripe
                    style="width:600px;"
                    :padding="12"
                >

                    <template v-slot:icon>
                        <w-icon
                            style="margin-right:10px;"
                            :icon="'fab fa-angular'"
                            :size="52"
                        ></w-icon>
                    </template>

                    <template v-slot:title>
                        <div style="font-size:1.3rem;">{{WPanelStripe.title}}</div>
                    </template>

                    <template v-slot:description>
                        <div style="opacity:0.6; font-size:0.8rem;">{{WPanelStripe.description}}</div>
                    </template>

                    <template v-slot:content>
                        <div style="padding:12px;">
                            {{WPanelStripe.content}}
                        </div>
                    </template>

                    <template v-slot:footer>
                        {{WPanelStripe.footer}}
                    </template>

                </w-panel-stripe>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-stripe'"
                    :casename="'buttons in slot footer'"
                ></demolink>

                <w-panel-stripe style="width:600px;">

                    <template v-slot:icon>
                        <w-icon
                            style="margin-right:15px;"
                            :icon="'fab fa-angular'"
                            :size="72"
                        ></w-icon>
                    </template>

                    <template v-slot:title>
                        <div style="font-size:2rem;">{{WPanelStripe.title}}</div>
                    </template>

                    <template v-slot:description>
                        <div style="opacity:0.7;">{{WPanelStripe.description}}</div>
                    </template>

                    <template v-slot:content>
                        <div style="padding:20px;">
                            {{WPanelStripe.content}}
                        </div>
                    </template>

                    <template v-slot:footer>
                        <div style="display:flex; justify-content:flex-end;">
                            <button style="margin-left:15px; padding:5px 10px; background:#ddd; border-radius:10px; box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);">離開</button>
                            <button style="margin-left:15px; padding:5px 10px; background:#ddd; border-radius:10px; box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);">儲存</button>
                        </div>
                    </template>

                </w-panel-stripe>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-stripe'"
                    :casename="'no header'"
                ></demolink>

                <w-panel-stripe
                    style="width:600px;"
                    :hasHeader="false"
                >

                    <template v-slot:icon>
                        <w-icon
                            style="margin-right:15px;"
                            :icon="'fab fa-angular'"
                            :size="72"
                        ></w-icon>
                    </template>

                    <template v-slot:title>
                        <div style="font-size:2rem;">{{WPanelStripe.title}}</div>
                    </template>

                    <template v-slot:description>
                        <div style="opacity:0.7;">{{WPanelStripe.description}}</div>
                    </template>

                    <template v-slot:content>
                        <div style="padding:20px;">
                            {{WPanelStripe.content}}
                        </div>
                    </template>

                    <template v-slot:footer>
                        {{WPanelStripe.footer}}
                    </template>

                </w-panel-stripe>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-stripe'"
                    :casename="'no footer'"
                ></demolink>

                <w-panel-stripe
                    style="width:600px;"
                    :hasFooter="false"
                >

                    <template v-slot:icon>
                        <w-icon
                            style="margin-right:15px;"
                            :icon="'fab fa-angular'"
                            :size="72"
                        ></w-icon>
                    </template>

                    <template v-slot:title>
                        <div style="font-size:2rem;">{{WPanelStripe.title}}</div>
                    </template>

                    <template v-slot:description>
                        <div style="opacity:0.7;">{{WPanelStripe.description}}</div>
                    </template>

                    <template v-slot:content>
                        <div style="padding:20px;">
                            {{WPanelStripe.content}}
                        </div>
                    </template>

                    <template v-slot:footer>
                        {{WPanelStripe.footer}}
                    </template>

                </w-panel-stripe>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-stripe'"
                    :casename="'separate for slot content'"
                ></demolink>

                <w-panel-stripe style="width:600px;">

                    <template v-slot:icon>
                        <w-icon
                            style="margin-right:15px;"
                            :icon="'fab fa-angular'"
                            :size="72"
                        ></w-icon>
                    </template>

                    <template v-slot:title>
                        <div style="font-size:2rem;">{{WPanelStripe.title}}</div>
                    </template>

                    <template v-slot:description>
                        <div style="opacity:0.7;">{{WPanelStripe.description}}</div>
                    </template>

                    <template v-slot:content>

                        <div style="padding:20px;">
                            <span>A panel subtitle</span>
                        </div>

                        <div style="border-top:1px solid #ddd;"></div>

                        <div style="padding:20px; font-size:0.85rem;">
                            {{WPanelStripe.content}}
                        </div>

                    </template>

                    <template v-slot:footer>
                        <div>{{WPanelStripe.footer}}</div>
                    </template>

                </w-panel-stripe>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-stripe'"
                    :casename="'table in slot content'"
                ></demolink>

                <w-panel-stripe style="width:600px;">

                    <template v-slot:icon>
                        <w-icon
                            style="margin-right:15px;"
                            :icon="'fab fa-angular'"
                            :size="72"
                        ></w-icon>
                    </template>

                    <template v-slot:title>
                        <div style="font-size:2rem;">{{WPanelStripe.title}}</div>
                    </template>

                    <template v-slot:description>
                        <div style="opacity:0.7;">{{WPanelStripe.description}}</div>
                    </template>

                    <template v-slot:content>

                        <div style="padding:10px;">
                            <span>A data table</span>
                        </div>

                        <table style="width:100%; font-size:0.7rem; border-collapse:collapse;">
                            <thead>
                                <tr>
                                    <th style="padding:2px 8px; text-align:left;">Dessert</th>
                                    <th style="padding:2px 8px; text-align:left;">Calories</th>
                                    <th style="padding:2px 8px; text-align:left;">Fat</th>
                                    <th style="padding:2px 8px; text-align:left;">Carbs</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="padding:2px 8px; border-top:1px solid #ddd;">Frozen Yogurt</td>
                                    <td style="padding:2px 8px; border-top:1px solid #ddd;">159</td>
                                    <td style="padding:2px 8px; border-top:1px solid #ddd;">6</td>
                                    <td style="padding:2px 8px; border-top:1px solid #ddd;">24</td>
                                </tr>
                                <tr>
                                    <td style="padding:2px 8px; border-top:1px solid #ddd;">Ice cream sandwich</td>
                                    <td style="padding:2px 8px; border-top:1px solid #ddd;">237</td>
                                    <td style="padding:2px 8px; border-top:1px solid #ddd;">9</td>
                                    <td style="padding:2px 8px; border-top:1px solid #ddd;">37</td>
                                </tr>
                                <tr>
                                    <td style="padding:2px 8px; border-top:1px solid #ddd;">Eclair</td>
                                    <td style="padding:2px 8px; border-top:1px solid #ddd;">262</td>
                                    <td style="padding:2px 8px; border-top:1px solid #ddd;">16</td>
                                    <td style="padding:2px 8px; border-top:1px solid #ddd;">23</td>
                                </tr>
                            </tbody>
                        </table>

                    </template>

                    <template v-slot:footer>
                        {{WPanelStripe.footer}}
                    </template>

                </w-panel-stripe>

            </div>


        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WPanelStripe from './components/WPanelStripe.vue'
import WIcon from './components/WIcon.vue'


export default {
    components: {
        demolink,
        WPanelStripe,
        WIcon,
    },
    props: {
    },
    data: function() {
        return {
            'WPanelStripe': {
                'title': 'A panel title',
                'description': 'Quisque ut nisi. Maecenas malesuada.',
                'content': 'Here is a panel content, Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. In ut quam vitae odio lacinia tincidunt.',
                'footer': 'Here is a panel footer',
            },
            'actions': [
            ],
        }
    },
}
</script>

<style scoped>
</style>
