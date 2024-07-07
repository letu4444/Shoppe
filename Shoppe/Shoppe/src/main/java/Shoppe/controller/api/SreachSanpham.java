package Shoppe.controller.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import Shoppe.persistence.model.Product;
import Shoppe.serviecs.ProductServiec;



@CrossOrigin
@RestController
public class SreachSanpham {
	
	@Autowired
	private ProductServiec productServiec;
	 
	@GetMapping("/search/{name}")
	public String ProductPAge(Model model,@RequestParam("id") Long id) {
		return"thu";
	}
	
//	@GetMapping(value = "/search/keyword")
//	public ProductDto KeywordPage(@RequestParam("name")String name){
//		ProductDto dto = productServiec.findByTitleIsContaining(name);
//
//		return dto;
//	}
	
	@GetMapping(value = "/search/list")
	public String  KeywordPage(@ModelAttribute("keyword") String keyword) {
		String text ="";
		text +="<a href=\"/trangchu/search?keyword="+keyword+"\" class=\"search2\">"
				+ "<svg enable-background=\"new 0 0 15 15\" viewBox=\"0 0 15 15\" x=\"0\" y=\"0\" stroke-width=\"0\" class=\"search5\"><path d=\"m13 1.9c-.2-.5-.8-1-1.4-1h-8.4c-.6.1-1.2.5-1.4 1l-1.4 4.3c0 .8.3 1.6.9 2.1v4.8c0 .6.5 1 1.1 1h10.2c.6 0 1.1-.5 1.1-1v-4.6c.6-.4.9-1.2.9-2.3zm-11.4 3.4 1-3c .1-.2.4-.4.6-.4h8.3c.3 0 .5.2.6.4l1 3zm .6 3.5h.4c.7 0 1.4-.3 1.8-.8.4.5.9.8 1.5.8.7 0 1.3-.5 1.5-.8.2.3.8.8 1.5.8.6 0 1.1-.3 1.5-.8.4.5 1.1.8 1.7.8h.4v3.9c0 .1 0 .2-.1.3s-.2.1-.3.1h-9.5c-.1 0-.2 0-.3-.1s-.1-.2-.1-.3zm8.8-1.7h-1v .1s0 .3-.2.6c-.2.1-.5.2-.9.2-.3 0-.6-.1-.8-.3-.2-.3-.2-.6-.2-.6v-.1h-1v .1s0 .3-.2.5c-.2.3-.5.4-.8.4-1 0-1-.8-1-.8h-1c0 .8-.7.8-1.3.8s-1.1-1-1.2-1.7h12.1c0 .2-.1.9-.5 1.4-.2.2-.5.3-.8.3-1.2 0-1.2-.8-1.2-.9z\"></path>"
				+ "</svg>"
				+ "Tìm Shope \""
				+ "<span class=\"search_kyword\">"+keyword+"</span> \"</a>";
		List<Product> products = productServiec.findByTitleLike(keyword);
		
		for (Product product : products) {
			text +="<a href=\"/trangchu/search?keyword="+product.getTitle()+"\" class=\"search3\">"
					+ "<span class=\"search_kyword\">"+product.getTitle()+"</span>"
					+ "<span class=\"search4\"></span>"
					+ "</a>";
		}
		
		return text;
	}
	
	
	
	
}
