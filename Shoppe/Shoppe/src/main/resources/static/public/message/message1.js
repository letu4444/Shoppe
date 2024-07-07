
//Bật tắt khung chat
$(document).on('click', ".message-chat2-5", function() {
	$(".message6").find(".message6-1").remove();
	var top = $(this).offset();
	var top1 = $(".message").offset();
	var so = parseInt(top.top - top1.top) + 25;
	const vitri = $(this).parents(".message-chat1").index();
	console.log(vitri);

	const text = '<div class="message6-l">' +
		'<div class="message6-1">' +
		'<div class="message6-2">' +
		'<span class="vitri" value="' + vitri + '"></span>' +
		'</div>' +
		'<div class="message6-3">' +
		'<div class="message6-4">' +
		//    '<span class="message6-5">'+
		// '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="chat-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm-1.4 0a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0z"></path><path d="M8.861 1a.754.754 0 010 1.508h-4.6a.754.754 0 00-.753.754v9.167l1.726-1.734a.753.753 0 01.535-.218h6.97a.754.754 0 00.753-.754V7.138a.754.754 0 011.508 0v2.585a2.262 2.262 0 01-2.262 2.261h-6.66L3.29 14.781a.755.755 0 01-1.16-.117.754.754 0 01-.129-.418V3.262A2.262 2.262 0 014.262 1h4.6z"></path>'+
		// '</svg>'+
		//    '</span>'+
		//  '  Đánh dấu chưa đọc'+
		'</div>' +
		'<div class="message6-4">' +
		'<span class="message6-5">' +
		'<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="chat-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 1.4v3.791a.5.5 0 01-.276.447l-.513.256A4 4 0 002 9.472V10a1 1 0 001 1h4.083l.375 4.502a.543.543 0 001.084 0L8.917 11H13a1 1 0 001-1v-.528a4 4 0 00-2.211-3.578l-.513-.256A.5.5 0 0111 5.191V1.4h.789a.7.7 0 100-1.4H4.21a.7.7 0 000 1.4H5zm4.6 3.791V1.4H6.4v3.791a1.9 1.9 0 01-1.05 1.7l-.513.256A2.6 2.6 0 003.4 9.472V9.6h9.2v-.128a2.6 2.6 0 00-1.437-2.325l-.513-.257A1.9 1.9 0 019.6 5.191z"></path>' +
		'</svg>' +
		'</span>' +
		//   ' Ghim trò truyện'+
		'</div>' +
		'<div class="message6-4">' +
		//    '<span class="message6-5">'+
		// '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="chat-icon">'+
		// '<path fill-rule="evenodd" clip-rule="evenodd" d="M8.153.5a.94.94 0 00-.94.938v.093a4.676 4.676 0 00-2.65 1.563l1.042 1.013C6.5 3 7.339 2.86 8.153 2.86c.84 0 1.647.324 2.242.902.594.578.928 1.362.928 2.18 0 1.025.1 1.898.26 2.639v.001a8.05 8.05 0 00.708 2.023l1.784 1.734a.727.727 0 00.632-.502.7.7 0 00-.285-.792l-.141-.122a3.684 3.684 0 01-.608-.818c-.422-.753-.886-2.056-.886-4.164a4.44 4.44 0 00-1.357-3.184A4.676 4.676 0 009.094 1.53v-.093A.94.94 0 008.154.5zm6.253 10.533l-.106-.091.091.08.015.011zm0 0l.007.006.001.001-.008-.007zM1.193 2.264a.655.655 0 010-.928.66.66 0 01.931 0l12.683 12.638a.655.655 0 010 .928.66.66 0 01-.931 0l-2.57-2.56H2.3a.73.73 0 01-.7-.505.702.702 0 01.285-.792 1.854 1.854 0 00.189-.17c.14-.145.347-.392.559-.77.423-.753.886-2.056.886-4.164 0-.407.057-.808.166-1.194L1.193 2.264zM4.98 6.039l4.898 4.88h-6.05c.025-.043.062-.087.088-.133.502-.896 1.05-2.484 1.064-4.747z"></path>'+
		// '<path d="M6.66 13.544a.744.744 0 011 .258.581.581 0 00.985 0 .744.744 0 011-.258.7.7 0 01.266.972c-.179.3-.435.548-.744.72a2.078 2.078 0 01-2.029 0 2.005 2.005 0 01-.743-.72.7.7 0 01.265-.972z"></path>'+
		// '</svg>'+
		//    '</span>'+
		//   ' Tắt thông báo'+
		'</div>' +
		'<div class="message6-4">' +
		'<span class="message6-5">' +
		'<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="chat-icon"><path d="M9.253 6.109c.421 0 .763.319.763.712v4.073c0 .393-.342.712-.763.712s-.763-.319-.763-.712V6.82c0-.393.342-.712.763-.712zM7.11 6.821c0-.393-.341-.712-.762-.712-.422 0-.763.319-.763.712v4.073c0 .393.341.712.763.712.42 0 .762-.319.762-.712V6.82z"></path>' +
		'<path fill-rule="evenodd" clip-rule="evenodd" d="M4.132 2.715V2.07c0-.549.233-1.075.649-1.464A2.297 2.297 0 016.347 0h2.906c.588 0 1.151.218 1.566.606.416.389.65.915.65 1.464v.645h2.868c.421 0 .763.319.763.713 0 .393-.341.712-.763.712h-.69v8.79c0 .549-.233 1.075-.648 1.464a2.297 2.297 0 01-1.567.606H4.168a2.297 2.297 0 01-1.566-.606 2.004 2.004 0 01-.649-1.464V4.14h-.69C.84 4.14.5 3.821.5 3.428c0-.394.341-.713.763-.713h2.87zm1.728-1.1a.715.715 0 01.487-.19h2.906c.183 0 .358.068.488.19.13.12.202.284.202.455v.645H5.657V2.07c0-.17.073-.335.203-.456zM3.478 12.93V4.14h8.644v8.79a.624.624 0 01-.202.456.715.715 0 01-.488.189H4.168a.716.716 0 01-.488-.19.624.624 0 01-.202-.455z"></path>' +
		'</svg>' +
		' </span>' +
		' Xóa trò chuyện ' +
		'</div>' +
		'</div>' +
		'</div>' +
		'</div>';
	$(".message6").append(text);

	//  alert(parseInt(top.top - top1.top));
	$(".message6-1").css("top", so);
	hoandoi(vitri);
});

