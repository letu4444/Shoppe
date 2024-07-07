var currerTab = 0;
showTab(currerTab);

function showTab(n) {
	var X = $('.tab');
	if ($('.tab').is("#error")) {
		$('._1k7-2-1').hide();
		$(".error").show();
		X[currerTab].style.display = "none";
		// các tab tiếp theo sẽ hiển thị
		X[1].style.display = "block";
		$('._1k7-2').show();
	} else {
		$(".error").hide();
		X[n].style.display = "block";
	}


}
$('.anh').click(function(n) {
	var X = $('.tab');
  
	var input = $(".iphone").val();
	$('.otp').attr("value", input);

	let data = { "email_id": input };
	let otpcode = "";
	$.ajax({
		url: "/checkotp",
		type: "post",
		contentType: "application/json",
		data: JSON.stringify(data),
		dataType: 'json',
		success: function(resulet) {
			console.log(resulet.message);
			console.log(resulet.token);
			if (resulet.message == "Tài khoản user tồn tại") {
				$(".error").css("display", "block");
			} else {
				$(".error").css("display", "none");
				$(".mode").css("display", "flex");
				 $(".otp2").focus();
				//div otp chạy
				otp();
			}
			otpcode = resulet.token;
		},
		error: function(resulet) {

		}
	});
	//hàm  đó
	guiotp(input,X);
	
	
})

