package Shoppe.dto;

public class PhanloaihangDto extends AbstracDto<PhanloaihangDto> {

	private Long id;

	

	private String gia;

	private String hangphanloai2b;

	private String hangphanloai1;

	private int Sl;

	public PhanloaihangDto() {
		// TODO Auto-generated constructor stub
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}



	public String getGia() {
		return gia;
	}

	public void setGia(String gia) {
		this.gia = gia;
	}



	public String getHangphanloai1() {
		return hangphanloai1;
	}

	public void setHangphanloai1(String hangphanloai1) {
		this.hangphanloai1 = hangphanloai1;
	}

	public int getSl() {
		return Sl;
	}

	public void setSl(int sl) {
		Sl = sl;
	}

	public String getHangphanloai2b() {
		return hangphanloai2b;
	}

	public void setHangphanloai2b(String hangphanloai2b) {
		this.hangphanloai2b = hangphanloai2b;
	}



	

	

}
