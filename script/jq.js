$(document).ready(function(){
    // 메뉴 항목 hover 효과
    $('.nav ul li a').hover(
        function() { // 마우스가 위에 있을 때
            $(this).css({'color': '#ff6600', 'font-size': '1.2em'});
            $(this).animate({ padding: '10px' }, 200);
        },
        function() { // 마우스가 벗어날 때
            $(this).css({'color': '#000', 'font-size': '1em'});
            $(this).animate({ padding: '5px' }, 200);
        }
    );

    // 서브메뉴 항목 hover 효과
    $('.nav ul li ul li a').hover(
        function() { // 마우스가 위에 있을 때
            $(this).css({'color': '#ff6600', 'font-size': '1.1em'});
            $(this).animate({ padding: '8px' }, 200);
        },
        function() { // 마우스가 벗어날 때
            $(this).css({'color': '#000', 'font-size': '1em'});
            $(this).animate({ padding: '5px' }, 200);
        }
    );

    // 버튼 hover 효과
    $('a.btn').hover(
        function() { // 마우스가 위에 있을 때
            $(this).css({'background-color': '#ff6600', 'color': '#fff'});
            $(this).animate({ padding: '12px' }, 200);
        },
        function() { // 마우스가 벗어날 때
            $(this).css({'background-color': '#fff', 'color': '#000'});
            $(this).animate({ padding: '10px' }, 200);
        }
    );

    // 버튼 클릭 효과
    $('a.btn').click(function() {
        $(this).text('Clicked!');
        $(this).css({'background-color': '#ff6600', 'color': '#fff'});
    });
});