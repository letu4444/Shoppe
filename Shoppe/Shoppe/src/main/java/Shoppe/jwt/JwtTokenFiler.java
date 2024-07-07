package Shoppe.jwt;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.ObjectUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import Shoppe.dto.MyUser;
import Shoppe.persistence.model.Role;
import Shoppe.persistence.model.User;
import Shoppe.serviecs.DefaultUserService;
import io.jsonwebtoken.Claims;

@Component
public class JwtTokenFiler extends OncePerRequestFilter{
	
	@Autowired
	private JwtTokenUtil jwtUtil;
	
	@Autowired
	private DefaultUserService defaultUserService;

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
	       
		if(!hasAuthorizationBearer(request)) {
			filterChain.doFilter(request, response);
			return;
		}
		String token = getAccessToken(request);
		
		if(!jwtUtil.validateAccessToken(token)) {
			filterChain.doFilter(request, response);
			return;
		}
		
		setAuthenticationContext(token, request);
		filterChain.doFilter(request, response);
	}

	private boolean hasAuthorizationBearer(HttpServletRequest request) {
		String header = request.getHeader("Authorization");
		if(ObjectUtils.isEmpty(header) || !header.startsWith("Bearer")) {
			return false;
		}
		return true;
	}
	
	private String getAccessToken(HttpServletRequest request) {
		String header = request.getHeader("Authorization");
		System.out.println(header);
		String token = header.split(" ")[1].trim();
		System.out.println(token);
		return token;
	}
	
	private void setAuthenticationContext(String token, HttpServletRequest request) {
		
		UserDetails userDetails = getUserDetails(token);

			UsernamePasswordAuthenticationToken 
				authentication = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());

			authentication.setDetails(
					new WebAuthenticationDetailsSource().buildDetails(request));

			SecurityContextHolder.getContext().setAuthentication(authentication);
		
	}
	
	private UserDetails getUserDetails(String token) {
		MyUser user = new MyUser();
		Claims claims = jwtUtil.parseClaims(token);
		String subject  = (String) claims.get(Claims.SUBJECT);
		String role = (String) claims.get("role");
		System.out.println("SUBJECT: " + subject);
		System.out.println("roles: " + role);
		role = role.replace("[", "").replace("]", "");
		String[] jwtSubiect = subject.split(",");
		System.out.println("JwtSUBJECT: " + jwtSubiect[1]);
	
		User user2 = new User();
		user2.setId(Long.parseLong(jwtSubiect[0]));
		user2.setEmail(jwtSubiect[1]);
	
		
		String[] roleNames = role.split(",");
		System.out.println("JwtRole: " + roleNames);
		for (String roles : roleNames) {
			user2.addRole(new Role(roles));
		}
		user.setUser(user2);
		
		return defaultUserService.loadUserByUsername(jwtSubiect[1]);
	}
	
	
}
