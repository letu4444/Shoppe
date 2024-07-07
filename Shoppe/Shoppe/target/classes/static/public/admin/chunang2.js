

$(".dropdown-toggle").click(function() {
	let nhan = $(this).attr("aria-expanded");
	$(".dropdown-menu").removeClass("show");
	$(".dropdown-toggle").attr("aria-expanded", 'false');

	if (nhan == 'true') {
		$(this).attr("aria-expanded", 'false');
		$(this).siblings(".dropdown-menu").removeClass("show");
	} else {
		$(this).attr("aria-expanded", 'true');
		$(this).siblings(".dropdown-menu").addClass("show");
	}

	let ischek = $(this).siblings(".dropdown-menu").is(".p-0");
	if (ischek) {
		$(this).siblings(".dropdown-menu").attr("style", 'position: absolute;inset: 0px auto auto 0px;margin: 0px; transform: translate(-180px, 25px);');
	} else {
		$(this).siblings(".dropdown-menu").attr("style", 'position: absolute;inset: 0px auto auto 0px;margin: 0px; transform:translate3d(60px, 20px,0px);');

	}
});

$(".submenu-toggle").click(function() {

	let nhan = $(this).attr("aria-expanded");

	$(".submenu ").removeClass("show");
	$(".submenu-toggle").attr("aria-expanded", 'false');
	$(".submenu-toggle").addClass("collapsed");

	if (nhan == "true") {
		$(this).attr("aria-expanded", 'false');
		$(this).addClass("collapsed");
		$(this).siblings(".submenu").removeClass("show");
	} else {
		$(this).attr("aria-expanded", 'true');
		$(this).removeClass("collapsed");
		$(this).siblings(".submenu").addClass("show");
	}


});

//thêm sản phẩm vào data
var typeo = {};
var a = [[["Áo", "tiep"], ["Quần", 'tiep'], ["Quần đùi", "tiep"], ["Váy"], ["Đầm", "tiep"], ["Váy cưới"], ["Đồ liền thân", "tiep"], ["Áo len"], ["Áo Khoác"], ["Bộ đồ", "tiep"], ["Đồ ngủ"], ["Đồ bầu", "tiep"], ["Đồ truyền thống"]],
[["Áo Nỉ", "tiep"], ["Quần"], ["Quần đùi"], ["Com lê", "tiep"], ["Quần dài"], ["Vớ /Tất"], ["Áo", "tiep"], ["Áo Khoác", 'tiep'], ["Bộ đồ"], ["Đồ ngủ"], ["Đồ truyền thống"]],
[["Chăm sóc tay ,chân &móng", "tiep"], ["Chăm sóc nam giới", "tiep"], ["Nước hoa"], ["Trang điểm", "tiep"], ["Dụng cụ làm đẹp"], ["Chăm sóc da mặt", "tiep"], ["Bộ phận làm đẹp"], ["Khác"]],
[["Thực phẩm chức năng", "tiep"], ["Dụng cụ y yế", "tiep"], ["Chăm sóc cá nhân"], ["Hỗ trợ sinh dục", "tiep"], ["Khác"]],
[["Nhẫn", "tiep"], ["Bông tai", "tiep"], ["Khăn choàng"], ["Găng tay", "tiep"], ["Phụ kiện làm tóc"], ["Sơn móng tay , chân", "tiep"], ["Vòng tay & lắc tay"], ["Mũ ", "tiep"], ["Dây chuyền"], ["Mắt kính"], ["Thắt lưng"], ["Cà vạt & lơ cổ"]],
[["Máy chiếu & phụ kiện", "tiep"], ["Thế bị gia dụng", "tiep"], ["Tivi & phụ kiện"], ["Đồ gia dụng nhà bếp ", "tiep"], ["Mạch điện & phụ tùng"], ["Pin", "tiep"], ["Khác"]],
[["Bốt", "tiep"], ["Giày thể thao/ Snearkers", "tiep"], ["Giày sục"], ["Giày lười", "tiep"], ["Xăng đan & dép"], ["Phụ kiện Giày dép", "tiep"], ["Khác"]],
[["Thẻ sim"], ["Máy tính bảng"], ["Điện thoại"], ["Thiết bị thông minh", "tiep"], ["Bộ đàm"], ["Phụ kiện", "tiep"], ["Khác"]]];

typeo["s00"] = [[["Áo hai dây và ba lỗ", "tiep"], ["Áo ống"], ["Áo thun"], ["Áo sơ mi"], ["Áo polo"], ["Ao liền thân"], ["khác"]],
[["Quần legging"], ["Quần dài"], ['Khác']], [['Quần đùi'], ['Quần váy'], ["khác"]], [], [], [],
[['Đồ bay (Jumpsuits)'], ['Đồ bay ngắn (playsuits)'], ['Quần yếm'], ['Khác']], [],
[['Áo khoác mùa đông'], ['Áo choàng'], ['Áo blazer'], ['Áo khoác ngoài'], ['Khác']],
[["Bộ đồ đôi"], ["Bộ gia đình"], ["Bộ lẻ"], ['Khác']]];
typeo["s000"] = [];
typeo["s001"] = [];

typeo["s01"] = [[["Áo hoodie", "tiep"], ["Áo nỉ"], ["khác"]], [], [],
[["Bộ Com lê"], ["Áo Khoác & Blazer"], ["Quần âu"], ['Áo vest & Gi lê'], ["khác"]],
[], [], [['Áo sơ mi'], ['Áo polo'], ["Áo ba lỗ"], ['Áo thun']],
[["Áo khoác mùa đông", "tiep"], ["Áo khoác", "tiep"], ["Áo khoác vest"], ["khác"]],
[], [], []];
typeo["s010"]=[];
typeo['s02'] = [[["Chăm sóc móng tay", 'tiep'], ['Chăm sóc móng chân', 'tiep'], ["Chăm sóc móng", 'tiep'], ['Khác']],
[['Dầu gội'], ['Dầu xả'], ['Thuốc nhuộm tóc'], ['Sản phẩm dưỡng tóc'], ['Khác']],
[['Sữa tắm & chăm sóc da'], ['Sản phẩm cạo râu'], ['Chăm sóc tóc'], ['Khác']],

];
typeo["s07"] = [[], [], [], [['Đồng hồ thông minh'], ['Thiết bị thực tế ảo'], ['Thiết bị định vị GPS']], [],
[["Ống kính điện thoại", "tiep"], ["Đèn flash điện thoại ", "tiep"], ["Quạt USB & Quạt điện"], ['Bút cảm ứng'], ['Kẹp điện thoại'], ['Dây đeo điện thoại '], ['Thẻ nhớ'], ['Thiết bị trình chiếu'], ['Cáp, sạc & bộ chuyển đổi'], ['Sạc dự phòng & pin'], ['Miếng dán màn hình'], ["khác"]]];

typeo['s020'] = [[['Mặt nạ cho tay'], ['Kem dưỡng, dầu dưỡng'], ['Xà phòng giửa tay'], ['Khác']]]
typeo['s021'] = [];

typeo['s0200'] = [];
typeo['s072'] = [];
var ary = [];

