function encriptar() {
  var textoEntrada = document.getElementById("textoEntrada").value;
  var resultadoContainer = document.getElementById("resultadoContainer");
  if (resultadoContainer) {
    // Verifica si se encontró el elemento
    var resultadoEncriptado = encriptarText(textoEntrada);
    resultadoContainer.innerHTML = "<p>" + resultadoEncriptado + "</p>";
  }
}

function desencriptar() {
  var textoEntrada = document.getElementById("textoEntrada").value;
  var resultadoContainer = document.getElementById("resultadoContainer");
  if (resultadoContainer) {
    // Verifica si se encontró el elemento
    var resultadoEncriptado = desencriptarText(textoEntrada);
    resultadoContainer.innerHTML = "<p>" + resultadoEncriptado + "</p>";
  }
}

function copiarResultado() {
  var resultadoEncriptado = document.getElementById("resultadoContainer").innerText;
  navigator.clipboard.writeText(resultadoEncriptado)
      .then(function () {
          console.log("Resultado copiado al portapapeles");
      })
      .catch(function (error) {
          console.error("Error al copiar el resultado: ", error);
      });
}

document.getElementById("buttonCopiar").addEventListener("click", copiarResultado);

function encriptarText(mensaje) {
  mensaje = mensaje
    .replaceAll(/e/g, "enter")
    .replaceAll(/i/g, "imes")
    .replaceAll(/a/g, "ai")
    .replaceAll(/o/g, "ober")
    .replaceAll(/u/g, "ufat");
  return mensaje;
}
function desencriptarText(mensaje) {
  mensaje = mensaje
    .replaceAll(/enter/g, "e")
    .replaceAll(/imes/g, "i")
    .replaceAll(/ai/g, "a")
    .replaceAll(/ober/g, "o")
    .replaceAll(/ufat/g, "u");
  return mensaje;
}
function convertirAMinusculas() {
  var textarea = document.getElementById("textoEntrada");
  textarea.value = textarea.value.toLowerCase();
}
