$(() => {
    const CryptoJS = require("crypto-js")

    $('#des_encode').click(function () {
        var text = $('#text-input').val()
        var key = $('#text-code').val()
        var base64code = CryptoJS.DES.encrypt(text, key).toString()
        var tripleDes = CryptoJS.TripleDES.encrypt(text, key).toString()
        $('#text-base64').val(base64code)
        $('#text-tripleDes').val(tripleDes)
    })

    $('#des_decode').click(function () {
        var key = $('#text-code').val()
        if ($('#text-base64').val() != "") {
            var chiper = $('#text-base64').val();
            var decryptdata = CryptoJS.DES.decrypt(chiper, key);
            $('#text-input').val(decryptdata.toString(CryptoJS.enc.Utf8))
        }
        else {
            var chiper = $('#text-tripleDes').val();
            var decryptdata = CryptoJS.TripleDES.decrypt(chiper, key);
            $('#text-input').val(decryptdata.toString(CryptoJS.enc.Utf8))
        }


    })

})
