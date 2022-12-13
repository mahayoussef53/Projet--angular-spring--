package tn.isima.product.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.isima.product.repo.ProductRepo;

import javax.transaction.Transactional;

@Service
@Transactional
public class ProductService {
    private final ProductRepo productRepo;

    @Autowired
    public ProductService(ProductRepo productRepo) {
        this.productRepo = productRepo;
    }

    public void deleteProduct(Long id){
        productRepo.deleteProductById(id);
    }


}
