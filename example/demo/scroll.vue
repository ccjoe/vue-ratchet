<template>
<div>
    <h5>垂直滚动(带front fresh ui)</h5>
    <scroll :isx="false" :front="true" width="100%">
        <div class="classForCollape">
        Senior Discount <br>
        Ali Liebegott <br>

        I want to grow old with you. <br>
        Old, old.

        So old we pad through the supermarket <br>
        using the shopping cart as a cane that steadies us. <br>

        I’ll wait at register two in my green sweater <br>
        with threadbare elbows, smiling <br>
        because you’ve forgotten the bag of day-old pastries. <br>

        The cashier will tell me a joke about barbers as I wait. <br>
        He repeats the first line three times <br>
        but the only word I understand is barber. <br>

        Over the years we’ve caught inklings <br>
        of our shrinking frames and hunched spines. <br>

        You’re a little confused
        looking for me at the wrong register with a bag <br>
        of almost-stale croissants clenched in your hand. <br>

        The first time I held your hand it felt enormous in my own. <br>
        Sasquatch, I teased you, a million years ago. <br>

        Over here, I yell, but not in a mad way. <br>

        We’re laughing.<br>
        You have a bright yellow pin on your coat that says, Shalom! <br>

        Senior Discount, you say.<br>
        But the cashier already knows us. <br>
        We’re everyone’s favorite customers. <br>
        </div>
    </scroll>
    <h5>水平滚动</h5>
    <scroll :isx="true" :front="false" width="50%" :range="0">
        <div class="classForCollape" style="width:600px">
            somethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomething
            somethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomethingsomething
        </div>
    </scroll>

    <h5>垂直滚动(step为 1*item)</h5>
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
    <h5>水平滚动(step为 3*item)</h5>
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
     <h5>水平滚动(step为 1*item)</h5>
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

<style lang="scss" scoped>
.ui-scroll {
  // margin: 20px;
  font-size: 13px;
}
ul,
li {
  list-style: none outside none;
  padding: 0;
  margin: 0;
}
.xstep {
  width: 5000px;
  li {
    width: 100px;
    height: 200px;
    border: 1px solid #000;
    float: left;
  }
}

.xstep2 {
  width: 3000px;
  li {
    width: 300px;
    height: 200px;
    border: 1px solid #000;
    float: left;
  }
}
.xstep3 {
  width: 3000px;
  li {
    width: 300px;
    height: 300px;
    border: 1px solid #000;
  }
}
</style>
