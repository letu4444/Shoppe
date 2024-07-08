package Shoppe.serviecs.impl;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import Shoppe.dto.MyUser;
import Shoppe.dto.UserDto;
import Shoppe.persistence.dao.RoleRepository;
import Shoppe.persistence.dao.UserRepository;
import Shoppe.persistence.model.Role;
import Shoppe.persistence.model.User;
import Shoppe.persistence.model.VerificationToken;
import Shoppe.serviecs.DefaultUserService;




@Service
public class DefaulUserImpl implements DefaultUserService{

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
    private RoleRepository roleRepository;
	
	private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
	@Override
	public UserDetails loadUserByUsername(String name) throws UsernameNotFoundException {
		try {
	    	User user = userRepository.findByUsername(name);
	    	if (user == null) {
				throw new UsernameNotFoundException("Chưa tồn tại tài khoản");
			}
	    	return new MyUser(user);
	    	
		} catch (Exception e) {
			 throw new RuntimeException(e);
		}
	}

	private Collection<? extends GrantedAuthority> mapRolesToAuthorities(List<Role> roles){
		return roles.stream().map(role -> new SimpleGrantedAuthority(role.getName())).collect(Collectors.toList());
	}
	@Override
	public User saveRegistration(UserDto userDto) {
	
		User user = new User();
		
	   if(checkEmail(userDto.getEmail_id())) {
		   User old = userRepository.findByEmail(userDto.getEmail_id());
			user.setId(old.getId());
			user.setEmail(old.getEmail());
		    user.setVerificationToken(old.getVerificationToken());
		    user.setAuthType("Database");
	     }
	   Role role = roleRepository.findByName("ROLE_USER");
	   user.setUsername(userDto.getName());
		user.setPassword(passwordEncoder.encode(userDto.getPassword()));
		user.setEnabled(true);
		user.setImage(userDto.getImage());
		user.setRoles(Arrays.asList(role));
		return userRepository.save(user);
	}

	@Override
	public User findByEmail(String email) {
	    User user = new User();
	    user.setEmail(email);
	    user = userRepository.findByEmail(user.getEmail());
		return user;
	}

	@Override
	public User saveTokenofUser(String email, VerificationToken verificationToken) {
		User user = new User(email, verificationToken);
		return userRepository.save(user);
	}

	@Override
	public User findByUserName(String username) {
		User user = new User();
		user.setUsername(username);
		return userRepository.findByUsername(user.getUsername());
	}
	private boolean checkEmail(String email) {
		return userRepository.findByEmail(email) !=null;
	}

	@Override
	public User resetPassword(UserDto userDto) {

		User user = new User();
		
	   if(checkEmail(userDto.getEmail_id())) {
		   User old = userRepository.findByEmail(userDto.getEmail_id());
		   user.setId(old.getId());
			user.setEmail(old.getEmail());
		    user.setVerificationToken(old.getVerificationToken());
		    user.setAuthType(old.getAuthType());
		    user.setImage(old.getImage());
		    user.setEnabled(old.isEnabled());
		    user.setRoles(old.getRoles());
		    user.setUsername(old.getUsername());
	   }
	   user.setPassword(passwordEncoder.encode(userDto.getPassword()));
		return userRepository.save(user);
	}

}
