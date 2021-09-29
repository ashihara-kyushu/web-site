$(function(){

	//mainImgの自動変化
	var interval =3000; // 切り替わりの間隔（ミリ秒）
	var fade_speed = 1000;// フェード処理の早さ（ミリ秒）
	$(".mainImg img").hide();
	$(".mainImg img:first").addClass("active").show();

	var changeImage = function(){
			var $active = $(".mainImg img.active");
			var $next = $active.next("img").length?$active.next("img"):$(".mainImg img:first");

			$active.fadeOut(fade_speed).removeClass("active");
			$next.fadeIn(fade_speed).addClass("active");
	}
	setInterval(changeImage,interval);

	//topに戻るボタンについて
  var appear = false;
  var pagetop = $('#page_top');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {  //100pxスクロールしたら
      if (appear == false) {
        appear = true;
        pagetop.stop().animate({
          'bottom': '50px' //下から50pxの位置に
        }, 300); //0.3秒かけて現れる
      }
    } else {
      if (appear) {
        appear = false;
        pagetop.stop().animate({
          'bottom': '-50px' //下から-50pxの位置に
        }, 300); //0.3秒かけて隠れる
      }
    }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
    return false;
  });


//

	var
	  winW = $(window).width(),
		winH = $(window).height(),
		nav = $('#mainnav ul a'),
		curPos = $(this).scrollTop();

	if (winW > 800){
		var headerH =0;
	}
	else{
		var headerH =70;
	}

	$(nav).on('click', function(){
  	var $el = $(this),
		id = $el.attr('href');
 		$('html, body').animate({
   		scrollTop: $(id).offset().top - headerH
 		}, 500);
		if (winW < 890){
			$('#menuWrap').next().slideToggle();
			$('#menuBtn').removeClass('close');
		}
 		return false;
	});

	$('.panel').hide();
	$('#menuWrap').toggle(function(){
		$(this).next().slideToggle();
		$('#menuBtn').toggleClass('close');
	},
	function(){
		$(this).next().slideToggle();
		$('#menuBtn').removeClass('close');
	});
});
