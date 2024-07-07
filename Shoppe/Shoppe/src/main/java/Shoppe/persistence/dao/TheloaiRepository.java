package Shoppe.persistence.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import Shoppe.persistence.model.Theloai;


public interface TheloaiRepository extends JpaRepository<Theloai, Long>{
  
	Theloai findOneByCode(String code);
	Theloai findOneById(Long id);
}
