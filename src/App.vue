<template>
	<h1>Meals</h1>
	<div class="meals">
		<div v-for="meal in meals">
			<h2 v-text="meal.title" />
			<h4 v-text="meal.description" />
			<button @click="selected.push(meal)">Add</button>
		</div>
	</div>
	<h1>Ingredients</h1>
	<div class="ingredients">
		<div v-for="ingredient in ingredients">
			<p v-text="ingredient" />
		</div>
	</div>
</template>

<script>
import { meals } from './assets/content/meals.json'

export default {
	name: 'App',
	data() {
		return {
			meals: [...meals],
			selected: []
		}
	},
	computed: {
		ingredients() {
			// noinspection JSUnresolvedVariable
			return [
				...new Set(
					this.selected.map(m => m.ingredients.map(i => i.ingredient)).flat()
				)
			]
		}
	}
}
</script>

<style>
.meals div {
	display: inline-block;
	border: 1px solid black;
	border-radius: 0.5rem;
	padding: 1rem;
	margin: 1rem;
}
</style>
