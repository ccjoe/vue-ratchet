<template>
<div>

    <scroll :isx="false" :front="true" width="100px">
        <div class="classForCollape">
        something<br>
        something<br>
        something<br>
        something<br>
        something<br>
        something<br>
        something<br>
        something<br>
        something<br>
        something<br>
        something<br>
        something<br>
        something<br>
        something<br>
        something<br>
        something<br>
        something<br>
        something<br>
        something<br>
        something<br>
        something<br>
        something<br>
        something<br>
        something<br>
        something<br>
        something<br>
        something<br>
        something<br>
        something<br>
        something<br>
        something<br>
        something<br>
        something<br>
        something<br>
        something<br>
        something<br>
        something<br>
        something<br>
        something<br>
        something<br>
        something<br>
        something<br>
        something<br>
        something<br>
        something<br>
        something<br>
        something<br>
        something<br>
        something<br>
        something<br>
        something<br>
        something<br>
        something<br>
        something<br>
        something<br>
        something<br>
        something<br>
        </div>
    </scroll>
    
    <scroll :isx="true" :front="false" width="50%" :range="0">
        <div class="classForCollape" style="width:600px">
            somethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomething
        </div>
    </scroll>
    
    <scroll :isx="false" :height="300" :width='300' :range="50" :step="300">
        <ul class="xstep3 clearfix">
            <li><span>1 item</span></li>
            <li><span>2 item</span></li>
            <li><span>3 item</span></li>
            <li><span>4 item</span></li>
            <li><span>5 item</span></li>
            <li><span>6 item</span></li>
            <li><span>7 item</span></li>
            <li><span>8 item</span></li>
            <li><span>9 item</span></li>
            <li><span>10 item</span></li>
        </ul>
    </scroll>

    <scroll :isx="true" :width="300" :range="0" :step="300">
        <ul class="xstep clearfix">
            <li><span>1 item</span></li>
            <li><span>2 item</span></li>
            <li><span>3 item</span></li>
            <li><span>4 item</span></li>
            <li><span>5 item</span></li>
            <li><span>6 item</span></li>
            <li><span>7 item</span></li>
            <li><span>8 item</span></li>
            <li><span>9 item</span></li>
            <li><span>10 item</span></li>
        </ul>
    </scroll>

    <scroll :isx="true" :width="300" :range="50" :step="300">
        <ul class="xstep2 clearfix">
            <li><span>1 item</span></li>
            <li><span>2 item</span></li>
            <li><span>3 item</span></li>
            <li><span>4 item</span></li>
            <li><span>5 item</span></li>
            <li><span>6 item</span></li>
            <li><span>7 item</span></li>
            <li><span>8 item</span></li>
            <li><span>9 item</span></li>
            <li><span>10 item</span></li>
        </ul>
    </scroll>
  </div>
</template>


<script>
  import scroll from '../../src/scroll.vue'
  import hd from '../../src/hd.vue'
  import modal from '../../src/modal.vue'
  import btn from '../../src/btn.vue'

  export default {
    components: {
     scroll
    }
  }
</script>

<style lang="sass" scoped>
.ui-scroll{
    margin: 20px;
}
ul, li{
    list-style: none outside none;
    padding: 0;
    margin: 0;
}
.xstep{
    width: 5000px;
    li{ 
        width: 100px;
        height: 200px;
        border: 1px solid #000;
        float: left;
   } 
}

.xstep2{
    width: 3000px;
    li{ 
        width: 300px;
        height: 200px;
        border: 1px solid #000;
        float: left;
   } 
}
.xstep3{
    width: 3000px;
    li{ 
        width: 300px;
        height: 300px;
        border: 1px solid #000;
   } 
}
</style>
