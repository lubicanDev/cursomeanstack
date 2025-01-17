let http = require("http");
//let url = "http://nodejs.org/dist/index.json";
let url = "http://nodejs.org/dist/index.jso"; // con erro, falta "n"al final
//let url = "http://www.publico.es/sitemap-index.xml";
let datosPlanos = "";

let callbackRes =
    (res) => {
        const codigoEstado = res.statusCode;
        const tipoContenido = res.headers["content-type"];
        console.log(tipoContenido);

        let error;
        if (codigoEstado !== 200) {
            error = new Error("respuesta fallida. \n" +
                `Código de estado: ${codigoEstado}`);
        } else if (!/^application\/json/.test(tipoContenido)) {
            error = new Error("Contenido inválido \n" + `Se esperaba application/json pero se ha recibido ${tipoContenido}`)
        } else {
            const tamano = res.headers["content-length"];
            console.log("recibidos " + tamano + " bytes" + " por métodp " + res.method);
        }
        if (error) {
            console.log(error.message);
            res.resume();
            return;
        }

        res.setEncoding("utf8");

        res.on("data", alRecibirDatos);
        res.on("end", () => {
            try {
                let datosParseados = JSON.parse(datosPlanos);
                console.log(datosParseados);
            } catch (e) {
                console.log(e.message);
            }
        });
    };

function alRecibirDatos(bufferChunk) {
    datosPlanos += bufferChunk;

}
http.get(url, callbackRes).on("error", console.error);