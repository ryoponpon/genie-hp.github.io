$(function(){

  $('.content').hover(
    function(){
      $(this).find('.description').addClass('text-active');
    },
    function(){
      $(this).find('.description').removeClass('text-active');
    }
  );

  $('.page-title').hide().fadeIn(2000);

  $('.page-subtitle').hide().fadeIn(4000);
})