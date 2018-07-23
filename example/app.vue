<template>
  <hd :title="title" :subtitle="subtitle" :onleft="onleft"></hd>
  <div class="content">
      <router-view transition="view" transition-mode="out-in" keep-alive></router-view>
  </div>
</template>

<script>
  import hd from '../src/hd.vue'
  import listdata from '../src/listdata.vue'
  export default {
    replace: false,
    components: {
      hd, listdata
    },
  	data() {
      return {
        title: 'VueRatchet App',
        subtitle: 'VueRatchet App Demo',
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
  @import '../src/scss/vue-ratchet';
  html, body{
    font-size: 24px;
  }
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
      // margin-top: 44px;
  }

  .gom-content{
      position: absolute;
      left:0; top:0;
  }
 

  .table-view-full{
      padding-right: 10px;
      img.media-object.pull-left{
          max-width:100px;
      }
  }

  .content h5{
    padding: 15px;
  }
  
  .card:not(.table-view){
    border: 0;
  }

</style>
