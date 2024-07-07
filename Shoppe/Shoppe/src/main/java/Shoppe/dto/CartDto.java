package Shoppe.dto;



public class CartDto extends AbstracDto<CartDto>{

	private Long id;
	
	private String image;
	
	private String title;
	
	private String phanloaihang;
	
	private String giagoc;
	
	private String giasale;
	
	private Integer soluong;
	
	private String tenshope;
	
	private String useremail;
	
	private Long productid;
	
	
	
	public CartDto() {
		// TODO Auto-generated constructor stub
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getPhanloaihang() {
		return phanloaihang;
	}

	public void setPhanloaihang(String phanloaihang) {
		this.phanloaihang = phanloaihang;
	}

	public String getGiagoc() {
		return giagoc;
	}

	public void setGiagoc(String giagoc) {
		this.giagoc = giagoc;
	}

	public String getGiasale() {
		return giasale;
	}

	public void setGiasale(String giasale) {
		this.giasale = giasale;
	}

	public Integer getSoluong() {
		return soluong;
	}

	public void setSoluong(Integer soluong) {
		this.soluong = soluong;
	}

	public String getTenshope() {
		return tenshope;
	}

	public void setTenshope(String tenshope) {
		this.tenshope = tenshope;
	}

	

	public String getUseremail() {
		return useremail;
	}

	public void setUseremail(String useremail) {
		this.useremail = useremail;
	}

	public Long getProductid() {
		return productid;
	}

	public void setProductid(Long productid) {
		this.productid = productid;
	}

	
	
	
}
