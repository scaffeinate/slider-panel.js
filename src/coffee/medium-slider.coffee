Plugin = ->
  @each ->
    $this = $(this)
    options = $.extend({}, SlidePanel.DEFAULTS, $this.data())
    new SlidePanel(this, options)
    return

"use strict"
position = 0
zIndex = 0
SlidePanel = (element, options) ->
  @init element, options
  return

SlidePanel.DEFAULTS =
  overlayClass: "overlay"
  bodyClass: "body"
  dirClass: "left-panel"
  wrapperClass: "wrapper"
  slideInClass: "slide-in-left"
  slideOutClass: "slide-out"
  overlayTemplate: "<div class=\"overlay\"></div>"

SlidePanel::init = (element, options) ->
  @$element = $(element)
  @options = options
  @$panel = $("#" + options.panel)
  @$wrapper = $("." + options.wrapperClass)
  _this = this
  if position is 0
    $("body").prepend @options.overlayTemplate
    $(".overlay").click ->
      _this.slide()
      return

  @$overlay = $(".overlay")
  if $("body").css("zIndex") is "auto"
    zIndex = 0
  else
    zIndex = $("body").css("zIndex")
  @$element.css "zIndex", zIndex + 1
  @$overlay.css "zIndex", zIndex + 1
  @$panel.css "zIndex", zIndex + 2
  @$panel.removeClass @options.dirClass
  @$panel.addClass @options.dirClass
  @$panel.addClass @options.slideInClass
  @slide()
  return

SlidePanel::slide = ->
  if position % 2 is 0
    @$panel.removeClass @options.slideOutClass
    @$panel.addClass @options.slideInClass
    @$wrapper.addClass @options.slideInClass
    @$overlay.css "display", "block"
  else
    @$panel.removeClass @options.slideInClass
    @$panel.addClass "slide-out"
    @$wrapper.removeClass @options.slideInClass
    @$overlay.css "display", "none"
  position++
  return

old = $.fn.button
$.fn.slidepanel = Plugin
$.fn.slidepanel.Constructor = SlidePanel
$(window).on "load", ->
  $("body").find("[data-panel]").each ->
    $this = $(this)
    $this.click (e) ->
      e.preventDefault()
      Plugin.call $this
      return
    return
  return
