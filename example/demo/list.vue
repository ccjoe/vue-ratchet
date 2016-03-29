<template>
<div>
	<h5>Dead Simple List</h5>
	<list>
		<item>title</item>	
		<item>title2</item>	
	</list>

	<h5>Simple List With Icons</h5>
	<list>
		<item icon="trash">title</item>	
		<item icon="gear">title2</item>	
		<item icon="pages">title3</item>	
	</list>

	<h5>Simple List With Icons And Descriptions</h5>
	<list>
		<item icon="trash">title <p>u can define List-Description with 'item element'  'content' prop or slot with 'p' element</p></item>	
		<item icon="gear">title2  <p>title with descritipn</p></item>	
		<item icon="pages">title3 <p>title with descritipn</p></item>	
	</list>

	<h5>List with Images instead of Icons, and with badge, and remove the right arrow </h5>
	<list arrow='false'>
		<item img='http://placehold.it/42x42' badge='5'>title with Imgs <p>u can define List-Images with 'item element'  'img' prop</p></item>	
		<item img='http://placehold.it/42x42' badge='15'>title2  <p>code like "img='http://placehold.it/42x42'"</p></item>	
		<item icon="pages" badge='3'>title3 <p>and img and exist with icons, too</p></item>	
	</list>

	<h5>List with Button</h5>
	<list arrow='false'>
		<item img='http://placehold.it/42x42' btn='查看'>title with Imgs <p>u can define List-Images with 'item element'  'img' prop</p></item>	
		<item img='http://placehold.it/42x42' btn='操作'>title2  <p>code like "img='http://placehold.it/42x42'"</p></item>	
		<item img='http://placehold.it/42x42' btn='取消'>title3 <p>and img and exist with icons, too</p></item>	
	</list>

	<h5>List with Divider item and has link</h5>
	<list>
		<item icon="trash" link="header">link to header</item>	
		<item icon="gear" link="btn">link to btn</item>	
		<item icon="pages" link="icon">link to icons</item>	
		<item :divider="true">Divider Bar Item</item>
		<item icon="trash" link="badge">link to badges</item>	
		<item icon="gear" link="tab">link to tabs</item>	
		<item icon="pages" link="form">link to forms</item>		
	</list>
	</div>
</template>

<script>
    import item from '../../src/item.vue'
    import list from '../../src/list.vue'
	export default {
		components: {list, item},
	}
</script>