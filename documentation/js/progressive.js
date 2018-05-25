(function($){$(document).ready(function(){var $window = $(window), $body = $(document.body), $doc = $('.doc-container'), $nav = $doc.find ('.doc-nav'); $nav.affix({offset: {top: function () {return 65; }, bottom: function () {return 150; } } }); $body.scrollspy({target: '.doc-sidebar'}); $('.doc-nav > li').find('ul').each(function(){$(this).parent().append('<span class="toggle-button">+</span>'); }); $('.toggle-button').on('click', function() {$(this).parent().toggleClass('opened'); }); $nav.find ('> li > a').before ($('<span class="docs-progress-bar" />')); var wrapper_top = $nav.offset().top; $(window).scroll(function (){var wrapper_height = $(".doc-nav").height(); var top = $(this).scrollTop(); var windowHeight = $(this).innerHeight(); var $menuElements = $(".doc-nav > li"); var activeLiIndex = $menuElements.filter('.active').index(); console.log(activeLiIndex); $(".docs-section").each(function(i){var this_top = $(this).offset().top; var height = $(this).height(); var this_bottom = this_top + height; var percent = 0; if (top >= this_top && top <= this_bottom) {percent = ((top - this_top) / (height)) * 100; if (percent >= 100) {percent = 100; } } else if (top > this_bottom) {percent = 100; } if (this_bottom < (top + windowHeight - 70) ) {percent = 100; } var $currentProgressBar = $(".doc-nav .docs-progress-bar:eq("+i+")"); if (activeLiIndex > i) {$currentProgressBar.parent().addClass('viewed'); } $currentProgressBar.css("width", percent + "%"); }); }); }); })(jQuery); $(document).ready(function(){$("a[rel^='prettyPhoto']").prettyPhoto(); });