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
				data: [{key: 1, name: 'name1'}, {key: 2, name: 'name2'}, {key: 3, name: 'name3'}, {key: 4, name: 'name4'},
        			   {key: 5, name: 'name5'}, {key: 6, name: 'name6'}, {key: 7, name: 'name7'}, {key: 8, name: 'name8'}],
				selectshow: true        			   
			}
		}
	}
</script>

<style scoped>
	.vop1{
		float: left;
	}
</style>
