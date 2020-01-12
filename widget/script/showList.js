apiready = function () {


    $return = $("#return");
    $return.on('touchstart',function () {
        $winName = api.winName;
        alert("11111"+$winName);
        api.closeWin({
            name:$winName
        });
    });
    var $id= $(".id");
    $id.val("");
    $("#showTableStyle td:lt(2)").attr({
        width:'100px',
        height:'50px',
        border:'1px solid black'
    })
    $("#showTableStyle td:gt(1)").attr({
        width:'100px',
        height:'50px',
        border:'1px solid black'
    })

    $showListDynasty = $(".showListDynasty");
    var dynasty_name = $('#dynasty_name').val();
    var dynasty_year_begin = $('#dynasty_year_begin').val();
    var dynasty_year_end = $('#dynasty_year_end').val();
    $showTableStyle = $("#showTableStyle");
    $dynastyModify = $("#dynastyModify");
    api.ajax({
        url:'http://192.168.18.7:8036/root/addDynasty/listDynasty',
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
          /*      alert("----"+ret.body.data)*/
           /*     alert("----"+ret.body.data[0].dynastyName)*/
                var num = ret.body.data.length;
             /*   alert("----"+num)*/
                for(var i=0;i<num;i++){
                    var dynastyId = ret.body.data[i].id;
                    $showTableStyle.append("<tr class='showListDynasty'>" +
                    /*style='display: none'*/
                        "<td >"+(ret.body.data[i].christianEraBegin == 'AD'?'公元':'公元前')+ret.body.data[i].dynastyYearBeginToString+"</td>" +
                        "<td>"+(ret.body.data[i].christianEraEnd == 'AD'?'公元':'公元前')+ret.body.data[i].dynastyYearEndToString+"</td>" +
                        "<td>"+ret.body.data[i].dynastyName+"</td>" +
                    /*    "<td>"+"<a href='../html/addDynasty.html?id="+ret.body.data[i].id+"'><input type='button' value='修改' id='dynastyModify'/><span style='display: none'>"+ret.body.data[i].id+"</span></a>"+"</td>" +*/
                        "<td>"+"<a ><input type='button' value='修改' id='dynastyModify' class='dynastyModify'/><span>"+ret.body.data[i].id+"</span></a>"+"</td>" +
                        "</tr>");
                    $("#showTableStyle td").css("border","1px solid black");
                    $(".showListDynasty td:lt(2)").attr({
                        width:'100px',
                        height:'50px',
                    })
                    $(".showListDynasty td:gt(1)").attr({
                        width:'100px',
                        height:'50px',
                    })
                     $(this).on('touchstart','.dynastyModify',function () {
                        api.openWin({
                            name: 'modifyDynasty',
                            url: '../html/addDynasty.html',
                            pageParam: {
                                'id': dynastyId
                            }
                        });
                    })
                   /* $('.dynastyModify').on('touchstart',function () {
                        api.openWin({
                            name: 'modifyDynasty',
                            url: '../html/addDynasty.html',
                            pageParam: {
                                'id': dynastyId
                            }
                        });
                    })*/
                }
            }
        }
    )




}