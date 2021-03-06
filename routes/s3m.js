var express = require('express');
var fs = require("fs");
var path = require("path");
var router = express.Router();

var root = path.resolve(__dirname, '..').replace(/\\/g, '/');


/* GET users listing. */
router.get('/*', function (req, res, next) {
    var req_path =req.url;
    let queryObj=req.query;

    if(['oss-cn','aliyuncs'].includes(queryObj).type){
        aliyun(req_path,res,next);
    }else{
        iserver(req_path,res,next);
    }    
});

router.post('/*', function (req, res, next) {    
    res.status(200).json({
        postResultType:"CreateChild",
        succeed:true
    });
    res.end();
});


//阿里云方法
function aliyun(req_path,res,next){
    var filepath = root + req_path;

    var regex_extension = /([^\.\/\\]+)\.([\a-\z\A-\Z0-9]+)$/i;
    var regex_extension_Arr = regex_extension.exec(req_path);

   
    if (regex_extension_Arr === null) {
        filepath = root + '/data' + req_path.replace('/config', '') + '.scp';
    } else {
        filepath = root + '/data/' + req_path;
    }req_pathreq_path

    readFileAndRes(filepath,res,next);
}

//iserver方法
function iserver(req_path,res,next){
    var filepath = root + req_path;

    var regex_extension = /([^\.\/\\]+)\.([\a-\z\A-\Z0-9]+)$/i;
    var regex_extension_Arr = regex_extension.exec(req_path);


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

    if(filepath.includes('/rest/realspace/login.json')){
        res.status(200).json({
            random:"819891636059174",
            jsessionID:"999671819"
        });
        res.end();
    }else{
        filepath=filepath.replace('/rest/realspace', '');
        readFileAndRes(filepath,res,next);
    }
}

function readFileAndRes(filepath,res,next){
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
}

module.exports = router;
