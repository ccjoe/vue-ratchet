<template>  
	<div class="ui-options" v-bind:style="{width: width}">
		<div class="ui-cell-yard"></div>
		<scroll :isx="false" :height="height" width='100%' :range="50" :step="33"  :onpanend="panend">
	        <list class="ui-cell">
	            <item v-for="it in data" track-by="$index">{{it.name}}</item>
	        </list> 
	    </scroll>
    </div>  
</template>

<script>
	/*
	 * voption
	 */
    import scroll from './scroll.vue'
    import list  from './list.vue'
    import item  from './item.vue'
    export default {
        name: 'voption',
        props:{
        	width: {
        		default: '100%'
        	},
        	height: {
        		default: 165
        	},
        	data: {
        		default: []
        	}
        },
        components: {
            scroll, list, item 
        },

        methods: {
            panend: function($event, that, steps){
                var activeCell = that.$el.querySelectorAll('.table-view-cell.active');
                if(activeCell.length){
                    activeCell[0].classList.remove('active');
                }
                that.$el.querySelectorAll('.table-view-cell')[steps].classList.add('active');
            }
        }
    }
</script>

<style lang="sass">
$selectItemHeight: 33px;
.ui-options{
	position:relative;
	background-color: #efefef;
	.ui-cell{
	    flex: 1;
	    padding: $selectItemHeight*2 0;
	    .table-view-cell{
	        border: 0 none;
	        padding: 0;
	        height: $selectItemHeight;
	        line-height: $selectItemHeight;
	        text-align: center;
	        background-image: none!important;
	        a{
	            margin: 0;
	        }
	        &.active{
	            font-weight: bold;
	            color: #007aff;
	        }
	        & > a:not(.btn){
	            padding: 0;
	        }
	        .navigate-right:after, .push-right:after{
	            display: none;
	        }
	    }
	}
	.ui-cell-yard{
	    top: $selectItemHeight*2;
	    position: absolute;
	    top: $selectItemHeight*2;
	    height: $selectItemHeight;
	    width: 100%;
	    border-top: 1px solid #ccc;
	    border-bottom: 1px solid #ccc;
	    background-color: #fff;
	}
	.table-view, 
    .ui-scroll-content .ui-scroll-core{
        background: none;
        border: 0 none;
    }
}

</style>
