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
@Table(name = "Phanloaihang1")
public class Phanloaihang1 {

	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
		private Long Id;
	 
	 @Column(name = "hangphanloai1",columnDefinition = "NVARCHAR(50)")
	 private String tenhangphanloai1;
	 
	 @Column(name = "image")
	 private String image;
	 

	 
	 @ManyToOne(fetch = FetchType.EAGER)
	 @JoinColumn(name = "productis")
	 private Product products1;
	 

	 
	 public Phanloaihang1() {
		// TODO Auto-generated constructor stub
	}

	public Long getId() {
		return Id;
	}

	public void setId(Long id) {
		Id = id;
	}

	public String getTenhangphanloai1() {
		return tenhangphanloai1;
	}

	public void setTenhangphanloai1(String tenhangphanloai1) {
		this.tenhangphanloai1 = tenhangphanloai1;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}



	public Product getProducts1() {
		return products1;
	}

	public void setProducts1(Product products1) {
		this.products1 = products1;
	}


	 
	 
}
