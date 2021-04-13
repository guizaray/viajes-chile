$(document).ready(function() {

    /*Tooltip Event*/
        $('[data-toggle="tooltip"]').tooltip()

    /*Card Section: Toggle Event*/
        /*Toggle Event Card 01*/
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

        /*Toggle Event Card 02*/
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

        /*Toggle Event Card 03*/
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

        /*Toggle Event Card 04*/
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