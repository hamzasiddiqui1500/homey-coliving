var $=jQuery;

jQuery(function($) {

    jQuery('.hdbtm-menu li a[href*=#]:not([href=#]),.sscroll a[href*=#]:not([href=#])').click(function() {

        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') ||

            location.hostname == this.hostname) {

            var target = jQuery(this.hash),

                headerHeight = jQuery(".header").height(); // Get fixed header height

            target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');

            if (target.length) {

                jQuery('html,body').animate({

                    scrollTop: target.offset().top - headerHeight

                }, 500);

                return false;

            }

        }

    });

});



/*

* jquery-match-height 0.7.2 by @liabru

* http://brm.io/jquery-match-height/

* License MIT

*/

!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){var e=-1,o=-1,n=function(t){return parseFloat(t)||0},a=function(e){var o=1,a=t(e),i=null,r=[];return a.each(function(){var e=t(this),a=e.offset().top-n(e.css("margin-top")),s=r.length>0?r[r.length-1]:null;null===s?r.push(e):Math.floor(Math.abs(i-a))<=o?r[r.length-1]=s.add(e):r.push(e),i=a}),r},i=function(e){var o={

byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof e?t.extend(o,e):("boolean"==typeof e?o.byRow=e:"remove"===e&&(o.remove=!0),o)},r=t.fn.matchHeight=function(e){var o=i(e);if(o.remove){var n=this;return this.css(o.property,""),t.each(r._groups,function(t,e){e.elements=e.elements.not(n)}),this}return this.length<=1&&!o.target?this:(r._groups.push({elements:this,options:o}),r._apply(this,o),this)};r.version="0.7.2",r._groups=[],r._throttle=80,r._maintainScroll=!1,r._beforeUpdate=null,

r._afterUpdate=null,r._rows=a,r._parse=n,r._parseOptions=i,r._apply=function(e,o){var s=i(o),h=t(e),l=[h],c=t(window).scrollTop(),p=t("html").outerHeight(!0),u=h.parents().filter(":hidden");return u.each(function(){var e=t(this);e.data("style-cache",e.attr("style"))}),u.css("display","block"),s.byRow&&!s.target&&(h.each(function(){var e=t(this),o=e.css("display");"inline-block"!==o&&"flex"!==o&&"inline-flex"!==o&&(o="block"),e.data("style-cache",e.attr("style")),e.css({display:o,"padding-top":"0",

"padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})}),l=a(h),h.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||"")})),t.each(l,function(e,o){var a=t(o),i=0;if(s.target)i=s.target.outerHeight(!1);else{if(s.byRow&&a.length<=1)return void a.css(s.property,"");a.each(function(){var e=t(this),o=e.attr("style"),n=e.css("display");"inline-block"!==n&&"flex"!==n&&"inline-flex"!==n&&(n="block");var a={

display:n};a[s.property]="",e.css(a),e.outerHeight(!1)>i&&(i=e.outerHeight(!1)),o?e.attr("style",o):e.css("display","")})}a.each(function(){var e=t(this),o=0;s.target&&e.is(s.target)||("border-box"!==e.css("box-sizing")&&(o+=n(e.css("border-top-width"))+n(e.css("border-bottom-width")),o+=n(e.css("padding-top"))+n(e.css("padding-bottom"))),e.css(s.property,i-o+"px"))})}),u.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||null)}),r._maintainScroll&&t(window).scrollTop(c/p*t("html").outerHeight(!0)),

this},r._applyDataApi=function(){var e={};t("[data-match-height], [data-mh]").each(function(){var o=t(this),n=o.attr("data-mh")||o.attr("data-match-height");n in e?e[n]=e[n].add(o):e[n]=o}),t.each(e,function(){this.matchHeight(!0)})};var s=function(e){r._beforeUpdate&&r._beforeUpdate(e,r._groups),t.each(r._groups,function(){r._apply(this.elements,this.options)}),r._afterUpdate&&r._afterUpdate(e,r._groups)};r._update=function(n,a){if(a&&"resize"===a.type){var i=t(window).width();if(i===e)return;e=i;

}n?o===-1&&(o=setTimeout(function(){s(a),o=-1},r._throttle)):s(a)},t(r._applyDataApi);var h=t.fn.on?"on":"bind";t(window)[h]("load",function(t){r._update(!1,t)}),t(window)[h]("resize orientationchange",function(t){r._update(!0,t)})});









jQuery(document).ready(function($){

	

	function stickyHeader(){

	

		var scroll = jQuery(window).scrollTop();

		if (scroll >= 10) {

			jQuery(".header").addClass("fix-header");

		}else{

			jQuery(".header").removeClass("fix-header");

		}

	}

	jQuery(document).ready(function(){

		stickyHeader();

	});

	jQuery(window).scroll(function() {

		stickyHeader();

	});

	jQuery(window).resize(function(){

		stickyHeader();

	});

	

});





