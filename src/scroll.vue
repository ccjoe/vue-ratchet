<template>
	<div class="ui-scroll ui-scroll-{{isx?'x':'y'}}"  v-touch:pan="panArea"  v-touch:panend="panendArea" v-bind:style="uiScrollStyle">
    	<div class="ui-scroll-content {{isEnd || !enable ? 'ui-scroll-trans' : ''}}"  v-bind:style="scrollContentStyle">
    		<slot name="front" v-if="front">
				<div class="ui-scroll-front ui-scroll-out" v-bind:class="{'pull-up': y > 0, 'refreshing': y > range/2}" v-if="front">
					<div class="pull-to-refresh-layer">
					    <div class="pull-show-item"><span class="preloader-text">{{movetext}}</span><span class="preloader"></span></div>
					    <div class="pull-show-item"><span class="pull-to-refresh-text">{{freshtext}}</span><span class="pull-to-refresh-arrow"></span></div>
			    	</div>
		    	</div>
	    	</slot>
	    	<div class="ui-scroll-core">
    			<slot></slot>
    		</div>
    		<slot name="end" v-if="end">
	    		<div class="ui-scroll-end gom-scroll-out pull-up">
			    	<div class="pull-to-refresh-layer">
					    <div class="pull-show-item"><span class="preloader-text">{{movetext}}</span><span class="preloader"></span></div>
					    <div class="pull-show-item"><span class="pull-to-refresh-text">{{freshtext}}</span><span class="pull-to-refresh-arrow"></span></div>
			    	</div>
		    	</div>
	    	</slot>
    	</div>	
    </div>	
</template>

