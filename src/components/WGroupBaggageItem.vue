<template>
    <div
        @mouseenter="mouseEnter=true"
        @mouseleave="mouseEnter=false"
    >

        <slot
            :isHover="mouseEnter"
        >
        </slot>

    </div>
</template>

<script>


export default {
    components: {
    },
    props: {
    },
    data: function() {
        return {
            mouseEnter: false,
        }
    },
    computed: {
    },
    methods: {
    }
}
</script>

<style scoped>
</style>
