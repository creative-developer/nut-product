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
		$('.main__mobile-container').append($('.main__btn-wrap'))
		$('.main-header__logo').removeClass('logo--hidden')
		$('.footer__col--right').append($('.footer__socials'))
		$('.menu__col--mobile').prepend($('.menu__feedback-wrap'))
		$('.menu__col--mobile').prepend($('.menu__btn-wrap'))
		$('.about-gallery__wrap').append($('.about-gallery__small-desc'))
		// $('.products-presentation').remove()
	}, function () {
		$('.scroll-down').before($('.main__btn-wrap'))
		$('.main-header__logo').addClass ('logo--hidden')
		$('.footer__bottom-col--right').append($('.footer__socials'))
		$('.menu__info-wrap').append($('.menu__feedback-wrap'))
		$('.menu__info-wrap').append($('.menu__btn-wrap'))
		$('.about-gallery__img-wrap:nth-child(2)').append($('.about-gallery__small-desc'))
	});
	
	////////// Common functions
	const mobileBreackpoint = 992;
	let isMobile = false;
	let isMainPage = false;
	let popupPosition = false;

	if ($('.main-page').length) {
		isMainPage = true;
	}

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
		};

		const flags = {
			flourFlag: true,
			mashFlag: true,
			pasteFlag: true,
			pralineFlag: true,
			friedOnionFlag: true,
			spicesFlag: true,
			nutsFlag: true,
			choppedNutsFlag: true,
			inventoryFlag: true,
			marchpaneFlag: true,
		}
		
		new fullpage(fp.containerSelector, {
			menu: false,
			lockAnchors: false,
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
					case 'fried-onion':
						if (flags.friedOnionFlag) {
							friedOnionAnimation();
							flags.friedOnionFlag = false;
						}
						break;
					case 'spices':
						if (flags.spicesFlag) {
							spicesAnimation();
							flags.spicesFlag = false;
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

	function fpScrollSwitcher(switcher = true) {
		if (isMainPage && !isMobile) {
			fullpage_api.setMouseWheelScrolling(switcher);
			fullpage_api.setAllowScrolling(switcher);
		}
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
		// function mouseMoveParallax() {
		// 	$('.main').on('mousemove', function (e) {
		// 		const posX = e.clientX / 50;
		// 		const posY = e.clientY / 80;
		// 		gsap.to(nutsLeft, 5,  {x: posX });
		// 		gsap.to(nutsRight, 5, { x: -posX });
		// 		gsap.to(flowersLeft, 3, { x: posX, y: posY });
		// 		gsap.to(flowersRight, 3, { x: -posX, y: posY });
		// 		gsap.to(petalLeft, 1, { x: -e.clientX / 20, y: -e.clientY / 20 });
		// 		gsap.to(petalRight, 1, { x: -e.clientX / 20, y: -e.clientY / 20 });
		// 	})
		// }
	}

	if (isMainPage && !isMobile) {
		mainContentAnimation();
	}
	
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
	
	function friedOnionAnimation() {
		const productsLeftImg = document.querySelector('.products-presentation--fried-onion .products-presentation__img-wrap--left')
		const productsRightImg = document.querySelector('.products-presentation--fried-onion .products-presentation__img-wrap--right')
		const item1 = document.querySelector('.products-presentation--fried-onion .products-presentation__item:nth-child(1)')
		const item2 = document.querySelector('.products-presentation--fried-onion .products-presentation__item:nth-child(2)')
		const item3 = document.querySelector('.products-presentation--fried-onion .products-presentation__item:nth-child(3)')
		const item4 = document.querySelector('.products-presentation--fried-onion .products-presentation__item:nth-child(4)')
		const item5 = document.querySelector('.products-presentation--fried-onion .products-presentation__item:nth-child(5)')
		const item6 = document.querySelector('.products-presentation--fried-onion .products-presentation__item:nth-child(6)')
		const item7 = document.querySelector('.products-presentation--fried-onion .products-presentation__item:nth-child(7)')

		// one-off animation
		gsap.fromTo(productsRightImg, 1, { y: 150, opacity: 0 }, { y: 0, opacity: 1}).delay(1)
		gsap.fromTo(productsLeftImg, 1, { y: 150, opacity: 0 }, { y: 0, opacity: 1}).delay(0.8)
		gsap.fromTo(item1, 0.5, { y: 30, scale: 0 }, { y:0, scale: 1}).delay(1.2)
		gsap.fromTo(item2, 0.5, { y: 40, scale: 0 }, { y:0, scale: 1}).delay(1.3)
		gsap.fromTo(item3, 0.5, { y: 50, scale: 0 }, { y:0, scale: 1}).delay(1.4)
		gsap.fromTo(item4, 0.5, { y: 50, scale: 0 }, { y:0, scale: 1}).delay(1.6)
		gsap.fromTo(item5, 0.5, { y: 50, scale: 0 }, { y:0, scale: 1}).delay(1.7)
		gsap.fromTo(item6, 0.5, { y: 40, scale: 0 }, { y:0, scale: 1}).delay(1.8)
		gsap.fromTo(item7, 0.5, { y: 30, scale: 0 }, { y:0, scale: 1}).delay(1.9)

		function mouseMoveParallax() {
			$('.category-section--fried-onion').on('mousemove', function (e) {
				const posX = e.clientX / 100;
				const posY = e.clientY / 100;
				
				// items animation
				gsap.to(item1, 1, { x: posX, y: posY });
				gsap.to(item2, 2, { x: posX, y: posY });
				gsap.to(item3, 2.5, { x: posX, y: posX });
				gsap.to(item4, 2, { x: -posX, y: -posY });
				gsap.to(item5, 2, { x: posX, y: posY });
				gsap.to(item6, 2, { x: -posX, y: -posY });
				gsap.to(item7, 2, { x: -posX, y: -posY });
			})

		}
		setTimeout(() => {
			mouseMoveParallax()
			// infinite animation
			gsap.fromTo(productsLeftImg, 2, { y: 0 }, { y: -25, repeat: -1, repeatDelay: 0, yoyo: true })
			gsap.fromTo(productsRightImg, 2, { y: 0 }, { y: -25, repeat: -1, repeatDelay: 0, yoyo: true })
		}, 2500);
	}
	
	function spicesAnimation() {
		const productsLeftImg = document.querySelector('.products-presentation--spices .products-presentation__img-wrap--left')
		const productsRightImg = document.querySelector('.products-presentation--spices .products-presentation__img-wrap--right')
		const productItems = document.querySelectorAll('.products-presentation--spices .products-presentation__item');
		const bgShadow = document.querySelector('.products-presentation--spices .products-presentation__background-shadow')

		// one-off animation
		gsap.fromTo(productsLeftImg, 1, { y: 150, opacity: 0 }, { y: 0, opacity: 1}).delay(1)
		gsap.fromTo(productsRightImg, 1, { y: 150, opacity: 0 }, { y: 0, opacity: 1}).delay(0.8)
		gsap.fromTo(bgShadow, 0.8, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1 }).delay(0.6)
		

		productItems.forEach((elements, index) => {
			gsap.fromTo(elements, 0.5, { scale: 0}, { scale: 1}).delay(1.4 + (index / 10))
		});

		function mouseMoveParallax() {
			const item1 = document.querySelector('.products-presentation--spices .products-presentation__item:nth-child(1)')
			const item2 = document.querySelector('.products-presentation--spices .products-presentation__item:nth-child(2)')
			const item3 = document.querySelector('.products-presentation--spices .products-presentation__item:nth-child(3)')
			const item4 = document.querySelector('.products-presentation--spices .products-presentation__item:nth-child(4)')
			const item5 = document.querySelector('.products-presentation--spices .products-presentation__item:nth-child(5)')
			const item6 = document.querySelector('.products-presentation--spices .products-presentation__item:nth-child(6)')
			const item7 = document.querySelector('.products-presentation--spices .products-presentation__item:nth-child(7)')
			const item8 = document.querySelector('.products-presentation--spices .products-presentation__item:nth-child(8)')
			const item9 = document.querySelector('.products-presentation--spices .products-presentation__item:nth-child(9)')
			const item10 = document.querySelector('.products-presentation--spices .products-presentation__item:nth-child(10)')

			
			$('.category-section--spices').on('mousemove', function (e) {
				const posX = e.clientX / 100;
				const posY = e.clientY / 100;
				
				// items animation
				gsap.to(item1, 1, { x: posX, y: posY });
				gsap.to(item2, 2, { x: -posX, y: -posY });
				gsap.to(item3, 2.5, { x: posX, y: posX });
				gsap.to(item4, 2, { x: -posX, y: -posY });
				gsap.to(item5, 1, { x: posX });
				gsap.to(item6, 2.5, { x: -posX, y: -posY });
				gsap.to(item7, 1.5, { x: posX, y: posY });
				gsap.to(item8, 1.5, { x: -posX, y: -posY });
				gsap.to(item9, 1.5, { x: posX, y: posY });
				gsap.to(item10, 1.5, { x: -posX, y: -posY });
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

	function menuAnimation() {
		const bigNavItems = document.querySelectorAll('.big-nav__item')
		const smallNavItems = document.querySelectorAll('.small-nav__item')
		const topRow = document.querySelector('.menu__row--top')
		const bottomRow = document.querySelector('.menu__row--bottom')

		// top row animation
		gsap.fromTo(topRow, 0.4, { y: -100, opacity: 0 }, { y: 0, opacity: 1 }).delay(0.6)

		// bottom row animation
		gsap.fromTo(bottomRow, 0.4, { y: 100, opacity: 0 }, { y: 0, opacity: 1 }).delay(0.6)
		
		// big nav items animation
		bigNavItems.forEach((item, index) => {
			gsap.fromTo(item, 0.4, { x: -60, opacity: 0 }, { x: 0, opacity: 1 }).delay(0.6 + (index / 20))
		});
		
		// small nav items animation
		smallNavItems.forEach((item, index) => {
			gsap.fromTo(item, 0.4, { x: -60, opacity: 0 }, { x: 0, opacity: 1 }).delay(0.6 + (index / 20))
		});
	}

	function menuResponsiveAnimation() {
		const bigNavItems = document.querySelectorAll('.big-nav__item')
		const smallNavItems = document.querySelectorAll('.small-nav__item')
		const topRow = document.querySelector('.menu__row--top')
		const bottomRow = document.querySelector('.menu__row--bottom')
		const btn = document.querySelector('.menu__btn-wrap')
		const feedback = document.querySelector('.menu__feedback-wrap')
		const address = document.querySelector('.menu__address')

		// top row animation
		gsap.fromTo(topRow, 0.4, { x: -100, opacity: 0 }, { x: 0, opacity: 1 }).delay(0.4)
		
		// // bottom row animation
		// gsap.fromTo(bottomRow, 0.4, { y: 100, opacity: 0 }, { y: 0, opacity: 1 }).delay(0.6)
		
		// big nav items animation
		bigNavItems.forEach((item, index) => {
			gsap.fromTo(item, 0.4, { x: -150, opacity: 0 }, { x: 0, opacity: 1 }).delay(0.6 + (index / 20))
		});
		
		// small nav items animation
		smallNavItems.forEach((item, index) => {
			gsap.fromTo(item, 0.4, { x: -150, opacity: 0 }, { x: 0, opacity: 1 }).delay(0.8 + (index / 20))
		});

		// btn animation
		gsap.fromTo(btn, 0.4, { y: 100, opacity: 0 }, { y: 0, opacity: 1 }).delay(1.3)

		// feedback animation
		gsap.fromTo(feedback, 0.4, { y: 100, opacity: 0 }, { y: 0, opacity: 1 }).delay(1.35)

		// address animation
		gsap.fromTo(address, 0.4, { y: 100, opacity: 0 }, { y: 0, opacity: 1 }).delay(1.4)
	}

	function servicesAnimation() {
		const leftItem1 = document.querySelector('.services-parallax__item--left-img1')
		const leftItem2 = document.querySelector('.services-parallax__item--left-img2')
		const rightItem = document.querySelector('.services-parallax__item--right-img')
		gsap.fromTo(leftItem1, 4, { y: 15 }, { y: -15, repeat: -1, repeatDelay: 0, yoyo: true })
		gsap.fromTo(leftItem2, 4, { y: 15 }, { y: -15, repeat: -1, repeatDelay: 0, yoyo: true })
		gsap.fromTo(rightItem, 4, { y: 50 }, { y: 0, repeat: -1, repeatDelay: 0, yoyo: true })
	}
	if ($('.services-page').length && $('body').width() >= 1440) {
		servicesAnimation()
	}
	if (!isMobile && isMainPage) {
		fpInit();
	}

	function popupClassRemover(popupID) {
		if (popupID === '#ask-popup' && isMobile) {
			setTimeout(() => {
				$('body').addClass('custom-zoom');
			}, 300);
		} else if(popupID === '#request' || popupID === '#feedback' || popupID === '#price-list') {
			$('body').addClass('custom-zoom');
		}else {
			$('body').removeClass('custom-zoom');
		}
	}

	const productSlider = $('.product-slider');
	const categorySlider = $('.category-slider');
	const productNavSlider = $('.product-slider-navigation');
	const sliderArrow = '<svg class="icon icon--triangle"><use xlink:href="http://localhost/nut/wp-content/themes/nut-theme/assets/img/svg-sprite.svg#triangle"></use></svg>'
	// const sliderArrow = '<svg class="icon icon--triangle"><use xlink:href="img/svg-sprite.svg#triangle"></use></svg>'
	const categorySliderSettings = {
		loop: false,
		nav: true,
		dots: false,
		margin: 30,
		items: 3,
		navText: [sliderArrow, sliderArrow],
		slideSpeed: 1,
		responsive: {
			0: {
				items: 2
			},
			767: {
				items: 2
			},
			992: {
				items: 3
			},
		},
		onInitialized: function(e){
			
			const slider = $(e.target);
			console.log(slider)
			const items = slider.find('.owl-item');
			const images = slider.find('.product-item__img-wrap');
			const getMaxOfArray = (numArray) => Math.max.apply(null, numArray);
			let heights = [];
			images.map((idx, el) => {
				heights.push($(el).outerHeight());
			})
			items.find('.product-item__img-wrap').height(getMaxOfArray(heights));
				
		}
	}
	const productSliderSettings = {
		loop: false,
		nav: false,
		dots: false,
		items: 1,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		slideSpeed: 1,
		mouseDrag: false,
		touchDrag: false,
		pullDrag: false,
		responsive: {
			0: {
			},
			767: {

			},
			992: {
			},
		}
	}
	const productNavSliderSettings = {
		loop: false,
		nav: true,
		dots: false,
		items: 2,
		margin: 0,
		autoWidth: true,
		mouseDrag: false,
		touchDrag: false,
		pullDrag: false,
		navText: [sliderArrow, sliderArrow],
		responsive: {
			0: {
			},
			767: {

			},
			992: {
			},
		},
		onTranslate: function(e){
			const slider = $(e.target)
			var count = e.item.count;
			const items = slider.find('.owl-item');
			const activeItems = count - 2;
			const index = e.item.index;
			items.removeClass('bordered');
			$(items[index]).addClass('bordered')
			productSlider.trigger('to.owl.carousel', index);
			if (activeItems === index) {
				slider.find('.owl-next').addClass('next-disabled')
			}else {
				slider.find('.owl-next').removeClass('next-disabled')
			}
		},
		onInitialized: function(e){
			const slider = $(e.target);
			const index = e.item.index;
			const items = slider.find('.owl-item');
			items.removeClass('bordered');
			$(items[index]).addClass('bordered');

			$('.product-slider-navigation__item').click(function (e) {
				e.preventDefault();
				const i = $(this).parent().index();
				productSlider.trigger('to.owl.carousel', i);
				items.removeClass('bordered');
				$(this).parent().addClass('bordered');
			})
			if (slider.find('.owl-nav').hasClass('disabled')) {
				slider.parent().addClass('nav-disabled')
			}
		}
	}

	// Popup opener
	$('.js-more-title-popup').click(function (event) {
		event.preventDefault();
		const btnText = $(this).text();
		let popupID = $(this).attr('href');
		const data = {
			title: btnText
		}
		popupClassRemover(popupID)
		if ($.magnificPopup.instance.isOpen) {
			$.magnificPopup.close();
			
			setTimeout(function() {
				mfpPopup(popupID);
			}, 300);

		} else {
			mfpPopup(popupID, data);
		}
	});

	// Popup opener
	$('.js-popup').click(function (event) {
		event.preventDefault();
		let popupID = $(this).attr('href');
		const btn = $(this);
		const data = {
			title: btn.text()
		}

		if (popupID === '#catalog'|| popupID === '#ask-popup') {
			popupPosition = true;
		}


		popupClassRemover(popupID)

		if ($.magnificPopup.instance.isOpen) {
			$.magnificPopup.close();
			
			setTimeout(function() {
				mfpPopup(popupID, data);
			}, 300);

		} else {
			mfpPopup(popupID, data);
		}
	});

	// function baseTemplate(title, value) {
	// 	const html = `
	// 		<div class="info-list__row">
	// 			<div class="info-list__title">${title}</div>
	// 			<div class="info-list__value">${value}</div>
	// 		</div>
	// 	`
	// 	$('.info-list').append($(html));
	// }

	// function serverRequest(path, id, btn) {
	// 	fetch(path)
	// 		.then(response => {
	// 			try {
	// 				if (response.ok) {
	// 					return response.json()
	// 				}
	// 			} catch (error) {
	// 				return response.json().then(error => {
	// 					const e = new Error('Что-то пошло не так')
	// 					e.data = error
	// 					throw e
	// 				})
	// 			}
	// 		})
	// 		.then(json => {
	// 			const filteredElem = json.filter(element => element.productId === id)
	// 			if (filteredElem.length) {
	// 				filteredElem[0].data.forEach(({title, value, body, images}) => {
	// 					if (body !== undefined) {
	// 						const filterStr = body.split('<br>');
	// 						filterStr.forEach(text => {
	// 							$('.product-info__desc').append(`<p>${text}</p>`)
	// 						});
	// 					}
	// 					if (images !== undefined) {
	// 						images.forEach(({src}) => {
	// 							$('.product-slider').append(
	// 							`	<div class="product-slider__item">
	// 									<div class="product-slider__img-wrap">
	// 										<img class="product-slider__img" src=${src} alt="">
	// 									</div>
	// 								</div>`
	// 								)
	// 							$('.product-slider-navigation').append(
	// 								`<div class="product-slider-navigation__item">
	// 									<div class="product-slider-navigation__img-wrap">
	// 										<img class="product-slider-navigation__img" src=${src} alt="">
	// 									</div>
	// 								</div>`
	// 							)
	// 						});
	// 					}
	// 					if (title !== undefined || value !== undefined) {
	// 						baseTemplate(title, value)
	// 					}
	// 				})
	// 			}
	// 		}).catch(err => {
	// 			throw new Error(err)
	// 		}).finally(() => {
	// 			$('.preloader').addClass('preloader--hidden')
	// 			productSlider.owlCarousel(productSliderSettings);
	// 			// productNavSlider.owlCarousel(productNavSliderSettings);
	// 			// productSliderNav()
	// 		})
	// 	$('.product-info__title').text(btn.text())
	// 	$('.product-info__img-title--right').text($('.section__title').text())
	// }
	productSlider.owlCarousel(productSliderSettings);
	productNavSlider.owlCarousel(productNavSliderSettings);

	// sm
	MQ(sm, function () {
		categorySlider.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
	}, function () {
		categorySlider.owlCarousel(categorySliderSettings).addClass('owl-carousel');
	});

	// productSliderNav();
	// product Popup
	$('.js-more-popup').click(function(e) {
		e.preventDefault();
		let popupID = $(this).attr('href');
		// let productId = $(this).attr('data-Id');
		// let btn = $(this)

		// if (popupID === '#product') {
		// 	popupPosition = true;
		// 	$('.preloader').removeClass('preloader--hidden')
		// }

		popupClassRemover(popupID)
		// serverRequest('js/data.json', productId, btn)

		if ($.magnificPopup.instance.isOpen) {
			$.magnificPopup.close();
			
			setTimeout(function() {
				mfpPopup(popupID);
			}, 300);

		} else {
			mfpPopup(popupID);
		}
	});

	// Optimize Svg Icons in IE
	svg4everybody();


	// $('.product-info__link').click(function (e) {
	// 	e.preventDefault();
	// 	const showHeight = $('.product-info__desc').outerHeight();
	// 	const unShowHeight = 88;
	// 	const toggleDesc = $('.product-info__toggle-desc');
	// 	toggleDesc.toggleClass('show');
	// 	if (toggleDesc.hasClass('show')) {
	// 		toggleDesc.css('height', showHeight)
	// 		$(this).text('Скрыть все')
	// 	} else {
	// 		toggleDesc.css('height', unShowHeight)
	// 		$(this).text('Показать все')
	// 	}
	// })
	
	$('.js-scroll-down-fp').click(function (e) {
		e.preventDefault();
		fullpage_api.moveSectionDown();
	})

	// Phone input mask
	$('input[type="tel"]').inputmask({
		mask: '+7 (999) 999-99-99',
		showMaskOnHover: false,
	});

	// Lazy Load Init
	new LazyLoad({
		elements_selector: ".lazy"
	});

	// E-mail Ajax Send
	$('form').submit(function(e) {
		e.preventDefault();

		let form = $(this);
		let formData = {};
		formData.data = {};

		// Serialize
		form.find('input, textarea').each(function() {
			let name = $(this).attr('name');
			let title = $(this).attr('data-name');
			let value = $(this).val();

			formData.data[name] = {
				title: title,
				value: value,
			};

			if (name === 'subject') {
				formData.subject = {
					value: value,
				};
				delete formData.data.subject;
			}
		});

		$.ajax({
			type: 'POST',
			url: 'mail/mail.php',
			dataType: 'json',
			data: formData,
		}).done(function(data) {
			if (data.status === 'success') {
				if (form.closest('.mfp-wrap').hasClass('mfp-ready')) {
					form.find('.form-result').addClass('form-result--success');
				} else {
					mfpPopup('#success');
				}

				setTimeout(function() {
					if (form.closest('.mfp-wrap').hasClass('mfp-ready')) {
						form.find('.form-result').removeClass('form-result--success');
					}
					$.magnificPopup.close();
					form.trigger('reset');
				}, 3000);
			} else {
				alert('Ajax result: ' + data.status);
			}
		});
		return false;
	});

	////////// Load functions
	$(window).on('load', function() {
		//
	});

	/////////// mfp popup - https://dimsemenov.com/plugins/magnific-popup/
	const closeIcon = '<svg class="icon icon--close"><use xlink:href="http://localhost/nut/wp-content/themes/nut-theme/assets/img/svg-sprite.svg#close"></use></svg>'
	// const closeIcon = '<svg class="icon icon--close"><use xlink:href="img/svg-sprite.svg#close"></use></svg>'
	let mfpPopup = function(popupID, data) {
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
			fixedContentPos: popupPosition,
			removalDelay: 300,
			closeMarkup: `<button type="button" class="mfp-close">${closeIcon}</button>`,
			mainClass: 'mfp-fade-zoom',
			callbacks: {
				open: function() {
					if (popupID === '#menu') {
						$('.hamburger').addClass('is-active')
						if (!isMobile) {
							menuAnimation()
						}
						if (isMobile) {
							menuResponsiveAnimation()
						}
						fpScrollSwitcher(false)
					}
					if (popupID === '#ask-popup') {
						fpScrollSwitcher(false)
						$('.request-popup__title').text(data.title)
					}
					if (popupID === '#request') {
						$('.request-popup__title').text(data.title)
						$('.request-popup').find('textarea').val(data.title)
					}
				},
				close: function() {
					if (popupID === '#menu') {
						$('.hamburger').removeClass('is-active')
						fpScrollSwitcher(true)
					}
					if (popupID === '#ask-popup') {
						fpScrollSwitcher(true)
					}
					// if (popupID === '#product') {
					// 	$('.info-list').html('')
					// 	$('.product-info__desc').html('')
					// 	productSlider.html('')
					// 	productNavSlider.html('')
					// 	productSlider.trigger('destroy.owl.carousel');
					// 	$('.product-info__toggle-desc').removeClass('show').css('height', 88)
					// }
				}
			}
		});
	};

})