$(document).ready(function(){

   /*
   ************************************************************
      Introducción
   ************************************************************
   */
    $('#intro1, #intro1Boton').click(function(){
      /* resalta el link del menu activo */
      $("[class='linkActive']").removeClass("linkActive");
      $(this).addClass("linkActive");

      /* arma el breadcrumb */
      $("#breadcrumb2").text("Introducción");
      $("#breadcrumb3").text("¿Qué es #Fan?");

      /* carga el contenido y oculta lo que no corresponde */
      $("#contenido").load("/contents/introduccion/1.queEsFan.html");
      $("#testYFeedback").hide();

      /* botones atras & adelante */
      $(".botonAtras").hide();
      $(".botonContinuar").attr('id', 'intro2Boton');
    });

    $('#intro2, #intro2Boton').click(function(){       
      /* resalta el link del menu activo */
      $("[class='linkActive']").removeClass("linkActive");
      $(this).addClass("linkActive");

      /* arma el breadcrumb */
      $("#breadcrumb2").text("Introducción");
      $("#breadcrumb3").text("Contexto en el tiempo");

      /* carga el contenido y oculta lo que no corresponde */
      $("#contenido").load("/contents/introduccion/2.contextoEnElTiempo.html");
      $("#testYFeedback").hide();

      /* botones atras & adelante */
      $(".botonAtras").show();
      $(".botonAtras").attr('id', 'intro1Boton');
      $(".botonContinuar").attr('id', 'intro3Boton');
   });

    $('#intro3, #intro3Boton').click(function(){
      /* resalta el link del menu activo */
      $("[class='linkActive']").removeClass("linkActive");
      $(this).addClass("linkActive");

      /* arma el breadcrumb */
      $("#breadcrumb2").text("Introducción");
      $("#breadcrumb3").text("Veamos algunos números");

      /* carga el contenido y oculta lo que no corresponde */
      $("#contenido").load("/contents/introduccion/3.veamosAlgunosNumeros.html");
      $("#testYFeedback").hide();
    });

    $('#intro4').click(function(){
      /* resalta el link del menu activo */
      $("[class='linkActive']").removeClass("linkActive");
      $(this).addClass("linkActive");

      /* arma el breadcrumb */
      $("#breadcrumb2").text("Introducción");
      $("#breadcrumb3").text("CRM");

      /* carga el contenido y oculta lo que no corresponde */
      $("#contenido").load("/contents/introduccion/4.CRM.html");
      $("#testYFeedback").hide();
    });

    $('#intro5').click(function(){
      /* resalta el link del menu activo */
      $("[class='linkActive']").removeClass("linkActive");
      $(this).addClass("linkActive");

      /* arma el breadcrumb */
      $("#breadcrumb2").text("Introducción");
      $("#breadcrumb3").text("¿Quienes hacen #Fan");

      /* carga el contenido y oculta lo que no corresponde */
      $("#contenido").load("/contents/introduccion/5.quienesHacenFan.html");
      $("#testYFeedback").hide();
    });

    $('#intro6').click(function(){
      /* resalta el link del menu activo */
      $("[class='linkActive']").removeClass("linkActive");
      $(this).addClass("linkActive");

      /* arma el breadcrumb */
      $("#breadcrumb2").text("Introducción");
      $("#breadcrumb3").text("Vista inicial");

      /* carga el contenido y oculta lo que no corresponde */
      $("#contenido").load("/contents/introduccion/6.vistaInicial.html");
      $("#testYFeedback").hide();
    });

    $('#intro7').click(function(){
      /* resalta el link del menu activo */
      $("[class='linkActive']").removeClass("linkActive");
      $(this).addClass("linkActive");

      /* arma el breadcrumb */
      $("#breadcrumb2").text("Introducción");
      $("#breadcrumb3").text("¿Cómo venimos?");

      /* carga el contenido y oculta lo que no corresponde */
      $("#contenido").load("/contents/introduccion/7.comoVenimos.html");
      $("#testYFeedback").hide();
    });


   /*
   ************************************************************
      Herramientas
   ************************************************************
   */
    $('#herramientas1').click(function(){
      /* resalta el link del menu activo */
      $("[class='linkActive']").removeClass("linkActive");
      $(this).addClass("linkActive");

      /* arma el breadcrumb */
      $("#breadcrumb2").text("Herramientas");
      $("#breadcrumb3").text("Introducción");

      /* carga el contenido y oculta lo que no corresponde */
      $("#contenido").load("/contents/herramientasYConceptosUtiles/1.introduccion.html");
      $("#testYFeedback").hide();
    });

    $('#herramientas2').click(function(){
      /* resalta el link del menu activo */
      $("[class='linkActive']").removeClass("linkActive");
      $(this).addClass("linkActive");

      /* arma el breadcrumb */
      $("#breadcrumb2").text("Herramientas");
      $("#breadcrumb3").text("Ingreso a Salesforce");

      /* carga el contenido y oculta lo que no corresponde */
      $("#contenido").load("/contents/herramientasYConceptosUtiles/2.ingresoASalesforce.html");
      $("#testYFeedback").hide();
    });

    $('#herramientas3').click(function(){
      /* resalta el link del menu activo */
      $("[class='linkActive']").removeClass("linkActive");
      $(this).addClass("linkActive");

      /* arma el breadcrumb */
      $("#breadcrumb2").text("Herramientas");
      $("#breadcrumb3").text("¿Cómo busco a un cliente?");

      /* carga el contenido y oculta lo que no corresponde */
      $("#contenido").load("/contents/herramientasYConceptosUtiles/3.comoBuscoAUnCliente.html");
      $("#testYFeedback").hide();
    });

    $('#herramientas4').click(function(){
      /* resalta el link del menu activo */
      $("[class='linkActive']").removeClass("linkActive");
      $(this).addClass("linkActive");

      /* arma el breadcrumb */
      $("#breadcrumb2").text("Herramientas");
      $("#breadcrumb3").text("Líneas #Fan en sistemas Legados");

      /* carga el contenido y oculta lo que no corresponde */
      $("#contenido").load("/contents/herramientasYConceptosUtiles/4.lineasFanEnSistemasLegados.html");
      $("#testYFeedback").hide();
    });

    $('#herramientas5').click(function(){
      /* resalta el link del menu activo */
      $("[class='linkActive']").removeClass("linkActive");
      $(this).addClass("linkActive");

      /* arma el breadcrumb */
      $("#breadcrumb2").text("Herramientas");
      $("#breadcrumb3").text("Herramientas y conceptos útiles");

      /* carga el contenido y oculta lo que no corresponde */
      $("#contenido").load("/contents/herramientasYConceptosUtiles/5.herramientasYConceptosUtiles.html");
      $("#testYFeedback").hide();
    });


   /*
   ************************************************************
      Etapas del proyecto y ejes del cambio
   ************************************************************
   */
    $('#etapas1').click(function(){
      /* resalta el link del menu activo */
      $("[class='linkActive']").removeClass("linkActive");
      $(this).addClass("linkActive");

      /* arma el breadcrumb */
      $("#breadcrumb2").text("Etapas del proyecto y ejes del cambio");
      $("#breadcrumb3").text("Etapas del proyecto");

      /* carga el contenido y oculta lo que no corresponde */
      $("#contenido").load("/contents/etapasDelProyectoYEjesDelCambio/1.etapasDelProyecto.html");
      $("#testYFeedback").hide();
    });

    $('#etapas2').click(function(){
      /* resalta el link del menu activo */
      $("[class='linkActive']").removeClass("linkActive");
      $(this).addClass("linkActive");

      /* arma el breadcrumb */
      $("#breadcrumb2").text("Etapas del proyecto y ejes del cambio");
      $("#breadcrumb3").text("Gestiones Ejes del Cambio");

      /* carga el contenido y oculta lo que no corresponde */
      $("#contenido").load("/contents/etapasDelProyectoYEjesDelCambio/2.gestionesEjesDelCambio.html");
      $("#testYFeedback").hide();
    });

    $('#etapas3').click(function(){
      /* resalta el link del menu activo */
      $("[class='linkActive']").removeClass("linkActive");
      $(this).addClass("linkActive");

      /* arma el breadcrumb */
      $("#breadcrumb2").text("Etapas del proyecto y ejes del cambio");
      $("#breadcrumb3").text("Validación de identidad");

      /* carga el contenido y oculta lo que no corresponde */
      $("#contenido").load("/contents/etapasDelProyectoYEjesDelCambio/3.validaciónDeIdentidad.html");
      $("#testYFeedback").hide();
    });

    $('#etapas4').click(function(){
      /* resalta el link del menu activo */
      $("[class='linkActive']").removeClass("linkActive");
      $(this).addClass("linkActive");

      /* arma el breadcrumb */
      $("#breadcrumb2").text("Etapas del proyecto y ejes del cambio");
      $("#breadcrumb3").text("Creación del cliente");

      /* carga el contenido y oculta lo que no corresponde */
      $("#contenido").load("/contents/etapasDelProyectoYEjesDelCambio/4.creaciónDeCliente.html");
      $("#testYFeedback").hide();
    });

    $('#etapas5').click(function(){
      /* resalta el link del menu activo */
      $("[class='linkActive']").removeClass("linkActive");
      $(this).addClass("linkActive");

      /* arma el breadcrumb */
      $("#breadcrumb2").text("Etapas del proyecto y ejes del cambio");
      $("#breadcrumb3").text("Creación de cuenta");

      /* carga el contenido y oculta lo que no corresponde */
      $("#contenido").load("/contents/etapasDelProyectoYEjesDelCambio/5.creaciónDeCuenta.html");
      $("#testYFeedback").hide();
    });


   /*
   ************************************************************
      Gestiones
   ************************************************************
   */
    
    $('#gestiones1').click(function(){
      /* resalta el link del menu activo */
      $("[class='linkActive']").removeClass("linkActive");
      $(this).addClass("linkActive");

      /* arma el breadcrumb */
      $("#breadcrumb2").text("Gestiones");
      $("#breadcrumb3").text("Cambio de titularidad");

      /* carga el contenido y oculta lo que no corresponde */
      $("#contenido").load("/contents/gestionesGestiones/17.cambioDeTitularidad.html");
      $("#testYFeedback").hide();
   });

   $('#gestiones2').click(function(){
      /* resalta el link del menu activo */
      $("[class='linkActive']").removeClass("linkActive");
      $(this).addClass("linkActive");

      /* arma el breadcrumb */
      $("#breadcrumb2").text("Gestiones");
      $("#breadcrumb3").text("Cambio de plan");

      /* carga el contenido y oculta lo que no corresponde */
      $("#contenido").load("/contents/gestionesVentas/7.cambioDePlan.html");
      $("#testYFeedback").hide();
   });


   /*
   ************************************************************
      Asistencia a la operación
   ************************************************************
   */

    $('#asistencia1').click(function(){
      /* resalta el link del menu activo */
      $("[class='linkActive']").removeClass("linkActive");
      $(this).addClass("linkActive");

      /* arma el breadcrumb */
      $("#breadcrumb2").text("Asistencia a la operación");
      $("#breadcrumb3").text("Introducción");

      /* carga el contenido y oculta lo que no corresponde */
      $("#contenido").load("/contents/asistenciaALaOperacion/1.asistenciaALaOperacion.html");
      $("#testYFeedback").hide();
      $("#testYFeedback").show();
      $("#testYFeedback").load("/contents/testYFeedback/2.campaniaCambioDePlan.html");S
    });
});