$(document).mouseup(function(e) {
	var div = $(".message6-l");
	var div1 = $(".message7-1");
	var mode = $(".emoji1");
	if (div.has(e.target).length === 0) {
		div.remove();
	}
	if (div1.has(e.target).length === 0) {
		$(".message7-1").removeClass("message7-1-1");
	}
	 if(mode.has(e.target).length === 0){
        $(".emoji").css('display',"none");
     }

});
/*function thoat(){
   
	 window.onclick = function(event){
		 var m = document.querySelector(".message6-l");
		var model = document.querySelector(".message7-1");
		 if(event.target == m){
			 $(".message6-l").remove();
		 }else if(event.target == model){
			 $('.message7-1').remove();
		 }
	 }
};*/
/*$(".message-chat2-2").click(function(){
  thoat();
 
});*/

$(document).on('click', '.message6-4', function() {
	 var n = parseInt($(".vitri").attr("value"));
        let text ="";
        var ghim = $(".message-chat2").eq(n).children().is(".message-chat2-6");
        var thongbao= $(".message-chat2").eq(n).find(".message-chat2-8").length;
        var doc=$('.message-chat2').eq(n).find(".message-chat2-9").length;
        console.log($('.message-chat2').eq(n).find(".message-chat2-9"));
         if($(this).index() ===0){
            // const tin = $(".message-chat2-9");
            if(doc === 1){
                $('.message-chat2').eq(n).find(".message-chat2-9").remove();
                sotin();
            }else{
                $(".message-chat2-9-1").eq(n).append('<div class="message-chat2-9">1</div>');
                sotin();
            }
     
         }
   
        if($(this).index() == 1){

             text ='<div class="message-chat2-6">'+
            '<span class="message-chat2-7">'+
             '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="chat-icon"><path d="M10.95 1.007L5.465 1a.816.816 0 00-.85.775c.02.445.395.791.842.779h.423l.008 2.876c-1.06.689-2.139 1.89-2.273 3.144A.385.385 0 004 9h8.5a.387.387 0 00.384-.425c-.136-1.253-1.316-2.43-2.376-3.12l-.002-2.87h.424a.816.816 0 00.843-.782.818.818 0 00-.823-.796zM7.754 14.703a.308.308 0 00.299.297h.274a.307.307 0 00.298-.297L9 9.5l-1.65.014.404 5.189z"></path>'+
             '</svg>'+
            '</span>'+
             '</div>';
           
            if(ghim){
               $(".message-chat2-6").remove();

            }else{
              $(".message-chat1").eq(n).css("padding-left","0px");
              $(".message-chat1").eq(n).find(".message-chat2").prepend(text);
            }
        }
        if($(this).index() == 2 ){
             text ='<div class="message-chat2-8">'+
            '  <span class="message6-5">'+
             '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="chat-icon">'+
             '<path fill-rule="evenodd" clip-rule="evenodd" d="M8.153.5a.94.94 0 00-.94.938v.093a4.676 4.676 0 00-2.65 1.563l1.042 1.013C6.5 3 7.339 2.86 8.153 2.86c.84 0 1.647.324 2.242.902.594.578.928 1.362.928 2.18 0 1.025.1 1.898.26 2.639v.001a8.05 8.05 0 00.708 2.023l1.784 1.734a.727.727 0 00.632-.502.7.7 0 00-.285-.792l-.141-.122a3.684 3.684 0 01-.608-.818c-.422-.753-.886-2.056-.886-4.164a4.44 4.44 0 00-1.357-3.184A4.676 4.676 0 009.094 1.53v-.093A.94.94 0 008.154.5zm6.253 10.533l-.106-.091.091.08.015.011zm0 0l.007.006.001.001-.008-.007zM1.193 2.264a.655.655 0 010-.928.66.66 0 01.931 0l12.683 12.638a.655.655 0 010 .928.66.66 0 01-.931 0l-2.57-2.56H2.3a.73.73 0 01-.7-.505.702.702 0 01.285-.792 1.854 1.854 0 00.189-.17c.14-.145.347-.392.559-.77.423-.753.886-2.056.886-4.164 0-.407.057-.808.166-1.194L1.193 2.264zM4.98 6.039l4.898 4.88h-6.05c.025-.043.062-.087.088-.133.502-.896 1.05-2.484 1.064-4.747z"></path>'+
             '<path d="M6.66 13.544a.744.744 0 011 .258.581.581 0 00.985 0 .744.744 0 011-.258.7.7 0 01.266.972c-.179.3-.435.548-.744.72a2.078 2.078 0 01-2.029 0 2.005 2.005 0 01-.743-.72.7.7 0 01.265-.972z"></path>'+
              '     </svg>'+
              '</span>'+
         '</div>';
         if(thongbao ===1 ){
            $(".message-chat2").eq(n).find(".message-chat2-8").remove();
         }else{
            $('.message-chat2-9-1').eq(n).prepend(text);
         }
        }
    $(".message6-l").remove();
});

