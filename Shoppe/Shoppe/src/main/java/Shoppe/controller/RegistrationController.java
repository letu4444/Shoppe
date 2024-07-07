package Shoppe.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import Shoppe.dto.MyUser;
import Shoppe.dto.UserDto;
import Shoppe.persistence.model.Role;
import Shoppe.persistence.model.User;
import Shoppe.serviecs.DefaultUserService;



@Controller
@RequestMapping("/registration")
public class RegistrationController {

	@Autowired
	private DefaultUserService defaultUserService;

	public RegistrationController(DefaultUserService defaultUserService) {
		super();
		this.defaultUserService = defaultUserService;
	}
	
	@ModelAttribute("user")
	public UserDto userDto() {
		return new UserDto();
	}
	@GetMapping()
	public String  showRegistrationForm() {
		return "register";
	}
	
	@PostMapping("/save")
	public String registerUserAccount(@ModelAttribute("user") UserDto userdto, Model model,
			HttpServletRequest request) {
		User user = defaultUserService.findByUserName(userdto.getName());
		if (user != null && user.getUsername() != null
				&& !user.getUsername().isEmpty()) {
			
			return "redirect:/registration?error=username";
		}else {
			User user2 = defaultUserService.saveRegistration(userdto);
			defaultUserService.loadUserByUsername(userdto.getEmail_id());
			authWithoutPassword(user2,request);
			return "redirect:/trangchu";
		}
		
	}
	
	@GetMapping("/resetPassword")
	public String showresetPass() {
		return "redPassword";
	}
	@PostMapping("/resetPassword/save")
	public String resatPass(@ModelAttribute("user") UserDto userDto, Model model,
			HttpServletRequest request) {
		User enstyti = defaultUserService.resetPassword(userDto);
		defaultUserService.loadUserByUsername(userDto.getEmail_id());
		authWithoutPassword(enstyti,request);
		if(enstyti.getRoles().get(0).getName().equals("User")) {
			return "redirect:/trangchu";
		}else {
			return "redirect:/admin";
		}
	
	}
	
	public void authWithoutPassword(User user,HttpServletRequest request) {
		List<Role>  roles = user.getRoles();
		List<SimpleGrantedAuthority> authorities = new ArrayList<>();
			MyUser myuser = new MyUser(user);
			for (Role role : roles) {
				authorities.add(new SimpleGrantedAuthority(role.getName()));
			}
			 Authentication authentication = new UsernamePasswordAuthenticationToken(myuser, null, authorities);
			  SecurityContextHolder.getContext().setAuthentication(authentication);
	}
}
