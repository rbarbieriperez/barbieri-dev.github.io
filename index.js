'use strict'

$(document).ready(() => {
  $("#main-div-conting").hide();
  $(window).scroll(() => {
    NavBarColorAnimationON();
  });
  $("#my-projects").click(() => {
    LogoConTingClick();
  });
  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});
  $("#nav-title").click((e) => {
    e.preventDefault();
    var aid = $(".nav-link").attr("href");
    $('html,body').animate({scrollTop: $(aid).offset().top},'fast');
  });
  

  
});



//Navbar code
function NavBarColorAnimationON(){
  if ($(document).scrollTop() > 20){
    //Working on default navbar
    $("#navbar").css("padding","20px");
    $("#navbar").css("height","70px");
    $("#navbar").css("background-color","#111111");
    $('a').css("background-color","#111111");;
    $("#collapsibleNavbar").css("min-width","100vh");
    $("#collapsibleNavbar").css("margin-left","-40px");
  } else {
    //Working on expanded navbar scrolling
    $("#navbar").css("padding","0px");
    $("#navbar").css("height","50px");
    $("#navbar").css("background-color","#1B1B1B");
    $("a").css("background-color","#1B1B1B");
    $("#collapsibleNavbar").css("min-width","0vh");
    $("#collapsibleNavbar").css("margin-left","0px");
  }
}



function LogoConTingClick(){
  if ($("#description-projects-p").is(":empty")){
    //Add text
    var textConTinG = "Sistema utilizado para controlar el acceso de estudiantes y profesores a un centro educativo. Brindando un sistema confiable y seguro," +
    "integrado con una cerradura automática capas de abrir o cerrar la puerta del salón de clases, siempre y cuando un profesor o encargado"+
    "de la institución coloque su tarjeta sobre el sistema. Habilitando más tarde a los estudiantes a registrar su acceso a las asignaturas.";
    $("#description-projects-p").text(textConTinG);
    $("#caracteristicas").text("Tecnologías");
    $("#main-div-conting").slideDown("slow");
    //Add Images
    AddProjectImagesConTinG();
  } else {
    $("#main-div-conting").slideUp("slow");
    $("#description-projects-p").text("");
    $("#caracteristicas").text("");
    DeleteProjectImagesConTinG();
    
  }
  
}

function AddProjectImagesConTinG(){
  //CSharp Image
  let div = $("#container-images-row1");
  
  div.append('<div class="col-9 offset-3 col-sm-8  offset-sm-4 col-lg-4 offset-lg-0 col-md-6 offset-md-0" id="image1"> </div>');
  let image1 = $("#image1");
  image1.append('<img src="/Images/csharp-icon.png" id="logo-csharp"></img>');
  //MySQLImage
  div.append('<div class="col-9 offset-3 col-sm-8  offset-sm-4 col-lg-4 offset-lg-0 col-md-6 offset-md-0" id="image2"> </div>');
  let image2 = $("#image2");
  image2.append('<img src="/Images/mysql-icon.png" id="logo-mysql"></img>');
  //Raspberry PI logo
  div.append('<div class="col-9 offset-3 col-sm-8 offset-sm-4 col-lg-4 offset-lg-0 col-md-6 offset-md-0" id="image3"> </div>');
  let image3 = $("#image3");
  image3.append('<img src="/Images/raspberry-icon.png" id="logo-raspy"></img>');
  //Arduino logo
  div.append('<div class="col-9 offset-3 col-sm-8 offset-sm-4 col-lg-4 offset-lg-0 col-md-6 offset-md-0" id="image4"> </div>');
  let image4 = $("#image4");
  image4.append('<img src="/Images/arduino-icon.png" id="logo-arduino"></img>');
  //Python logo
  div.append('<div class="col-9 offset-3 col-sm-8 offset-sm-4 col-lg-4 offset-lg-0 col-md-6 offset-md-0" id="image5"> </div>');
  let image5 = $("#image5");
  image5.append('<img src="/Images/python-icon.png" id="logo-python"></img>');
  //Servidor
  div.append('<div class="col-9 offset-3 col-sm-8 offset-sm-4 col-lg-4 offset-lg-0 col-md-6 offset-md-0" id="image6"> </div>');
  let image6 = $("#image6");
  image6.append('<img src="/Images/server-icon.png" id="logo-server"></img>');

}

function DeleteProjectImagesConTinG(){
   //CSharp Image
    let imagecsharp = $("#logo-csharp");
    imagecsharp.remove();
    let image1 = $("#image1");
    image1.remove();
   //MySQLImage
    let imagemysql = $("#logo-mysql");
    imagemysql.remove();
    let image2 = $("#image2");
    image2.remove();
   //Raspberry PI logo
    let imageraspy = $("#logo-raspy");
    imageraspy.remove();
    let image3 = $("#image3");
    image3.remove();
   //Arduino logo
    let imagearduino = $("#logo-arduino");
    imagearduino.remove();
    let image4 = $("#image4");
    image4.remove();
   //Python logo
    let imagepython = $("#logo-python");
    imagepython.remove();
    let image5 = $("#image5");
    image5.remove();
   //Servidor
    let imageserver = $("#logo-server");
    imageserver.remove();
    let image6 = $("#image6");
    image6.remove();
}