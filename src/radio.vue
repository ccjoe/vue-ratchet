<template>
<ul class="table-view radio radio-{{position}}">
  <slot></slot>
</ul>
</template>
<script>
export default {
name: 'radio',
props:{
    model:{
      twoWay: true,
      required: true
    },
    position:{
      type: String,
      default: 'right'
    }
  }
}
</script>

<style lang="sass">
@import './scss/variables';
@import './scss/mixins';
.input-row {
    height: 40px;
    line-height: 25px;
    label{
        height: 40px;
    }
    .input{
        float: right;
        height: 40px;
        width: 65%;
        //padding-left: 0;
        margin-bottom: 0;
        border: 0;
        background: none;
        box-shadow: none;
    }
    select{
        padding: 10px 15px!important;
    }
    .toggle{
        width: 50px;
        height: 30px;
        margin: 5px 13px;
        border: 2px solid #e6e6e6;
    }
    .input-select{
        margin-top: 3px;
    }
}

.location{
    position: relative;
    .icon-area{
        position: absolute;
        right: 15px;
        width: 40px;
        height: 40px;
        border-left: 1px solid #eee;
        text-align: center;
    }
}

//checkbox
.checkbox, .radio{
    position: relative;
    label {
        cursor: pointer;
    }
    .check-cion:before, .check-cion:after {
        font-family: FontAwesome;
        font-size: 21px;
        /*absolutely positioned*/
        position: absolute; top: 11px;
        width: 22px;
        height: 22px;
        border-radius: 22px;
        box-sizing: border-box;
        background-color: #007aff;
        content: '';
    }
    .check-cion:after {
        content: '';
        background: no-repeat center;
        -webkit-background-size: 12px 9px;
        background-size: 12px 9px;

        max-width: 0;
        overflow: hidden;
        opacity: 0.5;
        transition: all 0.2s;
    }

    input[type="checkbox"],
    input[type="radio"] {
        display: none;
    }
    input[type="checkbox"]:checked ~ .check-cion:after,
    input[type="radio"]:checked ~ .check-cion:after,
    .item.active .check-cion:after{
        max-width: 25px; /*an arbitratry number more than the icon's width*/
        opacity: 1; /*for fade in effect*/
    }
}

.checkbox{
    .check-cion:after{
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20x%3D'0px'%20y%3D'0px'%20viewBox%3D'0%200%2012%209'%20xml%3Aspace%3D'preserve'%3E%3Cpolygon%20fill%3D'%23ffffff'%20points%3D'12%2C0.7%2011.3%2C0%203.9%2C7.4%200.7%2C4.2%200%2C4.9%203.9%2C8.8%203.9%2C8.8%203.9%2C8.8%20'%2F%3E%3C%2Fsvg%3E");
    }
}
.radio{
    .check-cion:after{
        background: #FFFFFF;
        width: 8px;
        height: 8px;
        margin: 7px;
    }
}

.checkbox-left,.radio-left{
    label{
        padding-left: 30px;
    }
    .check-cion:before, .check-cion:after{
        left:$gapH;
    }
}
.checkbox-right,.radio-right{
    .check-cion:before, .check-cion:after{
        right:$gapH;
    }
}

</style>
