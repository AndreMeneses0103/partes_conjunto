function saveConj() {
  var nome_conjunto = document.getElementById("input_conj").value;
  var elementos = document.getElementById("input_part").value;
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
  partes.sort(function(a,b){
      return a.length - b.length
  })
  console.log(partes);
  var lps = JSON.stringify(partes)


  lps = lps.replace('[', "{")
  lps = lps.replace(']', "}")

  console.log(lps)
  // partes = partes.replace("[", "{")
  alert(lps)
  // var todas_partes = []

  // for(var y = 0; y <= all_elem.length; y++){
  //   todas_partes.push([])
  // }

  // for (var x = 0; x < all_elem.length; x++) {

  //   for(var j = 0; j < partes.length; j++){
  //       if (partes[j].length == 0) {
  //           todas_partes[0].push(partes[j])
  //       }
  //       if (partes[j].length == 1) {
  //           todas_partes[1].push(partes[j])
  //       }
  //       if (partes[j].length == 2) {
  //           todas_partes[2].push(partes[j])
  //       }
  //       if (partes[j].length == 3) {
  //           todas_partes[3].push(partes[j])
  //       }
  //   }

  // }

  // console.log(todas_partes)
  // alert(partes[3].toString());

}
