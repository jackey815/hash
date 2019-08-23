$(() => {
    const CryptoJS = require("crypto-js")

    $('#rc4_encode').click(function () {
        var text = CryptoJS.enc.Utf8.parse($('#text-input').val())
        var key = CryptoJS.enc.Utf8.parse($('#text-code').val())
        var ciphertext = CryptoJS.RC4.encrypt(text, key).toString(CryptoJS.format.Hex);
        var base64code =  CryptoJS.RC4.encrypt(text, key).toString()
        //var plaintext = CryptoJS.RC4Drop.decrypt(ciphertext, key, cfg);
        //console.log(base64code)
        $('#text-output').val(ciphertext)
        $('#text-base64').val(base64code)
    })

    $('#rc4_decode').click(function () {
        //var chiper = "0"
        if ($('#text-output').val() != "") {
            var chiper = CryptoJS.enc.Hex.parse($('#text-output').val());
            //console.log($('#text-output').val())
        }
        else {
            var chiper = CryptoJS.enc.Base64.parse($('#text-base64').val());
            $('#text-output').val(chiper.toString(CryptoJS.enc.Hex))
            //console.log($('#text-base64').val())
        }
        //console.log(chiper)
        var key = CryptoJS.enc.Utf8.parse($('#text-code').val())
        var decryptdata = CryptoJS.RC4.decrypt(
            CryptoJS.lib.CipherParams.create({ ciphertext: chiper }),
            key
        );
        //console.log(decryptdata.toString(CryptoJS.enc.Utf8))
        $('#text-input').val(decryptdata.toString(CryptoJS.enc.Utf8))
    })

})
