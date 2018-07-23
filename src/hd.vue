<template>
	<header class="bar bar-nav {{ios ? 'ios' : ''}}">
		<slot name="left" class="pull-left"><a v-on:click="onleft" class="icon icon-left-nav"></a></slot>
		<slot name="right" class="pull-right"><a v-on:click="onright" class="icon icon-bars pull-right"></a></slot>
		<slot>
			<div class="title-wrapper" v-bind:class="{'title-ms':subtitle}">
			    <h1 class="title">{{title}}</h1>
			    <h2 v-if="subtitle" class="subtitle">{{subtitle}}</h2>
			</div>
		</slot>
	</header>
</template>

<script>
	export default {
		props:{
	      title:String,
	      subtitle:String,
	      onleft:{
	      	type: Function,
	      	default: function(){
	      		history.go(-1);
	      	}
	      },
	      onright:{
	      	type: Function,
	      	default: function(){
	      		// console.warn('rewrite the "onright" events pls, otherwise event do nothing');
	      	}
	      },
	      ios:{
	      	 default: false,
	      	 type: Boolean
	      }
	    }
	}
</script>

<style lang="sass">
	@import './scss/variables';
	@import './scss/mixins';
	@import './scss/icons';
	@import './scss/phone';
	.bar {
	  position: fixed;
	  right: 0;
	  left: 0;
	  z-index: 10;
	  height: $bar-base-height;
	  background-color: $chrome-color;
	  border-bottom: $border-default;
	  backface-visibility: hidden;
	}
/* 
	.bar-header-secondary {
	  top: $bar-base-height;
	}

	.bar-footer {
	  bottom: 0;
	}

	.bar-footer-secondary {
	  bottom: $bar-base-height;
	}

	.bar-footer-secondary-tab {
	  bottom: $bar-tab-height;
	}

	.bar-footer,
	.bar-footer-secondary,
	.bar-footer-secondary-tab {
	  border-top: $border-default;
	  border-bottom: 0;
	}


	// Nav bar
	// --------------------------------------------------
	.bar-nav {
	  top: 0;
	} */

	.title {
	  width: 100%;
	  padding: 0;
	  font-size: $font-size-default;
	  font-weight: $font-weight;
	  line-height: $bar-base-height;
	  color: #000;
	  text-align: center;
	  white-space: nowrap;
	  top:0;
	}

	.title a {
	  color: inherit;
	}

	// Bars with Ratchicons
	// --------------------------------------------------

	.bar {
	  .icon, .btn{
	    position: absolute;
	    z-index: 20; 
	    text-align: center;
	    &.pull-right{
			right:0;
	    }
	  }

	  .icon{
		width: $bar-base-height;
		height: $bar-base-height;
	    line-height: $bar-base-height;
	    font-size: r(24px);
	  }	

	  .btn .icon {
	    top: r(3px);
	    padding: 0;
	  }

	  .title .icon {
	    padding: 0;

	    &.icon-caret {
	      top: r(4px);
	      margin-left: -r(5px);
	    }
	  }
	}

	.title-ms{
	    display: block;
		width: 100%;
	    .title, .subtitle{
			margin: 0;
			width: 100%;
			text-align: center;
	    }
	    .title {
	        font-size: r(18px);
	        height: $bar-base-height*3/5;
	        line-height: $bar-base-height*3/5;
	    }
	    .subtitle {
	        font-size: r(14px);
	        height: $bar-base-height*2/5;
	        line-height: $bar-base-height*1/5;
	        color: #0B5684;
	    }
	}

	// Tab bar
	// --------------------------------------------------

	.bar-tab {
	  display: table;
	  bottom: 0;
	  width: 100%;
	  height: $bar-tab-height;
	  padding: 0;
	  table-layout: fixed;
	  border-top: $border-default;
	  border-bottom: 0;

	  .tab-item {
	    display: table-cell;
	    width: 1%;
	    height: $bar-tab-height;
	    color: #929292;
	    text-align: center;
	    vertical-align: middle;

	    &.active,
	    &:active {
	      color: $primary-color;
	    }

	    // Tab icon
	    .icon {
	      top: r(3px);
	      width: r(24px);
	      height: r(24px);
	      padding-top: 0;
	      padding-bottom: 0;

	      ~ .tab-label {
	        display: block;
	        font-size: r(11px);
	      }
	    }
	  }
	}

	// Bars with buttons
	// --------------------------------------------------

	.bar .btn {
	  top: r(7px);
	  z-index: 20; 
	  padding: r(6px) r(12px) r(7px);
	  margin: 0  $bar-side-spacing;
	  font-weight: $font-weight-light;
	}

	.bar .btn-link {
	  top: 0;
	  padding: 0;
	  font-size: r(16px);
	  line-height: $bar-base-height;
	  color: $primary-color;
	  border: 0;

	  &:active,
	  &.active {
	    color: darken($primary-color, 10%);
	  }
	}

	.bar .btn-block {
	  top: r(6px);
	  padding: r(7px) 0;
	  margin-bottom: 0;
	  font-size: r(16px); // Scale down font size to fit in bar.
	}


	.bar .btn-nav {
	  &.pull-left {
	    margin-left: -r(5px);

	    .icon-left-nav {
	      margin-right: -r(3px);
	    }
	  }
	  &.pull-right {
	    margin-right: -r(5px);

	    .icon-right-nav {
	      margin-left: -r(3px);
	    }
	  }
	}

	// Bars for search forms
	// --------------------------------------------------

	// Position/size search bar within the bar
	.bar input[type="search"] {
	  height: r(29px);
	  margin: r(6px) 0;
	}


	// Bars with segmented controls
	// --------------------------------------------------
	.bar .segmented-control {
	  top: r(7px);
	  margin: 0 auto;
	  width: 60%;
	}



	$h5Color: #099fde;
	a, .btn-link, .active, .modal-button{
	    color: $h5Color;
	}

	.bar{
	    background-color: $h5Color;
	    a{
	        color: #fff;
	    }
	    .title{
	        color: #fff;
	    }
	}
	
	//ios hybrid app bugs
	$iosTopGap: 0.6rem;
	.ios{
		height: $bar-base-height + $iosTopGap;
		.title{
			line-height: $bar-base-height + $iosTopGap*2;
		}
		.btn-link {
		  line-height: $bar-base-height;
		}
		.icon{
			top: r(3px) + $iosTopGap;
		}
	}
</style>