//đổi khung chọn
function hoandoi(i) {
	let ghim = $(".message-chat2").eq(i).children().is(".message-chat2-6");
	let thongbao = $(".message-chat2").eq(i).find(".message-chat2-8").length;
	let doc = $('.message-chat2').eq(i).find(".message-chat2-9").length;
	let text = '';
	if (ghim) {
		text = '<span class="message6-5">' +
			'<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="chat-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 1.4v3.791a.5.5 0 01-.276.447l-.513.256A4 4 0 002 9.472V10a1 1 0 001 1h4.083l.375 4.502a.543.543 0 001.084 0L8.917 11H13a1 1 0 001-1v-.528a4 4 0 00-2.211-3.578l-.513-.256A.5.5 0 0111 5.191V1.4h.789a.7.7 0 100-1.4H4.21a.7.7 0 000 1.4H5zm4.6 3.791V1.4H6.4v3.791a1.9 1.9 0 01-1.05 1.7l-.513.256A2.6 2.6 0 003.4 9.472V9.6h9.2v-.128a2.6 2.6 0 00-1.437-2.325l-.513-.257A1.9 1.9 0 019.6 5.191z"></path>' +
			'</svg>' +
			'</span>' +
			'Bỏ ghim trò truyện';
		$(".message6-4").eq(1).html(text);
	} else {
		text = '<span class="message6-5">' +
			'<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="chat-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 1.4v3.791a.5.5 0 01-.276.447l-.513.256A4 4 0 002 9.472V10a1 1 0 001 1h4.083l.375 4.502a.543.543 0 001.084 0L8.917 11H13a1 1 0 001-1v-.528a4 4 0 00-2.211-3.578l-.513-.256A.5.5 0 0111 5.191V1.4h.789a.7.7 0 100-1.4H4.21a.7.7 0 000 1.4H5zm4.6 3.791V1.4H6.4v3.791a1.9 1.9 0 01-1.05 1.7l-.513.256A2.6 2.6 0 003.4 9.472V9.6h9.2v-.128a2.6 2.6 0 00-1.437-2.325l-.513-.257A1.9 1.9 0 019.6 5.191z"></path>' +
			'</svg>' +
			'</span>' +
			'Ghim trò truyện';
		$(".message6-4").eq(1).html(text);
	}
	if (thongbao === 1) {
		text = '<span class="message6-5">' +
			'<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="chat-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.071 1.438C7.071.92 7.487.5 8 .5c.513 0 .929.42.929.938v.093c.867.177 1.67.6 2.305 1.226a4.47 4.47 0 011.34 3.184c0 2.108.458 3.41.875 4.164.21.378.6.818.6.818l.138.122-.015-.012-.123-.11.131.117.002.001.003.002-.013-.01-.123-.11.138.122a.706.706 0 01.282.791.721.721 0 01-.691.506H2.222a.721.721 0 01-.691-.506.705.705 0 01.281-.79 1.861 1.861 0 00.187-.17c.14-.146.343-.393.552-.771.417-.753.875-2.056.875-4.164a4.47 4.47 0 011.34-3.184A4.596 4.596 0 017.07 1.53v-.093zm4.315 7.144s-.256-1.615-.256-2.64c0-.818-.33-1.602-.917-2.18A3.155 3.155 0 008 2.86a3.156 3.156 0 00-2.213.902 3.058 3.058 0 00-.917 2.18c0 2.317-.505 3.858-1.05 4.844a6.15 6.15 0 01-.077.133h8.514a5.949 5.949 0 01-.076-.133c-.304-.55-.596-1.271-.795-2.204z"></path>' +
			'<path d="M7.514 13.802a.728.728 0 00-.987-.258.705.705 0 00-.262.972c.176.3.43.548.734.72a2.03 2.03 0 002.002 0c.305-.172.558-.42.734-.72a.705.705 0 00-.262-.972.728.728 0 00-.987.258.558.558 0 01-.486.276.568.568 0 01-.486-.276z"></path></svg>' +
			'</span>' +
			'Bật thông báo';
		$(".message6-4").eq(2).html(text);

	} else {
		text = '<span class="message6-5">' +
			'<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="chat-icon">' +
			'<path fill-rule="evenodd" clip-rule="evenodd" d="M8.153.5a.94.94 0 00-.94.938v.093a4.676 4.676 0 00-2.65 1.563l1.042 1.013C6.5 3 7.339 2.86 8.153 2.86c.84 0 1.647.324 2.242.902.594.578.928 1.362.928 2.18 0 1.025.1 1.898.26 2.639v.001a8.05 8.05 0 00.708 2.023l1.784 1.734a.727.727 0 00.632-.502.7.7 0 00-.285-.792l-.141-.122a3.684 3.684 0 01-.608-.818c-.422-.753-.886-2.056-.886-4.164a4.44 4.44 0 00-1.357-3.184A4.676 4.676 0 009.094 1.53v-.093A.94.94 0 008.154.5zm6.253 10.533l-.106-.091.091.08.015.011zm0 0l.007.006.001.001-.008-.007zM1.193 2.264a.655.655 0 010-.928.66.66 0 01.931 0l12.683 12.638a.655.655 0 010 .928.66.66 0 01-.931 0l-2.57-2.56H2.3a.73.73 0 01-.7-.505.702.702 0 01.285-.792 1.854 1.854 0 00.189-.17c.14-.145.347-.392.559-.77.423-.753.886-2.056.886-4.164 0-.407.057-.808.166-1.194L1.193 2.264zM4.98 6.039l4.898 4.88h-6.05c.025-.043.062-.087.088-.133.502-.896 1.05-2.484 1.064-4.747z"></path>' +
			'<path d="M6.66 13.544a.744.744 0 011 .258.581.581 0 00.985 0 .744.744 0 011-.258.7.7 0 01.266.972c-.179.3-.435.548-.744.72a2.078 2.078 0 01-2.029 0 2.005 2.005 0 01-.743-.72.7.7 0 01.265-.972z"></path>' +
			'</svg>' +
			'</span>' +
			'Tắt thông báo';
		$(".message6-4").eq(2).html(text);
	}
	if (doc === 1) {
		text = '<span class="message6-5">' +
			'<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="chat-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.245.994a.754.754 0 11.003 1.508l-2.986.006a.754.754 0 00-.754.754v9.167l1.726-1.734a.754.754 0 01.535-.218h6.97a.754.754 0 00.753-.754V7.138a.754.754 0 011.508 0v2.585a2.261 2.261 0 01-2.262 2.261h-6.66L3.29 14.782a.755.755 0 01-1.16-.117.754.754 0 01-.129-.418V3.262A2.262 2.262 0 014.262 1L7.245.994zm7.932 1.308l-3.182 3.182a.76.76 0 01-1.079 0L9.223 3.849a.763.763 0 111.079-1.079l1.153 1.08 2.643-2.627a.763.763 0 111.079 1.079z"></path></svg>' +
			'</span>' +
			'Đánh dấu đã đọc';
		$(".message6-4").eq(0).html(text);
	} else {
		text = '<span class="message6-5">' +
			'<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="chat-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm-1.4 0a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0z"></path><path d="M8.861 1a.754.754 0 010 1.508h-4.6a.754.754 0 00-.753.754v9.167l1.726-1.734a.753.753 0 01.535-.218h6.97a.754.754 0 00.753-.754V7.138a.754.754 0 011.508 0v2.585a2.262 2.262 0 01-2.262 2.261h-6.66L3.29 14.781a.755.755 0 01-1.16-.117.754.754 0 01-.129-.418V3.262A2.262 2.262 0 014.262 1h4.6z"></path>' +
			'</svg>' +
			'</span>' +
			'Đánh dấu chưa đọc';
		$(".message6-4").eq(0).html(text);
	}
};


