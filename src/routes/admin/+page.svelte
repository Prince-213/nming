<script lang="ts">
	import { Section, Register } from 'flowbite-svelte-blocks';
	import { Button, Checkbox, Label, Input, Spinner, Toast } from 'flowbite-svelte';
    import { CloseCircleSolid, CheckCircleSolid, CheckCircleOutline } from 'flowbite-svelte-icons'
    import { page } from '$app/stores';
	import { enhance } from '$app/forms';
	import { goto, invalidateAll } from '$app/navigation';
	import { slide } from 'svelte/transition';

	import Loader from '$lib/components/Loader.svelte';
	import { navigating } from '$app/stores';
    export let form

    const redirectTo = $page.url.searchParams.get('redirectTo') || '/';

    let sending = false

    const confirm = async () => {
        if (!form?.error) {
            new Promise(resolve => setTimeout(resolve, 1000))
            goto('/admin/dashboard')
        }
        
    }

    type form = {
		email: string;
		password: string;
	};

	let formData: form = {
		email: '',
		password: ''
	};
</script>

{#if $navigating}
	<Loader />
	{:else}
	<div class=" lg:w-[50%] w-[85%]  mx-auto">
		<Section name="login">
			<Register href="/">
				<svelte:fragment slot="top">
					<div>
						<h2 class=" font-bold text-3xl">NMI Nigeria</h2>
						<p>For Nigerians</p>
					</div>
				</svelte:fragment>
				<div class="space-y-4 p-6 sm:p-8 md:space-y-6">
					<form class="flex flex-col space-y-6" 
					method="post"
					use:enhance={() => {
						sending = true;
						return ({ update }) => {
							update().finally(async () => {
								sending = false;
								// Optionally if you'd like to reload the data for the current page after form submission.
								// This is the default behavior for use:enhance.
								await invalidateAll();
								
								await confirm();
							});
						};
					}}
					action="?/login&redirectTo={redirectTo}">
						<h3 class="p-0 text-xl font-medium text-gray-900 dark:text-white">Admin Authorization</h3>
						<Label class="space-y-2">
							<span>Your email</span>
							<Input type="email" name="email" bind:value={formData.email} placeholder="name@company.com" required />
						</Label>
						<Label class="space-y-2">
							<span>Your password</span>
							<Input type="password" name="password" bind:value={formData.password} placeholder="•••••" required />
						</Label>
					
						<button
						type="submit"
						class=" py-3 lg:min-w-[20%] mx-auto flex items-center space-x-5 px-8 border-[#BBBFC1] border-2 rounded-md hover:font-medium transition-all duration-100"
					>
						<p>Log In</p>
						{#if sending}
							<Spinner currentColor="black" class={` w-6 h-6 `} currentFill="white" />
						{:else if form}
							{#if form.error}
								<CloseCircleSolid class=" text-red-500" />
							{:else}
								<CheckCircleOutline class=" text-emerald-500" />
							{/if}
						{:else}
							<p></p>
						{/if}
					</button>
					{#if form}
						{#if form.error}
							<Toast color="red" transition={slide}>
								<svelte:fragment slot="icon">
									<CloseCircleSolid class="w-5 h-5" />
									<span class="sr-only">Error icon</span>
								</svelte:fragment>
								{form?.message || ''}
							</Toast>
						{:else}
							<Toast transition={slide} color="green">
								<svelte:fragment slot="icon">
									<CheckCircleSolid class="w-5 h-5" />
									<span class="sr-only">Check icon</span>
								</svelte:fragment>
								{form?.message || ''}
							</Toast>
						{/if}
					{:else}
						<p></p>
					{/if}
					
					</form>
				</div>
			</Register>
		</Section>
	</div>
{/if}




