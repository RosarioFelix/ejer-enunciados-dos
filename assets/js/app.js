window.addEventListener("load",function() {
  var nombres=["Andrea Cabrera", "Ariadna Izaguirre", "Carito Juarez", "Cristy Castro","Karol Orillo","Paola Ortiz","Teresa Lara"];
  var body= document.getElementById('body');
//TITULO
  var letra =document.createElement("h1");
  letra.innerText="Nuestras Coders";
  body.appendChild(letra);

  var raya  = document.createElement("div");
  raya.classList.add("negro");
  body.appendChild(raya);

  for(var i = 1; i<=6;i++){

    var contenedorImg= document.createElement("div");
    contenedorImg.classList.add("contenedor");
    var grid = document.createElement("div");
    grid.classList.add("grid");
    var figure=document.createElement("figure");
    figure.classList.add("chicas");
    var divDos = document.createElement("div");
    divDos.classList.add("efecto");
    var img = document.createElement("img");
    img.classList.add("img-box");
    var figCaption=document.createElement("figcaption");
    figCaption.classList.add("text");

    var nombre = document.createTextNode(nombres[i-1]);

    img.setAttribute("src","assets/img/5-lima/"+i+".jpg");

    body.appendChild(contenedorImg);
    contenedorImg.appendChild(grid);
    grid.appendChild(figure);
    figure.appendChild(divDos);
    figure.appendChild(img);
    figure.appendChild(figCaption);
    figCaption.appendChild(nombre);
  }


});
