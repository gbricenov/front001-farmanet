## Descripción

Proyecto de aplicativo web mediante ReactJS.

## Ambiente

El proyecto esta orientado a satisfacer 2 ambientes.
* local/development
* production

Local/development es para ser ejecutado en ambientes locales mediante el archivo de configuraciones .env.development.
Production es utilizado para ser montado en ambientes de DEV/QA/Prod. Production es utilizado para encapsular las configuraciones de entorno y para la creacion de un bundle único en los ambientes, peritiendo de esta forma recrear un ambiente productivo y mejorar el uso de recursos.

NOTA: El uso de GENERATE_SOURCEMAP en ambientes de DEV/QA/Prod es totalmente obligatorio.

## Variables de entorno 

* GENERATE_SOURCEMAP: permite no generar archivos de mapeo que permitan mostrar el código fuente en ambientes productivos.
* REACT_APP_METADATA_GRAPHQL: rest endpoint para carga de metadata, información del trabajador y del empleador.

## App.js

mediante App.js en root/ u mediante express, el sitioweb es  servido en ambientes de dev/qa/prod. el bundle generado por la compilación de react, además de su contenido estatico, es servido por express simplificando de esta manera el montaje. Esto mismo puede ser hecho con nginx o nginx+ docker en el futuro para mejorar las prestaciones.

## Ejecución

Detalles puden ser vistos en package.json, sin embargo estos son los comandos recomendados:

```bash
#local
npm run dev

#dev/qa/prod
npm run build
npm start
```