<template>
  <hd :title="title" :subtitle="subtitle" :onleft="onleft"></hd>
  <div class="content">
      <div class="main container">
        <listdata media="icon" :list="listdata"></listdata>
      </div>
      <router-view transition="view" transition-mode="out-in" keep-alive></router-view>
  </div>

</template>

<script>
  import { dropdown } from 'vue-strap/dist/vue-strap.js'
  import hd from '../src/hd.vue'
  import listdata from '../src/listdata.vue'
  export default {
    replace: false,
    components: {
      dropdown, hd, listdata
    },
  	data() {
      return {
        title: 'VueRatchet App',
        subtitle: 'VueRatchet App Demo',
        listdata:[{
              icon: 'search',
              title: 'header',
              content: 'header 头部组件',
              link: '/header'
          },{
              icon: 'plus',
              title: 'list',
              link: '/list'
          },{
              icon: 'plus',
              title: 'listdata',
              link: '/listdata'
          },{
              icon: 'plus',
              title: 'btn', 
              link: '/btn'
          },{
              icon: 'plus',
              title: 'icon',
              link: '/icon'
          },{
              icon: 'plus',
              title: 'badge',
              link: '/badge'
          },{
              icon: 'plus',
              title: 'tabs',
              link: '/tabs'
          },{
              icon: 'plus',
              title: 'forms',
              link: '/form'
          },{
              icon: 'plus',
              title: 'modal',
              link: '/modal'
          },{
              icon: 'plus',
              title: 'scroll',
              link: '/scroll'
          },{
              icon: 'plus',
              title: 'select',
              link: '/select'
          },{
              title: '可点击收缩的标题',
              isDivider: true,
              collapse: true
          }]
      }
    },
    methods: {
      onleft: function(){
        history.go(-1);
        console.log('onleft from appvue');
      }
    }
  }
</script>

<style lang="sass">
  @import '../src/scss/variables';
  @import '../src/scss/mixins';
  @import '../src/scss/normalize';
  @import '../src/scss/base';
  //@import '../src/scss/icons';

  .view-transition {
    transition: all .3s ease;
  }

  .view-enter, .view-leave {
    opacity: 0;
    // transform: translate3d(20px, 0, 0);
  }

  body{
      min-width: 300px;
  }

  body, .ui-modal, .modal-overlay, input, textarea, select, header, footer, section, button{
      outline: none;
      -webkit-tap-highlight-color:rgba(0,0,0,0);
  }

  .table-view-cell{
      img{
          width: 60px;
      }
  }

  .content{
      margin-top: 44px;
  }

  .gom-content{
      position: absolute;
      left:0; top:0;
      //box-sizing: border-box;
      //-webkit-transition: transform 350ms;
      //transition: transform 350ms;
  }
  /*.gom-content-left{
      opacity: 0.9;
      transform: translate3d(-20%, 0, 0);
  }
  .gom-content-center{
      opacity: 1;
      transform: translate3d(0, 0, 0);
  }.gom-content-right{
      opacity: 1;
      transform: translate3d(100%, 0, 0);
  }*/

  .table-view-full{
      padding-right: 10px;
      // >a:not(.btn){
      //     margin-right:-10px;
      //     &:after{
      //         content: '';
      //     }
      // }
      img.media-object.pull-left{
          max-width:100px;
      }
  }

</style>
