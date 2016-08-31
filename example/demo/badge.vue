<template>
	<div class="card">
		<badge>1</badge>
		<badge color="primary">2</badge>
		<badge color="positive">3</badge>
		<badge color="negative">4</badge>
		<badge inverted>1</badge>
		<badge color="primary" inverted>2</badge>
		<badge color="positive" inverted>3</badge>
		<badge color="negative" inverted>4</badge>
	</div>
</template>

<script>
    import badge from '../../src/badge.vue'
	export default {
		components: {badge}
	}
</script>
