$(function(){
    $(document).on('touchstart', function(){});
    $('html,body').animate({scrollTop:'5px'}, 300);
    
    $('.start').click(function(){
        $('#sect01').hide();
        $('#sect02').show();
    });
    
    $('#sect02, #sect03, #sect05').click(function(){
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
    
    let second=20;
    let score=0;
    let timer;
    let counter;
    let num=0;
    let life=3;
    let clickable=false; //연속 클릭 방지 상태변수

    for (let i = 0; i < 9; i++){
        let div = $(`<div class="c${i}"></div>`);
        $('.play_hole').append(div);
    } 

    function randomTarget(){
        let num = Math.floor(Math.random() * 9);
        let targets = $('.pop');
        let randomIndex = Math.floor(Math.random() * targets.length); // 랜덤한 인덱스 생성
        let selectTarget = targets.eq(randomIndex); // 선택된 요소를 가져옴
        $('.c').eq(num).append(selectTarget); // 선택된 요소를 랜덤한 ".c" 요소의 자식으로 추가
        selectTarget.find('img').stop().fadeIn(100).delay(500).fadeOut(100); // 선택된 요소의 "img" 태그를 깜박이게 함
        clickable=true;
    }
    timer=setInterval(randomTarget,1000);

    
    $('.do10>img').on('click', function(){ 
        if (clickable){
            score += 10;
            $('.score').text(score);
            clickable = false;
        }
    });      

    $('.st>img').on('click', function(){
        if(clickable && changeNum === 0){
            life--;
            $('.mol>img').eq(-1).remove(); // 마지막 자식 요소 삭제
            $('.ending02').show(); // 실패 엔딩 출력
        }
    });

    function countdown(){
        second--;
        $('.time').text(second);
        if(second==0){
            clearInterval(counter);
            clearInterval(timer);
            $('.play').hide();
            $('.ending01').show();
            $('.ending01').find('.score').text(score*10);
        }
    }
    counter=setInterval(countdown,2000);
    $('.ending01>.again').on('click',function(){
        second=20;
        score=0;
        num=0;
        clickable=false;
        timer=setInterval(randomTarget,1000);
        counter=setInterval(countdown,2000);
        $('#game_play').show();
        $('#game_play').find('.score').text(score);
        $('#game_play').find('.time').text(second);
        $('.ending01').hide();
    });           
});