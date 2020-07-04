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
			anchors: ['home', 'next-home', 'home-2'],
		};
		
		new fullpage(fp.containerSelector, {
			menu: false,
			lockAnchors: false,
			anchors: fp.anchors,
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
		}, 2000);

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
