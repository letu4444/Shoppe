package Shoppe.dto;

public class VerificationDto {
	 private Long id;

	    private String token;

	    private String message;

		public VerificationDto(Long id, String token, String message) {
			super();
			this.id = id;
			this.token = token;
			this.message = message;
		}
	    public VerificationDto() {
			// TODO Auto-generated constructor stub
		}
		public Long getId() {
			return id;
		}
		
		public String getToken() {
			return token;
		}
		public void setToken(String token) {
			this.token = token;
		}
		public String getMessage() {
			return message;
		}
		public void setMessage(String message) {
			this.message = message;
		}
	    
	    
}
