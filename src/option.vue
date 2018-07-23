<template>
<div class="ui-options" :style="{width: width}" :onpanend="onpanend">
    <div class="ui-cell-yard" :style="yardStyle"></div>
    <scroll :enable="enable" :isx="false" :height="height" width='100%' :range="50" :step="step" :onpanend="panend">
        <list class="ui-cell" :style="cellStyle">
            <item :active='activeindex === index' v-for="(val, key) in data" v-bind:key="val.index" :height="step">{{val}}</item>
        </list>
    </scroll>
</div>
</template>

<script>
import scroll from './scroll.vue'
import list from './list.vue'
import item from './item.vue'
export default {
    name: 'voption',
    props: {
        width: {
            default: '100%'
        },
        height: {
            default: 165
        },
        activeindex: {
            type: Number,
            default: 0
        },
        data: { //展示的options列表数据
            default: []
        },
        onpanend: {
            type: Function,
            default: () => {}
        },
        enable: {
            type: Boolean,
            default: true
        },
        val: {
            type: Date
        },
        step: {
            default: 33,
            type: Number
        }
    },
    data() {
        return {
            cellStyle: {
                paddingTop: this.step * 2 + 'px',
                paddingBottom: this.step * 2 + 'px'
            },

            yardStyle: {
                top: this.step * 2 + 'px',
                height: this.step + 'px'
            }
        }
    },
    components: {
        scroll,
        list,
        item
    },
    /*mounted(){
        	let uicell = this.$el.querySelectorAll('.ui-cell')[0]
        	let uiyard = this.$el.querySelectorAll('.ui-cell-yard')[0]		        	uicell.style.paddingTop = this.step*2 + 'px'		        	uicell.style.paddingBottom = this.step*2+ 'px'
        	let items = this.$el.querySelectorAll('.ui-cell .table-view-cell')
        	console.log(items, 'items');
        	for(var i=0; i<items.length; i++){
        		items[i].style.height = this.step+'px'
        		items[i].style.lineHeight = this.step+'px'
        	}
        	uiyard.style.top = this.step*2+'px'
        	uiyard.style.height = this.step+'px'
        },*/
    methods: {
        panend: function ($event, that) {
            this.activeindex = that.steps
            this.onpanend($event, that)
        }
    }
}
</script>

<style lang="sass">
$selectItemHeight: 33px;
.ui-options {
    position: relative;
    background-color: #efefef;
    -webkit-mask-box-image: linear-gradient(to top, transparent, transparent 5%, white 20%, white 80%, transparent 95%, transparent);
    .ui-cell {
        flex: 1;
        padding: $selectItemHeight*2 0;
        .table-view-cell {
            border: 0 none;
            padding: 0;
            height: $selectItemHeight;
            line-height: $selectItemHeight;
            text-align: center;
            background-image: none !important;
            a.navigate-right {
                color: #999;
                text-decoration: none;
            }
            &.active a.navigate-right {
                font-weight: bold;
                color: #007aff;
            }
            &>a:not(.btn) {
                padding: 0;
                margin: 0;
            }
            .navigate-right:after,
            .push-right:after {
                display: none;
            }
        }
    }
    .ui-cell-yard {
        top: $selectItemHeight*2;
        position: absolute;
        height: $selectItemHeight;
        width: 100%;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        background-color: #fff;
    }
    .table-view,
    .ui-scroll-content .ui-scroll-core {
        background: none !important;
        border: 0 none !important;
    }
}
</style>
