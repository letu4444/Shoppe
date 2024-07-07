var id = parseFloat($('.userid').val());
if ($('#checkid').data("login") == true) {
	//Đẩy dữ liệu sang html để kiểm tra

	//lấy tất cả sản phẩm ra ngoài
	$.getJSON("/product/cartsp", { id: id }, function(data) {
		console.log(data);
		var tet = "";

		data.map((value, index) => {

			// muốn xóa tất cả dấu chấm đi dùng .split('.').join('')
			var giathat = (value.giasale).slice(1, parseInt((value.giasale).length + 1)).split('.').join('');
			var tong = parseInt(giathat) * parseInt(value.soluong);
			console.log(tong);
			var doitien = tong.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, "$1.").toString().slice(0, -2);
			console.log(doitien);
			tet = '<div class="A2-2">' +
				'<div class="A2-3">' +
				'<label class="giohang1-5">' +
				'<input type="checkbox" class="checkbox">' +
				'<div class="checke"></div>' +
				'</label>' +
				'<a href="" class="A2-4">' +
				'<svg width="17" height="16" viewBox="0 0 17 16" class="_330rTo"><path d="M1.95 6.6c.156.804.7 1.867 1.357 1.867.654 0 1.43 0 1.43-.933h.932s0 .933 1.155.933c1.176 0 1.15-.933 1.15-.933h.984s-.027.933 1.148.933c1.157 0 1.15-.933 1.15-.933h.94s0 .933 1.43.933c1.368 0 1.356-1.867 1.356-1.867H1.95zm11.49-4.666H3.493L2.248 5.667h12.437L13.44 1.934zM2.853 14.066h11.22l-.01-4.782c-.148.02-.295.042-.465.042-.7 0-1.436-.324-1.866-.86-.376.53-.88.86-1.622.86-.667 0-1.255-.417-1.64-.86-.39.443-.976.86-1.643.86-.74 0-1.246-.33-1.623-.86-.43.536-1.195.86-1.895.86-.152 0-.297-.02-.436-.05l-.018 4.79zM14.996 12.2v.933L14.984 15H1.94l-.002-1.867V8.84C1.355 8.306 1.003 7.456 1 6.6L2.87 1h11.193l1.866 5.6c0 .943-.225 1.876-.934 2.39v3.21z" stroke-width=".3" stroke="#333" fill="#333" fill-rule="evenodd"></path>' +
				'</svg>' +
				'<span class="A2-5">' + value.tenshope + '</span>' +
				'<button class="A2-6">' +
				'<svg viewBox="0 0 16 16" class="Co0ddi"><g fill-rule="evenodd"><path d="M15 4a1 1 0 01.993.883L16 5v9.932a.5.5 0 01-.82.385l-2.061-1.718-8.199.001a1 1 0 01-.98-.8l-.016-.117-.108-1.284 8.058.001a2 2 0 001.976-1.692l.018-.155L14.293 4H15zm-2.48-4a1 1 0 011 1l-.003.077-.646 8.4a1 1 0 01-.997.923l-8.994-.001-2.06 1.718a.5.5 0 01-.233.108l-.087.007a.5.5 0 01-.492-.41L0 11.732V1a1 1 0 011-1h11.52zM3.646 4.246a.5.5 0 000 .708c.305.304.694.526 1.146.682A4.936 4.936 0 006.4 5.9c.464 0 1.02-.062 1.608-.264.452-.156.841-.378 1.146-.682a.5.5 0 10-.708-.708c-.185.186-.445.335-.764.444a4.004 4.004 0 01-2.564 0c-.319-.11-.579-.258-.764-.444a.5.5 0 00-.708 0z"></path></g>' +
				'</svg>' +
				'</button>' +
				'</a>' +
				'</div>' +
				'<div class="A2-7">' +
				'<div class="A2-8">' +
				'<div class="giohang2">' +
				'<div class="A2-9">' +
				'<span class="A2-0">Combo giảm giá</span>' +
				'<span class="A3">Mua từ 2 sản phẩm sẽ được giảm giá nên tới (5%)</span>' +
				'<a href="" class="A3-1"> Xem thêm' +
				'<a class="A3-2">❯</a>' +
				'</a>' +
				'</div>' +
				'<div class="A3-3" >' +
				'<label class="giohang1-5 inputcheck">' +
				'<input type="checkbox" class="checkbox tong1j-2a" value=' + value.id + '>' +
				'<div class="checke"></div>' +
				'</label>' +
				'<div class="A3-4">' +
				'<div class="_A4-2"><img src = ' + value.image + ' ></div>' +
				'<div class="_A4-3">' +
				'<div class="_A4-3-1" value=' + value.productid + '>' + value.title + '</div>' +
				'<div class="_A4-3-2"></div>' +
				'</div>' +
				'<div class="_A4-4">' +
				'<div class="_A4-4-1">' +
				'<div class="_A4-4-2">' +
				'<div class="_A4-4-4">Phân loại hàng</div>' +
				'<button class="_A4-4-5"></button>' +
				'</div>' +
				'<div class="_A4-4-3 _gio">' + value.danhsachphanloai + '</div>' +
				'</div>' +
				'<div class="_A4-4-6">' +

				'</div>' +
				'</div>' +
				'</div>' +
				'<div class="_A4-4-7">' +
				'<div class="_A3-5">' + value.giagoc + '</div>' +
				'<div class="_A4-4-8">' + value.giasale + '</div>' +
				'</div>' +
				'<div class="tong1q">' +
				'<button class="tong1l-1 tru">' +
				'<svg enable-background="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0" class="svg-icon4"><polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5"></polygon>' +
				'</svg>' +
				'</button>' +
				'<input type="text" class="tong1l-1 _A4-4-9" min="1" aria-valuenow ="1" value =' + value.soluong + '>' +
				'<button class="tong1l-1 cong">' +
				'<svg enable-background="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0" class="svg-icon4"><polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5"></polygon></svg></button>' +
				'</div>' +
				'<div class="_A5">' +
				'<div class="_A5-1">₫' + doitien + '</div>' +
				'</div>' +
				'<div class ="xoa">Xóa</div>' +
				'</div>' +
				'</div>' +
				'</div>' +
				'</div>' +
				'<div class="A3-6">' +
				'<svg fill="none" viewBox="0 -2 23 22" class="icon-voucher-line"><g filter="url(#voucher-filter0_d)"><mask id="a" fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 2h18v2.32a1.5 1.5 0 000 2.75v.65a1.5 1.5 0 000 2.75v.65a1.5 1.5 0 000 2.75V16H1v-2.12a1.5 1.5 0 000-2.75v-.65a1.5 1.5 0 000-2.75v-.65a1.5 1.5 0 000-2.75V2z"></path></mask><path d="M19 2h1V1h-1v1zM1 2V1H0v1h1zm18 2.32l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zm0 .65l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zm0 .65l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zM19 16v1h1v-1h-1zM1 16H0v1h1v-1zm0-2.12l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zm0-.65l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zm0-.65l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zM19 1H1v2h18V1zm1 3.32V2h-2v2.32h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zm.6 1.56v-.65h-2v.65h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zm.6 1.56v-.65h-2v.65h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zM20 16v-2.13h-2V16h2zM1 17h18v-2H1v2zm-1-3.12V16h2v-2.12H0zm1.4.91a2.5 2.5 0 001.5-2.29h-2a.5.5 0 01-.3.46l.8 1.83zm1.5-2.29a2.5 2.5 0 00-1.5-2.3l-.8 1.84c.18.08.3.26.3.46h2zM0 10.48v.65h2v-.65H0zM.9 9.1a.5.5 0 01-.3.46l.8 1.83A2.5 2.5 0 002.9 9.1h-2zm-.3-.46c.18.08.3.26.3.46h2a2.5 2.5 0 00-1.5-2.3L.6 8.65zM0 7.08v.65h2v-.65H0zM.9 5.7a.5.5 0 01-.3.46l.8 1.83A2.5 2.5 0 002.9 5.7h-2zm-.3-.46c.18.08.3.26.3.46h2a2.5 2.5 0 00-1.5-2.3L.6 5.25zM0 2v2.33h2V2H0z" mask="url(#a)"></path></g><path clip-rule="evenodd" d="M6.49 14.18h.86v-1.6h-.86v1.6zM6.49 11.18h.86v-1.6h-.86v1.6zM6.49 8.18h.86v-1.6h-.86v1.6zM6.49 5.18h.86v-1.6h-.86v1.6z"></path><defs><filter id="voucher-filter0_d" x="0" y="1" width="20" height="16" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation=".5"></feGaussianBlur><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs>' +
				'</svg>' +
				'<div class="A3-7">' +
				'<div class="A3-8">Shope Voucher giảm nên tới 5%</div>' +
				'<div class="A3-9">Xem thêm voucher</div>' +
				'</div>' +
				'</div>' +
				'<div class="A3-6">' +
				'<i class="fas fa-truck" aria-hidden="true"></i>' +
				'<div class="A3-7">' +
				'<div class="A3-8">Giảm ₫40.000 phí vận chuyển đơn tối thiểu ₫0 </div>' +
				'<div class="A3-9">Tìm hiểu thêm</div>' +
				'</div>' +
				'</div>' +
				'</div>';
			var tenshope = $('.A2-5');
			var coi = 1;
			for (var e = 0; e < tenshope.length; e++) {
				var tenshope1 = tenshope[e].innerHTML;
				console.log(tenshope1);
				console.log(value.tenshope);
				if (tenshope1 === value.tenshope) {
					var text1 = '<div class="A3-3">' +
						'<label class="giohang1-5 inputcheck">' +
						'<input type="checkbox" class="checkbox tong1j-2a" value=' + value.id + '>' +
						'<div class="checke"></div>' +
						'</label>' +
						'<div class="A3-4">' +
						' <div class="_A4-2"><img src = ' + value.image + ' ></div>' +
						'<div class="_A4-3">' +
						'<div class="_A4-3-1" value=' + value.productid + '>' + value.title + '</div>' +
						'<div class="_A4-3-2"></div>' +
						'</div>' +
						'<div class="_A4-4">' +
						'<div class="_A4-4-1">' +
						'<div class="_A4-4-2">' +
						'<div class="_A4-4-4">Phân loại hàng</div>' +
						'<button class="_A4-4-5"></button>' +
						'</div>' +
						'<div class="_A4-4-3 _gio">' + value.danhsachphanloai + '</div>' +
						'</div>' +
						'<div class="_A4-4-6">' +

						'</div>' +
						'</div>' +
						'</div>' +
						'<div class="_A4-4-7">' +
						'<div class="_A3-5">' + value.giagoc + '</div>' +
						'<div class="_A4-4-8">' + value.giasale + '</div>' +
						'</div>' +
						'<div class="tong1q">' +
						'<button class="tong1l-1 tru">' +
						'<svg enable-background="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0" class="svg-icon4"><polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5"></polygon>' +
						'</svg>' +
						'</button>' +
						'<input type="text" class="tong1l-1 _A4-4-9" min="1" aria-valuenow ="1" value =' + value.soluong + '>' +
						'<button class="tong1l-1 cong">' +
						'<svg enable-background="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0" class="svg-icon4"><polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5"></polygon></svg></button>' +
						'</div>' +
						'<div class="_A5">' +
						'<div class="_A5-1">₫' + doitien + '</div>' +
						'</div>' +
						'<div class ="xoa">Xóa</div>' +
						'</div>';


					/*	var tong1 = $('._A4-2 img');
						var conte = 2; //Đặt giá mặc địh khi chạy 
						// cách tìm trong giỏ hàng hàng  có tồn tại sản phẩm đó hay không        
						for (var ii = 0; ii < tong1.length; ii++) {
							var anhmau = tong1[ii].attributes;
							var gt_anh = anhmau.getNamedItem('src').value;
							if (gt_anh === value.image) {
								var sl = tong1[ii].parentNode.parentNode.parentNode.querySelector('._A4-4-9').value;
								var tsl = parseInt(sl) + parseInt(value.soluong);
								tong1[ii].parentNode.parentNode.parentNode.querySelector('._A4-4-9').value = tsl;
								conte = 0; // Nếu bằng thì cho giá trị đó về không
								break;
							}
						}
						if (conte == 2) {
							var noidung = tenshope[e].parentNode.parentNode.parentNode.querySelector('.giohang2');
							noidung.innerHTML += text1;
						}*/
					var noidung = tenshope[e].parentNode.parentNode.parentNode.querySelector('.giohang2');
					noidung.innerHTML += text1;
					coi = 0;
					break;
				}
			}
			if (coi == 1) {
				$('.giohang').append(tet);
			}


		});
		sautaixong();
	});
	/*}else{
		let text ='<div class="cart1">'+
				'<div class="cart1-1"></div>'+
				'<div class="cart1-2">Giỏ hàng của bạn còn trống</div>'+
				'<a href="#" class="cart1-3">'+
					'<button class="cart1-4">Mua Ngay</button>'+
				'</a>'+
			'</div>';
			$('.giohang').append(text);*/
}
function sautaixong() {
	//phần nút bấm
	$('._A4-4-2').click(function() {
		$(this).find('._A4-4-5').toggleClass('_A4-4-5-1');
		$(this).parent().siblings('._A4-4-6').toggleClass("_A4-4-6-1");
		//Lấy dữ liệu của phân loại ra 
		let idgio = parseInt($(this).parents(".A3-3").find(".tong1j-2a").attr("value"));
		$.get("/product/phanloaihang", { id: idgio }, function(data) {
			console.log(data);
			const htm = '<div class="_A4-5-3" style="transition-delay: 0.2s;transform: translate(-50%, 0px);left: 45%;top: 55%;">' +
				'<div class="_3k6">' +
				'<div class="_3k9"></div>' +
				'<div class="_3k7"></div>' +
				'</div>' +
				'<div class="_A4-5-2">' +
				'<div class="mau1a _A4-5-5">' + data.phanloaihang + '</div>' +
				'<div class="_A4-5-6">' +
				'<button class="_A4-5-7">Trở lại</button>' +
				'<button class="_A4-5-8">Xác nhận</button>' +
				'</div>' +
				'</div>' +
				'</div>';

			$('._A4-4-6-1').append(htm);
			let idsp = parseInt($('._A4-4-6-1').parents(".A3-3").find("._A4-3-1").attr("value"));
			phanloai(idsp);
		});


	});
	//khi nhấn ra ngoài cái khung đó sẽ tắt
	$(document).mousedown(function(event) {
		var dai = $('._A4-5-3');
		if (!dai.is(event.target) && dai.has(event.target).length === 0) {
			$('._A4-5-3').remove();
			$('._A4-4-5').removeClass('_A4-4-5-1');
			$('._A4-4-6').removeClass("_A4-4-6-1");
		}
	});

	$('._A4-5-7').click(function() {
		$('._A4-4-6').removeClass("_A4-4-6-1");
		$('._A4-4-5').removeClass('_A4-4-5-1');
	});


	function sotien() {
		var sotien = $(".A3-3");
		for (var i = 0; i < sotien.length; i++) {
			var gia = sotien[i].querySelector('._A4-4-8').innerHTML;
			var doigia = (gia.slice(1, gia.length + 1)).split('.').join('');
			console.log(doigia);
			var soluong = sotien[i].querySelector('._A4-4-9').value;
			var tong = parseFloat(doigia) * parseFloat(soluong);
			var doitien = tong.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, "$1.").toString().slice(0, -2);
			sotien[i].querySelector('._A5-1').innerHTML = '₫' + doitien;
		}

	}
	$('.cong').click(function() {
		var value1 = parseInt($(this).siblings('._A4-4-9').val());
		console.log(value1);
		if (value1 >= 1) {
			$(this).siblings('._A4-4-9').val(value1 + 1);
		}
		sotien();
		$(this).attr("disabled", true);
		$(this).siblings().attr("disabled", true);
		setTimeout(function() {
			$('.tong1l-1').attr("disabled", false);
		}, 1000);

		//pust lại dữ liệu trong data
		let id = parseFloat($(this).parents(".A3-3").find(".tong1j-2a").attr("value"));
		let soluong = parseInt($(this).siblings("._A4-4-9").val());
		pusttanggiam(id, soluong);
		tonggiatien();
	});
	$('.tru').click(function() {
		var value1 = parseInt($(this).siblings('._A4-4-9').val());
		if (value1 >= 2) {
			$(this).siblings('._A4-4-9').val(value1 - 1);
		}
		sotien();
		$(this).attr("disabled", true);
		$(this).siblings().attr("disabled", true);
		setTimeout(function() {
			$('.tong1l-1').attr("disabled", false);
		}, 1000);
		//pust lại dữ liệu trong data
		let id = parseFloat($(this).parents(".A3-3").find(".tong1j-2a").attr("value"));
		let soluong = parseInt($(this).siblings("._A4-4-9").val());
		pusttanggiam(id, soluong);

		tonggiatien();
		var min = $(this).siblings("._A4-4-9").attr("min");
		if (value1 == parseInt(min)) {
			$(this).siblings('._A4-4-9').val(value1 - 1);
			$(".checksp").css("display", "flex");
			var sp = localStorage.getItem('giohang');
			var giohang44 = JSON.parse(sp);
			giohang44.map((value) => {
				$(".checksp3").html(value[3] + "" + "(" + value[4] + ")");
			})
			var index1 = $(this).parents(".A3-3").index();
			$(".checksp5").attr("index", index1);
			// $(this).parents(".A3-3").add(index1);

		}

	});
	$('._A4-4-9').change(function(value) {
		var value = parseInt(this.value);
		let min = parseInt(this.getAttribute("min"));
		console.log(min);
		sotien();
		$(this).attr("disabled", true);
		$(this).siblings().attr("disabled", true);
		setTimeout(function() {
			$('.tong1l-1').attr("disabled", false);
		}, 1000);
		tonggiatien();
		if (value === 0) {
			return $(this).val(min);
		}
	});

	// tông số sản phẩm
	$(".tong4").html('&ensp;(' + $(".A3-3").length + ')');
	$(".checkbox:first").click(function() {
		var ischeck = $(this).parent().is('.giohang1-5_chekbox');
		if (!ischeck) {
			$('.giohang1-5').addClass("giohang1-5_chekbox");
			tonggiatien();
		} else {
			$('.giohang1-5').removeClass("giohang1-5_chekbox");
			$('.tong4-1').html('&ensp;(0)');
			$('.tong3-7-1').html('₫0');
		}

	});
	$(".checkbox:last").click(function() {
		var ischecke = $(this).parent().is('.giohang1-5_chekbox');
		if (!ischecke) {
			$('.giohang1-5').addClass("giohang1-5_chekbox");
			tonggiatien();
		} else {
			$('.giohang1-5').removeClass("giohang1-5_chekbox");
			$('.tong4-1').html('&ensp;(0)');
			$('.tong3-7-1').html('₫0');
		}

	});


	$('.A2-3 .checke').click(function() {
		var ischecked = $(this).parent().is('.giohang1-5_chekbox');
		if (!ischecked) {
			$(this).parents(".A2-2").find('.giohang1-5').toggleClass("giohang1-5_chekbox");
			tonggiatien();
		} else {
			$(this).parents(".A2-2").find('.giohang1-5').removeClass("giohang1-5_chekbox");
			tonggiatien();
		}
		//kiểm tra tổng thể
		if ($('.A2-3 > .giohang1-5_chekbox').length === $('.A2-2').length) {
			$('.giohang1-5').addClass('giohang1-5_chekbox');
			$('.tong4-1').html('&ensp;(' + $('.A3-3').length + ')');
			tonggiatien();
		} else if ($('.A2-3 > .giohang1-5_chekbox').length === 0) {
			$('.tong3-7-1').html('₫0');
			$('.tong4-1').html('&ensp;(0)');
			$('.giohang1-5').removeClass('giohang1-5_chekbox');
		} else {
			$('.giohang1-5:first').removeClass('giohang1-5_chekbox');
			$('.giohang1-5:last').removeClass('giohang1-5_chekbox');
			$('.tong4-1').html('&ensp;(' + $('.A3-3').length + ')');
			tonggiatien();
		}

	});
	$('.A3-3 .checkbox').click(function() {
		var ischecked = $(this).parent().is('.giohang1-5_chekbox');
		// console.log(ischecked);
		if (!ischecked) {
			$(this).parent().toggleClass("giohang1-5_chekbox");
			tonggiatien();
		} else {
			$(this).parent().removeClass("giohang1-5_chekbox");
			tonggiatien();
		}
		//    kiểm tra độ dài của A2-7 nơi chứa các sản phẩm đó
		if ($(this).parents(".A2-2").find('.A3-3 .giohang1-5_chekbox').length == $(this).parents(".A2-2").find('.A2-7 .A3-3').length) {
			$(this).parents(".A2-2").find('.giohang1-5').addClass("giohang1-5_chekbox");
			$('.tong4-1').html('&ensp;(' + $('.A3-3').length + ')');
			tonggiatien();
		}
		else {
			$(this).parents(".A2-2").find('.A2-3 .giohang1-5').removeClass("giohang1-5_chekbox");
			$('.tong4-1').html('&ensp;(' + $('.A3-3 .giohang1-5_chekbox').length + ')');
			tonggiatien();
		}
		//NẾu các shope đk checkbox bằn số lượn shope thì tất cả đk checkbox
		if ($('.A2-3 .giohang1-5_chekbox').length == $('.A2-2').length) {
			$('.giohang1-5').addClass('giohang1-5_chekbox');
		}
		else {
			$('.giohang1-5:first').removeClass('giohang1-5_chekbox');
			$('.giohang1-5:last').removeClass('giohang1-5_chekbox');
		}
	});

	
}
//KHi tính số tiền dự trên sự checkbox của các input
function tonggiatien() {
	var tongsp = 0;
	$(".A3-3 .giohang1-5_chekbox").each(function() {
		var tongchuoi = $(this).parents('.A3-3').find('._A5-1').html();
		var tong = tongchuoi.slice(1, parseInt(tongchuoi.length + 1)).split('.').join('');
		console.log(tong);
		tongsp = tongsp + parseInt(tong);
		console.log(tongsp)
		var doitien = tongsp.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, "$1.").toString().slice(0, -2);
		console.log(doitien);
		$('.tong3-7-1').html('₫' + doitien);
		$('.tong4-1').html('&ensp;(' + $('.A3-3 .giohang1-5_chekbox').length + ')');



	});
}

