<template>
  <div>
      <checks type="checkbox" :model="checkboxValue1">
          <check vkey='1'>选项1</check>
          <check vkey='2'>选项2</check>
          <check vkey='3'>选项3</check>
      </checks>
      <p class="content-padded">当前选择的值: <span class="text-warning">{{checkboxValue1}}</span> </p>

      <checks type="checkbox" position="left" :model="checkboxValue2">
          <check vkey='1'>选项1</check>
          <check vkey='2'>选项2</check>
          <check vkey='3'>选项3</check>
      </checks>
      <p class="content-padded">当前选择的值:<span class="text-warning">{{checkboxValue2}}</span> </p>

      <checks type="radio" position="right" :model="radioValue1">
          <check vkey='1'>选项1</check>
          <check vkey='2'>选项2</check>
          <check vkey='3'>选项3</check>
      </checks>
      <p class="content-padded">当前选择的值:<span class="text-warning">{{radioValue1}}</span> </p>

      <checks type="radio" position="left" :model="radioValue2">
          <check vkey='1'>选项1</check>
          <check vkey='2'>选项2</check>
          <check vkey='3'>选项3</check>
      </checks>
      <p class="content-padded">当前选择的值:<span class="text-warning">{{radioValue2}}</span> </p>

      <p class="content-padded">非类默认样式的radio或checkbox,可以自定义class, 选中的check会加上active class</p>
      <div class="card">
        <checks type="radio" class="voucher-choose" :model="customType">
            <check class="choose-item" vkey="1">选项1</check>
            <check class="choose-item" vkey="2">选项2</check>
        </checks>
        {{customType}}


        <toggle v-model="key"></toggle>
        <p class="content-padded">当前选择的值: <span class="text-warning">{{key}}</span> </p>

      </div>


      <form class="input-group">
        <div class="input-row">
          <label>Full name</label>
          <input type="text" placeholder="Mister Ratchet">
        </div>
        <div class="input-row">
          <label>Email</label>
          <input type="email" placeholder="ratchetframework@gmail.com">
        </div>
        <div class="input-row">
          <label>Username</label>
          <input type="text" placeholder="goRatchet">
        </div>
      </form>

      <form>
        <input type="text" placeholder="Full name">
        <input type="search" placeholder="Search">
        <textarea rows="5"></textarea>
        <button class="btn btn-positive btn-block">Choose existing</button>
      </form>
  </div>
</template>

<script>
  import toggle from '../../src/toggle.vue'
  import checks from '../../src/checks.vue'
  import check from '../../src/check.vue'
	export default {
		components: {toggle, checks, check},
    data(){
      return {
        key: true,
        checkboxValue1: ['1', '2'],
        checkboxValue2: ['1'],
        radioValue1: ['1'],
        radioValue2: ['2'],
        customType: ['1']
      }
    }
	}
</script>
<style lang="scss">
.text-warning {
  color: red;
}

.voucher-choose {
  .choose-unit {
    margin: 0 0.6rem;
    font-size: 0.7rem;
    color: #cacaca;
    display: inline-block;
  }
  .choose-item {
    display: inline-block;
    width: 6rem;
    line-height: 1.6rem;
    border: 1px solid #888;
    border-radius: 0.2rem;
    font-size: 0.7rem;
    text-align: center;
    color: #333;
    padding: 5px 8px;
    label:before,
    label:after {
      content: none;
    }
    &.active {
      border-color: #08b0ef;
      color: #08b0ef;
    }
  }
}
</style>
