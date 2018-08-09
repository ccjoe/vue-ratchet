<template>
<modal @click="hide" class="desc" :show="show" type="popup" title="" :hastitle="false">
    <slot></slot>
</modal>
</template>

<script>
import modal from '../modal.vue'
export default {
    props: {
        show: {
            default: false,
            type: Boolean,

        }
    },
    components: {
        modal
    },
    watch: {
        show(nv) {
            this.$parent.isBlur = nv;
        }
    },
    methods: {
        hide() {
            this.show = false;
        }
    }
}
</script>

<style lang="scss">
.desc .modal-layout {
    background-color: rgba(255, 255, 255, 0.9);
    .modal-inner {
        background-color: transparent;
    }
    .modal-text {
        margin-top: 1rem;
        color: #666;
    }
}

.blur {
    -webkit-filter: blur(5px);
    filter: blur(5px);
}
</style>
