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
			},
			afterLoad: function (origin, destination, direction) {

			},
			afterRender: function () {
			},
			afterResize: function (width, height) { },
			afterResponsive: function (isResponsive) { },
			afterSlideLoad: function (section, origin, destination, direction) { },
			onSlideLeave: function (section, origin, destination, direction) { 
				if (destination.anchor !== 'home') {
					$('.main-header__logo').removeClass('logo--hidden')
				}else {
					$('.main-header__logo').addClass('logo--hidden')
				}
			}
		});
	}

	fpInit();
	// if (!isMobile) {
	// }
	
	// Popup opener
	$('.js-popup').click(function(event) {
		event.preventDefault();
		let popupID = $(this).attr('href');

		mfpPopup(popupID);
	});

	// Mobile menu toggle
	$('.js-menu').click(function() {
		$(this).toggleClass('is-active');
		$('.menu').toggleClass('opened');
	});

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
