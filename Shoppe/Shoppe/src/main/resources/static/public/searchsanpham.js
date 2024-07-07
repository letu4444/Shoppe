//Mục search ở header
$('.tieude2-4').on("input",function(){
     $(this).attr("value",$(this).val());
    search($(this).val());
 });
//Nhấn Button tìm kiếm
$(".tieude2-5").click(function (){
    const text = $(".tieude2-4").val();
            window.location.href = "/search/list?keyword="+text+"";
            //Thêm return false thì ms chuyển đk sang trang mới k thì sẽ vẫn ở trang cũ đó
       return false;
});

 
 
 
 $('.tieude2-4').on({
    
    click:function(){
 //Cách chỉnh aria-expanded trong input
 $(this).attr('aria-expanded', 'true');
 let text = '';
     if($(this).val().length > 0){
		 text ='<div class="search1">'+
            '<a href="#" class="search2">'+
                '<span class="search_kyword">'+$(this).attr("placeholder")+'</span>'+
            '</a>'+
            '</div>';
      search($(this).val());
     }else{
        text ='<div class="search1">'+
            '<a href="#" class="search2">'+
                '<span class="search_kyword">'+$(this).attr("placeholder")+'</span>'+
            '</a>'+
            '</div>';
     }
console.log(text);
 var isSearch = $(".tieude2-7").siblings().is(".search");
 if(!isSearch){
     $(".tieude2-3").append('<div class="search"></div>');
 }
 $(".search").html(text);
$(".tieude2-3").addClass("close_search");

 },
 input:function(){
    $(this).attr("value",$(this).val());
  const val = $(this).val();
   const text =
   '<div class="search1">'+
       '<a href="/lam web/noidung/noidung.html" class="search2">'+
           '<svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" stroke-width="0" class="search5"><path d="m13 1.9c-.2-.5-.8-1-1.4-1h-8.4c-.6.1-1.2.5-1.4 1l-1.4 4.3c0 .8.3 1.6.9 2.1v4.8c0 .6.5 1 1.1 1h10.2c.6 0 1.1-.5 1.1-1v-4.6c.6-.4.9-1.2.9-2.3zm-11.4 3.4 1-3c .1-.2.4-.4.6-.4h8.3c.3 0 .5.2.6.4l1 3zm .6 3.5h.4c.7 0 1.4-.3 1.8-.8.4.5.9.8 1.5.8.7 0 1.3-.5 1.5-.8.2.3.8.8 1.5.8.6 0 1.1-.3 1.5-.8.4.5 1.1.8 1.7.8h.4v3.9c0 .1 0 .2-.1.3s-.2.1-.3.1h-9.5c-.1 0-.2 0-.3-.1s-.1-.2-.1-.3zm8.8-1.7h-1v .1s0 .3-.2.6c-.2.1-.5.2-.9.2-.3 0-.6-.1-.8-.3-.2-.3-.2-.6-.2-.6v-.1h-1v .1s0 .3-.2.5c-.2.3-.5.4-.8.4-1 0-1-.8-1-.8h-1c0 .8-.7.8-1.3.8s-1.1-1-1.2-1.7h12.1c0 .2-.1.9-.5 1.4-.2.2-.5.3-.8.3-1.2 0-1.2-.8-1.2-.9z"></path>'+
           '</svg>'+
           'Tìm Shope "'+
           '<span class="search_kyword">'+val+'</span>'+
           ' "'+
       '</a>'+
       
      
   
  '</div>';

      if($(this).attr("aria-expanded") ==='false'){
          $('.search').remove();
      }
     // $(".search").html(text);
     search(val); 
 },
});

//Cách xóa gợi ý của search đi
let close_search = document.querySelector(".tieude");
close_search.addEventListener('click', (event) => {
    if(event.target.className != "tieude2-4"){
        $(".tieude2-4").attr('aria-expanded', 'false');
        $('.search').remove(); 
        $(".tieude2-3").removeClass("close_search");
    }
});
//Xử lý hàm khi search 
function search(data){
	$.ajax({
		 url: "/search/list",
            type: 'get',
            data: { keyword:data},
            success: function (data) {
                if(data !=null){
                    console.log("as");
                }
                $(".search1").html(data);
            }
	});
}
// Cách tạo servlet bằng dấu - khi nhấn vào mua hàng trong java web
var queryString = window.location.pathname;
var url_param = new URLSearchParams(queryString);
console.log(queryString);