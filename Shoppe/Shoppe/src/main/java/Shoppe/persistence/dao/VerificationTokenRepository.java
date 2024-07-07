package Shoppe.persistence.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import Shoppe.persistence.model.VerificationToken;



public interface VerificationTokenRepository extends JpaRepository<VerificationToken, Long>{
	VerificationToken findByToken(String token);
}
