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
@Table(name = "phanloai")
public class Phanloai {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long Id;

	@Column(name = "tenphanloai", columnDefinition = "NVARCHAR(50)")
	private String tenphanloai;


	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "productis")
	private Product product;

	

	
public Phanloai() {
	// TODO Auto-generated constructor stub
}

	public Long getId() {
		return Id;
	}

	public void setId(Long id) {
		Id = id;
	}


	public String getTenphanloai() {
		return tenphanloai;
	}

	public void setTenphanloai(String tenphanloai) {
		this.tenphanloai = tenphanloai;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}




}
