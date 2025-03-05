<script lang="ts">
	import { Label, Select, Textarea, Button, Input } from 'flowbite-svelte';

	import type { PageData } from './$types';

	const productData = {
		name: '',
		brand: '',
		price: '',
		description: ''
	};

	let selected = 'phone';
	let items = [
		{ value: 'mass', name: 'Mass Calibration' },
		{ value: 'temperature', name: 'Temperature Calibration' },
		{ value: 'pressure', name: 'Pressure Calibration' }
	];

	import {
		AdressBookOutline,
		ClipboardCheckSolid,
		CodeForkSolid,
		BriefcaseSolid,
		MailBoxSolid,
		TruckSolid
	} from 'flowbite-svelte-icons';

	const services = [
		{
			name: 'Autoclaves',
			icon: BriefcaseSolid
		},
		{
			name: 'Freeze Drying',
			icon: BriefcaseSolid
		},
		{
			name: 'Conductivity Sensor',
			icon: BriefcaseSolid
		},
		{
			name: 'PH sensors',
			icon: BriefcaseSolid
		},
		{
			name: 'Depyrogenation',
			icon: BriefcaseSolid
		},
		{
			name: 'Super Freezers',
			icon: BriefcaseSolid
		},
		{
			name: 'Refrigiration Equipment',
			icon: BriefcaseSolid
		},
		{
			name: 'Incubators',
			icon: BriefcaseSolid
		},
		{
			name: 'Crystalline growing chambers',
			icon: BriefcaseSolid
		},
		{
			name: 'Test chambers',
			icon: BriefcaseSolid
		}
	];

	import Loader from '$lib/components/Loader.svelte';
	import { navigating } from '$app/stores';
</script>

{#if $navigating}
	<Loader />
{:else}
	<div class=" min-h-screen w-full pb-20">
		<div
			class=" flex h-[40vh] w-full items-center justify-center bg-[#808080c0] bg-site bg-cover bg-center bg-no-repeat bg-blend-multiply"
		>
			<h1 class=" text-5xl font-bold text-white">Our Services</h1>
		</div>

		<div class=" w-full py-10">
			<h1 class=" mb-10 text-center text-3xl font-bold">Services</h1>
			<div class=" mx-auto grid w-[70%] gap-20 lg:grid-cols-3">
				{#each services as service}
					<div
						class="  flex cursor-pointer flex-col items-center space-y-5 rounded-md p-10 text-black shadow-md shadow-gray-300 transition-all delay-100 duration-200 ease-in-out hover:bg-blue-600 hover:text-white"
					>
						<BriefcaseSolid />
						<hr class=" w-8" />
						<h3 class=" font-semibold">{service.name}</h3>
					</div>
				{/each}
			</div>
		</div>
	</div>
{/if}
