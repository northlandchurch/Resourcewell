$(document).ready(function() {

	toggle_label('searchTags');

    var lastclicked;

    $('#lesson-year').children(":not('h1')").hide();

$('#lesson-year > #year-menu > li.unit > ul > div > li.active').parents('#year-menu').show();

$('#lesson-year > #year-menu > li.unit > ul > div > li.active').parents('li.unit > ul').show();


    $('#lesson-year h1').click(function (){
        $('#lesson-year').children(":not('h1')").slideUp('slow');

	if(lastclicked != this) {
	        $(this).nextUntil('h1').slideDown('slow');
		lastclicked = this;
	}

    });

	$('#year-menu a.unit').click(function() {
		if($(this).hasClass('unit-expanded')) {
			$(this).removeClass('unit-expanded').parent().find('ul').slideUp(200);
		}
		else {
			$('#year-menu a.unit').removeClass('unit-expanded').parent().find('ul').slideUp(200);
			$(this).addClass('unit-expanded').parent().find('ul').slideDown(200);
		}

		return false;
	});
});


    var boxHeight;
    var boxWidth;
    var lightbox = false;

    $(document).ready(function() {
        $('<div class="lightbox frame"></div>').appendTo('body');
        $('<div class="lightbox container"></div>').appendTo('body');
        
        boxHeight = $('.lightbox.container').height();
        boxWidth = $('.lightbox.container').width();
        
        $(document).keypress(function(e) {
            if(e.keyCode == 27 && lightbox)
                destroy();
        })
	$(document).keydown(function(e) {
            if(e.keyCode == 27 && lightbox)
                destroy();
        })

        $(window).resize(function () {
            var top = Math.floor(($(window).height()-boxHeight)/2);
            var left = Math.floor(($(window).width()-boxWidth)/2);


            $('.lightbox.container').css('top',top).css('left',left);
        })
    });

    function destroy(){
	if(lightbox){
        	$('.lightbox_contents').fadeOut('fast').detach();
        	$('.lightbox.container').hide('scale',{origin:'middle'},500);
        	$('.lightbox.frame').delay(600).fadeOut('slow');
        	$('body').css('overflow','auto');
        	lightbox = false;
	}
        return false;
    }

    function create(data){
        var top = Math.floor(($(window).height()-boxHeight)/2);
        var left = Math.floor(($(window).width()-boxWidth)/2);


        $('.lightbox.container').css('top',top).css('left',left);
        $('.lightbox.frame').show().animate({opacity:0.7});
        $('.lightbox.container').show('scale',{origin:'middle'},500);
        $('body').css('overflow','hidden');
        
        $('<div class="lightbox_contents"><div class="title"><a href="#" onclick="return destroy();">Close (esc)</a></div><div class="body">'+data+'</div></div>').appendTo('body');

        $('.lightbox_contents').appendTo('.lightbox.container')
        $('.lightbox_contents').delay(600).fadeIn();

        lightbox=true;

        return false;
    }

$(document).click(function (event){
    if($(event.target).attr('class')=="lightbox frame") {
        destroy();
    }
});

function toggle_label(id) {
      $('#'+id).focus(function (){
          $('label[for="'+id+'"]').fadeOut();
      });

      $('#'+id).blur(function (){
          if($(this).val() == "") {
              $('label[for="'+id+'"]').fadeIn();
          }
      });
  }