const tar = function() {
	
	$(".thumbnail").click(function(event){

		let srcVal = $(this).find("img").attr("src");
		let altVal = $(this).find("img").attr("alt");

		$('.hero img').attr('src', srcVal);
		$('.hero img').attr('alt', altVal);

	});

	$(".thumbnail").keydown(function(event){

		let p = event.which;

     	if(p==13){
			let srcVal2 = $(this).find("img").attr("src");
			let altVal2 = $(this).find("img").attr("alt");

			$('.hero img').attr('src', srcVal2);
			$('.hero img').attr('alt', altVal2);         
     	}
	});	
}

tar();