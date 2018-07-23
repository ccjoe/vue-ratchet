<template>
<div class="card">
  <tabs>
     <tab header="tab1">
       tab1
     </tab>
     <tab header="tab2">
       tab2
     </tab><tab header="tab3">
       tab3
     </tab>
  </tabs>
  </div>
</template>

<script>
  import tabs from '../../src/tabs.vue'
  import tab from '../../src/tab.vue'
	export default {
		components: {tabs, tab}
	}
</script>
