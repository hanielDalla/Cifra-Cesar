document.getElementById('criptografar').addEventListener('click', Criptografar);
document.getElementById('descriptografar').addEventListener('click', Descriptografar);

function Criptografar() {
  var area = document.getElementById('area');
  var frase = document.getElementById('frase');
  frase = frase.value;
  frase = frase.toLowerCase();
  var off = document.getElementById('casas');
  off = off.value;
  var alfa = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var x = parseInt(off);
  var keep = [];
  for (var i = 0; i < frase.length; i++) {
    if (frase[i] == "á" || frase[i] == "à" || frase[i] == "ä" || frase[i] == "â" || frase[i] == "ã" || frase[i] == "@"){
      frase[i] = "a";
    }
    if (frase[i] == "ç" ){
      frase[i] = "c";
    }
    if (frase[i] == "é" || frase[i] == "è" || frase[i] == "ë" || frase[i] == "ê" || frase[i] == "ẽ" || frase[i] == "&"){
      frase[i] = "e";
    }
    if (frase[i] == "í" || frase[i] == "ì" || frase[i] == "ï" || frase[i] == "î" || frase[i] == "ĩ"){
      frase[i] = "i";
    }
    if (frase[i] == "ó" || frase[i] == "ò" || frase[i] == "ö" || frase[i] == "ô" || frase[i] == "õ" || frase[i] == "0"){
      frase[i] = "o";
    }
    if (frase[i] == "ù" || frase[i] == "ú" || frase[i] == "ü" || frase[i] == "û" || frase[i] == "ũ"){
      frase[i] = "u";
    }
    if (frase[i] != ' ') {
      for (var j = 0; j < alfa.length; j++) {
        if (frase[i] == alfa[j]) {
          keep[i] = alfa[(j + x) % alfa.length];
        }
      }
    }
    else {
      keep[i] = ' ';
    }
  }
  area.innerHTML = keep.join("");
  console.log(alfa);
  
}

function Descriptografar() {
  var area = document.getElementById('area');
  var frase = document.getElementById('frase');
  frase = frase.value;
  frase = frase.toLowerCase();
  var off = document.getElementById('casas');
  off = off.value;
  var alfa = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var x = parseInt(off);

  var keep = [];
  var t;
  for (var i = 0; i < frase.length; i++) {

    if (frase[i] == "á" || frase[i] == "à" || frase[i] == "ä" || frase[i] == "â" || frase[i] == "ã" || frase[i] == "@"){
      frase[i] = "a";
    }
    if (frase[i] == "ç" ){
      frase[i] = "c";
    }
    if (frase[i] == "é" || frase[i] == "è" || frase[i] == "ë" || frase[i] == "ê" || frase[i] == "ẽ" || frase[i] == "&"){
      frase[i] = "e";
    }
    if (frase[i] == "í" || frase[i] == "ì" || frase[i] == "ï" || frase[i] == "î" || frase[i] == "ĩ"){
      frase[i] = "i";
    }
    if (frase[i] == "ó" || frase[i] == "ò" || frase[i] == "ö" || frase[i] == "ô" || frase[i] == "õ" || frase[i] == "0"){
      frase[i] = "o";
    }
    if (frase[i] == "ù" || frase[i] == "ú" || frase[i] == "ü" || frase[i] == "û" || frase[i] == "ũ"){
      frase[i] = "u";
    }

    if (frase[i] != ' ') {
      for (var j = alfa.length; j >= 0; j--) {
        if (frase[i] == alfa[j]) {

          t = j+308915776;
          keep[i] = alfa[(t - x) % alfa.length];
        }
      }
    }
    else {
      keep[i] = ' ';
    }
  }
  area.innerHTML = keep.join("");
}