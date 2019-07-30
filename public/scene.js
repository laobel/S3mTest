define("Scene/Scene", [
    "../Core/BoundingRectangle",
    "../Core/BoundingSphere",
    "../Core/BoxGeometry",
    "../Core/Cartesian2",
    "../Core/Cartesian3",
    "../Core/Cartesian4",
    "../Core/Cartographic",
    "../Core/XML",
    "../Core/Color",
    "../Core/ColorGeometryInstanceAttribute",
    "../Core/createGuid",
    "../Core/CullingVolume",
    "../Core/defaultValue",
    "../Core/defined",
    "../Core/defineProperties",
    "../Core/destroyObject",
    "../Core/DeveloperError",
    "../Core/EllipsoidGeometry",
    "../Core/Event",
    "../Core/GeographicProjection",
    "../Core/GeometryInstance",
    "../Core/GeometryPipeline",
    "../Core/getTimestamp",
    "../Core/Intersect",
    "../Core/Interval",
    "../Core/JulianDate",
    "../Core/Math",
    "../Core/Matrix4",
    "../Core/mergeSort",
    "../Core/Occluder",
    "../Core/OrthographicFrustum",
    "../Core/OrthographicOffCenterFrustum",
    "../Core/PerspectiveFrustum",
    "../Core/PerspectiveOffCenterFrustum",
    "../Core/PixelFormat",
    "../Core/RequestScheduler",
    "../Core/ShowGeometryInstanceAttribute",
    "../Core/Transforms",
    "../Core/Credential",
    "../Renderer/ClearCommand",
    "../Renderer/ComputeEngine",
    "../Renderer/Context",
    "../Renderer/ContextLimits",
    "../Renderer/DrawCommand",
    "../Renderer/Framebuffer",
    "../Renderer/Pass",
    "../Renderer/PassState",
    "../Renderer/PixelDatatype",
    "../Renderer/RenderState",
    "../Renderer/ShaderProgram",
    "../Renderer/ShaderSource",
    "../Renderer/Texture",
    "./Compositor",
    "./BrdfLutGenerator",
    "./Camera",
    "./CreditDisplay",
    "./DebugCameraPrimitive",
    "./DepthPlane",
    "./DeviceOrientationCameraController",
    "./Fog",
    "./FrameState",
    "./FrustumCommands",
    "./FXAA",
    "./GlobeDepth",
    "./InvertClassification",
    "./JobScheduler",
    "./MapMode2D",
    "./MultiViewportMode",
    "./OIT",
    "./PerformanceDisplay",
    "./PerInstanceColorAppearance",
    "./PickDepth",
    "./Primitive",
    "./PrimitiveCollection",
    "./SceneMode",
    "./SceneTransforms",
    "./SceneTransitioner",
    "./ScreenSpaceCameraController",
    "./ShadowMap",
    "./SunPostProcess",
    "./TweenCollection",
    "../S3MTiles/S3MTilesLayer",
    "../ThirdParty/when",
    "../Core/loadXML",
    "../Core/loadText",
    "../ThirdParty/Uri",
    "../Core/EasingFunction",
    "./BillboardCollection",
    "./Layers",
    "./CullFace",
    "../Core/Rectangle",
    "../Core/Ray",
    "../Core/IntersectionTests",
    "../Core/Ellipsoid",
    "../S3MTiles/S3MInstanceCollection",
    "../Core/loadJson",
    "./SuperMapImageryProvider",
    "../Core/CesiumTerrainProvider",
    "../DataSources/KmlDataSource",
    "../Renderer/Style3D",
    "../Core/HeadingPitchRoll",
    "./FillStyle",
    "../Core/getBaseUri",
    "../Core/getFilenameFromUri",
    "../S3MTiles/S3MRegionEffect",
    "../S3MTiles/S3MPolylineEffect",
    "../ThirdParty/netcdf",
    "../Core/loadArrayBuffer",
    "./FieldLayer3D"
], function (
    e,
    t,
    r,
    i,
    n,
    o,
    a,
    s,
    l,
    u,
    c,
    d,
    h,
    _,
    f,
    p,
    m,
    v,
    y,
    g,
    b,
    C,
    w,
    S,
    x,
    T,
    E,
    P,
    A,
    D,
    O,
    $,
    M,
    I,
    R,
    L,
    N,
    F,
    B,
    Y,
    k,
    X,
    V,
    U,
    z,
    G,
    H,
    W,
    j,
    q,
    Q,
    K,
    J,
    Z,
    ee,
    te,
    re,
    ie,
    ne,
    oe,
    ae,
    se,
    le,
    ue,
    ce,
    de,
    he,
    _e,
    fe,
    pe,
    me,
    ve,
    ye,
    ge,
    be,
    Ce,
    we,
    Se,
    xe,
    Te,
    Ee,
    Pe,
    Ae,
    De,
    Oe,
    $e,
    Me,
    Ie,
    Re,
    Le,
    Ne,
    Fe,
    Be,
    Ye,
    ke,
    Xe,
    Ve,
    Ue,
    ze,
    Ge,
    He,
    We,
    je,
    qe,
    Qe,
    Ke,
    Je,
    Ze,
    et
) {
    function tt(t) {
        t = h(t, h.EMPTY_OBJECT);
        var r = t.canvas,
            i = t.contextOptions,
            n = t.creditContainer,
            o = t.creditViewport;
        if (!_(r)) {
            throw new m("options and options.canvas are required.")
        }
        var a = _(n),
            s = new X(r, i);
        a || (n = document.createElement("div"), n.style.position = "absolute", n.style.bottom = "0", n.style["text-shadow"] = "0 0 2px #000000", n.style.color = "#ffffff", n.style["font-size"] = "10px", n.style["padding-right"] = "5px", r.parentNode.appendChild(n)), _(o) || (o = r.parentNode), this._supportCompressType = 0, null != s.s3tc ? this._supportCompressType = 1 : null != s.pvrtc ? this._supportCompressType = 2 : null != s.etc1 && (this._supportCompressType = 3), this._id = c(), this._jobScheduler = new de, this._frameState = new ae(s, new te(n, " �?", o), this._jobScheduler), this._frameState.scene3DOnly = h(t.scene3DOnly, !1), this._removeCreditContainer = !a, this._creditContainer = n;
        var u = new H(s);
        u.viewport = new e, u.viewport.x = 0, u.viewport.y = 0, u.viewport.width = s.drawingBufferWidth, u.viewport.height = s.drawingBufferHeight, this._passState = u, this._canvas = r, this._context = s, this._computeEngine = new k(s), this._globe = void 0, this._primitives = new ge, this._groundPrimitives = new ge, this._tweens = new Ee, this._layers = new Re, this._shaderFrameCount = 0, this._sunPostProcess = void 0, this._computeCommandList = [], this._frustumCommandsList = [], this._overlayCommandList = [], this._pickFramebuffer = void 0, this._reflectFramebuffer = void 0, this._normalFramebuffer = void 0, this._useOIT = h(t.orderIndependentTranslucency, !0), this._executeOITFunction = void 0;
        var d;
        s.depthTexture && (d = new ue);
        var f;
        this._useOIT && _(d) && (f = new fe(s)), this._globeDepth = d, this._depthPlane = new ie, this._oit = f, this._fxaa = new le, this._clearColorCommand = new Y({
            color: new l,
            stencil: 0,
            owner: this
        }), this._depthClearCommand = new Y({
            depth: 1,
            stencil: 0,
            owner: this
        }), this._stencilClearCommand = new Y({
            stencil: 0
        }), this._pickDepths = [], this._debugGlobeDepths = [], this._pickDepthPassState = void 0, this._pickDepthFramebuffer = void 0, this._pickDepthFramebufferWidth = void 0, this._pickDepthFramebufferHeight = void 0, this._depthOnlyRenderStateCache = {}, this._transitioner = new we(this), this._renderError = new y, this._preRender = new y, this._postRender = new y, this._cameraStartFired = !1, this._cameraMovedTime = void 0, this._pickPositionCache = {}, this._pickPositionCacheDirty = !1, this._minimumDisableDepthTestDistance = 0, this.rethrowRenderErrors = !1, this.completeMorphOnUserInput = !0, this.morphStart = new y, this.morphComplete = new y, this.skyBox = void 0, this.skyAtmosphere = void 0, this.sun = void 0, this.sunBloom = !0, this._sunBloom = void 0, this.moon = void 0, this.backgroundColor = l.clone(l.BLACK), this._mode = be.SCENE3D, this._mapProjection = _(t.mapProjection) ? t.mapProjection : new g, this.morphTime = 1, this.farToNearRatio = 1000, this.nearToFarDistance2D = 1750000, this.debugCommandFilter = void 0, this.debugShowCommands = !1, this.debugShowFrustums = !1, this._debugFrustumStatistics = void 0, this.debugShowFramesPerSecond = !1, this.debugShowGlobeDepth = !1, this.debugShowDepthFrustum = 1, this.debugShowFrustumPlanes = !1, this._debugShowFrustumPlanes = !1, this._debugFrustumPlanes = void 0, this.fxaa = !0, this.useDepthPicking = !0, this.pickTranslucentDepth = !1, this.cameraEventWaitTime = 500, this.copyGlobeDepth = !1, this.fog = new oe, this._sunCamera = new ee(this), this.shadowMap = new xe({
            context: s,
            lightCamera: this._sunCamera,
            enabled: h(t.shadows, !1)
        }), this.invertClassification = !1, this.invertClassificationColor = l.clone(l.WHITE), this._actualInvertClassificationColor = l.clone(this._invertClassificationColor), this._invertClassification = new ce, this.focalLength = void 0, this.eyeSeparation = void 0, this._brdfLutGenerator = new Z, this._terrainExaggeration = h(t.terrainExaggeration, 1), this._performanceDisplay = void 0, this._debugVolume = void 0;
        var p = new ee(this);
        this._camera = p, this._cameraClone = ee.clone(p), this._screenSpaceCameraController = new Se(this), this._mapMode2D = h(t.mapMode2D, he.INFINITE_SCROLL), this._environmentState = {
            skyBoxCommand: void 0,
            skyAtmosphereCommand: void 0,
            sunDrawCommand: void 0,
            sunComputeCommand: void 0,
            moonCommand: void 0,
            isSunVisible: !1,
            isMoonVisible: !1,
            isReadyForAtmosphere: !1,
            isSkyAtmosphereVisible: !1,
            clearGlobeDepth: !1,
            useDepthPlane: !1,
            originalFramebuffer: void 0,
            useGlobeDepthFramebuffer: !1,
            useOIT: !1,
            useFXAA: !1,
            usePostEffect: !1,
            useInvertClassification: !1
        }, this._environmentVisible = {
            isSunVisible: !0,
            isMoonVisible: !0,
            isSkyAtmosphereVisible: !0,
            isSkyBoxVisible: !0,
            isGlobalVisible: !0,
            isObjectVisible: !0
        }, this._undergroundMode = !1, this._undergroundDepth = 100, this._analyst3D = new Re, this._enableOcclude = !0, this.compositor = new J(s), this._multiViewportMode = _e.NONE, this._multiViewportInfo = [], this._useWebVR = !1, this._cameraVR = void 0, this._aspectRatioVR = void 0;
        var v = p.frustum.near,
            b = p.frustum.far,
            C = Math.ceil(Math.log(b / v) / Math.log(this.farToNearRatio));
        lt(v, b, this.farToNearRatio, C, this._frustumCommandsList, !1, void 0), st(this, 0, T.now()), this.initializeFrame()
    }

    function rt(e, t) {
        var r = Math.max(Math.abs(e.x), Math.abs(t.x)),
            i = Math.max(Math.abs(e.y), Math.abs(t.y)),
            n = Math.max(Math.abs(e.z), Math.abs(t.z));
        return Math.max(Math.max(r, i), n)
    }

    function it(e, t, r) {
        var i = 1 / Math.max(1, rt(e.position, t.position));
        return n.multiplyByScalar(e.position, i, er), n.multiplyByScalar(t.position, i, tr), n.equalsEpsilon(er, tr, r) && n.equalsEpsilon(e.direction, t.direction, r) && n.equalsEpsilon(e.up, t.up, r) && n.equalsEpsilon(e.right, t.right, r) && P.equalsEpsilon(e.transform, t.transform, r)
    }

    function nt(e, t) {
        var r = e.frameState,
            i = e._context,
            n = r.shadowHints.shadowsEnabled,
            o = r.shadowHints.shadowMaps,
            a = r.shadowHints.lightShadowMaps,
            s = n && a.length > 0,
            l = !1,
            u = r.shadowHints.lastDirtyTime;
        t.lastDirtyTime !== u && (t.lastDirtyTime = u, t.dirty = !0, l = !0);
        var c = t.derivedCommands;
        if (t.dirty && _(c)) {
            t.dirty = !1, n && (t.receiveShadows || t.castShadows) && (c.shadows = xe.createDerivedCommands(o, a, t, l, i, c.shadows));
            var d = e._oit;
            t.pass === G.TRANSLUCENT && _(d) && d.isSupported() && (s && t.receiveShadows ? (c.oit = _(c.oit) ? c.oit : {}, c.oit.shadows = d.createDerivedCommands(t.derivedCommands.shadows.receiveCommand, i, c.oit.shadows)) : c.oit = d.createDerivedCommands(t, i, c.oit)), c.depth = zt(e, t, i, c.depth)
        }
    }

    function ot(e) {
        var t = e.globe;
        if (e._mode === be.SCENE3D && _(t)) {
            var r = t.ellipsoid;
            return rr.radius = r.minimumRadius, Zt = D.fromBoundingSphere(rr, e._camera.positionWC, Zt)
        }
    }

    function at(e) {
        e.render = !1, e.pick = !1, e.depth = !1
    }

    function st(e, t, r) {
        var i = e._camera,
            n = e._frameState;
        n.commandList.length = 0, n.shadowMaps.length = 0, n.brdfLutGenerator = e._brdfLutGenerator, n.environmentMap = e.skyBox && e.skyBox._cubeMap, n.mode = e._mode, n.morphTime = e.morphTime, n.mapProjection = e.mapProjection, n.frameNumber = t, n.time = T.clone(r, n.time), n.camera = i, n.cullingVolume = i.frustum.computeCullingVolume(i.positionWC, i.directionWC, i.upWC), n.occluder = ot(e), n.terrainExaggeration = e._terrainExaggeration, n.minimumDisableDepthTestDistance = e._minimumDisableDepthTestDistance, n.invertClassification = e.invertClassification, e._actualInvertClassificationColor = l.clone(e.invertClassificationColor, e._actualInvertClassificationColor), ce.isTranslucencySupported(e._context) || (e._actualInvertClassificationColor.alpha = 1), n.invertClassificationColor = e._actualInvertClassificationColor, _(e.globe) ? n.maximumScreenSpaceError = e.globe.maximumScreenSpaceError : n.maximumScreenSpaceError = 2, at(n.passes)
    }

    function lt(e, t, r, i, n, o, a) {
        n.length = i;
        for (var s = 0; i > s; ++s) {
            var l, u;
            o ? (l = Math.min(t - a, e + s * a), u = Math.min(t, l + a)) : (l = Math.max(e, Math.pow(r, s) * e), u = Math.min(t, r * l));
            var c = n[s];
            _(c) ? (c.near = l, c.far = u) : c = n[s] = new se(l, u)
        }
    }

    function ut(e, t, r) {
        e.debugShowFrustums && (t.debugOverlappingFrustums = 0);
        for (var i = e._frustumCommandsList, n = i.length, o = 0; n > o; ++o) {
            var a = i[o],
                s = a.near,
                l = a.far;
            if (!(r.start > l && t.cull)) {
                if (r.stop < s && t.cull) {
                    break
                }
                var u = t.pass;
                1 == e.undergroundMode && u == G.GLOBE && e.globe.globeAlpha < 1 && (u = G.TRANSLUCENT, t.pass = u);
                var c = a.indices[u]++;
                if (a.commands[u][c] = t, e.debugShowFrustums && (t.debugOverlappingFrustums |= 1 << o), t.executeInClosestFrustum) {
                    break
                }
            }
        }
        if (e.frameState.passes.pick || nt(e, t), e.debugShowFrustums) {
            var d = e._debugFrustumStatistics.commandsInFrustums;
            d[t.debugOverlappingFrustums] = _(d[t.debugOverlappingFrustums]) ? d[t.debugOverlappingFrustums] + 1 : 1, ++e._debugFrustumStatistics.totalCommands
        }
    }

    function ct(e, t, r, i) {
        return _(e) && (!_(e.boundingVolume) || !e.cull || t.computeVisibility(e.boundingVolume) !== S.OUTSIDE && (!_(r) || _(i) && !i || !e.boundingVolume.isOccluded(r)))
    }

    function dt(e) {
        var t = e._frameState,
            r = t.camera,
            i = r.directionWC,
            n = r.positionWC,
            o = e._computeCommandList,
            a = e._overlayCommandList,
            s = t.commandList;
        e.debugShowFrustums && (e._debugFrustumStatistics = {
            totalCommands: 0,
            commandsInFrustums: {}
        });
        for (var l = e._frustumCommandsList, u = l.length, c = G.NUMBER_OF_PASSES, d = 0; u > d; ++d) {
            for (var h = 0; c > h; ++h) {
                l[d].indices[h] = 0
            }
        }
        o.length = 0, a.length = 0;
        var f = Number.MAX_VALUE,
            p = -Number.MAX_VALUE,
            m = !1,
            v = t.shadowHints.shadowsEnabled,
            y = Number.MAX_VALUE,
            g = -Number.MAX_VALUE,
            b = Number.MAX_VALUE,
            C = t.mode === be.SCENE3D ? t.occluder : void 0,
            w = e.enableOcclude;
        if (t.mode === be.SCENE3D) {
            var S = t.camera.positionCartographic.height;
            (S > E.Radious || 0 > S) && (w = !1)
        }
        for (var x = t.cullingVolume, T = ir.planes, P = 0; 5 > P; ++P) {
            T[P] = x.planes[P]
        }
        x = ir;
        for (var A = s.length, D = 0; A > D; ++D) {
            var O = s[D];
            if (e.terrainProvider.isShowGlobe || 1 != O.invalid) {
                var $ = O.pass;
                if ($ === G.COMPUTE) {
                    o.push(O)
                } else {
                    if ($ === G.OVERLAY) {
                        a.push(O)
                    } else {
                        var M = O.boundingVolume;
                        if (_(M)) {
                            if (!ct(O, x, C, w)) {
                                continue
                            }
                            if (nr = M.computePlaneDistances(n, i, nr), f = Math.min(f, nr.start), p = Math.max(p, nr.stop), v && O.receiveShadows && nr.start < xe.MAXIMUM_DISTANCE && !($ === G.GLOBE && nr.start < -100 && nr.stop > 100)) {
                                var I = nr.stop - nr.start;
                                $ !== G.GLOBE && nr.start < 100 && (b = Math.min(b, I)), y = Math.min(y, nr.start), g = Math.max(g, nr.stop)
                            }
                        } else {
                            nr.start = r.frustum.near, nr.stop = r.frustum.far, m = !(O instanceof Y)
                        }
                        ut(e, O, nr)
                    }
                }
            }
        }
        m ? (f = r.frustum.near, p = r.frustum.far) : (f = Math.min(Math.max(f, r.frustum.near), r.frustum.far), p = Math.max(Math.min(p, r.frustum.far), f)), v && (y = Math.min(Math.max(y, r.frustum.near), r.frustum.far), g = Math.max(Math.min(g, r.frustum.far), y)), v && (t.shadowHints.nearPlane = y, t.shadowHints.farPlane = g, t.shadowHints.closestObjectSize = b);
        var R = e.mode === be.SCENE2D,
            L = e.farToNearRatio;
        if (t._isDepth === !0) {
            var N = 1;
            if (f = r.frustum.near, p = r.frustum.far, f !== Number.MAX_VALUE && (N !== u || 0 !== l.length && (f !== l[0].near || p !== l[0].far))) {
                l.length = 1;
                var F = l[0];
                _(F) ? (F.near = f, F.far = p) : F = l[0] = new se(f, p), dt(e, !0)
            }
            var B = t.frustumSplits;
            B.length = N + 1;
            for (var k = 0; N > k; ++k) {
                B[k] = l[k].near, k === N - 1 && (B[k + 1] = l[k].far)
            }
        } else {
            var N;
            R ? (p = Math.min(p, r.position.z + e.nearToFarDistance2D), f = Math.min(f, p), N = Math.ceil(Math.max(1, p - f) / e.nearToFarDistance2D)) : N = Math.ceil(Math.log(p / f) / Math.log(L)), f !== Number.MAX_VALUE && (N !== u || 0 !== l.length && (f < l[0].near || p > l[u - 1].far && !E.equalsEpsilon(p, l[u - 1].far, E.EPSILON8))) && (lt(f, p, L, N, l, R, e.nearToFarDistance2D), dt(e));
            var B = t.frustumSplits;
            B.length = N + 1;
            for (var k = 0; N > k; ++k) {
                B[k] = l[k].near, k === N - 1 && (B[k + 1] = l[k].far)
            }
        }
    }

    function ht(e) {
        var t = {},
            r = e.vertexAttributes;
        for (var i in r) {
            r.hasOwnProperty(i) && (t[i] = r[i].index)
        }
        return t
    }

    function _t(e, t, r) {
        var i = t.context,
            n = h(r, e.shaderProgram),
            o = n.fragmentShaderSource.clone(),
            a = [];
        o.sources = o.sources.map(function (e) {
            e = Q.replaceMain(e, "czm_Debug_main");
            for (var t, r = /gl_FragData\[(\d+)\]/g; null !== (t = r.exec(e));) {
                -1 === a.indexOf(t[1]) && a.push(t[1])
            }
            return e
        });
        var s, u = a.length,
            c = "void main() \n{ \n    czm_Debug_main(); \n";
        if (t.debugShowCommands) {
            _(e._debugColor) || (e._debugColor = l.fromRandom());
            var d = e._debugColor;
            if (u > 0) {
                for (s = 0; u > s; ++s) {
                    c += "    gl_FragData[" + a[s] + "].rgb *= vec3(" + d.red + ", " + d.green + ", " + d.blue + "); \n"
                }
            } else {
                c += "    gl_FragColor.rgb *= vec3(" + d.red + ", " + d.green + ", " + d.blue + "); \n"
            }
        }
        if (t.debugShowFrustums) {
            var f = 1 & e.debugOverlappingFrustums ? "1.0" : "0.0",
                p = 2 & e.debugOverlappingFrustums ? "1.0" : "0.0",
                m = 4 & e.debugOverlappingFrustums ? "1.0" : "0.0";
            if (u > 0) {
                for (s = 0; u > s; ++s) {
                    c += "    gl_FragData[" + a[s] + "].rgb *= vec3(" + f + ", " + p + ", " + m + "); \n"
                }
            } else {
                c += "    gl_FragColor.rgb *= vec3(" + f + ", " + p + ", " + m + "); \n"
            }
        }
        c += "}", o.sources.push(c);
        var v = ht(n);
        return q.fromCache({
            context: i,
            vertexShaderSource: n.vertexShaderSource,
            fragmentShaderSource: o,
            attributeLocations: v
        })
    }

    function ft(e, t, r) {
        var i = U.shallowClone(e);
        i.shaderProgram = _t(e, t), i.execute(t.context, r), i.shaderProgram.destroy()
    }

    function pt(e, t, i, o, a, s, l) {
        if (!_(t.debugCommandFilter) || t.debugCommandFilter(e)) {
            if (e instanceof Y) {
                return void e.execute(i, o)
            }
            var c = t.frameState.shadowHints.shadowsEnabled,
                d = c && t.frameState.shadowHints.lightShadowMaps.length > 0;
            if (t.debugShowCommands || t.debugShowFrustums) {
                ft(e, t, o)
            } else {
                if (d && e.receiveShadows && _(e.derivedCommands.shadows)) {
                    var f = e.pass === G.GLOBE;
                    f && t.globe.hasTerrainAnalysis() ? e.execute(i, o) : e.derivedCommands.shadows.receiveCommand.execute(i, o)
                } else {
                    if (t.frameState.passes.depth && _(e.derivedCommands) && _(e.derivedCommands.depth)) {
                        e.derivedCommands.depth.depthOnlyCommand.execute(i, o)
                    } else {
                        var p = !1,
                            m = t._frameState,
                            y = Le.FRONT_AND_BACK;
                        if (m._fboState.enabled && "water" === m._fboState.name) {
                            var g = h(a, e.renderState);
                            if (_(g) && g.cull && g.cull.enabled) {
                                switch (y = g.cull.face, g.cull.face) {
                                    case Le.FRONT:
                                        g.cull.face = Le.BACK, p = !0;
                                        break;
                                    case Le.BACK:
                                        g.cull.face = Le.FRONT, p = !0
                                }
                            }
                        }
                        if (e.execute(i, o), p) {
                            var g = h(a, e.renderState);
                            g.cull.face = y
                        }
                    }
                }
            }
            if (e.debugShowBoundingVolume && _(e.boundingVolume)) {
                var m = t._frameState,
                    w = e.boundingVolume;
                _(t._debugVolume) && t._debugVolume.destroy();
                var S, x = n.clone(w.center);
                if (m.mode !== be.SCENE3D) {
                    x = P.multiplyByPoint(or, x, x);
                    var T = m.mapProjection,
                        E = T.unproject(x);
                    x = T.ellipsoid.cartographicToCartesian(E)
                }
                if (_(w.radius)) {
                    var A = w.radius;
                    S = C.toWireframe(v.createGeometry(new v({
                        radii: new n(A, A, A),
                        vertexFormat: me.FLAT_VERTEX_FORMAT
                    }))), t._debugVolume = new ye({
                        geometryInstances: new b({
                            geometry: S,
                            modelMatrix: P.fromTranslation(x),
                            attributes: {
                                color: new u(1, 0, 0, 1)
                            }
                        }),
                        appearance: new me({
                            flat: !0,
                            translucent: !1
                        }),
                        asynchronous: !1
                    })
                } else {
                    var D = w.halfAxes;
                    S = C.toWireframe(r.createGeometry(r.fromDimensions({
                        dimensions: new n(2, 2, 2),
                        vertexFormat: me.FLAT_VERTEX_FORMAT
                    }))), t._debugVolume = new ye({
                        geometryInstances: new b({
                            geometry: S,
                            modelMatrix: P.fromRotationTranslation(D, x, new P),
                            attributes: {
                                color: new u(1, 0, 0, 1)
                            }
                        }),
                        appearance: new me({
                            flat: !0,
                            translucent: !1
                        }),
                        asynchronous: !1
                    })
                }
                var O = m.commandList,
                    $ = m.commandList = [];
                t._debugVolume.update(m);
                var M;
                _(l) && (M = o.framebuffer, o.framebuffer = l), $[0].execute(i, o), _(M) && (o.framebuffer = M), m.commandList = O
            }
        }
    }

    function mt(e, t, r) {
        return t.boundingVolume.distanceSquaredTo(r) - e.boundingVolume.distanceSquaredTo(r)
    }

    function vt(e, t, r, i) {
        var n = e.context;
        A(i, mt, e._camera.positionWC);
        for (var o = i.length, a = 0; o > a; ++a) {
            t(i[a], e, n, r)
        }
    }

    function yt(e, t) {
        var r = e._debugGlobeDepths[t];
        return !_(r) && e.context.depthTexture && (r = new ue, e._debugGlobeDepths[t] = r), r
    }

    function gt(e, t) {
        var r = e._pickDepths[t];
        return _(r) || (r = new ve, e._pickDepths[t] = r), r
    }

    function bt(e, t) {
        var r = e._camera,
            i = e.context,
            n = i.uniformState;
        n.updateCamera(r);
        var o;
        o = _(r.frustum.fov) ? r.frustum.clone(ar) : _(r.frustum.infiniteProjectionMatrix) ? r.frustum.clone(sr) : _(r.frustum.width) ? r.frustum.clone(lr) : r.frustum.clone(ur);
        var a = e._layers,
            s = e._frameState;
        a.render(i, s), o.near = r.frustum.near, o.far = r.frustum.far, n.updateFrustum(o), n.updatePass(G.ENVIRONMENT);
        var l = e._useWebVR && e.mode !== be.SCENE2D,
            u = e._frameState.passes,
            c = u.pick,
            d = u.depth,
            h = e._environmentVisible,
            f = e._environmentState;
        if (!c) {
            var p = f.skyBoxCommand;
            _(p) && h.isSkyBoxVisible && pt(p, e, i, t), f.isSkyAtmosphereVisible && h.isSkyAtmosphereVisible && pt(f.skyAtmosphereCommand, e, i, t);
            var l = e._useWebVR && e.mode !== be.SCENE2D;
            if (f.isSunVisible && h.isSunVisible && (f.sunDrawCommand.execute(i, t), e.sunBloom && !l)) {
                var m;
                m = f.useGlobeDepthFramebuffer ? e._globeDepth.framebuffer : f.useFXAA ? e._fxaa.getColorFramebuffer() : f.originalFramebuffer, e._sunPostProcess.execute(i, m), t.framebuffer = m
            }
            f.isMoonVisible && h.isMoonVisible && f.moonCommand.execute(i, t)
        }
        var v;
        f.useOIT ? (_(e._executeOITFunction) || (e._executeOITFunction = function (e, t, r, i, n) {
            e._oit.executeCommands(e, t, r, i, n)
        }), v = e._executeOITFunction) : v = vt;
        for (var y, g = f.clearGlobeDepth, b = f.useDepthPlane, C = e._depthClearCommand, w = e._depthPlane, S = r.position.z, x = e._frustumCommandsList, T = x.length, E = 0; T > E; ++E) {
            var P = T - E - 1,
                A = x[P];
            s.frustumIndex = P, e.mode === be.SCENE2D ? (r.position.z = S - A.near + 1, o.far = Math.max(1, A.far - A.near), o.near = 1, n.update(e.frameState), n.updateFrustum(o)) : (o.near = 0 !== P ? A.near * Jt : A.near, o.far = A.far, n.updateFrustum(o));
            var D, O = e.debugShowGlobeDepth ? yt(e, P) : e._globeDepth;
            if (e.debugShowGlobeDepth && _(O) && f.useGlobeDepthFramebuffer && (D = t.framebuffer, t.framebuffer = O.framebuffer), C.execute(i, t), e._stencilClearCommand.execute(i, t), h.isGlobalVisible) {
                n.updatePass(G.GLOBE);
                var $ = A.commands[G.GLOBE],
                    M = A.indices[G.GLOBE];
                for (y = 0; M > y; ++y) {
                    pt($[y], e, i, t)
                }
                for (_(O) && f.useGlobeDepthFramebuffer && (e.copyGlobeDepth || e.debugShowGlobeDepth) && (O.update(i, t), O.executeCopyDepth(i, t)), e.debugShowGlobeDepth && _(O) && f.useGlobeDepthFramebuffer && (t.framebuffer = D), n.updatePass(G.TERRAIN_CLASSIFICATION), $ = A.commands[G.TERRAIN_CLASSIFICATION], M = A.indices[G.TERRAIN_CLASSIFICATION], y = 0; M > y; ++y) {
                    pt($[y], e, i, t)
                }
                M > 0 && i.stencilBuffer && e._stencilClearCommand.execute(i, t), g && C.execute(i, t)
            }
            if (!f.useInvertClassification || c) {
                for (n.updatePass(G.CESIUM_3D_TILE), $ = A.commands[G.CESIUM_3D_TILE], M = A.indices[G.CESIUM_3D_TILE], y = 0; M > y; ++y) {
                    pt($[y], e, i, t)
                }
                for (n.updatePass(G.CESIUM_3D_TILE_CLASSIFICATION), $ = A.commands[G.CESIUM_3D_TILE_CLASSIFICATION], M = A.indices[G.CESIUM_3D_TILE_CLASSIFICATION], y = 0; M > y; ++y) {
                    pt($[y], e, i, t)
                }
            } else {
                e._invertClassification.clear(i, t);
                var I = t.framebuffer;
                for (t.framebuffer = e._invertClassification._fbo, n.updatePass(G.CESIUM_3D_TILE), $ = A.commands[G.CESIUM_3D_TILE], M = A.indices[G.CESIUM_3D_TILE], y = 0; M > y; ++y) {
                    pt($[y], e, i, t)
                }
                for (n.updatePass(G.CESIUM_3D_TILE_CLASSIFICATION_IGNORE_SHOW), $ = A.commands[G.CESIUM_3D_TILE_CLASSIFICATION_IGNORE_SHOW], M = A.indices[G.CESIUM_3D_TILE_CLASSIFICATION_IGNORE_SHOW], y = 0; M > y; ++y) {
                    pt($[y], e, i, t)
                }
                for (t.framebuffer = I, e._invertClassification.executeClassified(i, t), 1 === e.frameState.invertClassificationColor.alpha && e._invertClassification.executeUnclassified(i, t), M > 0 && i.stencilBuffer && e._stencilClearCommand.execute(i, t), n.updatePass(G.CESIUM_3D_TILE_CLASSIFICATION), $ = A.commands[G.CESIUM_3D_TILE_CLASSIFICATION], M = A.indices[G.CESIUM_3D_TILE_CLASSIFICATION], y = 0; M > y; ++y) {
                    pt($[y], e, i, t)
                }
            }
            if (M > 0 && i.stencilBuffer && e._stencilClearCommand.execute(i, t), g && b && w.execute(i, t), h.isObjectVisible) {
                for (var R = G.CESIUM_3D_TILE_CLASSIFICATION_IGNORE_SHOW + 1, L = G.TRANSLUCENT, N = R; L > N; ++N) {
                    for (n.updatePass(N), $ = A.commands[N], M = A.indices[N], y = 0; M > y; ++y) {
                        pt($[y], e, i, t)
                    }
                }
                0 !== P && e.mode !== be.SCENE2D && (o.near = A.near, n.updateFrustum(o));
                var F;
                !c && f.useInvertClassification && e.frameState.invertClassificationColor.alpha < 1 && (F = e._invertClassification), n.updatePass(G.TRANSLUCENT), $ = A.commands[G.TRANSLUCENT], $.length = A.indices[G.TRANSLUCENT], v(e, pt, t, $, F)
            }
            if (_(O) && (f.useGlobeDepthFramebuffer || d) && e.useDepthPicking) {
                var B = d ? t.framebuffer.depthStencilTexture : O.framebuffer.depthStencilTexture,
                    Y = gt(e, P);
                Y.update(i, B), Y.executeCopyDepth(i, t)
            }
        }
    }

    function Ct(e) {
        var t = e.context.uniformState;
        t.updatePass(G.COMPUTE);
        var r = e._environmentState.sunComputeCommand;
        _(r) && r.execute(e._computeEngine);
        for (var i = e._computeCommandList, n = i.length, o = 0; n > o; ++o) {
            i[o].execute(e._computeEngine)
        }
    }

    function wt(e, t) {
        var r = e.context.uniformState;
        r.updatePass(G.OVERLAY);
        for (var i = e.context, n = e._overlayCommandList, o = n.length, a = 0; o > a; ++a) {
            n[a].execute(i, t)
        }
    }

    function St(e, t, r) {
        for (var i = r.shadowMapCullingVolume, n = r.isPointLight, o = r.passes, a = o.length, s = t.length, l = 0; s > l; ++l) {
            var u = t[l];
            if (nt(e, u), u.castShadows && u.pass !== G.ANALYSIS && (u.pass === G.GLOBE || u.pass === G.CESIUM_3D_TILE || u.pass >= G.S3MTiles && u.pass <= G.TRANSLUCENT) && ct(u, i)) {
                if (n) {
                    for (var c = 0; a > c; ++c) {
                        o[c].commandList.push(u)
                    }
                } else {
                    if (1 === a) {
                        o[0].commandList.push(u)
                    } else {
                        for (var d = !1, h = a - 1; h >= 0; --h) {
                            var _ = o[h].cullingVolume;
                            if (ct(u, _)) {
                                o[h].commandList.push(u), d = !0
                            } else {
                                if (d) {
                                    break
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    function xt(e) {
        var t = e.frameState,
            r = t.shadowHints.shadowMaps,
            i = r.length;
        if (t.shadowHints.shadowsEnabled) {
            for (var n = e.context, o = n.uniformState, a = 0; i > a; ++a) {
                var s = r[a];
                if (!s.outOfView) {
                    var l, u = s.passes,
                        c = u.length;
                    for (l = 0; c > l; ++l) {
                        u[l].commandList.length = 0
                    }
                    var d = e.frameState.commandList;
                    for (St(e, d, s), l = 0; c > l; ++l) {
                        var h = s.passes[l];
                        o.updateCamera(h.camera), s.updatePass(n, l);
                        for (var _ = h.commandList.length, f = 0; _ > f; ++f) {
                            var p = h.commandList[f];
                            o.updatePass(p.pass), pt(p.derivedCommands.shadows.castCommands[a], e, n, h.passState)
                        }
                    }
                }
            }
        }
    }

    function Tt(e, t, r, i) {
        var o = e._context,
            a = o.uniformState,
            s = t.viewport;
        s.x = 0, s.y = 0, s.width = o.drawingBufferWidth, s.height = o.drawingBufferHeight;
        var l = e._frameState,
            u = l.camera,
            c = l.mode,
            d = l.passes.depth;
        if (e._useWebVR && c !== be.SCENE2D) {
            Mt(e, t, r), d || $t(e), dt(e), d || (Ct(e), xt(e)), s.x = 0, s.y = 0, s.width = 0.5 * o.drawingBufferWidth, s.height = o.drawingBufferHeight;
            var h = ee.clone(u, e._cameraVR),
                _ = u.frustum.near,
                f = 5 * _,
                p = f / 30 * 2,
                m = n.multiplyByScalar(h.up, p, cr);
            u.frustum.aspectRatio = s.width / s.height;
            var v = 0.5 * p * _ / f;
            n.add(h.position, m, u.position), u.frustum.xOffset = v, a.update(l), bt(e, t), s.x = t.viewport.width, n.subtract(h.position, m, u.position), u.frustum.xOffset = -v, a.update(l), bt(e, t), ee.clone(h, u)
        } else {
            if (e._multiViewportMode === _e.NONE || i) {
                Mt(e, t, r), c !== be.SCENE2D || e._mapMode2D === he.ROTATE ? Pt(!0, e, t) : Et(e, t)
            } else {
                Mt(e, t, r);
                for (var y = l.passes, g = y.pick, b = 0; b < e._multiViewportInfo.length; b++) {
                    if (!g || e._frameState.multiViewportIndex === b) {
                        var v = e._multiViewportInfo[b];
                        s.x = o.drawingBufferWidth * v.x, s.y = o.drawingBufferHeight * v.y, s.width = o.drawingBufferWidth * v.width, s.height = o.drawingBufferHeight * v.height, u.frustum.aspectRatio = s.width / s.height, a.update(l), e._frameState.multiViewportIndex = b, Pt(0 == b || g, e, t)
                    }
                }
            }
        }
    }

    function Et(t, r) {
        var i = t.context,
            o = t.frameState,
            a = t.camera,
            s = r.viewport,
            l = e.clone(s, yr);
        r.viewport = l;
        var u = dr,
            c = hr,
            d = t.mapProjection;
        d.project(u, c);
        var h = n.clone(a.position, _r),
            _ = P.clone(a.transform, pr),
            f = a.frustum.clone();
        a._setTransform(P.IDENTITY);
        var p = P.computeViewportTransformation(l, 0, 1, fr),
            m = a.frustum.projectionMatrix,
            v = a.positionWC.y,
            y = n.fromElements(E.sign(v) * c.x - v, 0, -a.positionWC.x, mr),
            g = F.pointToGLWindowCoordinates(m, p, y, vr);
        g.x = Math.floor(g.x);
        var b = l.x,
            C = l.width;
        if (0 === v || g.x <= b || g.x >= b + C) {
            Pt(!0, t, r)
        } else {
            if (Math.abs(b + 0.5 * C - g.x) < 1) {
                l.width = g.x - l.x, a.position.x *= E.sign(a.position.x), a.frustum.right = 0, o.cullingVolume = a.frustum.computeCullingVolume(a.positionWC, a.directionWC, a.upWC), i.uniformState.update(o), Pt(!0, t, r), l.x = g.x, a.position.x = -a.position.x, a.frustum.right = -a.frustum.left, a.frustum.left = 0, o.cullingVolume = a.frustum.computeCullingVolume(a.positionWC, a.directionWC, a.upWC), i.uniformState.update(o), Pt(!1, t, r)
            } else {
                if (g.x > b + 0.5 * C) {
                    l.width = g.x - b;
                    var w = a.frustum.right;
                    a.frustum.right = c.x - v, o.cullingVolume = a.frustum.computeCullingVolume(a.positionWC, a.directionWC, a.upWC), i.uniformState.update(o), Pt(!0, t, r), l.x = g.x, l.width = b + C - g.x, a.position.x = -a.position.x, a.frustum.left = -a.frustum.right, a.frustum.right = w - 2 * a.frustum.right, o.cullingVolume = a.frustum.computeCullingVolume(a.positionWC, a.directionWC, a.upWC), i.uniformState.update(o), Pt(!1, t, r)
                } else {
                    l.x = g.x, l.width = b + C - g.x;
                    var S = a.frustum.left;
                    a.frustum.left = -c.x - v, o.cullingVolume = a.frustum.computeCullingVolume(a.positionWC, a.directionWC, a.upWC), i.uniformState.update(o), Pt(!0, t, r), l.x = b, l.width = g.x - b, a.position.x = -a.position.x, a.frustum.right = -a.frustum.left, a.frustum.left = S - 2 * a.frustum.left, o.cullingVolume = a.frustum.computeCullingVolume(a.positionWC, a.directionWC, a.upWC), i.uniformState.update(o), Pt(!1, t, r)
                }
            }
        }
        a._setTransform(_), n.clone(h, a.position), a.frustum = f.clone(), r.viewport = s
    }

    function Pt(e, t, r, i) {
        var n = t.frameState.passes.depth;
        e || n || (t.frameState.commandList.length = 0), n || $t(t), dt(t), e && !n && (_(i) && Mt(t, r, i), Ct(t)), n || xt(t), bt(t, r)
    }

    function At(e, t) {
        var r = e._frameState,
            i = e._environmentState,
            n = r.passes.render,
            o = e.skyAtmosphere,
            a = e.globe;
        if (!n || e._mode !== be.SCENE2D && r.camera.frustum instanceof O) {
            i.skyAtmosphereCommand = void 0, i.skyBoxCommand = void 0, i.sunDrawCommand = void 0, i.sunComputeCommand = void 0, i.moonCommand = void 0
        } else {
            _(o) && _(a) && (o.setDynamicAtmosphereColor(a.enableLighting), i.isReadyForAtmosphere = i.isReadyForAtmosphere || a._surface._tilesToRender.length > 0), i.skyAtmosphereCommand = _(o) ? o.update(r) : void 0, i.skyBoxCommand = _(e.skyBox) ? e.skyBox.update(r) : void 0;
            var s = _(e.sun) ? e.sun.update(r, t) : void 0;
            i.sunDrawCommand = _(s) ? s.drawCommand : void 0, i.sunComputeCommand = _(s) ? s.computeCommand : void 0, i.moonCommand = _(e.moon) ? e.moon.update(r) : void 0
        }
        var l = i.clearGlobeDepth = _(a) && (!a.depthTestAgainstTerrain || e.mode === be.SCENE2D),
            u = i.useDepthPlane = l && e.mode === be.SCENE3D;
        u && e._depthPlane.update(r);
        for (var c = r.mode === be.SCENE3D ? r.occluder : void 0, d = r.cullingVolume, h = ir.planes, f = 0; 5 > f; ++f) {
            h[f] = d.planes[f]
        }
        d = ir, i.isSkyAtmosphereVisible = _(i.skyAtmosphereCommand) && i.isReadyForAtmosphere, i.isSunVisible = ct(i.sunDrawCommand, d, c), i.isMoonVisible = ct(i.moonCommand, d, c)
    }

    function Dt(e) {
        var t = e._frameState;
        e.debugShowFrustumPlanes !== e._debugShowFrustumPlanes && (e.debugShowFrustumPlanes ? e._debugFrustumPlanes = new re({
            camera: e.camera,
            updateOnChange: !1
        }) : e._debugFrustumPlanes = e._debugFrustumPlanes && e._debugFrustumPlanes.destroy(), e._debugShowFrustumPlanes = e.debugShowFrustumPlanes), _(e._debugFrustumPlanes) && e._debugFrustumPlanes.update(t)
    }

    function Ot(e) {
        var t = e._frameState,
            r = t.shadowMaps,
            i = r.length,
            n = i > 0 && !t.passes.pick && e.mode === be.SCENE3D;
        if (n !== t.shadowHints.shadowsEnabled && (++t.shadowHints.lastDirtyTime, t.shadowHints.shadowsEnabled = n), n) {
            for (var o = 0; i > o; ++o) {
                if (r[o] !== t.shadowHints.shadowMaps[o]) {
                    ++t.shadowHints.lastDirtyTime;
                    break
                }
            }
            t.shadowHints.shadowMaps.length = 0, t.shadowHints.lightShadowMaps.length = 0;
            for (var a = 0; i > a; ++a) {
                var s = r[a];
                s.update(t), t.shadowHints.shadowMaps.push(s), s.fromLightSource && t.shadowHints.lightShadowMaps.push(s), s.dirty && (++t.shadowHints.lastDirtyTime, s.dirty = !1)
            }
        }
    }

    function $t(e) {
        var t = e._frameState,
            r = e._context,
            i = t.commandList;
        e._groundPrimitives.update(t), e._primitives.update(t), Dt(e), Ot(e), e._globe && e._globe.update(t), e.layers.update(r, t, i), e._analyst3D.update(r, t, i)
    }

    function Mt(e, t, r) {
        var i = e._context,
            n = e._environmentState,
            o = e._frameState.passes,
            a = o.pick,
            s = e._useWebVR && e.mode !== be.SCENE2D;
        n.originalFramebuffer = t.framebuffer, _(e.sun) && e.sunBloom !== e._sunBloom ? (e.sunBloom && !s ? e._sunPostProcess = new Te : _(e._sunPostProcess) && (e._sunPostProcess = e._sunPostProcess.destroy()), e._sunBloom = e.sunBloom) : !_(e.sun) && _(e._sunPostProcess) && (e._sunPostProcess = e._sunPostProcess.destroy(), e._sunBloom = !1);
        var u = e._clearColorCommand;
        l.clone(r, u.color), u.execute(i, t);
        var c = n.useGlobeDepthFramebuffer = !a && _(e._globeDepth);
        c && (e._globeDepth.update(i, t), e._globeDepth.clear(i, t, r));
        var d = n.useOIT = !a && _(e._oit) && e._oit.isSupported();
        d && (e._oit.update(i, t, e._globeDepth.framebuffer), e._oit.clear(i, t, r), n.useOIT = e._oit.isSupported());
        var h = n.useFXAA = !a && e.fxaa;
        h && (e._fxaa.update(i, t), e._fxaa.clear(i, t, r));
        var f = n.usePostEffect = !a && _(e.compositor) && e.compositor.isEnable();
        f && (e.compositor.update(i, t, e), e.compositor.clear(i, r)), n.isSunVisible && e.sunBloom && !s ? t.framebuffer = e._sunPostProcess.update(t) : c ? t.framebuffer = e._globeDepth.framebuffer : h && (t.framebuffer = e._fxaa.getColorFramebuffer()), _(t.framebuffer) && u.execute(i, t);
        var p = n.useInvertClassification = _(t.framebuffer) && e.invertClassification;
        if (p) {
            var m;
            if (1 === e.frameState.invertClassificationColor.alpha && (n.useGlobeDepthFramebuffer ? m = e._globeDepth.framebuffer : n.useFXAA && (m = e._fxaa.getColorFramebuffer())), e._invertClassification.previousFramebuffer = m, e._invertClassification.update(i), e._invertClassification.clear(i, t), e.frameState.invertClassificationColor.alpha < 1 && d) {
                var v = e._invertClassification.unclassifiedCommand,
                    y = v.derivedCommands;
                y.oit = e._oit.createDerivedCommands(v, i, y.oit)
            }
        }
    }

    function It(e, t) {
        var r = e._context,
            i = e._environmentState,
            n = i.useGlobeDepthFramebuffer;
        if (e.debugShowGlobeDepth && n) {
            var o = yt(e, e.debugShowDepthFrustum - 1);
            o.executeDebugGlobeDepth(r, t)
        }
        if (e.debugShowPickDepth && n) {
            var a = gt(e, e.debugShowDepthFrustum - 1);
            a.executeDebugPickDepth(r, t)
        }
        var s = i.useOIT,
            l = i.useFXAA,
            u = i.usePostEffect;
        if (s && (l ? t.framebuffer = e._fxaa.getColorFramebuffer() : u ? t.framebuffer = e.compositor.getColorFramebuffer() : t.framebuffer = void 0, e._oit.execute(r, t)), l && (!s && n && (t.framebuffer = e._fxaa.getColorFramebuffer(), e._globeDepth.executeCopyColor(r, t)), u ? t.framebuffer = e.compositor.getColorFramebuffer() : t.framebuffer = i.originalFramebuffer, e._fxaa.execute(r, t)), u) {
            s || l || !n || (t.framebuffer = e.compositor.getColorFramebuffer(), e._globeDepth.executeCopyColor(r, t));
            var c = i.originalFramebuffer;
            t.framebuffer = c, e.compositor.execute(r, c)
        }
        s || l || u || !n || (t.framebuffer = i.originalFramebuffer, e._globeDepth.executeCopyColor(r, t))
    }

    function Rt(e) {
        for (var t = e.afterRender, r = 0, i = t.length; i > r; ++r) {
            t[r]()
        }
        t.length = 0
    }

    function Lt(e) {
        var t = e._context,
            r = t.uniformState,
            i = e._frameState,
            o = i.camera,
            a = (i.cullingVolume, i.mode === be.SCENE3D ? i.occluder : void 0, i._framebufferList);
        for (var s in a) {
            var u = a[s];
            if (_(u) && u.isUpdate) {
                var c = i._fboState.name,
                    d = i._fboState.enabled;
                i._fboState.name = s, i._fboState.enabled = !0;
                var f = u.begin(i),
                    p = (f.framebuffer, e._environmentVisible);
                e._environmentVisible = u.environmentVisible, i.cullingVolume = o.frustum.computeCullingVolume(o.positionWC, o.directionWC, o.upWC), r.update(i);
                var m = e.shadowMap;
                _(m) && m.enabled && n.negate(r.sunDirectionWC, e._sunCamera.direction);
                var v = i.shadowHints.nearPlane,
                    y = i.shadowHints.farPlane,
                    g = i.shadowHints.closestObjectSize,
                    b = i.useType,
                    C = i._isDepth;
                if (i.useType = u.useType, i._isDepth = ((6 & u.useType) > 0 ? !0 : !1) || 1 & u.useType && u.isManualDepth, e._multiViewportMode !== _e.NONE) {
                    for (var w = 0; 4 > w; w++) {
                        if (1 << w & u._visibleViewport) {
                            i.multiViewportIndex = w;
                            break
                        }
                    }
                }
                Tt(e, f, h(e.backgroundColor, l.BLACK), !1, !0), i.multiViewportIndex = -1, u.update(f, e._pickDepths), It(e, f), i.commandList.length = 0, t.endFrame(), Rt(i), u.end(i), i._fboState.name = c, i._fboState.enabled = d, i._isDepth = C, i.useType = b, e._environmentVisible = p, i.cullingVolume = o.frustum.computeCullingVolume(o.positionWC, o.directionWC, o.upWC), r.update(i), _(m) && m.enabled && n.negate(r.sunDirectionWC, e._sunCamera.direction), i.shadowHints.nearPlane = v, i.shadowHints.farPlane = y, i.shadowHints.closestObjectSize = g
            }
        }
    }

    function Nt(e) {
        var t = e._context,
            r = (t.uniformState, e._frameState),
            i = r.camera,
            o = r.cullingVolume,
            a = r.mode === be.SCENE3D ? r.occluder : void 0;
        _(e._reflectFramebuffer) || (e._reflectFramebuffer = t.createReflectFramebuffer(), r._framebufferList.water = e._reflectFramebuffer);
        var s = 6378137,
            l = 0;
        e._reflectFramebuffer.isUpdate = !1;
        for (var u = 0; u < e.layers._layerQueue.length; u++) {
            var c = e.layers._layerQueue[u];
            if (_(c._waterPlanes)) {
                var d = c._waterPlanes;
                for (var h in d._hash) {
                    var f = d.get(h);
                    if (!(o.computeVisibility(f.boundingVolume) == S.OUTSIDE || _(a) && f.boundingVolume.isOccluded(a))) {
                        var p = n.distance(f.boundingVolume.center, i.position) - f.boundingVolume.radius;
                        p = 0.01 > p ? 0.01 : p, s > p && (s = p, l = f.distance), e._reflectFramebuffer.isUpdate = !0
                    }
                }
            }
        }
        if (!e._reflectFramebuffer.isUpdate || s > 50000) {
            e._reflectFramebuffer.isUpdate = !1
        } else {
            var m = n.magnitude(i.position) - i.positionCartographic.height;
            l += m, n.normalize(i.position, e._reflectFramebuffer._reflectPlane.normal);
            var v = new n;
            e._reflectFramebuffer._reflectPlane.normal.clone(v), n.multiplyByScalar(v, l, v), e._reflectFramebuffer._reflectPlane.distance = -n.dot(v, e._reflectFramebuffer._reflectPlane.normal), e._reflectFramebuffer.isUpdate = !0
        }
    }

    function Ft(e) {
        var t = e._context,
            r = (t.uniformState, e._frameState);
        t.numNormalAndDepthObject > 0 ? (_(e._normalFramebuffer) || (e._normalFramebuffer = t.createNormalFramebuffer(), r._framebufferList.normalAndDepth = e._normalFramebuffer), e._normalFramebuffer.isUpdate = !0) : _(e._normalFramebuffer) && (e._normalFramebuffer.isUpdate = !1)
    }

    function Bt(e, t) {
        if (e._pickPositionCacheDirty = !0, _(t) || (t = T.now()), 1 == e.undergroundMode && !_(e.underEllipsoid)) {
            var r = Math.abs(h(e.undergroundDepth, 100)),
                i = 6378137 - r;
            e.underEllipsoid = new Ye(i, i, i)
        }
        var o = e._camera;
        it(o, e._cameraClone, E.EPSILON6) ? e._cameraStartFired && w() - e._cameraMovedTime > e.cameraEventWaitTime && (o.moveEnd.raiseEvent(), e._cameraStartFired = !1) : (e._cameraStartFired || (o.moveStart.raiseEvent(), e._cameraStartFired = !0), e._cameraMovedTime = w(), ee.clone(o, e._cameraClone)), e._preRender.raiseEvent(e, t), e._jobScheduler.resetBudgets();
        var a = e.context,
            s = a.uniformState,
            u = e._frameState,
            c = E.incrementWrap(u.frameNumber, 15000000, 1);
        st(e, c, t), u.passes.render = !0;
        var d = h(e.backgroundColor, l.BLACK);
        u.backgroundColor = d, u.creditDisplay.beginFrame(), e.fog.update(u), s.update(u);
        var f = e.shadowMap;
        _(f) && f.enabled && (n.negate(s.sunDirectionWC, e._sunCamera.direction), u.shadowMaps.push(f)), e._computeCommandList.length = 0, e._overlayCommandList.length = 0;
        var p = e._passState;
        p.framebuffer = void 0, p.blendingEnabled = void 0, p.scissorTest = void 0;
        var m = p.viewport;
        if (m.x = 0, m.y = 0, m.width = a.drawingBufferWidth, m.height = a.drawingBufferHeight, _(e.globe) && e.globe.beginFrame(u), Nt(e), Ft(e), At(e, p), Lt(e), Tt(e, p, d), It(e, p), wt(e, p), _(e.globe) && (e.globe.endFrame(u), e.layers.endFrame(u)), u.creditDisplay.endFrame(), e.debugShowFramesPerSecond) {
            if (!_(e._performanceDisplay)) {
                var v = document.createElement("div");
                v.className = "cesium-performanceDisplay-defaultContainer";
                var y = e._canvas.parentNode;
                y.appendChild(v);
                var g = new pe({
                    container: v
                });
                e._performanceDisplay = g, e._performanceContainer = v
            }
            e._performanceDisplay.update()
        } else {
            _(e._performanceDisplay) && (e._performanceDisplay = e._performanceDisplay && e._performanceDisplay.destroy(), e._performanceContainer.parentNode.removeChild(e._performanceContainer))
        }
        a.endFrame(), L.update(), Rt(u), e._postRender.raiseEvent(e, t)
    }

    function Yt(e, t, r, i) {
        var o = e._camera,
            a = o.frustum;
        _(a._offCenterFrustum) && (a = a._offCenterFrustum);
        var s = e._passState.viewport,
            l = 2 * (t.x - s.x) / s.width - 1;
        l *= 0.5 * (a.right - a.left);
        var u = 2 * (s.height - t.y - s.y) / s.height - 1;
        u *= 0.5 * (a.top - a.bottom);
        var c = P.clone(o.transform, Sr);
        o._setTransform(P.IDENTITY);
        var d = n.clone(o.position, br);
        n.multiplyByScalar(o.right, l, Cr), n.add(Cr, d, d), n.multiplyByScalar(o.up, u, Cr), n.add(Cr, d, d), o._setTransform(c), e.mode === be.SCENE2D && n.fromElements(d.z, d.x, d.y, d);
        var h = a.getPixelDimensions(s.width, s.height, 1, wr),
            f = gr;
        return f.right = 0.5 * h.x, f.left = -f.right, f.top = 0.5 * h.y, f.bottom = -f.top, f.near = a.near, f.far = a.far, f.computeCullingVolume(d, o.directionWC, o.upWC)
    }

    function kt(e, t, r, i) {
        var n = e._camera,
            o = n.frustum,
            a = o.near,
            s = Math.tan(0.5 * o.fovy),
            l = o.aspectRatio * s,
            u = e._passState.viewport,
            c = 2 * (t.x - u.x) / u.width - 1,
            d = 2 * (e.drawingBufferHeight - t.y - u.y) / u.height - 1,
            h = c * a * l,
            _ = d * a * s,
            f = o.getPixelDimensions(u.width, u.height, 1, wr),
            p = f.x * r * 0.5,
            m = f.y * i * 0.5,
            v = xr;
        return v.top = _ + m, v.bottom = _ - m, v.right = h + p, v.left = h - p, v.near = a, v.far = o.far, v.computeCullingVolume(n.positionWC, n.directionWC, n.upWC)
    }

    function Xt(e, t, r, i) {
        var n = e.camera.frustum;
        return n instanceof O || n instanceof $ ? Yt(e, t, r, i) : kt(e, t, r, i)
    }

    function Vt(e, t) {
        var r = e.shaderCache.getDerivedShaderProgram(t, "depthOnly");
        if (!_(r)) {
            for (var i = t._attributeLocations, n = t.fragmentShaderSource, o = !1, a = n.sources, s = a.length, l = 0; s > l; ++l) {
                if ($r.test(a[l]) || Mr.test(a[l])) {
                    o = !0;
                    break
                }
            }
            o || (n = new Q({
                sources: ["void main() { gl_FragColor = vec4(1.0); }"]
            })), r = e.shaderCache.createDerivedShaderProgram(t, "depthOnly", {
                vertexShaderSource: t.vertexShaderSource,
                fragmentShaderSource: n,
                attributeLocations: i
            })
        }
        return r
    }

    function Ut(e, t) {
        var r = e._depthOnlyRenderStateCache,
            i = r[t.id];
        if (!_(i)) {
            var n = j.getState(t);
            n.depthMask = !0, n.colorMask = {
                red: !1,
                green: !1,
                blue: !1,
                alpha: !1
            }, i = j.fromCache(n), r[t.id] = i
        }
        return i
    }

    function zt(e, t, r, i) {
        _(i) || (i = {});
        var n, o;
        return _(i.depthOnlyCommand) && (n = i.depthOnlyCommand.shaderProgram, o = i.depthOnlyCommand.renderState), i.depthOnlyCommand = U.shallowClone(t, i.depthOnlyCommand), _(n) && i.shaderProgramId === t.shaderProgram.id ? (i.depthOnlyCommand.shaderProgram = n, i.depthOnlyCommand.renderState = o) : (i.depthOnlyCommand.shaderProgram = Vt(r, t.shaderProgram), i.depthOnlyCommand.renderState = Ut(e, t.renderState), i.shaderProgramId = t.shaderProgram.id), i
    }

    function Gt(t, r) {
        var i = t._context,
            n = t._frameState;
        at(n.passes), n.passes.pick = !0, n.passes.depth = !0, n.cullingVolume = Xt(t, r, 1, 1);
        var o = t._pickDepthPassState;
        _(o) || (o = t._pickDepthPassState = new H(i), o.scissorTest = {
            enabled: !0,
            rectangle: new e
        }, o.viewport = new e);
        var a = i.drawingBufferWidth,
            s = i.drawingBufferHeight,
            l = t._pickDepthFramebuffer,
            u = t._pickDepthFramebufferWidth,
            c = t._pickDepthFramebufferHeight;
        _(l) && u === a && c === s || (t._pickDepthFramebuffer = t._pickDepthFramebuffer && t._pickDepthFramebuffer.destroy(), l = t._pickDepthFramebuffer = new z({
            context: i,
            depthStencilTexture: new K({
                context: i,
                width: a,
                height: s,
                pixelFormat: R.DEPTH_STENCIL,
                pixelDatatype: W.UNSIGNED_INT_24_8
            })
        }), t._pickDepthFramebufferWidth = a, t._pickDepthFramebufferHeight = s), o.framebuffer = l, o.viewport.width = a, o.viewport.height = s, o.scissorTest.rectangle.x = r.x, o.scissorTest.rectangle.y = s - r.y, o.scissorTest.rectangle.width = 1, o.scissorTest.rectangle.height = 1, At(t, o), Tt(t, o, Ar), It(t, o), i.endFrame()
    }

    function Ht(t, r) {
        if (t._mode === be.SCENE2D || t._multiViewportMode == _e.NONE) {
            return -1
        }
        for (var i = t._context, n = new e(r.x, i.drawingBufferHeight - r.y), o = new e, a = -1, s = 0; s < t._multiViewportInfo.length; s++) {
            var l = t._multiViewportInfo[s];
            o.x = i.drawingBufferWidth * l.x, o.y = i.drawingBufferHeight * l.y, o.width = i.drawingBufferWidth * l.width, o.height = i.drawingBufferHeight * l.height;
            var u = o.intersect(n);
            if (u === S.INTERSECTING) {
                a = s;
                break
            }
        }
        return a
    }

    function Wt(e, t) {
        if (e && t) {
            var r = e.firstChild;
            if (r) {
                var i = r.namespaceURI,
                    n = s.queryFirstNode(r, "AttachFiles", i);
                if (n) {
                    for (var o = s.queryNodes(n, "AttachFile", i), a = [], l = 0, u = o.length; u > l; l++) {
                        var c = o[l].textContent;
                        if (c.indexOf("water") > 0) {
                            var d = t + c;
                            a.push(De(d))
                        }
                    }
                    if (!a.length) {
                        return
                    }
                    var h = Ae.defer();
                    return Ae.all(a, function (e) {
                        for (var t = [], r = 0, i = e.length; i > r; r++) {
                            var n = e[r];
                            if (!n) {
                                break
                            }
                            var o = {},
                                a = n.firstChild,
                                l = s.queryStringValue(a, "Version");
                            o.version = l;
                            var u = s.queryStringValue(a, "FileType");
                            o.fileType = u;
                            var c = s.queryFirstNode(a, "WaterEffect"),
                                d = s.queryNumericValue(c, "AverageHeight");
                            o.averageHeight = d;
                            var _ = s.queryNodes(c, "GpuProgramParameters");
                            o.gpuProgramParameters = [];
                            for (var f = 0, p = _.length; p > f; f++) {
                                var m = {};
                                m.gpuConstants = [], m.atuoConstants = [];
                                var v = _[f],
                                    y = s.queryFirstNode(v, "GpuConstants");
                                if (y) {
                                    for (var g = s.queryNodes(y, "GpuConstantDefinition"), b = 0, C = g.length; C > b; b++) {
                                        var w = {},
                                            S = g[b],
                                            x = s.queryNumericValue(S, "ConstType");
                                        w.constType = x;
                                        var T = s.queryNumericValue(S, "Index");
                                        w.index = T;
                                        var E = s.queryStringValue(S, "Name");
                                        w.name = E;
                                        var P = s.queryNumericValue(S, "ArraySize");
                                        w.arraySize = P;
                                        var A = s.queryNumericValue(S, "Multiple");
                                        w.multiple = A;
                                        var D = s.queryFirstNode(S, "ArrayFloat");
                                        if (w.arrayFloat = [], D) {
                                            for (var O = s.queryNodes(D, "Float"), $ = 0; P > $;) {
                                                var M = parseFloat(O[$].textContent);
                                                w.arrayFloat.push(M), $++
                                            }
                                        }
                                        m.gpuConstants.push(w)
                                    }
                                }
                                var I = s.queryFirstNode(v, "AutoConstants");
                                if (I) {
                                    for (var R = s.queryNodes(I, "AutoConstantEntry"), b = 0, C = R.length; C > b; b++) {
                                        var w = {},
                                            L = R[b],
                                            N = s.queryNumericValue(L, "ParamType");
                                        w.paramType = N;
                                        var E = s.queryStringValue(L, "Name");
                                        w.name = E;
                                        var F = s.queryNumericValue(L, "PhysicalIndex");
                                        w.physicalIndex = F;
                                        var B = s.queryNumericValue(L, "ElementCount");
                                        w.elementCount = B;
                                        var Y = s.queryNumericValue(L, "Data");
                                        w.data = Y;
                                        var k = s.queryNumericValue(L, "FData");
                                        w.fData = k;
                                        var X = s.queryBooleanValue(L, "IsReal");
                                        w.isReal = X, m.atuoConstants.push(w)
                                    }
                                }
                                o.gpuProgramParameters.push(m)
                            }
                            t.push(o)
                        }
                        h.resolve(t)
                    }, function () {
                    }), h.promise
                }
            }
        }
    }

    function jt(e) {
        return Xe(e).then(function (e) {
            if (!(e.length < 1)) {
                var t = e[0];
                return {
                    name: t.name,
                    path: t.path
                }
            }
        })
    }

    function qt(e) {
        var t = e + "/layers.json";
        return _(B.CREDENTIAL) && (t = B.addToken(t)), Xe(t).then(function (e) {
            for (var t = {
                s3m: [],
                imagery: [],
                terrain: void 0
            }, r = 0, i = e.length; i > r; r++) {
                var n = e[r],
                    o = n.layer3DType;
                "OSGBLayer" == o ? t.s3m.push(n) : "ImageFileLayer" == o ? t.imagery.push(n) : "TerrainFileLayer" == o && (t.terrain = n)
            }
            return t
        })
    }

    function Qt(e) {
        return De(e).then(function (e) {
            if (!_(e)) {
                throw new m("get s3m layer config failed,xml document undefined.")
            }
            var t = e.firstChild,
                r = t.namespaceURI,
                i = s.queryStringValue(t, "LayerName", r),
                n = s.queryFirstNode(t, "Options", r),
                o = s.queryBooleanValue(n, "Selectable", r),
                a = s.queryBooleanValue(n, "Visible", r),
                u = s.queryNumericValue(n, "VisibleAltitudeMin", r),
                c = s.queryNumericValue(n, "VisibleAltitudeMax", r);
            c = 0 == c ? Number.MAX_VALUE : c;
            var d = s.queryNumericValue(n, "VisibleDistanceMin", r),
                h = s.queryNumericValue(n, "VisibleDistanceMax", r),
                f = s.queryStringValue(n, "ShadowType", r),
                p = 0;
            "SELECTION" == f ? p = 1 : "ALL" == f && (p = 2);
            var v = s.queryStringValue(t, "CacheFileType", r),
                y = !1;
            "S3MB" == v && (y = !0);
            var g = s.queryFirstNode(t, "Style", r);
            if (!_(g)) {
                var b = s.queryFirstNode(t, "LayerStyle", r);
                if (_(b) && (g = s.queryFirstNode(b, "Style", r), !_(g))) {
                    throw new m("get s3m layer config failed,extendxml.xml foamat error,layer name is " + i)
                }
            }
            var C = s.queryNumericValue(g, "LineWidth", r),
                w = s.queryStringValue(g, "FillForeColor", r),
                S = Nr.exec(w),
                x = new l;
            if (null !== S) {
                var T = parseFloat(S[1]);
                T = 189 == T ? 255 : T;
                var P = parseFloat(S[2]);
                P = 235 == P ? 255 : P, x.red = E.clamp(T / 255, 0, 1), x.green = E.clamp(P / 255, 0, 1), x.blue = E.clamp(parseFloat(S[3]) % 256 / 255, 0, 1), x.alpha = E.clamp(parseFloat(S[3]) % 65536 / 256 / 255, 0, 1)
            }
            var A = s.queryFirstNode(g, "Style3D", r),
                D = new Ge;
            if (_(A)) {
                var O = s.queryNumericValue(A, "FillStyle", r),
                    $ = We.Fill;
                "FILL_LINE" == O ? $ = We.WireFrame : "FILL_FACEANDLINE" == O && ($ = We.Fill_And_WireFrame);
                var M = s.queryNumericValue(A, "PointSize", r),
                    I = s.queryStringValue(A, "LineColor", r),
                    S = Fr.exec(I),
                    R = new l;
                null !== S && (R.red = E.clamp(parseFloat(S[1]), 0, 1), R.green = E.clamp(parseFloat(S[2]), 0, 1), R.blue = E.clamp(parseFloat(S[3]), 0, 1), R.alpha = E.clamp(parseFloat(S[4]), 0, 1));
                var L = s.queryStringValue(A, "ColorPoint", r);
                S = Fr.exec(L);
                var N = new l;
                null !== S && (N.red = E.clamp(parseFloat(S[1]), 0, 1), N.green = E.clamp(parseFloat(S[2]), 0, 1), N.blue = E.clamp(parseFloat(S[3]), 0, 1), N.alpha = E.clamp(parseFloat(S[4]), 0, 1));
                var F = s.queryNumericValue(A, "BottomAltitude", r),
                    B = (s.queryStringValue(A, "AltitudeMode", r), E.toRadians(s.queryNumericValue(A, "RotateX", r))),
                    Y = E.toRadians(s.queryNumericValue(A, "RotateY", r)),
                    k = E.toRadians(s.queryNumericValue(A, "RotateZ", r));
                new He(B, Y, k);
                D.fillForeColor = x, D.bottomAltitude = F, D.lineWidth = C, D.lineColor = R, D.pointSize = M, D.pointColor = N, D.fillStyle = $
            }
            var X = void 0,
                V = s.queryFirstNode(t, "Effect", r);
            if (_(V)) {
                var U = s.queryStringValue(V, "EffectType", r);
                if ("Region" === U) {
                    X = new Qe;
                    var z = s.queryNumericValue(V, "Type", r);
                    X.setValue("RegionType", z);
                    var G = s.queryNumericValue(V, "ForeColor", r),
                        H = l.fromRgba(G);
                    X.setValue("ForeColor", H);
                    var W = s.queryNumericValue(V, "BackColor", r),
                        j = l.fromRgba(W);
                    X.setValue("BackColor", j);
                    var q = s.queryNumericValue(V, "WidthX", r);
                    X.setValue("WidthX", q);
                    var Q = s.queryNumericValue(V, "WidthY", r);
                    X.setValue("WidthY", Q);
                    var K = s.queryNumericValue(V, "OffsetX", r);
                    X.setValue("OffsetX", K);
                    var J = s.queryNumericValue(V, "OffsetY", r);
                    X.setValue("OffsetY", J);
                    var Z = s.queryNumericValue(V, "RepeatX", r);
                    X.setValue("RepeatX", Z);
                    var ee = s.queryNumericValue(V, "RepeatY", r);
                    X.setValue("RepeatY", ee);
                    var te = s.queryNumericValue(V, "RotationAngle", r);
                    X.setValue("RotationAngle", te)
                } else {
                    if ("Polyline" === U) {
                        X = new Ke;
                        var z = s.queryNumericValue(V, "Type", r);
                        X.setValue("PolylineType", z);
                        var re = s.queryNumericValue(V, "Color", r),
                            ie = l.fromRgba(re);
                        X.setValue("Color", ie);
                        var ne = s.queryNumericValue(V, "Width", r);
                        X.setValue("Width", ne);
                        var oe = s.queryBooleanValue(V, "IsArrow", r);
                        X.setValue("IsArrow", oe);
                        var ae = s.queryNumericValue(V, "GapColor", r),
                            se = l.fromRgba(ae);
                        X.setValue("GapColor", se);
                        var le = s.queryNumericValue(V, "DashLength", r);
                        X.setValue("DashLength", le);
                        var ue = s.queryNumericValue(V, "DashPattern", r);
                        X.setValue("DashPattern", ue);
                        var ce = s.queryBooleanValue(V, "IsMove", r);
                        X.setValue("IsMove", ce);
                        var de = s.queryNumericValue(V, "GlowPower", r);
                        X.setValue("GlowPower", de);
                        var he = s.queryNumericValue(V, "OutlineColor", r),
                            _e = l.fromRgba(he);
                        X.setValue("OutlineColor", _e);
                        var fe = s.queryNumericValue(V, "OutlineWidth", r);
                        X.setValue("OutlineWidth", fe)
                    }
                }
            }
            var pe = s.queryNumericValue(t, "LODRangeScale", r),
                me = s.queryFirstNode(t, "PolygonOffset", r),
                ve = s.queryNumericValue(me, "Constant", r),
                ye = s.queryNumericValue(me, "SlopeScale", r),
                ge = 0 !== ve && 0 !== ye,
                be = s.queryFirstNode(t, "ColorParams", r),
                Ce = s.queryNumericValue(be, "Brightness", r),
                we = s.queryNumericValue(be, "Constrast", r),
                Se = s.queryNumericValue(be, "Hue", r),
                xe = s.queryNumericValue(be, "Saturation", r),
                Te = s.queryNumericValue(be, "Gamma", r);
            return {
                name: i,
                isS3MB: y,
                style3D: D,
                selectEnable: o,
                isVisible: a,
                minVisibleAltitude: u,
                maxVisibleAltitude: c,
                minVisibleDistance: d,
                maxVisibleDistance: h,
                shadowType: p,
                heading: k,
                lodRangeScale: pe,
                polygonOffset: {
                    enabled: ge,
                    units: ve,
                    factor: ye
                },
                brightness: Ce,
                constrast: we,
                hue: Se,
                saturation: xe,
                gamma: Te,
                effect: X
            }
        })
    }

    function Kt(e) {
        return Xe(e).then(function (e) {
            return e.camera.tilt -= 90, e
        })
    }

    var Jt = 0.9999;
    f(tt.prototype, {
        canvas: {
            get: function () {
                return this._canvas
            }
        },
        drawingBufferHeight: {
            get: function () {
                return this._context.drawingBufferHeight
            }
        },
        drawingBufferWidth: {
            get: function () {
                return this._context.drawingBufferWidth
            }
        },
        maximumAliasedLineWidth: {
            get: function () {
                return V.maximumAliasedLineWidth
            }
        },
        maximumCubeMapSize: {
            get: function () {
                return V.maximumCubeMapSize
            }
        },
        pickPositionSupported: {
            get: function () {
                return this._context.depthTexture
            }
        },
        globe: {
            get: function () {
                return this._globe
            },
            set: function (e) {
                this._globe = this._globe && this._globe.destroy(), this._globe = e
            }
        },
        primitives: {
            get: function () {
                return this._primitives
            }
        },
        groundPrimitives: {
            get: function () {
                return this._groundPrimitives
            }
        },
        camera: {
            get: function () {
                return this._camera
            }
        },
        screenSpaceCameraController: {
            get: function () {
                return this._screenSpaceCameraController
            }
        },
        mapProjection: {
            get: function () {
                return this._mapProjection
            }
        },
        frameState: {
            get: function () {
                return this._frameState
            }
        },
        tweens: {
            get: function () {
                return this._tweens
            }
        },
        imageryLayers: {
            get: function () {
                return _(this.globe) ? this.globe.imageryLayers : void 0
            }
        },
        terrainProvider: {
            get: function () {
                return _(this.globe) ? this.globe.terrainProvider : void 0
            },
            set: function (e) {
                _(this.globe) && (this.globe.terrainProvider = e)
            }
        },
        terrainProviderChanged: {
            get: function () {
                return _(this.globe) ? this.globe.terrainProviderChanged : void 0
            }
        },
        renderError: {
            get: function () {
                return this._renderError
            }
        },
        preRender: {
            get: function () {
                return this._preRender
            }
        },
        postRender: {
            get: function () {
                return this._postRender
            }
        },
        context: {
            get: function () {
                return this._context
            }
        },
        debugFrustumStatistics: {
            get: function () {
                return this._debugFrustumStatistics
            }
        },
        scene3DOnly: {
            get: function () {
                return this._frameState.scene3DOnly
            }
        },
        orderIndependentTranslucency: {
            get: function () {
                return _(this._oit)
            }
        },
        id: {
            get: function () {
                return this._id
            }
        },
        mode: {
            get: function () {
                return this._mode
            },
            set: function (e) {
                if (this.scene3DOnly && e !== be.SCENE3D) {
                    throw new m("Only SceneMode.SCENE3D is valid when scene3DOnly is true.")
                }
                if (e === be.SCENE2D) {
                    this.morphTo2D(0)
                } else {
                    if (e === be.SCENE3D) {
                        this.morphTo3D(0)
                    } else {
                        if (e !== be.COLUMBUS_VIEW) {
                            throw new m("value must be a valid SceneMode enumeration.")
                        }
                        this.morphToColumbusView(0)
                    }
                }
                this._mode = e
            }
        },
        numberOfFrustums: {
            get: function () {
                return this._frustumCommandsList.length
            }
        },
        terrainExaggeration: {
            get: function () {
                return this._terrainExaggeration
            }
        },
        layers: {
            get: function () {
                return this._layers
            }
        },
        useWebVR: {
            get: function () {
                return this._useWebVR
            },
            set: function (e) {
                if (this.camera.frustum instanceof O) {
                    throw new m("VR is unsupported with an orthographic projection.")
                }
                this._useWebVR = e, this._useWebVR ? (this._frameState.creditDisplay.container.style.visibility = "hidden", this._cameraVR = new ee(this), _(this._deviceOrientationCameraController) || (this._deviceOrientationCameraController = new ne(this)), this._aspectRatioVR = this._camera.frustum.aspectRatio) : (this._frameState.creditDisplay.container.style.visibility = "visible", this._cameraVR = void 0, this._deviceOrientationCameraController = this._deviceOrientationCameraController && !this._deviceOrientationCameraController.isDestroyed() && this._deviceOrientationCameraController.destroy(), this._camera.frustum.aspectRatio = this._aspectRatioVR, this._camera.frustum.xOffset = 0)
            }
        },
        mapMode2D: {
            get: function () {
                return this._mapMode2D
            }
        },
        imagerySplitPosition: {
            get: function () {
                return this._frameState.imagerySplitPosition
            },
            set: function (e) {
                this._frameState.imagerySplitPosition = e
            }
        },
        multiViewportMode: {
            get: function () {
                return this._multiViewportMode
            },
            set: function (t) {
                switch (this._multiViewportInfo.length = 0, t) {
                    case _e.NONE:
                        break;
                    case _e.HORIZONTAL:
                        this._multiViewportInfo[0] = new e(0, 0, 0.5, 1), this._multiViewportInfo[1] = new e(0.5, 0, 0.5, 1);
                        break;
                    case _e.VERTICAL:
                        this._multiViewportInfo[0] = new e(0, 0.5, 1, 0.5), this._multiViewportInfo[1] = new e(0, 0, 1, 0.5);
                        break;
                    case _e.QUAD:
                        this._multiViewportInfo[0] = new e(0, 0.5, 0.5, 0.5), this._multiViewportInfo[1] = new e(0.5, 0.5, 0.5, 0.5), this._multiViewportInfo[2] = new e(0.5, 0, 0.5, 0.5), this._multiViewportInfo[3] = new e(0, 0, 0.5, 0.5);
                        break;
                    case _e.TRIPLE:
                        this._multiViewportInfo[2] = new e(0, 0.5, 0.5, 0.5), this._multiViewportInfo[1] = new e(0.5, 0.5, 0.5, 0.5), this._multiViewportInfo[0] = new e(0, 0, 1, 0.5);
                        break;
                    default:
                        throw new m("the mode is error")
                }
                t !== _e.NONE && this._multiViewportMode === _e.NONE ? (this._frameState.creditDisplay.container.style.visibility = "hidden", _(this._deviceOrientationCameraController) || (this._deviceOrientationCameraController = new ne(this)), this._aspectRatioVR = this._camera.frustum.aspectRatio) : t === _e.NONE && this._multiViewportMode !== _e.NONE && (this._frameState.creditDisplay.container.style.visibility = "visible", this._deviceOrientationCameraController = this._deviceOrientationCameraController && !this._deviceOrientationCameraController.isDestroyed() && this._deviceOrientationCameraController.destroy(), this._camera.frustum.aspectRatio = this._aspectRatioVR), this._multiViewportMode = t
            }
        },
        undergroundMode: {
            get: function () {
                return this._undergroundMode
            },
            set: function (e) {
                e && (this._undergroundMode = e)
            }
        },
        undergroundDepth: {
            get: function () {
                return this._undergroundDepth
            },
            set: function (e) {
                if (e && (this._undergroundDepth = e, _(this.underEllipsoid))) {
                    var t = Math.abs(e),
                        r = 6378137 - t;
                    this.underEllipsoid = Ye.fromCartesian3(new n(r, r, r))
                }
            }
        },
        minimumDisableDepthTestDistance: {
            get: function () {
                return this._minimumDisableDepthTestDistance
            },
            set: function (e) {
                if (!_(e) || 0 > e) {
                    throw new m("minimumDisableDepthTestDistance must be greater than or equal to 0.0.")
                }
                this._minimumDisableDepthTestDistance = e
            }
        },
        enableOcclude: {
            get: function () {
                return this._enableOcclude
            },
            set: function (e) {
                this._enableOcclude = e
            }
        },
        bloomEffect: {
            get: function () {
                return this.compositor.bloomEffect
            }
        },
        scanEffect: {
            get: function () {
                return this.compositor.scanEffect
            }
        },
        depthOfFieldEffect: {
            get: function () {
                return this.compositor.depthOfFieldEffect
            }
        },
        colorCorrection: {
            get: function () {
                return this.compositor.colorCorrection
            }
        }
    }), tt.prototype.getCompressedTextureFormatSupported = function (e) {
        var t = this.context;
        return ("WEBGL_compressed_texture_s3tc" === e || "s3tc" === e) && t.s3tc || ("WEBGL_compressed_texture_pvrtc" === e || "pvrtc" === e) && t.pvrtc || ("WEBGL_compressed_texture_etc1" === e || "etc1" === e) && t.etc1
    }, tt.prototype.outputSceneToFile = function () {
        var e = this,
            t = Ae.defer(),
            r = !1;
        return this.postRender.addEventListener(function () {
            if (!r) {
                r = !0;
                var i = e.context.readPixels({
                        frameBuffer: e.fxaa._fbo
                    }),
                    n = document.createElement("canvas");
                n.height = e.context.drawingBufferHeight, n.width = e.context.drawingBufferWidth;
                var o = n.getContext("2d"),
                    a = o.createImageData(n.width, n.height);
                a.data.set(i), o.putImageData(a, 0, 0);
                for (var s = o.getImageData(0, 0, n.width, n.height), l = 0; l < s.height / 2; ++l) {
                    for (var u = 0; u < s.width; ++u) {
                        var c = 4 * l * s.width + 4 * u,
                            d = 4 * (s.height - l) * s.width + 4 * u,
                            h = s.data[c],
                            _ = s.data[c + 1],
                            f = s.data[c + 2],
                            p = s.data[c + 3];
                        s.data[c] = s.data[d], s.data[c + 1] = s.data[d + 1], s.data[c + 2] = s.data[d + 2], s.data[c + 3] = s.data[d + 3], s.data[d] = h, s.data[d + 1] = _, s.data[d + 2] = f, s.data[d + 3] = p
                    }
                }
                o.clearRect(0, 0, s.width, s.height), o.putImageData(s, 0, 0);
                var m = n.toDataURL();
                t.resolve(m)
            }
        }), t.promise
    };
    var Zt, er = new n,
        tr = new n,
        rr = new t,
        ir = new d,
        nr = new x,
        or = new P(0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1);
    or = P.inverseTransformation(or, or);
    var ar = new M,
        sr = new I,
        lr = new O,
        ur = new $,
        cr = new n,
        dr = new a(Math.PI, E.PI_OVER_TWO),
        hr = new n,
        _r = new n,
        fr = new P,
        pr = new P,
        mr = new n,
        vr = new n,
        yr = new e;
    tt.prototype.initializeFrame = function () {
        120 === this._shaderFrameCount++ && (this._shaderFrameCount = 0, this._context.shaderCache.destroyReleasedShaderPrograms()), this._tweens.update(), this._screenSpaceCameraController.update(), _(this._deviceOrientationCameraController) && this._deviceOrientationCameraController.update(), this._camera.update(this._mode), this._camera._updateCameraChanged()
    }, tt.prototype.render = function (e) {
        try {
            Bt(this, e)
        } catch (t) {
            if (this._renderError.raiseEvent(this, t), this.rethrowRenderErrors) {
                throw t
            }
        }
    }, tt.prototype.clampLineWidth = function (e) {
        return Math.max(V.minimumAliasedLineWidth, Math.min(e, V.maximumAliasedLineWidth))
    };
    var gr = new $,
        br = new n,
        Cr = new n,
        wr = new i,
        Sr = new P,
        xr = new I,
        Tr = 3,
        Er = 3,
        Pr = new e(0, 0, Tr, Er),
        Ar = new l(0, 0, 0, 0),
        Dr = new i,
        Or = new n;
    tt.prototype.pick = function (e, t, r) {
        if (!_(e)) {
            throw new m("windowPosition is undefined.")
        }
        Tr = h(t, 3), Er = h(r, Tr);
        var i = this._context,
            n = i.uniformState,
            o = this._frameState;
        this.pickPosition(e, Or), i._pickPosition[0] = Or.x, i._pickPosition[1] = Or.y, i._pickPosition[2] = Or.z;
        var a = Ce.transformWindowToDrawingBuffer(this, e, Dr);
        if (_(this._pickFramebuffer) || (this._pickFramebuffer = i.createPickFramebuffer()), this._multiViewportMode !== _e.NONE) {
            var s = Ht(this, a);
            if (s > -1) {
                this._frameState.multiViewportIndex = s;
                var l = this._passState.viewport,
                    u = this._multiViewportInfo[this._frameState.multiViewportIndex];
                l.x = i.drawingBufferWidth * u.x, l.y = i.drawingBufferHeight * u.y, l.width = i.drawingBufferWidth * u.width, l.height = i.drawingBufferHeight * u.height
            }
        }
        st(this, o.frameNumber, o.time), o.cullingVolume = Xt(this, a, Tr, Er), o.invertClassification = !1, o.passes.pick = !0, n.update(o), Pr.x = a.x - 0.5 * (Tr - 1), Pr.y = this.drawingBufferHeight - a.y - 0.5 * (Er - 1), Pr.width = Tr, Pr.height = Er;
        var c = this._pickFramebuffer.begin(Pr);
        At(this, c), Tt(this, c, Ar), this._frameState.multiViewportIndex = -1, It(this, c);
        var d = this._pickFramebuffer.end(Pr);
        i.endFrame(), Rt(o);
        for (var f = 0, p = this._primitives.length; p > f; f++) {
            var v = this._primitives._primitives[f];
            if ("S3M_Instance" == v.type) {
                v.setUnSelected();
                break
            }
        }
        _(d) && -1 == d.id && _(d.primitive) && d.primitive.setSelected(d.index);
        for (var y = this._layers.layerQueue, g = i.pixels[0] + 256 * i.pixels[1] + 256 * i.pixels[2] * 256, b = i.pixels[3], C = !1, f = 0, p = y.length; p > f; f++) {
            var w = y[f];
            w.id === b ? (w.setSelection(g), this._layers.setSelectedLayer(w), C = !0) : w.releaseSelection()
        }
        return C || this._layers.setSelectedLayer(void 0), _(d) && _(d.primitive) && _(d.primitive.bimServerLayer) && (d.primitive.bimServerLayer.setSelectedFeatureByID(d.primitive.objectID), d.primitive.bimServerLayer.getSelectedProperties(d.primitive.objectID)), d
    }, tt.prototype.collideDetection = function (e) {
        var t = this._context;
        _(this._collideFramebuffer) || (this._collideFramebuffer = t.createCollideFramebuffer());
        var r = this.camera,
            i = t.uniformState,
            o = this._frameState,
            a = n.clone(r.direction),
            s = n.clone(r.up),
            l = n.cross(e, r.right, new n);
        r.setView({
            position: r.position,
            orientation: {
                direction: e,
                up: l
            }
        }), st(this, o.frameNumber, o.time), o.passes.depth = !0, i.update(o);
        var u = this._collideFramebuffer.begin(2, 2);
        At(this, u), bt(this, u), this._collideFramebuffer.executeCopyDepth(t, u);
        var c = this._collideFramebuffer.end(this);
        return t.endFrame(), this.camera.setView({
            position: this.camera.position,
            orientation: {
                direction: a,
                up: s
            }
        }), c
    }, tt.prototype.closedPickPosition = function (e, t) {
        var r = this._context;
        _(this._closedDepthFramebuffer) || (this._closedDepthFramebuffer = r.createClosedDepthFramebuffer());
        var i = this.camera,
            n = i.frustum.far;
        i.frustum.far = 150;
        var o = this._frameState;
        o._isDepth = !0;
        var a = this._closedDepthFramebuffer.begin(16, 16);
        At(this, a), this._environmentVisible.isGlobalVisible = !1, dt(this), bt(this, a), this._closedDepthFramebuffer.executeCopyDepth(r, a);
        var s = this._closedDepthFramebuffer.end(this, e, t);
        return r.endFrame(), i.frustum.far = n, this._environmentVisible.isGlobalVisible = !0, o._isDepth = !1, dt(this), s
    };
    var $r = /\bgl_FragDepthEXT\b/,
        Mr = /\bdiscard\b/,
        Ir = new o,
        Rr = new o(1, 1 / 255, 1 / 65025, 1 / 16581375);
    tt.prototype.pickPositionWorldCoordinates = function (t, r, i) {
        if (this.useDepthPicking) {
            if (!_(t)) {
                throw new m("windowPosition is undefined.")
            }
            if (!_(this._globeDepth)) {
                throw new m("Picking from the depth buffer is not supported. Check pickPositionSupported.")
            }
            var a = t.toString();
            if (this._pickPositionCacheDirty) {
                this._pickPositionCache = {}, this._pickPositionCacheDirty = !1
            } else {
                if (this._pickPositionCache.hasOwnProperty(a)) {
                    return n.clone(this._pickPositionCache[a], r)
                }
            }
            var s = this._context,
                l = s.uniformState,
                u = Ce.transformWindowToDrawingBuffer(this, t, Dr);
            if (this.pickTranslucentDepth && Gt(this, u), this._multiViewportMode !== _e.NONE) {
                var c = Ht(this, u);
                if (u.y = this.drawingBufferHeight - u.y, c > -1) {
                    this._frameState.multiViewportIndex = c;
                    var d = this._passState;
                    this.frameState.commandList.length = 0, st(this, this._frameState.frameNumber, this._frameState.time), this._frameState.passes.render = !0, this._environmentState.originalFramebuffer = void 0, Tt(this, d, Ar, !1, !0), It(this, d);
                    var h = new e,
                        f = this._multiViewportInfo[this._frameState.multiViewportIndex];
                    h.x = s.drawingBufferWidth * f.x, h.y = s.drawingBufferHeight * f.y, h.width = s.drawingBufferWidth * f.width, h.height = s.drawingBufferHeight * f.height;
                    var p = (u.x - h.x) / h.width,
                        v = (u.y - h.y) / h.height;
                    u.x = p * this.canvas.clientWidth, u.y = v * this.canvas.clientHeight, this._frameState.multiViewportIndex = -1
                }
            } else {
                u.y = this.drawingBufferHeight - u.y
            }
            var y, g = this._camera;
            y = _(g.frustum.fov) ? g.frustum.clone(ar) : _(g.frustum.infiniteProjectionMatrix) ? g.frustum.clone(sr) : _(g.frustum.width) ? g.frustum.clone(lr) : g.frustum.clone(ur);
            var b;
            i && (b = this.closedPickPosition(u.x, u.y));
            for (var C = this.numberOfFrustums, w = 0; C > w; ++w) {
                var S, x, T = gt(this, w),
                    E = s.readPixels({
                        x: u.x,
                        y: u.y,
                        width: 1,
                        height: 1,
                        framebuffer: T.framebuffer
                    });
                if (S = o.unpack(E, 0, Ir), o.divideByScalar(S, 255, S), x = o.dot(S, Rr), x > 0 && 1 > x) {
                    var P, A = this._frustumCommandsList[w];
                    if (this.mode === be.SCENE2D ? (P = g.position.z, g.position.z = P - A.near + 1, y.far = Math.max(1, A.far - A.near), y.near = 1, l.update(this.frameState), l.updateFrustum(y)) : (y.near = A.near * (0 !== w ? Jt : 1), y.far = A.far, l.updateFrustum(y)), r = Ce.drawingBufferToWgs84Coordinates(this, u, x, r), _(b)) {
                        var D = n.distance(b, g.position),
                            O = n.distance(r, g.position);
                        return O > 2 * D ? b : r
                    }
                    return this.mode === be.SCENE2D && (g.position.z = P, l.update(this.frameState)), this._pickPositionCache[a] = n.clone(r), r
                }
            }
            return this._pickPositionCache[a] = void 0, b
        }
    };
    var Lr = new a;
    tt.prototype.pickPosition = function (e, t) {
        if (t = this.pickPositionWorldCoordinates(e, t), _(t) && this.mode !== be.SCENE3D) {
            n.fromElements(t.y, t.z, t.x, t);
            var r = this.mapProjection,
                i = r.ellipsoid,
                o = r.unproject(t, Lr);
            i.cartographicToCartesian(o, t)
        }
        return t
    }, tt.prototype.drillPick = function (e, t) {
        if (!_(e)) {
            throw new m("windowPosition is undefined.")
        }
        var r, i, n = [],
            o = [],
            a = [];
        _(t) || (t = Number.MAX_VALUE);
        for (var s = this.pick(e); _(s) && _(s.primitive) && (n.push(s), !(0 >= --t));) {
            var l = s.primitive,
                u = !1;
            "function" == typeof l.getGeometryInstanceAttributes && _(s.id) && (i = l.getGeometryInstanceAttributes(s.id), _(i) && _(i.show) && (u = !0, i.show = N.toValue(!1, i.show), a.push(i))), u || (l.show = !1, o.push(l)), s = this.pick(e)
        }
        for (r = 0; r < o.length; ++r) {
            o[r].show = !0
        }
        for (r = 0; r < a.length; ++r) {
            i = a[r], i.show = N.toValue(!0, i.show)
        }
        return n
    }, tt.prototype.completeMorph = function () {
        this._transitioner.completeMorph()
    }, tt.prototype.morphTo2D = function (e) {
        var t, r = this.globe;
        t = _(r) ? r.ellipsoid : this.mapProjection.ellipsoid, e = h(e, 2), this._transitioner.morphTo2D(e, t)
    }, tt.prototype.morphToColumbusView = function (e) {
        var t, r = this.globe;
        t = _(r) ? r.ellipsoid : this.mapProjection.ellipsoid, e = h(e, 2), this._transitioner.morphToColumbusView(e, t)
    }, tt.prototype.morphTo3D = function (e) {
        var t, r = this.globe;
        t = _(r) ? r.ellipsoid : this.mapProjection.ellipsoid, e = h(e, 2), this._transitioner.morphTo3D(e, t)
    }, tt.prototype.isDestroyed = function () {
        return !1
    }, tt.prototype.destroy = function () {
        return this._tweens.removeAll(), this._computeEngine = this._computeEngine && this._computeEngine.destroy(), this._screenSpaceCameraController = this._screenSpaceCameraController && this._screenSpaceCameraController.destroy(), this._deviceOrientationCameraController = this._deviceOrientationCameraController && !this._deviceOrientationCameraController.isDestroyed() && this._deviceOrientationCameraController.destroy(), this._pickFramebuffer = this._pickFramebuffer && this._pickFramebuffer.destroy(), this._pickDepthFramebuffer = this._pickDepthFramebuffer && this._pickDepthFramebuffer.destroy(), this._primitives = this._primitives && this._primitives.destroy(), this._groundPrimitives = this._groundPrimitives && this._groundPrimitives.destroy(), this._globe = this._globe && this._globe.destroy(), this.skyBox = this.skyBox && this.skyBox.destroy(), this.skyAtmosphere = this.skyAtmosphere && this.skyAtmosphere.destroy(), this._debugSphere = this._debugSphere && this._debugSphere.destroy(), this.sun = this.sun && this.sun.destroy(), this._sunPostProcess = this._sunPostProcess && this._sunPostProcess.destroy(), this._depthPlane = this._depthPlane && this._depthPlane.destroy(), this._transitioner.destroy(), this._debugFrustumPlanes = this._debugFrustumPlanes && this._debugFrustumPlanes.destroy(), this._brdfLutGenerator = this._brdfLutGenerator && this._brdfLutGenerator.destroy(), _(this._reflectFramebuffer) && (this._reflectFramebuffer.destroy(), this._frameState._framebufferList.water = void 0), _(this._normalFramebuffer) && (this._normalFramebuffer.destroy(), this._frameState._framebufferList.normalAndDepth = void 0), _(this._globeDepth) && this._globeDepth.destroy(), this._removeCreditContainer && this._canvas.parentNode.removeChild(this._creditContainer), _(this._oit) && this._oit.destroy(), this._fxaa.destroy(), this.compositor.destroy(), this._context = this._context && this._context.destroy(), this._frameState.creditDisplay.destroy(), _(this._performanceDisplay) && (this._performanceDisplay = this._performanceDisplay && this._performanceDisplay.destroy(), this._performanceContainer.parentNode.removeChild(this._performanceContainer)), p(this)
    }, tt.prototype.cartesianToCanvasCoordinates = function (e, t) {
        return Ce.wgs84ToWindowCoordinates(this, e, t)
    }, tt.prototype.addS3MBTilesLayer = function (e, r, i) {
        if (!_(e)) {
            throw new m("add s3m tiles layer,url is required.")
        }
        r = r || {};
        var o = e;
        _(B.CREDENTIAL) && (o = B.addToken(o));
        var a = h(r.name, qe(o)),
            l = this,
            u = Ae.defer();
        return De(o).then(function (e) {
            var c, d = e.firstChild,
                f = d.namespace,
                p = (s.queryStringValue(d, "Asset", f), s.queryStringValue(d, "Version", f), s.queryStringValue(d, "DataType", f), s.queryStringValue(d, "PyramidSplitType", f), s.queryStringValue(d, "LodType", f), s.queryFirstNode(d, "Position", f)),
                m = s.queryNumericValue(p, "X", f),
                v = s.queryNumericValue(p, "Y", f),
                y = s.queryNumericValue(p, "Z", f),
                g = s.queryFirstNode(d, "GeoBounds", f);
            if (_(g)) {
                var b = s.queryNumericValue(g, "Left", f),
                    C = s.queryNumericValue(g, "Top", f),
                    w = s.queryNumericValue(g, "Right", f),
                    S = s.queryNumericValue(g, "Bottom", f);
                c = Ne.fromDegrees(b, S, w, C)
            }
            for (var x = s.queryFirstNode(d, "HeightRange", f), T = s.queryNumericValue(x, "Min", f), E = s.queryNumericValue(x, "Max", f), P = s.queryFirstNode(d, "WDescript", f), A = s.queryFirstNode(P, "Range", f), D = (s.queryNumericValue(A, "Min", f), s.queryNumericValue(A, "Max", f), s.queryFirstNode(d, "Extensions", f)), O = s.queryStringValue(D, "FileType", f), $ = (s.queryStringValue(D, "TileSplitType", f), o.replace(/config$/g, "data/path/")), M = new $e($), I = [], R = /\\+/g, L = s.queryFirstNode(d, "Tiles", f), N = s.queryNodes(L, "Tile", f), F = !1, B = 0, Y = N.length; Y > B; B++) {
                var k = N[B],
                    X = s.queryStringValue(k, "Url", f),
                    V = X.lastIndexOf("."),
                    U = X.substring(V, X.length);
                ".s3mbz" === U && (F = !0), X = X.replace(R, "/"), X = X.replace(/(\.s3mbz)|(\.s3mb)|(\.osgb)/gi, "");
                var z = je(X),
                    G = qe(X),
                    H = {};
                H.relativePath = new $e(z), H.name = G;
                var W = s.queryFirstNode(k, "Boundingbox", f),
                    j = s.queryFirstNode(W, "Min", f),
                    q = s.queryFirstNode(W, "Max", f),
                    Q = s.queryNumericValue(j, "X", f),
                    K = s.queryNumericValue(j, "Y", f),
                    J = s.queryNumericValue(j, "Z", f),
                    Z = s.queryNumericValue(q, "X", f),
                    ee = s.queryNumericValue(q, "Y", f),
                    te = s.queryNumericValue(q, "Z", f),
                    re = new t;
                t.fromCornerPoints(new n(Q, K, J), new n(Z, ee, te), re), H.bSphere = re, I.push(H)
            }
            var ie = {
                    context: l.context,
                    gl: l.context._gl,
                    position: {
                        lon: m,
                        lat: v,
                        height: y
                    },
                    name: a,
                    fileType: O,
                    supportCompressType: l._supportCompressType,
                    maxInstensity: 0,
                    minInstensity: 0,
                    maxHeight: E,
                    minHeight: T,
                    layerBounds: c,
                    baseUri: M,
                    rootEntities: I,
                    cullEnabled: r.cullEnabled,
                    horizontalLine: r.horizontalLine,
                    isTextureShare: !1,
                    style3D: r.style3D,
                    selectEnable: r.selectable,
                    isVisible: r.isVisible,
                    minVisibleAltitude: r.minVisibleAltitude,
                    maxVisibleAltitude: r.maxVisibleAltitude,
                    minVisibleDistance: r.minVisibleDistance,
                    maxVisibleDistance: r.maxVisibleDistance,
                    shadowType: r.shadowType,
                    heading: r.heading,
                    lodRangeScale: r.lodRangeScale,
                    polygonOffset: r.polygonOffset,
                    brightness: r.brightness,
                    constrast: r.constrast,
                    hue: r.hue,
                    saturation: r.saturation,
                    gamma: r.gamma,
                    isS3MB: r.isS3MB,
                    ignoreNormal: h(r.ignoreNormal, !0),
                    isS3MZ: F
                },
                ne = Wt(e, M);
            if (_(ne)) {
                Ae(ne, function (e) {
                    if (ie.waterEffectSet = e, _(r.isFlyMode) && r.isFlyMode === !0 && _(c)) {
                        l.camera.flyTo({
                            destination: c,
                            complete: function () {
                                setTimeout(function () {
                                    var e = new Pe(ie);
                                    l._layers.add(e, i), u.resolve(e)
                                }, 1000)
                            }
                        })
                    } else {
                        var t = new Pe(ie);
                        l._layers.add(t, i), u.resolve(t)
                    }
                })
            } else {
                if (r.isFlyMode === !0) {
                    l.camera.flyTo({
                        destination: c,
                        complete: function () {
                            var e = new Pe(ie);
                            l._layers.add(e, i), u.resolve(e)
                        }
                    })
                } else {
                    var oe = new Pe(ie);
                    l._layers.add(oe, i), u.resolve(oe)
                }
            }
        }).otherwise(function (e) {
            u.reject("add s3m layer failed," + e)
        }), u.promise
    },
        tt.prototype.addS3MTilesLayerByScp = function (e, r, i) {
        if (!_(e)) {
            throw new m("add s3m tiles layer,url is required.")
        }
        r = r || {};
        var o = e;
        _(B.CREDENTIAL) && (o = B.addToken(o));
        var a = h(r.name, qe(o)),
            l = this,
            u = Ae.defer();
        return De(o).then(function (e) {
            var c, d = e.firstChild,
                f = d.namespace,
                p = s.queryStringValue(d, "FileType", f),
                m = s.queryBooleanValue(d, "TextureSharing", f),
                v = s.queryFirstNode(d, "InstensityRange", f),
                y = s.queryNumericValue(v, "MinInstensity", f),
                g = s.queryNumericValue(v, "MaxInstensity", f),
                b = s.queryFirstNode(d, "HeightRange", f),
                C = s.queryNumericValue(b, "MinHeight", f),
                w = s.queryNumericValue(b, "MaxHeight", f),
                S = s.queryFirstNode(d, "Position", f),
                x = s.queryNumericValue(S, "X", f),
                T = s.queryNumericValue(S, "Y", f),
                E = s.queryNumericValue(S, "Z", f),
                P = s.queryStringValue(d, "S3MCompress", f),
                A = s.queryFirstNode(d, "Bounds", f),
                D = s.queryFirstNode(d, "BoundingBox", f);
            if (_(A)) {
                var O = s.queryNumericValue(A, "Left", f),
                    $ = s.queryNumericValue(A, "Top", f),
                    M = s.queryNumericValue(A, "Right", f),
                    I = s.queryNumericValue(A, "Bottom", f);
                c = Ne.fromDegrees(O, I, M, $)
            } else {
                if (_(D)) {
                    var R = s.queryNumericValue(D, "MinX", f),
                        L = s.queryNumericValue(D, "MinY", f),
                        N = (s.queryNumericValue(D, "MinZ", f), s.queryNumericValue(D, "MaxX", f)),
                        F = s.queryNumericValue(D, "MaxY", f);
                    s.queryNumericValue(D, "MaxZ", f);
                    R = 180 * Math.abs(R) / (6378137 * Math.PI), L = 180 * Math.abs(L) / (6378137 * Math.PI), N = 180 * Math.abs(N) / (6378137 * Math.PI), F = 180 * Math.abs(F) / (6378137 * Math.PI), c = Ne.fromDegrees(x - R, T - L, x + N, T + F)
                } else {
                    c = Ne.fromDegrees(x - 0.00001, T - 0.00001, x + 0.00001, T + 0.00001)
                }
            }
            var B = void 0,
                Y = s.queryNodes(d, "Vol", f);
            if (_(Y) && Y.length > 0) {
                for (var k = [], X = [], V = [], U = 0, z = Y.length; z > U; U++) {
                    var G = Y[U],
                        H = s.queryStringValue(G, "Name", f);
                    k.push(H);
                    var W = s.queryStringValue(G, "AttachFileExt", f),
                        j = s.queryFirstNode(G, "VolumeValueRange", f);
                    if (_(j)) {
                        var q = s.queryNumericValue(j, "MinValue", f),
                            Q = s.queryNumericValue(j, "MaxValue", f);
                        X.push(Q), V.push(q)
                    }
                    B = {
                        bVolume: !0,
                        strVolumeExt: W,
                        volNames: k,
                        maxValues: X,
                        minValues: V
                    }
                }
            }
            var K = s.queryFirstNode(d, "VolumeValueRange", f);
            if (_(K)) {
                var q = s.queryNumericValue(K, "MinValue", f),
                    Q = s.queryNumericValue(K, "MaxValue", f),
                    J = s.queryStringValue(d, "AttachFileExt", f);
                _(B) ? (B.volNames.push(""), B.maxValues.push(Q), B.minValues.push(q)) : B = {
                    bVolume: !0,
                    strVolumeExt: J,
                    volNames: [""],
                    maxValues: [Q],
                    minValues: [q]
                }
            }
            var Z = "";
            if ("" != o.match(/config(\S*)/)[1]) {
                var ee = /config([^\/]+)$/;
                Z = o.match(ee)[1].replace(/\?/g, ""), o = o.match(/(\S*)config/)[0]
            }
            var te = o.replace(/config$/g, "data/path/"),
                re = new $e(te),
                ie = [],
                ee = /\\+/g,
                ne = s.queryFirstNode(d, "OSGFiles", f),
                oe = s.queryNodes(ne, "Files", f);
            if (oe.length > 0) {
                for (var U = 0, z = oe.length; z > U; U++) {
                    var ae = oe[U],
                        se = s.queryStringValue(ae, "FileName", f);
                    se = se.replace(ee, "/"), se = se.replace(/(\.s3m)|(\.osgb)/gi, "");
                    var le = je(se),
                        ue = qe(se),
                        ce = {};
                    ce.relativePath = new $e(le), ce.name = ue;
                    var de = s.queryFirstNode(ae, "BoundingSphere", f);
                    if (_(de) && de.childNodes.length) {
                        var he = s.queryNumericValue(de, "CenterX", f),
                            _e = s.queryNumericValue(de, "CenterY", f),
                            fe = s.queryNumericValue(de, "CenterZ", f),
                            pe = s.queryNumericValue(de, "Radius", f),
                            me = new n(he, _e, fe);
                        ce.bSphere = new t(me, pe)
                    }
                    ie.push(ce)
                }
            } else {
                for (var ve = s.queryNodes(ne, "FileName", f), U = 0, z = ve.length; z > U; U++) {
                    var se = ve[U].textContent;
                    se = se.replace(ee, "/"), se = se.replace(/(\.s3m)|(\.osgb)/gi, "");
                    var le = je(se),
                        ue = qe(se),
                        ce = {};
                    ce.relativePath = new $e(le), ce.name = ue, ie.push(ce)
                }
            }
            var ye = {
                    context: l.context,
                    gl: l.context._gl,
                    position: {
                        lon: x,
                        lat: T,
                        height: E
                    },
                    name: a,
                    fileType: p,
                    dracoCompress: P,
                    supportCompressType: l._supportCompressType,
                    maxInstensity: g,
                    minInstensity: y,
                    maxHeight: w,
                    minHeight: C,
                    layerBounds: c,
                    volumeObj: B,
                    baseUri: re,
                    rootEntities: ie,
                    urlType: r.urlType,
                    urlArguments: Z,
                    cullEnabled: r.cullEnabled,
                    horizontalLine: r.horizontalLine,
                    isTextureShare: m,
                    style3D: r.style3D,
                    selectEnable: r.selectable,
                    isVisible: r.isVisible,
                    minVisibleAltitude: r.minVisibleAltitude,
                    maxVisibleAltitude: r.maxVisibleAltitude,
                    minVisibleDistance: r.minVisibleDistance,
                    maxVisibleDistance: r.maxVisibleDistance,
                    shadowType: r.shadowType,
                    heading: r.heading,
                    lodRangeScale: r.lodRangeScale,
                    polygonOffset: r.polygonOffset,
                    brightness: r.brightness,
                    constrast: r.constrast,
                    hue: r.hue,
                    saturation: r.saturation,
                    gamma: r.gamma,
                    effect: r.effect,
                    isS3MB: r.isS3MB,
                    ignoreNormal: h(r.ignoreNormal, !0)
                },
                ge = Wt(e, re);
            if (_(ge)) {
                Ae(ge, function (e) {
                    if (ye.waterEffectSet = e, _(r.isFlyMode) && r.isFlyMode === !0 && _(c)) {
                        l.camera.flyTo({
                            destination: c,
                            complete: function () {
                                setTimeout(function () {
                                    var e = new Pe(ye);
                                    l._layers.add(e, i), u.resolve(e)
                                }, 1000)
                            }
                        })
                    } else {
                        var t = new Pe(ye);
                        l._layers.add(t, i), u.resolve(t)
                    }
                })
            } else {
                if (r.isFlyMode === !0) {
                    l.camera.flyTo({
                        destination: c,
                        complete: function () {
                            var e = new Pe(ye);
                            l._layers.add(e, i), u.resolve(e)
                        }
                    })
                } else {
                    var be = new Pe(ye);
                    l._layers.add(be, i), u.resolve(be)
                }
            }
        }).otherwise(function (e) {
            u.reject("add s3m layer failed," + e)
        }), u.promise
    };
    var Nr = /^rgba?\(\s*([0-9.]+%?)\s*,\s*([0-9.]+%?)\s*,\s*([0-9.]+%?)(?:\s*,\s*([0-9.]+))?\s*\)$/i,
        Fr = /^rgba?\(\s*([0-9.]+%?)\s*,\s*([0-9.]+%?)\s*,\s*([0-9.]+%?)(?:\s*,\s*([0-9.]+))?\s*\)\)$/i;
    return tt.prototype.open = function (e) {
        if ("realspace" != e.slice(-9)) {
            throw new m("open scene url error!")
        }
        var t = e + "/scenes.json";
        _(B.CREDENTIAL) && (t = B.addToken(t));
        var r = this,
            i = this.camera,
            o = Ae.defer();
        return jt(t).then(function (t) {
            if (!_(t)) {
                return void o.reject("scene list response null!")
            }
            var a = t.path + ".json";
            _(B.CREDENTIAL) && (a = B.addToken(a)), Kt(a).then(function (e) {
                try {
                    i.setView({
                        destination: n.fromDegrees(e.camera.longitude, e.camera.latitude, e.camera.altitude),
                        orientation: {
                            heading: E.toRadians(e.camera.heading),
                            pitch: E.toRadians(e.camera.tilt),
                            roll: 0
                        }
                    })
                } catch (t) {
                    o.reject("camera set view failed," + t)
                }
            }).otherwise(function (e) {
                o.reject("get scene config failed," + e)
            }), qt(t.path).then(function (i) {
                for (var n = i.s3m, a = i.imagery, s = i.terrain, l = t.path + "/layers/", u = [], c = n.length - 1, d = c; d >= 0; d--) {
                    var h = n[d],
                        f = l + encodeURIComponent(h.name) + "/extendxml.xml";
                    _(B.CREDENTIAL) && (f = B.addToken(f)),
                        function (t) {
                            var i = Qt(f).then(function (i) {
                                try {
                                    var n = e + "/datas/" + encodeURIComponent(i.name) + "/config";
                                    return i.isS3MB ? r.addS3MBTilesLayer(n, i, t) : r.addS3MTilesLayerByScp(n, i, t)
                                } catch (a) {
                                    o.reject("add S3M layer" + i.name + " failed," + a)
                                }
                            }).otherwise(function (e) {
                                o.reject("get S3M layer config failed," + e + ",layer name is " + h.name)
                            });
                            u.push(i)
                        }(c - d)
                }
                for (var d = 0, p = a.length; p > d; d++) {
                    var m = e + "/datas/" + encodeURIComponent(a[d].name),
                        v = new Ve({
                            url: m
                        });
                    try {
                        var y = r.imageryLayers.addImageryProvider(v);
                        u.push(y)
                    } catch (g) {
                        o.reject("add imagery layer " + a[d].name + " failed," + g)
                    }
                }
                if (_(s)) {
                    var b = e + "/datas/" + encodeURIComponent(s.name);
                    try {
                        r.terrainProvider = new Ue({
                            url: b,
                            isSct: !0
                        }), u.push(r.terrainProvider)
                    } catch (g) {
                        o.reject("add terrain layer " + s.name + " failed," + g)
                    }
                }
                Ae.all(u, function (e) {
                    o.resolve(e)
                }, function (e) {
                    o.reject("add all layers failed," + e)
                })
            }).otherwise(function (e) {
                o.reject("get layer list failed," + e)
            })
        }).otherwise(function (e) {
            o.reject("get scene list failed," + e)
        }), o.promise
    }, tt.prototype.addLayerService = function (e, t, r) {
        if (!_(e) || !_(t) || !_(r)) {
            throw new m("url and sceneName and layerName is required!")
        }
        if ("realspace" != e.slice(-9)) {
            throw new m("open scene url error!")
        }
        var i = this,
            n = e + "/scenes/" + encodeURIComponent(t) + "/layers/" + encodeURIComponent(r) + "/extendxml.xml";
        _(B.CREDENTIAL) && (n = B.addToken(n));
        var o = Ae.defer();
        return Qt(n).then(function (t) {
            try {
                var r = e + "/datas/" + encodeURIComponent(t.name) + "/config",
                    n = i.addS3MTilesLayerByScp(r, t);
                o.resolve(n)
            } catch (a) {
                o.reject("add S3M layer" + t.name + " failed," + a)
            }
        }).otherwise(function (e) {
            o.reject("get S3M layer config failed," + e + ",layer name is " + r)
        }), o.promise
    }, tt.prototype.addS3MInstanceCollection = function (e, t) {
        var r = new ke({
            url: e,
            instanceAttrs: t,
            gl: this._context._gl,
            context: this._context
        });
        return this.primitives.add(r), r
    }, tt.prototype.addBimServerLayer = function (e) {
        var t = new BimServerLayer(this, e);
        return this._layers.add(t), t
    }, tt.prototype.addFieldLayer = function (e) {
        if (!_(e)) {
            throw new m("url is required!")
        }
        var t = this;
        if (e.indexOf(".nc") > -1) {
            var r = Ae.defer();
            return Ae(Ze(e), function (e) {
                var i = new Je(e),
                    n = new et(t._context);
                n._NetCDFBuffer = i, n.NetCDFInfo = i.header, r.resolve(n)
            }).otherwise(function (e) {
                throw new m("Not a valid NetCDF file!")
            }), r.promise
        }
    }, tt.prototype.getViewport = function (t) {
        if (this._multiViewportMode !== _e.NONE) {
            var r = Ce.transformWindowToDrawingBuffer(this, t, Dr),
                i = Ht(this, r);
            if (i > -1) {
                var n = this._context,
                    o = new e,
                    a = this._multiViewportInfo[i];
                return o.x = n.drawingBufferWidth * a.x, o.y = n.drawingBufferHeight * a.y, o.width = n.drawingBufferWidth * a.width, o.height = n.drawingBufferHeight * a.height, o
            }
        }
        var o = new e;
        return o.x = 0, o.y = 0, o.width = this._canvas.clientWidth, o.height = this._canvas.clientHeight, o
    }, tt.prototype.intersectionOfRectByPointslopeline = function (e, t, r) {
        var n = new i,
            o = new i;
        if (-1 == t) {
            n.x = e.x, n.y = r.bottom, o.x = e.x, o.y = r.top
        } else {
            if (0 == t) {
                n.x = r.left, n.y = e.y, o.x = r.right, o.y = e.y
            } else {
                var a = 0,
                    s = [],
                    l = r.left,
                    u = t * (l - e.x) + e.y;
                if (u > r.bottom && u < r.top && (s[2 * a] = l, s[2 * a + 1] = u, a++), l = r.right, u = t * (l - e.x) + e.y, u > r.bottom && u < r.top && (s[2 * a] = l, s[2 * a + 1] = u, a++), 2 > a) {
                    var c = -1 / t;
                    u = r.bottom, l = e.x - c * (u - e.y), l > r.left && l < r.right && (s[2 * a] = l, s[2 * a + 1] = u, a++)
                }
                if (2 > a) {
                    var c = -1 / t,
                        u = r.top,
                        l = e.x - c * (u - e.y);
                    2 > a && l > r.left && l < r.right && (s[2 * a] = l, s[2 * a + 1] = u, a++)
                }
                n.x = s[0], n.y = s[1], o.x = s[2], o.y = s[3]
            }
        }
        return [n, o]
    }, tt.prototype.getAltitudeByLogical = function (e, t) {
        var r = a.fromCartesian(e);
        r.height += 1, r = n.fromRadians(r.longitude, r.latitude, r.height);
        var i = Ce.wgs84ToWindowCoordinates(this, e),
            o = Ce.wgs84ToWindowCoordinates(this, r);
        if (o) {
            var s, l;
            o.x == i.x ? (s = -1, l = 0) : o.y == i.y ? (s = 0, l = -1) : (s = (o.y - i.y) / (o.x - i.x), l = -1 / s);
            var u = this.getViewport(t),
                c = {
                    left: u.x,
                    right: u.x + u.width,
                    bottom: u.y,
                    top: u.y + u.height
                },
                d = this.intersectionOfRectByPointslopeline(t, l, c),
                h = d[0],
                _ = d[1],
                f = new n,
                p = new n;
            Ce.drawingBufferToWgs84Coordinates(this, h, 1, f), Ce.drawingBufferToWgs84Coordinates(this, _, 1, p);
            var m = this.camera.position,
                v = new n;
            n.subtract(e, r, v);
            var y = new n;
            n.negate(v, y), n.normalize(v, v), n.normalize(y, y);
            var g = new Fe(e, v),
                b = new Fe(e, y),
                C = Be.rayTriangleParametric(g, f, p, m);
            return C ? Fe.getPoint(g, C) : (C = Be.rayTriangleParametric(b, f, p, m)) ? Fe.getPoint(b, C) : void 0
        }
    }, tt.prototype.renderIds = function () {
        var e = this._context;
        _(this._renderIdsFbo) || (this._renderIdsFbo = e.createPickFramebuffer()), Pr.x = 0, Pr.y = 0, Pr.width = this._context.drawingBufferWidth, Pr.height = this._context.drawingBufferHeight;
        var t = e.uniformState,
            r = this._frameState;
        st(this, r.frameNumber, r.time), r.invertClassification = !1, r.passes.pick = !0, t.update(r);
        var i = this._renderIdsFbo.begin(Pr);
        this._environmentState.isGlobalVisible = !1, At(this, i), Tt(this, i, Ar), this._frameState.multiViewportIndex = -1, It(this, i), e.endFrame(), this._environmentState.isGlobalVisible = !0
    }, tt.prototype.getHeight = function (e, t) {
        var r = this._context;
        _(this._getHeightFramebuffer) || (this._getHeightFramebuffer = r.createGetHeightFramebuffer());
        var i = this.camera,
            o = this._passState,
            a = n.clone(i.positionWC),
            s = n.clone(i.direction),
            l = n.clone(i.up),
            u = n.fromDegrees(e, t, 9000);
        i.setView({
            destination: u
        });
        var c = this._frameState;
        at(c.passes), c.passes.depth = !0;
        var d = i.frustum.fov;
        i.frustum.fov = E.toRadians(0.01), c.cullingVolume = i.frustum.computeCullingVolume(i.positionWC, i.directionWC, i.upWC), this.useDepthPicking = !1;
        var o = this._getHeightFramebuffer.begin(1, 1);
        At(this, o), $t(this), dt(this), bt(this, o), this._getHeightFramebuffer.executeCopyDepth(r, o);
        var h = this._getHeightFramebuffer.end(this);
        this.useDepthPicking = !0, dt(this), c.passes.depth = !1, i.frustum.fov = d;
        var f;
        return _(h) && (f = 9000 + h.z), i.setView({
            destination: a,
            orientation: {
                direction: s,
                up: l
            }
        }), f
    }, tt
})