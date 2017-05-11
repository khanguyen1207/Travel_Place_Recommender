package com.main;

import com.account.model.AccountRepo;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import javax.sql.DataSource;

/**
 * Created by khanguyen on 4/25/17.
 */
@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter{
    @Autowired
    DataSource dataSource;
    @Autowired
    AccountRepo accountRepo;
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.jdbcAuthentication().dataSource(dataSource)
                .usersByUsernameQuery("select username, password, enabled from account where username=?")
                .authoritiesByUsernameQuery("select username, role from account where username=?");
    }
    @Override
    protected void configure(HttpSecurity httpSecurity) throws Exception {
        httpSecurity
                .authorizeRequests()
                .antMatchers("/**").permitAll()
                .and()
                .formLogin()
                .successHandler((httpServletRequest, httpServletResponse, authentication) -> {
                    System.out.println(authentication.getName());
                    httpServletResponse.setContentType("application/json");
                    ObjectMapper mapper = new ObjectMapper();
                    String jsonString = mapper.writeValueAsString(accountRepo.findByUsername(authentication.getName()));
                    httpServletResponse.setCharacterEncoding("UTF-8");
                    httpServletResponse.getWriter().write(jsonString);

                })
                .failureHandler((httpServletRequest, httpServletResponse, e) -> {
                    httpServletResponse.setContentType("application/json");
                    ObjectMapper mapper = new ObjectMapper();
                    String jsonString = mapper.writeValueAsString("Login failed - Wrong password");
                    httpServletResponse.setCharacterEncoding("UTF-8");
                    httpServletResponse.setStatus(HttpStatus.FORBIDDEN.value());
                    httpServletResponse.getWriter().write(jsonString);
                })
                .and()
                .httpBasic()
                .and()
                .csrf().disable()
                .logout()
                .logoutSuccessUrl("/");
    }
}
