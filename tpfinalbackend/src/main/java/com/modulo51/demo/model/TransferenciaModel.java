package com.modulo51.demo.model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;

@Entity
@Table(name = "transferencia")
public class TransferenciaModel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	private long id_ordenante;

	private long id_beneficiario;

	private double monto;

	private String concepto;

	private Date fecha;

	@PrePersist
	public void prePersist() {
		if (fecha == null) { // Si la fecha viene nula desde el frontend
			fecha = new Date(); // La establecemos a la fecha y hora actuales del servidor
		}
	}

	// Getters y Setters

	public Date getFecha() {
		return fecha;
	}

	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public long getId_ordenante() {
		return id_ordenante;
	}

	public void setId_ordenante(long id_ordenante) {
		this.id_ordenante = id_ordenante;
	}

	public long getId_beneficiario() {
		return id_beneficiario;
	}

	public void setId_beneficiario(long id_beneficiario) {
		this.id_beneficiario = id_beneficiario;
	}

	public double getMonto() {
		return monto;
	}

	public void setMonto(double monto) {
		this.monto = monto;
	}

	public String getConcepto() {
		return concepto;
	}

	public void setConcepto(String concepto) {
		this.concepto = concepto;
	}

}
