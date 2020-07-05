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

	let flourFlag = true;

	function fpInit() {
		// fullpage config - https://github.com/alvarotrigo/fullPage.js
		let fp = {
			containerSelector: '.fp-sections',
			anchors: ['home', 'flour', 'mash'],
		};
		
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

				if (destination.anchor === 'flour') {
					if (flourFlag) {
						categoriesAnimation();
						flourFlag = false;
					}
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
			gsap.fromTo(nutsLeft, 3, { y: 0 }, { y: 10, repeat: -1, repeatDelay: 0, yoyo: true })
			gsap.fromTo(nutsRight, 3, { y: 0 }, { y: 10, repeat: -1, repeatDelay: 0, yoyo: true })
		}, 2500);

		// mouseMoveParallax
		function mouseMoveParallax() {
			$('.main').on('mousemove', function (e) {
				const posX = e.clientX / 50;
				const posY = e.clientY / 80;
				// gsap.to(nutsLeft, 0.8,  {x: posX });
				// gsap.to(nutsRight, 0.8, { x: -posX });
				gsap.to(flowersLeft, 0.3, { x: posX, y: posY });
				gsap.to(flowersRight, 0.3, { x: -posX, y: posY });
				gsap.to(petalLeft, 0.01, { x: -e.clientX / 20, y: -e.clientY / 20 });
				gsap.to(petalRight, 0.2, { x: -e.clientX / 20, y: -e.clientY / 20 });
			})
		}
	}
	mainContentAnimation();

	const productsLeftImg = document.querySelector('.products-presentation__img-wrap--left')
	const productsRightImg = document.querySelector('.products-presentation__img-wrap--right')
	
	function categoriesAnimation() {
	const productItems = document.querySelectorAll('.products-presentation__item');
		const bgShadow = document.querySelector('.products-presentation__background-shadow')

		// one-off animation
		gsap.fromTo(productsLeftImg, 1, { y: 150, opacity: 0 }, { y: 0, opacity: 1}).delay(1)
		gsap.fromTo(productsRightImg, 1, { y: 150, opacity: 0 }, { y: 0, opacity: 1}).delay(0.8)
		gsap.fromTo(bgShadow, 0.8, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1 }).delay(0.6)
		

		productItems.forEach((elements, index) => {
			gsap.fromTo(elements, 0.5, { scale: 0}, { scale: 1}).delay(1.4 + (index / 10))
		});

		// one-off animation
		// gsap.fromTo(productsLeftImg, 0.8, { rotate: -45, x:-450, y: -500, opacity: 0 }, { rotate: 0, x: 0, y: 0, opacity: 1}).delay(1)
		// gsap.fromTo(productsRightImg, 0.8, { rotate: 45, x: 450, y: -500, opacity: 0 }, { rotate: 0, x: 0, y: 0, opacity: 1}).delay(0.8)
		// gsap.fromTo(bgShadow, 0.8, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1 }).delay(0.6)
		

		// productItems.forEach((elements, index) => {
		// 	gsap.fromTo(elements, 0.7, { scale: 0}, { scale: 1, ease: "elastic"}).delay(1.8 + (index / 10))
		// });
		
		function mouseMoveParallax() {
			const item1 = document.querySelector('.products-presentation__item:nth-child(1)')
			const item2 = document.querySelector('.products-presentation__item:nth-child(2)')
			const item3 = document.querySelector('.products-presentation__item:nth-child(3)')
			const item4 = document.querySelector('.products-presentation__item:nth-child(4)')
			const item5 = document.querySelector('.products-presentation__item:nth-child(5)')
			const item6 = document.querySelector('.products-presentation__item:nth-child(6)')
			const item7 = document.querySelector('.products-presentation__item:nth-child(7)')

			
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
