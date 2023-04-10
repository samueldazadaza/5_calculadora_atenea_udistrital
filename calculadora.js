// TO DO: 
// 1. Boton de borrar pantalla.
// 2. hacer try catch para una expresion no valida


var botones = [
    "7", "8", "9", "+",
    "4", "5", "6", "-",
    "1", "2", "3", "*",
    "0", ".", "=", "/",
    "C"
];



function renderizarGUI(){
    //DIV CALCULADORA
    //1. crear el elemento
    const divCalculadora = document.createElement("div");
    //2. Agregar atributos (opcional)
    divCalculadora.setAttribute("id", "calculadora");//para añadir atributos al div
    divCalculadora.setAttribute("class", "text-center border p-5 rounded-4 mt-3 bg-light shadow");
    divCalculadora.setAttribute("style", "width:300px; margin:0 auto;");
    //3. Insertar el elemento en el DOM
    document.body.appendChild(divCalculadora);

    //DIV PANTALLA
    const divPantalla = document.createElement("div");
    divPantalla.setAttribute("id", "divPantalla");
    divPantalla.setAttribute("class", "my-3")
    divCalculadora.appendChild(divPantalla);

    //PANTALLA
    const pantalla = document.createElement("input");
    pantalla.setAttribute("id", "pantalla");
    //añadir mas atributos
    pantalla.setAttribute("type", "text");
    pantalla.setAttribute("value", "0");
    pantalla.setAttribute("disabled", "true");
    pantalla.setAttribute("class", "form-control text-right");
    divPantalla.appendChild(pantalla);




    //DIV BOTONES
    const divBotones = document.createElement("div");
    divBotones.setAttribute("id", "botones");
    divCalculadora.appendChild(divBotones);

    //pintar botones
    for (let i=0; i<botones.length; i++){
        //crear filas (cada vez que pinto 4 botones, hacer fila)
        if(i%4==0){
            const divFila = document.createElement("div");
            divFila.setAttribute("class", "row");
            divBotones.appendChild(divFila);
        }

        let boton = document.createElement("button");
        boton.setAttribute("id", "boton"+botones[i]);
        boton.setAttribute("class", "btn btn-info col-3 border-white")
        boton.innerHTML=botones[i]

        //agregar un "escuchador de eventos"
        boton.addEventListener("click", function(){
            procesarEvento(boton);
        })

        divBotones.lastChild.appendChild(boton); //para crear al final de la division


        


    }
    
    
}



function procesarEvento(boton){
    //console.log(boton.innerHTML)

    let miPantalla = document.getElementById("pantalla");

    if(miPantalla.value=="0"){
        miPantalla.value="";
    }
    if(boton.innerHTML != "="){
        miPantalla.value += boton.innerHTML; //esto es igual a: miPantalla.value = miPantalla.value + boton.innerHTML;

    //logica boton borrar pantalla
    if(boton.innerHTML == "C"){
        miPantalla.value = "";
    }
    }else{
        //Procesar la expresión con math.js
        try {
            let resultado = math.evaluate(miPantalla.value)
            miPantalla.value=resultado;
    
        } catch (error) {
            miPantalla.value = "Error en la expresión matematica"
        }
    }


}

renderizarGUI() //se ejecuta al iniciar pagina