//HIển thị thông tin của shope
$(".message-right2").click(function() {
	$(".message7-1").toggleClass("message7-1-1");
	/*thoat();*/
});

///Cách xác định đã nhận nội du dung vaof hay chưa ở textarea
//Nút nhập dữ liệu nội dung tin nhắn vào
$(".message-file1-2").on("keyup", function() {
	var codulieu = $(this).val();
	if (codulieu.length > 0) {
		$(".message-file2-5").addClass("dulieu");
		$(this).attr("value", codulieu);
	} else {
		$(".message-file2-5").removeClass("dulieu");
		$(this).attr("value", codulieu);
		$(this).removeClass('message-emoji1');
	}
	userData.message = codulieu;
});


//tải ảnh với video từ máy tính nên
let Image = [];
//kiểu
let type = null;
//tải ảnh
let image = document.querySelector("#file");
console.log(image)
image.addEventListener("change", function(e) {
	let src = e.target.files;
	for (const file of src) {
		Image.push(file)
	}
	type = "image";
	renderFile("image");
	this.value = null;
});

//tải video
let image1 = document.querySelector(".video");

image1.addEventListener("change", function(e) {
	let src = e.target.files;
	for (const file of src) {
		Image.push(file)
	}
	type = "video";
	this.value = null;
});
//thêm nội dung vào chỗ nhập nội dung
function renderFile(file) {

	const ListImage = $(".message-file1-2").siblings().is(".message-image");
	//Chỉ xét trường hợp hợp chưa có để tạo mới
	if (!ListImage) {
		if (Image.length > 0) {
			$(".message-file1").prepend('<div class="message-image"></div>');
			$(".message-body").addClass("cofile");
		}
	}
	if (type == "image") {
		for (const file of Image) {
			const text = '<div class="message-image1">' +
				'<img src="' + URL.createObjectURL(file) + '">' +
				'<button class="message-image3">' +
				'<svg viewBox="0 0 16 16" width="15" height="15" data-spm-anchor-id="a2o4n.home.icms-5000632-1511774372834.i6.b4c63bdcxoyejr"><path d="M15.855 15.152a.489.489 0 01-.013.707.528.528 0 01-.73-.011L8 8.719l-.085.077-7.028 7.052a.528.528 0 01-.73.011.489.489 0 01-.012-.707L7.282 8 .145.848A.489.489 0 01.158.14a.528.528 0 01.73.012L8 7.281 15.113.152a.528.528 0 01.73-.012c.205.192.21.509.012.708L8.718 8l7.137 7.152z" fill="#9E9E9E" fill-rule="evenodd"></path>' +
				'</svg>' +
				'</button>' +
				'</div>';
			$('.message-image').append(text);
		}
	}
	Image = [];
	//Xóa ảnh khi đã tải lên
	$(".message-image3").click(function(e) {
		e.preventDefault();
		$(this).parent().remove();
		var tonganh = document.querySelectorAll(".message-image1");
		if (tonganh.length == 0) {
			$(".message-image").remove();
			$(".message-body").removeClass("cofile");
		}
	});
}

