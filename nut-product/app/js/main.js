$(document).ready(function () {
	////////// Responsive

	// Breackpoints
	let	xl 	=  '(max-width: 1199px)',
	lg 	=  '(max-width: 991px)',
	md 	=  '(max-width: 767px)',
	sm 	=  '(max-width: 575px)',
	xsm	=  '(max-width: 374px)',
	MQ  =  $.mq.action;

	// MediaQueries
	// lg
	MQ(lg, function () {
	}, function () {
	});

	////////// Common functions
	let isMobile = false;
	const mobileBreackpoint = 992;

	if ($('body').width() <= mobileBreackpoint) {
		isMobile = true;
	} else {
		isMobile = false;
	}

	$(window).on('resize', function() {
		if ($('body').width() <= mobileBreackpoint) {
			isMobile = true;
		} else {
			isMobile = false;
		}
	});
	
	function fpInit() {
		// fullpage config - https://github.com/alvarotrigo/fullPage.js
		let fp = {
			containerSelector: '.fp-sections',
			anchors: ['home', 'flour', 'mash', 'paste', 'praline', 'nuts', 'chopped-nuts', 'inventory', 'marchpane'],
		};

		const flags = {
			flourFlag: true,
			mashFlag: true,
			pasteFlag: true,
			pralineFlag: true,
			nutsFlag: true,
			choppedNutsFlag: true,
			inventoryFlag: true,
			marchpaneFlag: true,
		}
		
		new fullpage(fp.containerSelector, {
			menu: false,
			lockAnchors: false,
			anchors: fp.anchors,
			lockAnchors: false,
			navigation: false,
			showActiveTooltip: false,
			easingcss3: 'cubic-bezier(0.65, 0.05, 0.36, 1)',
			scrollingSpeed: 1000,
			verticalCentered: false,
			dragAndMove: false,
			paddingTop: '0',
			paddingBottom: '0',
			responsiveWidth: mobileBreackpoint,
			responsiveHeight: 0,
			sectionSelector: '.fp-section',
			licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
			// Events
			onLeave: function (origin, destination, direction) {
				if (destination.anchor !== 'home') {
					$('.main-header__logo').removeClass('logo--hidden');
				}else {
					$('.main-header__logo').addClass('logo--hidden');
				}

				switch (destination.anchor) {
					case 'flour':
						if (flags.flourFlag) {
							flourAnimation();
							flags.flourFlag = false;
						}
						break;
					case 'mash':
						if (flags.mashFlag) {
							mashAnimation();
							flags.mashFlag = false;
						}
						break;
					case 'paste':
						if (flags.pasteFlag) {
							pasteAnimation();
							flags.pasteFlag = false;
						}
						break;
					case 'praline':
						if (flags.pralineFlag) {
							pralineAnimation();
							flags.pralineFlag = false;
						}
						break;
					case 'nuts':
						if (flags.nutsFlag) {
							nutsAnimation();
							flags.nutsFlag = false;
						}
						break;
					case 'chopped-nuts':
						if (flags.choppedNutsFlag) {
							choppedNutsAnimation();
							flags.choppedNutsFlag = false;
						}
						break;
					case 'inventory':
						if (flags.inventoryFlag) {
							inventoryAnimation();
							flags.inventoryFlag = false;
						}
						break;
					case 'marchpane':
						if (flags.marchpaneFlag) {
							marchpaneAnimation();
							flags.marchpaneFlag = false;
						}
						break;
					default:
						break;
				}
			},
			afterLoad: function (origin, destination, direction) {
			},
			afterRender: function () {
			},
			afterResize: function (width, height) { },
			afterResponsive: function (isResponsive) { },
			afterSlideLoad: function (section, origin, destination, direction) { },
			onSlideLeave: function (section, origin, destination, direction) { 
			}
		});
	}

	function mainContentAnimation() {
		// bgElements
		const nutsLeft = document.querySelectorAll('.main-bg__nuts--left')
		const nutsRight = document.querySelectorAll('.main-bg__nuts--right')
		const flowersLeft = document.querySelectorAll('.main-bg__flowers--left')
		const flowersRight = document.querySelectorAll('.main-bg__flowers--right')
		const petalLeft = document.querySelectorAll('.main-bg__petal--left')
		const petalRight = document.querySelectorAll('.main-bg__petal--right')

		// contentElements
		const contentElements = {
			hamburger: document.querySelector('.hamburger'),
			mainLogo: document.querySelector('.main__logo'),
			mainTitle: document.querySelector('.main__title'),
			mainDesc: document.querySelector('.main__sub-title'),
			mainBtnWrap: document.querySelector('.main__btn-wrap'),
			scrollDown: document.querySelector('.js-scroll-down-fp')
		}

		let i = 4
		for (let key in contentElements) {
			if(contentElements.hasOwnProperty(key)){
				i++
				gsap.fromTo(contentElements[key], 0.8, { opacity: 0, y: 25 }, { opacity: 1, y: 0 }).delay(i / 10)
			}
		}

		// center elements
		// gsap.fromTo(contentElements.hamburger, 0.8, { opacity: 0, y: 25 }, { opacity: 1, y: 0 }).delay(0.4)
		// gsap.fromTo(contentElements.mainLogo, 0.8, { opacity: 0, y: 25 }, { opacity: 1, y: 0 }).delay(0.5)
		// gsap.fromTo(contentElements.mainTitle, 0.8, { opacity: 0, y: 25 }, { opacity: 1, y: 0 }).delay(0.6)
		// gsap.fromTo(contentElements.mainDesc, 0.8, { opacity: 0, y: 25 }, { opacity: 1, y: 0 }).delay(0.7)
		// gsap.fromTo(contentElements.mainBtnWrap, 0.8, { opacity: 0, y: 25 }, { opacity: 1, y: 0 }).delay(0.8)
		// gsap.fromTo(contentElements.scrollDown, 0.8, { opacity: 0, y: 25 }, { opacity: 1, y: 0 }).delay(0.9)

		// bg elements
		gsap.fromTo(flowersLeft, 0.8, { x: -300, y: -300}, { x: 0, y: 0 }).delay(1)
		gsap.fromTo(flowersRight, 0.8, { x: 300, y: -300}, { x: 0, y: 0 }).delay(1)
		gsap.fromTo(petalLeft, 1.2, { scale: 0}, { scale: 1 })
		gsap.fromTo(petalRight, 1.2, { scale: 0}, { scale: 1 })
		gsap.fromTo(nutsLeft, 1.2, { x: -800}, { x: 0 }).delay(1)
		gsap.fromTo(nutsRight, 1.2, { x: 800}, { x: 0 }).delay(1)
		setTimeout(() => {
			mouseMoveParallax();
			// scrollDownInfinityAnimation
			gsap.fromTo(contentElements.scrollDown, 1, { y: -10 }, { y: 10, repeat: -1, repeatDelay: 0, yoyo: true })
			// gsap.fromTo(nutsLeft, 3, { y: 0 }, { y: 10, repeat: -1, repeatDelay: 0, yoyo: true })
			// gsap.fromTo(nutsRight, 3, { y: 0 }, { y: 10, repeat: -1, repeatDelay: 0, yoyo: true })
		}, 2500);

		// mouseMoveParallax
		function mouseMoveParallax() {
			$('.main').on('mousemove', function (e) {
				const posX = e.clientX / 50;
				const posY = e.clientY / 80;
				gsap.to(nutsLeft, 0.8,  {x: posX });
				gsap.to(nutsRight, 0.8, { x: -posX });
				gsap.to(flowersLeft, 0.3, { x: posX, y: posY });
				gsap.to(flowersRight, 0.3, { x: -posX, y: posY });
				gsap.to(petalLeft, 0.01, { x: -e.clientX / 20, y: -e.clientY / 20 });
				gsap.to(petalRight, 0.2, { x: -e.clientX / 20, y: -e.clientY / 20 });
			})
		}
	}
	mainContentAnimation();

	
	function flourAnimation() {
		const productsLeftImg = document.querySelector('.products-presentation--flour .products-presentation__img-wrap--left')
		const productsRightImg = document.querySelector('.products-presentation--flour .products-presentation__img-wrap--right')
		const productItems = document.querySelectorAll('.products-presentation--flour .products-presentation__item');
		const bgShadow = document.querySelector('.products-presentation--flour .products-presentation__background-shadow')

		// one-off animation
		gsap.fromTo(productsLeftImg, 1, { y: 150, opacity: 0 }, { y: 0, opacity: 1}).delay(1)
		gsap.fromTo(productsRightImg, 1, { y: 150, opacity: 0 }, { y: 0, opacity: 1}).delay(0.8)
		gsap.fromTo(bgShadow, 0.8, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1 }).delay(0.6)
		

		productItems.forEach((elements, index) => {
			gsap.fromTo(elements, 0.5, { scale: 0}, { scale: 1}).delay(1.4 + (index / 10))
		});

		function mouseMoveParallax() {
			const item1 = document.querySelector('.products-presentation--flour .products-presentation__item:nth-child(1)')
			const item2 = document.querySelector('.products-presentation--flour .products-presentation__item:nth-child(2)')
			const item3 = document.querySelector('.products-presentation--flour .products-presentation__item:nth-child(3)')
			const item4 = document.querySelector('.products-presentation--flour .products-presentation__item:nth-child(4)')
			const item5 = document.querySelector('.products-presentation--flour .products-presentation__item:nth-child(5)')
			const item6 = document.querySelector('.products-presentation--flour .products-presentation__item:nth-child(6)')
			const item7 = document.querySelector('.products-presentation--flour .products-presentation__item:nth-child(7)')

			
			$('.category-section--flour').on('mousemove', function (e) {
				const posX = e.clientX / 100;
				const posY = e.clientY / 100;
				
				// items animation
				gsap.to(item1, 1, { x: posX, y: posY });
				gsap.to(item2, 2, { x: posX });
				gsap.to(item3, 2.5, { x: posX, y: posX });
				gsap.to(item4, 2, { x: posX, y: posY });
				gsap.to(item5, 1, { x: posX, y: posY });
				gsap.to(item6, 2.5, { x: posX, y: -posX });
				gsap.to(item7, 1.5, { x: -posX, y: -posY });
			})

		}
		setTimeout(() => {
			mouseMoveParallax()
			// infinite animation
			gsap.fromTo(productsLeftImg, 2, { y: 0 }, { y: -25, repeat: -1, repeatDelay: 0, yoyo: true })
			gsap.fromTo(productsRightImg, 2, { y: 0 }, { y: -25, repeat: -1, repeatDelay: 0, yoyo: true })
		}, 2500);
	}

	function mashAnimation() {
		const productsLeftImg = document.querySelector('.products-presentation--mash .products-presentation__img-wrap--left')
		const productsRightImg = document.querySelector('.products-presentation--mash .products-presentation__img-wrap--right')
		const productItems = document.querySelectorAll('.products-presentation--mash .products-presentation__item');
		const bgShadow = document.querySelector('.products-presentation--mash .products-presentation__background-shadow')

		// one-off animation
		gsap.fromTo(productsLeftImg, 1, { y: 150, opacity: 0 }, { y: 0, opacity: 1}).delay(1)
		gsap.fromTo(productsRightImg, 1, { y: 150, opacity: 0 }, { y: 0, opacity: 1}).delay(0.8)
		gsap.fromTo(bgShadow, 0.8, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1 }).delay(0.6)
		

		productItems.forEach((elements, index) => {
			gsap.fromTo(elements, 0.5, { scale: 0}, { scale: 1}).delay(1.4 + (index / 10))
		});

		function mouseMoveParallax() {
			const item1 = document.querySelector('.products-presentation--mash .products-presentation__item:nth-child(1)')
			const item2 = document.querySelector('.products-presentation--mash .products-presentation__item:nth-child(2)')
			const item3 = document.querySelector('.products-presentation--mash .products-presentation__item:nth-child(3)')
			const item4 = document.querySelector('.products-presentation--mash .products-presentation__item:nth-child(4)')
			const item5 = document.querySelector('.products-presentation--mash .products-presentation__item:nth-child(5)')
			const item6 = document.querySelector('.products-presentation--mash .products-presentation__item:nth-child(6)')
			const item7 = document.querySelector('.products-presentation--mash .products-presentation__item:nth-child(7)')
			const item8 = document.querySelector('.products-presentation--mash .products-presentation__item:nth-child(8)')
			const item9 = document.querySelector('.products-presentation--mash .products-presentation__item:nth-child(9)')
			const item10 = document.querySelector('.products-presentation--mash .products-presentation__item:nth-child(10)')

			
			$('.category-section--mash').on('mousemove', function (e) {
				const posX = e.clientX / 100;
				const posY = e.clientY / 100;
				
				// items animation
				gsap.to(item1, 1, { x: posX, y: posY });
				gsap.to(item2, 2, { x: posX });
				gsap.to(item3, 2.5, { x: posX, y: posX });
				gsap.to(item4, 2, { x: posX, y: posY });
				gsap.to(item5, 1, { x: posX, y: posY });
				gsap.to(item6, 2.5, { x: posX, y: posY });
				gsap.to(item7, 1.5, { x: -posX, y: -posY });
				gsap.to(item8, 1.5, { x: posX, y: posY });
				gsap.to(item9, 1.5, { x: -posX, y: -posY });
				gsap.to(item10, 1.5, { x: posX, y: posY });
			})

		}
		setTimeout(() => {
			mouseMoveParallax()
			// infinite animation
			gsap.fromTo(productsLeftImg, 2, { y: 0 }, { y: -25, repeat: -1, repeatDelay: 0, yoyo: true })
			gsap.fromTo(productsRightImg, 2, { y: 0 }, { y: -25, repeat: -1, repeatDelay: 0, yoyo: true })
		}, 2500);
	}

	function pasteAnimation() {
		const prdouctsImgItem1 = document.querySelector('.products-presentation--paste .products-presentation__img-wrap--item1')
		const prdouctsImgItem2 = document.querySelector('.products-presentation--paste .products-presentation__img-wrap--item2')
		const prdouctsImgItem3 = document.querySelector('.products-presentation--paste .products-presentation__img-wrap--item3');
		const prdouctsImgItem4 = document.querySelector('.products-presentation--paste .products-presentation__img-wrap--item4');
		const prdouctsImgItem5 = document.querySelector('.products-presentation--paste .products-presentation__img-wrap--item5');
		const bgShadow = document.querySelector('.products-presentation--paste .products-presentation__background-shadow')
		const item1 = document.querySelector('.products-presentation--paste .products-presentation__item:nth-child(1)')
		const item2 = document.querySelector('.products-presentation--paste .products-presentation__item:nth-child(2)')

		// one-off animation
		gsap.fromTo(bgShadow, 0.8, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1 }).delay(0.8)
		gsap.fromTo(prdouctsImgItem3, 1, { y: 150, opacity: 0 }, { y: 0, opacity: 1}).delay(1)
		gsap.fromTo(prdouctsImgItem2, 1, { y: 150, x: 50, opacity: 0 }, { y: 0, x: 0, opacity: 1}).delay(1.2)
		gsap.fromTo(prdouctsImgItem4, 1, { y: 150, x: -50, opacity: 0 }, { y: 0, x: 0, opacity: 1}).delay(1.2)
		gsap.fromTo(prdouctsImgItem1, 1, { y: 150, x: 150, opacity: 0 }, { y: 0, x: 0, opacity: 1}).delay(1.4)
		gsap.fromTo(prdouctsImgItem5, 1, { y: 150, x: -150, opacity: 0 }, { y: 0, x: 0, opacity: 1}).delay(1.4)
		gsap.fromTo(item1, 1, { scale: 0 }, { scale: 1 }).delay(1.8)
		gsap.fromTo(item2, 1, { scale: 0 }, { scale: 1 }).delay(1.8)

		function mouseMoveParallax() {
			$('.category-section--paste').on('mousemove', function (e) {
				const posX = e.clientX / 100;
				const posY = e.clientY / 100;

				// prdoucts images animation 
				gsap.to(prdouctsImgItem1, 2, { y: posY, x: posX });
				gsap.to(prdouctsImgItem2, 2, { y: -posY, x: -posX });
				gsap.to(prdouctsImgItem3, 2, { y: posY });
				gsap.to(prdouctsImgItem4, 2, { y: posY, x: posX });
				gsap.to(prdouctsImgItem5, 2, { y: -posY, x: -posX });

				// items animation
				gsap.to(item1, 1, { x: -posX, y: -posY });
				gsap.to(item2, 2, { x: posX, y: posY });
			})

		}
		setTimeout(() => {
			mouseMoveParallax();
		}, 2500);
	}

	function pralineAnimation() {
		const productsLeftImg = document.querySelector('.products-presentation--praline .products-presentation__img-wrap--left')
		const productsRightImg = document.querySelector('.products-presentation--praline .products-presentation__img-wrap--right')
		const bgShadow = document.querySelector('.products-presentation--praline .products-presentation__background-shadow')
		const item1 = document.querySelector('.products-presentation--praline .products-presentation__item:nth-child(1)')
		const item2 = document.querySelector('.products-presentation--praline .products-presentation__item:nth-child(2)')
		const item3 = document.querySelector('.products-presentation--praline .products-presentation__item:nth-child(3)')
		const item4 = document.querySelector('.products-presentation--praline .products-presentation__item:nth-child(4)')

		// one-off animation
		gsap.fromTo(bgShadow, 0.8, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1 }).delay(0.6)
		gsap.fromTo(productsRightImg, 1, { y: 150, opacity: 0 }, { y: 0, opacity: 1}).delay(0.8)
		gsap.fromTo(productsLeftImg, 1, { y: 150, opacity: 0 }, { y: 0, opacity: 1}).delay(1)
		gsap.fromTo(item1, 0.5, { scale: 0}, { scale: 1}).delay(1.7)
		gsap.fromTo(item2, 0.5, { scale: 0}, { scale: 1}).delay(1.4)
		gsap.fromTo(item3, 0.5, { scale: 0}, { scale: 1}).delay(1.5)
		gsap.fromTo(item4, 0.5, { scale: 0}, { scale: 1}).delay(1.6)

		function mouseMoveParallax() {
			$('.category-section--praline').on('mousemove', function (e) {
				const posX = e.clientX / 100;
				const posY = e.clientY / 100;
				
				// items animation
				gsap.to(item1, 1, { x: posX, y: posY });
				gsap.to(item2, 2, { x: posX, y: posY });
				gsap.to(item3, 2.5, { x: posX, y: posX });
				gsap.to(item4, 2, { x: posX, y: posY });
			})

		}
		setTimeout(() => {
			mouseMoveParallax()
			// infinite animation
			gsap.fromTo(productsLeftImg, 2, { y: 0 }, { y: -25, repeat: -1, repeatDelay: 0, yoyo: true })
			gsap.fromTo(productsRightImg, 2, { y: 0 }, { y: -25, repeat: -1, repeatDelay: 0, yoyo: true })
		}, 2500);
	}

	function nutsAnimation() {
		const productsLeftImg = document.querySelector('.products-presentation--nuts .products-presentation__img-wrap--left')
		const productsRightImg = document.querySelector('.products-presentation--nuts .products-presentation__img-wrap--right')
		const productItems = document.querySelectorAll('.products-presentation--nuts .products-presentation__item');
		const bgShadow = document.querySelector('.products-presentation--nuts .products-presentation__background-shadow')

		// one-off animation
		gsap.fromTo(productsLeftImg, 1, { y: 150, opacity: 0 }, { y: 0, opacity: 1}).delay(0.8)
		gsap.fromTo(productsRightImg, 1, { y: 150, opacity: 0 }, { y: 0, opacity: 1}).delay(1)
		gsap.fromTo(bgShadow, 0.8, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1 }).delay(0.6)
		

		productItems.forEach((elements, index) => {
			gsap.fromTo(elements, 0.5, { scale: 0}, { scale: 1}).delay(1.4 + (index / 10))
		});

		function mouseMoveParallax() {
			const item1 = document.querySelector('.products-presentation--nuts .products-presentation__item:nth-child(1)')
			const item2 = document.querySelector('.products-presentation--nuts .products-presentation__item:nth-child(2)')
			const item3 = document.querySelector('.products-presentation--nuts .products-presentation__item:nth-child(3)')
			const item4 = document.querySelector('.products-presentation--nuts .products-presentation__item:nth-child(4)')
			const item5 = document.querySelector('.products-presentation--nuts .products-presentation__item:nth-child(5)')
			const item6 = document.querySelector('.products-presentation--nuts .products-presentation__item:nth-child(6)')

			
			$('.category-section--nuts').on('mousemove', function (e) {
				const posX = e.clientX / 100;
				const posY = e.clientY / 100;
				
				// items animation
				gsap.to(item1, 1, { x: posX, y: posY });
				gsap.to(item2, 2, { x: posX });
				gsap.to(item3, 2.5, { x: posX, y: posX });
				gsap.to(item4, 2, { x: posX, y: posY });
				gsap.to(item5, 1, { x: posX, y: posY });
				gsap.to(item6, 2.5, { x: posX, y: posY });
			})

		}
		setTimeout(() => {
			mouseMoveParallax()
			// infinite animation
			gsap.fromTo(productsLeftImg, 2, { y: 0 }, { y: -25, repeat: -1, repeatDelay: 0, yoyo: true })
			gsap.fromTo(productsRightImg, 2, { y: 0 }, { y: -25, repeat: -1, repeatDelay: 0, yoyo: true })
		}, 2500);
	}

	function choppedNutsAnimation() {
		const productsLeftImg = document.querySelector('.products-presentation--chopped-nuts .products-presentation__img-wrap--left')
		const productsRightImg = document.querySelector('.products-presentation--chopped-nuts .products-presentation__img-wrap--right')
		const productsCenterImg = document.querySelector('.products-presentation--chopped-nuts .products-presentation__img-wrap--center')
		const productItems = document.querySelectorAll('.products-presentation--chopped-nuts .products-presentation__item');

		// one-off animation
		gsap.fromTo(productsLeftImg, 1, { y: 150, opacity: 0 }, { y: 0, opacity: 1}).delay(0.8)
		gsap.fromTo(productsRightImg, 1, { y: 150, opacity: 0 }, { y: 0, opacity: 1}).delay(1)
		gsap.fromTo(productsCenterImg, 1, { y: 150, opacity: 0 }, { y: 0, opacity: 1}).delay(1.2)
		

		productItems.forEach((elements, index) => {
			gsap.fromTo(elements, 0.5, { scale: 0}, { scale: 1}).delay(1.4 + (index / 10))
		});

		function mouseMoveParallax() {
			const item1 = document.querySelector('.products-presentation--chopped-nuts .products-presentation__item:nth-child(1)')
			const item2 = document.querySelector('.products-presentation--chopped-nuts .products-presentation__item:nth-child(2)')
			const item3 = document.querySelector('.products-presentation--chopped-nuts .products-presentation__item:nth-child(3)')
			const item4 = document.querySelector('.products-presentation--chopped-nuts .products-presentation__item:nth-child(4)')
			const item5 = document.querySelector('.products-presentation--chopped-nuts .products-presentation__item:nth-child(5)')
			const item6 = document.querySelector('.products-presentation--chopped-nuts .products-presentation__item:nth-child(6)')

			
			$('.category-section--chopped-nuts').on('mousemove', function (e) {
				const posX = e.clientX / 100;
				const posY = e.clientY / 100;
				
				// items animation
				gsap.to(item1, 1, { x: posX, y: posY });
				gsap.to(item2, 2, { x: -posX, y: -posY });
				gsap.to(item3, 2.5, { x: posX, y: posX });
				gsap.to(item4, 2, { x: -posY, y: posY });
				gsap.to(item5, 1, { x: posX, y: posY });
				gsap.to(item6, 2.5, { x: posX, y: posY });
			})

		}
		setTimeout(() => {
			mouseMoveParallax()
			// infinite animation
			gsap.fromTo(productsLeftImg, 2, { y: 0 }, { y: -10, repeat: -1, repeatDelay: 0, yoyo: true })
			gsap.fromTo(productsRightImg, 2, { y: 0 }, { y: 10, repeat: -1, repeatDelay: 0, yoyo: true })
			gsap.fromTo(productsCenterImg, 2, { y: 0 }, { y: -10, repeat: -1, repeatDelay: 0, yoyo: true })
		}, 2500);
	}

	function inventoryAnimation() {
		const item1 = document.querySelector('.products-presentation--inventory .products-presentation__item:nth-child(1)')
		const item2 = document.querySelector('.products-presentation--inventory .products-presentation__item:nth-child(2)')
		const item3 = document.querySelector('.products-presentation--inventory .products-presentation__item:nth-child(3)')
		const item4 = document.querySelector('.products-presentation--inventory .products-presentation__item:nth-child(4)')
		const item5 = document.querySelector('.products-presentation--inventory .products-presentation__item:nth-child(5)')
		const item6 = document.querySelector('.products-presentation--inventory .products-presentation__item:nth-child(6)')
		const item7 = document.querySelector('.products-presentation--inventory .products-presentation__item:nth-child(7)')
		const item8 = document.querySelector('.products-presentation--inventory .products-presentation__item:nth-child(8)')
		const bgShadow = document.querySelector('.products-presentation--nuts .products-presentation__background-shadow')

		// one-off animation
		gsap.fromTo(bgShadow, 1, { scale: 0 }, { scale: 1 }).delay(0.9)
		gsap.fromTo(item1, 1, { y: 150, x: 150, opacity: 0 }, { y: 0, x: 0, opacity: 1 }).delay(1.1)
		gsap.fromTo(item2, 1, { y: 150, opacity: 0 }, { y: 0, opacity: 1 }).delay(1.3)
		gsap.fromTo(item3, 1, { y: -150, opacity: 0 }, { y: 0, opacity: 1 }).delay(1.4)
		gsap.fromTo(item4, 1, { y: 150, opacity: 0 }, { y: 0, opacity: 1 }).delay(1.5)
		gsap.fromTo(item5, 1, { y: -150, x: 30, opacity: 0 }, { y: 0, x: 0, opacity: 1 }).delay(1.6)
		gsap.fromTo(item6, 1, { y: -100, x: 80, opacity: 0 }, { y: 0, x: 0, opacity: 1 }).delay(1.7)
		gsap.fromTo(item7, 1, { y: 100, opacity: 0 }, { y: 0, opacity: 1 }).delay(1.8)
		gsap.fromTo(item8, 1.1, { y: 100, opacity: 0 }, { y: 0, opacity: 1 }).delay(1.9)

		function mouseMoveParallax() {
			$('.category-section--inventory').on('mousemove', function (e) {
				const posX = e.clientX / 100;
				const posY = e.clientY / 100;
				
				// items animation
				gsap.to(item1, 1.75, { x: -posX, y: -posY });
				gsap.to(item2, 1.75, { x: posX, y: -posY });
				gsap.to(item3, 1.75, { x: -posX, y: -posY });
				gsap.to(item4, 1.75, { x: -posX, y: posY });
				gsap.to(item5, 1.75, { x: -posX, y: -posY });
				gsap.to(item6, 1.75, { x: posX, y: posY });
				gsap.to(item7, 1.75, { x: -posX, y: -posY });
				gsap.to(item8, 1.75, { x: posX, y: posY });
			})
		}

		setTimeout(() => {
			mouseMoveParallax()
		}, 2500);
	}

	function marchpaneAnimation() {
		const productsCenterImg = document.querySelector('.products-presentation--marchpane .products-presentation__img-wrap--center')
		const item1 = document.querySelector('.products-presentation--marchpane .products-presentation__item:nth-child(1)')
		const item2 = document.querySelector('.products-presentation--marchpane .products-presentation__item:nth-child(2)')
		const item3 = document.querySelector('.products-presentation--marchpane .products-presentation__item:nth-child(3)')
		const item4 = document.querySelector('.products-presentation--marchpane .products-presentation__item:nth-child(4)')
		const item5 = document.querySelector('.products-presentation--marchpane .products-presentation__item:nth-child(5)')
		const item6 = document.querySelector('.products-presentation--marchpane .products-presentation__item:nth-child(6)')

		// one-off animation
		gsap.fromTo(productsCenterImg, 1, { y: 150, opacity: 0 }, { y: 0, opacity: 1}).delay(1)

		// items
		gsap.fromTo(item1, 0.5, { x: 60, opacity: 0 }, { x: 0, opacity: 1 }).delay(1.2)
		gsap.fromTo(item2, 0.5, { scale: 0}, { scale: 1}).delay(1.5)
		gsap.fromTo(item3, 0.5, { scale: 0}, { scale: 1}).delay(1.6)
		gsap.fromTo(item4, 0.5, { x: 150, y: 75, opacity: 0}, { x: 0, y: 0, opacity: 1 }).delay(1.3)
		gsap.fromTo(item5, 0.5, { y: 150, opacity: 0 }, { y: 0, opacity: 1 }).delay(1.4)
		gsap.fromTo(item6, 0.5, { scale: 0}, { scale: 1}).delay(1.7)

		function mouseMoveParallax() {

			
			$('.category-section--marchpane').on('mousemove', function (e) {
				const posX = e.clientX / 100;
				const posY = e.clientY / 100;
				
				// items animation
				gsap.to(item1, 1, { x: posX, y: posY });
				gsap.to(item2, 2, { x: -posX, y: -posY });
				gsap.to(item3, 2.5, { x: posX, y: posX });
				gsap.to(item4, 2, { x: -posY, y: posY });
				gsap.to(item5, 1, { x: posX, y: posY });
				gsap.to(item6, 2.5, { x: -posX, y: -posY });
			})

		}
		setTimeout(() => {
			mouseMoveParallax()
			// infinite animation
			gsap.fromTo(productsCenterImg, 2, { y: 0 }, { y: -10, repeat: -1, repeatDelay: 0, yoyo: true })
		}, 2500);
	}

	if (!isMobile) {
		fpInit();
	}
	
	// Popup opener
	$('.js-popup').click(function(event) {
		event.preventDefault();
		let popupID = $(this).attr('href');

		mfpPopup(popupID);
	});

	// Optimize Svg Icons in IE
	svg4everybody();
	
	// Mobile menu toggle
	$('.js-menu').click(function() {
		$(this).toggleClass('is-active');
		$('.menu').toggleClass('opened');
	});

	$('.js-scroll-down-fp').click(function (e) {
		e.preventDefault();
		fullpage_api.moveSectionDown();
	})

	// Phone input mask
	$('input[type="tel"]').inputmask({
		mask: '+7 (999) 999-99-99',
		showMaskOnHover: false,
	});

	// E-mail Ajax Send
	// $('form').submit(function(e) {
	// 	e.preventDefault();

	// 	let form = $(this);
	// 	let formData = {};
	// 	formData.data = {};

	// 	// Serialize
	// 	form.find('input, textarea').each(function() {
	// 		let name = $(this).attr('name');
	// 		let title = $(this).attr('data-name');
	// 		let value = $(this).val();

	// 		formData.data[name] = {
	// 			title: title,
	// 			value: value,
	// 		};

	// 		if (name === 'subject') {
	// 			formData.subject = {
	// 				value: value,
	// 			};
	// 			delete formData.data.subject;
	// 		}
	// 	});

	// 	$.ajax({
	// 		type: 'POST',
	// 		url: 'mail/mail.php',
	// 		dataType: 'json',
	// 		data: formData,
	// 	}).done(function(data) {
	// 		if (data.status === 'success') {
	// 			if (form.closest('.mfp-wrap').hasClass('mfp-ready')) {
	// 				form.find('.form-result').addClass('form-result--success');
	// 			} else {
	// 				mfpPopup('#success');
	// 			}

	// 			setTimeout(function() {
	// 				if (form.closest('.mfp-wrap').hasClass('mfp-ready')) {
	// 					form.find('.form-result').removeClass('form-result--success');
	// 				}
	// 				$.magnificPopup.close();
	// 				form.trigger('reset');
	// 			}, 3000);
	// 		} else {
	// 			alert('Ajax result: ' + data.status);
	// 		}
	// 	});
	// 	return false;
	// });

	////////// Load functions
	$(window).on('load', function() {
		//
	});

	/////////// mfp popup - https://dimsemenov.com/plugins/magnific-popup/
	let mfpPopup = function(popupID, source) {
		$.magnificPopup.open({
			items: {
				src: popupID,
			},
			type: 'inline',
			fixedContentPos: false,
			fixedBgPos: true,
			overflowY: 'auto',
			closeBtnInside: true,
			preloader: false,
			midClick: true,
			removalDelay: 300,
			closeMarkup: '<button type="button" class="mfp-close">&times;</button>',
			mainClass: 'mfp-fade-zoom',
			// callbacks: {
			// 	open: function() {
			// 		$('.source').val(source);
			// 	}
			// }
		});
	};

})
