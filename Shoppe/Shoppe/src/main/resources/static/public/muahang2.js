var tieude = $('.tong1r1').html();

console.log(tieude);
$('._6k2-8').html(tieude);
var ia;
var A = $('.goiy2-4-1');
for (ia = 0; ia < A.length; ia++) {
	var B = A[ia].querySelector(".goiy2-7-0").alt;
	A[ia].querySelector(".goiy2-8-2").innerHTML = B;
}


//Chạy ướt qua ảnh thì hiển thị ra màn hình lớn
$('.mau1b').click(function() {
	var anhchinh = $('.tong1g-2 img').attr("src");
	//khi di chuyển chuột qua các butoon khác xem
	//Sau đó dời chuột khỏi các button đó thì sẽ qua lại button được chọn
	$('.mau1b').mouseleave(function() {
		$('.tong1g-2 img').attr("src", anhchinh);
	});
	$(this).siblings().children().remove();
	$(this).toggleClass('_4k6').siblings().removeClass("_4k6");
	 
	$(this).append('<div class="mau1c"><span class="mau1d"></span></div>')
	$(this).click(function() {
		$('.mau1c').siblings().remove();
		$(this).mouseleave(function() {
			var mau = $('.doi').siblings("img").attr('src');
			$('.tong1g-2 img').attr("src", mau);
		});
		
	});
	if($(this).is('._4k6') == false){
		$('.mau1b').removeClass('disabled');
	}
	if ($('.mau1c').length) {
		$('._4k7').removeClass('valide');
		$('.A9').remove();
		$('.tong1e3').attr("disabled", false);
	}
	
	//Đẩy dữ liệu xuống
	sosanh();
	
});
// khi di chuyển vào các ảnh con ở dưới khung ảnh
$('.tong1g-4 img').mousemove(function() {
	var anhmau = $(this).attr('src');
	$('.tong1g-2 img').attr("src", anhmau);
	$('.tong1g-4').find(".doi").remove();
	$(this).after('<div class="doi"></div>');
})
//Lấy dữ liệu của phân loại ra 
var idsp = parseInt($(".tong1j-2a").attr("value"));
var list;
$.get("/phanloai/save",{ id: idsp },function(data) {
		console.log(data);
			if (data != null) {
			//Khi di chuột vào sẽ hiển thị ra
			// khi di chuyển chuột đến đến các button
			$('button').mousemove(function(ee) {
				const giatri = $(this).attr("aria-label");

				for (var i = 0; i < data.chunghangphanloai.length; i++) {
					if (giatri == data.chunghangphanloai[i][1]) {
						$('.tong1g-2 img').attr("src", data.chunghangphanloai[i][0]);
					}
				}


			});
			// hiển thị giá tiền
			//so sánh nếu đúng hết thì sẽ ra số tiền cụ thể
			list = data.danhsachphanloai;

		}
	});


//Lấy danh sách phân loại để thêm vào giỏ hàng
var danhsach = new Array();
console.log(danhsach);
// hiển thị giá tiền
//so sánh nếu đúng hết thì sẽ ra số tiền cụ thể
function sosanh() {
	var a1 = document.querySelectorAll("._4k6");
	let a11 = "";
	let a2 = "";
	//kiểm tra xem còn hàng k
	if (a1.length == 1) {
		a11 = a1[0].getAttribute("aria-label");
		//lấy các phân loại the yêu cầu
		const c = [];
		//  ["S","M","L"]
		const v = [];
		const mau = document.querySelectorAll(".mau1a");
		const rell = list.filter(function(sa) {
			return sa.includes(a11);
		});
		console.log(rell);
		for (let e = 0; e < rell.length; e++) {
			if (a11 == rell[e][1]) {
				const ma = mau[1].querySelectorAll(".mau1b");
				c.push(rell[e][2]);

				if (e == 0) {
					for (var j = 0; j < ma.length; j++) {
						v.push(ma[j].getAttribute("aria-label"));
					}
				}

			} else if (a11 == rell[e][2]) {
				const ma = mau[0].querySelectorAll(".mau1b");
				c.push(rell[e][1]);
				for (var j = 0; j < ma.length; j++) {
					v.push(ma[j].getAttribute("aria-label"));
				}

			}
		}
	//Nơi tìm ra cái gì khác nhau trong mảng
		diff(v, c);
	}
	if (a1.length == 2) {
		for (var i = 0; i < a1.length; i++) {
			console.log(a1[i]);
			var a = a1[i].getAttribute("aria-label");
			if (i == 0) {
				a11 = a;
			}
			if (i == 1) {
				a2 = a;
			}
		}
		danhsach.push([a11, a2]);
		console.log(a11, a2);
		for (let e = 0; e < list.length; e++) {
			console.log(list[e][1] + list[e][2]);
			if (a11 == list[e][1] && a2 == list[e][2]) {
				$('.muahang1').html(list[e][0]);
				$(".tong1q-3").html(list[e][3] + " Sản phẩm có sẵn")
			}
		}
	}
};


