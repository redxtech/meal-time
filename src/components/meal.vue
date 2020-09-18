<template>
	<drag
		tag="span"
		:transfer-data="meal"
		type="button"
		class="meal"
		v-text="meal.title"
	/>
</template>

<script>
	import Drag from './elements/Drag.vue'

	export default {
		name: 'Meal',
		components: { Drag },
		props: {
			meal: {
				type: Object,
				required: true
			}
		}
	}
</script>

<style scoped>
	.meal {
		@apply inline-flex items-center m-1 px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-blue-700 bg-blue-100 cursor-pointer transition ease-in-out duration-150;

		&:hover {
			@apply bg-blue-50;
		}

		&:focus {
			@apply outline-none border-blue-300 shadow-outline-blue;
		}

		&:active {
			@apply bg-blue-200;
		}
	}
</style>
