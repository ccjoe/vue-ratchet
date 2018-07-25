<template>
<modal :show.sync="innerShow" type="toast" :maskclose="maskclose" :mask="mask" :time="time" :hastitle="false">
    <slot></slot>
</modal>
</template>

<script>
import modal from './modal.vue'
export default {
    props: {
        show: {
            type: Boolean,
            default: false
        }, //是否存在mask
        mask: {
            type: Boolean,
            default: true
        }, //点击mask关闭
        maskclose: {
            type: Boolean,
            default: true
        },
        time: {
            type: Number,
            default: 3000
        }
    },
    components: {
        modal
    },
    data() {
        return {
            innerShow: this.show
        }
    },
    watch: {
        innerShow(val) {
            this.$emit('update:show', val)
        },
        show(val, oldVal) {
            this.innerShow = val
            if (val) {
                this.t = setTimeout(function () {
                    this.show = false;
                }.bind(this), Number(this.time));
            } else {
                clearTimeout(this.t);
            }
        }
    }
}
</script>

<style lang="sass">
@import './scss/phone';
.modal-toast {
    z-index: 100000; // pointer-events: none;
    .modal-inner {
        background-color: transparent;
    }
    .modal-text {
        background: rgba(0, 0, 0, .7);
        padding: r(8px);
        border-radius: r(6px);
        color: #fff;
        text-align: center;
    }
}
</style>