//Khi cập nhật lại phân loại thì nó có tên phân loại trc rồi thì nêu nó ra ngàoi
if ($('.theloai2').text() != '') {
	let tong1 = [];
	tong1.push(a);
	let ine1 = 0; let ine = 0;
	ary.map((val, index) => {
		if (index == 0) {
			ine = val;
			tong1.push(typeo['s0' + val])
		} else if (index == 1) {
			ine1 = val;
			tong1.push(typeo['s0' + ine + val])
		}
		else if (index == 2) {
			tong1.push(typeo['s0' + ine + ine1 + val])
		}


	});
	ary.map((vale, index) => {
		if (Array.isArray(tong1[index][vale]) == true) {
			tong1[index][vale].map((value) => {
				let so = index + 2;
				if (value[1] != null) {
					$(".theloai1:nth-of-type(" + so + ")").append('<li class="theloai1-1"><p class="category-item">' + value[0] + '</p><div class="category-item-right">' +
						'<i data-v-38ab3376="" class="icon-next shopee-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M23.5 15.5l-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z"></path></svg></i>' +
						'</div></li>');
				} else {
					$(".theloai1:nth-of-type(" + so + ")").append('<li class="theloai1-1"><p class="category-item">' + value[0] + '</p></li>');
				}
			})
		}

		index = index + 1;
		vale = vale + 1;
		$(".theloai1:nth-of-type(" + index + ")").find(".theloai1-1:nth-of-type(" + vale + ")").addClass('selcted');
	});
}
//khi nhấn chọn phân loại sản phẩn
$(document).on("click", '.theloai1-1', function(e) {

	let tong = [];
	let nume = parseInt($(this).parent().index());
	if (Array.isArray(tong) && !tong.length) {
		tong.push(a);

	}
	//Thêm dang sách mảng vào để khi lấy data ra sẽ hiển thị đúng thể loại đó
	if ($(this).parent().index() == 0 && ary[0] != null) {
		ary.splice(1, ary.length);
		ary[0] = $(this).index();
	} else if ($(this).parent().index() == 1 && ary[1] != null) {
		ary.splice(2, ary.length);
		ary[1] = $(this).index();
	} else if ($(this).parent().index() == 2 && ary[2] != null) {
		ary[2] = $(this).index();
		ary.splice(3, ary.length);
	} else if ($(this).parent().index() == 3 && ary[3] != null) {
		ary[3] = $(this).index();
		ary.splice(4, ary.length);
	} else {
		ary.push($(this).index());
	}

	let ine1 = 0; let ine = 0;

	for (let j = 0; j < nume; j++) {

		if (j === 0) {
			//ra danh sách tên bảnh thứ 1
			ine = parseInt($(this).parents('.col-sm-9').find(".theloai1:first-of-type").find('.selcted').index());
			tong.push(typeo['s0' + ine]);

		}
		if (j === 1) {
			ine1 = parseInt($(this).parents('.col-sm-9').find(".theloai1:nth-child(2)").find('.selcted').index());
			//ra danh sách tên bảng thứ 2
			tong.push(typeo['s0' + ine + ine1]);
			//nếu tiếp thì in thêm
		}
		if (j === 2) {
			//ra danh sách tên bảng thứ 3
			let ine2 = parseInt($(this).parents('.col-sm-9').find(".theloai1:nth-child(3)").find('.selcted').index());
			tong.push(typeo['s0' + ine + ine1 + ine2]);

		}
	}


	$(this).addClass("selcted").siblings().removeClass("selcted");
	$(this).parent().nextAll().find(".theloai1-1").remove();

	//Vòng lặp để lấy danh sách cần trọn ra ngoài
	//mảng tong chứa tất cả cac mảng chọn đó tong[arry1,ary2,ary3][index1,index2,,,,]
	if (Array.isArray(tong[$(this).parent().index()][$(this).index()]) == true) {
		(tong[$(this).parent().index()][$(this).index()]).map((val, index) => {
			if (val[1] != null) {
				$(this).parent().next().append('<li class="theloai1-1"><p class="category-item">' + val[0] + '</p><div class="category-item-right">' +
					'<i data-v-38ab3376="" class="icon-next shopee-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M23.5 15.5l-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z"></path></svg></i>' +
					'</div></li>');
			} else {
				$(this).parent().next().append('<li class="theloai1-1"><p class="category-item">' + val[0] + '</p></li>');
			}

		});
	}

	//hiển thị nội dung muốn chọ ra ngoài màn hình
	let text = '';
	let item = document.querySelectorAll(".selcted");
	for (let i = 0; i < item.length; i++) {
		if (i == 0) {
			text += item[i].querySelector(".category-item").innerText;
		}
		if (i == 1) {
			text += " > " + item[i].querySelector(".category-item").innerText;
		}
		if (i == 2) {
			text += " > " + item[i].querySelector(".category-item").innerText;
		}
		if (i == 3) {
			text += " > " + item[i].querySelector(".category-item").innerText;
		}
	}


	//hiển thị tên thể lạoi ra
	$('.theloai2').text(text);


});
//dùng khi có 2 phân loại thì 
//2 cái đầu  180px cái cuối 155px
$('.options-close-btn').click(function() {
	// $(this).index();
	$(this).parents('.edit-row1-2-2').hide();
	$('.edit-row1-2-2 .loai1').val('');
	let thieu = $('.edit-row1-2-2 .edit-row1-4 .edit-row1-7-3').length;
	for (let i = 1; i < thieu; i++) {
		$('.edit-row1-2-2 .edit-row1-4 .edit-row1-7-3:nth-child(' + i + ')').remove();
	}
	$('.edit-row1-2-2 .edit-row1-4 .edit-row1-7-3').find('.edit-row1-7-2').val('');
	$('.edit-row1-2-3').show();
	$('.model-table-main-left .flex-col:nth-child(2)').remove();
	$('.model-table-main-left .flex-col1:nth-child(' + $(this).index() + 1 + ')').remove();
	$('.model-table-main-left .second-variation-wrapper .flex-col').remove();
	$(".model-table-main-left .table-cell-wrapper-cell").attr("style", "min-height:131px");
	xuly($('.model-table-main-left .connet:nth-child(1)').text());
});
$('.btn-edit1').click(function() {
	$('.edit-row1-2-2').show();
	$('.edit-row1-2-3').hide();
	let text = '<div class="flex-col1 table-cell" style="min-height: 59px;">' +
		'<div class="connet">Nhóm phân loại 2</div>' +
		'</div>';
	$('.model-table-main-left .flex-col').append(text);
	let text1 = ' <div class="flex-col">' +
		'<div class="table-cell" style=" min-height: 131px; width: 102px;">' +
		'</div>' +
		'</div>';
	$(".model-table-main-left .table-cell-wrapper-cell").attr("style", "");
	$('.model-table-main-left .second-variation-wrapper').append(text1);
	$('.model-table-main-heard .price-column').attr("style", "width: 180px; flex-shrink: 0; min-height: 59px;");
	$('.model-table-main-heard .stock-column').attr("style", "width: 180px; flex-shrink: 0; min-height: 59px;");
	$('.model-table-main-heard .SKU-column').attr("style", "width: 155px; flex-shrink: 0; min-height: 59px;");
	$('.second-variation-wrapper .price-column').attr("style", "width: 180px; flex-shrink: 0; min-height: 131px;");
	$('.second-variation-wrapper .stock-column').attr("style", "width: 180px; flex-shrink: 0; min-height: 131px;");
	$('.second-variation-wrapper .SKU-column').attr("style", "width: 155px; flex-shrink: 0; min-height: 131px;");
	xuly($('.model-table-main-left .connet').text());
});
//Lắng nghe sự kiện input
$(document).ready(function() {

	$(document).on('keyup', '.edit-row1-7-2', function(e) {

		$(this).attr("value", $(this).val());
		if ($(this).is(".loai1") == true) {
			let index = $(this).parents('.edit-row1-2').index() + 1;
			// $('.model-table-main-left .flex-col1:nth-child('+index+')').addClass('acvtion');
			if ($(this).val().length > 0) {
				$('.model-table-main-left .flex-col1:nth-child(' + index + ')').find('.connet').text($(this).val());
			}
			xuly($(this).val());
			//xử lý khi trùng tên phân loai
			if (index == 1 && $('.phanloai2').val() == $(this).val() || index == 2 && $('.phanloai1').val() == $(this).val()) {
				$(".loai1").parents('.edit-row1-7-3').find('.error').text("Phân loại không được trùng tên");
				$('.phanloai1').addClass('vaidale');
				$('.phanloai2').addClass('vaidale');
			} else {
				$(".loai1").parents('.edit-row1-7-3').find('.error').text('');
				$('.phanloai1').removeClass('vaidale');
				$('.phanloai2').removeClass('vaidale');
			}

		} else {
			let index = $(this).parents('.edit-row1-7-3').index();
			if ($(this).val().length <= 0) {
				$(this).parents('.edit-row1-7-3').find('.error').text("Không được để trống");
				$(this).addClass('vaidale');
			}
			$('.acvtion .headerloai').text($(this).val());
			$('.acvtion .table-cell').text($(this).val());
			let valide = $(".vaidale");
			for (let i = 0; i < valide.length; i++) {
				if (i != index) {
					if (valide.length == 1) {
						if (valide[i].value != $(this).val()) {
							$(this).parents('.edit-row1-7-1').find('.edit-row1-7-3:nth-child(' + i + 1 + ')').find('.edit-row1-7-2').removeClass('vaidale');
							$(this).parents('.edit-row1-7-1').find('.edit-row1-7-3:nth-child(' + i + 1 + ')').find('.error').text("");
						}
					}
				}
			}
		}
		$(this).parents('.edit-row1-7-3').find('.error').text("");
		$(this).removeClass('vaidale');

	});
	$(document).on('blur', '.edit-row1-7-2', function() {
		$('.model-table-main-left .model-table-main-body .table-cell-wrapper').find('.table-cell-wrapper-cell').removeClass('acvtion');
		$('.model-table-main-left .model-table-main-body .table-cell-wrapper').find('.second-variation-wrapper .flex-col').removeClass('acvtion');

		let trim = $.trim($(this).val());
		if ($(this).is(".loai1") == true) {
			let index = $(this).parents('.edit-row1-2').index() + 1;
			$('.model-table-main-left .flex-col1:nth-child(' + index + ')').removeClass('acvtion');
			if (trim == '') {
				$(this).parents('.edit-row1-7-3').find('.error').text("Không được để trống");
				$(this).addClass('vaidale');
				$('.model-table-main-left .flex-col1:nth-child(' + index + ')').find('.connet').text('Nhóm phân loại ' + index + '');
			}
		} else {
			if ($(this).val().length > 0 && $(this).parents('.edit-row1-7-1').find('.edit-row1-7-3').last().index() == $(this).parents('.edit-row1-7-3').index()) {
				let text2 = '<div class="edit-row1-7-3">' +
					'<div class="edit-row1-7-7">' +
					'<input type="text" class="edit-row1-7-2 loai2" placeholder="ví dụ: S,M vv" value="">' +
					'<div class="edit-row1-7-4">' +
					'<span class="edit-row1-7-5">' +
					'<i data-v-417c813c="" class="shopee-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M14.8546707,7.64824219 L13.3546707,6.14824219 C13.2109207,6.00449219 12.9968582,5.96230469 12.8093582,6.04042969 C12.6218582,6.11855469 12.4999832,6.29980469 12.4999832,6.50292969 L12.4999832,7.50292969 L8.50154574,7.50292969 L8.50154574,3.50136719 L9.50154574,3.50136719 C9.70310824,3.50136719 9.88592074,3.37949219 9.96404574,3.19199219 C10.0421707,3.00449219 9.99842074,2.79042969 9.85623324,2.64667969 L8.35623324,1.14667969 C8.16092074,0.951367187 7.84373324,0.951367187 7.64842074,1.14667969 L6.14842074,2.64667969 C6.00467074,2.79042969 5.96248324,3.00449219 6.04060824,3.19199219 C6.11873324,3.37949219 6.29998324,3.50136719 6.50154574,3.50136719 L7.50154574,3.50136719 L7.50154574,7.50136719 L3.50154574,7.50136719 L3.50154574,6.50136719 C3.50154574,6.29980469 3.37967074,6.11699219 3.19217074,6.03886719 C3.00467074,5.96074219 2.79060824,6.00449219 2.64685824,6.14667969 L1.14685824,7.64667969 C1.05310824,7.74042969 0.999983238,7.86855469 0.999983238,7.99980469 C0.999983238,8.13105469 1.05310824,8.26074219 1.14685824,8.35292969 L2.64685824,9.85292969 C2.79060824,9.99667969 3.00467074,10.0388672 3.19217074,9.96074219 C3.37967074,9.88261719 3.50154574,9.70136719 3.50154574,9.49824219 L3.50154574,8.49824219 L7.50154574,8.49824219 L7.50154574,12.4982422 L6.50154574,12.4982422 C6.29998324,12.4982422 6.11717074,12.6201172 6.03904574,12.8076172 C5.96092074,12.9951172 6.00467074,13.2091797 6.14685824,13.3529297 L7.64685824,14.8529297 C7.74060824,14.9466797 7.86873324,14.9998047 7.99998324,14.9998047 C8.13123324,14.9998047 8.26092074,14.9466797 8.35310824,14.8529297 L9.85310824,13.3529297 C9.99685824,13.2091797 10.0390457,12.9951172 9.96092074,12.8076172 C9.88279574,12.6201172 9.70154574,12.4982422 9.49842074,12.4982422 L8.49842074,12.4982422 L8.49842074,8.50136719 L12.4984207,8.50136719 L12.4984207,9.50136719 C12.4984207,9.70292969 12.6202957,9.88574219 12.8077957,9.96386719 C12.9952957,10.0419922 13.2093582,9.99824219 13.3531082,9.85605469 L14.8531082,8.35605469 C14.9468582,8.26230469 15.0000168,8.13417969 15.0000168,8.00292969 C15.0015457,7.87011719 14.9484207,7.74042969 14.8546707,7.64824219 Z"></path></svg></i>' +
					'</span>' +
					'<div class="edit-row1-7-6">' +
					'<i data-v-417c813c="" class="shopee-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2,4 C1.72385763,4 1.5,3.77614237 1.5,3.5 C1.5,3.22385763 1.72385763,3 2,3 L6,2.999 L6,2 C6,1.44771525 6.44771525,1 7,1 L10,1 C10.5522847,1 11,1.44771525 11,2 L11,2.999 L15,3 C15.2761424,3 15.5,3.22385763 15.5,3.5 C15.5,3.77614237 15.2761424,4 15,4 L14,4 L14,14 C14,14.5522847 13.5522847,15 13,15 L4,15 C3.44771525,15 3,14.5522847 3,14 L3,4 L2,4 Z M13,4 L4,4 L4,14 L13,14 L13,4 Z M6.5,7 C6.77614237,7 7,7.22385763 7,7.5 L7,11.5 C7,11.7761424 6.77614237,12 6.5,12 C6.22385763,12 6,11.7761424 6,11.5 L6,7.5 C6,7.22385763 6.22385763,7 6.5,7 Z M8.5,6 C8.77614237,6 9,6.22385763 9,6.5 L9,11.5 C9,11.7761424 8.77614237,12 8.5,12 C8.22385763,12 8,11.7761424 8,11.5 L8,6.5 C8,6.22385763 8.22385763,6 8.5,6 Z M10.5,7 C10.7761424,7 11,7.22385763 11,7.5 L11,11.5 C11,11.7761424 10.7761424,12 10.5,12 C10.2238576,12 10,11.7761424 10,11.5 L10,7.5 C10,7.22385763 10.2238576,7 10.5,7 Z M10,2 L7,2 L7,2.999 L10,2.999 L10,2 Z"></path></svg></i>' +
					'</div>' +
					'</div>' +
					'</div>' +
					'<span class="error"></span>' +
					'</div>';
				$(this).parents('.edit-row1-4').find('.edit-row1-7-1').append(text2);

				//xử lý xem cần thêm j vào bảng đó
				if ($(this).parents('.edit-row1-2').length == $('.model-table-main-left .model-table-main-body')) { }
				phanloai($(this).parents('.edit-row1-2 ').index(), $(this).val(), $(this).parents('.edit-row1-7-3').index());
				xuly($('.model-table-main-left .connet:nth-child(1)').text());
			}
			//xử lý khi trùng tên với nhau trong input
			let index = $(this).parents('.edit-row1-7-3').index();
			let inde = $(this).parents('.edit-row1-7-1').find('.edit-row1-7-3');
			for (let i = 0; i < inde.length; i++) {
				if (i != index) {
					if (inde[i].querySelector('.edit-row1-7-2').value == $(this).val()) {
						$(this).parents('.edit-row1-7-3').find('.error').text("Phân loại không được trùng tên");
						$(this).addClass('vaidale');
						$(this).parents('.edit-row1-7-1').find('.edit-row1-7-3:nth-child(' + i + 1 + ')').find('.edit-row1-7-2').addClass('vaidale');
						$(this).parents('.edit-row1-7-1').find('.edit-row1-7-3:nth-child(' + i + 1 + ')').find('.error').text("Phân loại không được trùng tên");
						break;
					}
				}

			}
			if ($(this).val().length <= 0) {
				$(this).parents('.edit-row1-7-3').find('.error').text("Không được để trống");
				$(this).addClass('vaidale');
			}
		}
	});
});
//xử lý xóa input đó đi
$(document).on('click', '.edit-row1-7-6', function() {
	let index = $(this).parents('.edit-row1-7-3').index();
	let inde = $(this).parents('.edit-row1-7-1').find('.edit-row1-7-3');
	//Loại bỏ trong trường hợp 2 input trùng nhau lỗi
	for (let i = 0; i < inde.length; i++) {
		if (i != index) {
			if (inde[i].querySelector('.edit-row1-7-2').value == $(this).parents('.edit-row1-7-3').find('.edit-row1-7-2').val()) {
				$(this).parents('.edit-row1-7-1').find('.edit-row1-7-3:nth-child(' + i + 1 + ')').find('.edit-row1-7-2').removeClass('vaidale');
				$(this).parents('.edit-row1-7-1').find('.edit-row1-7-3:nth-child(' + i + 1 + ')').find('.error').text("");
				break;
			}
		}

	}

	index = index + 1;
	//xóa bảng theo input
	if ($(this).parents('.edit-row1-2 ').index() == 0) {
		$('.model-table-main-left .model-table-main-body .table-cell-wrapper:nth-child(' + index + ')').remove();
	} else {
		$('.model-table-main-left .model-table-main-body .table-cell-wrapper').find('.second-variation-wrapper .flex-col:nth-child(' + index + ')').remove();

	}
	//Xử lý khi xóa phân loại 2 đi thì sẽ sửa lại bảng
	let thieu = $('.shopee-scrollbar .model-table-main-body .table-cell-wrapper').length - $('.model-table-main-left .model-table-main-body .table-cell-wrapper').find('.second-variation-wrapper .flex-col').length;
	for (let j = 1; j <= thieu; j++) {
		$('.shopee-scrollbar .model-table-main-body .table-cell-wrapper:nth-child(' + j + ')').remove();
	}
	xuly($('.model-table-main-left .connet:nth-child(1)').text());
	if ($(this).parents('.edit-row1-7-1').find('.edit-row1-7-3').length != 1) {
		$(this).parents('.edit-row1-7-3').remove();
	}
});



