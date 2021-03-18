# DevelopmentChallenge

_This project is a challenge for Improve-in_

## Starting 🚀

_First, you should clone the repository and download the packages_

_Second, you should execute npm i and npm run start_


### Pre-requirements  📋

_You should have installed Node js y npm_

### Installation 🔧

_Once you cloned or download the repository, runing in this root project:_

_First_

```
npm install 
```

_And then_

```
npm run start
```

_this app will be running in port: http://localhost:3000/api_moviesapp/movies_

## Execution

_List of endpoints_


## Routes of users 

_Routes for authentication users_

### Methods POST

1. http://localhost:3000/api_moviesapp/user/register

_Example_

```
Please, send this data: 
    By body -> {
        "name": "example",
        "email": "example@gmail.com",
        "password": "123456"
    }
```

_Returns token of users to be used with headers in the protected routes_


2. http://localhost:3000/api_moviesapp/user/login

_Example_

```
Please, send this data: 
    By body -> {
        "email": "example@gmail.com",
        "password": "123456"
    }
```
_If you are registered, returns token of users to be used with headers in the protected routes__


### Methods GET

1. http://localhost:3000/api_moviesapp/user/me

_Example_

```
Please, send this data:
    by headers -> Authorization: Token of user
```
_Returns data of user linked to the token_

## Routes of director

### Methods POST 

1. http://localhost:3000/api_moviesapp/directors/add

_Example_

```
Please, send this data:
    by headers -> Authorization: Token of user
    by body -> {
	    "name":"name of the director"
    }
```


### Methods GET

1. http://localhost:3000/api_moviesapp/directors

_Returns all directors_

2. http://localhost:3000/api_moviesapp/directors/:idDirector -> example : 60511c5ffa528726c634428c

_Returns one director_


### Methods DELETE 

1. http://localhost:3000/api_moviesapp/directors/delete/idDirector -> example : 60511c5ffa528726c634428c


_Example_

```
Please, send this data:
    By headers -> Authorization: Token of user
```

## Routes of movies


### Methods GET

1. http://localhost:3000/api_moviesapp/movies 

_Returns all movies_

2. http://localhost:3000/api_moviesapp/movies/:id-movie -> example : 6051367766114b36341c5d33

_Returns one movie_

3. http://localhost:3000/api_moviesapp/movies/search/:search -> example : back the future

_Returns the data that is matched_


### Methods POST

1. http://localhost:3000/api_moviesapp/movies/add 

_Example_

```
Please, send this data: 
    By headers -> Authorization: Token of user
    By body -> {
        "name": "name of the movie",
        "director": "Director ID"
    }
```

2. http://localhost:3000/api_moviesapp/movies/addActor/:idMovie -> example : 60528b0bbcbf140ec9984788

_Example_

```
Please, send this data:
    By headers -> Authorization: Token of user
    By body -> {
	    "actorID":"6052dd45b49678211483fe30"
    }
```

3. http://localhost:3000/api_moviesapp/movies/addImage/:idMovie -> example : 60528b0bbcbf140ec9984788

_Example_

```
Please, send this data:
    By headers -> Authorization: Token of user
    by multipart -> image : file
```

### Methods DELETE

1. http://localhost:3000/api_moviesapp/movies/delete/:idMovie -> example : 6052890709820e0dd4f64738

_Ejemplo_

```
Please, send this data:
    By headers -> Authorization: Token of user

```

### Methods PUT

1. http://localhost:3000/api_moviesapp/movies/edit/:idMovie -> example : 6052890709820e0dd4f64738

_Example_

```
Please, send this data:
    By headers -> Authorization: Token of user
    By body -> {
	   "name": "name of the movie"
    }
```

## Actor 


### Methods GET

1. http://localhost:3000/api_moviesapp/actors

_Returns all actors_

2. http://localhost:3000/api_moviesapp/actors/:idActor -> ejemplo : 6052dd45b49678211483fe30

_Returs one actor_

### Methods POST

1. http://localhost:3000/api_moviesapp/actors/add

_Example_

```
Please, send this data: 
    By headers -> Authorization: Token of user
    By body -> {
        "name": "name of the actor"
    }
```


### Methods DELETE

1. http://localhost:3000/api_moviesapp/actors/delete/idActor -> ejemplo : 6052e440cf3ba32697677d98

```
Please, send this data: 
    By cabezera -> Authorization: Token de usuario
```

## Autores ✒️


* **Bugnon ezequiel** - *Trabajo Inicial* - [bugnonezequiel](https://github.com/bugnonezequiel)