//Bật chat và tắt chát
$(".message1").click(function() {
	$(".message4").removeClass("close");
	$(this).addClass("close");
	sotin();
});
$(".icon-message3").click(function() {
	$(".message1").removeClass("close");
	$(".message4").addClass("close");
	sotin();
});


//Lưu danh sách đã vào đây
const userData = {
	senderId: '',
	receiverId: '',
	username: '',
	receivername: '',
	connected: false,
	imageavatar: '',
	message: '',
	startus: ''
}
var stompClient = null;
//két nối với websocket xong
if ($('.user3').text() != null) {
	//Khi kết nối user thành công
	userData.senderId = $('.userid').val();
	userData.username = $('.user3').text();
	userData.imageavatar = $('.user2 img').attr("src");
	userData.connected = true;
	userData.startus = "JOIN";
	$('.user').attr("value", userData.username);
	if (userData.username) {
		var socket = new SockJS('/ws');
		stompClient = Stomp.over(socket);
		stompClient.connect({}, onConnected, onError);

	}

}else{
	userData.senderId = $('.userid').val();
	userData.username = $('.user3').text();
	userData.imageavatar = $('.user2 img').attr("src");
	userData.connected = false;
	userData.startus = "LEAVE";
	$('.user').attr("value", userData.username);
	if (userData.username) {
		var socket = new SockJS('/ws');
		stompClient = Stomp.over(socket);
		stompClient.connect({}, onConnected, onError);

	}
}
function onConnected() {
	stompClient.subscribe("/message/public", onMessage);
	stompClient.subscribe('/user/' + userData.senderId + '/private', onPrivateMessage);
	userJoin();
}

