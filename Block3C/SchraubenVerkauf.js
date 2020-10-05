function preisBerechnen() {
    let preis = 0;
    preis += 0.2 * document.getElementById("anzahlSchrauben").value;
    preis += 0.1 * document.getElementById("anzahlMuttern").value;
    preis += 0.05 * document.getElementById("anzahlUnterlegsscheiben").value;
    document.getElementById("preis").value = Math.round(preis * 100) / 100;
    return Math.round(preis * 100) / 100;
}
function bestellen() {
    alert("Bestellung wurde abgesendet! Preis: " + preisBerechnen() + " CHF");
}