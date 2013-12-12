/*
  This plugin creates a picture frame around an img tag. 
  Settable elements:
    Frame color and frame width (pixels)
    Matte color and matte width (vertical and horizontal, in percentage of image width (add %) or pixels (add px)
    Internal matte color and width (pixels). This is what shows next to the image when you use a 45 degree matte cutter.
    Set the width and height of the image if it is not immediately visible so the plugin knows how big to make the frame.
    Title object: title: { text: 'Title text', position: 'above' or 'below' }
*/
(function($) {
  $.fn.frameIt = function(options) {
  
    settings = $.extend({
      title: null,
      frameColor: '#000000',
      frameWidth: 20,
      matteColor: '#555555',
      matteBorder: {
        x: '10%',
        y: '10%'
      },
      innerColor: '#ffffff',
      innerWidth: 3,
      imageHeight: 0,
      imageWidth: 0,
      widthLimit: null
    }, options );
    
  
    return this.each(function() {
    
      if (!$(this).is('img')) {
        return;
      }
      
      if (settings.widthLimit) {
        if ($(window).width() < settings.widthLimit) {
          return;
        }
      }
      
      var $image = $(this);      
      $image.wrap('<div class="frame-matte"></div>');
      var w = Math.max($image.width(), settings.imageWidth);
      var h = Math.max($image.height(), settings.imageHeight);
      var matte = new Object();
      if (settings.matteBorder.x.match(/%/)) {
        matte.leftBorder = w * parseFloat(settings.matteBorder.x.replace('%', ''))/100.0
      } else {
        matte.leftBorder = parseInt(settings.matteBorder.x.replace('px', ''))
      }
      if (settings.matteBorder.y.match(/%/)) {
        matte.topBorder = h * parseFloat(settings.matteBorder.y.replace('%', ''))/100.0
      } else {
        matte.topBorder = parseInt(settings.matteBorder.y.replace('px', ''))
      }
      matte.w = w + (2 * matte.leftBorder)
      matte.h = h + (2 * matte.topBorder)
      $frame = $image.parent();
      var imagePosition = {
        left: matte.leftBorder + settings.frameWidth - settings.innerWidth,
        top: matte.topBorder + settings.frameWidth - settings.innerWidth
      }
      $frame.css({ 'width': (matte.w + 2*settings.frameWidth) + 'px', 'height': (matte.h + 2*settings.frameWidth) + 'px', 'position': 'relative', 'background-color': settings.matteColor, 'border-width': settings.frameWidth + 'px', 'border-color': settings.frameColor, 'border-style' : 'solid'  });
      $image.css({ 'position': 'absolute', 'left': imagePosition.left + 'px', 'top': imagePosition.top + 'px', 'border-width': settings.innerWidth + 'px', 'border-color': settings.innerColor, 'border-style' : 'solid' });
      $image.addClass('framed');
      
      if (settings.title.text) {
        $frame.append('<div class="image-title" style="display: inline-block">' + settings.title.text + '</div>');
        $title = $frame.children('.image-title');
        console.log ($frame.width());
        console.log ($title.width());
        titleCss = {'left': ($frame.width() - $title.width())/2 + 'px', 'padding': '3px 5px', 'position': 'absolute'}
        if (settings.title.position == 'above') {
          titleCss = $.extend({}, titleCss, { 'top': imagePosition.top/4 + 'px' });
        } else {  
          titleCss = $.extend({}, titleCss, { 'bottom': imagePosition.top/4 + 'px' });
        }
        console.log(titleCss); 
        $frame.children('.image-title').css(titleCss);
      }
    });
  }
} (jQuery));