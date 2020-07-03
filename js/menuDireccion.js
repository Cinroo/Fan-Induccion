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
      $("#intro2").addClass("linkActive");
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
    $('#gestVentas1').click(function(){
       $("#contenido").load("/contents/gestionesVentas/1.ventaDeSuscripcionesYPortables.html");
       $("#breadcrumb2").text("Gestiones - Ventas");
       $("#breadcrumb3").text("Venta de suscripciones y portables");
       $("[class='linkActive']").removeClass("linkActive");
       $(this).addClass("linkActive");
    });

    $('#gestVentas2').click(function(){
       $("#contenido").load("/contents/gestionesVentas/2.cambioDeSimPresencial.html");
       $("#breadcrumb2").text("Gestiones - Ventas");
       $("#breadcrumb3").text("Cambio de Sim presencial");
       $("[class='linkActive']").removeClass("linkActive");
       $(this).addClass("linkActive");
    });

    $('#gestVentas3').click(function(){
       $("#contenido").load("/contents/gestionesVentas/3.portInTelefonico.html");
       $("#breadcrumb2").text("Gestiones - Ventas");
       $("#breadcrumb3").text("Port In Telefónico");
       $("[class='linkActive']").removeClass("linkActive");
       $(this).addClass("linkActive");
    });

    $('#gestVentas4').click(function(){
       $("#contenido").load("/contents/gestionesVentas/4.analisisDeOperaciones.html");
       $("#breadcrumb2").text("Gestiones - Ventas");
       $("#breadcrumb3").text("Análisis de operaciones");
       $("[class='linkActive']").removeClass("linkActive");
       $(this).addClass("linkActive");
    });

    $('#gestVentas5').click(function(){
       $("#contenido").load("/contents/gestionesVentas/5.nominacion.html");
       $("#breadcrumb2").text("Gestiones - Ventas");
       $("#breadcrumb3").text("Nominación");
       $("[class='linkActive']").removeClass("linkActive");
       $(this).addClass("linkActive");
    });

    $('#gestVentas6').click(function(){
       $("#contenido").load("/contents/gestionesVentas/6.ventaDeServicios.html");
       $("#breadcrumb2").text("Gestiones - Ventas");
       $("#breadcrumb3").text("Venta de servicios");
       $("[class='linkActive']").removeClass("linkActive");
       $(this).addClass("linkActive");
    });

    $('#gestVentas7').click(function(){
       $("#contenido").load("/contents/gestionesVentas/7.cambioDePlan.html");
       $("#breadcrumb2").text("Gestiones - Ventas");
       $("#breadcrumb3").text("Cambio de plan");
       $("[class='linkActive']").removeClass("linkActive");
       $(this).addClass("linkActive");
    });

    $('#gestVentas8').click(function(){
       $("#contenido").load("/contents/gestionesVentas/8.compraDePacks.html");
       $("#breadcrumb2").text("Gestiones - Ventas");
       $("#breadcrumb3").text("Compra de Packs");
       $("[class='linkActive']").removeClass("linkActive");
       $(this).addClass("linkActive");
    });

    $('#gestVentas9').click(function(){
       $("#contenido").load("/contents/gestionesVentas/9.reseteoDeCuota.html");
       $("#breadcrumb2").text("Gestiones - Ventas");
       $("#breadcrumb3").text("Reseteo de cuota");
       $("[class='linkActive']").removeClass("linkActive");
       $(this).addClass("linkActive");
    });

    $('#gestVentas10').click(function(){
       $("#contenido").load("/contents/gestionesVentas/10.recargaDeCredito.html");
       $("#breadcrumb2").text("Gestiones - Ventas");
       $("#breadcrumb3").text("Recarga de crédito");
       $("[class='linkActive']").removeClass("linkActive");
       $(this).addClass("linkActive");
    });


    /* Gestiones - Consultas */
    $('#gestConsultas1').click(function(){
      $("#contenido").load("/contents/gestionesConsultas/1.introduccion.html");
      $("#breadcrumb2").text("Gestiones - Consultas");
      $("#breadcrumb3").text("Introducción");
      $("[class='linkActive']").removeClass("linkActive");
       $(this).addClass("linkActive");
    });

    $('#gestConsultas2').click(function(){
      $("#contenido").load("/contents/gestionesConsultas/2.resumenDeCuentaCorriente.html");
      $("#breadcrumb2").text("Gestiones - Consultas");
      $("#breadcrumb3").text("Resumen de cuenta corriente");
      $("[class='linkActive']").removeClass("linkActive");
       $(this).addClass("linkActive");
    });

    $('#gestConsultas3').click(function(){
      $("#contenido").load("/contents/gestionesConsultas/3.detalleDeConsumos.html");
      $("#breadcrumb2").text("Gestiones - Consultas");
      $("#breadcrumb3").text("Detalle de consumos");
      $("[class='linkActive']").removeClass("linkActive");
       $(this).addClass("linkActive");
    });

    $('#gestConsultas4').click(function(){
      $("#contenido").load("/contents/gestionesConsultas/4.historiales.html");
      $("#breadcrumb2").text("Gestiones - Consultas");
      $("#breadcrumb3").text("Historiales");
      $("[class='linkActive']").removeClass("linkActive");
       $(this).addClass("linkActive");
    });

    $('#gestConsultas5').click(function(){
      $("#contenido").load("/contents/gestionesConsultas/5.detalleDelPlan.html");
      $("#breadcrumb2").text("Gestiones - Consultas");
      $("#breadcrumb3").text("Detalles del plan");
      $("[class='linkActive']").removeClass("linkActive");
       $(this).addClass("linkActive");
    });

    $('#gestConsultas6').click(function(){
      $("#contenido").load("/contents/gestionesConsultas/6.mora.html");
      $("#breadcrumb2").text("Gestiones - Consultas");
      $("#breadcrumb3").text("Mora");
      $("[class='linkActive']").removeClass("linkActive");
       $(this).addClass("linkActive");
    });

    $('#gestConsultas7').click(function(){
      $("#contenido").load("/contents/gestionesConsultas/7.extraSaldo.html");
      $("#breadcrumb2").text("Gestiones - Consultas");
      $("#breadcrumb3").text("Extra saldo");
      $("[class='linkActive']").removeClass("linkActive");
       $(this).addClass("linkActive");
    });

    $('#gestConsultas8').click(function(){
      $("#contenido").load("/contents/gestionesConsultas/8.segmentacion.html");
      $("#breadcrumb2").text("Gestiones - Consultas");
      $("#breadcrumb3").text("Segmentación");
      $("[class='linkActive']").removeClass("linkActive");
       $(this).addClass("linkActive");
    });

    $('#gestConsultas9').click(function(){
      $("#contenido").load("/contents/gestionesConsultas/9.atributos.html");
      $("#breadcrumb2").text("Gestiones - Consultas");
      $("#breadcrumb3").text("Atributos");
      $("[class='linkActive']").removeClass("linkActive");
       $(this).addClass("linkActive");
    });

    $('#gestConsultas10').click(function(){
      $("#contenido").load("/contents/gestionesConsultas/10.estadoDeUnaGestion.html");
      $("#breadcrumb2").text("Gestiones - Consultas");
      $("#breadcrumb3").text("Estado de una gestión");
      $("[class='linkActive']").removeClass("linkActive");
       $(this).addClass("linkActive");
    });


    /* Gestiones - Gestiones */
    $('#gestGestiones1').click(function(){
      $("#contenido").load("/contents/gestionesGestiones/1.modificacionDeDatos.html");
      $("#breadcrumb2").text("Gestiones - Gestiones");
      $("#breadcrumb3").text("Modificación de datos");
      $("[class='linkActive']").removeClass("linkActive");
       $(this).addClass("linkActive");
    });
    
    $('#gestGestiones2').click(function(){
      $("#contenido").load("/contents/gestionesGestiones/2.modificacionDeDomicilio.html");
      $("#breadcrumb2").text("Gestiones - Gestiones");
      $("#breadcrumb3").text("Modificación de domicilio");
      $("[class='linkActive']").removeClass("linkActive");
       $(this).addClass("linkActive");
    });

    $('#gestGestiones3').click(function(){
      $("#contenido").load("/contents/gestionesGestiones/3.numeroAmigos.html");
      $("#breadcrumb2").text("Gestiones - Gestiones");
      $("#breadcrumb3").text("Número amigos");
      $("[class='linkActive']").removeClass("linkActive");
       $(this).addClass("linkActive");
    });

    $('#gestGestiones4').click(function(){
      $("#contenido").load("/contents/gestionesGestiones/4.suspensionesYRehabilitaciones.html");
      $("#breadcrumb2").text("Gestiones - Gestiones");
      $("#breadcrumb3").text("Suspensiones y rehabilitaciones");
      $("[class='linkActive']").removeClass("linkActive");
       $(this).addClass("linkActive");
    });

    $('#gestGestiones5').click(function(){
      $("#contenido").load("/contents/gestionesGestiones/5.inconvenientesConRecargas.html");
      $("#breadcrumb2").text("Gestiones - Gestiones");
      $("#breadcrumb3").text("Inconveniente con recargas");
      $("[class='linkActive']").removeClass("linkActive");
       $(this).addClass("linkActive");
    });

    $('#gestGestiones6').click(function(){
      $("#contenido").load("/contents/gestionesGestiones/6.pagoDeFacturaConTarjetaDeCredito.html");
      $("#breadcrumb2").text("Gestiones - Gestiones");
      $("#breadcrumb3").text("Pago de factura con tarjeta de crédito");
      $("[class='linkActive']").removeClass("linkActive");
       $(this).addClass("linkActive");
    });
    
    $('#gestGestiones7').click(function(){
      $("#contenido").load("/contents/gestionesGestiones/7.inconvenientesConUnPago.html");
      $("#breadcrumb2").text("Gestiones - Gestiones");
      $("#breadcrumb3").text("Inconvenientes con un pago");
      $("[class='linkActive']").removeClass("linkActive");
       $(this).addClass("linkActive");
    });

    $('#gestGestiones8').click(function(){
      $("#contenido").load("/contents/gestionesGestiones/8.inconvenientesConCargosAjuste.html");
      $("#breadcrumb2").text("Gestiones - Gestiones");
      $("#breadcrumb3").text("Inconvenientes con cargos - ajuste");
      $("[class='linkActive']").removeClass("linkActive");
       $(this).addClass("linkActive");
    });

    $('#gestGestiones9').click(function(){
      $("#contenido").load("/contents/gestionesGestiones/9.cambiosEnLaModalidadDeRecepDeFT.html");
      $("#breadcrumb2").text("Gestiones - Gestiones");
      $("#breadcrumb3").text("Cambios en la modalidad de recep de FT");
      $("[class='linkActive']").removeClass("linkActive");
       $(this).addClass("linkActive");
    });

    $('#gestGestiones10').click(function(){
      $("#contenido").load("/contents/gestionesGestiones/10.inconvenientesConRecepcionDeFT.html");
      $("#breadcrumb2").text("Gestiones - Gestiones");
      $("#breadcrumb3").text("Inconvenientes con recepción de FT");
      $("[class='linkActive']").removeClass("linkActive");
       $(this).addClass("linkActive");
    });

    $('#gestGestiones11').click(function(){
      $("#contenido").load("/contents/gestionesGestiones/11.reintegros.html");
      $("#breadcrumb2").text("Gestiones - Gestiones");
      $("#breadcrumb3").text("Reintegros");
      $("[class='linkActive']").removeClass("linkActive");
       $(this).addClass("linkActive");
    });
    
    $('#gestGestiones12').click(function(){
      $("#contenido").load("/contents/gestionesGestiones/12.marcasMoraFraude.html");
      $("#breadcrumb2").text("Gestiones - Gestiones");
      $("#breadcrumb3").text("Marcas (Mora - Fraude)");
      $("[class='linkActive']").removeClass("linkActive");
       $(this).addClass("linkActive");
    });

    $('#gestGestiones13').click(function(){
      $("#contenido").load("/contents/gestionesGestiones/13.diagnostico.html");
      $("#breadcrumb2").text("Gestiones - Gestiones");
      $("#breadcrumb3").text("Diagnóstico");
      $("[class='linkActive']").removeClass("linkActive");
       $(this).addClass("linkActive");
    });

    $('#gestGestiones14').click(function(){
      $("#contenido").load("/contents/gestionesGestiones/14.fidelizacionRetencionBaja.html");
      $("#breadcrumb2").text("Gestiones - Gestiones");
      $("#breadcrumb3").text("Fidelización - Retención - baja");
      $("[class='linkActive']").removeClass("linkActive");
       $(this).addClass("linkActive");
    });

    $('#gestGestiones15').click(function(){
      $("#contenido").load("/contents/gestionesGestiones/15.cancelacionDeBaja.html");
      $("#breadcrumb2").text("Gestiones - Gestiones");
      $("#breadcrumb3").text("Cancelación de baja");
      $("[class='linkActive']").removeClass("linkActive");
       $(this).addClass("linkActive");
    });
    
    $('#gestGestiones16').click(function(){
      $("#contenido").load("/contents/gestionesGestiones/16.cancelacionDeGestiones.html");
      $("#breadcrumb2").text("Gestiones - Gestiones");
      $("#breadcrumb3").text("Cancelación de gestiones");
      $("[class='linkActive']").removeClass("linkActive");
       $(this).addClass("linkActive");
    });


    /* Gestiones - Autogestión */
    $('#gestAutogestion1').click(function(){
      $("#contenido").load("/contents/gestionesAutogestion/1.introduccion.html");
      $("#breadcrumb2").text("Gestiones - Autogestión");
      $("#breadcrumb3").text("Introducción");
      $("[class='linkActive']").removeClass("linkActive");
       $(this).addClass("linkActive");
    });

    $('#gestAutogestion2').click(function(){
      $("#contenido").load("/contents/gestionesAutogestion/2.ingreso.html");
      $("#breadcrumb2").text("Gestiones - Autogestión");
      $("#breadcrumb3").text("Ingreso");
      $("[class='linkActive']").removeClass("linkActive");
       $(this).addClass("linkActive");
    });

    $('#gestAutogestion3').click(function(){
      $("#contenido").load("/contents/gestionesAutogestion/3.funcionalidadesDisponibles.html");
      $("#breadcrumb2").text("Gestiones - Autogestión");
      $("#breadcrumb3").text("Funcionalidades disponibles");
      $("[class='linkActive']").removeClass("linkActive");
       $(this).addClass("linkActive");
    });

    $('#gestAutogestion4').click(function(){
      $("#contenido").load("/contents/gestionesAutogestion/4.vistaInicial.html");
      $("#breadcrumb2").text("Gestiones - Autogestión");
      $("#breadcrumb3").text("Vista inicial");
      $("[class='linkActive']").removeClass("linkActive");
       $(this).addClass("linkActive");
    });

    $('#gestAutogestion5').click(function(){
      $("#contenido").load("/contents/gestionesAutogestion/5.gestiones.html");
      $("#breadcrumb2").text("Gestiones - Autogestión");
      $("#breadcrumb3").text("Gestiones");
      $("[class='linkActive']").removeClass("linkActive");
       $(this).addClass("linkActive");
    });

    $('#gestAutogestion6').click(function(){
      $("#contenido").load("/contents/gestionesAutogestion/6.web-appAutogestion.html");
      $("#breadcrumb2").text("Gestiones - Autogestión");
      $("#breadcrumb3").text("Web/App Autogestión");
      $("[class='linkActive']").removeClass("linkActive");
       $(this).addClass("linkActive");
    });
    
    

    /* Asistencia a la operación */
    $('#asistencia1').click(function(){
       $("#contenido").load("/contents/asistenciaALaOperacion/1.asistenciaALaOperacion.html");
       $("#testYFeedback").load("/contents/testYFeedback/1.direccion.html");
       $("#breadcrumb2").text("Asistencia a la operación");
       $("#breadcrumb3").text("Introducción");
       $("[class='linkActive']").removeClass("linkActive");
       $(this).addClass("linkActive");
    });
});
