//********************************
Primero lo primero hago el init
npm init

//********************************
Ahora te creas las carpetas
src 
    configuracion  
    controladores
    daos
    middleaware
    modelos
    repositorios
    rutas
index.ts

//********************************
Y ahora a instalar paquetes!!! uffff
npm i cors -> Bloqueo de datos
npm i morgan -> Salida de datos
npm i express -> Motor de dasarrollo
npm i jsonwebtoken -> seguridad
npm i pg-promise -> nos permite conectar con posgrests

npm i @types/cors --save-dev ->
npm i @types/morgan --save-dev
npm i @types/express --save-dev
npm i @types/jsonwebtoken --save-dev
npm i nodemon --save-dev


si te equivovaste : npm uninstall elPaquete
//************************************

Ahora vamos a crear nuestros propios scripts
"dev" : "nodemon build/index.js",
"build": "tsc -w" 

//*************************************
Ahora le vamos a decir que usaremos TypeScript
tsc --init hacerlo en cmd

//****************************************
en el tsconfig.json asegurarse de 
"targe": "es2016"
"ourDir": "./build"
linea 50

//************************************** 
Cuando se borra la carpeta se coloca:
npm i

para iniciar el servicio, comenzar a iniciar los servicios
npm run build(nombre del tsc -w)
despues se inicia el otro servicio
npm run dev(nombre de nodemon build/index.js )
/OneDrive/Documentos/Santiago Universidad/6 SEMESTRE/Desarrollo Servicios/DOS_003 
//*************************************
repositorios-> Daos -> controlador -> Rutas


//**************************************
la carpeta build es la que se sube a los servidores tales como AWS o AZURE
