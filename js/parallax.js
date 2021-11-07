$(window).resize(function() {
    $window = $(window);
    if ($window.width() > 800) {
        var $window = $(window);

        $('section[data-type="background"]').each(function() {
            var $bgobj = $(this);
            $(window).scroll(function() {
                // Scroll the background at var speed
                // the yPos is a negative value because we're scrolling it UP!
                var yPos = -(($window.scrollTop() - $bgobj.offset().top) / $bgobj.data('speed'));
                // Put together our final background position
                var coords = '50% ' + yPos + 'px';
                // Move the background
                $bgobj.css({ backgroundPosition: coords });
            });

        });
    }
});

$(document).ready(function() {
    $window = $(window);
    if ($window.width() > 800) {

        var $window = $(window);

        $('section[data-type="background"]').each(function() {
            var $bgobj = $(this);
            $(window).scroll(function() {
                // Scroll the background at var speed
                // the yPos is a negative value because we're scrolling it UP!
                var yPos = -(($window.scrollTop() - $bgobj.offset().top) / $bgobj.data('speed'));
                // Put together our final background position
                var coords = '50% ' + yPos + 'px';
                // Move the background
                $bgobj.css({ backgroundPosition: coords });
            });

        });
    }
});