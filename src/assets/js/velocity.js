/*! velocity-animate v2.0.0 (Sunday 4th February 2018, 4:43:56 PM) */
!function (e, t) {'function' == typeof define && define.amd ? define('Velocity', [], function () {return e.Velocity = t()}) : 'object' == typeof module && module.exports ? module.exports = t() : e.Velocity = t()}(this, function () {
  function e (e) {return !0 === e || !1 === e}

  function t (e) {return 'number' == typeof e}

  function n (e) {return !isNaN(+e)}

  function r (e) {return 'string' == typeof e}

  function i (e) {return '[object Function]' === Object.prototype.toString.call(e)}

  function a (e) {return !(!e || !e.nodeType)}

  function o (e) {return e && t(e.length) && i(e.velocity)}

  function s (e) {return e && e !== window && t(e.length) && !r(e) && !i(e) && !a(e) && (0 === e.length || a(e[0]))}

  function l (e) {
    if (!e || 'object' != typeof e || e.nodeType || '[object Object]' !== Object.prototype.toString.call(e)) return !1
    var t = Object.getPrototypeOf(e)
    return !t || t.hasOwnProperty('constructor') && t.constructor === Object
  }

  function u (e, t, n) {e && Object.defineProperty(e, t, {configurable: !0, writable: !0, value: n})}

  function c (e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
    if (null == e) throw new TypeError('Cannot convert undefined or null to object')
    for (var r, i = Object(e), a = Object.prototype.hasOwnProperty; r = t.shift();) if (null != r) for (var o in r) if (a.call(r, o)) {
      var s = r[o]
      Array.isArray(s) ? c(i[o] = [], s) : l(s) ? c(i[o] = {}, s) : i[o] = s
    }
    return i
  }

  function f (e, t) {
    for (var n = 0; n < e.length;) if (e[n++] === t) return !0
    return !1
  }

  function d (e) {
    for (var t = 0, n = arguments; t < n.length; t++) {
      var r = n[t]
      if (void 0 !== r && r == r) return r
    }
  }

  function g (e, t) {e instanceof Element && (e.classList ? e.classList.remove(t) : e.className = ('' + e.className).replace(RegExp('(^|\\s)' + t + '(\\s|$)', 'gi'), ' '))}

  function p (e) {
    var t = e.velocityData
    if (t) return t
    for (var n = 0, r = 0, i = R.constructors; r < i.length; r++) e instanceof i[r] && (n |= 1 << r)
    var a = {
      types: n,
      count: 0,
      computedStyle: null,
      cache: Object.create(null),
      queueList: Object.create(null),
      lastAnimationList: Object.create(null),
      lastFinishList: Object.create(null)
    }
    return Object.defineProperty(e, 'velocityData', {value: a}), a
  }

  function v (e, n) {return t(e) ? e : r(e) ? M[e.toLowerCase()] || parseFloat(e.replace('ms', '').replace('s', '000')) : null == n ? void 0 : v(n)}

  function m (t) {if (e(t)) return t}

  function h (e) {if (i(e)) return e}

  function y (e, t) {if (i(e)) return e}

  function b (e) {
    var t = v(e)
    if (!isNaN(t)) return t
  }

  function S (e, t) {
    var n = v(e)
    if (!isNaN(n) && n >= 0) return n
  }

  function w (e, t, n) {
    var a = R.Easing
    if (r(e)) return a.Easings[e]
    if (i(e)) return e
    if (Array.isArray(e)) {
      if (1 === e.length) return a.generateStep(e[0])
      if (2 === e.length) return a.generateSpringRK4(e[0], e[1], t)
      if (4 === e.length) return a.generateBezier.apply(null, e) || !1
    }
  }

  function E (e) {
    if (!1 === e) return 0
    var t = parseInt(e, 10)
    return !isNaN(t) && t >= 0 ? Math.min(t, 60) : void 0
  }

  function x (e) {
    if (!1 === e) return 0
    if (!0 === e) return !0
    var t = parseInt(e, 10)
    return !isNaN(t) && t >= 0 ? t : void 0
  }

  function C (e, t) {if (!1 === e || r(e)) return e}

  function N (e) {
    if (!1 === e) return 0
    if (!0 === e) return !0
    var t = parseInt(e, 10)
    return !isNaN(t) && t >= 0 ? t : void 0
  }

  function A (e) {if (t(e)) return e}

  function _ (t) {if (e(t)) return t}

  function O () {
    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n]
    var c, f, g, v, m, E, k, T = R.defaults, P = arguments, q = P[0],
      M = l(q) && (q.p || l(q.properties) && !q.properties.names || r(q.properties)), j = 0
    a(this) ? c = [this] : s(this) ? (c = Object.assign([], this), o(this) && (v = this.velocity.animations)) : M ? (c = Object.assign([], q.elements || q.e), j++) : a(q) ? (c = Object.assign([], [q]), j++) : s(q) && (c = Object.assign([], q), j++), c && (u(c, 'velocity', O.bind(c)), v && u(c.velocity, 'animations', v))
    var I = 'reverse' === (f = M ? d(q.properties, q.p) : P[j++]), V = !I && r(f), z = M ? d(q.options, q.o) : P[j]
    l(z) && (g = z), Promise && d(g && g.promise, T.promise) && (m = new Promise(function (e, t) {
      k = t, E = function (t) {
        if (o(t)) {
          var n = t && t.then
          n && (t.then = void 0), e(t), n && (t.then = n)
        } else e(t)
      }
    }), c && (u(c, 'then', m.then.bind(m)), u(c, 'catch', m.catch.bind(m)), m.finally && u(c, 'finally', m.finally.bind(m))))
    var L = d(g && g.promiseRejectEmpty, T.promiseRejectEmpty)
    if (m && (c || V ? f || (L ? k('Velocity: No properties supplied, if that is deliberate then pass `promiseRejectEmpty:false` as an option. Aborting.') : E()) : L ? k('Velocity: No elements supplied, if that is deliberate then pass `promiseRejectEmpty:false` as an option. Aborting.') : E()), !c && !V || !f) return m
    if (V) {
      for (var F = [], H = m && {_promise: m, _resolver: E, _rejecter: k}; j < P.length;) F.push(P[j++])
      var D = f.replace(/\..*$/, ''), B = R.Actions[D] || R.Actions.default
      if (B) {
        var $ = B(F, c, H, f)
        if (void 0 !== $) return $
      }
    } else if (l(f) || I) {
      var G = {}, Q = T.sync
      if (m && (u(G, '_promise', m), u(G, '_rejecter', k), u(G, '_resolver', E)), u(G, '_ready', 0), u(G, '_started', 0), u(G, '_completed', 0), u(G, '_total', 0), l(g)) {
        G.duration = d(S(g.duration), T.duration), G.delay = d(b(g.delay), T.delay), G.easing = w(d(g.easing, T.easing), G.duration) || w(T.easing, G.duration), G.loop = d(x(g.loop), T.loop), G.repeat = G.repeatAgain = d(N(g.repeat), T.repeat), null != g.speed && (G.speed = d(A(g.speed), 1)), e(g.promise) && (G.promise = g.promise), G.queue = d(C(g.queue), T.queue), g.mobileHA && !R.State.isGingerbread && (G.mobileHA = !0), I || (null != g.display && (f.display = g.display), null != g.visibility && (f.visibility = g.visibility))
        var W = h(g.begin), U = y(g.complete), J = function (e) {if (i(e)) return e}(g.progress), Z = _(g.sync)
        null != W && (G.begin = W), null != U && (G.complete = U), null != J && (G.progress = J), null != Z && (Q = Z)
      } else if (!M) {
        var K = S(P[j]), Y = 0
        if (void 0 !== K && (Y++, G.duration = K), !i(P[j + Y])) {
          var X = w(P[j + Y], d(G && S(G.duration), T.duration))
          void 0 !== X && (Y++, G.easing = X)
        }
        var ee = y(P[j + Y])
        void 0 !== ee && (G.complete = ee), G.loop = T.loop, G.repeat = G.repeatAgain = T.repeat
      }
      var te = {
        _prev: void 0,
        _next: void 0,
        _flags: Q ? 32 : 0,
        options: G,
        percentComplete: 0,
        elements: c,
        ellapsedTime: 0,
        timeStart: 0
      }
      v = []
      for (var ne = 0; ne < c.length; ne++) {
        var re = c[ne]
        if (a(re)) {
          if (I && !1 !== G.queue) {
            var ie = p(re).lastAnimationList[G.queue]
            f = ie && ie.tweens
          }
          if (f) {
            var ae = Object.create(null), oe = Object.assign({element: re, tweens: ae}, te)
            G._total++, v.push(oe), R.expandProperties(oe, f, I), R.queue(re, oe, d(oe.queue, G.queue))
          }
        }
      }
      !1 === R.State.isTicking && R.tick(), v && u(c.velocity, 'animations', v)
    }
    return c || m
  }

  var k = this && this.__assign || Object.assign || function (e) {
      for (var t, n = 1, r = arguments.length; n < r; n++) {
        t = arguments[n]
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
      }
      return e
    }, T = ['version', 'RegisterEffect', 'style', 'patch', 'timestamp'], P = 400, q = /[\d\.-]/,
    M = {fast: 200, normal: 400, slow: 600}, j = Date.now ? Date.now : function () {return (new Date).getTime()}
  !function (e) {
    function t (t, n) {
      var a = t[0], o = t[1]
      r(a) && i(o) && (e.Actions[a] && !function (e, t) {return Object.prototype.propertyIsEnumerable.call(e, t)}(e.Actions, a) || (!0 === n ? u(e.Actions, a, o) : e.Actions[a] = o))
    }

    e.Actions = Object.create(null), e.registerAction = t, t(['registerAction', t], !0)
  }(R || (R = {}))
  !function (e) {
    e.registerAction(['default', function (t, n, a, o) {
      if (r(o) && e.Redirects[o]) {
        var s = l(t[0]) ? t[0] : {}, u = k({}, s), c = parseFloat(s.duration), f = parseFloat(s.delay) || 0
        !0 === u.backwards && (n = n.reverse()), n.forEach(function (t, r) {parseFloat(u.stagger) ? u.delay = f + parseFloat(u.stagger) * r : i(u.stagger) && (u.delay = f + u.stagger.call(t, r, n.length)), u.drag && (u.duration = c || (/^(callout|transition)/.test(o) ? 1e3 : P), u.duration = Math.max(u.duration * (u.backwards ? 1 - r / n.length : (r + 1) / n.length), .75 * u.duration, 200)), e.Redirects[o].call(t, t, u, r, n.length, n, a && a._resolver)})
      } else {
        var d = 'Velocity: First argument (' + o + ') was not a property map, a known action, or a registered redirect. Aborting.'
        a ? a._rejecter(Error(d)) : window
      }
    }], !0)
  }(R || (R = {}))
  !function (e) {
    function t (t, n, r) {
      if (e.validateTweens(t), void 0 === n || n === d(t.queue, t.options.queue, r)) {
        if (!(4 & t._flags)) {
          var i = t.options
          0 == i._started++ && (i._first = t, i.begin && (e.callBegin(t), i.begin = void 0)), t._flags |= 4
        }
        for (var a in t.tweens) {
          var o = t.tweens[a], s = o[3], l = '', u = 0
          if (s) for (; u < s.length; u++) {
            var c = o[0][u]
            l += null == c ? s[u] : c
          }
          e.CSS.setPropertyValue(t.element, a, l)
        }
        e.completeCall(t)
      }
    }

    e.registerAction(['finish', function (n, r, i) {
      var a = C(n[0]), s = e.defaults.queue, l = !0 === n[void 0 === a ? 0 : 1]
      if (o(r) && r.velocity.animations) for (var u = 0, c = r.velocity.animations; u < c.length; u++) t(c[u], a, s) else {
        for (var d = e.State.first, g = void 0; d = e.State.firstNew;) e.validateTweens(d)
        for (d = e.State.first; d && (l || d !== e.State.firstNew); d = g || e.State.firstNew) g = d._next, r && !f(r, d.element) || t(d, a, s)
      }
      i && (o(r) && r.velocity.animations && r.then ? r.then(i._resolver) : i._resolver(r))
    }], !0)
  }(R || (R = {}))
  !function (e) {
    var t = {
      isExpanded: 1,
      isReady: 2,
      isStarted: 4,
      isStopped: 8,
      isPaused: 16,
      isSync: 32,
      isReverse: 64
    }
    e.registerAction(['option', function (n, r, i, a) {
      var s, l = n[0], u = a.indexOf('.') >= 0 ? a.replace(/^.*\./, '') : void 0, c = 'false' !== u && C(u), f = n[1]
      if (!l) return null
      if (o(r) && r.velocity.animations) s = r.velocity.animations else {
        s = []
        for (var g = e.State.first; g; g = g._next) r.indexOf(g.element) >= 0 && d(g.queue, g.options.queue) === c && s.push(g)
        if (r.length > 1 && s.length > 1) {
          for (var p = 1, v = s[0].options; p < s.length;) if (s[p++].options !== v) {
            v = null
            break
          }
          v && (s = [s[0]])
        }
      }
      if (void 0 === f) {
        var w = [], A = t[l]
        for (p = 0; p < s.length; p++) w.push(void 0 === A ? d(s[p][l], s[p].options[l]) : 0 == (s[p]._flags & A))
        return 1 === r.length && 1 === s.length ? w[0] : w
      }
      var _
      switch (l) {
        case'cache':
          f = m(f)
          break
        case'begin':
          f = h(f)
          break
        case'complete':
          f = y(f)
          break
        case'delay':
          f = b(f)
          break
        case'duration':
          f = S(f)
          break
        case'fpsLimit':
          f = E(f)
          break
        case'loop':
          f = x(f)
          break
        case'percentComplete':
          _ = !0, f = parseFloat(f)
          break
        case'repeat':
        case'repeatAgain':
          f = N(f)
          break
        default:
          if ('_' !== l[0]) {
            var O = parseFloat(f)
            f == O && (f = O)
            break
          }
        case'queue':
        case'promise':
        case'promiseRejectEmpty':
        case'easing':
        case'started':
          return
      }
      if (void 0 === f || f != f) return null
      for (p = 0; p < s.length; p++) {
        var k = s[p]
        _ ? k.timeStart = e.lastTick - d(k.duration, k.options.duration, e.defaults.duration) * f : k[l] = f
      }
      i && (o(r) && r.velocity.animations && r.then ? r.then(i._resolver) : i._resolver(r))
    }], !0)
  }(R || (R = {}))
  !function (e) {
    function t (e, t, n, r) {void 0 !== t && t !== d(e.queue, e.options.queue, n) || (r ? e._flags |= 16 : e._flags &= -17)}

    function n (n, r, i, a) {
      var s = 0 === a.indexOf('pause'),
        l = 'false' !== (a.indexOf('.') >= 0 ? a.replace(/^.*\./, '') : void 0) && C(n[0]), u = e.defaults.queue
      if (o(r) && r.velocity.animations) for (var c = 0, d = r.velocity.animations; c < d.length; c++) t(d[c], l, u, s) else for (var g = e.State.first; g;) r && !f(r, g.element) || t(g, l, u, s), g = g._next
      i && (o(r) && r.velocity.animations && r.then ? r.then(i._resolver) : i._resolver(r))
    }

    e.registerAction(['pause', n], !0), e.registerAction(['resume', n], !0)
  }(R || (R = {}));
  (R || (R = {})).registerAction(['reverse', function (e, t, n, r) {throw new SyntaxError('VelocityJS: The \'reverse\' action is private.')}], !0)
  !function (e) {
    function t (t, n, r) {e.validateTweens(t), void 0 !== n && n !== d(t.queue, t.options.queue, r) || (t._flags |= 8, e.completeCall(t))}

    e.registerAction(['stop', function (n, r, i, a) {
      var s = C(n[0]), l = e.defaults.queue, u = !0 === n[void 0 === s ? 0 : 1]
      if (o(r) && r.velocity.animations) for (var c = 0, d = r.velocity.animations; c < d.length; c++) t(d[c], s, l) else {
        for (var g = e.State.first, p = void 0; g = e.State.firstNew;) e.validateTweens(g)
        for (g = e.State.first; g && (u || g !== e.State.firstNew); g = p || e.State.firstNew) p = g._next, r && !f(r, g.element) || t(g, s, l)
      }
      i && (o(r) && r.velocity.animations && r.then ? r.then(i._resolver) : i._resolver(r))
    }], !0)
  }(R || (R = {}))
  !function (e) {
    function n (n, i, a, s) {
      var u = n[0], c = n[1]
      if (!u) return null
      if (void 0 === c && !l(u)) {
        if (1 === i.length) return e.CSS.getPropertyValue(i[0], u)
        for (var f = [], d = 0; d < i.length; d++) f.push(e.CSS.getPropertyValue(i[d], u))
        return f
      }
      var g
      if (l(u)) for (var p in u) for (d = 0; d < i.length; d++) {
        var v = u[p]
        r(v) || t(v) ? e.CSS.setPropertyValue(i[d], p, u[p]) : g = (g ? g + ', ' : '') + 'Cannot set a property \'' + p + '\' to an unknown type: ' + typeof v
      } else if (r(c) || t(c)) for (d = 0; d < i.length; d++) e.CSS.setPropertyValue(i[d], u, c + '') else g = 'Cannot set a property \'' + u + '\' to an unknown type: ' + typeof c
      a && (g ? a._rejecter(g) : o(i) && i.velocity.animations && i.then ? i.then(a._resolver) : a._resolver(i))
    }

    e.style = function (e, t, r) {return n([t, r], e)}, e.registerAction(['style', n], !0)
  }(R || (R = {}))
  !function (e) {
    function n (n, i, a, o) {
      var s
      if (i) {if (1 !== i.length) throw Error('VelocityJS: Cannot tween more than one element!')} else {
        if (!n.length) return null
        i = [document.body], s = !0
      }
      var u, c = n[0], f = {elements: i, element: i[0], queue: !1, options: {duration: 1e3}, tweens: null}, g = {},
        p = n[1], v = n[2], m = 0
      if (r(n[1]) ? (u = !0, (O = {})[n[1]] = n[2], p = O, v = n[3]) : Array.isArray(n[1]) && (u = !0, p = {tween: n[1]}, v = n[2]), !t(c) || c < 0 || c > 1) throw Error('VelocityJS: Must tween a percentage from 0 to 1!')
      if (!l(p)) throw Error('VelocityJS: Cannot tween an invalid property!')
      if (s) for (var h in p) if (p.hasOwnProperty(h) && (!Array.isArray(p[h]) || p[h].length < 2)) throw Error('VelocityJS: When not supplying an element you must force-feed values: ' + h)
      var y = w(d(v, e.defaults.easing), 1e3)
      e.expandProperties(f, p)
      for (var h in f.tweens) {
        var b = f.tweens[h], S = b[1] || y, E = b[3], x = b[4], C = ''
        if (m++, E) for (var N = 0; N < E.length; N++) {
          var A = b[2][N]
          if (null == A) C += E[N] else {
            var _ = S(c, A, b[0][N], h)
            C += x && x[N] ? Math.round(_) : _
          }
        }
        g[h] = C
      }
      if (u && 1 === m) for (var h in g) if (g.hasOwnProperty(h)) return g[h]
      return g
      var O
    }

    e.tween = function (e, t, r, i, a) {return n(arguments, e)}, e.registerAction(['tween', n], !0)
  }(R || (R = {}))
  !function (e) {!function (e) {e.isClient = window && window === window.window, e.isMobile = e.isClient && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), e.isAndroid = e.isClient && /Android/i.test(navigator.userAgent), e.isGingerbread = e.isClient && /Android 2\.3\.[3-7]/i.test(navigator.userAgent), e.isChrome = e.isClient && window.chrome, e.isFirefox = e.isClient && /Firefox/i.test(navigator.userAgent), e.prefixElement = e.isClient && document.createElement('div'), e.windowScrollAnchor = e.isClient && void 0 !== window.pageYOffset, e.scrollAnchor = e.windowScrollAnchor ? window : !e.isClient || document.documentElement || document.body.parentNode || document.body, e.scrollPropertyLeft = e.windowScrollAnchor ? 'pageXOffset' : 'scrollLeft', e.scrollPropertyTop = e.windowScrollAnchor ? 'pageYOffset' : 'scrollTop', e.className = 'velocity-animating', e.isTicking = !1}(e.State || (e.State = {}))}(R || (R = {}))
  !function (e) {
    !function (e) {
      var t = Object.create(null)
      e.camelCase = function (e) {
        var n = t[e]
        return n || (t[e] = e.replace(/-([a-z])/g, function (e, t) {return t.toUpperCase()}))
      }
    }(e.CSS || (e.CSS = {}))
  }(R || (R = {}))
  !function (e) {
    !function (e) {
      function t (e, t, n, r) {return 'rgba(' + parseInt(t, 16) + ',' + parseInt(n, 16) + ',' + parseInt(r, 16) + ',1)'}

      e.ColorNames = Object.create(null)
      var n = /#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})/gi, r = /#([a-f\d])([a-f\d])([a-f\d])/gi,
        i = /(rgba?\(\s*)?(\b[a-z]+\b)/g, a = /rgba?\([^\)]+\)/gi, o = /\s+/g
      e.fixColors = function (s) {return s.replace(n, t).replace(r, function (e, n, r, i) {return t(0, n + n, r + r, i + i)}).replace(i, function (t, n, r) {return e.ColorNames[r] ? (n || 'rgba(') + e.ColorNames[r] + (n ? '' : ',1)') : t}).replace(a, function (e) {return e.replace(o, '')})}
    }(e.CSS || (e.CSS = {}))
  }(R || (R = {}))
  !function (e) {
    !function (e) {
      var t = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgrey: 11119017,
        darkgreen: 25600,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        grey: 8421504,
        green: 32768,
        greenyellow: 11403055,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgrey: 13882323,
        lightgreen: 9498256,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
      }
      for (var n in t) if (t.hasOwnProperty(n)) {
        var r = t[n]
        e.ColorNames[n] = Math.floor(r / 65536) + ',' + Math.floor(r / 256 % 256) + ',' + r % 256
      }
    }(e.CSS || (e.CSS = {}))
  }(R || (R = {}))
  !function (e) {
    !function (t) {
      function n (n, i) {
        var a = p(n), o = a && a.computedStyle ? a.computedStyle : window.getComputedStyle(n, null), s = 0
        if (a && !a.computedStyle && (a.computedStyle = o), 'width' === i || 'height' === i) {
          var l = 'none' === r(n, 'display')
          return l && t.setPropertyValue(n, 'display', 'auto'), s = e.augmentDimension(n, i, !0), l && t.setPropertyValue(n, 'display', 'none'), s + ''
        }
        if ((s = o[i]) || (s = n.style[i]), 'auto' === s) switch (i) {
          case'top':
          case'left':
            var u = !0
          case'right':
          case'bottom':
            var c = r(n, 'position')
            if ('fixed' === c || u && 'absolute' === c) {
              s = n.getBoundingClientRect[i] + 'px'
              break
            }
          default:
            s = '0px'
        }
        return s ? s + '' : ''
      }

      function r (t, r, i, a) {
        var o, s = p(t)
        if (e.NoCacheNormalizations.has(r) && (a = !0), !a && s && null != s.cache[r]) return o = s.cache[r]
        for (var l = s.types, u = void 0, c = 0; l; l >>= 1, c++) 1 & l && (u = e.Normalizations[c][r] || u)
        return o = u ? u(t) : n(t, r), s && (s.cache[r] = o), o
      }

      t.computePropertyValue = n, t.getPropertyValue = r
    }(e.CSS || (e.CSS = {}))
  }(R || (R = {}))
  !function (e) {
    !function (t) {
      var n = ['%', 'em', 'ex', 'ch', 'rem', 'vw', 'vh', 'vmin', 'vmax', 'cm', 'mm', 'Q', 'in', 'pc', 'pt', 'px', 'deg', 'grad', 'rad', 'turn', 's', 'ms'];
      (e.CSS || (e.CSS = {})).getUnit = function (e, t) {
        if (t = t || 0, e[t] && ' ' !== e[t]) for (var r = 0, i = n; r < i.length; r++) {
          var a = i[r], o = 0
          do {
            if (o >= a.length) return a
            if (a[o] !== e[t + o]) break
          } while (++o)
        }
        return ''
      }
    }()
  }(R || (R = {}))
  !function (e) {
    (e.CSS || (e.CSS = {})).RegEx = {
      isHex: /^#([A-f\d]{3}){1,2}$/i,
      valueUnwrap: /^[A-z]+\((.*)\)$/i,
      wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
      valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
    }
  }(R || (R = {}))
  !function (e) {
    !function (t) {
      (e.CSS || (e.CSS = {})).setPropertyValue = function (t, n, i) {
        var a = p(t)
        if (r(i) && 'c' === i[0] && 'a' === i[1] && 'l' === i[2] && 'c' === i[3] && '(' === i[4] && '0' === i[5] && (i = i.replace(/^calc\(0[^\d]* \+ ([^\(\)]+)\)$/, '$1')), a && a.cache[n] !== i) {
          a.cache[n] = i || void 0
          for (var o = a.types, s = void 0, l = 0; o; o >>= 1, l++) 1 & o && (s = e.Normalizations[l][n] || s)
          s && s(t, i) || (t.style[n] = i)
        }
      }
    }()
  }(R || (R = {}))
  !function (e) {
    !function (e) {
      function t (t) {
        var n = t[0], a = t[1]
        r(n) && i(a) && (e.Easings[n] || (e.Easings[n] = a))
      }

      e.Easings = Object.create(null), e.registerEasing = t, t(['linear', function (e, t, n) {return t + e * (n - t)}]), t(['swing', function (e, t, n) {return t + (.5 - Math.cos(e * Math.PI) / 2) * (n - t)}]), t(['spring', function (e, t, n) {return t + (1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)) * (n - t)}])
    }(e.Easing || (e.Easing = {}))
  }(R || (R = {}))
  !function (e) {
    !function (e) {
      function t (e) {return Math.min(Math.max(e, 0), 1)}

      function n (e, t) {return 1 - 3 * t + 3 * e}

      function r (e, t) {return 3 * t - 6 * e}

      function i (e) {return 3 * e}

      function a (e, t, a) {return ((n(t, a) * e + r(t, a)) * e + i(t)) * e}

      function o (e, t, a) {return 3 * n(t, a) * e * e + 2 * r(t, a) * e + i(t)}

      function s (e, n, r, i) {
        function s (t) {
          for (var n = 0, i = 1, s = g - 1; i !== s && h[i] <= t; ++i) n += p
          var l = n + (t - h[--i]) / (h[i + 1] - h[i]) * p, v = o(l, e, r)
          return v >= c ? function (t, n) {
            for (var i = 0; i < u; ++i) {
              var s = o(n, e, r)
              if (0 === s) return n
              n -= (a(n, e, r) - t) / s
            }
            return n
          }(t, l) : 0 === v ? l : function (t, n, i) {
            var o, s, l = 0
            do {(o = a(s = n + (i - n) / 2, e, r) - t) > 0 ? i = s : n = s} while (Math.abs(o) > f && ++l < d)
            return s
          }(t, n, n + p)
        }

        function l () {y = !0, e === n && r === i || function () {for (var t = 0; t < g; ++t) h[t] = a(t * p, e, r)}()}

        var u = 4, c = .001, f = 1e-7, d = 10, g = 11, p = 1 / (g - 1), v = 'Float32Array' in window
        if (4 === arguments.length) {
          for (var m = 0; m < 4; ++m) if ('number' != typeof arguments[m] || isNaN(arguments[m]) || !isFinite(arguments[m])) return
          e = t(e), r = t(r)
          var h = v ? new Float32Array(g) : Array(g), y = !1,
            b = function (t, o, u, c) {return y || l(), 0 === t ? o : 1 === t ? u : e === n && r === i ? o + t * (u - o) : o + a(s(t), n, i) * (u - o)}
          b.getControlPoints = function () {return [{x: e, y: n}, {x: r, y: i}]}
          var S = 'generateBezier(' + [e, n, r, i] + ')'
          return b.toString = function () {return S}, b
        }
      }

      e.generateBezier = s
      var l = s(.42, 0, 1, 1), u = s(0, 0, .58, 1), c = s(.42, 0, .58, 1)
      e.registerEasing(['ease', s(.25, .1, .25, 1)]), e.registerEasing(['easeIn', l]), e.registerEasing(['ease-in', l]), e.registerEasing(['easeOut', u]), e.registerEasing(['ease-out', u]), e.registerEasing(['easeInOut', c]), e.registerEasing(['ease-in-out', c]), e.registerEasing(['easeInSine', s(.47, 0, .745, .715)]), e.registerEasing(['easeOutSine', s(.39, .575, .565, 1)]), e.registerEasing(['easeInOutSine', s(.445, .05, .55, .95)]), e.registerEasing(['easeInQuad', s(.55, .085, .68, .53)]), e.registerEasing(['easeOutQuad', s(.25, .46, .45, .94)]), e.registerEasing(['easeInOutQuad', s(.455, .03, .515, .955)]), e.registerEasing(['easeInCubic', s(.55, .055, .675, .19)]), e.registerEasing(['easeOutCubic', s(.215, .61, .355, 1)]), e.registerEasing(['easeInOutCubic', s(.645, .045, .355, 1)]), e.registerEasing(['easeInQuart', s(.895, .03, .685, .22)]), e.registerEasing(['easeOutQuart', s(.165, .84, .44, 1)]), e.registerEasing(['easeInOutQuart', s(.77, 0, .175, 1)]), e.registerEasing(['easeInQuint', s(.755, .05, .855, .06)]), e.registerEasing(['easeOutQuint', s(.23, 1, .32, 1)]), e.registerEasing(['easeInOutQuint', s(.86, 0, .07, 1)]), e.registerEasing(['easeInExpo', s(.95, .05, .795, .035)]), e.registerEasing(['easeOutExpo', s(.19, 1, .22, 1)]), e.registerEasing(['easeInOutExpo', s(1, 0, 0, 1)]), e.registerEasing(['easeInCirc', s(.6, .04, .98, .335)]), e.registerEasing(['easeOutCirc', s(.075, .82, .165, 1)]), e.registerEasing(['easeInOutCirc', s(.785, .135, .15, .86)])
    }(e.Easing || (e.Easing = {}))
  }(R || (R = {}))
  !function (e) {
    !function (e) {
      function t (e) {return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375}

      function n (e) {return 1 - t(1 - e)}

      e.registerEasing(['easeInBounce', function (e, t, r) {return 0 === e ? t : 1 === e ? r : n(e) * (r - t)}]), e.registerEasing(['easeOutBounce', function (e, n, r) {return 0 === e ? n : 1 === e ? r : t(e) * (r - n)}]), e.registerEasing(['easeInOutBounce', function (e, r, i) {return 0 === e ? r : 1 === e ? i : (e < .5 ? .5 * n(2 * e) : .5 * t(2 * e - 1) + .5) * (i - r)}])
    }(e.Easing || (e.Easing = {}))
  }(R || (R = {}))
  !function (e) {
    !function (e) {
      function t (t, n, r) {e.registerEasing([t, function (e, t, a) {return 0 === e ? t : 1 === e ? a : -n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - r / i * Math.asin(1 / n)) * i / r) * (a - t)}])}

      function n (t, n, r) {e.registerEasing([t, function (e, t, a) {return 0 === e ? t : 1 === e ? a : (n * Math.pow(2, -10 * e) * Math.sin((e - r / i * Math.asin(1 / n)) * i / r) + 1) * (a - t)}])}

      function r (t, n, r) {
        e.registerEasing([t, function (e, t, a) {
          if (0 === e) return t
          if (1 === e) return a
          var o = r / i * Math.asin(1 / n)
          return (e = 2 * e - 1) < 0 ? n * Math.pow(2, 10 * e) * Math.sin((e - o) * i / r) * -.5 : n * Math.pow(2, -10 * e) * Math.sin((e - o) * i / r) * .5 + 1
        }])
      }

      var i = 2 * Math.PI
      e.registerElasticIn = t, e.registerElasticOut = n, e.registerElasticInOut = r, t('easeInElastic', 1, .3), n('easeOutElastic', 1, .3), r('easeInOutElastic', 1, .3 * 1.5)
    }(e.Easing || (e.Easing = {}))
  }(R || (R = {}))
  !function (e) {
    !function (t) {
      function n (e) {return -e.tension * e.x - e.friction * e.v}

      function r (e, t, r) {
        var i = {x: e.x + r.dx * t, v: e.v + r.dv * t, tension: e.tension, friction: e.friction}
        return {dx: i.v, dv: n(i)}
      }

      function i (e, t) {
        var i = {dx: e.v, dv: n(e)}, a = r(e, .5 * t, i), o = r(e, .5 * t, a), s = r(e, t, o),
          l = 1 / 6 * (i.dv + 2 * (a.dv + o.dv) + s.dv)
        return e.x = e.x + 1 / 6 * (i.dx + 2 * (a.dx + o.dx) + s.dx) * t, e.v = e.v + l * t, e
      }

      function a (e, t, n) {
        var r, o, s = {x: -1, v: 0, tension: parseFloat(e) || 500, friction: parseFloat(t) || 20}, l = [0], u = 0,
          c = null != n
        for (r = c ? (u = a(s.tension, s.friction)) / n * .016 : .016; o = i(o || s, r), l.push(1 + o.x), u += 16, Math.abs(o.x) > 1e-4 && Math.abs(o.v) > 1e-4;) 
        return c ? function (e, t, n) {return 0 === e ? t : 1 === e ? n : t + l[e * (l.length - 1) | 0] * (n - t)} : u
      }

      (e.Easing || (e.Easing = {})).generateSpringRK4 = a
    }()
  }(R || (R = {}))
  !function (e) {
    !function (t) {
      var n = {};
      (e.Easing || (e.Easing = {})).generateStep = function (e) {
        var t = n[e]
        return t || (n[e] = function (t, n, r) {return 0 === t ? n : 1 === t ? r : n + Math.round(t * e) * (1 / e) * (r - n)})
      }
    }()
  }(R || (R = {}))
  !function (e) {!function (e) {e.registerEasing(['at-start', function (e, t, n) {return 0 === e ? t : n}]), e.registerEasing(['during', function (e, t, n) {return 0 === e || 1 === e ? t : n}]), e.registerEasing(['at-end', function (e, t, n) {return 1 === e ? n : t}])}(e.Easing || (e.Easing = {}))}(R || (R = {}))
  !function (e) {
    function t (t) {
      var n = t[0], a = t[1], o = t[2]
      if (!r(n) && n instanceof Object) if (r(a)) if (i(o)) {
        var s = e.constructors.indexOf(n)
        s < 0 && (s = e.constructors.push(n) - 1, e.Normalizations[s] = Object.create(null)), e.Normalizations[s][a] = o, !1 === t[3] && e.NoCacheNormalizations.add(a)
      } else  else  else 
    }

    e.Normalizations = [], e.NoCacheNormalizations = new Set, e.constructors = [], e.registerNormalization = t, e.registerAction(['registerNormalization', t])
  }(R || (R = {}))
  !function (e) {
    !function (t) {
      function n (e) {return function (t, n) {return void 0 === n ? t.getAttribute(e) : (t.setAttribute(e, n), !0)}}

      var a = document.createElement('div'), o = /^SVG(.*)Element$/, s = /Element$/
      Object.getOwnPropertyNames(window).forEach(function (t) {
        var l = o.exec(t)
        if (l) {
          var u = document.createElementNS('http://www.w3.org/2000/svg', (l[1] || 'svg').toLowerCase()),
            c = u.constructor
          for (var f in u) {
            var d = u[f]
            !r(f) || 'o' === f[0] && 'n' === f[1] || f === f.toUpperCase() || s.test(f) || f in a || i(d) || e.registerNormalization([c, f, n(f)])
          }
        }
      })
    }(e.CSS || (e.CSS = {}))
  }(R || (R = {}))
  !function (e) {
    !function (t) {
      function n (e) {
        return function (t, n) {
          if (void 0 === n) try {return t.getBBox()[e] + 'px'} catch (e) {return '0px'}
          return t.setAttribute(e, n), !0
        }
      }

      e.registerNormalization([SVGElement, 'width', n('width')]), e.registerNormalization([SVGElement, 'height', n('height')])
    }(e.CSS || (e.CSS = {}))
  }(R || (R = {}))
  !function (e) {
    function t (t, n, r) {
      if ('border-box' === ('' + e.CSS.getPropertyValue(t, 'boxSizing')).toLowerCase() === r) {
        var i = 'width' === n ? ['Left', 'Right'] : ['Top', 'Bottom'],
          a = ['padding' + i[0], 'padding' + i[1], 'border' + i[0] + 'Width', 'border' + i[1] + 'Width'], o = void 0,
          s = void 0, l = 0
        for (o = 0; o < a.length; o++) s = parseFloat(e.CSS.getPropertyValue(t, a[o])), isNaN(s) || (l += s)
        return r ? -l : l
      }
      return 0
    }

    function n (n, r) {return function (i, a) {return void 0 === a ? t(i, n, r) + 'px' : (e.CSS.setPropertyValue(i, n, parseFloat(a) - t(i, n, r) + 'px'), !0)}}

    e.augmentDimension = t, e.registerNormalization([Element, 'innerWidth', n('width', !0)]), e.registerNormalization([Element, 'innerHeight', n('height', !0)]), e.registerNormalization([Element, 'outerWidth', n('width', !1)]), e.registerNormalization([Element, 'outerHeight', n('height', !1)])
  }(R || (R = {}))
  !function (e) {
    e.inlineRx = /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|let|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i, e.listItemRx = /^(li)$/i, e.tableRowRx = /^(tr)$/i, e.tableRx = /^(table)$/i, e.tableRowGroupRx = /^(tbody)$/i, e.registerNormalization([Element, 'display', function (t, n) {
      var r = t.style
      if (void 0 === n) return e.CSS.computePropertyValue(t, 'display')
      if ('auto' === n) {
        var i = t && t.nodeName, a = p(t)
        n = e.inlineRx.test(i) ? 'inline' : e.listItemRx.test(i) ? 'list-item' : e.tableRowRx.test(i) ? 'table-row' : e.tableRx.test(i) ? 'table' : e.tableRowGroupRx.test(i) ? 'table-row-group' : 'block', a.cache.display = n
      }
      return r.display = n, !0
    }])
  }(R || (R = {}))
  !function (e) {
    e.registerNormalization([Element, 'textShadow', function (t, n) {
      if (void 0 === n) {
        var r = (n = e.CSS.getPropertyValue(t, 'textShadow')).split(/\s/g), i = r[0], a = ''
        if (e.CSS.ColorNames[i]) r.shift(), r.push(i), a = r.join(' ') else if (i.match(/^#|^hsl|^rgb|-gradient/)) {
          var o = n.match(/(hsl.*\)|#[\da-fA-F]+|rgb.*\)|.*gradient.*\))\s/g)[0]
          a = n.replace(o, '') + ' ' + o.trim()
        } else a = n
        return a
      }
      return !1
    }])
  }(R || (R = {}))
  !function (e) {
    e.registerNormalization([HTMLElement, 'scrollTop', function (t, n) {
      if (null == n) return e.CSS.getPropertyValue(t, 'clientHeight', !1, !0), e.CSS.getPropertyValue(t, 'scrollHeight', !1, !0), e.CSS.getPropertyValue(t, 'scrollTop', !1, !0), t.scrollTop + 'px'
      var r = parseFloat(n)
      switch (n.replace(r + '', '')) {
        case'':
        case'px':
          t.scrollTop = r
          break
        case'%':
          var i = parseFloat(e.CSS.getPropertyValue(t, 'clientHeight')),
            a = parseFloat(e.CSS.getPropertyValue(t, 'scrollHeight'))
          t.scrollTop = Math.max(0, a - i) * r / 100
      }
      return !1
    }, !1]), e.registerNormalization([HTMLElement, 'scrollWidth', function (e, t) {return null == t && e.scrollWidth + 'px'}]), e.registerNormalization([HTMLElement, 'clientWidth', function (e, t) {return null == t && e.clientWidth + 'px'}]), e.registerNormalization([HTMLElement, 'scrollHeight', function (e, t) {return null == t && e.scrollHeight + 'px'}]), e.registerNormalization([HTMLElement, 'clientHeight', function (e, t) {return null == t && e.clientHeight + 'px'}])
  }(R || (R = {}))
  !function (e) {
    function t (t, n) {return function (r, i) {return void 0 === i ? r.style[n] : (e.CSS.setPropertyValue(r, t, i), !0)}}

    var n = [/^webkit[A-Z]/, /^moz[A-Z]/, /^ms[A-Z]/, /^o[A-Z]/], r = e.State.prefixElement
    for (var i in r.style) for (var a = 0; a < n.length; a++) if (n[a].test(i)) {
      var o = i.replace(/^[a-z]+([A-Z])/, function (e, t) {return t.toLowerCase()})
      e.registerNormalization([Element, o, t(i, o)])
    }
  }(R || (R = {}))
  !function (e) {
    e.completeCall = function (t) {
      var n = t.options, r = d(t.queue, n.queue), i = d(t.loop, n.loop, e.defaults.loop),
        a = d(t.repeat, n.repeat, e.defaults.repeat), o = 8 & t._flags
      if (o || !i && !a) {
        var s = t.element, l = p(s)
        if (--l.count || o || g(s, e.State.className), n && ++n._completed === n._total) {
          !o && n.complete && (function (e) {
            try {
              var t = e.elements
              e.options.complete.call(t, t, e)
            } catch (e) {setTimeout(function () {throw e}, 1)}
          }(t), n.complete = null)
          var u = n._resolver
          u && (u(t.elements), delete n._resolver)
        }
        !1 !== r && (o || (l.lastFinishList[r] = t.timeStart + d(t.duration, n.duration, e.defaults.duration)), e.dequeue(s, r)), e.freeAnimationCall(t)
      } else a && !0 !== a ? t.repeat = a - 1 : i && !0 !== i && (t.loop = i - 1, t.repeat = d(t.repeatAgain, n.repeatAgain, e.defaults.repeatAgain)), i && (t._flags ^= 64), !1 !== r && (p(t.element).lastFinishList[r] = t.timeStart + d(t.duration, n.duration, e.defaults.duration)), t.timeStart = t.ellapsedTime = t.percentComplete = 0, t._flags &= -5
    }
  }(R || (R = {}));
  (R || (R = {})).debug = !1
  !function (t) {
    var n, r, i, a, o, s, l, u, c, f, d, g, p, v, O
    t.defaults = {mobileHA: !0}, Object.defineProperties(t.defaults, {
      reset: {
        enumerable: !0,
        value: function () {n = !0, r = void 0, i = void 0, a = 0, o = P, s = w('swing', P), l = 60, u = 0, c = 980 / 60, f = !0, d = !0, g = '', p = 0, v = 1, O = !0}
      },
      cache: {enumerable: !0, get: function () {return n}, set: function (e) {void 0 !== (e = m(e)) && (n = e)}},
      begin: {enumerable: !0, get: function () {return r}, set: function (e) {void 0 !== (e = h(e)) && (r = e)}},
      complete: {enumerable: !0, get: function () {return i}, set: function (e) {void 0 !== (e = y(e)) && (i = e)}},
      delay: {enumerable: !0, get: function () {return a}, set: function (e) {void 0 !== (e = b(e)) && (a = e)}},
      duration: {enumerable: !0, get: function () {return o}, set: function (e) {void 0 !== (e = S(e)) && (o = e)}},
      easing: {enumerable: !0, get: function () {return s}, set: function (e) {void 0 !== (e = w(e, o)) && (s = e)}},
      fpsLimit: {
        enumerable: !0,
        get: function () {return l},
        set: function (e) {void 0 !== (e = E(e)) && (l = e, c = 980 / e)}
      },
      loop: {enumerable: !0, get: function () {return u}, set: function (e) {void 0 !== (e = x(e)) && (u = e)}},
      minFrameTime: {enumerable: !0, get: function () {return c}},
      promise: {
        enumerable: !0,
        get: function () {return f},
        set: function (t) {void 0 !== (t = function (t) {if (e(t)) return t}(t)) && (f = t)}
      },
      promiseRejectEmpty: {
        enumerable: !0,
        get: function () {return d},
        set: function (t) {void 0 !== (t = function (t) {if (e(t)) return t}(t)) && (d = t)}
      },
      queue: {enumerable: !0, get: function () {return g}, set: function (e) {void 0 !== (e = C(e)) && (g = e)}},
      repeat: {enumerable: !0, get: function () {return p}, set: function (e) {void 0 !== (e = N(e)) && (p = e)}},
      speed: {enumerable: !0, get: function () {return v}, set: function (e) {void 0 !== (e = A(e)) && (v = e)}},
      sync: {enumerable: !0, get: function () {return O}, set: function (e) {void 0 !== (e = _(e)) && (O = e)}}
    }), t.defaults.reset()
  }(R || (R = {}));
  (R || (R = {})).mock = !1
  !function (e) {(R || (R = {})).patch = function (e, t) {try {u(e, (t ? 'V' : 'v') + 'elocity', O)} catch (e) {}}}()
  !function (e) {
    function t (t) {
      var n = e.State.last
      t._prev = n, t._next = void 0, n ? n._next = t : e.State.first = t, e.State.last = t, e.State.firstNew || (e.State.firstNew = t)
      var r = t.element
      p(r).count++ || function (e, t) {e instanceof Element && (e.classList ? e.classList.add(t) : (g(e, t), e.className += (e.className.length ? ' ' : '') + t))}(r, e.State.className)
    }

    e.queue = function (e, n, i) {
      var a = p(e)
      if (!1 !== i && (a.lastAnimationList[i] = n), !1 === i) t(n) else {
        r(i) || (i = '')
        var o = a.queueList[i]
        if (o) {
          for (; o._next;) o = o._next
          o._next = n, n._prev = o
        } else null === o ? a.queueList[i] = n : (a.queueList[i] = null, t(n))
      }
    }, e.dequeue = function (e, n, i) {
      if (!1 !== n) {
        r(n) || (n = '')
        var a = p(e), o = a.queueList[n]
        return o ? (a.queueList[n] = o._next || null, i || t(o)) : null === o && delete a.queueList[n], o
      }
    }, e.freeAnimationCall = function (t) {
      var n = t._next, r = t._prev, i = null == t.queue ? t.options.queue : t.queue
      e.State.firstNew === t && (e.State.firstNew = n), e.State.first === t ? e.State.first = n : r && (r._next = n), e.State.last === t ? e.State.last = r : n && (n._prev = r), i && p(t.element) && (t._next = t._prev = void 0)
    }
  }(R || (R = {}))
  !function (e) {
    e.Redirects = {}, ['Down', 'Up'].forEach(function (t) {
      e.Redirects['slide' + t] = function (n, r, i, a, o, s) {
        var l = k({}, r), u = l.begin, c = l.complete, f = {},
          d = {height: '', marginTop: '', marginBottom: '', paddingTop: '', paddingBottom: ''}
        if (void 0 === l.display) {
          var g = e.inlineRx.test(n.nodeName.toLowerCase())
          l.display = 'Down' === t ? g ? 'inline-block' : 'block' : 'none'
        }
        l.begin = function () {
          0 === i && u && u.call(o, o)
          for (var r in d) if (d.hasOwnProperty(r)) {
            f[r] = n.style[r]
            var a = e.CSS.getPropertyValue(n, r)
            d[r] = 'Down' === t ? [a, 0] : [0, a]
          }
          f.overflow = n.style.overflow, n.style.overflow = 'hidden'
        }, l.complete = function () {
          for (var e in f) f.hasOwnProperty(e) && (n.style[e] = f[e])
          i === a - 1 && (c && c.call(o, o), s && s(o))
        }, O(n, d, l)
      }
    }), ['In', 'Out'].forEach(function (t) {
      e.Redirects['fade' + t] = function (e, n, r, i, a, o) {
        var s = k({}, n), l = s.complete, u = {opacity: 'In' === t ? 1 : 0}
        0 !== r && (s.begin = null), s.complete = r !== i - 1 ? null : function () {l && l.call(a, a), o && o.resolver(a)}, void 0 === s.display && (s.display = 'In' === t ? 'auto' : 'none'), O(this, u, s)
      }
    })
  }(R || (R = {}))
  !function (e) {
    e.RegisterEffect = function (t, n) {
      return e.Redirects[t] = function (r, i, a, o, s, l, u) {
        var c = a === o - 1, f = 0
        u = u || n.loop, n.defaultDuration = 'function' == typeof n.defaultDuration ? n.defaultDuration.call(s, s) : parseFloat(n.defaultDuration)
        for (var d = 0; d < n.calls.length; d++) {
          var g = n.calls[d][1]
          'number' == typeof g && (f += g)
        }
        var p = f >= 1 ? 0 : n.calls.length ? (1 - f) / n.calls.length : 1, v = function (f) {
          var d = n.calls[f], g = d[0], v = 1e3, m = d[1], h = d[2] || {}, y = {}
          if (void 0 !== i.duration ? v = i.duration : void 0 !== n.defaultDuration && (v = n.defaultDuration), y.duration = v * ('number' == typeof m ? m : p), y.queue = i.queue || '', y.easing = h.easing || 'ease', y.delay = parseFloat(h.delay) || 0, y.loop = !n.loop && h.loop, y.cache = h.cache || !0, 0 === f && (y.delay += parseFloat(i.delay) || 0, 0 === a && (y.begin = function () {
              i.begin && i.begin.call(s, s)
              var n = t.match(/(In|Out)$/)
              n && 'In' === n[0] && void 0 !== g.opacity && (s.nodeType ? [s] : s).forEach(function (t) {e.CSS.setPropertyValue(t, 'opacity', 0)}), i.animateParentHeight && n && function (t, n, r, i) {
                var a, o = 0;
                (t.nodeType ? [t] : t).forEach(function (t, n) {
                  i && (r += n * i), a = t.parentNode
                  var s = ['height', 'paddingTop', 'paddingBottom', 'marginTop', 'marginBottom']
                  'border-box' === ('' + e.CSS.getPropertyValue(t, 'boxSizing')).toLowerCase() && (s = ['height']), s.forEach(function (n) {o += parseFloat(e.CSS.getPropertyValue(t, n))})
                }), O(a, {height: ('In' === n ? '+' : '-') + '=' + o}, {
                  queue: !1,
                  easing: 'ease-in-out',
                  duration: r * ('In' === n ? .6 : 1)
                })
              }(s, n[0], v + y.delay, i.stagger)
            }), i.visibility && 'hidden' !== i.visibility && (y.visibility = i.visibility)), f === n.calls.length - 1) {
            var b = function () {void 0 !== i.display && 'none' !== i.display || !/Out$/.test(t) || (s.nodeType ? [s] : s).forEach(function (t) {e.CSS.setPropertyValue(t, 'display', 'none')}), i.complete && i.complete.call(s, s), l && l(s || r)}
            y.complete = function () {
              if (u && e.Redirects[t](r, i, a, o, s, l, !0 === u || Math.max(0, u - 1)), n.reset) {
                for (var f in n.reset) n.reset.hasOwnProperty(f)
                var d = {duration: 0, queue: !1}
                c && (d.complete = b), O(r, n.reset, d)
              } else c && b()
            }, 'hidden' === i.visibility && (y.visibility = i.visibility)
          }
          O(r, g, y)
        }
        for (d = 0; d < n.calls.length; d++) v(d)
      }, O
    }
  }(R || (R = {}))
  !function (e) {
    (R || (R = {})).RunSequence = function (e) {
      var t = c([], e)
      t.length > 1 && (t.reverse().forEach(function (e, n) {
        var r = t[n + 1]
        if (r) {
          var i = e.o || e.options, a = r.o || r.options, o = i && !1 === i.sequenceQueue ? 'begin' : 'complete',
            s = a && a[o], l = {}
          l[o] = function () {
            var t = r.e || r.elements, n = t.nodeType ? [t] : t
            s && s.call(n, n), O(e)
          }, r.o ? r.o = k({}, a, l) : r.options = k({}, a, l)
        }
      }), t.reverse()), O(t[0])
    }
  }()
  !function (e) {
    function t (e) {
      try {
        var t = e.elements
        e.options.begin.call(t, t, e)
      } catch (e) {setTimeout(function () {throw e}, 1)}
    }

    function n (t, n) {
      try {
        var r = t.elements, i = t.percentComplete, a = t.options, o = t.tween
        t.options.progress.call(r, r, i, Math.max(0, t.timeStart + (null != t.duration ? t.duration : null != a.duration ? a.duration : e.defaults.duration) - n), void 0 !== o ? o : 100 * i + '', t)
      } catch (e) {setTimeout(function () {throw e}, 1)}
    }

    function r () {
      var t, r
      for (t = a; t; t = r) r = t._nextProgress, n(t, e.lastTick)
      for (t = o; t; t = r) r = t._nextComplete, e.completeCall(t)
    }

    function i (n) {
      if (!d) {
        if (d = !0, n) {
          var u = n && !0 !== n ? n : l.now(), c = e.lastTick ? u - e.lastTick : s, g = e.defaults.speed,
            v = e.defaults.easing, m = e.defaults.duration, h = void 0, y = void 0, b = void 0, S = void 0
          if (a = null, o = null, c >= e.defaults.minFrameTime || !e.lastTick) {
            for (e.lastTick = u; h = e.State.firstNew;) e.validateTweens(h)
            for (h = e.State.first; h && h !== e.State.firstNew; h = h._next) {
              var w = h.element, E = void 0
              if (w.parentNode && (E = p(w))) {
                var x = h.options, C = h._flags
                if (!(_ = h.timeStart)) {
                  var N = null != h.queue ? h.queue : x.queue
                  _ = u - c, !1 !== N && (_ = Math.max(_, E.lastFinishList[N] || 0)), h.timeStart = _
                }
                16 & C ? h.timeStart += c : 2 & C || (h._flags |= 2, x._ready++)
              } else e.freeAnimationCall(h)
            }
            for (h = e.State.first; h && h !== e.State.firstNew; h = y) {
              if (y = h._next, 2 & (C = h._flags) && !(16 & C)) {
                x = h.options
                if (32 & C && x._ready < x._total) h.timeStart += c else {
                  var A = null != h.speed ? h.speed : null != x.speed ? x.speed : g, _ = h.timeStart
                  if (!(4 & C)) {
                    var O = null != h.delay ? h.delay : x.delay
                    if (O) {
                      if (_ + O / A > u) continue
                      h.timeStart = _ += O / (O > 0 ? A : 1)
                    }
                    h._flags |= 4, 0 == x._started++ && (x._first = h, x.begin && (t(h), x.begin = void 0))
                  }
                  if (1 !== A) {
                    var k = Math.min(c, u - _)
                    h.timeStart = _ += k * (1 - A)
                  }
                  x._first === h && x.progress && (h._nextProgress = void 0, b ? b._nextProgress = b = h : a = b = h)
                  var T = null != h.easing ? h.easing : null != x.easing ? x.easing : v, P = h.ellapsedTime = u - _,
                    q = h.percentComplete = e.mock ? 1 : Math.min(P / (null != h.duration ? h.duration : null != x.duration ? x.duration : m), 1),
                    M = h.tweens, j = 64 & C
                  1 === q && (h._nextComplete = void 0, S ? S._nextComplete = S = h : o = S = h)
                  for (var I in M) {
                    var R = M[I], V = R[1] || T, z = R[3], L = R[4], F = '', H = 0
                    if (z) {
                      for (; H < z.length; H++) {
                        var D = R[2][H]
                        if (null == D) F += z[H] else {
                          var B = V(j ? 1 - q : q, D, R[0][H], I)
                          F += L && L[H] ? Math.round(B) : B
                        }
                      }
                      'tween' !== I ? e.CSS.setPropertyValue(h.element, I, F) : h.tween = F
                    } else delete M[I]
                  }
                }
              }
            }
            (a || o) && setTimeout(r, 1)
          }
        }
        e.State.first ? (e.State.isTicking = !0, f(i)) : (e.State.isTicking = !1, e.lastTick = 0), d = !1
      }
    }

    e.callBegin = t
    var a, o, s = 1e3 / 60, l = function () {
        var e = window.performance || {}
        if ('function' != typeof e.now) {
          var t = e.timing && e.timing.navigationStart ? e.timing.navigationStart : j()
          e.now = function () {return j() - t}
        }
        return e
      }(), u = function (t) {return setTimeout(function () {t(l.now())}, Math.max(0, s - (l.now() - e.lastTick)))},
      c = window.requestAnimationFrame || u, f = document.hidden ? u : c
    e.lastTick = 0, e.State.isMobile || void 0 === document.hidden || document.addEventListener('visibilitychange', function (e) {
      var t = document.hidden
      f = t ? u : c, e && setTimeout(i, 2e3), i()
    })
    var d
    e.tick = i
  }(R || (R = {}));
  (R || (R = {})).timestamp = !0
  var I
  !function (e) {e[e.END = 0] = 'END', e[e.EASING = 1] = 'EASING', e[e.START = 2] = 'START', e[e.PATTERN = 3] = 'PATTERN', e[e.ROUNDING = 4] = 'ROUNDING', e[e.length = 5] = 'length'}(I || (I = {}))
  !function (e) {
    function a (t, i, a, o) {
      var s = i[0], l = i[2]
      if (r(s) && r(l)) {
        var u = !1
        do {
          u = !1
          for (var c = i[2] = [null], f = i[0] = [null], d = i[3] = [''], g = i[1], p = void 0, v = 0, m = 0, h = 0, y = 0, b = 0, S = void 0, E = function () {
            var t = l[v], a = s[m]
            if (q.test(t) && q.test(a)) {
              for (var g = t, w = a, E = '.', x = '.'; ++v < l.length;) {
                if ((t = l[v]) === E) E = '..' else if (!n(t)) break
                g += t
              }
              for (; ++m < s.length;) {
                if ((a = s[m]) === x) x = '..' else if (!n(a)) break
                w += a
              }
              var C = e.CSS.getUnit(l, v), N = e.CSS.getUnit(s, m)
              v += C.length, m += N.length, 0 === N.length ? N = C : 0 === C.length && (C = N), C === N ? g === w ? d[d.length - 1] += g + C : (y && (p || (p = i[4] = []), p[c.length] = !0), d.push(0, C), c.push(parseFloat(g), null), f.push(parseFloat(w), null)) : (d[d.length - 1] += h ? '+ (' : 'calc(', d.push(0, C + ' + ', 0, N + ')'), c.push(parseFloat(g) || 0, null, 0, null), f.push(0, null, parseFloat(w) || 0, null))
            } else if (t === a) d[d.length - 1] += t, v++, m++, 0 === h && 'c' === t || 1 === h && 'a' === t || 2 === h && 'l' === t || 3 === h && 'c' === t || h >= 4 && '(' === t ? h++ : (h && h < 5 || h >= 4 && ')' === t && --h < 5) && (h = 0), 0 === y && 'r' === t || 1 === y && 'g' === t || 2 === y && 'b' === t || 3 === y && 'a' === t || y >= 3 && '(' === t ? (3 === y && 'a' === t && (b = 1), y++) : b && ',' === t ? ++b > 3 && (y = b = 0) : (b && y < (b ? 5 : 4) || y >= (b ? 4 : 3) && ')' === t && --y < (b ? 5 : 4)) && (y = b = 0) else if (t || a) {
              for (S = !0, r(c[c.length - 1]) || (1 !== d.length || d[0] ? (d.push(''), c.push(''), f.push('')) : c[0] = f[0] = ''); v < l.length && " " !== (t = l[v++]) && !q.test(t);) c[c.length - 1] += t
              for (; m < s.length && " " !== (a = s[m++]) && !q.test(a);) f[f.length - 1] += a
            }
            if (!o && v === l.length != (m === s.length)) {
              var A = l.match(/\d\.?\d*/g) || ['0'], _ = A.length, O = 0
              return l = s.replace(/\d+\.?\d*/g, function () {return A[O++ % _]}), u = o = !0, 'break'
            }
          }; v < l.length && m < s.length;) {if ('break' === E()) break}
          u || ('' === d[0] && null == f[0] && (d.shift(), c.shift(), f.shift()), '' === d[d.length] && null == f[f.length] && (d.pop(), c.pop(), f.pop()), 'display' === t ? /^(at-start|at-end|during)$/.test(g) || (g = 'none' === s ? 'at-end' : 'at-start') : 'visibility' === t ? /^(at-start|at-end|during)$/.test(g) || (g = 'hidden' === s ? 'at-end' : 'at-start') : S && 'at-start' !== g && 'during' !== g && 'at-end' !== g && g !== e.Easing.Easings['at-Start'] && g !== e.Easing.Easings.during && g !== e.Easing.Easings['at-end'] && (g = 'at-start'), i[1] = w(g, a))
        } while (u)
      }
    }

    var o = new Map
    o.set('function', function (e, t, n, r) {return e.call(t, r, n.length)}), o.set('number', function (e, t, n, r, i) {return e + (t instanceof HTMLElement ? function (e) {return f(s, e) ? 'deg' : f(l, e) ? '' : 'px'}(i) : '')}), o.set('string', function (t, n, r, i, a) {return e.CSS.fixColors(t)}), o.set('undefined', function (t, n, r, i, a) {return e.CSS.fixColors(e.CSS.getPropertyValue(n, a) || '')})
    var s = [],
      l = ['borderImageSlice', 'columnCount', 'counterIncrement', 'counterReset', 'flex', 'flexGrow', 'flexShrink', 'floodOpacity', 'fontSizeAdjust', 'fontWeight', 'lineHeight', 'opacity', 'order', 'orphans', 'shapeImageThreshold', 'tabSize', 'widows', 'zIndex']
    e.expandProperties = function (n, s, l) {
      var u = n.tweens = Object.create(null), c = n.elements, f = n.element, g = c.indexOf(f), v = p(f),
        m = d(n.queue, n.options.queue), h = d(n.options.duration, e.defaults.duration)
      for (var y in s) {
        for (var b = e.CSS.camelCase(y), S = s[y], w = v.types, E = 'tween' === b, x = 0; w && !E; w >>= 1, x++) E = !!(1 & w && e.Normalizations[x][b])
        if ((E || e.State.prefixElement && r(e.State.prefixElement.style[b])) && null != S) {
          var C = u[b] = Array(5)
          if (l) C[2] = S[0], C[1] = S[1], C[0] = S[2], C[3] = S[3], C[4] = S[4] else {
            var N = void 0, A = void 0
            if (i(S) && (S = S.call(f, g, c.length, c)), Array.isArray(S)) {
              var _ = S[1], O = S[2]
              N = S[0], r(_) && (/^[\d-]/.test(_) || e.CSS.RegEx.isHex.test(_)) || i(_) || t(_) ? A = _ : r(_) && e.Easing.Easings[_] || Array.isArray(_) ? (C[1] = _, A = O) : A = _ || O
            } else N = S
            C[0] = o.get(typeof N)(N, f, c, g, b), null == A && !1 !== m && void 0 !== v.queueList[m] || (C[2] = o.get(typeof A)(A, f, c, g, b)), a(b, C, h, !!A)
          }
        }
      }
    }, e.validateTweens = function (t) {
      if (e.State.firstNew === t && (e.State.firstNew = t._next), !(1 & t._flags)) {
        var n = t.tweens, i = d(t.options.duration, e.defaults.duration)
        for (var o in n) {
          var s = n[o]
          if (null == s[2]) {
            var l = e.CSS.getPropertyValue(t.element, o)
            r(l) ? (s[2] = e.CSS.fixColors(l), a(o, s, i)) : Array.isArray(l)
          }
        }
        t._flags |= 1
      }
    }
  }(R || (R = {}))
  var R;
  (R || (R = {})).version = '2.0.0'
  if (function () {
      if (document.documentMode) return document.documentMode
      for (var e = 7; e > 4; e--) {
        var t = document.createElement('div')
        if (t.innerHTML = '\x3c!--[if IE ' + e + ']><span></span><![endif]--\x3e', t.getElementsByTagName('span').length) return t = null, e
      }
    }() <= 8) throw Error('VelocityJS cannot run on Internet Explorer 8 or earlier')
  if (window === this) {
    var V = R.patch, z = window.jQuery, L = window.Zepto
    V(window, !0), V(Element && Element.prototype), V(NodeList && NodeList.prototype), V(HTMLCollection && HTMLCollection.prototype), V(z, !0), V(z && z.fn), V(L, !0), V(L && L.fn)
  }
  var F = function (e) {Object.defineProperty(O, e, {enumerable: T.indexOf(e) >= 0, get: function () {return R[e]}})}
  for (var H in R) F(H)
  return O
})