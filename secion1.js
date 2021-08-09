//let birthday = "12/02";
// operador ternario 

// let massage = birthday === ? "feliz cumpleaños" : "hoy no es tu compleaños";

//let numero = 7;



    //let primo = (numero % numero === 1) && (numero % 1 === numero) ?  
    //console.log("es numero primo") : console.log("No es numero primo");

    
    
    //console.log(numero)
    //{
    //    if ((numero / numero === 1) && (numero / 1 = numero)){

    //        console.log("Es un numero primo");

     //   }

     //   else {

        //    console.log("No es un numero primo")

      //  }

// 1-10

for(let numeroa = 1; numeroa <= 7; numeroa++)

{
    if (numeroa <= 3) 
    {
        console.log(numeroa + " Es un numero primo")
    }
    else if ((numeroa % 2) !=0 ) { 

        console.log(numeroa + " Es un numero primo")
    }

    else {console.log(numeroa + " No es un numero primo")}

}

for(let numero = 8 ; numero <= 100; numero++) 
{
    

    if ( (numero%2) != 0 && (numero%3) != 0 && (numero%5) != 0 && (numero%7) !=0 )
    {
    console.log(numero + " Es un numero primo");

    } 

 
    else

    { console.log(numero + " No es un numero primo "); }

}