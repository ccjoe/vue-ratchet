<template>
	<div class="modal-layout modal-{{type}} {{class}}"  transition="type">
	    <span v-if="close==='true'" v-on:click="onCancel" class="icon icon-close"></span>
	    <div class="modal-inner">
	        <slot name="loading">
		        <div v-if="type==='loading'" class="spinner">
		            <div class="double-bounce1"></div>
		            <div class="double-bounce2"></div>
		        </div>
	        </slot>
	        <div class="modal-title">
	        	<slot name="title">
	        		{{title}}
	        	</slot>
	        </div>
	        <div class="modal-text">
	        	<slot name="content">{{content}}</slot>
	        </div>
	    </div>
	    <div class="modal-buttons" v-if="type==='center'">
    		<slot name="btns">
    			<span v-on:click="onYes" class="modal-button modal-btn modal-btn-yes modal-button-bold">确定</span>
        		<span v-on:click="onNo" class="modal-button modal-btn modal-btn-no modal-button-bold">拒绝</span>
        		<span v-on:click="onCancel" class="modal-button modal-btn modal-btn-def modal-button-bold">取消</span>
    		</slot>
	    </div>
	</div>
</template>

<script>
	export default {
		props:{
			close:{
			 	type: String,
			 	default: 'false'
			},
		    type: '',  //在具体实例中已定义，扩展时可自定义名称
	        title: '',
	        content: '',   //content为str或html,如果为function则需要返回str或html
	        class: '',
	        mask: true,
	        // onYes: Function,
	        // onNo: Function
		},
		methods: {
			onYes: function(){
				this.hide();
			},
			onNo: function(){
				this.hide();
			},
			onCancel: function(){
				this.hide();
			},
			hide: function(){
				this.$el.remove();
			}
		}
	}
</script>

