<template>
	<div class="main container">
		<listdata media="icon" :list="data"></listdata>
	</div>
</template>

<script>
  import listdata from '../listdata.vue'
  export default {
    components: {
       listdata
    },
  	data() {
      return {
        data:[{
              icon: 'search',
              title: 'header',
              link: '/header'
          },{
              icon: 'home',
              title: 'list',
              link: '/list'
          },{
              icon: 'star-filled',
              title: 'btn',
              link: '/btn'
          },{
              icon: 'person',
              title: 'icon',
              link: '/icon'
          },{
              icon: 'sound',
              title: 'badge',
              link: '/badge'
          },{
              icon: 'code',
              title: 'tabs',
              link: '/tabs'
          },{
              icon: 'share',
              title: 'forms',
              link: '/form'
          },{
              icon: 'bars',
              title: 'modal',
              link: '/modal'
          },{
              icon: 'info',
              title: 'scroll',
              link: '/scroll'
          },{
              icon: 'pages',
              title: 'voption',
              link: '/option'
          },{
              title: '可点击收缩的标题',
              isDivider: true,
              collapse: true
          },{
              icon: 'plus',
              title: 'datepicker',
              link: '/datepicker'
          },{
              icon: 'refresh',
              title: '微信',
              link: '/weixin'
          }]
      }
    },
    methods: {
      onleft: function(){
        history.go(-1);
      }
    }
  }
</script>
