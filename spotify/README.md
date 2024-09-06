# spotify4tip
 clonando spotify web

Angular CLI: 18.2.3
Node: 22.6.0
Package Manager: npm 10.8.2
OS: win32 x64

Angular: 18.2.3
... animations, cli, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1802.3
@angular-devkit/build-angular   18.2.3
@angular-devkit/core            18.2.3
@angular-devkit/schematics      18.2.3
@schematics/angular             18.2.3
rxjs                            7.8.1
typescript                      5.5.4
zone.js                         0.14.10


# Comandos
ng new [nombreCarpeta/proyecto] --routing --style=css {le indicamos si al routing y el tipo de estilo}
ng serve (ng s) {indicamos que se inicie el servidor en localhost}
ng s --port=4100 {cambiamos la direccion}
ng s --host=0.0.0.0 --port=4100 {Le indicamos el puerto y que cree un host local, cualquier dispositivo en la red local podra conectarse utilizando la ip del pc donde se corre}

# Apuntes
Algunas veces cuando queremos importar cosas en nuestro angular del tipo json podemos tener problemas para es nos iremos a la parte de tsconfig.json en compilerOptions = "resolveJsonModule": true, listo
