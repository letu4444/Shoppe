package Shoppe.persistence.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import Shoppe.persistence.model.Role;




public interface RoleRepository extends JpaRepository<Role, Long>{
   Role findByName(String name);

}
