<template>
    <div>
        <p class="content-padded">有关 <a href=""   @click.prevent="popItByClass"   class="popover-top">popover</a>，会智能的显示左右上下，小三角也需要自动的指向触发的元素上,
            而且<a href="" class="tips" @click.prevent="tipsClick" >tips</a>也是基于这个popover的实现哦！</p>
        <list :arrow="false">
          <item @click.native='loadingShow = true'>loading <p>全局加载中...</p></item>
          <item @click.native='preloadShow = true'>preload <p>局部加载中...</p></item>
          <item>
              <loading :show.sync="preloadShow" :mask="false" type="preload"></loading>
          </item>
          <item @click.native='confirmShow = true'>confirm <p>弹层信息,仅有确定按钮</p></item>
          <item @click.native=' alertShow = true'>alert <p>弹层信息,可以选择确定或取消</p></item>
          <item @click.native='centerShow  = true'>center <p>居中的弹层信息</p></item>
          <item @click.native='topShow     = true'>top  <p>显示在上面的消息提示</p></item>
          <item @click.native='bottomShow  = true'>bottom <p>底部弹层，各种底部选择器或弹层的父组件</p></item>
          <item @click.native='popupShow   = true'>popup <p>底部弹层, 全屏展示</p></item>
          <item @click.native='popIt1' id="ppp" >popover <p>popover提示信息</p></item>
          <item @click.native='tipsShow= true' id="tips" >tips <p>tips提示信息,指示并提示较简单的文案</p></item>
          <item @click.native='datetimeShow= true' >时间选择器弹层</item>
          <item @click.native='toastShow   = true'>toast</item>
        </list>

     <!--    <div class="table-view-divider table-view-collapse create-list">请选择toast类型</div>
     <select id="toastType"  v-model="toasttype">
         <option value="info">info</option>
         <option value="success">success</option>
         <option value="error">error</option>
     </select> -->
        <p class="content-padded">有关 <a href="" @click.prevent="popItByClass" class="popover-bottom1">popover</a>，会智能的显示左右上下，小三角也会自动的指向触发的元素上</p>
        <p class="content-padded">但小三角位置仅会有左中右，可能不会那么精确, 蛋素就是这么用滴， 有关 <a href="" @click.prevent="popItByClass"  class="popover-bottom2">popover</a></p>

       <modal :show.sync="bottomShow" type="bottom" title="这是 bottomShow 标题">
            <p>这是内容</p>
            <p>这是内容</p>
      </modal>

       <modal :show.sync="centerShow" type="center" title="这是center标题">
            <p>这是内容</p>
            <p>这是内容</p>
      </modal>

       <modal :show.sync="topShow" type="top" title="这是top标题" :close="true">
            <p>这是内容</p>
            <p>这是内容</p>
      </modal>

       <popover :show.sync="popoverShow" title="这是popover标题" :role="bindElem" >
           <list :arrow="false">
               <item>popover with list</item>
               <item>popover</item>
               <item>popover</item>
               <item>popover</item>
               <item>popover</item>
               <item>popover</item>
           </list>
      </popover>

      <popover :show.sync="tipsShow" title="这是popover标题" role="#tips" type="tips" ></popover>

      <modal :show.sync="confirmShow" type="confirm" title="这是 confirmShow 标题">
            <p>这是 confirmShow 内容</p>
            <p>这是 confirmShow 内容2</p>
      </modal>

      <modal :show.sync="alertShow" type="alert" title="这是 alert 标题">
            <p>这是 alert 内容</p>
            <p>这是 alert 内容2</p>
      </modal>

      <modal :show.sync="popupShow" type="popup" title="这是 popupShow 标题">
            <p>这是 alert 内容</p>
            <p>这是 alert 内容2</p>
      </modal>

      <loading :show.sync="loadingShow" :maskclose="true" type="loading"></loading>

      <toast :show.sync="toastShow" :time="2500">toast内容</toast>

      <datetime :show.sync="datetimeShow" :datevalue="+new Date()-3600000*24*5" :max="+new Date()+3600000*24*5"></datetime>

    </div>
</template>

<script>
import modal from '../../src/modal.vue'
import toast from '../../src/toast.vue'
import item from '../../src/item.vue'
import list from '../../src/list.vue'
import loading from '../../src/loading.vue'
import popover from '../../src/popover.vue'
import datetime from '../../src/datetime.vue'
export default {
  components: {
    modal, toast, list, item, loading, popover, datetime
  },
  data() {
    return {
      loadingShow: false,
      preloadShow: false,
      confirmShow: false,
      alertShow: false,
      centerShow: false,
      topShow: false,
      bottomShow: false,
      popupShow: false,
      popoverShow: false,
      tipsShow: false,
      toastShow: false,
      bindElem: '',
      toasttype: 'info',
      datetimeShow: false
    }
  },
  methods:{
    alertShowFn(){
      this.alertShow   = true
      console.log(this.alertShow, 'this.alertShow')
    },
    popIt1: function () {
        this.bindElem= "#ppp";
        this.popoverShow = true;
    },
    popItByClass: function ($event) {
        this.bindElem= '.'+$event.target.className;
        this.popoverShow = true;
    },
    tipsClick: function () {

    }
  }
} </script>
