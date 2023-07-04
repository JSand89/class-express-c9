# Proyecto de CRUD de Libreria - Node express.js MongoDB
<img src="img/programate-academy.png" alt="Logo Programate">

## Descripción

Este proyecto es un ejemplo de una API RESTful desarrollada con Express.js que permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en un modelo de libreria. Está diseñado con un enfoque académico para que los aprendices de programación backend puedan utilizarlo como punto de partida y comenzar a trabajar sobre él.

## Funcionalidades

- Obtener todas los autores disponibles
- Obtener una autor por su ID
- Crear un nuevo autor
- Actualizar una autor existente
- Eliminar una autor

### Pendientes
- CRUD Libros
- CRUD Instancias del Libro
- CRUD Genero

## Tecnologías utilizadas

- JavaScript
- Node
- Expresss
- MongoDB
- Mongoose 

## Instalación

1. Clona este repositorio en tu máquina local:

2. Navega al directorio del proyecto:

3. Instala las dependencias necesarias:

npm i


## Uso

1. Inicia la aplicación:

node index.js

2. Accede al Hola Mundo:

http://localhost:3005/


3. Desde postman puedes probar los siguentes endpoints
- localhost:3005/api/author
- localhost:3005/api/author/create con el siguiente json
```
{
    "first_name":"Isaac",
    "family_name" :"Asimov"
}
```
- localhost:3005/api/author/'id'
- localhost:3005/api/author/delete/'id'
- localhost:3005/api/author/update/'id'
```
{
    "first_name":"Isaac",
    "family_name" :"Asimov"
}
```

## Contacto

Si tienes alguna pregunta o sugerencia o quieres el workbook para desarrollar este proyecto, no dudes en contactarme en [jsanchez@educamas.com.co](jsanchez@educamas.com.co).

