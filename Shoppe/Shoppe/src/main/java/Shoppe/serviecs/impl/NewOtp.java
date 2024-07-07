package Shoppe.serviecs.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Shoppe.persistence.dao.VerificationTokenRepository;
import Shoppe.persistence.model.VerificationToken;
import Shoppe.uitl.OptUtil;



@Service
public class NewOtp {

	
	@Autowired
	private OptUtil  optUtil;
	
	@Autowired 
	private VerificationTokenRepository verificationTokenRepository;
	
	
	 public VerificationToken savetoken() {
		 String token = optUtil.getOptUtil();
		 VerificationToken vToken = new VerificationToken(token);
		 return verificationTokenRepository.save(vToken);
	 }
	public VerificationToken regiSaveToken(Long id) {
		 String token = optUtil.getOptUtil();
		 VerificationToken vToken = new VerificationToken(id, token);
		 return verificationTokenRepository.save(vToken);
	}
	
}
