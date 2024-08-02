package com.skillstorm.project1.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skillstorm.project1.payload.ProductDTO;
import com.skillstorm.project1.payload.ProductResponse;
import com.skillstorm.project1.services.ProductService;


@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:5173")
public class ProductController {
    
@Autowired
private ProductService productService;

    // Adding a new product
    @PostMapping("warehouse/{warehouseId}/product")
    public ResponseEntity<ProductDTO> addProduct(@RequestBody ProductDTO productDTO,
                                                 @PathVariable Long warehouseId){
        ProductDTO savedProductDTO = productService.addProduct(warehouseId, productDTO);
        return new ResponseEntity<>(savedProductDTO, HttpStatus.CREATED);
    }

    @GetMapping("/products")
    public ResponseEntity<ProductResponse> getAllProducts(){
        ProductResponse productResponse = productService.getAllProducts();
        return new ResponseEntity<>(productResponse,HttpStatus.OK);
    }

    @GetMapping("/warehouse/{warehouseId}/products")
    public ResponseEntity<ProductResponse> getProductsByCategory(@PathVariable Long warehouseId){
        ProductResponse productResponse = productService.searchByWarehouse(warehouseId);
        return new ResponseEntity<>(productResponse, HttpStatus.OK);

}

@GetMapping("/products/keyword/{keyword}")
    public ResponseEntity<ProductResponse> getProductsByKeyword(@PathVariable String keyword){
        ProductResponse productResponse = productService.searchProductByKeyword(keyword);
        return new ResponseEntity<>(productResponse, HttpStatus.FOUND);

}

@PutMapping("/products/{productId}")
    public ResponseEntity<ProductDTO> updateProduct(@RequestBody ProductDTO productDTO,
                                                    @PathVariable Long productId){
        ProductDTO updatedProductDTO = productService.updateProduct(productId, productDTO);
        return new ResponseEntity<>(updatedProductDTO, HttpStatus.OK);
    }

@DeleteMapping("/products/{productId}")
    public ResponseEntity<ProductDTO> deleteProduct(@PathVariable Long productId){
        ProductDTO deletedProduct = productService.deleteProduct(productId);
        return new ResponseEntity<>(deletedProduct, HttpStatus.OK);
    }

}