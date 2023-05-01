$(function(){
    $('html,body').animate({scrollTop:'3px'}, 300);
    
    $('.start').click(function(){
        $('#sect01').hide();
        $('#sect02').show();
    });
    
    $('#sect02, #sect03').click(function(){
        $(this).hide().next().show();
    }); 
    
    $('#sect04').click(function() {
        $('.say01').hide();
        $('.say02').show();
        $(this).off('click').click(function(){
            $('#sect04').hide();
            $('#sect05').show();
        });
    });

    $(document).on('touchstart', function(){});
});