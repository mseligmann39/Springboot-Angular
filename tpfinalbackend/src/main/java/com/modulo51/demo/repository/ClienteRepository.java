package com.modulo51.demo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.modulo51.demo.model.ClienteModel;

@Repository
public interface ClienteRepository extends CrudRepository<ClienteModel, Long>{
	
}