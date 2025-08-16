package com.modulo51.demo.service;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.modulo51.demo.model.TransferenciaModel;
import com.modulo51.demo.repository.TransferenciaRepository;

@Service
public class TransferenciaService {

	@Autowired
	TransferenciaRepository transferenciaRepository;
	
	public ArrayList<TransferenciaModel> obtenerTransferencia(){
		return (ArrayList<TransferenciaModel>)transferenciaRepository.findAll();
	}
	
	public TransferenciaModel guardarTransferencia(TransferenciaModel transferencia) {
		return transferenciaRepository.save(transferencia);
		
	}
	
	public Optional<TransferenciaModel> obtenerPorId(Long id){
		return transferenciaRepository.findById(id);
		
	}
	
	
	public boolean eliminarTransferencia(Long id) {
		try {
			transferenciaRepository.deleteById(id);
			return true;
		} catch (Exception e) {
			return false;
		}
		
	}
}
