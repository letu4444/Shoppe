package Shoppe.uitl;

import org.springframework.stereotype.Component;

import Shoppe.persistence.model.User;

@Component
public class UserUtil {
	private User user;

	public UserUtil() {
		// TODO Auto-generated constructor stub
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

}