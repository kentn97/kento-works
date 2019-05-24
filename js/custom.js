$(function() {

    for (var i = 0; i < 6; i++) {

        addWork(i);
    
    };
});

var count = 6;

$('.portfolio__btn').on('click', function(event) {

    event.preventDefault();

    for (var i = 0; i < 3; i++) {
        addWork(count);
        count++;
    }

});









// ポートフォリオ
$(window).on('load', function() {

    // Initialize Isotope
    $('.portfolio').isotope({
    });

    // filter items on button click
    $('.isotope_filters').on('click', 'button', function() {

        //get filter value
        var filterValue = $(this).attr('data-filter');

        //filter portfolio
        $('.portfolio').isotope({
            filter: filterValue
        });

        //active button
        $('.isotope_filters').find('.isotope_filters__btn--active').removeClass('isotope_filters__btn--active');
        $(this).addClass('isotope_filters__btn--active');

    });
});

// popup
$(window).on('load', function() {

    $('[data-fancybox="popup"]').fancybox({
        // Options will go here
        arrows : true
    });
});



//insta-feed

var userFeed = new Instafeed({
    get: 'user',
    userId: '3798226921',
    accessToken: '3798226921.83ed274.73a82be6231c4a25b26022a438b448b1',
    template: '<div class="col-4 col-sm-3 col-md-4"><a href="{{link}}"><img class="img-fluid instafeed__img" src="{{image}}" /></a></div>',
    limit: '12'
});
userFeed.run();



// Smooth Scrolling
$(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        // get section id like #about, #servcies, #work, #team and etc.
        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top
        }, 2500, "easeInOutExpo");

    });

});

/* typed js */

var typed = new Typed('.header__typed', {
    strings: ["長崎　健斗.", "Kento Nagasaki.", "Web Developer.", "A Creative."],
    typeSpeed: 100,
    backSpeed: 40,
    backDelay: 2500,
    loop: true,
    showCursor: true
  });



function addWork(i) {

    var $data = $(`
        <div class="col-6 col-sm-4 portfolio__item ${kentoWorks[i].tag}">
            <a data-fancybox="work" data-src="#work--${i}" class="portfolio__link"  href="javascript:;">
                <img src="img/${kentoWorks[i].img}" alt="${i}" class="img-fluid portfolio__img">
            </a>
            
            <!-- popup content -->      
            <div class="work" id="work--${i}">
                <div class="work__container">
                    <h3 class="work__heading">${kentoWorks[i].name}</h3>
                    <div class="work__wrap">
                        <div class="work__left">
                            <img src="img/${kentoWorks[i].img}" alt="${i}" class="img-fluid work__img">
                        </div>
                        <div class="work__right">
                            ${kentoWorks[i].features}
                        </div>
                    </div>
                    <a href="#" class="work__btn">GitHubへ  <span class="arrow">→</span></a>
                </div>
            </div>
        </div>
        `);
        $('.portfolio').append($data).isotope( 'appended', $data );
    

};


