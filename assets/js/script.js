$(document).ready(function() {

    var scrollLink = $('.scroll');
  
    // Smooth Scrolling
    // Función que permite un desplazmiento lento y con suavidad por las secciones
    scrollLink.click(function(e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000 );
    });
    
    // Navbar Section: Active Nav-Link, 
    // Función que resalta y coincide el titulo del navbar con la sección de acuerdo a donde se encuente el scroll
    $(window).scroll(function() {

        var scrollbarLocation = $(this).scrollTop();
    
        scrollLink.each(function() {
            var sectionOffset = $(this.hash).offset().top - 20;

            if ( sectionOffset <= scrollbarLocation ) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });

        // Navbar Section: Transparent Navbar to Color,
        // Función que cambia el navbar de transparente a color cuando entra en la sección about
        $("#navbar").toggleClass('scrolled', $(this).scrollTop() > $('#about').height());
    });

    // About Section: Tooltip Event
    // Función que activa el tooltip para ser utilizado
    $('[data-toggle="tooltip"]').tooltip()

    // Featured Section: Toggle Event
    // Función que a traves de un click realiza un toggle al boton del card en el Featured Section
    // Toggle Event Card 01
    $(".textToggledone").hide();
    $("#buttonToggleone").click(function() {
        var elem = $("#buttonToggleone").text();
        if (elem == "Ver más") {
            $("#buttonToggleone").text("Mostrar menos");
            $(".textToggledone").slideDown();
        } else {
            $("#buttonToggleone").text("Ver más");
            $(".textToggledone").slideUp();
        }
    });

    // Toggle Event Card 02
    $(".textToggledtwo").hide();
    $("#buttonToggletwo").click(function() {
        var elem = $("#buttonToggletwo").text();
        if (elem == "Ver más") {
            $("#buttonToggletwo").text("Mostrar menos");
            $(".textToggledtwo").slideDown();
        } else {
            $("#buttonToggletwo").text("Ver más");
            $(".textToggledtwo").slideUp();
        }
    });

    // Toggle Event Card 03
    $(".textToggledthree").hide();
    $("#buttonTogglethree").click(function() {
        var elem = $("#buttonTogglethree").text();
        if (elem == "Ver más") {
            $("#buttonTogglethree").text("Mostrar menos");
            $(".textToggledthree").slideDown();
        } else {
            $("#buttonTogglethree").text("Ver más");
            $(".textToggledthree").slideUp();
        }
    });

    // Toggle Event Card 04
    $(".textToggledfour").hide();
    $("#buttonTogglefour").click(function() {
        var elem = $("#buttonTogglefour").text();
        if (elem == "Ver más") {
            $("#buttonTogglefour").text("Mostrar menos");
            $(".textToggledfour").slideDown();
        } else {
            $("#buttonTogglefour").text("Ver más");
            $(".textToggledfour").slideUp();
        }
    });
});