var Modelo = {
    notificarCambio: function(escuchadores, figura, propiedad, valorAntiguo, valorNuevo) {
        for (var i = 0; i < escuchadores.length; i++) {
            escuchadores[i].notificar(figura, propiedad, valorAntiguo, valorNuevo);
        }
    },
    Rectangulo: {
        area: 0,
        perimetro: 0,
        volumen: 0,
        escuchadores: [],
        calcularDeVerdadArea: function(ancho, alto, noNotificar) {
            var areaNueva = ancho * alto;
            if (!noNotificar) {
                Modelo.notificarCambio(this.escuchadores, "rectangulo", "area", this.area, areaNueva);
            }
            this.area = areaNueva;
        },
        calcularDeVerdadPerimetro: function(ancho, alto) {

            var perimetroNuevo = alto * 2 + ancho * 2;
            Modelo.notificarCambio(this.escuchadores, "rectangulo", "perimetro", this.perimetro, perimetroNuevo);
            this.perimetro = perimetroNuevo;
        },
        calcularDeVerdadVolumen: function(ancho, alto, profundidad) {
            return this.calcularDeVerdadArea(ancho, alto) * profundidad;
        },
        registrar: function(controlador) {
            this.escuchadores.push(controlador);
        }
    },
    Elipse: {
        area: 0,
        perimetro: 0,

        // TODO. FALTAAA

        calcularDeVerdadArea: function(ancho, alto) {

            return (ancho / 2) * (alto / 2) * Math.PI;
        },
        calcularDeVerdadPerimetro: function(ancho, alto) {
            return Math.PI * 2 * Math.sqrt((alto * alto + ancho * ancho) / 2);
        },
        calcularDeVerdadVolumen: function(ancho, alto, profundidad) {
            return this.calcularDeVerdadArea(ancho, alto) * profundidad;
        }
    },
    calcularDeVerdadAreaTriangulo: function(ancho, alto) {
        return ancho * alto / 2;
    },
    TrianguloEquilatero: {
        calcularDeVerdadArea: function(ancho, alto) {
            return Modelo.calcularDeVerdadAreaTriangulo(ancho, alto);
        },
        calcularDeVerdadPerimetro: function(ancho, alto) { return alto * 3; },
        calcularDeVerdadVolumen: function(ancho, alto, profundidad) {
            return this.calcularDeVerdadArea(ancho, alto) * profundidad;
        }
    },
    TrianguloIsosceles: {
        calcularDeVerdadArea: function(ancho, alto) {
            return Modelo.calcularDeVerdadAreaTriangulo(ancho, alto);
        },
        calcularDeVerdadPerimetro: function(ancho, alto) { return alto * 2 + ancho; },
        calcularDeVerdadVolumen: function(ancho, alto, profundidad) {
            return this.calcularDeVerdadArea(ancho, alto) * profundidad;
        }
    },
    Huevo: {
        calcularDeVerdadArea: function(ancho, alto) {
            return (ancho / 2) * (alto / 2) * 100;
        },
        calcularDeVerdadPerimetro: function(ancho, alto) {
            return Math.PI * 2 * Math.sqrt((alto * alto + ancho * ancho) / 2) * 100;
        },
        calcularDeVerdadVolumen: function(ancho, alto, profundidad) {
            return this.calcularDeVerdadArea(ancho, alto) * profundidad * 100;
        }
    },
};