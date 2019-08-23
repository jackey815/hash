$(() => {
    const CryptoJS = require("crypto-js")

    $('#aes_encode').click(function () {
        var text = $('#text-input').val()
        var key = $('#text-code').val()
        var base64code = CryptoJS.AES.encrypt(text, key).toString()
        $('#text-base64').val(base64code)
    })

    $('#aes_decode').click(function () {
        var chiper = $('#text-base64').val();
        var key = $('#text-code').val()
        var decryptdata = CryptoJS.AES.decrypt(chiper, key);
        $('#text-input').val(decryptdata.toString(CryptoJS.enc.Utf8))
    })

})
