document.querySelector(".goiy1-2").addEventListener("click",function(){
    $('.goiy1-1').removeClass("_1A");
    $(this).addClass("_1A");
    $(".goiy2-2").css("display","block");
    $(".goiy2-1").css("display","none");
});
document.querySelector(".goiy1-1").addEventListener("click",function(){
    $('.goiy1-2').removeClass("_1A");
    $(this).addClass("_1A");
    $(".goiy2-1").css("display","block");
    $(".goiy2-2").css("display","none");
});

// var i;
// var A =document.querySelectorAll(".goiy2-4");
// for(i =0; i < A.length; i++){
//     var B = A[i].(".goiy2-7-0").alt;
//     console.log(B);
// }
$(document).ready(function(){
    var tudong = setInterval(function(){
       $(".next").trigger("click");
       $('.shope2-7').trigger("click");
   },3500);

    var i=1;
    var dot = $('.dot').length;
    $('.prew').click(function(){
        setTimeout(tudong,25000);
       i--;
       if(i == -1){i = dot-1;}
  console.log(i);
       $('.slide2').attr("style","width:1200%;transition:all 500ms ease 0s; transform: translateX("+(-i*8.33)+"%) translateX(0px);");
       $('.dot').removeClass("_1k");
       $('.dot:nth-child('+(i)+')').addClass("_1k");
       if(i !=0){
           setTimeout(function(){
               $('.slide2').attr("style","width:1200%;transition:all 0ms ease 0s;transform:translateX("+(-i*8.33)+"%) translateX(0px);");
           },500);
       }else{
           $('.dot:nth-child('+(parseInt(dot))+')').addClass("_1k");
           setTimeout(function(){
               $('.slide2').attr("style","width:1200%;transition:all 0ms ease 0s;transform:translateX("+(-83.3)+"%) translateX(0px);");
           },500);
       }
    });
    $('.next').click(function(){
       setTimeout(tudong,25000);
        i++;
        if(i ==dot+2){i = 2;}
        $('.slide2').attr("style","width:1200%;transition:all 500ms ease 0s;transform:translateX("+(-i*8.33)+"%) translateX(0px);");
        $('.dot').removeClass('_1k');
        $('.dot:nth-child('+(i)+')').addClass('_1k');
       if(i != parseInt(dot)+1){
           setTimeout(function(){
               $('.slide2').attr("style","width:1200%;transition:all 0ms ease 0s;transform:translateX("+(-i*8.33)+"%) translateX(0px);");
           },500);

       }else{
           $('.dot:first-child').addClass('_1k');
         setTimeout(function(){
           $('.slide2').attr("style","width:1200%;transition:all 0ms ease 0s;transform:translateX(-8.33%) translateX(0px);");
         },500);
       }

   });
   $('.dot').click(function(){
       setTimeout(tudong,25000);
       var dot1 = $(this).index()+1;
       $('.dot').removeClass("_1k");
       $(this).addClass('_1k');
       $('.slide2').attr("style","width:1200%;transition:all 500ms ease 0s;transform:translateX("+(-dot1*8.33)+"%) translateX(0px);");
      setTimeout(function(){
          $('.slide2').attr("style","width:1200%;transition:all 0ms ease 0s; transform:translateX("+(-dot1*8.33)+"%) translateX(0px);");
      },500);
      i = dot1;
   });

   //băng chuyền cho danh mục

   $('.danhmuc1-8').click(function(){
       $('.danhmuc1-6').attr("style","width:140%;transition:all 500ms ease 0s; transform:translateX(0px);")
       $(this).css("display" ,"none");
   });
   $(".danhmuc1-9").click(function(){
       $('.danhmuc1-6').attr("style","width:140%;transition:all 500ms ease 0s; transform:translateX(-480px);")
       $('.danhmuc1-8').css("display" , "flex");
   });

   //băng chyền sale
   $('.sale3').click(function(){
       $(".sale2-2").attr("style","width:185%;transition:all 500ms ease 0s;transform:translateX(0px);");
       $(this).css("display","none");
   });
   $('.sale3-1').click(function(){
       $(".sale2-2").attr("style","width:185%;transition:all 500ms ease 0s;transform:translateX(-1000px);");
       $(".sale3").css("display","flex");
   });


   ///Băng chuyền của shope maill
    var j = 1;
    var do1 = $('.do').length;
   $('.shope2-6').click(function(){
       setTimeout(tudong,2500);
     j--;
     if(j == -1){j = do1-1;}
     $('.shope2-3').attr("style","width: 1000%;transition: all 500ms ease 0s;transform: translateX("+(-j*10)+"%);");
     $('.do').removeClass("_1k1");
     $(".do:nth-child("+j+")").addClass("_1k1");
     if(j != 0){
         setTimeout(function(){
            $('.shope2-3').attr("style","width: 1000%;transition: all 0ms ease 0s;transform: translateX("+(-j*10)+"%);");
         },500);
     }else{
        $('.do:last-child').addClass("_1k1");
         setTimeout(function(){
            $('.shope2-3').attr("style","width: 1000%;transition: all 0ms ease 0s;transform: translateX(-80%);");
        },500);
     }
   });
   $('.shope2-7').click(function(){
    setTimeout(tudong,2500);
     j++;
     if(j == do1+2){j = 2;}
     $('.shope2-3').attr("style","width: 1000%;transition: all 500ms ease 0s;transform: translateX("+(-j*10)+"%);");
     $('.do').removeClass("_1k1");
     $(".do:nth-child("+j+")").addClass("_1k1");
     if(j != parseInt(do1)+1){
         setTimeout(function(){
            $('.shope2-3').attr("style","width: 1000%;transition: all 0ms ease 0s;transform: translateX("+(-j*10)+"%);");
         },500);
     }else{
        $('.do:first-child').addClass("_1k1");
         setTimeout(function(){
            $('.shope2-3').attr("style","width: 1000%;transition: all 0ms ease 0s;transform: translateX(-10%);");
        },500);
     }
   });
   $(".do").click(function(){
    setTimeout(tudong,2500);
       var nhan = $(this).index()+1;
       $('.do').removeClass('_1k1');
       $(this).addClass('_1k1');
       $('.shope2-3').attr("style","width:1000%;transtion:all 500ms ease 0s;transform:translateX("+(-nhan*10)+"%);");
       setTimeout(function(){
        $('.shope2-3').attr("style","width:1000%;transtion:all 0ms ease 0s;transform:translateX("+(-nhan*10)+"%);");
       },500);
       j = nhan;

   });


   //băng chuyền của shope maill

   $('.shope3-9').click(function(){
       $('.shope3-3').attr("style","width: 125%;transition: all 500ms ease 0s;transform: translateX(-195px);");
       $('.shope3-0').css("display","flex");
       $(this).css("display","none");
    });
   $('.shope3-0').click(function(){
       $('.shope3-3').attr("style","width: 125%;transition: all 500ms ease 0s;transform: translateX(0px);");
       $(this).css("display","none");
       $('.shope3-9').css("display","flex");
    });
    
   //Băng chuyền thư mục hàng đầu
        var ul = $(".hangdau2-1").width();
        var dientich = $('.hangdau2-2').width();
        var li = $('.hangdau2-3').length;
        var li1 = $('.hangdau2-3').width();
        var tong = parseInt(ul-li1);
        var ie =0;
    $('.hangdau2-0').click(function(){

        if(ie == parseInt(li/5)){
        }else{
            ie = ie +1;
            $('.hangdau2-2').attr("style","width: 349.3333%;transition: all 500ms ease 0s;transform: translateX("+(-ie*tong)+"px);")
            $('.hangdau2-9').css("display","flex");
            setTimeout(function(){
                if(ie == parseInt(li/5)-1){
                    $('.hangdau2-2').attr("style","width: 349.3333%;transition: all 500ms ease 0s;transform: translateX(-"+(dientich-ul)+"px);")
                   $(".hangdau2-0").css("display","none");
                }
            },500);
        }
        
    });   
        $('.hangdau2-9').click(function(){
            if(ie ==0 ){
            }else{
                ie = ie -1;
                $('.hangdau2-2').attr("style","width: 349.3333%;transition: all 500ms ease 0s;transform: translateX("+(-ie*tong)+"px);")
                $('.hangdau2-0').css("display","flex");
                setTimeout(function(){
                    if(ie ==0){
                        $('.hangdau2-2').attr("style","width: 349.3333%;transition: all 500ms ease 0s;transform: translateX(0px);")
                        $(".hangdau2-9").css("display","none");
                    }
                },500);
            }
            
        });   

    var ia;
    var A = $('.goiy2-4');
    for(ia =0; ia < A.length; ia++){
        var B = A[ia].querySelector(".goiy2-7-0").alt;
        A[ia].querySelector(".goiy2-8-2").innerHTML = B;
    }
})

//Chạy đồng hồ đếm ngược

var date = new Date("july  28, 2022 15:30:00").getTime();
var x = setInterval(function() {

  // Nhận ngày và giờ hôm nay
  var now = new Date().getTime();
    
  // Tìm khoảng cách giữa bây giờ và ngày đếm ngược 
  var distance = date - now;
    
  // Tính toán thời gian cho ngày, giờ, phút và giây
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // đặt elmenet cho các id
  document.getElementById("demo1").innerHTML =  hours ;
  document.getElementById("demo2").innerHTML = minutes  ;
  document.getElementById("demo3").innerHTML = seconds ;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo1").innerHTML = "00";
    document.getElementById("demo2").innerHTML = "00";
    document.getElementById("demo3").innerHTML = "00";
  }
}, 1000);





