var fs = require('fs')

var args = process.argv.splice(2);
var fileDirectory = args[0] || 'src/images';

if (fs.existsSync(fileDirectory)) {
    var files = fs.readdirSync(fileDirectory);
    
    files.forEach(function(file) {
        var filePath = fileDirectory + "/" + file;
         
        if (/\.png$/.test(file)) {
            var fileName = file.replace(/(\-)(\d+)(\_s\.png)/, function() {
                console.log(arguments[1]+"---"+((arguments[2] | 0) + 1714)+"---"+arguments[3])
                return arguments[1] + ((arguments[2] | 0) + 1714) + arguments[3];
            })
            fileName = fileName.slice(fileName.length-6);
            if(fileName==="00.png"){
                fileName = "0.png";
            }
            var newFilePath = fileDirectory + "/" + fileName;
            
            fs.rename(filePath, newFilePath, function(err) {
                if (err) throw err;
                console.log(fileName + ' ok');
            })
        }
    })
     
}else{
    console.log(fileDirectory + "no");
}