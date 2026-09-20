<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>


/**
 * @vue-prop {String} [to=null] 輸入搬移目標元素之CSS選擇器字串，內部以document.querySelector查找，slot內容將被搬移至該元素內，預設null
 * @vue-slot {Object} default 欲搬移至目標元素之內容slot
 */
export default {
    props: {
        to: {
            type: String,
            default: null,
        },
    },
    computed: {

        toEl: function() {
            let vo = this

            //el
            let el = null
            try {
                el = document.querySelector(vo.to)
            }
            catch (err) {}
            // console.log('to', vo.to)
            // console.log('el', el)

            return el
        },

    },
    watch: {

        toEl: function(value) {
            //console.log('watch toEl')
            let vo = this

            //teleport
            vo.teleport()

        },

    },
    mounted: function() {
        let vo = this

        //teleport
        vo.teleport()

    },
    destroyed: function() {
        let vo = this

        //remove
        try {
            vo.$el.remove()
        }
        catch (err) {}

    },
    methods: {

        teleport: function() {
            let vo = this

            //appendChild
            try {
                if (vo.$el && vo.$el.parentElement !== vo.toEl) {
                    vo.toEl.appendChild(vo.$el)
                }
            }
            catch (err) {}

        },

    },

    // render: function() {
    //     let vo = this
    //     let r = null
    //     try {
    //         r = vo.$scopedSlots.default()
    //         console.log('default()', r)
    //     }
    //     catch (err) {}
    //     return r
    // },

}

</script>

<style scoped>
</style>