//tạo 1 hàm riêng
function guiotp(input,X){
	$(".mode3-3").click(function(e) {

		$.ajax({
			url: "/checkotp",
			type: 'get',
			data: { "email_id": input },
			dataType: 'json',
			success: function(data) {
				otpcode = data.token;
				if (data.message == "Otp đã vô hiệu") {
					$(".alert").addClass("alert-danger");
					$(".alert").text("Mã OTP hết hiệu lực!");
					$("button").removeClass("active");

				} else {
					const otp = $(".otp2").val();
					if (otpcode == otp) {
						$(".alert").addClass("alert-success");
						$(".alert").text("Mã OTP chính xác!");
						X[currerTab].style.display = "none";
						$(".mode").hide();
						// các tab tiếp theo sẽ hiển thị
						X[1].style.display = "block";
						$('._1k7-2-1').hide();
						$('._1k7-3').hide();
						$('._1k7-9').hide();
						$('._1k7-2').show();
						// Nếu ở cuối form thì
						if (currerTab >= X.length) {
							$('._1k9').submit;
							return false;
						}
						return false;
					} else {
						$(".alert").addClass("alert-danger");
						$(".alert").text("Mã OTP không chính xác!");
					}
				}
			},
			error: function(data) {

			}
		});

	});
}
$(".resetOtp").click(function(n) {
	var X = $('.tab');

	var input = $(".iphone").val();
	$('.otp').attr("value", input);
	let data = { "email_id": input };
	let otpcode = "";
	alert("anhtu");
	$.ajax({
		url: "/resetOtp",
		type: "post",
		contentType: "application/json",
		data: JSON.stringify(data),
		dataType: 'json',
		success: function(resulet) {
			console.log(resulet.message);
			console.log(resulet.token);
			if (resulet.message == "Email không tồn tại!") {
				$(".error").css("display", "block");
			} else {
				$(".error").css("display", "none");
				$(".mode").css("display", "flex");
				//div otp chạy
				otp();
			}
			otpcode = resulet.token;
		},
		error: function(resulet) {

		}
	});
	//hàm  đó
	guiotp(input,X);
});
$(".lai").click(function() {
	var input = $(".iphone").val();
	$(".alert").removeClass("alert-danger");
	$(".alert").text("");
	$(".otp2").val("");
	$(".otp2").focus();
	otp();
	let data = { "email_id": input };
	$.ajax({
		url: "/checkotp",
		type: "post",
		contentType: "application/json",
		data: JSON.stringify(data),
		dataType: 'json',
		success: function(resulet) {
			console.log(resulet.message);
			console.log(resulet.token);
			otpcode = resulet.token;
		},
		error: function(resulet) {

		}
	});
});
//Xử lý giử mã otp về
//tạo hàm
function otp() {
	$(".otp4").css("display", "none");
	$(".otp5").css("display", "flex");
	var date1 = new Date();
	var giay = date1.getSeconds();
	var giaykhoitao = giay + 60;
	date1.setSeconds(giaykhoitao);
	var X = setInterval(function() {
		var con1 = new Date();
		var tinhgiay = date1 - con1;

		//cách tính giây
		var seconds = Math.floor((tinhgiay % (1000 * 60)) / 1000);
		$(".otp5").html("Vui lòng chờ (" + seconds + "s) để gửi lại mã OTP ");
		if (seconds <= 0) {
			clearInterval(X);
			$(".otp4").css("display", "flex");
			$(".otp5").css("display", "none");
		}

	}, 300);

}
function Validator(options) {

	var bochuot = $('._1k7-2');
	var ba = $('._1k7-2-1');

	var selestorRule = {};
	//thực hiện validar
	function Valida(inputElement, rule) {
		var errorElemet = inputElement.parentElement.querySelector("._1k7-7");
		var erroMessage;
		var Rules = selestorRule[rule.selestor];
		var tru = inputElement.parentElement.querySelector('._1k7-6-1');
		//vòng lặp qua các rule đó
		//Nếu có lỗi sẽ dừng lại
		for (var i = 0; i < Rules.length; i++) {
			erroMessage = Rules[i](inputElement.value);
			if (erroMessage) break;
		}
		if (erroMessage) {
			errorElemet.innerText = erroMessage;
			inputElement.parentElement.classList.add("invalid");
			tru.style.display = "none";
			ba.attr("disabled", true);
			bochuot.attr("disabled", true);

		} else {
			errorElemet.innerText = "";
			inputElement.parentElement.classList.remove("invalid");
			tru.style.display = "flex";
			bochuot.attr("disabled", false);
			ba.attr("disabled", false);
		}
	}

	var formElement = document.querySelector(options.form);
	if (formElement) {

		//khi nhấn vào buttom
		formElement.onsubmit = function(e) {
			e.preventDefault();
			var isForm = true;
			//lặp qua từng rule để check
			options.rules.forEach(function(rule) {
				var inputElement = formElement.querySelector(rule.selestor);
				var isValidator = Valida(inputElement, rule);
				if (isValidator) {
					isForm = false;
				}

			});

			if (isForm) {

				//trường hợp submit js
				if (typeof options.onSubmit === 'function') {
					var enbarInput = formElement.querySelectorAll('[name]');
					var formVali = Array.from(enbarInput).reduce(function(values, input) {
						return (values[input.name] = input.value) && values;
					}, {});
					options.onSubmit(formVali);
					formElement.submit();
				}
				//Trường hợp submit mặc định

			}

		}
	}

	//Lắng nghe các sự kiện rules để xử lý bằng (butttom)
	options.rules.forEach(function(rule) {

		//lưu lại các rule trong test
		if (Array.isArray(selestorRule[rule.selestor])) {
			selestorRule[rule.selestor].push(rule.test);
		} else {
			selestorRule[rule.selestor] = [rule.test];
		}


		var inputElement = formElement.querySelector(rule.selestor);


		var errorElemet = inputElement.parentElement.parentElement.querySelector("._1k7-7");
		var tru = inputElement.parentElement.querySelector('._1k7-6-1');
		if (inputElement) {
			inputElement.onblur = function() {
				//lấy ra các giá trị của các thẻ input đó
				//Và test qua nếy có giá trị lỗi thì sẽ trả ra giá trị lỗi
				Valida(inputElement, rule);

			}
			inputElement.oninput = function() {
				errorElemet.innerText = "";
				inputElement.parentElement.classList.remove("invalid");
				tru.style.display = "none";
				bochuot.attr("disabled", false);
				ba.attr("disabled", false);
				inputElement.setAttribute("value", inputElement.value);
			}
		}
	});
}









Validator.isRequired = function(selestor, message) {
	return {
		selestor: selestor,
		test: function(value) {
			return value.trim() ? undefined : message || 'Vui lòng nhập trường này!'
		}
	};
}
Validator.isPhone = function(selestor, message) {
	return {
		selestor: selestor,
		test: function(value) {
			var isPhone = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
			return isPhone.test(value) ? undefined : message || 'Email không đúng vui lòng nhập lại!';
		}
	};
}
Validator.minLength = function(selestor, min) {
	return {
		selestor: selestor,
		test: function(value) {
			return value.length >= min ? undefined : `Vui lòng nhập tối thiểu ${min} kí tự `;
		}
	}
}
Validator.isPassword = function(selestor, getPassword, message) {
	return {
		selestor: selestor,
		test: function(value) {
			return value === getPassword() ? undefined : message || 'Giá trị nhập vào không đúng!';
		}
	}
}


