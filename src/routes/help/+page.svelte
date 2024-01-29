<script lang="ts">
	import Loader from '$lib/components/Loader.svelte';
	import { navigating } from '$app/stores';

	const faq = [
		{
			question: 'What is metrology?',
			answer:
				'Metrology is the science of measurement, including both theoretical and practical aspects of measurement.'
		},
		{
			question: 'Why is metrology important in various industries?',
			answer:
				'Metrology ensures accuracy and reliability in measurements, critical for quality control, standardization, and compliance with industry regulations.'
		},
		{
			question: 'What are the main types of metrology?',
			answer:
				'The main types of metrology include dimensional metrology, mechanical metrology, electrical metrology, and optical metrology.'
		},
		{
			question: 'How is metrology used in manufacturing processes?',
			answer:
				'Metrology is employed in manufacturing to verify the dimensions and quality of products, ensuring they meet specified standards and tolerances.'
		},
		{
			question: 'What is a calibration certificate in metrology?',
			answer:
				'A calibration certificate is a document that provides information about the accuracy and traceability of a measuring instrument, following a calibration process.'
		},
		{
			question: 'How does metrology contribute to international standards?',
			answer:
				'Metrology plays a crucial role in the establishment and maintenance of international measurement standards, ensuring consistency and comparability worldwide.'
		},
		{
			question: 'What is the role of precision in metrology?',
			answer:
				'Precision in metrology refers to the degree of repeatability and consistency in measurements, crucial for obtaining reliable and accurate results.'
		},
		{
			question: 'How is metrology applied in the field of medicine?',
			answer:
				'Metrology is used in medical applications to ensure accurate measurements of instruments, devices, and dosages, contributing to the precision of medical treatments.'
		},
		{
			question: 'What is the significance of metrological traceability?',
			answer:
				'Metrological traceability ensures that measurement results can be related to internationally recognized standards, providing confidence in the accuracy of measurements.'
		},
		{
			question: 'How does metrology address the challenges of emerging technologies?',
			answer:
				'Metrology adapts to emerging technologies by developing new measurement techniques and standards, ensuring accurate and reliable measurements in rapidly evolving fields.'
		}
	];
</script>

{#if $navigating}
	<Loader />
	{:else}
	<section class="bg-white dark:bg-gray-900">
		<div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
			<h2 class="mb-8 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
				Frequently asked questions
			</h2>
			<div
				class="grid border-t border-gray-200 pt-8 text-left dark:border-gray-700 md:grid-cols-2 lg:gap-5 md:gap-16"
			>
				{#each faq as fact }
				<div>
	
					<div class="mb-10">
						<h3 class="mb-4 flex items-center text-lg font-medium text-gray-900 dark:text-white">
							<svg
								class="mr-2 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path
									fill-rule="evenodd"
									d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
									clip-rule="evenodd"
								></path></svg
							>
							{fact.question}
						</h3>
						<p class="text-gray-500 dark:text-gray-400">
							{fact.answer}
						</p>
					</div>
				</div>
				{/each}
				
			</div>
		</div>
	</section>
	

{/if}


<style>
</style>
