<script>
	import {
		Footer,
		FooterCopyright,
		FooterLinkGroup,
		FooterLink,
		FooterBrand,
		FooterIcon
	} from 'flowbite-svelte';
	import { FacebookSolid, GithubSolid, DiscordSolid, TwitterSolid } from 'flowbite-svelte-icons';
	
</script>

<footer class=" w-full bg-[#121212]">
    <Footer class=" w-[85%] mx-auto bg-transparent text-white" footerType="socialmedia">
        <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
                <div>
                    <h2 class=" font-bold text-3xl">NMI Nigeria</h2>
                    <p>For Nigerians</p>
                </div>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
                <div>
                    <h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                        Resources
                    </h2>
                    <FooterLinkGroup>
                        <FooterLink liClass="mb-4" href="/">Flowbite</FooterLink>
                        <FooterLink liClass="mb-4" href="/">Tailwind CSS</FooterLink>
                    </FooterLinkGroup>
                </div>
                <div>
                    <h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                        Follow us
                    </h2>
                    <FooterLinkGroup>
                        <FooterLink liClass="mb-4" href="/">GitHub</FooterLink>
                        <FooterLink liClass="mb-4" href="/">Discord</FooterLink>
                    </FooterLinkGroup>
                </div>
                <div>
                    <h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Legal</h2>
                    <FooterLinkGroup>
                        <FooterLink liClass="mb-4" href="/">Privacy Policy</FooterLink>
                        <FooterLink liClass="mb-4" href="/">Terms & Conditions</FooterLink>
                    </FooterLinkGroup>
                </div>
            </div>
        </div>
        <hr class="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
            <FooterCopyright href="/" by="Flowbite™" />
            <div class="mt-4 flex space-x-6 sm:mt-0 sm:justify-center rtl:space-x-reverse">
                <FooterIcon href="/">
                    <FacebookSolid
                        class="h-4 w-4 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
                    />
                </FooterIcon>
                <FooterIcon href="/">
                    <DiscordSolid
                        class="h-4 w-4 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
                    />
                </FooterIcon>
                <FooterIcon href="/">
                    <TwitterSolid
                        class="h-4 w-4 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
                    />
                </FooterIcon>
                <FooterIcon href="/">
                    <GithubSolid
                        class="h-4 w-4 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
                    />
                </FooterIcon>
                
            </div>
        </div>
    </Footer>
</footer>

