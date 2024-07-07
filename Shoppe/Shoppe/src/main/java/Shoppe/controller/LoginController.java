package Shoppe.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import Shoppe.dto.UserDto;
import Shoppe.persistence.model.User;
import Shoppe.serviecs.DefaultUserService;
import Shoppe.uitl.SessionUitl;



@Controller
@RequestMapping("/login")
public class LoginController {

	@Autowired
	private DefaultUserService defaultUserService;
	
	@Autowired
	private SessionUitl sessionUitl;

	public LoginController(DefaultUserService defaultUserService) {
		super();
		this.defaultUserService = defaultUserService;
	}
	
	
	@GetMapping()
	public String LoginPage(@RequestParam(value = "next",required = false) String next) {
		sessionUitl.setUrlnext(next);
		return "login";
	}
	
   @PostMapping("check")
   public void LoginPage(@ModelAttribute("user")UserDto userDto,Model model) {
	   defaultUserService.loadUserByUsername(userDto.getEmail_id());
	 	User user1 = defaultUserService.findByEmail(userDto.getEmail_id());
//	 	SessionUitl.getInstance().putValue(model, "user", user1);
   }
	
	
}
