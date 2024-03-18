<template>
	<header class=" flex items-center justify-between gap-4 py-4 container ">
		<div class="cent xl:gap-12 gap-6  ">
			<a href="/">
				<img src="/logo.svg" alt="" class="lg:max-w-[100px] h-8">
			</a>
			<nav class="max-lg:hidden cent lg:gap-12 gap-6 ">
				<a v-for="         i         in         navLinks        " :key=" i.name " href=""
					class=" relative group ">
					<div class="cent gap-2">
						<span class="">{{ i.name }}</span> <span v-if=" i.nested "><img
								src="https://assets-global.website-files.com/60b64e5e7e0ea41f8673bebb/629a0bac4f71e36b3588c799_Vector.svg"
								alt="" class="rotate-180"></span>
					</div>
					<div v-if=" i.nested "
						class=" absolute top-5 center_absloute hidden group-hover:block z-50 duration-300   pt-2.5">
						<div class="bg-white rounded-md grid md:min-w-[373px] overflow-hidden"
							:class=" i.name == 'More' ? ' md:grid-cols-2 md:min-w-[746px]' : ' ' ">
							<div
								v-for="                j                 in                  i.nested                "
								:key=" j.title "
								class="flex items-center group/list gap-4 p-4 py-5 hover:bg-[#f8f8f8] duration-300 md:min-w-[373px]">
								<div
									class="size-12 duration-300 group-hover/list:bg-white bg-[#f8f8f8] rounded-lg cent shrink-0">
									<img :src=" j.icon " alt="">
								</div>
								<div class=" flex-grow">
									<h3 class=" text-neutral-800 font-semibold">{{ j.title }}</h3>
									<p v-if=" j.p " class="text-xs text-neutral-600 leading-5">{{ j.p }}</p>
								</div>
								<svg width="10" height="16" viewBox="0 0 10 16" fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd"
										d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L9.41421 8L1.70711 15.7071C1.31658 16.0976 0.683417 16.0976 0.292893 15.7071C-0.0976311 15.3166 -0.0976311 14.6834 0.292893 14.2929L6.58579 8L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
										fill="#4B4B4B"></path>
								</svg>
							</div>
						</div>
					</div>
				</a>
			</nav>
		</div>
		<div class="cent lg:gap-12 md:gap-6 gap-3">
			<a href="tel:+1(718)814-5767">+1 (718) 814-5767</a>
			<a href="/" class="max-lg:hidden ">Login</a>
			<button class="btn_primary">Buy</button>
			<button class="lg:hidden">
				<img
					src="https://assets-global.website-files.com/60b64e5e7e0ea41f8673bebb/60b8cfe0d18afd855d6a6cc8_Vector%20(1).svg"
					alt="">
			</button>
		</div>
	</header>
</template>

<script setup>
const navLinks = [
	{
		name: 'Features',
		Link: 'Features',

	},
	{
		name: 'Teams',
		Link: 'Teams',
	},
	{
		name: 'Products',
		Link: 'Products',
		nested: [
			{
				title: 'The Mobilo App',
				p: 'Make better connections with a CRM in your pocket',
				icon: 'https://assets-global.website-files.com/60b64e5e7e0ea41f8673bebb/650046c3f1566a7f406b8435_the-mobilo-map-nav-icon.svg',
			},
			{
				title: 'Cards & Accessories',
				p: 'Premium materials and customizable designs',
				icon: 'https://assets-global.website-files.com/60b64e5e7e0ea41f8673bebb/650046c371520302cc99780b_cards-and-accessories-nav-icon.svg',
			},
			{
				title: 'Pricing',
				p: 'Choose the plan that’s best for you',
				icon: 'https://assets-global.website-files.com/60b64e5e7e0ea41f8673bebb/650046c32890b124b04750f6_pricing-nav-icon.svg',
			},

		]
	},
	{
		name: 'Support',
		Link: 'Support',

	},
	{
		name: 'More',
		Link: 'More',
		nested: [
			{
				title: 'The Mobilo App',
				p: 'Make better connections with a CRM in your pocket',
				icon: 'https://assets-global.website-files.com/60b64e5e7e0ea41f8673bebb/650046c3f1566a7f406b8435_the-mobilo-map-nav-icon.svg',
			},
			{
				title: 'Cards & Accessories',
				p: 'Premium materials and customizable designs',
				icon: 'https://assets-global.website-files.com/60b64e5e7e0ea41f8673bebb/650046c371520302cc99780b_cards-and-accessories-nav-icon.svg',
			},
			{
				title: 'Pricing',
				p: 'Choose the plan that’s best for you',
				icon: 'https://assets-global.website-files.com/60b64e5e7e0ea41f8673bebb/650046c32890b124b04750f6_pricing-nav-icon.svg',
			},
			{
				title: 'The Mobilo App',
				p: 'Make better connections with a CRM in your pocket',
				icon: 'https://assets-global.website-files.com/60b64e5e7e0ea41f8673bebb/650046c3f1566a7f406b8435_the-mobilo-map-nav-icon.svg',
			},
			{
				title: 'Cards & Accessories',
				p: 'Premium materials and customizable designs',
				icon: 'https://assets-global.website-files.com/60b64e5e7e0ea41f8673bebb/650046c371520302cc99780b_cards-and-accessories-nav-icon.svg',
			},
			{
				title: 'Pricing',
				p: 'Choose the plan that’s best for you',
				icon: 'https://assets-global.website-files.com/60b64e5e7e0ea41f8673bebb/650046c32890b124b04750f6_pricing-nav-icon.svg',
			},

		]
	},
]













</script>

<style>
.center_absloute {
	right: 0%;
	left: auto;
	transform: translate(50% );
}
</style>