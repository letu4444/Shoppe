package Shoppe.persistence.model;


import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;



@Entity
@Table(name = "users")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "username")
    private String username;
    @Column(name = "password")
    private String password;

    private String email;
    @Column(name = "authtype")
    private String authType;
    
    @Column(name = "enabled")
   	private boolean enabled;
    
    private String image;
    
    @OneToOne(targetEntity = VerificationToken.class, fetch = FetchType.EAGER)
    @JoinColumn(nullable = false, name = "token_id", foreignKey = @ForeignKey(name = "FK_VERIFY_USER"))
    private VerificationToken verificationToken;
    
    
   

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "users_roles", joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"), inverseJoinColumns = @JoinColumn(name = "role_id", referencedColumnName = "id"))
    private List<Role> roles = new ArrayList<>();
    
    @OneToMany(mappedBy = "user")
//    @JsonManagedReference
    private List<Product> products = new ArrayList<>();
    
    @OneToMany(mappedBy = "userid")
    private List<Cart> carts = new ArrayList<>();
    
   public User() {
	// TODO Auto-generated constructor stub
}
    
    
    public User(String email, VerificationToken verificationToken) {
		super();
		this.email = email;
		this.verificationToken = verificationToken;
	}

	public User(String email) {
		super();
		this.email = email;
	}
	
	

	public User(Long id) {
		super();
		this.id = id;
	}


	public List<Product> getProducts() {
		return products;
	}


	public void setProducts(List<Product> products) {
		this.products = products;
	}


	public boolean isEnabled() {
		return enabled;
	}

	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}

	public VerificationToken getVerificationToken() {
		return verificationToken;
	}

	public void setVerificationToken(VerificationToken verificationToken) {
		this.verificationToken = verificationToken;
	}

	public String getEmail() {
		return email;
	}

	public String getImage() {
		return image;
	}


	public void setImage(String image) {
		this.image = image;
	}

	public String getAuthType() {
		return authType;
	}


	public void setAuthType(String authType) {
		this.authType = authType;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    
    public List<Role> getRoles() {
		return roles;
	}


	public void setRoles(List<Role> roles) {
		this.roles = roles;
	}
    public void addRole(Role role) {
    	this.roles.add(role);
    }
    
    
	public List<Cart> getCarts() {
		return carts;
	}


	public void setCarts(List<Cart> carts) {
		this.carts = carts;
	}


	@Override
    public String toString() {
        final StringBuilder builder = new StringBuilder();
        builder.append("User [id=").append(id).append(", username=").append(username).append(", password=").append(password).append("]");
        return builder.toString();
    }

}
