package Shoppe.persistence.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "danhsachphanloai")
public class Danhsachphanloai {


	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
		private Long Id;
	 @Column(columnDefinition = "NVARCHAR(50)")
	 private String gia;
	 
	 @Column(name = "hangphanloai2",columnDefinition = "NVARCHAR(50)")
	 private String hangphanloai2b;
	 
	 @Column(name = "hangphanloai1",columnDefinition = "NVARCHAR(50)")
	 private String hangphanloai1;
	 
	 @Column(name = "soluong")
	 private int soluong;
	 
	 @ManyToOne(fetch = FetchType.EAGER)
	 @JoinColumn(name = "productis")
	 private Product producti;
	 
	 @OneToMany(mappedBy = "danhsachphanloai")
	 private List<Cart> carts = new ArrayList<>();
	 public Danhsachphanloai() {
		// TODO Auto-generated constructor stub
	}
	 


	public Product getProducti() {
		return producti;
	}



	public void setProducti(Product producti) {
		this.producti = producti;
	}


	public Long getId() {
		return Id;
	}

	public void setId(Long id) {
		Id = id;
	}

	public String getGia() {
		return gia;
	}

	public void setGia(String gia) {
		this.gia = gia;
	}



	public String getHangphanloai2b() {
		return hangphanloai2b;
	}



	public void setHangphanloai2b(String hangphanloai2b) {
		this.hangphanloai2b = hangphanloai2b;
	}



	public String getHangphanloai1() {
		return hangphanloai1;
	}



	public void setHangphanloai1(String hangphanloai1) {
		this.hangphanloai1 = hangphanloai1;
	}



	public int getSoluong() {
		return soluong;
	}



	public void setSoluong(int soluong) {
		this.soluong = soluong;
	}


	
	 
}