//nhập user vào websocket
const userJoin = () => {
	var chatMessage = {
		senderName: userData.username,
		image: userData.imageavatar,
		senderId: userData.senderId,
		startus: userData.startus,

	};
	stompClient.send("/app/message", {}, JSON.stringify(chatMessage));


}
function onError(error) {
	console.log(error);
}
//nút nhấn gửi đi cho client khác
$(".message-file2-5").click(function() {
	var date = new Date();
	var msdate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes();

	const text = $(".message-file1-2").val();
	const img = $('.message-image1 img').attr("src");
	let image = '';
	let text1 = '';
	if ($('.message-image1 img').attr("src") != null) {
		const img = document.querySelectorAll('.message-image1');
		for (let i = 0; i < img.length; i++) {
			if (i == 0) {
				image = img[i].querySelector(".message-image1 img").getAttribute("src");
			} else {
				image += "+" + img[i].querySelector(".message-image1 img").getAttribute("src");
			}
			text1 += '<div class="file-image">' +
				'<div class="file-image1">' +
				'<img src="' + img[i].querySelector(".message-image1 img").getAttribute("src") + '" alt="Đồng hồ" class="file-image3"></div></div>';
		}
		text1 += '<span class="message-body3-6">' + text + '</span>';
		userData.message = image + "+" + text;
		userData.startus = 'IMAGE';
	}else if(type == 'emoji'){
		text1 = '<div class="message-emoji">'+text+'</div>';
		userData.message = text;
		userData.startus = 'EMOJI';
	}
	 else {
		text1 = text;
		userData.message = text;
		userData.startus = 'TEXT';
	}
	const text2 = '<div class="message-body3-2 ">' +
		'<div class="message-body3-3">' + msdate + '</div>' +
		'<div class="message-body3-4 right">' +
		'<div class="message-body3-5 right1">' + text1 + '</div>' +
		'</div>' +
		'</div>';
	$(".message-body3-1").append(text2);
	$('.message-image').remove();
	$('.message-file1-2').val('');
	$('.message-file1-2').text('');
	userData.receiverId = $('.message-right2-1').attr("data-user");
	userData.receivername = $('.message-right2-1').text();

	var chatMessage = {
		senderName: userData.username,
		senderId: userData.senderId,
		receiverName: userData.receivername,
		receiverId: userData.receiverId,
		image: userData.imageavatar,
		message: userData.message,
		type: "Message",
		startus: userData.startus

	};
	$('.message-file1-2').val('');
	$('.message-file1-2').text('');
	stompClient.send("/app/private_message", {}, JSON.stringify(chatMessage));
	userData.message = "";
});



