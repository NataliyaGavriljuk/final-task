(function(){	
	var buttons = document.querySelectorAll("button[data-active]"), 
		i, 
		select = buttons[0],
		wrapper = document.getElementsByClassName("wrapper-content")[0],
		slides = document.getElementsByClassName("slide"), activeSlide;

		setTimeout(function(){
			slides[0].classList.add("animate");
			select.classList.add("selected");
			activeSlide = slides[0];
		}, 500);

	function clearSlide(button){
		if(button){
			button.classList.remove("selected");
			wrapper.classList.remove(button.dataset.active);
			activeSlide.classList.remove("animate");
		}
	}
	function activateSlide(slide, button){
		select = button;
		select.classList.add("selected");
		wrapper.classList.add(select.dataset.active);
		activeSlide = slide;
		activeSlide.classList.add("animate");
	}
	for(i = 0; i < buttons.length; i++){
		(function(i){
			buttons[i].addEventListener("click", function(){
				clearSlide(select);
				activateSlide(slides[i], buttons[i]);
			});
		})(i);
	};
	for(i = 0; i < slides.length; i++){
		(function(i){
				var coordsDown, coordsUp;
				slides[i].addEventListener("mousedown", function(element){
					coordsDown = element.offsetX; 
				});
				slides[i].addEventListener("mouseup", function(element){
					coordsUp = element.offsetX; 
					if(coordsDown - coordsUp != 0){
						if(coordsDown - coordsUp < 10){
							if(i != 0){
								clearSlide(select);
								activateSlide(slides[i-1], buttons[i-1]);
							}
						}else{
							if(i != slides.length - 1){
								clearSlide(select);
								activateSlide(slides[i+1], buttons[i+1]);
							}
						}
					}
				});
		})(i);
	};
	})();