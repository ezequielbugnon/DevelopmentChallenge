# DevelopmentChallenge

_Este proyecto es un desafio desarrollado para Improve-in_

## Comenzando 🚀

_En primer lugar debera clonar el repositorio y descargar los paquetes ejecutando npm i y luego npm run start_


### Pre-requisitos 📋

_Deberas tener instalado Node js y npm_

### Instalación 🔧

_Una vez clonado o descargado el repositorio por favor ejecuta en la raiz del proyecto:_

_Paso uno_

```
npm install 
```

_Y luego_

```
npm run start
```

_De este modo ya tienes la api corriendo en http://localhost:3000/api_moviesapp/movies_

## Ejecucion

_A partir de aqui se listan los endpoint y sus usos_


## rutas de usuario

_Rutas para autenticar usuarios_

### Methods POST

1. http://localhost:3000/api_moviesapp/user/register

_Ejemplo_

```
Por favor envia los siguiente datos: 
    Por body -> {
        "name": "example",
        "email": "example@gmail.com",
        "password": "123456"
    }
```

_Retorna token de usuario para ser utilizado como cabezera en las rutas protegidas_


2. http://localhost:3000/api_moviesapp/user/login

_Ejemplo_

```
Por favor envia los siguiente datos: 
    Por body -> {
        "email": "example@gmail.com",
        "password": "123456"
    }
```
_Si te encuentras registrado, retorna token de usuario para ser utilizado como cabezera en las rutas protegidas_


### Methods GET

1. http://localhost:3000/api_moviesapp/user/me

_Ejemplo_

```
Por favor envia los siguiente datos:
    Por cabezera -> Authorization: Token de usuario
```
_Retorna datos de usuario vinculado al token_

## rutas de director

_Rutas de director_ 

### Methods POST 

1. http://localhost:3000/api_moviesapp/directors/add

_Ejemplo_

```
Por favor envia los siguiente datos: 
    Por cabezera -> Authorization: Token de usuario
    Por body -> {
	    "name":"nombre de director"
    }
```


### Methods GET

1. http://localhost:3000/api_moviesapp/directors

_Retorna todos los directores_

2. http://localhost:3000/api_moviesapp/directors/:idDirector -> ejemplo : 60511c5ffa528726c634428c

_Retorna un director_


### Methods DELETE 

1. http://localhost:3000/api_moviesapp/directors/delete/idDirector -> ejemplo : 60511c5ffa528726c634428c


_Ejemplo_

```
Por favor envia los siguiente datos: 
    Por cabezera -> Authorization: Token de usuario
```

## Rutas de Peliculas 

_Rutas de la peliculas_

### Methods GET

1. http://localhost:3000/api_moviesapp/movies 

_Retorna todas las peliculas_

2. http://localhost:3000/api_moviesapp/movies/:id-movie -> ejemplo : 6051367766114b36341c5d33

_Retorna una pelicula segun su id_

3. http://localhost:3000/api_moviesapp/movies/search/:search -> ejemplo : back the future

_Retorna lo que coincida con la busqueda_


### Methods POST

1. http://localhost:3000/api_moviesapp/movies/add 

_Ejemplo_

```
Por favor envia los siguiente datos: 
    Por cabezera -> Authorization: Token de usuario
    Por body -> {
        "name": "nombre de la pelicula",
        "director": "Director ID"
    }
```

2. http://localhost:3000/api_moviesapp/movies/addActor/:idMovie -> ejemplo : 60528b0bbcbf140ec9984788

_Ejemplo_

```
Por favor envia los siguiente datos: 
    Por cabezera -> Authorization: Token de usuario
    Por body -> {
	    "actorID":"6052dd45b49678211483fe30"
    }
```

3. http://localhost:3000/api_moviesapp/movies/addImage/:idMovie -> ejemplo : 60528b0bbcbf140ec9984788

_Ejemplo_

```
Por favor envia los siguiente datos: 
    Por cabezera -> Authorization: Token de usuario
    Por multipart -> image : file
```

### Methods DELETE

1. http://localhost:3000/api_moviesapp/movies/delete/:idMovie -> ejemplo : 6052890709820e0dd4f64738

_Ejemplo_

```
Por favor envia los siguiente datos: 
    Por cabezera -> Authorization: Token de usuario

```

### Methods PUT

1. http://localhost:3000/api_moviesapp/movies/edit/:idMovie -> ejemplo : 6052890709820e0dd4f64738

_Ejemplo_

```
Por favor envia los siguiente datos: 
    Por cabezera -> Authorization: Token de usuario
    Por body -> {
	   "name": "nombre de la pelicula"
    }
```

## Actor 

_Rutas de Actores_ 

### Methods GET

1. http://localhost:3000/api_moviesapp/actors

_Retorna todos los actores y sus ids_

2. http://localhost:3000/api_moviesapp/actors/:idActor -> ejemplo : 6052dd45b49678211483fe30

_Retorna un actor_

### Methods POST

1. http://localhost:3000/api_moviesapp/actors/add

_Ejemplo_

```
Por favor envia los siguiente datos: 
    Por cabezera -> Authorization: Token de usuario
    Por body -> {
        "name": "nombre del actor"
    }
```


### Methods DELETE

1. http://localhost:3000/api_moviesapp/actors/delete/idActor -> ejemplo : 6052e440cf3ba32697677d98

```
Por favor envia los siguiente datos: 
    Por cabezera -> Authorization: Token de usuario
```

## Autores ✒️


* **Bugnon ezequiel** - *Trabajo Inicial* - [bugnonezequiel](https://github.com/bugnonezequiel)

