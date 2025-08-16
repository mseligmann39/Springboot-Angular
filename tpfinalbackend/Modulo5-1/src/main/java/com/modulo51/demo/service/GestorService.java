package com.modulo51.demo.service;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.modulo51.demo.model.GestorModel;
import com.modulo51.demo.repository.GestorRepository;

@Service
public class GestorService {

	@Autowired
	GestorRepository gestorRepository;
	
	public ArrayList<GestorModel> obtenerGestor(){
		return (ArrayList<GestorModel>)gestorRepository.findAll();
	}
	
	public GestorModel guardarGestor(GestorModel gestor) {
		return gestorRepository.save(gestor);
		
	}
	
	public Optional<GestorModel> obtenerGestorPorId(Long id){
		return gestorRepository.findById(id);
		
	}
	
	
	public boolean eliminarGestor(Long id) {
		try {
			gestorRepository.deleteById(id);
			return true;
		} catch (Exception e) {
			return false;
		}
		
	}
	
}
