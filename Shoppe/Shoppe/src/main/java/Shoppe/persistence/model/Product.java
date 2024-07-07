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

//import com.fasterxml.jackson.annotation.JsonBackReference;
//import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "product")
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "tenshope")
	private String tenShope;

	@Column(name = "title")
	private String title;

	@Column(name = "conter")
	private String conter;

	@Column(name = "gia",columnDefinition = "NVARCHAR(100)")
	private String gia;

	@Column(name = "image")
	private String image;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "userid")
//	@JsonBackReference
	private User user;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "theloaiid")
//	@JsonBackReference
	private Theloai theloai;

	@OneToMany(mappedBy = "product")
	private List<Phanloai> phanloais = new ArrayList<>();
	
	@OneToMany(mappedBy = "products1")
    private List<Phanloaihang1> phanloaihang1s = new ArrayList<>();
	
	@OneToMany(mappedBy = "producti")
	private List<Danhsachphanloai> danhsachphanloais = new ArrayList<>();
	
	@OneToMany(mappedBy = "products")
	private List<phanloaihang2> phanloaihang2s = new ArrayList<>();
	@OneToMany(mappedBy = "product3")
	private List<ImageProduct> imageProducts = new ArrayList<>();
	
	@OneToMany(mappedBy = "productandcart")
	private List<Cart> carts = new ArrayList<>();
	
	public Product(String title) {
		super();
		this.title = title;
	}
	

	public Product() {
		// TODO Auto-generated constructor stub
	}

	
	
	public Product(Long id) {
		super();
		this.id = id;
	}


	public Theloai getTheloai() {
		return theloai;
	}


	public void setTheloai(Theloai theloai) {
		this.theloai = theloai;
	}


	public Long getId() {
		return id;
	}
	

	public void setId(Long id) {
		this.id = id;
	}

	public String getTenShope() {
		return tenShope;
	}

	public void setTenShope(String tenShope) {
		this.tenShope = tenShope;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getConter() {
		return conter;
	}

	public void setConter(String conter) {
		this.conter = conter;
	}


	public String getGia() {
		return gia;
	}


	public void setGia(String gia) {
		this.gia = gia;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}


	public List<Phanloai> getPhanloais() {
		return phanloais;
	}


	public void setPhanloais(List<Phanloai> phanloais) {
		this.phanloais = phanloais;
	}

	public List<Danhsachphanloai> getDanhsachphanloais() {
		return danhsachphanloais;
	}


	public void setDanhsachphanloais(List<Danhsachphanloai> danhsachphanloais) {
		this.danhsachphanloais = danhsachphanloais;
	}


	public List<phanloaihang2> getPhanloaihang2s() {
		return phanloaihang2s;
	}


	public void setPhanloaihang2s(List<phanloaihang2> phanloaihang2s) {
		this.phanloaihang2s = phanloaihang2s;
	}


	public List<Phanloaihang1> getPhanloaihang1s() {
		return phanloaihang1s;
	}


	public void setPhanloaihang1s(List<Phanloaihang1> phanloaihang1s) {
		this.phanloaihang1s = phanloaihang1s;
	}


	public List<Cart> getCarts() {
		return carts;
	}


	public void setCarts(List<Cart> carts) {
		this.carts = carts;
	}


	public List<ImageProduct> getImageProducts() {
		return imageProducts;
	}


	public void setImageProducts(List<ImageProduct> imageProducts) {
		this.imageProducts = imageProducts;
	}
   
	
	

}
