package Shoppe.serviecs;

import java.util.List;

import org.springframework.data.domain.Pageable;

import Shoppe.dto.ProductDto;
import Shoppe.persistence.model.Product;



public interface ProductServiec {

   ProductDto findByTitleIsContaining(String title);
   
   List<Product> findByTitleLike(String title);
   
   List<ProductDto> findByTitleIsContaining(String title,Pageable pageable);
	
	ProductDto findOneById(Long id);
	
	Product save(ProductDto product);
	
	int totalItem();
	
	void detele(long[] id);
	
	
}
