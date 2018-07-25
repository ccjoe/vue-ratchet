<template>
<modal :show.sync="innerShow" :type="type" :maskclose="maskclose" :mask="mask" :hastitle="hastitle" :role="role" :title="title">
    <slot></slot>
</modal>
</template>

<script>
import modal from './modal.vue'
export default {
    props: {
        type: {
            type: String,
            default: 'popover'
        }, //popover tips
        show: {
            type: Boolean,
            default: false,
        },
        mask: {
            type: Boolean,
            default: true
        }, //是否存在mask
        maskclose: {
            type: Boolean,
            default: true
        }, //点击mask关闭
        title: {
            type: String,
            default: ''
        },
        hastitle: {
            type: Boolean,
            default: true
        },
        role: {
            type: String
        } //选择器
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
            if (val && (this.type === 'popover' || this.type === 'tips')) {
                var $pos = document.querySelectorAll(this.role)[0],
                    $modal = this.$el.querySelectorAll('.modal-layout')[0];

                var trisize = 20;
                var pos = $pos.getBoundingClientRect();
                var mw = $modal.clientWidth,
                    mh = $modal.clientHeight,
                    top = pos.top - mh - trisize / 2,
                    left = pos.left + ($pos.clientWidth - mw) / 2,
                    fullWidth = document.body.clientWidth,
                    gap = 10;

                if (pos.top < mh) {
                    top = pos.top + trisize * 1.5;
                    this.tripos = 'tri-top';
                } else {
                    this.tripos = 'tri-bottom';
                }
                if (left < gap) {
                    left = gap;
                    this.tripos += ' tri-left';
                } else if (left > fullWidth - mw - gap) {
                    left = fullWidth - mw - gap;
                    this.tripos += ' tri-right';
                }
                $modal.style.left = left + 'px'
                $modal.style.top = top + 'px'
            }
        }
    }
}
</script>

<style lang="sass">
@import './scss/phone';
$popoverBg: rgba(255, 255, 255, 0.95);
$triSize: r(20px);
$chrome-color: #fff !global;
$tipsColor: #666;
.modal-popover,
.modal-tips {
    .modal-layout {
        position: fixed;
        max-width: r(250px);
        width: auto;
        margin: 0;
        overflow: visible;
        border-radius: r(6px);
        &:before,
        &:after {
            position: absolute;
            left: 50%;
            width: 0;
            height: 0;
            margin-left: -$triSize/2;
            content: '';
            border-right: $triSize/2 solid transparent;
            border-left: $triSize/2 solid transparent;
        }
        &.tri-top:before {
            border-bottom: $triSize/2 solid $chrome-color;
            top: -$triSize/2;
        }
        &.tri-bottom:after {
            border-top: $triSize/2 solid $chrome-color;
            bottom: -$triSize/2;
        }
        &.tri-left:before,
        &.tri-left:after {
            left: 25%;
        }
        &.tri-right:before,
        &.tri-right:after {
            left: 75%;
        }
        .modal-title {
            padding: r(5px);
            background-color: $tipsColor;
            line-height: 1rem;
        }
        &.visible {
            opacity: 1; // @include transform(translate3d(0, 0, 0));
        } // Give correct spacing to the content if there is a bar inside the popover.
        .bar~.table-view {
            // padding-top: $bar-base-height;
        }
        .modal-inner {
            border-radius: r(8px);
            padding: 0;
        }
        .modal-title+.modal-text {
            margin-top: 0;
            padding: 0;
            background-color: $tipsColor;
        }
        .modal-text>* {
            margin: 0;
        }
        .table-view {
            margin-bottom: 0;
            border-bottom: 0;
        }
    }
}

.modal-tips {
    .modal-layout {
        max-width: r(150px);
        .modal-text {
            padding: r(5px);
            color: #fff;
            font-size: r(13px);
        }
        .modal-inner {
            background-color: $tipsColor;
            border-radius: r(4px);
        }
        &.tri-top:before {
            top: r(-7px);
            border-bottom-color: $tipsColor;
        }
        &.tri-bottom:after {
            bottom: r(-7px);
            border-top-color: $tipsColor;
        }
    }
}
</style>
