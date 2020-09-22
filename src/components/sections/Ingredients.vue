<template>
	<sec id="ingredients">
		<section-title>Ingredients</section-title>
		<ul class="ingredients prose">
			<li v-for="ingredient in Object.keys(ingredients)" :key="ingredient">
				<span v-if="ingredients[ingredient].count" class="prefix">
					{{ ingredients[ingredient].count }} x
				</span>
				{{ ingredient
				}}{{
					ingredients[ingredient].count && ingredients[ingredient].uncounted
						? '*'
						: ''
				}}
			</li>
		</ul>
	</sec>
</template>

<script>
	import { mapGetters } from 'vuex'

	import Sec from '../layout/Sec.vue'
	import SectionTitle from '../titles/SectionTitle.vue'

	export default {
		name: 'Ingredients',
		components: { Sec, SectionTitle },
		computed: {
			...mapGetters(['ingredients'])
		}
	}
</script>

<style scoped>
	.ingredients {
		@apply text-gray-800;

		.prefix {
			color: #6b7280;
		}

		li {
			margin-top: 0.1rem !important;
			margin-bottom: 0.1rem !important;

			&:first-child {
				margin-top: 0 !important;
			}

			&:last-child {
				margin-bottom: 0 !important;
			}
		}
	}
</style>
