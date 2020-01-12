apiready = function () {



    $('.menuUL li:odd').css({
        height:'14px'
    })
    $('.menuUL li:eq(0)').css({
        border:'1px solid green'
    })
    $('.menuUL li:eq(2)').css({
        border:'1px solid blue'
    })
    $('.menuUL li:eq(4)').css({
        border:'1px solid red'
    })
    $('.menuUL li:eq(6)').css({
        border:'1px solid pink'
    })

    $('.menuUL li').on('touchstart',function(){
       $(this).css({boxShadow:'2px 2px 2px black' })

    })

    $('.menuUL li').on('touchend',function(){
        $(this).css({boxShadow:'0px 0px 0px black' })

    })
    $('.practice').on('touchstart',function(){

    })
    $('.practice').on('touchend',function(){
          api.openWin({
            name: 'menu',
            url: 'menu.html',
            /*      pageParam: {name: 'pageparamname'}*/
        });
    })

    $('.sourceCode').on('touchend',function(){
        api.openWin({
            name: 'sourceCode',
            url: 'sourceCode.html',
            /*      pageParam: {name: 'pageparamname'}*/
        });
    })
}