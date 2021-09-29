"use strict"
$(function () {
	// ここに処理を書きます
  $('.question').click(function(){
    if($(this).hasClass('open')){
      $(this).removeClass('open');
    }else{
      $('.question').removeClass('open');
      $(this).addClass('open');
    }
  })
});