<script>
	import Vue from 'vue'
	import VueTouch  from 'vue-touch'
	Vue.use(VueTouch);

	var vendor = (/webkit/i).test(navigator.appVersion) ? 'webkit' :
    (/firefox/i).test(navigator.userAgent) ? 'Moz' :
        'opera' in window ? 'O' : '';
	
	var has3d = 'WebKitCSSMatrix' in window && 'm11' in new WebKitCSSMatrix();

	export default {
		name: 'scroll',
		props:{
			onpan:{
		      	type: Function,
		      	default: function(){}
		    },
			onpanend: {
		      	type: Function,
		      	default: function(){}
		    },
			front: {
				type:Boolean,
				default: false
			},
			end: {
				type:Boolean,
				default: false
			},
			isx: {
				type:Boolean,
				default: false
			},
			step: {			// swipe a time step px
				type:Number,
				default: 1
			},
			height: {
				default: 300
			},
			width:  {
				default: '100%'
			},
			range:{ // swipe range out of the eventArea
				type: Number,
				default: 100 
			},
			outerheight: { // swipe out text height
				type: Number,
				default: 44 
			},
			freshtext: {
				type: String,
				default: 'up to fresh'
			},
			movetext: {
				type: String,
				default: 'freshing'
			},
			toucharea: {
				type: String,
				default: ''
			},
			enable: {		//是否禁用事件
				type: Boolean,
				default: true
			}
		},
		data(){
			return {
				currentTranslate: !this.isx&&this.front ? this.outerheight : 0,
				x: 0, 
				y: !this.isx&&this.front ? -this.outerheight : 0,
				uiScrollStyle: {
					// border: '1px solid #000',
					width: (typeof this.width==='number') ? this.width+'px': this.width,
					height:(typeof this.height==='number') ? this.height+'px': this.height
				},
				isEnd: false,
				steps: 0	//当前共swipe鸟多少steps
			}
		},
		created(){
			if(this.isx || !this.front){
				this.outerheight = 0;
				this.front = false;
				this.end = false;
			}
		},
		computed: {
			scrollContentStyle: function(){
				var props = {}, {x, y} = this;
	        	props['-'+ vendor + '-transform'] = has3d ?
			        "translate3d("+x+"px,"+y+"px,0)" :
			        "translate("+x+"px,"+y+"px)";
			    return props;
			}
		},
		methods: {
		    /**
		     * 滚动到...
		     * @method Gom.UI.Scroll#scrollTo
		     * @param {object} where 可以为具体的数字，元素, top, bottom字符串
		     * @param {function} callback 滚动到后回调
		     */
		    scrollTo (where, callback){
		        var toType = typeof  where, val;
		        if(where === 'top'){
		            val = 0;
		        }else if(where === 'bottom'){
		            // val = -this.getMaxTrans();
		        }
		        if(toType === 'number'){
		            val = where;
		        }
		        this.currentTranslate = val;
		        var isx =  this.isX;       //水平垂直
				this.steps = Math.abs(Math.round(val/this.step));
		        this.x = isx ? val : '0',
		        this.y = isx ? '0' : val;
		    },

			setDirection: function($event){
				$event.isX = null; 
				$event.direction = null;
				
				var angle = $event.angle, 
					absAngle = Math.abs(angle);

				$event.isX = (absAngle >= 45 && absAngle <=135) ? false : true;
				if($event.isX){
					$event.direction = absAngle < 45 ? 'right' : 'left';
				}else{
					$event.direction = angle < 0 ? 'up' : 'down';
				}
			},
			getDistance: function($event){
				var d = $event.distance, direct = $event.direction;
		    	if(direct === 'up' || direct === 'left') d = -d;
		    	return d;
			},
			getDisByStep: function($event){
				var steps = Math.round(this.getDistance($event)/this.step); 
				return steps * this.step;
			},
			
			panArea: function($event){
				if(!this.enable){ return };
				this.isEnd = false;
				this.setDirection($event);
				this.scrollCount($event);
				this.onpan($event);
			},
			panendArea: function($event){
				if(!this.enable){ return }
				this.isEnd = true;
				this.setDirection($event);
				this.scrollCount($event, true);
				this.currentTranslate += this.getDisByStep($event);

				var range = this.getRange(true);
				this.currentTranslate = (this.currentTranslate > range.min) ? range.min : this.currentTranslate;
				this.currentTranslate = (this.currentTranslate < -range.max) ? -range.max : this.currentTranslate;

				this.steps = Math.abs(Math.round(this.currentTranslate/this.step));
				// onpanend function provide  $event props, scrollVue instance, and scroll steps...
				this.onpanend($event, this);	
			},
			//根据值计算滚动translate对象
		    scrollCount: function  ($event){
		    	this.setDirection($event);
		    	if(this.isx !== $event.isX) return;
				var addTranslate = this.currentTranslate + this[this.isEnd?'getDisByStep':'getDistance']($event);
				
				addTranslate = this.rangeCheck(addTranslate, this.isEnd);
		        this.x = !this.isx ? 0 : addTranslate,
				this.y = !this.isx ? addTranslate : 0;
		    },
		    /*
		     * 计算各种状态的边界值
		     * isCountCurrent -是否为记录End后的刻度;
		     */
		   	getRange: function(isCountCurrent){
		   		var range = this.isEnd ? -this.outerheight : this.range;
		   		var hw = !this.isx ? 'height' : 'width',  chw = !this.isx ? 'clientHeight' : 'clientWidth';
		   		var corehw = this.$el.querySelectorAll('.ui-scroll-core > *')[0][chw];
		   		var fullhw = typeof this[hw] === 'number' ? this[hw] : this.$el[chw];
		   		var fronthw = this.$el.querySelectorAll('.ui-scroll-front').length && this.$el.querySelectorAll('.ui-scroll-front')[0][chw];
		   		var endhw = this.$el.querySelectorAll('.ui-scroll-end').length && this.$el.querySelectorAll('.ui-scroll-end')[0][chw];
		   		return {
		   			'min': range,
		   			'max': fronthw*2 + endhw + range + corehw - fullhw
		   		}
		   	},
		    rangeCheck: function (dis){
		    	var range = this.getRange();
		        dis = (dis < -range.max) ? -range.max : dis;
		        dis = (dis > range.min) ? range.min : dis;
		        return dis;
		    }
		}
	}
</script>

