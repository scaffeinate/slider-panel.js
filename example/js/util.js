window.onload = function(){
	var slide_button_left = document.getElementById("slide_button_left");
	slide_button_left.onclick = function(){
		new Slider.Slide(this,{ 
			panel: 'panelLeft', 
			type: 'push', 
			dir: 'left'
		});
	};
};
