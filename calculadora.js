function renderizarGUI(){
    
    //DIV CALCULADORA
    //1. crear el elemento
    const divCalculadora = document.createElement("div");
    //2. Agregar atributos (opcional)
    divCalculadora.setAttribute("id", "calculadora");//para añadir atributos al div
    divCalculadora.setAttribute("class", "text-center");
    divCalculadora.setAttribute("style", "width:50%; margin:0 auto;");
    //3. Insertar el elemento en el DOM
    document.body.appendChild(divCalculadora);

    //DIV PANTALLA
    const divPantalla = document.createElement("div");
    divPantalla.setAttribute("id", "divPantalla");
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
    


}

renderizarGUI() //se ejecuta al iniciar pagina

