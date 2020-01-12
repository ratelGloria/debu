
apiready = function () {

var id;

$('.content').on('touchstart',function(){
    $('.beforeBlock').css('display','none');

})
    $('.before').on('touchstart',function(){

        $('.beforeBlock').fadeToggle(1);

        api.ajax({
                url:'http://192.168.18.3:8036/question/before',
                /*   url:'http://172.20.10.2:8036/root/addDynasty/listDynasty',*/
                method:'post',
                dataType:'json',
                returnAll:true,
                data:{
                    values:{
                    }
                }},
            function(ret,err){
                if(ret){
                    $num = ret.body.data.length;
                    for(var i=0;i<$num;i++){
                        $content = '<li>'+ret.body.data[i].question+'</li>';
                        $('.before ul').append($content)
                     /*   $('.before ul').append('<li>ret.body.data[i].question</li>')*/
                    }
                    $('.beforeBlockUl li').css({
                        height:'26px'
                    })
                    $('.beforeAllNum').text($num);
                }
            }
        );

    })

    $('#come_on').on('touchstart',function(){
        getQuestion();

    });

    $('#forget').on('touchstart',function(){

        api.ajax({
                url:'http://192.168.18.3:8036/question/forget',
                /*   url:'http://172.20.10.2:8036/root/addDynasty/listDynasty',*/
                method:'post',
                dataType:'json',
                returnAll:true,
                data:{
                    values:{
                        id:id
                    }
                }},
            function(ret,err){
                if(ret){

                }
            }
        );
        $("#answer").css('display','inline');
    });

    $('#mark').on('touchstart',function(){

        api.ajax({
                url:'http://192.168.18.3:8036/question/mark',
                /*   url:'http://172.20.10.2:8036/root/addDynasty/listDynasty',*/
                method:'post',
                dataType:'json',
                returnAll:true,
                data:{
                    values:{
                        id:id
                    }
                }},
            function(ret,err){
                if(ret){
                }
            }
        );
    });

    $('#td2').on('touchstart',function(){

        api.ajax({
                url:'http://192.168.18.3:8036/question/selfConfidence',
                /*   url:'http://172.20.10.2:8036/root/addDynasty/listDynasty',*/
                method:'post',
                dataType:'json',
                returnAll:true,
                data:{
                    values:{
                        id:id
                    }
                }},
            function(ret,err){
                if(ret){

                }
            }
        );
    });

    $('.before').on('touchstart',function(){

        api.ajax({
                url:'http://192.168.18.3:8036/question/before',
                /*   url:'http://172.20.10.2:8036/root/addDynasty/listDynasty',*/
                method:'post',
                dataType:'json',
                returnAll:true,
                data:{
                    values:{
                        id:id
                    }
                }},
            function(ret,err){
                if(ret){

                }
            }
        );
    });

    $('.next').on('touchstart',function(){
        getQuestion();

    });

    function getQuestion(){
        api.ajax({
                url:'http://192.168.18.3:8036/question/getQuestion',
                method:'post',
                dataType:'json',
                returnAll:true,
                data:{
                    values:{
                    }
                }},
            function(ret,err){
                if(ret){
                    var num = ret.body.data.length;
                    $("#question").text(ret.body.data.question);
                    $("#answer").css('display','none');
                    $("#answer").text(ret.body.data.answer);
                    id=ret.body.data.id;
                }
            }
        )

    }




};
