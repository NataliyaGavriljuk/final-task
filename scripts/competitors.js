(function(){
	var slide = document.getElementById("competitors"),
		buttons = slide.getElementsByClassName("legends")[0].getElementsByTagName("div"), i,
		scales = slide.getElementsByClassName("scales")[0],
		activeScales;
		
		for(i = 0; i < buttons.length; i++){
			(function(i){
				buttons[i].addEventListener("click", function(){
					if(activeScales){
						scales.classList.remove(activeScales);
					}
					activeScales = buttons[i].dataset.value;
					scales.classList.add(activeScales);
				});
			})(i);
		};
})();