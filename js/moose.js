let {PythonShell} = require('python-shell')

$(() => {

    $('#moose_encode').click(function () {
        var text = $('#text-input').val()
        output(text)
    })

})

function output(text){   
    let options = {
            mode: 'text',
            pythonPath: 'python3',
            //pythonOptions: ['-u'], // get print results in real-time
            scriptPath: __dirname + '/../script_python/',
            args: [text.toString()]
          };
          PythonShell.run('moose.py', options, function (err, results) {
            if (err) throw err;
            // results is an array consisting of messages collected during execution
            console.log(results);
            $('#text-output').val(results.toString())
          })


}