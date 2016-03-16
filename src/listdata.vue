
<template>
  <ul class="table-view" v-bind:class="{'card':card, 'table-noarrow':arrow==='false'}">
      <li v-for="it in list"
          track-by="$index"
          v-on:click="collapseListGroup"
          v-bind:class="{'table-view-cell':!it.isDivider, 'table-view-divider':it.isDivider,  'table-view-collapse':it.collapse, 'table-view-full':(it.badge===void 0)}">
        <span v-if="it.isDivider">{{it.title}}</span>
        <a v-if="!it.isDivider" class="navigate-right" v-link="{path: it.link}">
            <badge v-if="it.badge">{{it.badge}}</badge>
            <img v-if="media === 'img' && it.img" class="media-object pull-left" v-bind:src="it.img" />
            <icon v-if="media === 'icon'" :icon="it.icon" classes="media-object  pull-left"></icon>
            <btn v-if="media === 'btn'">{{it.btn}}</btn>
            <div class="media-body">
                {{it.title}}
                <p v-if="it.content">{{it.content}}</p>
            </div>
        </a>
      </li>
  </ul>
</template>

<script>
    //@todo list change to <list><item></item></list>
    import badge from './badge.vue'
    import icon from './icon.vue'
    import btn from './btn.vue'

   export default {
    components: [icon, badge, btn],
    replace: false,
    props:{
      list:{
        type: Array,
        default: []
      },
      media:{
        type: String,
        default: ''  //or img
      },
      card: "false",
      arrow: "true"
    },
    data(){
      return{
        collapseState: false
      }
    },
    methods: {
      collapseListGroup: function (event){
        let elem = event.currentTarget, classes = elem.className;
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
        }
      }
    },
    beforeDestroy(){

    }
  }
</script>

<style lang="sass">
  @import './scss/variables';
  @import './scss/mixins';
    .table-view {
      padding-left: 0;
      margin-top: 0;
      margin-bottom: 15px;
      list-style: none; // Remove usual bullet styles from table view
      background-color: #fff;
      border-top: $border-default;
      border-bottom: $border-default;
    }

    // Pad each table view item and add dividers
    .table-view-cell {
      position: relative;
      padding: 11px 65px 11px 15px;
      overflow: hidden;
      border-bottom: $border-default;

      // Remove the border from the last table view item
      &:last-child {
        border-bottom: 0;
      }
      // If it's a table view of links, make sure the child <a> takes up full table view item tap area (want to avoid selecting child buttons though)
      > a:not(.btn) {
        position: relative;
        display: block;
        padding: inherit;
        margin: -11px -65px -11px -15px; // Make the entire list item tappable.
        overflow: hidden;
        color: inherit;

        &:active {
          background-color: #eee;
        }
      }
      p {
        margin-bottom: 0;
      }
    }


    // Table view dividers
    // --------------------------------------------------

    .table-view-divider {
      padding-top: 6px;
      padding-bottom: 6px;
      padding-left: 15px;
      margin-top: -1px; // Hides the border of the previous list item
      margin-left: 0;
      font-weight: $font-weight;
      color: #999;
      background-color: #fafafa;
      border-top: $border-default;
      border-bottom: $border-default;
    }


    // Table-views with media (images,avatars, icons)
    // --------------------------------------------------

    .table-view .media,
    .table-view .media-body {
      overflow: hidden;
    }
    .table-view .media-object {
      &.pull-left {
        margin-right: 10px;
      }
      &.pull-right {
        margin-left: 10px;
      }
    }


    // Table-views with buttons, badges and toggles
    // --------------------------------------------------
    .table-view-cell,
    .table-view-cell > a {
      > .btn,
      > .badge,
      > .toggle {
        position: absolute;
        top: 50%;
        right: 15px;
        @include transform(translateY(-50%));
      }

      // If the cell has a chevron, give some more room.
      /* .navigate-left,
      .navigate-right,
      .push-left,
      .push-right {
        > .btn,
        > .badge,
        > .toggle {
          right: 35px;
        }
      } */
    }

    // If the table view is the first component, give it extra margin on top.
    .content > .table-view:first-child {
      margin-top: 15px;
    }

    // Add chevrons to elements
    .table-noarrow {
      .navigate-left:after{
        content: '';
      }
      .navigate-right:after{
        content: '';
      }
    }
    .navigate-left,
    .navigate-right{
      &:after {
        position: absolute;
        top: 50%;
        display: inline-block;
        font-family: Ratchicons;
        font-size: inherit;
        line-height: 1;
        color: #bbb;
        text-decoration: none;
        -webkit-font-smoothing: antialiased;
        @include transform(translateY(-50%));
      }
    }
    .navigate-left:after{
      left: 15px;
      content: '\e822';
    }
    .navigate-right:after{
      right: 15px;
      content: '\e826';
    }
</style>
