<template>
    <div>{{bindElem}} {{popoverShow}}
        <p class="content-padded">有关 <a href=""   @click.prevent="popItByClass"   class="popover-top">popover</a>，会智能的显示左右上下，小三角也需要自动的指向触发的元素上,
            而且<a href="" class="tips" @click.prevent="tipsClick" >tips</a>也是基于这个popover的实现哦！</p>
        <list>
          <item @click='loadingShow = true'>loading</item>  
          <item @click='preloadShow = true'>preload</item>  
          <item>
              <modal :modalshow.sync="preloadShow" type="preload"></modal>
          </item> 
          <item @click='confirmShow = true'>confirm</item>  
          <item @click='alertShow   = true'>alert</item>  
          <item @click='centerShow  = true'>center</item>  
          <item @click='topShow     = true'>top</item>  
          <item @click='bottomShow  = true'>bottom</item>  
          <item @click='popupShow   = true'>popup</item>  
          <item @click='popIt1' id="ppp" >popover</item>  
          <item @click='tipsShow= true' id="tips" >tips</item>
          <item @click.prevent='toastShow   = true'>toast</item> 
        </list>

        <div class="table-view-divider table-view-collapse create-list">请选择toast类型</div>
        <select id="toastType"  v-model="toasttype">
            <option value="info">info</option>
            <option value="success">success</option>
            <option value="error">error</option>
        </select>
        <p class="content-padded">有关 <a href="" @click.prevent="popItByClass" class="popover-bottom1">popover</a>，会智能的显示左右上下，小三角也会自动的指向触发的元素上</p>
        <p class="content-padded">但小三角位置仅会有左中右，可能不会那么精确, 蛋素就是这么用滴， 有关 <a href="" @click.prevent="popItByClass"  class="popover-bottom2">popover</a></p>
       
       <modal :modalshow.sync="bottomShow" type="bottom" title="这是 bottomShow 标题">
          <div slot="content">
            <p>这是内容</p>
            <p>这是内容</p>
          </div>
      </modal>

       <modal :modalshow.sync="centerShow" type="center" title="这是center标题">
          <div slot="content">
            <p>这是内容</p>
            <p>这是内容</p>
          </div>
      </modal>  
      
       <modal :modalshow.sync="topShow" type="top" title="这是top标题" close="true">
          <div slot="content">
            <p>这是内容</p>
            <p>这是内容</p>
          </div>
      </modal>

       <modal :modalshow.sync="popoverShow" :role="bindElem" type="popover" title="这是popover标题">
          <div slot="content">
             <list>
                 <item>popover with list component</item>   
                 <item>popover with list component need item component</item>   
                 <item>popover</item>   
                 <item>popover</item>   
                 <item>popover</item>   
                 <item>popover</item>   
                 <item>popover</item>   
             </list>   
          </div>
      </modal>

        <modal :modalshow.sync="tipsShow" role="#tips" type="tips">这是tips内容</modal>

        <modal :modalshow.sync="confirmShow" type="confirm" title="这是 confirmShow 标题">
          <div slot="content">
            <p>这是 confirmShow 内容</p>
            <p>这是 confirmShow 内容2</p>
          </div>
      </modal>

      <modal :modalshow.sync="alertShow" type="alert" title="这是 alert 标题">
          <div slot="content">
            <p>这是 alert 内容</p>
            <p>这是 alert 内容2</p>
          </div>
      </modal>
        
      <modal :modalshow.sync="popupShow" type="popup" title="这是 popupShow 标题">
          <div slot="content">
            <p>这是 alert 内容</p>
            <p>这是 alert 内容2</p>
          </div>
      </modal>
        
      <modal :modalshow.sync="loadingShow" type="loading"><!-- <p slot="content">loading ...</p> --></modal>
      
      <toast :toastshow.sync="toastShow" :type="toasttype" :time="5000">toast show</toast>

    </div>
</template>

<script>
import modal from '../../src/modal.vue'
import toast from '../../src/toast.vue'
import item from '../../src/item.vue'
import list from '../../src/list.vue'
export default {
  components: {
    modal, toast, list, item 
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
      toasttype: 'info'
    }
  },
  methods:{
    popIt1: function () {
        this.bindElem= "#ppp"; 
        this.popoverShow = true;
    },
    popItByClass: function ($event) {
        console.log($event.target);
        this.bindElem= '.'+$event.target.className; 
        this.popoverShow = true;
    },
    tipsClick: function () {

    }
  }
} </script>