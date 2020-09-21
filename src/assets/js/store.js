import Vuex from 'vuex'
// import VuexPersist from 'vuex-persist'

// const vuexLocal = new VuexPersist({
// 	key: 'meal-time',
// 	storage: window.localStorage
// })

export default new Vuex.Store({
	state: {
		ingredients: {},
		days: {
			Sunday: {
				Breakfast: [],
				Lunch: [],
				Dinner: []
			},
			Monday: {
				Breakfast: [],
				Lunch: [],
				Dinner: []
			},
			Tuesday: {
				Breakfast: [],
				Lunch: [],
				Dinner: []
			},
			Wednesday: {
				Breakfast: [],
				Lunch: [],
				Dinner: []
			},
			Thursday: {
				Breakfast: [],
				Lunch: [],
				Dinner: []
			},
			Friday: {
				Breakfast: [],
				Lunch: [],
				Dinner: []
			},
			Saturday: {
				Breakfast: [],
				Lunch: [],
				Dinner: []
			}
		}
	},
	getters: {
		ingredients: state => state.ingredients,
		dayOfWeek: state => day => state.days[day],
		meal: state => (day, mealtime) => state.days[day][mealtime]
	},
	mutations: {
		addMeal: (state, { meal }) => {
			if (meal.ingredients && meal.ingredients.length) {
				for (const ingredient of meal.ingredients) {
					// noinspection JSUnresolvedVariable
					const name = ingredient.ingredient
					const count = ingredient.count
					const uncounted = count ? 0 : 1

					// if the ingredient has already been added increment its count
					if (Object.hasOwnProperty.call(state.ingredients, name)) {
						state.ingredients[name].count += count
						state.ingredients[name].uncounted += uncounted
					} else {
						state.ingredients[name] = { count, uncounted }
					}
				}
			}
		},
		removeMeal: (state, { meal }) => {
			for (const ingredient of meal.ingredients) {
				// noinspection JSUnresolvedVariable
				const name = ingredient.ingredient
				const count = ingredient.count

				if (Object.hasOwnProperty.call(state.ingredients, name)) {
					if (count === 0) {
						state.ingredients[name].uncounted--
					} else {
						state.ingredients[name].count -= count
					}
				}

				// remove the ingredient if its counts are all 0
				if (
					state.ingredients[name].count <= 0 &&
					state.ingredients[name].uncounted <= 0
				) {
					state.ingredients[name] = undefined
					delete state.ingredients[name]
				}
			}
		},
		addMealToDay: (state, { day, mealtime, meal }) => {
			state.days[day][mealtime].push(meal)
		},
		removeMealFromDay: (state, { day, mealtime, meal }) => {
			const index = state.days[day][mealtime].findIndex(
				m => m.title === meal.title
			)
			state.days[day][mealtime].splice(index, 1)
		},
		clearMeals: state => {
			for (const day of Object.keys(state.days)) {
				for (const mealtime of Object.keys(state.days[day])) {
					state.days[day][mealtime] = []
				}
			}
			state.ingredients = {}
		}
	},
	actions: {
		addMeal: (ctx, { meal }) => ctx.commit('addMeal', { meal }),
		removeMeal: (ctx, { meal }) => ctx.commit('removeMeal', { meal }),
		addMealToDay: (ctx, { day, mealtime, meal }) => {
			ctx.commit('addMealToDay', { day, mealtime, meal })
			ctx.commit('addMeal', { meal })
		},
		removeMealFromDay: (ctx, { day, mealtime, meal }) => {
			ctx.commit('removeMealFromDay', { day, mealtime, meal })
			ctx.commit('removeMeal', { meal })
		},
		clearMeals: ctx => ctx.commit('clearMeals')
	}
	// plugins: [vuexLocal.plugin]
})
