package com.skillstorm.project1.services;
import com.skillstorm.project1.exceptions.ResourceNotFoundException;
import com.skillstorm.project1.models.Product;
import com.skillstorm.project1.models.Warehouse;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.skillstorm.project1.payload.ProductDTO;
import com.skillstorm.project1.payload.ProductResponse;
import com.skillstorm.project1.repositories.ProductRepository;
import com.skillstorm.project1.repositories.WarehouseRepository;

@Service
public class ProductService{

@Autowired
private ProductRepository productRepository;

@Autowired
private WarehouseRepository warehouseRepository;

@Autowired
private ModelMapper modelMapper;
//Add product
public ProductDTO addProduct(Long warehouseId, ProductDTO productDTO) {
    Warehouse warehouse = warehouseRepository.findById(warehouseId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Category", "categoryId", warehouseId));

        Product product = modelMapper.map(productDTO, Product.class);
                product.setWarehouse(warehouse);
        Product savedProduct = productRepository.save(product);
        return modelMapper.map(savedProduct, ProductDTO.class);
}

public ProductResponse getAllProducts() {
    List<Product> products = productRepository.findAll();
    List<ProductDTO> productDTOS = products.stream()
            .map(product -> modelMapper.map(product, ProductDTO.class))
            .toList();

    ProductResponse productResponse = new ProductResponse();
    productResponse.setContent(productDTOS);
    return productResponse;
}

public ProductResponse searchByWarehouse(Long warehouseId) {
    Warehouse warehouse = warehouseRepository.findById(warehouseId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Warehouse", "cwarehouseId", warehouseId));

        List<Product> products = productRepository.findByWarehouseOrderByPriceAsc(warehouse);
        List<ProductDTO> productDTOS = products.stream()
                .map(product -> modelMapper.map(product, ProductDTO.class))
                .toList();

        ProductResponse productResponse = new ProductResponse();
        productResponse.setContent(productDTOS);
        return productResponse;
}

public ProductResponse searchProductByKeyword(String keyword) {
    List<Product> products = productRepository.findByProductNameLikeIgnoreCase('%' + keyword + '%');
        List<ProductDTO> productDTOS = products.stream()
                .map(product -> modelMapper.map(product, ProductDTO.class))
                .toList();

        ProductResponse productResponse = new ProductResponse();
        productResponse.setContent(productDTOS);
        return productResponse;
}

public ProductDTO updateProduct(Long productId, ProductDTO productDTO) {
    Product productFromDb = productRepository.findById(productId)
    .orElseThrow(() -> new ResourceNotFoundException("Product", "productId", productId));

Product product = modelMapper.map(productDTO, Product.class);
productFromDb.setQuantity(product.getQuantity());
Product savedProduct = productRepository.save(productFromDb);

return modelMapper.map(savedProduct, ProductDTO.class);
}

public ProductDTO deleteProduct(Long productId) {
    Product product = productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Product", "productId", productId));

        productRepository.delete(product);
        return modelMapper.map(product, ProductDTO.class);
}









}