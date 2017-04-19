var coders = [];

/*******Creado el objeto coder******/
function Coder(id,nombre,foto){
    this.id = id;
    this.nombre = nombre;
    this.foto = foto;
}
/*******Funcion para imprimir todas las coders*********/
function printCoderHtml(parent){
    parent.innerHTML = "";
    coders.forEach(function(elemento){
        parent.appendChild(createCodeHtml(elemento.id,elemento.nombre,elemento.foto));
    });
}
/*********Funcion para crear el dom para mostrar la lista de coders***********/
function createCodeHtml(id,txtNombre,srcFoto){
    var df = document.createDocumentFragment();
    var li= document.createElement("li");
    li.setAttribute("class","box");
    var img = document.createElement("img");
    img.setAttribute("src",srcFoto);
    img.setAttribute("class","img-box");
    var span = document.createElement("span");
    span.setAttribute("class","span-nombre");
    var span2 = document.createElement("span");
    span2.setAttribute("class","nombre");
    span2.appendChild(document.createTextNode(txtNombre));

    li.appendChild(img);
    li.appendChild(span);
    span.appendChild(span2);

    df.appendChild(li);
    return df;
}

window.addEventListener('load', function () {
  var allCoders = document.getElementById("listaCoders");

    /******Registro de alumnas */
      var coderLima1 = new Coder(1,"Fiorela Quispe","assets/img/1.png");
      var coderLima2 = new Coder(2,"Maria Lourdes","assets/img/2.png");
      var coderLima3 = new Coder(3,"Leydi Maldonado","assets/img/3.png");
      var coderLima4 = new Coder(4,"Yesenia","assets/img/4.png");
      var coderLima5 = new Coder(5,"Miriam Mendoza","assets/img/5.png");
      var coderLima6 = new Coder(6,"Elizabeth Condori","assets/img/6.png");

      coders.push(coderLima1);
      coders.push(coderLima2);
      coders.push(coderLima3);
      coders.push(coderLima4);
      coders.push(coderLima5);
      coders.push(coderLima6);

    /*****Fin del registro de alumnas*****/

    printCoderHtml(allCoders);

});
