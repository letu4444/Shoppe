package Shoppe.dto;

public class TheloaiDTo {

	private Long id;
	
	private String name;
	
	private String code;
	
	private String macode;
	
	public TheloaiDTo() {
		// TODO Auto-generated constructor stub
	}

	public TheloaiDTo(String name) {
		super();
		this.name = name;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getMacode() {
		return macode;
	}

	public void setMacode(String macode) {
		this.macode = macode;
	}
	
	
}
