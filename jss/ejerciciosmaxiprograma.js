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
 
 
 
 