//tạo hàm để thêm dữ liệu vào trong bảng phân loại
function phanloai(data, value, index) {
	let text3 = '<div class="table-cell-wrapper">' +
		'<div class="table-cell-wrapper-cell table-cell" style="min-height: 131px;"><span class="headerloai">' + value + '</span>' +
		'<div class="table-cell-wrapper-image">' +
		'<div class="contai">' +
		'<div class="shopee-image-manager" style="width: 56px; max-width: 56px; height: 56px; max-height: 56px;">' +
		'<div class="shopee-image-conter">' +
		'<div class="shopee-image-upload">' +
		'<div class="shopee-file-upload">' +
		'<div class="container1-1">' +
		'<input type="file" aspect="2" name="file" accept="image/*" multiple="multiple" aspect="1" class="shopee-upload__input">' +
		'<div class="container1-2">' +
		'<div class="container1-3">' +
		'<i data-v-05032044="" class="shopee-icon"><svg viewBox="0 0 23 21" xmlns="http://www.w3.org/2000/svg"><path d="M18.5 0A1.5 1.5 0 0120 1.5V12c-.49-.07-1.01-.07-1.5 0V1.5H2v12.65l3.395-3.408a.75.75 0 01.958-.087l.104.087L7.89 12.18l3.687-5.21a.75.75 0 01.96-.086l.103.087 3.391 3.405c.81.813.433 2.28-.398 3.07A5.235 5.235 0 0014.053 18H2a1.5 1.5 0 01-1.5-1.5v-15A1.5 1.5 0 012 0h16.5z"></path><path d="M6.5 4.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM18.5 14.25a.75.75 0 011.5 0v2.25h2.25a.75.75 0 010 1.5H20v2.25a.75.75 0 01-1.5 0V18h-2.25a.75.75 0 010-1.5h2.25v-2.25z"></path></svg></i>' +
		'</div>' +
		'</div>' +
		'</div>' +
		'</div>' +
		'</div>' +
		'</div>' +
		'</div>' +
		'</div>' +
		'</div>' +
		'</div>' +
		'<div class="second-variation-wrapper">' +
		'</div>';
	let text4 = ' <div class="flex-col">' +
		'<div class="table-cell" style=" min-height: 70px; width: 102px;">' + value + '' +
		'</div>' +
		'</div>';
	let text5 = '<div class="table-cell-wrapper">' +
		'<div class="second-variation-wrapper">' +
		'<div class="flex-col">' +
		'<div class="table-cell price-column" style="width: 180px;flex-shrink: 0;min-height: 70px;">' +
		'<div class="edit-gia3">' +
		'<div class="edit-gia1-2-1">' +
		'<div class="edit-gia1-2-2">₫' +
		'<span class="edit-gia1-2-4"></span>' +
		'</div>' +
		'<input type="text" class="edit-gia1-2-3 gia1" placeholder="Giá">' +
		'</div>' +
		'<span class="error"></span>' +
		'</div>' +
		'</div>' +
		'<div class="table-cell stock-column" style="width: 180px; flex-shrink: 0; min-height: 70px;">' +
		'<div class="edit-gia3">' +
		'<div class="edit-gia1-2-1">' +

		'<input type="text" class="edit-gia1-2-3 gia" value="0">' +
		'</div>' +
		'</div>' +
		'</div>' +
		'<div class="table-cell SKU-column" style="width: 155px; flex-shrink: 0; min-height: 70px;">' +
		'<div class="edit-gia3">' +
		'<div class="edit-gia1-2-1">' +

		'<input type="text" class="edit-gia1-2-3 gia" placeholder="Nhập vào">' +
		'</div>' +
		'</div>' +
		'</div>' +
		'</div>' +
		'</div>' +
		'</div>';

	if (index > 0) {

		if (data == 0) {
			$('.model-table-main-left .model-table-main-body').append(text3);
			$('.shopee-scrollbar .model-table-main-body').append(text5);
			if ($('.flex-col1').length == 5) {
				index = index + 1;
				$('.model-table-main-left .model-table-main-body .table-cell-wrapper:nth-child(' + index + ')').find(".second-variation-wrapper").html($('.model-table-main-left .second-variation-wrapper').html());

			}
		} else {
			$(".model-table-main-left .second-variation-wrapper .table-cell").attr("style", "min-height: 70px; width: 102px;");
			$('.second-variation-wrapper .price-column').attr("style", "width: 180px; flex-shrink: 0; min-height: 70px;");
			$('.second-variation-wrapper .stock-column').attr("style", "width: 180px; flex-shrink: 0; min-height: 70px;");
			$('.second-variation-wrapper .SKU-column').attr("style", "width: 155px; flex-shrink: 0; min-height: 70px;");
			$('.model-table-main-left .model-table-main-body .second-variation-wrapper').append(text4);
			$('.shopee-scrollbar .model-table-main-body').append(text5);
			if ($('.model-table-main-left .second-variation-wrapper .flex-col').length > 2) {
				let thieu = $('.model-table-main-left .second-variation-wrapper .flex-col').length - $('.shopee-scrollbar .model-table-main-body .table-cell-wrapper').length;
				for (let i = 0; i < thieu; i++) {
					$('.shopee-scrollbar .model-table-main-body').append(text5);
				}
			}

		}
		console.log($('.shopee-scrollbar .model-table-main-body .table-cell-wrapper').length);
		console.log($('.model-table-main-left .second-variation-wrapper .flex-col').length);

	} else {
		if (data == 0) {
			$(".headerloai").text(value);
		} else {
			$('.model-table-main-left .model-table-main-body .second-variation-wrapper .table-cell').text(value);
		}
	}

	//  $(".model-table-main-left .model-table-main-body .table-cell-wrapper .second-variation-wrapper .flex-col:nth-child("+index+")").addClass("acvtion");


}

