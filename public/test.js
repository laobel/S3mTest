//初始化viewer部件
var viewer = new Cesium.Viewer('cesiumContainer', {
    imageryProvider: new Cesium.WebMapTileServiceImageryProvider({
        url: "http://t{s}.tianditu.com/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=b0ad70dc306d789204ddb4ec0b7c2b4d",
        layer: "tdtBasicLayer",
        style: "default",
        format: "image/jpeg",
        tileMatrixSetID: "GoogleMapsCompatible",
        subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
        show: false
    })
});

var scene = viewer.scene;

let N = Cesium.XML;
let k = Cesium.defined;
let Y = Cesium.Rectangle;
let ba = Cesium.when;
let ka = Cesium.Credential;
let n = Cesium.defaultValue;
let Ah = Cesium.getFilenameFromUri;
let y = Cesium.Check;
let lo = Cesium.loadWithXhr;
let wf = Cesium.loadJson;


function Ht(a, c, d) {
    return lo({
        url: a,
        headers: c,
        request: d
    })
}

function OO(a, c, d, e, f, g, h) {
    yi(a, e.customRequestHeaders).then(function (l) {
        var p = wMa(l, a, e.serverType);
        p.context = c.context;
        p.gl = c.context._gl;
        p.name = f;
        p.supportCompressType = c._supportCompressType;
        p.urlType = e.urlType;
        p.cullEnabled = e.cullEnabled;
        p.horizontalLine = e.horizontalLine;
        p.style3D = e.style3D;
        p.selectEnable = e.selectable;
        p.isVisible = e.isVisible;
        p.minVisibleAltitude = e.minVisibleAltitude;
        p.maxVisibleAltitude = e.maxVisibleAltitude;
        p.minVisibleDistance = e.minVisibleDistance;
        p.maxVisibleDistance = e.maxVisibleDistance;
        p.shadowType = e.shadowType;
        p.heading = e.heading;
        p.lodRangeScale = e.lodRangeScale;
        p.polygonOffset = e.polygonOffset;
        p.brightness = e.brightness;
        p.constrast = e.constrast;
        p.hue = e.hue;
        p.saturation = e.saturation;
        p.gamma = e.gamma;
        p.effect = e.effect;
        p.ignoreNormal = n(e.ignoreNormal, !1);
        p.groupName = n(e.groupName, "");
        p.cacheKey = n(e.cacheKey, "");
        p.customRequestHeaders = e.customRequestHeaders;
        p.sceneMode = c.mode;
        p.loadVolumeData = n(e.loadVolumeData, !0);
        p.scene = c;
        p.useMercatorProject = e.useMercatorProject;
        p.scpUrl = h;
        p.queryFieldNames = e.queryFieldNames;
        p.subdomainConfig = e.subdomainConfig;
        var q = sMa(p.baseUri, e.customRequestHeaders, e.urlType, p.scpUrl);
        l = uMa(l, p.baseUri, e.customRequestHeaders);
        ba(l, function (a) {
            p.waterEffectSet = a;
            ba(q, function (a) {
                p.fieldsInfo = a;
                k(e.isFlyMode) && !0 === e.isFlyMode && k(bounds) ? c.camera.flyTo({
                    destination: bounds,
                    complete: function () {
                        setTimeout(function () {
                            var a = new $a(p);
                            c._layers.add(a, g);
                            d.resolve(a)
                        }, 1E3)
                    }
                }) : (a = new $a(p), c._layers.add(a, g), d.resolve(a))
            }, function () {
                if (!0 === e.isFlyMode) c.camera.flyTo({
                    destination: bounds,
                    complete: function () {
                        var a = new $a(p);
                        c._layers.add(a, g);
                        d.resolve(a)
                    }
                });
                else {
                    var a = new $a(p);
                    c._layers.add(a, g);
                    d.resolve(a)
                }
            })
        }, function () {
            ba(q, function (a) {
                p.fieldsInfo = a;
                k(e.isFlyMode) && !0 === e.isFlyMode && k(bounds) ? c.camera.flyTo({
                    destination: bounds,
                    complete: function () {
                        setTimeout(function () {
                            var a = new $a(p);
                            c._layers.add(a, g);
                            d.resolve(a)
                        }, 1E3)
                    }
                }) : (a = new $a(p), c._layers.add(a, g), d.resolve(a))
            }, function () {
                if (!0 === e.isFlyMode) c.camera.flyTo({
                    destination: bounds,
                    complete: function () {
                        var a = new $a(p);
                        c._layers.add(a, g);
                        d.resolve(a)
                    }
                });
                else {
                    var a = new $a(p);
                    c._layers.add(a, g);
                    d.resolve(a)
                }
            })
        })
    }, function (l) {
        wf(a, e.customRequestHeaders).then(function (l) {
            var k = xMa(l, a, e.serverType);
            k.context = c.context;
            k.gl = c.context._gl;
            k.name = f;
            k.supportCompressType = c._supportCompressType;
            k.urlType = e.urlType;
            k.cullEnabled = e.cullEnabled;
            k.horizontalLine = e.horizontalLine;
            k.style3D = e.style3D;
            k.selectEnable = e.selectable;
            k.isVisible = e.isVisible;
            k.minVisibleAltitude = e.minVisibleAltitude;
            k.maxVisibleAltitude = e.maxVisibleAltitude;
            k.minVisibleDistance = e.minVisibleDistance;
            k.maxVisibleDistance = e.maxVisibleDistance;
            k.shadowType = e.shadowType;
            k.heading = e.heading;
            k.lodRangeScale = e.lodRangeScale;
            k.polygonOffset = e.polygonOffset;
            k.brightness = e.brightness;
            k.constrast = e.constrast;
            k.hue = e.hue;
            k.saturation = e.saturation;
            k.gamma = e.gamma;
            k.effect = e.effect;
            k.ignoreNormal = n(e.ignoreNormal, !1);
            k.groupName = n(e.groupName, "");
            k.cacheKey = n(e.cacheKey, "");
            k._isJson = !0;
            k.sceneMode = c.mode;
            k.scene = c;
            k.useMercatorProject = e.useMercatorProject;
            k.scpUrl = h;
            k.queryFieldNames = e.queryFieldNames;
            k.subdomainConfig = e.subdomainConfig;
            k.customRequestHeaders = e.customRequestHeaders;
            var p = tMa(k.baseUri, e.customRequestHeaders);
            l = vMa(l, k.baseUri, e.customRequestHeaders);
            ba(l, function (a) {
                k.waterEffectSet = a;
                aka(p, c, d, k, g, e)
            }, function () {
                aka(p, c, d, k, g, e)
            })
        }, function (a) {
            d.reject("add s3m layer failed," + a)
        })
    }).otherwise(function (a) {
        d.reject("add s3m layer failed," + a)
    })
}
function DMa(a, c, d, e) {
    var f = ba.defer();
    if (1 === c) var g = c = a;
    else c = a + "/login.json", g = a + "/login.json";
    k(ka.CREDENTIAL) && (e = e.substring(0, e.indexOf("?")), k(ka.CREDENTIAL._keymap[e]) ? (c = ka.addTokenWithKey(e, c), g = ka.addTokenWithKey(e, g)) : (c = ka.addToken(c), g = ka.addToken(g)));
    wf(c, d).then(function (a) {
        var c = Number(a.jsessionID);
        a = EMa(Number(a.random), 397245148883021, 0x8f461e7bf61d5);
        c = {
            jsessionID: c.toString(),
            random: a.toString()
        };
        var e = new XMLHttpRequest;
        e.open("POST", g, !0);
        e.onreadystatechange = function () {
            if (4 === e.readyState)
                if (200 === e.status || 201 === e.status) {
                    var a = {};
                    try {
                        a = JSON.parse(e.response)
                    } catch (B) {
                        -1 !== (e.response || e.responseText).toString().indexOf("isSucceed : true") && (a.succeed = !0)
                    } !0 === a.succeed ? f.resolve(!0) : f.reject(!1)
                } else f.reject(!1)
        };
        if (k(d))
            for (var h in d) d.hasOwnProperty(h) && e.setRequestHeader(h, d[h]);
        e.send(JSON.stringify(c))
    }, function (a) {
        f.reject({
            status: !1,
            url: e
        })
    }).otherwise(function () {
        f.reject({
            status: !1,
            url: e
        })
    });
    return f.promise
}


