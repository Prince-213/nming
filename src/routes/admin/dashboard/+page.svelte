<script lang="ts">
	import { Input, Label, Modal, Select } from 'flowbite-svelte';

	import Loader from '$lib/components/Loader.svelte';

	let defaultUpdateModal = false;
	let closeModal = false;

	let items = [
		{ value: true, name: 'FINISHED' },
		{ value: false, name: 'PENDING' }
	];

	let selected;
	let countries = [
		{ value: false, name: 'DISABLED' },
		{ value: true, name: 'ENABLED' }
	];

	const productData = {
		state: false,
		email: '',
		category: false
	};

	let defaultModal = false;
	const handleCancel = () => {
		defaultModal = false;
	};

	const handleUpdate = async (id: any, status: boolean) => {
		const { data, error } = await supabase
			.from('nmi_requests')
			.update({ status: !status })
			.eq('id', id)
			.select();

		invalidateAll();
	};

	const handleDelete = async (id: any) => {
		const { error } = await supabase.from('nmi_requests').delete().eq('id', id);
		invalidateAll();
	};

	import { goto, invalidateAll } from '$app/navigation';

	$: path = $page.url.pathname;

	export let data;

	import { navigating, page } from '$app/stores';

	import { Button, Checkbox, ListPlaceholder, WidgetPlaceholder } from 'flowbite-svelte';

	import { EditOutline, TrashBinOutline } from 'flowbite-svelte-icons';

	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell,
		TableSearch
	} from 'flowbite-svelte';
	import { supabase } from '$lib/supabaseClient.js';
	let searchTerm = '';

	$: filtereditems = data.data;

	$: filteredItems = filtereditems?.filter(
		(item) => item['name'].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
	);

	const formattedDate = (value: any) => {
		const inputDateString = value;
		const inputDate = new Date(inputDateString);
		const options = { year: 'numeric', month: 'short', day: 'numeric' };
		const formattedDates = inputDate.toLocaleDateString('en-US', options);

		return formattedDates;
	}

	
</script>

<div class=" mx-auto w-full">
	{#if $navigating}
		<Loader />
	{:else}
		<div class=" mx-auto w-[85%] overflow-x-scroll pt-[10vh] lg:overflow-x-hidden">
			<TableSearch
				placeholder="Search by maker name"
				striped={true}
				hoverable={true}
				bind:inputValue={searchTerm}
			>
				<TableHead>
					<TableHeadCell>S/N</TableHeadCell>
					<TableHeadCell>Id</TableHeadCell>
					<TableHeadCell>Date Requested</TableHeadCell>
					<TableHeadCell>Name</TableHeadCell>
					<TableHeadCell>Email</TableHeadCell>
					<TableHeadCell>Brand</TableHeadCell>
					<TableHeadCell>Service</TableHeadCell>
					<TableHeadCell>Status</TableHeadCell>
					<TableHeadCell>Manage</TableHeadCell>
				</TableHead>
				<TableBody>
					{#each filteredItems as item, idx}
						<TableBodyRow>
							<TableBodyCell>{idx + 1}</TableBodyCell>
							<TableBodyCell>{item.id}</TableBodyCell>
							<TableBodyCell>{formattedDate(item.created_at)}</TableBodyCell>
							<TableBodyCell>{item.name}</TableBodyCell>
							<TableBodyCell>{item.email}</TableBodyCell>
							<TableBodyCell>
								{item.brand}
							</TableBodyCell>
							<TableBodyCell>
								{item.service}
							</TableBodyCell>

							<TableBodyCell>
								{#if item.status}
									<Button class=" bg-emerald-500 font-semibold text-white hover:bg-emerald-400"
										>Completed</Button
									>
								{:else}
									<Button class=" bg-yellow-500 font-semibold text-white hover:bg-yellow-400"
										>Pending</Button
									>
								{/if}
							</TableBodyCell>

							<TableBodyCell>
								<Button
									class=" bg-transparent font-semibold text-white hover:bg-transparent"
									on:click={() => (defaultModal = true)}><EditOutline class=" text-black" /></Button
								>

								<Button
									class=" bg-transparent font-semibold text-white hover:bg-transparent"
									on:click={() => (closeModal = true)}><TrashBinOutline class=" text-black" /></Button
								>
							</TableBodyCell>
						</TableBodyRow>
						<Modal
							title=""
							bind:open={closeModal}
							autoclose
							size="sm"
							class="flex w-full flex-col items-center"
						>
							<div class=" mx-auto flex w-[80%] items-center justify-center">
								<TrashBinOutline class=" h-24 w-24 text-center text-gray-500" />
							</div>

							<p class="mb-4 text-center text-gray-500 dark:text-gray-300">
								Are you Sure you want to delete this job
							</p>
							<div class="flex items-center justify-center space-x-4">
								<Button color="light" on:click={handleCancel}>No, cancel</Button>
								<Button color="red" on:click={() => handleDelete(item.id)}
									>Yes, I'm sure</Button
								>
							</div>
						</Modal>

						<Modal
							title=""
							bind:open={defaultModal}
							autoclose
							size="sm"
							class="flex w-full flex-col items-center"
						>
							<div class=" mx-auto flex w-[80%] items-center justify-center">
								<EditOutline class=" h-24 w-24 text-center text-gray-500" />
							</div>

							<p class="mb-4 text-center text-gray-500 dark:text-gray-300">
								Are you sure you want to update the job status?
							</p>
							<div class="flex items-center justify-center space-x-4">
								<Button color="light" on:click={handleCancel}>No, cancel</Button>
								<Button color="red" on:click={() => handleUpdate(item.id, item.status)}
									>Yes, I'm sure</Button
								>
							</div>
						</Modal>
					{/each}
				</TableBody>
			</TableSearch>
		</div>
	{/if}
</div>
