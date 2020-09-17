import Vuex from 'vuex'
// import VuexPersist from 'vuex-persist'

// const vuexLocal = new VuexPersist({
// 	key: 'meal-time',
// 	storage: window.localStorage
// })

export default new Vuex.Store({
	state: {
		ingredients: {}
	},
	getters: {
		ingredients: state => state.ingredients
	},
	mutations: {
		addMeal: (state, meal) => {
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
		},
		removeMeal: (state, meal) => {
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
		}
	},
	actions: {
		addMeal: (ctx, { meal }) => ctx.commit('addMeal', meal),
		removeMeal: (ctx, { meal }) => ctx.commit('removeMeal', meal)
	}
	// plugins: [vuexLocal.plugin]
})
