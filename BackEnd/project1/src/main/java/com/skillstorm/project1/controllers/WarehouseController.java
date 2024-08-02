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

import com.skillstorm.project1.payload.WarehouseDTO;
import com.skillstorm.project1.payload.WarehouseResponse;
import com.skillstorm.project1.services.WarehouseServices;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:5173")
public class WarehouseController {

    @Autowired
    private WarehouseServices warehouseService;


    @GetMapping("/warehouses")
    public ResponseEntity<WarehouseResponse> getAllWarehouses(){
        WarehouseResponse warehouseResponse = warehouseService.getAllWarehouses();
        return new ResponseEntity<>(warehouseResponse, HttpStatus.OK);
    }

    @PostMapping("/warehouses")
    public ResponseEntity<WarehouseDTO> addWarehouse(@Valid @RequestBody WarehouseDTO warehouseDTO){
        WarehouseDTO savedWarehouseDTO = warehouseService.addWarehouse(warehouseDTO);
        return new ResponseEntity<>(savedWarehouseDTO, HttpStatus.CREATED);
    }
    
    @DeleteMapping("/warehouse/{warehouseId}")
    public ResponseEntity<WarehouseDTO> deleteWarehouse(@PathVariable Long warehouseId){
            WarehouseDTO deletedWarehouse = warehouseService.deletewarehouse(warehouseId);
            return new ResponseEntity<>(deletedWarehouse, HttpStatus.OK);
    }

    @PutMapping("/warehouse/{warehouseId}")
    public ResponseEntity<WarehouseDTO> updateWarehouse(@Valid @RequestBody WarehouseDTO warehouseDTO,
                                                 @PathVariable Long warehouseId){
            WarehouseDTO savedWarehouseDTO = warehouseService.updatewarehouse(warehouseDTO, warehouseId);
            return new ResponseEntity<>(savedWarehouseDTO, HttpStatus.OK);
    }
}