var ow = {},
    rl = {},
    Fs = {
        iServer: 0,
        oss: 1
    };

function addS3MTilesLayerByScp(a, c, d) {
    if (!k(a)) throw new u("add s3m tiles layer,url is required.");
    c = c || {};
    var e = ba.defer();
    var f = -1 !== a.indexOf("aliyuncs") || -1 !== a.indexOf("oss-cn") ? Fs.oss : Fs.iServer;
    var g;
    if (f === Fs.iServer) {
        g = 1 === c.urlType ? a + "&authentication=login" : a.substring(0, a.indexOf("rest/realspace") + 14);
    };

    var h = a;
    if (k(ka.CREDENTIAL)) {
        h = k(ka.CREDENTIAL._keymap[h]) ? ka.addTokenWithKey(h, h) : ka.addToken(h);
    };

    var l = n(c.name, Ah(h)),
        m = scene;

    if (f === Fs.iServer) {
        c.serverType = Fs.iServer, k(ow[g]) ? (0 === ow[g] && (k(rl[g]) || (rl[g] = {}), k(rl[g][h]) || (rl[g][h] = {
            _this: m,
            deferred: e,
            options: c,
            layerName: l,
            index: d
        })),
            1 === ow[g] && OO(h, m, e, c, l, d, a),
            2 === ow[g] && e.reject("add s3m layer failed," + h)) : (ow[g] = 0,
                DMa(g, c.urlType, c.customRequestHeaders, h).then(function () {
                    ow[g] = 1;
                    OO(h, m, e, c, l, d, a);
                    if (k(rl[g]))
                        for (var f in rl[g]) OO(f, rl[g][f]._this, rl[g][f].deferred, rl[g][f].options, rl[g][f].layerName, rl[g][f].index), delete rl[g][f]
                }, function (a) {
                    ow[g] = 2;
                    delete rl[g];
                    e.reject("add s3m layer failed," + a.url)
                }).otherwise(function (a) {
                    ow[g] = 2;
                    delete rl[g];
                    e.reject(NaN & a.url)
                }))
    } else { 
        c.serverType = Fs.oss, OO(h, m, e, c, l, d, a)
     };

    return e.promise;
};

