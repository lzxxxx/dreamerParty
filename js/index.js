var media = document.getElementsByClassName("audio")[0];
$('.music').on('click',function(){
	if(media.paused){
		media.play();
	}else {
		media.pause();
	}
})
var index = 0;
var startY = 0;
var endY = 0;
var slide_bol = true;
$(document).on('touchstart',function(e){
	startY = e.changedTouches[0].clientY;
})
if(slide_bol){
$(document).on('touchend',function(e){
	endY = e.changedTouches[0].clientY;
	if(slide_bol){
		if(endY - startY < -50){
			index = index + 1;
			if(index > 8){
				index = 8;
			}
		} else if(endY - startY > 50){
			index = index - 1;
			if(index < 0){
				index = 0;
			}
		}else {
			console.log('no change');
		}
		console.log(index);
		$('.wrap>div:gt('+index+')').fadeOut(1500);
		$('.wrap>div:lt('+index+')').fadeOut(1500);
		$('.wrap>div:eq('+index+')').fadeIn(1500);
	}
	slide_bol = false;
	setTimeout(function(){
		slide_bol = true;
		console.log(1);
	},2500);
})
}

