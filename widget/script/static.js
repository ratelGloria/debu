apiready = function () {


    $return = $("#return");

    $return.on('touchstart',function () {

        $winName = api.winName;
        alert("11111"+$winName);
        api.closeWin({
            name:$winName
        });

    });


}