package com.modulo51.demo.model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "mensaje")
public class MensajeModel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	private long id_origen;

	private long id_destino;

	private String texto;

	private Date fecha;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public long getId_origen() {
		return id_origen;
	}

	public void setId_origen(long id_origen) {
		this.id_origen = id_origen;
	}

	public long getId_destino() {
		return id_destino;
	}

	public void setId_destino(long id_destino) {
		this.id_destino = id_destino;
	}

	public String getTexto() {
		return texto;
	}

	public void setTexto(String texto) {
		this.texto = texto;
	}

	public Date getFecha() {
		return fecha;
	}

	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}

}
