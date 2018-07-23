<template>
<div class="control-content" v-bind:class="{hide: !show}" v-show="show" :transition="transition">
    <slot></slot>
</div>
</template>

<script>
export default {
    props: {
        header: {
            type: String
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            index: 0
        }
    },
    computed: {
        show: function() {
            return (this.$parent.active == this.index);
        },
        transition: function() {
            return this.$parent.effect
        }
    },
    created() {
        this.$parent.renderData.push({
            header: this.header,
            disabled: this.disabled
        })
    },
    mounted() {
        for (var c in this.$parent.$children) {
            if (this.$parent.$children[c].$el == this.$el) {
                this.index = c;
                break;
            }
        }
    }
}
</script>
