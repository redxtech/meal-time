<template>
	<sec id="meals" main>
		<section-title>Meals</section-title>
		<div class="meals">
			<meal
				v-for="meal in meals"
				:key="meal.title"
				:meal="meal"
				@click="openModal(meal)"
			/>
		</div>
		<meal-modal :open="isModalOpen" @close="closeModal" :meal="modalState" />
	</sec>
</template>

<script>
	import Sec from '../layout/Sec.vue'
	import SectionTitle from '../titles/SectionTitle.vue'
	import Meal from '../meal.vue'
	import MealModal from '../elements/MealModal.vue'

	import { meals } from '../../assets/content/meals.json'

	export default {
		name: 'Meals',
		components: { MealModal, Sec, Meal, SectionTitle },
		data() {
			return {
				meals: [...meals],
				isModalOpen: false,
				modalState: {
					title: undefined,
					description: undefined,
					directions: undefined,
					ingredients: undefined,
					type: undefined,
					mealtimes: undefined
				}
			}
		},
		methods: {
			openModal(meal) {
				this.isModalOpen = true
				this.modalState = meal
			},
			closeModal() {
				this.isModalOpen = false
				this.modalState = {
					title: undefined,
					description: undefined,
					directions: undefined,
					ingredients: undefined,
					type: undefined,
					mealtimes: undefined
				}
			}
		}
	}
</script>

<style scoped>
	.meals {
		@apply flex flex-row flex-wrap;
	}
</style>
