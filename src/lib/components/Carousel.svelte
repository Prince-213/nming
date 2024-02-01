<script lang="ts">
	
    import imagef from '$lib/assets/pexels-anamul-rezwan-1216589.jpg'
    import imaget from '$lib/assets/pexels-mike-bird-190574.jpg'
	import { Button } from 'flowbite-svelte';

	import { onMount } from 'svelte';
	const images = [
		{
			alt: 'Cosmic timetraveler',
			src: imagef,
			title: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com'
		},
		{
			alt: 'Cristina Gottardi',
			src: imaget,
			title: 'cristina-gottardi-CSpjU6hYo_0-unsplash.com'
		},
		
	];
	import { ChevronDoubleLeftOutline, ChevronDoubleRightOutline } from 'flowbite-svelte-icons'
	


	let number: number = 0

	
	
	const toggleNext = () => {
		if (number != 200) {
			number += 100
			console.log(number)
		}else if (number = 300) {
			number = 0
		}
		
	}
	
	const togglePrev = () => {
		if (number != 0 ) {
			number -= 100
			console.log(number)
		}
		
	}

	setInterval(toggleNext, 4000)
	

</script>

<div class={` w-[100vw] relative flex text-[Quick]`}>
	<div class=" absolute w-[90vw] z-50 left-[5vw] top-[50%] lg:top-[50%] text-white flex items-center justify-between">
		<Button color='blue' on:click={togglePrev}  class=" cursor-pointer flex items-center justify-center w-[30px] h-[40px] lg:w-[60px] lg:h-[60px] rounded-[50%]">
			<ChevronDoubleLeftOutline class=" w-4 lg:w-6" />
		</Button>

		<Button color='blue' on:click={toggleNext}  class=" cursor-pointer flex items-center justify-center w-[30px] h-[40px] lg:w-[60px] lg:h-[60px] rounded-[50%]">
			<ChevronDoubleRightOutline class=" w-4 lg:w-6" />
		</Button>
		
		
	</div>
	<div style={`transform: translateX(-${number}vw)`}    class={` w-[300vw] -translate-x-[${number}vw] transition-all delay-75 duration-150 ease-in-out flex`}>
		<div class={` w-[100vw] flex items-center h-[50vh] lg:h-screen bg-[#00000053] bg-blend-multiply bg-engineer bg-center bg-cover `}>
			<div class=" w-[50%] space-y-6 mx-auto">
			
				
			</div>
		</div>
	
		<div class={` w-[100vw] flex items-center h-[50vh] lg:h-screen bg-[#00000065] bg-blend-multiply bg-engine bg-center bg-cover `}>
			<div class=" w-[50%] space-y-6 mx-auto">
				
				
			</div>
		</div>

		<div class={` w-[100vw] flex items-center h-[50vh] lg:h-screen bg-[#00000065] bg-blend-multiply bg-plan bg-cover `}>
			<div class=" w-[50%] space-y-6 mx-auto">
				
				
			</div>
		</div>
	</div>
	
	
</div>
