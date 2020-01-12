apiready = function () {
    alert("-----11111------"+api.winName)
    alert("-----11111------"+api.pageParam.id)

    if(api.winName == 'showList' && document.location.toString().indexOf("?")>0){
        modifyDynasty();
    }
    if(api.winName == 'modifyDynasty'  ){
        alert("-----11111------"+api.pageParam.id)
        /*modifyDynasty();*/
    }

    var $addClear = $("#addClear");
    var $dynastyName = $("#dynasty_name");
    var $dynastyYearBegin = $("#dynasty_year_begin");
    var $dynastyYearend = $("#dynasty_year_end");
    var $msgName = $("#msgName");
    var $msgBegin = $("#msgBegin");
    var $msgEnd = $("#msgEnd");
    var $addDynastySubmit= $("#addDynastySubmit");
    var $id= $(".id");
    var $sort= $("#sort");

    var $addTableStyle= $(".addTableStyle");

    $(".addTableTrStyle  td:first").css({width:"80px"});
    $(".addTableTrStyle td :odd ").css({width:"220px"});
    $(".addTableTrStyle  td:last").css({width:"120px"});



    var $showList = $("#showList");
    var  $testSubmit = $("#testSubmit");
    $addClear.on('touchstart',function () {
        $dynastyName.val("");
        $dynastyYearBegin.val("");
        $dynastyYearend.val("");
    });
    var flagName = false;
    var flagBegin = false;
    var flagEnd = false;
    $dynastyName.on('blur',function(){
        regExp = /^[\u4e00-\u9fa5]+$/;
        var result = regExp.test($dynastyName.val());
        if(result != true){
            msgMehtod($msgName,"请输入汉字")
        }else{
            $msgName.text("");
            flagName = true;
        }
    });
    $dynastyYearBegin.on('blur',function(){
        regExp = /^[1-9][0-9]{1,3}\d$/;
        var result = regExp.test($dynastyYearBegin.val());
        if(result != true){
            msgMehtod($msgBegin,"请输入2-4位数字")
        }else{
            $msgBegin.text("");
            flagBegin = true;
        }
    });
    $dynastyYearend.on('blur',function(){
        regExp = /^[1-9][0-9]{1,3}\d$/;
        var result = regExp.test($dynastyYearend.val());
        if(result != true){
            msgMehtod($msgEnd,"请输入2-4位数字")
        }else{
            $msgEnd.text("");
            flagEnd = true;
        }
    });

    function msgMehtod(name,msg){
        name.css({
            color:'red',
        });
        name.text(msg)
    }

    $addDynastySubmit.on('touchstart',function () {
        dynasty_name = $('#dynasty_name').val();

        dynasty_year_begin = $('#dynasty_year_begin').val();
        dynasty_year_end = $('#dynasty_year_end').val();
        christianEraBegin = $('#christianEraBegin').val();
        christianEraEnd = $('#christianEraEnd').val();
        id = $('.id').val();
        sort = $('#sort').val();
        alert(flagEnd+"---"+flagBegin+"---"+flagName)
        if(dynasty_year_begin != '' && dynasty_year_begin != null && dynasty_name != '' && dynasty_name != null && dynasty_year_end != '' && dynasty_year_end != null  && christianEraBegin != '' && christianEraBegin != null  && christianEraEnd != '' && christianEraEnd != null ){
  /*          alert("-2222-----");*/
            if($addDynastySubmit.val() == '确认'){
                $url = 'http://192.168.18.7:8036/root/addDynasty/modifyDynasty'
             /*   $url = 'http://172.20.10.2:8036/root/addDynasty/modifyDynasty'*/
            }else if($addDynastySubmit.val() == '添加'){
                $url ='http://192.168.18.7:8036/root/addDynasty/addDynasty'
           /*     $url ='http://172.20.10.2:8036/root/addDynasty/addDynasty'*/
            }
            api.ajax({
              /*  url: 'http://192.168.18.7:8036/root/addDynasty/addDynasty?begin='+dynasty_year_begin+"&end="+dynasty_year_end+"&name="+dynasty_name,*/
                url:$url ,
                method: 'get',
                timeout: 30,
                dataType: 'json',
                returnAll: false,
                data: {
                    values: {
                        'begin': dynasty_year_begin,
                        'end': dynasty_year_end,
                        'name': dynasty_name,
                        'christianEraBegin':christianEraBegin,
                        'christianEraEnd':christianEraEnd,
                        'id':id,
                        'sort':sort
                    }
                }},
                function(ret, err) {
                    if (ret) {
                        api.alert({ msg: ret.status });

                    } else {
                        api.alert({ msg: JSON.stringify(err) });
                    }
            });

        }
        $dynastyName.val("");
        $dynastyYearBegin.val("");
        $dynastyYearend.val("");
        $sort.val("");
        $id.val("");
        flagName = false;
        flagBegin = false;
        flagEnd = false;

    });
    $testSubmit.on('touchstart',function(){
        test1 = $("#test").val()
        api.ajax({
            url: 'http://192.168.18.7:8036/root/addDynasty/test',
          /*      url: 'http://172.20.10.2:8036/root/addDynasty/test',*/
                method: 'get',
                timeout: 30,
                dataType: 'json',
                returnAll: true,
                data: {
                values: {
                    'test': test1
                }
            }},
        function(ret, err) {
            if (ret) {
                api.alert({ msg: ret.body });

            } else {
                api.alert({ msg: JSON.stringify(err) });
            }
        }
        )
    })


}
function modifyDynasty(){
    var $addClear = $("#addClear");
    var $dynastyName = $("#dynasty_name");
    var $dynastyYearBegin = $("#dynasty_year_begin");
    var $dynastyYearEnd = $("#dynasty_year_end");
    var $msgName = $("#msgName");
    var $msgBegin = $("#msgBegin");
    var $msgEnd = $("#msgEnd");
    var $addDynastySubmit= $("#addDynastySubmit");
    var url = document.location.toString();
    url = url.substr(url.indexOf("?")+1);
    urlArr = url.split("&");
    for(var i=0;i<urlArr.length;i++){
        urlArrPort = urlArr[i].split("=");
    }
    api.ajax({
            url: 'http://192.168.18.7:8036/root/addDynasty/selectDynastyMethodById',
       /*     url: 'http://172.20.10.2:8036/root/addDynasty/selectDynastyMethodById',*/
            method: 'get',
            timeout: 30,
            dataType: 'json',
            returnAll: true,
            data: {
                values: {
                    'id':urlArrPort[1],
                }
            }},
        function(ret, err) {
            if (ret) {
                /*       alert(ret.body.data)
                       alert(ret.body.data.dynastyName)*/
                $dynastyName.val(ret.body.data.dynastyName);
                $dynastyYearBegin.val(ret.body.data.dynastyYearBeginToString);
                $dynastyYearEnd.val(ret.body.data.dynastyYearEndToString);
                $('#christianEraBegin').val(ret.body.data.christianEraBegin);
                $('#christianEraEnd').val(ret.body.data.christianEraEnd);
                $('.id').val(ret.body.data.id);

            } else {

            }
        });

    $addDynastySubmit.val('确认');
}