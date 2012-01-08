;(function ($, window, document) {
  var defaults = {
    slideSpeed: 'normal'
  };

  function simpleAccordionMenu(element, options) {
    this.element = element;
    this.options = $.extend({}, defaults, options) ;

    this.init();
    return element;
  }

  simpleAccordionMenu.prototype.init = function () {
    var $el = $(this.element);
    var options = this.options;

    $el.find('li ul').hide();

    if (options.initialOpen) {
      $($el.children()[options.initialOpen]).children().show();
    }

    $el.find('a').click(function(e) {
      var $nextEl = $(this).next();
      if ($nextEl.is('ul')) {
        e.preventDefault();

        if ($nextEl.is(':hidden')) {
          $el.find('li ul').slideUp(options.slideSpeed);
          $nextEl.slideDown(options.slideSpeed);
        }
      }
    })
  };

  $.fn.simpleAccordionMenu = function (options) {
    return new simpleAccordionMenu(this, options);
  }
})(jQuery, window, document);
