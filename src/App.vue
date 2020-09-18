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
		},
		methods: {
			fromBinary(binary) {
				const bytes = new Uint8Array(binary.length)
				for (let i = 0; i < bytes.length; i++) {
					bytes[i] = binary.charCodeAt(i)
				}
				return String.fromCharCode(...new Uint16Array(bytes.buffer))
			},
			decodeState(hash) {
				const base64 = decodeURIComponent(hash)
				const binary = atob(base64)
				const state = this.fromBinary(binary)
				return JSON.parse(state)
			}
		},
		mounted() {
			const hash = window.location.hash

			if (hash) {
				const state = this.decodeState(
					hash.startsWith('#') ? hash.substr(1) : hash
				)
				if (
					Object.hasOwnProperty.call(state, 'ingredients') &&
					Object.hasOwnProperty.call(state, 'days')
				) {
					this.$store.replaceState(state)
				}
			}
		}
	}
</script>
