<script lang="ts">
	import Loader from '$lib/components/Loader.svelte';
	import { navigating } from '$app/stores';
	import { Label, Select, Textarea, Button, Input, Spinner } from 'flowbite-svelte';

	import emailjs from '@emailjs/browser';

	

	import type { PageData } from './$types';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	

	let message: string = ''

	const productData = {
		name: '',
		email: '',

		message: ''
	};

	let sending = false;

	const contactUs = async () => {
		sending = true;
		try {
			await emailjs.send(
				'service_uek7haf',
				'template_7sbbhg6',
				{
					from_name: `${productData.name} with email address ${productData.email}`,
					to_name: 'Admin',
					message: ` ${productData.message}`
				},
				'lXy3uMKebxhwBPRWt'
			);

			

			sending = false;
		} catch (error) {
			if (!error) {
                productData.name = ''
                productData.email = ''
                productData.message = ''
                message = 'Submitted Successfully!'
            } else {
                message = 'Unsuccessful!'
            }
		} finally {
		}
	};

	onMount(() => {});
</script>

{#if $navigating}
	<Loader />

	{:else}
	<div class=" min-h-screen w-full overflow-x-hidden">
		<div
			class=" flex h-[40vh] w-full items-center justify-center bg-[#808080c0] bg-no-repeat bg-site bg-cover bg-center bg-blend-multiply"
		>
			<h1 class=" text-3xl lg:text-5xl font-bold text-white">About Us</h1>
		</div>
		<div class=" w-full">
			<div class=" mx-auto w-[90%] lg:w-[80%] pt-[10vh] lg:pt-[25vh]">
				<div class=" relative h-[40vh] lg:h-[80vh] w-full lg:w-[70%] rounded-sm bg-plan bg-cover bg-center">
					<div
						class=" absolute lg:-right-[20em] lg:top-[6vh] h-fit w-[95%] -right-[-2.5%] top-[20vh] lg:w-[60%] space-y-5 rounded-sm bg-blue-700 p-10"
					>
						<div class=" space-y-2 text-white">
							<h1 class=" lg:text-3xl text-xl font-bold">Our Mission</h1>
							<p class=" lg:text-base lg:line-clamp-none line-clamp-[15] text-sm">
								At NMI Nigeria, our mission is to redefine precision through innovative metrology
								solutions. We are dedicated to empowering industries with cutting-edge measurement
								technologies that ensure accuracy, reliability, and efficiency in every dimension.
								Committed to exceeding client expectations, we strive to be the forefront partner in
								advancing quality control, research, and manufacturing processes. By leveraging our
								expertise, state-of-the-art equipment, and a passion for precision, we aim to inspire
								confidence in measurements, driving progress and excellence across diverse sectors. At
								NMI Nigeria, we don't just measure; we redefine precision for a world that demands
								utmost accuracy.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class=" w-full mt-[5vh] lg:mt-0 ">
			<div class=" w-[80%] pt-[25vh] lg:ml-[30%] mx-auto">
				<div class=" relative h-[40vh] lg:h-[80vh] w-full lg:w-[70%] rounded-sm bg-plan bg-cover bg-center">
					<div
						class=" absolute lg:-left-[20em] lg:top-[6vh] h-fit w-[95%] -left-[-2.5%] top-[20vh] lg:w-[60%] space-y-5 rounded-sm bg-blue-700 p-10"
					>
						<div class=" space-y-2 text-white">
							<h1 class=" text-sm lg:text-3xl font-bold">Our Vision</h1>
							<p class=" text-sm lg:line-clamp-none line-clamp-[15] lg:text-base">
								At NIM Nigeria, we envision a future where precision is the cornerstone of
								technological advancement and quality assurance across global industries. Our
								commitment lies in pioneering metrology solutions that transcend boundaries, setting
								new standards for accuracy, reliability, and technological innovation. We aspire to be
								the foremost choice for organizations seeking unparalleled measurement excellence,
								continually pushing the boundaries of what is possible. Through a culture of
								continuous improvement and collaboration, we aim to be the driving force behind
								transformative advancements in metrology, contributing to a world where precision is
								not just a requirement but a catalyst for progress. Our vision is to be the catalyst
								for precision in a world that aspires to achieve excellence.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class=" w-full mt-[5vh] pb-[30vh] lg:pb-0 lg:mt-0">
			<div class=" mx-auto w-[80%] pt-[25vh]">
				<div class=" relative h-[40vh] lg:h-[80vh] w-full lg:w-[70%] rounded-sm bg-plan bg-cover bg-center">
					<div
						class=" absolute lg:-right-[20em] lg:top-[6vh] h-fit w-[95%] -right-[-2.5%] top-[20vh] lg:w-[60%] space-y-5 rounded-sm bg-blue-700 p-10"
					>
						<div class=" space-y-2 text-white">
							<h1 class=" text-xl lg:text-3xl font-bold">Our Core Values</h1>
							<p class=" text-sm lg:text-base lg:line-clamp-none line-clamp-[15]">
								Precision Excellence: We uphold an unwavering commitment to delivering precision
								excellence in all our metrology solutions. Accuracy is not just a goal; it is the
								standard by which we measure our success. 
								Innovation Prowess: We foster a culture of
								continuous innovation, pushing the boundaries of metrology to develop cutting-edge
								solutions. Embracing change and staying ahead of technological trends, we strive to be
								leaders in innovation within our industry. 
								Customer-Centric Focus: Our customers are
								at the heart of everything we do. We are dedicated to understanding their unique needs
								and providing tailored metrology solutions that exceed expectations. Building
								long-term partnerships based on trust and satisfaction is our priority.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class=" mt-10 w-full bg-gray-100 py-10">
			<h1 class=" text-center text-3xl font-bold">Contact Us</h1>
			<form class=" mx-auto mt-10 w-[80%]">
				<div class="mb-4 grid gap-4 sm:grid-cols-2">
					<div>
						<Label for="name" class="mb-2">Name</Label>
						<Input
							type="text"
							id="name"
							name="name"
							placeholder=""
							bind:value={productData.name}
							required
						/>
					</div>
					<div>
						<Label for="brand" class="mb-2">Email</Label>
						<Input
							type="email"
							id="email"
							name="email"
							placeholder=""
							bind:value={productData.email}
							required
						/>
					</div>
	
					<div class="sm:col-span-2">
						<Label for="description" class="mb-2">Message</Label>
						<Textarea
							id="message"
							placeholder="Your description here"
							rows="4"
							name="message"
							required
							bind:value={productData.message}
						/>
					</div>
					<div class="flex items-center space-x-4">
						<Button
							color="blue"
							on:click={contactUs}
							class="flex w-64 items-center space-x-3  text-lg font-semibold"
						>
							<p>Submit</p>
							{#if sending}
								<div transition:fade>
									<Spinner size="5" color="white" />
								</div>
							{/if}
						</Button>
					</div>
				</div>
				<p class=" text-sm lg:text-lg font-medium text-black">{message}</p>
			</form>
		</div>
	</div>
{/if}


