window.addEventListener( 'scroll', () => {
	let scrollY = window.scrollY
	let scrollDiff = scrollY - lastScrollY

	// Check scroll direction
	if ( scrollDiff > 0 ) {
		isScrollingDown = true
	} else if ( scrollDiff < 0 ) {
		isScrollingDown = false
	}

	if ( isAnimationPlaying && scrollY >= 700 && scrollY <= 2500 ) {
		let perspectiveValue = 700 + scrollY / 50
		let rotateYValue = ( scrollY - 700 ) / 50
		let leftValue = `calc(50% + ${ ( scrollY - 700 ) / 50 }%)`
		animatedImage.value.style.transform = `perspective(${ perspectiveValue }px) rotateY(-${ rotateYValue }deg)`

		// Check if leftValue is within the desired range before applying it
		if ( scrollY > 700 && ( scrollY / 50 ) <= 40 ) {
			animatedImage.value.style.left = leftValue
		}
	} else if ( scrollY > 2500 ) {
		// Calculate bottomValue for animation after scrollY exceeds 2500
		let bottomValue = `${ ( scrollY - 2500 ) / 50 }%`
		let opacity = 1 - ( scrollY - 3500 ) / 1000 // Calculate opacity based on scroll position

		// Reset styles when scrollY is beyond 2500
		animatedImage.value.style.transform = `perspective(0px) rotateY(0deg)`

		// Check if scrolling down to apply bottom property
		if ( isScrollingDown && scrollY > 3500 ) {
			animatedImage.value.style.bottom = bottomValue
		}

		animatedImage.value.style.opacity = opacity < 0 ? 0 : opacity // Ensure opacity is not negative
	} else {
		// Reset bottom property when scrolling up again
		animatedImage.value.style.bottom = 'auto'
	}
	lastScrollY = scrollY
} )