//thử xem khi nhấn sẽ như thế nào
$(document).on('click', '.edit-row1-7-2', function() {
	if ($(this).is(".loai1") == true) {
		let index = $(this).parents('.edit-row1-2').index() + 1;
		$('.model-table-main-left .flex-col1:nth-child(' + index + ')').addClass('acvtion');
	} else {
		let index = $(this).parents('.edit-row1-7-3').index() + 1;

		if ($(this).parents('.edit-row1-2 ').index() == 0) {
			$('.model-table-main-left .model-table-main-body .table-cell-wrapper:nth-child(' + index + ')').find('.table-cell-wrapper-cell').addClass('acvtion');
		} else {
			$('.model-table-main-left .model-table-main-body .table-cell-wrapper').find('.second-variation-wrapper .flex-col:nth-child(' + index + ')').addClass('acvtion');

		}

	}
});
//xử lý khi bấm các nút để xem dữ liệu j rồi chỉnh sửa khung cho hợp lý
function xuly(data) {
	if ($('.flex-col1').length == 4) {
		if (data.length > 8) {
			$(".model-table-main-left .table-cell-wrapper-cell").attr("style", "min-height: 131px");
			$('.flex-col1').attr("style", "min-height:59px");
			$('.model-table-main-heard .price-column').attr("style", "width: 202px; flex-shrink: 0; min-height: 59px;");
			$('.model-table-main-heard .stock-column').attr("style", "width: 202px; flex-shrink: 0; min-height: 59px;");
			$('.model-table-main-heard .SKU-column').attr("style", "width: 202px; flex-shrink: 0; min-height: 59px;");
			$('.second-variation-wrapper .price-column').attr("style", "width: 202px; flex-shrink: 0; min-height: 131px;");
			$('.second-variation-wrapper .stock-column').attr("style", "width: 202px; flex-shrink: 0; min-height: 131px;");
			$('.second-variation-wrapper .SKU-column').attr("style", "width: 202px; flex-shrink: 0; min-height: 131px;");
		} else if (data.length == 0) {
			$('.model-table-main-left .flex-col1:nth-child(1)').find('.connet').text("Nhóm phân loại 1");
			$('.flex-col1').attr("style", "min-height:59px");
			$('.model-table-main-heard .price-column').attr("style", "width: 202px; flex-shrink: 0; min-height: 59px;");
			$('.model-table-main-heard .stock-column').attr("style", "width: 202px; flex-shrink: 0; min-height: 59px;");
			$('.model-table-main-heard .SKU-column').attr("style", "width: 202px; flex-shrink: 0; min-height: 59px;");
			$('.second-variation-wrapper .price-column').attr("style", "width: 202px; flex-shrink: 0; min-height: 131px;");
			$('.second-variation-wrapper .stock-column').attr("style", "width: 202px; flex-shrink: 0; min-height: 131px;");
			$('.second-variation-wrapper .SKU-column').attr("style", "width: 202px; flex-shrink: 0; min-height: 131px;");
		}
		else {
			$('.flex-col1').attr("style", "min-height:44px");
			$('.model-table-main-heard .price-column').attr("style", "width: 202px; flex-shrink: 0; min-height: 44px;");
			$('.model-table-main-heard .stock-column').attr("style", "width: 202px; flex-shrink: 0; min-height: 44px;");
			$('.model-table-main-heard .SKU-column').attr("style", "width: 202px; flex-shrink: 0; min-height: 44px;");
			$('.second-variation-wrapper .price-column').attr("style", "width: 202px; flex-shrink: 0; min-height: 131px;");
			$('.second-variation-wrapper .stock-column').attr("style", "width: 202px; flex-shrink: 0; min-height: 131px;");
			$('.second-variation-wrapper .SKU-column').attr("style", "width: 202px; flex-shrink: 0; min-height: 131px;");

		}
		//Xử lý khi xóa phân loại 2 đi thì sẽ sửa lại bảng
		let thieu = $('.shopee-scrollbar .model-table-main-body .table-cell-wrapper').length - $('.model-table-main-left .table-cell-wrapper').length;
		for (let i = thieu; i > 0; i--) {
			$('.shopee-scrollbar .model-table-main-body .table-cell-wrapper:nth-child(' + i + ')').remove();
		}

	} else {
		if (data.length > 8) {
			$('.flex-col1').attr("style", "min-height:59px");
			$('.model-table-main-heard .price-column').attr("style", "width: 180px; flex-shrink: 0; min-height: 59px;");
			$('.model-table-main-heard .stock-column').attr("style", "width: 180px; flex-shrink: 0; min-height: 59px;");
			$('.model-table-main-heard .SKU-column').attr("style", "width: 155px; flex-shrink: 0; min-height: 59px;");
			$('.second-variation-wrapper .price-column').attr("style", "width: 180px; flex-shrink: 0; min-height: 131px;");
			$('.second-variation-wrapper .stock-column').attr("style", "width: 180px; flex-shrink: 0; min-height: 131px;");
			$('.second-variation-wrapper .SKU-column').attr("style", "width: 155px; flex-shrink: 0; min-height: 131px;");
		} else if (data.length == 0) {
			$('.flex-col1').attr("style", "min-height:59px");
			$('.model-table-main-heard .price-column').attr("style", "width: 180px; flex-shrink: 0; min-height: 59px;");
			$('.model-table-main-heard .stock-column').attr("style", "width: 180px; flex-shrink: 0; min-height: 59px;");
			$('.model-table-main-heard .SKU-column').attr("style", "width: 155px; flex-shrink: 0; min-height: 59px;");
			$('.second-variation-wrapper .price-column').attr("style", "width: 180px; flex-shrink: 0; min-height: 131px;");
			$('.second-variation-wrapper .stock-column').attr("style", "width: 180px; flex-shrink: 0; min-height: 131px;");
			$('.second-variation-wrapper .SKU-column').attr("style", "width: 155px; flex-shrink: 0; min-height: 131px;");

		}
		else {
			$('.flex-col1').attr("style", "min-height:44px");
			$('.model-table-main-heard .price-column').attr("style", "width: 180px; flex-shrink: 0; min-height: 44px;");
			$('.model-table-main-heard .stock-column').attr("style", "width: 180px; flex-shrink: 0; min-height: 44px;");
			$('.model-table-main-heard .SKU-column').attr("style", "width: 155px; flex-shrink: 0; min-height: 44px;");
			$('.second-variation-wrapper .price-column').attr("style", "width: 180px; flex-shrink: 0; min-height: 131px;");
			$('.second-variation-wrapper .stock-column').attr("style", "width: 180px; flex-shrink: 0; min-height: 131px;");
			$('.second-variation-wrapper .SKU-column').attr("style", "width: 155px; flex-shrink: 0; min-height: 131px;");

		}
		if ($('.model-table-main-left .table-cell-wrapper:nth-child(1)').find(".second-variation-wrapper .flex-col").length <= 1) {
			$(".model-table-main-left .second-variation-wrapper .table-cell").attr("style", "min-height: 131px; width: 102px;");
			$('.second-variation-wrapper .price-column').attr("style", "width: 180px; flex-shrink: 0; min-height: 131px;");
			$('.second-variation-wrapper .stock-column').attr("style", "width: 180px; flex-shrink: 0; min-height: 131px;");
			$('.second-variation-wrapper .SKU-column').attr("style", "width: 155px; flex-shrink: 0; min-height: 131px;");
		} else {
			$('.second-variation-wrapper .price-column').attr("style", "width: 180px; flex-shrink: 0; min-height: 70px;");
			$('.second-variation-wrapper .stock-column').attr("style", "width: 180px; flex-shrink: 0; min-height: 70px;");
			$('.second-variation-wrapper .SKU-column').attr("style", "width: 155px; flex-shrink: 0; min-height: 70px;");
		}

	}

};
//xử lý khi thêm giá hoặc thêm kho
$('.edit-gia1-2-3').on('click', function() {
	$(".edit-row1-2-1 .flex-col").find('.table-cell').removeClass("acvtion");
	if ($(this).parents('.edit-gia1-2').index() == 0) {
		$('.price-column').addClass('acvtion');
	} else if ($(this).parents('.edit-gia1-2').index() == 1) {
		$('.stock-column').addClass('acvtion');
	} else if ($(this).parents('.edit-gia1-2').index() == 2) {
		$('.SKU-column').addClass('acvtion');
	}
	$(this).keyup(function() {
		$(this).attr('value', $(this).val());
		if ($(this).is('.gia1') == true) {
			if ($(this).parents('.price-column').find(".gia1").val().length > 0 && $(this).parents('.table-cell').height() < 88) {
				$(this).parents('.edit-gia3').find('.edit-gia1-2-1').removeClass("vaidale");
				$(this).parents('.edit-gia3').find('.error').text('');
				$(".model-table-main-left .second-variation-wrapper .table-cell").attr("style", "min-height: 70px; width: 102px;");
				$('.second-variation-wrapper .price-column').attr("style", "width: 180px; flex-shrink: 0; min-height: 70px;");
				$('.second-variation-wrapper .stock-column').attr("style", "width: 180px; flex-shrink: 0; min-height: 70px;");
				$('.second-variation-wrapper .SKU-column').attr("style", "width: 155px; flex-shrink: 0; min-height: 70px;");
			}
		}
	});
});
$(document).on("blur", '.edit-gia1-2-3', function() {
	$(".edit-row1-2-1 .flex-col").find('.table-cell').removeClass("acvtion");
	if ($(this).is('.gia1') == true) {
		if ($(this).parents('.price-column').find(".gia1").val().length == 0) {
			$(this).parents('.edit-gia3').find('.edit-gia1-2-1').addClass("vaidale");
			$(this).parents('.edit-gia3').find('.error').text('Không được để trống');
			if ($(this).parents('.table-cell').height() < 70) {
				$(".model-table-main-left .second-variation-wrapper .table-cell").attr("style", "min-height: 87px; width: 102px;");
				$('.second-variation-wrapper .price-column').attr("style", "width: 180px; flex-shrink: 0; min-height: 87px;");
				$('.second-variation-wrapper .stock-column').attr("style", "width: 180px; flex-shrink: 0; min-height: 87px;");
				$('.second-variation-wrapper .SKU-column').attr("style", "width: 155px; flex-shrink: 0; min-height: 87px;");
			}

		}
	}
});
$('.edit-gia1-3').click(function() {
	const gia = $(this).siblings('.edit-gia1-1').find('.gia').val();
	const kho = $(this).siblings('.edit-gia1-1').find('.kho').val();
	const sku = $(this).siblings('.edit-gia1-1').find('.suk').val();
	$('.price-column .edit-gia1-2-3').attr("value", gia);
	$('.stock-column .edit-gia1-2-3').attr("value", kho);
	$('.SKU-column .edit-gia1-2-3').attr("value", sku);
	if ($('.price-column').find(".gia1").val().length > 0) {
		$('.edit-gia3').find('.edit-gia1-2-1').removeClass("vaidale");
		$('.edit-gia3').find('.error').text('');

	}
});




