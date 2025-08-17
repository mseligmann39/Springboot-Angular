# Aplicación Bancaria con Spring Boot + Angular

Aplicación web full-stack para la gestión de una entidad bancaria. Permite administrar clientes, gestores, transferencias y mensajería interna a través de una API RESTful robusta y una interfaz de usuario reactiva.

<img width="1722" height="541" alt="image" src="https://github.com/user-attachments/assets/06cd0811-4eb5-4897-ba28-e5cd62318037" />


## 📋 Tabla de Contenidos
* [Tecnologías Utilizadas](#-tecnologías-utilizadas)
* [Características Principales](#-características-principales)
* [Instalación y Puesta en Marcha](#-instalación-y-puesta-en-marcha)
* [Uso de la Aplicación](#-uso-de-la-aplicación)
* [Endpoints de la API](#-endpoints-de-la-api)
* [Estructura del Proyecto](#-estructura-del-proyecto)

---

## ✨ Tecnologías Utilizadas

Listado de las herramientas, frameworks y lenguajes utilizados en el proyecto.

* **Backend:**
    * Java (Versión 21)
    * Spring Boot (Versión 3.5.4)
    * Spring Data JPA (Hibernate)
    * Maven
    * MySQL

* **Frontend:**
    * Angular (Versión 16.0.0)
    * TypeScript
    * HTML5 / CSS3
    * Bootstrap 4

* **Base de Datos:**
    * MySQL (Administrada con XAMPP y phpMyAdmin)

* **Herramientas de Desarrollo:**
    * Git & GitHub
    * Postman (para pruebas de API)

---

## 🚀 Características Principales

Funcionalidades clave de la aplicación:

* **Gestión de Clientes:** CRUD completo (Crear, Leer, Actualizar, Eliminar) para la entidad de clientes.
* **Gestión de Gestores:** CRUD completo para la entidad de gestores.
* **Gestión de Transferencias:** CRUD completo para las transferencias bancarias entre clientes.
* **Gestión de Mensajes:** CRUD completo para la mensajería interna.
* **API RESTful:** Backend robusto que expone endpoints claros y funcionales para cada entidad.
* **Interfaz Reactiva:** Frontend desarrollado como una Single Page Application (SPA) para una experiencia de usuario fluida, con carga perezosa (lazy loading) de módulos para optimizar el rendimiento.

---

## 🔧 Instalación y Puesta en Marcha

Guía paso a paso para clonar, configurar y ejecutar el proyecto en un entorno local.

### **Pre-requisitos**
* Tener instalado [Node.js y npm](https://nodejs.org/) (v16 o superior)
* Tener instalado el [JDK (Java Development Kit)](https://www.oracle.com/java/technologies/downloads/) (Versión 21 o superior)
* Tener instalado [Git](https://git-scm.com/)
* Tener instalado y corriendo un servidor de MySQL (por ejemplo, con [XAMPP](https://www.apachefriends.org/es/index.html))

### **Pasos para la Instalación**

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/mseligmann39/springboot-angular.git](https://github.com/mseligmann39/springboot-angular.git)
    cd springboot-angular
    ```

2.  **Configurar la Base de Datos:**
    * Abre phpMyAdmin o tu gestor de BBDD preferido.
    * Crea una nueva base de datos llamada `databasemodule5`.
    * Las tablas se crearán automáticamente al iniciar el backend gracias a la configuración de Spring Boot (`spring.jpa.hibernate.ddl-auto=update`).

3.  **Levantar el Backend (Spring Boot):**
    * Navega a la carpeta del backend: `cd tpfinalbackend`
    * (Opcional, primera vez) Limpia e instala las dependencias con Maven: `mvnw clean install`
    * Ejecuta la aplicación: `mvnw spring-boot:run`
    * El backend estará corriendo en `http://localhost:8080/api`.

4.  **Levantar el Frontend (Angular):**
    * Abre una **nueva terminal**.
    * Navega a la carpeta del frontend: `cd tpfinalFrontend`
    * Instala las dependencias de npm: `npm install`
    * Ejecuta la aplicación: `ng serve`
    * El frontend estará corriendo en `http://localhost:4200`.

---

## 📖 Uso de la Aplicación

* Abre tu navegador y ve a `http://localhost:4200`.
* Verás una página de bienvenida con opciones para navegar a las diferentes secciones.
* Puedes usar los botones en cada sección para crear, editar o eliminar registros.

---

## 📡 Endpoints de la API

El backend expone los siguientes endpoints bajo la URL base `/api`.

| Método HTTP | Endpoint                       | Descripción                                  |
| :---------- | :----------------------------- | :------------------------------------------- |
| `GET`       | `/cliente`                     | Obtiene todos los clientes.                  |
| `GET`       | `/cliente/{id}`                | Obtiene un cliente por su ID.                |
| `POST`      | `/cliente`                     | Crea un nuevo cliente.                       |
| `PUT`       | `/cliente/{id}`                | Actualiza un cliente existente.              |
| `DELETE`    | `/cliente/{id}`                | Elimina un cliente.                          |
| `GET`       | `/gestor`                      | Obtiene todos los gestores.                   |
| `GET`       | `/gestor/{id}`                 | Obtiene un gestor por su ID.                  |
| `POST`      | `/gestor`                      | Crea un nuevo gestor.                         |
| `PUT`       | `/gestor/{id}`                 | Actualiza un gestor existente.                |
| `DELETE`    | `/gestor/{id}`                 | Elimina un gestor.                            |
| `GET`       | `/transferencia`               | Obtiene todas las transferencias.            |
| `POST`      | `/transferencia`               | Crea una nueva transferencia.                |
| `PUT`       | `/transferencia/{id}`          | Actualiza una transferencia existente.       |
| `DELETE`    | `/transferencia/{id}`          | Elimina una transferencia.                   |
| `GET`       | `/mensaje`                     | Obtiene todos los mensajes.                  |
| `POST`      | `/mensaje`                     | Crea un nuevo mensaje.                       |
| `PUT`       | `/mensaje/{id}`                | Actualiza un mensaje existente.              |
| `DELETE`    | `/mensaje/{id}`                | Elimina un mensaje.                          |

---

## 📁 Estructura del Proyecto

.
├── tpfinalbackend/      # Proyecto de Spring Boot (Backend)
│   ├── src/main/java/
│   │   ├── controller/  # Controladores REST
│   │   ├── model/       # Entidades JPA
│   │   ├── repository/  # Repositorios Spring Data JPA
│   │   └── service/     # Lógica de negocio
│   └── pom.xml          # Dependencias y configuración de Maven
│
└── tpfinalFrontend/     # Proyecto de Angular (Frontend)
├── src/app/
│   ├── components/  # Componentes reutilizables (navbar, etc.)
│   ├── cliente/     # Módulo y componentes para Clientes
│   ├── gestores/    # Módulo y componentes para Gestores
│   ├── mensajes/    # Módulo y componentes para Mensajes
│   ├── transferencias/ # Módulo y componentes para Transferencias
│   └── services/    # Servicios para la comunicación con la API
└── angular.json     # Configuración del proyecto Angular
