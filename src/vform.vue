<template>
	<form>
		
	</form>
</template>

<script>
	export default {
	name: 'vform',
	props:{
      model:{
        type: Boolean,
        twoWay: true,
        default: false
      }
    },

    methods: {
    	 toggle: function(){
            this.model = !this.model;
       }
    }
	}
</script>

<style lang="sass">

</style>