package Shoppe.controller.api;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import Shoppe.dto.AuthRequest;
import Shoppe.dto.AuthResponse;
import Shoppe.dto.MyUser;
import Shoppe.jwt.JwtTokenUtil;
import Shoppe.serviecs.DefaultUserService;



@RestController

public class AuthApi {

	@Autowired
	private DefaultUserService defaultUserService;
	
	@Autowired 
   private	AuthenticationManager authManager;
	@Autowired 
   private JwtTokenUtil jwtUtil;
	
	@PostMapping("/auth/login")
	public ResponseEntity<?> LoginUser(@RequestBody @Valid AuthRequest request,
			Model model) {
		try {
			Authentication authentication = authManager.authenticate(
					                         new UsernamePasswordAuthenticationToken(
					                        		 request.getEmail(),request.getPassword()));
			MyUser user = (MyUser) authentication.getPrincipal();
			String accessToken = jwtUtil.generateAccessToken(user);
			AuthResponse response = new AuthResponse(user.getUser().getEmail(), accessToken);
//			defaultUserService.loadUserByUsername(request.getEmail());
//		 	User user1 = defaultUserService.findByEmail(request.getEmail());
//		 	SessionUitl.getInstance().putValue(model, "user", user1);
			return ResponseEntity.ok().body(response);
		} catch (BadCredentialsException  e) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
		}
	 	
	 	
	}
}
