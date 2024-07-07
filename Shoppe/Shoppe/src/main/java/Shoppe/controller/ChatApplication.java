package Shoppe.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

import Shoppe.dto.Message;





@Controller
public class ChatApplication {

	//nơi đọc từng user đi qua nó
	@Autowired
	private SimpMessagingTemplate simpMessagingTemplate;
	
	//Nơi gửi chap chung với kết nối xem client nào vào rồi
	@MessageMapping("/message")
	@SendTo("/message/public")
	public Message receiveMessage(@Payload Message message) {
		return message;
	}
	
	//Gửi riêng cho từng user
	@MessageMapping("/private_message")
	public Message userMessage(@Payload Message message) {
		simpMessagingTemplate.convertAndSendToUser(message.getReceiverId(),"/private" , message);
		return message;
	}
}
