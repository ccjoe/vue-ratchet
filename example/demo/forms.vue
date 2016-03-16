<template>
<div>
  <toggle :model.sync="key"></toggle>
  <p class="content-padded">当前选择的值: <span class="text-warning">{{key}}</span> </p>

  <checkbox active :model.sync="checkboxValue1">
      <check key='1'>选项1</check>
      <check key='2'>选项2</check>
      <check key='3'>选项3</check>
  </checkbox>
  <p class="content-padded">当前选择的值: <span class="text-warning">{{checkboxValue1}}</span> </p>
  <checkbox active position="left" :model.sync="checkboxValue2">
      <check key='1'>选项1</check>
      <check key='2'>选项2</check>
      <check key='3'>选项3</check>
  </checkbox>
  <p class="content-padded">当前选择的值:<span class="text-warning">{{checkboxValue2}}</span> </p>

  <radio active position="right" :model.sync="radioValue1">
      <check key='1'>选项1</check>
      <check key='2'>选项2</check>
      <check key='3'>选项3</check>
  </radio>
  <p class="content-padded">当前选择的值:<span class="text-warning">{{radioValue1}}</span> </p>

  <radio active position="left" :model.sync="radioValue2">
      <check key='1'>选项1</check>
      <check key='2'>选项2</check>
      <check key='3'>选项3</check>
  </radio>
  <p class="content-padded">当前选择的值:<span class="text-warning">{{radioValue2}}</span> </p>
  </div>
</template>

<script>
  import toggle from '../../src/toggle.vue'
  import checkbox from '../../src/checkbox.vue'
  import radio from '../../src/radio.vue'
  import check from '../../src/check.vue'
	export default {
		components: {toggle, checkbox, radio, check},
    data(){
      return {
        key: true,
        checkboxValue1: ['1', '2'],
        checkboxValue2: ['1'],
        radioValue1: '1',
        radioValue2: '2'
      }
    }
	}
</script>
<style>
  .text-warning{
    color: red;
  }
</style>
