function convert() {
    let temperatura = parseFloat(document.getElementById("temperatura").value);
    let unidade = document.getElementById("unidade").value;
    let resultado = document.getElementById("convertido");

    if (isNaN(temperatura)) {
        resultado.textContent = "Digite uma temperatura válida!";
        return;
    }

    let convertido = unidade === "celsius" ? (temperatura - 32) * 5 / 9 : (temperatura * 9 / 5) + 32;

    resultado.textContent = unidade === "celsius" 
        ? `${convertido.toFixed(2)}°C`
        : `${convertido.toFixed(2)}°F`;
}
