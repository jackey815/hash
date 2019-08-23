const child_process = require('child_process');

$(() => {
    $('#base64_encode').click(function () {
        var text = $('#text-input').val()
        $('#hex-input').val(text.toString())
        output(text, "enbase64")
        output(text, 'enbase32')
        output(text, 'enbase16')
    })

    $('#base64_decode').click(function () {
        var chiper
        if ($('#enbase64-input').val() != "") {
            chiper = $('#enbase64-input').val()
            output(chiper, 'debase64')
        }
        else if ($('#enbase32-input').val() != "") {
            chiper = $('#enbase32-input').val()
            output(chiper, 'debase32')
        }
        else if ($('#enbase16-input').val() != "") {
            chiper = $('#enbase16-input').val()
            output(chiper, 'debase16')
        }

    })

})

function output(text, code_method) {
    var workerProcess = child_process.exec('python3 F:\\Desktop\\test\\simple-samples-master\\hash\\script_python\\base64_code.py ' + code_method + ' ' + text, function (error, stdout, stderr) {
        if (error) {
            console.log(error.stack);
            console.log('Error code: ' + error.code);
            console.log('Signal received: ' + error.signal);
        }
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (code_method.indexOf('debase') >= 0) {
            code_method = "text"
        }
        $('#' + code_method + '-input').val(stdout.toString())
    });

    workerProcess.on('exit', function (code) {
        console.log('子进程已退出，退出码 ' + code);
    });

}