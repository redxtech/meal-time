<template>
	<sec id="ingredients">
		<section-title>Ingredients</section-title>
		<div class="ingredients">
			<div v-for="ingredient in Object.keys(ingredients)" :key="ingredient">
				<p v-if="ingredients[ingredient].count">
					{{ ingredients[ingredient].count }} x {{ ingredient
					}}{{ ingredients[ingredient].uncounted ? '*' : '' }}
				</p>
				<p v-else v-text="ingredient" />
			</div>
		</div>
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