//tải ảnh nên khung
// window.onload = function() {
// chưa dùng được reactjs
// const [image, setImage] = useState();

// useEffect(()=>{
//   //Cleanup tức là xóa bộ nhớ tạm ảnh đi
//   return ()=>{
//     //xét xem có tồn tại ảnh nào không
//     {image && URL.revokeObjectURL(image)}
//   }
// },[image]);
//Cách khác tạo hàm mới
// function setImage(src){
//   return ()=>{
//     { src && URL.revokeObjectURL(src)}
//   }
// }





//cách tải ảnh lên web
//Nhớ k đk lấy thằng cha nó để lắng nghe là k đk 
//Chỉ nên lấy thằng ae nó để lắng nghe thì thìddk
var vitri = 0;
var indexanh = 0;
$(document).on('click', '.container1-2', function() {
	// Cách khác tạo hàm mới

	$(this).siblings('.shopee-upload__input').click();
	vitri = parseInt($(this).siblings('.shopee-upload__input').attr("aspect"));

	if (vitri == 2) {
		indexanh = $(this).parents('.table-cell-wrapper').index() + 1;
	} else if (vitri == 1) {
		indexanh = $(this).parents('.container1').index() + 1;
	}
	// file(vitri,index);

})

// function file(vitri,index){
$(document).on('change', '.shopee-upload__input', function(e) {

	let j = $(this).parents('.container1').index() + e.target.files.length;
	const resize_width = 320;
	for (let i = 0; i < e.target.files.length; i++) {
		const item = e.target.files[i];
		const reader = new FileReader();
		reader.readAsDataURL(item);
		reader.name = item.name;
		reader.size = item.size;
		reader.onload = function(event) {
			const img = new Image();
			img.src = event.target.result;
			img.name = event.target.name;
			img.size = event.target.size;
			img.onload = function(el) {
				const elem = document.createElement('canvas');
				//NƠi chia lại chiều dài rộng cuả ảnh mới thêm vào canvas đó
				// const scaleResize = resize_width / el.target.width;
				elem.width = resize_width;
				elem.height = 320;
				//Nơi tao canvas để chứa ảnh mới vào
				const ctx = elem.getContext('2d');
				ctx.drawImage(el.target, 1, 1, elem.width, elem.height);
				const srcEncoded = ctx.canvas.toDataURL('image/jpeg', 1);
				fetch(srcEncoded).then(r => r.blob())
					.then(blob => {
						let url = window.URL.createObjectURL(blob);
						image(url, j, vitri, indexanh);
					});
			}
		}
	}

});
// }

