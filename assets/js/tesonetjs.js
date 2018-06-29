$(function(){

	//console.log("veikia");

	$.getJSON('assets/js/reviews-section.json', function(data) {
		//console.log(data);
	    //var template = $('#personTpl').html();
	    var template = $('.reviews-script').html();

	    //console.log(template);
	    //var html = Mustache.render(template, data);
	    var html = Mustache.render(template, data);
	    //console.log(html);
	    //$('#sampleArea').html(html);
	    $('.reviews-section').html(html);
	});

});