package com.modulo51.demo.service;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.modulo51.demo.model.ClienteModel;
import com.modulo51.demo.repository.ClienteRepository;

@Service
public class ClienteService {
	@Autowired
	ClienteRepository clienteRepository;
	
	public ArrayList<ClienteModel> obtenerCliente(){
		return (ArrayList<ClienteModel>)clienteRepository.findAll();
	}
	
	public ClienteModel guardarCliente(ClienteModel cliente) {
		return clienteRepository.save(cliente);
		
	}
	
	public Optional<ClienteModel> obtenerClientePorId(Long id){
		return clienteRepository.findById(id);
		
	}
	
	
	public boolean eliminarCliente(Long id) {
		try {
			clienteRepository.deleteById(id);
			return true;
		} catch (Exception e) {
			return false;
		}
		
	}
	
	public ClienteModel actualizarCliente(Long id, ClienteModel cliente) {
        Optional<ClienteModel> clienteExistente = clienteRepository.findById(id);
        if (clienteExistente.isPresent()) {
        	 ClienteModel clienteActualizado = clienteExistente.get();
            return clienteRepository.save(clienteActualizado);
        } else {
            throw new IllegalArgumentException("No se encontró ningún cliente con el id: " + id);
        }
    }

}
