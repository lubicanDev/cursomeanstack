let http = require("http");
let url = "http://www.google.es/";
let callbackRes =
    (respuesta) => {
        respuesta.setEncoding("utf8");
        respuesta.on("data", console.log);
        respuesta.on("error", console.log);

    };
http.get(url, callbackRes).on("error", console.log);