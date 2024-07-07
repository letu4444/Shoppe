package Shoppe.config.autho;

import java.io.IOException;
import java.util.Arrays;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.DefaultRedirectStrategy;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import Shoppe.dto.MyUser;
import Shoppe.persistence.dao.RoleRepository;
import Shoppe.persistence.dao.UserRepository;
import Shoppe.persistence.model.User;
import Shoppe.persistence.model.VerificationToken;
import Shoppe.serviecs.DefaultUserService;
import Shoppe.serviecs.impl.NewOtp;
import Shoppe.uitl.SessionUitl;
import Shoppe.uitl.UserUtil;



@Component
public class OAuthLoginSuccsessHandler implements AuthenticationSuccessHandler {

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private DefaultUserService defaultUserService;
	
	@Autowired
	private NewOtp  newOtp;
	
	@Autowired
    private RoleRepository roleRepository;
	
	@Autowired
	private SessionUitl sessionUitl;
	
	@Autowired
	private UserUtil userUtil;
	
	private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

	@Override
	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
			Authentication authentication) throws IOException, ServletException {
		String redirectUrl = "";
		// đây để kiểm tra xem Security có tên code là gì rồi xét cho nó vào được đâu
		// Nếu nó là bên bán hàng thì đk vào bên bán hàng //Nếu nó là user thì chỉ đk
		// vào mua hàng
		//Kiểm tra xem họ đăng nhập bằg hình thức nào
		if(authentication.getPrincipal().getClass() == CustomOAuth2User.class) {
			CustomOAuth2User oauth2User = (CustomOAuth2User) authentication.getPrincipal();
			String oauth2ClientName = oauth2User.getOauth2ClientName();
			String email = oauth2User.getEmail();
			String username = oauth2User.getName();
			String image = oauth2User.getImage();
			User user1 = oauth2User.getUser();
			
			if( userRepository.findByEmail(email) == null) {
	      	  User user = new User();
	      	  user.setEmail(email);
	      	  user.setUsername(username);
	      	  user.setPassword(passwordEncoder.encode("anhtu1996"));
	      	  user.setAuthType(oauth2ClientName);
	      	  user.setImage(image);
	      	  user.setEnabled(true);
	      	user.setRoles(Arrays.asList(roleRepository.findByName("ROLE_USER")));
	      	 VerificationToken token = newOtp.savetoken();
	      	 user.setVerificationToken(token);
	      	userRepository.save(user);
	      	redirectUrl = "/trangchu";
	        }else {
	        	if(sessionUitl.getUrlnext() != null) {
					redirectUrl = sessionUitl.getUrlnext();
					sessionUitl.setUrlnext(null);
				}else if(user1.getRoles() .get(0).getName().equals("ROLE_ADMIN")){
					redirectUrl = "/admin";
				}
			}
		}else {
			MyUser myUser = (MyUser) authentication.getPrincipal();
       		User user = defaultUserService.findByUserName(myUser.getUsername());
       		userUtil.setUser(user);
        	if (user.getRoles().get(0).getName().equals("ROLE_USER")) {
        		if(sessionUitl.getUrlnext() != null) {
    				redirectUrl = sessionUitl.getUrlnext();
    				sessionUitl.setUrlnext(null);
    			}else {
    				redirectUrl = "/trangchu";
    			}
    		} else if (user.getRoles().get(0).getName().equals("ROLE_ADMIN")) {
    			redirectUrl = "/admin";
    		}
		}
		
		 new DefaultRedirectStrategy().sendRedirect(request, response, redirectUrl);
	}
	


}
