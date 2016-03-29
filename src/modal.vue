<template>
	<div class="modal modal-{{type}} {{classname}}" v-show="modalshow" @click.self="onCancel">
		<div class="modal-layout {{(type==='popover' || type==='tips') && tripos ? tripos : ''}}" v-show="modalshow" :transition="type">
		    <span v-if="close==='true'" @click="onCancel" class="icon icon-close"></span>
		    <div class="modal-inner">
		        <slot name="loading">
			        <div v-if="type==='loading' || type==='preload'" class="spinner">
			            <div class="double-bounce1"></div>
			            <div class="double-bounce2"></div>
			        </div>
		        </slot>
		        <div class="modal-title">
		        	<slot>
		        		<span v-if="type==='bottom' || type==='popup'" @click="onNo" class='btn modal-btn btn-link modal-btn-no'>取消</span>
		        		{{title}}
		        		<span v-if="type==='bottom' || type==='popup'" @click="onYes" class='btn modal-btn btn-link modal-btn-yes'>确定</span>
		        	</slot>
		        </div>
		        <div class="modal-text">
		        	<slot name="content">{{content}}</slot>
		        </div>
		    </div>
		    <div class="modal-buttons" v-if="type==='alert'  || type==='confirm'">
	    		<slot name="btns">
	    			<span @click="onYes" class="modal-button modal-btn modal-btn-yes modal-button-bold">确定</span>
	        		<span v-if="type!=='confirm'" @click="onCancel" class="modal-button modal-btn modal-btn-def modal-button-bold">取消</span>
	    		</slot>
		    </div>
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
			modalshow: false,
		    type: '',  		//在具体实例中已定义，扩展时可自定义名称
	        title: '',
	        content: '',   //content为str或html,如果为function则需要返回str或html
	        role: String,
	        classname: {
	        	default: ''
	        },
	        mask: true
		},
		data(){
			return {
				tripos : 'tri-bottom'
			}
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
				this.modalshow = false;
			}
		},
		watch: {
		    'modalshow': function (val, oldVal) {
		      if(val && (this.type==='popover' || this.type==='tips')){
					 var $pos = document.querySelectorAll(this.role)[0],
					 	 $modal = this.$el.querySelectorAll('.modal-layout')[0];

					 var trisize = 20;
				 	 var pos = $pos.getBoundingClientRect();
					 var mw = $modal.clientWidth, 
					 	 mh = $modal.clientHeight,
			             top = pos.top - mh - trisize/2,
			             left = pos.left+($pos.clientWidth-mw)/2,
			             fullWidth = document.body.clientWidth, gap = 10;

			        if(pos.top< mh){
			            top = pos.top + trisize*1.5;
			            this.tripos = 'tri-top';
			        }else{
			        	this.tripos = 'tri-bottom';
			        }
			        if(left < gap){
			            left = gap;
			            this.tripos += ' tri-left';
			        }else if(left>fullWidth-mw-gap){
			            left = fullWidth-mw-gap;
			            this.tripos += ' tri-right';
			        }
			        $modal.style.left = left + 'px';
			        $modal.style.top = top + 'px';
				}
		    }
		}
	}
</script>

