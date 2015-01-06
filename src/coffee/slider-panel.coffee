+(->
  'use strict'
  Plugin = (options) ->
    @each ->
      $this = $(this)
      if options is `undefined`
        this.options = $.extend({}, SliderPanel.DEFAULTS, $this.data())
      else
        this.options = $.extend({}, SliderPanel.DEFAULTS, options)
      new SliderPanel(this, this.options)

  zIndex = 0
  SliderPanel = (element, options) ->
    @init element, options

  SliderPanel.DEFAULTS =
    overlayClass: "overlay"
    bodyClass: "body"
    wrapperClass: "wrapper"
    slideOutClass: "slide-out"
    dimClass: "dim"
    overlayTemplate: "<div class=\"overlay dim\"></div>"

  SliderPanel::init = (element, options) ->
    @$element = $(element)
    @options = options
    @position = 0
    @slideInClass = "slide-in-" + options.dir
    @dirClass = options.dir + "-panel"
    @$panel = $("#" + options.panel)
    @$wrapper = $("." + options.wrapperClass)
    _this = this
  
    $(".overlay").click ->
      _this.slide()

    @$overlay = $(".overlay")
    if $("body").css("zIndex") is "auto"
      zIndex = 0
    else
      zIndex = $("body").css("zIndex")

    if @options.dim is false
      @$overlay.removeClass options.dimClass
    else
      @$overlay.addClass options.dimClass

    @$element.css "zIndex", zIndex + 1
    @$overlay.css "zIndex", zIndex + 1
    @$panel.css "zIndex", zIndex + 2
    @$panel.removeClass @dirClass
    @$panel.addClass @dirClass
    @$panel.addClass @slideInClass
    @slide()

  SliderPanel::slide = ->
    if @position is 0
      @$panel.removeClass @options.slideOutClass
      @$panel.addClass @slideInClass
      @$overlay.css "display", "block"
      unless $("body").data("slide") is "overlay"
        @$wrapper.addClass @slideInClass
    else
      @$panel.removeClass @slideInClass
      @$panel.addClass "slide-out"
      @$overlay.css "display", "none"
      unless $("body").data("slide") is "overlay"
        @$wrapper.removeClass @slideInClass
    @position++

  old = $.fn.button
  $.fn.sliderpanel = Plugin
  $.fn.sliderpanel.Constructor = SliderPanel
  $(window).on "load", ->
    $(".wrapper").prepend "<div class=\"overlay dim\"></div>"
    $("body").find("[data-panel]").each ->
      $this = undefined
      $this = $(this)
      $this.click (e) ->
        e.preventDefault()
        Plugin.call $this
).call this