$(window).scroll(function () {

        /* Check the location of each desired element */
        
        $('#services').each(function (i) {

            var bottom_of_object = $(this).offset().top + $(this).offset().top * .1;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > bottom_of_object) {
                alert();
                $(this).animate({'opacity': '0'}, 500);

            }

        });

    });