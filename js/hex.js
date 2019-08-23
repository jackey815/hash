const CryptoJS = require("crypto-js")
let { PythonShell } = require('python-shell')

$(() => {

    $('#hex_encode').click(function () {
        var text = CryptoJS.enc.Utf8.parse($('#text-input').val())
        console.log(text)
        $('#hex-input').val(text.toString())
        output(text, "shellcode")
        output(text, 'ascii')
        output(text, 'quoted')
        output(text, "unicode")
        output(text, "escape")
    })

    $('#hex_decode').click(function () {
        if ($('#hex-input').val() != "") {
            var chiper = CryptoJS.enc.Hex.parse($('#hex-input').val());
            $('#text-input').val(chiper.toString(CryptoJS.enc.Utf8))
        }
        else if ($('#shellcode-input').val() != "") {
            var hex_chiper = $('#shellcode-input').val().replace(/\\x/g, "")
            console.log(hex_chiper)
            var chiper = CryptoJS.enc.Hex.parse(hex_chiper)
            $('#text-input').val(chiper.toString(CryptoJS.enc.Utf8))
        }
        else if ($('#quoted-input').val() != "") {
            var hex_chiper = $('#quoted-input').val().replace(/=/g, "")
            console.log(hex_chiper)
            var chiper = CryptoJS.enc.Hex.parse(hex_chiper)
            $('#text-input').val(chiper.toString(CryptoJS.enc.Utf8))
        }
        else if ($('#ascii-input').val() != "") {
            var chiper = $('#ascii-input').val()
            console.log(chiper)
            method = "ascii_de"
            options = {
                mode: 'text',
                pythonPath: 'python3',
                //pythonOptions: ['-u'], // get print results in real-time
                scriptPath: __dirname + '/../script_python/',
                args: [method, chiper]
            };
            PythonShell.run('hex_all.py', options, function (err, results) {
                if (err) throw err;
                // results is an array consisting of messages collected during execution
                console.log(results[1]);
                if (results[1].toString() == "error") {
                    $('#text-input').val("使用acsii编码转中文时可能出错，试着再点一下解码")
                    $('#hex-input').val(results[0])
                }
                else {
                    $('#text-input').val(results[1])
                }
            });

        }
    })

})

function output(text, code_method) {
    let options = {
        mode: 'text',
        pythonPath: 'python3',
        //pythonOptions: ['-u'], // get print results in real-time
        scriptPath: __dirname + '/../script_python/',
        args: [code_method, text.toString()]
    };
    PythonShell.run('hex_all.py', options, function (err, results) {
        if (err) throw err;
        // results is an array consisting of messages collected during execution
        console.log(results.toString());
        $('#' + code_method + '-input').val(results.toString())
    })


}