//bên nhận dữ liệu trả về 
const onPrivateMessage = (payload) => {
	var date = new Date();
	var msdate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes();
	var message = JSON.parse(payload.body);
	let tenchat = document.querySelectorAll(".message-chat1");
	let ten;
	//Kiểm tra xem kiểu tin nhắn hay thông báo để đổ về đúng nơi theo quy định
	if (message.type == "Message") {
		
		//Xử lý nội dung khi phân loại chúng theo đúng kiểu như text hay image
		//nd này để đẩy vào khu chat
		let nd = '';
		//nd này để đẩy vào khu danh sách người chat
		let nd1 = '';
			if (message.startus == "TEXT") {
				nd = message.message;
				nd1= message.message;
			} else if (message.startus == "IMAGE") {
				message.message.split('+').map((val, index) => {
					if (index != message.message.split('+').length - 1) {
						nd += '<div class="file-image">' +
							'<div class="file-image1">' +
							'<img src="' + val + '" alt="Đồng hồ" class="file-image3"></div></div>';
					    nd1 ='Bạn '+message.senderName+': đã gửi '+(message.message.split('+').length - 1)+' ảnh cho bạn';
					} else {
						nd += '<span class="message-body3-6">' + val + '</span>';
					}

				});

			}else if(message.startus == "EMOJI"){
				nd ='<div class="message-emoji">'+message.message+'</div>';
				nd1 ='Bạn '+message.senderName+': đã gửi biểu tượng cho bạn';
			}
		
		
		//Kiểm tra xem bên khung chat có tên chưa
		for (let i = 0; i < tenchat.length; i++) {
			ten = tenchat[i].querySelector('.message-chat3-1').getAttribute('data-user');
			if (ten == message.senderId) {
				tenchat[i].querySelector('.message-chat2-4').innerText = nd1;
				tenchat[i].querySelector('.message-chat3-2').innerText = date.getHours() + ":" + date.getMinutes();
				tenchat[i].querySelector('.message-chat2-4').setAttribute('title', nd1);
				//với điều kiện bên khung chat chưa vào
				if (message.senderId != $('.message-right2-1').attr("data-user")) {
					 $(".message-chat2-9-1").eq(i).append('<div class="message-chat2-9">1</div>');
				}
				break;
			}


		}
		//Xử lý nhừn tên khác nhau
		if (ten != message.senderId) {
        
			let text = '<div class="message-chat1">' +
				'<div class="message-chat2">' +
				'<div class="message-chat2-1">' +
				'<div class="image-avatar">' +
				'<img src="' + message.image + '" alt="" class="image-avatar1">' +
				'</div>' +
				'</div>' +
				'<div class="message-chat2-2">' +
				'<div class="message-chat3">' +
				'<div class="message-chat3-1" data-user="' + message.senderId + '" title="' + message.senderName + '">' + message.senderName + '</div>' +
				'<div class="message-chat3-2">' + date.getHours() + ":" + date.getMinutes() + '</div>' +
				'</div>' +
				'<div class="message-chat2-3">' +
				'<div class="message-chat2-4" title="' + nd1 + '">' + nd1 + '</div>' +
				'<div class="message-chat2-9-1"><div class="message-chat2-9">1</div></div>'+ 			
				'</div>' +
				'</div>' +
				'<div class="message-chat2-5" id="2"></div> ' +
				'</div>' +
				'</div>';
			$('.message-chat').prepend(text);
		}
		//kiểm tra bên gửi sang xem có trùng tên bên khung hiển thị nội dung k 
		if (message.senderId == $('.message-right2-1').attr("data-user")) {
			
			let text1 = '<div class="message-body3-2 ">' +
				'<div class="message-body3-3">' + date.getHours() + ":" + date.getMinutes() + '</div>' +
				'<div class="message-body3-4">' +
				'<div class="message-body3-5"> '+nd+'</div></div></div>';
			$('.message-body3-1').append(text1);
		}
	}
	//Ngược lại sẽ đổ vào thông báo
	else if (message.type == "Thongbao") {
		let text3 = '  <div class="item p-3 lopboc">' +
			'<div class="row gx-2 justify-content-between align-items-center">' +
			'<div class="col-auto">' +
			'<img class="profile-image" src="' + message.image + '" alt="">' +
			'</div>' +
			'<div class="col">' +
			'<div class="info"> ' +
			'<div class="desc">' + message.message + '</div>' +
			'<div class="meta">' + date.getMinutes() + ' phút</div>' +
			'</div>' +
			'</div>' +
			'</div>' +
			'<a class="link-mask" href="notifications.html"></a>' +
			'</div>';
		$('.dropdown-menu-content').prepend(text3);
		if ($('.lopboc').length > 0) {
			$('.p-0').prepend('<span class="icon-badge">' + $('.lopboc').length + '</span>');
		}
	}
	sotin();
};
//Khi nhấn chat với ai đó 
$('._5k5').click(function() {
	let imgrec = $('img.noidung2-2-8-4').attr("src");
	let receivername = $(this).parents('.tieudephai1e').find(".tieudephai1e2").text();
	$('.message1').addClass('close');
	$('.message4').removeClass('close');
	$('.message-right2-1').text(receivername);
	$('.message-right2-1').attr("data-user", $(this).parents('.tieudephai1e').find(".tieudephai1e2").attr("data-user"));
	//thì cần hiển thị ng đó vào khu chat nữa
	let text2 = '<div class="message-chat1">' +
		'<div class="message-chat2">' +
		'<div class="message-chat2-1">' +
		'<div class="image-avatar">' +
		'<img src="' + imgrec + '" alt="" class="image-avatar1">' +
		'</div>' +
		'</div>' +
		'<div class="message-chat2-2">' +
		'<div class="message-chat3">' +
		'<div class="message-chat3-1" data-user="' + $(this).parents('.tieudephai1e').find(".tieudephai1e2").attr("data-user") + '" title="' + receivername + '">' + receivername + '</div>' +
		'<div class="message-chat3-2"></div>' +
		'</div>' +
		'<div class="message-chat2-3">' +
		'<div class="message-chat2-4" title=""></div>' +
		'<div class="message-chat2-9-1"></div>' +
		'</div>' +
		'</div>' +
		'<div class="message-chat2-5" id=""></div> ' +
		'</div>' +
		'</div>';
	$('.message-chat').prepend(text2);
	console.log($('.tieudephai1e2').attr("data-user"));
	$(".message7-4").find('.image-avatar1').attr("src", imgrec);
	$('.message7-5').text(receivername);
	$('.message7-5').attr("data-user", $(this).parents('.tieudephai1e').find(".tieudephai1e2").attr("data-user"));
});

