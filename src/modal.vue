<template>
<div class="modal">
    <transition name="fade" mode="out-in">
        <div v-show="innerShow" v-bind:class="mask ? 'modal-mask':'modal-nomask'"></div>
    </transition>
    <transition :name="type" mode="out-in">
        <div :class="`modal-wrapper modal-${type}`" v-show="innerShow" @click.self="maskclose ? onCancel() : void 0;">
            <div v-bind:class="`modal-layout  ${(type==='popover' || type==='tips') && tripos ? tripos : ''}`">
                <span v-if="close===true" @click="onCancel" class="icon icon-close"></span>
                <div class="modal-inner">
                    <slot name="loading"></slot>
                    <div v-if="hastitle" class="modal-title">
                        <slot name="title">
                            <span v-if="type==='bottom' || type==='popup'" @click="onCancel" class='btn modal-btn btn-link modal-btn-no'>取消</span>
                            <span>{{title}}</span>
                            <span v-if="type==='bottom' || type==='popup'" @click="onYes" class='btn modal-btn btn-link modal-btn-yes'>确定</span>
                        </slot>
                    </div>
                    <div class="modal-text">
                        <slot>{{content}}</slot>
                    </div>
                </div>
                <div class="modal-buttons" v-if="type==='alert'  || type==='confirm'">
                    <slot name="btns">
                        <span v-if="type!=='confirm'" @click="onCancel" class="modal-button modal-btn modal-btn-def modal-button-bold">取消</span>
                        <span @click="onYes" v-bind:class="`modal-button modal-btn modal-btn-yes modal-button-bold ${disabled ? 'modal-button-disabled' : ''}`">确定</span>
                    </slot>
                </div>
            </div>
        </div>
    </transition>
</div>
</template>

<script>
export default {
    props: {
        //是否显示右上角关闭标签
        close: {
            type: Boolean,
            default: false
        },
        showChange: function () {},
        show: {
            type: Boolean,
            default: false,
        },
        type: '', //loading preload  confirm alert center top bottom popup popover tips toast 在具体实例中已定义，扩展时可自定义名称
        title: '',
        content: '', //content为str或html,如果为function则需要返回str或html
        role: String, //弹层位置
        //是否存在mask
        mask: {
            type: Boolean,
            default: true
        },
        //点击mask关闭
        maskclose: {
            type: Boolean,
            default: true
        },
        //弹层标题栏
        hastitle: {
            default: true,
            type: Boolean
        },
        onyes: {
            default: function () {},
            type: Function
        },
        oncancel: {
            default: function () {},
            type: Function
        },
        disabled: {
            default: false,
            type: Boolean,
        },
    },
    data() {
        return {
            innerShow: this.show,
            tripos: 'tri-bottom'
        }
    },
    watch: {
        innerShow(val) {
            // this.show = val
            this.$emit('update:show', val)
        },
        show(val) {
            this.innerShow = val
        }
    },
    methods: {
        onYes: function (e) {
            if (this.disabled) return;
            this.onyes()
            this.hide()
        },
        onCancel: function (e) {
            this.oncancel(e)
            this.hide();
        },
        hide: function () {
            this.innerShow = false
        }
    }
}
</script>

<style lang="sass">
@import './scss/variables';
@import './scss/mixins';
@import './scss/phone';
/* === Modals === */

$modalBg: rgba(255, 255, 255, 0.95);
$modalBd: rgba(230, 230, 230, 0.9);
$modalButonColor: #007aff;
$modalButonActiveBg: rgba(230, 230, 230, 0.95);
$modalHairlineColor: rgba(0, 0, 0, 0.2);
$modalDuration: 400ms;
$modalWidth: r(300px);
$modalHeight: r(270px);
$modalButtonSize: r(44px);
$actionsModalBg: rgba(255, 255, 255, 0.95);
$actionsModalButtonActiveBg: rgba(230, 230, 230, 0.9);
$actionsModalHairlineColor: rgba(0, 0, 0, 0.2);
$actionsModalDuration: 300ms;
$popupDuration: 400ms;
$actionsPopoverHairline: rgba(0, 0, 0, 0.2);
.modal-mask,
.modal-wrapper {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    z-index: 1000;
}

.modal-mask {
    background-color: rgba(55, 55, 55, .6);
}

.modal-wrapper {
    transition: all .3s ease;
    z-index: 1001;
}

.modal-nomask {
    background-color: rgba(0, 0, 0, 0);
}

.modal-layout {
    margin: 35% auto 0;
    border-radius: r(6px);
    width: $modalWidth;
    z-index: 1001;
}

.modal-inner {
    border-radius: r(6px) r(6px) 0 0;
    position: relative;
    background: $modalBg;
}

.modal-title {
    line-height: 1.8rem;
    text-align: center;
    background-color: #08A9E5;
    font-size: 0.7rem;
    font-weight: 300;
    color: #fff;
    html.ios-gt-8 & {
        font-weight: 600;
    }
    +.modal-text {
        position: relative;
        background-color: #fff;
        padding: r(10px);
    }
}

.modal-buttons {
    display: flex;
    line-height: 2.25rem;
    background-color: #fafafa;
    &.modal-buttons-vertical {
        display: block;
        height: auto;
    }
}

