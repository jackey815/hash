$(() => {
    $('#affine_encode').click(function () {
        Encrypt()
    })
    $('#affine_decode').click(function () {
        Decrypt()
    })
})




function Encrypt() {
    var word, newword, code, newcode, newletter
    var addkey, multkey
    word = $("#text-input").val()
    word = word.toLowerCase()
    word = word.replace(/\W/g, "")
    addkey = parseInt($("#B-input").val())
    // for (i = 0; i < f.add.options.length; i++) {
    //     addkey = addkey + (f.add.options[i].text) * (f.add.options[i].selected)
    // }
    multkey = parseInt($("#A-input").val())
    // for (i = 0; i < f.mult.options.length; i++) {
    //     multkey = multkey + (f.mult.options[i].text) * (f.mult.options[i].selected)
    // }
    newword = ""
    for (i = 0; i < word.length; i++) {
        code = word.charCodeAt(i) - 97
        newcode = ((multkey * code + addkey) % 26) + 97
        newletter = String.fromCharCode(newcode)
        newword = newword + newletter
    }
    $("#text-output").val(newword + " ")
}
function Decrypt(f) {
    var word, newword, code, newcode, newletter
    var addkey, multkey, multinverse
    word = $("#text-output").val()
    word = word.toLowerCase()
    word = word.replace(/\W/g, "")
    addkey = parseInt($("#B-input").val())
    // for (i = 0; i < f.add.options.length; i++) {
    //     addkey = addkey + (f.add.options[i].text) * (f.add.options[i].selected)
    // }
    multkey = parseInt($("#A-input").val())
    // for (i = 0; i < f.mult.options.length; i++) {
    //     multkey = multkey + (f.mult.options[i].text) * (f.mult.options[i].selected)
    // }
    multinverse = 1
    for (i = 1; i <= 25; i = i + 2) {
        if ((multkey * i) % 26 == 1) { multinverse = i }
    }
    newword = ""
    for (i = 0; i < word.length; i++) {
        code = word.charCodeAt(i) - 97
        newcode = ((multinverse * (code + 26 - addkey)) % 26) + 97
        newletter = String.fromCharCode(newcode)
        newword = newword + newletter
    }
    $("#text-input").val(newword + " ")
}
