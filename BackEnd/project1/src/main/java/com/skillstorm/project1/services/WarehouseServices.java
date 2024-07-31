package com.skillstorm.project1.services;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skillstorm.project1.exceptions.ApiException;
import com.skillstorm.project1.exceptions.ResourceNotFoundException;
import com.skillstorm.project1.models.Warehouse;
import com.skillstorm.project1.payload.WarehouseDTO;
import com.skillstorm.project1.payload.WarehouseResponse;
import com.skillstorm.project1.repositories.WarehouseRepository;

import jakarta.validation.Valid;


@Service
public class WarehouseServices {

    @Autowired
    private WarehouseRepository warehouseRepository;

    @Autowired
    private ModelMapper modelMapper;

    public WarehouseResponse getAllWarehouses() {
    List<Warehouse> warehouses = warehouseRepository.findAll();
    if(warehouses.isEmpty()){
        throw new ApiException("No warehouses created");
    }
    List<WarehouseDTO> warehouseDTOS = warehouses.stream()
        .map(warehouse -> modelMapper.map(warehouse, WarehouseDTO.class))
                .toList();

        WarehouseResponse warehouseResponse = new WarehouseResponse();
        warehouseResponse.setContent(warehouseDTOS);
        return warehouseResponse;
}

    public WarehouseDTO addWarehouse( WarehouseDTO warehouseDTO) {
       Warehouse warehouse = modelMapper.map(warehouseDTO, Warehouse.class);
        Warehouse warehouseFromDb = warehouseRepository.findByWarehouseLocation(warehouse.getWarehouseLocation());
        if (warehouseFromDb != null)
            throw new ApiException("warehouse with the location " + warehouse.getWarehouseLocation() + " already exists !!!");
        Warehouse savedWarehouse =warehouseRepository.save(warehouse);
        return modelMapper.map(savedWarehouse, WarehouseDTO.class); 
    }

    public WarehouseDTO deletewarehouse(Long warehouseId) {
        Warehouse warehouse = warehouseRepository.findById(warehouseId)
                .orElseThrow(() -> new ResourceNotFoundException("warehouse","warehouseId",warehouseId));

        warehouseRepository.delete(warehouse);
        return modelMapper.map(warehouse, WarehouseDTO.class);
    }

    public WarehouseDTO updatewarehouse(@Valid WarehouseDTO warehouseDTO, Long warehouseId) {
        Warehouse savedWarehouse = warehouseRepository.findById(warehouseId)
                .orElseThrow(() -> new ResourceNotFoundException("warehouse","warehouseId",warehouseId));

        Warehouse warehouse = modelMapper.map(warehouseDTO, Warehouse.class);
        warehouse.setWarehouseId(warehouseId);
        savedWarehouse = warehouseRepository.save(warehouse);
        return modelMapper.map(savedWarehouse, WarehouseDTO.class);
    }



}
