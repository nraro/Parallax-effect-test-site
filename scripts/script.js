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
