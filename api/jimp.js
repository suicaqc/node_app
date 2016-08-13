if (!pkg.db.photo_cache) {
      pkg.db.photo_cache = new pkg.Nedb({ filename: '_db/photo_cache', autoload: true });
}
var   url = req.query.url, 
      x = (isNaN(req.query.x) || !req.query.x)?100:parseInt(req.query.x), 
      y = (isNaN(req.query.y) || !req.query.y)?100:parseInt(req.query.y),
      force = req.query.force;

  if (url) {
     pkg.db.photo_cache.find({ source: url+'_' + x + '_' + y}, function (err, docs) {
      	if ((docs[0]) && !force) {
      		// res.send(docs[0].img);
      	   	res.writeHead(200, {'Content-Type': 'image/gif' });	
      	      res.end(new Buffer(docs[0].img,'base64'));
      	} else {	    		
                  var Jimp = require(env.space_path + 'package_jimp/node_modules/jimp');
                  Jimp.read(url, function (err, image) {
                              if (err) {
                                   res.send(err.message);  
                              } else {
                                    // image.scaleToFit(x, y)
                                    image.contain(x,y, Jimp.HORIZONTAL_ALIGN_CENTER | Jimp.VERTICAL_ALIGN_MIDDLE).background(0X00000000).
                                    getBuffer(Jimp.MIME_JPEG,function(err,buffer){
                                          var rec = { 
                                                source: url+'_' + x + '_' + y,
                                                type:Jimp.MIME_JPEG,
                                                img : buffer.toString('base64')
                                          }
 					pkg.db.photo_cache.insert(rec, function (err) {
						 res.end(buffer);
					  });                         
                                          
                                             
                        
                                    });  
                              }
                  });
      	}
        });        
        
        

  } else {
        res.send(req.params[0] + ' is wrong format '); 
  }
