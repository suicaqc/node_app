var fs = require('fs');
var re = new RegExp("^(.+)\.(jpg|jpeg|gif|png)$");
var names = [];

var folder_name = (env.space_path).replace('api/', 'images');
res.send(folder_name);
/*
fs.readdir(__dirname, function(err, files) {
    if (err) res.send(err);
    files.forEach(function(f) { 
        if(re.test(f)) {
        	names[names.length] = f
        }
    });

    res.send(names)
});
*/