.modal-button {
    width: 100%;
    text-align: center;
    border-right: 1px solid #DFDFDF;
    display: block;
    width: 49%; //android uc not support flex
    font: {
        size: 0.75rem;
        weight: 300;
    }
    &:last-child {
        border-right: none;
    }
    &-emphasize {
        color: #009EE1;
    }
    &-disabled {
        color: #ccc;
    }
    &:first-child {
        border-radius: 0 0 0 r(13px);
    }
    &:last-child {
        border-radius: 0 0 r(13px) 0;
    }
    &:first-child:last-child {
        border-radius: 0 0 r(13px) r(13px);
    }
    &.modal-button-bold {
        font-weight: 500;
        html.ios-gt-8 & {
            font-weight: 600;
        }
    }
    html:not(.watch-active-state) &:active,
    &.active-state {
        background: $modalButonActiveBg;
    }
    .modal-buttons-vertical & {
        border-radius: 0;
        &:last-child {
            border-radius: 0 0 r(13px) r(13px);
        }
    }
    &:after {
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        left: auto;
        bottom: auto;
        width: 1px;
        height: 100%;
        background-color: #b5b5b5;
        display: block;
        z-index: 15;
        -webkit-transform-origin: 100% 50%;
        transform-origin: 100% 50%;
    }
}

.modal-no-buttons {
    .modal-inner {
        border-radius: r(13px);
    }
    .modal-buttons {
        display: none;
    }
}

.modal-preload,
.modal-top {
    .modal-layout {
        margin-top: 0;
    }
}

.modal-tips {
    background-color: transparent;
}

.modal-confirm {
    .modal-buttons {
        .modal-button {
            flex: 2;
        }
    }
}

.modal-alert {
    .modal-buttons {
        .modal-button {
            flex: 1;
        }
    }
}

.modal-top,
.modal-bottom,
.modal-popup {
    .modal-layout {
        width: 100%;
        border-radius: 0;
        .modal-inner,
        .modal-button {
            border-radius: 0;
        }
        .modal-button {
            &:first-child,
            &:last-child {
                border-radius: 0;
            }
        }
    }
}

.modal-top {
    .modal-layout {
        align-self: flex-start;
    }
    .modal-title,
    .modal-title+.modal-text {
        text-align: left;
        background-color: transparent;
    }
    .modal-inner {
        background-color: rgba(0, 0, 0, 0.8);
        color: #d2d2d2;
        font-size: r(14px);
    }
    .icon-close {
        position: absolute;
        right: $gapV;
        color: #fff;
        z-index: 1;
    }
}

.modal-bottom,
.modal-popup {
    .modal-layout {
        align-self: flex-end;
        bottom: 0;
        left: 0;
        position: absolute; //android uc not support flex
        max-height: r(250px);
        .table-view {
            margin-bottom: 0;
        }
        .modal-title {
            line-height: r(35px);
            font-size: r(16px);
            border-bottom: 1px solid #ddd;
            .btn-link {
                font-size: r(15px);
                padding: r(10px);
            }
            .modal-btn-no {
                float: left;
            }
            .modal-btn-yes {
                float: right;
            }
        }
        .modal-title+.modal-text {
            height: r(170px);
            padding: 0;
        }
    }
}

.modal-popup {
    .modal-layout {
        height: 100%;
        max-height: 100%;
        background-color: #fff;
        .modal-title+.modal-text {
            height: auto;
        }
    }
    .modal-text {
        text-align: left;
    }
}

/* Animate For Vue Modal */

.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.preload-enter-active,
.preload-leave-active {
    margin: 0 auto;
}

.loading-enter-active,
.loading-leave-active,
.alert-enter-active,
.alert-leave-active,
.confirm-enter-active,
.confirm-leave-active,
.center-enter-active,
.center-leave-active,
.toast-enter-active,
.toast-leave-active {
    transform: scale(1);
    opacity: 1;
    overflow: hidden;
}

.top-enter-active,
.top-leave-active,
.bottom-enter-active,
.bottom-leave-active,
.popup-enter-active,
.popup-leave-active,
.popover-enter-active,
.popover-leave-active,
.toast-enter-active,
.toast-leave-active {
    opacity: 1;
    transform: translate3d(0, 0, 0);
}

.tips-enter-active,
.tips-leave-active {
    opacity: 1;
}

.loading-enter,
.preload-enter,
.alert-enter,
.confirm-enter,
.center-enter,
.toast-enter {
    transform: scale(1.5);
    opacity: 0.5;
}

.alert-leave-active,
.confirm-leave-active,
.center-leave-active,
.loading-leave-active,
.preload-leave-active,
.toast-leave-active {
    transform: scale(0.8);
    opacity: 0;
}

.popover-enter,
.popover-leave-active {
    top: 0 !important;
    opacity: 0.5;
}

.top-enter,
.top-leave-active {
    transform: translate3d(0, -100%, 0);
}

.bottom-enter,
.bottom-leave-active,
.popup-enter,
.popup-leave-active {
    transform: translate3d(0, 100%, 0);
}

.tips-enter,
.tips-leave-active {
    opacity: 0;
}
</style>
