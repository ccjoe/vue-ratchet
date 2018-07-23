<template>
<div>
	<h5>最简单的header</h5>
	<hd title="one title"></hd>

	<h5>带主标题与副标题的header</h5>
	<hd title="main/sub title" subtitle="main and sub title"></hd>
	
	<h5>用slot left 改变左边</h5>
	<hd title="header left slot" subtitle="change left with 'left' slot">
		<btn classes="pull-left" slot="left">Left</btn>
	</hd>

	<h5>带btn的头部</h5>	
	<hd title="header left/right slot" subtitle="change right with 'right' slot">
		<btn classes="pull-left" slot="left">Left</btn>
		<btn classes="pull-right" slot="right">Right</btn>
	</hd>

	<h5>带Tab的头部</h5>
	<hd title="header left/right slot" subtitle="change right with 'right' slot">
		<btn slot="left" classes="pull-left">Left</btn>
		<btn slot="right" classes="pull-right">Right</btn>
		<h1 slot="title" class="title segmented-control">
		    <a class="control-item active">One</a>
		    <a class="control-item">Two</a>
		    <a class="control-item">Three</a>
		</h1>
	</hd>
	</div>
</template>

<script>
    import hd from '../../src/hd.vue'
    import btn from '../../src/btn.vue'
	export default {
		components: {hd, btn}
	}
</script>

<style scoped>
	.test_joe{margin:1px;}
	.content header{
		position: relative;
	}
</style>
