package Shoppe.spring;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import Shoppe.persistence.dao.PrivilegeRepository;
import Shoppe.persistence.dao.RoleRepository;
import Shoppe.persistence.dao.UserRepository;
import Shoppe.persistence.model.Privilege;
import Shoppe.persistence.model.Role;
import Shoppe.persistence.model.User;




@Component
public class SetupDataLoaze implements ApplicationListener<ContextRefreshedEvent> {

	private boolean alreadySetup = false;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private RoleRepository roleRepository;
	
	@Autowired
	private PrivilegeRepository privilegeRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	
	
	
	
	@Override
	public void onApplicationEvent(ContextRefreshedEvent event) {
		if(alreadySetup) {
			return;
		}
		   final Privilege readPrivilege = createPrivilegeIfNotFound("READ_PRIVILEGE");
	        final Privilege writePrivilege = createPrivilegeIfNotFound("WRITE_PRIVILEGE");
	        final Privilege passwordPrivilege = createPrivilegeIfNotFound("CHANGE_PASSWORD_PRIVILEGE");
	        
	        
	        // == create initial roles
	        final List<Privilege> adminPrivileges = new ArrayList<>(Arrays.asList(readPrivilege, writePrivilege, passwordPrivilege));
	        final List<Privilege> userPrivileges = new ArrayList<>(Arrays.asList(readPrivilege, passwordPrivilege));
	      
	        final Role adminRole = createRoleIfNotFound("ROLE_ADMIN", adminPrivileges);
	        createRoleIfNotFound("ROLE_USER", userPrivileges);
	        
	}
	
	@Transactional
	public Privilege createPrivilegeIfNotFound(String name) {
		Privilege privilege = privilegeRepository.findByName(name);
		if(privilege == null) {
			 privilege = new Privilege(name);
			privilege = privilegeRepository.save(privilege);
		}
		return privilege;
	}
	
	@Transactional
	public Role createRoleIfNotFound(String name ,final List<Privilege> privileges) {
		Role role = roleRepository.findByName(name);
		if (role == null) {
			role = new Role(name);
		}
		role.setPrivileges(privileges);
		role = roleRepository.save(role);
		
		return role;
	    
	}
	
	@Transactional
	public User createUserIfNotFound(final String email,final String username,final String password,final String authType,final String image,
			        final List<Role> roles) {
		User user = userRepository.findByEmail(email);
		if(user == null) {
			user = new User();
			user.setEmail(email);
			user.setAuthType(authType);
			user.setEnabled(true);
			user.setImage(image);
			user.setPassword(passwordEncoder.encode(password));
			user.setRoles(roles);
			user.setUsername(username);
//			user.s
		}
		return user;
	}

}