<style lang="sass">
	@import './scss/variables';
	@import './scss/mixins';
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
	$chrome-color:   #fff !global;
	$triSize: 20px;
	.modal {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		-webkit-overflow-scrolling: touch;
		outline: 0;
		background-color: rgba(0,0,0,.5);
		-webkit-backface-visibility: hidden;
		-moz-backface-visibility: hidden;
		backface-visibility: hidden;
		-webkit-perspective: 1000px;
		perspective: 1000px;
		z-index: 13500;
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
	        text-align: center;
	    }
	}

	.modal-buttons {
	    height: 44px;
	    position: relative;
	    border-top: 1px solid $modalBd;
	    display: flex;
	    &.modal-buttons-vertical {
	        display: block;
	        height: auto;
	    }
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
	
	.modal-loading, .modal-preload{
		.modal-layout{
		    overflow: hidden;
		    width:120px;
		    .modal-inner{
		        background-color: transparent;
			    width:120px;
			    height:120px;
			    text-align: center;
		    }
		    .modal-text{
			    position: relative;
			    margin: 80px auto 0;
			    p{
			    	color: #fff;
			    }
		    }
	    }
	}

	.modal-preload{
		position:static;
	}

	.modal-preload, .modal-tips{
		background-color: transparent;
	}

	.modal-confirm{
	    .modal-buttons{
	        .modal-button{
        	    -webkit-box-flex:2;
				-ms-flex:2;
	        }
	    }
	}

	.modal-alert{
	    .modal-buttons{
	        .modal-button{
	            -webkit-box-flex:1;
	    		-ms-flex:1;
	        }
	    }
	}

	.modal-top, .modal-bottom, .modal-popup{
		.modal-layout{
		    width: 100%;
		    border-radius: 0;
		    position: absolute;
		    .modal-inner, .modal-button{
		        border-radius: 0;
		    }
		    .modal-button{
		        &:first-child,&:last-child{
		            border-radius: 0;
		        }
		    }
	    }
	}

	.modal-top{
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

	.modal-bottom, .modal-popup{
		.modal-layout{
		    bottom:0; 
		    top:auto;
		    max-height: 200px;
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
	}

	.modal-popup{
		.modal-layout{
		    height:100%;
		    max-height: 100%;
		    background-color: #efeff4;
		    .modal-title+.modal-text{
		        height:auto;
		    }
	    }
	}

	.modal-popover, .modal-tips{
		.modal-layout{
			position: fixed;
		    max-width: 250px;
		    width:auto;
		    margin:0;
		    overflow: visible;
			  border-radius: $border-radius;
			  // Caret on top of popover using CSS triangles (thanks to @chriscoyier for solution)
			  &:before, &:after {
			    position: absolute;
			    left: 50%;
			    width: 0;
			    height: 0;
			    margin-left: -$triSize/2;
			    content: '';
			    border-right: $triSize/2 solid transparent;
			    border-left: $triSize/2 solid transparent;
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
		    .modal-title{
		    	padding: 5px;
		    }

			&.visible {
				opacity: 1;
				@include transform(translate3d(0, 0, 0));
			}

			// Give correct spacing to the content if there is a bar inside the popover.
			.bar ~ .table-view {
				padding-top: $bar-base-height;
			}

		    .modal-inner{
		        border-radius:8px;
		        padding: 0;
		    }
		    .modal-title+.modal-text{
		        margin-top: 0;
		    }

		    .modal-text > *{
		        margin: 0;
		    }
		    .table-view{
		    	margin-bottom: 0;
		    	border-bottom: 0;
		    }
	    }
	}

	.modal-tips{
		.modal-layout{
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
	}

	/* Animate For Vue Modal */
	.modal-layout{
	  transition: all .3s ease;
	}
	.preload-transition{
		margin: 0 auto;
	}
	.loading-transition, 
	.alert-transition,
	.confirm-transition,
	.center-transition{
		position: relative;
	    border-radius: 13px;
		top: 220px;
		width: 270px;
		margin: 0 auto;
		transform: scale(1);
		opacity: 1;
	    overflow: hidden;
	}
	.top-transition, 
	.bottom-transition,
	.popup-transition,
	.popover-transition{
		top: 0;
		transform: translate3d(0, 0, 0);
		opacity: 1;
	}
	.tips-transition{
		opacity: 1;
	}
	.loading-enter,
	.preload-enter, 
 	.alert-enter,
 	.confirm-enter,
 	.center-enter{
	  	transform: scale(1.5);
	  	opacity: 0.5;
	}

	.alert-leave,
	.confirm-leave,
	.center-leave, 
	.loading-leave,
	.preload-leave{
		transform: scale(0.8);
		opacity: 0;
	} 
	.popover-enter, .popover-leave{
		top: 0!important;
		opacity: 0.5;
	}
	.top-enter, .top-leave{
		transform: translate3d(0, -100%, 0);
	}	
	.bottom-enter, .bottom-leave,
	.popup-enter, .popup-leave{
		transform: translate3d(0, 100%, 0);
	}
	.tips-enter, .tips-leave{
		opacity: 0;
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
</style>