// hàm thêm ảnh

function image(src, i, vitri, index) {
	let text = '<div class="container1-5">' +
		'<div class="container1-6">' +
		'<img src="' + src + '" alt="ảnh đại diện" class="container1-7">' +
		'<div class="container1-8">' +
		'<span data-v-05032044="" data-v-1190c12e="" class="shopee-image-manager__icon shopee-image-manager__icon--crop"><i data-v-05032044="" class="shopee-icon" data-v-1190c12e=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M29.9 26.2h-2.8V7.9l3.2-3.2c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-3.1 3.1H7.7V4c0-.6-.4-1-1-1s-1 .4-1 1v2.4H2.9c-.6 0-1 .4-1 1s.4 1 1 1h2.8v18.8c0 .6.4 1 1 1h18.4v2.4c0 .6.4 1 1 1s1-.4 1-1v-2.4h2.8c.6 0 1-.4 1-1s-.4-1-1-1zM23.8 8.4L7.7 24.5V8.4h16.1zM8.9 26.2L25.1 9.9v16.3H8.9z"></path></svg></i></span>' +
		'<span data-v-05032044="" data-v-1190c12e="" class="decollator"></span>' +
		'<span data-v-05032044="" data-v-1190c12e="" class="shopee-image-manager__icon shopee-image-manager__icon--delete"><i data-v-05032044="" class="shopee-icon" data-v-1190c12e=""><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero"><path d="M14.516 3.016h-4v-1a.998.998 0 00-.703-.955.99.99 0 00-.297-.045h-3a.998.998 0 00-.955.703.99.99 0 00-.045.297v1h-4a.5.5 0 100 1h1v10a.998.998 0 00.703.955.99.99 0 00.297.045h9a.998.998 0 00.955-.703.99.99 0 00.045-.297v-10h1a.5.5 0 100-1zm-8-1h3v1h-3v-1zm6 12h-9v-10h9v10z"></path><path d="M5.516 12.016a.5.5 0 00.5-.5v-4a.5.5 0 10-1 0v4a.5.5 0 00.5.5zM8.016 12.016a.5.5 0 00.5-.5v-5a.5.5 0 10-1 0v5a.5.5 0 00.5.5zM10.516 12.016a.5.5 0 00.5-.5v-4a.5.5 0 10-1 0v4a.5.5 0 00.5.5z"></path></g></svg></i></span>' +
		' </div>' +
		'<div class="container1-9">' +
		'<span class="container1-9-1">*</span>' +
		'<span class="container1-9-2">Ảnh bìa</span>' +
		'</div>' +
		'</div>' +
		'</div>';
	let text1 = '<div class="container1-1" aspect="1">' +
		'<input type="file" name="file" accept="image/*" multiple="multiple" id="fileInput" aspect="1" class="shopee-upload__input">' +
		'<label for="fileInput" class="container1-2">' +
		' <div class="container1-3">' +
		'<i data-v-05032044="" class="shopee-icon"><svg viewBox="0 0 23 21" xmlns="http://www.w3.org/2000/svg"><path d="M18.5 0A1.5 1.5 0 0120 1.5V12c-.49-.07-1.01-.07-1.5 0V1.5H2v12.65l3.395-3.408a.75.75 0 01.958-.087l.104.087L7.89 12.18l3.687-5.21a.75.75 0 01.96-.086l.103.087 3.391 3.405c.81.813.433 2.28-.398 3.07A5.235 5.235 0 0014.053 18H2a1.5 1.5 0 01-1.5-1.5v-15A1.5 1.5 0 012 0h16.5z"></path><path d="M6.5 4.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM18.5 14.25a.75.75 0 011.5 0v2.25h2.25a.75.75 0 010 1.5H20v2.25a.75.75 0 01-1.5 0V18h-2.25a.75.75 0 010-1.5h2.25v-2.25z"></path></svg></i>' +
		'<div class="container1-4">Thêm hình ảnh ' + i + '/9</div>' +
		'</div>' +
		'</label>' +
		'</div>';
	let text2 = '<div class="container1" style="width: 80px; max-width: 80px; height: 105px; max-height: 105px;">' + text + '</div>';
	if (src != null) {

		if (vitri == 1) {
			$('.container1-4').text('Thêm hình ảnh ' + i + '/9');
			$(".container1-1").parent(".container1").before(text2);
		} else if (vitri == 2) {
			$('.model-table-main-left .model-table-main-body .table-cell-wrapper:nth-child(' + index + ')').find('.shopee-file-upload .container1-1').remove();
			$('.model-table-main-left .model-table-main-body .table-cell-wrapper:nth-child(' + index + ')').find('.shopee-file-upload').append(text);
		}
	} else {
		$('.container1:nth-child(' + i + ')').find(".container1-5").remove();
		$(".container1:nth-child(" + i + ")").append(text1);
	}

	// $(".container1-8").css("display","none");
	$(".container1:first-of-type .container1-9").css("display", "flex");

	suaanh();
}
//khi có ảnh cần sửa ảnh mới
function suaanh() {
	$('.container1-5').mouseenter(function() {
		$(this).find(".container1-8").css("display", "flex");
		$(this).find(".container1-9").attr("style", "");
	});
	$('.container1-5').mouseleave(function() {
		$(this).find(".container1-8").attr("style", '');
		$(this).parent('.container1:first-of-type').find(".container1-9").attr("style", 'display:flex;');
	});
}



