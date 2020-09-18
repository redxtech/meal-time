<template>
	<sec id="meals" main>
		<section-title>Meals</section-title>
		<div class="meals">
			<meal v-for="meal in meals" :key="meal.title" :meal="meal" />
		</div>
	</sec>
</template>

<script>
	import Sec from '../layout/Sec.vue'
	import SectionTitle from '../titles/SectionTitle.vue'
	import Meal from '../meal.vue'

	import { meals } from '../../assets/content/meals.json'

	export default {
		name: 'Meals',
		components: { Sec, Meal, SectionTitle },
		data() {
			return { meals: [...meals] }
		}
	}
</script>

<style scoped>
	.meals {
		@apply flex flex-row flex-wrap;
	}
</style>
