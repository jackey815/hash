$(() => {
  $('#railfence_encode').click(function () {
    Encrypt()
  })
  $('#railfence_decode').click(function () {
    Decrypt()
  })
})




function Encrypt() {
  plaintext = document.getElementById("text-input").value;
  if (plaintext.length < 1) { alert("please enter some plaintext"); return; }
  var key = parseInt(document.getElementById("text-code").value);
  if (key > Math.floor(2 * (plaintext.length - 1))) { alert("key is too large for the plaintext length."); return; }
  if (key <= 0) return;
  if (key == 1) ciphertext = plaintext;
  else {
    ciphertext = "";
    for (line = 0; line < key - 1; line++) {
      skip = 2 * (key - line - 1); j = 0;
      for (i = line; i < plaintext.length;) {
        ciphertext += plaintext.charAt(i);
        if ((line == 0) || (j % 2 == 0)) i += skip;
        else i += 2 * (key - 1) - skip;
        j++;
      }
    }
    for (i = line; i < plaintext.length; i += 2 * (key - 1)) ciphertext += plaintext.charAt(i);
  }
  document.getElementById("text-output").value = ciphertext;
}

function Decrypt() {
  ciphertext = document.getElementById("text-output").value;
  if (ciphertext.length < 1) { alert("please enter some ciphertext (letters only)"); return; }
  var key = parseInt(document.getElementById("text-code").value);
  if (key > Math.floor(2 * (ciphertext.length - 1))) { alert("key is too large for the ciphertext length."); return; }
  if (key <= 0) return;
  if (key == 1) document.getElementById("p").value = ciphertext;
  else {
    pt = new Array(ciphertext.length); k = 0;
    for (line = 0; line < key - 1; line++) {
      skip = 2 * (key - line - 1); j = 0;
      for (i = line; i < ciphertext.length;) {
        pt[i] = ciphertext.charAt(k++);
        if ((line == 0) || (j % 2 == 0)) i += skip;
        else i += 2 * (key - 1) - skip;
        j++;
      }
    }
    for (i = line; i < ciphertext.length; i += 2 * (key - 1)) pt[i] = ciphertext.charAt(k++);
    document.getElementById("text-input").value = pt.join("");
  }
}
