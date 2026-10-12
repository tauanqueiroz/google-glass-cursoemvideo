function calc_Total() {
    var qtd = parseInt(document.getElementById('cQtd').value);
    var tot = qtd * 1500;
    document.getElementById('cTot').value = tot;
}