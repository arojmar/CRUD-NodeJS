# CRUD NodeJS
CRUD de una base de datos con NodeJS (EJS)

Se trata de crear una pequeña base de datos, donde los usuarios tendra asociados 1 movil con un color.

Estos usuarios tendran que poder hacer todo el ciclo <strong>CRUD (Create, Read, Update & Delete)</strong> de la base de datos.

La ruta principal (localhost:3000/) es una pagina de inicio que da la bienvenida.

Despues hay un enrutado hacia <strong>'/users'</strong> donde nos aparecera un formulario de registro de usuarios y terminales, y que se ira actualizando conforme se van introduciendo usuarios en la base de datos, y se mostrara en una tabla debajo del formulario de registro.

Dispondremos de dos botones, que nos permitiran eliminar o editar, este segundo caso, nos redirigira a una pagina de modificacion donde se cargaran los datos del usuario a modificar, y se podran actualizar en el mismo.

Toda la web sera responsive, teniendo como principal diferencia la visualizacion movil, donde la tabla de registros se convertira en una coleccion de cards.

Tecnologias usadas:
  - NodeJS: 
    > Express
  - Express
    > View = EJS
  - Javascript (ES6)
  - HTML 5
  - CSS 3
  - Bootstrap 5
  - MYSQL
  
  La base de datos consta de dos tablas con una relacion 1:M, en la cual el 'phone_id' es la clave foranea.

