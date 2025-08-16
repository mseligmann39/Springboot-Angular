# Springboot + Angular

Breve descripción de una o dos líneas sobre qué hace el proyecto. Por ejemplo: "Aplicación web completa para la gestión de clientes, gestores y transferencias bancarias, construida con Spring Boot para el backend y Angular para el frontend."

<img width="1722" height="541" alt="image" src="https://github.com/user-attachments/assets/06cd0811-4eb5-4897-ba28-e5cd62318037" />


## 📋 Tabla de Contenidos
* [Tecnologías Utilizadas](#tecnologías-utilizadas)
* [Características Principales](#características-principales)
* [Instalación y Puesta en Marcha](#instalación-y-puesta-en-marcha)
* [Uso de la Aplicación](#uso-de-la-aplicación)
* [Estructura del Proyecto](#estructura-del-proyecto)

---

## ✨ Tecnologías Utilizadas

Aquí listarás todas las herramientas y lenguajes que has usado. Es una sección muy visual y rápida de leer para los reclutadores.

* **Backend:**
    * Java (Versión 24 o la que uses)
    * Spring Boot
    * Maven
    * JPA (Hibernate)
    * MySQL
* **Frontend:**
    * Angular 
    * TypeScript
    * HTML5 / CSS3
* **Base de Datos:**
    * MySQL (Administrada con XAMPP y phpMyAdmin)
* **Herramientas:**
    * Git & GitHub
    * Postman (o la herramienta que uses para probar la API)

---

## 🚀 Características Principales

Enumera las funcionalidades clave que tu aplicación tiene implementadas.

* **Gestión de Clientes:** CRUD completo (Crear, Leer, Actualizar, Eliminar) para la entidad de clientes.
* **Gestión de Gestores:** CRUD completo para la entidad de gestores.
* **... (Añade aquí las otras entidades cuando las implementes)**
* **API RESTful:** Backend robusto que expone endpoints claros y funcionales.
* **Interfaz Reactiva:** Frontend desarrollado como una Single Page Application (SPA) para una experiencia de usuario fluida.

---

## 🔧 Instalación y Puesta en Marcha

Esta es la sección más importante. Guía a otra persona (¡o a tu yo del futuro!) para que pueda ejecutar tu proyecto sin problemas. Sé muy claro y específico.

### **Pre-requisitos**
* Tener instalado [Node.js y npm](https://nodejs.org/)
* Tener instalado el [JDK (Java Development Kit)](https://www.oracle.com/java/technologies/downloads/) (Versión 17 o superior)
* Tener instalado [Git](https://git-scm.com/)
* Tener instalado y corriendo un servidor de MySQL (por ejemplo, con [XAMPP](https://www.apachefriends.org/es/index.html))

### **Pasos para la Instalación**

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/tu-usuario/tu-repositorio.git](https://github.com/tu-usuario/tu-repositorio.git)
    cd tu-repositorio
    ```

2.  **Configurar la Base de Datos:**
    * Abre phpMyAdmin (o tu gestor de BBDD preferido).
    * Crea una nueva base de datos llamada `databasemodule5` (o el nombre que uses en tu `application.properties`).
    * (Opcional) Si tienes un script `.sql` para crear las tablas e insertar datos de prueba, indica aquí cómo importarlo.

3.  **Levantar el Backend (Spring Boot):**
    * Navega a la carpeta del backend: `cd tpfinalbackend`
    * (Opcional, primera vez) Limpia e instala las dependencias con Maven: `mvnw clean install`
    * Ejecuta la aplicación: `mvnw spring-boot:run`
    * El backend estará corriendo en `http://localhost:8080`.

4.  **Levantar el Frontend (Angular):**
    * Abre una **nueva terminal**.
    * Navega a la carpeta del frontend: `cd tpfinalFrontend`
    * Instala las dependencias de npm: `npm install`
    * Ejecuta la aplicación: `ng serve`
    * El frontend estará corriendo en `http://localhost:4200`.

---

## 📖 Uso de la Aplicación

Una vez que todo esté corriendo, ¿qué debe hacer el usuario?

* Abre tu navegador y ve a `http://localhost:4200`.
* La aplicación cargará la lista de clientes por defecto.
* Puedes usar los botones para crear, editar o eliminar registros.
* Navega a las diferentes secciones (cuando implementes el routing) para gestionar las otras entidades.

---

## 📁 Estructura del Proyecto

(Opcional, pero da un toque muy profesional)

.
├── tpfinalbackend/      # Proyecto de Spring Boot
│   ├── src/main/java/   # Código fuente de Java
│   │   ├── controller/  # Controladores REST
│   │   ├── model/       # Entidades JPA
│   │   ├── repository/  # Interfaces de Spring Data JPA
│   │   └── service/     # Lógica de negocio
│   └── pom.xml          # Dependencias de Maven
│
└── tpfinalFrontend/     # Proyecto de Angular
├── src/app/         # Código fuente de Angular
│   ├── components/  # Componentes de la UI (listas, formularios)
│   ├── services/    # Servicios para la comunicación con la API
│   └── ...
└── angular.json     # Configuración del proyecto Angular
