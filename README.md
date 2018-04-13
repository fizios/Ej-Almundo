# Ejercicio Almundo


## Como ejecutar el ejercicio

### Necesario
Se esta usando node [NodeJs](https://nodejs.org/en/) 8.4.0, como se indica en el parámetro engine del package.json.

### Api Rest

Para levantar la api se deberá:
1. ir al path ./server
2. ejecutar el comando ``` npm install  ```
3. ejecutar el comando ``` npm start  ```

Tener en cuenta que el servidor va a levantarse en el puerto 8081.

### Front
Para levantar el front se deberá:
1. ir al path ./client
2. ejecutar el comando ``` npm install  ```
3. ejecutar el comando ``` npm start  ```

En el archivo webpack.config.dev.js(development).

## Tech

### Front

* [ReactJs](https://facebook.github.io/react)
* [Redux](http://redux.js.org/)
* [Webpack](https://webpack.js.org/)
* [Babel](https://babeljs.io)

### Api

* [Express](http://expressjs.com)

## Test
Para el chequeo de sintaxis/semántica del código se uso eslint, en el front end se usaron las reglas que propone como Standard [airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb), y para el back se usaron la mayoría de las rules de eslint del repo oficial de node.