<template>
	<container>
		<page-title>Meal Time</page-title>
	</container>
	<container>
		<sec id="meals" main>
			<section-title>Meals</section-title>
			<div class="meals">
				<meal
					v-for="meal in meals"
					:key="meal.title"
					:title="meal.title"
					:description="meal.description"
					:ingredients="meal.ingredients"
					:type="meal.type"
					@add="addMeal(meal)"
				/>
			</div>
		</sec>
		<sec id="weekly">
			<section-title>Weekly Planner</section-title>
			<div class="weekly">
				<p>This is a temporary placeholder.</p>
			</div>
		</sec>
		<sec id="ingredients">
			<section-title>Ingredients</section-title>
			<div class="ingredients">
				<div v-for="ingredient in ingredients" :key="ingredient">
					<p v-text="ingredient" />
				</div>
			</div>
		</sec>
	</container>
</template>

<script>
	import { meals } from './assets/content/meals.json'
	import Meal from './components/meal.vue'
	import Container from './components/layout/Container.vue'
	import PageTitle from './components/titles/PageTitle.vue'
	import Sec from './components/layout/Sec.vue'
	import SectionTitle from './components/titles/SectionTitle.vue'

	export default {
		name: 'App',
		components: { SectionTitle, Sec, PageTitle, Container, Meal },
		data() {
			return {
				meals: [...meals],
				selected: []
			}
		},
		methods: {
			addMeal(meal) {
				this.selected.push(meal)
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
	.meals {
		@apply grid grid-cols-5 gap-4;
	}
</style>
