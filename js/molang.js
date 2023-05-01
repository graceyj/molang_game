$(function(){
    $(document).on('touchstart',function(){});
    $('html,body').animate({scrollTop:'3px'}, 300);
    $('.start').on('click',function(){
        $('#sect01').hide();
        $('#sect02').show();
    });
});