jQuery(document).ready(function($) {



    jQuery('.nav-container .nav').meanmenu({

        meanScreenWidth: "1147"

    });



});





jQuery(window).load(function($) {



    jQuery('body, #wrapper, .footer-wrapper').css({

        opacity: 1

    });



});



jQuery(function($) {

    jQuery('.nav-ul a[href*=#]:not([href=#]),.bann-scroll a[href*=#]:not([href=#])').click(function() {

        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') ||

            location.hostname == this.hostname) {



            var target = jQuery(this.hash),

                headerHeight = jQuery(".header").height(); // Get fixed header height



            target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');



            if (target.length) {

                jQuery('html,body').animate({

                    scrollTop: target.offset().top - headerHeight

                }, 500);

                return false;

            }

        }

    });

});



jQuery(document).ready(function($) {

jQuery('.navigation').click(function() {

jQuery('.side-nav').toggleClass('active');

});



jQuery('.snav').click(function() {

jQuery('.secondary-nav ul').toggleClass('active');

});



jQuery('.tp-btn').click(function() {

jQuery('.tp-search-holder').addClass('active');

jQuery("body").css("overflow", "hidden");

});

jQuery('.tp-btn-close').click(function() {

jQuery('.tp-search-holder').removeClass('active');

jQuery("body").css("overflow", "auto");

});



    // browser window scroll (in pixels) after which the "back to top" link is shown



    var offset = 300,



        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced



        offset_opacity = 1200,



        //duration of the top scrolling animation (in ms)



        scroll_top_duration = 700,



        //grab the "back to top" link



        $back_to_top = jQuery('.cd-top');



//hide or show the "back to top" link



    jQuery(window).scroll(function($) {



        (jQuery(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');



        if (jQuery(this).scrollTop() > offset_opacity) {



            $back_to_top.addClass('cd-fade-out');



        }

        



    });



    //smooth scroll to top



    $back_to_top.on('click', function(event) {



        event.preventDefault();



        jQuery('body,html').animate({



                scrollTop: 0,



            }, scroll_top_duration



        );



    });





//Home Banner Slider

var sliderInit = jQuery('.home-banner');

jQuery(document).ready(function () {

	sliderInit.slick({

		//fade: true,

		dots: false,

		speed: 1500,

		arrows: true,

		autoplay: true,

		infinite: true,

		slidesToShow: 1,

		slidesToScroll: 1,

		pauseOnHover: false,

		autoplaySpeed: 5000,

		prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><i class="fas fa-chevron-left"></i> <span class="ar-shape"></span> </button>',

        nextArrow: '<button class="slick-next" aria-label="Next" type="button"><i class="fas fa-chevron-right"></i></button>',

	});

	sliderInit.slickAnimation();

});

//Home Banner Slider END

	

//project-slider HOME

    jQuery('.Offer-slider').slick({

        slidesToShow:3,

        slidesToScroll:1,

        setPosition: 1,

        speed: 1000,

        autoplay: false,

        autoplaySpeed: 5000,

        dots: false,

        slide: 'div',

        arrows: true,

        infinite: true,

        focusOnSelect: false,

       prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><i class="fas fa-chevron-left"></i> <span class="ar-shape"></span> </button>',

        nextArrow: '<button class="slick-next" aria-label="Next" type="button"><i class="fas fa-chevron-right"></i></button>',

        responsive: [{

                breakpoint: 959,

                settings: {

                    slidesToShow: 2,

					slidesToScroll:2,

					centerMode: false,

                }

            },

            {

                breakpoint:568,

                settings: {

                    slidesToShow: 1,

					slidesToScroll:1,

                }

            },

            {

                breakpoint: 567,

                settings: {

                    centerMode: false,

                    slidesToShow: 1,

					slidesToScroll:1,

                }

            },

        ]

    });

		







//project-slider HOME

    jQuery('.project-slider').slick({

        slidesToShow:3,

        slidesToScroll:1,

        setPosition: 1,

        speed: 1000,

        autoplay: false,

        autoplaySpeed: 5000,

        dots: false,

        slide: 'div',

        arrows: true,

        infinite: true,

        focusOnSelect: false,

        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><i class="fas fa-chevron-left"></i> <span class="ar-shape"></span> </button>',

        nextArrow: '<button class="slick-next" aria-label="Next" type="button"><i class="fas fa-chevron-right"></i></button>',

        responsive: [{

                breakpoint: 959,

                settings: {

                    slidesToShow: 2,

					slidesToScroll:2,

					centerMode: false,

                }

            },

            {

                breakpoint:568,

                settings: {

                    slidesToShow: 1,

					slidesToScroll:1,

                }

            },

            {

                breakpoint: 567,

                settings: {

                    centerMode: false,

                    slidesToShow: 1,

					slidesToScroll:1,

                }

            },

        ]

    });

	

	//project-slider HOME

    jQuery('.client-slider').slick({

        slidesToShow:1,

        slidesToScroll:1,

        setPosition: 1,

        speed: 1000,

        autoplay: true,

        autoplaySpeed: 5000,

        dots: true,

        slide: 'div',

        arrows: false,

        infinite: true,

        focusOnSelect: false,

        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><i class="fas fa-arrow-left"></i></button>',

        nextArrow: '<button class="slick-next" aria-label="Next" type="button"><i class="fas fa-arrow-right"></i></button>',

        

    });

	

	

//Home-detail Slider

 jQuery('.home-detail-banner').slick({

       slidesToShow:1,

        slidesToScroll:1,

        setPosition: 1,

        speed: 1000,

        autoplay: false,

        autoplaySpeed: 5000,

        dots: false,

        slide: 'div',

        arrows: true,

        infinite: true,

        focusOnSelect: false,

        centerMode: true,

		centerPadding: '15%',

		prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><i class="fas fa-chevron-left"></i> <span class="ar-shape"></span> </button>',

        nextArrow: '<button class="slick-next" aria-label="Next" type="button"><i class="fas fa-chevron-right"></i></button>',
		
		responsive: [{

                breakpoint: 959,

                settings: {

                    slidesToShow: 1,

					slidesToScroll:1,

					centerMode: false,
					infinite: false,
					centerPadding: false,

                }

            },

            
           

        ]

});









jQuery(document).ready(function() {

		jQuery('.fancybox').fancybox(

		

		);

		

	});

	



}); //(document).ready function-END

//Match title height

function MatchHeight() {

	jQuery('.eheight-1').matchHeight();

	jQuery('.whyh-item').matchHeight();

	jQuery('.nws-data-overlay').matchHeight();

	jQuery('.news-title').matchHeight();

	jQuery('.nws-details').matchHeight();

	jQuery('.news-photo').matchHeight();

	jQuery('.contact-detail-list li').matchHeight();

	jQuery('.timeline-box').matchHeight();

	jQuery('.timeline-photo').matchHeight();

	jQuery('.icon-data-box').matchHeight();

    jQuery('.eheight-box').matchHeight();

}

//Functions that run when all HTML is loaded

jQuery(document).ready(function($) {

	MatchHeight('.eheight-1');

	MatchHeight('.whyh-item');

	MatchHeight('.nws-data-overlay');

	MatchHeight('.news-title');

	MatchHeight('.nws-details');

	MatchHeight('.news-photo');

	MatchHeight('.contact-detail-list li');

	MatchHeight('.timeline-box');

	MatchHeight('.timeline-photo');

	MatchHeight('.icon-data-box');

    MatchHeight('.eheight-box');

});

//Match title height ENd



//Services-gallery-slider

jQuery('.services-slider-container').slick({		



		dots: false,



		speed: 1000,



		arrows: false,



		autoplay: false,



		infinite: true,



		slidesToShow: 1,



		slidesToScroll: 1,



		pauseOnHover: false,



		autoplaySpeed: 2000,



		asNavFor: '.services-gallery',

		

		prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><i class="fas fa-chevron-left"></i> <span class="ar-shape"></span> </button>',

        nextArrow: '<button class="slick-next" aria-label="Next" type="button"><i class="fas fa-chevron-right"></i></button>',



	});



	

	jQuery('.services-gallery').slick({		



		dots: false,



		speed: 1000,



		arrows: true,



		infinite: true,



		slidesToShow: 4,



		slidesToScroll: 1,



		focusOnSelect: true,



		accessibility: false,



		autoplaySpeed: 2000,



		asNavFor: '.services-slider-container',

		prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><i class="fas fa-chevron-left"></i> <span class="ar-shape"></span> </button>',

        nextArrow: '<button class="slick-next" aria-label="Next" type="button"><i class="fas fa-chevron-right"></i></button>',



		responsive: [



		  {



			breakpoint: 1199,



			settings: {



			  slidesToShow: 4



			}



		  },



		  {



			breakpoint: 991,



			settings: {



			  slidesToShow: 3



			}



		  },



		  {



			breakpoint: 700,



			settings: {



			  slidesToShow: 2



			}



		  },



		  {



			breakpoint: 560,



			settings: {



			  slidesToShow: 2



			}



		  }



		]



	});

// End Services-gallery-slider



        

     $('.more-filter').click(function() {
$('.filter-data-wrap').toggleClass('active');
})	
	



/*jQuery(document).click(function(e) {

	if (!jQuery(e.target).is('.panel-body')) {

    	jQuery('.collapse').collapse('hide');	    

    }

});

*/