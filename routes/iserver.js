var express = require('express');
var url = require("url");
var fs = require("fs");
var path = require("path");
var router = express.Router();

var root = path.resolve(__dirname, '..').replace(/\\/g, '/');

/* GET users listing. */
router.get('/*', function (req, res, next) {
    var req_path = url.parse(req.url).path;
    req_path = decodeURIComponent(req_path);
    req_path = req_path.split('?')[0]; //去参数

    var filepath = root + req_path;

    var regex_extension = /([^\.\/\\]+)\.([\a-\z\A-\Z0-9]+)$/i;
    var regex_extension_Arr = regex_extension.exec(req_path);

    /*
    var regex_config=/(.*?)\/Config\//i;
    var regex_config_Arr=regex_config.exec(req_path);
    */

    if (regex_extension_Arr === null) {
        filepath = root + '/data' + req_path.replace('/config', '') + '.scp';
    } else {
        if (regex_extension_Arr[2] === 's3m' || regex_extension_Arr[2] === 'dat') {
            var splitArr = req_path.split('/data/path/');
            if (splitArr.length === 2) {
                var p = splitArr[0].lastIndexOf('/');
                var sourceName = splitArr[0].substr(0, p);
                filepath = root + '/data' + sourceName + '/' + splitArr[1];
            } else {
                filepath = root + '/data/' + req_path;
            }
        }
    }




    console.log(req_path);
    console.log(filepath);

    fs.exists(filepath, function (exists) {
        if (exists) {
            fs.stat(filepath, function (err, stats) {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/html;charset=utf8' });
                    res.end('<div styel="color:black;font-size:22px;">server error</div>');
                } else {
                    if (stats.isFile()) {
                        var extname = path.extname(filepath);
                        var file = fs.createReadStream(filepath);
                        var header = {
                            'Content-Type': 'text/html',
                        };
                        switch (extname) {
                            case '.s3m':
                                header = {
                                    'Content-Type': 'application/s3m'
                                };
                                break;
                            case '.scp':
                                header = {
                                    'Content-Type': 'text/html',
                                    'Accept-Ranges': 'bytes'
                                };
                                break;
                        }
                        res.writeHead(200, header);
                        file.pipe(res);
                    }
                }
            });
        } else {
            res.writeHead(404, { 'Content-Type': 'text/html;charset=utf8' });
            res.end('<div styel="color:black;font-size:22px;">404 not found</div>');
        }
    });
});

module.exports = router;
