package Shoppe.controller;

import java.util.Calendar;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import Shoppe.dto.UserDto;
import Shoppe.dto.VerificationDto;
import Shoppe.persistence.model.User;
import Shoppe.persistence.model.VerificationToken;
import Shoppe.serviecs.DefaultUserService;
import Shoppe.serviecs.impl.NewOtp;



@RestController
@CrossOrigin
public class CheckOtp {

	
	@Autowired 
  private DefaultUserService userService;
	
	@Autowired
	private NewOtp  newOtp;
	
	
	@GetMapping("/checkotp")
	public VerificationDto checkPage(@RequestParam("email_id") String email_id) {
		
		User user = userService.findByEmail(email_id);
		VerificationToken verificationToken = user.getVerificationToken();
		
		Calendar calendar = Calendar.getInstance();
		
		VerificationDto dto = new VerificationDto();
		if((verificationToken.getExpiryDate().getTime() - calendar.getTime().getTime()) <= 0) {
			//Thời gian của mã otp hết hiệu lực
			dto.setMessage("Otp đã vô hiệu");
		}else {
			dto.setToken(verificationToken.getToken());
		}
		
		return dto;
	}
	
	@PostMapping("/checkotp")
	public VerificationDto checkotp(@RequestBody UserDto userDto,
            final Model model) {
		VerificationDto dto = new VerificationDto();
		User user = userService.findByEmail(userDto.getEmail_id());
		
		if(user != null && user.getEmail() != null) {
			model.addAttribute("erro", "Tài khoản email/user tồn tại");
			dto.setMessage("Tài khoản email/user tồn tại");
			if(user.getUsername() !=null) {
				dto.setMessage("Tài khoản user tồn tại");
			}else {
				VerificationToken token = newOtp.regiSaveToken(user.getVerificationToken().getId());
				dto.setToken(token.getToken());
				dto.setMessage("Tạo mã lại otp thành công");
			}
		}else {
			VerificationToken token = newOtp.savetoken();
			User user2 = new User();
			
			user2.setEmail(userDto.getEmail_id());
			user2.setEnabled(true);
			userService.saveTokenofUser(user2.getEmail(), token);
			dto.setToken(token.getToken());
			dto.setMessage("Tạo mã otp thành công");
		}
		
		return dto;
	}
	
	@PostMapping("/resetOtp")
	public VerificationDto resetotp(@RequestBody UserDto userDto,
            final Model model) {
		VerificationDto dto = new VerificationDto();
		User user = userService.findByEmail(userDto.getEmail_id());
		if(user != null && user.getEmail() != null) {
			VerificationToken token = newOtp.regiSaveToken(user.getVerificationToken().getId());
			dto.setToken(token.getToken());
			dto.setMessage("Tạo mã lại otp thành công");
		}else {
			dto.setMessage("Email không tồn tại!");
		}
		return dto;
	}
}
