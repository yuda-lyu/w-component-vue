<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>

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
