package Shoppe.serviecs.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Shoppe.persistence.dao.TheloaiRepository;
import Shoppe.persistence.model.Theloai;
import Shoppe.serviecs.TheloaiServiec;



@Service
public class TheloaiImpl implements TheloaiServiec{

	@Autowired
	private TheloaiRepository theloaiRepository;
	@Override
	public Theloai findOneById(Long id) {
		
		return theloaiRepository.findOneById(id);
	}

	@Override
	public Theloai findByCode(String code) {
		
		return theloaiRepository.findOneByCode(code);
	}

	@Override
	public Theloai save(Theloai theloai) {
		
		if(theloaiRepository.findOneByCode(theloai.getCode()) == null) {
			theloaiRepository.save(theloai);
		
		}
		theloai = theloaiRepository.findOneByCode(theloai.getCode());
		return theloai;
	}

}
