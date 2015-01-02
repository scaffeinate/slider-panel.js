/*! medium-slider - v0.5.0 
* Copyright (c) 2015 Sudharsanan M; Licensed under MIT */
//Enclose within Namespace Slider
var Slider = {
	mdm_ovrlay: '',
	z: 0,
	mdm_panel: '',
	mdm_dir: '',
	mdm_type: '',
	mdm_wrap: '',
	mdm_btn: '',
	mdm_slide_type: '',
	callback_op_func: function(){
	},
	callback_cl_func: function(){
	},
	slide_position: 0,
	body: '',
	Initialize: function(){
		if(Slider.slide_position == 0){
			mdm_ovrlay = document.createElement('div');
			mdm_ovrlay.id = 'overlay';
			mdm_ovrlay.className = 'mdm-overlay';
			mdm_ovrlay.onclick = function(){Slider.MakeSlide();}
			document.body.appendChild(mdm_ovrlay);
			document.body.insertBefore(mdm_ovrlay, document.body.firstChild);
			document.body.className += ' mdm-body';
		}	
		mdm_wrap = document.getElementsByClassName('wrapper')[0];
	},
	Slide: function(btn, parameters){
		
		Slider.Initialize();
		
		mdm_btn = btn;
		parameters = (parameters == undefined) ?  {} : parameters;
		mdm_type = (parameters.type == undefined) ? mdm_btn.getAttribute('data-type') : parameters.type;
		mdm_dir = (parameters.dir == undefined) ? mdm_btn.getAttribute('data-dir') : parameters.dir;
		mdm_panel = document.getElementById((parameters.panel == undefined) ? mdm_btn.getAttribute('data-panel') : parameters.panel);
		Slider.callback_op_func = (parameters.open == undefined) ? function(){} : parameters.open;
		Slider.callback_cl_func = (parameters.close == undefined) ? function(){} : parameters.close;
		
		if(Slider.slide_position == 0){
			Slider.z = (document.body.style.zIndex == 'auto')?0:document.body.style.zIndex;
			mdm_btn.style.zIndex = Slider.z + 1;
			mdm_ovrlay.style.zIndex = Slider.z+1;
		}
		
		mdm_panel.style.zIndex = Slider.z + 2;
		
		mdm_panel.classList.remove('mdm-'+mdm_dir+'-panel');
		mdm_panel.className += ' mdm-'+mdm_dir+'-panel';
		mdm_slide_type = 'mdm-slide-in-'+mdm_dir;
		
		Slider.MakeSlide();
	},
	MakeSlide: function(){
		
		if(Slider.slide_position%2 == 0){
			mdm_panel.classList.remove('mdm-slide-out');
			mdm_panel.className += ' ' + mdm_slide_type;
			if(mdm_type == 'push'){
				mdm_wrap.classList.remove('mdm-slide-out');
				mdm_wrap.className += ' ' + mdm_slide_type;
			}
			mdm_wrap.className += ' mdm-hide-overflow';
			mdm_ovrlay.style.display = 'block';
			Slider.callback_op_func();
		}else{
			mdm_panel.classList.remove(mdm_slide_type);
			mdm_panel.className += ' mdm-slide-out';
			if(mdm_type == "push"){
				mdm_wrap.classList.remove(mdm_slide_type);
				mdm_wrap.className += ' mdm-slide-out';
			}
			mdm_wrap.classList.remove('mdm-hide-overflow');
			mdm_ovrlay.style.display = 'none';
			Slider.callback_cl_func();
		}	
		Slider.slide_position++;
	}
};
