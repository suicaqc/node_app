var Jimp = require("./package_jimp/node_modules/jimp");

console.log("test1");
res.send('test1');

var lenna = new Jimp("/var/node_app_server/_microservice/photoserver/photos/IMG_0454.jpg", function () {
    this.resize(180, 180) // resize
        .write("mini.png", function() {
        	
        }); // save
});


