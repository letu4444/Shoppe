package Shoppe.uitl;

import java.util.Random;

import org.springframework.stereotype.Component;


@Component
public class OptUtil {

	public String getOptUtil() {
	   Random random = new Random();
	   int intrandom = random.nextInt(9999);
	   String opt = Integer.toString(intrandom);
	   if(opt.length() < 4) {
		   opt ="0"+ opt;
	   }
	   return opt;
	}
	
}
