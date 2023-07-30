package com.example.springapp;

import java.util.Arrays;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.example.springapp.filter.JwtRequestFilter;
import com.example.springapp.service.CustomUserDetailsService;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Autowired
    private ApplicationContext applicationContext;

    private CustomUserDetailsService getCustomUserDetailsService() {
        return applicationContext.getBean(CustomUserDetailsService.class);
    }

    private JwtRequestFilter getJwtRequestFilter() {
        return applicationContext.getBean(JwtRequestFilter.class);
    }

    @Qualifier("delegatedAuthenticationEntryPoint")
    private AuthenticationEntryPoint getAuthEntryPoint() {
        return applicationContext.getBean(AuthenticationEntryPoint.class);
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration auth)
            throws Exception {
        return auth.getAuthenticationManager();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        String[] authUrls = new String[] { "/signin", "/signup" };
        String attendeeUrls = "/attendee/**";
        String eventUrls = "/event/**";
        String ticketUrls = "/ticket/**";

        http.csrf(t -> t.disable())
                .authorizeHttpRequests(
                        auth -> auth
                                // .mvcMatchers(authUrls)
                                .mvcMatchers("/**")
                                .permitAll())
                                // .mvcMatchers(eventUrls, attendeeUrls, ticketUrls).authenticated())
                .sessionManagement(
                        session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .userDetailsService(getCustomUserDetailsService()).cors(cors -> cors.disable())
                .exceptionHandling(hand -> hand.authenticationEntryPoint(getAuthEntryPoint()));

        http.addFilterBefore(getJwtRequestFilter(), UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("*"));
        configuration.setAllowedMethods(Arrays.asList("*"));
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}