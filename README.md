<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en Desarrollo

1. Clonar el repo

2. Ejecutar

```
yarn install
```

3. Tener CLI instalado

```
npm i -g @nestjs/cli
```

4. Levantar BD

```
docker-compose up -d
```

5. Crear las variables de entorno **.env** usando el **.env.example** como ejemplo

6. Lavantar la app en desarrollo

```
yarn start:dev
```

7. Reconstruir la BD usando el SEED

```
GET http://localhost:3000/api/v2/seed
```

---

## Stack Usado

- MongoDB
- Nest
