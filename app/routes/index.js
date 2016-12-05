var path = require('path');
var multer = require('multer');
var upload = multer({dest:'./'});

module.exports = function(app){
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname,'../public/index.html'));
    });

    app.post('/',upload.single('myfile'),function (req, res) {
        res.json({
            size: req.file.size
        });
    });
}
