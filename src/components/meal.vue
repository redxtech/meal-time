<template>
	<box class="meal">
		<element-title bold>{{ meal.title }}</element-title>
		<p class="description" v-text="meal.description" />
		<btn type="secondary" colour="blue" @click="add">
			add
			<template #tailing>
				<svg
					class="w-4 h-4"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 6v6m0 0v6m0-6h6m-6 0H6"
					/>
				</svg>
			</template>
		</btn>
		<btn type="secondary" colour="blue" @click="remove">
			remove
			<template #tailing>
				<svg
					class="w-4 h-4"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M20 12H4"
					/>
				</svg>
			</template>
		</btn>
	</box>
</template>

<script>
	import { mapActions } from 'vuex'

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
		},
		methods: {
			add() {
				this.addMealToDay({
					day: 'Sunday',
					mealtime: 'Breakfast',
					meal: this.meal
				})
				// this.addMeal({ meal: this.meal })
			},
			remove() {
				this.removeMeal({ meal: this.meal })
			},
			...mapActions(['addMealToDay', 'removeMeal'])
		}
	}
</script>

<style scoped>
	.meal {
		@apply flex flex-col flex-no-wrap rounded shadow-box overflow-hidden transition duration-150 ease-in-out;

		.description {
			@apply flex-grow my-3;
		}

		&:first-child,
		&:last-child {
			@apply flex-none;
		}

		&:hover {
			@apply shadow-hover;
		}
	}
</style>
