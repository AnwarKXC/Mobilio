<template>
	<main class=" container">
		<div class=" max-w-[500px] lg:max-w-[700px] cent flex-col gap-2 mx-auto text-center">
			<h1 class="hero_heading tracking-wider ">
				Share contact details with a single tap
			</h1>
			<h2 class="hero_subheading">
				For people who want to make a great first impression. Tap and share your contact
				details, gather leads and connect to over 5,000 apps and CRM tools.<br><br>
				The Smart Digital Business Card<br>
				<sub>*No App Needed.</sub>
			</h2>
		</div>
		<div class="lg:sticky top-[6%] w-full">
			<div class="relative fade-in lg:mb-20 md:min-h-10 lg:min-h-[400px] z-50 ">

				<img
					src="https://assets-global.website-files.com/60b64e5e7e0ea41f8673bebb/62f695949570fe305adab58b_card_03_small-p-500.webp"
					alt=""
					class="max-w-[300px] md:max-w-[380px] xl:max-w-[430px] mb-20 z-50 animated-image "
					ref="animatedImage">

			</div>
		</div>
		<div
			class="mt-[250px] mb-[100px] lg:h-[340vh] grid relative  lg:grid-cols-2 lg:grid-rows-2  gap-10 -z-50">
			<div ref="sticky_text_one" class="lg:sticky max-lg:hidden top-[15%] self-start  -z-50 ">
				<div class="hero_heading">
					The professional way to connect
				</div>
				<div class="hero_subheading">
					Not just for in-person meetings, but also for online networking and virtual events.
					<br>
					<br>
					Compatible with all modern smartphones, Apple and Android.
				</div>
			</div>
			<div class=" justify-self-end relative row-span-2  max-lg:hidden ">
				<div class="lg:sticky top-[10%]">
					<img src="/mobile.svg" class="lg:max-h-[600px] xl:max-h-[650px]" alt=" phone"
						ref="mobile" />
					<img src="/mobile-check.svg" class="lg:max-h-[600px] xl:max-h-[650px]" alt=" phone"
						ref="mobileCheck" style="display:none;" />
					<img src="/mobile-true.svg" class="lg:max-h-[600px] xl:max-h-[650px]" alt=" phone"
						ref="mobileTrue" style="display:none" />
					<img src="/mobile-completed.svg" class="lg:max-h-[600px] xl:max-h-[650px]"
						alt=" phone" ref="mobileCompleted" style="display:none;" />
					<div ref="mobileCompleted_circle" class=" absolute top-[35%] -z-50 circle "
						style=" display:none; "></div>
				</div>


			</div>
			<div ref="sticky_text_two"
				class=" lg:sticky top-[15%] self-start z-50 lg:-mt-20 max-w-[500px] mx-auto">
				<div class=" hero_heading">Upgrade your
					networking with
					Mobilo today</div>
				<div class="max-lg:flex justify-center items-center"><button class="btn_primary ">GET
						MOBILO</button></div>
			</div>
		</div>
	</main>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Refs
const animatedImage = ref( null )
const sticky_text_one = ref( null )
const sticky_text_two = ref( null )
const mobile = ref( null )
const mobileCheck = ref( null )
const mobileTrue = ref( null )
const mobileCompleted = ref( null )
const mobileCompleted_circle = ref( null )

// Reactive variables
let scrollY = window.scrollY / document.documentElement.clientHeight
let lastScrollY = 0
let isScrollingDown = true

// Function to reset styles
const resetStyles = () => {
	animatedImage.value.style.transform = 'none'
	animatedImage.value.style.bottom = 'auto'
	animatedImage.value.style.opacity = 1
	animatedImage.value.style.filter = `none`
}

