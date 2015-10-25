$(document).ready(function(){
	checkContent();
	$(window).on("resize", function () {
		checkContent();
    });
    $('#table-content-btn').on('click', function(){
    	if($('#main-content-detail').hasClass('menu-show')){
    		$('#main-content-detail').removeClass('menu-show');
    	}else{
    		$('#main-content-detail').addClass('menu-show');
    	}
    });
    $('#right-content').on('click',function(){
    	if(event.target.nodeName!='I'){
    		if($('#main-content-detail').hasClass('menu-show')){
	    		$('#main-content-detail').removeClass('menu-show');
	    	}
    	}
    });
    function checkContent(){
    	$('#wrap').attr('class','');
    	var currentSize = $(window).width();
    	if($('body').hasScrollBar()){
    		currentSize+=17;
    	}
        if(currentSize<768){
        	$('#wrap').addClass('bs-xs');
        }else if(currentSize<992 && currentSize>=768){
        	$('#wrap').addClass('bs-sm');
        }else if(currentSize<1200 && currentSize>=992){
        	$('#wrap').addClass('bs-md');
        }else if(currentSize>=1200){
        	$('#wrap').addClass('bs-lg');
        }
    }
});
(function($) {
    $.fn.hasScrollBar = function() {
        return this.get(0).scrollHeight > this.height();
    }
})(jQuery);