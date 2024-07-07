
var id = parseFloat($('.userid').val());
console.log($('#checkid').data("login"));
if ($('#checkid').data("login") == true) {
	//lấy tất cả sản phẩm ra ngoài
	$.getJSON("/product/gio", { id: id }, function(data) {
		//Xử lý bên giỏ đựng hàng
		data.map((value, index) => {
			console.log(value[1])
			var text = '<div class="_1e2-2">' +
				'<div class="_1e2">' +
				'<img class="_1e2-1" src=' + value[0] + ' alt="">' +
				'</div>' +
				'<div class="_1e3">' + value[1] + '</div>' +
				'<div class="_1e4">' + value[2] + '</div>' +
				'</div>';

			var tong1 = $('._1e2-1');
			var conte = 1; //Đặt giá mặc địh khi chạy 
			// cách tìm trong giỏ hàng hàng  có tồn tại sản phẩm đó hay không        
			for (var ia = 0; ia < tong1.length; ia++) {
				var anhmau = tong1[ia].attributes;
				var gt_anh = anhmau.getNamedItem('src').value;
				if (gt_anh == value.image) {
					conte = 0; // Nếu bằng thì cho giá trị đó về không
					break;
				}
			}
			if (conte == 1) {
				var chieudai = parseInt($('._1e2-2').length);
				var soluong = parseInt($("#thuanh").find(".soluong").data("count")) + (chieudai + 1);
				$("#thuanh").find(".soluong").text(soluong);
				if (parseInt(soluong) >= 1) {
					$(document).find(".soluong").css('display', 'flex');
					$('.xemgio').find('.xemgio3').slideUp();
					$('.xemgio').find('.xemgio2').slideDown();
					$('._1e1').append(text);
				}
			}
		});
	});

}