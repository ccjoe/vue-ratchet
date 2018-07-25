<template>
<modal :show.sync="innerShow" :type="type" :maskclose="maskclose" :mask="mask" :title="title" :hastitle="false">
    <slot>
        <div v-if="type==='loading' || type==='preload'" class="spinner">
            <div class="loading-layer">
                <div class="loading-img">
                    <div class="loading-cycle"></div>
                    <div class="loading-cycle-before"></div>
                </div>
                <p class="cp-h5-text">{{title}}</p>
            </div>
        </div>
    </slot>
</modal>
</template>

<script>
import modal from './modal.vue'
export default {
  components: {
        modal
    },
    props: {
        show: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: 'loading'
        }, //loading preload
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
        title: {
            type: String,
            default: "游游努力加载中"
        },
    },
    data(){
      return {
        innerShow: this.show
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
    }
}
</script>

<style lang="sass">

@import './scss/phone';
$loadingSize: r(120px);
$loadingImgSize: r(72px);

.loading-enter-active,
.loading-leave-active {
    text-align: center;
}

.modal-loading,
.modal-preload {
    .modal-layout {
        overflow: hidden;
        width: $loadingSize;
        .modal-inner {
            background-color: transparent;
            width: $loadingSize;
            height: $loadingSize;
            text-align: center;
        }
        .modal-text {
            position: relative;
            padding: 0;
        }
    }
}

.modal-preload {
    position: static;
    background-color: transparent;
    transform: scale(.8);
}

/* loading layer */

.modal-loading {
    .modal-layout {
        height: $loadingSize;
    }
    .modal-inner {
        padding: 0;
        display: inline-block;
        background-color: #FFF !important;
        border-radius: r(13px);
    }
}

.loading-layer {
    z-index: 10000;
    color: #666;
    font-size: r(12px);
    text-align: center;
    width: 100%;
    height: 100%;
    .loading-img {
        width: $loadingSize*2/3;
        height: $loadingSize*2/3;
        margin: r(10px) auto r(2px);
        position: relative;
    }
    .loading-cycle,
    .loading-cycle-before {
        background-image: url("data:image/png;base64,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") !important;
        background-size: r(135px) auto; // background-size: 200%;
        background-repeat: no-repeat;
        position: absolute;
    }
    .loading-cycle-before {
        content: "";
        background-position: r(-72px) 0; // background-position: 105% 0;
        position: absolute;
        top: r(17px);
        left: r(12px);
        width: $loadingImgSize;
        height: $loadingImgSize;
    }
    .loading-cycle {
        position: absolute;
        top: r(5px);
        left: r(5px);
        width: $loadingImgSize;
        height: $loadingImgSize;
        background-position: r(2px) r(2px);
        -webkit-animation: loading 1s linear 0s infinite;
        animation: loading 1s linear 0s infinite;
    }
    .cp-h5-text {
        width: $loadingSize;
        text-align: center;
        font-size: r(13px);
        /*     position: absolute;		    bottom: r(10px); */
    }
}

@-webkit-keyframes loading {
    0% {
        -webkit-transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
    }
}

@keyframes loading {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
