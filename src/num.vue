<template>
<div class="day-choose">
    <i :class="{'disabled': val<=min, 'minus':true}" v-touch:tap="val > min ? val-- : val"></i>
    <span class="area-val"><slot><input type="number" v-model="val">天</slot></span>
    <i :class="{'disabled': (max!==void 0) && val>=max, 'plus':true}" v-touch:tap="(max===void 0) ? val++ : (val < max ? val++ : val)"></i>
</div>
</template>

<script>
//slot 为需要显示的值，一般用于特殊需求, 即显示的值不是val而是val对应的某值（如数据index为val）
export default {
    props: {
        val: {
            type: Number,
            default: 3,

        },
        min: {
            type: Number,
            default: 1
        },
        max: {
            type: Number,
            default: 10
        }
    }
}
</script>

<style lang="scss" scoped>
.day-choose {
    .minus,
    .plus {
        position: relative;
        display: inline-block;
        vertical-align: middle;
        width: 1.05rem;
        height: 1.05rem;
        border: 1px solid #C6C6C6;
        border-radius: 4px;
        &:before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0.6rem;
            height: 0.075rem;
            background-color: #A7A7A7;
            transform: translate(-50%, -50%);
        }
        &.disabled {
            border-color: #E4E4E4;
            &:before {
                background-color: #E4E4E4;
            }
            &:after {
                background-color: #E4E4E4;
            }
        }
    }
    .plus {
        &:after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0.075rem;
            height: 0.6rem;
            background-color: #A7A7A7;
            transform: translate(-50%, -50%);
        }
    }
    input {
        vertical-align: middle;
        width: 1rem;
        line-height: 1.05rem;
        text-align: center;
        font-weight: 300;
    }
    .area-val {
        width: 3.5rem;
        display: inline-block;
        text-align: center;
    }
}
</style>
