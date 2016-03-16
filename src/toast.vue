<template>
	<div class="modal-toast modal-toast-{{type}}" transition="fade" v-show="toastshow">
	    <span class="icon icon-{{type==='info' ? 'info' : (type==='error'?'close': 'check') }}">
	    	<slot>{{content}}</slot>
	    </span>
	</div>
</template>

<script>
	export default {
		props:{
			type:'info',
			time:{
				type: Number,
				default: 3000
			},
			toastshow: false,
			content: String
		},
		watch: {
			toastshow : function () {
				var t, that = this;
				console.log(this.toastshow, 'toastshow');
				if(this.toastshow){
					t = setTimeout(function(){ that.toastshow = false; }, Number(this.time));
				}else{
					clearTimeout(t);
				}
			}
		}
	}
</script>

<style lang="sass" scoped>
	.modal-toast{
	    position: fixed;
	    bottom:25%;
	    width:100%;
	    text-align: center;
	    margin: 0 auto;
	    color: #fff;
	    // pointer-events: none;
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