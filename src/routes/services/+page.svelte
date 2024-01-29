<script lang="ts">
	import { Label, Select, Textarea, Button, Input } from 'flowbite-svelte';

	import type { PageData } from './$types';

	export let data: PageData;

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
		},
	];
</script>

<div class=" min-h-screen w-full pb-20">
	<div
		class=" bg-site flex h-[40vh] bg-no-repeat w-full items-center justify-center bg-[#808080c0] bg-cover bg-center bg-blend-multiply"
	>
		<h1 class=" text-5xl font-bold text-white">Our Services</h1>
	</div>

	<div class=" w-full py-10">
		<h1 class=" mb-10 text-center text-3xl font-bold">Services</h1>
		<div class=" mx-auto grid lg:grid-cols-3 gap-20 w-[70%]">
			{#each services as service}
				<div
					class="  flex flex-col items-center hover:bg-blue-600 text-black cursor-pointer hover:text-white transition-all duration-200 delay-100 ease-in-out space-y-5 rounded-md p-10 shadow-md shadow-gray-300"
				>
					<BriefcaseSolid />
					<hr class=" w-8" />
					<h3 class=" font-semibold">{service.name}</h3>
				</div>
			{/each}
		</div>
	</div>
</div>
