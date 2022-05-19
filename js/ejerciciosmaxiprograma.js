//1)-Hacer un programa para solicitar por teclado un número y luego devolver su
//valor elevado al cubo.

const numeroAlCubo=(n=undefined) =>{
    if(n === undefined) console.warn(`El valor está vacío`);
    if(typeof n !== "number") return console.error(`El valor de "${n}" no es un numero`);
    
    return console.info(`El numero ${n} elevado al cubo es: ${n*n}`)   
 }
 
 //numeroAlCubo(6)
 
 /*3. Hacer un programa que permita ingresar el año actual y el año de la fecha de
 nacimiento de una persona y luego calcule y emita por pantalla su edad.*/
 
 const edadPersona =(born=undefined) => {
     if (born === undefined) { console.warn("No ingresaste ninguna fecha")}
     if (!(born instanceof Date)) {(console.error(`"${born}" NO es formato de fecha valido`))}
     
     let edad = new Date().getTime() - born.getTime()
     let years= 1000*60*60*24*365
     let humanYears = (Math.floor(edad/years))
 
      return (Math.sign(humanYears)=== -1) 
      ? console.info(`Faltan ${Math.abs(humanYears)} para el ${born.getFullYear()}.`)
      : (Math.sign(humanYears) === 1)
      ? console.info  (`Han pasado ${Math.abs(humanYears)} años desde el ${born.getFullYear()}.`)
      :console.info  (`Estamos en el año actual ${born.getFullYear()}.`)
 }
 
//edadPersona(new Date (3529,11,04))
 
 
 /*4. Hacer un programa que permita ingresar los kilómetros existentes entre dos
 ciudades y la velocidad promedio de un vehículo. Calcular y emitir por pantalla
 el tiempo aproximado que demandará llegar de un punto a otro teniendo en
 cuenta los datos ingresados.*/
 
 
 const timeToArrive =(distance=undefined,km=undefined) =>{
     if (distance=== 0 || km=== 0) {return console.warn(`NO puedes ingresar 0 como valor`)}
     if (distance=== undefined || km ===undefined) {return console.warn(`NO pueden haber valores vacíos`)}
     if(typeof distance !== "number"){return console.error(`El valor "${distance}" NO es un numero`)}
     if(typeof km !== "number"){return console.error(`El valor "${km}" NO es un numero`)}
     if(Math.sign(km)===-1) {return console.error(`El valor ${km} NO puede ser negativo`)}
     if(Math.sign(distance)===-1) {return console.error(`El valor ${distance} NO puede ser negativo`)}

     console.info(`Se tardan ${distance/km}hs en recorrer ${distance}km de distancia a la velocidad de ${km}/h`)

 }
 
 //timeToArrive(100)

 /*
 5. Una casa de computación paga a sus empleados un sueldo fijo de ARS15000
más una comisión del 5% sobre el total facturado por cada empleado. Hacer un
programa para ingresar el total facturado por un empleado y que luego calcule
y emita por pantalla el sueldo total a cobrar por el mismo.
 */

const sellComition =(sell=undefined) =>{
    
    if (sell=== undefined) {return console.warn(`NO ingresaste ningun valor`)}
    if(typeof sell !== "number"){return console.error(`El valor "${sell}" NO es un numero`)}
    if(Math.sign(sell)===-1) {return console.error(`El valor NO puede ser negativo`)}


    console.info(` La comision por ventas es es: $${sell*0.05}, la comision mas el salario es: $${sell*0.05+1500}`)

}

sellComition(-5)

const promedio =(n1=undefined,n2=undefined,n3=undefined)=>{
    if (n1=== undefined||n2=== undefined||n3=== undefined) {return console.warn(`NO ingresaste ningun valor`)}
    if(typeof n1 !== "number"){return console.error(`El valor "${n1}" NO es un numero`)}
    if(typeof n2 !== "number"){return console.error(`El valor "${n2}" NO es un numero`)}
    if(typeof n3 !== "number"){return console.error(`El valor "${n3}" NO es un numero`)}
    if(Math.sign(n1)===-1||Math.sign(n2)===-1||Math.sign(n3)===-1) {return console.error(`El valor NO puede ser negativo`)}

    console.info(`El promedio de las notas ${n1} + ${n2} + ${n3}  es: ${(n1+n2+n3)/3}`)

}

//promedio(8,6,5)