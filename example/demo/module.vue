<template>
  <hd title="这是标题" subtitle="这是副标题" :onleft="onleft1"></hd>
    <div class="content">
      <list media="img" card="true" :list="listdata"></list>
      <div class="">
            {{text}}
      </div>
    </div>

    <btn color="primary">按钮</btn>
    <btn color="primary"  badge="3">按钮</btn>
    <btn color="primary"  icon="search">按钮</btn>
    <btn color="primary"  icon="search" badge="3">按钮</btn>
    <btn color="positive" icon="search" badge="3">按钮</btn>
    <btn color="negative" icon="search" badge="3">按钮</btn>
    <btn color="negative" icon="search" badge="3" outlined>按钮</btn>
    <btn color="negative" icon="search" badge="3" block outlined>按钮</btn>

  <modal type="bottom" title="这是bottom标题" close="true">
      <div slot='title'>
            <span  v-on:click="onNo2" class='btn modal-btn btn-link modal-btn-no'>取消</span>
            {{title}}
            <span v-on:click="onYes2" class='btn modal-btn btn-link modal-btn-yes'>确定</span>
      </div>
      <div slot="content">
        <p>这是内容</p>
        <p>这是内容</p>
      </div>
  </modal>

  <!-- <modal type="center" title="这是center标题" close="true">
        <div slot="content">
          <p>这是内容</p>
          <p>这是内容</p>
        </div>
    </modal>   -->

  <modal type="top" title="这是top标题" close="true">
      <div slot="content">
        <p>这是内容</p>
        <p>这是内容</p>
      </div>
  </modal>

  <modal type="popover" title="这是popover标题" close="true">
      <div slot="content">
        <p>这是popover内容</p>
        <p>这是popover内容2</p>
      </div>
  </modal>

  <modal type="tips" title="这是 tips 标题">
      <div slot="content">
        <p>这是 tips 内容</p>
        <p>这是 tips 内容2</p>
      </div>
  </modal>

<!--   <modal type="alert" title="这是 alert 标题">
      <div slot="content">
        <p>这是 alert 内容</p>
        <p>这是 alert 内容2</p>
      </div>
  </modal>   -->

 <!--  <modal type="loading">
   <p slot="content">loading ...</p>
 </modal> -->

</template>


<script>
  import list from '../../src/list.vue'
  import hd from '../../src/hd.vue'
  import modal from '../../src/modal.vue'
  import btn from '../../src/btn.vue'

  console.log(list, 'list');
  export default {
    replace: false,
    components: {
      'list': list,
      'hd': hd,
      'modal': modal,
      'btn': btn
    },
  	data() {
      return {
        text: '放一点小测试好么2？',
        listdata: [{
            img: 'http://placehold.it/42x42',
            title: '列表示例',
            content: '列表通过data传入属性实现不同的配置,  通过 data.media可以为img, icon;这个列表data.media为img; data.card为true时显示为创建列表的显示的卡片式',
            badge: '12'
        },{
            title: '可点击收缩的标题',
            isDivider: true,
            collapse: true
        },{
            img: '',
            title: '可收缩的item',
            content: 'data.list的item单项上通过collapse为true可点击收缩'
        }]
      }
    },
    methods:{
      onleft1: function () {
        console.log('onleft by rewrite');
      },
      onYes2: function(){
          console.log('onYES2');
      },
      onNo2: function(){
          console.log('onNo2');
      }
    }
  }
</script>
