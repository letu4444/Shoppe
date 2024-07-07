package Shoppe.serviecs.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Shoppe.dto.CartDto;
import Shoppe.persistence.dao.CartRepository;
import Shoppe.persistence.dao.DanhsachphanloaiRepository;
import Shoppe.persistence.dao.ProductRepository;
import Shoppe.persistence.dao.UserRepository;
import Shoppe.persistence.model.Cart;
import Shoppe.persistence.model.Danhsachphanloai;
import Shoppe.persistence.model.Product;
import Shoppe.persistence.model.User;
import Shoppe.serviecs.CartServiec;



@Service
public class CartImpl implements CartServiec {
	
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private DanhsachphanloaiRepository danhsachphanloaiRepository;
	
	@Autowired
	private CartRepository cartRepository;
	
	@Autowired
	private ProductRepository productRepository;

	@Override
	public CartDto save(CartDto cartDto) {
		Cart cart = new Cart();
		//kiểm tra xem phân loại có chưa để tạo mới
		//Nếu có rồi thì chỉ cần cộng số lượng lại
		Danhsachphanloai danhsachphanloai = new Danhsachphanloai();
		for (String[] i : cartDto.getDanhsachphanloai()) {
			danhsachphanloai.setHangphanloai1(i[0]);
			danhsachphanloai.setHangphanloai2b(i[1]);
			
		}
		Product product = new Product(cartDto.getProductid());
		danhsachphanloai.setProducti(product);
		//lấy id danh sách đó
		danhsachphanloai = danhsachphanloaiRepository.findDanhsachByHanghoa(danhsachphanloai.getHangphanloai1(), danhsachphanloai.getHangphanloai2b(),danhsachphanloai.getProducti().getId());
		if(danhsachphanloai !=null) {
			Cart cart1 = cartRepository.findCartByDanhsachId(danhsachphanloai.getId());
			if(cart1 != null) {
				cart.setSoluong((cartDto.getSoluong()+cart1.getSoluong()));
				cart.setId(cart1.getId());
//				Cart cartdelete = new Cart(cart1.getId());
				//xóa cái cũ đi chỉ lưu 1 cái thoi
				//K cần thiết tốn tài nguyên 
//				cartRepository.deleteById(cart1.getId());
			}
		}
	//Sẽ kết thúc đến đây
		if(cartDto.getId() != null && cart.getId() == null) {
			cart.setId(cartDto.getId());
		}
		cart.setImage(cartDto.getImage());
		cart.setPhanloaihang(cartDto.getPhanloaihang());
		cart.setGiagoc(cartDto.getGiagoc());
		cart.setGiasale(cartDto.getGiasale());
		if(cart.getSoluong() == null) {
			cart.setSoluong(cartDto.getSoluong());
		}
		cart.setTenshope(cartDto.getTenshope());
		cart.setTitle(cartDto.getTitle());
		cart.setUserid(userRepository.findByEmail(cartDto.getUseremail()));
		cart.setProductandcart(productRepository.findOneById(cartDto.getProductid()));
		cart.setDanhsachphanloai(danhsachphanloai);
		cartRepository.save(cart);
		return cartDto;
	}

	@Override
	public List<CartDto> findAll(Long userid) {
		List<CartDto> cartDtos= new ArrayList<>();
	     User user = new User(userid);
		List<Cart> carts = cartRepository.findAllCart(user.getId());
		for (Cart cart : carts) {
			CartDto cartDto = new CartDto();
			cartDto.setId(cart.getId());
			cartDto.setGiagoc(cart.getGiagoc());
			cartDto.setGiasale(cart.getGiasale());
			cartDto.setImage(cart.getImage());
			cartDto.setPhanloaihang(cart.getPhanloaihang());
			cartDto.setSoluong(cart.getSoluong());
			cartDto.setTenshope(cart.getTenshope());
			cartDto.setTitle(cart.getTitle());
			cartDto.setDanhsachphanloai(danhsachphanloaiRepository.findPhanloaiByDanhsach(cart.getDanhsachphanloai().getId()));
			cartDto.setProductid(cart.getProductandcart().getId());
			cartDtos.add(cartDto);
		}
		return cartDtos;
	}

	@Override
	public String[][] findGioByCart(Long userid) {
		
		return cartRepository.findGioByCart(userid);
	}

	@Override
	public String findPhanloaiByCart(Long id) {
	  
		return cartRepository.findPhanloaiByCart(id);
	}

	@Override
	public List<Cart> findByUserid(Long userid) {
		
		return cartRepository.findUseridByCart(userid);
	}

	@Override
	public void PustCart(Cart cart) {
		Cart cart2 = cartRepository.findOneById(cart.getId());
		cart2.setSoluong(cart.getSoluong());
		cartRepository.save(cart2);
		
	}

	@Override
	public void detele(Long[] id) {
		for (long l : id) {
			cartRepository.deleteById(l);
		}
		
	}
	

}