//Xử lý dữ liệu 2 mảng khác nhau lấy ra những  dữ liệu kgasc nhau
function diff(a1, a2) {
	var b1 = new Set(a2);
	var difference = [...new Set([...a1].filter(x => !b1.has(x)))];
	difference.forEach(function(v) {
		console.log(v);
		$("button[aria-label='" + v + "']").addClass("disabled");

	})
};
	//khi nhấn tăng giảm số lượng
	function tru() {
		var inputValue = $('.tong1q-2').val();
		if (parseInt(inputValue) >= 2) {
			$('.tong1q-2').attr("value", parseInt(inputValue) - 1);
		}
	}
	function cong() {
		var inputValue = $('.tong1q-2').val();
		if (parseInt(inputValue) >= 1) {
			$('.tong1q-2').attr("value", parseInt(inputValue) + 1);
		}
	}
	$('.tong1q-2').change(function() {
		$('.tong1q-2').attr("value", $('.tong1q-2').val());
	});



	//Khi thực hiện mua
	$('.tong1e3').click(function(e) {
		e.preventDefault();
		var isValide = true;
		var mau1 = $(this).parents('.tong1e').siblings('.tong1l-2').find('.mau1c').length;
		if (!mau1) {
			$('._4k7').addClass('valide');
			$('._4k7').append('<div class="A9">Vui lòng chọn phân loại hàng!</div>');
			$('.tong1e3').attr("disabled", true);
			isValide = false;
			return isValide;
		}
		var checkuser = $(".checkuser").val();
		var urlhientai = window.location.toString();
		console.log(urlhientai);
		if (checkuser != null) {
			console.log(checkuser);
		} else {
			window.location.href = "http://localhost:8081/login?next=" + urlhientai;
		}

		var sotien = $('.muahang1').html();
		//tách số tiền với đồng riêng
		var sotien2 = sotien.slice(1, parseInt(sotien.length + 1));
		var anh = $('.tong1g-2 img').attr("src");
		var img = $(document).find('.tong1g');
		var topimg = img.offset().top;
		var leftimg = img.offset().left;
		var thu = $(document).find("#thuanh");
		var soluong1 = parseInt($('.tong1q-2').val());
		var tenshope = $('.tieudephai1e2').html();
		var ndphu = $('.tong1j-2a').html();
		var mausac = $(".mau1c").parents('.mau1b').text();
		var giagoc = $('._2k6').text();
		var ma = "";
		//lấy tất cả các kiểu phân loai
		var pl = document.querySelectorAll('.giohang3');
		for (let ie = 0; ie < pl.length; ie++) {
			let a = pl[ie].innerHTML;

			ma += a.replace(/"/g, "'");

		}
		let email = $(".checkuser").val();
		$('<img />', {
			class: 'anhphu',
			src: anh,
		}).appendTo('body').css({
			'top': topimg,
			'left': leftimg + parseInt(img.width() - 40),
		});

		setTimeout(function() {
			$(document).find('.anhphu').css({
				'top': parseInt(thu.offset().top),
				'left': parseInt(thu.offset().left),
				'z-index': 99,
			});
			setTimeout(function() {
				var text = '<div class="_1e2-2">' +
					'<div class="_1e2">' +
					'<img class="_1e2-1" src=' + anh + ' alt="">' +
					'</div>' +
					'<div class="_1e3">' + ndphu + '</div>' +
					'<div class="_1e4">' + sotien + '</div>' +
					'</div>';
				$(document).find(".anhphu").remove();

				// Sử lý khi mua hàng cùng tên cùng mẫu mã
				var tong1 = $('._1e2-1');
				var conte = 1; //Đặt giá mặc địh khi chạy 
				// cách tìm trong giỏ hàng hàng  có tồn tại sản phẩm đó hay không        
				for (var i = 0; i < tong1.length; i++) {
					var anhmau = tong1[i].attributes;
					var gt_anh = anhmau.getNamedItem('src').value;
					if (gt_anh == anh) {
						conte = 0; // Nếu bằng thì cho giá trị đó về không
						break;
					}
				}
				if (conte == 1) {
					var chieudai = parseInt($('._1e2-2').length);
					var soluong = parseInt(thu.find(".soluong").data("count")) + (chieudai + 1);
					thu.find(".soluong").text(soluong);
					if (parseInt(soluong) >= 1) {
						$(document).find(".soluong").css('display', 'flex');
						$('.xemgio').find('.xemgio3').slideUp();
						$('.xemgio').find('.xemgio2').slideDown();
						$('._1e1').append(text);
					} else {
						$(document).find(".soluong").css('display', 'none');
						$('.xemgio').find('.xemgio3').slideDown();
						$('.xemgio').find('.xemgio2').slideUp();
					}

				}

			}, 700);
		}, 1000);

		//lấy dữ liệu từ bên phân loại sang bên giỏ hàng
		var spchung = new Array(anh, ndphu, ma, giagoc, sotien, soluong1, tenshope, email, parseFloat(idsp), danhsach, sotien2, mausac);

		console.log(spchung[2]);
		//nơi nạp dữ liệu vào

		var data = {
			image: anh,
			title: ndphu,
			phanloaihang: ma,
			giagoc: giagoc,
			giasale: sotien,
			soluong: soluong1,
			tenshope: tenshope,
			useremail: email,
			productid: parseFloat(idsp),
			danhsachphanloai: danhsach,
		};
   if(email != null){
	  	request(data);
		danhsach.shift(); 
   }
	
		
		
		
	});
	//Kết thúc sự kiện mua hàng

	//Nơi gửi dữ liệu về server
	function request(data) {
		console.log(data[2]);
		$.ajax({
			url: "/product/cart",
			type: "post",
			contentType: "application/json",
			data: JSON.stringify(data),
			dataType: 'json',
			
			success: function(data1) {
				console.log(data1);
			}

		});
	}


