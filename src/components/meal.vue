<template>
	<span
		type="button"
		class="meal inline-flex items-center m-1 px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-indigo-200 transition ease-in-out duration-150"
		v-text="meal.title"
	/>
</template>

<script>
	import Box from './elements/Box.vue'
	import ElementTitle from './titles/ElementTitle.vue'
	import Btn from './elements/Btn.vue'

	export default {
		name: 'Meal',
		components: { Btn, ElementTitle, Box },
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
		@apply inline-flex items-center m-1 px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 cursor-pointer transition ease-in-out duration-150;

		&:hover {
			@apply bg-indigo-50;
		}

		&:focus {
			@apply outline-none border-indigo-300 shadow-outline-indigo;
		}

		&:active {
			@apply bg-indigo-200;
		}
	}
</style>
