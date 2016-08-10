var fs = require('fs');
var re = new RegExp("^(.+)\.(jpg|jpeg|gif|png)$");
var names = [];

res.send(env)
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