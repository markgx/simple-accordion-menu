/*
  https://github.com/markgx/simple-accordion-menu

  Copyright (c) 2012 Mark Guerra <markgx@gmail.com>

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

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