var scene = viewer.scene;
var widget = viewer.cesiumWidget;
var sceneLayer;

try {
    //设置相机位置，定位至模型
    scene.camera.setView({
        //将经度、纬度、高度的坐标转换为笛卡尔坐标
        destination: new Cesium.Cartesian3.fromDegrees(102.875805622352290, 24.816619546064175, 500),
        orientation: {
            heading: 2.1953426301495345,
            pitch: -0.33632707158103625,
            roll: 6.283185307179586
        }
    }); //设置相机位置，定位至模型
    scene.camera.setView({
        //将经度、纬度、高度的坐标转换为笛卡尔坐标
        destination: new Cesium.Cartesian3.fromDegrees(102.875805622352290, 24.816619546064175, 500),
        orientation: {
            heading: 2.1953426301495345,
            pitch: -0.33632707158103625,
            roll: 6.283185307179586
        }
    });

    let url = 'http://127.0.0.1:3000/s3m/ydcyy/YDXXY/config';
    var promise = addS3MTilesLayerByScp(url);
    //var promise = scene.addS3MTilesLayerByScp('http://www.supermapol.com/realspace/services/3D-suofeiya_church/rest/realspace/datas/Config/config');


    Cesium.when(promise, function (sceneLayer) {
        console.log(sceneLayer);

        //设置相机位置，定位至模型
        scene.camera.setView({
            //将经度、纬度、高度的坐标转换为笛卡尔坐标
            destination: new Cesium.Cartesian3.fromDegrees(102.875805622352290, 24.816619546064175, 500),
            orientation: {
                heading: 2.1953426301495345,
                pitch: -0.33632707158103625,
                roll: 6.283185307179586
            }
        });
        /* var aa=scene.addS3MTilesLayerByScp('http://localhost:3000/s3m/tlTest/Floor@Data/Floor@Data/config',{
            name:'测试'
        }); */

    }, function () {
        var title = '加载SCP失败，请检查网络连接状态或者url地址是否正确？';
        widget.showErrorPanel(title, undefined, e);
    });


}
catch (e) {
    if (widget._showRenderLoopErrors) {
        var title = '渲染时发生错误，已停止渲染。';
        widget.showErrorPanel(title, undefined, e);
    }
}