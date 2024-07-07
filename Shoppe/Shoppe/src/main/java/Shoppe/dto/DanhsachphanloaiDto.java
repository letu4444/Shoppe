package Shoppe.dto;

public class DanhsachphanloaiDto {
	private Long id;
	
   private String gia;
   
   private String hangphanloai2;
   
   private String hangphanloai1;
   
   private int Sl;
   
   public DanhsachphanloaiDto() {
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

public String getHangphanloai2() {
	return hangphanloai2;
}

public void setHangphanloai2(String hangphanloai2) {
	this.hangphanloai2 = hangphanloai2;
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
   
   
}
