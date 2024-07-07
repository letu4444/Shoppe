package Shoppe.config;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.access.hierarchicalroles.RoleHierarchy;
import org.springframework.security.access.hierarchicalroles.RoleHierarchyImpl;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.security.web.access.expression.DefaultWebSecurityExpressionHandler;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;

import Shoppe.config.autho.CustomOAuth2UserService;
import Shoppe.config.autho.OAuthLoginSuccsessHandler;
import Shoppe.security.CustomAccessDeniedHandler;
import Shoppe.serviecs.DefaultUserService;



@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)

public class SecurityConfig {

	@Autowired
	AuthenticationSuccessHandler successHandler;

	@Autowired
	private DefaultUserService userDetailsService;

	@Bean
	public BCryptPasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	public DaoAuthenticationProvider authenticationProvider() {
		DaoAuthenticationProvider auth = new DaoAuthenticationProvider();
		auth.setUserDetailsService(userDetailsService);
		auth.setPasswordEncoder(passwordEncoder());
		return auth;
	}

	
	  @Bean 
	  public AuthenticationManager authManager(AuthenticationConfiguration
	  authenticationConfiguration) throws Exception { return
	  authenticationConfiguration.getAuthenticationManager(); }
	 
     
//	  @Bean
//	    public AuthenticationManager authManager(HttpSecurity http) throws Exception {
//	        return http.getSharedObject(AuthenticationManagerBuilder.class)
//	            .authenticationProvider(authenticationProvider())
//	            .build();
//	    }
	
	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http.csrf().disable().authorizeRequests()
		 .expressionHandler(defaultWebSecurityExpressionHandler())
         .antMatchers(HttpMethod.GET, "/roleHierarchy")
         .hasRole("STAFF")
		.antMatchers("/registration/**","/login/**","/trangchu/**","/public/**","/oauth/**",
				"/checkotp","/resetOtp","/auth/login/**","/search/**","/product/**","/phanloai/**","/thu/**",
				"/message/*","/app/*","/theloai/**").permitAll()
		.anyRequest()
		.authenticated().and()
		.formLogin().permitAll()
		  .loginPage("/login")
		     .usernameParameter("email_id")
		     .passwordParameter("password")
		     .loginProcessingUrl("/login/check")
		     .failureUrl("/login?error=true")
		     .successHandler(successHandle)
		    
		.and().csrf().disable()
	    .oauth2Login()
		  .loginPage("/login")
		     .userInfoEndpoint()
		     .userService(oauth2UserService)
             .and()
 	    .successHandler(successHandle)
		.and()
		.exceptionHandling()
        .accessDeniedHandler(accessDeniedHandler())
        .and()
		.logout()
		.invalidateHttpSession(true) //đây là nơi xóa dữ liệu trên coki
		.logoutSuccessHandler(logoutSuccessHandler()).permitAll()
		.and();

		return http.build();

	}
    @Bean
    public WebSecurityCustomizer webSecurityCustomizer() {
        return (web) -> web.ignoring()
                .antMatchers("/resources/public/**");
    }

    @Autowired
	private CustomOAuth2UserService oauth2UserService;
    
    @Autowired
    private OAuthLoginSuccsessHandler successHandle;
    

    @Bean
    public RoleHierarchy roleHierarchy() {
        RoleHierarchyImpl roleHierarchy = new RoleHierarchyImpl();
        String hierarchy = " ROLE_ADMIN > ROLE_STAFF \n ROLE_STAFF > ROLE_USER";
        roleHierarchy.setHierarchy(hierarchy);
        return roleHierarchy;
    }

    @Bean
    public DefaultWebSecurityExpressionHandler defaultWebSecurityExpressionHandler() {
    	DefaultWebSecurityExpressionHandler  expressionHandler = new DefaultWebSecurityExpressionHandler();
    	expressionHandler.setRoleHierarchy(roleHierarchy());
    	return expressionHandler;
    }
    //Nơi trả ra quyền k đúng
    @Bean
    public AccessDeniedHandler accessDeniedHandler() {
        return new CustomAccessDeniedHandler();
    }
    @Bean
    //authentication
    public UserDetailsService userDetailsService() {
    	
    	  return userDetailsService;
    }
    @Bean
	public LogoutSuccessHandler logoutSuccessHandler() {
		return new Shoppe.config.autho.LogoutSuccessHandler();
	}
  
}

