package Shoppe.dto;

public class UserDto {

	private String name;

	private String email_id;

	private String password;

	private String role;
	
	private String oauthtype;
	
	private String image;
	
	private VerificationDto verificationDto;

	public UserDto() {
		// TODO Auto-generated constructor stub
	}
	

	


    

	public UserDto(String name, String email_id, String password, String role, String oauthtype, String image,
			VerificationDto verificationDto) {
		super();
		this.name = name;
		this.email_id = email_id;
		this.password = password;
		this.role = role;
		this.oauthtype = oauthtype;
		this.image = image;
		this.verificationDto = verificationDto;
	}





	public VerificationDto getVerificationDto() {
		return verificationDto;
	}


	public void setVerificationDto(VerificationDto verificationDto) {
		this.verificationDto = verificationDto;
	}


	public String getOauthtype() {
		return oauthtype;
	}
	public void setOauthtype(String oauthtype) {
		this.oauthtype = oauthtype;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail_id() {
		return email_id;
	}

	public void setEmail_id(String email_id) {
		this.email_id = email_id;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

}
