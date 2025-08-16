package com.modulo51.demo.controller;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.modulo51.demo.model.TransferenciaModel;
import com.modulo51.demo.service.TransferenciaService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/transferencia")
public class TransferenciaController {

	@Autowired
	TransferenciaService transferenciaService;
	
	@GetMapping
	public ArrayList<TransferenciaModel> obtenerTransferencia(){
		return transferenciaService.obtenerTransferencia();
	}
	
	@PostMapping
	public TransferenciaModel guardarTransferencia(@RequestBody TransferenciaModel Transferencia) {
		return this.transferenciaService.guardarTransferencia(Transferencia);
				
	}
	
	@GetMapping(path = "/{id}")
		public Optional<TransferenciaModel> obetenerPorId(@PathVariable("id")Long id){
		return this.transferenciaService.obtenerPorId(id);
	}
	
			
	@DeleteMapping(path = "/{id}")
	public String eliminarPorId(@PathVariable("id")Long id) {
		boolean ok = this.transferenciaService.eliminarTransferencia(id);
		if (ok) { 
			return "Se elimino la transferencia con id" + id;
		}
		else {
			return "Error al eliminar la transferencia con id" +id + "o no existe";
		}
	}

}
