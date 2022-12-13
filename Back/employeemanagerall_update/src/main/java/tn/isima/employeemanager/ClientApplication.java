package tn.isima.employeemanager;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.CrossOrigin;



@EnableJpaRepositories(basePackages ={"tn.isima.employeemanager.repo"})
@EntityScan(basePackages = {"tn.isima.employeemanager.model"})
@EnableEurekaClient
@SpringBootApplication
@CrossOrigin(origins = "*")
public class ClientApplication {

	public static void main(String[] args) {
		SpringApplication.run(ClientApplication.class, args);
	}

	
}
