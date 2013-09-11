/* 
   jQuery.limitAnimate.js v1.0.0 jQuery plugin for animate background image 
   Copyright (c) 2012 MINAMI Yoshitaka
   Licensed under the MIT License:
   http://www.opensource.org/licenses/mit-license.php
   Please attribute the author if you use it.
*/

(function($){
  var base_name = 'limitAnime';
  $.fn[base_name] = function(options){
    
    var elements = this;
    var settings = $.extend({
      width: 100,
      frames: 8,
      delay: 100,
      loop: true
    },options);
    var timer;
    var stopFlg = false;
    var setTimer = function() {
        var counter = 0;
        var repeatObject = function() {
            if(counter<settings.frames-1){ counter++; } else { counter = 0 };
            setCSS(counter);
            if( settings.loop || (counter<settings.frames-1 && !settings.loop) ){
              if(!stopFlg) timer = setTimeout(repeatObject, settings.delay);
            }
        };
        timer = setTimeout(repeatObject, 0);
    }
        
    var setCSS = function(counter) {
      var posX = settings.width*counter*-1+"px";
      $(elements).css({
        backgroundPosition: posX + ' 0px'
      });
    }
    
    var posNum = 1;
    var frameNum = settings.frames;
    
    elements.startAnimate = function() {
      stopFlg = false;
      setTimer();
      return this;
    };
    
    elements.stopAnimate = function() {
      stopFlg = true;
      return this;
    };
        
    return this;
  };
})(jQuery);