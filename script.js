$(document).ready(function () {
    // Smooth scrolling for navigation links
    $('nav a').on('click', function (e) {
        if (this.hash !== '') {
            e.preventDefault();
            const hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800);
        }
    });

    // Dynamic highlighting of the navigation link
    $(window).on('scroll', function () {
        let scrollPos = $(window).scrollTop();
        $('nav a').each(function () {
            let sectionOffset = $($(this).attr('href')).offset().top;
            if (sectionOffset - 70 <= scrollPos) {
                $('nav a').removeClass('active');
                $(this).addClass('active');
            }
        });
    });
});
