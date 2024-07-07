package Shoppe.persistence.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import Shoppe.persistence.model.Phanloaihang1;




@Transactional
public interface Phanloaihang1Repository extends JpaRepository<Phanloaihang1, Long>{
    
	Phanloaihang1  findByTenhangphanloai1(String tenhangphanloai1);
	
	@Query(value = "SELECT image, hangphanloai1 FROM phanloaihang1 u where u.productis=?1", nativeQuery = true)
	String[][] findHangByProduct(Long id);
}
