+(function() {
  'use strict';
  var Plugin, SliderPanel, old, position, zIndex;
  Plugin = function(options) {
    return this.each(function() {
      var $this;
      $this = $(this);
      if (options === undefined) {
        this.options = $.extend({}, SliderPanel.DEFAULTS, $this.data());
      } else {
        this.options = $.extend({}, SliderPanel.DEFAULTS, options);
      }
      return new SliderPanel(this, this.options);
    });
  };
  position = 0;
  zIndex = 0;
  SliderPanel = function(element, options) {
    return this.init(element, options);
  };
  SliderPanel.DEFAULTS = {
    overlayClass: "overlay",
    bodyClass: "body",
    wrapperClass: "wrapper",
    slideOutClass: "slide-out",
    dimClass: "dim",
    overlayTemplate: "<div class=\"overlay dim\"></div>"
  };
  SliderPanel.prototype.init = function(element, options) {
    var _this;
    this.$element = $(element);
    this.options = options;
    this.slideInClass = "slide-in-" + options.dir;
    this.dirClass = options.dir + "-panel";
    this.$panel = $("#" + options.panel);
    this.$wrapper = $("." + options.wrapperClass);
    _this = this;
    if (position === 0) {
      $(".wrapper").prepend(this.options.overlayTemplate);
      $(".overlay").click(function() {
        return _this.slide();
      });
    }
    this.$overlay = $(".overlay");
    if ($("body").css("zIndex") === "auto") {
      zIndex = 0;
    } else {
      zIndex = $("body").css("zIndex");
    }
    if (this.options.dim === false) {
      this.$overlay.removeClass(options.dimClass);
    }
    this.$element.css("zIndex", zIndex + 1);
    this.$overlay.css("zIndex", zIndex + 1);
    this.$panel.css("zIndex", zIndex + 2);
    this.$panel.removeClass(this.dirClass);
    this.$panel.addClass(this.dirClass);
    this.$panel.addClass(this.slideInClass);
    return this.slide();
  };
  SliderPanel.prototype.slide = function() {
    if (position % 2 === 0) {
      this.$panel.removeClass(this.options.slideOutClass);
      this.$panel.addClass(this.slideInClass);
      this.$overlay.css("display", "block");
      if ($("body").data("slide") !== "overlay") {
        this.$wrapper.addClass(this.slideInClass);
      }
    } else {
      this.$panel.removeClass(this.slideInClass);
      this.$panel.addClass("slide-out");
      this.$overlay.css("display", "none");
      if ($("body").data("slide") !== "overlay") {
        this.$wrapper.removeClass(this.slideInClass);
      }
    }
    return position++;
  };
  old = $.fn.button;
  $.fn.sliderpanel = Plugin;
  $.fn.sliderpanel.Constructor = SliderPanel;
  return $(window).on("load", function() {
    return $("body").find("[data-panel]").each(function() {
      var $this;
      $this = void 0;
      $this = $(this);
      return $this.click(function(e) {
        e.preventDefault();
        return Plugin.call($this);
      });
    });
  });
}).call(this);
