$(() => {
    $('#atbash_encode').click(function () {
        Encrypt()
    })
    $('#atbash_decode').click(function () {
        Decrypt()
    })
})




function Encrypt() {
    plaintext = document.getElementById("text-input").value.toLowerCase();
    key = "ZYXWVUTSRQPONMLKJIHGFEDCBA".toLowerCase();
    if (plaintext.length < 1) { alert("please enter some plaintext (letters and numbers only)"); return; }
    ciphertext = ""; var re = /[a-z]/;
    for (i = 0; i < plaintext.length; i++) {
        if (re.test(plaintext.charAt(i))) ciphertext += key.charAt(plaintext.charCodeAt(i) - 97);
        else ciphertext += plaintext.charAt(i);
    }
    if (document.getElementById("punc").checked)
        document.getElementById("text-output").value = ciphertext.replace(/[^a-z]/g, "").replace(/([a-z]{5})/g, "$1 ");
    else
        document.getElementById("text-output").value = ciphertext;
}

function Decrypt(f) {
    ciphertext = document.getElementById("text-output").value.toLowerCase();
    key = "ZYXWVUTSRQPONMLKJIHGFEDCBA".toLowerCase();
    if (ciphertext.length < 1) { alert("please enter some ciphertext (letters only)"); return; }
    plaintext = ""; var re = /[a-z]/;
    for (i = 0; i < ciphertext.length; i++) {
        if (re.test(ciphertext.charAt(i))) plaintext += String.fromCharCode(key.indexOf(ciphertext.charAt(i)) + 97);
        else plaintext += ciphertext.charAt(i);
    }
    document.getElementById("text-input").value = plaintext;
}
