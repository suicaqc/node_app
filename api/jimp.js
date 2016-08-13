var   url = req.query.url, 
      x = (isNaN(req.query.x) || !req.query.x)?100:parseInt(req.query.x), 
      y = (isNaN(req.query.y) || !req.query.y)?100:parseInt(req.query.y);

  if (url) {
      var Jimp = require(env.space_path + 'package_jimp/node_modules/jimp');
      Jimp.read(url, function (err, image) {
      				res.send(image);
      				return true;
                  if (err) {
                       res.send(err.message);  
                  } else {
                        image.resize(x, y).
                        getBuffer('image/jpeg',function(err,buffer){

                                    res.end(buffer);
            
                        });  
                  }
      });
  } else {
        res.send(req.params[0] + ' is wrong format '); 
  }


