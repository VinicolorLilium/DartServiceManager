$(function(){

    $('.header__menu--toggle').on('click', function() {
       $('.header__menu').slideToggle(300, function(){
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');
            }
       });

    });

 //    $('.portgolio__grid').masonry({
	//   // options
	//   itemSelector: '.portfolio__img',
	//   gutter: 10,
	//   percentPosition: true
	// });

	$('.portgolio__grid').isotope({
  	// options
	  itemSelector: '.portfolio__img',
	  percentPosition: true,
	  masonry: {
	    columnWidth: '.portfolio__img',
	    horizontalOrder: true
	  }
	});

    var $container = $('.portgolio__grid');
    // filter buttons
    $('#filters button').click(function(){
		var $this = $(this);
        // don't proceed if already selected
        if ( !$this.hasClass('is-checked') ) {
          $this.parents('#options').find('.is-checked').removeClass('is-checked');
          $this.addClass('is-checked');
        }
      var selector = $this.attr('data-filter');
      $container.isotope({  itemSelector: '.portfolio__img', filter: selector });
      return false;
    });  

    //подгрузка блоков
   	new WOW().init(); 

    //carousel
    $(".slider").slick({
       dots: true,
      infinite: false,
      responsive: [
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      ]
    }); 
    //плавная прокрутка до якоря
    $("a[href^='#']").click(function(){
      var _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
    });

    //tabs post
    jQuery.fn.lightTabs = function(options){

      var createTabs = function(){
        tabs = this;
        i = 0;

        showPage = function(i){
          $(tabs).children("div").children("div").hide();
          $(tabs).children("div").children("div").eq(i).show();
          $(tabs).children("ul").children("li").removeClass("active");
          $(tabs).children("ul").children("li").eq(i).addClass("active");
        }

        showPage(0);        

        $(tabs).children("ul").children("li").each(function(index, element){
          $(element).attr("data-page", i);
          i++;                        
        });

        $(tabs).children("ul").children("li").click(function(){
          showPage(parseInt($(this).attr("data-page")));
        });       
      };    
      return this.each(createTabs);
    };  

    $(".posts-tabs__conteiner").lightTabs();
});