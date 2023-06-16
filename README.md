Buscador de Peliculas!

# BuscaPelis

BuscaPelis es una aplicación que te permite buscar información sobre películas utilizando la API de [OMDb](https://www.omdbapi.com). Con BuscaPelis, puedes buscar tu película de preferencia y obtener hasta 10 resultados relacionados con la búsqueda. Puedes acceder a la información detallada de cada película, ver el póster y otra información relevante. Además, puedes guardar películas en tus favoritos y administrarlas fácilmente.

## Tecnologías utilizadas

BuscaPelis fue desarrollada utilizando las siguientes tecnologías:

- **@reduxjs/toolkit** - biblioteca para el manejo del estado de la aplicación.
- **react** - biblioteca de JavaScript para construir interfaces de usuario.
- **react-dom** - biblioteca para renderizar componentes de React en el navegador.
- **react-redux** - biblioteca para integrar Redux con React.
- **react-router-dom** - biblioteca para manejar la navegación y las rutas en una aplicación React.

## Instalación

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/tu-usuario/BuscaPelis.git
   ```

2. Ve al directorio del proyecto:

   ```bash
   cd BuscaPelis
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Configura la API Key de OMDb:

   - Regístrate en [OMDb](https://www.omdbapi.com/apikey.aspx) para obtener tu propia API Key.
   - Crea un archivo `.env` en la raíz del proyecto.
   - Agrega la siguiente línea al archivo `.env` y reemplaza `TU_API_KEY` con tu propia API Key de OMDb:

     ```plaintext
     REACT_APP_OMDB_API_KEY=TU_API_KEY
     ```

5. Inicia la aplicación:

   ```bash
   npm start
   ```

   La aplicación se ejecutará en modo de desarrollo en [http://localhost:3000](http://localhost:3000).

## Uso

Una vez que la aplicación esté en funcionamiento, puedes utilizar el buscador para buscar películas. Escribe el título de la película en el campo de búsqueda y presiona Enter o haz clic en el botón de búsqueda. Se mostrarán hasta 10 resultados relacionados con tu búsqueda.

Para ver más detalles sobre una película, haz clic en la tarjeta de la película deseada. Se abrirá una nueva página con información más detallada, incluyendo el póster y otra información relevante.

Si quieres guardar una película en tus favoritos, simplemente haz clic en el botón "Agregar a favoritos" en la página de detalles de la película. La película se guardará en tu lista de favoritos.

Para administrar tus películas favoritas, haz clic en la pestaña "Favoritos" en la barra de navegación. Verás todas las películas que has guardado como favoritas. Puedes eliminar una película de tus favoritos haciendo clic en el botón "Eliminar" en la tarjeta de la película correspondiente. También puedes hacer clic en el botón "Ver detalles" para obtener más información sobre la película.

¡Disfruta buscando y descubriendo nuevas películas con BuscaPelis!

## Contribución

Si deseas contribuir a BuscaPelis, siéntete libre de abrir un problema o enviar una solicitud de extracción en el repositorio de GitHub: [https://
