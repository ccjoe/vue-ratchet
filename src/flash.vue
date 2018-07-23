<template>
<div class="modal-toast modal-toast-info" v-show="show">
    <span v-bind:class="`icon icon-${type==='info' ? 'info' : (type==='error'?'close': 'check') } icon-in`" v-show="show">		    	<slot>{{content}}</slot>		    </span>
</div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'info'
        },
        time: {
            type: Number,
            default: 3000
        },
        show: {
            default: false
        },
        content: String
    },
    watch: {
        show: function () {
            var t, that = this;
            if (this.show) {
                t = setTimeout(function () {
                    that.show = false;
                }, Number(this.time));
            } else {
                clearTimeout(t);
            }
        }
    }
}
</script>

<style lang="sass" scoped>
.modal-toast {
    position: fixed;
    width: 60%;
    left: 20%;
    text-align: center;
    color: #fff;
    z-index: 100000;
    transition: all .3s ease; // pointer-events: none;
    bottom: 35%;
    .icon {
        -webkit-font-smoothing: antialiased;
        font-size: 15px;
        padding: 8px 0;
        border-radius: 6px;
        width: 100%;
        display: block;
        pointer-events: fill;
        &:before {
            font-size: 18px;
            position: relative;
            top: 1px;
            margin-right: 5px; //background-color: #fff;
            //border-radius: 100%;
        }
    }
    &.modal-toast-info .icon {
        background: rgba(0, 0, 0, .7);
    }
    &.modal-toast-success .icon {
        background-color: forestgreen;
    }
    &.modal-toast-error .icon {
        background-color: orangered;
    }
}
</style>
