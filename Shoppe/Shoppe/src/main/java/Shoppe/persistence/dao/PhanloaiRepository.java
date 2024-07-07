package Shoppe.persistence.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import Shoppe.persistence.model.Phanloai;
import Shoppe.persistence.model.Product;



@Transactional
public interface PhanloaiRepository extends JpaRepository<Phanloai, Long>{
	
    Phanloai findOneByTenphanloai(String tenphanloai);
	List<Phanloai> findByProduct(Product product);
	@Query(value = "SELECT tenphanloai FROM phanloai u where u.productis= ?1",nativeQuery = true)
	String[] findTenphanloaiByProduct(Long id);
}
