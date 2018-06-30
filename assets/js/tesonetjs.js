$(function(){

	var homeLinkHeader = document.querySelector('.home-link-header');
	var featuresLinkHeader = document.querySelector('.features-link-header');
	var reviewsLinkHeader = document.querySelector('.reviews-link-header');
	var downloadLinkHeader = document.querySelector('.download-link-header');

	var homeLinkFooter = document.querySelector('.home-link-footer');
	var featuresLinkFooter = document.querySelector('.features-link-footer');
	var reviewsLinkFooter = document.querySelector('.reviews-link-footer');
	var downloadLinkFooter = document.querySelector('.download-link-footer');

	var downloadButton = document.querySelector('.description__buttons a:first-child button');
	var featuresButton = document.querySelector('.description__buttons a:last-child button');
//console.log(downloadButton);
//console.log(featuresButton);
	var reviewsSection = document.querySelector('.reviews-section');
	var fearuresSection = document.querySelector('.features');
	var downloadSection = document.querySelector('.download');

	reviewsSection.classList.add('hidden-section');


	$.getJSON('assets/js/reviews-section.json', function(data) {
	    var template = $('.reviews-script').html();
	    var html = Mustache.render(template, data);
	    $('.reviews-section').html(html);
	});

	homeLinkHeader.addEventListener('click', goFrontPage);
	featuresLinkHeader.addEventListener('click', goFrontPage);
	downloadLinkHeader.addEventListener('click', goFrontPage);

	homeLinkFooter.addEventListener('click', goFrontPage);
	featuresLinkFooter.addEventListener('click', goFrontPage);
	downloadLinkFooter.addEventListener('click', goFrontPage);

	downloadButton.addEventListener('click', goFrontPage);
	featuresButton.addEventListener('click', goFrontPage);

	reviewsLinkHeader.addEventListener('click', goSecondPage);
	reviewsLinkFooter.addEventListener('click', goSecondPage);

	function goFrontPage(){
		console.log('veikia font');

		fearuresSection.classList.remove('hidden-section');
		downloadSection.classList.remove('hidden-section');
		reviewsSection.classList.add('hidden-section');
	}

	function goSecondPage(){

		fearuresSection.classList.add('hidden-section');
		downloadSection.classList.add('hidden-section');
		reviewsSection.classList.remove('hidden-section');
		console.log('clickas veikia second');
		
	}

});