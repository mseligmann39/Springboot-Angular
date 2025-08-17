package com.modulo51.demo.service;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.modulo51.demo.model.MensajeModel;
import com.modulo51.demo.repository.MensajeRepository;


@Service
public class MensajeService {
	@Autowired
	MensajeRepository mensajeRepository;
	
	public ArrayList<MensajeModel> obtenerMensaje(){
		return (ArrayList<MensajeModel>)mensajeRepository.findAll();
	}
	
	public MensajeModel guardarMensaje(MensajeModel mensaje) {
		return mensajeRepository.save(mensaje);
		
	}
	
	public Optional<MensajeModel> obtenerMensajePorId(Long id){
		return mensajeRepository.findById(id);
		
	}
	
	
	public boolean eliminarMensaje(Long id) {
		try {
			mensajeRepository.deleteById(id);
			return true;
		} catch (Exception e) {
			return false;
		}
		
	}

	public MensajeModel actualizarMensaje(Long id, MensajeModel mensaje) {
		if (mensajeRepository.existsById(id)) {
			mensaje.setId(id);
			return mensajeRepository.save(mensaje);
		} else {
			return null; // or throw an exception
		}
	}
}
