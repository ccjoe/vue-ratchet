<template>
<div>
	<hd title="one title"></hd>
	<hd title="main/sub title" subtitle="main and sub title"></hd>
	<hd title="header left slot" subtitle="change left with 'left' slot">
		<btn classes="pull-left" slot="left">Left</btn>
	</hd>

	<hd title="header left/right slot" subtitle="change right with 'right' slot">
		<btn classes="pull-left" slot="left">Left</btn>
		<btn classes="pull-right" slot="right">Right</btn>
	</hd>

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
	.content header{
		position: relative;
	}
</style>
