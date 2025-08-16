package com.modulo51.demo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.modulo51.demo.model.TransferenciaModel;

@Repository
public interface TransferenciaRepository extends CrudRepository<TransferenciaModel, Long>{
	
}
