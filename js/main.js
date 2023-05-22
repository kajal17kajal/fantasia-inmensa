  
$(document).ready(function(){
var sync2 = $(".carousel_2");
$(sync2).owlCarousel({
    nav: false,
    dots:true,
//    autoplay:true,
//    autoplayTimeout: 2000,
    loop:true,
    margin:10,
    center:true,
    responsive: {
        	0: {
        	   items: 1
        	},
        	768: {
        	   items: 2,
        	
        	},
        	1000: {
        	   items: 5,
        	}
      }
    
    
});
});

// $(this).parent().closest('.owl-item.center');
// $( this ) .closest( ".owl-item .center" ).css( "height", "170px" );



