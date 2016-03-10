<template>
	<h5>最简单的列表</h5>
	<list :list="listdata"></list>

	<h5>带图标的列表</h5>
	<list media="icon" :list="listdata"></list>

	<h5>定义带标题与详情的列表</h5>
	<list media="icon" :list="listdata1"></list>

	<h5>定义有图片有bdage的列表</h5>
	<list media="img" arrow="false" :list="listdata2"></list>

	<h5>定义有button列表</h5>
	<list media="btn" arrow="false" :list="listdata3"></list>

	<h5>定义列表分隔栏且配置是否可折叠</h5>
	<list media="icon" :list="listdata4"></list>


</template>

<script>
    import list from '../../src/list.vue'
	export default {
		components: {list},
  		data() {
	      return {
	        text: '放一点小测试好么2？',
	        listdata: [{
	            icon: 'trash',
	            title: '列表示例',
	        },{
	            icon: 'gear',
	            title: '列表示例'
	        },{
	            icon: 'pages',
	            title: '列表示例'
	        }],
	        listdata1: [{
	            icon: 'search',
	            title: '列表示例',
	            content: '列表通过data传入属性实现不同的配置,  通过 data.media可以为img, icon; 这个列表data.media为img; data.card为true时显示为创建列表的显示的卡片式'
	        },{
	            icon: 'plus',
	            title: '可收缩的item',
	            content: 'data.list的item单项上通过collapse为true可点击收缩'
	        }],
	        listdata2: [{
	            img: 'http://placehold.it/42x42',
	            title: '列表示例',
	            content: '列表通过data传入属性实现不同的配置,  通过 data.media可以为img, icon; 这个列表data.media为img; data.card为true时显示为创建列表的显示的卡片式',
	            badge: '12'
	        },{
	            img: 'http://placehold.it/42x42',
	            content: '列表通过data传入属性实现不同的配置,  通过 data.media可以为img, icon; 这个列表data.media为img; data.card为true时显示为创建列表的显示的卡片式',
	            title: '列表示例',
	        }],
	        listdata3: [{
	            btn: '按钮',
	            title: '列表示例',
	            badge: '12'
	        },{
	            btn: '按钮',
	            title: '列表示例',
	        }],
	        listdata4: [{
	            icon: 'search',
	            title: '列表示例',
	        },{
	            title: '可点击收缩的标题',
	            isDivider: true,
	            collapse: true
	        },{
	            icon: 'plus',
	            title: '可收缩的item'
	        }]
	      }
	    }
	}
</script>

<style lang="sass" scoped>

</style>
