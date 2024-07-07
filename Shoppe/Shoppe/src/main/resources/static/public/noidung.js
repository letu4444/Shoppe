$('.them').click(function(){
    $(this).siblings('.noidung1-2-4').css("display","flex");
    $(this).hide();
})
var ia;
var A = $('.goiy2-4');
for(ia =0; ia < A.length; ia++){
    var B = A[ia].querySelector(".goiy2-7-0").alt;
    A[ia].querySelector(".goiy2-8-2").innerHTML = B;
}
