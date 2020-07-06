$(document).ready(function(){
    /* Introducción */
    $('#intro1, #intro1Boton').click(function(){
       $("#contenido").load("/contents/introduccion/1.queEsFan.html");
       $("#breadcrumb2").text("Introducción");
       $("#breadcrumb3").text("¿Qué es #Fan?");
       $("[class='linkActive']").removeClass("linkActive");
       $(this).addClass("linkActive");
       /* botones atras & adelante */
       $(".botonAtras").addClass("botonVisibleNone");
       $(".botonContinuar").attr('id', 'intro2Boton');

    });

    $('#intro2, #intro2Boton').click(function(){       
      /* link para url */
      $("#contenido").load("/contents/introduccion/2.contextoEnElTiempo.html");
      $("#breadcrumb2").text("Introducción");
      $("#breadcrumb3").text("Contexto en el tiempo");
      $("[class='linkActive']").removeClass("linkActive");
      $(this).addClass("linkActive");
      /* botones atras & adelante */
      $(".botonAtras").show();
      $(".botonAtras").attr('id', 'intro1Boton');
      $(".botonContinuar").attr('id', 'intro3Boton');
      /* alert("Perrito: " + $("#intro3Boton").text()); */    
   });

    $('#intro3, #intro3Boton').click(function(){
       $("#contenido").load("/contents/introduccion/3.veamosAlgunosNumeros.html");
       $("#breadcrumb2").text("Introducción");
       $("#breadcrumb3").text("Veamos algunos números");
       $("[class='linkActive']").removeClass("linkActive");
       $("#intro3").addClass("linkActive");

    });

    $('#intro4').click(function(){
       $("#contenido").load("/contents/introduccion/4.CRM.html");
       $("#breadcrumb2").text("Introducción");
       $("#breadcrumb3").text("CRM");
       $("[class='linkActive']").removeClass("linkActive");
       $(this).addClass("linkActive");
    });

    $('#intro5').click(function(){
       $("#contenido").load("/contents/introduccion/5.quienesHacenFan.html");
       $("#breadcrumb2").text("Introducción");
       $("#breadcrumb3").text("¿Quienes hacen #Fan");
       $("[class='linkActive']").removeClass("linkActive");
       $(this).addClass("linkActive");
    });

    $('#intro6').click(function(){
       $("#contenido").load("/contents/introduccion/6.vistaInicial.html");
       $("#breadcrumb2").text("Introducción");
       $("#breadcrumb3").text("Vista inicial");
       $("[class='linkActive']").removeClass("linkActive");
       $(this).addClass("linkActive");
    });

    $('#intro7').click(function(){
       $("#contenido").load("/contents/introduccion/7.comoVenimos.html");
       $("#breadcrumb2").text("Introducción");
       $("#breadcrumb3").text("¿Cómo venimos?");
       $("[class='linkActive']").removeClass("linkActive");
       $(this).addClass("linkActive");
    });


    /* Herramientas */
    $('#herramientas1').click(function(){
       $("#contenido").load("/contents/herramientasYConceptosUtiles/1.introduccion.html");
       $("#breadcrumb2").text("Herramientas");
       $("#breadcrumb3").text("Introducción");
       $("[class='linkActive']").removeClass("linkActive");
       $(this).addClass("linkActive");
    });

    $('#herramientas2').click(function(){
       $("#contenido").load("/contents/herramientasYConceptosUtiles/2.ingresoASalesforce.html");
       $("#breadcrumb2").text("Herramientas");
       $("#breadcrumb3").text("Ingreso a Salesforce");
       $("[class='linkActive']").removeClass("linkActive");
       $(this).addClass("linkActive");
    });

    $('#herramientas3').click(function(){
       $("#contenido").load("/contents/herramientasYConceptosUtiles/3.comoBuscoAUnCliente.html");
       $("#breadcrumb2").text("Herramientas");
       $("#breadcrumb3").text("¿Cómo busco a un cliente?");
       $("[class='linkActive']").removeClass("linkActive");
       $(this).addClass("linkActive");
    });

    $('#herramientas4').click(function(){
       $("#contenido").load("/contents/herramientasYConceptosUtiles/4.lineasFanEnSistemasLegados.html");
       $("#breadcrumb2").text("Herramientas");
       $("#breadcrumb3").text("Líneas #Fan en sistemas Legados");
       $("[class='linkActive']").removeClass("linkActive");
       $(this).addClass("linkActive");
    });

    $('#herramientas5').click(function(){
       $("#contenido").load("/contents/herramientasYConceptosUtiles/5.herramientasYConceptosUtiles.html");
       $("#breadcrumb2").text("Herramientas");
       $("#breadcrumb3").text("Herramientas y conceptos útiles");
       $("[class='linkActive']").removeClass("linkActive");
       $(this).addClass("linkActive");
    });

    /* Etapas del proyecto y ejes del cambio */
    $('#etapas1').click(function(){
       $("#contenido").load("/contents/etapasDelProyectoYEjesDelCambio/1.etapasDelProyecto.html");
       $("#breadcrumb2").text("Etapas del proyecto y ejes del cambio");
       $("#breadcrumb3").text("Etapas del proyecto");
       $("[class='linkActive']").removeClass("linkActive");
       $(this).addClass("linkActive");
    });

    $('#etapas2').click(function(){
       $("#contenido").load("/contents/etapasDelProyectoYEjesDelCambio/2.gestionesEjesDelCambio.html");
       $("#breadcrumb2").text("Etapas del proyecto y ejes del cambio");
       $("#breadcrumb3").text("Gestiones Ejes del Cambio");
       $("[class='linkActive']").removeClass("linkActive");
       $(this).addClass("linkActive");
    });

    $('#etapas3').click(function(){
       $("#contenido").load("/contents/etapasDelProyectoYEjesDelCambio/3.validaciónDeIdentidad.html");
       $("#breadcrumb2").text("Etapas del proyecto y ejes del cambio");
       $("#breadcrumb3").text("Validación de identidad");
       $("[class='linkActive']").removeClass("linkActive");
       $(this).addClass("linkActive");
    });

    $('#etapas4').click(function(){
       $("#contenido").load("/contents/etapasDelProyectoYEjesDelCambio/4.creaciónDeCliente.html");
       $("#breadcrumb2").text("Etapas del proyecto y ejes del cambio");
       $("#breadcrumb3").text("Creación del cliente");
       $("[class='linkActive']").removeClass("linkActive");
       $(this).addClass("linkActive");
    });

    $('#etapas5').click(function(){
       $("#contenido").load("/contents/etapasDelProyectoYEjesDelCambio/5.creaciónDeCuenta.html");
       $("#breadcrumb2").text("Etapas del proyecto y ejes del cambio");
       $("#breadcrumb3").text("Creación de cuenta");
       $("[class='linkActive']").removeClass("linkActive");
       $(this).addClass("linkActive");
    });

    /* Gestiones - Ventas */
    $('#gestiones1').click(function(){
      $("#contenido").load("/contents/gestionesGestiones/17.cambioDeTitularidad.html");
      $("#breadcrumb2").text("Gestiones");
      $("#breadcrumb3").text("Cambio de titularidad");
      $("[class='linkActive']").removeClass("linkActive");
      $(this).addClass("linkActive");
   });

   $('#gestiones2').click(function(){
      $("#contenido").load("/contents/gestionesVentas/7.cambioDePlan.html");
      $("#breadcrumb2").text("Gestiones");
      $("#breadcrumb3").text("Cambio de plan");
      $("[class='linkActive']").removeClass("linkActive");
      $(this).addClass("linkActive");
   });


    /* Asistencia a la operación */
    $('#asistencia1').click(function(){
       $("#contenido").load("/contents/asistenciaALaOperacion/1.asistenciaALaOperacion.html");
       $("#testYFeedback").load("/contents/testYFeedback/2.campaniaCambioDePlan.html");
       $("#breadcrumb2").text("Asistencia a la operación");
       $("#breadcrumb3").text("Introducción");
       $("[class='linkActive']").removeClass("linkActive");
       $(this).addClass("linkActive");
    });
});
