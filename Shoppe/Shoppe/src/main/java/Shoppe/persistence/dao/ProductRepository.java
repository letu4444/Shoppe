package Shoppe.persistence.dao;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import Shoppe.persistence.model.Product;





public interface ProductRepository extends CrudRepository<Product, Long>,PagingAndSortingRepository<Product, Long>{

//	@Query("SELECT m FROM product m WHERE m.title LIKE %:title%")@Param("title") 
//	   @Query("SELECT m FROM product m WHERE m.title LIKE %:title%")
	    List<Product> findByTitleIsContaining(String title);
	    List<Product> findByTitleLike(String title);
	    Page<Product> findByTitleIsContaining(String title,Pageable pageable);
	Product findOneById(Long id);
	
	
}
