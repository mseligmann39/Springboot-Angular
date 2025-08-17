package com.modulo51.demo.controller;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import com.modulo51.demo.model.ClienteModel;
import com.modulo51.demo.service.ClienteService;

import jakarta.validation.Valid;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/cliente")
public class ClienteController {

	@Autowired
	ClienteService clienteService;
	
	@GetMapping
	public ArrayList<ClienteModel> obtenerCliente(){
		return clienteService.obtenerCliente();
	}
	
	@PostMapping
	public ClienteModel guardarCliente(@Valid @RequestBody ClienteModel cliente) {
		return this.clienteService.guardarCliente(cliente);
				
	}
	
	@GetMapping(path = "/{id}")
		public Optional<ClienteModel> obetenerClientePorId(@PathVariable("id")Long id){
		return this.clienteService.obtenerClientePorId(id);
	}
	
			
	@DeleteMapping(path = "/{id}")
	public ResponseEntity<Void> eliminarPorId(@PathVariable("id")Long id) {


		boolean ok = this.clienteService.eliminarCliente(id);

		if (ok) { 
			return ResponseEntity.ok().build();
		}
		else {
			return ResponseEntity.notFound().build();
		}
	}
	
	@PutMapping("/{id}")
    public ClienteModel actualizarCliente(@PathVariable("id") Long id, @RequestBody ClienteModel cliente) {
        return this.clienteService.actualizarCliente(id, cliente);
    }

}
