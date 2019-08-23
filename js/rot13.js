$(() => {
    $('#rot13_encode').click(function () {
        Encrypt()
    })

})




function Encrypt() {
    plaintext = document.getElementById("text-input").value.toLowerCase();  
    if(plaintext.length < 1){ alert("please enter some plaintext"); return; }    
    var shift =13;
    ciphertext = "";    var re = /[a-z]/;
    for(i=0; i<plaintext.length; i++){ 
        if(re.test(plaintext.charAt(i))) ciphertext += String.fromCharCode((plaintext.charCodeAt(i) - 97 + shift)%26 + 97); 
        else ciphertext += plaintext.charAt(i); 
    } 
    document.getElementById("text-output").value = ciphertext; 
} 