const onMessage = (payload) => {
	console.log(JSON.parse(payload.body));
	const message = JSON.parse(payload.body);
	if (message.startus == "JOIN") {
		if ($('.tieudephai1e2').attr('data-user') == message.senderId) {
			$('._5k7').html('<span class="online"></span>Online');
		}

	}else if(message.startus == "LEAVE"){
			if ($('.tieudephai1e2').attr('data-user') == message.senderId) {
			$('._5k7').html('Hoạt động phút 1 trước');
		}
	}

}

//Khu nhấn để đẩy sang chat
$(document).on("click", ".message-chat2-2", function() {
	$('.message-right2-1').text($(this).find('.message-chat3-1').text());
	let text1 = '<div class="message-body3-2 ">' +
		'<div class="message-body3-3">' + $(this).find('.message-chat3-2').text() + '</div>' +
		'<div class="message-body3-4">' +
		'<div class="message-body3-5">' + $(this).find('.message-chat2-4').text() + '</div></div></div>';

	$('.message-body3-2').remove();
	$('.message-body3-1').append(text1);
	$('.message-right2-1').attr("data-user", $(this).find('.message-chat3-1').attr("data-user"));
	$('.message7-4').find('img').attr("src", $(this).find('.image-avatar1').attr('src'));
	$('.message7-5').text($(this).find('.message-chat3-1').text());
	$('.message7-5').attr("data-user", $(this).find('.message-chat3-1').attr("data-user"));
	if ($('.message-right2-1').text() == $(this).find('.message-chat3-1').text()) {
		$(this).find('.message-chat2-9').remove();
	}

})


//xử lý khi mua hàng sẽ gửi dữ liệu sang bên bán dể bên bán chăm sóc khách hàng
$('.tong1e3').click(function(e) {
	e.preventDefault();
	var anh = $('.tong1g-2 img').attr("src");
	userData.receivername = $(".tieudephai1e2").text();
	userData.receiverId = $(".tieudephai1e2").attr("data-user");
	userData.message = '<span class="desc1">' + userData.username + '</span> đã thêm 1 sản phẩm của bạn vào giỏ hàng hãy chăm sóc họ.Chi tiết ở đây ';
	var chatMessage = {
		senderName: userData.username,
		senderId: userData.senderId,
		receiverName: userData.receivername,
		receiverId: userData.receiverId,
		image: userData.imageavatar,
		message: userData.message,
		type: "Thongbao",
		startus: "TEXT"

	};
	stompClient.send("/app/private_message", {}, JSON.stringify(chatMessage));
	userData.message = "";

});


//hiển thị số tin nhắn chưa đọc 
sotin();
function sotin(){
    let sum =0;
    if($('.message-chat2-9').length ==0){
        $('.message4-2-1').remove();
        $('.message2-1').remove();
        $('.message1').removeClass('message2-2');
        $('.message2').removeClass('message2-2');
        $('.message3').removeClass('message2-2');
    }else{
        if(!$('.message1').is('.message2-2')){
            $('.message1').addClass('message2-2');
            $('.message2').addClass('message2-2');
            $('.message3').addClass('message2-2');
        }
        
        if($('.message4-2-1').length==0){
            let text =' <div class="message4-2-1"><span>(</span><span class="message4-2-2">1</span><span>)</span></div>';
            $('.message4-2').after(text);
            let text2 =' <div class="message2-1"></div>';
              $('.message2').before(text2);
           
        // }else{
        //     $('.message2-1').text($('.message-chat2-9').length);
        //     $('.message4-2-2').text($('.message-chat2-9').length);
        }  
        let i=0;
        while(i<$('.message-chat2-9').length){
            console.log($('.message-chat2-9')[i].innerText);
             sum +=parseInt($('.message-chat2-9')[i].innerText);
             i++;
        }
        $(".message4-2-2").text(sum);
        $('.message2-1').text(sum);
    }
   
}

//khi chọn emoji
 $('.message-file2-2 .chat-icon').click(function(){
        $(".emoji").css('display',"block");
        let i =12;
        while(i < 70){
            $('.emoji1-3').append('<p>&#1285'+i+';</p>');
        
            i++;
        }
      
    });
    $(document).on("click","p",function () {
    let emoji =  $('.message-file1-2').val();
      type ='emoji';
      emoji +=$(this).text();
    $('.message-file1-2').val(emoji);
    $('.message-file1-2').addClass("message-emoji1");
    
        // $(".emoji").css('display',"none");
     });