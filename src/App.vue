<template>
	<container>
		<page-title>Meal Time</page-title>
	</container>
	<container>
		<weekly />
		<meals />
		<ingredients />
	</container>
</template>

<script>
	import Container from './components/layout/Container.vue'
	import PageTitle from './components/titles/PageTitle.vue'
	import Weekly from './components/sections/Weekly.vue'
	import Meals from './components/sections/Meals.vue'
	import Ingredients from './components/sections/Ingredients.vue'

	export default {
		name: 'App',
		components: {
			Meals,
			Weekly,
			Ingredients,
			PageTitle,
			Container
		}
	}
</script>
