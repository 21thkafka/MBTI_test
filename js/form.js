function scrollUp(){
    const vheight = $('.test').height();
    $('html, body').animate({
        scrollTop: ((Math.floor($(window).scrollTop() / Math.floor(vheight)) - 1) * vheight)
    }, 500);
}

function scrollDown(n){
    const vheight = $('.test').height();
    $('html, body').animate({
        scrollTop: ((Math.floor($(window).scrollTop() / Math.floor(vheight)) + n) * vheight)
    }, 500);
}

$(function(){
    $('.next_btn').click(function(e){
        let divs = $(this).parent().prev().children()
        let inputs = divs.find('input:checked');
        if(inputs.length < 1) {
            alert('문항이 선택되지 않았습니다.')
            return false;
        }
        e.preventDefault();
        scrollDown(1);
    });

    $('.next_btn2').click(function(e){
        let divs = $(this).parent().prev().children()
        let inputs = divs.find('input:checked');
        if(inputs.length < 1) {
            alert('문항이 선택되지 않았습니다.')
            return false;
        }
        e.preventDefault();
        scrollDown(2);
    });

    $('.prev_btn').click(function(e){
        e.preventDefault();
        scrollUp();
    });

    $('#form').submit(function(e){
        let divs = $(this).parent().prev().children()
        let inputs = divs.find('input:checked');
        if(inputs.length < 1) {
            alert('문항이 선택되지 않았습니다.')
            return false;
        }
        return true;
    });

    $('html, body').animate({
        scrollTop: 0
    }, 500);



});