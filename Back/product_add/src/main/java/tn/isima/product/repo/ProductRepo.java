package tn.isima.product.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import tn.isima.product.model.Product;

import java.util.Optional;

public interface ProductRepo extends JpaRepository<Product, Long> {
   

    Optional<Product> findProductById(Long id);
}