<style lang="sass" scoped>
	@import './scss/variables';
	@import './scss/mixins';
	@import './scss/sassCore/_function';
	.modal {
	  position: fixed;
	  top: 0;
	  z-index: 11;
	  width: 100%;
	  min-height: 100%;
	  overflow: hidden;
	  background-color: #fff;
	  // opacity: 0;
	  -webkit-transition: -webkit-transform .25s, opacity 1ms .25s;
	     -moz-transition: -moz-transform .25s, opacity 1ms .25s;
	          transition: transform .25s, opacity 1ms .25s;
	  @include transform(translate3d(0, 100%, 0));

	  // Active modal
	  &.active {
	    height: 100%;
	    opacity: 1;
	    -webkit-transition: -webkit-transform .25s;
	       -moz-transition: -moz-transform .25s;
	            transition: transform .25s;
	    @include transform(translate3d(0, 0, 0));
	  }
	}

	/* === Modals === */
	$modalBg: rgba(255,255,255,0.95);
	$modalBd: rgba(230,230,230,0.9);
	$modalButonColor : #007aff;
	$modalButonActiveBg: rgba(230,230,230,0.95);
	$modalHairlineColor: rgba(0,0,0,0.2);
	$modalDuration: 400ms;

	$actionsModalBg: rgba(255,255,255,0.95);
	$actionsModalButtonActiveBg: rgba(230,230,230,0.9);
	$actionsModalHairlineColor: rgba(0,0,0,0.2);
	$actionsModalDuration: 300ms;

	$popoverBg: rgba(255,255,255,0.95);
	$popupDuration: 400ms;
	$actionsPopoverHairline: rgba(0,0,0,0.2);
	$chrome-color:   rgba(247,247,247,.98) !global;
	$triSize: 20px;
	.modal-overlay, .preloader-indicator-overlay, .popup-overlay {
	    position: absolute;
	    left: 0;
	    top: 0;
	    width: 100%;
	    height: 100%;
	    background: rgba(0,0,0,0.4);
	    z-index: 13000;
	    visibility: hidden;
	    // opacity: 0;
	    -webkit-transition-duration: 400ms;
	    transition-duration: 400ms;
	    &.modal-overlay-visible {
	        visibility: visible;
	        opacity: 1;
	    }
	}
	.popup-overlay {
	    z-index: 10500;
	}
	.modal-layout, .modal-toast, .modal-loading{
	    -webkit-backface-visibility: hidden;
	    -moz-backface-visibility: hidden;
	    backface-visibility: hidden;
	    -webkit-perspective: 1000px;
	    perspective: 1000px;
	    z-index: 13500;
	}
	.modal-layout, .modal-loading{
	    position: absolute;
	    width: 270px;
	    margin-left: -135px;
	    border-radius: 13px;
	    // opacity: 0;
	    color:#000;
	    overflow: hidden;
	}
	.modal-alert, .modal-confirm, .modal-loading, .modal-center{
	    left: 50%;
	    top:50%;
	}

	.modal-inner {
	    padding: 15px;
	    border-radius: 13px 13px 0 0;
	    position: relative;
	    background: $modalBg;
	}

	.modal-title {
	    font-weight: 500;
	    font-size: 18px;
	    text-align: center;
	    html.ios-gt-8 & {
	        font-weight: 600;
	    }
	    +.modal-text {
	        margin-top: 5px;
	        position: relative;
	    }
	}
	.modal-buttons {
	    height: 44px;
	    position: relative;
	    border-top: 1px solid $modalBd;
	    &.modal-buttons-vertical {
	        display: block;
	        height: auto;
	    }
	    @include display-flex(flex);
	}
	.modal-button {
	    width: 100%;
	    padding: 0 5px;
	    height: 44px;
	    font-size: 17px;
	    line-height: 44px;
	    text-align: center;
	    color: $modalButonColor;
	    display: block;
	    position: relative;
	    white-space: nowrap;
	    text-overflow:ellipsis;
	    overflow: hidden;
	    cursor: pointer;
	    box-sizing: border-box;
	    -webkit-box-flex:1;
	    -ms-flex:1;

	    background-color:$modalBg;
	    &:first-child {
	        border-radius: 0 0 0 13px;
	    }
	    &:last-child {
	        border-radius: 0 0 13px 0;
	    }
	    &:first-child:last-child {
	        border-radius: 0 0 13px 13px;
	    }
	    &.modal-button-bold {
	        font-weight: 500;
	        html.ios-gt-8 & {
	            font-weight: 600;
	        }
	    }
	    html:not(.watch-active-state) &:active, &.active-state {
	        background: $modalButonActiveBg;
	    }
	    .modal-buttons-vertical & {
	        border-radius: 0;
	        &:last-child {
	            border-radius: 0 0 13px 13px;
	        }
	    }
	    &:after{
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
	        border-radius: 13px;
	    }
	    .modal-buttons {
	        display: none;
	    }
	}

	.modal-loading{
	    overflow: hidden;
	    width:80px;
	    margin-left:-40px;
	    .modal-inner{
	        background-color: transparent;
	        width: 80px;
	        height: 80px;
	    }
	}
	.modal-confirm{
	    .modal-buttons{
	        .modal-button{
	            @include flex(2);
	        }
	    }
	}
	.modal-alert{
	    .modal-buttons{
	        .modal-button{
	            @include flex(1);
	        }
	    }
	}

	.modal-top, .modal-bottom{
	    width: 100%;
	    border-radius: 0;
	    margin: 0!important;
	    left: 0!important;
	    .modal-inner, .modal-button{
	        border-radius: 0;
	    }
	    .modal-button{
	        &:first-child,&:last-child{
	            border-radius: 0;
	        }
	    }
	}

	.modal-top{
	    top: 0;
	    -webkit-transform: translate3d(0, -100%, 0);
	    transform: translate3d(0, -100%, 0);
	    .modal-title{
	        text-align: left;
	    }
	    .modal-inner{
	        background-color:rgba(0, 0, 0, 0.8);
	        color: #d2d2d2;
	        font-size:14px;
	    }
	    .icon-close{
	        position: absolute;
	        right:$gapV;
	        color: #fff;
	        z-index: 1;
	    }
	}
	.modal-bottom{
	    bottom:0;
	    top: auto;
	    max-height: 200px;
	    -webkit-transform: translate3d(0, 100%, 0);
	    transform: translate3d(0, 100%, 0);
	    .modal-inner{
	        padding: 0;
	    }
	    .table-view{
	        margin-bottom: 0;
	    }
	    .modal-title{
	        line-height: 35px;
	        font-size: 16px;
	        border-bottom:1px solid #ddd;
	        .btn-link{
	            font-size: 15px;
	            padding:10px;
	        }
	        .modal-btn-no{
	            float: left;
	        }
	        .modal-btn-yes{
	            float: right;
	        }
	    }
	    .modal-title + .modal-text{
	        height: 165px;
	        margin-top: 0;
	    }
	}
	.modal-popup{
	    height:100%;
	    max-height: 100%;
	    background-color: #efeff4;
	    .modal-title+.modal-text{
	        height:auto;
	    }
	}
	.modal-popover{
	    max-width: 250px;
	    width:auto;
	    margin:0;
	    overflow: visible;
	    .modal-text > *{
	        margin: 0;
	    }
	    .modal-inner{
	        border-radius:8px;
	        padding: 0;
	    }
	    &.tri-top:before{
	        border-bottom: $triSize/2 solid $chrome-color;
	        top: -$triSize/2;
	    }
	    &.tri-bottom:after{
	        border-top: $triSize/2 solid $chrome-color;
	        bottom: -$triSize/2;
	    }
	    &.tri-left:before,&.tri-left:after{
	        left: 25%;
	    }
	    &.tri-right:before, &.tri-right:after{
	        left: 75%;
	    }
	    .modal-title+.modal-text{
	        margin-top: 0;
	    }
	}
	.modal-tips{
	    max-width: 150px;
	    .modal-text{
	        padding: 5px;
	        color: #fff;
	        font-size:13px;
	    }
	    .modal-inner{
	        background-color: #666;
	        border-radius:4px;
	    }
	    &.tri-top:before{
	        top: -7px;
	        border-bottom-color: #666;
	    }
	    &.tri-bottom:after{
	        bottom: -7px;
	        border-top-color: #666;
	    }
	}
	//loading
	.spinner {
	    width: 60px;
	    height: 60px;
	    position: absolute;
	    top: 50%;
	    left: 50%;
	    margin-top: -30px;
	    margin-left: -30px;
	}

	.double-bounce1, .double-bounce2 {
	    width: 100%;
	    height: 100%;
	    border-radius: 50%;
	    background-color: #007aff;
	    opacity: 0.6;
	    position: absolute;
	    top: 0;
	    left: 0;
	    -webkit-animation: bounce 2.0s infinite ease-in-out;
	    animation: bounce 2.0s infinite ease-in-out;
	}

	.double-bounce2 {
	    -webkit-animation-delay: -1.0s;
	    animation-delay: -1.0s;
	}

	@-webkit-keyframes bounce {
	    0%, 100% {
	        -webkit-transform: scale(0.0)
	    }
	    50% {
	        -webkit-transform: scale(1.0)
	    }
	}

	@keyframes bounce {
	    0%, 100% {
	        transform: scale(0.0);
	        -webkit-transform: scale(0.0);
	    }
	    50% {
	        transform: scale(1.0);
	        -webkit-transform: scale(1.0);
	    }
	}

	//TOAST
	.modal-toast{
	    position: absolute;
	    bottom:25%;
	    width:100%;
	    text-align: center;
	    margin: 0 auto;
	    color: #fff;
	    pointer-events: none;
	    .icon{
	        -webkit-font-smoothing: antialiased;
	        font-size: 15px;
	        padding: 5px 10px;
	        max-width:80%;
	        pointer-events: fill;
	        &:before{
	            font-size: 18px;
	            position: relative;
	            top:1px;
	            margin-right: 5px;
	            //background-color: #fff;
	            //border-radius: 100%;
	        }
	    }
	    &.modal-toast-info .icon{
	        background-color: #333;
	    }
	    &.modal-toast-success .icon{
	        background-color: forestgreen;
	    }
	    &.modal-toast-error .icon{
	        background-color: orangered;
	    }
	}
</style>
