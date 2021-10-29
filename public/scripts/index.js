
$(document).ready(function(){
	
	
// 	fadein effects
	$(".fadeIn").animate({opacity: 1}, 1000)
	$(".fadeIn2").animate({opacity: 1}, 1500)
	$(".fadeIn1").animate({opacity: 1}, 1250)
	
// Scroll effects 
	$(window).scroll(function(){
		if($(this).scrollTop() > 300){
			$(".imgFade").css({"opacity": "1"})
		}
		else {
			$(".imgFade").css({"opacity": "0"})
		}
	})
	$(window).scroll(function(){
		if($(this).scrollTop() > 100){
			$(".scrollFade").css({"opacity": "1"})
		}
	})
	
	
})





