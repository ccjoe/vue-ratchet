<template>
	<div>
		<h5>None-Modal selector use options</h5>
		<voption :data="data"></voption>

		<h5>None-Modal Mutil-Selector use options</h5>
		<voption class="vop1" :data="data" width="33%"></voption>
		<voption class="vop1" :data="data" width="33%"></voption>
		<voption class="vop1" :data="data" width="33%"></voption>

		<h5>Modal with Selector use vselect</h5>
		<vselect title="select title" :show="selectshow">
			<voption class="vop1" :data="data" width="33%"></voption>
			<voption class="vop1" :data="data" width="33%"></voption>
			<voption class="vop1" :data="data" width="33%"></voption>
		</vselect>	
	</div>
</template>

<script>
    import voption from '../../src/option.vue'
    import vselect from '../../src/select.vue'
	export default {
		components: {voption, vselect},
		data(){
			return {
				data: ['name1', 'name2', 'name3', 'name4',
        			   'name5', 'name6', 'name7', 'name8'],
				selectshow: true        			   
			}
		}
	}
</script>

<style scoped>
	.test_joejoe{
		margin:1px;
	}
	body {
		border: 1px solid red;
	}
	.vop1{
		float: left;
	}
</style>
