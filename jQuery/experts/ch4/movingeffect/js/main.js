$(function(){
    // 변수 선언하고 값 저장 애니메이션 효과 사용하는 시간
    var duration = 300;

    // buttons1 ----------------------------------------
    // buttons1  1행
    $('#buttons1 button:nth-child(-n+4)')
        .on('mouseover', function() {
            $(this).stop(true).animate({
                backgroundColor: '#ae5e9b',
                color: '#fff'
            }, duration);
        })
        .on('mouseout', function(){
            $(this).stop(true).animate({
                backgroundColor: '#fff',
                color: '#ebc000'
            }, duration);
        });

    // buttons1  2행 마우스 오버시에 보더값 12px 적용하고 아웃시엔 0px적용
    $('#buttons1 button:nth-child(n+5):nth-child(-n+8)')
        .on('mouseover', function(){
            $(this).stop(true).animate({
                borderWidth: '12px',
                color: '#ae5e9b'
            }, duration, 'easeOutSine');
        })
        .on('mouseout', function(){
            $(this).stop(true).animate({
                borderWidth: '0px',
                color: '#ebc000'
            }, duration, 'easeOutSine');
        });

    // buttons1  3행 find 제이쿼리 객체에 포함된 각 요소의 하위 요소에 선택자를 통해 효과를 적용
  //on 메서드로 효과를 적용할 대상 animate 메서드로 효과를 적용할 대상을 변경
    $('#buttons1 button:nth-child(n+9)')
        .on('mouseover', function(){
            $(this).find('> span')
                .stop(true).animate({width: '100%'}, duration, 'easeOutQuad');
        })
        .on('mouseout', function(){
            $(this).find('> span')
                .stop(true).animate({width: '0%'}, duration, 'easeOutQuad');
        });

});
