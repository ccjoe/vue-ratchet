<template>
  <li v-on:click="collapseListGroup"
      v-bind:class="{'table-view-cell':!divider, 'table-view-divider':divider,  'table-view-collapse':collapse, 'table-view-full':(badge===void 0)}">
    <span v-if="divider">{{title}}</span>
    <a v-if="!divider" class="navigate-right" v-link="{path: link}">
        <badge v-if="badge">{{badge}}</badge>
        <img  v-if="img" class="media-object pull-left" :src="img" />
        <icon v-if="icon" :icon="icon" classes="media-object  pull-left"></icon>
        <btn  v-if="btn">{{btn}}</btn>
        <div class="media-body">
            <slot>{{title}}</slot>
            <p v-if="content">{{content}}</p> 
        </div>
    </a>
  </li>
</template>

<script>
    import badge from './badge.vue'
    import icon from './icon.vue'
    import btn from './btn.vue'

    export default {
	   	name: 'item',
	    components: [icon, badge, btn],
	    props:{
	      btn: {
	      	type: String,
	      	default: ''
	      },
	      icon: {
	      	type: String,
	      	default: ''
	      },
	      img: {
	      	type: String,
	      	default: ''
	      },
	      badge:  {
	      	type: String,
	      	default: void 0
	      },
	      content: {
	      	type: String,
	      	default: ''
	      },
	      link: {
	      	type: String,
	      	default: ''
	      },
	      divider:  {
	      	type: Boolean,
	      	default: false
	      },
	      collapse: {
	      	type: Boolean,
	      	default: false
	      },
	    },
	    data(){
	      return{
	        collapseState: false
	      }
	    },
	  
	    methods: {
	      collapseListGroup: function (event){
	      	if(this.divider !== 'true') return;
	       /* let elem = event.currentTarget, classes = elem.className;
	        if(!~classes.indexOf('table-view-divider') || !~classes.indexOf('table-view-collapse')){
	            return;
	        }

	        let compon = this;
	        next(elem);

	        function next(element){
	          let nextElem = element.nextSibling;
	          if(nextElem.tagName === 'LI' && !!~nextElem.className.indexOf('table-view-cell')){
	            if(!compon.collapseState){
	              nextElem.style.display = 'none';
	              compon.collapseState = true;
	            }else{
	              nextElem.style.display = 'block';
	              compon.collapseState = false;
	            }
	          }else{
	            return;
	          }
	          next(nextElem);
	        }*/
	      }
	    },
	    beforeDestroy(){

	    }
  	}
</script>
