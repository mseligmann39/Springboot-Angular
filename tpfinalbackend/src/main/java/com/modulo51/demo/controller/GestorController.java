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

import com.modulo51.demo.model.GestorModel;
import com.modulo51.demo.service.GestorService;

import jakarta.validation.Valid;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/gestor")
public class GestorController {

	@Autowired
	GestorService gestorService;

	@GetMapping
	public ArrayList<GestorModel> obtenerGestor() {
		return gestorService.obtenerGestor();
	}

	@PostMapping
	public GestorModel guardarGestor(@Valid @RequestBody GestorModel gestor) {
		return this.gestorService.guardarGestor(gestor);
	}

	@GetMapping(path = "/{id}")
	public Optional<GestorModel> obetenerPorId(@PathVariable("id") Long id) {
		return this.gestorService.obtenerGestorPorId(id);
	}

	@DeleteMapping(path = "/{id}")
	public String eliminarPorId(@PathVariable("id") Long id) {
		boolean ok = this.gestorService.eliminarGestor(id);
		if (ok) {
			return "Se elimino el gestor con id" + id;
		} else {
			return "Error al eliminar el gestor con id" + id + "o no existe";
		}
	}

}
