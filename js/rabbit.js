$(() => {
    const CryptoJS = require("crypto-js")

    $('#rabbit_encode').click(function () {
        //var text = CryptoJS.enc.Utf8.parse($('#text-input').val())
        //var key = CryptoJS.enc.Utf8.parse($('#text-code').val())
        //var iv = CryptoJS.enc.Utf8.parse($('#text-iv').val())
        //var cfg={
        //    iv: iv,
        //    mode:CryptoJS.mode.CFB,
        //    padding:CryptoJS.pad.Pkcs7,
        //    format:CryptoJS.format.Hex
        //};
        //var ciphertext = CryptoJS.Rabbit.encrypt(text, key, cfg).toString();
        var base64code =  CryptoJS.Rabbit.encrypt($('#text-input').val(),$('#text-code').val())
        //var plaintext = CryptoJS.RC4Drop.decrypt(ciphertext, key, cfg);
        //console.log(base64code)
        //$('#text-output').val(ciphertext)
        $('#text-base64').val(base64code)
    })

    $('#rabbit_decode').click(function () {
        //var chiper = "0"
        //if ($('#text-output').val() != "") {
           // var chiper = CryptoJS.enc.Hex.parse($('#text-output').val());
            //console.log($('#text-output').val())
        //}
        //else {
            var chiper = $('#text-base64').val();
         //   $('#text-output').val(chiper.toString(CryptoJS.enc.Hex))
            //console.log($('#text-base64').val())
        //}
        //console.log(chiper)
        var key = $('#text-code').val()
        // var iv = CryptoJS.enc.Utf8.parse($('#text-iv').val())
        // var cfg={
        //    iv: iv,
        //    mode:CryptoJS.mode.CFB,
        //    padding:CryptoJS.pad.Pkcs7,
        //    format:CryptoJS.format.Hex
        // };
        var decryptdata = CryptoJS.Rabbit.decrypt(chiper,key);
        //console.log(decryptdata.toString(CryptoJS.enc.Utf8))
        $('#text-input').val(decryptdata.toString(CryptoJS.enc.Utf8))
    })

})
