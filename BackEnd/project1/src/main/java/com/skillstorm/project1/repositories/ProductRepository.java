package com.skillstorm.project1.repositories;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.skillstorm.project1.models.Product;
import com.skillstorm.project1.models.Warehouse;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    List<Product> findByWarehouseOrderByPriceAsc(Warehouse warehouse);

    List<Product> findByProductNameLikeIgnoreCase(String keyword);
    
}