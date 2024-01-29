<script lang="ts">
	import { Navbar, NavBrand, NavHamburger, NavUl, NavLi, MegaMenu } from 'flowbite-svelte';
	import { IconOutline, ChevronDownOutline } from 'flowbite-svelte-icons';
	let menu = [
		{ name: 'Our Vision', href: '/about', icon: 'user-circle-outline' },
		{ name: 'Our Mission', href: '/blog', icon: 'user-circle-outline' },
		{ name: 'Core Values', href: '/contact', icon: 'user-circle-outline' },
		{ name: 'Contact Us', href: '/library', icon: 'user-circle-outline' },
		
	];
</script>

<header class=" z-50 w-full bg-[#121212]">
    <Navbar class=" z-50 text-white bg-transparent py-4 w-[85%] mx-auto" let:hidden let:toggle>
        <NavBrand href="/">
            <div>
                <h2 class=" font-bold text-3xl">NMI Nigeria</h2>
                <p>For Nigerians</p>
            </div>
        </NavBrand>
        <NavHamburger on:click={toggle} />
        <NavUl class=" z-50" activeUrl='/' activeClass=' lg:text-gray-400 font-medium text-[16px] font-semibold' nonActiveClass='  font-medium text-[16px] lg:text-white hover:font-semibold' {hidden}>
            <NavLi href="/">Home</NavLi>
            <NavLi class="cursor-pointer">
                About Us<ChevronDownOutline class="ms-2 inline h-3 w-3 text-white dark:text-white" />
            </NavLi>
            <MegaMenu ulClass=' z-50 bg-black flex flex-col gap-y-4' class=" bg-[#121212] text-white border-none " items={menu} let:item>
                <a
                    href={'/about'}
                    class="flex items-center bg-transparent hover:text-primary-600 dark:hover:text-primary-500"
                >
                    <span class="sr-only bg-transparent">{item.name}</span>
                    <svelte:component this={IconOutline} name={item.icon} class="me-2 h-4 w-4 bg-transparent" />{item.name}
                </a>
            </MegaMenu>
            <NavLi href="/services">Our Services</NavLi>
            <NavLi href="/calibrate">Calibration Request</NavLi>
            <NavLi href="/help">Help</NavLi>
        </NavUl>
    </Navbar>
</header>

