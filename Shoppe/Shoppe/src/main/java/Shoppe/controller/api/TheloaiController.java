package Shoppe.controller.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import Shoppe.dto.TheloaiDTo;
import Shoppe.persistence.model.Theloai;
import Shoppe.serviecs.TheloaiServiec;



@CrossOrigin
@RestController
public class TheloaiController {
  
	@Autowired
	private TheloaiServiec serviec;
	
	@PostMapping(value = "/theloai")
	public String theloaiPage(@RequestBody TheloaiDTo theloai) {
		Theloai theloai2 = new Theloai();
		theloai2.setCode(theloai.getCode());
		theloai2.setMacode(theloai.getMacode());
		theloai2.setName(theloai.getName());
		return serviec.save(theloai2);
	}
}