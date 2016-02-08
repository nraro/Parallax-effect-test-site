$('nav ul li a').click(function() {
	$('nav ul li a').removeClass('active');
	$('nav ul li a span').removeClass('active');
	var $this = $(this);
	var $child = $(this).children('span');
	if (!$this.hasClass('active')) {
        $this.addClass('active');
    }
    if (!$child.hasClass('active')) {
        $child.addClass('active');
    }
});

$(function() {
  $('a[href^="#"]:not([href="#"])').click(function() {
     var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
    }
  });
});