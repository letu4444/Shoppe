package Shoppe.serviecs;

import org.springframework.security.core.userdetails.UserDetailsService;

import Shoppe.dto.UserDto;
import Shoppe.persistence.model.User;
import Shoppe.persistence.model.VerificationToken;



public interface DefaultUserService extends UserDetailsService {

	User saveRegistration(UserDto userDto);
	
	User findByEmail(String email);
	
	User saveTokenofUser(String email, VerificationToken verificationToken);
	
	User findByUserName(String username);
	
	User resetPassword(UserDto userDto);
}
