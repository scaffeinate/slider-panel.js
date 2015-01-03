+(function() {
  var Plugin, SlidePanel, old, position, zIndex;
  Plugin = void 0;
  SlidePanel = void 0;
  old = void 0;
  position = void 0;
  zIndex = void 0;
  Plugin = function() {
    return this.each(function() {
      var $this, options;
      $this = void 0;
      options = void 0;
      $this = $(this);
      options = $.extend({}, SlidePanel.DEFAULTS, $this.data());
      return new SlidePanel(this, options);
    });
  };
  "use strict";
  position = 0;
  zIndex = 0;
  SlidePanel = function(element, options) {
    return this.init(element, options);
  };
  SlidePanel.DEFAULTS = {
    overlayClass: "overlay",
    bodyClass: "body",
    wrapperClass: "wrapper",
    slideOutClass: "slide-out",
    overlayTemplate: "<div class=\"overlay\"></div>"
  };
  SlidePanel.prototype.init = function(element, options) {
    var _this;
    _this = void 0;
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
    this.$element.css("zIndex", zIndex + 1);
    this.$overlay.css("zIndex", zIndex + 1);
    this.$panel.css("zIndex", zIndex + 2);
    this.$panel.removeClass(this.dirClass);
    this.$panel.addClass(this.dirClass);
    this.$panel.addClass(this.slideInClass);
    return this.slide();
  };
  SlidePanel.prototype.slide = function() {
    if (position % 2 === 0) {
      this.$panel.removeClass(this.options.slideOutClass);
      this.$panel.addClass(this.slideInClass);
      this.$wrapper.addClass(this.slideInClass);
      this.$overlay.css("display", "block");
    } else {
      this.$panel.removeClass(this.slideInClass);
      this.$panel.addClass("slide-out");
      this.$wrapper.removeClass(this.slideInClass);
      this.$overlay.css("display", "none");
    }
    return position++;
  };
  old = $.fn.button;
  $.fn.slidepanel = Plugin;
  $.fn.slidepanel.Constructor = SlidePanel;
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
