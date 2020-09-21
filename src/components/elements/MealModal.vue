<template>
	<div v-if="open" class="fixed z-10 inset-0 overflow-y-auto">
		<div
			class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
		>
			<transition
				enter-active-class="ease-out duration-300"
				enter-class="opacity-0"
				enter-to-class="opacity-100"
				leave-active-class="ease-in duration-200"
				leave-class="opacity-100"
				leave-to-class="opacity-0"
			>
				<div class="fixed inset-0 transition-opacity">
					<div class="absolute inset-0 bg-gray-500 opacity-75"></div>
				</div>
			</transition>

			<!-- This element is to trick the browser into centering the modal contents. -->
			<span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span
			>&#8203;
			<transition
				enter-active-class="ease-out duration-300"
				enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
				enter-to-class="opacity-100 translate-y-0 sm:scale-100"
				leave-active-class="ease-in duration-200"
				leave-class="opacity-100 translate-y-0 sm:scale-100"
				leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
			>
				<div
					class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
					role="dialog"
					aria-modal="true"
					aria-labelledby="modal-headline"
				>
					<div class="sm:flex sm:items-start">
						<div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
							<h3
								class="text-lg leading-6 font-medium text-gray-900"
								id="modal-headline"
								v-text="meal.title"
							/>
							<h4
								class="text-base leading-6 font-medium text-gray-500"
								v-text="meal.description"
							/>
							<div class="mt-2">
								<h5 class="text-base leading-6 font-bold text-gray-700">
									Directions:
								</h5>
								<marked :markdown="meal.directions" marked-class="prose" />
							</div>
							<div class="mt-2">
								<p class="text-base leading-5 text-gray-700">
									<span class="font-bold">Type: </span> {{ meal.type }}
								</p>
								<p class="text-base leading-5 text-gray-700">
									<span class="font-bold">Mealtimes: </span>
									{{ meal.mealtimes.join(', ') }}
								</p>
							</div>
						</div>
					</div>
					<div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
						<span
							class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto"
						>
							<btn type="secondary" colour="red" @click="closeModal">Close</btn>
						</span>
					</div>
				</div>
			</transition>
		</div>
	</div>
</template>

<script>
	import Btn from './Btn.vue'
	import Marked from '../Marked.vue'
	export default {
		name: 'MealModal',
		components: { Marked, Btn },
		props: {
			open: {
				type: Boolean,
				required: false,
				default: false
			},
			meal: {
				type: Object,
				required: true
			}
		},
		methods: {
			closeModal() {
				this.$emit('close')
			}
		}
	}
</script>