<style lang="sass" scoped>
	/* === Scroll === */
	.gom-scroll{
	    background-color: #fff;
	    padding: 10px;
	}
	.ui-scroll{
	    overflow: hidden;
	    background-color: #eee;
	    > div{
	        -webkit-backface-visibility: hidden;
	        -webkit-perspective:1000;
	    }
	    .ui-scroll-core{
	    	background-color: #FFF;
	    	width: auto;
	    }
	    .ui-scroll-front, .ui-scroll-end{
	        width: 100%;
	        text-align: center;
	        background-color: #eee;
	        font-size: 13px;
	   
	    }
	    .ui-scroll-front{
	        top:0;
	    }
	    .ui-scroll-end{
	        bottom:0;
	    }
	}

	.ui-scroll-trans{
		transition: transform .3s ease;
	}

	.statusbar-overlay {
	    background: #f7f7f8;
	    z-index: 10000;
	    position: absolute;
	    left: 0;
	    top: 0;
	    height: 20px;
	    width: 100%;
	    display: none;
	    -webkit-transition-duration: 400ms;
	    transition-duration: 400ms;
	}
	/* === Preloader === */
	.preloader {
	    display: inline-block;
	    width: 20px;
	    height: 20px;
	    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
	    background-position: 50%;
	    background-size: 100%;
	    background-repeat: no-repeat;
	    -webkit-animation: preloader-spin 1s steps(12, end) infinite;
	    animation: preloader-spin 1s steps(12, end) infinite;
	}
	.preloader-white {
	    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
	}
	@-webkit-keyframes preloader-spin {
	    100% {
	        -webkit-transform: rotate(360deg);
	    }
	}
	@keyframes preloader-spin {
	    100% {
	        transform: rotate(360deg);
	    }
	}
	/* === Pull To Refresh === */
	.pull-to-refresh-layer {
	    // position: absolute;
	    position: relative;
	    left: 0;
	    top: 0;
	    width: 100%;
	    min-height: 44px;
	}
	.pull-to-refresh-layer .pull-to-refresh-arrow,
	.pull-to-refresh-layer .preloader{
	    display: inline-block;
	    position: relative;
	    margin-left: 5px;
	    top:5px;
	}
	.pull-to-refresh-layer .preloader,
	.pull-to-refresh-layer .preloader-text{
	    visibility: hidden;
	}
	.pull-to-refresh-layer .pull-to-refresh-arrow {
	    width: 13px;
	    height: 20px;
	    background: no-repeat center;
	    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2026%2040'%3E%3Cpolygon%20points%3D'9%2C22%209%2C0%2017%2C0%2017%2C22%2026%2C22%2013.5%2C40%200%2C22'%20fill%3D'%238c8c8c'%2F%3E%3C%2Fsvg%3E");
	    background-size: 13px 20px;
	    z-index: 10;
	    -webkit-transform: rotate(0deg) translate3d(0, 0, 0);
	    transform: rotate(0deg) translate3d(0, 0, 0);
	    -webkit-transition-duration: 300ms;
	    transition-duration: 300ms;
	}
	.ui-scroll{
		overflow: hidden;
	}
	.ui-scroll-out.pull-to-refresh-no-navbar {
	    margin-top: -44px;
	    height: -webkit-calc(100% + 44px);
	    height: -moz-calc(100% + 44px);
	    height: calc(100% + 44px);
	}
	.ui-scroll-out.pull-to-refresh-no-navbar .pull-to-refresh-layer {
	    margin-top: 0;
	}
	.ui-scroll-out.transitioning,
	.ui-scroll-out.refreshing {
	    -webkit-transition-duration: 400ms;
	    transition-duration: 400ms;
	}
	.ui-scroll-out:not(.refreshing) .pull-to-refresh-layer .preloader
	{
	    -webkit-animation: none;
	    animation: none;
	}
	
	.ui-scroll-out.refreshing .pull-to-refresh-arrow,
	.ui-scroll-out.refreshing .pull-to-refresh-text{
	    visibility: hidden;
	    -webkit-transition-duration: 0ms;
	    transition-duration: 0ms;
	}
	.ui-scroll-out.refreshing .preloader,
	.ui-scroll-out.refreshing .preloader-text{
	    visibility: visible;
	}
	.ui-scroll-out.pull-up .pull-to-refresh-arrow {
	    -webkit-transform: rotate(180deg) translate3d(0, 0, 0);
	    transform: rotate(180deg) translate3d(0, 0, 0);
	}
	.pull-show-item{
	    position: absolute;
	    width: 100%;
	}

</style>