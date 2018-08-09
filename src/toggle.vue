<template>
<div class="toggle" :class="{'active': checked}">
    <v-touch v-on:tap="toggle">
        <div class="toggle-handle"></div>
    </v-touch>
</div>
</template>

<script>
export default {
    name: 'toggle',
    model: {
      prop: 'checked', // Rename from default 'value' property.
      event: 'change' // Rename from default 'input' event.
    },
    props: {
        checked: {
            type: Boolean,
            default: false
        }
    },
    data () {
      return {
        innnerChecked: this.checked
      }
    },
     watch: {
      innnerChecked (value) {
        this.$emit('change', Boolean(value))
      }
    },
    methods: {
        toggle: function () {
            this.innnerChecked = !this.innnerChecked;
        }
    }
}
</script>

<style lang="scss" scoped>
@import './scss/variables';
@import './scss/mixins';
$positive-color: #099fde;
.toggle {
    position: relative;
    display: block;
    /*   width: 74px;
  height: 30px;
  background-color: #fff;
  border: 2px solid #ddd;
  border-radius: 20px; */
    width: 2.5rem;
    height: 1.5rem;
    border-radius: 64px;
    background-color: #ccc;
    @include transition-property(background-color, border);
    @include transition-duration(.2s); // Sliding handle
    .toggle-handle {
        position: absolute;
        top: -1px;
        left: -1px;
        z-index: 2;
        /*     width: 30px;
    height: 30px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 100px; */
        top: 2px;
        left: 2px;
        height: 1.375rem;
        width: 1.375rem;
        border-radius: 50%;
        background-color: #fff;
        -webkit-transition-property: -webkit-transform, border, width;
        -moz-transition-property: -moz-transform, border, width;
        transition-property: transform, border, width;
        @include transition-duration(.2s);
    }
    &:before {
        position: absolute;
        top: 5px;
        right: 11px;
        font-size: 13px;
        color: #999;
        text-transform: uppercase; // content: "Off";
    } // Active state for toggle
    &.active {
        background-color: $positive-color; // border: 2px solid $positive-color;
        .toggle-handle {
            border-color: $positive-color;
            @include transform(translate3d(1rem, 0, 0));
        }
        &:before {
            right: auto;
            left: 15px;
            color: #fff; // content: "On";
        }
    } // Hide the checkbox
    input[type="checkbox"] {
        display: none;
    }
}
</style>
