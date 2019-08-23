let { PythonShell } = require('python-shell')

$(() => {

  $('#caesar_decode').click(function () {
    var text = $('#text-input').val()
    Decrypt(text)
  })

  $('#caesar_decode2').click(function () {
    var text = $('#text-input').val()
    output(text)
  })

})

function output(text) {
  let options = {
    mode: 'text',
    pythonPath: 'python3',
    //pythonOptions: ['-u'], // get print results in real-time
    scriptPath: __dirname + '/../script_python/',
    args: [text.toString()]
  };
  PythonShell.run('ceasar.py', options, function (err, results) {
    if (err) throw err;
    // results is an array consisting of messages collected during execution
    //console.log(results);
    anw = ""
    for (i = 0; i < results.length; i++) {
      anw += results[i] + "\n";
      //console.log(anw);
    }
    $('#text-output').val(anw)
  })


}

function Decrypt(chiphertext) {
  ciphertext = chiphertext.toLowerCase();
  $("#text-output").empty();
  // do some error checking 
  if (ciphertext.length < 1) { alert("please enter some ciphertext (letters only)"); return; }
  for (shift = 0; shift < 27; shift++) {
    plaintext = ""; var re = /[a-z]/;
    for (i = 0; i < ciphertext.length; i++) {
      if (re.test(ciphertext.charAt(i))) plaintext += String.fromCharCode((ciphertext.charCodeAt(i) - 97 + 26 - shift) % 26 + 97);
      else plaintext += ciphertext.charAt(i);
    }
    $("#text-output").append(shift.toString() + " : " + plaintext + "\n");
  }
} 