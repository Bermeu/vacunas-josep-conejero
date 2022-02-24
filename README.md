# Ejercicio Node.js Vacunas

Crearás una base de datos en Mongo y una aplicación en Node que servirá tanto para rellenar la base de datos con datos de vacunación como para consultarlos mediante una API.

## Parte 1 - Rellenar datos

1. Crea la base de datos en Atlas y vuelca en ella el contenido de los dos archivos JSON que tienes en este ejercicio.

2. Define los esquemas en Mongoose para Ciudad, Vacuna y Persona. Una persona tiene que tener DNI, centro en el que se ha vacunado, vacuna que se ha administrado, y un array de dosis, que almacenará una o dos fechas.

3. Tu aplicación debe mostrar por consola las siguientes opciones:

- Listar centros de vacunación

- Listar personas vacunadas por centro

- Introducir vacunas

- Introducir personas vacunadas

4. Si el usuario elige "Listar centros de vacunación", debemos mostrarle un listado de centros con sus vacunas.

5. Si el usuario elige "Listar personas vacunadas por centro", debemos hacerle otra pregunta y listar las personas asociadas al centro elegido:

- Centro de vacunación (listado)

6. Si el usuario elige "Introducir vacunas", debemos hacerle tres preguntas por cada nueva vacuna:

- Centro de vacunación (listado)

- Vacuna (listado)

7. Si el usuario elige "Introducir personas vacunadas", debemos hacerle preguntas por cada nueva persona:

- DNI

- Centro de vacunación (listado)

- Vacuna (listado con las vacunas **del centro seleccionado**)

- Fecha de la primera dosis

- Fecha de la segunda dosis (sólo si se ha seleccionado una vacuna con dos dosis)
