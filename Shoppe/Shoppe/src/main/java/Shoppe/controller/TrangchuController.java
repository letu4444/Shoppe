package Shoppe.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import Shoppe.config.autho.CustomOAuth2User;
import Shoppe.dto.MyUser;
import Shoppe.dto.ProductDto;
import Shoppe.dto.ProductOutput;
import Shoppe.persistence.model.Cart;
import Shoppe.persistence.model.User;
import Shoppe.serviecs.CartServiec;
import Shoppe.serviecs.DefaultUserService;
import Shoppe.serviecs.ProductServiec;
import Shoppe.uitl.UserUtil;



@Controller
@RequestMapping("/trangchu")
public class TrangchuController {
   
	@Autowired
	private DefaultUserService defaultUserService;
	
	@Autowired
	private ProductServiec productServiec;
	
	@Autowired
	private CartServiec cartServiec;
	
	@Autowired
	private UserUtil userUtil;
	
	
	
	
	@GetMapping
	public String TrangchuPage(Model model) {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		SecurityContext securityContext = SecurityContextHolder.getContext();
		if(securityContext.getAuthentication().getPrincipal().equals("anonymousUser") ) {
			
		}else {
			 User users = new User();
				if(securityContext.getAuthentication().getPrincipal() instanceof CustomOAuth2User) {
					CustomOAuth2User oauth2User1 = (CustomOAuth2User) securityContext.getAuthentication().getPrincipal();
				    String email = oauth2User1.getEmail();
				     users = defaultUserService.findByEmail(email);
				}else {
					MyUser user =  (MyUser) securityContext.getAuthentication().getPrincipal();
					
					users = defaultUserService.findByUserName(user.getUsername());
					
				}
		}
		
		
		return "index";
	}
	@GetMapping("/search")
	public String NoidungPage(Model model,@RequestParam("keyword") String keyword,
		                      @RequestParam( value = "page",required = false) Integer page,
                              @RequestParam(value = "litmit",required = false) Integer litmit) {
		ProductOutput output = new ProductOutput();
		if(page != null && litmit != null && keyword != null) {
			output.setPage(page);
			Pageable pageable = PageRequest.of(page, litmit);
			output.setDtos(productServiec.findByTitleIsContaining(keyword, pageable));
			output.setTotalPage((int) Math.ceil((double) (productServiec.totalItem()) / litmit));
		}else if(page == null && litmit == null && keyword != null) {
			output.setPage(0);
			Pageable pageable = PageRequest.of(0, 1);
			output.setDtos(productServiec.findByTitleIsContaining(keyword, pageable));
			output.setTotalPage((int) Math.ceil((double) (productServiec.totalItem()) / 1));
		}
		model.addAttribute("list",output);
		return "noidung";
	}
	
	@GetMapping(value = "/{id}")
	public String muhang(Model model,@PathVariable("id") String id) {
		String[] a= id.split("\\.",3);
		Long id1 = Long.valueOf(a[1]);
		Long useIdshope = Long.valueOf(a[2]);
		ProductDto dto = productServiec.findOneById(id1);
		model.addAttribute("product",dto);
        if(dto.getUserid()== useIdshope ) {
        	return "muahang";
        }else {
			return "error";
		}
		
	}
//	@GetMapping(value = "/phanloai/save")
//	public String phanloaiPage(Model model,@RequestParam("id") Long id) {
//		ProductDto dto = productServiec.findOneById(id);
//		model.addAttribute("product",dto);
//		return "tet";
//	}
	@GetMapping("/cart")
	public String CartPage(Model model) {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		if(!authentication.getPrincipal().equals("anonymousUser")) {
			 User users = new User();
				if(authentication.getPrincipal() instanceof CustomOAuth2User) {
					CustomOAuth2User oauth2User1 = (CustomOAuth2User) authentication.getPrincipal();
				    String email = oauth2User1.getEmail();
				     users = defaultUserService.findByEmail(email);
				}else {
					MyUser user =  (MyUser) authentication.getPrincipal();
					users = defaultUserService.findByUserName(user.getUsername());
				}
			 List<Cart> cart = cartServiec.findByUserid(users.getId());
		       model.addAttribute("cart1",cart);  
		}
		return "Gio";
	}
	
	
}
