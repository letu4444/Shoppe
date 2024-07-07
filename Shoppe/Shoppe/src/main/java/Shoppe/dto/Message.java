package Shoppe.dto;

import java.util.Date;

public class Message {

	 private String senderId;
	 private String receiverId;
	 private String senderName; 
	  private String receiverName; 
	  private String message;
	  //ảnh avatar của ng gửi
	  private String image;
	  //Kiểu dạng gửi tin như kiểu thông báo hay tin nhắn
	  private String type;
	  private String date;
	  private Startus startus;
	public String getSenderName() {
		return senderName;
	}
	public void setSenderName(String senderName) {
		this.senderName = senderName;
	}
	public String getReceiverName() {
		return receiverName;
	}
	public void setReceiverName(String receiverName) {
		this.receiverName = receiverName;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public Startus getStartus() {
		return startus;
	}
	public void setStartus(Startus startus) {
		this.startus = startus;
	}
	
	public String getSenderId() {
		return senderId;
	}
	public void setSenderId(String senderId) {
		this.senderId = senderId;
	}
	public String getReceiverId() {
		return receiverId;
	}
	public void setReceiverId(String receiverId) {
		this.receiverId = receiverId;
	}
	
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	@Override
	public String toString() {
		return "Message [senderId=" + senderId + ", receiverId=" + receiverId + ", senderName=" + senderName
				+ ", receiverName=" + receiverName + ", message=" + message + ", image=" + image + ", date=" + date
				+ ", startus=" + startus + "]";
	}
 
	  
}
