$(".tab li:eq(0) a").click(
    function(){
        $(".tab a").removeClass("on");
        $(this).addClass("on");
        $(".tabcontent").hide();
        $(".tab1").show();
    }
);
$(".tab li:eq(1) a").click(
    function(){
        $(".tab a").removeClass("on");
        $(this).addClass("on");
        $(".tabcontent").hide();
        // $(".tab2").show();
        $(".tab2").css("display", "flex")
    }
);
$(".tab li:eq(2) a").click(
    function(){
        $(".tab a").removeClass("on");
        $(this).addClass("on");
        $(".tabcontent").hide();
        // $(".tab3").show();
        $(".tab3").css("display", "flex")
    }
);