$("#btnAddOrUpdateNew").click(function(e) {
	e.preventDefault();
	let data = {};
	var form = $("#formSubmit").serializeArray();
	$.each(form, function(i, v) {
		data["" + v.name + ""] = v.value;
	});
	console.log(data);
	let id = $("#newId").val();
	if (id == "0") {
		addNew(data);
	} else {
		updateNew(data);
	}
});
$(document).on('click', '#btnAddNew', () => {
	//let theloai= $('.theloai2').text();
	let title = $('.title').val();
	let arryimage = [];
	let arrypl1 = [];
	let arrypl2 = [];
	let imagedaidien;
	let gia = parseInt($('.edit-gia1-2 .gia').val()).toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1.').toString().replace('.0', '');
	let image = document.querySelectorAll('.container1 .container1-7');
	for (let i = 0; i < image.length; i++) {
		if (i === 0) {
			imagedaidien = image[i].getAttribute('src');
		} else {
			arryimage.push(image[i].getAttribute('src'));
		}
	}

	let mota = $('#mota').val();

	let pl2 = document.querySelectorAll('.dataphaloai2 .edit-row1-4 .edit-row1-7-2');
	for (let ia = 0; ia < pl2.length; ia++) {
		if (pl2[ia].value.length > 0) {
			arrypl2.push(pl2[ia].value);
		}
	}
	let phanloai = [$('.phanloai1').val(), $('.phanloai2').val()];

	//lấy ảnh phân loại và tên phân loại ra
	let arry1;
	let pl1 = document.querySelectorAll('.model-table-main-left .model-table-main-body .table-cell-wrapper');
	for (let ie = 1; ie <= pl1.length; ie++) {
		arry1 = [$('.model-table-main-left .model-table-main-body .table-cell-wrapper:nth-child(' + ie + ')').find('.headerloai').text(), $('.model-table-main-left .model-table-main-body .table-cell-wrapper:nth-child(' + ie + ')').find('.container1-7').attr("src")];
		arrypl1.push(arry1);
	}
	let danhsachpltong = [];
	let danhsach;
	let danhsachpl = document.querySelectorAll('.shopee-scrollbar .model-table-main-body .table-cell-wrapper');
	for (let e = 0; e < danhsachpl.length; e++) {
		let pl1a;
		let pl2a;
		let giapl;
		let khopl;
		if ($('.model-table-main-left .model-table-main-body .table-cell-wrapper').find('.flex-col').length > 0) {
			pl1a = $('.model-table-main-left .model-table-main-body .second-variation-wrapper .flex-col').eq(e).parent().siblings('.table-cell-wrapper-cell').find('.headerloai').text();
			pl2a = $('.model-table-main-left .model-table-main-body .second-variation-wrapper .flex-col').eq(e).find('.table-cell').text();
			giapl = parseInt(danhsachpl[e].querySelector('.price-column .edit-gia1-2-3').value);
			giapl = danhsachpl[e].querySelector('.price-column .edit-gia1-2-2').innerText + giapl.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1.').toString().replace('.0', '')
			khopl = danhsachpl[e].querySelector('.stock-column .edit-gia1-2-3').value;
			danhsach = [pl1a, pl2a, giapl, khopl];
		} else {
			pl1a = $('.model-table-main-left .model-table-main-body .table-cell-wrapper').eq(e).find('.headerloai').text();
			giapl = parseInt(danhsachpl[e].querySelector('.price-column .edit-gia1-2-3').value);
			giapl = danhsachpl[e].querySelector('.price-column .edit-gia1-2-2').innerText + giapl.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1.').toString().replace('.0', '')
			khopl = danhsachpl[e].querySelector('.stock-column .edit-gia1-2-3').value;
			danhsach = [pl1a, giapl, khopl];
		}


		danhsachpltong.push(danhsach);
	};
	let theloainame = {
		name: "ZinKa >" + $('.theloai2').text() + " >" + $(".thuonghieu").val(),
		code: $(".thuonghieu").val(),
		macode: ary.join("+")

	};
	//let theloainame = theloai.code;

	let data = {
		tenShope: "MistTu",
		conter: mota,
		title: title,
		gia: gia,
		image: imagedaidien,
		userid: "4",
		theloainame: theloainame,
		phanloai: phanloai,
		hangphanloai: arrypl1,
		hangphanloai2: arrypl2,
		imageArray: arryimage,
		danhsachphanloai: danhsachpltong

	};
	addNew(data);
})



//them vào danh sách sản phẩm
function addNew(data) {
	$.ajax({
		url: "/product/save",
		type: "post",
		contentType: "application/json",
		data: JSON.stringify(data),
		dataType: 'json',
		success: function(resulet) {
				console.log(resulet);
			if (resulet != null) {
				const aanh = setInterval(function() {
					$(".luuthanh").css('display', "block");
				}, 100);
				setTimeout(function() {
					clearInterval(aanh);
					$(".luuthanh").css('display', "none");
				}, 5000);
				location.reload();
			}
		},
		error: function(resulet) {
		}
	});
	// $.post("/product/save",data,function(reslut){console.log(reslut)},"json");
}
function updateNew(data) {
	$.ajax({
		url: "{portal/new}",
		type: "put",
		contentType: "application/json",
		data: JSON.stringify(data),
		dataType: 'json',
		success: function(resulet) {

		},
		error: function(resulet) {

		}

	});

}

