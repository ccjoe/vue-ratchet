<template>
	<div>
        <form class="input-group">
          <div class="input-row">
            <label>双联开始时间</label>
            <input type="text" @click="showCalendar" v-model="value" placeholder="请输入Begin日期">
          </div>
          <calendar :show.sync="show" :x="x1" :y="y1"  :min="min1" :max="max1" :end.sync="value2" :autohide='autoHide' :value.sync="value" :lunar="true" :terms="true" :pickerstyle=1 :festival="true" :popup="false"></calendar>
          <div class="input-row">
            <label>双联截止时间</label>
            <input type="text" @click="showCalendar2" v-model="value2" placeholder="请输入End日期">
          </div>
          <calendar :show.sync="show2" :x="x2" :y="y2"  :min="min2" :max="max2" :begin.sync="value" :autohide='autoHide' :value.sync="value2" :lunar="true" :terms="true" :pickerstyle=1 :festival="true" :popup="false"></calendar>
          <div class="input-row">
            <label>单联显示单月面板：</label>
            <input type="text" @click="showCalendar3" v-model="value3">
            <calendar :show.sync="show3" :value.sync="value3" :pickerstyle="1" :x="x3" :y="y3"  :autohide='autoHide'></calendar>
          </div> 

          <div class="input-row">
            <label>单联显示多月面板：</label>
            <input type="text" @click="showCalendar4" v-model="value3">
          </div>
          <calendar :show.sync="show4" :value.sync="value3" :pickerstyle="3" :popup="false"></calendar>
        </form>
    </div>
</template>
  
<script>
    import datepicker from '../../src/datepicker.vue'
    module.exports = {
        data: function() {
            return {
                show:false,
                show2:false,
                show3:false,
                show4:false,
                type:"date", //date datetime
                value:"2016-05-16",
                value2:"2016-06-25",
                value3: '',
                min1:"2016-03-20",
                max1:"2016-07-25",            
                min2:"2016-03-20",
                max2:"2016-07-25",
                x1: 0, y1: 0, x2: 0, y2: 0, x3:0 , y3: 0,
                range: false,
                autoHide: true
            }
        },
        methods:{
            showCalendar:function(e){
                this.show2 = false
                this.show=true;
                this.x1=e.target.offsetLeft;
                this.y1=e.target.offsetTop+e.target.offsetHeight+8;
            },showCalendar2:function(e){
                this.show = false
                this.show2=true;
                this.x2=e.target.offsetLeft;
                this.y2=e.target.offsetTop+e.target.offsetHeight+8; 
            },showCalendar3:function(e){
                this.show3=true;
                this.x3=e.target.offsetLeft;
                this.y3=e.target.offsetTop+e.target.offsetHeight+8;
            },showCalendar4:function(e){
                this.show4=true;
            }
        },
        components:{
            calendar: datepicker
        }
    }
</script>
<style>
    .input-row label{
        font-size: 12px;
    }
</style>