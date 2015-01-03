+(->
  Plugin = undefined
  SlidePanel = undefined
  old = undefined
  position = undefined
  zIndex = undefined
  Plugin = ->
    @each ->
      $this = undefined
      options = undefined
      $this = $(this)
      options = $.extend({}, SlidePanel.DEFAULTS, $this.data())
      new SlidePanel(this, options)


  "use strict"
  position = 0
  zIndex = 0
  SlidePanel = (element, options) ->
    @init element, options

  SlidePanel.DEFAULTS =
    overlayClass: "overlay"
    bodyClass: "body"
    wrapperClass: "wrapper"
    slideOutClass: "slide-out"
    overlayTemplate: "<div class=\"overlay\"></div>"

  SlidePanel::init = (element, options) ->
    _this = undefined
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

  SlidePanel::slide = ->
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
  $.fn.slidepanel = Plugin
  $.fn.slidepanel.Constructor = SlidePanel
  $(window).on "load", ->
    $("body").find("[data-panel]").each ->
      $this = undefined
      $this = $(this)
      $this.click (e) ->
        e.preventDefault()
        Plugin.call $this
).call this