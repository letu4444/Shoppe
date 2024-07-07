package Shoppe.persistence.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import Shoppe.persistence.model.phanloaihang2;



@Transactional
public interface Phanloaihang2Repository extends JpaRepository<phanloaihang2, Long> {

	phanloaihang2 findByTenhangphanloai2(String ten1);
	
	@Query(value ="SELECT hangphanloai2 FROM phanloaihang2 u where u.productis=?1",nativeQuery = true)
	String[] findTenhangByProduct(Long id);
}
