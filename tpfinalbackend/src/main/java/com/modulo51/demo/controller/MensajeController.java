package com.modulo51.demo.controller;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.modulo51.demo.model.MensajeModel;
import com.modulo51.demo.service.MensajeService;

import jakarta.validation.Valid;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/mensaje")
public class MensajeController {

	@Autowired
	MensajeService mensajeService;
	
	@GetMapping
	public ArrayList<MensajeModel> obtenerMensaje(){
		return mensajeService.obtenerMensaje();
	}
	
	@PostMapping
	public MensajeModel guardarMensaje(@Valid @RequestBody MensajeModel Mensaje) {
		return this.mensajeService.guardarMensaje(Mensaje);
				
	}
	
	@GetMapping(path = "/{id}")
		public Optional<MensajeModel> obetenerPorId(@PathVariable("id")Long id){
		return this.mensajeService.obtenerMensajePorId(id);
	}
	
			
	@DeleteMapping(path = "/{id}")
	public ResponseEntity<Void> eliminarPorId(@PathVariable("id")Long id) {


		boolean ok = this.mensajeService.eliminarMensaje(id);

		if (ok) { 
			return ResponseEntity.ok().build();
		}
		else {
			return ResponseEntity.notFound().build();
		}
	}

	@PutMapping("/{id}")
	public MensajeModel actualizarMensaje(@PathVariable("id") Long id, @RequestBody MensajeModel mensaje) {
		return this.mensajeService.actualizarMensaje(id, mensaje);	
	 }

}
