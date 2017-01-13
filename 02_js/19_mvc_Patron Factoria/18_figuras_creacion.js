// var padreCalcRectangulo = document.getElementById("padre-Calc-Rectangulo");
// var padreCalcTriangulo = document.getElementById("padre-Calc-Triangulo");
// var padreCalcElipse = document.getElementById("padre-Calc-Elipse");
// var padreCalcHuevo = document.getElementById("padre-Calc-Huevo");

// var vistaRectangulo = new FiguraVista(padreCalcRectangulo, "Rectangulo");
// var vistaRectangulo2 = new FiguraVistaV2(padreCalcRectangulo, "Rectangulo");
// var vistaElipse = new FiuraVistaV2(padreCalcElipse, "Elipse")

// var controlRectangulo = new FiguraControlador(vistaRectangulo, Modelo.Rectangulo);
// var controlRectangulo2 = new FiguraControlador(vistaRectangulo2, Modelo.Rectangulo);
// var controlElipse = new FiguraControlador(vistaElipse, Modelo.Elipse);


var miFactoria = new FactoriaFiguras();

var rectangulo1 = miFactoria.crearFigura({ // usamos el método "crearFigura" de la "FactoríaFiguras" para crear una
    // nueva instancia de figura
    padreDom: "padre-Calc-Rectangulo",
    vista: "vista1",
    tipo: "rectangulo",
});