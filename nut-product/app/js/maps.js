var myMap;

function init() {
	myMap = new ymaps.Map(
		'map',
		{
			center: [ 55.756893, 37.527795 ],
			zoom: 18,
			controls: ["default"],
			type: 'yandex#map',
		},
		{
			searchControlProvider: 'yandex#search'
		});

		myPlacemark = new ymaps.Placemark([ 55.756893, 37.527795 ], {
			hintContent: '',
			balloonContent: ''
		});
		

		myMap.geoObjects.add(myPlacemark);
		myMap.behaviors.disable('multiTouch').disable('scrollZoom');
		myMap.controls.remove('searchControl').remove('routeEditor').remove('trafficControl').remove('typeSelector');
}

function mapRequest(fn) {
	if ($('.contacts').length) {
		$.ajax({
			url: '//api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=',
			dataType: "script",
		}).done(function(){
			ymaps.ready(fn);
		});
	}
	$(window).on('load', function(e) {
	})
}
setTimeout(() => {
	mapRequest(init)
	console.log('ishledi')
}, 2000);