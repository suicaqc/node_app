var Jimp = require("package_jimp/node_modules/jimp");

var lenna = new Jimp("/var/node_app_server/_microservice/photoserver/photos/IMG_0454.jpg", function () {
    this.resize(180, 180) // resize
        .write("mini.png"); // save
});

