<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import engineb from '$lib/assets/WP/pressure.jpg';
	import enginew from '$lib/assets/masscali.png';
	import force from '$lib/assets/forcecali.png';

	import { CalendarMonthSolid, UserSolid } from 'flowbite-svelte-icons';
	import Footer from '$lib/components/Footer.svelte';
	import { Button } from 'flowbite-svelte';

	const equips = [
		{
			name: 'Pressure Calibration equipment',
			image: engineb
		},
		{
			name: 'Mass Calibration equipment',
			image: enginew
		},
		{
			name: 'Force Calibration equipment',
			image: force
		},
		
	];
	import Loader from '$lib/components/Loader.svelte';
	import { navigating } from '$app/stores';

	
	
</script>

{#if $navigating}
	<Loader />
	{:else}
	<div class=" w-full overflow-x-hidden">
		<Carousel />
		<section class=" lg:min-h-screen w-full bg-white pt-10">
			<h1 class=" mb-10 text-center text-xl lg:text-3xl font-semibold">See what's trending</h1>
			<div class=" mx-auto grid w-[80%] grid-cols-1 gap-10 lg:grid-cols-3">
				{#each equips as e}
					<div class=" h-fit flex lg:fit w-full flex-col justify-between space-y-10 rounded-md border-2 p-4">
						<img src={e.image} class="  w-auto h-[20em]" alt="" />
						<div class=" flex h-[20%]  flex-col  justify-end">
							<div class=" flex items-center justify-between">
								<div class=" flex items-center space-x-2">
									<CalendarMonthSolid />
									<p class=" font-medium text-gray-700">24, September 2023</p>
								</div>
								<div class=" flex items-center space-x-2">
									<UserSolid />
									<p class=" font-medium text-gray-700">{e.name}</p>
								</div>
							</div>
							<h3 class=" text-lg font-semibold">We can assit you</h3>
							<Button color="blue" type="submit" class="w-64  text-lg font-semibold">Read More</Button
							>
						</div>
					</div>
				{/each}
			</div>
		</section>
		<section class=" lg:pt-0 pt-20 mx-auto w-[80%] space-y-5 pb-5 text-lg font-medium">
			<h1 class=" text-2xl lg:text-4xl font-semibold">What is Metrology?</h1>
			<p>Metrology is the science of measurement. It covers three main activities.</p>
			<p>1. The definition of internationally accepted units of measurements. e.g the metre.</p>
			<p>
				2. The realization of units of measurements by scientific methods, e.g the realization of a
				metre through the use of lasers
			</p>
			<p>
				3. The establishment of traceability chains by determining and documenting the value and
				accuracy of measurement and dissementing that knowledge e.g the documented relationship
				between the micrmeter screw in precision engineering workshop and a primary laboratory for
				optical length metrology
			</p>
	
			<p>
				Metrology is everywhere and use measurement for so many aspects everyday. Even small things
				like telling the time is measurement. We check our Blood pressure, Sugar level, Body
				temperature. We fill our cars with fuel by volume, we buy our groceries by wight, we consume
				electricity, gas and water which are billed based on measurements. On the other hand metrology
				aids fair trade by having harmonized written standards, consistent measurement standards and
				internationally accepted certificates.
			</p>
		</section>
		<Footer />
	</div>
{/if}


