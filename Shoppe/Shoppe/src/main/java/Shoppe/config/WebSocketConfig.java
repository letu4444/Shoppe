package Shoppe.config;


import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer{

	@Override
	public void registerStompEndpoints(StompEndpointRegistry registry) {
		// TODO Auto-generated method stub
		registry.addEndpoint("/ws").setAllowedOriginPatterns("*").withSockJS();
	}

	
	@Override
	public void configureMessageBroker(MessageBrokerRegistry registry) {
		// TODO Auto-generated method stub
		//Nơi tiếp nhận các request đến app chat đó
		registry.setApplicationDestinationPrefixes("/app");
		
		//Nơi tiếp nhận xem đó ở đâu chat chung hay riêng kiểu ậy
		registry.enableSimpleBroker("/chatgroup","/user","/message");
		registry.setUserDestinationPrefix("/user");
	}

	
}

