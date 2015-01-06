##[Slider Panel v1.1](http://sudharti.github.io/slider-panel/)

A simple sliding panel to display off-canvas contents. The panel pushes the exiting body content to the specified direction and smoothly transitions into the view area. This plugin uses css transforms (translate3d) and cubic bezier transitions to achieve the sliding effect.

![coffee](https://sudharti.github.io/slider-panel/assets/img/coffeescript.png) + ![sass](https://sudharti.github.io/slider-panel/assets/img/sass.png)

###Getting Started
####Quick Start
- [Download](https://github.com/sudharti/slider-panel/archive/v1.1.zip)
- or Clone `git clone https://github.com/sudharti/slider-panel.git`
- Include js and css from dist/
- Include JQuery depedency
- Check the [Docs](sudharti.github.io/slider-panel/)
- Plug it in your code.

###Folder Structure
```
slider-panel/
  ├── dist/
  │   ├── css/
  │   │   ├── slider-panel.css
  │   │   └── slider-panel.min.css
  │   │
  │   └── js/
  │       ├── slider-panel.js
  │       └── slider-panel.min.js
  │   
  ├── assets/
  │   ├── css/
  │   └── js/
  ├── src/
  │   ├── coffee/
  │   │   └── slider-panel.coffee
  │   └── scss/
  │       ├── _dimension.scss
  │       ├── _panel.scss
  │       ├── _transform.scss
  │       ├── _translate.scss
  │       ├── _variables.scss
  │       └── slider-panel.scss
  ├── code-templates/
  ├── index.html
  ├── Gruntfile.js
  ├── package.json
  ├── README.md
  └── LICENSE
```
###Issues
You can raise issues at [https://github.com/sudharti/slider-panel/issues](https://github.com/sudharti/slider-panel/issues)

###Contributing
- Fork the Project at [https://github.com/sudharti/slider-panel](Fork the Project at https://github.com/sudharti/slider-panel)
- Make Changes
- Send PR

##ChangeLog
####v1.1
- Add Features
- Fixed Bug with multiple sliderpanels
- Update Docs with detailed examples

####v1.0
- First Stable version
- Rewrote the whole sourcecode
- Used Bootstrap's plugin structure
- Change Source to Coffeescript & Sass
- Grunt Environment

####Pre release
- First Implementation of sliderpanel

##License

This project is licensed under the terms of [MIT License](http://opensource.org/licenses/MIT)
