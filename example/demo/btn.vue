<template>
<div>
	<btn>Button</btn>
	<btn color="primary">Button</btn>
    <btn color="positive">Button</btn>
    <btn color="negative">Button</btn>

    <btn outlined>Button</btn>
	<btn outlined color="primary">Button</btn>
    <btn outlined color="positive">Button</btn>
    <btn outlined color="negative">Button</btn>

	<btn icon="search">Button</btn>
	<btn icon="search" color="primary">Button</btn>
    <btn icon="search" color="positive">Button</btn>
    <btn icon="search" color="negative">Button</btn>

    <btn badge="3">Button</btn>
	<btn badge="3" color="primary">Button</btn>
    <btn badge="3" color="positive">Button</btn>
    <btn badge="3" color="negative">Button</btn>

    <btn icon="search" badge="3">Button</btn>
	<btn icon="search" badge="3" color="primary">Button</btn>
    <btn icon="search" badge="3" color="positive">Button</btn>
    <btn icon="search" badge="3" color="negative">Button</btn>

    <btn block icon="search">Button</btn>
	<btn block icon="search" color="primary">Button</btn>
    <btn block icon="search" color="positive">Button</btn>
    <btn block icon="search" color="negative">Button</btn>

    <btn outlined block icon="search">Button</btn>
	<btn outlined block icon="search" color="primary">Button</btn>
    <btn outlined block icon="search" color="positive">Button</btn>
    <btn outlined block icon="search" color="negative">Button</btn>
</div>
</template>

<script>
    import btn from '../../src/btn.vue'
	export default {
		components: {btn}
	}
</script>

<style lang="sass" scoped>
.btn-primary .badge{
	// color: #fff!important;
}
button:not(.btn-block){
	margin: 5px;
}
</style>
