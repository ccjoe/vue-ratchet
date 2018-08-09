<template>
<div>
    <vselect title="选择交车时间" :show.sync="innerShow" :onyes="onyes">
        <voption ref="date" class="v-options" :height="height" :step="step" :data="datestr" width="35%" :onpanend="checkRange"></voption>
        <voption ref="ampm" class="v-options" :height="height" :step="step" :data="ampm" width="20%" :onpanend="checkRange"></voption>
        <voption ref="hour" class="v-options" :height="height" :step="step" :data="hour" width="20%" :onpanend="checkRange"></voption>
        <voption ref="minute" class="v-options" :height="height" :step="step" :data="minute" width="25%" :onpanend="checkRange"></voption>
    </vselect>
    <modal :show.sync="toastShow" :hastitle="false" type="toast" :time="1500" :mask="false">{{toastContent}}</modal>
</div>
</template>

<script>
import {
    todayStart,
    dateDiff
} from './utils/date.js'
import voption from './option.vue'
import vselect from './select.vue'
import modal from './modal.vue'
import './filter/filter';
var dpr = window.document.documentElement.getAttribute('data-dpr') || 1;
export default {
    props: {
        show: {
            default: false,
            type: Boolean
        },
        datevalue: { //时间戳，最终获取的值
            type: Number,

        },
        max: {
            type: Number
        },
        toastContent: {
            type: String,
            default: '选择已超出最大值'
        },
    },
    components: {
        voption,
        vselect,
        modal
    },
    data() {
        return {
            height: 165 * dpr,
            dateObj: new Date(), //日历开始日期对象
            date: [], //datatime select use
            datestr: [], //datatime select use
            // week: ['周日', '周一','周二','周三','周四','周五','周六'],
            ampm: ['上午', '下午'],
            hour: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            minute: ['00', 10, 20, 30, 40, 50],
            step: 33 * dpr,
            toastShow: false,
            innerShow: this.show
        }
    },
    watch: {
        innerShow(val) {
            this.$emit('update:show', val)
        },
        show(nv, ov) {
            this.innerShow = nv
            this.days = dateDiff(this.max);
            if (this.days > 100) {
                console.warn('这种场景可能不适用这个组件了');
                return;
            }
            this.genDays(this.days);
            this.dateObj = new Date(this.datevalue);
            nv && this.dateSelected(this.dateObj);
        }
    },
    methods: {
        genDays(days) {
            var dateStrArr = [],
                dateKeyArr = [];
            for (var i = 0; i < days; i++) {
                var idate = new Date(+todayStart + 3600 * 1000 * 24 * i);
                dateKeyArr.push(idate);
                dateStrArr.push(this.$options.filters.dateFormat(idate, 'M月d日  周W'));
            }
            this.date = dateKeyArr;
            this.datestr = dateStrArr;
        },
        //选择某个日期，或根据swipe选择， $event可以为时间或滑动事件
        dateSelected(curDate) {
            var h = curDate.getHours(),
                showh = h > 12 ? h - 12 : h;
            this.selectItem(this.$refs.date, dateDiff(curDate) - 1);
            this.selectItem(this.$refs.ampm, h > 12 ? 1 : 0);
            this.selectItem(this.$refs.hour, showh - 1);
            this.selectItem(this.$refs.minute, Math.ceil(curDate.getMinutes() / 10));
            this.dateObj = curDate;
        },
        selectItem($voption, index) {
            $voption.$children[0].scrollTo(-index * this.step);
            $voption.activeindex = index;
        },
        getVal() {
            this.datevalue = +this.dateObj;
        },
        setVal() {
            var h = !this.$refs.ampm.$children[0].steps ? this.$refs.hour.$children[0].steps : this.$refs.hour.$children[0].steps + 12
            this.dateObj = this.date[this.$refs.date.$children[0].steps];
            this.dateObj.setHours(h + 1)
            this.dateObj.setMinutes(this.$refs.minute.$children[0].steps * 10)
            this.dateObj.setSeconds(0, 0);
        },
        onyes() {
            this.getVal();
        },
        //超过range 返回false
        checkRange() {
            this.setVal();
            let maxDate = new Date(this.max);
            let pass = +this.dateObj > this.max;
            if (pass) {
                this.dateSelected(maxDate);
                this.toastShow = true;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.v-options {
    float: left;
}
</style>
