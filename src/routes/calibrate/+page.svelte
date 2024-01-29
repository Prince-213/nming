<script lang="ts">
	import { Label, Select, Spinner, Button, Input } from 'flowbite-svelte';

	import type { PageData } from './$types';

	import emailjs from '@emailjs/browser';
	import { fade } from 'svelte/transition';
	import { supabase } from '$lib/supabaseClient';

	export let data: PageData;

	const productData = {
		name: '',
		email: '',
		brand: ''
	};

	let sending = false;

	const insert = async () => {
		
	};

	const contactUs = async () => {
		sending = true;
		try {
			await emailjs.send(
				'service_uek7haf',
				'template_7sbbhg6',
				{
					from_name: `${productData.name} with email address ${productData.email}`,
					to_name: 'Admin',
					message: ` A NEW CALIBRATION REQUEST \n Needed brand: ${productData.brand} \n Needed service: ${selected}`
				},
				'lXy3uMKebxhwBPRWt'
			);

            const { data, error } = await supabase
			.from('nmi_requests')
			.insert([{ name: productData.name, email: productData.email, brand: productData.brand, service: selected }])
			.select();

			sending = false;
		} catch (error) {
		} finally {
		}
	};

	let selected = 'Mass Calibration';
	let items = [
		{ value: 'Mass Calibration', name: 'Mass Calibration' },
		{ value: 'Temperature Calibration', name: 'Temperature Calibration' },
		{ value: 'Pressure Calibration', name: 'Pressure Calibration' }
	];
</script>

<div class=" flex min-h-screen w-full py-[10vh]">
	<form class=" mx-auto w-[80%]">
		<div class="mb-4 grid gap-x-20 gap-y-10 sm:grid-cols-2">
			<div>
				<Label for="name" class="mb-2">Name</Label>
				<Input
					type="text"
					name="name"
					id="name"
					placeholder=""
					bind:value={productData.name}
					required
				/>
			</div>
			<div>
				<Label for="price" class="mb-2">Email</Label>
				<Input
					type="email"
					id="email"
					name="email"
					placeholder=""
					bind:value={productData.email}
					required
				/>
			</div>
			<div>
				<Label for="brand" class="mb-2">Brand</Label>
				<Input type="text" id="brand" placeholder="" bind:value={productData.brand} required />
			</div>

			<div>
				<Label
					>Service
					<Select name="service" class="mt-2" {items} bind:value={selected} required />
				</Label>
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
	</form>
</div>
