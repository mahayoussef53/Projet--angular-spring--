package tn.isima.product;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.CrossOrigin;



@EnableJpaRepositories(basePackages ={"tn.isima.product.repo"})
@EntityScan(basePackages = {"tn.isima.product.model"})
@EnableEurekaClient
@SpringBootApplication
@CrossOrigin(origins = "*")
public class ProductAddApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProductAddApplication.class, args);
	}

	
}
