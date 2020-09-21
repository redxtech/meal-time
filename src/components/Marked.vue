<template>
	<!-- eslint-disable-next-line vue/no-v-html -->
	<div :class="markedClass" v-html="compiled" />
</template>

<script>
	import marked from 'marked'
	import dedent from 'dedent'
	import DOMPurify from 'dompurify'

	export default {
		name: 'Marked',
		props: {
			dedent: {
				type: Boolean,
				required: false,
				default: true
			},
			markdown: {
				type: String,
				required: false,
				default: ''
			},
			markedClass: {
				type: String,
				required: false,
				default: 'markdown'
			},
			options: {
				type: Object,
				required: false,
				default: () => {
					return { gfm: true }
				}
			}
		},
		computed: {
			compiled() {
				// If using the markdown prop, disregard the slot content
				const markdown = this.markdown
					? this.markdown
					: this.$slots.default
					? this.$slots.default[0].text
					: ''

				// Pass the markdown through dedent
				const stripped = this.dedent ? dedent(markdown) : markdown

				// Parse the markdown with marked and then sanitize it
				return DOMPurify.sanitize(marked(stripped, this.options))
			}
		}
	}
</script>

<style>
	.prose-sm ol > li {
		margin-top: 0;
		margin-bottom: 0;
		padding-left: 1rem !important;
	}
</style>
