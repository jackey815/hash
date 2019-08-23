let {PythonShell} = require('python-shell')

$(() => {

    $('#base64_encode').click(function () {
        var text = $('#text-input').val()
        $('#hex-input').val(text.toString())
        output(text,"enbase64")
        output(text,'enbase32')
        output(text,'enbase16')
    })

    $('#base64_decode').click(function () {
        var chiper
        if ($('#enbase64-input').val() != "") {
            chiper = $('#enbase64-input').val()
            output(chiper,'debase64')
        }
        else if ($('#enbase32-input').val() != ""){
            chiper = $('#enbase32-input').val()
            output(chiper,'debase32')
        }
        else if ($('#enbase16-input').val() != ""){
            chiper = $('#enbase16-input').val()
            output(chiper,'debase16')
        }

    })

})

function output(text,code_method){   
    let options = {
            mode: 'text',
            pythonPath: 'python3',
            //pythonOptions: ['-u'], // get print results in real-time
            scriptPath: __dirname + '/../script_python/',
            args: [code_method, text.toString()]
          };
          PythonShell.run('base64_code.py', options, function (err, results) {
            if (err) throw err;
            // results is an array consisting of messages collected during execution
            console.log(results);
            if (code_method.indexOf('debase') >= 0){
                code_method = "text"
            }
            $('#'+ code_method +'-input').val(results.toString())
          })


}