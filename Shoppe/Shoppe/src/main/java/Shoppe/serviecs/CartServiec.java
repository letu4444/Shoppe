package Shoppe.serviecs;

import java.util.List;

import Shoppe.dto.CartDto;
import Shoppe.persistence.model.Cart;



public interface CartServiec {

	//thêm vào giỏ hàng
	
	CartDto save (CartDto cartDto);
		
	List<CartDto> findAll(Long userid);
	
	String[][] findGioByCart(Long userid);
	
	String findPhanloaiByCart(Long id);
	
	List<Cart> findByUserid(Long userid);
	
	void PustCart(Cart cart);
	
	void detele(Long[] id);
}
