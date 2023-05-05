function saveConj() {
  var nome_conjunto = (document.getElementById("input_conj").value).toUpperCase();
  var elementos = document.getElementById("input_part").value;
  elementos = elementos.replaceAll(";",",")
  var all_elem = elementos.split(",");

  var conjunto = nome_conjunto + " = {" + all_elem + "}";
  var num_partes = 2 ** all_elem.length;
  alert("CONJUNTO: " + conjunto);
  alert("#" + nome_conjunto + " = " + num_partes);

  function conjuntoDasPartes(conjunto) {
    // Se o conjunto estiver vazio, retorne um array com um conjunto vazio
    if (conjunto.length === 0) {
      return [[]];
    }
    // Caso contrário, pegue o primeiro elemento do conjunto
    var primeiro = conjunto[0];

    // Crie o conjunto das partes do conjunto restante, sem o primeiro elemento
    var subConjuntos = conjuntoDasPartes(conjunto.slice(1));

    // Para cada subconjunto encontrado, crie um novo conjunto adicionando o primeiro elemento
    var novosConjuntos = subConjuntos.map((subConjunto) => [
      primeiro,
      ...subConjunto,
    ]);
    // console.log(novosConjuntos)

    // Retorne o conjunto das partes, combinando o subconjunto original com os novos conjuntos
    return [...novosConjuntos, ...subConjuntos];
  }

  var partes = conjuntoDasPartes(all_elem);
  partes.sort(function (a, b) {
    return a.length - b.length;
  });
  console.log(partes);
  reps = partes.length;
  partes[0] = "Ø";
  partes[reps - 1] = nome_conjunto;
  var lps = JSON.stringify(partes);

  lps = lps.replaceAll("[", "{");
  lps = lps.replaceAll("]", "}");
  lps = lps.replaceAll('"', "");

  console.log(lps);
  alert(lps);
  
  document.getElementById('calculos').style.display = "none"
  document.getElementById('resul').style.display="block"

  document.getElementById('res_conjunto').innerHTML = conjunto
  document.getElementById('res_card').innerHTML = "#" + nome_conjunto + " = " + num_partes
  document.getElementById('res_partes').innerHTML = "P("+nome_conjunto+") = " + lps


}

function voltar(){
  document.getElementById('calculos').style.display = "block"
  document.getElementById('resul').style.display="none"
}
