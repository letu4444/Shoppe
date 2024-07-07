package Shoppe.uitl;

import org.springframework.stereotype.Component;

@Component
public class SessionUitl {
	
	private String urlnext;

	public SessionUitl() {
		// TODO Auto-generated constructor stub
	}
	
	
	public SessionUitl(String urlnext) {
		super();
		this.urlnext = urlnext;
	}


	public String getUrlnext() {
		return urlnext;
	}

	public void setUrlnext(String urlnext) {
		this.urlnext = urlnext;
	}
	
	
	
}