//Sửa phân loại hàng hóa nếu cần


function phanloai(idsp) {

	$('.mau1b').click(function() {
		//khi di chuyển chuột qua các butoon khác xem
		//Sau đó dời chuột khỏi các button đó thì sẽ qua lại button được chọn
		//xóa tất cả những thằng con của ae nó đi 
		$(this).siblings().children().remove();
		$(this).toggleClass('_4k6').siblings().removeClass("_4k6");
		$(this).append('<div class="mau1c"><span class="mau1d"></span></div>')
		if ($(this).is('._4k6') == false) {
			$('.mau1b').removeClass('disabled');
			$('.mau1c').siblings().remove();
		}
		sosanh();
	});
	var list;
	$.get("/phanloai/save", { id: idsp }, function(data) {
		console.log(data);
		if (data != null) {
			//Khi di chuột vào sẽ hiển thị ra
			// khi di chuyển chuột đến đến các button
			$('button').mousedown(function(ee) {
				const giatri = $(this).attr("aria-label");

				for (var i = 0; i < data.chunghangphanloai.length; i++) {
					if (giatri == data.chunghangphanloai[i][1]) {
						data1 = data.chunghangphanloai[i][0];
					}
				}


			});
			// hiển thị giá tiền
			//so sánh nếu đúng hết thì sẽ ra số tiền cụ thể
			list = data;
			console.log(list);
		}

	});

	// hiển thị giá tiền
	//so sánh nếu đúng hết thì sẽ ra số tiền cụ thể
	function sosanh() {

		let a1 = document.querySelectorAll("._4k6");
		let a11 = "";
		let a2 = "";
		//kiểm tra xem còn hàng k
		if (a1.length == 1) {
			a11 = a1[0].getAttribute("aria-label");
			//lấy các phân loại theo yêu cầu
			const c = [];
			//  ["S","M","L"]
			//lấy tất cả
			const v = [];
			const mau = document.querySelectorAll(".mau1a");
			console.log(mau);
			const rell = list.danhsachphanloai.filter(function(sa) {
				return sa.includes(a11);
			});
			console.log(rell);
			for (let e = 0; e < rell.length; e++) {
				//nếu a11 bằng phân loại 1
				if (a11 == rell[e][1]) {
					const ma = mau[2].querySelectorAll(".mau1b");
					c.push(rell[e][2]);

					if (e == 0) {
						for (var j = 0; j < ma.length; j++) {
							v.push(ma[j].getAttribute("aria-label"));
							console.log(v);
						}
					}


					//nếu a11 bằng phân loại 2
				} else if (a11 == rell[e][2]) {
					const ma = mau[1].querySelectorAll(".mau1b");
					c.push(rell[e][1]);

					for (var j = 0; j < ma.length; j++) {
						v.push(ma[j].getAttribute("aria-label"));
					}

				}
			}
			diff(v, c);
		}
		if (a1.length == 2) {
			let data1 = '';
			let data2 = '';
			//Lấy danh sách phân loại để thêm vào giỏ hàng
			let danhsach = [];
			for (var i = 0; i < a1.length; i++) {
				console.log(a1[i]);
				var a = a1[i].getAttribute("aria-label");
				if (i == 0) {
					a11 = a;
					// khi di chuyển chuột đến đến các button nơi lấy image
					list.chunghangphanloai.map((value) => {
						if (a11 == value[1]) {
							data1 = value[0];
						}
					});

				}
				if (i == 1) {
					a2 = a;
				}
			}
			danhsach[0] = [a11, a2];
			console.log(a11, a2);
			list.danhsachphanloai.map((value) => {
				console.log(value[1] + value[2]);
				if (a11 == value[1] && a2 == value[2]) {
					data2 = value[0];
					$("._A4-4-6-1").parents('.A3-3').find('._A4-4-8').html(value[0]);
				}
			});
			//nhập duẽ liệu vào hàm xác minh
			xacminh(data1, data2, danhsach);
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
	//khi nhấn xác minh là đã sửa đổi mẫu mã
	function xacminh(data1, data2, danhsach) {
		$('._A4-5-8').click(function(e) {
			console.log(data1);
			console.log(data2);
			console.log(danhsach);
			/*var mausac = $(".mau1c").parents('.mau1b').text();
			$('._gio').text(mausac);*/
			$("._A4-4-6-1").parents('.A3-3').find('._A4-2 img').attr('src', data1);
			$("._A4-4-6-1").parents('.A3-3').find('._A4-4-8').html(data2);
			$('._A4-4-3').html(danhsach);
			var data = {
				id: parseFloat($("._A4-4-6-1").parents(".A3-3").find(".tong1j-2a").attr("value")),
				image: data1,
				title: $("._A4-4-6-1").parents('.A3-3').find('._A4-3-1').text(),
				phanloaihang: $("._A4-4-6-1").parents('.A3-3').find('._A4-5-5').html(),
				giagoc: $("._A4-4-6-1").parents('.A3-3').find('._A3-5').text(),
				giasale: data2,
				soluong: parseInt($("._A4-4-6-1").parents('.A3-3').find('._A4-4-9').val()),
				tenshope: $("._A4-4-6-1").parents('.A2-2').find('.A2-5').text(),
				useremail: $(".checkuser").attr('value'),
				productid: parseFloat($('._A4-4-6-1').parents(".A3-3").find("._A4-3-1").attr("value")),
				danhsachphanloai: danhsach,
			};


			request(data);
			danhsach.shift();

			$('._A4-4-6').removeClass("_A4-4-6-1");
			$('._A4-4-5').removeClass('_A4-4-5-1');
		});
	};
}

//Kết thúc sự kiện mua hàng

//Nơi gửi dữ liệu về server để lưu và sửa
function request(data) {

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
};
//Khi tăng số lượng hoặc giảm thì chỉ cần gưi qua param thooi k cần gửi theo json
function pusttanggiam(id, soluong) {
	$.post("/product/pustcart?id=" + id + "&soluong=" + soluong + "", function(data, status) {
		console.log(data);
	});
};

//xóa san phẩm đi
	$(document).on("click",'.xoa',function() {

		var data = {};
		var id = $(".giohang1-5_chekbox").map(function() {
			if($(this).is('.inputcheck') == true){
				return parseFloat($(this).find(".tong1j-2a").val());
			}
			
		}).get();
		data = {
			id_delete: id
		};
		console.log(data);
		$.ajax({
			url: "/product/deletecart",
			type: "Delete",
			contentType: "application/json",
			data: JSON.stringify(data),
			dataType: 'json',

			success: function(data1) {
				console.log(data1);
				
			}

		});
		location.reload();
	})
