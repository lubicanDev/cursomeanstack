var $descripcion;

$(document).ready(initializeEvents);

function initializeEvents() {
    $("#boton1").click(addElementClass);
    $("#boton2").click(removeElementClass);
    $("#boton3").click(togleElementClass);
    $descripcion = $("#descripcion");
}

function addElementClass() {
    $descripcion.addClass("recuadro");
}

function removeElementClass() {
    $descripcion.removeClass("recuadro");
}

function togleElementClass() {
    $descripcion.toggleClass("recuadro");
}