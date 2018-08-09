<template>
<span class="badge" v-bind:class="[color?'badge-'+color:'', isInverted()?'badge-inverted':'']"><slot></slot></span>
</template>

<script>
export default {
    name: 'badge',
    props: {
        color: {
            type: String,
            default: 'primary'
        },
        inverted: void 0
    },
    methods: {
        //传入的值为inverted为否时
        isInverted: function () {
            let inverted = this.inverted;
            return !(inverted === void 0 || inverted === false);
        }
    }

}
</script>

<style lang="scss">
@import './scss/variables';
@import './scss/mixins';
.badge {
    display: inline-block;
    padding: 2px 9px 3px;
    font-size: 12px;
    line-height: 1;
    color: #333;
    background-color: rgba(0, 0, 0, .15);
    border-radius: 100px; // Inverted badges have no background.
    &.badge-inverted {
        padding: 0 5px 0 0;
        background-color: transparent;
    }
}

// Badge modifiers
// --------------------------------------------------
// Main badge
.badge-primary {
    color: #fff;
    background-color: $primary-color;
    &.badge-inverted {
        color: $primary-color;
    }
}

// Positive badge
.badge-positive {
    color: #fff;
    background-color: $positive-color;
    &.badge-inverted {
        color: $positive-color;
    }
}

// Negative badge
.badge-negative {
    color: #fff;
    background-color: $negative-color;
    &.badge-inverted {
        color: $negative-color;
    }
}
</style>
