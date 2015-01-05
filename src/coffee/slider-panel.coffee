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

  position = 0
  zIndex = 0
  SliderPanel = (element, options) ->
    @init element, options

  SliderPanel.DEFAULTS =
    overlayClass: "overlay"
    bodyClass: "body"
    wrapperClass: "wrapper"
    slideOutClass: "slide-out"
    overlayTemplate: "<div class=\"overlay\"></div>"

  SliderPanel::init = (element, options) ->
    @$element = $(element)
    @options = options
    @slideInClass = "slide-in-" + options.dir
    @dirClass = options.dir + "-panel"
    @$panel = $("#" + options.panel)
    @$wrapper = $("." + options.wrapperClass)
    _this = this
    if position is 0
      $(".wrapper").prepend @options.overlayTemplate
      $(".overlay").click ->
        _this.slide()

    @$overlay = $(".overlay")
    if $("body").css("zIndex") is "auto"
      zIndex = 0
    else
      zIndex = $("body").css("zIndex")
    @$element.css "zIndex", zIndex + 1
    @$overlay.css "zIndex", zIndex + 1
    @$panel.css "zIndex", zIndex + 2
    @$panel.removeClass @dirClass
    @$panel.addClass @dirClass
    @$panel.addClass @slideInClass
    @slide()

  SliderPanel::slide = ->
    if position % 2 is 0
      @$panel.removeClass @options.slideOutClass
      @$panel.addClass @slideInClass
      @$wrapper.addClass @slideInClass
      @$overlay.css "display", "block"
    else
      @$panel.removeClass @slideInClass
      @$panel.addClass "slide-out"
      @$wrapper.removeClass @slideInClass
      @$overlay.css "display", "none"
    position++

  old = $.fn.button
  $.fn.sliderpanel = Plugin
  $.fn.sliderpanel.Constructor = SliderPanel
  $(window).on "load", ->
    $("body").find("[data-panel]").each ->
      $this = undefined
      $this = $(this)
      $this.click (e) ->
        e.preventDefault()
        Plugin.call $this
).call this