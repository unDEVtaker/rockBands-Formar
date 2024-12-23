# Práctica Integradora - Bandas de Música

## Consigna

### 1. Utilizando express-generator crea un nuevo proyecto con nombre a elección.
a. Las vistas deberán ser manejadas mediante EJS.  
b. El servidor es ejecutado con nodemon.

### 2. Descarga la información de bandas de música de aquí para implementarlo en el nuevo proyecto.
a. Crea una carpeta `/db` que contendrá el módulo de información de las bandas.  
b. Dentro de la carpeta crea el archivo `index.js`.  
c. Dentro del archivo creado en el punto anterior deberás crear una variable `bandas` que contenga un objeto literal.  
d. La primera propiedad dentro del objeto literal deberá llevar el nombre "lista" y dentro de ella colocaremos el array con la información de las bandas.  
e. No olvides exportar el módulo.  
f. Descarga de aquí las imágenes de las bandas y coloca la carpeta dentro de `/public`.

### 3. En la carpeta de routes crea un archivo con las siguientes rutas:
a. Una ruta principal que deberá mostrar el listado de bandas.  
b. Una ruta que reciba un id y muestre la banda que tenga ese id como valor.  
c. Una ruta que reciba un género y muestre las bandas que pertenecen a ese género.  
d. Recuerda escribir el código correspondiente en `app.js` para que utilices las rutas definidas.

### 4. Crea la carpeta controllers y dentro de esta crea un archivo que sirva como controlador de las bandas. Este controlador deberá actuar como nexo entre las rutas y las vistas a mostrar de cada ruta generada en el punto 3.
a. Crea una variable `db` y requiere la información de las bandas para poder usarla en cada uno de los métodos.  
b. Define un método que tome el listado completo de bandas, utilice una vista llamada `listadoBandas` y envíe el listado completo como dato.  
c. Define un método que tome el id enviado como parámetro de la ruta, encuentre la banda que contenga ese id y muestre la vista `detalleBanda` con los datos encontrados.  
d. Define un método que tome un género como parámetro, encuentre aquellas bandas que pertenezcan a ese género y muestre la vista `porGenero`.

### 5. Dentro de la carpeta views crea las siguientes vistas utilizando EJS:
a. `listadoBandas` → Deberás utilizar esta vista para mostrar el listado completo de las bandas.
   i. Debes mostrar al menos el nombre e imagen de la banda.  
   ii. Al hacer click en alguna de las bandas debe redirigir al detalle de la misma.

b. `detalleBanda` → Deberás utilizar esta vista para mostrar el detalle de una banda.
   i. Debes mostrar todos los datos de la banda (nombre, género, cantidad de integrantes, imagen, sus mejores canciones, etc).  
   ii. Al hacer click en el género de una banda debe redirigir al listado de bandas que pertenezcan a ese género.  
   iii. Validar que si el id de la banda que está en la URL no existe se muestre un mensaje ilustrativo.

c. `porGenero` → Deberás utilizar esta vista para mostrar las bandas que pertenecen a un mismo género.
   i. Al clickear una banda de la lista por género, deberá redirigir al detalle de la misma.  
   ii. Validar que si no hubiese bandas de dicho género se muestre un mensaje ilustrativo.
