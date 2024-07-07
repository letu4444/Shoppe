$(".otp2").each(function(){
    var dodai ='';
    $(this).on("keyup",function(e){
       $(this).attr("value",$(this).val());
       if($(this).val().length == 4){
          dodai = $(this).attr("value");
          console.log(dodai+$(this).attr("value"));
        $("button").addClass("active");

    }else if($(this).val().length >4){
        console.log(dodai);
        $(this).attr("value",dodai);
    }else{
        $("button").removeClass("active");
    }
    });
    
   
});