// Function to update scroll position and handle animations
const styleAnimation = () => {
	let scrollDiff = scrollY - lastScrollY
	console.log( scrollY > lastScrollY ? 'Scrolling down' : 'Scrolling up', scrollDiff )

	if ( scrollY > lastScrollY ) {
		isScrollingDown = true
	} else {
		isScrollingDown = false
	}

	switch ( true ) {
		case scrollY < .85:
			resetStyles()
			animatedImage.value.style.left = `calc(50% + ${ scrollY }%)`
			mobile.value.style.display = 'block'
			break
		case scrollY >= 0.85 && scrollY <= 2.3:
			let perspectiveValue = 500 + ( scrollY )
			let rotateYValue = scrollY * 6
			let leftValue = `calc(50% + ${ scrollY }% + ${ scrollY * 10 }%)`
			let transformValue = `perspective(${ perspectiveValue }px) rotateY(-${ rotateYValue }deg) rotateX(${ scrollY }deg) skew(-${ scrollY }deg, -${ scrollY }deg)`
			animatedImage.value.style.transform = transformValue
			animatedImage.value.style.left = leftValue
			animatedImage.value.style.filter = `drop-shadow( 40px 40px 25px rgb( 0, 0, 0, 0.5 ) )`
			mobileTrue.value.style.display = 'none'
			mobileCompleted.value.style.display = 'none'
			mobileCompleted_circle.value.style.display = 'none'
			mobile.value.style.display = 'none'
			mobileCheck.value.style.display = 'block'

			break
		case scrollY > 2.3 && scrollY < 2.7:
			animatedImage.value.style.transform = 'perspective(0px) rotateY(0deg)'
			animatedImage.value.style.bottom = 'auto'
			mobile.value.style.display = 'none'
			mobileCheck.value.style.display = 'none'
			mobileTrue.value.style.display = 'block'
			mobileCompleted.value.style.display = 'none'
			mobileCompleted_circle.value.style.display = 'none'
			animatedImage.value.style.opacity = 1
			lg: sticky_text_one.value.style.opacity = 1
			break
		case scrollY >= 2.7:
			let bottomValue = `${ ( scrollY - 1.5 ) * 40 }%`
			let opacity = 1 - ( ( scrollY - 2.7 ) * 1.35 )
			animatedImage.value.style.transform = `perspective(${ 500 + ( scrollY * 7 ) }px) scale(${ 1 - ( ( ( scrollY ) - 2.5 ) * 0.5 ) }) rotateY(-${ scrollY * 4 }deg) skew(-${ scrollY / 2 }deg, -${ scrollY / 2 }deg)`
			animatedImage.value.style.bottom = bottomValue
			animatedImage.value.style.opacity = opacity < 0 ? 0 : opacity
			lg: sticky_text_one.value.style.opacity = ( 1 - ( ( scrollY - 2.3 ) * 1.6 ) ) < 0 ? 0 : ( 1 - ( ( scrollY - 2.3 ) * 1.6 ) )
			mobileTrue.value.style.display = 'none'
			mobile.value.style.display = 'none'
			mobileCompleted.value.style.display = 'block'
			mobileCompleted_circle.value.style.display = 'block'
			break
		case scrollY >= 3.2:
			lg: sticky_text_one.value.style.position = 'relative'
			break

		default:
			animatedImage.value.style.bottom = 'auto'
	}
}

// Event listeners
const setScrollVar = () => {
	scrollY = window.scrollY / document.documentElement.clientHeight
	if ( window.innerWidth > 1024 ) {

		styleAnimation()
	}
	lastScrollY = scrollY
}

// Lifecycle hook to add event listeners
onMounted( () => {
	window.addEventListener( 'scroll', setScrollVar )
	window.addEventListener( 'resize', setScrollVar )
} )


</script>



<style>
.animated-image {
	transition: transform ease;
	position: absolute;
	left: 50%;
	transform-style: preserve-3d;
	translate: -50%;
}

.circle {
	width: 0;
	height: 240px;

	background-color: rgba(255, 255, 255, .4);
	border: 1px #000;
	box-shadow: 49px -11px 600px 60px #fff;
}

.fade-in {
	animation: fade-in 2s ease-out forwards;
}

@keyframes fade-in {
	from {
		opacity: 0.5;
		transform: scale(0);
	}

	to {
		opacity: 1;
		transform: scale(1);
	}
}
</style>
