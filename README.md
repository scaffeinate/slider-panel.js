Medium Slider
=============
Medium Slider is a simple slide-panel implementation. Inspired from [medium](https://medium.com/)

Demo
====
Checkout the [Demo](http://sudharti.github.io/medium-slider.js/)

Usage
=====
Javascript
----------
index.html
```html
<!DOCTYPE html>
<html>
	<head>
		<title>Slider Demo</title>
		<link rel="stylesheet" href="css/medium-slider.css" type="text/css" charset="utf-8" />
		<script type="text/javascript" src="js/medium-slider.js"></script>
		<script type="text/javascript" src="js/util.js"></script>
	</head>
	<body>
		<div id="panelLeft" class="mdm-panel">
			<ul>
				<li>Home</li>
				<li>Collections</li>
				<li>Bookmarks</li>
				<li>Stats</li>
				<li>New Story</li>
			</ul>
		</div>
		<div class="wrapper">
			<button id="slide_button_left">M</button>
		</div>
	</body>
</html>

```
util.js
```javascript
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
```

Data Attributes
----------------
index.html
```html
<button id="slide_button_left" data-dir="left" data-type="push" data-panel="panelLeft">M</button>
```
util.js
```javascript
window.onload = function(){
	var slide_button_left = document.getElementById("slide_button_left");
	slide_button_left.onclick = function(){
		new Slider.Slide(this);
	};
};
```

Slide Open and Close callbacks
------------------------------
```javascript
window.onload = function(){
	var slide_button_left = document.getElementById("slide_button_left");
	slide_button_left.onclick = function(){
		new Slider.Slide(this,{
			open: function(){
				console.log('Open');
			},
			close: function(){
				console.log('Close');
			}
		});
	};
};
```
Options
-------
``` javascript
new Slider.Slide(button,[options]);
```
The various options the method can take are:

- `panel` - Panel Id
- `dir` - left, right, top, bottom
- `type` - push, overlay
- `open` - Callback function on slider open
- `close` - Callback function on slider close

Cubic Bezier Transition
=======================
To bring about the smoothness of the slider, cublic-bezier transition is being used.
<pre>transition: transform .2s cubic-bezier(0.2,0.3,0.25,0.9) 0s;</pre>

See also <br>
[cubic-bezier.com](http://cubic-bezier.com/)<br>
[css3beziercurve.net](http://www.css3beziercurve.net/)

Browser Compatibility
=====================

Firefox 4.0 (2.0)+<br>
Chrome 4.0+<br>
Internet Explorer 10+<br>
Opera 10.5+<br>
Safari 3.1+

[Timing-Functions-Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/timing-function#Browser_compatibility)

License
=======

This project is licensed under the terms of [MIT License](http://opensource.org/licenses/MIT)
