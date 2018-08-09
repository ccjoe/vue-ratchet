<template>
<modal :show.sync="innerShow" type="bottom" :title="title" class="ui-select" :onyes="onyes" :oncancel="oncancel">
    <slot></slot>
</modal>
</template>

<script>
import modal from './modal.vue'
export default {
    name: 'vselect',
    components: {
        modal
    },
    props: {
        show: {
            type: Boolean,
            default: true,
        },
        title: {
            type: String,
            default: '',
        },
        onyes: {
            default: function () {},
            type: Function
        },
        oncancel: {
            default: function () {},
            type: Function
        }
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
        show(val) {
            this.innerShow = val
        }
    }
}
</script>

<style lang="scss">
@import './scss/phone';
.ui-select {
    .modal-title {
        height: r(35px);
    }
    .ui-scroll {
        float: left;
    }
}

.ui-scroll-select {
    display: flex;
    height: 100%;
    .ui-scroll-select-item {
        flex: 1;
    }
}

.ui-select {
    .modal-title {
        height: r(55px);
        line-height: r(55px) !important;
        font-weight: 400;
        color: #fff;
        background-color: #435163;
    }
    .btn-link {
        font-size: r(17px);
        padding: r(20px) !important;
        color: #fff;
    }
    .modal-btn-no {
        position: relative;
        &::after {
            position: absolute;
            top: 50%;
            right: 0;
            width: r(1px);
            height: r(25px);
            background-color: #525f6f;
            transform: translateY(-50%);
        }
    }
    .modal-btn-yes {
        position: relative;
        &::after {
            position: absolute;
            top: 50%;
            left: 0;
            width: r(1px);
            height: r(25px);
            background-color: #525f6f;
            transform: translateY(-50%);
        }
    }
    .modal-inner {
        background-color: #fff;
    }
    .ui-options .ui-cell .table-view-cell.active a.navigate-right {
        color: #099fde;
    }
    .ui-scroll {
        background-color: #fff;
    }
    .ui-options {
        -webkit-mask-box-image: none;
    }
}
</style>
