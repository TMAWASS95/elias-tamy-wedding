(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const i of s)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const i = {};
    return (
      s.integrity && (i.integrity = s.integrity),
      s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : s.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const i = n(s);
    fetch(s.href, i);
  }
})();
function Tw(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
var Eg = { exports: {} },
  cl = {},
  wg = { exports: {} },
  Z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var so = Symbol.for("react.element"),
  Sw = Symbol.for("react.portal"),
  Iw = Symbol.for("react.fragment"),
  Rw = Symbol.for("react.strict_mode"),
  Aw = Symbol.for("react.profiler"),
  Cw = Symbol.for("react.provider"),
  xw = Symbol.for("react.context"),
  Pw = Symbol.for("react.forward_ref"),
  kw = Symbol.for("react.suspense"),
  Nw = Symbol.for("react.memo"),
  Vw = Symbol.for("react.lazy"),
  Wd = Symbol.iterator;
function Dw(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (Wd && t[Wd]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var Tg = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Sg = Object.assign,
  Ig = {};
function Rs(t, e, n) {
  ((this.props = t),
    (this.context = e),
    (this.refs = Ig),
    (this.updater = n || Tg));
}
Rs.prototype.isReactComponent = {};
Rs.prototype.setState = function (t, e) {
  if (typeof t != "object" && typeof t != "function" && t != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, t, e, "setState");
};
Rs.prototype.forceUpdate = function (t) {
  this.updater.enqueueForceUpdate(this, t, "forceUpdate");
};
function Rg() {}
Rg.prototype = Rs.prototype;
function ph(t, e, n) {
  ((this.props = t),
    (this.context = e),
    (this.refs = Ig),
    (this.updater = n || Tg));
}
var mh = (ph.prototype = new Rg());
mh.constructor = ph;
Sg(mh, Rs.prototype);
mh.isPureReactComponent = !0;
var qd = Array.isArray,
  Ag = Object.prototype.hasOwnProperty,
  gh = { current: null },
  Cg = { key: !0, ref: !0, __self: !0, __source: !0 };
function xg(t, e, n) {
  var r,
    s = {},
    i = null,
    o = null;
  if (e != null)
    for (r in (e.ref !== void 0 && (o = e.ref),
    e.key !== void 0 && (i = "" + e.key),
    e))
      Ag.call(e, r) && !Cg.hasOwnProperty(r) && (s[r] = e[r]);
  var l = arguments.length - 2;
  if (l === 1) s.children = n;
  else if (1 < l) {
    for (var u = Array(l), h = 0; h < l; h++) u[h] = arguments[h + 2];
    s.children = u;
  }
  if (t && t.defaultProps)
    for (r in ((l = t.defaultProps), l)) s[r] === void 0 && (s[r] = l[r]);
  return {
    $$typeof: so,
    type: t,
    key: i,
    ref: o,
    props: s,
    _owner: gh.current,
  };
}
function Lw(t, e) {
  return {
    $$typeof: so,
    type: t.type,
    key: e,
    ref: t.ref,
    props: t.props,
    _owner: t._owner,
  };
}
function yh(t) {
  return typeof t == "object" && t !== null && t.$$typeof === so;
}
function Mw(t) {
  var e = { "=": "=0", ":": "=2" };
  return (
    "$" +
    t.replace(/[=:]/g, function (n) {
      return e[n];
    })
  );
}
var Kd = /\/+/g;
function cu(t, e) {
  return typeof t == "object" && t !== null && t.key != null
    ? Mw("" + t.key)
    : e.toString(36);
}
function ta(t, e, n, r, s) {
  var i = typeof t;
  (i === "undefined" || i === "boolean") && (t = null);
  var o = !1;
  if (t === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (t.$$typeof) {
          case so:
          case Sw:
            o = !0;
        }
    }
  if (o)
    return (
      (o = t),
      (s = s(o)),
      (t = r === "" ? "." + cu(o, 0) : r),
      qd(s)
        ? ((n = ""),
          t != null && (n = t.replace(Kd, "$&/") + "/"),
          ta(s, e, n, "", function (h) {
            return h;
          }))
        : s != null &&
          (yh(s) &&
            (s = Lw(
              s,
              n +
                (!s.key || (o && o.key === s.key)
                  ? ""
                  : ("" + s.key).replace(Kd, "$&/") + "/") +
                t,
            )),
          e.push(s)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), qd(t)))
    for (var l = 0; l < t.length; l++) {
      i = t[l];
      var u = r + cu(i, l);
      o += ta(i, e, n, u, s);
    }
  else if (((u = Dw(t)), typeof u == "function"))
    for (t = u.call(t), l = 0; !(i = t.next()).done; )
      ((i = i.value), (u = r + cu(i, l++)), (o += ta(i, e, n, u, s)));
  else if (i === "object")
    throw (
      (e = String(t)),
      Error(
        "Objects are not valid as a React child (found: " +
          (e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return o;
}
function No(t, e, n) {
  if (t == null) return t;
  var r = [],
    s = 0;
  return (
    ta(t, r, "", "", function (i) {
      return e.call(n, i, s++);
    }),
    r
  );
}
function Ow(t) {
  if (t._status === -1) {
    var e = t._result;
    ((e = e()),
      e.then(
        function (n) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 1), (t._result = n));
        },
        function (n) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 2), (t._result = n));
        },
      ),
      t._status === -1 && ((t._status = 0), (t._result = e)));
  }
  if (t._status === 1) return t._result.default;
  throw t._result;
}
var it = { current: null },
  na = { transition: null },
  Fw = {
    ReactCurrentDispatcher: it,
    ReactCurrentBatchConfig: na,
    ReactCurrentOwner: gh,
  };
function Pg() {
  throw Error("act(...) is not supported in production builds of React.");
}
Z.Children = {
  map: No,
  forEach: function (t, e, n) {
    No(
      t,
      function () {
        e.apply(this, arguments);
      },
      n,
    );
  },
  count: function (t) {
    var e = 0;
    return (
      No(t, function () {
        e++;
      }),
      e
    );
  },
  toArray: function (t) {
    return (
      No(t, function (e) {
        return e;
      }) || []
    );
  },
  only: function (t) {
    if (!yh(t))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return t;
  },
};
Z.Component = Rs;
Z.Fragment = Iw;
Z.Profiler = Aw;
Z.PureComponent = ph;
Z.StrictMode = Rw;
Z.Suspense = kw;
Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Fw;
Z.act = Pg;
Z.cloneElement = function (t, e, n) {
  if (t == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        t +
        ".",
    );
  var r = Sg({}, t.props),
    s = t.key,
    i = t.ref,
    o = t._owner;
  if (e != null) {
    if (
      (e.ref !== void 0 && ((i = e.ref), (o = gh.current)),
      e.key !== void 0 && (s = "" + e.key),
      t.type && t.type.defaultProps)
    )
      var l = t.type.defaultProps;
    for (u in e)
      Ag.call(e, u) &&
        !Cg.hasOwnProperty(u) &&
        (r[u] = e[u] === void 0 && l !== void 0 ? l[u] : e[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    l = Array(u);
    for (var h = 0; h < u; h++) l[h] = arguments[h + 2];
    r.children = l;
  }
  return { $$typeof: so, type: t.type, key: s, ref: i, props: r, _owner: o };
};
Z.createContext = function (t) {
  return (
    (t = {
      $$typeof: xw,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (t.Provider = { $$typeof: Cw, _context: t }),
    (t.Consumer = t)
  );
};
Z.createElement = xg;
Z.createFactory = function (t) {
  var e = xg.bind(null, t);
  return ((e.type = t), e);
};
Z.createRef = function () {
  return { current: null };
};
Z.forwardRef = function (t) {
  return { $$typeof: Pw, render: t };
};
Z.isValidElement = yh;
Z.lazy = function (t) {
  return { $$typeof: Vw, _payload: { _status: -1, _result: t }, _init: Ow };
};
Z.memo = function (t, e) {
  return { $$typeof: Nw, type: t, compare: e === void 0 ? null : e };
};
Z.startTransition = function (t) {
  var e = na.transition;
  na.transition = {};
  try {
    t();
  } finally {
    na.transition = e;
  }
};
Z.unstable_act = Pg;
Z.useCallback = function (t, e) {
  return it.current.useCallback(t, e);
};
Z.useContext = function (t) {
  return it.current.useContext(t);
};
Z.useDebugValue = function () {};
Z.useDeferredValue = function (t) {
  return it.current.useDeferredValue(t);
};
Z.useEffect = function (t, e) {
  return it.current.useEffect(t, e);
};
Z.useId = function () {
  return it.current.useId();
};
Z.useImperativeHandle = function (t, e, n) {
  return it.current.useImperativeHandle(t, e, n);
};
Z.useInsertionEffect = function (t, e) {
  return it.current.useInsertionEffect(t, e);
};
Z.useLayoutEffect = function (t, e) {
  return it.current.useLayoutEffect(t, e);
};
Z.useMemo = function (t, e) {
  return it.current.useMemo(t, e);
};
Z.useReducer = function (t, e, n) {
  return it.current.useReducer(t, e, n);
};
Z.useRef = function (t) {
  return it.current.useRef(t);
};
Z.useState = function (t) {
  return it.current.useState(t);
};
Z.useSyncExternalStore = function (t, e, n) {
  return it.current.useSyncExternalStore(t, e, n);
};
Z.useTransition = function () {
  return it.current.useTransition();
};
Z.version = "18.3.1";
wg.exports = Z;
var V = wg.exports;
const jw = Tw(V);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bw = V,
  Uw = Symbol.for("react.element"),
  zw = Symbol.for("react.fragment"),
  Bw = Object.prototype.hasOwnProperty,
  $w = bw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Gw = { key: !0, ref: !0, __self: !0, __source: !0 };
function kg(t, e, n) {
  var r,
    s = {},
    i = null,
    o = null;
  (n !== void 0 && (i = "" + n),
    e.key !== void 0 && (i = "" + e.key),
    e.ref !== void 0 && (o = e.ref));
  for (r in e) Bw.call(e, r) && !Gw.hasOwnProperty(r) && (s[r] = e[r]);
  if (t && t.defaultProps)
    for (r in ((e = t.defaultProps), e)) s[r] === void 0 && (s[r] = e[r]);
  return {
    $$typeof: Uw,
    type: t,
    key: i,
    ref: o,
    props: s,
    _owner: $w.current,
  };
}
cl.Fragment = zw;
cl.jsx = kg;
cl.jsxs = kg;
Eg.exports = cl;
var I = Eg.exports,
  Ju = {},
  Ng = { exports: {} },
  vt = {},
  Vg = { exports: {} },
  Dg = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (t) {
  function e(B, K) {
    var J = B.length;
    B.push(K);
    e: for (; 0 < J; ) {
      var pe = (J - 1) >>> 1,
        Se = B[pe];
      if (0 < s(Se, K)) ((B[pe] = K), (B[J] = Se), (J = pe));
      else break e;
    }
  }
  function n(B) {
    return B.length === 0 ? null : B[0];
  }
  function r(B) {
    if (B.length === 0) return null;
    var K = B[0],
      J = B.pop();
    if (J !== K) {
      B[0] = J;
      e: for (var pe = 0, Se = B.length, or = Se >>> 1; pe < or; ) {
        var Et = 2 * (pe + 1) - 1,
          ar = B[Et],
          kt = Et + 1,
          En = B[kt];
        if (0 > s(ar, J))
          kt < Se && 0 > s(En, ar)
            ? ((B[pe] = En), (B[kt] = J), (pe = kt))
            : ((B[pe] = ar), (B[Et] = J), (pe = Et));
        else if (kt < Se && 0 > s(En, J))
          ((B[pe] = En), (B[kt] = J), (pe = kt));
        else break e;
      }
    }
    return K;
  }
  function s(B, K) {
    var J = B.sortIndex - K.sortIndex;
    return J !== 0 ? J : B.id - K.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    t.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      l = o.now();
    t.unstable_now = function () {
      return o.now() - l;
    };
  }
  var u = [],
    h = [],
    d = 1,
    p = null,
    m = 3,
    T = !1,
    x = !1,
    P = !1,
    D = typeof setTimeout == "function" ? setTimeout : null,
    _ = typeof clearTimeout == "function" ? clearTimeout : null,
    v = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function R(B) {
    for (var K = n(h); K !== null; ) {
      if (K.callback === null) r(h);
      else if (K.startTime <= B)
        (r(h), (K.sortIndex = K.expirationTime), e(u, K));
      else break;
      K = n(h);
    }
  }
  function M(B) {
    if (((P = !1), R(B), !x))
      if (n(u) !== null) ((x = !0), Ms(j));
      else {
        var K = n(h);
        K !== null && Os(M, K.startTime - B);
      }
  }
  function j(B, K) {
    ((x = !1), P && ((P = !1), _(y), (y = -1)), (T = !0));
    var J = m;
    try {
      for (
        R(K), p = n(u);
        p !== null && (!(p.expirationTime > K) || (B && !C()));
      ) {
        var pe = p.callback;
        if (typeof pe == "function") {
          ((p.callback = null), (m = p.priorityLevel));
          var Se = pe(p.expirationTime <= K);
          ((K = t.unstable_now()),
            typeof Se == "function" ? (p.callback = Se) : p === n(u) && r(u),
            R(K));
        } else r(u);
        p = n(u);
      }
      if (p !== null) var or = !0;
      else {
        var Et = n(h);
        (Et !== null && Os(M, Et.startTime - K), (or = !1));
      }
      return or;
    } finally {
      ((p = null), (m = J), (T = !1));
    }
  }
  var U = !1,
    E = null,
    y = -1,
    w = 5,
    A = -1;
  function C() {
    return !(t.unstable_now() - A < w);
  }
  function k() {
    if (E !== null) {
      var B = t.unstable_now();
      A = B;
      var K = !0;
      try {
        K = E(!0, B);
      } finally {
        K ? S() : ((U = !1), (E = null));
      }
    } else U = !1;
  }
  var S;
  if (typeof v == "function")
    S = function () {
      v(k);
    };
  else if (typeof MessageChannel < "u") {
    var Ae = new MessageChannel(),
      Oe = Ae.port2;
    ((Ae.port1.onmessage = k),
      (S = function () {
        Oe.postMessage(null);
      }));
  } else
    S = function () {
      D(k, 0);
    };
  function Ms(B) {
    ((E = B), U || ((U = !0), S()));
  }
  function Os(B, K) {
    y = D(function () {
      B(t.unstable_now());
    }, K);
  }
  ((t.unstable_IdlePriority = 5),
    (t.unstable_ImmediatePriority = 1),
    (t.unstable_LowPriority = 4),
    (t.unstable_NormalPriority = 3),
    (t.unstable_Profiling = null),
    (t.unstable_UserBlockingPriority = 2),
    (t.unstable_cancelCallback = function (B) {
      B.callback = null;
    }),
    (t.unstable_continueExecution = function () {
      x || T || ((x = !0), Ms(j));
    }),
    (t.unstable_forceFrameRate = function (B) {
      0 > B || 125 < B
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (w = 0 < B ? Math.floor(1e3 / B) : 5);
    }),
    (t.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (t.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (t.unstable_next = function (B) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var K = 3;
          break;
        default:
          K = m;
      }
      var J = m;
      m = K;
      try {
        return B();
      } finally {
        m = J;
      }
    }),
    (t.unstable_pauseExecution = function () {}),
    (t.unstable_requestPaint = function () {}),
    (t.unstable_runWithPriority = function (B, K) {
      switch (B) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          B = 3;
      }
      var J = m;
      m = B;
      try {
        return K();
      } finally {
        m = J;
      }
    }),
    (t.unstable_scheduleCallback = function (B, K, J) {
      var pe = t.unstable_now();
      switch (
        (typeof J == "object" && J !== null
          ? ((J = J.delay), (J = typeof J == "number" && 0 < J ? pe + J : pe))
          : (J = pe),
        B)
      ) {
        case 1:
          var Se = -1;
          break;
        case 2:
          Se = 250;
          break;
        case 5:
          Se = 1073741823;
          break;
        case 4:
          Se = 1e4;
          break;
        default:
          Se = 5e3;
      }
      return (
        (Se = J + Se),
        (B = {
          id: d++,
          callback: K,
          priorityLevel: B,
          startTime: J,
          expirationTime: Se,
          sortIndex: -1,
        }),
        J > pe
          ? ((B.sortIndex = J),
            e(h, B),
            n(u) === null &&
              B === n(h) &&
              (P ? (_(y), (y = -1)) : (P = !0), Os(M, J - pe)))
          : ((B.sortIndex = Se), e(u, B), x || T || ((x = !0), Ms(j))),
        B
      );
    }),
    (t.unstable_shouldYield = C),
    (t.unstable_wrapCallback = function (B) {
      var K = m;
      return function () {
        var J = m;
        m = K;
        try {
          return B.apply(this, arguments);
        } finally {
          m = J;
        }
      };
    }));
})(Dg);
Vg.exports = Dg;
var Hw = Vg.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ww = V,
  yt = Hw;
function b(t) {
  for (
    var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1;
    n < arguments.length;
    n++
  )
    e += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    t +
    "; visit " +
    e +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Lg = new Set(),
  Ni = {};
function Nr(t, e) {
  (ds(t, e), ds(t + "Capture", e));
}
function ds(t, e) {
  for (Ni[t] = e, t = 0; t < e.length; t++) Lg.add(e[t]);
}
var cn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Xu = Object.prototype.hasOwnProperty,
  qw =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Qd = {},
  Yd = {};
function Kw(t) {
  return Xu.call(Yd, t)
    ? !0
    : Xu.call(Qd, t)
      ? !1
      : qw.test(t)
        ? (Yd[t] = !0)
        : ((Qd[t] = !0), !1);
}
function Qw(t, e, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof e) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((t = t.toLowerCase().slice(0, 5)), t !== "data-" && t !== "aria-");
    default:
      return !1;
  }
}
function Yw(t, e, n, r) {
  if (e === null || typeof e > "u" || Qw(t, e, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !e;
      case 4:
        return e === !1;
      case 5:
        return isNaN(e);
      case 6:
        return isNaN(e) || 1 > e;
    }
  return !1;
}
function ot(t, e, n, r, s, i, o) {
  ((this.acceptsBooleans = e === 2 || e === 3 || e === 4),
    (this.attributeName = r),
    (this.attributeNamespace = s),
    (this.mustUseProperty = n),
    (this.propertyName = t),
    (this.type = e),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o));
}
var He = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (t) {
    He[t] = new ot(t, 0, !1, t, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (t) {
  var e = t[0];
  He[e] = new ot(e, 1, !1, t[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (t) {
  He[t] = new ot(t, 2, !1, t.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (t) {
  He[t] = new ot(t, 2, !1, t, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (t) {
    He[t] = new ot(t, 3, !1, t.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (t) {
  He[t] = new ot(t, 3, !0, t, null, !1, !1);
});
["capture", "download"].forEach(function (t) {
  He[t] = new ot(t, 4, !1, t, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (t) {
  He[t] = new ot(t, 6, !1, t, null, !1, !1);
});
["rowSpan", "start"].forEach(function (t) {
  He[t] = new ot(t, 5, !1, t.toLowerCase(), null, !1, !1);
});
var vh = /[\-:]([a-z])/g;
function _h(t) {
  return t[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (t) {
    var e = t.replace(vh, _h);
    He[e] = new ot(e, 1, !1, t, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (t) {
    var e = t.replace(vh, _h);
    He[e] = new ot(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (t) {
  var e = t.replace(vh, _h);
  He[e] = new ot(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (t) {
  He[t] = new ot(t, 1, !1, t.toLowerCase(), null, !1, !1);
});
He.xlinkHref = new ot(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (t) {
  He[t] = new ot(t, 1, !1, t.toLowerCase(), null, !0, !0);
});
function Eh(t, e, n, r) {
  var s = He.hasOwnProperty(e) ? He[e] : null;
  (s !== null
    ? s.type !== 0
    : r ||
      !(2 < e.length) ||
      (e[0] !== "o" && e[0] !== "O") ||
      (e[1] !== "n" && e[1] !== "N")) &&
    (Yw(e, n, s, r) && (n = null),
    r || s === null
      ? Kw(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n))
      : s.mustUseProperty
        ? (t[s.propertyName] = n === null ? (s.type === 3 ? !1 : "") : n)
        : ((e = s.attributeName),
          (r = s.attributeNamespace),
          n === null
            ? t.removeAttribute(e)
            : ((s = s.type),
              (n = s === 3 || (s === 4 && n === !0) ? "" : "" + n),
              r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))));
}
var vn = Ww.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Vo = Symbol.for("react.element"),
  Hr = Symbol.for("react.portal"),
  Wr = Symbol.for("react.fragment"),
  wh = Symbol.for("react.strict_mode"),
  Zu = Symbol.for("react.profiler"),
  Mg = Symbol.for("react.provider"),
  Og = Symbol.for("react.context"),
  Th = Symbol.for("react.forward_ref"),
  ec = Symbol.for("react.suspense"),
  tc = Symbol.for("react.suspense_list"),
  Sh = Symbol.for("react.memo"),
  xn = Symbol.for("react.lazy"),
  Fg = Symbol.for("react.offscreen"),
  Jd = Symbol.iterator;
function Zs(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (Jd && t[Jd]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var _e = Object.assign,
  hu;
function ui(t) {
  if (hu === void 0)
    try {
      throw Error();
    } catch (n) {
      var e = n.stack.trim().match(/\n( *(at )?)/);
      hu = (e && e[1]) || "";
    }
  return (
    `
` +
    hu +
    t
  );
}
var fu = !1;
function du(t, e) {
  if (!t || fu) return "";
  fu = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (e)
      if (
        ((e = function () {
          throw Error();
        }),
        Object.defineProperty(e.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(e, []);
        } catch (h) {
          var r = h;
        }
        Reflect.construct(t, [], e);
      } else {
        try {
          e.call();
        } catch (h) {
          r = h;
        }
        t.call(e.prototype);
      }
    else {
      try {
        throw Error();
      } catch (h) {
        r = h;
      }
      t();
    }
  } catch (h) {
    if (h && r && typeof h.stack == "string") {
      for (
        var s = h.stack.split(`
`),
          i = r.stack.split(`
`),
          o = s.length - 1,
          l = i.length - 1;
        1 <= o && 0 <= l && s[o] !== i[l];
      )
        l--;
      for (; 1 <= o && 0 <= l; o--, l--)
        if (s[o] !== i[l]) {
          if (o !== 1 || l !== 1)
            do
              if ((o--, l--, 0 > l || s[o] !== i[l])) {
                var u =
                  `
` + s[o].replace(" at new ", " at ");
                return (
                  t.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", t.displayName)),
                  u
                );
              }
            while (1 <= o && 0 <= l);
          break;
        }
    }
  } finally {
    ((fu = !1), (Error.prepareStackTrace = n));
  }
  return (t = t ? t.displayName || t.name : "") ? ui(t) : "";
}
function Jw(t) {
  switch (t.tag) {
    case 5:
      return ui(t.type);
    case 16:
      return ui("Lazy");
    case 13:
      return ui("Suspense");
    case 19:
      return ui("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((t = du(t.type, !1)), t);
    case 11:
      return ((t = du(t.type.render, !1)), t);
    case 1:
      return ((t = du(t.type, !0)), t);
    default:
      return "";
  }
}
function nc(t) {
  if (t == null) return null;
  if (typeof t == "function") return t.displayName || t.name || null;
  if (typeof t == "string") return t;
  switch (t) {
    case Wr:
      return "Fragment";
    case Hr:
      return "Portal";
    case Zu:
      return "Profiler";
    case wh:
      return "StrictMode";
    case ec:
      return "Suspense";
    case tc:
      return "SuspenseList";
  }
  if (typeof t == "object")
    switch (t.$$typeof) {
      case Og:
        return (t.displayName || "Context") + ".Consumer";
      case Mg:
        return (t._context.displayName || "Context") + ".Provider";
      case Th:
        var e = t.render;
        return (
          (t = t.displayName),
          t ||
            ((t = e.displayName || e.name || ""),
            (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
          t
        );
      case Sh:
        return (
          (e = t.displayName || null),
          e !== null ? e : nc(t.type) || "Memo"
        );
      case xn:
        ((e = t._payload), (t = t._init));
        try {
          return nc(t(e));
        } catch {}
    }
  return null;
}
function Xw(t) {
  var e = t.type;
  switch (t.tag) {
    case 24:
      return "Cache";
    case 9:
      return (e.displayName || "Context") + ".Consumer";
    case 10:
      return (e._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (t = e.render),
        (t = t.displayName || t.name || ""),
        e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return e;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return nc(e);
    case 8:
      return e === wh ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof e == "function") return e.displayName || e.name || null;
      if (typeof e == "string") return e;
  }
  return null;
}
function Kn(t) {
  switch (typeof t) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return t;
    case "object":
      return t;
    default:
      return "";
  }
}
function jg(t) {
  var e = t.type;
  return (
    (t = t.nodeName) &&
    t.toLowerCase() === "input" &&
    (e === "checkbox" || e === "radio")
  );
}
function Zw(t) {
  var e = jg(t) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
    r = "" + t[e];
  if (
    !t.hasOwnProperty(e) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var s = n.get,
      i = n.set;
    return (
      Object.defineProperty(t, e, {
        configurable: !0,
        get: function () {
          return s.call(this);
        },
        set: function (o) {
          ((r = "" + o), i.call(this, o));
        },
      }),
      Object.defineProperty(t, e, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          ((t._valueTracker = null), delete t[e]);
        },
      }
    );
  }
}
function Do(t) {
  t._valueTracker || (t._valueTracker = Zw(t));
}
function bg(t) {
  if (!t) return !1;
  var e = t._valueTracker;
  if (!e) return !0;
  var n = e.getValue(),
    r = "";
  return (
    t && (r = jg(t) ? (t.checked ? "true" : "false") : t.value),
    (t = r),
    t !== n ? (e.setValue(t), !0) : !1
  );
}
function Ta(t) {
  if (((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u"))
    return null;
  try {
    return t.activeElement || t.body;
  } catch {
    return t.body;
  }
}
function rc(t, e) {
  var n = e.checked;
  return _e({}, e, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? t._wrapperState.initialChecked,
  });
}
function Xd(t, e) {
  var n = e.defaultValue == null ? "" : e.defaultValue,
    r = e.checked != null ? e.checked : e.defaultChecked;
  ((n = Kn(e.value != null ? e.value : n)),
    (t._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        e.type === "checkbox" || e.type === "radio"
          ? e.checked != null
          : e.value != null,
    }));
}
function Ug(t, e) {
  ((e = e.checked), e != null && Eh(t, "checked", e, !1));
}
function sc(t, e) {
  Ug(t, e);
  var n = Kn(e.value),
    r = e.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && t.value === "") || t.value != n) && (t.value = "" + n)
      : t.value !== "" + n && (t.value = "" + n);
  else if (r === "submit" || r === "reset") {
    t.removeAttribute("value");
    return;
  }
  (e.hasOwnProperty("value")
    ? ic(t, e.type, n)
    : e.hasOwnProperty("defaultValue") && ic(t, e.type, Kn(e.defaultValue)),
    e.checked == null &&
      e.defaultChecked != null &&
      (t.defaultChecked = !!e.defaultChecked));
}
function Zd(t, e, n) {
  if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
    var r = e.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (e.value !== void 0 && e.value !== null)
      )
    )
      return;
    ((e = "" + t._wrapperState.initialValue),
      n || e === t.value || (t.value = e),
      (t.defaultValue = e));
  }
  ((n = t.name),
    n !== "" && (t.name = ""),
    (t.defaultChecked = !!t._wrapperState.initialChecked),
    n !== "" && (t.name = n));
}
function ic(t, e, n) {
  (e !== "number" || Ta(t.ownerDocument) !== t) &&
    (n == null
      ? (t.defaultValue = "" + t._wrapperState.initialValue)
      : t.defaultValue !== "" + n && (t.defaultValue = "" + n));
}
var ci = Array.isArray;
function rs(t, e, n, r) {
  if (((t = t.options), e)) {
    e = {};
    for (var s = 0; s < n.length; s++) e["$" + n[s]] = !0;
    for (n = 0; n < t.length; n++)
      ((s = e.hasOwnProperty("$" + t[n].value)),
        t[n].selected !== s && (t[n].selected = s),
        s && r && (t[n].defaultSelected = !0));
  } else {
    for (n = "" + Kn(n), e = null, s = 0; s < t.length; s++) {
      if (t[s].value === n) {
        ((t[s].selected = !0), r && (t[s].defaultSelected = !0));
        return;
      }
      e !== null || t[s].disabled || (e = t[s]);
    }
    e !== null && (e.selected = !0);
  }
}
function oc(t, e) {
  if (e.dangerouslySetInnerHTML != null) throw Error(b(91));
  return _e({}, e, {
    value: void 0,
    defaultValue: void 0,
    children: "" + t._wrapperState.initialValue,
  });
}
function ep(t, e) {
  var n = e.value;
  if (n == null) {
    if (((n = e.children), (e = e.defaultValue), n != null)) {
      if (e != null) throw Error(b(92));
      if (ci(n)) {
        if (1 < n.length) throw Error(b(93));
        n = n[0];
      }
      e = n;
    }
    (e == null && (e = ""), (n = e));
  }
  t._wrapperState = { initialValue: Kn(n) };
}
function zg(t, e) {
  var n = Kn(e.value),
    r = Kn(e.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== t.value && (t.value = n),
    e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
    r != null && (t.defaultValue = "" + r));
}
function tp(t) {
  var e = t.textContent;
  e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e);
}
function Bg(t) {
  switch (t) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ac(t, e) {
  return t == null || t === "http://www.w3.org/1999/xhtml"
    ? Bg(e)
    : t === "http://www.w3.org/2000/svg" && e === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : t;
}
var Lo,
  $g = (function (t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (e, n, r, s) {
          MSApp.execUnsafeLocalFunction(function () {
            return t(e, n, r, s);
          });
        }
      : t;
  })(function (t, e) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t)
      t.innerHTML = e;
    else {
      for (
        Lo = Lo || document.createElement("div"),
          Lo.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>",
          e = Lo.firstChild;
        t.firstChild;
      )
        t.removeChild(t.firstChild);
      for (; e.firstChild; ) t.appendChild(e.firstChild);
    }
  });
function Vi(t, e) {
  if (e) {
    var n = t.firstChild;
    if (n && n === t.lastChild && n.nodeType === 3) {
      n.nodeValue = e;
      return;
    }
  }
  t.textContent = e;
}
var vi = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  e0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(vi).forEach(function (t) {
  e0.forEach(function (e) {
    ((e = e + t.charAt(0).toUpperCase() + t.substring(1)), (vi[e] = vi[t]));
  });
});
function Gg(t, e, n) {
  return e == null || typeof e == "boolean" || e === ""
    ? ""
    : n || typeof e != "number" || e === 0 || (vi.hasOwnProperty(t) && vi[t])
      ? ("" + e).trim()
      : e + "px";
}
function Hg(t, e) {
  t = t.style;
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        s = Gg(n, e[n], r);
      (n === "float" && (n = "cssFloat"), r ? t.setProperty(n, s) : (t[n] = s));
    }
}
var t0 = _e(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function lc(t, e) {
  if (e) {
    if (t0[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
      throw Error(b(137, t));
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null) throw Error(b(60));
      if (
        typeof e.dangerouslySetInnerHTML != "object" ||
        !("__html" in e.dangerouslySetInnerHTML)
      )
        throw Error(b(61));
    }
    if (e.style != null && typeof e.style != "object") throw Error(b(62));
  }
}
function uc(t, e) {
  if (t.indexOf("-") === -1) return typeof e.is == "string";
  switch (t) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var cc = null;
function Ih(t) {
  return (
    (t = t.target || t.srcElement || window),
    t.correspondingUseElement && (t = t.correspondingUseElement),
    t.nodeType === 3 ? t.parentNode : t
  );
}
var hc = null,
  ss = null,
  is = null;
function np(t) {
  if ((t = ao(t))) {
    if (typeof hc != "function") throw Error(b(280));
    var e = t.stateNode;
    e && ((e = ml(e)), hc(t.stateNode, t.type, e));
  }
}
function Wg(t) {
  ss ? (is ? is.push(t) : (is = [t])) : (ss = t);
}
function qg() {
  if (ss) {
    var t = ss,
      e = is;
    if (((is = ss = null), np(t), e)) for (t = 0; t < e.length; t++) np(e[t]);
  }
}
function Kg(t, e) {
  return t(e);
}
function Qg() {}
var pu = !1;
function Yg(t, e, n) {
  if (pu) return t(e, n);
  pu = !0;
  try {
    return Kg(t, e, n);
  } finally {
    ((pu = !1), (ss !== null || is !== null) && (Qg(), qg()));
  }
}
function Di(t, e) {
  var n = t.stateNode;
  if (n === null) return null;
  var r = ml(n);
  if (r === null) return null;
  n = r[e];
  e: switch (e) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      ((r = !r.disabled) ||
        ((t = t.type),
        (r = !(
          t === "button" ||
          t === "input" ||
          t === "select" ||
          t === "textarea"
        ))),
        (t = !r));
      break e;
    default:
      t = !1;
  }
  if (t) return null;
  if (n && typeof n != "function") throw Error(b(231, e, typeof n));
  return n;
}
var fc = !1;
if (cn)
  try {
    var ei = {};
    (Object.defineProperty(ei, "passive", {
      get: function () {
        fc = !0;
      },
    }),
      window.addEventListener("test", ei, ei),
      window.removeEventListener("test", ei, ei));
  } catch {
    fc = !1;
  }
function n0(t, e, n, r, s, i, o, l, u) {
  var h = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(n, h);
  } catch (d) {
    this.onError(d);
  }
}
var _i = !1,
  Sa = null,
  Ia = !1,
  dc = null,
  r0 = {
    onError: function (t) {
      ((_i = !0), (Sa = t));
    },
  };
function s0(t, e, n, r, s, i, o, l, u) {
  ((_i = !1), (Sa = null), n0.apply(r0, arguments));
}
function i0(t, e, n, r, s, i, o, l, u) {
  if ((s0.apply(this, arguments), _i)) {
    if (_i) {
      var h = Sa;
      ((_i = !1), (Sa = null));
    } else throw Error(b(198));
    Ia || ((Ia = !0), (dc = h));
  }
}
function Vr(t) {
  var e = t,
    n = t;
  if (t.alternate) for (; e.return; ) e = e.return;
  else {
    t = e;
    do ((e = t), e.flags & 4098 && (n = e.return), (t = e.return));
    while (t);
  }
  return e.tag === 3 ? n : null;
}
function Jg(t) {
  if (t.tag === 13) {
    var e = t.memoizedState;
    if (
      (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
      e !== null)
    )
      return e.dehydrated;
  }
  return null;
}
function rp(t) {
  if (Vr(t) !== t) throw Error(b(188));
}
function o0(t) {
  var e = t.alternate;
  if (!e) {
    if (((e = Vr(t)), e === null)) throw Error(b(188));
    return e !== t ? null : t;
  }
  for (var n = t, r = e; ; ) {
    var s = n.return;
    if (s === null) break;
    var i = s.alternate;
    if (i === null) {
      if (((r = s.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (s.child === i.child) {
      for (i = s.child; i; ) {
        if (i === n) return (rp(s), t);
        if (i === r) return (rp(s), e);
        i = i.sibling;
      }
      throw Error(b(188));
    }
    if (n.return !== r.return) ((n = s), (r = i));
    else {
      for (var o = !1, l = s.child; l; ) {
        if (l === n) {
          ((o = !0), (n = s), (r = i));
          break;
        }
        if (l === r) {
          ((o = !0), (r = s), (n = i));
          break;
        }
        l = l.sibling;
      }
      if (!o) {
        for (l = i.child; l; ) {
          if (l === n) {
            ((o = !0), (n = i), (r = s));
            break;
          }
          if (l === r) {
            ((o = !0), (r = i), (n = s));
            break;
          }
          l = l.sibling;
        }
        if (!o) throw Error(b(189));
      }
    }
    if (n.alternate !== r) throw Error(b(190));
  }
  if (n.tag !== 3) throw Error(b(188));
  return n.stateNode.current === n ? t : e;
}
function Xg(t) {
  return ((t = o0(t)), t !== null ? Zg(t) : null);
}
function Zg(t) {
  if (t.tag === 5 || t.tag === 6) return t;
  for (t = t.child; t !== null; ) {
    var e = Zg(t);
    if (e !== null) return e;
    t = t.sibling;
  }
  return null;
}
var ey = yt.unstable_scheduleCallback,
  sp = yt.unstable_cancelCallback,
  a0 = yt.unstable_shouldYield,
  l0 = yt.unstable_requestPaint,
  Re = yt.unstable_now,
  u0 = yt.unstable_getCurrentPriorityLevel,
  Rh = yt.unstable_ImmediatePriority,
  ty = yt.unstable_UserBlockingPriority,
  Ra = yt.unstable_NormalPriority,
  c0 = yt.unstable_LowPriority,
  ny = yt.unstable_IdlePriority,
  hl = null,
  qt = null;
function h0(t) {
  if (qt && typeof qt.onCommitFiberRoot == "function")
    try {
      qt.onCommitFiberRoot(hl, t, void 0, (t.current.flags & 128) === 128);
    } catch {}
}
var Ot = Math.clz32 ? Math.clz32 : p0,
  f0 = Math.log,
  d0 = Math.LN2;
function p0(t) {
  return ((t >>>= 0), t === 0 ? 32 : (31 - ((f0(t) / d0) | 0)) | 0);
}
var Mo = 64,
  Oo = 4194304;
function hi(t) {
  switch (t & -t) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return t & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return t;
  }
}
function Aa(t, e) {
  var n = t.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    s = t.suspendedLanes,
    i = t.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var l = o & ~s;
    l !== 0 ? (r = hi(l)) : ((i &= o), i !== 0 && (r = hi(i)));
  } else ((o = n & ~s), o !== 0 ? (r = hi(o)) : i !== 0 && (r = hi(i)));
  if (r === 0) return 0;
  if (
    e !== 0 &&
    e !== r &&
    !(e & s) &&
    ((s = r & -r), (i = e & -e), s >= i || (s === 16 && (i & 4194240) !== 0))
  )
    return e;
  if ((r & 4 && (r |= n & 16), (e = t.entangledLanes), e !== 0))
    for (t = t.entanglements, e &= r; 0 < e; )
      ((n = 31 - Ot(e)), (s = 1 << n), (r |= t[n]), (e &= ~s));
  return r;
}
function m0(t, e) {
  switch (t) {
    case 1:
    case 2:
    case 4:
      return e + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function g0(t, e) {
  for (
    var n = t.suspendedLanes,
      r = t.pingedLanes,
      s = t.expirationTimes,
      i = t.pendingLanes;
    0 < i;
  ) {
    var o = 31 - Ot(i),
      l = 1 << o,
      u = s[o];
    (u === -1
      ? (!(l & n) || l & r) && (s[o] = m0(l, e))
      : u <= e && (t.expiredLanes |= l),
      (i &= ~l));
  }
}
function pc(t) {
  return (
    (t = t.pendingLanes & -1073741825),
    t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
  );
}
function ry() {
  var t = Mo;
  return ((Mo <<= 1), !(Mo & 4194240) && (Mo = 64), t);
}
function mu(t) {
  for (var e = [], n = 0; 31 > n; n++) e.push(t);
  return e;
}
function io(t, e, n) {
  ((t.pendingLanes |= e),
    e !== 536870912 && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
    (t = t.eventTimes),
    (e = 31 - Ot(e)),
    (t[e] = n));
}
function y0(t, e) {
  var n = t.pendingLanes & ~e;
  ((t.pendingLanes = e),
    (t.suspendedLanes = 0),
    (t.pingedLanes = 0),
    (t.expiredLanes &= e),
    (t.mutableReadLanes &= e),
    (t.entangledLanes &= e),
    (e = t.entanglements));
  var r = t.eventTimes;
  for (t = t.expirationTimes; 0 < n; ) {
    var s = 31 - Ot(n),
      i = 1 << s;
    ((e[s] = 0), (r[s] = -1), (t[s] = -1), (n &= ~i));
  }
}
function Ah(t, e) {
  var n = (t.entangledLanes |= e);
  for (t = t.entanglements; n; ) {
    var r = 31 - Ot(n),
      s = 1 << r;
    ((s & e) | (t[r] & e) && (t[r] |= e), (n &= ~s));
  }
}
var oe = 0;
function sy(t) {
  return (
    (t &= -t),
    1 < t ? (4 < t ? (t & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var iy,
  Ch,
  oy,
  ay,
  ly,
  mc = !1,
  Fo = [],
  On = null,
  Fn = null,
  jn = null,
  Li = new Map(),
  Mi = new Map(),
  Nn = [],
  v0 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function ip(t, e) {
  switch (t) {
    case "focusin":
    case "focusout":
      On = null;
      break;
    case "dragenter":
    case "dragleave":
      Fn = null;
      break;
    case "mouseover":
    case "mouseout":
      jn = null;
      break;
    case "pointerover":
    case "pointerout":
      Li.delete(e.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Mi.delete(e.pointerId);
  }
}
function ti(t, e, n, r, s, i) {
  return t === null || t.nativeEvent !== i
    ? ((t = {
        blockedOn: e,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [s],
      }),
      e !== null && ((e = ao(e)), e !== null && Ch(e)),
      t)
    : ((t.eventSystemFlags |= r),
      (e = t.targetContainers),
      s !== null && e.indexOf(s) === -1 && e.push(s),
      t);
}
function _0(t, e, n, r, s) {
  switch (e) {
    case "focusin":
      return ((On = ti(On, t, e, n, r, s)), !0);
    case "dragenter":
      return ((Fn = ti(Fn, t, e, n, r, s)), !0);
    case "mouseover":
      return ((jn = ti(jn, t, e, n, r, s)), !0);
    case "pointerover":
      var i = s.pointerId;
      return (Li.set(i, ti(Li.get(i) || null, t, e, n, r, s)), !0);
    case "gotpointercapture":
      return (
        (i = s.pointerId),
        Mi.set(i, ti(Mi.get(i) || null, t, e, n, r, s)),
        !0
      );
  }
  return !1;
}
function uy(t) {
  var e = gr(t.target);
  if (e !== null) {
    var n = Vr(e);
    if (n !== null) {
      if (((e = n.tag), e === 13)) {
        if (((e = Jg(n)), e !== null)) {
          ((t.blockedOn = e),
            ly(t.priority, function () {
              oy(n);
            }));
          return;
        }
      } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  t.blockedOn = null;
}
function ra(t) {
  if (t.blockedOn !== null) return !1;
  for (var e = t.targetContainers; 0 < e.length; ) {
    var n = gc(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
    if (n === null) {
      n = t.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((cc = r), n.target.dispatchEvent(r), (cc = null));
    } else return ((e = ao(n)), e !== null && Ch(e), (t.blockedOn = n), !1);
    e.shift();
  }
  return !0;
}
function op(t, e, n) {
  ra(t) && n.delete(e);
}
function E0() {
  ((mc = !1),
    On !== null && ra(On) && (On = null),
    Fn !== null && ra(Fn) && (Fn = null),
    jn !== null && ra(jn) && (jn = null),
    Li.forEach(op),
    Mi.forEach(op));
}
function ni(t, e) {
  t.blockedOn === e &&
    ((t.blockedOn = null),
    mc ||
      ((mc = !0),
      yt.unstable_scheduleCallback(yt.unstable_NormalPriority, E0)));
}
function Oi(t) {
  function e(s) {
    return ni(s, t);
  }
  if (0 < Fo.length) {
    ni(Fo[0], t);
    for (var n = 1; n < Fo.length; n++) {
      var r = Fo[n];
      r.blockedOn === t && (r.blockedOn = null);
    }
  }
  for (
    On !== null && ni(On, t),
      Fn !== null && ni(Fn, t),
      jn !== null && ni(jn, t),
      Li.forEach(e),
      Mi.forEach(e),
      n = 0;
    n < Nn.length;
    n++
  )
    ((r = Nn[n]), r.blockedOn === t && (r.blockedOn = null));
  for (; 0 < Nn.length && ((n = Nn[0]), n.blockedOn === null); )
    (uy(n), n.blockedOn === null && Nn.shift());
}
var os = vn.ReactCurrentBatchConfig,
  Ca = !0;
function w0(t, e, n, r) {
  var s = oe,
    i = os.transition;
  os.transition = null;
  try {
    ((oe = 1), xh(t, e, n, r));
  } finally {
    ((oe = s), (os.transition = i));
  }
}
function T0(t, e, n, r) {
  var s = oe,
    i = os.transition;
  os.transition = null;
  try {
    ((oe = 4), xh(t, e, n, r));
  } finally {
    ((oe = s), (os.transition = i));
  }
}
function xh(t, e, n, r) {
  if (Ca) {
    var s = gc(t, e, n, r);
    if (s === null) (Ru(t, e, r, xa, n), ip(t, r));
    else if (_0(s, t, e, n, r)) r.stopPropagation();
    else if ((ip(t, r), e & 4 && -1 < v0.indexOf(t))) {
      for (; s !== null; ) {
        var i = ao(s);
        if (
          (i !== null && iy(i),
          (i = gc(t, e, n, r)),
          i === null && Ru(t, e, r, xa, n),
          i === s)
        )
          break;
        s = i;
      }
      s !== null && r.stopPropagation();
    } else Ru(t, e, r, null, n);
  }
}
var xa = null;
function gc(t, e, n, r) {
  if (((xa = null), (t = Ih(r)), (t = gr(t)), t !== null))
    if (((e = Vr(t)), e === null)) t = null;
    else if (((n = e.tag), n === 13)) {
      if (((t = Jg(e)), t !== null)) return t;
      t = null;
    } else if (n === 3) {
      if (e.stateNode.current.memoizedState.isDehydrated)
        return e.tag === 3 ? e.stateNode.containerInfo : null;
      t = null;
    } else e !== t && (t = null);
  return ((xa = t), null);
}
function cy(t) {
  switch (t) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (u0()) {
        case Rh:
          return 1;
        case ty:
          return 4;
        case Ra:
        case c0:
          return 16;
        case ny:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Dn = null,
  Ph = null,
  sa = null;
function hy() {
  if (sa) return sa;
  var t,
    e = Ph,
    n = e.length,
    r,
    s = "value" in Dn ? Dn.value : Dn.textContent,
    i = s.length;
  for (t = 0; t < n && e[t] === s[t]; t++);
  var o = n - t;
  for (r = 1; r <= o && e[n - r] === s[i - r]; r++);
  return (sa = s.slice(t, 1 < r ? 1 - r : void 0));
}
function ia(t) {
  var e = t.keyCode;
  return (
    "charCode" in t
      ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
      : (t = e),
    t === 10 && (t = 13),
    32 <= t || t === 13 ? t : 0
  );
}
function jo() {
  return !0;
}
function ap() {
  return !1;
}
function _t(t) {
  function e(n, r, s, i, o) {
    ((this._reactName = n),
      (this._targetInst = s),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null));
    for (var l in t)
      t.hasOwnProperty(l) && ((n = t[l]), (this[l] = n ? n(i) : i[l]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? jo
        : ap),
      (this.isPropagationStopped = ap),
      this
    );
  }
  return (
    _e(e.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = jo));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = jo));
      },
      persist: function () {},
      isPersistent: jo,
    }),
    e
  );
}
var As = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  kh = _t(As),
  oo = _e({}, As, { view: 0, detail: 0 }),
  S0 = _t(oo),
  gu,
  yu,
  ri,
  fl = _e({}, oo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Nh,
    button: 0,
    buttons: 0,
    relatedTarget: function (t) {
      return t.relatedTarget === void 0
        ? t.fromElement === t.srcElement
          ? t.toElement
          : t.fromElement
        : t.relatedTarget;
    },
    movementX: function (t) {
      return "movementX" in t
        ? t.movementX
        : (t !== ri &&
            (ri && t.type === "mousemove"
              ? ((gu = t.screenX - ri.screenX), (yu = t.screenY - ri.screenY))
              : (yu = gu = 0),
            (ri = t)),
          gu);
    },
    movementY: function (t) {
      return "movementY" in t ? t.movementY : yu;
    },
  }),
  lp = _t(fl),
  I0 = _e({}, fl, { dataTransfer: 0 }),
  R0 = _t(I0),
  A0 = _e({}, oo, { relatedTarget: 0 }),
  vu = _t(A0),
  C0 = _e({}, As, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  x0 = _t(C0),
  P0 = _e({}, As, {
    clipboardData: function (t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    },
  }),
  k0 = _t(P0),
  N0 = _e({}, As, { data: 0 }),
  up = _t(N0),
  V0 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  D0 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  L0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function M0(t) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(t) : (t = L0[t]) ? !!e[t] : !1;
}
function Nh() {
  return M0;
}
var O0 = _e({}, oo, {
    key: function (t) {
      if (t.key) {
        var e = V0[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress"
        ? ((t = ia(t)), t === 13 ? "Enter" : String.fromCharCode(t))
        : t.type === "keydown" || t.type === "keyup"
          ? D0[t.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Nh,
    charCode: function (t) {
      return t.type === "keypress" ? ia(t) : 0;
    },
    keyCode: function (t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function (t) {
      return t.type === "keypress"
        ? ia(t)
        : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
    },
  }),
  F0 = _t(O0),
  j0 = _e({}, fl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  cp = _t(j0),
  b0 = _e({}, oo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Nh,
  }),
  U0 = _t(b0),
  z0 = _e({}, As, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  B0 = _t(z0),
  $0 = _e({}, fl, {
    deltaX: function (t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function (t) {
      return "deltaY" in t
        ? t.deltaY
        : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
            ? -t.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  G0 = _t($0),
  H0 = [9, 13, 27, 32],
  Vh = cn && "CompositionEvent" in window,
  Ei = null;
cn && "documentMode" in document && (Ei = document.documentMode);
var W0 = cn && "TextEvent" in window && !Ei,
  fy = cn && (!Vh || (Ei && 8 < Ei && 11 >= Ei)),
  hp = " ",
  fp = !1;
function dy(t, e) {
  switch (t) {
    case "keyup":
      return H0.indexOf(e.keyCode) !== -1;
    case "keydown":
      return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function py(t) {
  return ((t = t.detail), typeof t == "object" && "data" in t ? t.data : null);
}
var qr = !1;
function q0(t, e) {
  switch (t) {
    case "compositionend":
      return py(e);
    case "keypress":
      return e.which !== 32 ? null : ((fp = !0), hp);
    case "textInput":
      return ((t = e.data), t === hp && fp ? null : t);
    default:
      return null;
  }
}
function K0(t, e) {
  if (qr)
    return t === "compositionend" || (!Vh && dy(t, e))
      ? ((t = hy()), (sa = Ph = Dn = null), (qr = !1), t)
      : null;
  switch (t) {
    case "paste":
      return null;
    case "keypress":
      if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
        if (e.char && 1 < e.char.length) return e.char;
        if (e.which) return String.fromCharCode(e.which);
      }
      return null;
    case "compositionend":
      return fy && e.locale !== "ko" ? null : e.data;
    default:
      return null;
  }
}
var Q0 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function dp(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e === "input" ? !!Q0[t.type] : e === "textarea";
}
function my(t, e, n, r) {
  (Wg(r),
    (e = Pa(e, "onChange")),
    0 < e.length &&
      ((n = new kh("onChange", "change", null, n, r)),
      t.push({ event: n, listeners: e })));
}
var wi = null,
  Fi = null;
function Y0(t) {
  Ay(t, 0);
}
function dl(t) {
  var e = Yr(t);
  if (bg(e)) return t;
}
function J0(t, e) {
  if (t === "change") return e;
}
var gy = !1;
if (cn) {
  var _u;
  if (cn) {
    var Eu = "oninput" in document;
    if (!Eu) {
      var pp = document.createElement("div");
      (pp.setAttribute("oninput", "return;"),
        (Eu = typeof pp.oninput == "function"));
    }
    _u = Eu;
  } else _u = !1;
  gy = _u && (!document.documentMode || 9 < document.documentMode);
}
function mp() {
  wi && (wi.detachEvent("onpropertychange", yy), (Fi = wi = null));
}
function yy(t) {
  if (t.propertyName === "value" && dl(Fi)) {
    var e = [];
    (my(e, Fi, t, Ih(t)), Yg(Y0, e));
  }
}
function X0(t, e, n) {
  t === "focusin"
    ? (mp(), (wi = e), (Fi = n), wi.attachEvent("onpropertychange", yy))
    : t === "focusout" && mp();
}
function Z0(t) {
  if (t === "selectionchange" || t === "keyup" || t === "keydown")
    return dl(Fi);
}
function eT(t, e) {
  if (t === "click") return dl(e);
}
function tT(t, e) {
  if (t === "input" || t === "change") return dl(e);
}
function nT(t, e) {
  return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var Ut = typeof Object.is == "function" ? Object.is : nT;
function ji(t, e) {
  if (Ut(t, e)) return !0;
  if (typeof t != "object" || t === null || typeof e != "object" || e === null)
    return !1;
  var n = Object.keys(t),
    r = Object.keys(e);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var s = n[r];
    if (!Xu.call(e, s) || !Ut(t[s], e[s])) return !1;
  }
  return !0;
}
function gp(t) {
  for (; t && t.firstChild; ) t = t.firstChild;
  return t;
}
function yp(t, e) {
  var n = gp(t);
  t = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = t + n.textContent.length), t <= e && r >= e))
        return { node: n, offset: e - t };
      t = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = gp(n);
  }
}
function vy(t, e) {
  return t && e
    ? t === e
      ? !0
      : t && t.nodeType === 3
        ? !1
        : e && e.nodeType === 3
          ? vy(t, e.parentNode)
          : "contains" in t
            ? t.contains(e)
            : t.compareDocumentPosition
              ? !!(t.compareDocumentPosition(e) & 16)
              : !1
    : !1;
}
function _y() {
  for (var t = window, e = Ta(); e instanceof t.HTMLIFrameElement; ) {
    try {
      var n = typeof e.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) t = e.contentWindow;
    else break;
    e = Ta(t.document);
  }
  return e;
}
function Dh(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return (
    e &&
    ((e === "input" &&
      (t.type === "text" ||
        t.type === "search" ||
        t.type === "tel" ||
        t.type === "url" ||
        t.type === "password")) ||
      e === "textarea" ||
      t.contentEditable === "true")
  );
}
function rT(t) {
  var e = _y(),
    n = t.focusedElem,
    r = t.selectionRange;
  if (
    e !== n &&
    n &&
    n.ownerDocument &&
    vy(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Dh(n)) {
      if (
        ((e = r.start),
        (t = r.end),
        t === void 0 && (t = e),
        "selectionStart" in n)
      )
        ((n.selectionStart = e),
          (n.selectionEnd = Math.min(t, n.value.length)));
      else if (
        ((t = ((e = n.ownerDocument || document) && e.defaultView) || window),
        t.getSelection)
      ) {
        t = t.getSelection();
        var s = n.textContent.length,
          i = Math.min(r.start, s);
        ((r = r.end === void 0 ? i : Math.min(r.end, s)),
          !t.extend && i > r && ((s = r), (r = i), (i = s)),
          (s = yp(n, i)));
        var o = yp(n, r);
        s &&
          o &&
          (t.rangeCount !== 1 ||
            t.anchorNode !== s.node ||
            t.anchorOffset !== s.offset ||
            t.focusNode !== o.node ||
            t.focusOffset !== o.offset) &&
          ((e = e.createRange()),
          e.setStart(s.node, s.offset),
          t.removeAllRanges(),
          i > r
            ? (t.addRange(e), t.extend(o.node, o.offset))
            : (e.setEnd(o.node, o.offset), t.addRange(e)));
      }
    }
    for (e = [], t = n; (t = t.parentNode); )
      t.nodeType === 1 &&
        e.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < e.length; n++)
      ((t = e[n]),
        (t.element.scrollLeft = t.left),
        (t.element.scrollTop = t.top));
  }
}
var sT = cn && "documentMode" in document && 11 >= document.documentMode,
  Kr = null,
  yc = null,
  Ti = null,
  vc = !1;
function vp(t, e, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  vc ||
    Kr == null ||
    Kr !== Ta(r) ||
    ((r = Kr),
    "selectionStart" in r && Dh(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Ti && ji(Ti, r)) ||
      ((Ti = r),
      (r = Pa(yc, "onSelect")),
      0 < r.length &&
        ((e = new kh("onSelect", "select", null, e, n)),
        t.push({ event: e, listeners: r }),
        (e.target = Kr))));
}
function bo(t, e) {
  var n = {};
  return (
    (n[t.toLowerCase()] = e.toLowerCase()),
    (n["Webkit" + t] = "webkit" + e),
    (n["Moz" + t] = "moz" + e),
    n
  );
}
var Qr = {
    animationend: bo("Animation", "AnimationEnd"),
    animationiteration: bo("Animation", "AnimationIteration"),
    animationstart: bo("Animation", "AnimationStart"),
    transitionend: bo("Transition", "TransitionEnd"),
  },
  wu = {},
  Ey = {};
cn &&
  ((Ey = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Qr.animationend.animation,
    delete Qr.animationiteration.animation,
    delete Qr.animationstart.animation),
  "TransitionEvent" in window || delete Qr.transitionend.transition);
function pl(t) {
  if (wu[t]) return wu[t];
  if (!Qr[t]) return t;
  var e = Qr[t],
    n;
  for (n in e) if (e.hasOwnProperty(n) && n in Ey) return (wu[t] = e[n]);
  return t;
}
var wy = pl("animationend"),
  Ty = pl("animationiteration"),
  Sy = pl("animationstart"),
  Iy = pl("transitionend"),
  Ry = new Map(),
  _p =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function rr(t, e) {
  (Ry.set(t, e), Nr(e, [t]));
}
for (var Tu = 0; Tu < _p.length; Tu++) {
  var Su = _p[Tu],
    iT = Su.toLowerCase(),
    oT = Su[0].toUpperCase() + Su.slice(1);
  rr(iT, "on" + oT);
}
rr(wy, "onAnimationEnd");
rr(Ty, "onAnimationIteration");
rr(Sy, "onAnimationStart");
rr("dblclick", "onDoubleClick");
rr("focusin", "onFocus");
rr("focusout", "onBlur");
rr(Iy, "onTransitionEnd");
ds("onMouseEnter", ["mouseout", "mouseover"]);
ds("onMouseLeave", ["mouseout", "mouseover"]);
ds("onPointerEnter", ["pointerout", "pointerover"]);
ds("onPointerLeave", ["pointerout", "pointerover"]);
Nr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Nr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Nr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Nr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Nr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Nr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var fi =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  aT = new Set("cancel close invalid load scroll toggle".split(" ").concat(fi));
function Ep(t, e, n) {
  var r = t.type || "unknown-event";
  ((t.currentTarget = n), i0(r, e, void 0, t), (t.currentTarget = null));
}
function Ay(t, e) {
  e = (e & 4) !== 0;
  for (var n = 0; n < t.length; n++) {
    var r = t[n],
      s = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (e)
        for (var o = r.length - 1; 0 <= o; o--) {
          var l = r[o],
            u = l.instance,
            h = l.currentTarget;
          if (((l = l.listener), u !== i && s.isPropagationStopped())) break e;
          (Ep(s, l, h), (i = u));
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((l = r[o]),
            (u = l.instance),
            (h = l.currentTarget),
            (l = l.listener),
            u !== i && s.isPropagationStopped())
          )
            break e;
          (Ep(s, l, h), (i = u));
        }
    }
  }
  if (Ia) throw ((t = dc), (Ia = !1), (dc = null), t);
}
function he(t, e) {
  var n = e[Sc];
  n === void 0 && (n = e[Sc] = new Set());
  var r = t + "__bubble";
  n.has(r) || (Cy(e, t, 2, !1), n.add(r));
}
function Iu(t, e, n) {
  var r = 0;
  (e && (r |= 4), Cy(n, t, r, e));
}
var Uo = "_reactListening" + Math.random().toString(36).slice(2);
function bi(t) {
  if (!t[Uo]) {
    ((t[Uo] = !0),
      Lg.forEach(function (n) {
        n !== "selectionchange" && (aT.has(n) || Iu(n, !1, t), Iu(n, !0, t));
      }));
    var e = t.nodeType === 9 ? t : t.ownerDocument;
    e === null || e[Uo] || ((e[Uo] = !0), Iu("selectionchange", !1, e));
  }
}
function Cy(t, e, n, r) {
  switch (cy(e)) {
    case 1:
      var s = w0;
      break;
    case 4:
      s = T0;
      break;
    default:
      s = xh;
  }
  ((n = s.bind(null, e, n, t)),
    (s = void 0),
    !fc ||
      (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
      (s = !0),
    r
      ? s !== void 0
        ? t.addEventListener(e, n, { capture: !0, passive: s })
        : t.addEventListener(e, n, !0)
      : s !== void 0
        ? t.addEventListener(e, n, { passive: s })
        : t.addEventListener(e, n, !1));
}
function Ru(t, e, n, r, s) {
  var i = r;
  if (!(e & 1) && !(e & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var l = r.stateNode.containerInfo;
        if (l === s || (l.nodeType === 8 && l.parentNode === s)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var u = o.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = o.stateNode.containerInfo),
              u === s || (u.nodeType === 8 && u.parentNode === s))
            )
              return;
            o = o.return;
          }
        for (; l !== null; ) {
          if (((o = gr(l)), o === null)) return;
          if (((u = o.tag), u === 5 || u === 6)) {
            r = i = o;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Yg(function () {
    var h = i,
      d = Ih(n),
      p = [];
    e: {
      var m = Ry.get(t);
      if (m !== void 0) {
        var T = kh,
          x = t;
        switch (t) {
          case "keypress":
            if (ia(n) === 0) break e;
          case "keydown":
          case "keyup":
            T = F0;
            break;
          case "focusin":
            ((x = "focus"), (T = vu));
            break;
          case "focusout":
            ((x = "blur"), (T = vu));
            break;
          case "beforeblur":
          case "afterblur":
            T = vu;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            T = lp;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            T = R0;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            T = U0;
            break;
          case wy:
          case Ty:
          case Sy:
            T = x0;
            break;
          case Iy:
            T = B0;
            break;
          case "scroll":
            T = S0;
            break;
          case "wheel":
            T = G0;
            break;
          case "copy":
          case "cut":
          case "paste":
            T = k0;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            T = cp;
        }
        var P = (e & 4) !== 0,
          D = !P && t === "scroll",
          _ = P ? (m !== null ? m + "Capture" : null) : m;
        P = [];
        for (var v = h, R; v !== null; ) {
          R = v;
          var M = R.stateNode;
          if (
            (R.tag === 5 &&
              M !== null &&
              ((R = M),
              _ !== null && ((M = Di(v, _)), M != null && P.push(Ui(v, M, R)))),
            D)
          )
            break;
          v = v.return;
        }
        0 < P.length &&
          ((m = new T(m, x, null, n, d)), p.push({ event: m, listeners: P }));
      }
    }
    if (!(e & 7)) {
      e: {
        if (
          ((m = t === "mouseover" || t === "pointerover"),
          (T = t === "mouseout" || t === "pointerout"),
          m &&
            n !== cc &&
            (x = n.relatedTarget || n.fromElement) &&
            (gr(x) || x[hn]))
        )
          break e;
        if (
          (T || m) &&
          ((m =
            d.window === d
              ? d
              : (m = d.ownerDocument)
                ? m.defaultView || m.parentWindow
                : window),
          T
            ? ((x = n.relatedTarget || n.toElement),
              (T = h),
              (x = x ? gr(x) : null),
              x !== null &&
                ((D = Vr(x)), x !== D || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((T = null), (x = h)),
          T !== x)
        ) {
          if (
            ((P = lp),
            (M = "onMouseLeave"),
            (_ = "onMouseEnter"),
            (v = "mouse"),
            (t === "pointerout" || t === "pointerover") &&
              ((P = cp),
              (M = "onPointerLeave"),
              (_ = "onPointerEnter"),
              (v = "pointer")),
            (D = T == null ? m : Yr(T)),
            (R = x == null ? m : Yr(x)),
            (m = new P(M, v + "leave", T, n, d)),
            (m.target = D),
            (m.relatedTarget = R),
            (M = null),
            gr(d) === h &&
              ((P = new P(_, v + "enter", x, n, d)),
              (P.target = R),
              (P.relatedTarget = D),
              (M = P)),
            (D = M),
            T && x)
          )
            t: {
              for (P = T, _ = x, v = 0, R = P; R; R = Ur(R)) v++;
              for (R = 0, M = _; M; M = Ur(M)) R++;
              for (; 0 < v - R; ) ((P = Ur(P)), v--);
              for (; 0 < R - v; ) ((_ = Ur(_)), R--);
              for (; v--; ) {
                if (P === _ || (_ !== null && P === _.alternate)) break t;
                ((P = Ur(P)), (_ = Ur(_)));
              }
              P = null;
            }
          else P = null;
          (T !== null && wp(p, m, T, P, !1),
            x !== null && D !== null && wp(p, D, x, P, !0));
        }
      }
      e: {
        if (
          ((m = h ? Yr(h) : window),
          (T = m.nodeName && m.nodeName.toLowerCase()),
          T === "select" || (T === "input" && m.type === "file"))
        )
          var j = J0;
        else if (dp(m))
          if (gy) j = tT;
          else {
            j = Z0;
            var U = X0;
          }
        else
          (T = m.nodeName) &&
            T.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (j = eT);
        if (j && (j = j(t, h))) {
          my(p, j, n, d);
          break e;
        }
        (U && U(t, m, h),
          t === "focusout" &&
            (U = m._wrapperState) &&
            U.controlled &&
            m.type === "number" &&
            ic(m, "number", m.value));
      }
      switch (((U = h ? Yr(h) : window), t)) {
        case "focusin":
          (dp(U) || U.contentEditable === "true") &&
            ((Kr = U), (yc = h), (Ti = null));
          break;
        case "focusout":
          Ti = yc = Kr = null;
          break;
        case "mousedown":
          vc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((vc = !1), vp(p, n, d));
          break;
        case "selectionchange":
          if (sT) break;
        case "keydown":
        case "keyup":
          vp(p, n, d);
      }
      var E;
      if (Vh)
        e: {
          switch (t) {
            case "compositionstart":
              var y = "onCompositionStart";
              break e;
            case "compositionend":
              y = "onCompositionEnd";
              break e;
            case "compositionupdate":
              y = "onCompositionUpdate";
              break e;
          }
          y = void 0;
        }
      else
        qr
          ? dy(t, n) && (y = "onCompositionEnd")
          : t === "keydown" && n.keyCode === 229 && (y = "onCompositionStart");
      (y &&
        (fy &&
          n.locale !== "ko" &&
          (qr || y !== "onCompositionStart"
            ? y === "onCompositionEnd" && qr && (E = hy())
            : ((Dn = d),
              (Ph = "value" in Dn ? Dn.value : Dn.textContent),
              (qr = !0))),
        (U = Pa(h, y)),
        0 < U.length &&
          ((y = new up(y, t, null, n, d)),
          p.push({ event: y, listeners: U }),
          E ? (y.data = E) : ((E = py(n)), E !== null && (y.data = E)))),
        (E = W0 ? q0(t, n) : K0(t, n)) &&
          ((h = Pa(h, "onBeforeInput")),
          0 < h.length &&
            ((d = new up("onBeforeInput", "beforeinput", null, n, d)),
            p.push({ event: d, listeners: h }),
            (d.data = E))));
    }
    Ay(p, e);
  });
}
function Ui(t, e, n) {
  return { instance: t, listener: e, currentTarget: n };
}
function Pa(t, e) {
  for (var n = e + "Capture", r = []; t !== null; ) {
    var s = t,
      i = s.stateNode;
    (s.tag === 5 &&
      i !== null &&
      ((s = i),
      (i = Di(t, n)),
      i != null && r.unshift(Ui(t, i, s)),
      (i = Di(t, e)),
      i != null && r.push(Ui(t, i, s))),
      (t = t.return));
  }
  return r;
}
function Ur(t) {
  if (t === null) return null;
  do t = t.return;
  while (t && t.tag !== 5);
  return t || null;
}
function wp(t, e, n, r, s) {
  for (var i = e._reactName, o = []; n !== null && n !== r; ) {
    var l = n,
      u = l.alternate,
      h = l.stateNode;
    if (u !== null && u === r) break;
    (l.tag === 5 &&
      h !== null &&
      ((l = h),
      s
        ? ((u = Di(n, i)), u != null && o.unshift(Ui(n, u, l)))
        : s || ((u = Di(n, i)), u != null && o.push(Ui(n, u, l)))),
      (n = n.return));
  }
  o.length !== 0 && t.push({ event: e, listeners: o });
}
var lT = /\r\n?/g,
  uT = /\u0000|\uFFFD/g;
function Tp(t) {
  return (typeof t == "string" ? t : "" + t)
    .replace(
      lT,
      `
`,
    )
    .replace(uT, "");
}
function zo(t, e, n) {
  if (((e = Tp(e)), Tp(t) !== e && n)) throw Error(b(425));
}
function ka() {}
var _c = null,
  Ec = null;
function wc(t, e) {
  return (
    t === "textarea" ||
    t === "noscript" ||
    typeof e.children == "string" ||
    typeof e.children == "number" ||
    (typeof e.dangerouslySetInnerHTML == "object" &&
      e.dangerouslySetInnerHTML !== null &&
      e.dangerouslySetInnerHTML.__html != null)
  );
}
var Tc = typeof setTimeout == "function" ? setTimeout : void 0,
  cT = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Sp = typeof Promise == "function" ? Promise : void 0,
  hT =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Sp < "u"
        ? function (t) {
            return Sp.resolve(null).then(t).catch(fT);
          }
        : Tc;
function fT(t) {
  setTimeout(function () {
    throw t;
  });
}
function Au(t, e) {
  var n = e,
    r = 0;
  do {
    var s = n.nextSibling;
    if ((t.removeChild(n), s && s.nodeType === 8))
      if (((n = s.data), n === "/$")) {
        if (r === 0) {
          (t.removeChild(s), Oi(e));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = s;
  } while (n);
  Oi(e);
}
function bn(t) {
  for (; t != null; t = t.nextSibling) {
    var e = t.nodeType;
    if (e === 1 || e === 3) break;
    if (e === 8) {
      if (((e = t.data), e === "$" || e === "$!" || e === "$?")) break;
      if (e === "/$") return null;
    }
  }
  return t;
}
function Ip(t) {
  t = t.previousSibling;
  for (var e = 0; t; ) {
    if (t.nodeType === 8) {
      var n = t.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (e === 0) return t;
        e--;
      } else n === "/$" && e++;
    }
    t = t.previousSibling;
  }
  return null;
}
var Cs = Math.random().toString(36).slice(2),
  Wt = "__reactFiber$" + Cs,
  zi = "__reactProps$" + Cs,
  hn = "__reactContainer$" + Cs,
  Sc = "__reactEvents$" + Cs,
  dT = "__reactListeners$" + Cs,
  pT = "__reactHandles$" + Cs;
function gr(t) {
  var e = t[Wt];
  if (e) return e;
  for (var n = t.parentNode; n; ) {
    if ((e = n[hn] || n[Wt])) {
      if (
        ((n = e.alternate),
        e.child !== null || (n !== null && n.child !== null))
      )
        for (t = Ip(t); t !== null; ) {
          if ((n = t[Wt])) return n;
          t = Ip(t);
        }
      return e;
    }
    ((t = n), (n = t.parentNode));
  }
  return null;
}
function ao(t) {
  return (
    (t = t[Wt] || t[hn]),
    !t || (t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3) ? null : t
  );
}
function Yr(t) {
  if (t.tag === 5 || t.tag === 6) return t.stateNode;
  throw Error(b(33));
}
function ml(t) {
  return t[zi] || null;
}
var Ic = [],
  Jr = -1;
function sr(t) {
  return { current: t };
}
function de(t) {
  0 > Jr || ((t.current = Ic[Jr]), (Ic[Jr] = null), Jr--);
}
function ue(t, e) {
  (Jr++, (Ic[Jr] = t.current), (t.current = e));
}
var Qn = {},
  et = sr(Qn),
  ct = sr(!1),
  Sr = Qn;
function ps(t, e) {
  var n = t.type.contextTypes;
  if (!n) return Qn;
  var r = t.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === e)
    return r.__reactInternalMemoizedMaskedChildContext;
  var s = {},
    i;
  for (i in n) s[i] = e[i];
  return (
    r &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = e),
      (t.__reactInternalMemoizedMaskedChildContext = s)),
    s
  );
}
function ht(t) {
  return ((t = t.childContextTypes), t != null);
}
function Na() {
  (de(ct), de(et));
}
function Rp(t, e, n) {
  if (et.current !== Qn) throw Error(b(168));
  (ue(et, e), ue(ct, n));
}
function xy(t, e, n) {
  var r = t.stateNode;
  if (((e = e.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var s in r) if (!(s in e)) throw Error(b(108, Xw(t) || "Unknown", s));
  return _e({}, n, r);
}
function Va(t) {
  return (
    (t =
      ((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) || Qn),
    (Sr = et.current),
    ue(et, t),
    ue(ct, ct.current),
    !0
  );
}
function Ap(t, e, n) {
  var r = t.stateNode;
  if (!r) throw Error(b(169));
  (n
    ? ((t = xy(t, e, Sr)),
      (r.__reactInternalMemoizedMergedChildContext = t),
      de(ct),
      de(et),
      ue(et, t))
    : de(ct),
    ue(ct, n));
}
var sn = null,
  gl = !1,
  Cu = !1;
function Py(t) {
  sn === null ? (sn = [t]) : sn.push(t);
}
function mT(t) {
  ((gl = !0), Py(t));
}
function ir() {
  if (!Cu && sn !== null) {
    Cu = !0;
    var t = 0,
      e = oe;
    try {
      var n = sn;
      for (oe = 1; t < n.length; t++) {
        var r = n[t];
        do r = r(!0);
        while (r !== null);
      }
      ((sn = null), (gl = !1));
    } catch (s) {
      throw (sn !== null && (sn = sn.slice(t + 1)), ey(Rh, ir), s);
    } finally {
      ((oe = e), (Cu = !1));
    }
  }
  return null;
}
var Xr = [],
  Zr = 0,
  Da = null,
  La = 0,
  wt = [],
  Tt = 0,
  Ir = null,
  on = 1,
  an = "";
function dr(t, e) {
  ((Xr[Zr++] = La), (Xr[Zr++] = Da), (Da = t), (La = e));
}
function ky(t, e, n) {
  ((wt[Tt++] = on), (wt[Tt++] = an), (wt[Tt++] = Ir), (Ir = t));
  var r = on;
  t = an;
  var s = 32 - Ot(r) - 1;
  ((r &= ~(1 << s)), (n += 1));
  var i = 32 - Ot(e) + s;
  if (30 < i) {
    var o = s - (s % 5);
    ((i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (s -= o),
      (on = (1 << (32 - Ot(e) + s)) | (n << s) | r),
      (an = i + t));
  } else ((on = (1 << i) | (n << s) | r), (an = t));
}
function Lh(t) {
  t.return !== null && (dr(t, 1), ky(t, 1, 0));
}
function Mh(t) {
  for (; t === Da; )
    ((Da = Xr[--Zr]), (Xr[Zr] = null), (La = Xr[--Zr]), (Xr[Zr] = null));
  for (; t === Ir; )
    ((Ir = wt[--Tt]),
      (wt[Tt] = null),
      (an = wt[--Tt]),
      (wt[Tt] = null),
      (on = wt[--Tt]),
      (wt[Tt] = null));
}
var gt = null,
  mt = null,
  me = !1,
  Lt = null;
function Ny(t, e) {
  var n = Rt(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = e),
    (n.return = t),
    (e = t.deletions),
    e === null ? ((t.deletions = [n]), (t.flags |= 16)) : e.push(n));
}
function Cp(t, e) {
  switch (t.tag) {
    case 5:
      var n = t.type;
      return (
        (e =
          e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase()
            ? null
            : e),
        e !== null
          ? ((t.stateNode = e), (gt = t), (mt = bn(e.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (e = t.pendingProps === "" || e.nodeType !== 3 ? null : e),
        e !== null ? ((t.stateNode = e), (gt = t), (mt = null), !0) : !1
      );
    case 13:
      return (
        (e = e.nodeType !== 8 ? null : e),
        e !== null
          ? ((n = Ir !== null ? { id: on, overflow: an } : null),
            (t.memoizedState = {
              dehydrated: e,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Rt(18, null, null, 0)),
            (n.stateNode = e),
            (n.return = t),
            (t.child = n),
            (gt = t),
            (mt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Rc(t) {
  return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
}
function Ac(t) {
  if (me) {
    var e = mt;
    if (e) {
      var n = e;
      if (!Cp(t, e)) {
        if (Rc(t)) throw Error(b(418));
        e = bn(n.nextSibling);
        var r = gt;
        e && Cp(t, e)
          ? Ny(r, n)
          : ((t.flags = (t.flags & -4097) | 2), (me = !1), (gt = t));
      }
    } else {
      if (Rc(t)) throw Error(b(418));
      ((t.flags = (t.flags & -4097) | 2), (me = !1), (gt = t));
    }
  }
}
function xp(t) {
  for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
    t = t.return;
  gt = t;
}
function Bo(t) {
  if (t !== gt) return !1;
  if (!me) return (xp(t), (me = !0), !1);
  var e;
  if (
    ((e = t.tag !== 3) &&
      !(e = t.tag !== 5) &&
      ((e = t.type),
      (e = e !== "head" && e !== "body" && !wc(t.type, t.memoizedProps))),
    e && (e = mt))
  ) {
    if (Rc(t)) throw (Vy(), Error(b(418)));
    for (; e; ) (Ny(t, e), (e = bn(e.nextSibling)));
  }
  if ((xp(t), t.tag === 13)) {
    if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
      throw Error(b(317));
    e: {
      for (t = t.nextSibling, e = 0; t; ) {
        if (t.nodeType === 8) {
          var n = t.data;
          if (n === "/$") {
            if (e === 0) {
              mt = bn(t.nextSibling);
              break e;
            }
            e--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || e++;
        }
        t = t.nextSibling;
      }
      mt = null;
    }
  } else mt = gt ? bn(t.stateNode.nextSibling) : null;
  return !0;
}
function Vy() {
  for (var t = mt; t; ) t = bn(t.nextSibling);
}
function ms() {
  ((mt = gt = null), (me = !1));
}
function Oh(t) {
  Lt === null ? (Lt = [t]) : Lt.push(t);
}
var gT = vn.ReactCurrentBatchConfig;
function si(t, e, n) {
  if (
    ((t = n.ref), t !== null && typeof t != "function" && typeof t != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(b(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(b(147, t));
      var s = r,
        i = "" + t;
      return e !== null &&
        e.ref !== null &&
        typeof e.ref == "function" &&
        e.ref._stringRef === i
        ? e.ref
        : ((e = function (o) {
            var l = s.refs;
            o === null ? delete l[i] : (l[i] = o);
          }),
          (e._stringRef = i),
          e);
    }
    if (typeof t != "string") throw Error(b(284));
    if (!n._owner) throw Error(b(290, t));
  }
  return t;
}
function $o(t, e) {
  throw (
    (t = Object.prototype.toString.call(e)),
    Error(
      b(
        31,
        t === "[object Object]"
          ? "object with keys {" + Object.keys(e).join(", ") + "}"
          : t,
      ),
    )
  );
}
function Pp(t) {
  var e = t._init;
  return e(t._payload);
}
function Dy(t) {
  function e(_, v) {
    if (t) {
      var R = _.deletions;
      R === null ? ((_.deletions = [v]), (_.flags |= 16)) : R.push(v);
    }
  }
  function n(_, v) {
    if (!t) return null;
    for (; v !== null; ) (e(_, v), (v = v.sibling));
    return null;
  }
  function r(_, v) {
    for (_ = new Map(); v !== null; )
      (v.key !== null ? _.set(v.key, v) : _.set(v.index, v), (v = v.sibling));
    return _;
  }
  function s(_, v) {
    return ((_ = $n(_, v)), (_.index = 0), (_.sibling = null), _);
  }
  function i(_, v, R) {
    return (
      (_.index = R),
      t
        ? ((R = _.alternate),
          R !== null
            ? ((R = R.index), R < v ? ((_.flags |= 2), v) : R)
            : ((_.flags |= 2), v))
        : ((_.flags |= 1048576), v)
    );
  }
  function o(_) {
    return (t && _.alternate === null && (_.flags |= 2), _);
  }
  function l(_, v, R, M) {
    return v === null || v.tag !== 6
      ? ((v = Lu(R, _.mode, M)), (v.return = _), v)
      : ((v = s(v, R)), (v.return = _), v);
  }
  function u(_, v, R, M) {
    var j = R.type;
    return j === Wr
      ? d(_, v, R.props.children, M, R.key)
      : v !== null &&
          (v.elementType === j ||
            (typeof j == "object" &&
              j !== null &&
              j.$$typeof === xn &&
              Pp(j) === v.type))
        ? ((M = s(v, R.props)), (M.ref = si(_, v, R)), (M.return = _), M)
        : ((M = fa(R.type, R.key, R.props, null, _.mode, M)),
          (M.ref = si(_, v, R)),
          (M.return = _),
          M);
  }
  function h(_, v, R, M) {
    return v === null ||
      v.tag !== 4 ||
      v.stateNode.containerInfo !== R.containerInfo ||
      v.stateNode.implementation !== R.implementation
      ? ((v = Mu(R, _.mode, M)), (v.return = _), v)
      : ((v = s(v, R.children || [])), (v.return = _), v);
  }
  function d(_, v, R, M, j) {
    return v === null || v.tag !== 7
      ? ((v = wr(R, _.mode, M, j)), (v.return = _), v)
      : ((v = s(v, R)), (v.return = _), v);
  }
  function p(_, v, R) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return ((v = Lu("" + v, _.mode, R)), (v.return = _), v);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Vo:
          return (
            (R = fa(v.type, v.key, v.props, null, _.mode, R)),
            (R.ref = si(_, null, v)),
            (R.return = _),
            R
          );
        case Hr:
          return ((v = Mu(v, _.mode, R)), (v.return = _), v);
        case xn:
          var M = v._init;
          return p(_, M(v._payload), R);
      }
      if (ci(v) || Zs(v))
        return ((v = wr(v, _.mode, R, null)), (v.return = _), v);
      $o(_, v);
    }
    return null;
  }
  function m(_, v, R, M) {
    var j = v !== null ? v.key : null;
    if ((typeof R == "string" && R !== "") || typeof R == "number")
      return j !== null ? null : l(_, v, "" + R, M);
    if (typeof R == "object" && R !== null) {
      switch (R.$$typeof) {
        case Vo:
          return R.key === j ? u(_, v, R, M) : null;
        case Hr:
          return R.key === j ? h(_, v, R, M) : null;
        case xn:
          return ((j = R._init), m(_, v, j(R._payload), M));
      }
      if (ci(R) || Zs(R)) return j !== null ? null : d(_, v, R, M, null);
      $o(_, R);
    }
    return null;
  }
  function T(_, v, R, M, j) {
    if ((typeof M == "string" && M !== "") || typeof M == "number")
      return ((_ = _.get(R) || null), l(v, _, "" + M, j));
    if (typeof M == "object" && M !== null) {
      switch (M.$$typeof) {
        case Vo:
          return (
            (_ = _.get(M.key === null ? R : M.key) || null),
            u(v, _, M, j)
          );
        case Hr:
          return (
            (_ = _.get(M.key === null ? R : M.key) || null),
            h(v, _, M, j)
          );
        case xn:
          var U = M._init;
          return T(_, v, R, U(M._payload), j);
      }
      if (ci(M) || Zs(M)) return ((_ = _.get(R) || null), d(v, _, M, j, null));
      $o(v, M);
    }
    return null;
  }
  function x(_, v, R, M) {
    for (
      var j = null, U = null, E = v, y = (v = 0), w = null;
      E !== null && y < R.length;
      y++
    ) {
      E.index > y ? ((w = E), (E = null)) : (w = E.sibling);
      var A = m(_, E, R[y], M);
      if (A === null) {
        E === null && (E = w);
        break;
      }
      (t && E && A.alternate === null && e(_, E),
        (v = i(A, v, y)),
        U === null ? (j = A) : (U.sibling = A),
        (U = A),
        (E = w));
    }
    if (y === R.length) return (n(_, E), me && dr(_, y), j);
    if (E === null) {
      for (; y < R.length; y++)
        ((E = p(_, R[y], M)),
          E !== null &&
            ((v = i(E, v, y)),
            U === null ? (j = E) : (U.sibling = E),
            (U = E)));
      return (me && dr(_, y), j);
    }
    for (E = r(_, E); y < R.length; y++)
      ((w = T(E, _, y, R[y], M)),
        w !== null &&
          (t && w.alternate !== null && E.delete(w.key === null ? y : w.key),
          (v = i(w, v, y)),
          U === null ? (j = w) : (U.sibling = w),
          (U = w)));
    return (
      t &&
        E.forEach(function (C) {
          return e(_, C);
        }),
      me && dr(_, y),
      j
    );
  }
  function P(_, v, R, M) {
    var j = Zs(R);
    if (typeof j != "function") throw Error(b(150));
    if (((R = j.call(R)), R == null)) throw Error(b(151));
    for (
      var U = (j = null), E = v, y = (v = 0), w = null, A = R.next();
      E !== null && !A.done;
      y++, A = R.next()
    ) {
      E.index > y ? ((w = E), (E = null)) : (w = E.sibling);
      var C = m(_, E, A.value, M);
      if (C === null) {
        E === null && (E = w);
        break;
      }
      (t && E && C.alternate === null && e(_, E),
        (v = i(C, v, y)),
        U === null ? (j = C) : (U.sibling = C),
        (U = C),
        (E = w));
    }
    if (A.done) return (n(_, E), me && dr(_, y), j);
    if (E === null) {
      for (; !A.done; y++, A = R.next())
        ((A = p(_, A.value, M)),
          A !== null &&
            ((v = i(A, v, y)),
            U === null ? (j = A) : (U.sibling = A),
            (U = A)));
      return (me && dr(_, y), j);
    }
    for (E = r(_, E); !A.done; y++, A = R.next())
      ((A = T(E, _, y, A.value, M)),
        A !== null &&
          (t && A.alternate !== null && E.delete(A.key === null ? y : A.key),
          (v = i(A, v, y)),
          U === null ? (j = A) : (U.sibling = A),
          (U = A)));
    return (
      t &&
        E.forEach(function (k) {
          return e(_, k);
        }),
      me && dr(_, y),
      j
    );
  }
  function D(_, v, R, M) {
    if (
      (typeof R == "object" &&
        R !== null &&
        R.type === Wr &&
        R.key === null &&
        (R = R.props.children),
      typeof R == "object" && R !== null)
    ) {
      switch (R.$$typeof) {
        case Vo:
          e: {
            for (var j = R.key, U = v; U !== null; ) {
              if (U.key === j) {
                if (((j = R.type), j === Wr)) {
                  if (U.tag === 7) {
                    (n(_, U.sibling),
                      (v = s(U, R.props.children)),
                      (v.return = _),
                      (_ = v));
                    break e;
                  }
                } else if (
                  U.elementType === j ||
                  (typeof j == "object" &&
                    j !== null &&
                    j.$$typeof === xn &&
                    Pp(j) === U.type)
                ) {
                  (n(_, U.sibling),
                    (v = s(U, R.props)),
                    (v.ref = si(_, U, R)),
                    (v.return = _),
                    (_ = v));
                  break e;
                }
                n(_, U);
                break;
              } else e(_, U);
              U = U.sibling;
            }
            R.type === Wr
              ? ((v = wr(R.props.children, _.mode, M, R.key)),
                (v.return = _),
                (_ = v))
              : ((M = fa(R.type, R.key, R.props, null, _.mode, M)),
                (M.ref = si(_, v, R)),
                (M.return = _),
                (_ = M));
          }
          return o(_);
        case Hr:
          e: {
            for (U = R.key; v !== null; ) {
              if (v.key === U)
                if (
                  v.tag === 4 &&
                  v.stateNode.containerInfo === R.containerInfo &&
                  v.stateNode.implementation === R.implementation
                ) {
                  (n(_, v.sibling),
                    (v = s(v, R.children || [])),
                    (v.return = _),
                    (_ = v));
                  break e;
                } else {
                  n(_, v);
                  break;
                }
              else e(_, v);
              v = v.sibling;
            }
            ((v = Mu(R, _.mode, M)), (v.return = _), (_ = v));
          }
          return o(_);
        case xn:
          return ((U = R._init), D(_, v, U(R._payload), M));
      }
      if (ci(R)) return x(_, v, R, M);
      if (Zs(R)) return P(_, v, R, M);
      $o(_, R);
    }
    return (typeof R == "string" && R !== "") || typeof R == "number"
      ? ((R = "" + R),
        v !== null && v.tag === 6
          ? (n(_, v.sibling), (v = s(v, R)), (v.return = _), (_ = v))
          : (n(_, v), (v = Lu(R, _.mode, M)), (v.return = _), (_ = v)),
        o(_))
      : n(_, v);
  }
  return D;
}
var gs = Dy(!0),
  Ly = Dy(!1),
  Ma = sr(null),
  Oa = null,
  es = null,
  Fh = null;
function jh() {
  Fh = es = Oa = null;
}
function bh(t) {
  var e = Ma.current;
  (de(Ma), (t._currentValue = e));
}
function Cc(t, e, n) {
  for (; t !== null; ) {
    var r = t.alternate;
    if (
      ((t.childLanes & e) !== e
        ? ((t.childLanes |= e), r !== null && (r.childLanes |= e))
        : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e),
      t === n)
    )
      break;
    t = t.return;
  }
}
function as(t, e) {
  ((Oa = t),
    (Fh = es = null),
    (t = t.dependencies),
    t !== null &&
      t.firstContext !== null &&
      (t.lanes & e && (ut = !0), (t.firstContext = null)));
}
function Ct(t) {
  var e = t._currentValue;
  if (Fh !== t)
    if (((t = { context: t, memoizedValue: e, next: null }), es === null)) {
      if (Oa === null) throw Error(b(308));
      ((es = t), (Oa.dependencies = { lanes: 0, firstContext: t }));
    } else es = es.next = t;
  return e;
}
var yr = null;
function Uh(t) {
  yr === null ? (yr = [t]) : yr.push(t);
}
function My(t, e, n, r) {
  var s = e.interleaved;
  return (
    s === null ? ((n.next = n), Uh(e)) : ((n.next = s.next), (s.next = n)),
    (e.interleaved = n),
    fn(t, r)
  );
}
function fn(t, e) {
  t.lanes |= e;
  var n = t.alternate;
  for (n !== null && (n.lanes |= e), n = t, t = t.return; t !== null; )
    ((t.childLanes |= e),
      (n = t.alternate),
      n !== null && (n.childLanes |= e),
      (n = t),
      (t = t.return));
  return n.tag === 3 ? n.stateNode : null;
}
var Pn = !1;
function zh(t) {
  t.updateQueue = {
    baseState: t.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Oy(t, e) {
  ((t = t.updateQueue),
    e.updateQueue === t &&
      (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        effects: t.effects,
      }));
}
function ln(t, e) {
  return {
    eventTime: t,
    lane: e,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Un(t, e, n) {
  var r = t.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), se & 2)) {
    var s = r.pending;
    return (
      s === null ? (e.next = e) : ((e.next = s.next), (s.next = e)),
      (r.pending = e),
      fn(t, n)
    );
  }
  return (
    (s = r.interleaved),
    s === null ? ((e.next = e), Uh(r)) : ((e.next = s.next), (s.next = e)),
    (r.interleaved = e),
    fn(t, n)
  );
}
function oa(t, e, n) {
  if (
    ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194240) !== 0))
  ) {
    var r = e.lanes;
    ((r &= t.pendingLanes), (n |= r), (e.lanes = n), Ah(t, n));
  }
}
function kp(t, e) {
  var n = t.updateQueue,
    r = t.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var s = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (i === null ? (s = i = o) : (i = i.next = o), (n = n.next));
      } while (n !== null);
      i === null ? (s = i = e) : (i = i.next = e);
    } else s = i = e;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: s,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (t.updateQueue = n));
    return;
  }
  ((t = n.lastBaseUpdate),
    t === null ? (n.firstBaseUpdate = e) : (t.next = e),
    (n.lastBaseUpdate = e));
}
function Fa(t, e, n, r) {
  var s = t.updateQueue;
  Pn = !1;
  var i = s.firstBaseUpdate,
    o = s.lastBaseUpdate,
    l = s.shared.pending;
  if (l !== null) {
    s.shared.pending = null;
    var u = l,
      h = u.next;
    ((u.next = null), o === null ? (i = h) : (o.next = h), (o = u));
    var d = t.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (l = d.lastBaseUpdate),
      l !== o &&
        (l === null ? (d.firstBaseUpdate = h) : (l.next = h),
        (d.lastBaseUpdate = u)));
  }
  if (i !== null) {
    var p = s.baseState;
    ((o = 0), (d = h = u = null), (l = i));
    do {
      var m = l.lane,
        T = l.eventTime;
      if ((r & m) === m) {
        d !== null &&
          (d = d.next =
            {
              eventTime: T,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var x = t,
            P = l;
          switch (((m = e), (T = n), P.tag)) {
            case 1:
              if (((x = P.payload), typeof x == "function")) {
                p = x.call(T, p, m);
                break e;
              }
              p = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = P.payload),
                (m = typeof x == "function" ? x.call(T, p, m) : x),
                m == null)
              )
                break e;
              p = _e({}, p, m);
              break e;
            case 2:
              Pn = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((t.flags |= 64),
          (m = s.effects),
          m === null ? (s.effects = [l]) : m.push(l));
      } else
        ((T = {
          eventTime: T,
          lane: m,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          d === null ? ((h = d = T), (u = p)) : (d = d.next = T),
          (o |= m));
      if (((l = l.next), l === null)) {
        if (((l = s.shared.pending), l === null)) break;
        ((m = l),
          (l = m.next),
          (m.next = null),
          (s.lastBaseUpdate = m),
          (s.shared.pending = null));
      }
    } while (!0);
    if (
      (d === null && (u = p),
      (s.baseState = u),
      (s.firstBaseUpdate = h),
      (s.lastBaseUpdate = d),
      (e = s.shared.interleaved),
      e !== null)
    ) {
      s = e;
      do ((o |= s.lane), (s = s.next));
      while (s !== e);
    } else i === null && (s.shared.lanes = 0);
    ((Ar |= o), (t.lanes = o), (t.memoizedState = p));
  }
}
function Np(t, e, n) {
  if (((t = e.effects), (e.effects = null), t !== null))
    for (e = 0; e < t.length; e++) {
      var r = t[e],
        s = r.callback;
      if (s !== null) {
        if (((r.callback = null), (r = n), typeof s != "function"))
          throw Error(b(191, s));
        s.call(r);
      }
    }
}
var lo = {},
  Kt = sr(lo),
  Bi = sr(lo),
  $i = sr(lo);
function vr(t) {
  if (t === lo) throw Error(b(174));
  return t;
}
function Bh(t, e) {
  switch ((ue($i, e), ue(Bi, t), ue(Kt, lo), (t = e.nodeType), t)) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : ac(null, "");
      break;
    default:
      ((t = t === 8 ? e.parentNode : e),
        (e = t.namespaceURI || null),
        (t = t.tagName),
        (e = ac(e, t)));
  }
  (de(Kt), ue(Kt, e));
}
function ys() {
  (de(Kt), de(Bi), de($i));
}
function Fy(t) {
  vr($i.current);
  var e = vr(Kt.current),
    n = ac(e, t.type);
  e !== n && (ue(Bi, t), ue(Kt, n));
}
function $h(t) {
  Bi.current === t && (de(Kt), de(Bi));
}
var ge = sr(0);
function ja(t) {
  for (var e = t; e !== null; ) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return e;
    } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
      if (e.flags & 128) return e;
    } else if (e.child !== null) {
      ((e.child.return = e), (e = e.child));
      continue;
    }
    if (e === t) break;
    for (; e.sibling === null; ) {
      if (e.return === null || e.return === t) return null;
      e = e.return;
    }
    ((e.sibling.return = e.return), (e = e.sibling));
  }
  return null;
}
var xu = [];
function Gh() {
  for (var t = 0; t < xu.length; t++)
    xu[t]._workInProgressVersionPrimary = null;
  xu.length = 0;
}
var aa = vn.ReactCurrentDispatcher,
  Pu = vn.ReactCurrentBatchConfig,
  Rr = 0,
  ye = null,
  Ne = null,
  be = null,
  ba = !1,
  Si = !1,
  Gi = 0,
  yT = 0;
function Ke() {
  throw Error(b(321));
}
function Hh(t, e) {
  if (e === null) return !1;
  for (var n = 0; n < e.length && n < t.length; n++)
    if (!Ut(t[n], e[n])) return !1;
  return !0;
}
function Wh(t, e, n, r, s, i) {
  if (
    ((Rr = i),
    (ye = e),
    (e.memoizedState = null),
    (e.updateQueue = null),
    (e.lanes = 0),
    (aa.current = t === null || t.memoizedState === null ? wT : TT),
    (t = n(r, s)),
    Si)
  ) {
    i = 0;
    do {
      if (((Si = !1), (Gi = 0), 25 <= i)) throw Error(b(301));
      ((i += 1),
        (be = Ne = null),
        (e.updateQueue = null),
        (aa.current = ST),
        (t = n(r, s)));
    } while (Si);
  }
  if (
    ((aa.current = Ua),
    (e = Ne !== null && Ne.next !== null),
    (Rr = 0),
    (be = Ne = ye = null),
    (ba = !1),
    e)
  )
    throw Error(b(300));
  return t;
}
function qh() {
  var t = Gi !== 0;
  return ((Gi = 0), t);
}
function Gt() {
  var t = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (be === null ? (ye.memoizedState = be = t) : (be = be.next = t), be);
}
function xt() {
  if (Ne === null) {
    var t = ye.alternate;
    t = t !== null ? t.memoizedState : null;
  } else t = Ne.next;
  var e = be === null ? ye.memoizedState : be.next;
  if (e !== null) ((be = e), (Ne = t));
  else {
    if (t === null) throw Error(b(310));
    ((Ne = t),
      (t = {
        memoizedState: Ne.memoizedState,
        baseState: Ne.baseState,
        baseQueue: Ne.baseQueue,
        queue: Ne.queue,
        next: null,
      }),
      be === null ? (ye.memoizedState = be = t) : (be = be.next = t));
  }
  return be;
}
function Hi(t, e) {
  return typeof e == "function" ? e(t) : e;
}
function ku(t) {
  var e = xt(),
    n = e.queue;
  if (n === null) throw Error(b(311));
  n.lastRenderedReducer = t;
  var r = Ne,
    s = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (s !== null) {
      var o = s.next;
      ((s.next = i.next), (i.next = o));
    }
    ((r.baseQueue = s = i), (n.pending = null));
  }
  if (s !== null) {
    ((i = s.next), (r = r.baseState));
    var l = (o = null),
      u = null,
      h = i;
    do {
      var d = h.lane;
      if ((Rr & d) === d)
        (u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: h.action,
              hasEagerState: h.hasEagerState,
              eagerState: h.eagerState,
              next: null,
            }),
          (r = h.hasEagerState ? h.eagerState : t(r, h.action)));
      else {
        var p = {
          lane: d,
          action: h.action,
          hasEagerState: h.hasEagerState,
          eagerState: h.eagerState,
          next: null,
        };
        (u === null ? ((l = u = p), (o = r)) : (u = u.next = p),
          (ye.lanes |= d),
          (Ar |= d));
      }
      h = h.next;
    } while (h !== null && h !== i);
    (u === null ? (o = r) : (u.next = l),
      Ut(r, e.memoizedState) || (ut = !0),
      (e.memoizedState = r),
      (e.baseState = o),
      (e.baseQueue = u),
      (n.lastRenderedState = r));
  }
  if (((t = n.interleaved), t !== null)) {
    s = t;
    do ((i = s.lane), (ye.lanes |= i), (Ar |= i), (s = s.next));
    while (s !== t);
  } else s === null && (n.lanes = 0);
  return [e.memoizedState, n.dispatch];
}
function Nu(t) {
  var e = xt(),
    n = e.queue;
  if (n === null) throw Error(b(311));
  n.lastRenderedReducer = t;
  var r = n.dispatch,
    s = n.pending,
    i = e.memoizedState;
  if (s !== null) {
    n.pending = null;
    var o = (s = s.next);
    do ((i = t(i, o.action)), (o = o.next));
    while (o !== s);
    (Ut(i, e.memoizedState) || (ut = !0),
      (e.memoizedState = i),
      e.baseQueue === null && (e.baseState = i),
      (n.lastRenderedState = i));
  }
  return [i, r];
}
function jy() {}
function by(t, e) {
  var n = ye,
    r = xt(),
    s = e(),
    i = !Ut(r.memoizedState, s);
  if (
    (i && ((r.memoizedState = s), (ut = !0)),
    (r = r.queue),
    Kh(By.bind(null, n, r, t), [t]),
    r.getSnapshot !== e || i || (be !== null && be.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Wi(9, zy.bind(null, n, r, s, e), void 0, null),
      Ue === null)
    )
      throw Error(b(349));
    Rr & 30 || Uy(n, e, s);
  }
  return s;
}
function Uy(t, e, n) {
  ((t.flags |= 16384),
    (t = { getSnapshot: e, value: n }),
    (e = ye.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (ye.updateQueue = e),
        (e.stores = [t]))
      : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t)));
}
function zy(t, e, n, r) {
  ((e.value = n), (e.getSnapshot = r), $y(e) && Gy(t));
}
function By(t, e, n) {
  return n(function () {
    $y(e) && Gy(t);
  });
}
function $y(t) {
  var e = t.getSnapshot;
  t = t.value;
  try {
    var n = e();
    return !Ut(t, n);
  } catch {
    return !0;
  }
}
function Gy(t) {
  var e = fn(t, 1);
  e !== null && Ft(e, t, 1, -1);
}
function Vp(t) {
  var e = Gt();
  return (
    typeof t == "function" && (t = t()),
    (e.memoizedState = e.baseState = t),
    (t = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Hi,
      lastRenderedState: t,
    }),
    (e.queue = t),
    (t = t.dispatch = ET.bind(null, ye, t)),
    [e.memoizedState, t]
  );
}
function Wi(t, e, n, r) {
  return (
    (t = { tag: t, create: e, destroy: n, deps: r, next: null }),
    (e = ye.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (ye.updateQueue = e),
        (e.lastEffect = t.next = t))
      : ((n = e.lastEffect),
        n === null
          ? (e.lastEffect = t.next = t)
          : ((r = n.next), (n.next = t), (t.next = r), (e.lastEffect = t))),
    t
  );
}
function Hy() {
  return xt().memoizedState;
}
function la(t, e, n, r) {
  var s = Gt();
  ((ye.flags |= t),
    (s.memoizedState = Wi(1 | e, n, void 0, r === void 0 ? null : r)));
}
function yl(t, e, n, r) {
  var s = xt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Ne !== null) {
    var o = Ne.memoizedState;
    if (((i = o.destroy), r !== null && Hh(r, o.deps))) {
      s.memoizedState = Wi(e, n, i, r);
      return;
    }
  }
  ((ye.flags |= t), (s.memoizedState = Wi(1 | e, n, i, r)));
}
function Dp(t, e) {
  return la(8390656, 8, t, e);
}
function Kh(t, e) {
  return yl(2048, 8, t, e);
}
function Wy(t, e) {
  return yl(4, 2, t, e);
}
function qy(t, e) {
  return yl(4, 4, t, e);
}
function Ky(t, e) {
  if (typeof e == "function")
    return (
      (t = t()),
      e(t),
      function () {
        e(null);
      }
    );
  if (e != null)
    return (
      (t = t()),
      (e.current = t),
      function () {
        e.current = null;
      }
    );
}
function Qy(t, e, n) {
  return (
    (n = n != null ? n.concat([t]) : null),
    yl(4, 4, Ky.bind(null, e, t), n)
  );
}
function Qh() {}
function Yy(t, e) {
  var n = xt();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && Hh(e, r[1])
    ? r[0]
    : ((n.memoizedState = [t, e]), t);
}
function Jy(t, e) {
  var n = xt();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && Hh(e, r[1])
    ? r[0]
    : ((t = t()), (n.memoizedState = [t, e]), t);
}
function Xy(t, e, n) {
  return Rr & 21
    ? (Ut(n, e) || ((n = ry()), (ye.lanes |= n), (Ar |= n), (t.baseState = !0)),
      e)
    : (t.baseState && ((t.baseState = !1), (ut = !0)), (t.memoizedState = n));
}
function vT(t, e) {
  var n = oe;
  ((oe = n !== 0 && 4 > n ? n : 4), t(!0));
  var r = Pu.transition;
  Pu.transition = {};
  try {
    (t(!1), e());
  } finally {
    ((oe = n), (Pu.transition = r));
  }
}
function Zy() {
  return xt().memoizedState;
}
function _T(t, e, n) {
  var r = Bn(t);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ev(t))
  )
    tv(e, n);
  else if (((n = My(t, e, n, r)), n !== null)) {
    var s = st();
    (Ft(n, t, r, s), nv(n, e, r));
  }
}
function ET(t, e, n) {
  var r = Bn(t),
    s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ev(t)) tv(e, s);
  else {
    var i = t.alternate;
    if (
      t.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = e.lastRenderedReducer), i !== null)
    )
      try {
        var o = e.lastRenderedState,
          l = i(o, n);
        if (((s.hasEagerState = !0), (s.eagerState = l), Ut(l, o))) {
          var u = e.interleaved;
          (u === null
            ? ((s.next = s), Uh(e))
            : ((s.next = u.next), (u.next = s)),
            (e.interleaved = s));
          return;
        }
      } catch {
      } finally {
      }
    ((n = My(t, e, s, r)),
      n !== null && ((s = st()), Ft(n, t, r, s), nv(n, e, r)));
  }
}
function ev(t) {
  var e = t.alternate;
  return t === ye || (e !== null && e === ye);
}
function tv(t, e) {
  Si = ba = !0;
  var n = t.pending;
  (n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
    (t.pending = e));
}
function nv(t, e, n) {
  if (n & 4194240) {
    var r = e.lanes;
    ((r &= t.pendingLanes), (n |= r), (e.lanes = n), Ah(t, n));
  }
}
var Ua = {
    readContext: Ct,
    useCallback: Ke,
    useContext: Ke,
    useEffect: Ke,
    useImperativeHandle: Ke,
    useInsertionEffect: Ke,
    useLayoutEffect: Ke,
    useMemo: Ke,
    useReducer: Ke,
    useRef: Ke,
    useState: Ke,
    useDebugValue: Ke,
    useDeferredValue: Ke,
    useTransition: Ke,
    useMutableSource: Ke,
    useSyncExternalStore: Ke,
    useId: Ke,
    unstable_isNewReconciler: !1,
  },
  wT = {
    readContext: Ct,
    useCallback: function (t, e) {
      return ((Gt().memoizedState = [t, e === void 0 ? null : e]), t);
    },
    useContext: Ct,
    useEffect: Dp,
    useImperativeHandle: function (t, e, n) {
      return (
        (n = n != null ? n.concat([t]) : null),
        la(4194308, 4, Ky.bind(null, e, t), n)
      );
    },
    useLayoutEffect: function (t, e) {
      return la(4194308, 4, t, e);
    },
    useInsertionEffect: function (t, e) {
      return la(4, 2, t, e);
    },
    useMemo: function (t, e) {
      var n = Gt();
      return (
        (e = e === void 0 ? null : e),
        (t = t()),
        (n.memoizedState = [t, e]),
        t
      );
    },
    useReducer: function (t, e, n) {
      var r = Gt();
      return (
        (e = n !== void 0 ? n(e) : e),
        (r.memoizedState = r.baseState = e),
        (t = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: e,
        }),
        (r.queue = t),
        (t = t.dispatch = _T.bind(null, ye, t)),
        [r.memoizedState, t]
      );
    },
    useRef: function (t) {
      var e = Gt();
      return ((t = { current: t }), (e.memoizedState = t));
    },
    useState: Vp,
    useDebugValue: Qh,
    useDeferredValue: function (t) {
      return (Gt().memoizedState = t);
    },
    useTransition: function () {
      var t = Vp(!1),
        e = t[0];
      return ((t = vT.bind(null, t[1])), (Gt().memoizedState = t), [e, t]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (t, e, n) {
      var r = ye,
        s = Gt();
      if (me) {
        if (n === void 0) throw Error(b(407));
        n = n();
      } else {
        if (((n = e()), Ue === null)) throw Error(b(349));
        Rr & 30 || Uy(r, e, n);
      }
      s.memoizedState = n;
      var i = { value: n, getSnapshot: e };
      return (
        (s.queue = i),
        Dp(By.bind(null, r, i, t), [t]),
        (r.flags |= 2048),
        Wi(9, zy.bind(null, r, i, n, e), void 0, null),
        n
      );
    },
    useId: function () {
      var t = Gt(),
        e = Ue.identifierPrefix;
      if (me) {
        var n = an,
          r = on;
        ((n = (r & ~(1 << (32 - Ot(r) - 1))).toString(32) + n),
          (e = ":" + e + "R" + n),
          (n = Gi++),
          0 < n && (e += "H" + n.toString(32)),
          (e += ":"));
      } else ((n = yT++), (e = ":" + e + "r" + n.toString(32) + ":"));
      return (t.memoizedState = e);
    },
    unstable_isNewReconciler: !1,
  },
  TT = {
    readContext: Ct,
    useCallback: Yy,
    useContext: Ct,
    useEffect: Kh,
    useImperativeHandle: Qy,
    useInsertionEffect: Wy,
    useLayoutEffect: qy,
    useMemo: Jy,
    useReducer: ku,
    useRef: Hy,
    useState: function () {
      return ku(Hi);
    },
    useDebugValue: Qh,
    useDeferredValue: function (t) {
      var e = xt();
      return Xy(e, Ne.memoizedState, t);
    },
    useTransition: function () {
      var t = ku(Hi)[0],
        e = xt().memoizedState;
      return [t, e];
    },
    useMutableSource: jy,
    useSyncExternalStore: by,
    useId: Zy,
    unstable_isNewReconciler: !1,
  },
  ST = {
    readContext: Ct,
    useCallback: Yy,
    useContext: Ct,
    useEffect: Kh,
    useImperativeHandle: Qy,
    useInsertionEffect: Wy,
    useLayoutEffect: qy,
    useMemo: Jy,
    useReducer: Nu,
    useRef: Hy,
    useState: function () {
      return Nu(Hi);
    },
    useDebugValue: Qh,
    useDeferredValue: function (t) {
      var e = xt();
      return Ne === null ? (e.memoizedState = t) : Xy(e, Ne.memoizedState, t);
    },
    useTransition: function () {
      var t = Nu(Hi)[0],
        e = xt().memoizedState;
      return [t, e];
    },
    useMutableSource: jy,
    useSyncExternalStore: by,
    useId: Zy,
    unstable_isNewReconciler: !1,
  };
function Vt(t, e) {
  if (t && t.defaultProps) {
    ((e = _e({}, e)), (t = t.defaultProps));
    for (var n in t) e[n] === void 0 && (e[n] = t[n]);
    return e;
  }
  return e;
}
function xc(t, e, n, r) {
  ((e = t.memoizedState),
    (n = n(r, e)),
    (n = n == null ? e : _e({}, e, n)),
    (t.memoizedState = n),
    t.lanes === 0 && (t.updateQueue.baseState = n));
}
var vl = {
  isMounted: function (t) {
    return (t = t._reactInternals) ? Vr(t) === t : !1;
  },
  enqueueSetState: function (t, e, n) {
    t = t._reactInternals;
    var r = st(),
      s = Bn(t),
      i = ln(r, s);
    ((i.payload = e),
      n != null && (i.callback = n),
      (e = Un(t, i, s)),
      e !== null && (Ft(e, t, s, r), oa(e, t, s)));
  },
  enqueueReplaceState: function (t, e, n) {
    t = t._reactInternals;
    var r = st(),
      s = Bn(t),
      i = ln(r, s);
    ((i.tag = 1),
      (i.payload = e),
      n != null && (i.callback = n),
      (e = Un(t, i, s)),
      e !== null && (Ft(e, t, s, r), oa(e, t, s)));
  },
  enqueueForceUpdate: function (t, e) {
    t = t._reactInternals;
    var n = st(),
      r = Bn(t),
      s = ln(n, r);
    ((s.tag = 2),
      e != null && (s.callback = e),
      (e = Un(t, s, r)),
      e !== null && (Ft(e, t, r, n), oa(e, t, r)));
  },
};
function Lp(t, e, n, r, s, i, o) {
  return (
    (t = t.stateNode),
    typeof t.shouldComponentUpdate == "function"
      ? t.shouldComponentUpdate(r, i, o)
      : e.prototype && e.prototype.isPureReactComponent
        ? !ji(n, r) || !ji(s, i)
        : !0
  );
}
function rv(t, e, n) {
  var r = !1,
    s = Qn,
    i = e.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Ct(i))
      : ((s = ht(e) ? Sr : et.current),
        (r = e.contextTypes),
        (i = (r = r != null) ? ps(t, s) : Qn)),
    (e = new e(n, i)),
    (t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null),
    (e.updater = vl),
    (t.stateNode = e),
    (e._reactInternals = t),
    r &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = s),
      (t.__reactInternalMemoizedMaskedChildContext = i)),
    e
  );
}
function Mp(t, e, n, r) {
  ((t = e.state),
    typeof e.componentWillReceiveProps == "function" &&
      e.componentWillReceiveProps(n, r),
    typeof e.UNSAFE_componentWillReceiveProps == "function" &&
      e.UNSAFE_componentWillReceiveProps(n, r),
    e.state !== t && vl.enqueueReplaceState(e, e.state, null));
}
function Pc(t, e, n, r) {
  var s = t.stateNode;
  ((s.props = n), (s.state = t.memoizedState), (s.refs = {}), zh(t));
  var i = e.contextType;
  (typeof i == "object" && i !== null
    ? (s.context = Ct(i))
    : ((i = ht(e) ? Sr : et.current), (s.context = ps(t, i))),
    (s.state = t.memoizedState),
    (i = e.getDerivedStateFromProps),
    typeof i == "function" && (xc(t, e, i, n), (s.state = t.memoizedState)),
    typeof e.getDerivedStateFromProps == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function" ||
      (typeof s.UNSAFE_componentWillMount != "function" &&
        typeof s.componentWillMount != "function") ||
      ((e = s.state),
      typeof s.componentWillMount == "function" && s.componentWillMount(),
      typeof s.UNSAFE_componentWillMount == "function" &&
        s.UNSAFE_componentWillMount(),
      e !== s.state && vl.enqueueReplaceState(s, s.state, null),
      Fa(t, n, s, r),
      (s.state = t.memoizedState)),
    typeof s.componentDidMount == "function" && (t.flags |= 4194308));
}
function vs(t, e) {
  try {
    var n = "",
      r = e;
    do ((n += Jw(r)), (r = r.return));
    while (r);
    var s = n;
  } catch (i) {
    s =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: t, source: e, stack: s, digest: null };
}
function Vu(t, e, n) {
  return { value: t, source: null, stack: n ?? null, digest: e ?? null };
}
function kc(t, e) {
  try {
    console.error(e.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var IT = typeof WeakMap == "function" ? WeakMap : Map;
function sv(t, e, n) {
  ((n = ln(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = e.value;
  return (
    (n.callback = function () {
      (Ba || ((Ba = !0), (Uc = r)), kc(t, e));
    }),
    n
  );
}
function iv(t, e, n) {
  ((n = ln(-1, n)), (n.tag = 3));
  var r = t.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var s = e.value;
    ((n.payload = function () {
      return r(s);
    }),
      (n.callback = function () {
        kc(t, e);
      }));
  }
  var i = t.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        (kc(t, e),
          typeof r != "function" &&
            (zn === null ? (zn = new Set([this])) : zn.add(this)));
        var o = e.stack;
        this.componentDidCatch(e.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Op(t, e, n) {
  var r = t.pingCache;
  if (r === null) {
    r = t.pingCache = new IT();
    var s = new Set();
    r.set(e, s);
  } else ((s = r.get(e)), s === void 0 && ((s = new Set()), r.set(e, s)));
  s.has(n) || (s.add(n), (t = jT.bind(null, t, e, n)), e.then(t, t));
}
function Fp(t) {
  do {
    var e;
    if (
      ((e = t.tag === 13) &&
        ((e = t.memoizedState), (e = e !== null ? e.dehydrated !== null : !0)),
      e)
    )
      return t;
    t = t.return;
  } while (t !== null);
  return null;
}
function jp(t, e, n, r, s) {
  return t.mode & 1
    ? ((t.flags |= 65536), (t.lanes = s), t)
    : (t === e
        ? (t.flags |= 65536)
        : ((t.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((e = ln(-1, 1)), (e.tag = 2), Un(n, e, 1))),
          (n.lanes |= 1)),
      t);
}
var RT = vn.ReactCurrentOwner,
  ut = !1;
function rt(t, e, n, r) {
  e.child = t === null ? Ly(e, null, n, r) : gs(e, t.child, n, r);
}
function bp(t, e, n, r, s) {
  n = n.render;
  var i = e.ref;
  return (
    as(e, s),
    (r = Wh(t, e, n, r, i, s)),
    (n = qh()),
    t !== null && !ut
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~s),
        dn(t, e, s))
      : (me && n && Lh(e), (e.flags |= 1), rt(t, e, r, s), e.child)
  );
}
function Up(t, e, n, r, s) {
  if (t === null) {
    var i = n.type;
    return typeof i == "function" &&
      !rf(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((e.tag = 15), (e.type = i), ov(t, e, i, r, s))
      : ((t = fa(n.type, null, r, e, e.mode, s)),
        (t.ref = e.ref),
        (t.return = e),
        (e.child = t));
  }
  if (((i = t.child), !(t.lanes & s))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ji), n(o, r) && t.ref === e.ref)
    )
      return dn(t, e, s);
  }
  return (
    (e.flags |= 1),
    (t = $n(i, r)),
    (t.ref = e.ref),
    (t.return = e),
    (e.child = t)
  );
}
function ov(t, e, n, r, s) {
  if (t !== null) {
    var i = t.memoizedProps;
    if (ji(i, r) && t.ref === e.ref)
      if (((ut = !1), (e.pendingProps = r = i), (t.lanes & s) !== 0))
        t.flags & 131072 && (ut = !0);
      else return ((e.lanes = t.lanes), dn(t, e, s));
  }
  return Nc(t, e, n, r, s);
}
function av(t, e, n) {
  var r = e.pendingProps,
    s = r.children,
    i = t !== null ? t.memoizedState : null;
  if (r.mode === "hidden")
    if (!(e.mode & 1))
      ((e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ue(ns, pt),
        (pt |= n));
    else {
      if (!(n & 1073741824))
        return (
          (t = i !== null ? i.baseLanes | n : n),
          (e.lanes = e.childLanes = 1073741824),
          (e.memoizedState = {
            baseLanes: t,
            cachePool: null,
            transitions: null,
          }),
          (e.updateQueue = null),
          ue(ns, pt),
          (pt |= t),
          null
        );
      ((e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        ue(ns, pt),
        (pt |= r));
    }
  else
    (i !== null ? ((r = i.baseLanes | n), (e.memoizedState = null)) : (r = n),
      ue(ns, pt),
      (pt |= r));
  return (rt(t, e, s, n), e.child);
}
function lv(t, e) {
  var n = e.ref;
  ((t === null && n !== null) || (t !== null && t.ref !== n)) &&
    ((e.flags |= 512), (e.flags |= 2097152));
}
function Nc(t, e, n, r, s) {
  var i = ht(n) ? Sr : et.current;
  return (
    (i = ps(e, i)),
    as(e, s),
    (n = Wh(t, e, n, r, i, s)),
    (r = qh()),
    t !== null && !ut
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~s),
        dn(t, e, s))
      : (me && r && Lh(e), (e.flags |= 1), rt(t, e, n, s), e.child)
  );
}
function zp(t, e, n, r, s) {
  if (ht(n)) {
    var i = !0;
    Va(e);
  } else i = !1;
  if ((as(e, s), e.stateNode === null))
    (ua(t, e), rv(e, n, r), Pc(e, n, r, s), (r = !0));
  else if (t === null) {
    var o = e.stateNode,
      l = e.memoizedProps;
    o.props = l;
    var u = o.context,
      h = n.contextType;
    typeof h == "object" && h !== null
      ? (h = Ct(h))
      : ((h = ht(n) ? Sr : et.current), (h = ps(e, h)));
    var d = n.getDerivedStateFromProps,
      p =
        typeof d == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    (p ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== r || u !== h) && Mp(e, o, r, h)),
      (Pn = !1));
    var m = e.memoizedState;
    ((o.state = m),
      Fa(e, r, o, s),
      (u = e.memoizedState),
      l !== r || m !== u || ct.current || Pn
        ? (typeof d == "function" && (xc(e, n, d, r), (u = e.memoizedState)),
          (l = Pn || Lp(e, n, l, r, m, u, h))
            ? (p ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (e.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
              (e.memoizedProps = r),
              (e.memoizedState = u)),
          (o.props = r),
          (o.state = u),
          (o.context = h),
          (r = l))
        : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
          (r = !1)));
  } else {
    ((o = e.stateNode),
      Oy(t, e),
      (l = e.memoizedProps),
      (h = e.type === e.elementType ? l : Vt(e.type, l)),
      (o.props = h),
      (p = e.pendingProps),
      (m = o.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = Ct(u))
        : ((u = ht(n) ? Sr : et.current), (u = ps(e, u))));
    var T = n.getDerivedStateFromProps;
    ((d =
      typeof T == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== p || m !== u) && Mp(e, o, r, u)),
      (Pn = !1),
      (m = e.memoizedState),
      (o.state = m),
      Fa(e, r, o, s));
    var x = e.memoizedState;
    l !== p || m !== x || ct.current || Pn
      ? (typeof T == "function" && (xc(e, n, T, r), (x = e.memoizedState)),
        (h = Pn || Lp(e, n, h, r, m, x, u) || !1)
          ? (d ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, x, u),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, x, u)),
            typeof o.componentDidUpdate == "function" && (e.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (l === t.memoizedProps && m === t.memoizedState) ||
              (e.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (l === t.memoizedProps && m === t.memoizedState) ||
              (e.flags |= 1024),
            (e.memoizedProps = r),
            (e.memoizedState = x)),
        (o.props = r),
        (o.state = x),
        (o.context = u),
        (r = h))
      : (typeof o.componentDidUpdate != "function" ||
          (l === t.memoizedProps && m === t.memoizedState) ||
          (e.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (l === t.memoizedProps && m === t.memoizedState) ||
          (e.flags |= 1024),
        (r = !1));
  }
  return Vc(t, e, n, r, i, s);
}
function Vc(t, e, n, r, s, i) {
  lv(t, e);
  var o = (e.flags & 128) !== 0;
  if (!r && !o) return (s && Ap(e, n, !1), dn(t, e, i));
  ((r = e.stateNode), (RT.current = e));
  var l =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (e.flags |= 1),
    t !== null && o
      ? ((e.child = gs(e, t.child, null, i)), (e.child = gs(e, null, l, i)))
      : rt(t, e, l, i),
    (e.memoizedState = r.state),
    s && Ap(e, n, !0),
    e.child
  );
}
function uv(t) {
  var e = t.stateNode;
  (e.pendingContext
    ? Rp(t, e.pendingContext, e.pendingContext !== e.context)
    : e.context && Rp(t, e.context, !1),
    Bh(t, e.containerInfo));
}
function Bp(t, e, n, r, s) {
  return (ms(), Oh(s), (e.flags |= 256), rt(t, e, n, r), e.child);
}
var Dc = { dehydrated: null, treeContext: null, retryLane: 0 };
function Lc(t) {
  return { baseLanes: t, cachePool: null, transitions: null };
}
function cv(t, e, n) {
  var r = e.pendingProps,
    s = ge.current,
    i = !1,
    o = (e.flags & 128) !== 0,
    l;
  if (
    ((l = o) ||
      (l = t !== null && t.memoizedState === null ? !1 : (s & 2) !== 0),
    l
      ? ((i = !0), (e.flags &= -129))
      : (t === null || t.memoizedState !== null) && (s |= 1),
    ue(ge, s & 1),
    t === null)
  )
    return (
      Ac(e),
      (t = e.memoizedState),
      t !== null && ((t = t.dehydrated), t !== null)
        ? (e.mode & 1
            ? t.data === "$!"
              ? (e.lanes = 8)
              : (e.lanes = 1073741824)
            : (e.lanes = 1),
          null)
        : ((o = r.children),
          (t = r.fallback),
          i
            ? ((r = e.mode),
              (i = e.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = wl(o, r, 0, null)),
              (t = wr(t, r, n, null)),
              (i.return = e),
              (t.return = e),
              (i.sibling = t),
              (e.child = i),
              (e.child.memoizedState = Lc(n)),
              (e.memoizedState = Dc),
              t)
            : Yh(e, o))
    );
  if (((s = t.memoizedState), s !== null && ((l = s.dehydrated), l !== null)))
    return AT(t, e, o, r, l, s, n);
  if (i) {
    ((i = r.fallback), (o = e.mode), (s = t.child), (l = s.sibling));
    var u = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && e.child !== s
        ? ((r = e.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (e.deletions = null))
        : ((r = $n(s, u)), (r.subtreeFlags = s.subtreeFlags & 14680064)),
      l !== null ? (i = $n(l, i)) : ((i = wr(i, o, n, null)), (i.flags |= 2)),
      (i.return = e),
      (r.return = e),
      (r.sibling = i),
      (e.child = r),
      (r = i),
      (i = e.child),
      (o = t.child.memoizedState),
      (o =
        o === null
          ? Lc(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = t.childLanes & ~n),
      (e.memoizedState = Dc),
      r
    );
  }
  return (
    (i = t.child),
    (t = i.sibling),
    (r = $n(i, { mode: "visible", children: r.children })),
    !(e.mode & 1) && (r.lanes = n),
    (r.return = e),
    (r.sibling = null),
    t !== null &&
      ((n = e.deletions),
      n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t)),
    (e.child = r),
    (e.memoizedState = null),
    r
  );
}
function Yh(t, e) {
  return (
    (e = wl({ mode: "visible", children: e }, t.mode, 0, null)),
    (e.return = t),
    (t.child = e)
  );
}
function Go(t, e, n, r) {
  return (
    r !== null && Oh(r),
    gs(e, t.child, null, n),
    (t = Yh(e, e.pendingProps.children)),
    (t.flags |= 2),
    (e.memoizedState = null),
    t
  );
}
function AT(t, e, n, r, s, i, o) {
  if (n)
    return e.flags & 256
      ? ((e.flags &= -257), (r = Vu(Error(b(422)))), Go(t, e, o, r))
      : e.memoizedState !== null
        ? ((e.child = t.child), (e.flags |= 128), null)
        : ((i = r.fallback),
          (s = e.mode),
          (r = wl({ mode: "visible", children: r.children }, s, 0, null)),
          (i = wr(i, s, o, null)),
          (i.flags |= 2),
          (r.return = e),
          (i.return = e),
          (r.sibling = i),
          (e.child = r),
          e.mode & 1 && gs(e, t.child, null, o),
          (e.child.memoizedState = Lc(o)),
          (e.memoizedState = Dc),
          i);
  if (!(e.mode & 1)) return Go(t, e, o, null);
  if (s.data === "$!") {
    if (((r = s.nextSibling && s.nextSibling.dataset), r)) var l = r.dgst;
    return (
      (r = l),
      (i = Error(b(419))),
      (r = Vu(i, r, void 0)),
      Go(t, e, o, r)
    );
  }
  if (((l = (o & t.childLanes) !== 0), ut || l)) {
    if (((r = Ue), r !== null)) {
      switch (o & -o) {
        case 4:
          s = 2;
          break;
        case 16:
          s = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          s = 32;
          break;
        case 536870912:
          s = 268435456;
          break;
        default:
          s = 0;
      }
      ((s = s & (r.suspendedLanes | o) ? 0 : s),
        s !== 0 &&
          s !== i.retryLane &&
          ((i.retryLane = s), fn(t, s), Ft(r, t, s, -1)));
    }
    return (nf(), (r = Vu(Error(b(421)))), Go(t, e, o, r));
  }
  return s.data === "$?"
    ? ((e.flags |= 128),
      (e.child = t.child),
      (e = bT.bind(null, t)),
      (s._reactRetry = e),
      null)
    : ((t = i.treeContext),
      (mt = bn(s.nextSibling)),
      (gt = e),
      (me = !0),
      (Lt = null),
      t !== null &&
        ((wt[Tt++] = on),
        (wt[Tt++] = an),
        (wt[Tt++] = Ir),
        (on = t.id),
        (an = t.overflow),
        (Ir = e)),
      (e = Yh(e, r.children)),
      (e.flags |= 4096),
      e);
}
function $p(t, e, n) {
  t.lanes |= e;
  var r = t.alternate;
  (r !== null && (r.lanes |= e), Cc(t.return, e, n));
}
function Du(t, e, n, r, s) {
  var i = t.memoizedState;
  i === null
    ? (t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: s,
      })
    : ((i.isBackwards = e),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = s));
}
function hv(t, e, n) {
  var r = e.pendingProps,
    s = r.revealOrder,
    i = r.tail;
  if ((rt(t, e, r.children, n), (r = ge.current), r & 2))
    ((r = (r & 1) | 2), (e.flags |= 128));
  else {
    if (t !== null && t.flags & 128)
      e: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && $p(t, n, e);
        else if (t.tag === 19) $p(t, n, e);
        else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break e;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break e;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    r &= 1;
  }
  if ((ue(ge, r), !(e.mode & 1))) e.memoizedState = null;
  else
    switch (s) {
      case "forwards":
        for (n = e.child, s = null; n !== null; )
          ((t = n.alternate),
            t !== null && ja(t) === null && (s = n),
            (n = n.sibling));
        ((n = s),
          n === null
            ? ((s = e.child), (e.child = null))
            : ((s = n.sibling), (n.sibling = null)),
          Du(e, !1, s, n, i));
        break;
      case "backwards":
        for (n = null, s = e.child, e.child = null; s !== null; ) {
          if (((t = s.alternate), t !== null && ja(t) === null)) {
            e.child = s;
            break;
          }
          ((t = s.sibling), (s.sibling = n), (n = s), (s = t));
        }
        Du(e, !0, n, null, i);
        break;
      case "together":
        Du(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
  return e.child;
}
function ua(t, e) {
  !(e.mode & 1) &&
    t !== null &&
    ((t.alternate = null), (e.alternate = null), (e.flags |= 2));
}
function dn(t, e, n) {
  if (
    (t !== null && (e.dependencies = t.dependencies),
    (Ar |= e.lanes),
    !(n & e.childLanes))
  )
    return null;
  if (t !== null && e.child !== t.child) throw Error(b(153));
  if (e.child !== null) {
    for (
      t = e.child, n = $n(t, t.pendingProps), e.child = n, n.return = e;
      t.sibling !== null;
    )
      ((t = t.sibling),
        (n = n.sibling = $n(t, t.pendingProps)),
        (n.return = e));
    n.sibling = null;
  }
  return e.child;
}
function CT(t, e, n) {
  switch (e.tag) {
    case 3:
      (uv(e), ms());
      break;
    case 5:
      Fy(e);
      break;
    case 1:
      ht(e.type) && Va(e);
      break;
    case 4:
      Bh(e, e.stateNode.containerInfo);
      break;
    case 10:
      var r = e.type._context,
        s = e.memoizedProps.value;
      (ue(Ma, r._currentValue), (r._currentValue = s));
      break;
    case 13:
      if (((r = e.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ue(ge, ge.current & 1), (e.flags |= 128), null)
          : n & e.child.childLanes
            ? cv(t, e, n)
            : (ue(ge, ge.current & 1),
              (t = dn(t, e, n)),
              t !== null ? t.sibling : null);
      ue(ge, ge.current & 1);
      break;
    case 19:
      if (((r = (n & e.childLanes) !== 0), t.flags & 128)) {
        if (r) return hv(t, e, n);
        e.flags |= 128;
      }
      if (
        ((s = e.memoizedState),
        s !== null &&
          ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
        ue(ge, ge.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((e.lanes = 0), av(t, e, n));
  }
  return dn(t, e, n);
}
var fv, Mc, dv, pv;
fv = function (t, e) {
  for (var n = e.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
Mc = function () {};
dv = function (t, e, n, r) {
  var s = t.memoizedProps;
  if (s !== r) {
    ((t = e.stateNode), vr(Kt.current));
    var i = null;
    switch (n) {
      case "input":
        ((s = rc(t, s)), (r = rc(t, r)), (i = []));
        break;
      case "select":
        ((s = _e({}, s, { value: void 0 })),
          (r = _e({}, r, { value: void 0 })),
          (i = []));
        break;
      case "textarea":
        ((s = oc(t, s)), (r = oc(t, r)), (i = []));
        break;
      default:
        typeof s.onClick != "function" &&
          typeof r.onClick == "function" &&
          (t.onclick = ka);
    }
    lc(n, r);
    var o;
    n = null;
    for (h in s)
      if (!r.hasOwnProperty(h) && s.hasOwnProperty(h) && s[h] != null)
        if (h === "style") {
          var l = s[h];
          for (o in l) l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          h !== "dangerouslySetInnerHTML" &&
            h !== "children" &&
            h !== "suppressContentEditableWarning" &&
            h !== "suppressHydrationWarning" &&
            h !== "autoFocus" &&
            (Ni.hasOwnProperty(h)
              ? i || (i = [])
              : (i = i || []).push(h, null));
    for (h in r) {
      var u = r[h];
      if (
        ((l = s != null ? s[h] : void 0),
        r.hasOwnProperty(h) && u !== l && (u != null || l != null))
      )
        if (h === "style")
          if (l) {
            for (o in l)
              !l.hasOwnProperty(o) ||
                (u && u.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in u)
              u.hasOwnProperty(o) &&
                l[o] !== u[o] &&
                (n || (n = {}), (n[o] = u[o]));
          } else (n || (i || (i = []), i.push(h, n)), (n = u));
        else
          h === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (l = l ? l.__html : void 0),
              u != null && l !== u && (i = i || []).push(h, u))
            : h === "children"
              ? (typeof u != "string" && typeof u != "number") ||
                (i = i || []).push(h, "" + u)
              : h !== "suppressContentEditableWarning" &&
                h !== "suppressHydrationWarning" &&
                (Ni.hasOwnProperty(h)
                  ? (u != null && h === "onScroll" && he("scroll", t),
                    i || l === u || (i = []))
                  : (i = i || []).push(h, u));
    }
    n && (i = i || []).push("style", n);
    var h = i;
    (e.updateQueue = h) && (e.flags |= 4);
  }
};
pv = function (t, e, n, r) {
  n !== r && (e.flags |= 4);
};
function ii(t, e) {
  if (!me)
    switch (t.tailMode) {
      case "hidden":
        e = t.tail;
        for (var n = null; e !== null; )
          (e.alternate !== null && (n = e), (e = e.sibling));
        n === null ? (t.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = t.tail;
        for (var r = null; n !== null; )
          (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? e || t.tail === null
            ? (t.tail = null)
            : (t.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Qe(t) {
  var e = t.alternate !== null && t.alternate.child === t.child,
    n = 0,
    r = 0;
  if (e)
    for (var s = t.child; s !== null; )
      ((n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags & 14680064),
        (r |= s.flags & 14680064),
        (s.return = t),
        (s = s.sibling));
  else
    for (s = t.child; s !== null; )
      ((n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags),
        (r |= s.flags),
        (s.return = t),
        (s = s.sibling));
  return ((t.subtreeFlags |= r), (t.childLanes = n), e);
}
function xT(t, e, n) {
  var r = e.pendingProps;
  switch ((Mh(e), e.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (Qe(e), null);
    case 1:
      return (ht(e.type) && Na(), Qe(e), null);
    case 3:
      return (
        (r = e.stateNode),
        ys(),
        de(ct),
        de(et),
        Gh(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (t === null || t.child === null) &&
          (Bo(e)
            ? (e.flags |= 4)
            : t === null ||
              (t.memoizedState.isDehydrated && !(e.flags & 256)) ||
              ((e.flags |= 1024), Lt !== null && ($c(Lt), (Lt = null)))),
        Mc(t, e),
        Qe(e),
        null
      );
    case 5:
      $h(e);
      var s = vr($i.current);
      if (((n = e.type), t !== null && e.stateNode != null))
        (dv(t, e, n, r, s),
          t.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152)));
      else {
        if (!r) {
          if (e.stateNode === null) throw Error(b(166));
          return (Qe(e), null);
        }
        if (((t = vr(Kt.current)), Bo(e))) {
          ((r = e.stateNode), (n = e.type));
          var i = e.memoizedProps;
          switch (((r[Wt] = e), (r[zi] = i), (t = (e.mode & 1) !== 0), n)) {
            case "dialog":
              (he("cancel", r), he("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              he("load", r);
              break;
            case "video":
            case "audio":
              for (s = 0; s < fi.length; s++) he(fi[s], r);
              break;
            case "source":
              he("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (he("error", r), he("load", r));
              break;
            case "details":
              he("toggle", r);
              break;
            case "input":
              (Xd(r, i), he("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!i.multiple }),
                he("invalid", r));
              break;
            case "textarea":
              (ep(r, i), he("invalid", r));
          }
          (lc(n, i), (s = null));
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var l = i[o];
              o === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (i.suppressHydrationWarning !== !0 &&
                      zo(r.textContent, l, t),
                    (s = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (i.suppressHydrationWarning !== !0 &&
                      zo(r.textContent, l, t),
                    (s = ["children", "" + l]))
                : Ni.hasOwnProperty(o) &&
                  l != null &&
                  o === "onScroll" &&
                  he("scroll", r);
            }
          switch (n) {
            case "input":
              (Do(r), Zd(r, i, !0));
              break;
            case "textarea":
              (Do(r), tp(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = ka);
          }
          ((r = s), (e.updateQueue = r), r !== null && (e.flags |= 4));
        } else {
          ((o = s.nodeType === 9 ? s : s.ownerDocument),
            t === "http://www.w3.org/1999/xhtml" && (t = Bg(n)),
            t === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((t = o.createElement("div")),
                  (t.innerHTML = "<script><\/script>"),
                  (t = t.removeChild(t.firstChild)))
                : typeof r.is == "string"
                  ? (t = o.createElement(n, { is: r.is }))
                  : ((t = o.createElement(n)),
                    n === "select" &&
                      ((o = t),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
              : (t = o.createElementNS(t, n)),
            (t[Wt] = e),
            (t[zi] = r),
            fv(t, e, !1, !1),
            (e.stateNode = t));
          e: {
            switch (((o = uc(n, r)), n)) {
              case "dialog":
                (he("cancel", t), he("close", t), (s = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (he("load", t), (s = r));
                break;
              case "video":
              case "audio":
                for (s = 0; s < fi.length; s++) he(fi[s], t);
                s = r;
                break;
              case "source":
                (he("error", t), (s = r));
                break;
              case "img":
              case "image":
              case "link":
                (he("error", t), he("load", t), (s = r));
                break;
              case "details":
                (he("toggle", t), (s = r));
                break;
              case "input":
                (Xd(t, r), (s = rc(t, r)), he("invalid", t));
                break;
              case "option":
                s = r;
                break;
              case "select":
                ((t._wrapperState = { wasMultiple: !!r.multiple }),
                  (s = _e({}, r, { value: void 0 })),
                  he("invalid", t));
                break;
              case "textarea":
                (ep(t, r), (s = oc(t, r)), he("invalid", t));
                break;
              default:
                s = r;
            }
            (lc(n, s), (l = s));
            for (i in l)
              if (l.hasOwnProperty(i)) {
                var u = l[i];
                i === "style"
                  ? Hg(t, u)
                  : i === "dangerouslySetInnerHTML"
                    ? ((u = u ? u.__html : void 0), u != null && $g(t, u))
                    : i === "children"
                      ? typeof u == "string"
                        ? (n !== "textarea" || u !== "") && Vi(t, u)
                        : typeof u == "number" && Vi(t, "" + u)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (Ni.hasOwnProperty(i)
                          ? u != null && i === "onScroll" && he("scroll", t)
                          : u != null && Eh(t, i, u, o));
              }
            switch (n) {
              case "input":
                (Do(t), Zd(t, r, !1));
                break;
              case "textarea":
                (Do(t), tp(t));
                break;
              case "option":
                r.value != null && t.setAttribute("value", "" + Kn(r.value));
                break;
              case "select":
                ((t.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? rs(t, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      rs(t, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof s.onClick == "function" && (t.onclick = ka);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (e.flags |= 4);
        }
        e.ref !== null && ((e.flags |= 512), (e.flags |= 2097152));
      }
      return (Qe(e), null);
    case 6:
      if (t && e.stateNode != null) pv(t, e, t.memoizedProps, r);
      else {
        if (typeof r != "string" && e.stateNode === null) throw Error(b(166));
        if (((n = vr($i.current)), vr(Kt.current), Bo(e))) {
          if (
            ((r = e.stateNode),
            (n = e.memoizedProps),
            (r[Wt] = e),
            (i = r.nodeValue !== n) && ((t = gt), t !== null))
          )
            switch (t.tag) {
              case 3:
                zo(r.nodeValue, n, (t.mode & 1) !== 0);
                break;
              case 5:
                t.memoizedProps.suppressHydrationWarning !== !0 &&
                  zo(r.nodeValue, n, (t.mode & 1) !== 0);
            }
          i && (e.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Wt] = e),
            (e.stateNode = r));
      }
      return (Qe(e), null);
    case 13:
      if (
        (de(ge),
        (r = e.memoizedState),
        t === null ||
          (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
      ) {
        if (me && mt !== null && e.mode & 1 && !(e.flags & 128))
          (Vy(), ms(), (e.flags |= 98560), (i = !1));
        else if (((i = Bo(e)), r !== null && r.dehydrated !== null)) {
          if (t === null) {
            if (!i) throw Error(b(318));
            if (
              ((i = e.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(b(317));
            i[Wt] = e;
          } else
            (ms(),
              !(e.flags & 128) && (e.memoizedState = null),
              (e.flags |= 4));
          (Qe(e), (i = !1));
        } else (Lt !== null && ($c(Lt), (Lt = null)), (i = !0));
        if (!i) return e.flags & 65536 ? e : null;
      }
      return e.flags & 128
        ? ((e.lanes = n), e)
        : ((r = r !== null),
          r !== (t !== null && t.memoizedState !== null) &&
            r &&
            ((e.child.flags |= 8192),
            e.mode & 1 &&
              (t === null || ge.current & 1 ? De === 0 && (De = 3) : nf())),
          e.updateQueue !== null && (e.flags |= 4),
          Qe(e),
          null);
    case 4:
      return (
        ys(),
        Mc(t, e),
        t === null && bi(e.stateNode.containerInfo),
        Qe(e),
        null
      );
    case 10:
      return (bh(e.type._context), Qe(e), null);
    case 17:
      return (ht(e.type) && Na(), Qe(e), null);
    case 19:
      if ((de(ge), (i = e.memoizedState), i === null)) return (Qe(e), null);
      if (((r = (e.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) ii(i, !1);
        else {
          if (De !== 0 || (t !== null && t.flags & 128))
            for (t = e.child; t !== null; ) {
              if (((o = ja(t)), o !== null)) {
                for (
                  e.flags |= 128,
                    ii(i, !1),
                    r = o.updateQueue,
                    r !== null && ((e.updateQueue = r), (e.flags |= 4)),
                    e.subtreeFlags = 0,
                    r = n,
                    n = e.child;
                  n !== null;
                )
                  ((i = n),
                    (t = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = t),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (t = o.dependencies),
                        (i.dependencies =
                          t === null
                            ? null
                            : {
                                lanes: t.lanes,
                                firstContext: t.firstContext,
                              })),
                    (n = n.sibling));
                return (ue(ge, (ge.current & 1) | 2), e.child);
              }
              t = t.sibling;
            }
          i.tail !== null &&
            Re() > _s &&
            ((e.flags |= 128), (r = !0), ii(i, !1), (e.lanes = 4194304));
        }
      else {
        if (!r)
          if (((t = ja(o)), t !== null)) {
            if (
              ((e.flags |= 128),
              (r = !0),
              (n = t.updateQueue),
              n !== null && ((e.updateQueue = n), (e.flags |= 4)),
              ii(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !me)
            )
              return (Qe(e), null);
          } else
            2 * Re() - i.renderingStartTime > _s &&
              n !== 1073741824 &&
              ((e.flags |= 128), (r = !0), ii(i, !1), (e.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = e.child), (e.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (e.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((e = i.tail),
          (i.rendering = e),
          (i.tail = e.sibling),
          (i.renderingStartTime = Re()),
          (e.sibling = null),
          (n = ge.current),
          ue(ge, r ? (n & 1) | 2 : n & 1),
          e)
        : (Qe(e), null);
    case 22:
    case 23:
      return (
        tf(),
        (r = e.memoizedState !== null),
        t !== null && (t.memoizedState !== null) !== r && (e.flags |= 8192),
        r && e.mode & 1
          ? pt & 1073741824 && (Qe(e), e.subtreeFlags & 6 && (e.flags |= 8192))
          : Qe(e),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(b(156, e.tag));
}
function PT(t, e) {
  switch ((Mh(e), e.tag)) {
    case 1:
      return (
        ht(e.type) && Na(),
        (t = e.flags),
        t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 3:
      return (
        ys(),
        de(ct),
        de(et),
        Gh(),
        (t = e.flags),
        t & 65536 && !(t & 128) ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 5:
      return ($h(e), null);
    case 13:
      if (
        (de(ge), (t = e.memoizedState), t !== null && t.dehydrated !== null)
      ) {
        if (e.alternate === null) throw Error(b(340));
        ms();
      }
      return (
        (t = e.flags),
        t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 19:
      return (de(ge), null);
    case 4:
      return (ys(), null);
    case 10:
      return (bh(e.type._context), null);
    case 22:
    case 23:
      return (tf(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var Ho = !1,
  Xe = !1,
  kT = typeof WeakSet == "function" ? WeakSet : Set,
  G = null;
function ts(t, e) {
  var n = t.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Te(t, e, r);
      }
    else n.current = null;
}
function Oc(t, e, n) {
  try {
    n();
  } catch (r) {
    Te(t, e, r);
  }
}
var Gp = !1;
function NT(t, e) {
  if (((_c = Ca), (t = _y()), Dh(t))) {
    if ("selectionStart" in t)
      var n = { start: t.selectionStart, end: t.selectionEnd };
    else
      e: {
        n = ((n = t.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var s = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, i.nodeType);
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            l = -1,
            u = -1,
            h = 0,
            d = 0,
            p = t,
            m = null;
          t: for (;;) {
            for (
              var T;
              p !== n || (s !== 0 && p.nodeType !== 3) || (l = o + s),
                p !== i || (r !== 0 && p.nodeType !== 3) || (u = o + r),
                p.nodeType === 3 && (o += p.nodeValue.length),
                (T = p.firstChild) !== null;
            )
              ((m = p), (p = T));
            for (;;) {
              if (p === t) break t;
              if (
                (m === n && ++h === s && (l = o),
                m === i && ++d === r && (u = o),
                (T = p.nextSibling) !== null)
              )
                break;
              ((p = m), (m = p.parentNode));
            }
            p = T;
          }
          n = l === -1 || u === -1 ? null : { start: l, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ec = { focusedElem: t, selectionRange: n }, Ca = !1, G = e; G !== null; )
    if (((e = G), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null))
      ((t.return = e), (G = t));
    else
      for (; G !== null; ) {
        e = G;
        try {
          var x = e.alternate;
          if (e.flags & 1024)
            switch (e.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var P = x.memoizedProps,
                    D = x.memoizedState,
                    _ = e.stateNode,
                    v = _.getSnapshotBeforeUpdate(
                      e.elementType === e.type ? P : Vt(e.type, P),
                      D,
                    );
                  _.__reactInternalSnapshotBeforeUpdate = v;
                }
                break;
              case 3:
                var R = e.stateNode.containerInfo;
                R.nodeType === 1
                  ? (R.textContent = "")
                  : R.nodeType === 9 &&
                    R.documentElement &&
                    R.removeChild(R.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(b(163));
            }
        } catch (M) {
          Te(e, e.return, M);
        }
        if (((t = e.sibling), t !== null)) {
          ((t.return = e.return), (G = t));
          break;
        }
        G = e.return;
      }
  return ((x = Gp), (Gp = !1), x);
}
function Ii(t, e, n) {
  var r = e.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var s = (r = r.next);
    do {
      if ((s.tag & t) === t) {
        var i = s.destroy;
        ((s.destroy = void 0), i !== void 0 && Oc(e, n, i));
      }
      s = s.next;
    } while (s !== r);
  }
}
function _l(t, e) {
  if (
    ((e = e.updateQueue), (e = e !== null ? e.lastEffect : null), e !== null)
  ) {
    var n = (e = e.next);
    do {
      if ((n.tag & t) === t) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== e);
  }
}
function Fc(t) {
  var e = t.ref;
  if (e !== null) {
    var n = t.stateNode;
    switch (t.tag) {
      case 5:
        t = n;
        break;
      default:
        t = n;
    }
    typeof e == "function" ? e(t) : (e.current = t);
  }
}
function mv(t) {
  var e = t.alternate;
  (e !== null && ((t.alternate = null), mv(e)),
    (t.child = null),
    (t.deletions = null),
    (t.sibling = null),
    t.tag === 5 &&
      ((e = t.stateNode),
      e !== null &&
        (delete e[Wt], delete e[zi], delete e[Sc], delete e[dT], delete e[pT])),
    (t.stateNode = null),
    (t.return = null),
    (t.dependencies = null),
    (t.memoizedProps = null),
    (t.memoizedState = null),
    (t.pendingProps = null),
    (t.stateNode = null),
    (t.updateQueue = null));
}
function gv(t) {
  return t.tag === 5 || t.tag === 3 || t.tag === 4;
}
function Hp(t) {
  e: for (;;) {
    for (; t.sibling === null; ) {
      if (t.return === null || gv(t.return)) return null;
      t = t.return;
    }
    for (
      t.sibling.return = t.return, t = t.sibling;
      t.tag !== 5 && t.tag !== 6 && t.tag !== 18;
    ) {
      if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
      ((t.child.return = t), (t = t.child));
    }
    if (!(t.flags & 2)) return t.stateNode;
  }
}
function jc(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6)
    ((t = t.stateNode),
      e
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(t, e)
          : n.insertBefore(t, e)
        : (n.nodeType === 8
            ? ((e = n.parentNode), e.insertBefore(t, n))
            : ((e = n), e.appendChild(t)),
          (n = n._reactRootContainer),
          n != null || e.onclick !== null || (e.onclick = ka)));
  else if (r !== 4 && ((t = t.child), t !== null))
    for (jc(t, e, n), t = t.sibling; t !== null; )
      (jc(t, e, n), (t = t.sibling));
}
function bc(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6)
    ((t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t));
  else if (r !== 4 && ((t = t.child), t !== null))
    for (bc(t, e, n), t = t.sibling; t !== null; )
      (bc(t, e, n), (t = t.sibling));
}
var ze = null,
  Dt = !1;
function Cn(t, e, n) {
  for (n = n.child; n !== null; ) (yv(t, e, n), (n = n.sibling));
}
function yv(t, e, n) {
  if (qt && typeof qt.onCommitFiberUnmount == "function")
    try {
      qt.onCommitFiberUnmount(hl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Xe || ts(n, e);
    case 6:
      var r = ze,
        s = Dt;
      ((ze = null),
        Cn(t, e, n),
        (ze = r),
        (Dt = s),
        ze !== null &&
          (Dt
            ? ((t = ze),
              (n = n.stateNode),
              t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n))
            : ze.removeChild(n.stateNode)));
      break;
    case 18:
      ze !== null &&
        (Dt
          ? ((t = ze),
            (n = n.stateNode),
            t.nodeType === 8
              ? Au(t.parentNode, n)
              : t.nodeType === 1 && Au(t, n),
            Oi(t))
          : Au(ze, n.stateNode));
      break;
    case 4:
      ((r = ze),
        (s = Dt),
        (ze = n.stateNode.containerInfo),
        (Dt = !0),
        Cn(t, e, n),
        (ze = r),
        (Dt = s));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Xe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        s = r = r.next;
        do {
          var i = s,
            o = i.destroy;
          ((i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && Oc(n, e, o),
            (s = s.next));
        } while (s !== r);
      }
      Cn(t, e, n);
      break;
    case 1:
      if (
        !Xe &&
        (ts(n, e),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (l) {
          Te(n, e, l);
        }
      Cn(t, e, n);
      break;
    case 21:
      Cn(t, e, n);
      break;
    case 22:
      n.mode & 1
        ? ((Xe = (r = Xe) || n.memoizedState !== null), Cn(t, e, n), (Xe = r))
        : Cn(t, e, n);
      break;
    default:
      Cn(t, e, n);
  }
}
function Wp(t) {
  var e = t.updateQueue;
  if (e !== null) {
    t.updateQueue = null;
    var n = t.stateNode;
    (n === null && (n = t.stateNode = new kT()),
      e.forEach(function (r) {
        var s = UT.bind(null, t, r);
        n.has(r) || (n.add(r), r.then(s, s));
      }));
  }
}
function Nt(t, e) {
  var n = e.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var s = n[r];
      try {
        var i = t,
          o = e,
          l = o;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              ((ze = l.stateNode), (Dt = !1));
              break e;
            case 3:
              ((ze = l.stateNode.containerInfo), (Dt = !0));
              break e;
            case 4:
              ((ze = l.stateNode.containerInfo), (Dt = !0));
              break e;
          }
          l = l.return;
        }
        if (ze === null) throw Error(b(160));
        (yv(i, o, s), (ze = null), (Dt = !1));
        var u = s.alternate;
        (u !== null && (u.return = null), (s.return = null));
      } catch (h) {
        Te(s, e, h);
      }
    }
  if (e.subtreeFlags & 12854)
    for (e = e.child; e !== null; ) (vv(e, t), (e = e.sibling));
}
function vv(t, e) {
  var n = t.alternate,
    r = t.flags;
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Nt(e, t), $t(t), r & 4)) {
        try {
          (Ii(3, t, t.return), _l(3, t));
        } catch (P) {
          Te(t, t.return, P);
        }
        try {
          Ii(5, t, t.return);
        } catch (P) {
          Te(t, t.return, P);
        }
      }
      break;
    case 1:
      (Nt(e, t), $t(t), r & 512 && n !== null && ts(n, n.return));
      break;
    case 5:
      if (
        (Nt(e, t),
        $t(t),
        r & 512 && n !== null && ts(n, n.return),
        t.flags & 32)
      ) {
        var s = t.stateNode;
        try {
          Vi(s, "");
        } catch (P) {
          Te(t, t.return, P);
        }
      }
      if (r & 4 && ((s = t.stateNode), s != null)) {
        var i = t.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          l = t.type,
          u = t.updateQueue;
        if (((t.updateQueue = null), u !== null))
          try {
            (l === "input" && i.type === "radio" && i.name != null && Ug(s, i),
              uc(l, o));
            var h = uc(l, i);
            for (o = 0; o < u.length; o += 2) {
              var d = u[o],
                p = u[o + 1];
              d === "style"
                ? Hg(s, p)
                : d === "dangerouslySetInnerHTML"
                  ? $g(s, p)
                  : d === "children"
                    ? Vi(s, p)
                    : Eh(s, d, p, h);
            }
            switch (l) {
              case "input":
                sc(s, i);
                break;
              case "textarea":
                zg(s, i);
                break;
              case "select":
                var m = s._wrapperState.wasMultiple;
                s._wrapperState.wasMultiple = !!i.multiple;
                var T = i.value;
                T != null
                  ? rs(s, !!i.multiple, T, !1)
                  : m !== !!i.multiple &&
                    (i.defaultValue != null
                      ? rs(s, !!i.multiple, i.defaultValue, !0)
                      : rs(s, !!i.multiple, i.multiple ? [] : "", !1));
            }
            s[zi] = i;
          } catch (P) {
            Te(t, t.return, P);
          }
      }
      break;
    case 6:
      if ((Nt(e, t), $t(t), r & 4)) {
        if (t.stateNode === null) throw Error(b(162));
        ((s = t.stateNode), (i = t.memoizedProps));
        try {
          s.nodeValue = i;
        } catch (P) {
          Te(t, t.return, P);
        }
      }
      break;
    case 3:
      if (
        (Nt(e, t), $t(t), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Oi(e.containerInfo);
        } catch (P) {
          Te(t, t.return, P);
        }
      break;
    case 4:
      (Nt(e, t), $t(t));
      break;
    case 13:
      (Nt(e, t),
        $t(t),
        (s = t.child),
        s.flags & 8192 &&
          ((i = s.memoizedState !== null),
          (s.stateNode.isHidden = i),
          !i ||
            (s.alternate !== null && s.alternate.memoizedState !== null) ||
            (Zh = Re())),
        r & 4 && Wp(t));
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        t.mode & 1 ? ((Xe = (h = Xe) || d), Nt(e, t), (Xe = h)) : Nt(e, t),
        $t(t),
        r & 8192)
      ) {
        if (
          ((h = t.memoizedState !== null),
          (t.stateNode.isHidden = h) && !d && t.mode & 1)
        )
          for (G = t, d = t.child; d !== null; ) {
            for (p = G = d; G !== null; ) {
              switch (((m = G), (T = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ii(4, m, m.return);
                  break;
                case 1:
                  ts(m, m.return);
                  var x = m.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    ((r = m), (n = m.return));
                    try {
                      ((e = r),
                        (x.props = e.memoizedProps),
                        (x.state = e.memoizedState),
                        x.componentWillUnmount());
                    } catch (P) {
                      Te(r, n, P);
                    }
                  }
                  break;
                case 5:
                  ts(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Kp(p);
                    continue;
                  }
              }
              T !== null ? ((T.return = m), (G = T)) : Kp(p);
            }
            d = d.sibling;
          }
        e: for (d = null, p = t; ; ) {
          if (p.tag === 5) {
            if (d === null) {
              d = p;
              try {
                ((s = p.stateNode),
                  h
                    ? ((i = s.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((l = p.stateNode),
                      (u = p.memoizedProps.style),
                      (o =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (l.style.display = Gg("display", o))));
              } catch (P) {
                Te(t, t.return, P);
              }
            }
          } else if (p.tag === 6) {
            if (d === null)
              try {
                p.stateNode.nodeValue = h ? "" : p.memoizedProps;
              } catch (P) {
                Te(t, t.return, P);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === t) &&
            p.child !== null
          ) {
            ((p.child.return = p), (p = p.child));
            continue;
          }
          if (p === t) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === t) break e;
            (d === p && (d = null), (p = p.return));
          }
          (d === p && (d = null),
            (p.sibling.return = p.return),
            (p = p.sibling));
        }
      }
      break;
    case 19:
      (Nt(e, t), $t(t), r & 4 && Wp(t));
      break;
    case 21:
      break;
    default:
      (Nt(e, t), $t(t));
  }
}
function $t(t) {
  var e = t.flags;
  if (e & 2) {
    try {
      e: {
        for (var n = t.return; n !== null; ) {
          if (gv(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(b(160));
      }
      switch (r.tag) {
        case 5:
          var s = r.stateNode;
          r.flags & 32 && (Vi(s, ""), (r.flags &= -33));
          var i = Hp(t);
          bc(t, i, s);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            l = Hp(t);
          jc(t, l, o);
          break;
        default:
          throw Error(b(161));
      }
    } catch (u) {
      Te(t, t.return, u);
    }
    t.flags &= -3;
  }
  e & 4096 && (t.flags &= -4097);
}
function VT(t, e, n) {
  ((G = t), _v(t));
}
function _v(t, e, n) {
  for (var r = (t.mode & 1) !== 0; G !== null; ) {
    var s = G,
      i = s.child;
    if (s.tag === 22 && r) {
      var o = s.memoizedState !== null || Ho;
      if (!o) {
        var l = s.alternate,
          u = (l !== null && l.memoizedState !== null) || Xe;
        l = Ho;
        var h = Xe;
        if (((Ho = o), (Xe = u) && !h))
          for (G = s; G !== null; )
            ((o = G),
              (u = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Qp(s)
                : u !== null
                  ? ((u.return = o), (G = u))
                  : Qp(s));
        for (; i !== null; ) ((G = i), _v(i), (i = i.sibling));
        ((G = s), (Ho = l), (Xe = h));
      }
      qp(t);
    } else
      s.subtreeFlags & 8772 && i !== null ? ((i.return = s), (G = i)) : qp(t);
  }
}
function qp(t) {
  for (; G !== null; ) {
    var e = G;
    if (e.flags & 8772) {
      var n = e.alternate;
      try {
        if (e.flags & 8772)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              Xe || _l(5, e);
              break;
            case 1:
              var r = e.stateNode;
              if (e.flags & 4 && !Xe)
                if (n === null) r.componentDidMount();
                else {
                  var s =
                    e.elementType === e.type
                      ? n.memoizedProps
                      : Vt(e.type, n.memoizedProps);
                  r.componentDidUpdate(
                    s,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = e.updateQueue;
              i !== null && Np(e, i, r);
              break;
            case 3:
              var o = e.updateQueue;
              if (o !== null) {
                if (((n = null), e.child !== null))
                  switch (e.child.tag) {
                    case 5:
                      n = e.child.stateNode;
                      break;
                    case 1:
                      n = e.child.stateNode;
                  }
                Np(e, o, n);
              }
              break;
            case 5:
              var l = e.stateNode;
              if (n === null && e.flags & 4) {
                n = l;
                var u = e.memoizedProps;
                switch (e.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (e.memoizedState === null) {
                var h = e.alternate;
                if (h !== null) {
                  var d = h.memoizedState;
                  if (d !== null) {
                    var p = d.dehydrated;
                    p !== null && Oi(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(b(163));
          }
        Xe || (e.flags & 512 && Fc(e));
      } catch (m) {
        Te(e, e.return, m);
      }
    }
    if (e === t) {
      G = null;
      break;
    }
    if (((n = e.sibling), n !== null)) {
      ((n.return = e.return), (G = n));
      break;
    }
    G = e.return;
  }
}
function Kp(t) {
  for (; G !== null; ) {
    var e = G;
    if (e === t) {
      G = null;
      break;
    }
    var n = e.sibling;
    if (n !== null) {
      ((n.return = e.return), (G = n));
      break;
    }
    G = e.return;
  }
}
function Qp(t) {
  for (; G !== null; ) {
    var e = G;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var n = e.return;
          try {
            _l(4, e);
          } catch (u) {
            Te(e, n, u);
          }
          break;
        case 1:
          var r = e.stateNode;
          if (typeof r.componentDidMount == "function") {
            var s = e.return;
            try {
              r.componentDidMount();
            } catch (u) {
              Te(e, s, u);
            }
          }
          var i = e.return;
          try {
            Fc(e);
          } catch (u) {
            Te(e, i, u);
          }
          break;
        case 5:
          var o = e.return;
          try {
            Fc(e);
          } catch (u) {
            Te(e, o, u);
          }
      }
    } catch (u) {
      Te(e, e.return, u);
    }
    if (e === t) {
      G = null;
      break;
    }
    var l = e.sibling;
    if (l !== null) {
      ((l.return = e.return), (G = l));
      break;
    }
    G = e.return;
  }
}
var DT = Math.ceil,
  za = vn.ReactCurrentDispatcher,
  Jh = vn.ReactCurrentOwner,
  At = vn.ReactCurrentBatchConfig,
  se = 0,
  Ue = null,
  xe = null,
  Ge = 0,
  pt = 0,
  ns = sr(0),
  De = 0,
  qi = null,
  Ar = 0,
  El = 0,
  Xh = 0,
  Ri = null,
  lt = null,
  Zh = 0,
  _s = 1 / 0,
  rn = null,
  Ba = !1,
  Uc = null,
  zn = null,
  Wo = !1,
  Ln = null,
  $a = 0,
  Ai = 0,
  zc = null,
  ca = -1,
  ha = 0;
function st() {
  return se & 6 ? Re() : ca !== -1 ? ca : (ca = Re());
}
function Bn(t) {
  return t.mode & 1
    ? se & 2 && Ge !== 0
      ? Ge & -Ge
      : gT.transition !== null
        ? (ha === 0 && (ha = ry()), ha)
        : ((t = oe),
          t !== 0 || ((t = window.event), (t = t === void 0 ? 16 : cy(t.type))),
          t)
    : 1;
}
function Ft(t, e, n, r) {
  if (50 < Ai) throw ((Ai = 0), (zc = null), Error(b(185)));
  (io(t, n, r),
    (!(se & 2) || t !== Ue) &&
      (t === Ue && (!(se & 2) && (El |= n), De === 4 && Vn(t, Ge)),
      ft(t, r),
      n === 1 && se === 0 && !(e.mode & 1) && ((_s = Re() + 500), gl && ir())));
}
function ft(t, e) {
  var n = t.callbackNode;
  g0(t, e);
  var r = Aa(t, t === Ue ? Ge : 0);
  if (r === 0)
    (n !== null && sp(n), (t.callbackNode = null), (t.callbackPriority = 0));
  else if (((e = r & -r), t.callbackPriority !== e)) {
    if ((n != null && sp(n), e === 1))
      (t.tag === 0 ? mT(Yp.bind(null, t)) : Py(Yp.bind(null, t)),
        hT(function () {
          !(se & 6) && ir();
        }),
        (n = null));
    else {
      switch (sy(r)) {
        case 1:
          n = Rh;
          break;
        case 4:
          n = ty;
          break;
        case 16:
          n = Ra;
          break;
        case 536870912:
          n = ny;
          break;
        default:
          n = Ra;
      }
      n = Cv(n, Ev.bind(null, t));
    }
    ((t.callbackPriority = e), (t.callbackNode = n));
  }
}
function Ev(t, e) {
  if (((ca = -1), (ha = 0), se & 6)) throw Error(b(327));
  var n = t.callbackNode;
  if (ls() && t.callbackNode !== n) return null;
  var r = Aa(t, t === Ue ? Ge : 0);
  if (r === 0) return null;
  if (r & 30 || r & t.expiredLanes || e) e = Ga(t, r);
  else {
    e = r;
    var s = se;
    se |= 2;
    var i = Tv();
    (Ue !== t || Ge !== e) && ((rn = null), (_s = Re() + 500), Er(t, e));
    do
      try {
        OT();
        break;
      } catch (l) {
        wv(t, l);
      }
    while (!0);
    (jh(),
      (za.current = i),
      (se = s),
      xe !== null ? (e = 0) : ((Ue = null), (Ge = 0), (e = De)));
  }
  if (e !== 0) {
    if (
      (e === 2 && ((s = pc(t)), s !== 0 && ((r = s), (e = Bc(t, s)))), e === 1)
    )
      throw ((n = qi), Er(t, 0), Vn(t, r), ft(t, Re()), n);
    if (e === 6) Vn(t, r);
    else {
      if (
        ((s = t.current.alternate),
        !(r & 30) &&
          !LT(s) &&
          ((e = Ga(t, r)),
          e === 2 && ((i = pc(t)), i !== 0 && ((r = i), (e = Bc(t, i)))),
          e === 1))
      )
        throw ((n = qi), Er(t, 0), Vn(t, r), ft(t, Re()), n);
      switch (((t.finishedWork = s), (t.finishedLanes = r), e)) {
        case 0:
        case 1:
          throw Error(b(345));
        case 2:
          pr(t, lt, rn);
          break;
        case 3:
          if (
            (Vn(t, r), (r & 130023424) === r && ((e = Zh + 500 - Re()), 10 < e))
          ) {
            if (Aa(t, 0) !== 0) break;
            if (((s = t.suspendedLanes), (s & r) !== r)) {
              (st(), (t.pingedLanes |= t.suspendedLanes & s));
              break;
            }
            t.timeoutHandle = Tc(pr.bind(null, t, lt, rn), e);
            break;
          }
          pr(t, lt, rn);
          break;
        case 4:
          if ((Vn(t, r), (r & 4194240) === r)) break;
          for (e = t.eventTimes, s = -1; 0 < r; ) {
            var o = 31 - Ot(r);
            ((i = 1 << o), (o = e[o]), o > s && (s = o), (r &= ~i));
          }
          if (
            ((r = s),
            (r = Re() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * DT(r / 1960)) - r),
            10 < r)
          ) {
            t.timeoutHandle = Tc(pr.bind(null, t, lt, rn), r);
            break;
          }
          pr(t, lt, rn);
          break;
        case 5:
          pr(t, lt, rn);
          break;
        default:
          throw Error(b(329));
      }
    }
  }
  return (ft(t, Re()), t.callbackNode === n ? Ev.bind(null, t) : null);
}
function Bc(t, e) {
  var n = Ri;
  return (
    t.current.memoizedState.isDehydrated && (Er(t, e).flags |= 256),
    (t = Ga(t, e)),
    t !== 2 && ((e = lt), (lt = n), e !== null && $c(e)),
    t
  );
}
function $c(t) {
  lt === null ? (lt = t) : lt.push.apply(lt, t);
}
function LT(t) {
  for (var e = t; ; ) {
    if (e.flags & 16384) {
      var n = e.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var s = n[r],
            i = s.getSnapshot;
          s = s.value;
          try {
            if (!Ut(i(), s)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
      ((n.return = e), (e = n));
    else {
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return !0;
        e = e.return;
      }
      ((e.sibling.return = e.return), (e = e.sibling));
    }
  }
  return !0;
}
function Vn(t, e) {
  for (
    e &= ~Xh,
      e &= ~El,
      t.suspendedLanes |= e,
      t.pingedLanes &= ~e,
      t = t.expirationTimes;
    0 < e;
  ) {
    var n = 31 - Ot(e),
      r = 1 << n;
    ((t[n] = -1), (e &= ~r));
  }
}
function Yp(t) {
  if (se & 6) throw Error(b(327));
  ls();
  var e = Aa(t, 0);
  if (!(e & 1)) return (ft(t, Re()), null);
  var n = Ga(t, e);
  if (t.tag !== 0 && n === 2) {
    var r = pc(t);
    r !== 0 && ((e = r), (n = Bc(t, r)));
  }
  if (n === 1) throw ((n = qi), Er(t, 0), Vn(t, e), ft(t, Re()), n);
  if (n === 6) throw Error(b(345));
  return (
    (t.finishedWork = t.current.alternate),
    (t.finishedLanes = e),
    pr(t, lt, rn),
    ft(t, Re()),
    null
  );
}
function ef(t, e) {
  var n = se;
  se |= 1;
  try {
    return t(e);
  } finally {
    ((se = n), se === 0 && ((_s = Re() + 500), gl && ir()));
  }
}
function Cr(t) {
  Ln !== null && Ln.tag === 0 && !(se & 6) && ls();
  var e = se;
  se |= 1;
  var n = At.transition,
    r = oe;
  try {
    if (((At.transition = null), (oe = 1), t)) return t();
  } finally {
    ((oe = r), (At.transition = n), (se = e), !(se & 6) && ir());
  }
}
function tf() {
  ((pt = ns.current), de(ns));
}
function Er(t, e) {
  ((t.finishedWork = null), (t.finishedLanes = 0));
  var n = t.timeoutHandle;
  if ((n !== -1 && ((t.timeoutHandle = -1), cT(n)), xe !== null))
    for (n = xe.return; n !== null; ) {
      var r = n;
      switch ((Mh(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && Na());
          break;
        case 3:
          (ys(), de(ct), de(et), Gh());
          break;
        case 5:
          $h(r);
          break;
        case 4:
          ys();
          break;
        case 13:
          de(ge);
          break;
        case 19:
          de(ge);
          break;
        case 10:
          bh(r.type._context);
          break;
        case 22:
        case 23:
          tf();
      }
      n = n.return;
    }
  if (
    ((Ue = t),
    (xe = t = $n(t.current, null)),
    (Ge = pt = e),
    (De = 0),
    (qi = null),
    (Xh = El = Ar = 0),
    (lt = Ri = null),
    yr !== null)
  ) {
    for (e = 0; e < yr.length; e++)
      if (((n = yr[e]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var s = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          ((i.next = s), (r.next = o));
        }
        n.pending = r;
      }
    yr = null;
  }
  return t;
}
function wv(t, e) {
  do {
    var n = xe;
    try {
      if ((jh(), (aa.current = Ua), ba)) {
        for (var r = ye.memoizedState; r !== null; ) {
          var s = r.queue;
          (s !== null && (s.pending = null), (r = r.next));
        }
        ba = !1;
      }
      if (
        ((Rr = 0),
        (be = Ne = ye = null),
        (Si = !1),
        (Gi = 0),
        (Jh.current = null),
        n === null || n.return === null)
      ) {
        ((De = 1), (qi = e), (xe = null));
        break;
      }
      e: {
        var i = t,
          o = n.return,
          l = n,
          u = e;
        if (
          ((e = Ge),
          (l.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var h = u,
            d = l,
            p = d.tag;
          if (!(d.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var m = d.alternate;
            m
              ? ((d.updateQueue = m.updateQueue),
                (d.memoizedState = m.memoizedState),
                (d.lanes = m.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var T = Fp(o);
          if (T !== null) {
            ((T.flags &= -257),
              jp(T, o, l, i, e),
              T.mode & 1 && Op(i, h, e),
              (e = T),
              (u = h));
            var x = e.updateQueue;
            if (x === null) {
              var P = new Set();
              (P.add(u), (e.updateQueue = P));
            } else x.add(u);
            break e;
          } else {
            if (!(e & 1)) {
              (Op(i, h, e), nf());
              break e;
            }
            u = Error(b(426));
          }
        } else if (me && l.mode & 1) {
          var D = Fp(o);
          if (D !== null) {
            (!(D.flags & 65536) && (D.flags |= 256),
              jp(D, o, l, i, e),
              Oh(vs(u, l)));
            break e;
          }
        }
        ((i = u = vs(u, l)),
          De !== 4 && (De = 2),
          Ri === null ? (Ri = [i]) : Ri.push(i),
          (i = o));
        do {
          switch (i.tag) {
            case 3:
              ((i.flags |= 65536), (e &= -e), (i.lanes |= e));
              var _ = sv(i, u, e);
              kp(i, _);
              break e;
            case 1:
              l = u;
              var v = i.type,
                R = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof v.getDerivedStateFromError == "function" ||
                  (R !== null &&
                    typeof R.componentDidCatch == "function" &&
                    (zn === null || !zn.has(R))))
              ) {
                ((i.flags |= 65536), (e &= -e), (i.lanes |= e));
                var M = iv(i, l, e);
                kp(i, M);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Iv(n);
    } catch (j) {
      ((e = j), xe === n && n !== null && (xe = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function Tv() {
  var t = za.current;
  return ((za.current = Ua), t === null ? Ua : t);
}
function nf() {
  ((De === 0 || De === 3 || De === 2) && (De = 4),
    Ue === null || (!(Ar & 268435455) && !(El & 268435455)) || Vn(Ue, Ge));
}
function Ga(t, e) {
  var n = se;
  se |= 2;
  var r = Tv();
  (Ue !== t || Ge !== e) && ((rn = null), Er(t, e));
  do
    try {
      MT();
      break;
    } catch (s) {
      wv(t, s);
    }
  while (!0);
  if ((jh(), (se = n), (za.current = r), xe !== null)) throw Error(b(261));
  return ((Ue = null), (Ge = 0), De);
}
function MT() {
  for (; xe !== null; ) Sv(xe);
}
function OT() {
  for (; xe !== null && !a0(); ) Sv(xe);
}
function Sv(t) {
  var e = Av(t.alternate, t, pt);
  ((t.memoizedProps = t.pendingProps),
    e === null ? Iv(t) : (xe = e),
    (Jh.current = null));
}
function Iv(t) {
  var e = t;
  do {
    var n = e.alternate;
    if (((t = e.return), e.flags & 32768)) {
      if (((n = PT(n, e)), n !== null)) {
        ((n.flags &= 32767), (xe = n));
        return;
      }
      if (t !== null)
        ((t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null));
      else {
        ((De = 6), (xe = null));
        return;
      }
    } else if (((n = xT(n, e, pt)), n !== null)) {
      xe = n;
      return;
    }
    if (((e = e.sibling), e !== null)) {
      xe = e;
      return;
    }
    xe = e = t;
  } while (e !== null);
  De === 0 && (De = 5);
}
function pr(t, e, n) {
  var r = oe,
    s = At.transition;
  try {
    ((At.transition = null), (oe = 1), FT(t, e, n, r));
  } finally {
    ((At.transition = s), (oe = r));
  }
  return null;
}
function FT(t, e, n, r) {
  do ls();
  while (Ln !== null);
  if (se & 6) throw Error(b(327));
  n = t.finishedWork;
  var s = t.finishedLanes;
  if (n === null) return null;
  if (((t.finishedWork = null), (t.finishedLanes = 0), n === t.current))
    throw Error(b(177));
  ((t.callbackNode = null), (t.callbackPriority = 0));
  var i = n.lanes | n.childLanes;
  if (
    (y0(t, i),
    t === Ue && ((xe = Ue = null), (Ge = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Wo ||
      ((Wo = !0),
      Cv(Ra, function () {
        return (ls(), null);
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    ((i = At.transition), (At.transition = null));
    var o = oe;
    oe = 1;
    var l = se;
    ((se |= 4),
      (Jh.current = null),
      NT(t, n),
      vv(n, t),
      rT(Ec),
      (Ca = !!_c),
      (Ec = _c = null),
      (t.current = n),
      VT(n),
      l0(),
      (se = l),
      (oe = o),
      (At.transition = i));
  } else t.current = n;
  if (
    (Wo && ((Wo = !1), (Ln = t), ($a = s)),
    (i = t.pendingLanes),
    i === 0 && (zn = null),
    h0(n.stateNode),
    ft(t, Re()),
    e !== null)
  )
    for (r = t.onRecoverableError, n = 0; n < e.length; n++)
      ((s = e[n]), r(s.value, { componentStack: s.stack, digest: s.digest }));
  if (Ba) throw ((Ba = !1), (t = Uc), (Uc = null), t);
  return (
    $a & 1 && t.tag !== 0 && ls(),
    (i = t.pendingLanes),
    i & 1 ? (t === zc ? Ai++ : ((Ai = 0), (zc = t))) : (Ai = 0),
    ir(),
    null
  );
}
function ls() {
  if (Ln !== null) {
    var t = sy($a),
      e = At.transition,
      n = oe;
    try {
      if (((At.transition = null), (oe = 16 > t ? 16 : t), Ln === null))
        var r = !1;
      else {
        if (((t = Ln), (Ln = null), ($a = 0), se & 6)) throw Error(b(331));
        var s = se;
        for (se |= 4, G = t.current; G !== null; ) {
          var i = G,
            o = i.child;
          if (G.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var u = 0; u < l.length; u++) {
                var h = l[u];
                for (G = h; G !== null; ) {
                  var d = G;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ii(8, d, i);
                  }
                  var p = d.child;
                  if (p !== null) ((p.return = d), (G = p));
                  else
                    for (; G !== null; ) {
                      d = G;
                      var m = d.sibling,
                        T = d.return;
                      if ((mv(d), d === h)) {
                        G = null;
                        break;
                      }
                      if (m !== null) {
                        ((m.return = T), (G = m));
                        break;
                      }
                      G = T;
                    }
                }
              }
              var x = i.alternate;
              if (x !== null) {
                var P = x.child;
                if (P !== null) {
                  x.child = null;
                  do {
                    var D = P.sibling;
                    ((P.sibling = null), (P = D));
                  } while (P !== null);
                }
              }
              G = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) ((o.return = i), (G = o));
          else
            e: for (; G !== null; ) {
              if (((i = G), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ii(9, i, i.return);
                }
              var _ = i.sibling;
              if (_ !== null) {
                ((_.return = i.return), (G = _));
                break e;
              }
              G = i.return;
            }
        }
        var v = t.current;
        for (G = v; G !== null; ) {
          o = G;
          var R = o.child;
          if (o.subtreeFlags & 2064 && R !== null) ((R.return = o), (G = R));
          else
            e: for (o = v; G !== null; ) {
              if (((l = G), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      _l(9, l);
                  }
                } catch (j) {
                  Te(l, l.return, j);
                }
              if (l === o) {
                G = null;
                break e;
              }
              var M = l.sibling;
              if (M !== null) {
                ((M.return = l.return), (G = M));
                break e;
              }
              G = l.return;
            }
        }
        if (
          ((se = s), ir(), qt && typeof qt.onPostCommitFiberRoot == "function")
        )
          try {
            qt.onPostCommitFiberRoot(hl, t);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((oe = n), (At.transition = e));
    }
  }
  return !1;
}
function Jp(t, e, n) {
  ((e = vs(n, e)),
    (e = sv(t, e, 1)),
    (t = Un(t, e, 1)),
    (e = st()),
    t !== null && (io(t, 1, e), ft(t, e)));
}
function Te(t, e, n) {
  if (t.tag === 3) Jp(t, t, n);
  else
    for (; e !== null; ) {
      if (e.tag === 3) {
        Jp(e, t, n);
        break;
      } else if (e.tag === 1) {
        var r = e.stateNode;
        if (
          typeof e.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (zn === null || !zn.has(r)))
        ) {
          ((t = vs(n, t)),
            (t = iv(e, t, 1)),
            (e = Un(e, t, 1)),
            (t = st()),
            e !== null && (io(e, 1, t), ft(e, t)));
          break;
        }
      }
      e = e.return;
    }
}
function jT(t, e, n) {
  var r = t.pingCache;
  (r !== null && r.delete(e),
    (e = st()),
    (t.pingedLanes |= t.suspendedLanes & n),
    Ue === t &&
      (Ge & n) === n &&
      (De === 4 || (De === 3 && (Ge & 130023424) === Ge && 500 > Re() - Zh)
        ? Er(t, 0)
        : (Xh |= n)),
    ft(t, e));
}
function Rv(t, e) {
  e === 0 &&
    (t.mode & 1
      ? ((e = Oo), (Oo <<= 1), !(Oo & 130023424) && (Oo = 4194304))
      : (e = 1));
  var n = st();
  ((t = fn(t, e)), t !== null && (io(t, e, n), ft(t, n)));
}
function bT(t) {
  var e = t.memoizedState,
    n = 0;
  (e !== null && (n = e.retryLane), Rv(t, n));
}
function UT(t, e) {
  var n = 0;
  switch (t.tag) {
    case 13:
      var r = t.stateNode,
        s = t.memoizedState;
      s !== null && (n = s.retryLane);
      break;
    case 19:
      r = t.stateNode;
      break;
    default:
      throw Error(b(314));
  }
  (r !== null && r.delete(e), Rv(t, n));
}
var Av;
Av = function (t, e, n) {
  if (t !== null)
    if (t.memoizedProps !== e.pendingProps || ct.current) ut = !0;
    else {
      if (!(t.lanes & n) && !(e.flags & 128)) return ((ut = !1), CT(t, e, n));
      ut = !!(t.flags & 131072);
    }
  else ((ut = !1), me && e.flags & 1048576 && ky(e, La, e.index));
  switch (((e.lanes = 0), e.tag)) {
    case 2:
      var r = e.type;
      (ua(t, e), (t = e.pendingProps));
      var s = ps(e, et.current);
      (as(e, n), (s = Wh(null, e, r, t, s, n)));
      var i = qh();
      return (
        (e.flags |= 1),
        typeof s == "object" &&
        s !== null &&
        typeof s.render == "function" &&
        s.$$typeof === void 0
          ? ((e.tag = 1),
            (e.memoizedState = null),
            (e.updateQueue = null),
            ht(r) ? ((i = !0), Va(e)) : (i = !1),
            (e.memoizedState =
              s.state !== null && s.state !== void 0 ? s.state : null),
            zh(e),
            (s.updater = vl),
            (e.stateNode = s),
            (s._reactInternals = e),
            Pc(e, r, t, n),
            (e = Vc(null, e, r, !0, i, n)))
          : ((e.tag = 0), me && i && Lh(e), rt(null, e, s, n), (e = e.child)),
        e
      );
    case 16:
      r = e.elementType;
      e: {
        switch (
          (ua(t, e),
          (t = e.pendingProps),
          (s = r._init),
          (r = s(r._payload)),
          (e.type = r),
          (s = e.tag = BT(r)),
          (t = Vt(r, t)),
          s)
        ) {
          case 0:
            e = Nc(null, e, r, t, n);
            break e;
          case 1:
            e = zp(null, e, r, t, n);
            break e;
          case 11:
            e = bp(null, e, r, t, n);
            break e;
          case 14:
            e = Up(null, e, r, Vt(r.type, t), n);
            break e;
        }
        throw Error(b(306, r, ""));
      }
      return e;
    case 0:
      return (
        (r = e.type),
        (s = e.pendingProps),
        (s = e.elementType === r ? s : Vt(r, s)),
        Nc(t, e, r, s, n)
      );
    case 1:
      return (
        (r = e.type),
        (s = e.pendingProps),
        (s = e.elementType === r ? s : Vt(r, s)),
        zp(t, e, r, s, n)
      );
    case 3:
      e: {
        if ((uv(e), t === null)) throw Error(b(387));
        ((r = e.pendingProps),
          (i = e.memoizedState),
          (s = i.element),
          Oy(t, e),
          Fa(e, r, null, n));
        var o = e.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (e.updateQueue.baseState = i),
            (e.memoizedState = i),
            e.flags & 256)
          ) {
            ((s = vs(Error(b(423)), e)), (e = Bp(t, e, r, n, s)));
            break e;
          } else if (r !== s) {
            ((s = vs(Error(b(424)), e)), (e = Bp(t, e, r, n, s)));
            break e;
          } else
            for (
              mt = bn(e.stateNode.containerInfo.firstChild),
                gt = e,
                me = !0,
                Lt = null,
                n = Ly(e, null, r, n),
                e.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((ms(), r === s)) {
            e = dn(t, e, n);
            break e;
          }
          rt(t, e, r, n);
        }
        e = e.child;
      }
      return e;
    case 5:
      return (
        Fy(e),
        t === null && Ac(e),
        (r = e.type),
        (s = e.pendingProps),
        (i = t !== null ? t.memoizedProps : null),
        (o = s.children),
        wc(r, s) ? (o = null) : i !== null && wc(r, i) && (e.flags |= 32),
        lv(t, e),
        rt(t, e, o, n),
        e.child
      );
    case 6:
      return (t === null && Ac(e), null);
    case 13:
      return cv(t, e, n);
    case 4:
      return (
        Bh(e, e.stateNode.containerInfo),
        (r = e.pendingProps),
        t === null ? (e.child = gs(e, null, r, n)) : rt(t, e, r, n),
        e.child
      );
    case 11:
      return (
        (r = e.type),
        (s = e.pendingProps),
        (s = e.elementType === r ? s : Vt(r, s)),
        bp(t, e, r, s, n)
      );
    case 7:
      return (rt(t, e, e.pendingProps, n), e.child);
    case 8:
      return (rt(t, e, e.pendingProps.children, n), e.child);
    case 12:
      return (rt(t, e, e.pendingProps.children, n), e.child);
    case 10:
      e: {
        if (
          ((r = e.type._context),
          (s = e.pendingProps),
          (i = e.memoizedProps),
          (o = s.value),
          ue(Ma, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (Ut(i.value, o)) {
            if (i.children === s.children && !ct.current) {
              e = dn(t, e, n);
              break e;
            }
          } else
            for (i = e.child, i !== null && (i.return = e); i !== null; ) {
              var l = i.dependencies;
              if (l !== null) {
                o = i.child;
                for (var u = l.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (i.tag === 1) {
                      ((u = ln(-1, n & -n)), (u.tag = 2));
                      var h = i.updateQueue;
                      if (h !== null) {
                        h = h.shared;
                        var d = h.pending;
                        (d === null
                          ? (u.next = u)
                          : ((u.next = d.next), (d.next = u)),
                          (h.pending = u));
                      }
                    }
                    ((i.lanes |= n),
                      (u = i.alternate),
                      u !== null && (u.lanes |= n),
                      Cc(i.return, n, e),
                      (l.lanes |= n));
                    break;
                  }
                  u = u.next;
                }
              } else if (i.tag === 10) o = i.type === e.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(b(341));
                ((o.lanes |= n),
                  (l = o.alternate),
                  l !== null && (l.lanes |= n),
                  Cc(o, n, e),
                  (o = i.sibling));
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === e) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    ((i.return = o.return), (o = i));
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        (rt(t, e, s.children, n), (e = e.child));
      }
      return e;
    case 9:
      return (
        (s = e.type),
        (r = e.pendingProps.children),
        as(e, n),
        (s = Ct(s)),
        (r = r(s)),
        (e.flags |= 1),
        rt(t, e, r, n),
        e.child
      );
    case 14:
      return (
        (r = e.type),
        (s = Vt(r, e.pendingProps)),
        (s = Vt(r.type, s)),
        Up(t, e, r, s, n)
      );
    case 15:
      return ov(t, e, e.type, e.pendingProps, n);
    case 17:
      return (
        (r = e.type),
        (s = e.pendingProps),
        (s = e.elementType === r ? s : Vt(r, s)),
        ua(t, e),
        (e.tag = 1),
        ht(r) ? ((t = !0), Va(e)) : (t = !1),
        as(e, n),
        rv(e, r, s),
        Pc(e, r, s, n),
        Vc(null, e, r, !0, t, n)
      );
    case 19:
      return hv(t, e, n);
    case 22:
      return av(t, e, n);
  }
  throw Error(b(156, e.tag));
};
function Cv(t, e) {
  return ey(t, e);
}
function zT(t, e, n, r) {
  ((this.tag = t),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = e),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function Rt(t, e, n, r) {
  return new zT(t, e, n, r);
}
function rf(t) {
  return ((t = t.prototype), !(!t || !t.isReactComponent));
}
function BT(t) {
  if (typeof t == "function") return rf(t) ? 1 : 0;
  if (t != null) {
    if (((t = t.$$typeof), t === Th)) return 11;
    if (t === Sh) return 14;
  }
  return 2;
}
function $n(t, e) {
  var n = t.alternate;
  return (
    n === null
      ? ((n = Rt(t.tag, e, t.key, t.mode)),
        (n.elementType = t.elementType),
        (n.type = t.type),
        (n.stateNode = t.stateNode),
        (n.alternate = t),
        (t.alternate = n))
      : ((n.pendingProps = e),
        (n.type = t.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = t.flags & 14680064),
    (n.childLanes = t.childLanes),
    (n.lanes = t.lanes),
    (n.child = t.child),
    (n.memoizedProps = t.memoizedProps),
    (n.memoizedState = t.memoizedState),
    (n.updateQueue = t.updateQueue),
    (e = t.dependencies),
    (n.dependencies =
      e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
    (n.sibling = t.sibling),
    (n.index = t.index),
    (n.ref = t.ref),
    n
  );
}
function fa(t, e, n, r, s, i) {
  var o = 2;
  if (((r = t), typeof t == "function")) rf(t) && (o = 1);
  else if (typeof t == "string") o = 5;
  else
    e: switch (t) {
      case Wr:
        return wr(n.children, s, i, e);
      case wh:
        ((o = 8), (s |= 8));
        break;
      case Zu:
        return (
          (t = Rt(12, n, e, s | 2)),
          (t.elementType = Zu),
          (t.lanes = i),
          t
        );
      case ec:
        return ((t = Rt(13, n, e, s)), (t.elementType = ec), (t.lanes = i), t);
      case tc:
        return ((t = Rt(19, n, e, s)), (t.elementType = tc), (t.lanes = i), t);
      case Fg:
        return wl(n, s, i, e);
      default:
        if (typeof t == "object" && t !== null)
          switch (t.$$typeof) {
            case Mg:
              o = 10;
              break e;
            case Og:
              o = 9;
              break e;
            case Th:
              o = 11;
              break e;
            case Sh:
              o = 14;
              break e;
            case xn:
              ((o = 16), (r = null));
              break e;
          }
        throw Error(b(130, t == null ? t : typeof t, ""));
    }
  return (
    (e = Rt(o, n, e, s)),
    (e.elementType = t),
    (e.type = r),
    (e.lanes = i),
    e
  );
}
function wr(t, e, n, r) {
  return ((t = Rt(7, t, r, e)), (t.lanes = n), t);
}
function wl(t, e, n, r) {
  return (
    (t = Rt(22, t, r, e)),
    (t.elementType = Fg),
    (t.lanes = n),
    (t.stateNode = { isHidden: !1 }),
    t
  );
}
function Lu(t, e, n) {
  return ((t = Rt(6, t, null, e)), (t.lanes = n), t);
}
function Mu(t, e, n) {
  return (
    (e = Rt(4, t.children !== null ? t.children : [], t.key, e)),
    (e.lanes = n),
    (e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation,
    }),
    e
  );
}
function $T(t, e, n, r, s) {
  ((this.tag = e),
    (this.containerInfo = t),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = mu(0)),
    (this.expirationTimes = mu(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = mu(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = s),
    (this.mutableSourceEagerHydrationData = null));
}
function sf(t, e, n, r, s, i, o, l, u) {
  return (
    (t = new $T(t, e, n, l, u)),
    e === 1 ? ((e = 1), i === !0 && (e |= 8)) : (e = 0),
    (i = Rt(3, null, null, e)),
    (t.current = i),
    (i.stateNode = t),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    zh(i),
    t
  );
}
function GT(t, e, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Hr,
    key: r == null ? null : "" + r,
    children: t,
    containerInfo: e,
    implementation: n,
  };
}
function xv(t) {
  if (!t) return Qn;
  t = t._reactInternals;
  e: {
    if (Vr(t) !== t || t.tag !== 1) throw Error(b(170));
    var e = t;
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context;
          break e;
        case 1:
          if (ht(e.type)) {
            e = e.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      e = e.return;
    } while (e !== null);
    throw Error(b(171));
  }
  if (t.tag === 1) {
    var n = t.type;
    if (ht(n)) return xy(t, n, e);
  }
  return e;
}
function Pv(t, e, n, r, s, i, o, l, u) {
  return (
    (t = sf(n, r, !0, t, s, i, o, l, u)),
    (t.context = xv(null)),
    (n = t.current),
    (r = st()),
    (s = Bn(n)),
    (i = ln(r, s)),
    (i.callback = e ?? null),
    Un(n, i, s),
    (t.current.lanes = s),
    io(t, s, r),
    ft(t, r),
    t
  );
}
function Tl(t, e, n, r) {
  var s = e.current,
    i = st(),
    o = Bn(s);
  return (
    (n = xv(n)),
    e.context === null ? (e.context = n) : (e.pendingContext = n),
    (e = ln(i, o)),
    (e.payload = { element: t }),
    (r = r === void 0 ? null : r),
    r !== null && (e.callback = r),
    (t = Un(s, e, o)),
    t !== null && (Ft(t, s, o, i), oa(t, s, o)),
    o
  );
}
function Ha(t) {
  if (((t = t.current), !t.child)) return null;
  switch (t.child.tag) {
    case 5:
      return t.child.stateNode;
    default:
      return t.child.stateNode;
  }
}
function Xp(t, e) {
  if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
    var n = t.retryLane;
    t.retryLane = n !== 0 && n < e ? n : e;
  }
}
function of(t, e) {
  (Xp(t, e), (t = t.alternate) && Xp(t, e));
}
function HT() {
  return null;
}
var kv =
  typeof reportError == "function"
    ? reportError
    : function (t) {
        console.error(t);
      };
function af(t) {
  this._internalRoot = t;
}
Sl.prototype.render = af.prototype.render = function (t) {
  var e = this._internalRoot;
  if (e === null) throw Error(b(409));
  Tl(t, e, null, null);
};
Sl.prototype.unmount = af.prototype.unmount = function () {
  var t = this._internalRoot;
  if (t !== null) {
    this._internalRoot = null;
    var e = t.containerInfo;
    (Cr(function () {
      Tl(null, t, null, null);
    }),
      (e[hn] = null));
  }
};
function Sl(t) {
  this._internalRoot = t;
}
Sl.prototype.unstable_scheduleHydration = function (t) {
  if (t) {
    var e = ay();
    t = { blockedOn: null, target: t, priority: e };
    for (var n = 0; n < Nn.length && e !== 0 && e < Nn[n].priority; n++);
    (Nn.splice(n, 0, t), n === 0 && uy(t));
  }
};
function lf(t) {
  return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
}
function Il(t) {
  return !(
    !t ||
    (t.nodeType !== 1 &&
      t.nodeType !== 9 &&
      t.nodeType !== 11 &&
      (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
  );
}
function Zp() {}
function WT(t, e, n, r, s) {
  if (s) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var h = Ha(o);
        i.call(h);
      };
    }
    var o = Pv(e, r, t, 0, null, !1, !1, "", Zp);
    return (
      (t._reactRootContainer = o),
      (t[hn] = o.current),
      bi(t.nodeType === 8 ? t.parentNode : t),
      Cr(),
      o
    );
  }
  for (; (s = t.lastChild); ) t.removeChild(s);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var h = Ha(u);
      l.call(h);
    };
  }
  var u = sf(t, 0, !1, null, null, !1, !1, "", Zp);
  return (
    (t._reactRootContainer = u),
    (t[hn] = u.current),
    bi(t.nodeType === 8 ? t.parentNode : t),
    Cr(function () {
      Tl(e, u, n, r);
    }),
    u
  );
}
function Rl(t, e, n, r, s) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof s == "function") {
      var l = s;
      s = function () {
        var u = Ha(o);
        l.call(u);
      };
    }
    Tl(e, o, t, s);
  } else o = WT(n, e, t, s, r);
  return Ha(o);
}
iy = function (t) {
  switch (t.tag) {
    case 3:
      var e = t.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var n = hi(e.pendingLanes);
        n !== 0 &&
          (Ah(e, n | 1), ft(e, Re()), !(se & 6) && ((_s = Re() + 500), ir()));
      }
      break;
    case 13:
      (Cr(function () {
        var r = fn(t, 1);
        if (r !== null) {
          var s = st();
          Ft(r, t, 1, s);
        }
      }),
        of(t, 1));
  }
};
Ch = function (t) {
  if (t.tag === 13) {
    var e = fn(t, 134217728);
    if (e !== null) {
      var n = st();
      Ft(e, t, 134217728, n);
    }
    of(t, 134217728);
  }
};
oy = function (t) {
  if (t.tag === 13) {
    var e = Bn(t),
      n = fn(t, e);
    if (n !== null) {
      var r = st();
      Ft(n, t, e, r);
    }
    of(t, e);
  }
};
ay = function () {
  return oe;
};
ly = function (t, e) {
  var n = oe;
  try {
    return ((oe = t), e());
  } finally {
    oe = n;
  }
};
hc = function (t, e, n) {
  switch (e) {
    case "input":
      if ((sc(t, n), (e = n.name), n.type === "radio" && e != null)) {
        for (n = t; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + e) + '][type="radio"]',
          ),
            e = 0;
          e < n.length;
          e++
        ) {
          var r = n[e];
          if (r !== t && r.form === t.form) {
            var s = ml(r);
            if (!s) throw Error(b(90));
            (bg(r), sc(r, s));
          }
        }
      }
      break;
    case "textarea":
      zg(t, n);
      break;
    case "select":
      ((e = n.value), e != null && rs(t, !!n.multiple, e, !1));
  }
};
Kg = ef;
Qg = Cr;
var qT = { usingClientEntryPoint: !1, Events: [ao, Yr, ml, Wg, qg, ef] },
  oi = {
    findFiberByHostInstance: gr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  KT = {
    bundleType: oi.bundleType,
    version: oi.version,
    rendererPackageName: oi.rendererPackageName,
    rendererConfig: oi.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: vn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (t) {
      return ((t = Xg(t)), t === null ? null : t.stateNode);
    },
    findFiberByHostInstance: oi.findFiberByHostInstance || HT,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var qo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!qo.isDisabled && qo.supportsFiber)
    try {
      ((hl = qo.inject(KT)), (qt = qo));
    } catch {}
}
vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = qT;
vt.createPortal = function (t, e) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!lf(e)) throw Error(b(200));
  return GT(t, e, null, n);
};
vt.createRoot = function (t, e) {
  if (!lf(t)) throw Error(b(299));
  var n = !1,
    r = "",
    s = kv;
  return (
    e != null &&
      (e.unstable_strictMode === !0 && (n = !0),
      e.identifierPrefix !== void 0 && (r = e.identifierPrefix),
      e.onRecoverableError !== void 0 && (s = e.onRecoverableError)),
    (e = sf(t, 1, !1, null, null, n, !1, r, s)),
    (t[hn] = e.current),
    bi(t.nodeType === 8 ? t.parentNode : t),
    new af(e)
  );
};
vt.findDOMNode = function (t) {
  if (t == null) return null;
  if (t.nodeType === 1) return t;
  var e = t._reactInternals;
  if (e === void 0)
    throw typeof t.render == "function"
      ? Error(b(188))
      : ((t = Object.keys(t).join(",")), Error(b(268, t)));
  return ((t = Xg(e)), (t = t === null ? null : t.stateNode), t);
};
vt.flushSync = function (t) {
  return Cr(t);
};
vt.hydrate = function (t, e, n) {
  if (!Il(e)) throw Error(b(200));
  return Rl(null, t, e, !0, n);
};
vt.hydrateRoot = function (t, e, n) {
  if (!lf(t)) throw Error(b(405));
  var r = (n != null && n.hydratedSources) || null,
    s = !1,
    i = "",
    o = kv;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (s = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (e = Pv(e, null, t, 1, n ?? null, s, !1, i, o)),
    (t[hn] = e.current),
    bi(t),
    r)
  )
    for (t = 0; t < r.length; t++)
      ((n = r[t]),
        (s = n._getVersion),
        (s = s(n._source)),
        e.mutableSourceEagerHydrationData == null
          ? (e.mutableSourceEagerHydrationData = [n, s])
          : e.mutableSourceEagerHydrationData.push(n, s));
  return new Sl(e);
};
vt.render = function (t, e, n) {
  if (!Il(e)) throw Error(b(200));
  return Rl(null, t, e, !1, n);
};
vt.unmountComponentAtNode = function (t) {
  if (!Il(t)) throw Error(b(40));
  return t._reactRootContainer
    ? (Cr(function () {
        Rl(null, null, t, !1, function () {
          ((t._reactRootContainer = null), (t[hn] = null));
        });
      }),
      !0)
    : !1;
};
vt.unstable_batchedUpdates = ef;
vt.unstable_renderSubtreeIntoContainer = function (t, e, n, r) {
  if (!Il(n)) throw Error(b(200));
  if (t == null || t._reactInternals === void 0) throw Error(b(38));
  return Rl(t, e, n, !1, r);
};
vt.version = "18.3.1-next-f1338f8080-20240426";
function Nv() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nv);
    } catch (t) {
      console.error(t);
    }
}
(Nv(), (Ng.exports = vt));
var QT = Ng.exports,
  em = QT;
((Ju.createRoot = em.createRoot), (Ju.hydrateRoot = em.hydrateRoot));
/**
 * react-router v7.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var tm = "popstate";
function nm(t) {
  return (
    typeof t == "object" &&
    t != null &&
    "pathname" in t &&
    "search" in t &&
    "hash" in t &&
    "state" in t &&
    "key" in t
  );
}
function YT(t = {}) {
  function e(r, s) {
    var h;
    let i = (h = s.state) == null ? void 0 : h.masked,
      { pathname: o, search: l, hash: u } = i || r.location;
    return Gc(
      "",
      { pathname: o, search: l, hash: u },
      (s.state && s.state.usr) || null,
      (s.state && s.state.key) || "default",
      i
        ? {
            pathname: r.location.pathname,
            search: r.location.search,
            hash: r.location.hash,
          }
        : void 0,
    );
  }
  function n(r, s) {
    return typeof s == "string" ? s : Ki(s);
  }
  return XT(e, n, null, t);
}
function ve(t, e) {
  if (t === !1 || t === null || typeof t > "u") throw new Error(e);
}
function Zt(t, e) {
  if (!t) {
    typeof console < "u" && console.warn(e);
    try {
      throw new Error(e);
    } catch {}
  }
}
function JT() {
  return Math.random().toString(36).substring(2, 10);
}
function rm(t, e) {
  return {
    usr: t.state,
    key: t.key,
    idx: e,
    masked: t.unstable_mask
      ? { pathname: t.pathname, search: t.search, hash: t.hash }
      : void 0,
  };
}
function Gc(t, e, n = null, r, s) {
  return {
    pathname: typeof t == "string" ? t : t.pathname,
    search: "",
    hash: "",
    ...(typeof e == "string" ? xs(e) : e),
    state: n,
    key: (e && e.key) || r || JT(),
    unstable_mask: s,
  };
}
function Ki({ pathname: t = "/", search: e = "", hash: n = "" }) {
  return (
    e && e !== "?" && (t += e.charAt(0) === "?" ? e : "?" + e),
    n && n !== "#" && (t += n.charAt(0) === "#" ? n : "#" + n),
    t
  );
}
function xs(t) {
  let e = {};
  if (t) {
    let n = t.indexOf("#");
    n >= 0 && ((e.hash = t.substring(n)), (t = t.substring(0, n)));
    let r = t.indexOf("?");
    (r >= 0 && ((e.search = t.substring(r)), (t = t.substring(0, r))),
      t && (e.pathname = t));
  }
  return e;
}
function XT(t, e, n, r = {}) {
  let { window: s = document.defaultView, v5Compat: i = !1 } = r,
    o = s.history,
    l = "POP",
    u = null,
    h = d();
  h == null && ((h = 0), o.replaceState({ ...o.state, idx: h }, ""));
  function d() {
    return (o.state || { idx: null }).idx;
  }
  function p() {
    l = "POP";
    let D = d(),
      _ = D == null ? null : D - h;
    ((h = D), u && u({ action: l, location: P.location, delta: _ }));
  }
  function m(D, _) {
    l = "PUSH";
    let v = nm(D) ? D : Gc(P.location, D, _);
    h = d() + 1;
    let R = rm(v, h),
      M = P.createHref(v.unstable_mask || v);
    try {
      o.pushState(R, "", M);
    } catch (j) {
      if (j instanceof DOMException && j.name === "DataCloneError") throw j;
      s.location.assign(M);
    }
    i && u && u({ action: l, location: P.location, delta: 1 });
  }
  function T(D, _) {
    l = "REPLACE";
    let v = nm(D) ? D : Gc(P.location, D, _);
    h = d();
    let R = rm(v, h),
      M = P.createHref(v.unstable_mask || v);
    (o.replaceState(R, "", M),
      i && u && u({ action: l, location: P.location, delta: 0 }));
  }
  function x(D) {
    return ZT(D);
  }
  let P = {
    get action() {
      return l;
    },
    get location() {
      return t(s, o);
    },
    listen(D) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        s.addEventListener(tm, p),
        (u = D),
        () => {
          (s.removeEventListener(tm, p), (u = null));
        }
      );
    },
    createHref(D) {
      return e(s, D);
    },
    createURL: x,
    encodeLocation(D) {
      let _ = x(D);
      return { pathname: _.pathname, search: _.search, hash: _.hash };
    },
    push: m,
    replace: T,
    go(D) {
      return o.go(D);
    },
  };
  return P;
}
function ZT(t, e = !1) {
  let n = "http://localhost";
  (typeof window < "u" &&
    (n =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    ve(n, "No window.location.(origin|href) available to create URL"));
  let r = typeof t == "string" ? t : Ki(t);
  return (
    (r = r.replace(/ $/, "%20")),
    !e && r.startsWith("//") && (r = n + r),
    new URL(r, n)
  );
}
function Vv(t, e, n = "/") {
  return eS(t, e, n, !1);
}
function eS(t, e, n, r) {
  let s = typeof e == "string" ? xs(e) : e,
    i = pn(s.pathname || "/", n);
  if (i == null) return null;
  let o = Dv(t);
  tS(o);
  let l = null;
  for (let u = 0; l == null && u < o.length; ++u) {
    let h = fS(i);
    l = cS(o[u], h, r);
  }
  return l;
}
function Dv(t, e = [], n = [], r = "", s = !1) {
  let i = (o, l, u = s, h) => {
    let d = {
      relativePath: h === void 0 ? o.path || "" : h,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: l,
      route: o,
    };
    if (d.relativePath.startsWith("/")) {
      if (!d.relativePath.startsWith(r) && u) return;
      (ve(
        d.relativePath.startsWith(r),
        `Absolute route path "${d.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
        (d.relativePath = d.relativePath.slice(r.length)));
    }
    let p = jt([r, d.relativePath]),
      m = n.concat(d);
    (o.children &&
      o.children.length > 0 &&
      (ve(
        o.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${p}".`,
      ),
      Dv(o.children, e, m, p, u)),
      !(o.path == null && !o.index) &&
        e.push({ path: p, score: lS(p, o.index), routesMeta: m }));
  };
  return (
    t.forEach((o, l) => {
      var u;
      if (o.path === "" || !((u = o.path) != null && u.includes("?"))) i(o, l);
      else for (let h of Lv(o.path)) i(o, l, !0, h);
    }),
    e
  );
}
function Lv(t) {
  let e = t.split("/");
  if (e.length === 0) return [];
  let [n, ...r] = e,
    s = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return s ? [i, ""] : [i];
  let o = Lv(r.join("/")),
    l = [];
  return (
    l.push(...o.map((u) => (u === "" ? i : [i, u].join("/")))),
    s && l.push(...o),
    l.map((u) => (t.startsWith("/") && u === "" ? "/" : u))
  );
}
function tS(t) {
  t.sort((e, n) =>
    e.score !== n.score
      ? n.score - e.score
      : uS(
          e.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
var nS = /^:[\w-]+$/,
  rS = 3,
  sS = 2,
  iS = 1,
  oS = 10,
  aS = -2,
  sm = (t) => t === "*";
function lS(t, e) {
  let n = t.split("/"),
    r = n.length;
  return (
    n.some(sm) && (r += aS),
    e && (r += sS),
    n
      .filter((s) => !sm(s))
      .reduce((s, i) => s + (nS.test(i) ? rS : i === "" ? iS : oS), r)
  );
}
function uS(t, e) {
  return t.length === e.length && t.slice(0, -1).every((r, s) => r === e[s])
    ? t[t.length - 1] - e[e.length - 1]
    : 0;
}
function cS(t, e, n = !1) {
  let { routesMeta: r } = t,
    s = {},
    i = "/",
    o = [];
  for (let l = 0; l < r.length; ++l) {
    let u = r[l],
      h = l === r.length - 1,
      d = i === "/" ? e : e.slice(i.length) || "/",
      p = Wa(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: h },
        d,
      ),
      m = u.route;
    if (
      (!p &&
        h &&
        n &&
        !r[r.length - 1].route.index &&
        (p = Wa(
          { path: u.relativePath, caseSensitive: u.caseSensitive, end: !1 },
          d,
        )),
      !p)
    )
      return null;
    (Object.assign(s, p.params),
      o.push({
        params: s,
        pathname: jt([i, p.pathname]),
        pathnameBase: gS(jt([i, p.pathnameBase])),
        route: m,
      }),
      p.pathnameBase !== "/" && (i = jt([i, p.pathnameBase])));
  }
  return o;
}
function Wa(t, e) {
  typeof t == "string" && (t = { path: t, caseSensitive: !1, end: !0 });
  let [n, r] = hS(t.path, t.caseSensitive, t.end),
    s = e.match(n);
  if (!s) return null;
  let i = s[0],
    o = i.replace(/(.)\/+$/, "$1"),
    l = s.slice(1);
  return {
    params: r.reduce((h, { paramName: d, isOptional: p }, m) => {
      if (d === "*") {
        let x = l[m] || "";
        o = i.slice(0, i.length - x.length).replace(/(.)\/+$/, "$1");
      }
      const T = l[m];
      return (
        p && !T ? (h[d] = void 0) : (h[d] = (T || "").replace(/%2F/g, "/")),
        h
      );
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: t,
  };
}
function hS(t, e = !1, n = !0) {
  Zt(
    t === "*" || !t.endsWith("*") || t.endsWith("/*"),
    `Route path "${t}" will be treated as if it were "${t.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/, "/*")}".`,
  );
  let r = [],
    s =
      "^" +
      t
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(/\/:([\w-]+)(\?)?/g, (o, l, u, h, d) => {
          if ((r.push({ paramName: l, isOptional: u != null }), u)) {
            let p = d.charAt(h + o.length);
            return p && p !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
          }
          return "/([^\\/]+)";
        })
        .replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return (
    t.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (s += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (s += "\\/*$")
        : t !== "" && t !== "/" && (s += "(?:(?=\\/|$))"),
    [new RegExp(s, e ? void 0 : "i"), r]
  );
}
function fS(t) {
  try {
    return t
      .split("/")
      .map((e) => decodeURIComponent(e).replace(/\//g, "%2F"))
      .join("/");
  } catch (e) {
    return (
      Zt(
        !1,
        `The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`,
      ),
      t
    );
  }
}
function pn(t, e) {
  if (e === "/") return t;
  if (!t.toLowerCase().startsWith(e.toLowerCase())) return null;
  let n = e.endsWith("/") ? e.length - 1 : e.length,
    r = t.charAt(n);
  return r && r !== "/" ? null : t.slice(n) || "/";
}
var dS = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function pS(t, e = "/") {
  let {
      pathname: n,
      search: r = "",
      hash: s = "",
    } = typeof t == "string" ? xs(t) : t,
    i;
  return (
    n
      ? ((n = Ov(n)),
        n.startsWith("/") ? (i = im(n.substring(1), "/")) : (i = im(n, e)))
      : (i = e),
    { pathname: i, search: yS(r), hash: vS(s) }
  );
}
function im(t, e) {
  let n = qa(e).split("/");
  return (
    t.split("/").forEach((s) => {
      s === ".." ? n.length > 1 && n.pop() : s !== "." && n.push(s);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Ou(t, e, n, r) {
  return `Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function mS(t) {
  return t.filter(
    (e, n) => n === 0 || (e.route.path && e.route.path.length > 0),
  );
}
function Mv(t) {
  let e = mS(t);
  return e.map((n, r) => (r === e.length - 1 ? n.pathname : n.pathnameBase));
}
function uf(t, e, n, r = !1) {
  let s;
  typeof t == "string"
    ? (s = xs(t))
    : ((s = { ...t }),
      ve(
        !s.pathname || !s.pathname.includes("?"),
        Ou("?", "pathname", "search", s),
      ),
      ve(
        !s.pathname || !s.pathname.includes("#"),
        Ou("#", "pathname", "hash", s),
      ),
      ve(!s.search || !s.search.includes("#"), Ou("#", "search", "hash", s)));
  let i = t === "" || s.pathname === "",
    o = i ? "/" : s.pathname,
    l;
  if (o == null) l = n;
  else {
    let p = e.length - 1;
    if (!r && o.startsWith("..")) {
      let m = o.split("/");
      for (; m[0] === ".."; ) (m.shift(), (p -= 1));
      s.pathname = m.join("/");
    }
    l = p >= 0 ? e[p] : "/";
  }
  let u = pS(s, l),
    h = o && o !== "/" && o.endsWith("/"),
    d = (i || o === ".") && n.endsWith("/");
  return (!u.pathname.endsWith("/") && (h || d) && (u.pathname += "/"), u);
}
var Ov = (t) => t.replace(/\/\/+/g, "/"),
  jt = (t) => Ov(t.join("/")),
  qa = (t) => t.replace(/\/+$/, ""),
  gS = (t) => qa(t).replace(/^\/*/, "/"),
  yS = (t) => (!t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t),
  vS = (t) => (!t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t),
  _S = class {
    constructor(t, e, n, r = !1) {
      ((this.status = t),
        (this.statusText = e || ""),
        (this.internal = r),
        n instanceof Error
          ? ((this.data = n.toString()), (this.error = n))
          : (this.data = n));
    }
  };
function ES(t) {
  return (
    t != null &&
    typeof t.status == "number" &&
    typeof t.statusText == "string" &&
    typeof t.internal == "boolean" &&
    "data" in t
  );
}
function wS(t) {
  let e = t.map((n) => n.route.path).filter(Boolean);
  return jt(e) || "/";
}
var Fv =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
function jv(t, e) {
  let n = t;
  if (typeof n != "string" || !dS.test(n))
    return { absoluteURL: void 0, isExternal: !1, to: n };
  let r = n,
    s = !1;
  if (Fv)
    try {
      let i = new URL(window.location.href),
        o = n.startsWith("//") ? new URL(i.protocol + n) : new URL(n),
        l = pn(o.pathname, e);
      o.origin === i.origin && l != null
        ? (n = l + o.search + o.hash)
        : (s = !0);
    } catch {
      Zt(
        !1,
        `<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
      );
    }
  return { absoluteURL: r, isExternal: s, to: n };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var bv = ["POST", "PUT", "PATCH", "DELETE"];
new Set(bv);
var TS = ["GET", ...bv];
new Set(TS);
var Ps = V.createContext(null);
Ps.displayName = "DataRouter";
var Al = V.createContext(null);
Al.displayName = "DataRouterState";
var Uv = V.createContext(!1);
function SS() {
  return V.useContext(Uv);
}
var zv = V.createContext({ isTransitioning: !1 });
zv.displayName = "ViewTransition";
var IS = V.createContext(new Map());
IS.displayName = "Fetchers";
var RS = V.createContext(null);
RS.displayName = "Await";
var Pt = V.createContext(null);
Pt.displayName = "Navigation";
var uo = V.createContext(null);
uo.displayName = "Location";
var nn = V.createContext({ outlet: null, matches: [], isDataRoute: !1 });
nn.displayName = "Route";
var cf = V.createContext(null);
cf.displayName = "RouteError";
var Bv = "REACT_ROUTER_ERROR",
  AS = "REDIRECT",
  CS = "ROUTE_ERROR_RESPONSE";
function xS(t) {
  if (t.startsWith(`${Bv}:${AS}:{`))
    try {
      let e = JSON.parse(t.slice(28));
      if (
        typeof e == "object" &&
        e &&
        typeof e.status == "number" &&
        typeof e.statusText == "string" &&
        typeof e.location == "string" &&
        typeof e.reloadDocument == "boolean" &&
        typeof e.replace == "boolean"
      )
        return e;
    } catch {}
}
function PS(t) {
  if (t.startsWith(`${Bv}:${CS}:{`))
    try {
      let e = JSON.parse(t.slice(40));
      if (
        typeof e == "object" &&
        e &&
        typeof e.status == "number" &&
        typeof e.statusText == "string"
      )
        return new _S(e.status, e.statusText, e.data);
    } catch {}
}
function kS(t, { relative: e } = {}) {
  ve(
    co(),
    "useHref() may be used only in the context of a <Router> component.",
  );
  let { basename: n, navigator: r } = V.useContext(Pt),
    { hash: s, pathname: i, search: o } = ho(t, { relative: e }),
    l = i;
  return (
    n !== "/" && (l = i === "/" ? n : jt([n, i])),
    r.createHref({ pathname: l, search: o, hash: s })
  );
}
function co() {
  return V.useContext(uo) != null;
}
function _n() {
  return (
    ve(
      co(),
      "useLocation() may be used only in the context of a <Router> component.",
    ),
    V.useContext(uo).location
  );
}
var $v =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Gv(t) {
  V.useContext(Pt).static || V.useLayoutEffect(t);
}
function NS() {
  let { isDataRoute: t } = V.useContext(nn);
  return t ? HS() : VS();
}
function VS() {
  ve(
    co(),
    "useNavigate() may be used only in the context of a <Router> component.",
  );
  let t = V.useContext(Ps),
    { basename: e, navigator: n } = V.useContext(Pt),
    { matches: r } = V.useContext(nn),
    { pathname: s } = _n(),
    i = JSON.stringify(Mv(r)),
    o = V.useRef(!1);
  return (
    Gv(() => {
      o.current = !0;
    }),
    V.useCallback(
      (u, h = {}) => {
        if ((Zt(o.current, $v), !o.current)) return;
        if (typeof u == "number") {
          n.go(u);
          return;
        }
        let d = uf(u, JSON.parse(i), s, h.relative === "path");
        (t == null &&
          e !== "/" &&
          (d.pathname = d.pathname === "/" ? e : jt([e, d.pathname])),
          (h.replace ? n.replace : n.push)(d, h.state, h));
      },
      [e, n, i, s, t],
    )
  );
}
V.createContext(null);
function DS() {
  let { matches: t } = V.useContext(nn),
    e = t[t.length - 1];
  return (e == null ? void 0 : e.params) ?? {};
}
function ho(t, { relative: e } = {}) {
  let { matches: n } = V.useContext(nn),
    { pathname: r } = _n(),
    s = JSON.stringify(Mv(n));
  return V.useMemo(() => uf(t, JSON.parse(s), r, e === "path"), [t, s, r, e]);
}
function LS(t, e) {
  return Hv(t, e);
}
function Hv(t, e, n) {
  var D;
  ve(
    co(),
    "useRoutes() may be used only in the context of a <Router> component.",
  );
  let { navigator: r } = V.useContext(Pt),
    { matches: s } = V.useContext(nn),
    i = s[s.length - 1],
    o = i ? i.params : {},
    l = i ? i.pathname : "/",
    u = i ? i.pathnameBase : "/",
    h = i && i.route;
  {
    let _ = (h && h.path) || "";
    qv(
      l,
      !h || _.endsWith("*") || _.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${l}" (under <Route path="${_}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${_}"> to <Route path="${_ === "/" ? "*" : `${_}/*`}">.`,
    );
  }
  let d = _n(),
    p;
  if (e) {
    let _ = typeof e == "string" ? xs(e) : e;
    (ve(
      u === "/" || ((D = _.pathname) == null ? void 0 : D.startsWith(u)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${u}" but pathname "${_.pathname}" was given in the \`location\` prop.`,
    ),
      (p = _));
  } else p = d;
  let m = p.pathname || "/",
    T = m;
  if (u !== "/") {
    let _ = u.replace(/^\//, "").split("/");
    T = "/" + m.replace(/^\//, "").split("/").slice(_.length).join("/");
  }
  let x = Vv(t, { pathname: T });
  (Zt(
    h || x != null,
    `No routes matched location "${p.pathname}${p.search}${p.hash}" `,
  ),
    Zt(
      x == null ||
        x[x.length - 1].route.element !== void 0 ||
        x[x.length - 1].route.Component !== void 0 ||
        x[x.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    ));
  let P = bS(
    x &&
      x.map((_) =>
        Object.assign({}, _, {
          params: Object.assign({}, o, _.params),
          pathname: jt([
            u,
            r.encodeLocation
              ? r.encodeLocation(
                  _.pathname
                    .replace(/%/g, "%25")
                    .replace(/\?/g, "%3F")
                    .replace(/#/g, "%23"),
                ).pathname
              : _.pathname,
          ]),
          pathnameBase:
            _.pathnameBase === "/"
              ? u
              : jt([
                  u,
                  r.encodeLocation
                    ? r.encodeLocation(
                        _.pathnameBase
                          .replace(/%/g, "%25")
                          .replace(/\?/g, "%3F")
                          .replace(/#/g, "%23"),
                      ).pathname
                    : _.pathnameBase,
                ]),
        }),
      ),
    s,
    n,
  );
  return e && P
    ? V.createElement(
        uo.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              unstable_mask: void 0,
              ...p,
            },
            navigationType: "POP",
          },
        },
        P,
      )
    : P;
}
function MS() {
  let t = GS(),
    e = ES(t)
      ? `${t.status} ${t.statusText}`
      : t instanceof Error
        ? t.message
        : JSON.stringify(t),
    n = t instanceof Error ? t.stack : null,
    r = "rgba(200,200,200, 0.5)",
    s = { padding: "0.5rem", backgroundColor: r },
    i = { padding: "2px 4px", backgroundColor: r },
    o = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", t),
    (o = V.createElement(
      V.Fragment,
      null,
      V.createElement("p", null, "💿 Hey developer 👋"),
      V.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        V.createElement("code", { style: i }, "ErrorBoundary"),
        " or",
        " ",
        V.createElement("code", { style: i }, "errorElement"),
        " prop on your route.",
      ),
    )),
    V.createElement(
      V.Fragment,
      null,
      V.createElement("h2", null, "Unexpected Application Error!"),
      V.createElement("h3", { style: { fontStyle: "italic" } }, e),
      n ? V.createElement("pre", { style: s }, n) : null,
      o,
    )
  );
}
var OS = V.createElement(MS, null),
  Wv = class extends V.Component {
    constructor(t) {
      (super(t),
        (this.state = {
          location: t.location,
          revalidation: t.revalidation,
          error: t.error,
        }));
    }
    static getDerivedStateFromError(t) {
      return { error: t };
    }
    static getDerivedStateFromProps(t, e) {
      return e.location !== t.location ||
        (e.revalidation !== "idle" && t.revalidation === "idle")
        ? { error: t.error, location: t.location, revalidation: t.revalidation }
        : {
            error: t.error !== void 0 ? t.error : e.error,
            location: e.location,
            revalidation: t.revalidation || e.revalidation,
          };
    }
    componentDidCatch(t, e) {
      this.props.onError
        ? this.props.onError(t, e)
        : console.error(
            "React Router caught the following error during render",
            t,
          );
    }
    render() {
      let t = this.state.error;
      if (
        this.context &&
        typeof t == "object" &&
        t &&
        "digest" in t &&
        typeof t.digest == "string"
      ) {
        const n = PS(t.digest);
        n && (t = n);
      }
      let e =
        t !== void 0
          ? V.createElement(
              nn.Provider,
              { value: this.props.routeContext },
              V.createElement(cf.Provider, {
                value: t,
                children: this.props.component,
              }),
            )
          : this.props.children;
      return this.context ? V.createElement(FS, { error: t }, e) : e;
    }
  };
Wv.contextType = Uv;
var Fu = new WeakMap();
function FS({ children: t, error: e }) {
  let { basename: n } = V.useContext(Pt);
  if (
    typeof e == "object" &&
    e &&
    "digest" in e &&
    typeof e.digest == "string"
  ) {
    let r = xS(e.digest);
    if (r) {
      let s = Fu.get(e);
      if (s) throw s;
      let i = jv(r.location, n);
      if (Fv && !Fu.get(e))
        if (i.isExternal || r.reloadDocument)
          window.location.href = i.absoluteURL || i.to;
        else {
          const o = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(i.to, {
              replace: r.replace,
            }),
          );
          throw (Fu.set(e, o), o);
        }
      return V.createElement("meta", {
        httpEquiv: "refresh",
        content: `0;url=${i.absoluteURL || i.to}`,
      });
    }
  }
  return t;
}
function jS({ routeContext: t, match: e, children: n }) {
  let r = V.useContext(Ps);
  return (
    r &&
      r.static &&
      r.staticContext &&
      (e.route.errorElement || e.route.ErrorBoundary) &&
      (r.staticContext._deepestRenderedBoundaryId = e.route.id),
    V.createElement(nn.Provider, { value: t }, n)
  );
}
function bS(t, e = [], n) {
  let r = n == null ? void 0 : n.state;
  if (t == null) {
    if (!r) return null;
    if (r.errors) t = r.matches;
    else if (e.length === 0 && !r.initialized && r.matches.length > 0)
      t = r.matches;
    else return null;
  }
  let s = t,
    i = r == null ? void 0 : r.errors;
  if (i != null) {
    let d = s.findIndex(
      (p) => p.route.id && (i == null ? void 0 : i[p.route.id]) !== void 0,
    );
    (ve(
      d >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`,
    ),
      (s = s.slice(0, Math.min(s.length, d + 1))));
  }
  let o = !1,
    l = -1;
  if (n && r) {
    o = r.renderFallback;
    for (let d = 0; d < s.length; d++) {
      let p = s[d];
      if (
        ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (l = d),
        p.route.id)
      ) {
        let { loaderData: m, errors: T } = r,
          x =
            p.route.loader &&
            !m.hasOwnProperty(p.route.id) &&
            (!T || T[p.route.id] === void 0);
        if (p.route.lazy || x) {
          (n.isStatic && (o = !0),
            l >= 0 ? (s = s.slice(0, l + 1)) : (s = [s[0]]));
          break;
        }
      }
    }
  }
  let u = n == null ? void 0 : n.onError,
    h =
      r && u
        ? (d, p) => {
            var m, T;
            u(d, {
              location: r.location,
              params:
                ((T = (m = r.matches) == null ? void 0 : m[0]) == null
                  ? void 0
                  : T.params) ?? {},
              unstable_pattern: wS(r.matches),
              errorInfo: p,
            });
          }
        : void 0;
  return s.reduceRight((d, p, m) => {
    let T,
      x = !1,
      P = null,
      D = null;
    r &&
      ((T = i && p.route.id ? i[p.route.id] : void 0),
      (P = p.route.errorElement || OS),
      o &&
        (l < 0 && m === 0
          ? (qv(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration",
            ),
            (x = !0),
            (D = null))
          : l === m &&
            ((x = !0), (D = p.route.hydrateFallbackElement || null))));
    let _ = e.concat(s.slice(0, m + 1)),
      v = () => {
        let R;
        return (
          T
            ? (R = P)
            : x
              ? (R = D)
              : p.route.Component
                ? (R = V.createElement(p.route.Component, null))
                : p.route.element
                  ? (R = p.route.element)
                  : (R = d),
          V.createElement(jS, {
            match: p,
            routeContext: { outlet: d, matches: _, isDataRoute: r != null },
            children: R,
          })
        );
      };
    return r && (p.route.ErrorBoundary || p.route.errorElement || m === 0)
      ? V.createElement(Wv, {
          location: r.location,
          revalidation: r.revalidation,
          component: P,
          error: T,
          children: v(),
          routeContext: { outlet: null, matches: _, isDataRoute: !0 },
          onError: h,
        })
      : v();
  }, null);
}
function hf(t) {
  return `${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function US(t) {
  let e = V.useContext(Ps);
  return (ve(e, hf(t)), e);
}
function zS(t) {
  let e = V.useContext(Al);
  return (ve(e, hf(t)), e);
}
function BS(t) {
  let e = V.useContext(nn);
  return (ve(e, hf(t)), e);
}
function ff(t) {
  let e = BS(t),
    n = e.matches[e.matches.length - 1];
  return (
    ve(
      n.route.id,
      `${t} can only be used on routes that contain a unique "id"`,
    ),
    n.route.id
  );
}
function $S() {
  return ff("useRouteId");
}
function GS() {
  var r;
  let t = V.useContext(cf),
    e = zS("useRouteError"),
    n = ff("useRouteError");
  return t !== void 0 ? t : (r = e.errors) == null ? void 0 : r[n];
}
function HS() {
  let { router: t } = US("useNavigate"),
    e = ff("useNavigate"),
    n = V.useRef(!1);
  return (
    Gv(() => {
      n.current = !0;
    }),
    V.useCallback(
      async (s, i = {}) => {
        (Zt(n.current, $v),
          n.current &&
            (typeof s == "number"
              ? await t.navigate(s)
              : await t.navigate(s, { fromRouteId: e, ...i })));
      },
      [t, e],
    )
  );
}
var om = {};
function qv(t, e, n) {
  !e && !om[t] && ((om[t] = !0), Zt(!1, n));
}
V.memo(WS);
function WS({ routes: t, future: e, state: n, isStatic: r, onError: s }) {
  return Hv(t, void 0, { state: n, isStatic: r, onError: s });
}
function di(t) {
  ve(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.",
  );
}
function qS({
  basename: t = "/",
  children: e = null,
  location: n,
  navigationType: r = "POP",
  navigator: s,
  static: i = !1,
  unstable_useTransitions: o,
}) {
  ve(
    !co(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.",
  );
  let l = t.replace(/^\/*/, "/"),
    u = V.useMemo(
      () => ({
        basename: l,
        navigator: s,
        static: i,
        unstable_useTransitions: o,
        future: {},
      }),
      [l, s, i, o],
    );
  typeof n == "string" && (n = xs(n));
  let {
      pathname: h = "/",
      search: d = "",
      hash: p = "",
      state: m = null,
      key: T = "default",
      unstable_mask: x,
    } = n,
    P = V.useMemo(() => {
      let D = pn(h, l);
      return D == null
        ? null
        : {
            location: {
              pathname: D,
              search: d,
              hash: p,
              state: m,
              key: T,
              unstable_mask: x,
            },
            navigationType: r,
          };
    }, [l, h, d, p, m, T, r, x]);
  return (
    Zt(
      P != null,
      `<Router basename="${l}"> is not able to match the URL "${h}${d}${p}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    P == null
      ? null
      : V.createElement(
          Pt.Provider,
          { value: u },
          V.createElement(uo.Provider, { children: e, value: P }),
        )
  );
}
function KS({ children: t, location: e }) {
  return LS(Hc(t), e);
}
function Hc(t, e = []) {
  let n = [];
  return (
    V.Children.forEach(t, (r, s) => {
      if (!V.isValidElement(r)) return;
      let i = [...e, s];
      if (r.type === V.Fragment) {
        n.push.apply(n, Hc(r.props.children, i));
        return;
      }
      (ve(
        r.type === di,
        `[${typeof r.type == "string" ? r.type : r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
      ),
        ve(
          !r.props.index || !r.props.children,
          "An index route cannot have child routes.",
        ));
      let o = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        middleware: r.props.middleware,
        loader: r.props.loader,
        action: r.props.action,
        hydrateFallbackElement: r.props.hydrateFallbackElement,
        HydrateFallback: r.props.HydrateFallback,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.hasErrorBoundary === !0 ||
          r.props.ErrorBoundary != null ||
          r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      (r.props.children && (o.children = Hc(r.props.children, i)), n.push(o));
    }),
    n
  );
}
var da = "get",
  pa = "application/x-www-form-urlencoded";
function Cl(t) {
  return typeof HTMLElement < "u" && t instanceof HTMLElement;
}
function QS(t) {
  return Cl(t) && t.tagName.toLowerCase() === "button";
}
function YS(t) {
  return Cl(t) && t.tagName.toLowerCase() === "form";
}
function JS(t) {
  return Cl(t) && t.tagName.toLowerCase() === "input";
}
function XS(t) {
  return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
}
function ZS(t, e) {
  return t.button === 0 && (!e || e === "_self") && !XS(t);
}
var Ko = null;
function e1() {
  if (Ko === null)
    try {
      (new FormData(document.createElement("form"), 0), (Ko = !1));
    } catch {
      Ko = !0;
    }
  return Ko;
}
var t1 = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function ju(t) {
  return t != null && !t1.has(t)
    ? (Zt(
        !1,
        `"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${pa}"`,
      ),
      null)
    : t;
}
function n1(t, e) {
  let n, r, s, i, o;
  if (YS(t)) {
    let l = t.getAttribute("action");
    ((r = l ? pn(l, e) : null),
      (n = t.getAttribute("method") || da),
      (s = ju(t.getAttribute("enctype")) || pa),
      (i = new FormData(t)));
  } else if (QS(t) || (JS(t) && (t.type === "submit" || t.type === "image"))) {
    let l = t.form;
    if (l == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let u = t.getAttribute("formaction") || l.getAttribute("action");
    if (
      ((r = u ? pn(u, e) : null),
      (n = t.getAttribute("formmethod") || l.getAttribute("method") || da),
      (s =
        ju(t.getAttribute("formenctype")) ||
        ju(l.getAttribute("enctype")) ||
        pa),
      (i = new FormData(l, t)),
      !e1())
    ) {
      let { name: h, type: d, value: p } = t;
      if (d === "image") {
        let m = h ? `${h}.` : "";
        (i.append(`${m}x`, "0"), i.append(`${m}y`, "0"));
      } else h && i.append(h, p);
    }
  } else {
    if (Cl(t))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    ((n = da), (r = null), (s = pa), (o = t));
  }
  return (
    i && s === "text/plain" && ((o = i), (i = void 0)),
    { action: r, method: n.toLowerCase(), encType: s, formData: i, body: o }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function df(t, e) {
  if (t === !1 || t === null || typeof t > "u") throw new Error(e);
}
function Kv(t, e, n, r) {
  let s =
    typeof t == "string"
      ? new URL(
          t,
          typeof window > "u"
            ? "server://singlefetch/"
            : window.location.origin,
        )
      : t;
  return (
    n
      ? s.pathname.endsWith("/")
        ? (s.pathname = `${s.pathname}_.${r}`)
        : (s.pathname = `${s.pathname}.${r}`)
      : s.pathname === "/"
        ? (s.pathname = `_root.${r}`)
        : e && pn(s.pathname, e) === "/"
          ? (s.pathname = `${qa(e)}/_root.${r}`)
          : (s.pathname = `${qa(s.pathname)}.${r}`),
    s
  );
}
async function r1(t, e) {
  if (t.id in e) return e[t.id];
  try {
    let n = await import(t.module);
    return ((e[t.id] = n), n);
  } catch (n) {
    return (
      console.error(
        `Error loading route module \`${t.module}\`, reloading page...`,
      ),
      console.error(n),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function s1(t) {
  return t == null
    ? !1
    : t.href == null
      ? t.rel === "preload" &&
        typeof t.imageSrcSet == "string" &&
        typeof t.imageSizes == "string"
      : typeof t.rel == "string" && typeof t.href == "string";
}
async function i1(t, e, n) {
  let r = await Promise.all(
    t.map(async (s) => {
      let i = e.routes[s.route.id];
      if (i) {
        let o = await r1(i, n);
        return o.links ? o.links() : [];
      }
      return [];
    }),
  );
  return u1(
    r
      .flat(1)
      .filter(s1)
      .filter((s) => s.rel === "stylesheet" || s.rel === "preload")
      .map((s) =>
        s.rel === "stylesheet"
          ? { ...s, rel: "prefetch", as: "style" }
          : { ...s, rel: "prefetch" },
      ),
  );
}
function am(t, e, n, r, s, i) {
  let o = (u, h) => (n[h] ? u.route.id !== n[h].route.id : !0),
    l = (u, h) => {
      var d;
      return (
        n[h].pathname !== u.pathname ||
        (((d = n[h].route.path) == null ? void 0 : d.endsWith("*")) &&
          n[h].params["*"] !== u.params["*"])
      );
    };
  return i === "assets"
    ? e.filter((u, h) => o(u, h) || l(u, h))
    : i === "data"
      ? e.filter((u, h) => {
          var p;
          let d = r.routes[u.route.id];
          if (!d || !d.hasLoader) return !1;
          if (o(u, h) || l(u, h)) return !0;
          if (u.route.shouldRevalidate) {
            let m = u.route.shouldRevalidate({
              currentUrl: new URL(
                s.pathname + s.search + s.hash,
                window.origin,
              ),
              currentParams: ((p = n[0]) == null ? void 0 : p.params) || {},
              nextUrl: new URL(t, window.origin),
              nextParams: u.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof m == "boolean") return m;
          }
          return !0;
        })
      : [];
}
function o1(t, e, { includeHydrateFallback: n } = {}) {
  return a1(
    t
      .map((r) => {
        let s = e.routes[r.route.id];
        if (!s) return [];
        let i = [s.module];
        return (
          s.clientActionModule && (i = i.concat(s.clientActionModule)),
          s.clientLoaderModule && (i = i.concat(s.clientLoaderModule)),
          n &&
            s.hydrateFallbackModule &&
            (i = i.concat(s.hydrateFallbackModule)),
          s.imports && (i = i.concat(s.imports)),
          i
        );
      })
      .flat(1),
  );
}
function a1(t) {
  return [...new Set(t)];
}
function l1(t) {
  let e = {},
    n = Object.keys(t).sort();
  for (let r of n) e[r] = t[r];
  return e;
}
function u1(t, e) {
  let n = new Set();
  return (
    new Set(e),
    t.reduce((r, s) => {
      let i = JSON.stringify(l1(s));
      return (n.has(i) || (n.add(i), r.push({ key: i, link: s })), r);
    }, [])
  );
}
function pf() {
  let t = V.useContext(Ps);
  return (
    df(
      t,
      "You must render this element inside a <DataRouterContext.Provider> element",
    ),
    t
  );
}
function c1() {
  let t = V.useContext(Al);
  return (
    df(
      t,
      "You must render this element inside a <DataRouterStateContext.Provider> element",
    ),
    t
  );
}
var mf = V.createContext(void 0);
mf.displayName = "FrameworkContext";
function gf() {
  let t = V.useContext(mf);
  return (
    df(t, "You must render this element inside a <HydratedRouter> element"),
    t
  );
}
function h1(t, e) {
  let n = V.useContext(mf),
    [r, s] = V.useState(!1),
    [i, o] = V.useState(!1),
    {
      onFocus: l,
      onBlur: u,
      onMouseEnter: h,
      onMouseLeave: d,
      onTouchStart: p,
    } = e,
    m = V.useRef(null);
  (V.useEffect(() => {
    if ((t === "render" && o(!0), t === "viewport")) {
      let P = (_) => {
          _.forEach((v) => {
            o(v.isIntersecting);
          });
        },
        D = new IntersectionObserver(P, { threshold: 0.5 });
      return (
        m.current && D.observe(m.current),
        () => {
          D.disconnect();
        }
      );
    }
  }, [t]),
    V.useEffect(() => {
      if (r) {
        let P = setTimeout(() => {
          o(!0);
        }, 100);
        return () => {
          clearTimeout(P);
        };
      }
    }, [r]));
  let T = () => {
      s(!0);
    },
    x = () => {
      (s(!1), o(!1));
    };
  return n
    ? t !== "intent"
      ? [i, m, {}]
      : [
          i,
          m,
          {
            onFocus: ai(l, T),
            onBlur: ai(u, x),
            onMouseEnter: ai(h, T),
            onMouseLeave: ai(d, x),
            onTouchStart: ai(p, T),
          },
        ]
    : [!1, m, {}];
}
function ai(t, e) {
  return (n) => {
    (t && t(n), n.defaultPrevented || e(n));
  };
}
function f1({ page: t, ...e }) {
  let n = SS(),
    { router: r } = pf(),
    s = V.useMemo(() => Vv(r.routes, t, r.basename), [r.routes, t, r.basename]);
  return s
    ? n
      ? V.createElement(p1, { page: t, matches: s, ...e })
      : V.createElement(m1, { page: t, matches: s, ...e })
    : null;
}
function d1(t) {
  let { manifest: e, routeModules: n } = gf(),
    [r, s] = V.useState([]);
  return (
    V.useEffect(() => {
      let i = !1;
      return (
        i1(t, e, n).then((o) => {
          i || s(o);
        }),
        () => {
          i = !0;
        }
      );
    }, [t, e, n]),
    r
  );
}
function p1({ page: t, matches: e, ...n }) {
  let r = _n(),
    { future: s } = gf(),
    { basename: i } = pf(),
    o = V.useMemo(() => {
      if (t === r.pathname + r.search + r.hash) return [];
      let l = Kv(t, i, s.unstable_trailingSlashAwareDataRequests, "rsc"),
        u = !1,
        h = [];
      for (let d of e)
        typeof d.route.shouldRevalidate == "function"
          ? (u = !0)
          : h.push(d.route.id);
      return (
        u && h.length > 0 && l.searchParams.set("_routes", h.join(",")),
        [l.pathname + l.search]
      );
    }, [i, s.unstable_trailingSlashAwareDataRequests, t, r, e]);
  return V.createElement(
    V.Fragment,
    null,
    o.map((l) =>
      V.createElement("link", {
        key: l,
        rel: "prefetch",
        as: "fetch",
        href: l,
        ...n,
      }),
    ),
  );
}
function m1({ page: t, matches: e, ...n }) {
  let r = _n(),
    { future: s, manifest: i, routeModules: o } = gf(),
    { basename: l } = pf(),
    { loaderData: u, matches: h } = c1(),
    d = V.useMemo(() => am(t, e, h, i, r, "data"), [t, e, h, i, r]),
    p = V.useMemo(() => am(t, e, h, i, r, "assets"), [t, e, h, i, r]),
    m = V.useMemo(() => {
      if (t === r.pathname + r.search + r.hash) return [];
      let P = new Set(),
        D = !1;
      if (
        (e.forEach((v) => {
          var M;
          let R = i.routes[v.route.id];
          !R ||
            !R.hasLoader ||
            ((!d.some((j) => j.route.id === v.route.id) &&
              v.route.id in u &&
              (M = o[v.route.id]) != null &&
              M.shouldRevalidate) ||
            R.hasClientLoader
              ? (D = !0)
              : P.add(v.route.id));
        }),
        P.size === 0)
      )
        return [];
      let _ = Kv(t, l, s.unstable_trailingSlashAwareDataRequests, "data");
      return (
        D &&
          P.size > 0 &&
          _.searchParams.set(
            "_routes",
            e
              .filter((v) => P.has(v.route.id))
              .map((v) => v.route.id)
              .join(","),
          ),
        [_.pathname + _.search]
      );
    }, [l, s.unstable_trailingSlashAwareDataRequests, u, r, i, d, e, t, o]),
    T = V.useMemo(() => o1(p, i), [p, i]),
    x = d1(p);
  return V.createElement(
    V.Fragment,
    null,
    m.map((P) =>
      V.createElement("link", {
        key: P,
        rel: "prefetch",
        as: "fetch",
        href: P,
        ...n,
      }),
    ),
    T.map((P) =>
      V.createElement("link", { key: P, rel: "modulepreload", href: P, ...n }),
    ),
    x.map(({ key: P, link: D }) =>
      V.createElement("link", {
        key: P,
        nonce: n.nonce,
        ...D,
        crossOrigin: D.crossOrigin ?? n.crossOrigin,
      }),
    ),
  );
}
function g1(...t) {
  return (e) => {
    t.forEach((n) => {
      typeof n == "function" ? n(e) : n != null && (n.current = e);
    });
  };
}
var y1 =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  y1 && (window.__reactRouterVersion = "7.14.2");
} catch {}
function v1({
  basename: t,
  children: e,
  unstable_useTransitions: n,
  window: r,
}) {
  let s = V.useRef();
  s.current == null && (s.current = YT({ window: r, v5Compat: !0 }));
  let i = s.current,
    [o, l] = V.useState({ action: i.action, location: i.location }),
    u = V.useCallback(
      (h) => {
        n === !1 ? l(h) : V.startTransition(() => l(h));
      },
      [n],
    );
  return (
    V.useLayoutEffect(() => i.listen(u), [i, u]),
    V.createElement(qS, {
      basename: t,
      children: e,
      location: o.location,
      navigationType: o.action,
      navigator: i,
      unstable_useTransitions: n,
    })
  );
}
var Qv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Yv = V.forwardRef(function (
    {
      onClick: e,
      discover: n = "render",
      prefetch: r = "none",
      relative: s,
      reloadDocument: i,
      replace: o,
      unstable_mask: l,
      state: u,
      target: h,
      to: d,
      preventScrollReset: p,
      viewTransition: m,
      unstable_defaultShouldRevalidate: T,
      ...x
    },
    P,
  ) {
    let {
        basename: D,
        navigator: _,
        unstable_useTransitions: v,
      } = V.useContext(Pt),
      R = typeof d == "string" && Qv.test(d),
      M = jv(d, D);
    d = M.to;
    let j = kS(d, { relative: s }),
      U = _n(),
      E = null;
    if (l) {
      let Oe = uf(l, [], U.unstable_mask ? U.unstable_mask.pathname : "/", !0);
      (D !== "/" &&
        (Oe.pathname = Oe.pathname === "/" ? D : jt([D, Oe.pathname])),
        (E = _.createHref(Oe)));
    }
    let [y, w, A] = h1(r, x),
      C = T1(d, {
        replace: o,
        unstable_mask: l,
        state: u,
        target: h,
        preventScrollReset: p,
        relative: s,
        viewTransition: m,
        unstable_defaultShouldRevalidate: T,
        unstable_useTransitions: v,
      });
    function k(Oe) {
      (e && e(Oe), Oe.defaultPrevented || C(Oe));
    }
    let S = !(M.isExternal || i),
      Ae = V.createElement("a", {
        ...x,
        ...A,
        href: (S ? E : void 0) || M.absoluteURL || j,
        onClick: S ? k : e,
        ref: g1(P, w),
        target: h,
        "data-discover": !R && n === "render" ? "true" : void 0,
      });
    return y && !R
      ? V.createElement(V.Fragment, null, Ae, V.createElement(f1, { page: j }))
      : Ae;
  });
Yv.displayName = "Link";
var _1 = V.forwardRef(function (
  {
    "aria-current": e = "page",
    caseSensitive: n = !1,
    className: r = "",
    end: s = !1,
    style: i,
    to: o,
    viewTransition: l,
    children: u,
    ...h
  },
  d,
) {
  let p = ho(o, { relative: h.relative }),
    m = _n(),
    T = V.useContext(Al),
    { navigator: x, basename: P } = V.useContext(Pt),
    D = T != null && C1(p) && l === !0,
    _ = x.encodeLocation ? x.encodeLocation(p).pathname : p.pathname,
    v = m.pathname,
    R =
      T && T.navigation && T.navigation.location
        ? T.navigation.location.pathname
        : null;
  (n ||
    ((v = v.toLowerCase()),
    (R = R ? R.toLowerCase() : null),
    (_ = _.toLowerCase())),
    R && P && (R = pn(R, P) || R));
  const M = _ !== "/" && _.endsWith("/") ? _.length - 1 : _.length;
  let j = v === _ || (!s && v.startsWith(_) && v.charAt(M) === "/"),
    U =
      R != null &&
      (R === _ || (!s && R.startsWith(_) && R.charAt(_.length) === "/")),
    E = { isActive: j, isPending: U, isTransitioning: D },
    y = j ? e : void 0,
    w;
  typeof r == "function"
    ? (w = r(E))
    : (w = [
        r,
        j ? "active" : null,
        U ? "pending" : null,
        D ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let A = typeof i == "function" ? i(E) : i;
  return V.createElement(
    Yv,
    {
      ...h,
      "aria-current": y,
      className: w,
      ref: d,
      style: A,
      to: o,
      viewTransition: l,
    },
    typeof u == "function" ? u(E) : u,
  );
});
_1.displayName = "NavLink";
var E1 = V.forwardRef(
  (
    {
      discover: t = "render",
      fetcherKey: e,
      navigate: n,
      reloadDocument: r,
      replace: s,
      state: i,
      method: o = da,
      action: l,
      onSubmit: u,
      relative: h,
      preventScrollReset: d,
      viewTransition: p,
      unstable_defaultShouldRevalidate: m,
      ...T
    },
    x,
  ) => {
    let { unstable_useTransitions: P } = V.useContext(Pt),
      D = R1(),
      _ = A1(l, { relative: h }),
      v = o.toLowerCase() === "get" ? "get" : "post",
      R = typeof l == "string" && Qv.test(l),
      M = (j) => {
        if ((u && u(j), j.defaultPrevented)) return;
        j.preventDefault();
        let U = j.nativeEvent.submitter,
          E = (U == null ? void 0 : U.getAttribute("formmethod")) || o,
          y = () =>
            D(U || j.currentTarget, {
              fetcherKey: e,
              method: E,
              navigate: n,
              replace: s,
              state: i,
              relative: h,
              preventScrollReset: d,
              viewTransition: p,
              unstable_defaultShouldRevalidate: m,
            });
        P && n !== !1 ? V.startTransition(() => y()) : y();
      };
    return V.createElement("form", {
      ref: x,
      method: v,
      action: _,
      onSubmit: r ? u : M,
      ...T,
      "data-discover": !R && t === "render" ? "true" : void 0,
    });
  },
);
E1.displayName = "Form";
function w1(t) {
  return `${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Jv(t) {
  let e = V.useContext(Ps);
  return (ve(e, w1(t)), e);
}
function T1(
  t,
  {
    target: e,
    replace: n,
    unstable_mask: r,
    state: s,
    preventScrollReset: i,
    relative: o,
    viewTransition: l,
    unstable_defaultShouldRevalidate: u,
    unstable_useTransitions: h,
  } = {},
) {
  let d = NS(),
    p = _n(),
    m = ho(t, { relative: o });
  return V.useCallback(
    (T) => {
      if (ZS(T, e)) {
        T.preventDefault();
        let x = n !== void 0 ? n : Ki(p) === Ki(m),
          P = () =>
            d(t, {
              replace: x,
              unstable_mask: r,
              state: s,
              preventScrollReset: i,
              relative: o,
              viewTransition: l,
              unstable_defaultShouldRevalidate: u,
            });
        h ? V.startTransition(() => P()) : P();
      }
    },
    [p, d, m, n, r, s, e, t, i, o, l, u, h],
  );
}
var S1 = 0,
  I1 = () => `__${String(++S1)}__`;
function R1() {
  let { router: t } = Jv("useSubmit"),
    { basename: e } = V.useContext(Pt),
    n = $S(),
    r = t.fetch,
    s = t.navigate;
  return V.useCallback(
    async (i, o = {}) => {
      let { action: l, method: u, encType: h, formData: d, body: p } = n1(i, e);
      if (o.navigate === !1) {
        let m = o.fetcherKey || I1();
        await r(m, n, o.action || l, {
          unstable_defaultShouldRevalidate: o.unstable_defaultShouldRevalidate,
          preventScrollReset: o.preventScrollReset,
          formData: d,
          body: p,
          formMethod: o.method || u,
          formEncType: o.encType || h,
          flushSync: o.flushSync,
        });
      } else
        await s(o.action || l, {
          unstable_defaultShouldRevalidate: o.unstable_defaultShouldRevalidate,
          preventScrollReset: o.preventScrollReset,
          formData: d,
          body: p,
          formMethod: o.method || u,
          formEncType: o.encType || h,
          replace: o.replace,
          state: o.state,
          fromRouteId: n,
          flushSync: o.flushSync,
          viewTransition: o.viewTransition,
        });
    },
    [r, s, e, n],
  );
}
function A1(t, { relative: e } = {}) {
  let { basename: n } = V.useContext(Pt),
    r = V.useContext(nn);
  ve(r, "useFormAction must be used inside a RouteContext");
  let [s] = r.matches.slice(-1),
    i = { ...ho(t || ".", { relative: e }) },
    o = _n();
  if (t == null) {
    i.search = o.search;
    let l = new URLSearchParams(i.search),
      u = l.getAll("index");
    if (u.some((d) => d === "")) {
      (l.delete("index"),
        u.filter((p) => p).forEach((p) => l.append("index", p)));
      let d = l.toString();
      i.search = d ? `?${d}` : "";
    }
  }
  return (
    (!t || t === ".") &&
      s.route.index &&
      (i.search = i.search ? i.search.replace(/^\?/, "?index&") : "?index"),
    n !== "/" && (i.pathname = i.pathname === "/" ? n : jt([n, i.pathname])),
    Ki(i)
  );
}
function C1(t, { relative: e } = {}) {
  let n = V.useContext(zv);
  ve(
    n != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: r } = Jv("useViewTransitionState"),
    s = ho(t, { relative: e });
  if (!n.isTransitioning) return !1;
  let i = pn(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    o = pn(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return Wa(s.pathname, o) != null || Wa(s.pathname, i) != null;
}
const xl = {
    groom: "Elias",
    bride: "Tamy",
    date: "2026-08-22T18:30:00",
    giftRegistry: {
      note: "Your presence is the greatest gift of all. Should you wish to honour us with a gift, you can send it to our Whish account below.",
      accountLabel: "Whish Account",
      accountHolder: "Elias & Tamy",
      accountNumber: "20231829-03",
    },
  },
  bu = [
    {
      id: "home",
      title: "Getting Ready",
      name: "Our Home",
      address: null,
      time: null,
      mapUrl: null,
      icon: "arch",
      description:
        "The groom and bride will each welcome guests at their place before the ceremony — feel free to join us early.",
      parties: [
        {
          label: "Groom welcomes you at",
          name: "Alyasa Village",
          sub: "The Villa",
          time: "from 4:30 PM",
          mapUrl: "https://maps.google.com/?q=5Q5P%2B3M+Saqi+Rechmaiya",
        },
        {
          label: "Bride welcomes you at",
          name: "Alyasa Village",
          sub: "The Idle Lounge",
          time: "from 4:30 PM",
          mapUrl: "https://maps.google.com/?q=5Q5P%2B3M+Saqi+Rechmaiya",
        },
      ],
    },
    {
      id: "ceremony",
      title: "Ceremony",
      name: "Alyasa Village",
      sub: "Saint Alishaa Church",
      address: null,
      time: "6:30 PM",
      mapUrl: "https://maps.google.com/?q=5Q5P%2B3M+Saqi+Rechmaiya",
      icon: "arch",
    },
    {
      id: "dinner",
      title: "Dinner Reception",
      sub: "The Arcadia Pool Venue",
      name: "Alyasa Village",
      address: null,
      time: "8:30 PM",
      mapUrl: "https://maps.google.com/?q=5Q5P%2B3M+Saqi+Rechmaiya",
      icon: "arch",
    },
  ],
  x1 = new Set([
    "georges",
    "elias",
    "elie",
    "charbel",
    "kamal",
    "thomas",
    "gilbert",
    "paul",
    "ali",
    "roudy",
    "jad",
    "alain",
    "nadim",
    "karl",
    "wissam",
    "jack",
    "jacques",
  ]),
  P1 = new Set([
    "christine",
    "rouba",
    "samira",
    "rita",
    "marie",
    "donara",
    "serena",
    "elika",
    "carole",
  ]);
function Uu(t) {
  const e = t.trim().split(/\s+/)[0].toLowerCase();
  if (x1.has(e)) return "Mr";
  if (P1.has(e)) return "Mrs";
}
function k1(t) {
  const n = (t.withFamily ?? t.maxGuests > 2) ? " and Family" : "";
  if (t.name.includes("&")) {
    const [i, o] = t.name.split("&").map((h) => h.trim()),
      l = Uu(i) ?? "Mr",
      u = Uu(o) ?? "Mrs";
    return `${l}. ${i} and ${u}. ${o}${n}`;
  }
  const r = t.title ?? Uu(t.name);
  return `${r ? `${r}. ` : ""}${t.name}${n}`;
}
const N1 = [
  { slug: "georges", name: "Georges", maxGuests: 999 },
  { slug: "christine", name: "Christine", maxGuests: 2 },
  { slug: "rouba", name: "Rouba", maxGuests: 8 },
  {
    slug: "charles-antoinette-nasrany",
    name: "Charles & Antoinette Nasrany",
    maxGuests: 10,
  },
  {
    slug: "nicolas-christelle-anaissy",
    name: "Nicolas & Christelle Anaissy",
    maxGuests: 10,
  },
  {
    slug: "tony-marleine-nasrany",
    name: "Tony & Marleine Nasrany",
    maxGuests: 10,
  },
  { slug: "rebecca-daou", name: "Rebecca Daou", maxGuests: 2 },
  { slug: "perla-jabbour", name: "Perla Jabbour", maxGuests: 1 },
  {
    slug: "rony-jessica-nasrany",
    name: "Rony & Jessica Nasrany",
    maxGuests: 4,
  },
  {
    slug: "joseph-jihane-nasrany",
    name: "Joseph & Jihane Nasrany",
    maxGuests: 4,
  },
  {
    slug: "jack-therese-nasrany",
    name: "Jack & Therese Nasrany",
    maxGuests: 2,
  },
  { slug: "joe-cendrella-chdid", name: "Joe & Cendrella Chdid", maxGuests: 3 },
  { slug: "roy-stephanie", name: "Roy & Stephanie", maxGuests: 3 },
  { slug: "samira-anaissy", name: "Samira Anaissy", maxGuests: 1 },
  { slug: "nizar-anna-khaleed", name: "Nizar & Anna Khaleed", maxGuests: 2 },
  { slug: "fady-rida-bou-saad", name: "Fady & Rida Bou Saad", maxGuests: 4 },
  { slug: "brandan-nabhan", name: "Brandan & Antonella", maxGuests: 1 },
  { slug: "elias-maria-hachem", name: "Elias & Maria Hachem", maxGuests: 2 },
  {
    slug: "elie-nadine-bou-saad",
    name: "Elie & Nadine Bou Saad",
    maxGuests: 2,
  },
  {
    slug: "charbel-joelle-bou-saad",
    name: "Charbel & Joelle Bou Saad",
    maxGuests: 4,
  },
  { slug: "raymond-manale", name: "Raymond & Manale", maxGuests: 4 },
  { slug: "boutros-rosette", name: "Boutros & Rosette", maxGuests: 3 },
  {
    slug: "michael-joelle-nasrany",
    name: "Michael & Joelle Nasrany",
    maxGuests: 4,
  },
  {
    slug: "georges-lamia-nasrany",
    name: "Georges & Lamia Nasrany",
    maxGuests: 4,
  },
  {
    slug: "elias-cynthia-nasrany",
    name: "Elias & Cynthia Nasrany",
    maxGuests: 2,
  },
  {
    slug: "charbel-elham-nasrany",
    name: "Charbel & Elham Nasrany",
    maxGuests: 6,
  },
  { slug: "rita-nasrany", name: "Rita Nasrany", maxGuests: 2 },
  { slug: "kamal-adabachi", name: "Kamal Adabachi", maxGuests: 1 },
  { slug: "charbel-merhi", name: "Charbel Merhi", maxGuests: 1 },
  { slug: "marie-hussein", name: "Marie Hussein", maxGuests: 1 },
  { slug: "thomas-abboud", name: "Thomas Abboud", maxGuests: 1 },
  {
    slug: "jawad-sirine",
    name: "Jawad Bou Youness & Sirine Wahidi",
    maxGuests: 2,
  },
  { slug: "ahmad-maha", name: "Ahmad Sibai & Maha Abou Jaoude", maxGuests: 2 },
  { slug: "gilbert-abi-rizk", name: "Gilbert Abi Rizk", maxGuests: 1 },
  { slug: "jad-louloua", name: "Jad Saoudi & Louloua Salhab", maxGuests: 2 },
  { slug: "charbel-karam", name: "Charbel Karam", maxGuests: 0 },
  { slug: "paul-farah", name: "Paul Farah", maxGuests: 0 },
  {
    slug: "peter-chantale-nohra",
    name: "Peter & Chantale Nohra",
    maxGuests: 4,
  },
  { slug: "ali-hammoud", name: "Ali Hammoud", maxGuests: 1 },
  { slug: "roudy-al-chammas", name: "Roudy Al Chammas", maxGuests: 2 },
  {
    slug: "joseph-sylvana-kesserwani",
    name: "Joseph & Sylvana Kesserwani",
    maxGuests: 2,
  },
  { slug: "jad-al-mir", name: "Jad Al Mir", maxGuests: 1 },
  { slug: "alain-khoury", name: "Alain Khoury", maxGuests: 2 },
  { slug: "elias-hnein", name: "Elias Hnein", maxGuests: 2 },
  { slug: "nadim-seif", name: "Nadim Seif", maxGuests: 2 },
  {
    slug: "elias-marise-abi-ghanem",
    name: "Elias & Marise Abi Ghanem",
    maxGuests: 2,
  },
  {
    slug: "jean-claude-reina-takchi",
    name: "Jean Claude & Reina Takchi",
    maxGuests: 2,
  },
  {
    slug: "elie-eliane-mansourati",
    name: "Elie & Eliane Mansourati",
    maxGuests: 2,
  },
  {
    slug: "georges-joulia-mawass",
    name: "Georges & Joulia Mawass",
    maxGuests: 999,
  },
  { slug: "charbel-remy-ferik", name: "Charbel & Remy Ferik", maxGuests: 2 },
  { slug: "rizk-andrea-mawass", name: "Rizk & Andrea Mawass", maxGuests: 10 },
  { slug: "kayssar-rita-addam", name: "Kayssar & Rita Addam", maxGuests: 2 },
  { slug: "eddy-elida-daou", name: "Eddy & Elida Daou", maxGuests: 10 },
  {
    slug: "raymond-mireille-daou",
    name: "Raymond & Mireille Daou",
    maxGuests: 2,
  },
  { slug: "Wissam-ramona-", name: "Wissam & Ramona ", maxGuests: 2 },
  { slug: "pierre-katia-azzi", name: "Pierre & Katia Azzi", maxGuests: 3 },
  { slug: "samira-assaf", name: "Samira Assaf", maxGuests: 3 },
  {
    slug: "saiid-camelia-khoury",
    name: "Saiid & Camelia Khoury",
    maxGuests: 5,
  },
  { slug: "karl-elhaj-assaf", name: "Karl el Haj Assaf", maxGuests: 1 },
  { slug: "elie-rita-khoury", name: "Elie & Rita Khoury", maxGuests: 3 },
  {
    slug: "bernard-patricia-maroun",
    name: "Bernard & Patricia Maroun",
    maxGuests: 4,
  },
  { slug: "robert-roula-abboud", name: "Robert & Roula Abboud", maxGuests: 4 },
  { slug: "elie-nawal-chammas", name: "Elie & Nawal Chammas", maxGuests: 4 },
  { slug: "jihad-najibe-mawass", name: "Jihad & Najibe Mawass", maxGuests: 6 },
  {
    slug: "asaad-georgette-azar",
    name: "Asaad & Georgette Azar",
    maxGuests: 3,
  },
  { slug: "mario-abla-azar", name: "Mario & Abla Azar", maxGuests: 2 },
  { slug: "monif-eliane-azar", name: "Monif & Eliane Azar", maxGuests: 3 },
  { slug: "donara-andourian", name: "Donara Andourian", maxGuests: 1 },
  {
    slug: "georges-vanessa-kassis",
    name: "Georges & Vanessa Kassis",
    maxGuests: 2,
  },
  {
    slug: "fady-jessica-gemayel",
    name: "Fady & Jessica Gemayel",
    maxGuests: 2,
  },
  { slug: "serena-khairallah", name: "Serena Khayrallah", maxGuests: 1 },
  {
    slug: "elie-melissa-chihane",
    name: "Elie & Melissa Chihane",
    maxGuests: 2,
  },
  { slug: "charbel-rita-tohme", name: "Charbel & Rita Thome", maxGuests: 2 },
  { slug: "wissam-haddad", name: "Wissam Haddad", maxGuests: 2 },
  { slug: "nadim-tawk", name: "Nadim Tawk", maxGuests: 2 },
  { slug: "jacques-boulos", name: "Jack Boulos", maxGuests: 1 },
  { slug: "mazen-joy-ghazal", name: "Mazen & Joy Ghazal", maxGuests: 2 },
  { slug: "elika-chalhoub", name: "Elika Chalhoub", maxGuests: 1 },
  { slug: "elie-grace-attalah", name: "Elie & Grace Attalah", maxGuests: 2 },
  { slug: "elie-sandy-ghanem", name: "Elie & Sandy Ghanem", maxGuests: 2 },
  { slug: "rouba-rhayem", name: "Rouba Rhayem", maxGuests: 2 },
  {
    slug: "dory-marielle-obeidy",
    name: "Dory & Marielle Obeidy",
    maxGuests: 2,
  },
  {
    slug: "izzat-riham-alaaeddine",
    name: "Izzat & Riham Alaaeddine",
    maxGuests: 2,
  },
  {
    slug: "bechara-christelle-assaf",
    name: "Bechara & Christelle Assaf",
    maxGuests: 2,
  },
  {
    slug: "anthony-valeria-harfouche",
    name: "Anthony & Valeria Harfouche",
    maxGuests: 2,
  },
  {
    slug: "salim-christine-youness",
    name: "Salim & Christine Youness",
    maxGuests: 2,
  },
  {
    slug: "chady-patricia-nassif",
    name: "Chady & Patricia Nassif",
    maxGuests: 4,
  },
  { slug: "carole-fares", name: "Carole Fares", maxGuests: 1 },
  { slug: "georges-micha-fares", name: "Georges & Micha Fares", maxGuests: 2 },
];
function V1({ onStart: t }) {
  const { groom: e, bride: n, date: r } = xl,
    s = new Date(r).toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  return I.jsxs("div", {
    className: "cover-screen hero-screen",
    onClick: t,
    style: { cursor: "pointer" },
    children: [
      I.jsx("div", { className: "cover-overlay" }),
      I.jsxs("div", {
        className: "hero-content",
        children: [
          I.jsxs("div", { className: "hero-monogram", children: [e[0], n[0]] }),
          I.jsx("div", { className: "hero-date", children: s }),
        ],
      }),
    ],
  });
}
function D1({ onStart: t }) {
  const { groom: e, bride: n } = xl;
  return I.jsxs("div", {
    className: "cover-screen intro-screen",
    onClick: t,
    style: { cursor: "pointer" },
    children: [
      I.jsx("div", { className: "cover-overlay lum-overlay" }),
      I.jsxs("div", {
        className: "intro-content",
        children: [
          I.jsxs("div", {
            className: "intro-monogram",
            children: [
              I.jsx("span", { className: "cover-init-letter", children: e[0] }),
              I.jsx("span", { className: "cover-init-heart", children: "♥" }),
              I.jsx("span", { className: "cover-init-letter", children: n[0] }),
            ],
          }),
          I.jsx("div", { className: "lum-line" }),
          I.jsxs("p", {
            className: "lum-quote",
            children: [
              '"For what God has joined together,',
              `
`,
              'let no man put asunder."',
            ],
          }),
          I.jsx("p", { className: "lum-quote-ref", children: "— Mark 9:10" }),
          I.jsx("div", { className: "lum-line" }),
          I.jsx("p", {
            className: "lum-body lum-body--art",
            children: "It is with the greatest pleasure that the",
          }),
          I.jsxs("div", {
            className: "lum-families",
            children: [
              I.jsx("span", {
                className: "lum-family-name",
                children: "Charles Nasrany Family",
              }),
              I.jsx("span", { className: "lum-ampersand", children: "&" }),
              I.jsx("span", {
                className: "lum-family-name",
                children: "Georges Mawass Family",
              }),
            ],
          }),
          I.jsxs("p", {
            className: "lum-body lum-body--art",
            children: [
              "cordially invite you to celebrate",
              `
`,
              "the wedding of their son and daughter",
            ],
          }),
        ],
      }),
    ],
  });
}
function lm() {
  return I.jsx("svg", {
    width: "12",
    height: "14",
    viewBox: "0 0 14 18",
    fill: "currentColor",
    style: { opacity: 0.7 },
    children: I.jsx("path", {
      d: "M7 0C3.69 0 1 2.69 1 6c0 4.5 6 12 6 12s6-7.5 6-12c0-3.31-2.69-6-6-6zm0 8.5c-1.38 0-2.5-1.12-2.5-2.5S5.62 3.5 7 3.5 9.5 4.62 9.5 6 8.38 8.5 7 8.5z",
    }),
  });
}
function L1() {
  return I.jsxs("svg", {
    className: "evt-icon-svg",
    viewBox: "0 0 44 58",
    fill: "none",
    stroke: "white",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      I.jsx("path", { d: "M4 26 L22 8 L40 26" }),
      I.jsx("rect", { x: "6", y: "26", width: "32", height: "22", rx: "1" }),
      I.jsx("rect", { x: "15", y: "36", width: "13", height: "12", rx: "1" }),
    ],
  });
}
function M1() {
  return I.jsxs("svg", {
    className: "evt-icon-svg",
    viewBox: "0 0 44 58",
    fill: "none",
    stroke: "white",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      I.jsx("line", { x1: "22", y1: "0", x2: "22", y2: "11" }),
      I.jsx("line", { x1: "17", y1: "5", x2: "27", y2: "5" }),
      I.jsx("path", { d: "M6 23 L22 11 L38 23" }),
      I.jsx("rect", { x: "6", y: "23", width: "32", height: "31" }),
      I.jsx("path", { d: "M14 54 L14 40 Q22 35 30 40 L30 54" }),
      I.jsx("rect", { x: "8", y: "27", width: "7", height: "9", rx: "3.5" }),
      I.jsx("rect", { x: "29", y: "27", width: "7", height: "9", rx: "3.5" }),
    ],
  });
}
function O1() {
  return I.jsxs("svg", {
    className: "evt-icon-svg",
    viewBox: "0 0 44 58",
    fill: "none",
    stroke: "white",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      I.jsx("path", { d: "M11 7 L17 7 L14 24 Z" }),
      I.jsx("line", { x1: "14", y1: "24", x2: "14", y2: "40" }),
      I.jsx("line", { x1: "9", y1: "40", x2: "19", y2: "40" }),
      I.jsx("path", { d: "M27 7 L33 7 L30 24 Z" }),
      I.jsx("line", { x1: "30", y1: "24", x2: "30", y2: "40" }),
      I.jsx("line", { x1: "25", y1: "40", x2: "35", y2: "40" }),
      I.jsx("path", {
        d: "M15 12 Q22 16 29 12",
        strokeWidth: "1",
        opacity: "0.65",
      }),
    ],
  });
}
function F1() {
  return I.jsxs("svg", {
    className: "evt-icon-svg",
    viewBox: "0 0 44 58",
    fill: "none",
    stroke: "white",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      I.jsx("path", { d: "M8 50 L8 24 Q8 8 22 8 Q36 8 36 24 L36 50" }),
      I.jsx("path", {
        d: "M13.5 50 L13.5 26 Q13.5 14 22 14 Q30.5 14 30.5 26 L30.5 50",
      }),
      I.jsx("path", { d: "M19 50 L19 28 Q19 20 22 20 Q25 20 25 28 L25 50" }),
    ],
  });
}
function j1() {
  return I.jsxs("svg", {
    className: "evt-icon-svg",
    viewBox: "0 0 44 58",
    fill: "none",
    stroke: "white",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      I.jsx("path", { d: "M5 32 Q5 12 22 12 Q39 12 39 32" }),
      I.jsx("line", { x1: "3", y1: "32", x2: "41", y2: "32" }),
      I.jsx("line", { x1: "22", y1: "4", x2: "22", y2: "12" }),
      I.jsx("line", { x1: "15", y1: "4", x2: "29", y2: "4" }),
      I.jsx("ellipse", {
        cx: "22",
        cy: "44",
        rx: "15",
        ry: "3",
        opacity: "0.6",
      }),
    ],
  });
}
const um = {
  home: I.jsx(L1, {}),
  church: I.jsx(M1, {}),
  drink: I.jsx(O1, {}),
  dinner: I.jsx(j1, {}),
  arch: I.jsx(F1, {}),
};
function zu({ onContinue: t, event: e }) {
  return I.jsxs("div", {
    className: "cover-screen",
    children: [
      I.jsx("div", { className: "cover-overlay lum-overlay" }),
      I.jsxs("div", {
        className: "evt-content",
        children: [
          I.jsxs("div", {
            className: "lum-section-header",
            children: [
              I.jsx("div", { className: "lum-line" }),
              I.jsx("span", {
                className: "lum-section-title",
                children: e.title,
              }),
              I.jsx("div", { className: "lum-line" }),
            ],
          }),
          e.description &&
            I.jsx("p", {
              className: "lum-body lum-body--muted evt-description",
              children: e.description,
            }),
          I.jsx("div", {
            className: "glass-card",
            children: e.parties
              ? I.jsx("div", {
                  className: "evt-parties",
                  children: e.parties.map((n) =>
                    I.jsxs(
                      "div",
                      {
                        className: "evt-row",
                        children: [
                          I.jsx("div", {
                            className: "evt-row-icon",
                            children: um[e.icon],
                          }),
                          I.jsxs("div", {
                            className: "evt-row-details",
                            children: [
                              I.jsx("span", {
                                className: "evt-row-label",
                                children: n.label,
                              }),
                              I.jsx("span", {
                                className: "evt-row-name",
                                children: n.name,
                              }),
                              n.sub &&
                                I.jsx("span", {
                                  className: "evt-row-sub",
                                  children: n.sub,
                                }),
                              n.time &&
                                I.jsx("span", {
                                  className: "evt-row-sub",
                                  children: n.time,
                                }),
                              n.mapUrl &&
                                I.jsxs("a", {
                                  className: "evt-directions",
                                  href: n.mapUrl,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  children: [I.jsx(lm, {}), " Get Directions"],
                                }),
                            ],
                          }),
                        ],
                      },
                      n.label,
                    ),
                  ),
                })
              : I.jsxs("div", {
                  className: "evt-row",
                  children: [
                    I.jsx("div", {
                      className: "evt-row-icon",
                      children: um[e.icon],
                    }),
                    I.jsxs("div", {
                      className: "evt-row-details",
                      children: [
                        I.jsx("span", {
                          className: "evt-row-name",
                          children: e.name,
                        }),
                        e.sub &&
                          I.jsx("span", {
                            className: "evt-row-sub",
                            children: e.sub,
                          }),
                        e.time &&
                          I.jsx("span", {
                            className: "evt-row-sub",
                            children: e.time,
                          }),
                        e.address &&
                          I.jsx("span", {
                            className: "evt-row-sub",
                            children: e.address,
                          }),
                        e.mapUrl &&
                          I.jsxs("a", {
                            className: "evt-directions",
                            href: e.mapUrl,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: [I.jsx(lm, {}), " Get Directions"],
                          }),
                      ],
                    }),
                  ],
                }),
          }),
        ],
      }),
    ],
  });
}
function cm() {
  const t = new Date(xl.date).getTime() - Date.now();
  return t <= 0
    ? { days: 0, hours: 0, minutes: 0, seconds: 0 }
    : {
        days: Math.floor(t / (1e3 * 60 * 60 * 24)),
        hours: Math.floor((t / (1e3 * 60 * 60)) % 24),
        minutes: Math.floor((t / (1e3 * 60)) % 60),
        seconds: Math.floor((t / 1e3) % 60),
      };
}
function b1({ onContinue: t }) {
  const [e, n] = V.useState(cm);
  V.useEffect(() => {
    const s = setInterval(() => n(cm()), 1e3);
    return () => clearInterval(s);
  }, []);
  const r = [
    { value: e.days, label: "Days" },
    { value: e.hours, label: "Hours" },
    { value: e.minutes, label: "Minutes" },
    { value: e.seconds, label: "Seconds" },
  ];
  return I.jsxs("div", {
    className: "cover-screen",
    children: [
      I.jsx("div", { className: "cover-overlay lum-overlay" }),
      I.jsxs("div", {
        className: "lum-content lum-content--center",
        children: [
          I.jsxs("div", {
            className: "lum-section-header",
            children: [
              I.jsx("div", { className: "lum-line" }),
              I.jsx("span", {
                className: "lum-section-title",
                children: "Counting Down",
              }),
              I.jsx("div", { className: "lum-line" }),
            ],
          }),
          I.jsx("div", {
            className: "cd-units",
            children: r.map(({ value: s, label: i }) =>
              I.jsxs(
                "div",
                {
                  className: "cd-unit",
                  children: [
                    I.jsx("span", { className: "cd-number", children: s }),
                    I.jsx("span", { className: "cd-label", children: i }),
                  ],
                },
                i,
              ),
            ),
          }),
        ],
      }),
    ],
  });
}
function U1() {
  return I.jsxs("svg", {
    className: "evt-icon-svg",
    viewBox: "0 0 44 58",
    fill: "none",
    stroke: "white",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      I.jsx("rect", { x: "7", y: "22", width: "30", height: "26", rx: "1" }),
      I.jsx("line", { x1: "5", y1: "22", x2: "39", y2: "22" }),
      I.jsx("line", { x1: "22", y1: "22", x2: "22", y2: "48" }),
      I.jsx("path", { d: "M22 22 C22 14 16 12 13 15 C10 18 14 22 22 22 Z" }),
      I.jsx("path", { d: "M22 22 C22 14 28 12 31 15 C34 18 30 22 22 22 Z" }),
    ],
  });
}
function z1({ label: t, value: e }) {
  const [n, r] = V.useState(!1),
    s = async () => {
      try {
        (await navigator.clipboard.writeText(e),
          r(!0),
          setTimeout(() => r(!1), 1600));
      } catch {}
    };
  return I.jsxs("div", {
    className: "gift-row",
    children: [
      I.jsxs("div", {
        className: "gift-row-details",
        children: [
          I.jsx("span", { className: "gift-row-label", children: t }),
          I.jsx("span", { className: "gift-row-value", children: e }),
        ],
      }),
      I.jsx("button", {
        type: "button",
        className: "gift-copy-btn",
        onClick: s,
        "aria-label": `Copy ${t}`,
        children: n ? "Copied" : "Copy",
      }),
    ],
  });
}
function B1({ onContinue: t }) {
  const {
    note: e,
    accountLabel: n,
    accountHolder: r,
    accountNumber: s,
  } = xl.giftRegistry;
  return I.jsxs("div", {
    className: "cover-screen",
    children: [
      I.jsx("div", { className: "cover-overlay lum-overlay" }),
      I.jsxs("div", {
        className: "evt-content",
        children: [
          I.jsxs("div", {
            className: "lum-section-header",
            children: [
              I.jsx("div", { className: "lum-line" }),
              I.jsx("span", {
                className: "lum-section-title",
                children: "Gift Registry",
              }),
              I.jsx("div", { className: "lum-line" }),
            ],
          }),
          I.jsx("p", {
            className: "lum-body lum-body--muted",
            style: { marginBottom: 4 },
            children: e,
          }),
          I.jsxs("div", {
            className: "glass-card",
            children: [
              I.jsxs("div", {
                className: "evt-row",
                children: [
                  I.jsx("div", {
                    className: "evt-row-icon",
                    children: I.jsx(U1, {}),
                  }),
                  I.jsxs("div", {
                    className: "evt-row-details",
                    children: [
                      I.jsx("span", { className: "evt-row-name", children: n }),
                      I.jsx("span", { className: "evt-row-sub", children: r }),
                    ],
                  }),
                ],
              }),
              I.jsx("div", {
                className: "evt-divider",
                style: { margin: "16px 0" },
              }),
              I.jsx("div", {
                className: "gift-rows",
                children: I.jsx(z1, { label: "Account Number", value: s }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const $1 = () => {};
var hm = {};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Xv = function (t) {
    const e = [];
    let n = 0;
    for (let r = 0; r < t.length; r++) {
      let s = t.charCodeAt(r);
      s < 128
        ? (e[n++] = s)
        : s < 2048
          ? ((e[n++] = (s >> 6) | 192), (e[n++] = (s & 63) | 128))
          : (s & 64512) === 55296 &&
              r + 1 < t.length &&
              (t.charCodeAt(r + 1) & 64512) === 56320
            ? ((s = 65536 + ((s & 1023) << 10) + (t.charCodeAt(++r) & 1023)),
              (e[n++] = (s >> 18) | 240),
              (e[n++] = ((s >> 12) & 63) | 128),
              (e[n++] = ((s >> 6) & 63) | 128),
              (e[n++] = (s & 63) | 128))
            : ((e[n++] = (s >> 12) | 224),
              (e[n++] = ((s >> 6) & 63) | 128),
              (e[n++] = (s & 63) | 128));
    }
    return e;
  },
  G1 = function (t) {
    const e = [];
    let n = 0,
      r = 0;
    for (; n < t.length; ) {
      const s = t[n++];
      if (s < 128) e[r++] = String.fromCharCode(s);
      else if (s > 191 && s < 224) {
        const i = t[n++];
        e[r++] = String.fromCharCode(((s & 31) << 6) | (i & 63));
      } else if (s > 239 && s < 365) {
        const i = t[n++],
          o = t[n++],
          l = t[n++],
          u =
            (((s & 7) << 18) | ((i & 63) << 12) | ((o & 63) << 6) | (l & 63)) -
            65536;
        ((e[r++] = String.fromCharCode(55296 + (u >> 10))),
          (e[r++] = String.fromCharCode(56320 + (u & 1023))));
      } else {
        const i = t[n++],
          o = t[n++];
        e[r++] = String.fromCharCode(
          ((s & 15) << 12) | ((i & 63) << 6) | (o & 63),
        );
      }
    }
    return e.join("");
  },
  Zv = {
    byteToCharMap_: null,
    charToByteMap_: null,
    byteToCharMapWebSafe_: null,
    charToByteMapWebSafe_: null,
    ENCODED_VALS_BASE:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    get ENCODED_VALS() {
      return this.ENCODED_VALS_BASE + "+/=";
    },
    get ENCODED_VALS_WEBSAFE() {
      return this.ENCODED_VALS_BASE + "-_.";
    },
    HAS_NATIVE_SUPPORT: typeof atob == "function",
    encodeByteArray(t, e) {
      if (!Array.isArray(t))
        throw Error("encodeByteArray takes an array as a parameter");
      this.init_();
      const n = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
        r = [];
      for (let s = 0; s < t.length; s += 3) {
        const i = t[s],
          o = s + 1 < t.length,
          l = o ? t[s + 1] : 0,
          u = s + 2 < t.length,
          h = u ? t[s + 2] : 0,
          d = i >> 2,
          p = ((i & 3) << 4) | (l >> 4);
        let m = ((l & 15) << 2) | (h >> 6),
          T = h & 63;
        (u || ((T = 64), o || (m = 64)), r.push(n[d], n[p], n[m], n[T]));
      }
      return r.join("");
    },
    encodeString(t, e) {
      return this.HAS_NATIVE_SUPPORT && !e
        ? btoa(t)
        : this.encodeByteArray(Xv(t), e);
    },
    decodeString(t, e) {
      return this.HAS_NATIVE_SUPPORT && !e
        ? atob(t)
        : G1(this.decodeStringToByteArray(t, e));
    },
    decodeStringToByteArray(t, e) {
      this.init_();
      const n = e ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        r = [];
      for (let s = 0; s < t.length; ) {
        const i = n[t.charAt(s++)],
          l = s < t.length ? n[t.charAt(s)] : 0;
        ++s;
        const h = s < t.length ? n[t.charAt(s)] : 64;
        ++s;
        const p = s < t.length ? n[t.charAt(s)] : 64;
        if ((++s, i == null || l == null || h == null || p == null))
          throw new H1();
        const m = (i << 2) | (l >> 4);
        if ((r.push(m), h !== 64)) {
          const T = ((l << 4) & 240) | (h >> 2);
          if ((r.push(T), p !== 64)) {
            const x = ((h << 6) & 192) | p;
            r.push(x);
          }
        }
      }
      return r;
    },
    init_() {
      if (!this.byteToCharMap_) {
        ((this.byteToCharMap_ = {}),
          (this.charToByteMap_ = {}),
          (this.byteToCharMapWebSafe_ = {}),
          (this.charToByteMapWebSafe_ = {}));
        for (let t = 0; t < this.ENCODED_VALS.length; t++)
          ((this.byteToCharMap_[t] = this.ENCODED_VALS.charAt(t)),
            (this.charToByteMap_[this.byteToCharMap_[t]] = t),
            (this.byteToCharMapWebSafe_[t] =
              this.ENCODED_VALS_WEBSAFE.charAt(t)),
            (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]] = t),
            t >= this.ENCODED_VALS_BASE.length &&
              ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)] = t),
              (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)] = t)));
      }
    },
  };
class H1 extends Error {
  constructor() {
    (super(...arguments), (this.name = "DecodeBase64StringError"));
  }
}
const W1 = function (t) {
    const e = Xv(t);
    return Zv.encodeByteArray(e, !0);
  },
  Ka = function (t) {
    return W1(t).replace(/\./g, "");
  },
  q1 = function (t) {
    try {
      return Zv.decodeString(t, !0);
    } catch (e) {
      console.error("base64Decode failed: ", e);
    }
    return null;
  };
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function K1() {
  if (typeof self < "u") return self;
  if (typeof window < "u") return window;
  if (typeof global < "u") return global;
  throw new Error("Unable to locate global object.");
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Q1 = () => K1().__FIREBASE_DEFAULTS__,
  Y1 = () => {
    if (typeof process > "u" || typeof hm > "u") return;
    const t = hm.__FIREBASE_DEFAULTS__;
    if (t) return JSON.parse(t);
  },
  J1 = () => {
    if (typeof document > "u") return;
    let t;
    try {
      t = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch {
      return;
    }
    const e = t && q1(t[1]);
    return e && JSON.parse(e);
  },
  yf = () => {
    try {
      return $1() || Q1() || Y1() || J1();
    } catch (t) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);
      return;
    }
  },
  X1 = (t) => {
    var e, n;
    return (n = (e = yf()) == null ? void 0 : e.emulatorHosts) == null
      ? void 0
      : n[t];
  },
  Z1 = (t) => {
    const e = X1(t);
    if (!e) return;
    const n = e.lastIndexOf(":");
    if (n <= 0 || n + 1 === e.length)
      throw new Error(`Invalid host ${e} with no separate hostname and port!`);
    const r = parseInt(e.substring(n + 1), 10);
    return e[0] === "[" ? [e.substring(1, n - 1), r] : [e.substring(0, n), r];
  },
  e_ = () => {
    var t;
    return (t = yf()) == null ? void 0 : t.config;
  };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eI {
  constructor() {
    ((this.reject = () => {}),
      (this.resolve = () => {}),
      (this.promise = new Promise((e, n) => {
        ((this.resolve = e), (this.reject = n));
      })));
  }
  wrapCallback(e) {
    return (n, r) => {
      (n ? this.reject(n) : this.resolve(r),
        typeof e == "function" &&
          (this.promise.catch(() => {}), e.length === 1 ? e(n) : e(n, r)));
    };
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function tI(t, e) {
  if (t.uid)
    throw new Error(
      'The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.',
    );
  const n = { alg: "none", type: "JWT" },
    r = e || "demo-project",
    s = t.iat || 0,
    i = t.sub || t.user_id;
  if (!i)
    throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
  const o = {
    iss: `https://securetoken.google.com/${r}`,
    aud: r,
    iat: s,
    exp: s + 3600,
    auth_time: s,
    sub: i,
    user_id: i,
    firebase: { sign_in_provider: "custom", identities: {} },
    ...t,
  };
  return [Ka(JSON.stringify(n)), Ka(JSON.stringify(o)), ""].join(".");
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function nI() {
  return typeof navigator < "u" && typeof navigator.userAgent == "string"
    ? navigator.userAgent
    : "";
}
function rI() {
  var e;
  const t = (e = yf()) == null ? void 0 : e.forceEnvironment;
  if (t === "node") return !0;
  if (t === "browser") return !1;
  try {
    return (
      Object.prototype.toString.call(global.process) === "[object process]"
    );
  } catch {
    return !1;
  }
}
function sI() {
  return (
    !rI() &&
    !!navigator.userAgent &&
    navigator.userAgent.includes("Safari") &&
    !navigator.userAgent.includes("Chrome")
  );
}
function iI() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function oI() {
  return new Promise((t, e) => {
    try {
      let n = !0;
      const r = "validate-browser-context-for-indexeddb-analytics-module",
        s = self.indexedDB.open(r);
      ((s.onsuccess = () => {
        (s.result.close(), n || self.indexedDB.deleteDatabase(r), t(!0));
      }),
        (s.onupgradeneeded = () => {
          n = !1;
        }),
        (s.onerror = () => {
          var i;
          e(((i = s.error) == null ? void 0 : i.message) || "");
        }));
    } catch (n) {
      e(n);
    }
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const aI = "FirebaseError";
class ks extends Error {
  constructor(e, n, r) {
    (super(n),
      (this.code = e),
      (this.customData = r),
      (this.name = aI),
      Object.setPrototypeOf(this, ks.prototype),
      Error.captureStackTrace &&
        Error.captureStackTrace(this, t_.prototype.create));
  }
}
class t_ {
  constructor(e, n, r) {
    ((this.service = e), (this.serviceName = n), (this.errors = r));
  }
  create(e, ...n) {
    const r = n[0] || {},
      s = `${this.service}/${e}`,
      i = this.errors[e],
      o = i ? lI(i, r) : "Error",
      l = `${this.serviceName}: ${o} (${s}).`;
    return new ks(s, l, r);
  }
}
function lI(t, e) {
  return t.replace(uI, (n, r) => {
    const s = e[r];
    return s != null ? String(s) : `<${r}?>`;
  });
}
const uI = /\{\$([^}]+)}/g;
function Qa(t, e) {
  if (t === e) return !0;
  const n = Object.keys(t),
    r = Object.keys(e);
  for (const s of n) {
    if (!r.includes(s)) return !1;
    const i = t[s],
      o = e[s];
    if (fm(i) && fm(o)) {
      if (!Qa(i, o)) return !1;
    } else if (i !== o) return !1;
  }
  for (const s of r) if (!n.includes(s)) return !1;
  return !0;
}
function fm(t) {
  return t !== null && typeof t == "object";
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Qi(t) {
  return t && t._delegate ? t._delegate : t;
}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function n_(t) {
  try {
    return (
      t.startsWith("http://") || t.startsWith("https://")
        ? new URL(t).hostname
        : t
    ).endsWith(".cloudworkstations.dev");
  } catch {
    return !1;
  }
}
async function cI(t) {
  return (await fetch(t, { credentials: "include" })).ok;
}
class Yi {
  constructor(e, n, r) {
    ((this.name = e),
      (this.instanceFactory = n),
      (this.type = r),
      (this.multipleInstances = !1),
      (this.serviceProps = {}),
      (this.instantiationMode = "LAZY"),
      (this.onInstanceCreated = null));
  }
  setInstantiationMode(e) {
    return ((this.instantiationMode = e), this);
  }
  setMultipleInstances(e) {
    return ((this.multipleInstances = e), this);
  }
  setServiceProps(e) {
    return ((this.serviceProps = e), this);
  }
  setInstanceCreatedCallback(e) {
    return ((this.onInstanceCreated = e), this);
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const mr = "[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class hI {
  constructor(e, n) {
    ((this.name = e),
      (this.container = n),
      (this.component = null),
      (this.instances = new Map()),
      (this.instancesDeferred = new Map()),
      (this.instancesOptions = new Map()),
      (this.onInitCallbacks = new Map()));
  }
  get(e) {
    const n = this.normalizeInstanceIdentifier(e);
    if (!this.instancesDeferred.has(n)) {
      const r = new eI();
      if (
        (this.instancesDeferred.set(n, r),
        this.isInitialized(n) || this.shouldAutoInitialize())
      )
        try {
          const s = this.getOrInitializeService({ instanceIdentifier: n });
          s && r.resolve(s);
        } catch {}
    }
    return this.instancesDeferred.get(n).promise;
  }
  getImmediate(e) {
    const n = this.normalizeInstanceIdentifier(
        e == null ? void 0 : e.identifier,
      ),
      r = (e == null ? void 0 : e.optional) ?? !1;
    if (this.isInitialized(n) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({ instanceIdentifier: n });
      } catch (s) {
        if (r) return null;
        throw s;
      }
    else {
      if (r) return null;
      throw Error(`Service ${this.name} is not available`);
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(e) {
    if (e.name !== this.name)
      throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`);
    if (((this.component = e), !!this.shouldAutoInitialize())) {
      if (dI(e))
        try {
          this.getOrInitializeService({ instanceIdentifier: mr });
        } catch {}
      for (const [n, r] of this.instancesDeferred.entries()) {
        const s = this.normalizeInstanceIdentifier(n);
        try {
          const i = this.getOrInitializeService({ instanceIdentifier: s });
          r.resolve(i);
        } catch {}
      }
    }
  }
  clearInstance(e = mr) {
    (this.instancesDeferred.delete(e),
      this.instancesOptions.delete(e),
      this.instances.delete(e));
  }
  async delete() {
    const e = Array.from(this.instances.values());
    await Promise.all([
      ...e.filter((n) => "INTERNAL" in n).map((n) => n.INTERNAL.delete()),
      ...e.filter((n) => "_delete" in n).map((n) => n._delete()),
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(e = mr) {
    return this.instances.has(e);
  }
  getOptions(e = mr) {
    return this.instancesOptions.get(e) || {};
  }
  initialize(e = {}) {
    const { options: n = {} } = e,
      r = this.normalizeInstanceIdentifier(e.instanceIdentifier);
    if (this.isInitialized(r))
      throw Error(`${this.name}(${r}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const s = this.getOrInitializeService({
      instanceIdentifier: r,
      options: n,
    });
    for (const [i, o] of this.instancesDeferred.entries()) {
      const l = this.normalizeInstanceIdentifier(i);
      r === l && o.resolve(s);
    }
    return s;
  }
  onInit(e, n) {
    const r = this.normalizeInstanceIdentifier(n),
      s = this.onInitCallbacks.get(r) ?? new Set();
    (s.add(e), this.onInitCallbacks.set(r, s));
    const i = this.instances.get(r);
    return (
      i && e(i, r),
      () => {
        s.delete(e);
      }
    );
  }
  invokeOnInitCallbacks(e, n) {
    const r = this.onInitCallbacks.get(n);
    if (r)
      for (const s of r)
        try {
          s(e, n);
        } catch {}
  }
  getOrInitializeService({ instanceIdentifier: e, options: n = {} }) {
    let r = this.instances.get(e);
    if (
      !r &&
      this.component &&
      ((r = this.component.instanceFactory(this.container, {
        instanceIdentifier: fI(e),
        options: n,
      })),
      this.instances.set(e, r),
      this.instancesOptions.set(e, n),
      this.invokeOnInitCallbacks(r, e),
      this.component.onInstanceCreated)
    )
      try {
        this.component.onInstanceCreated(this.container, e, r);
      } catch {}
    return r || null;
  }
  normalizeInstanceIdentifier(e = mr) {
    return this.component ? (this.component.multipleInstances ? e : mr) : e;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function fI(t) {
  return t === mr ? void 0 : t;
}
function dI(t) {
  return t.instantiationMode === "EAGER";
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class pI {
  constructor(e) {
    ((this.name = e), (this.providers = new Map()));
  }
  addComponent(e) {
    const n = this.getProvider(e.name);
    if (n.isComponentSet())
      throw new Error(
        `Component ${e.name} has already been registered with ${this.name}`,
      );
    n.setComponent(e);
  }
  addOrOverwriteComponent(e) {
    (this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name),
      this.addComponent(e));
  }
  getProvider(e) {
    if (this.providers.has(e)) return this.providers.get(e);
    const n = new hI(e, this);
    return (this.providers.set(e, n), n);
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var re;
(function (t) {
  ((t[(t.DEBUG = 0)] = "DEBUG"),
    (t[(t.VERBOSE = 1)] = "VERBOSE"),
    (t[(t.INFO = 2)] = "INFO"),
    (t[(t.WARN = 3)] = "WARN"),
    (t[(t.ERROR = 4)] = "ERROR"),
    (t[(t.SILENT = 5)] = "SILENT"));
})(re || (re = {}));
const mI = {
    debug: re.DEBUG,
    verbose: re.VERBOSE,
    info: re.INFO,
    warn: re.WARN,
    error: re.ERROR,
    silent: re.SILENT,
  },
  gI = re.INFO,
  yI = {
    [re.DEBUG]: "log",
    [re.VERBOSE]: "log",
    [re.INFO]: "info",
    [re.WARN]: "warn",
    [re.ERROR]: "error",
  },
  vI = (t, e, ...n) => {
    if (e < t.logLevel) return;
    const r = new Date().toISOString(),
      s = yI[e];
    if (s) console[s](`[${r}]  ${t.name}:`, ...n);
    else
      throw new Error(
        `Attempted to log a message with an invalid logType (value: ${e})`,
      );
  };
class r_ {
  constructor(e) {
    ((this.name = e),
      (this._logLevel = gI),
      (this._logHandler = vI),
      (this._userLogHandler = null));
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(e) {
    if (!(e in re))
      throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
    this._logLevel = e;
  }
  setLogLevel(e) {
    this._logLevel = typeof e == "string" ? mI[e] : e;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(e) {
    if (typeof e != "function")
      throw new TypeError("Value assigned to `logHandler` must be a function");
    this._logHandler = e;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(e) {
    this._userLogHandler = e;
  }
  debug(...e) {
    (this._userLogHandler && this._userLogHandler(this, re.DEBUG, ...e),
      this._logHandler(this, re.DEBUG, ...e));
  }
  log(...e) {
    (this._userLogHandler && this._userLogHandler(this, re.VERBOSE, ...e),
      this._logHandler(this, re.VERBOSE, ...e));
  }
  info(...e) {
    (this._userLogHandler && this._userLogHandler(this, re.INFO, ...e),
      this._logHandler(this, re.INFO, ...e));
  }
  warn(...e) {
    (this._userLogHandler && this._userLogHandler(this, re.WARN, ...e),
      this._logHandler(this, re.WARN, ...e));
  }
  error(...e) {
    (this._userLogHandler && this._userLogHandler(this, re.ERROR, ...e),
      this._logHandler(this, re.ERROR, ...e));
  }
}
const _I = (t, e) => e.some((n) => t instanceof n);
let dm, pm;
function EI() {
  return (
    dm ||
    (dm = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  );
}
function wI() {
  return (
    pm ||
    (pm = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  );
}
const s_ = new WeakMap(),
  Wc = new WeakMap(),
  i_ = new WeakMap(),
  Bu = new WeakMap(),
  vf = new WeakMap();
function TI(t) {
  const e = new Promise((n, r) => {
    const s = () => {
        (t.removeEventListener("success", i),
          t.removeEventListener("error", o));
      },
      i = () => {
        (n(Gn(t.result)), s());
      },
      o = () => {
        (r(t.error), s());
      };
    (t.addEventListener("success", i), t.addEventListener("error", o));
  });
  return (
    e
      .then((n) => {
        n instanceof IDBCursor && s_.set(n, t);
      })
      .catch(() => {}),
    vf.set(e, t),
    e
  );
}
function SI(t) {
  if (Wc.has(t)) return;
  const e = new Promise((n, r) => {
    const s = () => {
        (t.removeEventListener("complete", i),
          t.removeEventListener("error", o),
          t.removeEventListener("abort", o));
      },
      i = () => {
        (n(), s());
      },
      o = () => {
        (r(t.error || new DOMException("AbortError", "AbortError")), s());
      };
    (t.addEventListener("complete", i),
      t.addEventListener("error", o),
      t.addEventListener("abort", o));
  });
  Wc.set(t, e);
}
let qc = {
  get(t, e, n) {
    if (t instanceof IDBTransaction) {
      if (e === "done") return Wc.get(t);
      if (e === "objectStoreNames") return t.objectStoreNames || i_.get(t);
      if (e === "store")
        return n.objectStoreNames[1]
          ? void 0
          : n.objectStore(n.objectStoreNames[0]);
    }
    return Gn(t[e]);
  },
  set(t, e, n) {
    return ((t[e] = n), !0);
  },
  has(t, e) {
    return t instanceof IDBTransaction && (e === "done" || e === "store")
      ? !0
      : e in t;
  },
};
function II(t) {
  qc = t(qc);
}
function RI(t) {
  return t === IDBDatabase.prototype.transaction &&
    !("objectStoreNames" in IDBTransaction.prototype)
    ? function (e, ...n) {
        const r = t.call($u(this), e, ...n);
        return (i_.set(r, e.sort ? e.sort() : [e]), Gn(r));
      }
    : wI().includes(t)
      ? function (...e) {
          return (t.apply($u(this), e), Gn(s_.get(this)));
        }
      : function (...e) {
          return Gn(t.apply($u(this), e));
        };
}
function AI(t) {
  return typeof t == "function"
    ? RI(t)
    : (t instanceof IDBTransaction && SI(t),
      _I(t, EI()) ? new Proxy(t, qc) : t);
}
function Gn(t) {
  if (t instanceof IDBRequest) return TI(t);
  if (Bu.has(t)) return Bu.get(t);
  const e = AI(t);
  return (e !== t && (Bu.set(t, e), vf.set(e, t)), e);
}
const $u = (t) => vf.get(t);
function CI(t, e, { blocked: n, upgrade: r, blocking: s, terminated: i } = {}) {
  const o = indexedDB.open(t, e),
    l = Gn(o);
  return (
    r &&
      o.addEventListener("upgradeneeded", (u) => {
        r(Gn(o.result), u.oldVersion, u.newVersion, Gn(o.transaction), u);
      }),
    n && o.addEventListener("blocked", (u) => n(u.oldVersion, u.newVersion, u)),
    l
      .then((u) => {
        (i && u.addEventListener("close", () => i()),
          s &&
            u.addEventListener("versionchange", (h) =>
              s(h.oldVersion, h.newVersion, h),
            ));
      })
      .catch(() => {}),
    l
  );
}
const xI = ["get", "getKey", "getAll", "getAllKeys", "count"],
  PI = ["put", "add", "delete", "clear"],
  Gu = new Map();
function mm(t, e) {
  if (!(t instanceof IDBDatabase && !(e in t) && typeof e == "string")) return;
  if (Gu.get(e)) return Gu.get(e);
  const n = e.replace(/FromIndex$/, ""),
    r = e !== n,
    s = PI.includes(n);
  if (
    !(n in (r ? IDBIndex : IDBObjectStore).prototype) ||
    !(s || xI.includes(n))
  )
    return;
  const i = async function (o, ...l) {
    const u = this.transaction(o, s ? "readwrite" : "readonly");
    let h = u.store;
    return (
      r && (h = h.index(l.shift())),
      (await Promise.all([h[n](...l), s && u.done]))[0]
    );
  };
  return (Gu.set(e, i), i);
}
II((t) => ({
  ...t,
  get: (e, n, r) => mm(e, n) || t.get(e, n, r),
  has: (e, n) => !!mm(e, n) || t.has(e, n),
}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class kI {
  constructor(e) {
    this.container = e;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((n) => {
        if (NI(n)) {
          const r = n.getImmediate();
          return `${r.library}/${r.version}`;
        } else return null;
      })
      .filter((n) => n)
      .join(" ");
  }
}
function NI(t) {
  const e = t.getComponent();
  return (e == null ? void 0 : e.type) === "VERSION";
}
const Kc = "@firebase/app",
  gm = "0.14.11";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const mn = new r_("@firebase/app"),
  VI = "@firebase/app-compat",
  DI = "@firebase/analytics-compat",
  LI = "@firebase/analytics",
  MI = "@firebase/app-check-compat",
  OI = "@firebase/app-check",
  FI = "@firebase/auth",
  jI = "@firebase/auth-compat",
  bI = "@firebase/database",
  UI = "@firebase/data-connect",
  zI = "@firebase/database-compat",
  BI = "@firebase/functions",
  $I = "@firebase/functions-compat",
  GI = "@firebase/installations",
  HI = "@firebase/installations-compat",
  WI = "@firebase/messaging",
  qI = "@firebase/messaging-compat",
  KI = "@firebase/performance",
  QI = "@firebase/performance-compat",
  YI = "@firebase/remote-config",
  JI = "@firebase/remote-config-compat",
  XI = "@firebase/storage",
  ZI = "@firebase/storage-compat",
  eR = "@firebase/firestore",
  tR = "@firebase/ai",
  nR = "@firebase/firestore-compat",
  rR = "firebase",
  sR = "12.12.0";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Qc = "[DEFAULT]",
  iR = {
    [Kc]: "fire-core",
    [VI]: "fire-core-compat",
    [LI]: "fire-analytics",
    [DI]: "fire-analytics-compat",
    [OI]: "fire-app-check",
    [MI]: "fire-app-check-compat",
    [FI]: "fire-auth",
    [jI]: "fire-auth-compat",
    [bI]: "fire-rtdb",
    [UI]: "fire-data-connect",
    [zI]: "fire-rtdb-compat",
    [BI]: "fire-fn",
    [$I]: "fire-fn-compat",
    [GI]: "fire-iid",
    [HI]: "fire-iid-compat",
    [WI]: "fire-fcm",
    [qI]: "fire-fcm-compat",
    [KI]: "fire-perf",
    [QI]: "fire-perf-compat",
    [YI]: "fire-rc",
    [JI]: "fire-rc-compat",
    [XI]: "fire-gcs",
    [ZI]: "fire-gcs-compat",
    [eR]: "fire-fst",
    [nR]: "fire-fst-compat",
    [tR]: "fire-vertex",
    "fire-js": "fire-js",
    [rR]: "fire-js-all",
  };
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ya = new Map(),
  oR = new Map(),
  Yc = new Map();
function ym(t, e) {
  try {
    t.container.addComponent(e);
  } catch (n) {
    mn.debug(
      `Component ${e.name} failed to register with FirebaseApp ${t.name}`,
      n,
    );
  }
}
function Ja(t) {
  const e = t.name;
  if (Yc.has(e))
    return (
      mn.debug(`There were multiple attempts to register component ${e}.`),
      !1
    );
  Yc.set(e, t);
  for (const n of Ya.values()) ym(n, t);
  for (const n of oR.values()) ym(n, t);
  return !0;
}
function aR(t, e) {
  const n = t.container.getProvider("heartbeat").getImmediate({ optional: !0 });
  return (n && n.triggerHeartbeat(), t.container.getProvider(e));
}
function lR(t) {
  return t == null ? !1 : t.settings !== void 0;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const uR = {
    "no-app":
      "No Firebase App '{$appName}' has been created - call initializeApp() first",
    "bad-app-name": "Illegal App name: '{$appName}'",
    "duplicate-app":
      "Firebase App named '{$appName}' already exists with different options or config",
    "app-deleted": "Firebase App named '{$appName}' already deleted",
    "server-app-deleted": "Firebase Server App has been deleted",
    "no-options":
      "Need to provide options, when not being deployed to hosting via source.",
    "invalid-app-argument":
      "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    "invalid-log-argument":
      "First argument to `onLog` must be null or a function.",
    "idb-open":
      "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-get":
      "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-set":
      "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-delete":
      "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
    "finalization-registry-not-supported":
      "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
    "invalid-server-app-environment":
      "FirebaseServerApp is not for use in browser environments.",
  },
  Hn = new t_("app", "Firebase", uR);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class cR {
  constructor(e, n, r) {
    ((this._isDeleted = !1),
      (this._options = { ...e }),
      (this._config = { ...n }),
      (this._name = n.name),
      (this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled),
      (this._container = r),
      this.container.addComponent(new Yi("app", () => this, "PUBLIC")));
  }
  get automaticDataCollectionEnabled() {
    return (this.checkDestroyed(), this._automaticDataCollectionEnabled);
  }
  set automaticDataCollectionEnabled(e) {
    (this.checkDestroyed(), (this._automaticDataCollectionEnabled = e));
  }
  get name() {
    return (this.checkDestroyed(), this._name);
  }
  get options() {
    return (this.checkDestroyed(), this._options);
  }
  get config() {
    return (this.checkDestroyed(), this._config);
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(e) {
    this._isDeleted = e;
  }
  checkDestroyed() {
    if (this.isDeleted) throw Hn.create("app-deleted", { appName: this._name });
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const hR = sR;
function o_(t, e = {}) {
  let n = t;
  typeof e != "object" && (e = { name: e });
  const r = { name: Qc, automaticDataCollectionEnabled: !0, ...e },
    s = r.name;
  if (typeof s != "string" || !s)
    throw Hn.create("bad-app-name", { appName: String(s) });
  if ((n || (n = e_()), !n)) throw Hn.create("no-options");
  const i = Ya.get(s);
  if (i) {
    if (Qa(n, i.options) && Qa(r, i.config)) return i;
    throw Hn.create("duplicate-app", { appName: s });
  }
  const o = new pI(s);
  for (const u of Yc.values()) o.addComponent(u);
  const l = new cR(n, r, o);
  return (Ya.set(s, l), l);
}
function fR(t = Qc) {
  const e = Ya.get(t);
  if (!e && t === Qc && e_()) return o_();
  if (!e) throw Hn.create("no-app", { appName: t });
  return e;
}
function us(t, e, n) {
  let r = iR[t] ?? t;
  n && (r += `-${n}`);
  const s = r.match(/\s|\//),
    i = e.match(/\s|\//);
  if (s || i) {
    const o = [`Unable to register library "${r}" with version "${e}":`];
    (s &&
      o.push(
        `library name "${r}" contains illegal characters (whitespace or "/")`,
      ),
      s && i && o.push("and"),
      i &&
        o.push(
          `version name "${e}" contains illegal characters (whitespace or "/")`,
        ),
      mn.warn(o.join(" ")));
    return;
  }
  Ja(new Yi(`${r}-version`, () => ({ library: r, version: e }), "VERSION"));
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const dR = "firebase-heartbeat-database",
  pR = 1,
  Ji = "firebase-heartbeat-store";
let Hu = null;
function a_() {
  return (
    Hu ||
      (Hu = CI(dR, pR, {
        upgrade: (t, e) => {
          switch (e) {
            case 0:
              try {
                t.createObjectStore(Ji);
              } catch (n) {
                console.warn(n);
              }
          }
        },
      }).catch((t) => {
        throw Hn.create("idb-open", { originalErrorMessage: t.message });
      })),
    Hu
  );
}
async function mR(t) {
  try {
    const n = (await a_()).transaction(Ji),
      r = await n.objectStore(Ji).get(l_(t));
    return (await n.done, r);
  } catch (e) {
    if (e instanceof ks) mn.warn(e.message);
    else {
      const n = Hn.create("idb-get", {
        originalErrorMessage: e == null ? void 0 : e.message,
      });
      mn.warn(n.message);
    }
  }
}
async function vm(t, e) {
  try {
    const r = (await a_()).transaction(Ji, "readwrite");
    (await r.objectStore(Ji).put(e, l_(t)), await r.done);
  } catch (n) {
    if (n instanceof ks) mn.warn(n.message);
    else {
      const r = Hn.create("idb-set", {
        originalErrorMessage: n == null ? void 0 : n.message,
      });
      mn.warn(r.message);
    }
  }
}
function l_(t) {
  return `${t.name}!${t.options.appId}`;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const gR = 1024,
  yR = 30;
class vR {
  constructor(e) {
    ((this.container = e), (this._heartbeatsCache = null));
    const n = this.container.getProvider("app").getImmediate();
    ((this._storage = new ER(n)),
      (this._heartbeatsCachePromise = this._storage
        .read()
        .then((r) => ((this._heartbeatsCache = r), r))));
  }
  async triggerHeartbeat() {
    var e, n;
    try {
      const s = this.container
          .getProvider("platform-logger")
          .getImmediate()
          .getPlatformInfoString(),
        i = _m();
      if (
        (((e = this._heartbeatsCache) == null ? void 0 : e.heartbeats) ==
          null &&
          ((this._heartbeatsCache = await this._heartbeatsCachePromise),
          ((n = this._heartbeatsCache) == null ? void 0 : n.heartbeats) ==
            null)) ||
        this._heartbeatsCache.lastSentHeartbeatDate === i ||
        this._heartbeatsCache.heartbeats.some((o) => o.date === i)
      )
        return;
      if (
        (this._heartbeatsCache.heartbeats.push({ date: i, agent: s }),
        this._heartbeatsCache.heartbeats.length > yR)
      ) {
        const o = wR(this._heartbeatsCache.heartbeats);
        this._heartbeatsCache.heartbeats.splice(o, 1);
      }
      return this._storage.overwrite(this._heartbeatsCache);
    } catch (r) {
      mn.warn(r);
    }
  }
  async getHeartbeatsHeader() {
    var e;
    try {
      if (
        (this._heartbeatsCache === null && (await this._heartbeatsCachePromise),
        ((e = this._heartbeatsCache) == null ? void 0 : e.heartbeats) == null ||
          this._heartbeatsCache.heartbeats.length === 0)
      )
        return "";
      const n = _m(),
        { heartbeatsToSend: r, unsentEntries: s } = _R(
          this._heartbeatsCache.heartbeats,
        ),
        i = Ka(JSON.stringify({ version: 2, heartbeats: r }));
      return (
        (this._heartbeatsCache.lastSentHeartbeatDate = n),
        s.length > 0
          ? ((this._heartbeatsCache.heartbeats = s),
            await this._storage.overwrite(this._heartbeatsCache))
          : ((this._heartbeatsCache.heartbeats = []),
            this._storage.overwrite(this._heartbeatsCache)),
        i
      );
    } catch (n) {
      return (mn.warn(n), "");
    }
  }
}
function _m() {
  return new Date().toISOString().substring(0, 10);
}
function _R(t, e = gR) {
  const n = [];
  let r = t.slice();
  for (const s of t) {
    const i = n.find((o) => o.agent === s.agent);
    if (i) {
      if ((i.dates.push(s.date), Em(n) > e)) {
        i.dates.pop();
        break;
      }
    } else if ((n.push({ agent: s.agent, dates: [s.date] }), Em(n) > e)) {
      n.pop();
      break;
    }
    r = r.slice(1);
  }
  return { heartbeatsToSend: n, unsentEntries: r };
}
class ER {
  constructor(e) {
    ((this.app = e),
      (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()));
  }
  async runIndexedDBEnvironmentCheck() {
    return iI()
      ? oI()
          .then(() => !0)
          .catch(() => !1)
      : !1;
  }
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const n = await mR(this.app);
      return n != null && n.heartbeats ? n : { heartbeats: [] };
    } else return { heartbeats: [] };
  }
  async overwrite(e) {
    if (await this._canUseIndexedDBPromise) {
      const r = await this.read();
      return vm(this.app, {
        lastSentHeartbeatDate:
          e.lastSentHeartbeatDate ?? r.lastSentHeartbeatDate,
        heartbeats: e.heartbeats,
      });
    } else return;
  }
  async add(e) {
    if (await this._canUseIndexedDBPromise) {
      const r = await this.read();
      return vm(this.app, {
        lastSentHeartbeatDate:
          e.lastSentHeartbeatDate ?? r.lastSentHeartbeatDate,
        heartbeats: [...r.heartbeats, ...e.heartbeats],
      });
    } else return;
  }
}
function Em(t) {
  return Ka(JSON.stringify({ version: 2, heartbeats: t })).length;
}
function wR(t) {
  if (t.length === 0) return -1;
  let e = 0,
    n = t[0].date;
  for (let r = 1; r < t.length; r++)
    t[r].date < n && ((n = t[r].date), (e = r));
  return e;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function TR(t) {
  (Ja(new Yi("platform-logger", (e) => new kI(e), "PRIVATE")),
    Ja(new Yi("heartbeat", (e) => new vR(e), "PRIVATE")),
    us(Kc, gm, t),
    us(Kc, gm, "esm2020"),
    us("fire-js", ""));
}
TR("");
var wm =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/ var Wn, u_;
(function () {
  var t;
  /** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/ function e(E, y) {
    function w() {}
    ((w.prototype = y.prototype),
      (E.F = y.prototype),
      (E.prototype = new w()),
      (E.prototype.constructor = E),
      (E.D = function (A, C, k) {
        for (
          var S = Array(arguments.length - 2), Ae = 2;
          Ae < arguments.length;
          Ae++
        )
          S[Ae - 2] = arguments[Ae];
        return y.prototype[C].apply(A, S);
      }));
  }
  function n() {
    this.blockSize = -1;
  }
  function r() {
    ((this.blockSize = -1),
      (this.blockSize = 64),
      (this.g = Array(4)),
      (this.C = Array(this.blockSize)),
      (this.o = this.h = 0),
      this.u());
  }
  (e(r, n),
    (r.prototype.u = function () {
      ((this.g[0] = 1732584193),
        (this.g[1] = 4023233417),
        (this.g[2] = 2562383102),
        (this.g[3] = 271733878),
        (this.o = this.h = 0));
    }));
  function s(E, y, w) {
    w || (w = 0);
    const A = Array(16);
    if (typeof y == "string")
      for (var C = 0; C < 16; ++C)
        A[C] =
          y.charCodeAt(w++) |
          (y.charCodeAt(w++) << 8) |
          (y.charCodeAt(w++) << 16) |
          (y.charCodeAt(w++) << 24);
    else
      for (C = 0; C < 16; ++C)
        A[C] = y[w++] | (y[w++] << 8) | (y[w++] << 16) | (y[w++] << 24);
    ((y = E.g[0]), (w = E.g[1]), (C = E.g[2]));
    let k = E.g[3],
      S;
    ((S = (y + (k ^ (w & (C ^ k))) + A[0] + 3614090360) & 4294967295),
      (y = w + (((S << 7) & 4294967295) | (S >>> 25))),
      (S = (k + (C ^ (y & (w ^ C))) + A[1] + 3905402710) & 4294967295),
      (k = y + (((S << 12) & 4294967295) | (S >>> 20))),
      (S = (C + (w ^ (k & (y ^ w))) + A[2] + 606105819) & 4294967295),
      (C = k + (((S << 17) & 4294967295) | (S >>> 15))),
      (S = (w + (y ^ (C & (k ^ y))) + A[3] + 3250441966) & 4294967295),
      (w = C + (((S << 22) & 4294967295) | (S >>> 10))),
      (S = (y + (k ^ (w & (C ^ k))) + A[4] + 4118548399) & 4294967295),
      (y = w + (((S << 7) & 4294967295) | (S >>> 25))),
      (S = (k + (C ^ (y & (w ^ C))) + A[5] + 1200080426) & 4294967295),
      (k = y + (((S << 12) & 4294967295) | (S >>> 20))),
      (S = (C + (w ^ (k & (y ^ w))) + A[6] + 2821735955) & 4294967295),
      (C = k + (((S << 17) & 4294967295) | (S >>> 15))),
      (S = (w + (y ^ (C & (k ^ y))) + A[7] + 4249261313) & 4294967295),
      (w = C + (((S << 22) & 4294967295) | (S >>> 10))),
      (S = (y + (k ^ (w & (C ^ k))) + A[8] + 1770035416) & 4294967295),
      (y = w + (((S << 7) & 4294967295) | (S >>> 25))),
      (S = (k + (C ^ (y & (w ^ C))) + A[9] + 2336552879) & 4294967295),
      (k = y + (((S << 12) & 4294967295) | (S >>> 20))),
      (S = (C + (w ^ (k & (y ^ w))) + A[10] + 4294925233) & 4294967295),
      (C = k + (((S << 17) & 4294967295) | (S >>> 15))),
      (S = (w + (y ^ (C & (k ^ y))) + A[11] + 2304563134) & 4294967295),
      (w = C + (((S << 22) & 4294967295) | (S >>> 10))),
      (S = (y + (k ^ (w & (C ^ k))) + A[12] + 1804603682) & 4294967295),
      (y = w + (((S << 7) & 4294967295) | (S >>> 25))),
      (S = (k + (C ^ (y & (w ^ C))) + A[13] + 4254626195) & 4294967295),
      (k = y + (((S << 12) & 4294967295) | (S >>> 20))),
      (S = (C + (w ^ (k & (y ^ w))) + A[14] + 2792965006) & 4294967295),
      (C = k + (((S << 17) & 4294967295) | (S >>> 15))),
      (S = (w + (y ^ (C & (k ^ y))) + A[15] + 1236535329) & 4294967295),
      (w = C + (((S << 22) & 4294967295) | (S >>> 10))),
      (S = (y + (C ^ (k & (w ^ C))) + A[1] + 4129170786) & 4294967295),
      (y = w + (((S << 5) & 4294967295) | (S >>> 27))),
      (S = (k + (w ^ (C & (y ^ w))) + A[6] + 3225465664) & 4294967295),
      (k = y + (((S << 9) & 4294967295) | (S >>> 23))),
      (S = (C + (y ^ (w & (k ^ y))) + A[11] + 643717713) & 4294967295),
      (C = k + (((S << 14) & 4294967295) | (S >>> 18))),
      (S = (w + (k ^ (y & (C ^ k))) + A[0] + 3921069994) & 4294967295),
      (w = C + (((S << 20) & 4294967295) | (S >>> 12))),
      (S = (y + (C ^ (k & (w ^ C))) + A[5] + 3593408605) & 4294967295),
      (y = w + (((S << 5) & 4294967295) | (S >>> 27))),
      (S = (k + (w ^ (C & (y ^ w))) + A[10] + 38016083) & 4294967295),
      (k = y + (((S << 9) & 4294967295) | (S >>> 23))),
      (S = (C + (y ^ (w & (k ^ y))) + A[15] + 3634488961) & 4294967295),
      (C = k + (((S << 14) & 4294967295) | (S >>> 18))),
      (S = (w + (k ^ (y & (C ^ k))) + A[4] + 3889429448) & 4294967295),
      (w = C + (((S << 20) & 4294967295) | (S >>> 12))),
      (S = (y + (C ^ (k & (w ^ C))) + A[9] + 568446438) & 4294967295),
      (y = w + (((S << 5) & 4294967295) | (S >>> 27))),
      (S = (k + (w ^ (C & (y ^ w))) + A[14] + 3275163606) & 4294967295),
      (k = y + (((S << 9) & 4294967295) | (S >>> 23))),
      (S = (C + (y ^ (w & (k ^ y))) + A[3] + 4107603335) & 4294967295),
      (C = k + (((S << 14) & 4294967295) | (S >>> 18))),
      (S = (w + (k ^ (y & (C ^ k))) + A[8] + 1163531501) & 4294967295),
      (w = C + (((S << 20) & 4294967295) | (S >>> 12))),
      (S = (y + (C ^ (k & (w ^ C))) + A[13] + 2850285829) & 4294967295),
      (y = w + (((S << 5) & 4294967295) | (S >>> 27))),
      (S = (k + (w ^ (C & (y ^ w))) + A[2] + 4243563512) & 4294967295),
      (k = y + (((S << 9) & 4294967295) | (S >>> 23))),
      (S = (C + (y ^ (w & (k ^ y))) + A[7] + 1735328473) & 4294967295),
      (C = k + (((S << 14) & 4294967295) | (S >>> 18))),
      (S = (w + (k ^ (y & (C ^ k))) + A[12] + 2368359562) & 4294967295),
      (w = C + (((S << 20) & 4294967295) | (S >>> 12))),
      (S = (y + (w ^ C ^ k) + A[5] + 4294588738) & 4294967295),
      (y = w + (((S << 4) & 4294967295) | (S >>> 28))),
      (S = (k + (y ^ w ^ C) + A[8] + 2272392833) & 4294967295),
      (k = y + (((S << 11) & 4294967295) | (S >>> 21))),
      (S = (C + (k ^ y ^ w) + A[11] + 1839030562) & 4294967295),
      (C = k + (((S << 16) & 4294967295) | (S >>> 16))),
      (S = (w + (C ^ k ^ y) + A[14] + 4259657740) & 4294967295),
      (w = C + (((S << 23) & 4294967295) | (S >>> 9))),
      (S = (y + (w ^ C ^ k) + A[1] + 2763975236) & 4294967295),
      (y = w + (((S << 4) & 4294967295) | (S >>> 28))),
      (S = (k + (y ^ w ^ C) + A[4] + 1272893353) & 4294967295),
      (k = y + (((S << 11) & 4294967295) | (S >>> 21))),
      (S = (C + (k ^ y ^ w) + A[7] + 4139469664) & 4294967295),
      (C = k + (((S << 16) & 4294967295) | (S >>> 16))),
      (S = (w + (C ^ k ^ y) + A[10] + 3200236656) & 4294967295),
      (w = C + (((S << 23) & 4294967295) | (S >>> 9))),
      (S = (y + (w ^ C ^ k) + A[13] + 681279174) & 4294967295),
      (y = w + (((S << 4) & 4294967295) | (S >>> 28))),
      (S = (k + (y ^ w ^ C) + A[0] + 3936430074) & 4294967295),
      (k = y + (((S << 11) & 4294967295) | (S >>> 21))),
      (S = (C + (k ^ y ^ w) + A[3] + 3572445317) & 4294967295),
      (C = k + (((S << 16) & 4294967295) | (S >>> 16))),
      (S = (w + (C ^ k ^ y) + A[6] + 76029189) & 4294967295),
      (w = C + (((S << 23) & 4294967295) | (S >>> 9))),
      (S = (y + (w ^ C ^ k) + A[9] + 3654602809) & 4294967295),
      (y = w + (((S << 4) & 4294967295) | (S >>> 28))),
      (S = (k + (y ^ w ^ C) + A[12] + 3873151461) & 4294967295),
      (k = y + (((S << 11) & 4294967295) | (S >>> 21))),
      (S = (C + (k ^ y ^ w) + A[15] + 530742520) & 4294967295),
      (C = k + (((S << 16) & 4294967295) | (S >>> 16))),
      (S = (w + (C ^ k ^ y) + A[2] + 3299628645) & 4294967295),
      (w = C + (((S << 23) & 4294967295) | (S >>> 9))),
      (S = (y + (C ^ (w | ~k)) + A[0] + 4096336452) & 4294967295),
      (y = w + (((S << 6) & 4294967295) | (S >>> 26))),
      (S = (k + (w ^ (y | ~C)) + A[7] + 1126891415) & 4294967295),
      (k = y + (((S << 10) & 4294967295) | (S >>> 22))),
      (S = (C + (y ^ (k | ~w)) + A[14] + 2878612391) & 4294967295),
      (C = k + (((S << 15) & 4294967295) | (S >>> 17))),
      (S = (w + (k ^ (C | ~y)) + A[5] + 4237533241) & 4294967295),
      (w = C + (((S << 21) & 4294967295) | (S >>> 11))),
      (S = (y + (C ^ (w | ~k)) + A[12] + 1700485571) & 4294967295),
      (y = w + (((S << 6) & 4294967295) | (S >>> 26))),
      (S = (k + (w ^ (y | ~C)) + A[3] + 2399980690) & 4294967295),
      (k = y + (((S << 10) & 4294967295) | (S >>> 22))),
      (S = (C + (y ^ (k | ~w)) + A[10] + 4293915773) & 4294967295),
      (C = k + (((S << 15) & 4294967295) | (S >>> 17))),
      (S = (w + (k ^ (C | ~y)) + A[1] + 2240044497) & 4294967295),
      (w = C + (((S << 21) & 4294967295) | (S >>> 11))),
      (S = (y + (C ^ (w | ~k)) + A[8] + 1873313359) & 4294967295),
      (y = w + (((S << 6) & 4294967295) | (S >>> 26))),
      (S = (k + (w ^ (y | ~C)) + A[15] + 4264355552) & 4294967295),
      (k = y + (((S << 10) & 4294967295) | (S >>> 22))),
      (S = (C + (y ^ (k | ~w)) + A[6] + 2734768916) & 4294967295),
      (C = k + (((S << 15) & 4294967295) | (S >>> 17))),
      (S = (w + (k ^ (C | ~y)) + A[13] + 1309151649) & 4294967295),
      (w = C + (((S << 21) & 4294967295) | (S >>> 11))),
      (S = (y + (C ^ (w | ~k)) + A[4] + 4149444226) & 4294967295),
      (y = w + (((S << 6) & 4294967295) | (S >>> 26))),
      (S = (k + (w ^ (y | ~C)) + A[11] + 3174756917) & 4294967295),
      (k = y + (((S << 10) & 4294967295) | (S >>> 22))),
      (S = (C + (y ^ (k | ~w)) + A[2] + 718787259) & 4294967295),
      (C = k + (((S << 15) & 4294967295) | (S >>> 17))),
      (S = (w + (k ^ (C | ~y)) + A[9] + 3951481745) & 4294967295),
      (E.g[0] = (E.g[0] + y) & 4294967295),
      (E.g[1] =
        (E.g[1] + (C + (((S << 21) & 4294967295) | (S >>> 11)))) & 4294967295),
      (E.g[2] = (E.g[2] + C) & 4294967295),
      (E.g[3] = (E.g[3] + k) & 4294967295));
  }
  ((r.prototype.v = function (E, y) {
    y === void 0 && (y = E.length);
    const w = y - this.blockSize,
      A = this.C;
    let C = this.h,
      k = 0;
    for (; k < y; ) {
      if (C == 0) for (; k <= w; ) (s(this, E, k), (k += this.blockSize));
      if (typeof E == "string") {
        for (; k < y; )
          if (((A[C++] = E.charCodeAt(k++)), C == this.blockSize)) {
            (s(this, A), (C = 0));
            break;
          }
      } else
        for (; k < y; )
          if (((A[C++] = E[k++]), C == this.blockSize)) {
            (s(this, A), (C = 0));
            break;
          }
    }
    ((this.h = C), (this.o += y));
  }),
    (r.prototype.A = function () {
      var E = Array(
        (this.h < 56 ? this.blockSize : this.blockSize * 2) - this.h,
      );
      E[0] = 128;
      for (var y = 1; y < E.length - 8; ++y) E[y] = 0;
      y = this.o * 8;
      for (var w = E.length - 8; w < E.length; ++w)
        ((E[w] = y & 255), (y /= 256));
      for (this.v(E), E = Array(16), y = 0, w = 0; w < 4; ++w)
        for (let A = 0; A < 32; A += 8) E[y++] = (this.g[w] >>> A) & 255;
      return E;
    }));
  function i(E, y) {
    var w = l;
    return Object.prototype.hasOwnProperty.call(w, E) ? w[E] : (w[E] = y(E));
  }
  function o(E, y) {
    this.h = y;
    const w = [];
    let A = !0;
    for (let C = E.length - 1; C >= 0; C--) {
      const k = E[C] | 0;
      (A && k == y) || ((w[C] = k), (A = !1));
    }
    this.g = w;
  }
  var l = {};
  function u(E) {
    return -128 <= E && E < 128
      ? i(E, function (y) {
          return new o([y | 0], y < 0 ? -1 : 0);
        })
      : new o([E | 0], E < 0 ? -1 : 0);
  }
  function h(E) {
    if (isNaN(E) || !isFinite(E)) return p;
    if (E < 0) return D(h(-E));
    const y = [];
    let w = 1;
    for (let A = 0; E >= w; A++) ((y[A] = (E / w) | 0), (w *= 4294967296));
    return new o(y, 0);
  }
  function d(E, y) {
    if (E.length == 0) throw Error("number format error: empty string");
    if (((y = y || 10), y < 2 || 36 < y))
      throw Error("radix out of range: " + y);
    if (E.charAt(0) == "-") return D(d(E.substring(1), y));
    if (E.indexOf("-") >= 0)
      throw Error('number format error: interior "-" character');
    const w = h(Math.pow(y, 8));
    let A = p;
    for (let k = 0; k < E.length; k += 8) {
      var C = Math.min(8, E.length - k);
      const S = parseInt(E.substring(k, k + C), y);
      C < 8
        ? ((C = h(Math.pow(y, C))), (A = A.j(C).add(h(S))))
        : ((A = A.j(w)), (A = A.add(h(S))));
    }
    return A;
  }
  var p = u(0),
    m = u(1),
    T = u(16777216);
  ((t = o.prototype),
    (t.m = function () {
      if (P(this)) return -D(this).m();
      let E = 0,
        y = 1;
      for (let w = 0; w < this.g.length; w++) {
        const A = this.i(w);
        ((E += (A >= 0 ? A : 4294967296 + A) * y), (y *= 4294967296));
      }
      return E;
    }),
    (t.toString = function (E) {
      if (((E = E || 10), E < 2 || 36 < E))
        throw Error("radix out of range: " + E);
      if (x(this)) return "0";
      if (P(this)) return "-" + D(this).toString(E);
      const y = h(Math.pow(E, 6));
      var w = this;
      let A = "";
      for (;;) {
        const C = M(w, y).g;
        w = _(w, C.j(y));
        let k = ((w.g.length > 0 ? w.g[0] : w.h) >>> 0).toString(E);
        if (((w = C), x(w))) return k + A;
        for (; k.length < 6; ) k = "0" + k;
        A = k + A;
      }
    }),
    (t.i = function (E) {
      return E < 0 ? 0 : E < this.g.length ? this.g[E] : this.h;
    }));
  function x(E) {
    if (E.h != 0) return !1;
    for (let y = 0; y < E.g.length; y++) if (E.g[y] != 0) return !1;
    return !0;
  }
  function P(E) {
    return E.h == -1;
  }
  t.l = function (E) {
    return ((E = _(this, E)), P(E) ? -1 : x(E) ? 0 : 1);
  };
  function D(E) {
    const y = E.g.length,
      w = [];
    for (let A = 0; A < y; A++) w[A] = ~E.g[A];
    return new o(w, ~E.h).add(m);
  }
  ((t.abs = function () {
    return P(this) ? D(this) : this;
  }),
    (t.add = function (E) {
      const y = Math.max(this.g.length, E.g.length),
        w = [];
      let A = 0;
      for (let C = 0; C <= y; C++) {
        let k = A + (this.i(C) & 65535) + (E.i(C) & 65535),
          S = (k >>> 16) + (this.i(C) >>> 16) + (E.i(C) >>> 16);
        ((A = S >>> 16), (k &= 65535), (S &= 65535), (w[C] = (S << 16) | k));
      }
      return new o(w, w[w.length - 1] & -2147483648 ? -1 : 0);
    }));
  function _(E, y) {
    return E.add(D(y));
  }
  t.j = function (E) {
    if (x(this) || x(E)) return p;
    if (P(this)) return P(E) ? D(this).j(D(E)) : D(D(this).j(E));
    if (P(E)) return D(this.j(D(E)));
    if (this.l(T) < 0 && E.l(T) < 0) return h(this.m() * E.m());
    const y = this.g.length + E.g.length,
      w = [];
    for (var A = 0; A < 2 * y; A++) w[A] = 0;
    for (A = 0; A < this.g.length; A++)
      for (let C = 0; C < E.g.length; C++) {
        const k = this.i(A) >>> 16,
          S = this.i(A) & 65535,
          Ae = E.i(C) >>> 16,
          Oe = E.i(C) & 65535;
        ((w[2 * A + 2 * C] += S * Oe),
          v(w, 2 * A + 2 * C),
          (w[2 * A + 2 * C + 1] += k * Oe),
          v(w, 2 * A + 2 * C + 1),
          (w[2 * A + 2 * C + 1] += S * Ae),
          v(w, 2 * A + 2 * C + 1),
          (w[2 * A + 2 * C + 2] += k * Ae),
          v(w, 2 * A + 2 * C + 2));
      }
    for (E = 0; E < y; E++) w[E] = (w[2 * E + 1] << 16) | w[2 * E];
    for (E = y; E < 2 * y; E++) w[E] = 0;
    return new o(w, 0);
  };
  function v(E, y) {
    for (; (E[y] & 65535) != E[y]; )
      ((E[y + 1] += E[y] >>> 16), (E[y] &= 65535), y++);
  }
  function R(E, y) {
    ((this.g = E), (this.h = y));
  }
  function M(E, y) {
    if (x(y)) throw Error("division by zero");
    if (x(E)) return new R(p, p);
    if (P(E)) return ((y = M(D(E), y)), new R(D(y.g), D(y.h)));
    if (P(y)) return ((y = M(E, D(y))), new R(D(y.g), y.h));
    if (E.g.length > 30) {
      if (P(E) || P(y))
        throw Error("slowDivide_ only works with positive integers.");
      for (var w = m, A = y; A.l(E) <= 0; ) ((w = j(w)), (A = j(A)));
      var C = U(w, 1),
        k = U(A, 1);
      for (A = U(A, 2), w = U(w, 2); !x(A); ) {
        var S = k.add(A);
        (S.l(E) <= 0 && ((C = C.add(w)), (k = S)),
          (A = U(A, 1)),
          (w = U(w, 1)));
      }
      return ((y = _(E, C.j(y))), new R(C, y));
    }
    for (C = p; E.l(y) >= 0; ) {
      for (
        w = Math.max(1, Math.floor(E.m() / y.m())),
          A = Math.ceil(Math.log(w) / Math.LN2),
          A = A <= 48 ? 1 : Math.pow(2, A - 48),
          k = h(w),
          S = k.j(y);
        P(S) || S.l(E) > 0;
      )
        ((w -= A), (k = h(w)), (S = k.j(y)));
      (x(k) && (k = m), (C = C.add(k)), (E = _(E, S)));
    }
    return new R(C, E);
  }
  ((t.B = function (E) {
    return M(this, E).h;
  }),
    (t.and = function (E) {
      const y = Math.max(this.g.length, E.g.length),
        w = [];
      for (let A = 0; A < y; A++) w[A] = this.i(A) & E.i(A);
      return new o(w, this.h & E.h);
    }),
    (t.or = function (E) {
      const y = Math.max(this.g.length, E.g.length),
        w = [];
      for (let A = 0; A < y; A++) w[A] = this.i(A) | E.i(A);
      return new o(w, this.h | E.h);
    }),
    (t.xor = function (E) {
      const y = Math.max(this.g.length, E.g.length),
        w = [];
      for (let A = 0; A < y; A++) w[A] = this.i(A) ^ E.i(A);
      return new o(w, this.h ^ E.h);
    }));
  function j(E) {
    const y = E.g.length + 1,
      w = [];
    for (let A = 0; A < y; A++) w[A] = (E.i(A) << 1) | (E.i(A - 1) >>> 31);
    return new o(w, E.h);
  }
  function U(E, y) {
    const w = y >> 5;
    y %= 32;
    const A = E.g.length - w,
      C = [];
    for (let k = 0; k < A; k++)
      C[k] =
        y > 0 ? (E.i(k + w) >>> y) | (E.i(k + w + 1) << (32 - y)) : E.i(k + w);
    return new o(C, E.h);
  }
  ((r.prototype.digest = r.prototype.A),
    (r.prototype.reset = r.prototype.u),
    (r.prototype.update = r.prototype.v),
    (u_ = r),
    (o.prototype.add = o.prototype.add),
    (o.prototype.multiply = o.prototype.j),
    (o.prototype.modulo = o.prototype.B),
    (o.prototype.compare = o.prototype.l),
    (o.prototype.toNumber = o.prototype.m),
    (o.prototype.toString = o.prototype.toString),
    (o.prototype.getBits = o.prototype.i),
    (o.fromNumber = h),
    (o.fromString = d),
    (Wn = o));
}).apply(
  typeof wm < "u"
    ? wm
    : typeof self < "u"
      ? self
      : typeof window < "u"
        ? window
        : {},
);
var Qo =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/ var c_, pi, h_, ma, Jc, f_, d_, p_;
(function () {
  var t,
    e = Object.defineProperty;
  function n(a) {
    a = [
      typeof globalThis == "object" && globalThis,
      a,
      typeof window == "object" && window,
      typeof self == "object" && self,
      typeof Qo == "object" && Qo,
    ];
    for (var c = 0; c < a.length; ++c) {
      var f = a[c];
      if (f && f.Math == Math) return f;
    }
    throw Error("Cannot find global object");
  }
  var r = n(this);
  function s(a, c) {
    if (c)
      e: {
        var f = r;
        a = a.split(".");
        for (var g = 0; g < a.length - 1; g++) {
          var N = a[g];
          if (!(N in f)) break e;
          f = f[N];
        }
        ((a = a[a.length - 1]),
          (g = f[a]),
          (c = c(g)),
          c != g &&
            c != null &&
            e(f, a, { configurable: !0, writable: !0, value: c }));
      }
  }
  (s("Symbol.dispose", function (a) {
    return a || Symbol("Symbol.dispose");
  }),
    s("Array.prototype.values", function (a) {
      return (
        a ||
        function () {
          return this[Symbol.iterator]();
        }
      );
    }),
    s("Object.entries", function (a) {
      return (
        a ||
        function (c) {
          var f = [],
            g;
          for (g in c)
            Object.prototype.hasOwnProperty.call(c, g) && f.push([g, c[g]]);
          return f;
        }
      );
    }));
  /** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/ var i = i || {},
    o = this || self;
  function l(a) {
    var c = typeof a;
    return (c == "object" && a != null) || c == "function";
  }
  function u(a, c, f) {
    return a.call.apply(a.bind, arguments);
  }
  function h(a, c, f) {
    return ((h = u), h.apply(null, arguments));
  }
  function d(a, c) {
    var f = Array.prototype.slice.call(arguments, 1);
    return function () {
      var g = f.slice();
      return (g.push.apply(g, arguments), a.apply(this, g));
    };
  }
  function p(a, c) {
    function f() {}
    ((f.prototype = c.prototype),
      (a.Z = c.prototype),
      (a.prototype = new f()),
      (a.prototype.constructor = a),
      (a.Ob = function (g, N, L) {
        for (
          var z = Array(arguments.length - 2), X = 2;
          X < arguments.length;
          X++
        )
          z[X - 2] = arguments[X];
        return c.prototype[N].apply(g, z);
      }));
  }
  var m =
    typeof AsyncContext < "u" && typeof AsyncContext.Snapshot == "function"
      ? (a) => a && AsyncContext.Snapshot.wrap(a)
      : (a) => a;
  function T(a) {
    const c = a.length;
    if (c > 0) {
      const f = Array(c);
      for (let g = 0; g < c; g++) f[g] = a[g];
      return f;
    }
    return [];
  }
  function x(a, c) {
    for (let g = 1; g < arguments.length; g++) {
      const N = arguments[g];
      var f = typeof N;
      if (
        ((f =
          f != "object" ? f : N ? (Array.isArray(N) ? "array" : f) : "null"),
        f == "array" || (f == "object" && typeof N.length == "number"))
      ) {
        f = a.length || 0;
        const L = N.length || 0;
        a.length = f + L;
        for (let z = 0; z < L; z++) a[f + z] = N[z];
      } else a.push(N);
    }
  }
  class P {
    constructor(c, f) {
      ((this.i = c), (this.j = f), (this.h = 0), (this.g = null));
    }
    get() {
      let c;
      return (
        this.h > 0
          ? (this.h--, (c = this.g), (this.g = c.next), (c.next = null))
          : (c = this.i()),
        c
      );
    }
  }
  function D(a) {
    o.setTimeout(() => {
      throw a;
    }, 0);
  }
  function _() {
    var a = E;
    let c = null;
    return (
      a.g &&
        ((c = a.g), (a.g = a.g.next), a.g || (a.h = null), (c.next = null)),
      c
    );
  }
  class v {
    constructor() {
      this.h = this.g = null;
    }
    add(c, f) {
      const g = R.get();
      (g.set(c, f), this.h ? (this.h.next = g) : (this.g = g), (this.h = g));
    }
  }
  var R = new P(
    () => new M(),
    (a) => a.reset(),
  );
  class M {
    constructor() {
      this.next = this.g = this.h = null;
    }
    set(c, f) {
      ((this.h = c), (this.g = f), (this.next = null));
    }
    reset() {
      this.next = this.g = this.h = null;
    }
  }
  let j,
    U = !1,
    E = new v(),
    y = () => {
      const a = Promise.resolve(void 0);
      j = () => {
        a.then(w);
      };
    };
  function w() {
    for (var a; (a = _()); ) {
      try {
        a.h.call(a.g);
      } catch (f) {
        D(f);
      }
      var c = R;
      (c.j(a), c.h < 100 && (c.h++, (a.next = c.g), (c.g = a)));
    }
    U = !1;
  }
  function A() {
    ((this.u = this.u), (this.C = this.C));
  }
  ((A.prototype.u = !1),
    (A.prototype.dispose = function () {
      this.u || ((this.u = !0), this.N());
    }),
    (A.prototype[Symbol.dispose] = function () {
      this.dispose();
    }),
    (A.prototype.N = function () {
      if (this.C) for (; this.C.length; ) this.C.shift()();
    }));
  function C(a, c) {
    ((this.type = a), (this.g = this.target = c), (this.defaultPrevented = !1));
  }
  C.prototype.h = function () {
    this.defaultPrevented = !0;
  };
  var k = (function () {
    if (!o.addEventListener || !Object.defineProperty) return !1;
    var a = !1,
      c = Object.defineProperty({}, "passive", {
        get: function () {
          a = !0;
        },
      });
    try {
      const f = () => {};
      (o.addEventListener("test", f, c), o.removeEventListener("test", f, c));
    } catch {}
    return a;
  })();
  function S(a) {
    return /^[\s\xa0]*$/.test(a);
  }
  function Ae(a, c) {
    (C.call(this, a ? a.type : ""),
      (this.relatedTarget = this.g = this.target = null),
      (this.button =
        this.screenY =
        this.screenX =
        this.clientY =
        this.clientX =
          0),
      (this.key = ""),
      (this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1),
      (this.state = null),
      (this.pointerId = 0),
      (this.pointerType = ""),
      (this.i = null),
      a && this.init(a, c));
  }
  (p(Ae, C),
    (Ae.prototype.init = function (a, c) {
      const f = (this.type = a.type),
        g =
          a.changedTouches && a.changedTouches.length
            ? a.changedTouches[0]
            : null;
      ((this.target = a.target || a.srcElement),
        (this.g = c),
        (c = a.relatedTarget),
        c ||
          (f == "mouseover"
            ? (c = a.fromElement)
            : f == "mouseout" && (c = a.toElement)),
        (this.relatedTarget = c),
        g
          ? ((this.clientX = g.clientX !== void 0 ? g.clientX : g.pageX),
            (this.clientY = g.clientY !== void 0 ? g.clientY : g.pageY),
            (this.screenX = g.screenX || 0),
            (this.screenY = g.screenY || 0))
          : ((this.clientX = a.clientX !== void 0 ? a.clientX : a.pageX),
            (this.clientY = a.clientY !== void 0 ? a.clientY : a.pageY),
            (this.screenX = a.screenX || 0),
            (this.screenY = a.screenY || 0)),
        (this.button = a.button),
        (this.key = a.key || ""),
        (this.ctrlKey = a.ctrlKey),
        (this.altKey = a.altKey),
        (this.shiftKey = a.shiftKey),
        (this.metaKey = a.metaKey),
        (this.pointerId = a.pointerId || 0),
        (this.pointerType = a.pointerType),
        (this.state = a.state),
        (this.i = a),
        a.defaultPrevented && Ae.Z.h.call(this));
    }),
    (Ae.prototype.h = function () {
      Ae.Z.h.call(this);
      const a = this.i;
      a.preventDefault ? a.preventDefault() : (a.returnValue = !1);
    }));
  var Oe = "closure_listenable_" + ((Math.random() * 1e6) | 0),
    Ms = 0;
  function Os(a, c, f, g, N) {
    ((this.listener = a),
      (this.proxy = null),
      (this.src = c),
      (this.type = f),
      (this.capture = !!g),
      (this.ha = N),
      (this.key = ++Ms),
      (this.da = this.fa = !1));
  }
  function B(a) {
    ((a.da = !0),
      (a.listener = null),
      (a.proxy = null),
      (a.src = null),
      (a.ha = null));
  }
  function K(a, c, f) {
    for (const g in a) c.call(f, a[g], g, a);
  }
  function J(a, c) {
    for (const f in a) c.call(void 0, a[f], f, a);
  }
  function pe(a) {
    const c = {};
    for (const f in a) c[f] = a[f];
    return c;
  }
  const Se =
    "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
      " ",
    );
  function or(a, c) {
    let f, g;
    for (let N = 1; N < arguments.length; N++) {
      g = arguments[N];
      for (f in g) a[f] = g[f];
      for (let L = 0; L < Se.length; L++)
        ((f = Se[L]),
          Object.prototype.hasOwnProperty.call(g, f) && (a[f] = g[f]));
    }
  }
  function Et(a) {
    ((this.src = a), (this.g = {}), (this.h = 0));
  }
  Et.prototype.add = function (a, c, f, g, N) {
    const L = a.toString();
    ((a = this.g[L]), a || ((a = this.g[L] = []), this.h++));
    const z = kt(a, c, g, N);
    return (
      z > -1
        ? ((c = a[z]), f || (c.fa = !1))
        : ((c = new Os(c, this.src, L, !!g, N)), (c.fa = f), a.push(c)),
      c
    );
  };
  function ar(a, c) {
    const f = c.type;
    if (f in a.g) {
      var g = a.g[f],
        N = Array.prototype.indexOf.call(g, c, void 0),
        L;
      ((L = N >= 0) && Array.prototype.splice.call(g, N, 1),
        L && (B(c), a.g[f].length == 0 && (delete a.g[f], a.h--)));
    }
  }
  function kt(a, c, f, g) {
    for (let N = 0; N < a.length; ++N) {
      const L = a[N];
      if (!L.da && L.listener == c && L.capture == !!f && L.ha == g) return N;
    }
    return -1;
  }
  var En = "closure_lm_" + ((Math.random() * 1e6) | 0),
    $l = {};
  function Kf(a, c, f, g, N) {
    if (Array.isArray(c)) {
      for (let L = 0; L < c.length; L++) Kf(a, c[L], f, g, N);
      return null;
    }
    return (
      (f = Jf(f)),
      a && a[Oe] ? a.J(c, f, l(g) ? !!g.capture : !1, N) : qE(a, c, f, !1, g, N)
    );
  }
  function qE(a, c, f, g, N, L) {
    if (!c) throw Error("Invalid event type");
    const z = l(N) ? !!N.capture : !!N;
    let X = Hl(a);
    if ((X || (a[En] = X = new Et(a)), (f = X.add(c, f, g, z, L)), f.proxy))
      return f;
    if (
      ((g = KE()),
      (f.proxy = g),
      (g.src = a),
      (g.listener = f),
      a.addEventListener)
    )
      (k || (N = z),
        N === void 0 && (N = !1),
        a.addEventListener(c.toString(), g, N));
    else if (a.attachEvent) a.attachEvent(Yf(c.toString()), g);
    else if (a.addListener && a.removeListener) a.addListener(g);
    else throw Error("addEventListener and attachEvent are unavailable.");
    return f;
  }
  function KE() {
    function a(f) {
      return c.call(a.src, a.listener, f);
    }
    const c = QE;
    return a;
  }
  function Qf(a, c, f, g, N) {
    if (Array.isArray(c))
      for (var L = 0; L < c.length; L++) Qf(a, c[L], f, g, N);
    else
      ((g = l(g) ? !!g.capture : !!g),
        (f = Jf(f)),
        a && a[Oe]
          ? ((a = a.i),
            (L = String(c).toString()),
            L in a.g &&
              ((c = a.g[L]),
              (f = kt(c, f, g, N)),
              f > -1 &&
                (B(c[f]),
                Array.prototype.splice.call(c, f, 1),
                c.length == 0 && (delete a.g[L], a.h--))))
          : a &&
            (a = Hl(a)) &&
            ((c = a.g[c.toString()]),
            (a = -1),
            c && (a = kt(c, f, g, N)),
            (f = a > -1 ? c[a] : null) && Gl(f)));
  }
  function Gl(a) {
    if (typeof a != "number" && a && !a.da) {
      var c = a.src;
      if (c && c[Oe]) ar(c.i, a);
      else {
        var f = a.type,
          g = a.proxy;
        (c.removeEventListener
          ? c.removeEventListener(f, g, a.capture)
          : c.detachEvent
            ? c.detachEvent(Yf(f), g)
            : c.addListener && c.removeListener && c.removeListener(g),
          (f = Hl(c))
            ? (ar(f, a), f.h == 0 && ((f.src = null), (c[En] = null)))
            : B(a));
      }
    }
  }
  function Yf(a) {
    return a in $l ? $l[a] : ($l[a] = "on" + a);
  }
  function QE(a, c) {
    if (a.da) a = !0;
    else {
      c = new Ae(c, this);
      const f = a.listener,
        g = a.ha || a.src;
      (a.fa && Gl(a), (a = f.call(g, c)));
    }
    return a;
  }
  function Hl(a) {
    return ((a = a[En]), a instanceof Et ? a : null);
  }
  var Wl = "__closure_events_fn_" + ((Math.random() * 1e9) >>> 0);
  function Jf(a) {
    return typeof a == "function"
      ? a
      : (a[Wl] ||
          (a[Wl] = function (c) {
            return a.handleEvent(c);
          }),
        a[Wl]);
  }
  function qe() {
    (A.call(this), (this.i = new Et(this)), (this.M = this), (this.G = null));
  }
  (p(qe, A),
    (qe.prototype[Oe] = !0),
    (qe.prototype.removeEventListener = function (a, c, f, g) {
      Qf(this, a, c, f, g);
    }));
  function tt(a, c) {
    var f,
      g = a.G;
    if (g) for (f = []; g; g = g.G) f.push(g);
    if (((a = a.M), (g = c.type || c), typeof c == "string")) c = new C(c, a);
    else if (c instanceof C) c.target = c.target || a;
    else {
      var N = c;
      ((c = new C(g, a)), or(c, N));
    }
    N = !0;
    let L, z;
    if (f)
      for (z = f.length - 1; z >= 0; z--)
        ((L = c.g = f[z]), (N = _o(L, g, !0, c) && N));
    if (
      ((L = c.g = a), (N = _o(L, g, !0, c) && N), (N = _o(L, g, !1, c) && N), f)
    )
      for (z = 0; z < f.length; z++)
        ((L = c.g = f[z]), (N = _o(L, g, !1, c) && N));
  }
  ((qe.prototype.N = function () {
    if ((qe.Z.N.call(this), this.i)) {
      var a = this.i;
      for (const c in a.g) {
        const f = a.g[c];
        for (let g = 0; g < f.length; g++) B(f[g]);
        (delete a.g[c], a.h--);
      }
    }
    this.G = null;
  }),
    (qe.prototype.J = function (a, c, f, g) {
      return this.i.add(String(a), c, !1, f, g);
    }),
    (qe.prototype.K = function (a, c, f, g) {
      return this.i.add(String(a), c, !0, f, g);
    }));
  function _o(a, c, f, g) {
    if (((c = a.i.g[String(c)]), !c)) return !0;
    c = c.concat();
    let N = !0;
    for (let L = 0; L < c.length; ++L) {
      const z = c[L];
      if (z && !z.da && z.capture == f) {
        const X = z.listener,
          ke = z.ha || z.src;
        (z.fa && ar(a.i, z), (N = X.call(ke, g) !== !1 && N));
      }
    }
    return N && !g.defaultPrevented;
  }
  function YE(a, c) {
    if (typeof a != "function")
      if (a && typeof a.handleEvent == "function") a = h(a.handleEvent, a);
      else throw Error("Invalid listener argument");
    return Number(c) > 2147483647 ? -1 : o.setTimeout(a, c || 0);
  }
  function Xf(a) {
    a.g = YE(() => {
      ((a.g = null), a.i && ((a.i = !1), Xf(a)));
    }, a.l);
    const c = a.h;
    ((a.h = null), a.m.apply(null, c));
  }
  class JE extends A {
    constructor(c, f) {
      (super(),
        (this.m = c),
        (this.l = f),
        (this.h = null),
        (this.i = !1),
        (this.g = null));
    }
    j(c) {
      ((this.h = arguments), this.g ? (this.i = !0) : Xf(this));
    }
    N() {
      (super.N(),
        this.g &&
          (o.clearTimeout(this.g),
          (this.g = null),
          (this.i = !1),
          (this.h = null)));
    }
  }
  function Fs(a) {
    (A.call(this), (this.h = a), (this.g = {}));
  }
  p(Fs, A);
  var Zf = [];
  function ed(a) {
    (K(
      a.g,
      function (c, f) {
        this.g.hasOwnProperty(f) && Gl(c);
      },
      a,
    ),
      (a.g = {}));
  }
  ((Fs.prototype.N = function () {
    (Fs.Z.N.call(this), ed(this));
  }),
    (Fs.prototype.handleEvent = function () {
      throw Error("EventHandler.handleEvent not implemented");
    }));
  var ql = o.JSON.stringify,
    XE = o.JSON.parse,
    ZE = class {
      stringify(a) {
        return o.JSON.stringify(a, void 0);
      }
      parse(a) {
        return o.JSON.parse(a, void 0);
      }
    };
  function td() {}
  function nd() {}
  var js = { OPEN: "a", hb: "b", ERROR: "c", tb: "d" };
  function Kl() {
    C.call(this, "d");
  }
  p(Kl, C);
  function Ql() {
    C.call(this, "c");
  }
  p(Ql, C);
  var lr = {},
    rd = null;
  function Eo() {
    return (rd = rd || new qe());
  }
  lr.Ia = "serverreachability";
  function sd(a) {
    C.call(this, lr.Ia, a);
  }
  p(sd, C);
  function bs(a) {
    const c = Eo();
    tt(c, new sd(c));
  }
  lr.STAT_EVENT = "statevent";
  function id(a, c) {
    (C.call(this, lr.STAT_EVENT, a), (this.stat = c));
  }
  p(id, C);
  function nt(a) {
    const c = Eo();
    tt(c, new id(c, a));
  }
  lr.Ja = "timingevent";
  function od(a, c) {
    (C.call(this, lr.Ja, a), (this.size = c));
  }
  p(od, C);
  function Us(a, c) {
    if (typeof a != "function")
      throw Error("Fn must not be null and must be a function");
    return o.setTimeout(function () {
      a();
    }, c);
  }
  function zs() {
    this.g = !0;
  }
  zs.prototype.ua = function () {
    this.g = !1;
  };
  function ew(a, c, f, g, N, L) {
    a.info(function () {
      if (a.g)
        if (L) {
          var z = "",
            X = L.split("&");
          for (let ae = 0; ae < X.length; ae++) {
            var ke = X[ae].split("=");
            if (ke.length > 1) {
              const Fe = ke[0];
              ke = ke[1];
              const Bt = Fe.split("_");
              z =
                Bt.length >= 2 && Bt[1] == "type"
                  ? z + (Fe + "=" + ke + "&")
                  : z + (Fe + "=redacted&");
            }
          }
        } else z = null;
      else z = L;
      return (
        "XMLHTTP REQ (" +
        g +
        ") [attempt " +
        N +
        "]: " +
        c +
        `
` +
        f +
        `
` +
        z
      );
    });
  }
  function tw(a, c, f, g, N, L, z) {
    a.info(function () {
      return (
        "XMLHTTP RESP (" +
        g +
        ") [ attempt " +
        N +
        "]: " +
        c +
        `
` +
        f +
        `
` +
        L +
        " " +
        z
      );
    });
  }
  function Fr(a, c, f, g) {
    a.info(function () {
      return "XMLHTTP TEXT (" + c + "): " + rw(a, f) + (g ? " " + g : "");
    });
  }
  function nw(a, c) {
    a.info(function () {
      return "TIMEOUT: " + c;
    });
  }
  zs.prototype.info = function () {};
  function rw(a, c) {
    if (!a.g) return c;
    if (!c) return null;
    try {
      const L = JSON.parse(c);
      if (L) {
        for (a = 0; a < L.length; a++)
          if (Array.isArray(L[a])) {
            var f = L[a];
            if (!(f.length < 2)) {
              var g = f[1];
              if (Array.isArray(g) && !(g.length < 1)) {
                var N = g[0];
                if (N != "noop" && N != "stop" && N != "close")
                  for (let z = 1; z < g.length; z++) g[z] = "";
              }
            }
          }
      }
      return ql(L);
    } catch {
      return c;
    }
  }
  var wo = {
      NO_ERROR: 0,
      cb: 1,
      qb: 2,
      pb: 3,
      kb: 4,
      ob: 5,
      rb: 6,
      Ga: 7,
      TIMEOUT: 8,
      ub: 9,
    },
    ad = {
      ib: "complete",
      Fb: "success",
      ERROR: "error",
      Ga: "abort",
      xb: "ready",
      yb: "readystatechange",
      TIMEOUT: "timeout",
      sb: "incrementaldata",
      wb: "progress",
      lb: "downloadprogress",
      Nb: "uploadprogress",
    },
    ld;
  function Yl() {}
  (p(Yl, td),
    (Yl.prototype.g = function () {
      return new XMLHttpRequest();
    }),
    (ld = new Yl()));
  function Bs(a) {
    return encodeURIComponent(String(a));
  }
  function sw(a) {
    var c = 1;
    a = a.split(":");
    const f = [];
    for (; c > 0 && a.length; ) (f.push(a.shift()), c--);
    return (a.length && f.push(a.join(":")), f);
  }
  function wn(a, c, f, g) {
    ((this.j = a),
      (this.i = c),
      (this.l = f),
      (this.S = g || 1),
      (this.V = new Fs(this)),
      (this.H = 45e3),
      (this.J = null),
      (this.o = !1),
      (this.u = this.B = this.A = this.M = this.F = this.T = this.D = null),
      (this.G = []),
      (this.g = null),
      (this.C = 0),
      (this.m = this.v = null),
      (this.X = -1),
      (this.K = !1),
      (this.P = 0),
      (this.O = null),
      (this.W = this.L = this.U = this.R = !1),
      (this.h = new ud()));
  }
  function ud() {
    ((this.i = null), (this.g = ""), (this.h = !1));
  }
  var cd = {},
    Jl = {};
  function Xl(a, c, f) {
    ((a.M = 1), (a.A = So(zt(c))), (a.u = f), (a.R = !0), hd(a, null));
  }
  function hd(a, c) {
    ((a.F = Date.now()), To(a), (a.B = zt(a.A)));
    var f = a.B,
      g = a.S;
    (Array.isArray(g) || (g = [String(g)]),
      Id(f.i, "t", g),
      (a.C = 0),
      (f = a.j.L),
      (a.h = new ud()),
      (a.g = Bd(a.j, f ? c : null, !a.u)),
      a.P > 0 && (a.O = new JE(h(a.Y, a, a.g), a.P)),
      (c = a.V),
      (f = a.g),
      (g = a.ba));
    var N = "readystatechange";
    Array.isArray(N) || (N && (Zf[0] = N.toString()), (N = Zf));
    for (let L = 0; L < N.length; L++) {
      const z = Kf(f, N[L], g || c.handleEvent, !1, c.h || c);
      if (!z) break;
      c.g[z.key] = z;
    }
    ((c = a.J ? pe(a.J) : {}),
      a.u
        ? (a.v || (a.v = "POST"),
          (c["Content-Type"] = "application/x-www-form-urlencoded"),
          a.g.ea(a.B, a.v, a.u, c))
        : ((a.v = "GET"), a.g.ea(a.B, a.v, null, c)),
      bs(),
      ew(a.i, a.v, a.B, a.l, a.S, a.u));
  }
  ((wn.prototype.ba = function (a) {
    a = a.target;
    const c = this.O;
    c && In(a) == 3 ? c.j() : this.Y(a);
  }),
    (wn.prototype.Y = function (a) {
      try {
        if (a == this.g)
          e: {
            const X = In(this.g),
              ke = this.g.ya(),
              ae = this.g.ca();
            if (
              !(X < 3) &&
              (X != 3 || (this.g && (this.h.h || this.g.la() || Nd(this.g))))
            ) {
              (this.K ||
                X != 4 ||
                ke == 7 ||
                (ke == 8 || ae <= 0 ? bs(3) : bs(2)),
                Zl(this));
              var c = this.g.ca();
              this.X = c;
              var f = iw(this);
              if (
                ((this.o = c == 200),
                tw(this.i, this.v, this.B, this.l, this.S, X, c),
                this.o)
              ) {
                if (this.U && !this.L) {
                  t: {
                    if (this.g) {
                      var g,
                        N = this.g;
                      if (
                        (g = N.g
                          ? N.g.getResponseHeader("X-HTTP-Initial-Response")
                          : null) &&
                        !S(g)
                      ) {
                        var L = g;
                        break t;
                      }
                    }
                    L = null;
                  }
                  if ((a = L))
                    (Fr(
                      this.i,
                      this.l,
                      a,
                      "Initial handshake response via X-HTTP-Initial-Response",
                    ),
                      (this.L = !0),
                      eu(this, a));
                  else {
                    ((this.o = !1), (this.m = 3), nt(12), ur(this), $s(this));
                    break e;
                  }
                }
                if (this.R) {
                  a = !0;
                  let Fe;
                  for (; !this.K && this.C < f.length; )
                    if (((Fe = ow(this, f)), Fe == Jl)) {
                      (X == 4 && ((this.m = 4), nt(14), (a = !1)),
                        Fr(this.i, this.l, null, "[Incomplete Response]"));
                      break;
                    } else if (Fe == cd) {
                      ((this.m = 4),
                        nt(15),
                        Fr(this.i, this.l, f, "[Invalid Chunk]"),
                        (a = !1));
                      break;
                    } else (Fr(this.i, this.l, Fe, null), eu(this, Fe));
                  if (
                    (fd(this) &&
                      this.C != 0 &&
                      ((this.h.g = this.h.g.slice(this.C)), (this.C = 0)),
                    X != 4 ||
                      f.length != 0 ||
                      this.h.h ||
                      ((this.m = 1), nt(16), (a = !1)),
                    (this.o = this.o && a),
                    !a)
                  )
                    (Fr(this.i, this.l, f, "[Invalid Chunked Response]"),
                      ur(this),
                      $s(this));
                  else if (f.length > 0 && !this.W) {
                    this.W = !0;
                    var z = this.j;
                    z.g == this &&
                      z.aa &&
                      !z.P &&
                      (z.j.info(
                        "Great, no buffering proxy detected. Bytes received: " +
                          f.length,
                      ),
                      lu(z),
                      (z.P = !0),
                      nt(11));
                  }
                } else (Fr(this.i, this.l, f, null), eu(this, f));
                (X == 4 && ur(this),
                  this.o &&
                    !this.K &&
                    (X == 4 ? jd(this.j, this) : ((this.o = !1), To(this))));
              } else
                (Ew(this.g),
                  c == 400 && f.indexOf("Unknown SID") > 0
                    ? ((this.m = 3), nt(12))
                    : ((this.m = 0), nt(13)),
                  ur(this),
                  $s(this));
            }
          }
      } catch {
      } finally {
      }
    }));
  function iw(a) {
    if (!fd(a)) return a.g.la();
    const c = Nd(a.g);
    if (c === "") return "";
    let f = "";
    const g = c.length,
      N = In(a.g) == 4;
    if (!a.h.i) {
      if (typeof TextDecoder > "u") return (ur(a), $s(a), "");
      a.h.i = new o.TextDecoder();
    }
    for (let L = 0; L < g; L++)
      ((a.h.h = !0), (f += a.h.i.decode(c[L], { stream: !(N && L == g - 1) })));
    return ((c.length = 0), (a.h.g += f), (a.C = 0), a.h.g);
  }
  function fd(a) {
    return a.g ? a.v == "GET" && a.M != 2 && a.j.Aa : !1;
  }
  function ow(a, c) {
    var f = a.C,
      g = c.indexOf(
        `
`,
        f,
      );
    return g == -1
      ? Jl
      : ((f = Number(c.substring(f, g))),
        isNaN(f)
          ? cd
          : ((g += 1),
            g + f > c.length
              ? Jl
              : ((c = c.slice(g, g + f)), (a.C = g + f), c)));
  }
  wn.prototype.cancel = function () {
    ((this.K = !0), ur(this));
  };
  function To(a) {
    ((a.T = Date.now() + a.H), dd(a, a.H));
  }
  function dd(a, c) {
    if (a.D != null) throw Error("WatchDog timer not null");
    a.D = Us(h(a.aa, a), c);
  }
  function Zl(a) {
    a.D && (o.clearTimeout(a.D), (a.D = null));
  }
  wn.prototype.aa = function () {
    this.D = null;
    const a = Date.now();
    a - this.T >= 0
      ? (nw(this.i, this.B),
        this.M != 2 && (bs(), nt(17)),
        ur(this),
        (this.m = 2),
        $s(this))
      : dd(this, this.T - a);
  };
  function $s(a) {
    a.j.I == 0 || a.K || jd(a.j, a);
  }
  function ur(a) {
    Zl(a);
    var c = a.O;
    (c && typeof c.dispose == "function" && c.dispose(),
      (a.O = null),
      ed(a.V),
      a.g && ((c = a.g), (a.g = null), c.abort(), c.dispose()));
  }
  function eu(a, c) {
    try {
      var f = a.j;
      if (f.I != 0 && (f.g == a || tu(f.h, a))) {
        if (!a.L && tu(f.h, a) && f.I == 3) {
          try {
            var g = f.Ba.g.parse(c);
          } catch {
            g = null;
          }
          if (Array.isArray(g) && g.length == 3) {
            var N = g;
            if (N[0] == 0) {
              e: if (!f.v) {
                if (f.g)
                  if (f.g.F + 3e3 < a.F) (xo(f), Ao(f));
                  else break e;
                (au(f), nt(18));
              }
            } else
              ((f.xa = N[1]),
                0 < f.xa - f.K &&
                  N[2] < 37500 &&
                  f.F &&
                  f.A == 0 &&
                  !f.C &&
                  (f.C = Us(h(f.Va, f), 6e3)));
            gd(f.h) <= 1 && f.ta && (f.ta = void 0);
          } else hr(f, 11);
        } else if (((a.L || f.g == a) && xo(f), !S(c)))
          for (N = f.Ba.g.parse(c), c = 0; c < N.length; c++) {
            let ae = N[c];
            const Fe = ae[0];
            if (!(Fe <= f.K))
              if (((f.K = Fe), (ae = ae[1]), f.I == 2))
                if (ae[0] == "c") {
                  ((f.M = ae[1]), (f.ba = ae[2]));
                  const Bt = ae[3];
                  Bt != null && ((f.ka = Bt), f.j.info("VER=" + f.ka));
                  const fr = ae[4];
                  fr != null && ((f.za = fr), f.j.info("SVER=" + f.za));
                  const Rn = ae[5];
                  (Rn != null &&
                    typeof Rn == "number" &&
                    Rn > 0 &&
                    ((g = 1.5 * Rn),
                    (f.O = g),
                    f.j.info("backChannelRequestTimeoutMs_=" + g)),
                    (g = f));
                  const An = a.g;
                  if (An) {
                    const ko = An.g
                      ? An.g.getResponseHeader("X-Client-Wire-Protocol")
                      : null;
                    if (ko) {
                      var L = g.h;
                      L.g ||
                        (ko.indexOf("spdy") == -1 &&
                          ko.indexOf("quic") == -1 &&
                          ko.indexOf("h2") == -1) ||
                        ((L.j = L.l),
                        (L.g = new Set()),
                        L.h && (nu(L, L.h), (L.h = null)));
                    }
                    if (g.G) {
                      const uu = An.g
                        ? An.g.getResponseHeader("X-HTTP-Session-Id")
                        : null;
                      uu && ((g.wa = uu), ce(g.J, g.G, uu));
                    }
                  }
                  ((f.I = 3),
                    f.l && f.l.ra(),
                    f.aa &&
                      ((f.T = Date.now() - a.F),
                      f.j.info("Handshake RTT: " + f.T + "ms")),
                    (g = f));
                  var z = a;
                  if (((g.na = zd(g, g.L ? g.ba : null, g.W)), z.L)) {
                    yd(g.h, z);
                    var X = z,
                      ke = g.O;
                    (ke && (X.H = ke), X.D && (Zl(X), To(X)), (g.g = z));
                  } else Od(g);
                  f.i.length > 0 && Co(f);
                } else (ae[0] != "stop" && ae[0] != "close") || hr(f, 7);
              else
                f.I == 3 &&
                  (ae[0] == "stop" || ae[0] == "close"
                    ? ae[0] == "stop"
                      ? hr(f, 7)
                      : ou(f)
                    : ae[0] != "noop" && f.l && f.l.qa(ae),
                  (f.A = 0));
          }
      }
      bs(4);
    } catch {}
  }
  var aw = class {
    constructor(a, c) {
      ((this.g = a), (this.map = c));
    }
  };
  function pd(a) {
    ((this.l = a || 10),
      o.PerformanceNavigationTiming
        ? ((a = o.performance.getEntriesByType("navigation")),
          (a =
            a.length > 0 &&
            (a[0].nextHopProtocol == "hq" || a[0].nextHopProtocol == "h2")))
        : (a = !!(
            o.chrome &&
            o.chrome.loadTimes &&
            o.chrome.loadTimes() &&
            o.chrome.loadTimes().wasFetchedViaSpdy
          )),
      (this.j = a ? this.l : 1),
      (this.g = null),
      this.j > 1 && (this.g = new Set()),
      (this.h = null),
      (this.i = []));
  }
  function md(a) {
    return a.h ? !0 : a.g ? a.g.size >= a.j : !1;
  }
  function gd(a) {
    return a.h ? 1 : a.g ? a.g.size : 0;
  }
  function tu(a, c) {
    return a.h ? a.h == c : a.g ? a.g.has(c) : !1;
  }
  function nu(a, c) {
    a.g ? a.g.add(c) : (a.h = c);
  }
  function yd(a, c) {
    a.h && a.h == c ? (a.h = null) : a.g && a.g.has(c) && a.g.delete(c);
  }
  pd.prototype.cancel = function () {
    if (((this.i = vd(this)), this.h)) (this.h.cancel(), (this.h = null));
    else if (this.g && this.g.size !== 0) {
      for (const a of this.g.values()) a.cancel();
      this.g.clear();
    }
  };
  function vd(a) {
    if (a.h != null) return a.i.concat(a.h.G);
    if (a.g != null && a.g.size !== 0) {
      let c = a.i;
      for (const f of a.g.values()) c = c.concat(f.G);
      return c;
    }
    return T(a.i);
  }
  var _d = RegExp(
    "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$",
  );
  function lw(a, c) {
    if (a) {
      a = a.split("&");
      for (let f = 0; f < a.length; f++) {
        const g = a[f].indexOf("=");
        let N,
          L = null;
        (g >= 0
          ? ((N = a[f].substring(0, g)), (L = a[f].substring(g + 1)))
          : (N = a[f]),
          c(N, L ? decodeURIComponent(L.replace(/\+/g, " ")) : ""));
      }
    }
  }
  function Tn(a) {
    ((this.g = this.o = this.j = ""),
      (this.u = null),
      (this.m = this.h = ""),
      (this.l = !1));
    let c;
    a instanceof Tn
      ? ((this.l = a.l),
        Gs(this, a.j),
        (this.o = a.o),
        (this.g = a.g),
        Hs(this, a.u),
        (this.h = a.h),
        ru(this, Rd(a.i)),
        (this.m = a.m))
      : a && (c = String(a).match(_d))
        ? ((this.l = !1),
          Gs(this, c[1] || "", !0),
          (this.o = Ws(c[2] || "")),
          (this.g = Ws(c[3] || "", !0)),
          Hs(this, c[4]),
          (this.h = Ws(c[5] || "", !0)),
          ru(this, c[6] || "", !0),
          (this.m = Ws(c[7] || "")))
        : ((this.l = !1), (this.i = new Ks(null, this.l)));
  }
  ((Tn.prototype.toString = function () {
    const a = [];
    var c = this.j;
    c && a.push(qs(c, Ed, !0), ":");
    var f = this.g;
    return (
      (f || c == "file") &&
        (a.push("//"),
        (c = this.o) && a.push(qs(c, Ed, !0), "@"),
        a.push(Bs(f).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
        (f = this.u),
        f != null && a.push(":", String(f))),
      (f = this.h) &&
        (this.g && f.charAt(0) != "/" && a.push("/"),
        a.push(qs(f, f.charAt(0) == "/" ? hw : cw, !0))),
      (f = this.i.toString()) && a.push("?", f),
      (f = this.m) && a.push("#", qs(f, dw)),
      a.join("")
    );
  }),
    (Tn.prototype.resolve = function (a) {
      const c = zt(this);
      let f = !!a.j;
      (f ? Gs(c, a.j) : (f = !!a.o),
        f ? (c.o = a.o) : (f = !!a.g),
        f ? (c.g = a.g) : (f = a.u != null));
      var g = a.h;
      if (f) Hs(c, a.u);
      else if ((f = !!a.h)) {
        if (g.charAt(0) != "/")
          if (this.g && !this.h) g = "/" + g;
          else {
            var N = c.h.lastIndexOf("/");
            N != -1 && (g = c.h.slice(0, N + 1) + g);
          }
        if (((N = g), N == ".." || N == ".")) g = "";
        else if (N.indexOf("./") != -1 || N.indexOf("/.") != -1) {
          ((g = N.lastIndexOf("/", 0) == 0), (N = N.split("/")));
          const L = [];
          for (let z = 0; z < N.length; ) {
            const X = N[z++];
            X == "."
              ? g && z == N.length && L.push("")
              : X == ".."
                ? ((L.length > 1 || (L.length == 1 && L[0] != "")) && L.pop(),
                  g && z == N.length && L.push(""))
                : (L.push(X), (g = !0));
          }
          g = L.join("/");
        } else g = N;
      }
      return (
        f ? (c.h = g) : (f = a.i.toString() !== ""),
        f ? ru(c, Rd(a.i)) : (f = !!a.m),
        f && (c.m = a.m),
        c
      );
    }));
  function zt(a) {
    return new Tn(a);
  }
  function Gs(a, c, f) {
    ((a.j = f ? Ws(c, !0) : c), a.j && (a.j = a.j.replace(/:$/, "")));
  }
  function Hs(a, c) {
    if (c) {
      if (((c = Number(c)), isNaN(c) || c < 0))
        throw Error("Bad port number " + c);
      a.u = c;
    } else a.u = null;
  }
  function ru(a, c, f) {
    c instanceof Ks
      ? ((a.i = c), pw(a.i, a.l))
      : (f || (c = qs(c, fw)), (a.i = new Ks(c, a.l)));
  }
  function ce(a, c, f) {
    a.i.set(c, f);
  }
  function So(a) {
    return (
      ce(
        a,
        "zx",
        Math.floor(Math.random() * 2147483648).toString(36) +
          Math.abs(
            Math.floor(Math.random() * 2147483648) ^ Date.now(),
          ).toString(36),
      ),
      a
    );
  }
  function Ws(a, c) {
    return a
      ? c
        ? decodeURI(a.replace(/%25/g, "%2525"))
        : decodeURIComponent(a)
      : "";
  }
  function qs(a, c, f) {
    return typeof a == "string"
      ? ((a = encodeURI(a).replace(c, uw)),
        f && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
        a)
      : null;
  }
  function uw(a) {
    return (
      (a = a.charCodeAt(0)),
      "%" + ((a >> 4) & 15).toString(16) + (a & 15).toString(16)
    );
  }
  var Ed = /[#\/\?@]/g,
    cw = /[#\?:]/g,
    hw = /[#\?]/g,
    fw = /[#\?@]/g,
    dw = /#/g;
  function Ks(a, c) {
    ((this.h = this.g = null), (this.i = a || null), (this.j = !!c));
  }
  function cr(a) {
    a.g ||
      ((a.g = new Map()),
      (a.h = 0),
      a.i &&
        lw(a.i, function (c, f) {
          a.add(decodeURIComponent(c.replace(/\+/g, " ")), f);
        }));
  }
  ((t = Ks.prototype),
    (t.add = function (a, c) {
      (cr(this), (this.i = null), (a = jr(this, a)));
      let f = this.g.get(a);
      return (f || this.g.set(a, (f = [])), f.push(c), (this.h += 1), this);
    }));
  function wd(a, c) {
    (cr(a),
      (c = jr(a, c)),
      a.g.has(c) && ((a.i = null), (a.h -= a.g.get(c).length), a.g.delete(c)));
  }
  function Td(a, c) {
    return (cr(a), (c = jr(a, c)), a.g.has(c));
  }
  t.forEach = function (a, c) {
    (cr(this),
      this.g.forEach(function (f, g) {
        f.forEach(function (N) {
          a.call(c, N, g, this);
        }, this);
      }, this));
  };
  function Sd(a, c) {
    cr(a);
    let f = [];
    if (typeof c == "string") Td(a, c) && (f = f.concat(a.g.get(jr(a, c))));
    else
      for (a = Array.from(a.g.values()), c = 0; c < a.length; c++)
        f = f.concat(a[c]);
    return f;
  }
  ((t.set = function (a, c) {
    return (
      cr(this),
      (this.i = null),
      (a = jr(this, a)),
      Td(this, a) && (this.h -= this.g.get(a).length),
      this.g.set(a, [c]),
      (this.h += 1),
      this
    );
  }),
    (t.get = function (a, c) {
      return a ? ((a = Sd(this, a)), a.length > 0 ? String(a[0]) : c) : c;
    }));
  function Id(a, c, f) {
    (wd(a, c),
      f.length > 0 &&
        ((a.i = null), a.g.set(jr(a, c), T(f)), (a.h += f.length)));
  }
  t.toString = function () {
    if (this.i) return this.i;
    if (!this.g) return "";
    const a = [],
      c = Array.from(this.g.keys());
    for (let g = 0; g < c.length; g++) {
      var f = c[g];
      const N = Bs(f);
      f = Sd(this, f);
      for (let L = 0; L < f.length; L++) {
        let z = N;
        (f[L] !== "" && (z += "=" + Bs(f[L])), a.push(z));
      }
    }
    return (this.i = a.join("&"));
  };
  function Rd(a) {
    const c = new Ks();
    return ((c.i = a.i), a.g && ((c.g = new Map(a.g)), (c.h = a.h)), c);
  }
  function jr(a, c) {
    return ((c = String(c)), a.j && (c = c.toLowerCase()), c);
  }
  function pw(a, c) {
    (c &&
      !a.j &&
      (cr(a),
      (a.i = null),
      a.g.forEach(function (f, g) {
        const N = g.toLowerCase();
        g != N && (wd(this, g), Id(this, N, f));
      }, a)),
      (a.j = c));
  }
  function mw(a, c) {
    const f = new zs();
    if (o.Image) {
      const g = new Image();
      ((g.onload = d(Sn, f, "TestLoadImage: loaded", !0, c, g)),
        (g.onerror = d(Sn, f, "TestLoadImage: error", !1, c, g)),
        (g.onabort = d(Sn, f, "TestLoadImage: abort", !1, c, g)),
        (g.ontimeout = d(Sn, f, "TestLoadImage: timeout", !1, c, g)),
        o.setTimeout(function () {
          g.ontimeout && g.ontimeout();
        }, 1e4),
        (g.src = a));
    } else c(!1);
  }
  function gw(a, c) {
    const f = new zs(),
      g = new AbortController(),
      N = setTimeout(() => {
        (g.abort(), Sn(f, "TestPingServer: timeout", !1, c));
      }, 1e4);
    fetch(a, { signal: g.signal })
      .then((L) => {
        (clearTimeout(N),
          L.ok
            ? Sn(f, "TestPingServer: ok", !0, c)
            : Sn(f, "TestPingServer: server error", !1, c));
      })
      .catch(() => {
        (clearTimeout(N), Sn(f, "TestPingServer: error", !1, c));
      });
  }
  function Sn(a, c, f, g, N) {
    try {
      (N &&
        ((N.onload = null),
        (N.onerror = null),
        (N.onabort = null),
        (N.ontimeout = null)),
        g(f));
    } catch {}
  }
  function yw() {
    this.g = new ZE();
  }
  function su(a) {
    ((this.i = a.Sb || null), (this.h = a.ab || !1));
  }
  (p(su, td),
    (su.prototype.g = function () {
      return new Io(this.i, this.h);
    }));
  function Io(a, c) {
    (qe.call(this),
      (this.H = a),
      (this.o = c),
      (this.m = void 0),
      (this.status = this.readyState = 0),
      (this.responseType =
        this.responseText =
        this.response =
        this.statusText =
          ""),
      (this.onreadystatechange = null),
      (this.A = new Headers()),
      (this.h = null),
      (this.F = "GET"),
      (this.D = ""),
      (this.g = !1),
      (this.B = this.j = this.l = null),
      (this.v = new AbortController()));
  }
  (p(Io, qe),
    (t = Io.prototype),
    (t.open = function (a, c) {
      if (this.readyState != 0)
        throw (this.abort(), Error("Error reopening a connection"));
      ((this.F = a), (this.D = c), (this.readyState = 1), Ys(this));
    }),
    (t.send = function (a) {
      if (this.readyState != 1)
        throw (this.abort(), Error("need to call open() first. "));
      if (this.v.signal.aborted)
        throw (this.abort(), Error("Request was aborted."));
      this.g = !0;
      const c = {
        headers: this.A,
        method: this.F,
        credentials: this.m,
        cache: void 0,
        signal: this.v.signal,
      };
      (a && (c.body = a),
        (this.H || o)
          .fetch(new Request(this.D, c))
          .then(this.Pa.bind(this), this.ga.bind(this)));
    }),
    (t.abort = function () {
      ((this.response = this.responseText = ""),
        (this.A = new Headers()),
        (this.status = 0),
        this.v.abort(),
        this.j && this.j.cancel("Request was aborted.").catch(() => {}),
        this.readyState >= 1 &&
          this.g &&
          this.readyState != 4 &&
          ((this.g = !1), Qs(this)),
        (this.readyState = 0));
    }),
    (t.Pa = function (a) {
      if (
        this.g &&
        ((this.l = a),
        this.h ||
          ((this.status = this.l.status),
          (this.statusText = this.l.statusText),
          (this.h = a.headers),
          (this.readyState = 2),
          Ys(this)),
        this.g && ((this.readyState = 3), Ys(this), this.g))
      )
        if (this.responseType === "arraybuffer")
          a.arrayBuffer().then(this.Na.bind(this), this.ga.bind(this));
        else if (typeof o.ReadableStream < "u" && "body" in a) {
          if (((this.j = a.body.getReader()), this.o)) {
            if (this.responseType)
              throw Error(
                'responseType must be empty for "streamBinaryChunks" mode responses.',
              );
            this.response = [];
          } else
            ((this.response = this.responseText = ""),
              (this.B = new TextDecoder()));
          Ad(this);
        } else a.text().then(this.Oa.bind(this), this.ga.bind(this));
    }));
  function Ad(a) {
    a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a));
  }
  ((t.Ma = function (a) {
    if (this.g) {
      if (this.o && a.value) this.response.push(a.value);
      else if (!this.o) {
        var c = a.value ? a.value : new Uint8Array(0);
        (c = this.B.decode(c, { stream: !a.done })) &&
          (this.response = this.responseText += c);
      }
      (a.done ? Qs(this) : Ys(this), this.readyState == 3 && Ad(this));
    }
  }),
    (t.Oa = function (a) {
      this.g && ((this.response = this.responseText = a), Qs(this));
    }),
    (t.Na = function (a) {
      this.g && ((this.response = a), Qs(this));
    }),
    (t.ga = function () {
      this.g && Qs(this);
    }));
  function Qs(a) {
    ((a.readyState = 4), (a.l = null), (a.j = null), (a.B = null), Ys(a));
  }
  ((t.setRequestHeader = function (a, c) {
    this.A.append(a, c);
  }),
    (t.getResponseHeader = function (a) {
      return (this.h && this.h.get(a.toLowerCase())) || "";
    }),
    (t.getAllResponseHeaders = function () {
      if (!this.h) return "";
      const a = [],
        c = this.h.entries();
      for (var f = c.next(); !f.done; )
        ((f = f.value), a.push(f[0] + ": " + f[1]), (f = c.next()));
      return a.join(`\r
`);
    }));
  function Ys(a) {
    a.onreadystatechange && a.onreadystatechange.call(a);
  }
  Object.defineProperty(Io.prototype, "withCredentials", {
    get: function () {
      return this.m === "include";
    },
    set: function (a) {
      this.m = a ? "include" : "same-origin";
    },
  });
  function Cd(a) {
    let c = "";
    return (
      K(a, function (f, g) {
        ((c += g),
          (c += ":"),
          (c += f),
          (c += `\r
`));
      }),
      c
    );
  }
  function iu(a, c, f) {
    e: {
      for (g in f) {
        var g = !1;
        break e;
      }
      g = !0;
    }
    g || ((f = Cd(f)), typeof a == "string" ? f != null && Bs(f) : ce(a, c, f));
  }
  function we(a) {
    (qe.call(this),
      (this.headers = new Map()),
      (this.L = a || null),
      (this.h = !1),
      (this.g = null),
      (this.D = ""),
      (this.o = 0),
      (this.l = ""),
      (this.j = this.B = this.v = this.A = !1),
      (this.m = null),
      (this.F = ""),
      (this.H = !1));
  }
  p(we, qe);
  var vw = /^https?$/i,
    _w = ["POST", "PUT"];
  ((t = we.prototype),
    (t.Fa = function (a) {
      this.H = a;
    }),
    (t.ea = function (a, c, f, g) {
      if (this.g)
        throw Error(
          "[goog.net.XhrIo] Object is active with another request=" +
            this.D +
            "; newUri=" +
            a,
        );
      ((c = c ? c.toUpperCase() : "GET"),
        (this.D = a),
        (this.l = ""),
        (this.o = 0),
        (this.A = !1),
        (this.h = !0),
        (this.g = this.L ? this.L.g() : ld.g()),
        (this.g.onreadystatechange = m(h(this.Ca, this))));
      try {
        ((this.B = !0), this.g.open(c, String(a), !0), (this.B = !1));
      } catch (L) {
        xd(this, L);
        return;
      }
      if (((a = f || ""), (f = new Map(this.headers)), g))
        if (Object.getPrototypeOf(g) === Object.prototype)
          for (var N in g) f.set(N, g[N]);
        else if (typeof g.keys == "function" && typeof g.get == "function")
          for (const L of g.keys()) f.set(L, g.get(L));
        else throw Error("Unknown input type for opt_headers: " + String(g));
      ((g = Array.from(f.keys()).find(
        (L) => L.toLowerCase() == "content-type",
      )),
        (N = o.FormData && a instanceof o.FormData),
        !(Array.prototype.indexOf.call(_w, c, void 0) >= 0) ||
          g ||
          N ||
          f.set(
            "Content-Type",
            "application/x-www-form-urlencoded;charset=utf-8",
          ));
      for (const [L, z] of f) this.g.setRequestHeader(L, z);
      (this.F && (this.g.responseType = this.F),
        "withCredentials" in this.g &&
          this.g.withCredentials !== this.H &&
          (this.g.withCredentials = this.H));
      try {
        (this.m && (clearTimeout(this.m), (this.m = null)),
          (this.v = !0),
          this.g.send(a),
          (this.v = !1));
      } catch (L) {
        xd(this, L);
      }
    }));
  function xd(a, c) {
    ((a.h = !1),
      a.g && ((a.j = !0), a.g.abort(), (a.j = !1)),
      (a.l = c),
      (a.o = 5),
      Pd(a),
      Ro(a));
  }
  function Pd(a) {
    a.A || ((a.A = !0), tt(a, "complete"), tt(a, "error"));
  }
  ((t.abort = function (a) {
    this.g &&
      this.h &&
      ((this.h = !1),
      (this.j = !0),
      this.g.abort(),
      (this.j = !1),
      (this.o = a || 7),
      tt(this, "complete"),
      tt(this, "abort"),
      Ro(this));
  }),
    (t.N = function () {
      (this.g &&
        (this.h &&
          ((this.h = !1), (this.j = !0), this.g.abort(), (this.j = !1)),
        Ro(this, !0)),
        we.Z.N.call(this));
    }),
    (t.Ca = function () {
      this.u || (this.B || this.v || this.j ? kd(this) : this.Xa());
    }),
    (t.Xa = function () {
      kd(this);
    }));
  function kd(a) {
    if (a.h && typeof i < "u") {
      if (a.v && In(a) == 4) setTimeout(a.Ca.bind(a), 0);
      else if ((tt(a, "readystatechange"), In(a) == 4)) {
        a.h = !1;
        try {
          const L = a.ca();
          e: switch (L) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
              var c = !0;
              break e;
            default:
              c = !1;
          }
          var f;
          if (!(f = c)) {
            var g;
            if ((g = L === 0)) {
              let z = String(a.D).match(_d)[1] || null;
              (!z &&
                o.self &&
                o.self.location &&
                (z = o.self.location.protocol.slice(0, -1)),
                (g = !vw.test(z ? z.toLowerCase() : "")));
            }
            f = g;
          }
          if (f) (tt(a, "complete"), tt(a, "success"));
          else {
            a.o = 6;
            try {
              var N = In(a) > 2 ? a.g.statusText : "";
            } catch {
              N = "";
            }
            ((a.l = N + " [" + a.ca() + "]"), Pd(a));
          }
        } finally {
          Ro(a);
        }
      }
    }
  }
  function Ro(a, c) {
    if (a.g) {
      a.m && (clearTimeout(a.m), (a.m = null));
      const f = a.g;
      ((a.g = null), c || tt(a, "ready"));
      try {
        f.onreadystatechange = null;
      } catch {}
    }
  }
  t.isActive = function () {
    return !!this.g;
  };
  function In(a) {
    return a.g ? a.g.readyState : 0;
  }
  ((t.ca = function () {
    try {
      return In(this) > 2 ? this.g.status : -1;
    } catch {
      return -1;
    }
  }),
    (t.la = function () {
      try {
        return this.g ? this.g.responseText : "";
      } catch {
        return "";
      }
    }),
    (t.La = function (a) {
      if (this.g) {
        var c = this.g.responseText;
        return (a && c.indexOf(a) == 0 && (c = c.substring(a.length)), XE(c));
      }
    }));
  function Nd(a) {
    try {
      if (!a.g) return null;
      if ("response" in a.g) return a.g.response;
      switch (a.F) {
        case "":
        case "text":
          return a.g.responseText;
        case "arraybuffer":
          if ("mozResponseArrayBuffer" in a.g)
            return a.g.mozResponseArrayBuffer;
      }
      return null;
    } catch {
      return null;
    }
  }
  function Ew(a) {
    const c = {};
    a = ((a.g && In(a) >= 2 && a.g.getAllResponseHeaders()) || "").split(`\r
`);
    for (let g = 0; g < a.length; g++) {
      if (S(a[g])) continue;
      var f = sw(a[g]);
      const N = f[0];
      if (((f = f[1]), typeof f != "string")) continue;
      f = f.trim();
      const L = c[N] || [];
      ((c[N] = L), L.push(f));
    }
    J(c, function (g) {
      return g.join(", ");
    });
  }
  ((t.ya = function () {
    return this.o;
  }),
    (t.Ha = function () {
      return typeof this.l == "string" ? this.l : String(this.l);
    }));
  function Js(a, c, f) {
    return (f && f.internalChannelParams && f.internalChannelParams[a]) || c;
  }
  function Vd(a) {
    ((this.za = 0),
      (this.i = []),
      (this.j = new zs()),
      (this.ba =
        this.na =
        this.J =
        this.W =
        this.g =
        this.wa =
        this.G =
        this.H =
        this.u =
        this.U =
        this.o =
          null),
      (this.Ya = this.V = 0),
      (this.Sa = Js("failFast", !1, a)),
      (this.F = this.C = this.v = this.m = this.l = null),
      (this.X = !0),
      (this.xa = this.K = -1),
      (this.Y = this.A = this.D = 0),
      (this.Qa = Js("baseRetryDelayMs", 5e3, a)),
      (this.Za = Js("retryDelaySeedMs", 1e4, a)),
      (this.Ta = Js("forwardChannelMaxRetries", 2, a)),
      (this.va = Js("forwardChannelRequestTimeoutMs", 2e4, a)),
      (this.ma = (a && a.xmlHttpFactory) || void 0),
      (this.Ua = (a && a.Rb) || void 0),
      (this.Aa = (a && a.useFetchStreams) || !1),
      (this.O = void 0),
      (this.L = (a && a.supportsCrossDomainXhr) || !1),
      (this.M = ""),
      (this.h = new pd(a && a.concurrentRequestLimit)),
      (this.Ba = new yw()),
      (this.S = (a && a.fastHandshake) || !1),
      (this.R = (a && a.encodeInitMessageHeaders) || !1),
      this.S && this.R && (this.R = !1),
      (this.Ra = (a && a.Pb) || !1),
      a && a.ua && this.j.ua(),
      a && a.forceLongPolling && (this.X = !1),
      (this.aa = (!this.S && this.X && a && a.detectBufferingProxy) || !1),
      (this.ia = void 0),
      a &&
        a.longPollingTimeout &&
        a.longPollingTimeout > 0 &&
        (this.ia = a.longPollingTimeout),
      (this.ta = void 0),
      (this.T = 0),
      (this.P = !1),
      (this.ja = this.B = null));
  }
  ((t = Vd.prototype),
    (t.ka = 8),
    (t.I = 1),
    (t.connect = function (a, c, f, g) {
      (nt(0),
        (this.W = a),
        (this.H = c || {}),
        f && g !== void 0 && ((this.H.OSID = f), (this.H.OAID = g)),
        (this.F = this.X),
        (this.J = zd(this, null, this.W)),
        Co(this));
    }));
  function ou(a) {
    if ((Dd(a), a.I == 3)) {
      var c = a.V++,
        f = zt(a.J);
      if (
        (ce(f, "SID", a.M),
        ce(f, "RID", c),
        ce(f, "TYPE", "terminate"),
        Xs(a, f),
        (c = new wn(a, a.j, c)),
        (c.M = 2),
        (c.A = So(zt(f))),
        (f = !1),
        o.navigator && o.navigator.sendBeacon)
      )
        try {
          f = o.navigator.sendBeacon(c.A.toString(), "");
        } catch {}
      (!f && o.Image && ((new Image().src = c.A), (f = !0)),
        f || ((c.g = Bd(c.j, null)), c.g.ea(c.A)),
        (c.F = Date.now()),
        To(c));
    }
    Ud(a);
  }
  function Ao(a) {
    a.g && (lu(a), a.g.cancel(), (a.g = null));
  }
  function Dd(a) {
    (Ao(a),
      a.v && (o.clearTimeout(a.v), (a.v = null)),
      xo(a),
      a.h.cancel(),
      a.m && (typeof a.m == "number" && o.clearTimeout(a.m), (a.m = null)));
  }
  function Co(a) {
    if (!md(a.h) && !a.m) {
      a.m = !0;
      var c = a.Ea;
      (j || y(), U || (j(), (U = !0)), E.add(c, a), (a.D = 0));
    }
  }
  function ww(a, c) {
    return gd(a.h) >= a.h.j - (a.m ? 1 : 0)
      ? !1
      : a.m
        ? ((a.i = c.G.concat(a.i)), !0)
        : a.I == 1 || a.I == 2 || a.D >= (a.Sa ? 0 : a.Ta)
          ? !1
          : ((a.m = Us(h(a.Ea, a, c), bd(a, a.D))), a.D++, !0);
  }
  t.Ea = function (a) {
    if (this.m)
      if (((this.m = null), this.I == 1)) {
        if (!a) {
          ((this.V = Math.floor(Math.random() * 1e5)), (a = this.V++));
          const N = new wn(this, this.j, a);
          let L = this.o;
          if (
            (this.U && (L ? ((L = pe(L)), or(L, this.U)) : (L = this.U)),
            this.u !== null || this.R || ((N.J = L), (L = null)),
            this.S)
          )
            e: {
              for (var c = 0, f = 0; f < this.i.length; f++) {
                t: {
                  var g = this.i[f];
                  if (
                    "__data__" in g.map &&
                    ((g = g.map.__data__), typeof g == "string")
                  ) {
                    g = g.length;
                    break t;
                  }
                  g = void 0;
                }
                if (g === void 0) break;
                if (((c += g), c > 4096)) {
                  c = f;
                  break e;
                }
                if (c === 4096 || f === this.i.length - 1) {
                  c = f + 1;
                  break e;
                }
              }
              c = 1e3;
            }
          else c = 1e3;
          ((c = Md(this, N, c)),
            (f = zt(this.J)),
            ce(f, "RID", a),
            ce(f, "CVER", 22),
            this.G && ce(f, "X-HTTP-Session-Id", this.G),
            Xs(this, f),
            L &&
              (this.R
                ? (c = "headers=" + Bs(Cd(L)) + "&" + c)
                : this.u && iu(f, this.u, L)),
            nu(this.h, N),
            this.Ra && ce(f, "TYPE", "init"),
            this.S
              ? (ce(f, "$req", c),
                ce(f, "SID", "null"),
                (N.U = !0),
                Xl(N, f, null))
              : Xl(N, f, c),
            (this.I = 2));
        }
      } else
        this.I == 3 &&
          (a ? Ld(this, a) : this.i.length == 0 || md(this.h) || Ld(this));
  };
  function Ld(a, c) {
    var f;
    c ? (f = c.l) : (f = a.V++);
    const g = zt(a.J);
    (ce(g, "SID", a.M),
      ce(g, "RID", f),
      ce(g, "AID", a.K),
      Xs(a, g),
      a.u && a.o && iu(g, a.u, a.o),
      (f = new wn(a, a.j, f, a.D + 1)),
      a.u === null && (f.J = a.o),
      c && (a.i = c.G.concat(a.i)),
      (c = Md(a, f, 1e3)),
      (f.H = Math.round(a.va * 0.5) + Math.round(a.va * 0.5 * Math.random())),
      nu(a.h, f),
      Xl(f, g, c));
  }
  function Xs(a, c) {
    (a.H &&
      K(a.H, function (f, g) {
        ce(c, g, f);
      }),
      a.l &&
        K({}, function (f, g) {
          ce(c, g, f);
        }));
  }
  function Md(a, c, f) {
    f = Math.min(a.i.length, f);
    const g = a.l ? h(a.l.Ka, a.l, a) : null;
    e: {
      var N = a.i;
      let X = -1;
      for (;;) {
        const ke = ["count=" + f];
        X == -1
          ? f > 0
            ? ((X = N[0].g), ke.push("ofs=" + X))
            : (X = 0)
          : ke.push("ofs=" + X);
        let ae = !0;
        for (let Fe = 0; Fe < f; Fe++) {
          var L = N[Fe].g;
          const Bt = N[Fe].map;
          if (((L -= X), L < 0)) ((X = Math.max(0, N[Fe].g - 100)), (ae = !1));
          else
            try {
              L = "req" + L + "_" || "";
              try {
                var z = Bt instanceof Map ? Bt : Object.entries(Bt);
                for (const [fr, Rn] of z) {
                  let An = Rn;
                  (l(Rn) && (An = ql(Rn)),
                    ke.push(L + fr + "=" + encodeURIComponent(An)));
                }
              } catch (fr) {
                throw (
                  ke.push(L + "type=" + encodeURIComponent("_badmap")),
                  fr
                );
              }
            } catch {
              g && g(Bt);
            }
        }
        if (ae) {
          z = ke.join("&");
          break e;
        }
      }
      z = void 0;
    }
    return ((a = a.i.splice(0, f)), (c.G = a), z);
  }
  function Od(a) {
    if (!a.g && !a.v) {
      a.Y = 1;
      var c = a.Da;
      (j || y(), U || (j(), (U = !0)), E.add(c, a), (a.A = 0));
    }
  }
  function au(a) {
    return a.g || a.v || a.A >= 3
      ? !1
      : (a.Y++, (a.v = Us(h(a.Da, a), bd(a, a.A))), a.A++, !0);
  }
  ((t.Da = function () {
    if (
      ((this.v = null),
      Fd(this),
      this.aa && !(this.P || this.g == null || this.T <= 0))
    ) {
      var a = 4 * this.T;
      (this.j.info("BP detection timer enabled: " + a),
        (this.B = Us(h(this.Wa, this), a)));
    }
  }),
    (t.Wa = function () {
      this.B &&
        ((this.B = null),
        this.j.info("BP detection timeout reached."),
        this.j.info("Buffering proxy detected and switch to long-polling!"),
        (this.F = !1),
        (this.P = !0),
        nt(10),
        Ao(this),
        Fd(this));
    }));
  function lu(a) {
    a.B != null && (o.clearTimeout(a.B), (a.B = null));
  }
  function Fd(a) {
    ((a.g = new wn(a, a.j, "rpc", a.Y)),
      a.u === null && (a.g.J = a.o),
      (a.g.P = 0));
    var c = zt(a.na);
    (ce(c, "RID", "rpc"),
      ce(c, "SID", a.M),
      ce(c, "AID", a.K),
      ce(c, "CI", a.F ? "0" : "1"),
      !a.F && a.ia && ce(c, "TO", a.ia),
      ce(c, "TYPE", "xmlhttp"),
      Xs(a, c),
      a.u && a.o && iu(c, a.u, a.o),
      a.O && (a.g.H = a.O));
    var f = a.g;
    ((a = a.ba),
      (f.M = 1),
      (f.A = So(zt(c))),
      (f.u = null),
      (f.R = !0),
      hd(f, a));
  }
  t.Va = function () {
    this.C != null && ((this.C = null), Ao(this), au(this), nt(19));
  };
  function xo(a) {
    a.C != null && (o.clearTimeout(a.C), (a.C = null));
  }
  function jd(a, c) {
    var f = null;
    if (a.g == c) {
      (xo(a), lu(a), (a.g = null));
      var g = 2;
    } else if (tu(a.h, c)) ((f = c.G), yd(a.h, c), (g = 1));
    else return;
    if (a.I != 0) {
      if (c.o)
        if (g == 1) {
          ((f = c.u ? c.u.length : 0), (c = Date.now() - c.F));
          var N = a.D;
          ((g = Eo()), tt(g, new od(g, f)), Co(a));
        } else Od(a);
      else if (
        ((N = c.m),
        N == 3 ||
          (N == 0 && c.X > 0) ||
          !((g == 1 && ww(a, c)) || (g == 2 && au(a))))
      )
        switch ((f && f.length > 0 && ((c = a.h), (c.i = c.i.concat(f))), N)) {
          case 1:
            hr(a, 5);
            break;
          case 4:
            hr(a, 10);
            break;
          case 3:
            hr(a, 6);
            break;
          default:
            hr(a, 2);
        }
    }
  }
  function bd(a, c) {
    let f = a.Qa + Math.floor(Math.random() * a.Za);
    return (a.isActive() || (f *= 2), f * c);
  }
  function hr(a, c) {
    if ((a.j.info("Error code " + c), c == 2)) {
      var f = h(a.bb, a),
        g = a.Ua;
      const N = !g;
      ((g = new Tn(g || "//www.google.com/images/cleardot.gif")),
        (o.location && o.location.protocol == "http") || Gs(g, "https"),
        So(g),
        N ? mw(g.toString(), f) : gw(g.toString(), f));
    } else nt(2);
    ((a.I = 0), a.l && a.l.pa(c), Ud(a), Dd(a));
  }
  t.bb = function (a) {
    a
      ? (this.j.info("Successfully pinged google.com"), nt(2))
      : (this.j.info("Failed to ping google.com"), nt(1));
  };
  function Ud(a) {
    if (((a.I = 0), (a.ja = []), a.l)) {
      const c = vd(a.h);
      ((c.length != 0 || a.i.length != 0) &&
        (x(a.ja, c),
        x(a.ja, a.i),
        (a.h.i.length = 0),
        T(a.i),
        (a.i.length = 0)),
        a.l.oa());
    }
  }
  function zd(a, c, f) {
    var g = f instanceof Tn ? zt(f) : new Tn(f);
    if (g.g != "") (c && (g.g = c + "." + g.g), Hs(g, g.u));
    else {
      var N = o.location;
      ((g = N.protocol),
        (c = c ? c + "." + N.hostname : N.hostname),
        (N = +N.port));
      const L = new Tn(null);
      (g && Gs(L, g), c && (L.g = c), N && Hs(L, N), f && (L.h = f), (g = L));
    }
    return (
      (f = a.G),
      (c = a.wa),
      f && c && ce(g, f, c),
      ce(g, "VER", a.ka),
      Xs(a, g),
      g
    );
  }
  function Bd(a, c, f) {
    if (c && !a.L)
      throw Error("Can't create secondary domain capable XhrIo object.");
    return (
      (c = a.Aa && !a.ma ? new we(new su({ ab: f })) : new we(a.ma)),
      c.Fa(a.L),
      c
    );
  }
  t.isActive = function () {
    return !!this.l && this.l.isActive(this);
  };
  function $d() {}
  ((t = $d.prototype),
    (t.ra = function () {}),
    (t.qa = function () {}),
    (t.pa = function () {}),
    (t.oa = function () {}),
    (t.isActive = function () {
      return !0;
    }),
    (t.Ka = function () {}));
  function Po() {}
  Po.prototype.g = function (a, c) {
    return new dt(a, c);
  };
  function dt(a, c) {
    (qe.call(this),
      (this.g = new Vd(c)),
      (this.l = a),
      (this.h = (c && c.messageUrlParams) || null),
      (a = (c && c.messageHeaders) || null),
      c &&
        c.clientProtocolHeaderRequired &&
        (a
          ? (a["X-Client-Protocol"] = "webchannel")
          : (a = { "X-Client-Protocol": "webchannel" })),
      (this.g.o = a),
      (a = (c && c.initMessageHeaders) || null),
      c &&
        c.messageContentType &&
        (a
          ? (a["X-WebChannel-Content-Type"] = c.messageContentType)
          : (a = { "X-WebChannel-Content-Type": c.messageContentType })),
      c &&
        c.sa &&
        (a
          ? (a["X-WebChannel-Client-Profile"] = c.sa)
          : (a = { "X-WebChannel-Client-Profile": c.sa })),
      (this.g.U = a),
      (a = c && c.Qb) && !S(a) && (this.g.u = a),
      (this.A = (c && c.supportsCrossDomainXhr) || !1),
      (this.v = (c && c.sendRawJson) || !1),
      (c = c && c.httpSessionIdParam) &&
        !S(c) &&
        ((this.g.G = c),
        (a = this.h),
        a !== null && c in a && ((a = this.h), c in a && delete a[c])),
      (this.j = new br(this)));
  }
  (p(dt, qe),
    (dt.prototype.m = function () {
      ((this.g.l = this.j),
        this.A && (this.g.L = !0),
        this.g.connect(this.l, this.h || void 0));
    }),
    (dt.prototype.close = function () {
      ou(this.g);
    }),
    (dt.prototype.o = function (a) {
      var c = this.g;
      if (typeof a == "string") {
        var f = {};
        ((f.__data__ = a), (a = f));
      } else this.v && ((f = {}), (f.__data__ = ql(a)), (a = f));
      (c.i.push(new aw(c.Ya++, a)), c.I == 3 && Co(c));
    }),
    (dt.prototype.N = function () {
      ((this.g.l = null),
        delete this.j,
        ou(this.g),
        delete this.g,
        dt.Z.N.call(this));
    }));
  function Gd(a) {
    (Kl.call(this),
      a.__headers__ &&
        ((this.headers = a.__headers__),
        (this.statusCode = a.__status__),
        delete a.__headers__,
        delete a.__status__));
    var c = a.__sm__;
    if (c) {
      e: {
        for (const f in c) {
          a = f;
          break e;
        }
        a = void 0;
      }
      ((this.i = a) &&
        ((a = this.i), (c = c !== null && a in c ? c[a] : void 0)),
        (this.data = c));
    } else this.data = a;
  }
  p(Gd, Kl);
  function Hd() {
    (Ql.call(this), (this.status = 1));
  }
  p(Hd, Ql);
  function br(a) {
    this.g = a;
  }
  (p(br, $d),
    (br.prototype.ra = function () {
      tt(this.g, "a");
    }),
    (br.prototype.qa = function (a) {
      tt(this.g, new Gd(a));
    }),
    (br.prototype.pa = function (a) {
      tt(this.g, new Hd());
    }),
    (br.prototype.oa = function () {
      tt(this.g, "b");
    }),
    (Po.prototype.createWebChannel = Po.prototype.g),
    (dt.prototype.send = dt.prototype.o),
    (dt.prototype.open = dt.prototype.m),
    (dt.prototype.close = dt.prototype.close),
    (p_ = function () {
      return new Po();
    }),
    (d_ = function () {
      return Eo();
    }),
    (f_ = lr),
    (Jc = {
      jb: 0,
      mb: 1,
      nb: 2,
      Hb: 3,
      Mb: 4,
      Jb: 5,
      Kb: 6,
      Ib: 7,
      Gb: 8,
      Lb: 9,
      PROXY: 10,
      NOPROXY: 11,
      Eb: 12,
      Ab: 13,
      Bb: 14,
      zb: 15,
      Cb: 16,
      Db: 17,
      fb: 18,
      eb: 19,
      gb: 20,
    }),
    (wo.NO_ERROR = 0),
    (wo.TIMEOUT = 8),
    (wo.HTTP_ERROR = 6),
    (ma = wo),
    (ad.COMPLETE = "complete"),
    (h_ = ad),
    (nd.EventType = js),
    (js.OPEN = "a"),
    (js.CLOSE = "b"),
    (js.ERROR = "c"),
    (js.MESSAGE = "d"),
    (qe.prototype.listen = qe.prototype.J),
    (pi = nd),
    (we.prototype.listenOnce = we.prototype.K),
    (we.prototype.getLastError = we.prototype.Ha),
    (we.prototype.getLastErrorCode = we.prototype.ya),
    (we.prototype.getStatus = we.prototype.ca),
    (we.prototype.getResponseJson = we.prototype.La),
    (we.prototype.getResponseText = we.prototype.la),
    (we.prototype.send = we.prototype.ea),
    (we.prototype.setWithCredentials = we.prototype.Fa),
    (c_ = we));
}).apply(
  typeof Qo < "u"
    ? Qo
    : typeof self < "u"
      ? self
      : typeof window < "u"
        ? window
        : {},
);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Je {
  constructor(e) {
    this.uid = e;
  }
  isAuthenticated() {
    return this.uid != null;
  }
  toKey() {
    return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user";
  }
  isEqual(e) {
    return e.uid === this.uid;
  }
}
((Je.UNAUTHENTICATED = new Je(null)),
  (Je.GOOGLE_CREDENTIALS = new Je("google-credentials-uid")),
  (Je.FIRST_PARTY = new Je("first-party-uid")),
  (Je.MOCK_USER = new Je("mock-user")));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Ns = "12.12.0";
function SR(t) {
  Ns = t;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const xr = new r_("@firebase/firestore");
function zr() {
  return xr.logLevel;
}
function $(t, ...e) {
  if (xr.logLevel <= re.DEBUG) {
    const n = e.map(_f);
    xr.debug(`Firestore (${Ns}): ${t}`, ...n);
  }
}
function gn(t, ...e) {
  if (xr.logLevel <= re.ERROR) {
    const n = e.map(_f);
    xr.error(`Firestore (${Ns}): ${t}`, ...n);
  }
}
function Pr(t, ...e) {
  if (xr.logLevel <= re.WARN) {
    const n = e.map(_f);
    xr.warn(`Firestore (${Ns}): ${t}`, ...n);
  }
}
function _f(t) {
  if (typeof t == "string") return t;
  try {
    return (function (n) {
      return JSON.stringify(n);
    })(t);
  } catch {
    return t;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function q(t, e, n) {
  let r = "Unexpected state";
  (typeof e == "string" ? (r = e) : (n = e), m_(t, r, n));
}
function m_(t, e, n) {
  let r = `FIRESTORE (${Ns}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;
  if (n !== void 0)
    try {
      r += " CONTEXT: " + JSON.stringify(n);
    } catch {
      r += " CONTEXT: " + n;
    }
  throw (gn(r), new Error(r));
}
function ie(t, e, n, r) {
  let s = "Unexpected state";
  (typeof n == "string" ? (s = n) : (r = n), t || m_(e, s, r));
}
function Y(t, e) {
  return t;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const F = {
  OK: "ok",
  CANCELLED: "cancelled",
  UNKNOWN: "unknown",
  INVALID_ARGUMENT: "invalid-argument",
  DEADLINE_EXCEEDED: "deadline-exceeded",
  NOT_FOUND: "not-found",
  ALREADY_EXISTS: "already-exists",
  PERMISSION_DENIED: "permission-denied",
  UNAUTHENTICATED: "unauthenticated",
  RESOURCE_EXHAUSTED: "resource-exhausted",
  FAILED_PRECONDITION: "failed-precondition",
  ABORTED: "aborted",
  OUT_OF_RANGE: "out-of-range",
  UNIMPLEMENTED: "unimplemented",
  INTERNAL: "internal",
  UNAVAILABLE: "unavailable",
  DATA_LOSS: "data-loss",
};
class H extends ks {
  constructor(e, n) {
    (super(e, n),
      (this.code = e),
      (this.message = n),
      (this.toString = () =>
        `${this.name}: [code=${this.code}]: ${this.message}`));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class un {
  constructor() {
    this.promise = new Promise((e, n) => {
      ((this.resolve = e), (this.reject = n));
    });
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class g_ {
  constructor(e, n) {
    ((this.user = n),
      (this.type = "OAuth"),
      (this.headers = new Map()),
      this.headers.set("Authorization", `Bearer ${e}`));
  }
}
class IR {
  getToken() {
    return Promise.resolve(null);
  }
  invalidateToken() {}
  start(e, n) {
    e.enqueueRetryable(() => n(Je.UNAUTHENTICATED));
  }
  shutdown() {}
}
class RR {
  constructor(e) {
    ((this.token = e), (this.changeListener = null));
  }
  getToken() {
    return Promise.resolve(this.token);
  }
  invalidateToken() {}
  start(e, n) {
    ((this.changeListener = n), e.enqueueRetryable(() => n(this.token.user)));
  }
  shutdown() {
    this.changeListener = null;
  }
}
class AR {
  constructor(e) {
    ((this.t = e),
      (this.currentUser = Je.UNAUTHENTICATED),
      (this.i = 0),
      (this.forceRefresh = !1),
      (this.auth = null));
  }
  start(e, n) {
    ie(this.o === void 0, 42304);
    let r = this.i;
    const s = (u) => (this.i !== r ? ((r = this.i), n(u)) : Promise.resolve());
    let i = new un();
    this.o = () => {
      (this.i++,
        (this.currentUser = this.u()),
        i.resolve(),
        (i = new un()),
        e.enqueueRetryable(() => s(this.currentUser)));
    };
    const o = () => {
        const u = i;
        e.enqueueRetryable(async () => {
          (await u.promise, await s(this.currentUser));
        });
      },
      l = (u) => {
        ($("FirebaseAuthCredentialsProvider", "Auth detected"),
          (this.auth = u),
          this.o && (this.auth.addAuthTokenListener(this.o), o()));
      };
    (this.t.onInit((u) => l(u)),
      setTimeout(() => {
        if (!this.auth) {
          const u = this.t.getImmediate({ optional: !0 });
          u
            ? l(u)
            : ($("FirebaseAuthCredentialsProvider", "Auth not yet detected"),
              i.resolve(),
              (i = new un()));
        }
      }, 0),
      o());
  }
  getToken() {
    const e = this.i,
      n = this.forceRefresh;
    return (
      (this.forceRefresh = !1),
      this.auth
        ? this.auth
            .getToken(n)
            .then((r) =>
              this.i !== e
                ? ($(
                    "FirebaseAuthCredentialsProvider",
                    "getToken aborted due to token change.",
                  ),
                  this.getToken())
                : r
                  ? (ie(typeof r.accessToken == "string", 31837, { l: r }),
                    new g_(r.accessToken, this.currentUser))
                  : null,
            )
        : Promise.resolve(null)
    );
  }
  invalidateToken() {
    this.forceRefresh = !0;
  }
  shutdown() {
    (this.auth && this.o && this.auth.removeAuthTokenListener(this.o),
      (this.o = void 0));
  }
  u() {
    const e = this.auth && this.auth.getUid();
    return (ie(e === null || typeof e == "string", 2055, { h: e }), new Je(e));
  }
}
class CR {
  constructor(e, n, r) {
    ((this.P = e),
      (this.T = n),
      (this.I = r),
      (this.type = "FirstParty"),
      (this.user = Je.FIRST_PARTY),
      (this.R = new Map()));
  }
  A() {
    return this.I ? this.I() : null;
  }
  get headers() {
    this.R.set("X-Goog-AuthUser", this.P);
    const e = this.A();
    return (
      e && this.R.set("Authorization", e),
      this.T && this.R.set("X-Goog-Iam-Authorization-Token", this.T),
      this.R
    );
  }
}
class xR {
  constructor(e, n, r) {
    ((this.P = e), (this.T = n), (this.I = r));
  }
  getToken() {
    return Promise.resolve(new CR(this.P, this.T, this.I));
  }
  start(e, n) {
    e.enqueueRetryable(() => n(Je.FIRST_PARTY));
  }
  shutdown() {}
  invalidateToken() {}
}
class Tm {
  constructor(e) {
    ((this.value = e),
      (this.type = "AppCheck"),
      (this.headers = new Map()),
      e && e.length > 0 && this.headers.set("x-firebase-appcheck", this.value));
  }
}
class PR {
  constructor(e, n) {
    ((this.V = n),
      (this.forceRefresh = !1),
      (this.appCheck = null),
      (this.m = null),
      (this.p = null),
      lR(e) && e.settings.appCheckToken && (this.p = e.settings.appCheckToken));
  }
  start(e, n) {
    ie(this.o === void 0, 3512);
    const r = (i) => {
      i.error != null &&
        $(
          "FirebaseAppCheckTokenProvider",
          `Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`,
        );
      const o = i.token !== this.m;
      return (
        (this.m = i.token),
        $(
          "FirebaseAppCheckTokenProvider",
          `Received ${o ? "new" : "existing"} token.`,
        ),
        o ? n(i.token) : Promise.resolve()
      );
    };
    this.o = (i) => {
      e.enqueueRetryable(() => r(i));
    };
    const s = (i) => {
      ($("FirebaseAppCheckTokenProvider", "AppCheck detected"),
        (this.appCheck = i),
        this.o && this.appCheck.addTokenListener(this.o));
    };
    (this.V.onInit((i) => s(i)),
      setTimeout(() => {
        if (!this.appCheck) {
          const i = this.V.getImmediate({ optional: !0 });
          i
            ? s(i)
            : $("FirebaseAppCheckTokenProvider", "AppCheck not yet detected");
        }
      }, 0));
  }
  getToken() {
    if (this.p) return Promise.resolve(new Tm(this.p));
    const e = this.forceRefresh;
    return (
      (this.forceRefresh = !1),
      this.appCheck
        ? this.appCheck
            .getToken(e)
            .then((n) =>
              n
                ? (ie(typeof n.token == "string", 44558, { tokenResult: n }),
                  (this.m = n.token),
                  new Tm(n.token))
                : null,
            )
        : Promise.resolve(null)
    );
  }
  invalidateToken() {
    this.forceRefresh = !0;
  }
  shutdown() {
    (this.appCheck && this.o && this.appCheck.removeTokenListener(this.o),
      (this.o = void 0));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function kR(t) {
  const e = typeof self < "u" && (self.crypto || self.msCrypto),
    n = new Uint8Array(t);
  if (e && typeof e.getRandomValues == "function") e.getRandomValues(n);
  else for (let r = 0; r < t; r++) n[r] = Math.floor(256 * Math.random());
  return n;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ef {
  static newId() {
    const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      n = 62 * Math.floor(4.129032258064516);
    let r = "";
    for (; r.length < 20; ) {
      const s = kR(40);
      for (let i = 0; i < s.length; ++i)
        r.length < 20 && s[i] < n && (r += e.charAt(s[i] % 62));
    }
    return r;
  }
}
function ee(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
}
function Xc(t, e) {
  const n = Math.min(t.length, e.length);
  for (let r = 0; r < n; r++) {
    const s = t.charAt(r),
      i = e.charAt(r);
    if (s !== i) return Wu(s) === Wu(i) ? ee(s, i) : Wu(s) ? 1 : -1;
  }
  return ee(t.length, e.length);
}
const NR = 55296,
  VR = 57343;
function Wu(t) {
  const e = t.charCodeAt(0);
  return e >= NR && e <= VR;
}
function Es(t, e, n) {
  return t.length === e.length && t.every((r, s) => n(r, e[s]));
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Sm = "__name__";
class Ht {
  constructor(e, n, r) {
    (n === void 0
      ? (n = 0)
      : n > e.length && q(637, { offset: n, range: e.length }),
      r === void 0
        ? (r = e.length - n)
        : r > e.length - n && q(1746, { length: r, range: e.length - n }),
      (this.segments = e),
      (this.offset = n),
      (this.len = r));
  }
  get length() {
    return this.len;
  }
  isEqual(e) {
    return Ht.comparator(this, e) === 0;
  }
  child(e) {
    const n = this.segments.slice(this.offset, this.limit());
    return (
      e instanceof Ht
        ? e.forEach((r) => {
            n.push(r);
          })
        : n.push(e),
      this.construct(n)
    );
  }
  limit() {
    return this.offset + this.length;
  }
  popFirst(e) {
    return (
      (e = e === void 0 ? 1 : e),
      this.construct(this.segments, this.offset + e, this.length - e)
    );
  }
  popLast() {
    return this.construct(this.segments, this.offset, this.length - 1);
  }
  firstSegment() {
    return this.segments[this.offset];
  }
  lastSegment() {
    return this.get(this.length - 1);
  }
  get(e) {
    return this.segments[this.offset + e];
  }
  isEmpty() {
    return this.length === 0;
  }
  isPrefixOf(e) {
    if (e.length < this.length) return !1;
    for (let n = 0; n < this.length; n++)
      if (this.get(n) !== e.get(n)) return !1;
    return !0;
  }
  isImmediateParentOf(e) {
    if (this.length + 1 !== e.length) return !1;
    for (let n = 0; n < this.length; n++)
      if (this.get(n) !== e.get(n)) return !1;
    return !0;
  }
  forEach(e) {
    for (let n = this.offset, r = this.limit(); n < r; n++) e(this.segments[n]);
  }
  toArray() {
    return this.segments.slice(this.offset, this.limit());
  }
  static comparator(e, n) {
    const r = Math.min(e.length, n.length);
    for (let s = 0; s < r; s++) {
      const i = Ht.compareSegments(e.get(s), n.get(s));
      if (i !== 0) return i;
    }
    return ee(e.length, n.length);
  }
  static compareSegments(e, n) {
    const r = Ht.isNumericId(e),
      s = Ht.isNumericId(n);
    return r && !s
      ? -1
      : !r && s
        ? 1
        : r && s
          ? Ht.extractNumericId(e).compare(Ht.extractNumericId(n))
          : Xc(e, n);
  }
  static isNumericId(e) {
    return e.startsWith("__id") && e.endsWith("__");
  }
  static extractNumericId(e) {
    return Wn.fromString(e.substring(4, e.length - 2));
  }
}
class fe extends Ht {
  construct(e, n, r) {
    return new fe(e, n, r);
  }
  canonicalString() {
    return this.toArray().join("/");
  }
  toString() {
    return this.canonicalString();
  }
  toUriEncodedString() {
    return this.toArray().map(encodeURIComponent).join("/");
  }
  static fromString(...e) {
    const n = [];
    for (const r of e) {
      if (r.indexOf("//") >= 0)
        throw new H(
          F.INVALID_ARGUMENT,
          `Invalid segment (${r}). Paths must not contain // in them.`,
        );
      n.push(...r.split("/").filter((s) => s.length > 0));
    }
    return new fe(n);
  }
  static emptyPath() {
    return new fe([]);
  }
}
const DR = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
class $e extends Ht {
  construct(e, n, r) {
    return new $e(e, n, r);
  }
  static isValidIdentifier(e) {
    return DR.test(e);
  }
  canonicalString() {
    return this.toArray()
      .map(
        (e) => (
          (e = e.replace(/\\/g, "\\\\").replace(/`/g, "\\`")),
          $e.isValidIdentifier(e) || (e = "`" + e + "`"),
          e
        ),
      )
      .join(".");
  }
  toString() {
    return this.canonicalString();
  }
  isKeyField() {
    return this.length === 1 && this.get(0) === Sm;
  }
  static keyField() {
    return new $e([Sm]);
  }
  static fromServerFormat(e) {
    const n = [];
    let r = "",
      s = 0;
    const i = () => {
      if (r.length === 0)
        throw new H(
          F.INVALID_ARGUMENT,
          `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
        );
      (n.push(r), (r = ""));
    };
    let o = !1;
    for (; s < e.length; ) {
      const l = e[s];
      if (l === "\\") {
        if (s + 1 === e.length)
          throw new H(
            F.INVALID_ARGUMENT,
            "Path has trailing escape character: " + e,
          );
        const u = e[s + 1];
        if (u !== "\\" && u !== "." && u !== "`")
          throw new H(
            F.INVALID_ARGUMENT,
            "Path has invalid escape sequence: " + e,
          );
        ((r += u), (s += 2));
      } else
        l === "`"
          ? ((o = !o), s++)
          : l !== "." || o
            ? ((r += l), s++)
            : (i(), s++);
    }
    if ((i(), o))
      throw new H(F.INVALID_ARGUMENT, "Unterminated ` in path: " + e);
    return new $e(n);
  }
  static emptyPath() {
    return new $e([]);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class W {
  constructor(e) {
    this.path = e;
  }
  static fromPath(e) {
    return new W(fe.fromString(e));
  }
  static fromName(e) {
    return new W(fe.fromString(e).popFirst(5));
  }
  static empty() {
    return new W(fe.emptyPath());
  }
  get collectionGroup() {
    return this.path.popLast().lastSegment();
  }
  hasCollectionId(e) {
    return this.path.length >= 2 && this.path.get(this.path.length - 2) === e;
  }
  getCollectionGroup() {
    return this.path.get(this.path.length - 2);
  }
  getCollectionPath() {
    return this.path.popLast();
  }
  isEqual(e) {
    return e !== null && fe.comparator(this.path, e.path) === 0;
  }
  toString() {
    return this.path.toString();
  }
  static comparator(e, n) {
    return fe.comparator(e.path, n.path);
  }
  static isDocumentKey(e) {
    return e.length % 2 == 0;
  }
  static fromSegments(e) {
    return new W(new fe(e.slice()));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function y_(t, e, n) {
  if (!n)
    throw new H(
      F.INVALID_ARGUMENT,
      `Function ${t}() cannot be called with an empty ${e}.`,
    );
}
function LR(t, e, n, r) {
  if (e === !0 && r === !0)
    throw new H(F.INVALID_ARGUMENT, `${t} and ${n} cannot be used together.`);
}
function Im(t) {
  if (!W.isDocumentKey(t))
    throw new H(
      F.INVALID_ARGUMENT,
      `Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`,
    );
}
function Rm(t) {
  if (W.isDocumentKey(t))
    throw new H(
      F.INVALID_ARGUMENT,
      `Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`,
    );
}
function v_(t) {
  return (
    typeof t == "object" &&
    t !== null &&
    (Object.getPrototypeOf(t) === Object.prototype ||
      Object.getPrototypeOf(t) === null)
  );
}
function wf(t) {
  if (t === void 0) return "undefined";
  if (t === null) return "null";
  if (typeof t == "string")
    return (
      t.length > 20 && (t = `${t.substring(0, 20)}...`),
      JSON.stringify(t)
    );
  if (typeof t == "number" || typeof t == "boolean") return "" + t;
  if (typeof t == "object") {
    if (t instanceof Array) return "an array";
    {
      const e = (function (r) {
        return r.constructor ? r.constructor.name : null;
      })(t);
      return e ? `a custom ${e} object` : "an object";
    }
  }
  return typeof t == "function" ? "a function" : q(12329, { type: typeof t });
}
function Yn(t, e) {
  if (("_delegate" in t && (t = t._delegate), !(t instanceof e))) {
    if (e.name === t.constructor.name)
      throw new H(
        F.INVALID_ARGUMENT,
        "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?",
      );
    {
      const n = wf(t);
      throw new H(
        F.INVALID_ARGUMENT,
        `Expected type '${e.name}', but it was: ${n}`,
      );
    }
  }
  return t;
}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Pe(t, e) {
  const n = { typeString: t };
  return (e && (n.value = e), n);
}
function fo(t, e) {
  if (!v_(t)) throw new H(F.INVALID_ARGUMENT, "JSON must be an object");
  let n;
  for (const r in e)
    if (e[r]) {
      const s = e[r].typeString,
        i = "value" in e[r] ? { value: e[r].value } : void 0;
      if (!(r in t)) {
        n = `JSON missing required field: '${r}'`;
        break;
      }
      const o = t[r];
      if (s && typeof o !== s) {
        n = `JSON field '${r}' must be a ${s}.`;
        break;
      }
      if (i !== void 0 && o !== i.value) {
        n = `Expected '${r}' field to equal '${i.value}'`;
        break;
      }
    }
  if (n) throw new H(F.INVALID_ARGUMENT, n);
  return !0;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Am = -62135596800,
  Cm = 1e6;
class le {
  static now() {
    return le.fromMillis(Date.now());
  }
  static fromDate(e) {
    return le.fromMillis(e.getTime());
  }
  static fromMillis(e) {
    const n = Math.floor(e / 1e3),
      r = Math.floor((e - 1e3 * n) * Cm);
    return new le(n, r);
  }
  constructor(e, n) {
    if (((this.seconds = e), (this.nanoseconds = n), n < 0))
      throw new H(
        F.INVALID_ARGUMENT,
        "Timestamp nanoseconds out of range: " + n,
      );
    if (n >= 1e9)
      throw new H(
        F.INVALID_ARGUMENT,
        "Timestamp nanoseconds out of range: " + n,
      );
    if (e < Am)
      throw new H(F.INVALID_ARGUMENT, "Timestamp seconds out of range: " + e);
    if (e >= 253402300800)
      throw new H(F.INVALID_ARGUMENT, "Timestamp seconds out of range: " + e);
  }
  toDate() {
    return new Date(this.toMillis());
  }
  toMillis() {
    return 1e3 * this.seconds + this.nanoseconds / Cm;
  }
  _compareTo(e) {
    return this.seconds === e.seconds
      ? ee(this.nanoseconds, e.nanoseconds)
      : ee(this.seconds, e.seconds);
  }
  isEqual(e) {
    return e.seconds === this.seconds && e.nanoseconds === this.nanoseconds;
  }
  toString() {
    return (
      "Timestamp(seconds=" +
      this.seconds +
      ", nanoseconds=" +
      this.nanoseconds +
      ")"
    );
  }
  toJSON() {
    return {
      type: le._jsonSchemaVersion,
      seconds: this.seconds,
      nanoseconds: this.nanoseconds,
    };
  }
  static fromJSON(e) {
    if (fo(e, le._jsonSchema)) return new le(e.seconds, e.nanoseconds);
  }
  valueOf() {
    const e = this.seconds - Am;
    return (
      String(e).padStart(12, "0") +
      "." +
      String(this.nanoseconds).padStart(9, "0")
    );
  }
}
((le._jsonSchemaVersion = "firestore/timestamp/1.0"),
  (le._jsonSchema = {
    type: Pe("string", le._jsonSchemaVersion),
    seconds: Pe("number"),
    nanoseconds: Pe("number"),
  }));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Q {
  static fromTimestamp(e) {
    return new Q(e);
  }
  static min() {
    return new Q(new le(0, 0));
  }
  static max() {
    return new Q(new le(253402300799, 999999999));
  }
  constructor(e) {
    this.timestamp = e;
  }
  compareTo(e) {
    return this.timestamp._compareTo(e.timestamp);
  }
  isEqual(e) {
    return this.timestamp.isEqual(e.timestamp);
  }
  toMicroseconds() {
    return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
  }
  toString() {
    return "SnapshotVersion(" + this.timestamp.toString() + ")";
  }
  toTimestamp() {
    return this.timestamp;
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Xi = -1;
function MR(t, e) {
  const n = t.toTimestamp().seconds,
    r = t.toTimestamp().nanoseconds + 1,
    s = Q.fromTimestamp(r === 1e9 ? new le(n + 1, 0) : new le(n, r));
  return new Jn(s, W.empty(), e);
}
function OR(t) {
  return new Jn(t.readTime, t.key, Xi);
}
class Jn {
  constructor(e, n, r) {
    ((this.readTime = e), (this.documentKey = n), (this.largestBatchId = r));
  }
  static min() {
    return new Jn(Q.min(), W.empty(), Xi);
  }
  static max() {
    return new Jn(Q.max(), W.empty(), Xi);
  }
}
function FR(t, e) {
  let n = t.readTime.compareTo(e.readTime);
  return n !== 0
    ? n
    : ((n = W.comparator(t.documentKey, e.documentKey)),
      n !== 0 ? n : ee(t.largestBatchId, e.largestBatchId));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const jR =
  "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
class bR {
  constructor() {
    this.onCommittedListeners = [];
  }
  addOnCommittedListener(e) {
    this.onCommittedListeners.push(e);
  }
  raiseOnCommittedEvent() {
    this.onCommittedListeners.forEach((e) => e());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Vs(t) {
  if (t.code !== F.FAILED_PRECONDITION || t.message !== jR) throw t;
  $("LocalStore", "Unexpectedly lost primary lease");
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class O {
  constructor(e) {
    ((this.nextCallback = null),
      (this.catchCallback = null),
      (this.result = void 0),
      (this.error = void 0),
      (this.isDone = !1),
      (this.callbackAttached = !1),
      e(
        (n) => {
          ((this.isDone = !0),
            (this.result = n),
            this.nextCallback && this.nextCallback(n));
        },
        (n) => {
          ((this.isDone = !0),
            (this.error = n),
            this.catchCallback && this.catchCallback(n));
        },
      ));
  }
  catch(e) {
    return this.next(void 0, e);
  }
  next(e, n) {
    return (
      this.callbackAttached && q(59440),
      (this.callbackAttached = !0),
      this.isDone
        ? this.error
          ? this.wrapFailure(n, this.error)
          : this.wrapSuccess(e, this.result)
        : new O((r, s) => {
            ((this.nextCallback = (i) => {
              this.wrapSuccess(e, i).next(r, s);
            }),
              (this.catchCallback = (i) => {
                this.wrapFailure(n, i).next(r, s);
              }));
          })
    );
  }
  toPromise() {
    return new Promise((e, n) => {
      this.next(e, n);
    });
  }
  wrapUserFunction(e) {
    try {
      const n = e();
      return n instanceof O ? n : O.resolve(n);
    } catch (n) {
      return O.reject(n);
    }
  }
  wrapSuccess(e, n) {
    return e ? this.wrapUserFunction(() => e(n)) : O.resolve(n);
  }
  wrapFailure(e, n) {
    return e ? this.wrapUserFunction(() => e(n)) : O.reject(n);
  }
  static resolve(e) {
    return new O((n, r) => {
      n(e);
    });
  }
  static reject(e) {
    return new O((n, r) => {
      r(e);
    });
  }
  static waitFor(e) {
    return new O((n, r) => {
      let s = 0,
        i = 0,
        o = !1;
      (e.forEach((l) => {
        (++s,
          l.next(
            () => {
              (++i, o && i === s && n());
            },
            (u) => r(u),
          ));
      }),
        (o = !0),
        i === s && n());
    });
  }
  static or(e) {
    let n = O.resolve(!1);
    for (const r of e) n = n.next((s) => (s ? O.resolve(s) : r()));
    return n;
  }
  static forEach(e, n) {
    const r = [];
    return (
      e.forEach((s, i) => {
        r.push(n.call(this, s, i));
      }),
      this.waitFor(r)
    );
  }
  static mapArray(e, n) {
    return new O((r, s) => {
      const i = e.length,
        o = new Array(i);
      let l = 0;
      for (let u = 0; u < i; u++) {
        const h = u;
        n(e[h]).next(
          (d) => {
            ((o[h] = d), ++l, l === i && r(o));
          },
          (d) => s(d),
        );
      }
    });
  }
  static doWhile(e, n) {
    return new O((r, s) => {
      const i = () => {
        e() === !0
          ? n().next(() => {
              i();
            }, s)
          : r();
      };
      i();
    });
  }
}
function UR(t) {
  const e = t.match(/Android ([\d.]+)/i),
    n = e ? e[1].split(".").slice(0, 2).join(".") : "-1";
  return Number(n);
}
function Ds(t) {
  return t.name === "IndexedDbTransactionError";
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Pl {
  constructor(e, n) {
    ((this.previousValue = e),
      n &&
        ((n.sequenceNumberHandler = (r) => this.ae(r)),
        (this.ue = (r) => n.writeSequenceNumber(r))));
  }
  ae(e) {
    return (
      (this.previousValue = Math.max(e, this.previousValue)),
      this.previousValue
    );
  }
  next() {
    const e = ++this.previousValue;
    return (this.ue && this.ue(e), e);
  }
}
Pl.ce = -1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Tf = -1;
function kl(t) {
  return t == null;
}
function Xa(t) {
  return t === 0 && 1 / t == -1 / 0;
}
function zR(t) {
  return (
    typeof t == "number" &&
    Number.isInteger(t) &&
    !Xa(t) &&
    t <= Number.MAX_SAFE_INTEGER &&
    t >= Number.MIN_SAFE_INTEGER
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const __ = "";
function BR(t) {
  let e = "";
  for (let n = 0; n < t.length; n++)
    (e.length > 0 && (e = xm(e)), (e = $R(t.get(n), e)));
  return xm(e);
}
function $R(t, e) {
  let n = e;
  const r = t.length;
  for (let s = 0; s < r; s++) {
    const i = t.charAt(s);
    switch (i) {
      case "\0":
        n += "";
        break;
      case __:
        n += "";
        break;
      default:
        n += i;
    }
  }
  return n;
}
function xm(t) {
  return t + __ + "";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Pm(t) {
  let e = 0;
  for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e++;
  return e;
}
function Dr(t, e) {
  for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
}
function E_(t) {
  for (const e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
  return !0;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ee {
  constructor(e, n) {
    ((this.comparator = e), (this.root = n || Be.EMPTY));
  }
  insert(e, n) {
    return new Ee(
      this.comparator,
      this.root
        .insert(e, n, this.comparator)
        .copy(null, null, Be.BLACK, null, null),
    );
  }
  remove(e) {
    return new Ee(
      this.comparator,
      this.root
        .remove(e, this.comparator)
        .copy(null, null, Be.BLACK, null, null),
    );
  }
  get(e) {
    let n = this.root;
    for (; !n.isEmpty(); ) {
      const r = this.comparator(e, n.key);
      if (r === 0) return n.value;
      r < 0 ? (n = n.left) : r > 0 && (n = n.right);
    }
    return null;
  }
  indexOf(e) {
    let n = 0,
      r = this.root;
    for (; !r.isEmpty(); ) {
      const s = this.comparator(e, r.key);
      if (s === 0) return n + r.left.size;
      s < 0 ? (r = r.left) : ((n += r.left.size + 1), (r = r.right));
    }
    return -1;
  }
  isEmpty() {
    return this.root.isEmpty();
  }
  get size() {
    return this.root.size;
  }
  minKey() {
    return this.root.minKey();
  }
  maxKey() {
    return this.root.maxKey();
  }
  inorderTraversal(e) {
    return this.root.inorderTraversal(e);
  }
  forEach(e) {
    this.inorderTraversal((n, r) => (e(n, r), !1));
  }
  toString() {
    const e = [];
    return (
      this.inorderTraversal((n, r) => (e.push(`${n}:${r}`), !1)),
      `{${e.join(", ")}}`
    );
  }
  reverseTraversal(e) {
    return this.root.reverseTraversal(e);
  }
  getIterator() {
    return new Yo(this.root, null, this.comparator, !1);
  }
  getIteratorFrom(e) {
    return new Yo(this.root, e, this.comparator, !1);
  }
  getReverseIterator() {
    return new Yo(this.root, null, this.comparator, !0);
  }
  getReverseIteratorFrom(e) {
    return new Yo(this.root, e, this.comparator, !0);
  }
}
class Yo {
  constructor(e, n, r, s) {
    ((this.isReverse = s), (this.nodeStack = []));
    let i = 1;
    for (; !e.isEmpty(); )
      if (((i = n ? r(e.key, n) : 1), n && s && (i *= -1), i < 0))
        e = this.isReverse ? e.left : e.right;
      else {
        if (i === 0) {
          this.nodeStack.push(e);
          break;
        }
        (this.nodeStack.push(e), (e = this.isReverse ? e.right : e.left));
      }
  }
  getNext() {
    let e = this.nodeStack.pop();
    const n = { key: e.key, value: e.value };
    if (this.isReverse)
      for (e = e.left; !e.isEmpty(); ) (this.nodeStack.push(e), (e = e.right));
    else
      for (e = e.right; !e.isEmpty(); ) (this.nodeStack.push(e), (e = e.left));
    return n;
  }
  hasNext() {
    return this.nodeStack.length > 0;
  }
  peek() {
    if (this.nodeStack.length === 0) return null;
    const e = this.nodeStack[this.nodeStack.length - 1];
    return { key: e.key, value: e.value };
  }
}
class Be {
  constructor(e, n, r, s, i) {
    ((this.key = e),
      (this.value = n),
      (this.color = r ?? Be.RED),
      (this.left = s ?? Be.EMPTY),
      (this.right = i ?? Be.EMPTY),
      (this.size = this.left.size + 1 + this.right.size));
  }
  copy(e, n, r, s, i) {
    return new Be(
      e ?? this.key,
      n ?? this.value,
      r ?? this.color,
      s ?? this.left,
      i ?? this.right,
    );
  }
  isEmpty() {
    return !1;
  }
  inorderTraversal(e) {
    return (
      this.left.inorderTraversal(e) ||
      e(this.key, this.value) ||
      this.right.inorderTraversal(e)
    );
  }
  reverseTraversal(e) {
    return (
      this.right.reverseTraversal(e) ||
      e(this.key, this.value) ||
      this.left.reverseTraversal(e)
    );
  }
  min() {
    return this.left.isEmpty() ? this : this.left.min();
  }
  minKey() {
    return this.min().key;
  }
  maxKey() {
    return this.right.isEmpty() ? this.key : this.right.maxKey();
  }
  insert(e, n, r) {
    let s = this;
    const i = r(e, s.key);
    return (
      (s =
        i < 0
          ? s.copy(null, null, null, s.left.insert(e, n, r), null)
          : i === 0
            ? s.copy(null, n, null, null, null)
            : s.copy(null, null, null, null, s.right.insert(e, n, r))),
      s.fixUp()
    );
  }
  removeMin() {
    if (this.left.isEmpty()) return Be.EMPTY;
    let e = this;
    return (
      e.left.isRed() || e.left.left.isRed() || (e = e.moveRedLeft()),
      (e = e.copy(null, null, null, e.left.removeMin(), null)),
      e.fixUp()
    );
  }
  remove(e, n) {
    let r,
      s = this;
    if (n(e, s.key) < 0)
      (s.left.isEmpty() ||
        s.left.isRed() ||
        s.left.left.isRed() ||
        (s = s.moveRedLeft()),
        (s = s.copy(null, null, null, s.left.remove(e, n), null)));
    else {
      if (
        (s.left.isRed() && (s = s.rotateRight()),
        s.right.isEmpty() ||
          s.right.isRed() ||
          s.right.left.isRed() ||
          (s = s.moveRedRight()),
        n(e, s.key) === 0)
      ) {
        if (s.right.isEmpty()) return Be.EMPTY;
        ((r = s.right.min()),
          (s = s.copy(r.key, r.value, null, null, s.right.removeMin())));
      }
      s = s.copy(null, null, null, null, s.right.remove(e, n));
    }
    return s.fixUp();
  }
  isRed() {
    return this.color;
  }
  fixUp() {
    let e = this;
    return (
      e.right.isRed() && !e.left.isRed() && (e = e.rotateLeft()),
      e.left.isRed() && e.left.left.isRed() && (e = e.rotateRight()),
      e.left.isRed() && e.right.isRed() && (e = e.colorFlip()),
      e
    );
  }
  moveRedLeft() {
    let e = this.colorFlip();
    return (
      e.right.left.isRed() &&
        ((e = e.copy(null, null, null, null, e.right.rotateRight())),
        (e = e.rotateLeft()),
        (e = e.colorFlip())),
      e
    );
  }
  moveRedRight() {
    let e = this.colorFlip();
    return (
      e.left.left.isRed() && ((e = e.rotateRight()), (e = e.colorFlip())),
      e
    );
  }
  rotateLeft() {
    const e = this.copy(null, null, Be.RED, null, this.right.left);
    return this.right.copy(null, null, this.color, e, null);
  }
  rotateRight() {
    const e = this.copy(null, null, Be.RED, this.left.right, null);
    return this.left.copy(null, null, this.color, null, e);
  }
  colorFlip() {
    const e = this.left.copy(null, null, !this.left.color, null, null),
      n = this.right.copy(null, null, !this.right.color, null, null);
    return this.copy(null, null, !this.color, e, n);
  }
  checkMaxDepth() {
    const e = this.check();
    return Math.pow(2, e) <= this.size + 1;
  }
  check() {
    if (this.isRed() && this.left.isRed())
      throw q(43730, { key: this.key, value: this.value });
    if (this.right.isRed())
      throw q(14113, { key: this.key, value: this.value });
    const e = this.left.check();
    if (e !== this.right.check()) throw q(27949);
    return e + (this.isRed() ? 0 : 1);
  }
}
((Be.EMPTY = null), (Be.RED = !0), (Be.BLACK = !1));
Be.EMPTY = new (class {
  constructor() {
    this.size = 0;
  }
  get key() {
    throw q(57766);
  }
  get value() {
    throw q(16141);
  }
  get color() {
    throw q(16727);
  }
  get left() {
    throw q(29726);
  }
  get right() {
    throw q(36894);
  }
  copy(e, n, r, s, i) {
    return this;
  }
  insert(e, n, r) {
    return new Be(e, n);
  }
  remove(e, n) {
    return this;
  }
  isEmpty() {
    return !0;
  }
  inorderTraversal(e) {
    return !1;
  }
  reverseTraversal(e) {
    return !1;
  }
  minKey() {
    return null;
  }
  maxKey() {
    return null;
  }
  isRed() {
    return !1;
  }
  checkMaxDepth() {
    return !0;
  }
  check() {
    return 0;
  }
})();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Me {
  constructor(e) {
    ((this.comparator = e), (this.data = new Ee(this.comparator)));
  }
  has(e) {
    return this.data.get(e) !== null;
  }
  first() {
    return this.data.minKey();
  }
  last() {
    return this.data.maxKey();
  }
  get size() {
    return this.data.size;
  }
  indexOf(e) {
    return this.data.indexOf(e);
  }
  forEach(e) {
    this.data.inorderTraversal((n, r) => (e(n), !1));
  }
  forEachInRange(e, n) {
    const r = this.data.getIteratorFrom(e[0]);
    for (; r.hasNext(); ) {
      const s = r.getNext();
      if (this.comparator(s.key, e[1]) >= 0) return;
      n(s.key);
    }
  }
  forEachWhile(e, n) {
    let r;
    for (
      r = n !== void 0 ? this.data.getIteratorFrom(n) : this.data.getIterator();
      r.hasNext();
    )
      if (!e(r.getNext().key)) return;
  }
  firstAfterOrEqual(e) {
    const n = this.data.getIteratorFrom(e);
    return n.hasNext() ? n.getNext().key : null;
  }
  getIterator() {
    return new km(this.data.getIterator());
  }
  getIteratorFrom(e) {
    return new km(this.data.getIteratorFrom(e));
  }
  add(e) {
    return this.copy(this.data.remove(e).insert(e, !0));
  }
  delete(e) {
    return this.has(e) ? this.copy(this.data.remove(e)) : this;
  }
  isEmpty() {
    return this.data.isEmpty();
  }
  unionWith(e) {
    let n = this;
    return (
      n.size < e.size && ((n = e), (e = this)),
      e.forEach((r) => {
        n = n.add(r);
      }),
      n
    );
  }
  isEqual(e) {
    if (!(e instanceof Me) || this.size !== e.size) return !1;
    const n = this.data.getIterator(),
      r = e.data.getIterator();
    for (; n.hasNext(); ) {
      const s = n.getNext().key,
        i = r.getNext().key;
      if (this.comparator(s, i) !== 0) return !1;
    }
    return !0;
  }
  toArray() {
    const e = [];
    return (
      this.forEach((n) => {
        e.push(n);
      }),
      e
    );
  }
  toString() {
    const e = [];
    return (this.forEach((n) => e.push(n)), "SortedSet(" + e.toString() + ")");
  }
  copy(e) {
    const n = new Me(this.comparator);
    return ((n.data = e), n);
  }
}
class km {
  constructor(e) {
    this.iter = e;
  }
  getNext() {
    return this.iter.getNext().key;
  }
  hasNext() {
    return this.iter.hasNext();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Mt {
  constructor(e) {
    ((this.fields = e), e.sort($e.comparator));
  }
  static empty() {
    return new Mt([]);
  }
  unionWith(e) {
    let n = new Me($e.comparator);
    for (const r of this.fields) n = n.add(r);
    for (const r of e) n = n.add(r);
    return new Mt(n.toArray());
  }
  covers(e) {
    for (const n of this.fields) if (n.isPrefixOf(e)) return !0;
    return !1;
  }
  isEqual(e) {
    return Es(this.fields, e.fields, (n, r) => n.isEqual(r));
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class w_ extends Error {
  constructor() {
    (super(...arguments), (this.name = "Base64DecodeError"));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class We {
  constructor(e) {
    this.binaryString = e;
  }
  static fromBase64String(e) {
    const n = (function (s) {
      try {
        return atob(s);
      } catch (i) {
        throw typeof DOMException < "u" && i instanceof DOMException
          ? new w_("Invalid base64 string: " + i)
          : i;
      }
    })(e);
    return new We(n);
  }
  static fromUint8Array(e) {
    const n = (function (s) {
      let i = "";
      for (let o = 0; o < s.length; ++o) i += String.fromCharCode(s[o]);
      return i;
    })(e);
    return new We(n);
  }
  [Symbol.iterator]() {
    let e = 0;
    return {
      next: () =>
        e < this.binaryString.length
          ? { value: this.binaryString.charCodeAt(e++), done: !1 }
          : { value: void 0, done: !0 },
    };
  }
  toBase64() {
    return (function (n) {
      return btoa(n);
    })(this.binaryString);
  }
  toUint8Array() {
    return (function (n) {
      const r = new Uint8Array(n.length);
      for (let s = 0; s < n.length; s++) r[s] = n.charCodeAt(s);
      return r;
    })(this.binaryString);
  }
  approximateByteSize() {
    return 2 * this.binaryString.length;
  }
  compareTo(e) {
    return ee(this.binaryString, e.binaryString);
  }
  isEqual(e) {
    return this.binaryString === e.binaryString;
  }
}
We.EMPTY_BYTE_STRING = new We("");
const GR = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
function Xn(t) {
  if ((ie(!!t, 39018), typeof t == "string")) {
    let e = 0;
    const n = GR.exec(t);
    if ((ie(!!n, 46558, { timestamp: t }), n[1])) {
      let s = n[1];
      ((s = (s + "000000000").substr(0, 9)), (e = Number(s)));
    }
    const r = new Date(t);
    return { seconds: Math.floor(r.getTime() / 1e3), nanos: e };
  }
  return { seconds: Ie(t.seconds), nanos: Ie(t.nanos) };
}
function Ie(t) {
  return typeof t == "number" ? t : typeof t == "string" ? Number(t) : 0;
}
function Zn(t) {
  return typeof t == "string" ? We.fromBase64String(t) : We.fromUint8Array(t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const T_ = "server_timestamp",
  S_ = "__type__",
  I_ = "__previous_value__",
  R_ = "__local_write_time__";
function Sf(t) {
  var n, r;
  return (
    ((r = (((n = t == null ? void 0 : t.mapValue) == null
      ? void 0
      : n.fields) || {})[S_]) == null
      ? void 0
      : r.stringValue) === T_
  );
}
function Nl(t) {
  const e = t.mapValue.fields[I_];
  return Sf(e) ? Nl(e) : e;
}
function Zi(t) {
  const e = Xn(t.mapValue.fields[R_].timestampValue);
  return new le(e.seconds, e.nanos);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class HR {
  constructor(e, n, r, s, i, o, l, u, h, d, p) {
    ((this.databaseId = e),
      (this.appId = n),
      (this.persistenceKey = r),
      (this.host = s),
      (this.ssl = i),
      (this.forceLongPolling = o),
      (this.autoDetectLongPolling = l),
      (this.longPollingOptions = u),
      (this.useFetchStreams = h),
      (this.isUsingEmulator = d),
      (this.apiKey = p));
  }
}
const Za = "(default)";
class eo {
  constructor(e, n) {
    ((this.projectId = e), (this.database = n || Za));
  }
  static empty() {
    return new eo("", "");
  }
  get isDefaultDatabase() {
    return this.database === Za;
  }
  isEqual(e) {
    return (
      e instanceof eo &&
      e.projectId === this.projectId &&
      e.database === this.database
    );
  }
}
function WR(t, e) {
  if (!Object.prototype.hasOwnProperty.apply(t.options, ["projectId"]))
    throw new H(
      F.INVALID_ARGUMENT,
      '"projectId" not provided in firebase.initializeApp.',
    );
  return new eo(t.options.projectId, e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const A_ = "__type__",
  qR = "__max__",
  Jo = { mapValue: {} },
  C_ = "__vector__",
  el = "value";
function er(t) {
  return "nullValue" in t
    ? 0
    : "booleanValue" in t
      ? 1
      : "integerValue" in t || "doubleValue" in t
        ? 2
        : "timestampValue" in t
          ? 3
          : "stringValue" in t
            ? 5
            : "bytesValue" in t
              ? 6
              : "referenceValue" in t
                ? 7
                : "geoPointValue" in t
                  ? 8
                  : "arrayValue" in t
                    ? 9
                    : "mapValue" in t
                      ? Sf(t)
                        ? 4
                        : QR(t)
                          ? 9007199254740991
                          : KR(t)
                            ? 10
                            : 11
                      : q(28295, { value: t });
}
function en(t, e) {
  if (t === e) return !0;
  const n = er(t);
  if (n !== er(e)) return !1;
  switch (n) {
    case 0:
    case 9007199254740991:
      return !0;
    case 1:
      return t.booleanValue === e.booleanValue;
    case 4:
      return Zi(t).isEqual(Zi(e));
    case 3:
      return (function (s, i) {
        if (
          typeof s.timestampValue == "string" &&
          typeof i.timestampValue == "string" &&
          s.timestampValue.length === i.timestampValue.length
        )
          return s.timestampValue === i.timestampValue;
        const o = Xn(s.timestampValue),
          l = Xn(i.timestampValue);
        return o.seconds === l.seconds && o.nanos === l.nanos;
      })(t, e);
    case 5:
      return t.stringValue === e.stringValue;
    case 6:
      return (function (s, i) {
        return Zn(s.bytesValue).isEqual(Zn(i.bytesValue));
      })(t, e);
    case 7:
      return t.referenceValue === e.referenceValue;
    case 8:
      return (function (s, i) {
        return (
          Ie(s.geoPointValue.latitude) === Ie(i.geoPointValue.latitude) &&
          Ie(s.geoPointValue.longitude) === Ie(i.geoPointValue.longitude)
        );
      })(t, e);
    case 2:
      return (function (s, i) {
        if ("integerValue" in s && "integerValue" in i)
          return Ie(s.integerValue) === Ie(i.integerValue);
        if ("doubleValue" in s && "doubleValue" in i) {
          const o = Ie(s.doubleValue),
            l = Ie(i.doubleValue);
          return o === l ? Xa(o) === Xa(l) : isNaN(o) && isNaN(l);
        }
        return !1;
      })(t, e);
    case 9:
      return Es(t.arrayValue.values || [], e.arrayValue.values || [], en);
    case 10:
    case 11:
      return (function (s, i) {
        const o = s.mapValue.fields || {},
          l = i.mapValue.fields || {};
        if (Pm(o) !== Pm(l)) return !1;
        for (const u in o)
          if (o.hasOwnProperty(u) && (l[u] === void 0 || !en(o[u], l[u])))
            return !1;
        return !0;
      })(t, e);
    default:
      return q(52216, { left: t });
  }
}
function to(t, e) {
  return (t.values || []).find((n) => en(n, e)) !== void 0;
}
function ws(t, e) {
  if (t === e) return 0;
  const n = er(t),
    r = er(e);
  if (n !== r) return ee(n, r);
  switch (n) {
    case 0:
    case 9007199254740991:
      return 0;
    case 1:
      return ee(t.booleanValue, e.booleanValue);
    case 2:
      return (function (i, o) {
        const l = Ie(i.integerValue || i.doubleValue),
          u = Ie(o.integerValue || o.doubleValue);
        return l < u
          ? -1
          : l > u
            ? 1
            : l === u
              ? 0
              : isNaN(l)
                ? isNaN(u)
                  ? 0
                  : -1
                : 1;
      })(t, e);
    case 3:
      return Nm(t.timestampValue, e.timestampValue);
    case 4:
      return Nm(Zi(t), Zi(e));
    case 5:
      return Xc(t.stringValue, e.stringValue);
    case 6:
      return (function (i, o) {
        const l = Zn(i),
          u = Zn(o);
        return l.compareTo(u);
      })(t.bytesValue, e.bytesValue);
    case 7:
      return (function (i, o) {
        const l = i.split("/"),
          u = o.split("/");
        for (let h = 0; h < l.length && h < u.length; h++) {
          const d = ee(l[h], u[h]);
          if (d !== 0) return d;
        }
        return ee(l.length, u.length);
      })(t.referenceValue, e.referenceValue);
    case 8:
      return (function (i, o) {
        const l = ee(Ie(i.latitude), Ie(o.latitude));
        return l !== 0 ? l : ee(Ie(i.longitude), Ie(o.longitude));
      })(t.geoPointValue, e.geoPointValue);
    case 9:
      return Vm(t.arrayValue, e.arrayValue);
    case 10:
      return (function (i, o) {
        var m, T, x, P;
        const l = i.fields || {},
          u = o.fields || {},
          h = (m = l[el]) == null ? void 0 : m.arrayValue,
          d = (T = u[el]) == null ? void 0 : T.arrayValue,
          p = ee(
            ((x = h == null ? void 0 : h.values) == null ? void 0 : x.length) ||
              0,
            ((P = d == null ? void 0 : d.values) == null ? void 0 : P.length) ||
              0,
          );
        return p !== 0 ? p : Vm(h, d);
      })(t.mapValue, e.mapValue);
    case 11:
      return (function (i, o) {
        if (i === Jo.mapValue && o === Jo.mapValue) return 0;
        if (i === Jo.mapValue) return 1;
        if (o === Jo.mapValue) return -1;
        const l = i.fields || {},
          u = Object.keys(l),
          h = o.fields || {},
          d = Object.keys(h);
        (u.sort(), d.sort());
        for (let p = 0; p < u.length && p < d.length; ++p) {
          const m = Xc(u[p], d[p]);
          if (m !== 0) return m;
          const T = ws(l[u[p]], h[d[p]]);
          if (T !== 0) return T;
        }
        return ee(u.length, d.length);
      })(t.mapValue, e.mapValue);
    default:
      throw q(23264, { he: n });
  }
}
function Nm(t, e) {
  if (typeof t == "string" && typeof e == "string" && t.length === e.length)
    return ee(t, e);
  const n = Xn(t),
    r = Xn(e),
    s = ee(n.seconds, r.seconds);
  return s !== 0 ? s : ee(n.nanos, r.nanos);
}
function Vm(t, e) {
  const n = t.values || [],
    r = e.values || [];
  for (let s = 0; s < n.length && s < r.length; ++s) {
    const i = ws(n[s], r[s]);
    if (i) return i;
  }
  return ee(n.length, r.length);
}
function Ts(t) {
  return Zc(t);
}
function Zc(t) {
  return "nullValue" in t
    ? "null"
    : "booleanValue" in t
      ? "" + t.booleanValue
      : "integerValue" in t
        ? "" + t.integerValue
        : "doubleValue" in t
          ? "" + t.doubleValue
          : "timestampValue" in t
            ? (function (n) {
                const r = Xn(n);
                return `time(${r.seconds},${r.nanos})`;
              })(t.timestampValue)
            : "stringValue" in t
              ? t.stringValue
              : "bytesValue" in t
                ? (function (n) {
                    return Zn(n).toBase64();
                  })(t.bytesValue)
                : "referenceValue" in t
                  ? (function (n) {
                      return W.fromName(n).toString();
                    })(t.referenceValue)
                  : "geoPointValue" in t
                    ? (function (n) {
                        return `geo(${n.latitude},${n.longitude})`;
                      })(t.geoPointValue)
                    : "arrayValue" in t
                      ? (function (n) {
                          let r = "[",
                            s = !0;
                          for (const i of n.values || [])
                            (s ? (s = !1) : (r += ","), (r += Zc(i)));
                          return r + "]";
                        })(t.arrayValue)
                      : "mapValue" in t
                        ? (function (n) {
                            const r = Object.keys(n.fields || {}).sort();
                            let s = "{",
                              i = !0;
                            for (const o of r)
                              (i ? (i = !1) : (s += ","),
                                (s += `${o}:${Zc(n.fields[o])}`));
                            return s + "}";
                          })(t.mapValue)
                        : q(61005, { value: t });
}
function ga(t) {
  switch (er(t)) {
    case 0:
    case 1:
      return 4;
    case 2:
      return 8;
    case 3:
    case 8:
      return 16;
    case 4:
      const e = Nl(t);
      return e ? 16 + ga(e) : 16;
    case 5:
      return 2 * t.stringValue.length;
    case 6:
      return Zn(t.bytesValue).approximateByteSize();
    case 7:
      return t.referenceValue.length;
    case 9:
      return (function (r) {
        return (r.values || []).reduce((s, i) => s + ga(i), 0);
      })(t.arrayValue);
    case 10:
    case 11:
      return (function (r) {
        let s = 0;
        return (
          Dr(r.fields, (i, o) => {
            s += i.length + ga(o);
          }),
          s
        );
      })(t.mapValue);
    default:
      throw q(13486, { value: t });
  }
}
function eh(t) {
  return !!t && "integerValue" in t;
}
function If(t) {
  return !!t && "arrayValue" in t;
}
function Dm(t) {
  return !!t && "nullValue" in t;
}
function Lm(t) {
  return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue));
}
function ya(t) {
  return !!t && "mapValue" in t;
}
function KR(t) {
  var n, r;
  return (
    ((r = (((n = t == null ? void 0 : t.mapValue) == null
      ? void 0
      : n.fields) || {})[A_]) == null
      ? void 0
      : r.stringValue) === C_
  );
}
function Ci(t) {
  if (t.geoPointValue) return { geoPointValue: { ...t.geoPointValue } };
  if (t.timestampValue && typeof t.timestampValue == "object")
    return { timestampValue: { ...t.timestampValue } };
  if (t.mapValue) {
    const e = { mapValue: { fields: {} } };
    return (Dr(t.mapValue.fields, (n, r) => (e.mapValue.fields[n] = Ci(r))), e);
  }
  if (t.arrayValue) {
    const e = { arrayValue: { values: [] } };
    for (let n = 0; n < (t.arrayValue.values || []).length; ++n)
      e.arrayValue.values[n] = Ci(t.arrayValue.values[n]);
    return e;
  }
  return { ...t };
}
function QR(t) {
  return (((t.mapValue || {}).fields || {}).__type__ || {}).stringValue === qR;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class St {
  constructor(e) {
    this.value = e;
  }
  static empty() {
    return new St({ mapValue: {} });
  }
  field(e) {
    if (e.isEmpty()) return this.value;
    {
      let n = this.value;
      for (let r = 0; r < e.length - 1; ++r)
        if (((n = (n.mapValue.fields || {})[e.get(r)]), !ya(n))) return null;
      return ((n = (n.mapValue.fields || {})[e.lastSegment()]), n || null);
    }
  }
  set(e, n) {
    this.getFieldsMap(e.popLast())[e.lastSegment()] = Ci(n);
  }
  setAll(e) {
    let n = $e.emptyPath(),
      r = {},
      s = [];
    e.forEach((o, l) => {
      if (!n.isImmediateParentOf(l)) {
        const u = this.getFieldsMap(n);
        (this.applyChanges(u, r, s), (r = {}), (s = []), (n = l.popLast()));
      }
      o ? (r[l.lastSegment()] = Ci(o)) : s.push(l.lastSegment());
    });
    const i = this.getFieldsMap(n);
    this.applyChanges(i, r, s);
  }
  delete(e) {
    const n = this.field(e.popLast());
    ya(n) && n.mapValue.fields && delete n.mapValue.fields[e.lastSegment()];
  }
  isEqual(e) {
    return en(this.value, e.value);
  }
  getFieldsMap(e) {
    let n = this.value;
    n.mapValue.fields || (n.mapValue = { fields: {} });
    for (let r = 0; r < e.length; ++r) {
      let s = n.mapValue.fields[e.get(r)];
      ((ya(s) && s.mapValue.fields) ||
        ((s = { mapValue: { fields: {} } }), (n.mapValue.fields[e.get(r)] = s)),
        (n = s));
    }
    return n.mapValue.fields;
  }
  applyChanges(e, n, r) {
    Dr(n, (s, i) => (e[s] = i));
    for (const s of r) delete e[s];
  }
  clone() {
    return new St(Ci(this.value));
  }
}
function x_(t) {
  const e = [];
  return (
    Dr(t.fields, (n, r) => {
      const s = new $e([n]);
      if (ya(r)) {
        const i = x_(r.mapValue).fields;
        if (i.length === 0) e.push(s);
        else for (const o of i) e.push(s.child(o));
      } else e.push(s);
    }),
    new Mt(e)
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ze {
  constructor(e, n, r, s, i, o, l) {
    ((this.key = e),
      (this.documentType = n),
      (this.version = r),
      (this.readTime = s),
      (this.createTime = i),
      (this.data = o),
      (this.documentState = l));
  }
  static newInvalidDocument(e) {
    return new Ze(e, 0, Q.min(), Q.min(), Q.min(), St.empty(), 0);
  }
  static newFoundDocument(e, n, r, s) {
    return new Ze(e, 1, n, Q.min(), r, s, 0);
  }
  static newNoDocument(e, n) {
    return new Ze(e, 2, n, Q.min(), Q.min(), St.empty(), 0);
  }
  static newUnknownDocument(e, n) {
    return new Ze(e, 3, n, Q.min(), Q.min(), St.empty(), 2);
  }
  convertToFoundDocument(e, n) {
    return (
      !this.createTime.isEqual(Q.min()) ||
        (this.documentType !== 2 && this.documentType !== 0) ||
        (this.createTime = e),
      (this.version = e),
      (this.documentType = 1),
      (this.data = n),
      (this.documentState = 0),
      this
    );
  }
  convertToNoDocument(e) {
    return (
      (this.version = e),
      (this.documentType = 2),
      (this.data = St.empty()),
      (this.documentState = 0),
      this
    );
  }
  convertToUnknownDocument(e) {
    return (
      (this.version = e),
      (this.documentType = 3),
      (this.data = St.empty()),
      (this.documentState = 2),
      this
    );
  }
  setHasCommittedMutations() {
    return ((this.documentState = 2), this);
  }
  setHasLocalMutations() {
    return ((this.documentState = 1), (this.version = Q.min()), this);
  }
  setReadTime(e) {
    return ((this.readTime = e), this);
  }
  get hasLocalMutations() {
    return this.documentState === 1;
  }
  get hasCommittedMutations() {
    return this.documentState === 2;
  }
  get hasPendingWrites() {
    return this.hasLocalMutations || this.hasCommittedMutations;
  }
  isValidDocument() {
    return this.documentType !== 0;
  }
  isFoundDocument() {
    return this.documentType === 1;
  }
  isNoDocument() {
    return this.documentType === 2;
  }
  isUnknownDocument() {
    return this.documentType === 3;
  }
  isEqual(e) {
    return (
      e instanceof Ze &&
      this.key.isEqual(e.key) &&
      this.version.isEqual(e.version) &&
      this.documentType === e.documentType &&
      this.documentState === e.documentState &&
      this.data.isEqual(e.data)
    );
  }
  mutableCopy() {
    return new Ze(
      this.key,
      this.documentType,
      this.version,
      this.readTime,
      this.createTime,
      this.data.clone(),
      this.documentState,
    );
  }
  toString() {
    return `Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`;
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tl {
  constructor(e, n) {
    ((this.position = e), (this.inclusive = n));
  }
}
function Mm(t, e, n) {
  let r = 0;
  for (let s = 0; s < t.position.length; s++) {
    const i = e[s],
      o = t.position[s];
    if (
      (i.field.isKeyField()
        ? (r = W.comparator(W.fromName(o.referenceValue), n.key))
        : (r = ws(o, n.data.field(i.field))),
      i.dir === "desc" && (r *= -1),
      r !== 0)
    )
      break;
  }
  return r;
}
function Om(t, e) {
  if (t === null) return e === null;
  if (
    e === null ||
    t.inclusive !== e.inclusive ||
    t.position.length !== e.position.length
  )
    return !1;
  for (let n = 0; n < t.position.length; n++)
    if (!en(t.position[n], e.position[n])) return !1;
  return !0;
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nl {
  constructor(e, n = "asc") {
    ((this.field = e), (this.dir = n));
  }
}
function YR(t, e) {
  return t.dir === e.dir && t.field.isEqual(e.field);
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class P_ {}
class Ve extends P_ {
  constructor(e, n, r) {
    (super(), (this.field = e), (this.op = n), (this.value = r));
  }
  static create(e, n, r) {
    return e.isKeyField()
      ? n === "in" || n === "not-in"
        ? this.createKeyFieldInFilter(e, n, r)
        : new XR(e, n, r)
      : n === "array-contains"
        ? new tA(e, r)
        : n === "in"
          ? new nA(e, r)
          : n === "not-in"
            ? new rA(e, r)
            : n === "array-contains-any"
              ? new sA(e, r)
              : new Ve(e, n, r);
  }
  static createKeyFieldInFilter(e, n, r) {
    return n === "in" ? new ZR(e, r) : new eA(e, r);
  }
  matches(e) {
    const n = e.data.field(this.field);
    return this.op === "!="
      ? n !== null &&
          n.nullValue === void 0 &&
          this.matchesComparison(ws(n, this.value))
      : n !== null &&
          er(this.value) === er(n) &&
          this.matchesComparison(ws(n, this.value));
  }
  matchesComparison(e) {
    switch (this.op) {
      case "<":
        return e < 0;
      case "<=":
        return e <= 0;
      case "==":
        return e === 0;
      case "!=":
        return e !== 0;
      case ">":
        return e > 0;
      case ">=":
        return e >= 0;
      default:
        return q(47266, { operator: this.op });
    }
  }
  isInequality() {
    return ["<", "<=", ">", ">=", "!=", "not-in"].indexOf(this.op) >= 0;
  }
  getFlattenedFilters() {
    return [this];
  }
  getFilters() {
    return [this];
  }
}
class tn extends P_ {
  constructor(e, n) {
    (super(), (this.filters = e), (this.op = n), (this.Pe = null));
  }
  static create(e, n) {
    return new tn(e, n);
  }
  matches(e) {
    return k_(this)
      ? this.filters.find((n) => !n.matches(e)) === void 0
      : this.filters.find((n) => n.matches(e)) !== void 0;
  }
  getFlattenedFilters() {
    return (
      this.Pe !== null ||
        (this.Pe = this.filters.reduce(
          (e, n) => e.concat(n.getFlattenedFilters()),
          [],
        )),
      this.Pe
    );
  }
  getFilters() {
    return Object.assign([], this.filters);
  }
}
function k_(t) {
  return t.op === "and";
}
function N_(t) {
  return JR(t) && k_(t);
}
function JR(t) {
  for (const e of t.filters) if (e instanceof tn) return !1;
  return !0;
}
function th(t) {
  if (t instanceof Ve)
    return t.field.canonicalString() + t.op.toString() + Ts(t.value);
  if (N_(t)) return t.filters.map((e) => th(e)).join(",");
  {
    const e = t.filters.map((n) => th(n)).join(",");
    return `${t.op}(${e})`;
  }
}
function V_(t, e) {
  return t instanceof Ve
    ? (function (r, s) {
        return (
          s instanceof Ve &&
          r.op === s.op &&
          r.field.isEqual(s.field) &&
          en(r.value, s.value)
        );
      })(t, e)
    : t instanceof tn
      ? (function (r, s) {
          return s instanceof tn &&
            r.op === s.op &&
            r.filters.length === s.filters.length
            ? r.filters.reduce((i, o, l) => i && V_(o, s.filters[l]), !0)
            : !1;
        })(t, e)
      : void q(19439);
}
function D_(t) {
  return t instanceof Ve
    ? (function (n) {
        return `${n.field.canonicalString()} ${n.op} ${Ts(n.value)}`;
      })(t)
    : t instanceof tn
      ? (function (n) {
          return (
            n.op.toString() + " {" + n.getFilters().map(D_).join(" ,") + "}"
          );
        })(t)
      : "Filter";
}
class XR extends Ve {
  constructor(e, n, r) {
    (super(e, n, r), (this.key = W.fromName(r.referenceValue)));
  }
  matches(e) {
    const n = W.comparator(e.key, this.key);
    return this.matchesComparison(n);
  }
}
class ZR extends Ve {
  constructor(e, n) {
    (super(e, "in", n), (this.keys = L_("in", n)));
  }
  matches(e) {
    return this.keys.some((n) => n.isEqual(e.key));
  }
}
class eA extends Ve {
  constructor(e, n) {
    (super(e, "not-in", n), (this.keys = L_("not-in", n)));
  }
  matches(e) {
    return !this.keys.some((n) => n.isEqual(e.key));
  }
}
function L_(t, e) {
  var n;
  return (((n = e.arrayValue) == null ? void 0 : n.values) || []).map((r) =>
    W.fromName(r.referenceValue),
  );
}
class tA extends Ve {
  constructor(e, n) {
    super(e, "array-contains", n);
  }
  matches(e) {
    const n = e.data.field(this.field);
    return If(n) && to(n.arrayValue, this.value);
  }
}
class nA extends Ve {
  constructor(e, n) {
    super(e, "in", n);
  }
  matches(e) {
    const n = e.data.field(this.field);
    return n !== null && to(this.value.arrayValue, n);
  }
}
class rA extends Ve {
  constructor(e, n) {
    super(e, "not-in", n);
  }
  matches(e) {
    if (to(this.value.arrayValue, { nullValue: "NULL_VALUE" })) return !1;
    const n = e.data.field(this.field);
    return (
      n !== null && n.nullValue === void 0 && !to(this.value.arrayValue, n)
    );
  }
}
class sA extends Ve {
  constructor(e, n) {
    super(e, "array-contains-any", n);
  }
  matches(e) {
    const n = e.data.field(this.field);
    return (
      !(!If(n) || !n.arrayValue.values) &&
      n.arrayValue.values.some((r) => to(this.value.arrayValue, r))
    );
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iA {
  constructor(e, n = null, r = [], s = [], i = null, o = null, l = null) {
    ((this.path = e),
      (this.collectionGroup = n),
      (this.orderBy = r),
      (this.filters = s),
      (this.limit = i),
      (this.startAt = o),
      (this.endAt = l),
      (this.Te = null));
  }
}
function Fm(t, e = null, n = [], r = [], s = null, i = null, o = null) {
  return new iA(t, e, n, r, s, i, o);
}
function Rf(t) {
  const e = Y(t);
  if (e.Te === null) {
    let n = e.path.canonicalString();
    (e.collectionGroup !== null && (n += "|cg:" + e.collectionGroup),
      (n += "|f:"),
      (n += e.filters.map((r) => th(r)).join(",")),
      (n += "|ob:"),
      (n += e.orderBy
        .map((r) =>
          (function (i) {
            return i.field.canonicalString() + i.dir;
          })(r),
        )
        .join(",")),
      kl(e.limit) || ((n += "|l:"), (n += e.limit)),
      e.startAt &&
        ((n += "|lb:"),
        (n += e.startAt.inclusive ? "b:" : "a:"),
        (n += e.startAt.position.map((r) => Ts(r)).join(","))),
      e.endAt &&
        ((n += "|ub:"),
        (n += e.endAt.inclusive ? "a:" : "b:"),
        (n += e.endAt.position.map((r) => Ts(r)).join(","))),
      (e.Te = n));
  }
  return e.Te;
}
function Af(t, e) {
  if (t.limit !== e.limit || t.orderBy.length !== e.orderBy.length) return !1;
  for (let n = 0; n < t.orderBy.length; n++)
    if (!YR(t.orderBy[n], e.orderBy[n])) return !1;
  if (t.filters.length !== e.filters.length) return !1;
  for (let n = 0; n < t.filters.length; n++)
    if (!V_(t.filters[n], e.filters[n])) return !1;
  return (
    t.collectionGroup === e.collectionGroup &&
    !!t.path.isEqual(e.path) &&
    !!Om(t.startAt, e.startAt) &&
    Om(t.endAt, e.endAt)
  );
}
function nh(t) {
  return (
    W.isDocumentKey(t.path) &&
    t.collectionGroup === null &&
    t.filters.length === 0
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Vl {
  constructor(
    e,
    n = null,
    r = [],
    s = [],
    i = null,
    o = "F",
    l = null,
    u = null,
  ) {
    ((this.path = e),
      (this.collectionGroup = n),
      (this.explicitOrderBy = r),
      (this.filters = s),
      (this.limit = i),
      (this.limitType = o),
      (this.startAt = l),
      (this.endAt = u),
      (this.Ee = null),
      (this.Ie = null),
      (this.Re = null),
      this.startAt,
      this.endAt);
  }
}
function oA(t, e, n, r, s, i, o, l) {
  return new Vl(t, e, n, r, s, i, o, l);
}
function Cf(t) {
  return new Vl(t);
}
function jm(t) {
  return (
    t.filters.length === 0 &&
    t.limit === null &&
    t.startAt == null &&
    t.endAt == null &&
    (t.explicitOrderBy.length === 0 ||
      (t.explicitOrderBy.length === 1 &&
        t.explicitOrderBy[0].field.isKeyField()))
  );
}
function aA(t) {
  return (
    W.isDocumentKey(t.path) &&
    t.collectionGroup === null &&
    t.filters.length === 0
  );
}
function lA(t) {
  return t.collectionGroup !== null;
}
function xi(t) {
  const e = Y(t);
  if (e.Ee === null) {
    e.Ee = [];
    const n = new Set();
    for (const i of e.explicitOrderBy)
      (e.Ee.push(i), n.add(i.field.canonicalString()));
    const r =
      e.explicitOrderBy.length > 0
        ? e.explicitOrderBy[e.explicitOrderBy.length - 1].dir
        : "asc";
    ((function (o) {
      let l = new Me($e.comparator);
      return (
        o.filters.forEach((u) => {
          u.getFlattenedFilters().forEach((h) => {
            h.isInequality() && (l = l.add(h.field));
          });
        }),
        l
      );
    })(e).forEach((i) => {
      n.has(i.canonicalString()) || i.isKeyField() || e.Ee.push(new nl(i, r));
    }),
      n.has($e.keyField().canonicalString()) ||
        e.Ee.push(new nl($e.keyField(), r)));
  }
  return e.Ee;
}
function Qt(t) {
  const e = Y(t);
  return (e.Ie || (e.Ie = uA(e, xi(t))), e.Ie);
}
function uA(t, e) {
  if (t.limitType === "F")
    return Fm(
      t.path,
      t.collectionGroup,
      e,
      t.filters,
      t.limit,
      t.startAt,
      t.endAt,
    );
  {
    e = e.map((s) => {
      const i = s.dir === "desc" ? "asc" : "desc";
      return new nl(s.field, i);
    });
    const n = t.endAt ? new tl(t.endAt.position, t.endAt.inclusive) : null,
      r = t.startAt ? new tl(t.startAt.position, t.startAt.inclusive) : null;
    return Fm(t.path, t.collectionGroup, e, t.filters, t.limit, n, r);
  }
}
function rh(t, e, n) {
  return new Vl(
    t.path,
    t.collectionGroup,
    t.explicitOrderBy.slice(),
    t.filters.slice(),
    e,
    n,
    t.startAt,
    t.endAt,
  );
}
function Dl(t, e) {
  return Af(Qt(t), Qt(e)) && t.limitType === e.limitType;
}
function M_(t) {
  return `${Rf(Qt(t))}|lt:${t.limitType}`;
}
function Br(t) {
  return `Query(target=${(function (n) {
    let r = n.path.canonicalString();
    return (
      n.collectionGroup !== null &&
        (r += " collectionGroup=" + n.collectionGroup),
      n.filters.length > 0 &&
        (r += `, filters: [${n.filters.map((s) => D_(s)).join(", ")}]`),
      kl(n.limit) || (r += ", limit: " + n.limit),
      n.orderBy.length > 0 &&
        (r += `, orderBy: [${n.orderBy
          .map((s) =>
            (function (o) {
              return `${o.field.canonicalString()} (${o.dir})`;
            })(s),
          )
          .join(", ")}]`),
      n.startAt &&
        ((r += ", startAt: "),
        (r += n.startAt.inclusive ? "b:" : "a:"),
        (r += n.startAt.position.map((s) => Ts(s)).join(","))),
      n.endAt &&
        ((r += ", endAt: "),
        (r += n.endAt.inclusive ? "a:" : "b:"),
        (r += n.endAt.position.map((s) => Ts(s)).join(","))),
      `Target(${r})`
    );
  })(Qt(t))}; limitType=${t.limitType})`;
}
function Ll(t, e) {
  return (
    e.isFoundDocument() &&
    (function (r, s) {
      const i = s.key.path;
      return r.collectionGroup !== null
        ? s.key.hasCollectionId(r.collectionGroup) && r.path.isPrefixOf(i)
        : W.isDocumentKey(r.path)
          ? r.path.isEqual(i)
          : r.path.isImmediateParentOf(i);
    })(t, e) &&
    (function (r, s) {
      for (const i of xi(r))
        if (!i.field.isKeyField() && s.data.field(i.field) === null) return !1;
      return !0;
    })(t, e) &&
    (function (r, s) {
      for (const i of r.filters) if (!i.matches(s)) return !1;
      return !0;
    })(t, e) &&
    (function (r, s) {
      return !(
        (r.startAt &&
          !(function (o, l, u) {
            const h = Mm(o, l, u);
            return o.inclusive ? h <= 0 : h < 0;
          })(r.startAt, xi(r), s)) ||
        (r.endAt &&
          !(function (o, l, u) {
            const h = Mm(o, l, u);
            return o.inclusive ? h >= 0 : h > 0;
          })(r.endAt, xi(r), s))
      );
    })(t, e)
  );
}
function cA(t) {
  return (
    t.collectionGroup ||
    (t.path.length % 2 == 1
      ? t.path.lastSegment()
      : t.path.get(t.path.length - 2))
  );
}
function O_(t) {
  return (e, n) => {
    let r = !1;
    for (const s of xi(t)) {
      const i = hA(s, e, n);
      if (i !== 0) return i;
      r = r || s.field.isKeyField();
    }
    return 0;
  };
}
function hA(t, e, n) {
  const r = t.field.isKeyField()
    ? W.comparator(e.key, n.key)
    : (function (i, o, l) {
        const u = o.data.field(i),
          h = l.data.field(i);
        return u !== null && h !== null ? ws(u, h) : q(42886);
      })(t.field, e, n);
  switch (t.dir) {
    case "asc":
      return r;
    case "desc":
      return -1 * r;
    default:
      return q(19790, { direction: t.dir });
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Lr {
  constructor(e, n) {
    ((this.mapKeyFn = e),
      (this.equalsFn = n),
      (this.inner = {}),
      (this.innerSize = 0));
  }
  get(e) {
    const n = this.mapKeyFn(e),
      r = this.inner[n];
    if (r !== void 0) {
      for (const [s, i] of r) if (this.equalsFn(s, e)) return i;
    }
  }
  has(e) {
    return this.get(e) !== void 0;
  }
  set(e, n) {
    const r = this.mapKeyFn(e),
      s = this.inner[r];
    if (s === void 0)
      return ((this.inner[r] = [[e, n]]), void this.innerSize++);
    for (let i = 0; i < s.length; i++)
      if (this.equalsFn(s[i][0], e)) return void (s[i] = [e, n]);
    (s.push([e, n]), this.innerSize++);
  }
  delete(e) {
    const n = this.mapKeyFn(e),
      r = this.inner[n];
    if (r === void 0) return !1;
    for (let s = 0; s < r.length; s++)
      if (this.equalsFn(r[s][0], e))
        return (
          r.length === 1 ? delete this.inner[n] : r.splice(s, 1),
          this.innerSize--,
          !0
        );
    return !1;
  }
  forEach(e) {
    Dr(this.inner, (n, r) => {
      for (const [s, i] of r) e(s, i);
    });
  }
  isEmpty() {
    return E_(this.inner);
  }
  size() {
    return this.innerSize;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const fA = new Ee(W.comparator);
function yn() {
  return fA;
}
const F_ = new Ee(W.comparator);
function mi(...t) {
  let e = F_;
  for (const n of t) e = e.insert(n.key, n);
  return e;
}
function j_(t) {
  let e = F_;
  return (t.forEach((n, r) => (e = e.insert(n, r.overlayedDocument))), e);
}
function _r() {
  return Pi();
}
function b_() {
  return Pi();
}
function Pi() {
  return new Lr(
    (t) => t.toString(),
    (t, e) => t.isEqual(e),
  );
}
const dA = new Ee(W.comparator),
  pA = new Me(W.comparator);
function te(...t) {
  let e = pA;
  for (const n of t) e = e.add(n);
  return e;
}
const mA = new Me(ee);
function gA() {
  return mA;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function xf(t, e) {
  if (t.useProto3Json) {
    if (isNaN(e)) return { doubleValue: "NaN" };
    if (e === 1 / 0) return { doubleValue: "Infinity" };
    if (e === -1 / 0) return { doubleValue: "-Infinity" };
  }
  return { doubleValue: Xa(e) ? "-0" : e };
}
function U_(t) {
  return { integerValue: "" + t };
}
function yA(t, e) {
  return zR(e) ? U_(e) : xf(t, e);
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ml {
  constructor() {
    this._ = void 0;
  }
}
function vA(t, e, n) {
  return t instanceof rl
    ? (function (s, i) {
        const o = {
          fields: {
            [S_]: { stringValue: T_ },
            [R_]: {
              timestampValue: { seconds: s.seconds, nanos: s.nanoseconds },
            },
          },
        };
        return (
          i && Sf(i) && (i = Nl(i)),
          i && (o.fields[I_] = i),
          { mapValue: o }
        );
      })(n, e)
    : t instanceof no
      ? B_(t, e)
      : t instanceof ro
        ? $_(t, e)
        : (function (s, i) {
            const o = z_(s, i),
              l = bm(o) + bm(s.Ae);
            return eh(o) && eh(s.Ae) ? U_(l) : xf(s.serializer, l);
          })(t, e);
}
function _A(t, e, n) {
  return t instanceof no ? B_(t, e) : t instanceof ro ? $_(t, e) : n;
}
function z_(t, e) {
  return t instanceof sl
    ? (function (r) {
        return (
          eh(r) ||
          (function (i) {
            return !!i && "doubleValue" in i;
          })(r)
        );
      })(e)
      ? e
      : { integerValue: 0 }
    : null;
}
class rl extends Ml {}
class no extends Ml {
  constructor(e) {
    (super(), (this.elements = e));
  }
}
function B_(t, e) {
  const n = G_(e);
  for (const r of t.elements) n.some((s) => en(s, r)) || n.push(r);
  return { arrayValue: { values: n } };
}
class ro extends Ml {
  constructor(e) {
    (super(), (this.elements = e));
  }
}
function $_(t, e) {
  let n = G_(e);
  for (const r of t.elements) n = n.filter((s) => !en(s, r));
  return { arrayValue: { values: n } };
}
class sl extends Ml {
  constructor(e, n) {
    (super(), (this.serializer = e), (this.Ae = n));
  }
}
function bm(t) {
  return Ie(t.integerValue || t.doubleValue);
}
function G_(t) {
  return If(t) && t.arrayValue.values ? t.arrayValue.values.slice() : [];
}
function EA(t, e) {
  return (
    t.field.isEqual(e.field) &&
    (function (r, s) {
      return (r instanceof no && s instanceof no) ||
        (r instanceof ro && s instanceof ro)
        ? Es(r.elements, s.elements, en)
        : r instanceof sl && s instanceof sl
          ? en(r.Ae, s.Ae)
          : r instanceof rl && s instanceof rl;
    })(t.transform, e.transform)
  );
}
class wA {
  constructor(e, n) {
    ((this.version = e), (this.transformResults = n));
  }
}
class Yt {
  constructor(e, n) {
    ((this.updateTime = e), (this.exists = n));
  }
  static none() {
    return new Yt();
  }
  static exists(e) {
    return new Yt(void 0, e);
  }
  static updateTime(e) {
    return new Yt(e);
  }
  get isNone() {
    return this.updateTime === void 0 && this.exists === void 0;
  }
  isEqual(e) {
    return (
      this.exists === e.exists &&
      (this.updateTime
        ? !!e.updateTime && this.updateTime.isEqual(e.updateTime)
        : !e.updateTime)
    );
  }
}
function va(t, e) {
  return t.updateTime !== void 0
    ? e.isFoundDocument() && e.version.isEqual(t.updateTime)
    : t.exists === void 0 || t.exists === e.isFoundDocument();
}
class Ol {}
function H_(t, e) {
  if (!t.hasLocalMutations || (e && e.fields.length === 0)) return null;
  if (e === null)
    return t.isNoDocument()
      ? new q_(t.key, Yt.none())
      : new po(t.key, t.data, Yt.none());
  {
    const n = t.data,
      r = St.empty();
    let s = new Me($e.comparator);
    for (let i of e.fields)
      if (!s.has(i)) {
        let o = n.field(i);
        (o === null && i.length > 1 && ((i = i.popLast()), (o = n.field(i))),
          o === null ? r.delete(i) : r.set(i, o),
          (s = s.add(i)));
      }
    return new Mr(t.key, r, new Mt(s.toArray()), Yt.none());
  }
}
function TA(t, e, n) {
  t instanceof po
    ? (function (s, i, o) {
        const l = s.value.clone(),
          u = zm(s.fieldTransforms, i, o.transformResults);
        (l.setAll(u),
          i.convertToFoundDocument(o.version, l).setHasCommittedMutations());
      })(t, e, n)
    : t instanceof Mr
      ? (function (s, i, o) {
          if (!va(s.precondition, i))
            return void i.convertToUnknownDocument(o.version);
          const l = zm(s.fieldTransforms, i, o.transformResults),
            u = i.data;
          (u.setAll(W_(s)),
            u.setAll(l),
            i.convertToFoundDocument(o.version, u).setHasCommittedMutations());
        })(t, e, n)
      : (function (s, i, o) {
          i.convertToNoDocument(o.version).setHasCommittedMutations();
        })(0, e, n);
}
function ki(t, e, n, r) {
  return t instanceof po
    ? (function (i, o, l, u) {
        if (!va(i.precondition, o)) return l;
        const h = i.value.clone(),
          d = Bm(i.fieldTransforms, u, o);
        return (
          h.setAll(d),
          o.convertToFoundDocument(o.version, h).setHasLocalMutations(),
          null
        );
      })(t, e, n, r)
    : t instanceof Mr
      ? (function (i, o, l, u) {
          if (!va(i.precondition, o)) return l;
          const h = Bm(i.fieldTransforms, u, o),
            d = o.data;
          return (
            d.setAll(W_(i)),
            d.setAll(h),
            o.convertToFoundDocument(o.version, d).setHasLocalMutations(),
            l === null
              ? null
              : l
                  .unionWith(i.fieldMask.fields)
                  .unionWith(i.fieldTransforms.map((p) => p.field))
          );
        })(t, e, n, r)
      : (function (i, o, l) {
          return va(i.precondition, o)
            ? (o.convertToNoDocument(o.version).setHasLocalMutations(), null)
            : l;
        })(t, e, n);
}
function SA(t, e) {
  let n = null;
  for (const r of t.fieldTransforms) {
    const s = e.data.field(r.field),
      i = z_(r.transform, s || null);
    i != null && (n === null && (n = St.empty()), n.set(r.field, i));
  }
  return n || null;
}
function Um(t, e) {
  return (
    t.type === e.type &&
    !!t.key.isEqual(e.key) &&
    !!t.precondition.isEqual(e.precondition) &&
    !!(function (r, s) {
      return (
        (r === void 0 && s === void 0) ||
        (!(!r || !s) && Es(r, s, (i, o) => EA(i, o)))
      );
    })(t.fieldTransforms, e.fieldTransforms) &&
    (t.type === 0
      ? t.value.isEqual(e.value)
      : t.type !== 1 ||
        (t.data.isEqual(e.data) && t.fieldMask.isEqual(e.fieldMask)))
  );
}
class po extends Ol {
  constructor(e, n, r, s = []) {
    (super(),
      (this.key = e),
      (this.value = n),
      (this.precondition = r),
      (this.fieldTransforms = s),
      (this.type = 0));
  }
  getFieldMask() {
    return null;
  }
}
class Mr extends Ol {
  constructor(e, n, r, s, i = []) {
    (super(),
      (this.key = e),
      (this.data = n),
      (this.fieldMask = r),
      (this.precondition = s),
      (this.fieldTransforms = i),
      (this.type = 1));
  }
  getFieldMask() {
    return this.fieldMask;
  }
}
function W_(t) {
  const e = new Map();
  return (
    t.fieldMask.fields.forEach((n) => {
      if (!n.isEmpty()) {
        const r = t.data.field(n);
        e.set(n, r);
      }
    }),
    e
  );
}
function zm(t, e, n) {
  const r = new Map();
  ie(t.length === n.length, 32656, { Ve: n.length, de: t.length });
  for (let s = 0; s < n.length; s++) {
    const i = t[s],
      o = i.transform,
      l = e.data.field(i.field);
    r.set(i.field, _A(o, l, n[s]));
  }
  return r;
}
function Bm(t, e, n) {
  const r = new Map();
  for (const s of t) {
    const i = s.transform,
      o = n.data.field(s.field);
    r.set(s.field, vA(i, o, e));
  }
  return r;
}
class q_ extends Ol {
  constructor(e, n) {
    (super(),
      (this.key = e),
      (this.precondition = n),
      (this.type = 2),
      (this.fieldTransforms = []));
  }
  getFieldMask() {
    return null;
  }
}
class IA extends Ol {
  constructor(e, n) {
    (super(),
      (this.key = e),
      (this.precondition = n),
      (this.type = 3),
      (this.fieldTransforms = []));
  }
  getFieldMask() {
    return null;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class RA {
  constructor(e, n, r, s) {
    ((this.batchId = e),
      (this.localWriteTime = n),
      (this.baseMutations = r),
      (this.mutations = s));
  }
  applyToRemoteDocument(e, n) {
    const r = n.mutationResults;
    for (let s = 0; s < this.mutations.length; s++) {
      const i = this.mutations[s];
      i.key.isEqual(e.key) && TA(i, e, r[s]);
    }
  }
  applyToLocalView(e, n) {
    for (const r of this.baseMutations)
      r.key.isEqual(e.key) && (n = ki(r, e, n, this.localWriteTime));
    for (const r of this.mutations)
      r.key.isEqual(e.key) && (n = ki(r, e, n, this.localWriteTime));
    return n;
  }
  applyToLocalDocumentSet(e, n) {
    const r = b_();
    return (
      this.mutations.forEach((s) => {
        const i = e.get(s.key),
          o = i.overlayedDocument;
        let l = this.applyToLocalView(o, i.mutatedFields);
        l = n.has(s.key) ? null : l;
        const u = H_(o, l);
        (u !== null && r.set(s.key, u),
          o.isValidDocument() || o.convertToNoDocument(Q.min()));
      }),
      r
    );
  }
  keys() {
    return this.mutations.reduce((e, n) => e.add(n.key), te());
  }
  isEqual(e) {
    return (
      this.batchId === e.batchId &&
      Es(this.mutations, e.mutations, (n, r) => Um(n, r)) &&
      Es(this.baseMutations, e.baseMutations, (n, r) => Um(n, r))
    );
  }
}
class Pf {
  constructor(e, n, r, s) {
    ((this.batch = e),
      (this.commitVersion = n),
      (this.mutationResults = r),
      (this.docVersions = s));
  }
  static from(e, n, r) {
    ie(e.mutations.length === r.length, 58842, {
      me: e.mutations.length,
      fe: r.length,
    });
    let s = (function () {
      return dA;
    })();
    const i = e.mutations;
    for (let o = 0; o < i.length; o++) s = s.insert(i[o].key, r[o].version);
    return new Pf(e, n, r, s);
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class AA {
  constructor(e, n) {
    ((this.largestBatchId = e), (this.mutation = n));
  }
  getKey() {
    return this.mutation.key;
  }
  isEqual(e) {
    return e !== null && this.mutation === e.mutation;
  }
  toString() {
    return `Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class CA {
  constructor(e, n) {
    ((this.count = e), (this.unchangedNames = n));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Ce, ne;
function xA(t) {
  switch (t) {
    case F.OK:
      return q(64938);
    case F.CANCELLED:
    case F.UNKNOWN:
    case F.DEADLINE_EXCEEDED:
    case F.RESOURCE_EXHAUSTED:
    case F.INTERNAL:
    case F.UNAVAILABLE:
    case F.UNAUTHENTICATED:
      return !1;
    case F.INVALID_ARGUMENT:
    case F.NOT_FOUND:
    case F.ALREADY_EXISTS:
    case F.PERMISSION_DENIED:
    case F.FAILED_PRECONDITION:
    case F.ABORTED:
    case F.OUT_OF_RANGE:
    case F.UNIMPLEMENTED:
    case F.DATA_LOSS:
      return !0;
    default:
      return q(15467, { code: t });
  }
}
function K_(t) {
  if (t === void 0) return (gn("GRPC error has no .code"), F.UNKNOWN);
  switch (t) {
    case Ce.OK:
      return F.OK;
    case Ce.CANCELLED:
      return F.CANCELLED;
    case Ce.UNKNOWN:
      return F.UNKNOWN;
    case Ce.DEADLINE_EXCEEDED:
      return F.DEADLINE_EXCEEDED;
    case Ce.RESOURCE_EXHAUSTED:
      return F.RESOURCE_EXHAUSTED;
    case Ce.INTERNAL:
      return F.INTERNAL;
    case Ce.UNAVAILABLE:
      return F.UNAVAILABLE;
    case Ce.UNAUTHENTICATED:
      return F.UNAUTHENTICATED;
    case Ce.INVALID_ARGUMENT:
      return F.INVALID_ARGUMENT;
    case Ce.NOT_FOUND:
      return F.NOT_FOUND;
    case Ce.ALREADY_EXISTS:
      return F.ALREADY_EXISTS;
    case Ce.PERMISSION_DENIED:
      return F.PERMISSION_DENIED;
    case Ce.FAILED_PRECONDITION:
      return F.FAILED_PRECONDITION;
    case Ce.ABORTED:
      return F.ABORTED;
    case Ce.OUT_OF_RANGE:
      return F.OUT_OF_RANGE;
    case Ce.UNIMPLEMENTED:
      return F.UNIMPLEMENTED;
    case Ce.DATA_LOSS:
      return F.DATA_LOSS;
    default:
      return q(39323, { code: t });
  }
}
(((ne = Ce || (Ce = {}))[(ne.OK = 0)] = "OK"),
  (ne[(ne.CANCELLED = 1)] = "CANCELLED"),
  (ne[(ne.UNKNOWN = 2)] = "UNKNOWN"),
  (ne[(ne.INVALID_ARGUMENT = 3)] = "INVALID_ARGUMENT"),
  (ne[(ne.DEADLINE_EXCEEDED = 4)] = "DEADLINE_EXCEEDED"),
  (ne[(ne.NOT_FOUND = 5)] = "NOT_FOUND"),
  (ne[(ne.ALREADY_EXISTS = 6)] = "ALREADY_EXISTS"),
  (ne[(ne.PERMISSION_DENIED = 7)] = "PERMISSION_DENIED"),
  (ne[(ne.UNAUTHENTICATED = 16)] = "UNAUTHENTICATED"),
  (ne[(ne.RESOURCE_EXHAUSTED = 8)] = "RESOURCE_EXHAUSTED"),
  (ne[(ne.FAILED_PRECONDITION = 9)] = "FAILED_PRECONDITION"),
  (ne[(ne.ABORTED = 10)] = "ABORTED"),
  (ne[(ne.OUT_OF_RANGE = 11)] = "OUT_OF_RANGE"),
  (ne[(ne.UNIMPLEMENTED = 12)] = "UNIMPLEMENTED"),
  (ne[(ne.INTERNAL = 13)] = "INTERNAL"),
  (ne[(ne.UNAVAILABLE = 14)] = "UNAVAILABLE"),
  (ne[(ne.DATA_LOSS = 15)] = "DATA_LOSS"));
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function PA() {
  return new TextEncoder();
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const kA = new Wn([4294967295, 4294967295], 0);
function $m(t) {
  const e = PA().encode(t),
    n = new u_();
  return (n.update(e), new Uint8Array(n.digest()));
}
function Gm(t) {
  const e = new DataView(t.buffer),
    n = e.getUint32(0, !0),
    r = e.getUint32(4, !0),
    s = e.getUint32(8, !0),
    i = e.getUint32(12, !0);
  return [new Wn([n, r], 0), new Wn([s, i], 0)];
}
class kf {
  constructor(e, n, r) {
    if (
      ((this.bitmap = e),
      (this.padding = n),
      (this.hashCount = r),
      n < 0 || n >= 8)
    )
      throw new gi(`Invalid padding: ${n}`);
    if (r < 0) throw new gi(`Invalid hash count: ${r}`);
    if (e.length > 0 && this.hashCount === 0)
      throw new gi(`Invalid hash count: ${r}`);
    if (e.length === 0 && n !== 0)
      throw new gi(`Invalid padding when bitmap length is 0: ${n}`);
    ((this.ge = 8 * e.length - n), (this.pe = Wn.fromNumber(this.ge)));
  }
  ye(e, n, r) {
    let s = e.add(n.multiply(Wn.fromNumber(r)));
    return (
      s.compare(kA) === 1 && (s = new Wn([s.getBits(0), s.getBits(1)], 0)),
      s.modulo(this.pe).toNumber()
    );
  }
  we(e) {
    return !!(this.bitmap[Math.floor(e / 8)] & (1 << (e % 8)));
  }
  mightContain(e) {
    if (this.ge === 0) return !1;
    const n = $m(e),
      [r, s] = Gm(n);
    for (let i = 0; i < this.hashCount; i++) {
      const o = this.ye(r, s, i);
      if (!this.we(o)) return !1;
    }
    return !0;
  }
  static create(e, n, r) {
    const s = e % 8 == 0 ? 0 : 8 - (e % 8),
      i = new Uint8Array(Math.ceil(e / 8)),
      o = new kf(i, s, n);
    return (r.forEach((l) => o.insert(l)), o);
  }
  insert(e) {
    if (this.ge === 0) return;
    const n = $m(e),
      [r, s] = Gm(n);
    for (let i = 0; i < this.hashCount; i++) {
      const o = this.ye(r, s, i);
      this.Se(o);
    }
  }
  Se(e) {
    const n = Math.floor(e / 8),
      r = e % 8;
    this.bitmap[n] |= 1 << r;
  }
}
class gi extends Error {
  constructor() {
    (super(...arguments), (this.name = "BloomFilterError"));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Fl {
  constructor(e, n, r, s, i) {
    ((this.snapshotVersion = e),
      (this.targetChanges = n),
      (this.targetMismatches = r),
      (this.documentUpdates = s),
      (this.resolvedLimboDocuments = i));
  }
  static createSynthesizedRemoteEventForCurrentChange(e, n, r) {
    const s = new Map();
    return (
      s.set(e, mo.createSynthesizedTargetChangeForCurrentChange(e, n, r)),
      new Fl(Q.min(), s, new Ee(ee), yn(), te())
    );
  }
}
class mo {
  constructor(e, n, r, s, i) {
    ((this.resumeToken = e),
      (this.current = n),
      (this.addedDocuments = r),
      (this.modifiedDocuments = s),
      (this.removedDocuments = i));
  }
  static createSynthesizedTargetChangeForCurrentChange(e, n, r) {
    return new mo(r, n, te(), te(), te());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class _a {
  constructor(e, n, r, s) {
    ((this.be = e), (this.removedTargetIds = n), (this.key = r), (this.De = s));
  }
}
class Q_ {
  constructor(e, n) {
    ((this.targetId = e), (this.Ce = n));
  }
}
class Y_ {
  constructor(e, n, r = We.EMPTY_BYTE_STRING, s = null) {
    ((this.state = e),
      (this.targetIds = n),
      (this.resumeToken = r),
      (this.cause = s));
  }
}
class Hm {
  constructor() {
    ((this.ve = 0),
      (this.Fe = Wm()),
      (this.Me = We.EMPTY_BYTE_STRING),
      (this.xe = !1),
      (this.Oe = !0));
  }
  get current() {
    return this.xe;
  }
  get resumeToken() {
    return this.Me;
  }
  get Ne() {
    return this.ve !== 0;
  }
  get Be() {
    return this.Oe;
  }
  Le(e) {
    e.approximateByteSize() > 0 && ((this.Oe = !0), (this.Me = e));
  }
  ke() {
    let e = te(),
      n = te(),
      r = te();
    return (
      this.Fe.forEach((s, i) => {
        switch (i) {
          case 0:
            e = e.add(s);
            break;
          case 2:
            n = n.add(s);
            break;
          case 1:
            r = r.add(s);
            break;
          default:
            q(38017, { changeType: i });
        }
      }),
      new mo(this.Me, this.xe, e, n, r)
    );
  }
  qe() {
    ((this.Oe = !1), (this.Fe = Wm()));
  }
  Ke(e, n) {
    ((this.Oe = !0), (this.Fe = this.Fe.insert(e, n)));
  }
  Ue(e) {
    ((this.Oe = !0), (this.Fe = this.Fe.remove(e)));
  }
  $e() {
    this.ve += 1;
  }
  We() {
    ((this.ve -= 1), ie(this.ve >= 0, 3241, { ve: this.ve }));
  }
  Qe() {
    ((this.Oe = !0), (this.xe = !0));
  }
}
class NA {
  constructor(e) {
    ((this.Ge = e),
      (this.ze = new Map()),
      (this.je = yn()),
      (this.Je = Xo()),
      (this.He = Xo()),
      (this.Ze = new Ee(ee)));
  }
  Xe(e) {
    for (const n of e.be)
      e.De && e.De.isFoundDocument()
        ? this.Ye(n, e.De)
        : this.et(n, e.key, e.De);
    for (const n of e.removedTargetIds) this.et(n, e.key, e.De);
  }
  tt(e) {
    this.forEachTarget(e, (n) => {
      const r = this.nt(n);
      switch (e.state) {
        case 0:
          this.rt(n) && r.Le(e.resumeToken);
          break;
        case 1:
          (r.We(), r.Ne || r.qe(), r.Le(e.resumeToken));
          break;
        case 2:
          (r.We(), r.Ne || this.removeTarget(n));
          break;
        case 3:
          this.rt(n) && (r.Qe(), r.Le(e.resumeToken));
          break;
        case 4:
          this.rt(n) && (this.it(n), r.Le(e.resumeToken));
          break;
        default:
          q(56790, { state: e.state });
      }
    });
  }
  forEachTarget(e, n) {
    e.targetIds.length > 0
      ? e.targetIds.forEach(n)
      : this.ze.forEach((r, s) => {
          this.rt(s) && n(s);
        });
  }
  st(e) {
    const n = e.targetId,
      r = e.Ce.count,
      s = this.ot(n);
    if (s) {
      const i = s.target;
      if (nh(i))
        if (r === 0) {
          const o = new W(i.path);
          this.et(n, o, Ze.newNoDocument(o, Q.min()));
        } else ie(r === 1, 20013, { expectedCount: r });
      else {
        const o = this._t(n);
        if (o !== r) {
          const l = this.ut(e),
            u = l ? this.ct(l, e, o) : 1;
          if (u !== 0) {
            this.it(n);
            const h =
              u === 2
                ? "TargetPurposeExistenceFilterMismatchBloom"
                : "TargetPurposeExistenceFilterMismatch";
            this.Ze = this.Ze.insert(n, h);
          }
        }
      }
    }
  }
  ut(e) {
    const n = e.Ce.unchangedNames;
    if (!n || !n.bits) return null;
    const {
      bits: { bitmap: r = "", padding: s = 0 },
      hashCount: i = 0,
    } = n;
    let o, l;
    try {
      o = Zn(r).toUint8Array();
    } catch (u) {
      if (u instanceof w_)
        return (
          Pr(
            "Decoding the base64 bloom filter in existence filter failed (" +
              u.message +
              "); ignoring the bloom filter and falling back to full re-query.",
          ),
          null
        );
      throw u;
    }
    try {
      l = new kf(o, s, i);
    } catch (u) {
      return (
        Pr(
          u instanceof gi
            ? "BloomFilter error: "
            : "Applying bloom filter failed: ",
          u,
        ),
        null
      );
    }
    return l.ge === 0 ? null : l;
  }
  ct(e, n, r) {
    return n.Ce.count === r - this.Pt(e, n.targetId) ? 0 : 2;
  }
  Pt(e, n) {
    const r = this.Ge.getRemoteKeysForTarget(n);
    let s = 0;
    return (
      r.forEach((i) => {
        const o = this.Ge.ht(),
          l = `projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;
        e.mightContain(l) || (this.et(n, i, null), s++);
      }),
      s
    );
  }
  Tt(e) {
    const n = new Map();
    this.ze.forEach((i, o) => {
      const l = this.ot(o);
      if (l) {
        if (i.current && nh(l.target)) {
          const u = new W(l.target.path);
          this.Et(u).has(o) ||
            this.It(o, u) ||
            this.et(o, u, Ze.newNoDocument(u, e));
        }
        i.Be && (n.set(o, i.ke()), i.qe());
      }
    });
    let r = te();
    (this.He.forEach((i, o) => {
      let l = !0;
      (o.forEachWhile((u) => {
        const h = this.ot(u);
        return (
          !h || h.purpose === "TargetPurposeLimboResolution" || ((l = !1), !1)
        );
      }),
        l && (r = r.add(i)));
    }),
      this.je.forEach((i, o) => o.setReadTime(e)));
    const s = new Fl(e, n, this.Ze, this.je, r);
    return (
      (this.je = yn()),
      (this.Je = Xo()),
      (this.He = Xo()),
      (this.Ze = new Ee(ee)),
      s
    );
  }
  Ye(e, n) {
    if (!this.rt(e)) return;
    const r = this.It(e, n.key) ? 2 : 0;
    (this.nt(e).Ke(n.key, r),
      (this.je = this.je.insert(n.key, n)),
      (this.Je = this.Je.insert(n.key, this.Et(n.key).add(e))),
      (this.He = this.He.insert(n.key, this.Rt(n.key).add(e))));
  }
  et(e, n, r) {
    if (!this.rt(e)) return;
    const s = this.nt(e);
    (this.It(e, n) ? s.Ke(n, 1) : s.Ue(n),
      (this.He = this.He.insert(n, this.Rt(n).delete(e))),
      (this.He = this.He.insert(n, this.Rt(n).add(e))),
      r && (this.je = this.je.insert(n, r)));
  }
  removeTarget(e) {
    this.ze.delete(e);
  }
  _t(e) {
    const n = this.nt(e).ke();
    return (
      this.Ge.getRemoteKeysForTarget(e).size +
      n.addedDocuments.size -
      n.removedDocuments.size
    );
  }
  $e(e) {
    this.nt(e).$e();
  }
  nt(e) {
    let n = this.ze.get(e);
    return (n || ((n = new Hm()), this.ze.set(e, n)), n);
  }
  Rt(e) {
    let n = this.He.get(e);
    return (n || ((n = new Me(ee)), (this.He = this.He.insert(e, n))), n);
  }
  Et(e) {
    let n = this.Je.get(e);
    return (n || ((n = new Me(ee)), (this.Je = this.Je.insert(e, n))), n);
  }
  rt(e) {
    const n = this.ot(e) !== null;
    return (n || $("WatchChangeAggregator", "Detected inactive target", e), n);
  }
  ot(e) {
    const n = this.ze.get(e);
    return n && n.Ne ? null : this.Ge.At(e);
  }
  it(e) {
    (this.ze.set(e, new Hm()),
      this.Ge.getRemoteKeysForTarget(e).forEach((n) => {
        this.et(e, n, null);
      }));
  }
  It(e, n) {
    return this.Ge.getRemoteKeysForTarget(e).has(n);
  }
}
function Xo() {
  return new Ee(W.comparator);
}
function Wm() {
  return new Ee(W.comparator);
}
const VA = { asc: "ASCENDING", desc: "DESCENDING" },
  DA = {
    "<": "LESS_THAN",
    "<=": "LESS_THAN_OR_EQUAL",
    ">": "GREATER_THAN",
    ">=": "GREATER_THAN_OR_EQUAL",
    "==": "EQUAL",
    "!=": "NOT_EQUAL",
    "array-contains": "ARRAY_CONTAINS",
    in: "IN",
    "not-in": "NOT_IN",
    "array-contains-any": "ARRAY_CONTAINS_ANY",
  },
  LA = { and: "AND", or: "OR" };
class MA {
  constructor(e, n) {
    ((this.databaseId = e), (this.useProto3Json = n));
  }
}
function sh(t, e) {
  return t.useProto3Json || kl(e) ? e : { value: e };
}
function il(t, e) {
  return t.useProto3Json
    ? `${new Date(1e3 * e.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "")}.${("000000000" + e.nanoseconds).slice(-9)}Z`
    : { seconds: "" + e.seconds, nanos: e.nanoseconds };
}
function J_(t, e) {
  return t.useProto3Json ? e.toBase64() : e.toUint8Array();
}
function OA(t, e) {
  return il(t, e.toTimestamp());
}
function Jt(t) {
  return (
    ie(!!t, 49232),
    Q.fromTimestamp(
      (function (n) {
        const r = Xn(n);
        return new le(r.seconds, r.nanos);
      })(t),
    )
  );
}
function Nf(t, e) {
  return ih(t, e).canonicalString();
}
function ih(t, e) {
  const n = (function (s) {
    return new fe(["projects", s.projectId, "databases", s.database]);
  })(t).child("documents");
  return e === void 0 ? n : n.child(e);
}
function X_(t) {
  const e = fe.fromString(t);
  return (ie(rE(e), 10190, { key: e.toString() }), e);
}
function oh(t, e) {
  return Nf(t.databaseId, e.path);
}
function qu(t, e) {
  const n = X_(e);
  if (n.get(1) !== t.databaseId.projectId)
    throw new H(
      F.INVALID_ARGUMENT,
      "Tried to deserialize key from different project: " +
        n.get(1) +
        " vs " +
        t.databaseId.projectId,
    );
  if (n.get(3) !== t.databaseId.database)
    throw new H(
      F.INVALID_ARGUMENT,
      "Tried to deserialize key from different database: " +
        n.get(3) +
        " vs " +
        t.databaseId.database,
    );
  return new W(eE(n));
}
function Z_(t, e) {
  return Nf(t.databaseId, e);
}
function FA(t) {
  const e = X_(t);
  return e.length === 4 ? fe.emptyPath() : eE(e);
}
function ah(t) {
  return new fe([
    "projects",
    t.databaseId.projectId,
    "databases",
    t.databaseId.database,
  ]).canonicalString();
}
function eE(t) {
  return (
    ie(t.length > 4 && t.get(4) === "documents", 29091, { key: t.toString() }),
    t.popFirst(5)
  );
}
function qm(t, e, n) {
  return { name: oh(t, e), fields: n.value.mapValue.fields };
}
function jA(t, e) {
  let n;
  if ("targetChange" in e) {
    e.targetChange;
    const r = (function (h) {
        return h === "NO_CHANGE"
          ? 0
          : h === "ADD"
            ? 1
            : h === "REMOVE"
              ? 2
              : h === "CURRENT"
                ? 3
                : h === "RESET"
                  ? 4
                  : q(39313, { state: h });
      })(e.targetChange.targetChangeType || "NO_CHANGE"),
      s = e.targetChange.targetIds || [],
      i = (function (h, d) {
        return h.useProto3Json
          ? (ie(d === void 0 || typeof d == "string", 58123),
            We.fromBase64String(d || ""))
          : (ie(
              d === void 0 || d instanceof Buffer || d instanceof Uint8Array,
              16193,
            ),
            We.fromUint8Array(d || new Uint8Array()));
      })(t, e.targetChange.resumeToken),
      o = e.targetChange.cause,
      l =
        o &&
        (function (h) {
          const d = h.code === void 0 ? F.UNKNOWN : K_(h.code);
          return new H(d, h.message || "");
        })(o);
    n = new Y_(r, s, i, l || null);
  } else if ("documentChange" in e) {
    e.documentChange;
    const r = e.documentChange;
    (r.document, r.document.name, r.document.updateTime);
    const s = qu(t, r.document.name),
      i = Jt(r.document.updateTime),
      o = r.document.createTime ? Jt(r.document.createTime) : Q.min(),
      l = new St({ mapValue: { fields: r.document.fields } }),
      u = Ze.newFoundDocument(s, i, o, l),
      h = r.targetIds || [],
      d = r.removedTargetIds || [];
    n = new _a(h, d, u.key, u);
  } else if ("documentDelete" in e) {
    e.documentDelete;
    const r = e.documentDelete;
    r.document;
    const s = qu(t, r.document),
      i = r.readTime ? Jt(r.readTime) : Q.min(),
      o = Ze.newNoDocument(s, i),
      l = r.removedTargetIds || [];
    n = new _a([], l, o.key, o);
  } else if ("documentRemove" in e) {
    e.documentRemove;
    const r = e.documentRemove;
    r.document;
    const s = qu(t, r.document),
      i = r.removedTargetIds || [];
    n = new _a([], i, s, null);
  } else {
    if (!("filter" in e)) return q(11601, { Vt: e });
    {
      e.filter;
      const r = e.filter;
      r.targetId;
      const { count: s = 0, unchangedNames: i } = r,
        o = new CA(s, i),
        l = r.targetId;
      n = new Q_(l, o);
    }
  }
  return n;
}
function bA(t, e) {
  let n;
  if (e instanceof po) n = { update: qm(t, e.key, e.value) };
  else if (e instanceof q_) n = { delete: oh(t, e.key) };
  else if (e instanceof Mr)
    n = { update: qm(t, e.key, e.data), updateMask: KA(e.fieldMask) };
  else {
    if (!(e instanceof IA)) return q(16599, { dt: e.type });
    n = { verify: oh(t, e.key) };
  }
  return (
    e.fieldTransforms.length > 0 &&
      (n.updateTransforms = e.fieldTransforms.map((r) =>
        (function (i, o) {
          const l = o.transform;
          if (l instanceof rl)
            return {
              fieldPath: o.field.canonicalString(),
              setToServerValue: "REQUEST_TIME",
            };
          if (l instanceof no)
            return {
              fieldPath: o.field.canonicalString(),
              appendMissingElements: { values: l.elements },
            };
          if (l instanceof ro)
            return {
              fieldPath: o.field.canonicalString(),
              removeAllFromArray: { values: l.elements },
            };
          if (l instanceof sl)
            return { fieldPath: o.field.canonicalString(), increment: l.Ae };
          throw q(20930, { transform: o.transform });
        })(0, r),
      )),
    e.precondition.isNone ||
      (n.currentDocument = (function (s, i) {
        return i.updateTime !== void 0
          ? { updateTime: OA(s, i.updateTime) }
          : i.exists !== void 0
            ? { exists: i.exists }
            : q(27497);
      })(t, e.precondition)),
    n
  );
}
function UA(t, e) {
  return t && t.length > 0
    ? (ie(e !== void 0, 14353),
      t.map((n) =>
        (function (s, i) {
          let o = s.updateTime ? Jt(s.updateTime) : Jt(i);
          return (
            o.isEqual(Q.min()) && (o = Jt(i)),
            new wA(o, s.transformResults || [])
          );
        })(n, e),
      ))
    : [];
}
function zA(t, e) {
  return { documents: [Z_(t, e.path)] };
}
function BA(t, e) {
  const n = { structuredQuery: {} },
    r = e.path;
  let s;
  (e.collectionGroup !== null
    ? ((s = r),
      (n.structuredQuery.from = [
        { collectionId: e.collectionGroup, allDescendants: !0 },
      ]))
    : ((s = r.popLast()),
      (n.structuredQuery.from = [{ collectionId: r.lastSegment() }])),
    (n.parent = Z_(t, s)));
  const i = (function (h) {
    if (h.length !== 0) return nE(tn.create(h, "and"));
  })(e.filters);
  i && (n.structuredQuery.where = i);
  const o = (function (h) {
    if (h.length !== 0)
      return h.map((d) =>
        (function (m) {
          return { field: $r(m.field), direction: HA(m.dir) };
        })(d),
      );
  })(e.orderBy);
  o && (n.structuredQuery.orderBy = o);
  const l = sh(t, e.limit);
  return (
    l !== null && (n.structuredQuery.limit = l),
    e.startAt &&
      (n.structuredQuery.startAt = (function (h) {
        return { before: h.inclusive, values: h.position };
      })(e.startAt)),
    e.endAt &&
      (n.structuredQuery.endAt = (function (h) {
        return { before: !h.inclusive, values: h.position };
      })(e.endAt)),
    { ft: n, parent: s }
  );
}
function $A(t) {
  let e = FA(t.parent);
  const n = t.structuredQuery,
    r = n.from ? n.from.length : 0;
  let s = null;
  if (r > 0) {
    ie(r === 1, 65062);
    const d = n.from[0];
    d.allDescendants ? (s = d.collectionId) : (e = e.child(d.collectionId));
  }
  let i = [];
  n.where &&
    (i = (function (p) {
      const m = tE(p);
      return m instanceof tn && N_(m) ? m.getFilters() : [m];
    })(n.where));
  let o = [];
  n.orderBy &&
    (o = (function (p) {
      return p.map((m) =>
        (function (x) {
          return new nl(
            Gr(x.field),
            (function (D) {
              switch (D) {
                case "ASCENDING":
                  return "asc";
                case "DESCENDING":
                  return "desc";
                default:
                  return;
              }
            })(x.direction),
          );
        })(m),
      );
    })(n.orderBy));
  let l = null;
  n.limit &&
    (l = (function (p) {
      let m;
      return ((m = typeof p == "object" ? p.value : p), kl(m) ? null : m);
    })(n.limit));
  let u = null;
  n.startAt &&
    (u = (function (p) {
      const m = !!p.before,
        T = p.values || [];
      return new tl(T, m);
    })(n.startAt));
  let h = null;
  return (
    n.endAt &&
      (h = (function (p) {
        const m = !p.before,
          T = p.values || [];
        return new tl(T, m);
      })(n.endAt)),
    oA(e, s, o, i, l, "F", u, h)
  );
}
function GA(t, e) {
  const n = (function (s) {
    switch (s) {
      case "TargetPurposeListen":
        return null;
      case "TargetPurposeExistenceFilterMismatch":
        return "existence-filter-mismatch";
      case "TargetPurposeExistenceFilterMismatchBloom":
        return "existence-filter-mismatch-bloom";
      case "TargetPurposeLimboResolution":
        return "limbo-document";
      default:
        return q(28987, { purpose: s });
    }
  })(e.purpose);
  return n == null ? null : { "goog-listen-tags": n };
}
function tE(t) {
  return t.unaryFilter !== void 0
    ? (function (n) {
        switch (n.unaryFilter.op) {
          case "IS_NAN":
            const r = Gr(n.unaryFilter.field);
            return Ve.create(r, "==", { doubleValue: NaN });
          case "IS_NULL":
            const s = Gr(n.unaryFilter.field);
            return Ve.create(s, "==", { nullValue: "NULL_VALUE" });
          case "IS_NOT_NAN":
            const i = Gr(n.unaryFilter.field);
            return Ve.create(i, "!=", { doubleValue: NaN });
          case "IS_NOT_NULL":
            const o = Gr(n.unaryFilter.field);
            return Ve.create(o, "!=", { nullValue: "NULL_VALUE" });
          case "OPERATOR_UNSPECIFIED":
            return q(61313);
          default:
            return q(60726);
        }
      })(t)
    : t.fieldFilter !== void 0
      ? (function (n) {
          return Ve.create(
            Gr(n.fieldFilter.field),
            (function (s) {
              switch (s) {
                case "EQUAL":
                  return "==";
                case "NOT_EQUAL":
                  return "!=";
                case "GREATER_THAN":
                  return ">";
                case "GREATER_THAN_OR_EQUAL":
                  return ">=";
                case "LESS_THAN":
                  return "<";
                case "LESS_THAN_OR_EQUAL":
                  return "<=";
                case "ARRAY_CONTAINS":
                  return "array-contains";
                case "IN":
                  return "in";
                case "NOT_IN":
                  return "not-in";
                case "ARRAY_CONTAINS_ANY":
                  return "array-contains-any";
                case "OPERATOR_UNSPECIFIED":
                  return q(58110);
                default:
                  return q(50506);
              }
            })(n.fieldFilter.op),
            n.fieldFilter.value,
          );
        })(t)
      : t.compositeFilter !== void 0
        ? (function (n) {
            return tn.create(
              n.compositeFilter.filters.map((r) => tE(r)),
              (function (s) {
                switch (s) {
                  case "AND":
                    return "and";
                  case "OR":
                    return "or";
                  default:
                    return q(1026);
                }
              })(n.compositeFilter.op),
            );
          })(t)
        : q(30097, { filter: t });
}
function HA(t) {
  return VA[t];
}
function WA(t) {
  return DA[t];
}
function qA(t) {
  return LA[t];
}
function $r(t) {
  return { fieldPath: t.canonicalString() };
}
function Gr(t) {
  return $e.fromServerFormat(t.fieldPath);
}
function nE(t) {
  return t instanceof Ve
    ? (function (n) {
        if (n.op === "==") {
          if (Lm(n.value))
            return { unaryFilter: { field: $r(n.field), op: "IS_NAN" } };
          if (Dm(n.value))
            return { unaryFilter: { field: $r(n.field), op: "IS_NULL" } };
        } else if (n.op === "!=") {
          if (Lm(n.value))
            return { unaryFilter: { field: $r(n.field), op: "IS_NOT_NAN" } };
          if (Dm(n.value))
            return { unaryFilter: { field: $r(n.field), op: "IS_NOT_NULL" } };
        }
        return {
          fieldFilter: { field: $r(n.field), op: WA(n.op), value: n.value },
        };
      })(t)
    : t instanceof tn
      ? (function (n) {
          const r = n.getFilters().map((s) => nE(s));
          return r.length === 1
            ? r[0]
            : { compositeFilter: { op: qA(n.op), filters: r } };
        })(t)
      : q(54877, { filter: t });
}
function KA(t) {
  const e = [];
  return (
    t.fields.forEach((n) => e.push(n.canonicalString())),
    { fieldPaths: e }
  );
}
function rE(t) {
  return t.length >= 4 && t.get(0) === "projects" && t.get(2) === "databases";
}
function sE(t) {
  return (
    !!t && typeof t._toProto == "function" && t._protoValueType === "ProtoValue"
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Mn {
  constructor(
    e,
    n,
    r,
    s,
    i = Q.min(),
    o = Q.min(),
    l = We.EMPTY_BYTE_STRING,
    u = null,
  ) {
    ((this.target = e),
      (this.targetId = n),
      (this.purpose = r),
      (this.sequenceNumber = s),
      (this.snapshotVersion = i),
      (this.lastLimboFreeSnapshotVersion = o),
      (this.resumeToken = l),
      (this.expectedCount = u));
  }
  withSequenceNumber(e) {
    return new Mn(
      this.target,
      this.targetId,
      this.purpose,
      e,
      this.snapshotVersion,
      this.lastLimboFreeSnapshotVersion,
      this.resumeToken,
      this.expectedCount,
    );
  }
  withResumeToken(e, n) {
    return new Mn(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      n,
      this.lastLimboFreeSnapshotVersion,
      e,
      null,
    );
  }
  withExpectedCount(e) {
    return new Mn(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      this.snapshotVersion,
      this.lastLimboFreeSnapshotVersion,
      this.resumeToken,
      e,
    );
  }
  withLastLimboFreeSnapshotVersion(e) {
    return new Mn(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      this.snapshotVersion,
      e,
      this.resumeToken,
      this.expectedCount,
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class QA {
  constructor(e) {
    this.yt = e;
  }
}
function YA(t) {
  const e = $A({ parent: t.parent, structuredQuery: t.structuredQuery });
  return t.limitType === "LAST" ? rh(e, e.limit, "L") : e;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class JA {
  constructor() {
    this.bn = new XA();
  }
  addToCollectionParentIndex(e, n) {
    return (this.bn.add(n), O.resolve());
  }
  getCollectionParents(e, n) {
    return O.resolve(this.bn.getEntries(n));
  }
  addFieldIndex(e, n) {
    return O.resolve();
  }
  deleteFieldIndex(e, n) {
    return O.resolve();
  }
  deleteAllFieldIndexes(e) {
    return O.resolve();
  }
  createTargetIndexes(e, n) {
    return O.resolve();
  }
  getDocumentsMatchingTarget(e, n) {
    return O.resolve(null);
  }
  getIndexType(e, n) {
    return O.resolve(0);
  }
  getFieldIndexes(e, n) {
    return O.resolve([]);
  }
  getNextCollectionGroupToUpdate(e) {
    return O.resolve(null);
  }
  getMinOffset(e, n) {
    return O.resolve(Jn.min());
  }
  getMinOffsetFromCollectionGroup(e, n) {
    return O.resolve(Jn.min());
  }
  updateCollectionGroup(e, n, r) {
    return O.resolve();
  }
  updateIndexEntries(e, n) {
    return O.resolve();
  }
}
class XA {
  constructor() {
    this.index = {};
  }
  add(e) {
    const n = e.lastSegment(),
      r = e.popLast(),
      s = this.index[n] || new Me(fe.comparator),
      i = !s.has(r);
    return ((this.index[n] = s.add(r)), i);
  }
  has(e) {
    const n = e.lastSegment(),
      r = e.popLast(),
      s = this.index[n];
    return s && s.has(r);
  }
  getEntries(e) {
    return (this.index[e] || new Me(fe.comparator)).toArray();
  }
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Km = {
    didRun: !1,
    sequenceNumbersCollected: 0,
    targetsRemoved: 0,
    documentsRemoved: 0,
  },
  iE = 41943040;
class at {
  static withCacheSize(e) {
    return new at(
      e,
      at.DEFAULT_COLLECTION_PERCENTILE,
      at.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT,
    );
  }
  constructor(e, n, r) {
    ((this.cacheSizeCollectionThreshold = e),
      (this.percentileToCollect = n),
      (this.maximumSequenceNumbersToCollect = r));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ ((at.DEFAULT_COLLECTION_PERCENTILE = 10),
  (at.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT = 1e3),
  (at.DEFAULT = new at(
    iE,
    at.DEFAULT_COLLECTION_PERCENTILE,
    at.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT,
  )),
  (at.DISABLED = new at(-1, 0, 0)));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ss {
  constructor(e) {
    this.sr = e;
  }
  next() {
    return ((this.sr += 2), this.sr);
  }
  static _r() {
    return new Ss(0);
  }
  static ar() {
    return new Ss(-1);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Qm = "LruGarbageCollector",
  ZA = 1048576;
function Ym([t, e], [n, r]) {
  const s = ee(t, n);
  return s === 0 ? ee(e, r) : s;
}
class eC {
  constructor(e) {
    ((this.Pr = e), (this.buffer = new Me(Ym)), (this.Tr = 0));
  }
  Er() {
    return ++this.Tr;
  }
  Ir(e) {
    const n = [e, this.Er()];
    if (this.buffer.size < this.Pr) this.buffer = this.buffer.add(n);
    else {
      const r = this.buffer.last();
      Ym(n, r) < 0 && (this.buffer = this.buffer.delete(r).add(n));
    }
  }
  get maxValue() {
    return this.buffer.last()[0];
  }
}
class tC {
  constructor(e, n, r) {
    ((this.garbageCollector = e),
      (this.asyncQueue = n),
      (this.localStore = r),
      (this.Rr = null));
  }
  start() {
    this.garbageCollector.params.cacheSizeCollectionThreshold !== -1 &&
      this.Ar(6e4);
  }
  stop() {
    this.Rr && (this.Rr.cancel(), (this.Rr = null));
  }
  get started() {
    return this.Rr !== null;
  }
  Ar(e) {
    ($(Qm, `Garbage collection scheduled in ${e}ms`),
      (this.Rr = this.asyncQueue.enqueueAfterDelay(
        "lru_garbage_collection",
        e,
        async () => {
          this.Rr = null;
          try {
            await this.localStore.collectGarbage(this.garbageCollector);
          } catch (n) {
            Ds(n)
              ? $(Qm, "Ignoring IndexedDB error during garbage collection: ", n)
              : await Vs(n);
          }
          await this.Ar(3e5);
        },
      )));
  }
}
class nC {
  constructor(e, n) {
    ((this.Vr = e), (this.params = n));
  }
  calculateTargetCount(e, n) {
    return this.Vr.dr(e).next((r) => Math.floor((n / 100) * r));
  }
  nthSequenceNumber(e, n) {
    if (n === 0) return O.resolve(Pl.ce);
    const r = new eC(n);
    return this.Vr.forEachTarget(e, (s) => r.Ir(s.sequenceNumber))
      .next(() => this.Vr.mr(e, (s) => r.Ir(s)))
      .next(() => r.maxValue);
  }
  removeTargets(e, n, r) {
    return this.Vr.removeTargets(e, n, r);
  }
  removeOrphanedDocuments(e, n) {
    return this.Vr.removeOrphanedDocuments(e, n);
  }
  collect(e, n) {
    return this.params.cacheSizeCollectionThreshold === -1
      ? ($("LruGarbageCollector", "Garbage collection skipped; disabled"),
        O.resolve(Km))
      : this.getCacheSize(e).next((r) =>
          r < this.params.cacheSizeCollectionThreshold
            ? ($(
                "LruGarbageCollector",
                `Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`,
              ),
              Km)
            : this.gr(e, n),
        );
  }
  getCacheSize(e) {
    return this.Vr.getCacheSize(e);
  }
  gr(e, n) {
    let r, s, i, o, l, u, h;
    const d = Date.now();
    return this.calculateTargetCount(e, this.params.percentileToCollect)
      .next(
        (p) => (
          p > this.params.maximumSequenceNumbersToCollect
            ? ($(
                "LruGarbageCollector",
                `Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`,
              ),
              (s = this.params.maximumSequenceNumbersToCollect))
            : (s = p),
          (o = Date.now()),
          this.nthSequenceNumber(e, s)
        ),
      )
      .next((p) => ((r = p), (l = Date.now()), this.removeTargets(e, r, n)))
      .next(
        (p) => ((i = p), (u = Date.now()), this.removeOrphanedDocuments(e, r)),
      )
      .next(
        (p) => (
          (h = Date.now()),
          zr() <= re.DEBUG &&
            $(
              "LruGarbageCollector",
              `LRU Garbage Collection
	Counted targets in ${o - d}ms
	Determined least recently used ${s} in ` +
                (l - o) +
                `ms
	Removed ${i} targets in ` +
                (u - l) +
                `ms
	Removed ${p} documents in ` +
                (h - u) +
                `ms
Total Duration: ${h - d}ms`,
            ),
          O.resolve({
            didRun: !0,
            sequenceNumbersCollected: s,
            targetsRemoved: i,
            documentsRemoved: p,
          })
        ),
      );
  }
}
function rC(t, e) {
  return new nC(t, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sC {
  constructor() {
    ((this.changes = new Lr(
      (e) => e.toString(),
      (e, n) => e.isEqual(n),
    )),
      (this.changesApplied = !1));
  }
  addEntry(e) {
    (this.assertNotApplied(), this.changes.set(e.key, e));
  }
  removeEntry(e, n) {
    (this.assertNotApplied(),
      this.changes.set(e, Ze.newInvalidDocument(e).setReadTime(n)));
  }
  getEntry(e, n) {
    this.assertNotApplied();
    const r = this.changes.get(n);
    return r !== void 0 ? O.resolve(r) : this.getFromCache(e, n);
  }
  getEntries(e, n) {
    return this.getAllFromCache(e, n);
  }
  apply(e) {
    return (
      this.assertNotApplied(),
      (this.changesApplied = !0),
      this.applyChanges(e)
    );
  }
  assertNotApplied() {}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iC {
  constructor(e, n) {
    ((this.overlayedDocument = e), (this.mutatedFields = n));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oC {
  constructor(e, n, r, s) {
    ((this.remoteDocumentCache = e),
      (this.mutationQueue = n),
      (this.documentOverlayCache = r),
      (this.indexManager = s));
  }
  getDocument(e, n) {
    let r = null;
    return this.documentOverlayCache
      .getOverlay(e, n)
      .next((s) => ((r = s), this.remoteDocumentCache.getEntry(e, n)))
      .next((s) => (r !== null && ki(r.mutation, s, Mt.empty(), le.now()), s));
  }
  getDocuments(e, n) {
    return this.remoteDocumentCache
      .getEntries(e, n)
      .next((r) => this.getLocalViewOfDocuments(e, r, te()).next(() => r));
  }
  getLocalViewOfDocuments(e, n, r = te()) {
    const s = _r();
    return this.populateOverlays(e, s, n).next(() =>
      this.computeViews(e, n, s, r).next((i) => {
        let o = mi();
        return (
          i.forEach((l, u) => {
            o = o.insert(l, u.overlayedDocument);
          }),
          o
        );
      }),
    );
  }
  getOverlayedDocuments(e, n) {
    const r = _r();
    return this.populateOverlays(e, r, n).next(() =>
      this.computeViews(e, n, r, te()),
    );
  }
  populateOverlays(e, n, r) {
    const s = [];
    return (
      r.forEach((i) => {
        n.has(i) || s.push(i);
      }),
      this.documentOverlayCache.getOverlays(e, s).next((i) => {
        i.forEach((o, l) => {
          n.set(o, l);
        });
      })
    );
  }
  computeViews(e, n, r, s) {
    let i = yn();
    const o = Pi(),
      l = (function () {
        return Pi();
      })();
    return (
      n.forEach((u, h) => {
        const d = r.get(h.key);
        s.has(h.key) && (d === void 0 || d.mutation instanceof Mr)
          ? (i = i.insert(h.key, h))
          : d !== void 0
            ? (o.set(h.key, d.mutation.getFieldMask()),
              ki(d.mutation, h, d.mutation.getFieldMask(), le.now()))
            : o.set(h.key, Mt.empty());
      }),
      this.recalculateAndSaveOverlays(e, i).next(
        (u) => (
          u.forEach((h, d) => o.set(h, d)),
          n.forEach((h, d) => l.set(h, new iC(d, o.get(h) ?? null))),
          l
        ),
      )
    );
  }
  recalculateAndSaveOverlays(e, n) {
    const r = Pi();
    let s = new Ee((o, l) => o - l),
      i = te();
    return this.mutationQueue
      .getAllMutationBatchesAffectingDocumentKeys(e, n)
      .next((o) => {
        for (const l of o)
          l.keys().forEach((u) => {
            const h = n.get(u);
            if (h === null) return;
            let d = r.get(u) || Mt.empty();
            ((d = l.applyToLocalView(h, d)), r.set(u, d));
            const p = (s.get(l.batchId) || te()).add(u);
            s = s.insert(l.batchId, p);
          });
      })
      .next(() => {
        const o = [],
          l = s.getReverseIterator();
        for (; l.hasNext(); ) {
          const u = l.getNext(),
            h = u.key,
            d = u.value,
            p = b_();
          (d.forEach((m) => {
            if (!i.has(m)) {
              const T = H_(n.get(m), r.get(m));
              (T !== null && p.set(m, T), (i = i.add(m)));
            }
          }),
            o.push(this.documentOverlayCache.saveOverlays(e, h, p)));
        }
        return O.waitFor(o);
      })
      .next(() => r);
  }
  recalculateAndSaveOverlaysForDocumentKeys(e, n) {
    return this.remoteDocumentCache
      .getEntries(e, n)
      .next((r) => this.recalculateAndSaveOverlays(e, r));
  }
  getDocumentsMatchingQuery(e, n, r, s) {
    return aA(n)
      ? this.getDocumentsMatchingDocumentQuery(e, n.path)
      : lA(n)
        ? this.getDocumentsMatchingCollectionGroupQuery(e, n, r, s)
        : this.getDocumentsMatchingCollectionQuery(e, n, r, s);
  }
  getNextDocuments(e, n, r, s) {
    return this.remoteDocumentCache
      .getAllFromCollectionGroup(e, n, r, s)
      .next((i) => {
        const o =
          s - i.size > 0
            ? this.documentOverlayCache.getOverlaysForCollectionGroup(
                e,
                n,
                r.largestBatchId,
                s - i.size,
              )
            : O.resolve(_r());
        let l = Xi,
          u = i;
        return o.next((h) =>
          O.forEach(
            h,
            (d, p) => (
              l < p.largestBatchId && (l = p.largestBatchId),
              i.get(d)
                ? O.resolve()
                : this.remoteDocumentCache.getEntry(e, d).next((m) => {
                    u = u.insert(d, m);
                  })
            ),
          )
            .next(() => this.populateOverlays(e, h, i))
            .next(() => this.computeViews(e, u, h, te()))
            .next((d) => ({ batchId: l, changes: j_(d) })),
        );
      });
  }
  getDocumentsMatchingDocumentQuery(e, n) {
    return this.getDocument(e, new W(n)).next((r) => {
      let s = mi();
      return (r.isFoundDocument() && (s = s.insert(r.key, r)), s);
    });
  }
  getDocumentsMatchingCollectionGroupQuery(e, n, r, s) {
    const i = n.collectionGroup;
    let o = mi();
    return this.indexManager.getCollectionParents(e, i).next((l) =>
      O.forEach(l, (u) => {
        const h = (function (p, m) {
          return new Vl(
            m,
            null,
            p.explicitOrderBy.slice(),
            p.filters.slice(),
            p.limit,
            p.limitType,
            p.startAt,
            p.endAt,
          );
        })(n, u.child(i));
        return this.getDocumentsMatchingCollectionQuery(e, h, r, s).next(
          (d) => {
            d.forEach((p, m) => {
              o = o.insert(p, m);
            });
          },
        );
      }).next(() => o),
    );
  }
  getDocumentsMatchingCollectionQuery(e, n, r, s) {
    let i;
    return this.documentOverlayCache
      .getOverlaysForCollection(e, n.path, r.largestBatchId)
      .next(
        (o) => (
          (i = o),
          this.remoteDocumentCache.getDocumentsMatchingQuery(e, n, r, i, s)
        ),
      )
      .next((o) => {
        i.forEach((u, h) => {
          const d = h.getKey();
          o.get(d) === null && (o = o.insert(d, Ze.newInvalidDocument(d)));
        });
        let l = mi();
        return (
          o.forEach((u, h) => {
            const d = i.get(u);
            (d !== void 0 && ki(d.mutation, h, Mt.empty(), le.now()),
              Ll(n, h) && (l = l.insert(u, h)));
          }),
          l
        );
      });
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class aC {
  constructor(e) {
    ((this.serializer = e), (this.Nr = new Map()), (this.Br = new Map()));
  }
  getBundleMetadata(e, n) {
    return O.resolve(this.Nr.get(n));
  }
  saveBundleMetadata(e, n) {
    return (
      this.Nr.set(
        n.id,
        (function (s) {
          return { id: s.id, version: s.version, createTime: Jt(s.createTime) };
        })(n),
      ),
      O.resolve()
    );
  }
  getNamedQuery(e, n) {
    return O.resolve(this.Br.get(n));
  }
  saveNamedQuery(e, n) {
    return (
      this.Br.set(
        n.name,
        (function (s) {
          return {
            name: s.name,
            query: YA(s.bundledQuery),
            readTime: Jt(s.readTime),
          };
        })(n),
      ),
      O.resolve()
    );
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class lC {
  constructor() {
    ((this.overlays = new Ee(W.comparator)), (this.Lr = new Map()));
  }
  getOverlay(e, n) {
    return O.resolve(this.overlays.get(n));
  }
  getOverlays(e, n) {
    const r = _r();
    return O.forEach(n, (s) =>
      this.getOverlay(e, s).next((i) => {
        i !== null && r.set(s, i);
      }),
    ).next(() => r);
  }
  saveOverlays(e, n, r) {
    return (
      r.forEach((s, i) => {
        this.St(e, n, i);
      }),
      O.resolve()
    );
  }
  removeOverlaysForBatchId(e, n, r) {
    const s = this.Lr.get(r);
    return (
      s !== void 0 &&
        (s.forEach((i) => (this.overlays = this.overlays.remove(i))),
        this.Lr.delete(r)),
      O.resolve()
    );
  }
  getOverlaysForCollection(e, n, r) {
    const s = _r(),
      i = n.length + 1,
      o = new W(n.child("")),
      l = this.overlays.getIteratorFrom(o);
    for (; l.hasNext(); ) {
      const u = l.getNext().value,
        h = u.getKey();
      if (!n.isPrefixOf(h.path)) break;
      h.path.length === i && u.largestBatchId > r && s.set(u.getKey(), u);
    }
    return O.resolve(s);
  }
  getOverlaysForCollectionGroup(e, n, r, s) {
    let i = new Ee((h, d) => h - d);
    const o = this.overlays.getIterator();
    for (; o.hasNext(); ) {
      const h = o.getNext().value;
      if (h.getKey().getCollectionGroup() === n && h.largestBatchId > r) {
        let d = i.get(h.largestBatchId);
        (d === null && ((d = _r()), (i = i.insert(h.largestBatchId, d))),
          d.set(h.getKey(), h));
      }
    }
    const l = _r(),
      u = i.getIterator();
    for (
      ;
      u.hasNext() &&
      (u.getNext().value.forEach((h, d) => l.set(h, d)), !(l.size() >= s));
    );
    return O.resolve(l);
  }
  St(e, n, r) {
    const s = this.overlays.get(r.key);
    if (s !== null) {
      const o = this.Lr.get(s.largestBatchId).delete(r.key);
      this.Lr.set(s.largestBatchId, o);
    }
    this.overlays = this.overlays.insert(r.key, new AA(n, r));
    let i = this.Lr.get(n);
    (i === void 0 && ((i = te()), this.Lr.set(n, i)),
      this.Lr.set(n, i.add(r.key)));
  }
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class uC {
  constructor() {
    this.sessionToken = We.EMPTY_BYTE_STRING;
  }
  getSessionToken(e) {
    return O.resolve(this.sessionToken);
  }
  setSessionToken(e, n) {
    return ((this.sessionToken = n), O.resolve());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Vf {
  constructor() {
    ((this.kr = new Me(je.qr)), (this.Kr = new Me(je.Ur)));
  }
  isEmpty() {
    return this.kr.isEmpty();
  }
  addReference(e, n) {
    const r = new je(e, n);
    ((this.kr = this.kr.add(r)), (this.Kr = this.Kr.add(r)));
  }
  $r(e, n) {
    e.forEach((r) => this.addReference(r, n));
  }
  removeReference(e, n) {
    this.Wr(new je(e, n));
  }
  Qr(e, n) {
    e.forEach((r) => this.removeReference(r, n));
  }
  Gr(e) {
    const n = new W(new fe([])),
      r = new je(n, e),
      s = new je(n, e + 1),
      i = [];
    return (
      this.Kr.forEachInRange([r, s], (o) => {
        (this.Wr(o), i.push(o.key));
      }),
      i
    );
  }
  zr() {
    this.kr.forEach((e) => this.Wr(e));
  }
  Wr(e) {
    ((this.kr = this.kr.delete(e)), (this.Kr = this.Kr.delete(e)));
  }
  jr(e) {
    const n = new W(new fe([])),
      r = new je(n, e),
      s = new je(n, e + 1);
    let i = te();
    return (
      this.Kr.forEachInRange([r, s], (o) => {
        i = i.add(o.key);
      }),
      i
    );
  }
  containsKey(e) {
    const n = new je(e, 0),
      r = this.kr.firstAfterOrEqual(n);
    return r !== null && e.isEqual(r.key);
  }
}
class je {
  constructor(e, n) {
    ((this.key = e), (this.Jr = n));
  }
  static qr(e, n) {
    return W.comparator(e.key, n.key) || ee(e.Jr, n.Jr);
  }
  static Ur(e, n) {
    return ee(e.Jr, n.Jr) || W.comparator(e.key, n.key);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class cC {
  constructor(e, n) {
    ((this.indexManager = e),
      (this.referenceDelegate = n),
      (this.mutationQueue = []),
      (this.Yn = 1),
      (this.Hr = new Me(je.qr)));
  }
  checkEmpty(e) {
    return O.resolve(this.mutationQueue.length === 0);
  }
  addMutationBatch(e, n, r, s) {
    const i = this.Yn;
    (this.Yn++,
      this.mutationQueue.length > 0 &&
        this.mutationQueue[this.mutationQueue.length - 1]);
    const o = new RA(i, n, r, s);
    this.mutationQueue.push(o);
    for (const l of s)
      ((this.Hr = this.Hr.add(new je(l.key, i))),
        this.indexManager.addToCollectionParentIndex(e, l.key.path.popLast()));
    return O.resolve(o);
  }
  lookupMutationBatch(e, n) {
    return O.resolve(this.Zr(n));
  }
  getNextMutationBatchAfterBatchId(e, n) {
    const r = n + 1,
      s = this.Xr(r),
      i = s < 0 ? 0 : s;
    return O.resolve(
      this.mutationQueue.length > i ? this.mutationQueue[i] : null,
    );
  }
  getHighestUnacknowledgedBatchId() {
    return O.resolve(this.mutationQueue.length === 0 ? Tf : this.Yn - 1);
  }
  getAllMutationBatches(e) {
    return O.resolve(this.mutationQueue.slice());
  }
  getAllMutationBatchesAffectingDocumentKey(e, n) {
    const r = new je(n, 0),
      s = new je(n, Number.POSITIVE_INFINITY),
      i = [];
    return (
      this.Hr.forEachInRange([r, s], (o) => {
        const l = this.Zr(o.Jr);
        i.push(l);
      }),
      O.resolve(i)
    );
  }
  getAllMutationBatchesAffectingDocumentKeys(e, n) {
    let r = new Me(ee);
    return (
      n.forEach((s) => {
        const i = new je(s, 0),
          o = new je(s, Number.POSITIVE_INFINITY);
        this.Hr.forEachInRange([i, o], (l) => {
          r = r.add(l.Jr);
        });
      }),
      O.resolve(this.Yr(r))
    );
  }
  getAllMutationBatchesAffectingQuery(e, n) {
    const r = n.path,
      s = r.length + 1;
    let i = r;
    W.isDocumentKey(i) || (i = i.child(""));
    const o = new je(new W(i), 0);
    let l = new Me(ee);
    return (
      this.Hr.forEachWhile((u) => {
        const h = u.key.path;
        return !!r.isPrefixOf(h) && (h.length === s && (l = l.add(u.Jr)), !0);
      }, o),
      O.resolve(this.Yr(l))
    );
  }
  Yr(e) {
    const n = [];
    return (
      e.forEach((r) => {
        const s = this.Zr(r);
        s !== null && n.push(s);
      }),
      n
    );
  }
  removeMutationBatch(e, n) {
    (ie(this.ei(n.batchId, "removed") === 0, 55003),
      this.mutationQueue.shift());
    let r = this.Hr;
    return O.forEach(n.mutations, (s) => {
      const i = new je(s.key, n.batchId);
      return (
        (r = r.delete(i)),
        this.referenceDelegate.markPotentiallyOrphaned(e, s.key)
      );
    }).next(() => {
      this.Hr = r;
    });
  }
  nr(e) {}
  containsKey(e, n) {
    const r = new je(n, 0),
      s = this.Hr.firstAfterOrEqual(r);
    return O.resolve(n.isEqual(s && s.key));
  }
  performConsistencyCheck(e) {
    return (this.mutationQueue.length, O.resolve());
  }
  ei(e, n) {
    return this.Xr(e);
  }
  Xr(e) {
    return this.mutationQueue.length === 0
      ? 0
      : e - this.mutationQueue[0].batchId;
  }
  Zr(e) {
    const n = this.Xr(e);
    return n < 0 || n >= this.mutationQueue.length
      ? null
      : this.mutationQueue[n];
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class hC {
  constructor(e) {
    ((this.ti = e),
      (this.docs = (function () {
        return new Ee(W.comparator);
      })()),
      (this.size = 0));
  }
  setIndexManager(e) {
    this.indexManager = e;
  }
  addEntry(e, n) {
    const r = n.key,
      s = this.docs.get(r),
      i = s ? s.size : 0,
      o = this.ti(n);
    return (
      (this.docs = this.docs.insert(r, { document: n.mutableCopy(), size: o })),
      (this.size += o - i),
      this.indexManager.addToCollectionParentIndex(e, r.path.popLast())
    );
  }
  removeEntry(e) {
    const n = this.docs.get(e);
    n && ((this.docs = this.docs.remove(e)), (this.size -= n.size));
  }
  getEntry(e, n) {
    const r = this.docs.get(n);
    return O.resolve(r ? r.document.mutableCopy() : Ze.newInvalidDocument(n));
  }
  getEntries(e, n) {
    let r = yn();
    return (
      n.forEach((s) => {
        const i = this.docs.get(s);
        r = r.insert(
          s,
          i ? i.document.mutableCopy() : Ze.newInvalidDocument(s),
        );
      }),
      O.resolve(r)
    );
  }
  getDocumentsMatchingQuery(e, n, r, s) {
    let i = yn();
    const o = n.path,
      l = new W(o.child("__id-9223372036854775808__")),
      u = this.docs.getIteratorFrom(l);
    for (; u.hasNext(); ) {
      const {
        key: h,
        value: { document: d },
      } = u.getNext();
      if (!o.isPrefixOf(h.path)) break;
      h.path.length > o.length + 1 ||
        FR(OR(d), r) <= 0 ||
        ((s.has(d.key) || Ll(n, d)) && (i = i.insert(d.key, d.mutableCopy())));
    }
    return O.resolve(i);
  }
  getAllFromCollectionGroup(e, n, r, s) {
    q(9500);
  }
  ni(e, n) {
    return O.forEach(this.docs, (r) => n(r));
  }
  newChangeBuffer(e) {
    return new fC(this);
  }
  getSize(e) {
    return O.resolve(this.size);
  }
}
class fC extends sC {
  constructor(e) {
    (super(), (this.Mr = e));
  }
  applyChanges(e) {
    const n = [];
    return (
      this.changes.forEach((r, s) => {
        s.isValidDocument()
          ? n.push(this.Mr.addEntry(e, s))
          : this.Mr.removeEntry(r);
      }),
      O.waitFor(n)
    );
  }
  getFromCache(e, n) {
    return this.Mr.getEntry(e, n);
  }
  getAllFromCache(e, n) {
    return this.Mr.getEntries(e, n);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class dC {
  constructor(e) {
    ((this.persistence = e),
      (this.ri = new Lr((n) => Rf(n), Af)),
      (this.lastRemoteSnapshotVersion = Q.min()),
      (this.highestTargetId = 0),
      (this.ii = 0),
      (this.si = new Vf()),
      (this.targetCount = 0),
      (this.oi = Ss._r()));
  }
  forEachTarget(e, n) {
    return (this.ri.forEach((r, s) => n(s)), O.resolve());
  }
  getLastRemoteSnapshotVersion(e) {
    return O.resolve(this.lastRemoteSnapshotVersion);
  }
  getHighestSequenceNumber(e) {
    return O.resolve(this.ii);
  }
  allocateTargetId(e) {
    return (
      (this.highestTargetId = this.oi.next()),
      O.resolve(this.highestTargetId)
    );
  }
  setTargetsMetadata(e, n, r) {
    return (
      r && (this.lastRemoteSnapshotVersion = r),
      n > this.ii && (this.ii = n),
      O.resolve()
    );
  }
  lr(e) {
    this.ri.set(e.target, e);
    const n = e.targetId;
    (n > this.highestTargetId &&
      ((this.oi = new Ss(n)), (this.highestTargetId = n)),
      e.sequenceNumber > this.ii && (this.ii = e.sequenceNumber));
  }
  addTargetData(e, n) {
    return (this.lr(n), (this.targetCount += 1), O.resolve());
  }
  updateTargetData(e, n) {
    return (this.lr(n), O.resolve());
  }
  removeTargetData(e, n) {
    return (
      this.ri.delete(n.target),
      this.si.Gr(n.targetId),
      (this.targetCount -= 1),
      O.resolve()
    );
  }
  removeTargets(e, n, r) {
    let s = 0;
    const i = [];
    return (
      this.ri.forEach((o, l) => {
        l.sequenceNumber <= n &&
          r.get(l.targetId) === null &&
          (this.ri.delete(o),
          i.push(this.removeMatchingKeysForTargetId(e, l.targetId)),
          s++);
      }),
      O.waitFor(i).next(() => s)
    );
  }
  getTargetCount(e) {
    return O.resolve(this.targetCount);
  }
  getTargetData(e, n) {
    const r = this.ri.get(n) || null;
    return O.resolve(r);
  }
  addMatchingKeys(e, n, r) {
    return (this.si.$r(n, r), O.resolve());
  }
  removeMatchingKeys(e, n, r) {
    this.si.Qr(n, r);
    const s = this.persistence.referenceDelegate,
      i = [];
    return (
      s &&
        n.forEach((o) => {
          i.push(s.markPotentiallyOrphaned(e, o));
        }),
      O.waitFor(i)
    );
  }
  removeMatchingKeysForTargetId(e, n) {
    return (this.si.Gr(n), O.resolve());
  }
  getMatchingKeysForTargetId(e, n) {
    const r = this.si.jr(n);
    return O.resolve(r);
  }
  containsKey(e, n) {
    return O.resolve(this.si.containsKey(n));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oE {
  constructor(e, n) {
    ((this._i = {}),
      (this.overlays = {}),
      (this.ai = new Pl(0)),
      (this.ui = !1),
      (this.ui = !0),
      (this.ci = new uC()),
      (this.referenceDelegate = e(this)),
      (this.li = new dC(this)),
      (this.indexManager = new JA()),
      (this.remoteDocumentCache = (function (s) {
        return new hC(s);
      })((r) => this.referenceDelegate.hi(r))),
      (this.serializer = new QA(n)),
      (this.Pi = new aC(this.serializer)));
  }
  start() {
    return Promise.resolve();
  }
  shutdown() {
    return ((this.ui = !1), Promise.resolve());
  }
  get started() {
    return this.ui;
  }
  setDatabaseDeletedListener() {}
  setNetworkEnabled() {}
  getIndexManager(e) {
    return this.indexManager;
  }
  getDocumentOverlayCache(e) {
    let n = this.overlays[e.toKey()];
    return (n || ((n = new lC()), (this.overlays[e.toKey()] = n)), n);
  }
  getMutationQueue(e, n) {
    let r = this._i[e.toKey()];
    return (
      r || ((r = new cC(n, this.referenceDelegate)), (this._i[e.toKey()] = r)),
      r
    );
  }
  getGlobalsCache() {
    return this.ci;
  }
  getTargetCache() {
    return this.li;
  }
  getRemoteDocumentCache() {
    return this.remoteDocumentCache;
  }
  getBundleCache() {
    return this.Pi;
  }
  runTransaction(e, n, r) {
    $("MemoryPersistence", "Starting transaction:", e);
    const s = new pC(this.ai.next());
    return (
      this.referenceDelegate.Ti(),
      r(s)
        .next((i) => this.referenceDelegate.Ei(s).next(() => i))
        .toPromise()
        .then((i) => (s.raiseOnCommittedEvent(), i))
    );
  }
  Ii(e, n) {
    return O.or(Object.values(this._i).map((r) => () => r.containsKey(e, n)));
  }
}
class pC extends bR {
  constructor(e) {
    (super(), (this.currentSequenceNumber = e));
  }
}
class Df {
  constructor(e) {
    ((this.persistence = e), (this.Ri = new Vf()), (this.Ai = null));
  }
  static Vi(e) {
    return new Df(e);
  }
  get di() {
    if (this.Ai) return this.Ai;
    throw q(60996);
  }
  addReference(e, n, r) {
    return (
      this.Ri.addReference(r, n),
      this.di.delete(r.toString()),
      O.resolve()
    );
  }
  removeReference(e, n, r) {
    return (
      this.Ri.removeReference(r, n),
      this.di.add(r.toString()),
      O.resolve()
    );
  }
  markPotentiallyOrphaned(e, n) {
    return (this.di.add(n.toString()), O.resolve());
  }
  removeTarget(e, n) {
    this.Ri.Gr(n.targetId).forEach((s) => this.di.add(s.toString()));
    const r = this.persistence.getTargetCache();
    return r
      .getMatchingKeysForTargetId(e, n.targetId)
      .next((s) => {
        s.forEach((i) => this.di.add(i.toString()));
      })
      .next(() => r.removeTargetData(e, n));
  }
  Ti() {
    this.Ai = new Set();
  }
  Ei(e) {
    const n = this.persistence.getRemoteDocumentCache().newChangeBuffer();
    return O.forEach(this.di, (r) => {
      const s = W.fromPath(r);
      return this.mi(e, s).next((i) => {
        i || n.removeEntry(s, Q.min());
      });
    }).next(() => ((this.Ai = null), n.apply(e)));
  }
  updateLimboDocument(e, n) {
    return this.mi(e, n).next((r) => {
      r ? this.di.delete(n.toString()) : this.di.add(n.toString());
    });
  }
  hi(e) {
    return 0;
  }
  mi(e, n) {
    return O.or([
      () => O.resolve(this.Ri.containsKey(n)),
      () => this.persistence.getTargetCache().containsKey(e, n),
      () => this.persistence.Ii(e, n),
    ]);
  }
}
class ol {
  constructor(e, n) {
    ((this.persistence = e),
      (this.fi = new Lr(
        (r) => BR(r.path),
        (r, s) => r.isEqual(s),
      )),
      (this.garbageCollector = rC(this, n)));
  }
  static Vi(e, n) {
    return new ol(e, n);
  }
  Ti() {}
  Ei(e) {
    return O.resolve();
  }
  forEachTarget(e, n) {
    return this.persistence.getTargetCache().forEachTarget(e, n);
  }
  dr(e) {
    const n = this.pr(e);
    return this.persistence
      .getTargetCache()
      .getTargetCount(e)
      .next((r) => n.next((s) => r + s));
  }
  pr(e) {
    let n = 0;
    return this.mr(e, (r) => {
      n++;
    }).next(() => n);
  }
  mr(e, n) {
    return O.forEach(this.fi, (r, s) =>
      this.wr(e, r, s).next((i) => (i ? O.resolve() : n(s))),
    );
  }
  removeTargets(e, n, r) {
    return this.persistence.getTargetCache().removeTargets(e, n, r);
  }
  removeOrphanedDocuments(e, n) {
    let r = 0;
    const s = this.persistence.getRemoteDocumentCache(),
      i = s.newChangeBuffer();
    return s
      .ni(e, (o) =>
        this.wr(e, o, n).next((l) => {
          l || (r++, i.removeEntry(o, Q.min()));
        }),
      )
      .next(() => i.apply(e))
      .next(() => r);
  }
  markPotentiallyOrphaned(e, n) {
    return (this.fi.set(n, e.currentSequenceNumber), O.resolve());
  }
  removeTarget(e, n) {
    const r = n.withSequenceNumber(e.currentSequenceNumber);
    return this.persistence.getTargetCache().updateTargetData(e, r);
  }
  addReference(e, n, r) {
    return (this.fi.set(r, e.currentSequenceNumber), O.resolve());
  }
  removeReference(e, n, r) {
    return (this.fi.set(r, e.currentSequenceNumber), O.resolve());
  }
  updateLimboDocument(e, n) {
    return (this.fi.set(n, e.currentSequenceNumber), O.resolve());
  }
  hi(e) {
    let n = e.key.toString().length;
    return (e.isFoundDocument() && (n += ga(e.data.value)), n);
  }
  wr(e, n, r) {
    return O.or([
      () => this.persistence.Ii(e, n),
      () => this.persistence.getTargetCache().containsKey(e, n),
      () => {
        const s = this.fi.get(n);
        return O.resolve(s !== void 0 && s > r);
      },
    ]);
  }
  getCacheSize(e) {
    return this.persistence.getRemoteDocumentCache().getSize(e);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Lf {
  constructor(e, n, r, s) {
    ((this.targetId = e), (this.fromCache = n), (this.Ts = r), (this.Es = s));
  }
  static Is(e, n) {
    let r = te(),
      s = te();
    for (const i of n.docChanges)
      switch (i.type) {
        case 0:
          r = r.add(i.doc.key);
          break;
        case 1:
          s = s.add(i.doc.key);
      }
    return new Lf(e, n.fromCache, r, s);
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class mC {
  constructor() {
    this._documentReadCount = 0;
  }
  get documentReadCount() {
    return this._documentReadCount;
  }
  incrementDocumentReadCount(e) {
    this._documentReadCount += e;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class gC {
  constructor() {
    ((this.Rs = !1),
      (this.As = !1),
      (this.Vs = 100),
      (this.ds = (function () {
        return sI() ? 8 : UR(nI()) > 0 ? 6 : 4;
      })()));
  }
  initialize(e, n) {
    ((this.fs = e), (this.indexManager = n), (this.Rs = !0));
  }
  getDocumentsMatchingQuery(e, n, r, s) {
    const i = { result: null };
    return this.gs(e, n)
      .next((o) => {
        i.result = o;
      })
      .next(() => {
        if (!i.result)
          return this.ps(e, n, s, r).next((o) => {
            i.result = o;
          });
      })
      .next(() => {
        if (i.result) return;
        const o = new mC();
        return this.ys(e, n, o).next((l) => {
          if (((i.result = l), this.As)) return this.ws(e, n, o, l.size);
        });
      })
      .next(() => i.result);
  }
  ws(e, n, r, s) {
    return r.documentReadCount < this.Vs
      ? (zr() <= re.DEBUG &&
          $(
            "QueryEngine",
            "SDK will not create cache indexes for query:",
            Br(n),
            "since it only creates cache indexes for collection contains",
            "more than or equal to",
            this.Vs,
            "documents",
          ),
        O.resolve())
      : (zr() <= re.DEBUG &&
          $(
            "QueryEngine",
            "Query:",
            Br(n),
            "scans",
            r.documentReadCount,
            "local documents and returns",
            s,
            "documents as results.",
          ),
        r.documentReadCount > this.ds * s
          ? (zr() <= re.DEBUG &&
              $(
                "QueryEngine",
                "The SDK decides to create cache indexes for query:",
                Br(n),
                "as using cache indexes may help improve performance.",
              ),
            this.indexManager.createTargetIndexes(e, Qt(n)))
          : O.resolve());
  }
  gs(e, n) {
    if (jm(n)) return O.resolve(null);
    let r = Qt(n);
    return this.indexManager.getIndexType(e, r).next((s) =>
      s === 0
        ? null
        : (n.limit !== null && s === 1 && ((n = rh(n, null, "F")), (r = Qt(n))),
          this.indexManager.getDocumentsMatchingTarget(e, r).next((i) => {
            const o = te(...i);
            return this.fs.getDocuments(e, o).next((l) =>
              this.indexManager.getMinOffset(e, r).next((u) => {
                const h = this.Ss(n, l);
                return this.bs(n, h, o, u.readTime)
                  ? this.gs(e, rh(n, null, "F"))
                  : this.Ds(e, h, n, u);
              }),
            );
          })),
    );
  }
  ps(e, n, r, s) {
    return jm(n) || s.isEqual(Q.min())
      ? O.resolve(null)
      : this.fs.getDocuments(e, r).next((i) => {
          const o = this.Ss(n, i);
          return this.bs(n, o, r, s)
            ? O.resolve(null)
            : (zr() <= re.DEBUG &&
                $(
                  "QueryEngine",
                  "Re-using previous result from %s to execute query: %s",
                  s.toString(),
                  Br(n),
                ),
              this.Ds(e, o, n, MR(s, Xi)).next((l) => l));
        });
  }
  Ss(e, n) {
    let r = new Me(O_(e));
    return (
      n.forEach((s, i) => {
        Ll(e, i) && (r = r.add(i));
      }),
      r
    );
  }
  bs(e, n, r, s) {
    if (e.limit === null) return !1;
    if (r.size !== n.size) return !0;
    const i = e.limitType === "F" ? n.last() : n.first();
    return !!i && (i.hasPendingWrites || i.version.compareTo(s) > 0);
  }
  ys(e, n, r) {
    return (
      zr() <= re.DEBUG &&
        $("QueryEngine", "Using full collection scan to execute query:", Br(n)),
      this.fs.getDocumentsMatchingQuery(e, n, Jn.min(), r)
    );
  }
  Ds(e, n, r, s) {
    return this.fs.getDocumentsMatchingQuery(e, r, s).next(
      (i) => (
        n.forEach((o) => {
          i = i.insert(o.key, o);
        }),
        i
      ),
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Mf = "LocalStore",
  yC = 3e8;
class vC {
  constructor(e, n, r, s) {
    ((this.persistence = e),
      (this.Cs = n),
      (this.serializer = s),
      (this.vs = new Ee(ee)),
      (this.Fs = new Lr((i) => Rf(i), Af)),
      (this.Ms = new Map()),
      (this.xs = e.getRemoteDocumentCache()),
      (this.li = e.getTargetCache()),
      (this.Pi = e.getBundleCache()),
      this.Os(r));
  }
  Os(e) {
    ((this.documentOverlayCache = this.persistence.getDocumentOverlayCache(e)),
      (this.indexManager = this.persistence.getIndexManager(e)),
      (this.mutationQueue = this.persistence.getMutationQueue(
        e,
        this.indexManager,
      )),
      (this.localDocuments = new oC(
        this.xs,
        this.mutationQueue,
        this.documentOverlayCache,
        this.indexManager,
      )),
      this.xs.setIndexManager(this.indexManager),
      this.Cs.initialize(this.localDocuments, this.indexManager));
  }
  collectGarbage(e) {
    return this.persistence.runTransaction(
      "Collect garbage",
      "readwrite-primary",
      (n) => e.collect(n, this.vs),
    );
  }
}
function _C(t, e, n, r) {
  return new vC(t, e, n, r);
}
async function aE(t, e) {
  const n = Y(t);
  return await n.persistence.runTransaction(
    "Handle user change",
    "readonly",
    (r) => {
      let s;
      return n.mutationQueue
        .getAllMutationBatches(r)
        .next(
          (i) => ((s = i), n.Os(e), n.mutationQueue.getAllMutationBatches(r)),
        )
        .next((i) => {
          const o = [],
            l = [];
          let u = te();
          for (const h of s) {
            o.push(h.batchId);
            for (const d of h.mutations) u = u.add(d.key);
          }
          for (const h of i) {
            l.push(h.batchId);
            for (const d of h.mutations) u = u.add(d.key);
          }
          return n.localDocuments
            .getDocuments(r, u)
            .next((h) => ({ Ns: h, removedBatchIds: o, addedBatchIds: l }));
        });
    },
  );
}
function EC(t, e) {
  const n = Y(t);
  return n.persistence.runTransaction(
    "Acknowledge batch",
    "readwrite-primary",
    (r) => {
      const s = e.batch.keys(),
        i = n.xs.newChangeBuffer({ trackRemovals: !0 });
      return (function (l, u, h, d) {
        const p = h.batch,
          m = p.keys();
        let T = O.resolve();
        return (
          m.forEach((x) => {
            T = T.next(() => d.getEntry(u, x)).next((P) => {
              const D = h.docVersions.get(x);
              (ie(D !== null, 48541),
                P.version.compareTo(D) < 0 &&
                  (p.applyToRemoteDocument(P, h),
                  P.isValidDocument() &&
                    (P.setReadTime(h.commitVersion), d.addEntry(P))));
            });
          }),
          T.next(() => l.mutationQueue.removeMutationBatch(u, p))
        );
      })(n, r, e, i)
        .next(() => i.apply(r))
        .next(() => n.mutationQueue.performConsistencyCheck(r))
        .next(() =>
          n.documentOverlayCache.removeOverlaysForBatchId(
            r,
            s,
            e.batch.batchId,
          ),
        )
        .next(() =>
          n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(
            r,
            (function (l) {
              let u = te();
              for (let h = 0; h < l.mutationResults.length; ++h)
                l.mutationResults[h].transformResults.length > 0 &&
                  (u = u.add(l.batch.mutations[h].key));
              return u;
            })(e),
          ),
        )
        .next(() => n.localDocuments.getDocuments(r, s));
    },
  );
}
function lE(t) {
  const e = Y(t);
  return e.persistence.runTransaction(
    "Get last remote snapshot version",
    "readonly",
    (n) => e.li.getLastRemoteSnapshotVersion(n),
  );
}
function wC(t, e) {
  const n = Y(t),
    r = e.snapshotVersion;
  let s = n.vs;
  return n.persistence
    .runTransaction("Apply remote event", "readwrite-primary", (i) => {
      const o = n.xs.newChangeBuffer({ trackRemovals: !0 });
      s = n.vs;
      const l = [];
      e.targetChanges.forEach((d, p) => {
        const m = s.get(p);
        if (!m) return;
        l.push(
          n.li
            .removeMatchingKeys(i, d.removedDocuments, p)
            .next(() => n.li.addMatchingKeys(i, d.addedDocuments, p)),
        );
        let T = m.withSequenceNumber(i.currentSequenceNumber);
        (e.targetMismatches.get(p) !== null
          ? (T = T.withResumeToken(
              We.EMPTY_BYTE_STRING,
              Q.min(),
            ).withLastLimboFreeSnapshotVersion(Q.min()))
          : d.resumeToken.approximateByteSize() > 0 &&
            (T = T.withResumeToken(d.resumeToken, r)),
          (s = s.insert(p, T)),
          (function (P, D, _) {
            return P.resumeToken.approximateByteSize() === 0 ||
              D.snapshotVersion.toMicroseconds() -
                P.snapshotVersion.toMicroseconds() >=
                yC
              ? !0
              : _.addedDocuments.size +
                  _.modifiedDocuments.size +
                  _.removedDocuments.size >
                  0;
          })(m, T, d) && l.push(n.li.updateTargetData(i, T)));
      });
      let u = yn(),
        h = te();
      if (
        (e.documentUpdates.forEach((d) => {
          e.resolvedLimboDocuments.has(d) &&
            l.push(n.persistence.referenceDelegate.updateLimboDocument(i, d));
        }),
        l.push(
          TC(i, o, e.documentUpdates).next((d) => {
            ((u = d.Bs), (h = d.Ls));
          }),
        ),
        !r.isEqual(Q.min()))
      ) {
        const d = n.li
          .getLastRemoteSnapshotVersion(i)
          .next((p) => n.li.setTargetsMetadata(i, i.currentSequenceNumber, r));
        l.push(d);
      }
      return O.waitFor(l)
        .next(() => o.apply(i))
        .next(() => n.localDocuments.getLocalViewOfDocuments(i, u, h))
        .next(() => u);
    })
    .then((i) => ((n.vs = s), i));
}
function TC(t, e, n) {
  let r = te(),
    s = te();
  return (
    n.forEach((i) => (r = r.add(i))),
    e.getEntries(t, r).next((i) => {
      let o = yn();
      return (
        n.forEach((l, u) => {
          const h = i.get(l);
          (u.isFoundDocument() !== h.isFoundDocument() && (s = s.add(l)),
            u.isNoDocument() && u.version.isEqual(Q.min())
              ? (e.removeEntry(l, u.readTime), (o = o.insert(l, u)))
              : !h.isValidDocument() ||
                  u.version.compareTo(h.version) > 0 ||
                  (u.version.compareTo(h.version) === 0 && h.hasPendingWrites)
                ? (e.addEntry(u), (o = o.insert(l, u)))
                : $(
                    Mf,
                    "Ignoring outdated watch update for ",
                    l,
                    ". Current version:",
                    h.version,
                    " Watch version:",
                    u.version,
                  ));
        }),
        { Bs: o, Ls: s }
      );
    })
  );
}
function SC(t, e) {
  const n = Y(t);
  return n.persistence.runTransaction(
    "Get next mutation batch",
    "readonly",
    (r) => (
      e === void 0 && (e = Tf),
      n.mutationQueue.getNextMutationBatchAfterBatchId(r, e)
    ),
  );
}
function IC(t, e) {
  const n = Y(t);
  return n.persistence
    .runTransaction("Allocate target", "readwrite", (r) => {
      let s;
      return n.li
        .getTargetData(r, e)
        .next((i) =>
          i
            ? ((s = i), O.resolve(s))
            : n.li
                .allocateTargetId(r)
                .next(
                  (o) => (
                    (s = new Mn(
                      e,
                      o,
                      "TargetPurposeListen",
                      r.currentSequenceNumber,
                    )),
                    n.li.addTargetData(r, s).next(() => s)
                  ),
                ),
        );
    })
    .then((r) => {
      const s = n.vs.get(r.targetId);
      return (
        (s === null || r.snapshotVersion.compareTo(s.snapshotVersion) > 0) &&
          ((n.vs = n.vs.insert(r.targetId, r)), n.Fs.set(e, r.targetId)),
        r
      );
    });
}
async function lh(t, e, n) {
  const r = Y(t),
    s = r.vs.get(e),
    i = n ? "readwrite" : "readwrite-primary";
  try {
    n ||
      (await r.persistence.runTransaction("Release target", i, (o) =>
        r.persistence.referenceDelegate.removeTarget(o, s),
      ));
  } catch (o) {
    if (!Ds(o)) throw o;
    $(Mf, `Failed to update sequence numbers for target ${e}: ${o}`);
  }
  ((r.vs = r.vs.remove(e)), r.Fs.delete(s.target));
}
function Jm(t, e, n) {
  const r = Y(t);
  let s = Q.min(),
    i = te();
  return r.persistence.runTransaction("Execute query", "readwrite", (o) =>
    (function (u, h, d) {
      const p = Y(u),
        m = p.Fs.get(d);
      return m !== void 0 ? O.resolve(p.vs.get(m)) : p.li.getTargetData(h, d);
    })(r, o, Qt(e))
      .next((l) => {
        if (l)
          return (
            (s = l.lastLimboFreeSnapshotVersion),
            r.li.getMatchingKeysForTargetId(o, l.targetId).next((u) => {
              i = u;
            })
          );
      })
      .next(() =>
        r.Cs.getDocumentsMatchingQuery(o, e, n ? s : Q.min(), n ? i : te()),
      )
      .next((l) => (RC(r, cA(e), l), { documents: l, ks: i })),
  );
}
function RC(t, e, n) {
  let r = t.Ms.get(e) || Q.min();
  (n.forEach((s, i) => {
    i.readTime.compareTo(r) > 0 && (r = i.readTime);
  }),
    t.Ms.set(e, r));
}
class Xm {
  constructor() {
    this.activeTargetIds = gA();
  }
  Qs(e) {
    this.activeTargetIds = this.activeTargetIds.add(e);
  }
  Gs(e) {
    this.activeTargetIds = this.activeTargetIds.delete(e);
  }
  Ws() {
    const e = {
      activeTargetIds: this.activeTargetIds.toArray(),
      updateTimeMs: Date.now(),
    };
    return JSON.stringify(e);
  }
}
class AC {
  constructor() {
    ((this.vo = new Xm()),
      (this.Fo = {}),
      (this.onlineStateHandler = null),
      (this.sequenceNumberHandler = null));
  }
  addPendingMutation(e) {}
  updateMutationState(e, n, r) {}
  addLocalQueryTarget(e, n = !0) {
    return (n && this.vo.Qs(e), this.Fo[e] || "not-current");
  }
  updateQueryState(e, n, r) {
    this.Fo[e] = n;
  }
  removeLocalQueryTarget(e) {
    this.vo.Gs(e);
  }
  isLocalQueryTarget(e) {
    return this.vo.activeTargetIds.has(e);
  }
  clearQueryState(e) {
    delete this.Fo[e];
  }
  getAllActiveQueryTargets() {
    return this.vo.activeTargetIds;
  }
  isActiveQueryTarget(e) {
    return this.vo.activeTargetIds.has(e);
  }
  start() {
    return ((this.vo = new Xm()), Promise.resolve());
  }
  handleUserChange(e, n, r) {}
  setOnlineState(e) {}
  shutdown() {}
  writeSequenceNumber(e) {}
  notifyBundleLoaded(e) {}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class CC {
  Mo(e) {}
  shutdown() {}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Zm = "ConnectivityMonitor";
class eg {
  constructor() {
    ((this.xo = () => this.Oo()),
      (this.No = () => this.Bo()),
      (this.Lo = []),
      this.ko());
  }
  Mo(e) {
    this.Lo.push(e);
  }
  shutdown() {
    (window.removeEventListener("online", this.xo),
      window.removeEventListener("offline", this.No));
  }
  ko() {
    (window.addEventListener("online", this.xo),
      window.addEventListener("offline", this.No));
  }
  Oo() {
    $(Zm, "Network connectivity changed: AVAILABLE");
    for (const e of this.Lo) e(0);
  }
  Bo() {
    $(Zm, "Network connectivity changed: UNAVAILABLE");
    for (const e of this.Lo) e(1);
  }
  static v() {
    return (
      typeof window < "u" &&
      window.addEventListener !== void 0 &&
      window.removeEventListener !== void 0
    );
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Zo = null;
function uh() {
  return (
    Zo === null
      ? (Zo = (function () {
          return 268435456 + Math.round(2147483648 * Math.random());
        })())
      : Zo++,
    "0x" + Zo.toString(16)
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ku = "RestConnection",
  xC = {
    BatchGetDocuments: "batchGet",
    Commit: "commit",
    RunQuery: "runQuery",
    RunAggregationQuery: "runAggregationQuery",
    ExecutePipeline: "executePipeline",
  };
class PC {
  get qo() {
    return !1;
  }
  constructor(e) {
    ((this.databaseInfo = e), (this.databaseId = e.databaseId));
    const n = e.ssl ? "https" : "http",
      r = encodeURIComponent(this.databaseId.projectId),
      s = encodeURIComponent(this.databaseId.database);
    ((this.Ko = n + "://" + e.host),
      (this.Uo = `projects/${r}/databases/${s}`),
      (this.$o =
        this.databaseId.database === Za
          ? `project_id=${r}`
          : `project_id=${r}&database_id=${s}`));
  }
  Wo(e, n, r, s, i) {
    const o = uh(),
      l = this.Qo(e, n.toUriEncodedString());
    $(Ku, `Sending RPC '${e}' ${o}:`, l, r);
    const u = {
      "google-cloud-resource-prefix": this.Uo,
      "x-goog-request-params": this.$o,
    };
    this.Go(u, s, i);
    const { host: h } = new URL(l),
      d = n_(h);
    return this.zo(e, l, u, r, d).then(
      (p) => ($(Ku, `Received RPC '${e}' ${o}: `, p), p),
      (p) => {
        throw (
          Pr(
            Ku,
            `RPC '${e}' ${o} failed with error: `,
            p,
            "url: ",
            l,
            "request:",
            r,
          ),
          p
        );
      },
    );
  }
  jo(e, n, r, s, i, o) {
    return this.Wo(e, n, r, s, i);
  }
  Go(e, n, r) {
    ((e["X-Goog-Api-Client"] = (function () {
      return "gl-js/ fire/" + Ns;
    })()),
      (e["Content-Type"] = "text/plain"),
      this.databaseInfo.appId &&
        (e["X-Firebase-GMPID"] = this.databaseInfo.appId),
      n && n.headers.forEach((s, i) => (e[i] = s)),
      r && r.headers.forEach((s, i) => (e[i] = s)));
  }
  Qo(e, n) {
    const r = xC[e];
    let s = `${this.Ko}/v1/${n}:${r}`;
    return (
      this.databaseInfo.apiKey &&
        (s = `${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),
      s
    );
  }
  terminate() {}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class kC {
  constructor(e) {
    ((this.Jo = e.Jo), (this.Ho = e.Ho));
  }
  Zo(e) {
    this.Xo = e;
  }
  Yo(e) {
    this.e_ = e;
  }
  t_(e) {
    this.n_ = e;
  }
  onMessage(e) {
    this.r_ = e;
  }
  close() {
    this.Ho();
  }
  send(e) {
    this.Jo(e);
  }
  i_() {
    this.Xo();
  }
  s_() {
    this.e_();
  }
  o_(e) {
    this.n_(e);
  }
  __(e) {
    this.r_(e);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ye = "WebChannelConnection",
  li = (t, e, n) => {
    t.listen(e, (r) => {
      try {
        n(r);
      } catch (s) {
        setTimeout(() => {
          throw s;
        }, 0);
      }
    });
  };
class cs extends PC {
  constructor(e) {
    (super(e),
      (this.a_ = []),
      (this.forceLongPolling = e.forceLongPolling),
      (this.autoDetectLongPolling = e.autoDetectLongPolling),
      (this.useFetchStreams = e.useFetchStreams),
      (this.longPollingOptions = e.longPollingOptions));
  }
  static u_() {
    if (!cs.c_) {
      const e = d_();
      (li(e, f_.STAT_EVENT, (n) => {
        n.stat === Jc.PROXY
          ? $(Ye, "STAT_EVENT: detected buffering proxy")
          : n.stat === Jc.NOPROXY &&
            $(Ye, "STAT_EVENT: detected no buffering proxy");
      }),
        (cs.c_ = !0));
    }
  }
  zo(e, n, r, s, i) {
    const o = uh();
    return new Promise((l, u) => {
      const h = new c_();
      (h.setWithCredentials(!0),
        h.listenOnce(h_.COMPLETE, () => {
          try {
            switch (h.getLastErrorCode()) {
              case ma.NO_ERROR:
                const p = h.getResponseJson();
                ($(Ye, `XHR for RPC '${e}' ${o} received:`, JSON.stringify(p)),
                  l(p));
                break;
              case ma.TIMEOUT:
                ($(Ye, `RPC '${e}' ${o} timed out`),
                  u(new H(F.DEADLINE_EXCEEDED, "Request time out")));
                break;
              case ma.HTTP_ERROR:
                const m = h.getStatus();
                if (
                  ($(
                    Ye,
                    `RPC '${e}' ${o} failed with status:`,
                    m,
                    "response text:",
                    h.getResponseText(),
                  ),
                  m > 0)
                ) {
                  let T = h.getResponseJson();
                  Array.isArray(T) && (T = T[0]);
                  const x = T == null ? void 0 : T.error;
                  if (x && x.status && x.message) {
                    const P = (function (_) {
                      const v = _.toLowerCase().replace(/_/g, "-");
                      return Object.values(F).indexOf(v) >= 0 ? v : F.UNKNOWN;
                    })(x.status);
                    u(new H(P, x.message));
                  } else
                    u(
                      new H(
                        F.UNKNOWN,
                        "Server responded with status " + h.getStatus(),
                      ),
                    );
                } else u(new H(F.UNAVAILABLE, "Connection failed."));
                break;
              default:
                q(9055, {
                  l_: e,
                  streamId: o,
                  h_: h.getLastErrorCode(),
                  P_: h.getLastError(),
                });
            }
          } finally {
            $(Ye, `RPC '${e}' ${o} completed.`);
          }
        }));
      const d = JSON.stringify(s);
      ($(Ye, `RPC '${e}' ${o} sending request:`, s),
        h.send(n, "POST", d, r, 15));
    });
  }
  T_(e, n, r) {
    const s = uh(),
      i = [this.Ko, "/", "google.firestore.v1.Firestore", "/", e, "/channel"],
      o = this.createWebChannelTransport(),
      l = {
        httpSessionIdParam: "gsessionid",
        initMessageHeaders: {},
        messageUrlParams: {
          database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`,
        },
        sendRawJson: !0,
        supportsCrossDomainXhr: !0,
        internalChannelParams: { forwardChannelRequestTimeoutMs: 6e5 },
        forceLongPolling: this.forceLongPolling,
        detectBufferingProxy: this.autoDetectLongPolling,
      },
      u = this.longPollingOptions.timeoutSeconds;
    (u !== void 0 && (l.longPollingTimeout = Math.round(1e3 * u)),
      this.useFetchStreams && (l.useFetchStreams = !0),
      this.Go(l.initMessageHeaders, n, r),
      (l.encodeInitMessageHeaders = !0));
    const h = i.join("");
    $(Ye, `Creating RPC '${e}' stream ${s}: ${h}`, l);
    const d = o.createWebChannel(h, l);
    this.E_(d);
    let p = !1,
      m = !1;
    const T = new kC({
      Jo: (x) => {
        m
          ? $(Ye, `Not sending because RPC '${e}' stream ${s} is closed:`, x)
          : (p ||
              ($(Ye, `Opening RPC '${e}' stream ${s} transport.`),
              d.open(),
              (p = !0)),
            $(Ye, `RPC '${e}' stream ${s} sending:`, x),
            d.send(x));
      },
      Ho: () => d.close(),
    });
    return (
      li(d, pi.EventType.OPEN, () => {
        m || ($(Ye, `RPC '${e}' stream ${s} transport opened.`), T.i_());
      }),
      li(d, pi.EventType.CLOSE, () => {
        m ||
          ((m = !0),
          $(Ye, `RPC '${e}' stream ${s} transport closed`),
          T.o_(),
          this.I_(d));
      }),
      li(d, pi.EventType.ERROR, (x) => {
        m ||
          ((m = !0),
          Pr(
            Ye,
            `RPC '${e}' stream ${s} transport errored. Name:`,
            x.name,
            "Message:",
            x.message,
          ),
          T.o_(new H(F.UNAVAILABLE, "The operation could not be completed")));
      }),
      li(d, pi.EventType.MESSAGE, (x) => {
        var P;
        if (!m) {
          const D = x.data[0];
          ie(!!D, 16349);
          const _ = D,
            v =
              (_ == null ? void 0 : _.error) ||
              ((P = _[0]) == null ? void 0 : P.error);
          if (v) {
            $(Ye, `RPC '${e}' stream ${s} received error:`, v);
            const R = v.status;
            let M = (function (E) {
                const y = Ce[E];
                if (y !== void 0) return K_(y);
              })(R),
              j = v.message;
            (R === "NOT_FOUND" &&
              j.includes("database") &&
              j.includes("does not exist") &&
              j.includes(this.databaseId.database) &&
              Pr(
                `Database '${this.databaseId.database}' not found. Please check your project configuration.`,
              ),
              M === void 0 &&
                ((M = F.INTERNAL),
                (j =
                  "Unknown error status: " + R + " with message " + v.message)),
              (m = !0),
              T.o_(new H(M, j)),
              d.close());
          } else ($(Ye, `RPC '${e}' stream ${s} received:`, D), T.__(D));
        }
      }),
      cs.u_(),
      setTimeout(() => {
        T.s_();
      }, 0),
      T
    );
  }
  terminate() {
    (this.a_.forEach((e) => e.close()), (this.a_ = []));
  }
  E_(e) {
    this.a_.push(e);
  }
  I_(e) {
    this.a_ = this.a_.filter((n) => n === e);
  }
  Go(e, n, r) {
    (super.Go(e, n, r),
      this.databaseInfo.apiKey &&
        (e["x-goog-api-key"] = this.databaseInfo.apiKey));
  }
  createWebChannelTransport() {
    return p_();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function NC(t) {
  return new cs(t);
}
function Qu() {
  return typeof document < "u" ? document : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function jl(t) {
  return new MA(t, !0);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ cs.c_ = !1;
class uE {
  constructor(e, n, r = 1e3, s = 1.5, i = 6e4) {
    ((this.Ci = e),
      (this.timerId = n),
      (this.R_ = r),
      (this.A_ = s),
      (this.V_ = i),
      (this.d_ = 0),
      (this.m_ = null),
      (this.f_ = Date.now()),
      this.reset());
  }
  reset() {
    this.d_ = 0;
  }
  g_() {
    this.d_ = this.V_;
  }
  p_(e) {
    this.cancel();
    const n = Math.floor(this.d_ + this.y_()),
      r = Math.max(0, Date.now() - this.f_),
      s = Math.max(0, n - r);
    (s > 0 &&
      $(
        "ExponentialBackoff",
        `Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`,
      ),
      (this.m_ = this.Ci.enqueueAfterDelay(
        this.timerId,
        s,
        () => ((this.f_ = Date.now()), e()),
      )),
      (this.d_ *= this.A_),
      this.d_ < this.R_ && (this.d_ = this.R_),
      this.d_ > this.V_ && (this.d_ = this.V_));
  }
  w_() {
    this.m_ !== null && (this.m_.skipDelay(), (this.m_ = null));
  }
  cancel() {
    this.m_ !== null && (this.m_.cancel(), (this.m_ = null));
  }
  y_() {
    return (Math.random() - 0.5) * this.d_;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const tg = "PersistentStream";
class cE {
  constructor(e, n, r, s, i, o, l, u) {
    ((this.Ci = e),
      (this.S_ = r),
      (this.b_ = s),
      (this.connection = i),
      (this.authCredentialsProvider = o),
      (this.appCheckCredentialsProvider = l),
      (this.listener = u),
      (this.state = 0),
      (this.D_ = 0),
      (this.C_ = null),
      (this.v_ = null),
      (this.stream = null),
      (this.F_ = 0),
      (this.M_ = new uE(e, n)));
  }
  x_() {
    return this.state === 1 || this.state === 5 || this.O_();
  }
  O_() {
    return this.state === 2 || this.state === 3;
  }
  start() {
    ((this.F_ = 0), this.state !== 4 ? this.auth() : this.N_());
  }
  async stop() {
    this.x_() && (await this.close(0));
  }
  B_() {
    ((this.state = 0), this.M_.reset());
  }
  L_() {
    this.O_() &&
      this.C_ === null &&
      (this.C_ = this.Ci.enqueueAfterDelay(this.S_, 6e4, () => this.k_()));
  }
  q_(e) {
    (this.K_(), this.stream.send(e));
  }
  async k_() {
    if (this.O_()) return this.close(0);
  }
  K_() {
    this.C_ && (this.C_.cancel(), (this.C_ = null));
  }
  U_() {
    this.v_ && (this.v_.cancel(), (this.v_ = null));
  }
  async close(e, n) {
    (this.K_(),
      this.U_(),
      this.M_.cancel(),
      this.D_++,
      e !== 4
        ? this.M_.reset()
        : n && n.code === F.RESOURCE_EXHAUSTED
          ? (gn(n.toString()),
            gn(
              "Using maximum backoff delay to prevent overloading the backend.",
            ),
            this.M_.g_())
          : n &&
            n.code === F.UNAUTHENTICATED &&
            this.state !== 3 &&
            (this.authCredentialsProvider.invalidateToken(),
            this.appCheckCredentialsProvider.invalidateToken()),
      this.stream !== null &&
        (this.W_(), this.stream.close(), (this.stream = null)),
      (this.state = e),
      await this.listener.t_(n));
  }
  W_() {}
  auth() {
    this.state = 1;
    const e = this.Q_(this.D_),
      n = this.D_;
    Promise.all([
      this.authCredentialsProvider.getToken(),
      this.appCheckCredentialsProvider.getToken(),
    ]).then(
      ([r, s]) => {
        this.D_ === n && this.G_(r, s);
      },
      (r) => {
        e(() => {
          const s = new H(
            F.UNKNOWN,
            "Fetching auth token failed: " + r.message,
          );
          return this.z_(s);
        });
      },
    );
  }
  G_(e, n) {
    const r = this.Q_(this.D_);
    ((this.stream = this.j_(e, n)),
      this.stream.Zo(() => {
        r(() => this.listener.Zo());
      }),
      this.stream.Yo(() => {
        r(
          () => (
            (this.state = 2),
            (this.v_ = this.Ci.enqueueAfterDelay(
              this.b_,
              1e4,
              () => (this.O_() && (this.state = 3), Promise.resolve()),
            )),
            this.listener.Yo()
          ),
        );
      }),
      this.stream.t_((s) => {
        r(() => this.z_(s));
      }),
      this.stream.onMessage((s) => {
        r(() => (++this.F_ == 1 ? this.J_(s) : this.onNext(s)));
      }));
  }
  N_() {
    ((this.state = 5),
      this.M_.p_(async () => {
        ((this.state = 0), this.start());
      }));
  }
  z_(e) {
    return (
      $(tg, `close with error: ${e}`),
      (this.stream = null),
      this.close(4, e)
    );
  }
  Q_(e) {
    return (n) => {
      this.Ci.enqueueAndForget(() =>
        this.D_ === e
          ? n()
          : ($(tg, "stream callback skipped by getCloseGuardedDispatcher."),
            Promise.resolve()),
      );
    };
  }
}
class VC extends cE {
  constructor(e, n, r, s, i, o) {
    (super(
      e,
      "listen_stream_connection_backoff",
      "listen_stream_idle",
      "health_check_timeout",
      n,
      r,
      s,
      o,
    ),
      (this.serializer = i));
  }
  j_(e, n) {
    return this.connection.T_("Listen", e, n);
  }
  J_(e) {
    return this.onNext(e);
  }
  onNext(e) {
    this.M_.reset();
    const n = jA(this.serializer, e),
      r = (function (i) {
        if (!("targetChange" in i)) return Q.min();
        const o = i.targetChange;
        return o.targetIds && o.targetIds.length
          ? Q.min()
          : o.readTime
            ? Jt(o.readTime)
            : Q.min();
      })(e);
    return this.listener.H_(n, r);
  }
  Z_(e) {
    const n = {};
    ((n.database = ah(this.serializer)),
      (n.addTarget = (function (i, o) {
        let l;
        const u = o.target;
        if (
          ((l = nh(u) ? { documents: zA(i, u) } : { query: BA(i, u).ft }),
          (l.targetId = o.targetId),
          o.resumeToken.approximateByteSize() > 0)
        ) {
          l.resumeToken = J_(i, o.resumeToken);
          const h = sh(i, o.expectedCount);
          h !== null && (l.expectedCount = h);
        } else if (o.snapshotVersion.compareTo(Q.min()) > 0) {
          l.readTime = il(i, o.snapshotVersion.toTimestamp());
          const h = sh(i, o.expectedCount);
          h !== null && (l.expectedCount = h);
        }
        return l;
      })(this.serializer, e)));
    const r = GA(this.serializer, e);
    (r && (n.labels = r), this.q_(n));
  }
  X_(e) {
    const n = {};
    ((n.database = ah(this.serializer)), (n.removeTarget = e), this.q_(n));
  }
}
class DC extends cE {
  constructor(e, n, r, s, i, o) {
    (super(
      e,
      "write_stream_connection_backoff",
      "write_stream_idle",
      "health_check_timeout",
      n,
      r,
      s,
      o,
    ),
      (this.serializer = i));
  }
  get Y_() {
    return this.F_ > 0;
  }
  start() {
    ((this.lastStreamToken = void 0), super.start());
  }
  W_() {
    this.Y_ && this.ea([]);
  }
  j_(e, n) {
    return this.connection.T_("Write", e, n);
  }
  J_(e) {
    return (
      ie(!!e.streamToken, 31322),
      (this.lastStreamToken = e.streamToken),
      ie(!e.writeResults || e.writeResults.length === 0, 55816),
      this.listener.ta()
    );
  }
  onNext(e) {
    (ie(!!e.streamToken, 12678),
      (this.lastStreamToken = e.streamToken),
      this.M_.reset());
    const n = UA(e.writeResults, e.commitTime),
      r = Jt(e.commitTime);
    return this.listener.na(r, n);
  }
  ra() {
    const e = {};
    ((e.database = ah(this.serializer)), this.q_(e));
  }
  ea(e) {
    const n = {
      streamToken: this.lastStreamToken,
      writes: e.map((r) => bA(this.serializer, r)),
    };
    this.q_(n);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class LC {}
class MC extends LC {
  constructor(e, n, r, s) {
    (super(),
      (this.authCredentials = e),
      (this.appCheckCredentials = n),
      (this.connection = r),
      (this.serializer = s),
      (this.ia = !1));
  }
  sa() {
    if (this.ia)
      throw new H(
        F.FAILED_PRECONDITION,
        "The client has already been terminated.",
      );
  }
  Wo(e, n, r, s) {
    return (
      this.sa(),
      Promise.all([
        this.authCredentials.getToken(),
        this.appCheckCredentials.getToken(),
      ])
        .then(([i, o]) => this.connection.Wo(e, ih(n, r), s, i, o))
        .catch((i) => {
          throw i.name === "FirebaseError"
            ? (i.code === F.UNAUTHENTICATED &&
                (this.authCredentials.invalidateToken(),
                this.appCheckCredentials.invalidateToken()),
              i)
            : new H(F.UNKNOWN, i.toString());
        })
    );
  }
  jo(e, n, r, s, i) {
    return (
      this.sa(),
      Promise.all([
        this.authCredentials.getToken(),
        this.appCheckCredentials.getToken(),
      ])
        .then(([o, l]) => this.connection.jo(e, ih(n, r), s, o, l, i))
        .catch((o) => {
          throw o.name === "FirebaseError"
            ? (o.code === F.UNAUTHENTICATED &&
                (this.authCredentials.invalidateToken(),
                this.appCheckCredentials.invalidateToken()),
              o)
            : new H(F.UNKNOWN, o.toString());
        })
    );
  }
  terminate() {
    ((this.ia = !0), this.connection.terminate());
  }
}
function OC(t, e, n, r) {
  return new MC(t, e, n, r);
}
class FC {
  constructor(e, n) {
    ((this.asyncQueue = e),
      (this.onlineStateHandler = n),
      (this.state = "Unknown"),
      (this.oa = 0),
      (this._a = null),
      (this.aa = !0));
  }
  ua() {
    this.oa === 0 &&
      (this.ca("Unknown"),
      (this._a = this.asyncQueue.enqueueAfterDelay(
        "online_state_timeout",
        1e4,
        () => (
          (this._a = null),
          this.la("Backend didn't respond within 10 seconds."),
          this.ca("Offline"),
          Promise.resolve()
        ),
      )));
  }
  ha(e) {
    this.state === "Online"
      ? this.ca("Unknown")
      : (this.oa++,
        this.oa >= 1 &&
          (this.Pa(),
          this.la(
            `Connection failed 1 times. Most recent error: ${e.toString()}`,
          ),
          this.ca("Offline")));
  }
  set(e) {
    (this.Pa(), (this.oa = 0), e === "Online" && (this.aa = !1), this.ca(e));
  }
  ca(e) {
    e !== this.state && ((this.state = e), this.onlineStateHandler(e));
  }
  la(e) {
    const n = `Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
    this.aa ? (gn(n), (this.aa = !1)) : $("OnlineStateTracker", n);
  }
  Pa() {
    this._a !== null && (this._a.cancel(), (this._a = null));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const kr = "RemoteStore";
class jC {
  constructor(e, n, r, s, i) {
    ((this.localStore = e),
      (this.datastore = n),
      (this.asyncQueue = r),
      (this.remoteSyncer = {}),
      (this.Ta = []),
      (this.Ea = new Map()),
      (this.Ia = new Set()),
      (this.Ra = []),
      (this.Aa = i),
      this.Aa.Mo((o) => {
        r.enqueueAndForget(async () => {
          Or(this) &&
            ($(kr, "Restarting streams for network reachability change."),
            await (async function (u) {
              const h = Y(u);
              (h.Ia.add(4),
                await go(h),
                h.Va.set("Unknown"),
                h.Ia.delete(4),
                await bl(h));
            })(this));
        });
      }),
      (this.Va = new FC(r, s)));
  }
}
async function bl(t) {
  if (Or(t)) for (const e of t.Ra) await e(!0);
}
async function go(t) {
  for (const e of t.Ra) await e(!1);
}
function hE(t, e) {
  const n = Y(t);
  n.Ea.has(e.targetId) ||
    (n.Ea.set(e.targetId, e), bf(n) ? jf(n) : Ls(n).O_() && Ff(n, e));
}
function Of(t, e) {
  const n = Y(t),
    r = Ls(n);
  (n.Ea.delete(e),
    r.O_() && fE(n, e),
    n.Ea.size === 0 && (r.O_() ? r.L_() : Or(n) && n.Va.set("Unknown")));
}
function Ff(t, e) {
  if (
    (t.da.$e(e.targetId),
    e.resumeToken.approximateByteSize() > 0 ||
      e.snapshotVersion.compareTo(Q.min()) > 0)
  ) {
    const n = t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;
    e = e.withExpectedCount(n);
  }
  Ls(t).Z_(e);
}
function fE(t, e) {
  (t.da.$e(e), Ls(t).X_(e));
}
function jf(t) {
  ((t.da = new NA({
    getRemoteKeysForTarget: (e) => t.remoteSyncer.getRemoteKeysForTarget(e),
    At: (e) => t.Ea.get(e) || null,
    ht: () => t.datastore.serializer.databaseId,
  })),
    Ls(t).start(),
    t.Va.ua());
}
function bf(t) {
  return Or(t) && !Ls(t).x_() && t.Ea.size > 0;
}
function Or(t) {
  return Y(t).Ia.size === 0;
}
function dE(t) {
  t.da = void 0;
}
async function bC(t) {
  t.Va.set("Online");
}
async function UC(t) {
  t.Ea.forEach((e, n) => {
    Ff(t, e);
  });
}
async function zC(t, e) {
  (dE(t), bf(t) ? (t.Va.ha(e), jf(t)) : t.Va.set("Unknown"));
}
async function BC(t, e, n) {
  if ((t.Va.set("Online"), e instanceof Y_ && e.state === 2 && e.cause))
    try {
      await (async function (s, i) {
        const o = i.cause;
        for (const l of i.targetIds)
          s.Ea.has(l) &&
            (await s.remoteSyncer.rejectListen(l, o),
            s.Ea.delete(l),
            s.da.removeTarget(l));
      })(t, e);
    } catch (r) {
      ($(kr, "Failed to remove targets %s: %s ", e.targetIds.join(","), r),
        await al(t, r));
    }
  else if (
    (e instanceof _a ? t.da.Xe(e) : e instanceof Q_ ? t.da.st(e) : t.da.tt(e),
    !n.isEqual(Q.min()))
  )
    try {
      const r = await lE(t.localStore);
      n.compareTo(r) >= 0 &&
        (await (function (i, o) {
          const l = i.da.Tt(o);
          return (
            l.targetChanges.forEach((u, h) => {
              if (u.resumeToken.approximateByteSize() > 0) {
                const d = i.Ea.get(h);
                d && i.Ea.set(h, d.withResumeToken(u.resumeToken, o));
              }
            }),
            l.targetMismatches.forEach((u, h) => {
              const d = i.Ea.get(u);
              if (!d) return;
              (i.Ea.set(
                u,
                d.withResumeToken(We.EMPTY_BYTE_STRING, d.snapshotVersion),
              ),
                fE(i, u));
              const p = new Mn(d.target, u, h, d.sequenceNumber);
              Ff(i, p);
            }),
            i.remoteSyncer.applyRemoteEvent(l)
          );
        })(t, n));
    } catch (r) {
      ($(kr, "Failed to raise snapshot:", r), await al(t, r));
    }
}
async function al(t, e, n) {
  if (!Ds(e)) throw e;
  (t.Ia.add(1),
    await go(t),
    t.Va.set("Offline"),
    n || (n = () => lE(t.localStore)),
    t.asyncQueue.enqueueRetryable(async () => {
      ($(kr, "Retrying IndexedDB access"),
        await n(),
        t.Ia.delete(1),
        await bl(t));
    }));
}
function pE(t, e) {
  return e().catch((n) => al(t, n, e));
}
async function Ul(t) {
  const e = Y(t),
    n = tr(e);
  let r = e.Ta.length > 0 ? e.Ta[e.Ta.length - 1].batchId : Tf;
  for (; $C(e); )
    try {
      const s = await SC(e.localStore, r);
      if (s === null) {
        e.Ta.length === 0 && n.L_();
        break;
      }
      ((r = s.batchId), GC(e, s));
    } catch (s) {
      await al(e, s);
    }
  mE(e) && gE(e);
}
function $C(t) {
  return Or(t) && t.Ta.length < 10;
}
function GC(t, e) {
  t.Ta.push(e);
  const n = tr(t);
  n.O_() && n.Y_ && n.ea(e.mutations);
}
function mE(t) {
  return Or(t) && !tr(t).x_() && t.Ta.length > 0;
}
function gE(t) {
  tr(t).start();
}
async function HC(t) {
  tr(t).ra();
}
async function WC(t) {
  const e = tr(t);
  for (const n of t.Ta) e.ea(n.mutations);
}
async function qC(t, e, n) {
  const r = t.Ta.shift(),
    s = Pf.from(r, e, n);
  (await pE(t, () => t.remoteSyncer.applySuccessfulWrite(s)), await Ul(t));
}
async function KC(t, e) {
  (e &&
    tr(t).Y_ &&
    (await (async function (r, s) {
      if (
        (function (o) {
          return xA(o) && o !== F.ABORTED;
        })(s.code)
      ) {
        const i = r.Ta.shift();
        (tr(r).B_(),
          await pE(r, () => r.remoteSyncer.rejectFailedWrite(i.batchId, s)),
          await Ul(r));
      }
    })(t, e)),
    mE(t) && gE(t));
}
async function ng(t, e) {
  const n = Y(t);
  (n.asyncQueue.verifyOperationInProgress(),
    $(kr, "RemoteStore received new credentials"));
  const r = Or(n);
  (n.Ia.add(3),
    await go(n),
    r && n.Va.set("Unknown"),
    await n.remoteSyncer.handleCredentialChange(e),
    n.Ia.delete(3),
    await bl(n));
}
async function QC(t, e) {
  const n = Y(t);
  e
    ? (n.Ia.delete(2), await bl(n))
    : e || (n.Ia.add(2), await go(n), n.Va.set("Unknown"));
}
function Ls(t) {
  return (
    t.ma ||
      ((t.ma = (function (n, r, s) {
        const i = Y(n);
        return (
          i.sa(),
          new VC(
            r,
            i.connection,
            i.authCredentials,
            i.appCheckCredentials,
            i.serializer,
            s,
          )
        );
      })(t.datastore, t.asyncQueue, {
        Zo: bC.bind(null, t),
        Yo: UC.bind(null, t),
        t_: zC.bind(null, t),
        H_: BC.bind(null, t),
      })),
      t.Ra.push(async (e) => {
        e
          ? (t.ma.B_(), bf(t) ? jf(t) : t.Va.set("Unknown"))
          : (await t.ma.stop(), dE(t));
      })),
    t.ma
  );
}
function tr(t) {
  return (
    t.fa ||
      ((t.fa = (function (n, r, s) {
        const i = Y(n);
        return (
          i.sa(),
          new DC(
            r,
            i.connection,
            i.authCredentials,
            i.appCheckCredentials,
            i.serializer,
            s,
          )
        );
      })(t.datastore, t.asyncQueue, {
        Zo: () => Promise.resolve(),
        Yo: HC.bind(null, t),
        t_: KC.bind(null, t),
        ta: WC.bind(null, t),
        na: qC.bind(null, t),
      })),
      t.Ra.push(async (e) => {
        e
          ? (t.fa.B_(), await Ul(t))
          : (await t.fa.stop(),
            t.Ta.length > 0 &&
              ($(
                kr,
                `Stopping write stream with ${t.Ta.length} pending writes`,
              ),
              (t.Ta = [])));
      })),
    t.fa
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Uf {
  constructor(e, n, r, s, i) {
    ((this.asyncQueue = e),
      (this.timerId = n),
      (this.targetTimeMs = r),
      (this.op = s),
      (this.removalCallback = i),
      (this.deferred = new un()),
      (this.then = this.deferred.promise.then.bind(this.deferred.promise)),
      this.deferred.promise.catch((o) => {}));
  }
  get promise() {
    return this.deferred.promise;
  }
  static createAndSchedule(e, n, r, s, i) {
    const o = Date.now() + r,
      l = new Uf(e, n, o, s, i);
    return (l.start(r), l);
  }
  start(e) {
    this.timerHandle = setTimeout(() => this.handleDelayElapsed(), e);
  }
  skipDelay() {
    return this.handleDelayElapsed();
  }
  cancel(e) {
    this.timerHandle !== null &&
      (this.clearTimeout(),
      this.deferred.reject(
        new H(F.CANCELLED, "Operation cancelled" + (e ? ": " + e : "")),
      ));
  }
  handleDelayElapsed() {
    this.asyncQueue.enqueueAndForget(() =>
      this.timerHandle !== null
        ? (this.clearTimeout(), this.op().then((e) => this.deferred.resolve(e)))
        : Promise.resolve(),
    );
  }
  clearTimeout() {
    this.timerHandle !== null &&
      (this.removalCallback(this),
      clearTimeout(this.timerHandle),
      (this.timerHandle = null));
  }
}
function zf(t, e) {
  if ((gn("AsyncQueue", `${e}: ${t}`), Ds(t)))
    return new H(F.UNAVAILABLE, `${e}: ${t}`);
  throw t;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class hs {
  static emptySet(e) {
    return new hs(e.comparator);
  }
  constructor(e) {
    ((this.comparator = e
      ? (n, r) => e(n, r) || W.comparator(n.key, r.key)
      : (n, r) => W.comparator(n.key, r.key)),
      (this.keyedMap = mi()),
      (this.sortedSet = new Ee(this.comparator)));
  }
  has(e) {
    return this.keyedMap.get(e) != null;
  }
  get(e) {
    return this.keyedMap.get(e);
  }
  first() {
    return this.sortedSet.minKey();
  }
  last() {
    return this.sortedSet.maxKey();
  }
  isEmpty() {
    return this.sortedSet.isEmpty();
  }
  indexOf(e) {
    const n = this.keyedMap.get(e);
    return n ? this.sortedSet.indexOf(n) : -1;
  }
  get size() {
    return this.sortedSet.size;
  }
  forEach(e) {
    this.sortedSet.inorderTraversal((n, r) => (e(n), !1));
  }
  add(e) {
    const n = this.delete(e.key);
    return n.copy(n.keyedMap.insert(e.key, e), n.sortedSet.insert(e, null));
  }
  delete(e) {
    const n = this.get(e);
    return n
      ? this.copy(this.keyedMap.remove(e), this.sortedSet.remove(n))
      : this;
  }
  isEqual(e) {
    if (!(e instanceof hs) || this.size !== e.size) return !1;
    const n = this.sortedSet.getIterator(),
      r = e.sortedSet.getIterator();
    for (; n.hasNext(); ) {
      const s = n.getNext().key,
        i = r.getNext().key;
      if (!s.isEqual(i)) return !1;
    }
    return !0;
  }
  toString() {
    const e = [];
    return (
      this.forEach((n) => {
        e.push(n.toString());
      }),
      e.length === 0
        ? "DocumentSet ()"
        : `DocumentSet (
  ` +
          e.join(`  
`) +
          `
)`
    );
  }
  copy(e, n) {
    const r = new hs();
    return (
      (r.comparator = this.comparator),
      (r.keyedMap = e),
      (r.sortedSet = n),
      r
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rg {
  constructor() {
    this.ga = new Ee(W.comparator);
  }
  track(e) {
    const n = e.doc.key,
      r = this.ga.get(n);
    r
      ? e.type !== 0 && r.type === 3
        ? (this.ga = this.ga.insert(n, e))
        : e.type === 3 && r.type !== 1
          ? (this.ga = this.ga.insert(n, { type: r.type, doc: e.doc }))
          : e.type === 2 && r.type === 2
            ? (this.ga = this.ga.insert(n, { type: 2, doc: e.doc }))
            : e.type === 2 && r.type === 0
              ? (this.ga = this.ga.insert(n, { type: 0, doc: e.doc }))
              : e.type === 1 && r.type === 0
                ? (this.ga = this.ga.remove(n))
                : e.type === 1 && r.type === 2
                  ? (this.ga = this.ga.insert(n, { type: 1, doc: r.doc }))
                  : e.type === 0 && r.type === 1
                    ? (this.ga = this.ga.insert(n, { type: 2, doc: e.doc }))
                    : q(63341, { Vt: e, pa: r })
      : (this.ga = this.ga.insert(n, e));
  }
  ya() {
    const e = [];
    return (
      this.ga.inorderTraversal((n, r) => {
        e.push(r);
      }),
      e
    );
  }
}
class Is {
  constructor(e, n, r, s, i, o, l, u, h) {
    ((this.query = e),
      (this.docs = n),
      (this.oldDocs = r),
      (this.docChanges = s),
      (this.mutatedKeys = i),
      (this.fromCache = o),
      (this.syncStateChanged = l),
      (this.excludesMetadataChanges = u),
      (this.hasCachedResults = h));
  }
  static fromInitialDocuments(e, n, r, s, i) {
    const o = [];
    return (
      n.forEach((l) => {
        o.push({ type: 0, doc: l });
      }),
      new Is(e, n, hs.emptySet(n), o, r, s, !0, !1, i)
    );
  }
  get hasPendingWrites() {
    return !this.mutatedKeys.isEmpty();
  }
  isEqual(e) {
    if (
      !(
        this.fromCache === e.fromCache &&
        this.hasCachedResults === e.hasCachedResults &&
        this.syncStateChanged === e.syncStateChanged &&
        this.mutatedKeys.isEqual(e.mutatedKeys) &&
        Dl(this.query, e.query) &&
        this.docs.isEqual(e.docs) &&
        this.oldDocs.isEqual(e.oldDocs)
      )
    )
      return !1;
    const n = this.docChanges,
      r = e.docChanges;
    if (n.length !== r.length) return !1;
    for (let s = 0; s < n.length; s++)
      if (n[s].type !== r[s].type || !n[s].doc.isEqual(r[s].doc)) return !1;
    return !0;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class YC {
  constructor() {
    ((this.wa = void 0), (this.Sa = []));
  }
  ba() {
    return this.Sa.some((e) => e.Da());
  }
}
class JC {
  constructor() {
    ((this.queries = sg()),
      (this.onlineState = "Unknown"),
      (this.Ca = new Set()));
  }
  terminate() {
    (function (n, r) {
      const s = Y(n),
        i = s.queries;
      ((s.queries = sg()),
        i.forEach((o, l) => {
          for (const u of l.Sa) u.onError(r);
        }));
    })(this, new H(F.ABORTED, "Firestore shutting down"));
  }
}
function sg() {
  return new Lr((t) => M_(t), Dl);
}
async function yE(t, e) {
  const n = Y(t);
  let r = 3;
  const s = e.query;
  let i = n.queries.get(s);
  i ? !i.ba() && e.Da() && (r = 2) : ((i = new YC()), (r = e.Da() ? 0 : 1));
  try {
    switch (r) {
      case 0:
        i.wa = await n.onListen(s, !0);
        break;
      case 1:
        i.wa = await n.onListen(s, !1);
        break;
      case 2:
        await n.onFirstRemoteStoreListen(s);
    }
  } catch (o) {
    const l = zf(o, `Initialization of query '${Br(e.query)}' failed`);
    return void e.onError(l);
  }
  (n.queries.set(s, i),
    i.Sa.push(e),
    e.va(n.onlineState),
    i.wa && e.Fa(i.wa) && Bf(n));
}
async function vE(t, e) {
  const n = Y(t),
    r = e.query;
  let s = 3;
  const i = n.queries.get(r);
  if (i) {
    const o = i.Sa.indexOf(e);
    o >= 0 &&
      (i.Sa.splice(o, 1),
      i.Sa.length === 0 ? (s = e.Da() ? 0 : 1) : !i.ba() && e.Da() && (s = 2));
  }
  switch (s) {
    case 0:
      return (n.queries.delete(r), n.onUnlisten(r, !0));
    case 1:
      return (n.queries.delete(r), n.onUnlisten(r, !1));
    case 2:
      return n.onLastRemoteStoreUnlisten(r);
    default:
      return;
  }
}
function XC(t, e) {
  const n = Y(t);
  let r = !1;
  for (const s of e) {
    const i = s.query,
      o = n.queries.get(i);
    if (o) {
      for (const l of o.Sa) l.Fa(s) && (r = !0);
      o.wa = s;
    }
  }
  r && Bf(n);
}
function ZC(t, e, n) {
  const r = Y(t),
    s = r.queries.get(e);
  if (s) for (const i of s.Sa) i.onError(n);
  r.queries.delete(e);
}
function Bf(t) {
  t.Ca.forEach((e) => {
    e.next();
  });
}
var ch, ig;
(((ig = ch || (ch = {})).Ma = "default"), (ig.Cache = "cache"));
class _E {
  constructor(e, n, r) {
    ((this.query = e),
      (this.xa = n),
      (this.Oa = !1),
      (this.Na = null),
      (this.onlineState = "Unknown"),
      (this.options = r || {}));
  }
  Fa(e) {
    if (!this.options.includeMetadataChanges) {
      const r = [];
      for (const s of e.docChanges) s.type !== 3 && r.push(s);
      e = new Is(
        e.query,
        e.docs,
        e.oldDocs,
        r,
        e.mutatedKeys,
        e.fromCache,
        e.syncStateChanged,
        !0,
        e.hasCachedResults,
      );
    }
    let n = !1;
    return (
      this.Oa
        ? this.Ba(e) && (this.xa.next(e), (n = !0))
        : this.La(e, this.onlineState) && (this.ka(e), (n = !0)),
      (this.Na = e),
      n
    );
  }
  onError(e) {
    this.xa.error(e);
  }
  va(e) {
    this.onlineState = e;
    let n = !1;
    return (
      this.Na &&
        !this.Oa &&
        this.La(this.Na, e) &&
        (this.ka(this.Na), (n = !0)),
      n
    );
  }
  La(e, n) {
    if (!e.fromCache || !this.Da()) return !0;
    const r = n !== "Offline";
    return (
      (!this.options.qa || !r) &&
      (!e.docs.isEmpty() || e.hasCachedResults || n === "Offline")
    );
  }
  Ba(e) {
    if (e.docChanges.length > 0) return !0;
    const n = this.Na && this.Na.hasPendingWrites !== e.hasPendingWrites;
    return (
      !(!e.syncStateChanged && !n) && this.options.includeMetadataChanges === !0
    );
  }
  ka(e) {
    ((e = Is.fromInitialDocuments(
      e.query,
      e.docs,
      e.mutatedKeys,
      e.fromCache,
      e.hasCachedResults,
    )),
      (this.Oa = !0),
      this.xa.next(e));
  }
  Da() {
    return this.options.source !== ch.Cache;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class EE {
  constructor(e) {
    this.key = e;
  }
}
class wE {
  constructor(e) {
    this.key = e;
  }
}
class ex {
  constructor(e, n) {
    ((this.query = e),
      (this.Za = n),
      (this.Xa = null),
      (this.hasCachedResults = !1),
      (this.current = !1),
      (this.Ya = te()),
      (this.mutatedKeys = te()),
      (this.eu = O_(e)),
      (this.tu = new hs(this.eu)));
  }
  get nu() {
    return this.Za;
  }
  ru(e, n) {
    const r = n ? n.iu : new rg(),
      s = n ? n.tu : this.tu;
    let i = n ? n.mutatedKeys : this.mutatedKeys,
      o = s,
      l = !1;
    const u =
        this.query.limitType === "F" && s.size === this.query.limit
          ? s.last()
          : null,
      h =
        this.query.limitType === "L" && s.size === this.query.limit
          ? s.first()
          : null;
    if (
      (e.inorderTraversal((d, p) => {
        const m = s.get(d),
          T = Ll(this.query, p) ? p : null,
          x = !!m && this.mutatedKeys.has(m.key),
          P =
            !!T &&
            (T.hasLocalMutations ||
              (this.mutatedKeys.has(T.key) && T.hasCommittedMutations));
        let D = !1;
        (m && T
          ? m.data.isEqual(T.data)
            ? x !== P && (r.track({ type: 3, doc: T }), (D = !0))
            : this.su(m, T) ||
              (r.track({ type: 2, doc: T }),
              (D = !0),
              ((u && this.eu(T, u) > 0) || (h && this.eu(T, h) < 0)) &&
                (l = !0))
          : !m && T
            ? (r.track({ type: 0, doc: T }), (D = !0))
            : m &&
              !T &&
              (r.track({ type: 1, doc: m }), (D = !0), (u || h) && (l = !0)),
          D &&
            (T
              ? ((o = o.add(T)), (i = P ? i.add(d) : i.delete(d)))
              : ((o = o.delete(d)), (i = i.delete(d)))));
      }),
      this.query.limit !== null)
    )
      for (; o.size > this.query.limit; ) {
        const d = this.query.limitType === "F" ? o.last() : o.first();
        ((o = o.delete(d.key)),
          (i = i.delete(d.key)),
          r.track({ type: 1, doc: d }));
      }
    return { tu: o, iu: r, bs: l, mutatedKeys: i };
  }
  su(e, n) {
    return (
      e.hasLocalMutations && n.hasCommittedMutations && !n.hasLocalMutations
    );
  }
  applyChanges(e, n, r, s) {
    const i = this.tu;
    ((this.tu = e.tu), (this.mutatedKeys = e.mutatedKeys));
    const o = e.iu.ya();
    (o.sort(
      (d, p) =>
        (function (T, x) {
          const P = (D) => {
            switch (D) {
              case 0:
                return 1;
              case 2:
              case 3:
                return 2;
              case 1:
                return 0;
              default:
                return q(20277, { Vt: D });
            }
          };
          return P(T) - P(x);
        })(d.type, p.type) || this.eu(d.doc, p.doc),
    ),
      this.ou(r),
      (s = s ?? !1));
    const l = n && !s ? this._u() : [],
      u = this.Ya.size === 0 && this.current && !s ? 1 : 0,
      h = u !== this.Xa;
    return (
      (this.Xa = u),
      o.length !== 0 || h
        ? {
            snapshot: new Is(
              this.query,
              e.tu,
              i,
              o,
              e.mutatedKeys,
              u === 0,
              h,
              !1,
              !!r && r.resumeToken.approximateByteSize() > 0,
            ),
            au: l,
          }
        : { au: l }
    );
  }
  va(e) {
    return this.current && e === "Offline"
      ? ((this.current = !1),
        this.applyChanges(
          { tu: this.tu, iu: new rg(), mutatedKeys: this.mutatedKeys, bs: !1 },
          !1,
        ))
      : { au: [] };
  }
  uu(e) {
    return (
      !this.Za.has(e) && !!this.tu.has(e) && !this.tu.get(e).hasLocalMutations
    );
  }
  ou(e) {
    e &&
      (e.addedDocuments.forEach((n) => (this.Za = this.Za.add(n))),
      e.modifiedDocuments.forEach((n) => {}),
      e.removedDocuments.forEach((n) => (this.Za = this.Za.delete(n))),
      (this.current = e.current));
  }
  _u() {
    if (!this.current) return [];
    const e = this.Ya;
    ((this.Ya = te()),
      this.tu.forEach((r) => {
        this.uu(r.key) && (this.Ya = this.Ya.add(r.key));
      }));
    const n = [];
    return (
      e.forEach((r) => {
        this.Ya.has(r) || n.push(new wE(r));
      }),
      this.Ya.forEach((r) => {
        e.has(r) || n.push(new EE(r));
      }),
      n
    );
  }
  cu(e) {
    ((this.Za = e.ks), (this.Ya = te()));
    const n = this.ru(e.documents);
    return this.applyChanges(n, !0);
  }
  lu() {
    return Is.fromInitialDocuments(
      this.query,
      this.tu,
      this.mutatedKeys,
      this.Xa === 0,
      this.hasCachedResults,
    );
  }
}
const $f = "SyncEngine";
class tx {
  constructor(e, n, r) {
    ((this.query = e), (this.targetId = n), (this.view = r));
  }
}
class nx {
  constructor(e) {
    ((this.key = e), (this.hu = !1));
  }
}
class rx {
  constructor(e, n, r, s, i, o) {
    ((this.localStore = e),
      (this.remoteStore = n),
      (this.eventManager = r),
      (this.sharedClientState = s),
      (this.currentUser = i),
      (this.maxConcurrentLimboResolutions = o),
      (this.Pu = {}),
      (this.Tu = new Lr((l) => M_(l), Dl)),
      (this.Eu = new Map()),
      (this.Iu = new Set()),
      (this.Ru = new Ee(W.comparator)),
      (this.Au = new Map()),
      (this.Vu = new Vf()),
      (this.du = {}),
      (this.mu = new Map()),
      (this.fu = Ss.ar()),
      (this.onlineState = "Unknown"),
      (this.gu = void 0));
  }
  get isPrimaryClient() {
    return this.gu === !0;
  }
}
async function sx(t, e, n = !0) {
  const r = CE(t);
  let s;
  const i = r.Tu.get(e);
  return (
    i
      ? (r.sharedClientState.addLocalQueryTarget(i.targetId), (s = i.view.lu()))
      : (s = await TE(r, e, n, !0)),
    s
  );
}
async function ix(t, e) {
  const n = CE(t);
  await TE(n, e, !0, !1);
}
async function TE(t, e, n, r) {
  const s = await IC(t.localStore, Qt(e)),
    i = s.targetId,
    o = t.sharedClientState.addLocalQueryTarget(i, n);
  let l;
  return (
    r && (l = await ox(t, e, i, o === "current", s.resumeToken)),
    t.isPrimaryClient && n && hE(t.remoteStore, s),
    l
  );
}
async function ox(t, e, n, r, s) {
  t.pu = (p, m, T) =>
    (async function (P, D, _, v) {
      let R = D.view.ru(_);
      R.bs &&
        (R = await Jm(P.localStore, D.query, !1).then(({ documents: E }) =>
          D.view.ru(E, R),
        ));
      const M = v && v.targetChanges.get(D.targetId),
        j = v && v.targetMismatches.get(D.targetId) != null,
        U = D.view.applyChanges(R, P.isPrimaryClient, M, j);
      return (ag(P, D.targetId, U.au), U.snapshot);
    })(t, p, m, T);
  const i = await Jm(t.localStore, e, !0),
    o = new ex(e, i.ks),
    l = o.ru(i.documents),
    u = mo.createSynthesizedTargetChangeForCurrentChange(
      n,
      r && t.onlineState !== "Offline",
      s,
    ),
    h = o.applyChanges(l, t.isPrimaryClient, u);
  ag(t, n, h.au);
  const d = new tx(e, n, o);
  return (
    t.Tu.set(e, d),
    t.Eu.has(n) ? t.Eu.get(n).push(e) : t.Eu.set(n, [e]),
    h.snapshot
  );
}
async function ax(t, e, n) {
  const r = Y(t),
    s = r.Tu.get(e),
    i = r.Eu.get(s.targetId);
  if (i.length > 1)
    return (
      r.Eu.set(
        s.targetId,
        i.filter((o) => !Dl(o, e)),
      ),
      void r.Tu.delete(e)
    );
  r.isPrimaryClient
    ? (r.sharedClientState.removeLocalQueryTarget(s.targetId),
      r.sharedClientState.isActiveQueryTarget(s.targetId) ||
        (await lh(r.localStore, s.targetId, !1)
          .then(() => {
            (r.sharedClientState.clearQueryState(s.targetId),
              n && Of(r.remoteStore, s.targetId),
              hh(r, s.targetId));
          })
          .catch(Vs)))
    : (hh(r, s.targetId), await lh(r.localStore, s.targetId, !0));
}
async function lx(t, e) {
  const n = Y(t),
    r = n.Tu.get(e),
    s = n.Eu.get(r.targetId);
  n.isPrimaryClient &&
    s.length === 1 &&
    (n.sharedClientState.removeLocalQueryTarget(r.targetId),
    Of(n.remoteStore, r.targetId));
}
async function ux(t, e, n) {
  const r = gx(t);
  try {
    const s = await (function (o, l) {
      const u = Y(o),
        h = le.now(),
        d = l.reduce((T, x) => T.add(x.key), te());
      let p, m;
      return u.persistence
        .runTransaction("Locally write mutations", "readwrite", (T) => {
          let x = yn(),
            P = te();
          return u.xs
            .getEntries(T, d)
            .next((D) => {
              ((x = D),
                x.forEach((_, v) => {
                  v.isValidDocument() || (P = P.add(_));
                }));
            })
            .next(() => u.localDocuments.getOverlayedDocuments(T, x))
            .next((D) => {
              p = D;
              const _ = [];
              for (const v of l) {
                const R = SA(v, p.get(v.key).overlayedDocument);
                R != null &&
                  _.push(new Mr(v.key, R, x_(R.value.mapValue), Yt.exists(!0)));
              }
              return u.mutationQueue.addMutationBatch(T, h, _, l);
            })
            .next((D) => {
              m = D;
              const _ = D.applyToLocalDocumentSet(p, P);
              return u.documentOverlayCache.saveOverlays(T, D.batchId, _);
            });
        })
        .then(() => ({ batchId: m.batchId, changes: j_(p) }));
    })(r.localStore, e);
    (r.sharedClientState.addPendingMutation(s.batchId),
      (function (o, l, u) {
        let h = o.du[o.currentUser.toKey()];
        (h || (h = new Ee(ee)),
          (h = h.insert(l, u)),
          (o.du[o.currentUser.toKey()] = h));
      })(r, s.batchId, n),
      await yo(r, s.changes),
      await Ul(r.remoteStore));
  } catch (s) {
    const i = zf(s, "Failed to persist write");
    n.reject(i);
  }
}
async function SE(t, e) {
  const n = Y(t);
  try {
    const r = await wC(n.localStore, e);
    (e.targetChanges.forEach((s, i) => {
      const o = n.Au.get(i);
      o &&
        (ie(
          s.addedDocuments.size +
            s.modifiedDocuments.size +
            s.removedDocuments.size <=
            1,
          22616,
        ),
        s.addedDocuments.size > 0
          ? (o.hu = !0)
          : s.modifiedDocuments.size > 0
            ? ie(o.hu, 14607)
            : s.removedDocuments.size > 0 && (ie(o.hu, 42227), (o.hu = !1)));
    }),
      await yo(n, r, e));
  } catch (r) {
    await Vs(r);
  }
}
function og(t, e, n) {
  const r = Y(t);
  if ((r.isPrimaryClient && n === 0) || (!r.isPrimaryClient && n === 1)) {
    const s = [];
    (r.Tu.forEach((i, o) => {
      const l = o.view.va(e);
      l.snapshot && s.push(l.snapshot);
    }),
      (function (o, l) {
        const u = Y(o);
        u.onlineState = l;
        let h = !1;
        (u.queries.forEach((d, p) => {
          for (const m of p.Sa) m.va(l) && (h = !0);
        }),
          h && Bf(u));
      })(r.eventManager, e),
      s.length && r.Pu.H_(s),
      (r.onlineState = e),
      r.isPrimaryClient && r.sharedClientState.setOnlineState(e));
  }
}
async function cx(t, e, n) {
  const r = Y(t);
  r.sharedClientState.updateQueryState(e, "rejected", n);
  const s = r.Au.get(e),
    i = s && s.key;
  if (i) {
    let o = new Ee(W.comparator);
    o = o.insert(i, Ze.newNoDocument(i, Q.min()));
    const l = te().add(i),
      u = new Fl(Q.min(), new Map(), new Ee(ee), o, l);
    (await SE(r, u), (r.Ru = r.Ru.remove(i)), r.Au.delete(e), Gf(r));
  } else
    await lh(r.localStore, e, !1)
      .then(() => hh(r, e, n))
      .catch(Vs);
}
async function hx(t, e) {
  const n = Y(t),
    r = e.batch.batchId;
  try {
    const s = await EC(n.localStore, e);
    (RE(n, r, null),
      IE(n, r),
      n.sharedClientState.updateMutationState(r, "acknowledged"),
      await yo(n, s));
  } catch (s) {
    await Vs(s);
  }
}
async function fx(t, e, n) {
  const r = Y(t);
  try {
    const s = await (function (o, l) {
      const u = Y(o);
      return u.persistence.runTransaction(
        "Reject batch",
        "readwrite-primary",
        (h) => {
          let d;
          return u.mutationQueue
            .lookupMutationBatch(h, l)
            .next(
              (p) => (
                ie(p !== null, 37113),
                (d = p.keys()),
                u.mutationQueue.removeMutationBatch(h, p)
              ),
            )
            .next(() => u.mutationQueue.performConsistencyCheck(h))
            .next(() =>
              u.documentOverlayCache.removeOverlaysForBatchId(h, d, l),
            )
            .next(() =>
              u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h, d),
            )
            .next(() => u.localDocuments.getDocuments(h, d));
        },
      );
    })(r.localStore, e);
    (RE(r, e, n),
      IE(r, e),
      r.sharedClientState.updateMutationState(e, "rejected", n),
      await yo(r, s));
  } catch (s) {
    await Vs(s);
  }
}
function IE(t, e) {
  ((t.mu.get(e) || []).forEach((n) => {
    n.resolve();
  }),
    t.mu.delete(e));
}
function RE(t, e, n) {
  const r = Y(t);
  let s = r.du[r.currentUser.toKey()];
  if (s) {
    const i = s.get(e);
    (i && (n ? i.reject(n) : i.resolve(), (s = s.remove(e))),
      (r.du[r.currentUser.toKey()] = s));
  }
}
function hh(t, e, n = null) {
  t.sharedClientState.removeLocalQueryTarget(e);
  for (const r of t.Eu.get(e)) (t.Tu.delete(r), n && t.Pu.yu(r, n));
  (t.Eu.delete(e),
    t.isPrimaryClient &&
      t.Vu.Gr(e).forEach((r) => {
        t.Vu.containsKey(r) || AE(t, r);
      }));
}
function AE(t, e) {
  t.Iu.delete(e.path.canonicalString());
  const n = t.Ru.get(e);
  n !== null &&
    (Of(t.remoteStore, n), (t.Ru = t.Ru.remove(e)), t.Au.delete(n), Gf(t));
}
function ag(t, e, n) {
  for (const r of n)
    r instanceof EE
      ? (t.Vu.addReference(r.key, e), dx(t, r))
      : r instanceof wE
        ? ($($f, "Document no longer in limbo: " + r.key),
          t.Vu.removeReference(r.key, e),
          t.Vu.containsKey(r.key) || AE(t, r.key))
        : q(19791, { wu: r });
}
function dx(t, e) {
  const n = e.key,
    r = n.path.canonicalString();
  t.Ru.get(n) ||
    t.Iu.has(r) ||
    ($($f, "New document in limbo: " + n), t.Iu.add(r), Gf(t));
}
function Gf(t) {
  for (; t.Iu.size > 0 && t.Ru.size < t.maxConcurrentLimboResolutions; ) {
    const e = t.Iu.values().next().value;
    t.Iu.delete(e);
    const n = new W(fe.fromString(e)),
      r = t.fu.next();
    (t.Au.set(r, new nx(n)),
      (t.Ru = t.Ru.insert(n, r)),
      hE(
        t.remoteStore,
        new Mn(Qt(Cf(n.path)), r, "TargetPurposeLimboResolution", Pl.ce),
      ));
  }
}
async function yo(t, e, n) {
  const r = Y(t),
    s = [],
    i = [],
    o = [];
  r.Tu.isEmpty() ||
    (r.Tu.forEach((l, u) => {
      o.push(
        r.pu(u, e, n).then((h) => {
          var d;
          if ((h || n) && r.isPrimaryClient) {
            const p = h
              ? !h.fromCache
              : (d = n == null ? void 0 : n.targetChanges.get(u.targetId)) ==
                  null
                ? void 0
                : d.current;
            r.sharedClientState.updateQueryState(
              u.targetId,
              p ? "current" : "not-current",
            );
          }
          if (h) {
            s.push(h);
            const p = Lf.Is(u.targetId, h);
            i.push(p);
          }
        }),
      );
    }),
    await Promise.all(o),
    r.Pu.H_(s),
    await (async function (u, h) {
      const d = Y(u);
      try {
        await d.persistence.runTransaction(
          "notifyLocalViewChanges",
          "readwrite",
          (p) =>
            O.forEach(h, (m) =>
              O.forEach(m.Ts, (T) =>
                d.persistence.referenceDelegate.addReference(p, m.targetId, T),
              ).next(() =>
                O.forEach(m.Es, (T) =>
                  d.persistence.referenceDelegate.removeReference(
                    p,
                    m.targetId,
                    T,
                  ),
                ),
              ),
            ),
        );
      } catch (p) {
        if (!Ds(p)) throw p;
        $(Mf, "Failed to update sequence numbers: " + p);
      }
      for (const p of h) {
        const m = p.targetId;
        if (!p.fromCache) {
          const T = d.vs.get(m),
            x = T.snapshotVersion,
            P = T.withLastLimboFreeSnapshotVersion(x);
          d.vs = d.vs.insert(m, P);
        }
      }
    })(r.localStore, i));
}
async function px(t, e) {
  const n = Y(t);
  if (!n.currentUser.isEqual(e)) {
    $($f, "User change. New user:", e.toKey());
    const r = await aE(n.localStore, e);
    ((n.currentUser = e),
      (function (i, o) {
        (i.mu.forEach((l) => {
          l.forEach((u) => {
            u.reject(new H(F.CANCELLED, o));
          });
        }),
          i.mu.clear());
      })(n, "'waitForPendingWrites' promise is rejected due to a user change."),
      n.sharedClientState.handleUserChange(
        e,
        r.removedBatchIds,
        r.addedBatchIds,
      ),
      await yo(n, r.Ns));
  }
}
function mx(t, e) {
  const n = Y(t),
    r = n.Au.get(e);
  if (r && r.hu) return te().add(r.key);
  {
    let s = te();
    const i = n.Eu.get(e);
    if (!i) return s;
    for (const o of i) {
      const l = n.Tu.get(o);
      s = s.unionWith(l.view.nu);
    }
    return s;
  }
}
function CE(t) {
  const e = Y(t);
  return (
    (e.remoteStore.remoteSyncer.applyRemoteEvent = SE.bind(null, e)),
    (e.remoteStore.remoteSyncer.getRemoteKeysForTarget = mx.bind(null, e)),
    (e.remoteStore.remoteSyncer.rejectListen = cx.bind(null, e)),
    (e.Pu.H_ = XC.bind(null, e.eventManager)),
    (e.Pu.yu = ZC.bind(null, e.eventManager)),
    e
  );
}
function gx(t) {
  const e = Y(t);
  return (
    (e.remoteStore.remoteSyncer.applySuccessfulWrite = hx.bind(null, e)),
    (e.remoteStore.remoteSyncer.rejectFailedWrite = fx.bind(null, e)),
    e
  );
}
class ll {
  constructor() {
    ((this.kind = "memory"), (this.synchronizeTabs = !1));
  }
  async initialize(e) {
    ((this.serializer = jl(e.databaseInfo.databaseId)),
      (this.sharedClientState = this.Du(e)),
      (this.persistence = this.Cu(e)),
      await this.persistence.start(),
      (this.localStore = this.vu(e)),
      (this.gcScheduler = this.Fu(e, this.localStore)),
      (this.indexBackfillerScheduler = this.Mu(e, this.localStore)));
  }
  Fu(e, n) {
    return null;
  }
  Mu(e, n) {
    return null;
  }
  vu(e) {
    return _C(this.persistence, new gC(), e.initialUser, this.serializer);
  }
  Cu(e) {
    return new oE(Df.Vi, this.serializer);
  }
  Du(e) {
    return new AC();
  }
  async terminate() {
    var e, n;
    ((e = this.gcScheduler) == null || e.stop(),
      (n = this.indexBackfillerScheduler) == null || n.stop(),
      this.sharedClientState.shutdown(),
      await this.persistence.shutdown());
  }
}
ll.provider = { build: () => new ll() };
class yx extends ll {
  constructor(e) {
    (super(), (this.cacheSizeBytes = e));
  }
  Fu(e, n) {
    ie(this.persistence.referenceDelegate instanceof ol, 46915);
    const r = this.persistence.referenceDelegate.garbageCollector;
    return new tC(r, e.asyncQueue, n);
  }
  Cu(e) {
    const n =
      this.cacheSizeBytes !== void 0
        ? at.withCacheSize(this.cacheSizeBytes)
        : at.DEFAULT;
    return new oE((r) => ol.Vi(r, n), this.serializer);
  }
}
class fh {
  async initialize(e, n) {
    this.localStore ||
      ((this.localStore = e.localStore),
      (this.sharedClientState = e.sharedClientState),
      (this.datastore = this.createDatastore(n)),
      (this.remoteStore = this.createRemoteStore(n)),
      (this.eventManager = this.createEventManager(n)),
      (this.syncEngine = this.createSyncEngine(n, !e.synchronizeTabs)),
      (this.sharedClientState.onlineStateHandler = (r) =>
        og(this.syncEngine, r, 1)),
      (this.remoteStore.remoteSyncer.handleCredentialChange = px.bind(
        null,
        this.syncEngine,
      )),
      await QC(this.remoteStore, this.syncEngine.isPrimaryClient));
  }
  createEventManager(e) {
    return (function () {
      return new JC();
    })();
  }
  createDatastore(e) {
    const n = jl(e.databaseInfo.databaseId),
      r = NC(e.databaseInfo);
    return OC(e.authCredentials, e.appCheckCredentials, r, n);
  }
  createRemoteStore(e) {
    return (function (r, s, i, o, l) {
      return new jC(r, s, i, o, l);
    })(
      this.localStore,
      this.datastore,
      e.asyncQueue,
      (n) => og(this.syncEngine, n, 0),
      (function () {
        return eg.v() ? new eg() : new CC();
      })(),
    );
  }
  createSyncEngine(e, n) {
    return (function (s, i, o, l, u, h, d) {
      const p = new rx(s, i, o, l, u, h);
      return (d && (p.gu = !0), p);
    })(
      this.localStore,
      this.remoteStore,
      this.eventManager,
      this.sharedClientState,
      e.initialUser,
      e.maxConcurrentLimboResolutions,
      n,
    );
  }
  async terminate() {
    var e, n;
    (await (async function (s) {
      const i = Y(s);
      ($(kr, "RemoteStore shutting down."),
        i.Ia.add(5),
        await go(i),
        i.Aa.shutdown(),
        i.Va.set("Unknown"));
    })(this.remoteStore),
      (e = this.datastore) == null || e.terminate(),
      (n = this.eventManager) == null || n.terminate());
  }
}
fh.provider = { build: () => new fh() };
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class xE {
  constructor(e) {
    ((this.observer = e), (this.muted = !1));
  }
  next(e) {
    this.muted || (this.observer.next && this.Ou(this.observer.next, e));
  }
  error(e) {
    this.muted ||
      (this.observer.error
        ? this.Ou(this.observer.error, e)
        : gn("Uncaught Error in snapshot listener:", e.toString()));
  }
  Nu() {
    this.muted = !0;
  }
  Ou(e, n) {
    setTimeout(() => {
      this.muted || e(n);
    }, 0);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const nr = "FirestoreClient";
class vx {
  constructor(e, n, r, s, i) {
    ((this.authCredentials = e),
      (this.appCheckCredentials = n),
      (this.asyncQueue = r),
      (this._databaseInfo = s),
      (this.user = Je.UNAUTHENTICATED),
      (this.clientId = Ef.newId()),
      (this.authCredentialListener = () => Promise.resolve()),
      (this.appCheckCredentialListener = () => Promise.resolve()),
      (this._uninitializedComponentsProvider = i),
      this.authCredentials.start(r, async (o) => {
        ($(nr, "Received user=", o.uid),
          await this.authCredentialListener(o),
          (this.user = o));
      }),
      this.appCheckCredentials.start(
        r,
        (o) => (
          $(nr, "Received new app check token=", o),
          this.appCheckCredentialListener(o, this.user)
        ),
      ));
  }
  get configuration() {
    return {
      asyncQueue: this.asyncQueue,
      databaseInfo: this._databaseInfo,
      clientId: this.clientId,
      authCredentials: this.authCredentials,
      appCheckCredentials: this.appCheckCredentials,
      initialUser: this.user,
      maxConcurrentLimboResolutions: 100,
    };
  }
  setCredentialChangeListener(e) {
    this.authCredentialListener = e;
  }
  setAppCheckTokenChangeListener(e) {
    this.appCheckCredentialListener = e;
  }
  terminate() {
    this.asyncQueue.enterRestrictedMode();
    const e = new un();
    return (
      this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async () => {
        try {
          (this._onlineComponents && (await this._onlineComponents.terminate()),
            this._offlineComponents &&
              (await this._offlineComponents.terminate()),
            this.authCredentials.shutdown(),
            this.appCheckCredentials.shutdown(),
            e.resolve());
        } catch (n) {
          const r = zf(n, "Failed to shutdown persistence");
          e.reject(r);
        }
      }),
      e.promise
    );
  }
}
async function Yu(t, e) {
  (t.asyncQueue.verifyOperationInProgress(),
    $(nr, "Initializing OfflineComponentProvider"));
  const n = t.configuration;
  await e.initialize(n);
  let r = n.initialUser;
  (t.setCredentialChangeListener(async (s) => {
    r.isEqual(s) || (await aE(e.localStore, s), (r = s));
  }),
    e.persistence.setDatabaseDeletedListener(() => t.terminate()),
    (t._offlineComponents = e));
}
async function lg(t, e) {
  t.asyncQueue.verifyOperationInProgress();
  const n = await _x(t);
  ($(nr, "Initializing OnlineComponentProvider"),
    await e.initialize(n, t.configuration),
    t.setCredentialChangeListener((r) => ng(e.remoteStore, r)),
    t.setAppCheckTokenChangeListener((r, s) => ng(e.remoteStore, s)),
    (t._onlineComponents = e));
}
async function _x(t) {
  if (!t._offlineComponents)
    if (t._uninitializedComponentsProvider) {
      $(nr, "Using user provided OfflineComponentProvider");
      try {
        await Yu(t, t._uninitializedComponentsProvider._offline);
      } catch (e) {
        const n = e;
        if (
          !(function (s) {
            return s.name === "FirebaseError"
              ? s.code === F.FAILED_PRECONDITION || s.code === F.UNIMPLEMENTED
              : !(typeof DOMException < "u" && s instanceof DOMException) ||
                  s.code === 22 ||
                  s.code === 20 ||
                  s.code === 11;
          })(n)
        )
          throw n;
        (Pr(
          "Error using user provided cache. Falling back to memory cache: " + n,
        ),
          await Yu(t, new ll()));
      }
    } else
      ($(nr, "Using default OfflineComponentProvider"),
        await Yu(t, new yx(void 0)));
  return t._offlineComponents;
}
async function PE(t) {
  return (
    t._onlineComponents ||
      (t._uninitializedComponentsProvider
        ? ($(nr, "Using user provided OnlineComponentProvider"),
          await lg(t, t._uninitializedComponentsProvider._online))
        : ($(nr, "Using default OnlineComponentProvider"),
          await lg(t, new fh()))),
    t._onlineComponents
  );
}
function Ex(t) {
  return PE(t).then((e) => e.syncEngine);
}
async function kE(t) {
  const e = await PE(t),
    n = e.eventManager;
  return (
    (n.onListen = sx.bind(null, e.syncEngine)),
    (n.onUnlisten = ax.bind(null, e.syncEngine)),
    (n.onFirstRemoteStoreListen = ix.bind(null, e.syncEngine)),
    (n.onLastRemoteStoreUnlisten = lx.bind(null, e.syncEngine)),
    n
  );
}
function wx(t, e, n = {}) {
  const r = new un();
  return (
    t.asyncQueue.enqueueAndForget(async () =>
      (function (i, o, l, u, h) {
        const d = new xE({
            next: (m) => {
              (d.Nu(), o.enqueueAndForget(() => vE(i, p)));
              const T = m.docs.has(l);
              !T && m.fromCache
                ? h.reject(
                    new H(
                      F.UNAVAILABLE,
                      "Failed to get document because the client is offline.",
                    ),
                  )
                : T && m.fromCache && u && u.source === "server"
                  ? h.reject(
                      new H(
                        F.UNAVAILABLE,
                        'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)',
                      ),
                    )
                  : h.resolve(m);
            },
            error: (m) => h.reject(m),
          }),
          p = new _E(Cf(l.path), d, { includeMetadataChanges: !0, qa: !0 });
        return yE(i, p);
      })(await kE(t), t.asyncQueue, e, n, r),
    ),
    r.promise
  );
}
function Tx(t, e, n = {}) {
  const r = new un();
  return (
    t.asyncQueue.enqueueAndForget(async () =>
      (function (i, o, l, u, h) {
        const d = new xE({
            next: (m) => {
              (d.Nu(),
                o.enqueueAndForget(() => vE(i, p)),
                m.fromCache && u.source === "server"
                  ? h.reject(
                      new H(
                        F.UNAVAILABLE,
                        'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)',
                      ),
                    )
                  : h.resolve(m));
            },
            error: (m) => h.reject(m),
          }),
          p = new _E(l, d, { includeMetadataChanges: !0, qa: !0 });
        return yE(i, p);
      })(await kE(t), t.asyncQueue, e, n, r),
    ),
    r.promise
  );
}
function Sx(t, e) {
  const n = new un();
  return (
    t.asyncQueue.enqueueAndForget(async () => ux(await Ex(t), e, n)),
    n.promise
  );
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function NE(t) {
  const e = {};
  return (
    t.timeoutSeconds !== void 0 && (e.timeoutSeconds = t.timeoutSeconds),
    e
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ix = "ComponentProvider",
  ug = new Map();
function Rx(t, e, n, r, s) {
  return new HR(
    t,
    e,
    n,
    s.host,
    s.ssl,
    s.experimentalForceLongPolling,
    s.experimentalAutoDetectLongPolling,
    NE(s.experimentalLongPollingOptions),
    s.useFetchStreams,
    s.isUsingEmulator,
    r,
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const VE = "firestore.googleapis.com",
  cg = !0;
class hg {
  constructor(e) {
    if (e.host === void 0) {
      if (e.ssl !== void 0)
        throw new H(
          F.INVALID_ARGUMENT,
          "Can't provide ssl option if host option is not set",
        );
      ((this.host = VE), (this.ssl = cg));
    } else ((this.host = e.host), (this.ssl = e.ssl ?? cg));
    if (
      ((this.isUsingEmulator = e.emulatorOptions !== void 0),
      (this.credentials = e.credentials),
      (this.ignoreUndefinedProperties = !!e.ignoreUndefinedProperties),
      (this.localCache = e.localCache),
      e.cacheSizeBytes === void 0)
    )
      this.cacheSizeBytes = iE;
    else {
      if (e.cacheSizeBytes !== -1 && e.cacheSizeBytes < ZA)
        throw new H(
          F.INVALID_ARGUMENT,
          "cacheSizeBytes must be at least 1048576",
        );
      this.cacheSizeBytes = e.cacheSizeBytes;
    }
    (LR(
      "experimentalForceLongPolling",
      e.experimentalForceLongPolling,
      "experimentalAutoDetectLongPolling",
      e.experimentalAutoDetectLongPolling,
    ),
      (this.experimentalForceLongPolling = !!e.experimentalForceLongPolling),
      this.experimentalForceLongPolling
        ? (this.experimentalAutoDetectLongPolling = !1)
        : e.experimentalAutoDetectLongPolling === void 0
          ? (this.experimentalAutoDetectLongPolling = !0)
          : (this.experimentalAutoDetectLongPolling =
              !!e.experimentalAutoDetectLongPolling),
      (this.experimentalLongPollingOptions = NE(
        e.experimentalLongPollingOptions ?? {},
      )),
      (function (r) {
        if (r.timeoutSeconds !== void 0) {
          if (isNaN(r.timeoutSeconds))
            throw new H(
              F.INVALID_ARGUMENT,
              `invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`,
            );
          if (r.timeoutSeconds < 5)
            throw new H(
              F.INVALID_ARGUMENT,
              `invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`,
            );
          if (r.timeoutSeconds > 30)
            throw new H(
              F.INVALID_ARGUMENT,
              `invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`,
            );
        }
      })(this.experimentalLongPollingOptions),
      (this.useFetchStreams = !!e.useFetchStreams));
  }
  isEqual(e) {
    return (
      this.host === e.host &&
      this.ssl === e.ssl &&
      this.credentials === e.credentials &&
      this.cacheSizeBytes === e.cacheSizeBytes &&
      this.experimentalForceLongPolling === e.experimentalForceLongPolling &&
      this.experimentalAutoDetectLongPolling ===
        e.experimentalAutoDetectLongPolling &&
      (function (r, s) {
        return r.timeoutSeconds === s.timeoutSeconds;
      })(
        this.experimentalLongPollingOptions,
        e.experimentalLongPollingOptions,
      ) &&
      this.ignoreUndefinedProperties === e.ignoreUndefinedProperties &&
      this.useFetchStreams === e.useFetchStreams
    );
  }
}
class zl {
  constructor(e, n, r, s) {
    ((this._authCredentials = e),
      (this._appCheckCredentials = n),
      (this._databaseId = r),
      (this._app = s),
      (this.type = "firestore-lite"),
      (this._persistenceKey = "(lite)"),
      (this._settings = new hg({})),
      (this._settingsFrozen = !1),
      (this._emulatorOptions = {}),
      (this._terminateTask = "notTerminated"));
  }
  get app() {
    if (!this._app)
      throw new H(
        F.FAILED_PRECONDITION,
        "Firestore was not initialized using the Firebase SDK. 'app' is not available",
      );
    return this._app;
  }
  get _initialized() {
    return this._settingsFrozen;
  }
  get _terminated() {
    return this._terminateTask !== "notTerminated";
  }
  _setSettings(e) {
    if (this._settingsFrozen)
      throw new H(
        F.FAILED_PRECONDITION,
        "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.",
      );
    ((this._settings = new hg(e)),
      (this._emulatorOptions = e.emulatorOptions || {}),
      e.credentials !== void 0 &&
        (this._authCredentials = (function (r) {
          if (!r) return new IR();
          switch (r.type) {
            case "firstParty":
              return new xR(
                r.sessionIndex || "0",
                r.iamToken || null,
                r.authTokenFactory || null,
              );
            case "provider":
              return r.client;
            default:
              throw new H(
                F.INVALID_ARGUMENT,
                "makeAuthCredentialsProvider failed due to invalid credential type",
              );
          }
        })(e.credentials)));
  }
  _getSettings() {
    return this._settings;
  }
  _getEmulatorOptions() {
    return this._emulatorOptions;
  }
  _freezeSettings() {
    return ((this._settingsFrozen = !0), this._settings);
  }
  _delete() {
    return (
      this._terminateTask === "notTerminated" &&
        (this._terminateTask = this._terminate()),
      this._terminateTask
    );
  }
  async _restart() {
    this._terminateTask === "notTerminated"
      ? await this._terminate()
      : (this._terminateTask = "notTerminated");
  }
  toJSON() {
    return {
      app: this._app,
      databaseId: this._databaseId,
      settings: this._settings,
    };
  }
  _terminate() {
    return (
      (function (n) {
        const r = ug.get(n);
        r && ($(Ix, "Removing Datastore"), ug.delete(n), r.terminate());
      })(this),
      Promise.resolve()
    );
  }
}
function Ax(t, e, n, r = {}) {
  var h;
  t = Yn(t, zl);
  const s = n_(e),
    i = t._getSettings(),
    o = { ...i, emulatorOptions: t._getEmulatorOptions() },
    l = `${e}:${n}`;
  (s && cI(`https://${l}`),
    i.host !== VE &&
      i.host !== l &&
      Pr(
        "Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.",
      ));
  const u = { ...i, host: l, ssl: s, emulatorOptions: r };
  if (!Qa(u, o) && (t._setSettings(u), r.mockUserToken)) {
    let d, p;
    if (typeof r.mockUserToken == "string")
      ((d = r.mockUserToken), (p = Je.MOCK_USER));
    else {
      d = tI(
        r.mockUserToken,
        (h = t._app) == null ? void 0 : h.options.projectId,
      );
      const m = r.mockUserToken.sub || r.mockUserToken.user_id;
      if (!m)
        throw new H(
          F.INVALID_ARGUMENT,
          "mockUserToken must contain 'sub' or 'user_id' field!",
        );
      p = new Je(m);
    }
    t._authCredentials = new RR(new g_(d, p));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Bl {
  constructor(e, n, r) {
    ((this.converter = n),
      (this._query = r),
      (this.type = "query"),
      (this.firestore = e));
  }
  withConverter(e) {
    return new Bl(this.firestore, e, this._query);
  }
}
class Le {
  constructor(e, n, r) {
    ((this.converter = n),
      (this._key = r),
      (this.type = "document"),
      (this.firestore = e));
  }
  get _path() {
    return this._key.path;
  }
  get id() {
    return this._key.path.lastSegment();
  }
  get path() {
    return this._key.path.canonicalString();
  }
  get parent() {
    return new qn(this.firestore, this.converter, this._key.path.popLast());
  }
  withConverter(e) {
    return new Le(this.firestore, e, this._key);
  }
  toJSON() {
    return { type: Le._jsonSchemaVersion, referencePath: this._key.toString() };
  }
  static fromJSON(e, n, r) {
    if (fo(n, Le._jsonSchema))
      return new Le(e, r || null, new W(fe.fromString(n.referencePath)));
  }
}
((Le._jsonSchemaVersion = "firestore/documentReference/1.0"),
  (Le._jsonSchema = {
    type: Pe("string", Le._jsonSchemaVersion),
    referencePath: Pe("string"),
  }));
class qn extends Bl {
  constructor(e, n, r) {
    (super(e, n, Cf(r)), (this._path = r), (this.type = "collection"));
  }
  get id() {
    return this._query.path.lastSegment();
  }
  get path() {
    return this._query.path.canonicalString();
  }
  get parent() {
    const e = this._path.popLast();
    return e.isEmpty() ? null : new Le(this.firestore, null, new W(e));
  }
  withConverter(e) {
    return new qn(this.firestore, e, this._path);
  }
}
function DE(t, e, ...n) {
  if (((t = Qi(t)), y_("collection", "path", e), t instanceof zl)) {
    const r = fe.fromString(e, ...n);
    return (Rm(r), new qn(t, null, r));
  }
  {
    if (!(t instanceof Le || t instanceof qn))
      throw new H(
        F.INVALID_ARGUMENT,
        "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore",
      );
    const r = t._path.child(fe.fromString(e, ...n));
    return (Rm(r), new qn(t.firestore, null, r));
  }
}
function dh(t, e, ...n) {
  if (
    ((t = Qi(t)),
    arguments.length === 1 && (e = Ef.newId()),
    y_("doc", "path", e),
    t instanceof zl)
  ) {
    const r = fe.fromString(e, ...n);
    return (Im(r), new Le(t, null, new W(r)));
  }
  {
    if (!(t instanceof Le || t instanceof qn))
      throw new H(
        F.INVALID_ARGUMENT,
        "Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore",
      );
    const r = t._path.child(fe.fromString(e, ...n));
    return (
      Im(r),
      new Le(t.firestore, t instanceof qn ? t.converter : null, new W(r))
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const fg = "AsyncQueue";
class dg {
  constructor(e = Promise.resolve()) {
    ((this.Yu = []),
      (this.ec = !1),
      (this.tc = []),
      (this.nc = null),
      (this.rc = !1),
      (this.sc = !1),
      (this.oc = []),
      (this.M_ = new uE(this, "async_queue_retry")),
      (this._c = () => {
        const r = Qu();
        (r && $(fg, "Visibility state changed to " + r.visibilityState),
          this.M_.w_());
      }),
      (this.ac = e));
    const n = Qu();
    n &&
      typeof n.addEventListener == "function" &&
      n.addEventListener("visibilitychange", this._c);
  }
  get isShuttingDown() {
    return this.ec;
  }
  enqueueAndForget(e) {
    this.enqueue(e);
  }
  enqueueAndForgetEvenWhileRestricted(e) {
    (this.uc(), this.cc(e));
  }
  enterRestrictedMode(e) {
    if (!this.ec) {
      ((this.ec = !0), (this.sc = e || !1));
      const n = Qu();
      n &&
        typeof n.removeEventListener == "function" &&
        n.removeEventListener("visibilitychange", this._c);
    }
  }
  enqueue(e) {
    if ((this.uc(), this.ec)) return new Promise(() => {});
    const n = new un();
    return this.cc(() =>
      this.ec && this.sc
        ? Promise.resolve()
        : (e().then(n.resolve, n.reject), n.promise),
    ).then(() => n.promise);
  }
  enqueueRetryable(e) {
    this.enqueueAndForget(() => (this.Yu.push(e), this.lc()));
  }
  async lc() {
    if (this.Yu.length !== 0) {
      try {
        (await this.Yu[0](), this.Yu.shift(), this.M_.reset());
      } catch (e) {
        if (!Ds(e)) throw e;
        $(fg, "Operation failed with retryable error: " + e);
      }
      this.Yu.length > 0 && this.M_.p_(() => this.lc());
    }
  }
  cc(e) {
    const n = this.ac.then(
      () => (
        (this.rc = !0),
        e()
          .catch((r) => {
            throw (
              (this.nc = r),
              (this.rc = !1),
              gn("INTERNAL UNHANDLED ERROR: ", pg(r)),
              r
            );
          })
          .then((r) => ((this.rc = !1), r))
      ),
    );
    return ((this.ac = n), n);
  }
  enqueueAfterDelay(e, n, r) {
    (this.uc(), this.oc.indexOf(e) > -1 && (n = 0));
    const s = Uf.createAndSchedule(this, e, n, r, (i) => this.hc(i));
    return (this.tc.push(s), s);
  }
  uc() {
    this.nc && q(47125, { Pc: pg(this.nc) });
  }
  verifyOperationInProgress() {}
  async Tc() {
    let e;
    do ((e = this.ac), await e);
    while (e !== this.ac);
  }
  Ec(e) {
    for (const n of this.tc) if (n.timerId === e) return !0;
    return !1;
  }
  Ic(e) {
    return this.Tc().then(() => {
      this.tc.sort((n, r) => n.targetTimeMs - r.targetTimeMs);
      for (const n of this.tc)
        if ((n.skipDelay(), e !== "all" && n.timerId === e)) break;
      return this.Tc();
    });
  }
  Rc(e) {
    this.oc.push(e);
  }
  hc(e) {
    const n = this.tc.indexOf(e);
    this.tc.splice(n, 1);
  }
}
function pg(t) {
  let e = t.message || "";
  return (
    t.stack &&
      (e = t.stack.includes(t.message)
        ? t.stack
        : t.message +
          `
` +
          t.stack),
    e
  );
}
class vo extends zl {
  constructor(e, n, r, s) {
    (super(e, n, r, s),
      (this.type = "firestore"),
      (this._queue = new dg()),
      (this._persistenceKey = (s == null ? void 0 : s.name) || "[DEFAULT]"));
  }
  async _terminate() {
    if (this._firestoreClient) {
      const e = this._firestoreClient.terminate();
      ((this._queue = new dg(e)), (this._firestoreClient = void 0), await e);
    }
  }
}
function Cx(t, e) {
  const n = typeof t == "object" ? t : fR(),
    r = typeof t == "string" ? t : Za,
    s = aR(n, "firestore").getImmediate({ identifier: r });
  if (!s._initialized) {
    const i = Z1("firestore");
    i && Ax(s, ...i);
  }
  return s;
}
function Hf(t) {
  if (t._terminated)
    throw new H(
      F.FAILED_PRECONDITION,
      "The client has already been terminated.",
    );
  return (t._firestoreClient || xx(t), t._firestoreClient);
}
function xx(t) {
  var r, s, i, o;
  const e = t._freezeSettings(),
    n = Rx(
      t._databaseId,
      ((r = t._app) == null ? void 0 : r.options.appId) || "",
      t._persistenceKey,
      (s = t._app) == null ? void 0 : s.options.apiKey,
      e,
    );
  (t._componentsProvider ||
    ((i = e.localCache) != null &&
      i._offlineComponentProvider &&
      (o = e.localCache) != null &&
      o._onlineComponentProvider &&
      (t._componentsProvider = {
        _offline: e.localCache._offlineComponentProvider,
        _online: e.localCache._onlineComponentProvider,
      })),
    (t._firestoreClient = new vx(
      t._authCredentials,
      t._appCheckCredentials,
      t._queue,
      n,
      t._componentsProvider &&
        (function (u) {
          const h = u == null ? void 0 : u._online.build();
          return {
            _offline: u == null ? void 0 : u._offline.build(h),
            _online: h,
          };
        })(t._componentsProvider),
    )));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class It {
  constructor(e) {
    this._byteString = e;
  }
  static fromBase64String(e) {
    try {
      return new It(We.fromBase64String(e));
    } catch (n) {
      throw new H(
        F.INVALID_ARGUMENT,
        "Failed to construct data from Base64 string: " + n,
      );
    }
  }
  static fromUint8Array(e) {
    return new It(We.fromUint8Array(e));
  }
  toBase64() {
    return this._byteString.toBase64();
  }
  toUint8Array() {
    return this._byteString.toUint8Array();
  }
  toString() {
    return "Bytes(base64: " + this.toBase64() + ")";
  }
  isEqual(e) {
    return this._byteString.isEqual(e._byteString);
  }
  toJSON() {
    return { type: It._jsonSchemaVersion, bytes: this.toBase64() };
  }
  static fromJSON(e) {
    if (fo(e, It._jsonSchema)) return It.fromBase64String(e.bytes);
  }
}
((It._jsonSchemaVersion = "firestore/bytes/1.0"),
  (It._jsonSchema = {
    type: Pe("string", It._jsonSchemaVersion),
    bytes: Pe("string"),
  }));
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class LE {
  constructor(...e) {
    for (let n = 0; n < e.length; ++n)
      if (e[n].length === 0)
        throw new H(
          F.INVALID_ARGUMENT,
          "Invalid field name at argument $(i + 1). Field names must not be empty.",
        );
    this._internalPath = new $e(e);
  }
  isEqual(e) {
    return this._internalPath.isEqual(e._internalPath);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ME {
  constructor(e) {
    this._methodName = e;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Xt {
  constructor(e, n) {
    if (!isFinite(e) || e < -90 || e > 90)
      throw new H(
        F.INVALID_ARGUMENT,
        "Latitude must be a number between -90 and 90, but was: " + e,
      );
    if (!isFinite(n) || n < -180 || n > 180)
      throw new H(
        F.INVALID_ARGUMENT,
        "Longitude must be a number between -180 and 180, but was: " + n,
      );
    ((this._lat = e), (this._long = n));
  }
  get latitude() {
    return this._lat;
  }
  get longitude() {
    return this._long;
  }
  isEqual(e) {
    return this._lat === e._lat && this._long === e._long;
  }
  _compareTo(e) {
    return ee(this._lat, e._lat) || ee(this._long, e._long);
  }
  toJSON() {
    return {
      latitude: this._lat,
      longitude: this._long,
      type: Xt._jsonSchemaVersion,
    };
  }
  static fromJSON(e) {
    if (fo(e, Xt._jsonSchema)) return new Xt(e.latitude, e.longitude);
  }
}
((Xt._jsonSchemaVersion = "firestore/geoPoint/1.0"),
  (Xt._jsonSchema = {
    type: Pe("string", Xt._jsonSchemaVersion),
    latitude: Pe("number"),
    longitude: Pe("number"),
  }));
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class bt {
  constructor(e) {
    this._values = (e || []).map((n) => n);
  }
  toArray() {
    return this._values.map((e) => e);
  }
  isEqual(e) {
    return (function (r, s) {
      if (r.length !== s.length) return !1;
      for (let i = 0; i < r.length; ++i) if (r[i] !== s[i]) return !1;
      return !0;
    })(this._values, e._values);
  }
  toJSON() {
    return { type: bt._jsonSchemaVersion, vectorValues: this._values };
  }
  static fromJSON(e) {
    if (fo(e, bt._jsonSchema)) {
      if (
        Array.isArray(e.vectorValues) &&
        e.vectorValues.every((n) => typeof n == "number")
      )
        return new bt(e.vectorValues);
      throw new H(
        F.INVALID_ARGUMENT,
        "Expected 'vectorValues' field to be a number array",
      );
    }
  }
}
((bt._jsonSchemaVersion = "firestore/vectorValue/1.0"),
  (bt._jsonSchema = {
    type: Pe("string", bt._jsonSchemaVersion),
    vectorValues: Pe("object"),
  }));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Px = /^__.*__$/;
class kx {
  constructor(e, n, r) {
    ((this.data = e), (this.fieldMask = n), (this.fieldTransforms = r));
  }
  toMutation(e, n) {
    return this.fieldMask !== null
      ? new Mr(e, this.data, this.fieldMask, n, this.fieldTransforms)
      : new po(e, this.data, n, this.fieldTransforms);
  }
}
function OE(t) {
  switch (t) {
    case 0:
    case 2:
    case 1:
      return !0;
    case 3:
    case 4:
      return !1;
    default:
      throw q(40011, { dataSource: t });
  }
}
class Wf {
  constructor(e, n, r, s, i, o) {
    ((this.settings = e),
      (this.databaseId = n),
      (this.serializer = r),
      (this.ignoreUndefinedProperties = s),
      i === void 0 && this.Ac(),
      (this.fieldTransforms = i || []),
      (this.fieldMask = o || []));
  }
  get path() {
    return this.settings.path;
  }
  get dataSource() {
    return this.settings.dataSource;
  }
  i(e) {
    return new Wf(
      { ...this.settings, ...e },
      this.databaseId,
      this.serializer,
      this.ignoreUndefinedProperties,
      this.fieldTransforms,
      this.fieldMask,
    );
  }
  dc(e) {
    var s;
    const n = (s = this.path) == null ? void 0 : s.child(e),
      r = this.i({ path: n, arrayElement: !1 });
    return (r.mc(e), r);
  }
  fc(e) {
    var s;
    const n = (s = this.path) == null ? void 0 : s.child(e),
      r = this.i({ path: n, arrayElement: !1 });
    return (r.Ac(), r);
  }
  gc(e) {
    return this.i({ path: void 0, arrayElement: !0 });
  }
  yc(e) {
    return ul(
      e,
      this.settings.methodName,
      this.settings.hasConverter || !1,
      this.path,
      this.settings.targetDoc,
    );
  }
  contains(e) {
    return (
      this.fieldMask.find((n) => e.isPrefixOf(n)) !== void 0 ||
      this.fieldTransforms.find((n) => e.isPrefixOf(n.field)) !== void 0
    );
  }
  Ac() {
    if (this.path)
      for (let e = 0; e < this.path.length; e++) this.mc(this.path.get(e));
  }
  mc(e) {
    if (e.length === 0) throw this.yc("Document fields must not be empty");
    if (OE(this.dataSource) && Px.test(e))
      throw this.yc('Document fields cannot begin and end with "__"');
  }
}
class Nx {
  constructor(e, n, r) {
    ((this.databaseId = e),
      (this.ignoreUndefinedProperties = n),
      (this.serializer = r || jl(e)));
  }
  I(e, n, r, s = !1) {
    return new Wf(
      {
        dataSource: e,
        methodName: n,
        targetDoc: r,
        path: $e.emptyPath(),
        arrayElement: !1,
        hasConverter: s,
      },
      this.databaseId,
      this.serializer,
      this.ignoreUndefinedProperties,
    );
  }
}
function FE(t) {
  const e = t._freezeSettings(),
    n = jl(t._databaseId);
  return new Nx(t._databaseId, !!e.ignoreUndefinedProperties, n);
}
function jE(t, e, n, r, s, i = {}) {
  const o = t.I(i.merge || i.mergeFields ? 2 : 0, e, n, s);
  BE("Data must be an object, but it was:", o, r);
  const l = UE(r, o);
  let u, h;
  if (i.merge) ((u = new Mt(o.fieldMask)), (h = o.fieldTransforms));
  else if (i.mergeFields) {
    const d = [];
    for (const p of i.mergeFields) {
      const m = qf(e, p, n);
      if (!o.contains(m))
        throw new H(
          F.INVALID_ARGUMENT,
          `Field '${m}' is specified in your field mask but missing from your input data.`,
        );
      Lx(d, m) || d.push(m);
    }
    ((u = new Mt(d)), (h = o.fieldTransforms.filter((p) => u.covers(p.field))));
  } else ((u = null), (h = o.fieldTransforms));
  return new kx(new St(l), u, h);
}
function bE(t, e) {
  if (zE((t = Qi(t)))) return (BE("Unsupported field value:", e, t), UE(t, e));
  if (t instanceof ME)
    return (
      (function (r, s) {
        if (!OE(s.dataSource))
          throw s.yc(
            `${r._methodName}() can only be used with update() and set()`,
          );
        if (!s.path)
          throw s.yc(
            `${r._methodName}() is not currently supported inside arrays`,
          );
        const i = r._toFieldTransform(s);
        i && s.fieldTransforms.push(i);
      })(t, e),
      null
    );
  if (t === void 0 && e.ignoreUndefinedProperties) return null;
  if ((e.path && e.fieldMask.push(e.path), t instanceof Array)) {
    if (e.settings.arrayElement && e.dataSource !== 4)
      throw e.yc("Nested arrays are not supported");
    return (function (r, s) {
      const i = [];
      let o = 0;
      for (const l of r) {
        let u = bE(l, s.gc(o));
        (u == null && (u = { nullValue: "NULL_VALUE" }), i.push(u), o++);
      }
      return { arrayValue: { values: i } };
    })(t, e);
  }
  return (function (r, s) {
    if ((r = Qi(r)) === null) return { nullValue: "NULL_VALUE" };
    if (typeof r == "number") return yA(s.serializer, r);
    if (typeof r == "boolean") return { booleanValue: r };
    if (typeof r == "string") return { stringValue: r };
    if (r instanceof Date) {
      const i = le.fromDate(r);
      return { timestampValue: il(s.serializer, i) };
    }
    if (r instanceof le) {
      const i = new le(r.seconds, 1e3 * Math.floor(r.nanoseconds / 1e3));
      return { timestampValue: il(s.serializer, i) };
    }
    if (r instanceof Xt)
      return {
        geoPointValue: { latitude: r.latitude, longitude: r.longitude },
      };
    if (r instanceof It) return { bytesValue: J_(s.serializer, r._byteString) };
    if (r instanceof Le) {
      const i = s.databaseId,
        o = r.firestore._databaseId;
      if (!o.isEqual(i))
        throw s.yc(
          `Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`,
        );
      return {
        referenceValue: Nf(
          r.firestore._databaseId || s.databaseId,
          r._key.path,
        ),
      };
    }
    if (r instanceof bt)
      return (function (o, l) {
        const u = o instanceof bt ? o.toArray() : o;
        return {
          mapValue: {
            fields: {
              [A_]: { stringValue: C_ },
              [el]: {
                arrayValue: {
                  values: u.map((d) => {
                    if (typeof d != "number")
                      throw l.yc(
                        "VectorValues must only contain numeric values.",
                      );
                    return xf(l.serializer, d);
                  }),
                },
              },
            },
          },
        };
      })(r, s);
    if (sE(r)) return r._toProto(s.serializer);
    throw s.yc(`Unsupported field value: ${wf(r)}`);
  })(t, e);
}
function UE(t, e) {
  const n = {};
  return (
    E_(t)
      ? e.path && e.path.length > 0 && e.fieldMask.push(e.path)
      : Dr(t, (r, s) => {
          const i = bE(s, e.dc(r));
          i != null && (n[r] = i);
        }),
    { mapValue: { fields: n } }
  );
}
function zE(t) {
  return !(
    typeof t != "object" ||
    t === null ||
    t instanceof Array ||
    t instanceof Date ||
    t instanceof le ||
    t instanceof Xt ||
    t instanceof It ||
    t instanceof Le ||
    t instanceof ME ||
    t instanceof bt ||
    sE(t)
  );
}
function BE(t, e, n) {
  if (!zE(n) || !v_(n)) {
    const r = wf(n);
    throw r === "an object" ? e.yc(t + " a custom object") : e.yc(t + " " + r);
  }
}
function qf(t, e, n) {
  if ((e = Qi(e)) instanceof LE) return e._internalPath;
  if (typeof e == "string") return Dx(t, e);
  throw ul("Field path arguments must be of type string or ", t, !1, void 0, n);
}
const Vx = new RegExp("[~\\*/\\[\\]]");
function Dx(t, e, n) {
  if (e.search(Vx) >= 0)
    throw ul(
      `Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,
      t,
      !1,
      void 0,
      n,
    );
  try {
    return new LE(...e.split("."))._internalPath;
  } catch {
    throw ul(
      `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
      t,
      !1,
      void 0,
      n,
    );
  }
}
function ul(t, e, n, r, s) {
  const i = r && !r.isEmpty(),
    o = s !== void 0;
  let l = `Function ${e}() called with invalid data`;
  (n && (l += " (via `toFirestore()`)"), (l += ". "));
  let u = "";
  return (
    (i || o) &&
      ((u += " (found"),
      i && (u += ` in field ${r}`),
      o && (u += ` in document ${s}`),
      (u += ")")),
    new H(F.INVALID_ARGUMENT, l + t + u)
  );
}
function Lx(t, e) {
  return t.some((n) => n.isEqual(e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Mx {
  convertValue(e, n = "none") {
    switch (er(e)) {
      case 0:
        return null;
      case 1:
        return e.booleanValue;
      case 2:
        return Ie(e.integerValue || e.doubleValue);
      case 3:
        return this.convertTimestamp(e.timestampValue);
      case 4:
        return this.convertServerTimestamp(e, n);
      case 5:
        return e.stringValue;
      case 6:
        return this.convertBytes(Zn(e.bytesValue));
      case 7:
        return this.convertReference(e.referenceValue);
      case 8:
        return this.convertGeoPoint(e.geoPointValue);
      case 9:
        return this.convertArray(e.arrayValue, n);
      case 11:
        return this.convertObject(e.mapValue, n);
      case 10:
        return this.convertVectorValue(e.mapValue);
      default:
        throw q(62114, { value: e });
    }
  }
  convertObject(e, n) {
    return this.convertObjectMap(e.fields, n);
  }
  convertObjectMap(e, n = "none") {
    const r = {};
    return (
      Dr(e, (s, i) => {
        r[s] = this.convertValue(i, n);
      }),
      r
    );
  }
  convertVectorValue(e) {
    var r, s, i;
    const n =
      (i =
        (s = (r = e.fields) == null ? void 0 : r[el].arrayValue) == null
          ? void 0
          : s.values) == null
        ? void 0
        : i.map((o) => Ie(o.doubleValue));
    return new bt(n);
  }
  convertGeoPoint(e) {
    return new Xt(Ie(e.latitude), Ie(e.longitude));
  }
  convertArray(e, n) {
    return (e.values || []).map((r) => this.convertValue(r, n));
  }
  convertServerTimestamp(e, n) {
    switch (n) {
      case "previous":
        const r = Nl(e);
        return r == null ? null : this.convertValue(r, n);
      case "estimate":
        return this.convertTimestamp(Zi(e));
      default:
        return null;
    }
  }
  convertTimestamp(e) {
    const n = Xn(e);
    return new le(n.seconds, n.nanos);
  }
  convertDocumentKey(e, n) {
    const r = fe.fromString(e);
    ie(rE(r), 9688, { name: e });
    const s = new eo(r.get(1), r.get(3)),
      i = new W(r.popFirst(5));
    return (
      s.isEqual(n) ||
        gn(
          `Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`,
        ),
      i
    );
  }
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class $E extends Mx {
  constructor(e) {
    (super(), (this.firestore = e));
  }
  convertBytes(e) {
    return new It(e);
  }
  convertReference(e) {
    const n = this.convertDocumentKey(e, this.firestore._databaseId);
    return new Le(this.firestore, null, n);
  }
}
const mg = "@firebase/firestore",
  gg = "4.14.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class GE {
  constructor(e, n, r, s, i) {
    ((this._firestore = e),
      (this._userDataWriter = n),
      (this._key = r),
      (this._document = s),
      (this._converter = i));
  }
  get id() {
    return this._key.path.lastSegment();
  }
  get ref() {
    return new Le(this._firestore, this._converter, this._key);
  }
  exists() {
    return this._document !== null;
  }
  data() {
    if (this._document) {
      if (this._converter) {
        const e = new Ox(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          null,
        );
        return this._converter.fromFirestore(e);
      }
      return this._userDataWriter.convertValue(this._document.data.value);
    }
  }
  _fieldsProto() {
    var e;
    return (
      ((e = this._document) == null
        ? void 0
        : e.data.clone().value.mapValue.fields) ?? void 0
    );
  }
  get(e) {
    if (this._document) {
      const n = this._document.data.field(qf("DocumentSnapshot.get", e));
      if (n !== null) return this._userDataWriter.convertValue(n);
    }
  }
}
class Ox extends GE {
  data() {
    return super.data();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Fx(t) {
  if (t.limitType === "L" && t.explicitOrderBy.length === 0)
    throw new H(
      F.UNIMPLEMENTED,
      "limitToLast() queries require specifying at least one orderBy() clause",
    );
}
function HE(t, e, n) {
  let r;
  return ((r = t ? t.toFirestore(e) : e), r);
}
class yi {
  constructor(e, n) {
    ((this.hasPendingWrites = e), (this.fromCache = n));
  }
  isEqual(e) {
    return (
      this.hasPendingWrites === e.hasPendingWrites &&
      this.fromCache === e.fromCache
    );
  }
}
class Tr extends GE {
  constructor(e, n, r, s, i, o) {
    (super(e, n, r, s, o),
      (this._firestore = e),
      (this._firestoreImpl = e),
      (this.metadata = i));
  }
  exists() {
    return super.exists();
  }
  data(e = {}) {
    if (this._document) {
      if (this._converter) {
        const n = new Ea(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          this.metadata,
          null,
        );
        return this._converter.fromFirestore(n, e);
      }
      return this._userDataWriter.convertValue(
        this._document.data.value,
        e.serverTimestamps,
      );
    }
  }
  get(e, n = {}) {
    if (this._document) {
      const r = this._document.data.field(qf("DocumentSnapshot.get", e));
      if (r !== null)
        return this._userDataWriter.convertValue(r, n.serverTimestamps);
    }
  }
  toJSON() {
    if (this.metadata.hasPendingWrites)
      throw new H(
        F.FAILED_PRECONDITION,
        "DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().",
      );
    const e = this._document,
      n = {};
    return (
      (n.type = Tr._jsonSchemaVersion),
      (n.bundle = ""),
      (n.bundleSource = "DocumentSnapshot"),
      (n.bundleName = this._key.toString()),
      !e || !e.isValidDocument() || !e.isFoundDocument()
        ? n
        : (this._userDataWriter.convertObjectMap(
            e.data.value.mapValue.fields,
            "previous",
          ),
          (n.bundle = (this._firestore, this.ref.path, "NOT SUPPORTED")),
          n)
    );
  }
}
((Tr._jsonSchemaVersion = "firestore/documentSnapshot/1.0"),
  (Tr._jsonSchema = {
    type: Pe("string", Tr._jsonSchemaVersion),
    bundleSource: Pe("string", "DocumentSnapshot"),
    bundleName: Pe("string"),
    bundle: Pe("string"),
  }));
class Ea extends Tr {
  data(e = {}) {
    return super.data(e);
  }
}
class fs {
  constructor(e, n, r, s) {
    ((this._firestore = e),
      (this._userDataWriter = n),
      (this._snapshot = s),
      (this.metadata = new yi(s.hasPendingWrites, s.fromCache)),
      (this.query = r));
  }
  get docs() {
    const e = [];
    return (this.forEach((n) => e.push(n)), e);
  }
  get size() {
    return this._snapshot.docs.size;
  }
  get empty() {
    return this.size === 0;
  }
  forEach(e, n) {
    this._snapshot.docs.forEach((r) => {
      e.call(
        n,
        new Ea(
          this._firestore,
          this._userDataWriter,
          r.key,
          r,
          new yi(
            this._snapshot.mutatedKeys.has(r.key),
            this._snapshot.fromCache,
          ),
          this.query.converter,
        ),
      );
    });
  }
  docChanges(e = {}) {
    const n = !!e.includeMetadataChanges;
    if (n && this._snapshot.excludesMetadataChanges)
      throw new H(
        F.INVALID_ARGUMENT,
        "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().",
      );
    return (
      (this._cachedChanges &&
        this._cachedChangesIncludeMetadataChanges === n) ||
        ((this._cachedChanges = (function (s, i) {
          if (s._snapshot.oldDocs.isEmpty()) {
            let o = 0;
            return s._snapshot.docChanges.map((l) => {
              const u = new Ea(
                s._firestore,
                s._userDataWriter,
                l.doc.key,
                l.doc,
                new yi(
                  s._snapshot.mutatedKeys.has(l.doc.key),
                  s._snapshot.fromCache,
                ),
                s.query.converter,
              );
              return (
                l.doc,
                { type: "added", doc: u, oldIndex: -1, newIndex: o++ }
              );
            });
          }
          {
            let o = s._snapshot.oldDocs;
            return s._snapshot.docChanges
              .filter((l) => i || l.type !== 3)
              .map((l) => {
                const u = new Ea(
                  s._firestore,
                  s._userDataWriter,
                  l.doc.key,
                  l.doc,
                  new yi(
                    s._snapshot.mutatedKeys.has(l.doc.key),
                    s._snapshot.fromCache,
                  ),
                  s.query.converter,
                );
                let h = -1,
                  d = -1;
                return (
                  l.type !== 0 &&
                    ((h = o.indexOf(l.doc.key)), (o = o.delete(l.doc.key))),
                  l.type !== 1 &&
                    ((o = o.add(l.doc)), (d = o.indexOf(l.doc.key))),
                  { type: jx(l.type), doc: u, oldIndex: h, newIndex: d }
                );
              });
          }
        })(this, n)),
        (this._cachedChangesIncludeMetadataChanges = n)),
      this._cachedChanges
    );
  }
  toJSON() {
    if (this.metadata.hasPendingWrites)
      throw new H(
        F.FAILED_PRECONDITION,
        "QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().",
      );
    const e = {};
    ((e.type = fs._jsonSchemaVersion),
      (e.bundleSource = "QuerySnapshot"),
      (e.bundleName = Ef.newId()),
      this._firestore._databaseId.database,
      this._firestore._databaseId.projectId);
    const n = [],
      r = [],
      s = [];
    return (
      this.docs.forEach((i) => {
        i._document !== null &&
          (n.push(i._document),
          r.push(
            this._userDataWriter.convertObjectMap(
              i._document.data.value.mapValue.fields,
              "previous",
            ),
          ),
          s.push(i.ref.path));
      }),
      (e.bundle =
        (this._firestore, this.query._query, e.bundleName, "NOT SUPPORTED")),
      e
    );
  }
}
function jx(t) {
  switch (t) {
    case 0:
      return "added";
    case 2:
    case 3:
      return "modified";
    case 1:
      return "removed";
    default:
      return q(61501, { type: t });
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ ((fs._jsonSchemaVersion = "firestore/querySnapshot/1.0"),
  (fs._jsonSchema = {
    type: Pe("string", fs._jsonSchemaVersion),
    bundleSource: Pe("string", "QuerySnapshot"),
    bundleName: Pe("string"),
    bundle: Pe("string"),
  }));
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function bx(t) {
  t = Yn(t, Le);
  const e = Yn(t.firestore, vo),
    n = Hf(e);
  return wx(n, t._key).then((r) => $x(e, t, r));
}
function Ux(t) {
  t = Yn(t, Bl);
  const e = Yn(t.firestore, vo),
    n = Hf(e),
    r = new $E(e);
  return (Fx(t._query), Tx(n, t._query).then((s) => new fs(e, r, t, s)));
}
function zx(t, e, n) {
  t = Yn(t, Le);
  const r = Yn(t.firestore, vo),
    s = HE(t.converter, e),
    i = FE(r);
  return WE(r, [
    jE(i, "setDoc", t._key, s, t.converter !== null, n).toMutation(
      t._key,
      Yt.none(),
    ),
  ]);
}
function Bx(t, e) {
  const n = Yn(t.firestore, vo),
    r = dh(t),
    s = HE(t.converter, e),
    i = FE(t.firestore);
  return WE(n, [
    jE(i, "addDoc", r._key, s, t.converter !== null, {}).toMutation(
      r._key,
      Yt.exists(!1),
    ),
  ]).then(() => r);
}
function WE(t, e) {
  const n = Hf(t);
  return Sx(n, e);
}
function $x(t, e, n) {
  const r = n.docs.get(e._key),
    s = new $E(t);
  return new Tr(
    t,
    s,
    e._key,
    r,
    new yi(n.hasPendingWrites, n.fromCache),
    e.converter,
  );
}
(function (e, n = !0) {
  (SR(hR),
    Ja(
      new Yi(
        "firestore",
        (r, { instanceIdentifier: s, options: i }) => {
          const o = r.getProvider("app").getImmediate(),
            l = new vo(
              new AR(r.getProvider("auth-internal")),
              new PR(o, r.getProvider("app-check-internal")),
              WR(o, s),
              o,
            );
          return ((i = { useFetchStreams: n, ...i }), l._setSettings(i), l);
        },
        "PUBLIC",
      ).setMultipleInstances(!0),
    ),
    us(mg, gg, e),
    us(mg, gg, "esm2020"));
})();
var Gx = "firebase",
  Hx = "12.12.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ us(Gx, Hx, "app");
const Wx = "AIzaSyDKTfAP80bcjnZ9R4rsdgNZcQ4xrHxd2mg",
  qx = "wedding-invite-da600",
  wa = "rsvps",
  kn = (() => {
    const t = o_({
      apiKey: Wx,
      authDomain: "wedding-invite-da600.firebaseapp.com",
      projectId: qx,
      storageBucket: "wedding-invite-da600.firebasestorage.app",
      messagingSenderId: "329077111345",
      appId: "1:329077111345:web:e69709a6da8119acdd7310",
    });
    return Cx(t);
  })();
function Kx({ value: t, onChange: e, max: n }) {
  return I.jsxs("div", {
    className: "rsvp-stepper",
    children: [
      I.jsx("button", {
        type: "button",
        className: "rsvp-stepper-btn",
        onClick: () => e(Math.max(0, t - 1)),
        "aria-label": "Remove guest",
        children: "−",
      }),
      I.jsx("span", { className: "rsvp-stepper-value", children: t }),
      I.jsx("button", {
        type: "button",
        className: "rsvp-stepper-btn",
        onClick: () => e(Math.min(n, t + 1)),
        "aria-label": "Add guest",
        children: "+",
      }),
    ],
  });
}
function Qx({ onContinue: t, guestName: e, maxGuests: n, slug: r }) {
  const [s, i] = V.useState(e ?? ""),
    [o, l] = V.useState(""),
    [u, h] = V.useState(0),
    [d, p] = V.useState("yes"),
    [m, T] = V.useState(null),
    [x, P] = V.useState(!!(r && kn)),
    [D, _] = V.useState(null);
  V.useEffect(() => {
    if (!r || !kn) return;
    let R = !1;
    return (
      (async () => {
        try {
          const M = await bx(dh(kn, wa, r));
          if (R) return;
          M.exists() && T("existing");
        } catch {
        } finally {
          R || P(!1);
        }
      })(),
      () => {
        R = !0;
      }
    );
  }, [r]);
  const v = async (R) => {
    if ((R.preventDefault(), _(null), m !== null)) return;
    if (!kn) {
      _("RSVP saving is not set up yet. Please contact the couple.");
      return;
    }
    const M = {
      name: s,
      phone: o.trim() || null,
      attending: d === "yes",
      guests: d === "yes" ? u : 0,
      slug: r ?? null,
      createdAt: le.now(),
    };
    try {
      r ? await zx(dh(kn, wa, r), M) : await Bx(DE(kn, wa), M);
    } catch {
      _("Something went wrong. Please try again.");
      return;
    }
    (T("new"), setTimeout(() => t(), 1600));
  };
  return I.jsxs("div", {
    className: "cover-screen",
    children: [
      I.jsx("div", { className: "cover-overlay lum-overlay rsvp-overlay" }),
      I.jsxs("div", {
        className: "rsvp-screen-content",
        children: [
          I.jsxs("div", {
            className: "lum-section-header",
            children: [
              I.jsx("div", { className: "lum-line" }),
              I.jsx("span", {
                className: "lum-section-title",
                children: "RSVP",
              }),
              I.jsx("div", { className: "lum-line" }),
            ],
          }),
          I.jsx("p", {
            className: "rsvp-deadline",
            children: "Kindly confirm your attendance before August 10, 2026",
          }),
          x
            ? I.jsx("p", { className: "rsvp-thanks", children: "Loading…" })
            : m !== null
              ? I.jsx("p", {
                  className: "rsvp-thanks",
                  children:
                    m === "existing"
                      ? "Thanks! Your RSVP is already recorded."
                      : "Thank you! We can't wait to celebrate with you.",
                })
              : I.jsxs("form", {
                  className: "rsvp-screen-form",
                  onSubmit: v,
                  children: [
                    I.jsxs("div", {
                      className: "rsvp-field",
                      children: [
                        I.jsx("span", {
                          className: "rsvp-field-label",
                          children: "Your Name",
                        }),
                        e
                          ? I.jsx("p", {
                              className: "rsvp-name-display",
                              children: s,
                            })
                          : I.jsx("input", {
                              className: "rsvp-input",
                              placeholder: "Full name",
                              value: s,
                              onChange: (R) => i(R.target.value),
                              required: !0,
                            }),
                      ],
                    }),
                    I.jsxs("div", {
                      className: "rsvp-field",
                      children: [
                        I.jsx("span", {
                          className: "rsvp-field-label",
                          children: "Will you attend?",
                        }),
                        I.jsxs("div", {
                          className: "rsvp-pill-group",
                          children: [
                            I.jsx("button", {
                              type: "button",
                              className: `rsvp-pill${d === "yes" ? " rsvp-pill--active" : ""}`,
                              onClick: () => p("yes"),
                              children: "Joyfully accepts",
                            }),
                            I.jsx("button", {
                              type: "button",
                              className: `rsvp-pill${d === "no" ? " rsvp-pill--active rsvp-pill--decline" : ""}`,
                              onClick: () => p("no"),
                              children: "Regretfully declines",
                            }),
                          ],
                        }),
                      ],
                    }),
                    d === "yes" &&
                      I.jsxs("div", {
                        className: "rsvp-field",
                        children: [
                          I.jsx("span", {
                            className: "rsvp-field-label",
                            children: "Attending",
                          }),
                          I.jsx(Kx, { value: u, onChange: h, max: n ?? 10 }),
                        ],
                      }),
                    D && I.jsx("p", { className: "rsvp-error", children: D }),
                    I.jsx("p", {
                      className: "rsvp-contact-note",
                      children:
                        "Kindly confirm your presence by clicking the button below.",
                    }),
                    I.jsx("button", {
                      className: "rsvp-submit-btn",
                      type: "submit",
                      children: "Confirm RSVP",
                    }),
                    I.jsx("p", {
                      className: "rsvp-contact-note",
                      children:
                        "Or send your response to one of the numbers below.",
                    }),
                    I.jsxs("div", {
                      className: "rsvp-contacts",
                      children: [
                        I.jsxs("a", {
                          className: "rsvp-contact",
                          href: "https://wa.me/96170212399",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          children: [
                            I.jsx("span", {
                              className: "rsvp-contact-label",
                              children: "Groom",
                            }),
                            I.jsx("span", {
                              className: "rsvp-contact-num",
                              children: "70 212 399",
                            }),
                          ],
                        }),
                        I.jsxs("a", {
                          className: "rsvp-contact",
                          href: "https://wa.me/96176795349",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          children: [
                            I.jsx("span", {
                              className: "rsvp-contact-label",
                              children: "Bride",
                            }),
                            I.jsx("span", {
                              className: "rsvp-contact-num",
                              children: "76 795 349",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
        ],
      }),
    ],
  });
}
const Yx = { textAlign: "left", padding: "0.5rem 1rem", opacity: 0.5 },
  ea = { padding: "0.6rem 1rem" };
function Jx() {
  const [t, e] = V.useState([]),
    [n, r] = V.useState(!0),
    [s, i] = V.useState(null);
  V.useEffect(() => {
    if (!kn) {
      (i("Firebase is not configured."), r(!1));
      return;
    }
    Ux(DE(kn, wa))
      .then((u) => {
        const h = u.docs.map((d) => ({ id: d.id, ...d.data() }));
        (h.sort((d, p) => {
          var m, T;
          return (
            (((m = p.createdAt) == null ? void 0 : m.seconds) ?? 0) -
            (((T = d.createdAt) == null ? void 0 : T.seconds) ?? 0)
          );
        }),
          e(h));
      })
      .catch(() => i("Failed to load RSVPs."))
      .finally(() => r(!1));
  }, []);
  const o = t.filter((u) => u.attending),
    l = o.reduce((u, h) => u + (h.guests ?? 0) + 1, 0);
  return n
    ? I.jsx("p", {
        style: { color: "#fff", textAlign: "center", padding: "2rem" },
        children: "Loading...",
      })
    : s
      ? I.jsx("p", {
          style: { color: "red", textAlign: "center", padding: "2rem" },
          children: s,
        })
      : I.jsxs("div", {
          style: {
            padding: "2rem",
            fontFamily: "sans-serif",
            color: "#fff",
            background: "#111",
            minHeight: "100vh",
          },
          children: [
            I.jsx("h1", {
              style: { marginBottom: "0.5rem" },
              children: "RSVP Dashboard",
            }),
            I.jsxs("p", {
              style: { marginBottom: "1.5rem", opacity: 0.6 },
              children: [
                o.length,
                " attending · ",
                t.length - o.length,
                " declined · ",
                l,
                " total guests",
              ],
            }),
            I.jsxs("table", {
              style: { width: "100%", borderCollapse: "collapse" },
              children: [
                I.jsx("thead", {
                  children: I.jsx("tr", {
                    style: { borderBottom: "1px solid #333" },
                    children: [
                      "Name",
                      "Attending",
                      "Guests",
                      "Submitted",
                    ].map((u) => I.jsx("th", { style: Yx, children: u }, u)),
                  }),
                }),
                I.jsx("tbody", {
                  children: t.map((u) =>
                    I.jsxs(
                      "tr",
                      {
                        style: { borderBottom: "1px solid #222" },
                        children: [
                          I.jsx("td", { style: ea, children: u.name }),
                          I.jsx("td", {
                            style: ea,
                            children: u.attending ? "✓ Yes" : "✗ No",
                          }),
                          I.jsx("td", { style: ea, children: u.guests ?? 0 }),
                          I.jsx("td", {
                            style: { ...ea, opacity: 0.5 },
                            children: u.createdAt
                              ? new Date(
                                  u.createdAt.seconds * 1e3,
                                ).toLocaleString()
                              : "—",
                          }),
                        ],
                      },
                      u.id,
                    ),
                  ),
                }),
              ],
            }),
            t.length === 0 &&
              I.jsx("p", {
                style: { textAlign: "center", opacity: 0.5, marginTop: "2rem" },
                children: "No RSVPs yet.",
              }),
          ],
        });
}
function Xx() {
  return I.jsx("div", {
    style: {
      height: "100dvh",
      width: "100%",
      background: "#0d0605",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    children: I.jsxs("div", {
      style: { textAlign: "center" },
      children: [
        I.jsx("div", {
          style: {
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: "clamp(72px, 16vw, 200px)",
            fontWeight: 400,
            color: "#fff",
            letterSpacing: "0.02em",
            lineHeight: 1,
          },
          children: "ET",
        }),
        I.jsxs("div", {
          style: {
            marginTop: "12px",
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: "clamp(28px, 6vw, 64px)",
            fontWeight: 400,
            color: "rgba(255,255,255,0.9)",
            letterSpacing: "0.04em",
            lineHeight: 1,
            whiteSpace: "nowrap",
          },
          children: [
            I.jsx("span", {
              style: { display: "inline-block", verticalAlign: "baseline" },
              children: "Elias ",
            }),
            I.jsx("span", {
              style: { display: "inline-block", verticalAlign: "baseline" },
              children: " & Tamy",
            }),
          ],
        }),
      ],
    }),
  });
}
const yg = "zcdMC_VScUE",
  vg = [
    "/img2.jpg",
    "/DAS couple.jpg",
    "/DAS 2148.jpg",
    "/DAS 2168.jpg",
    "/DAS 2180.jpg",
    "/DAS 2270.jpg",
    "/couple.png",
    "/DAS 2268.jpg",
  ];
function Zx({ guest: t, slug: e }) {
  const [n, r] = V.useState(!1),
    [s, i] = V.useState(0),
    o = V.useRef(null),
    l = V.useRef([]),
    u = V.useRef(null),
    h = (m) => {
      var T;
      (T = l.current[m]) == null || T.scrollIntoView({ behavior: "smooth" });
    };
  (V.useEffect(() => {
    const m = document.createElement("div");
    ((m.style.cssText =
      "position:fixed;top:-9999px;left:-9999px;width:1px;height:1px;pointer-events:none;"),
      document.body.appendChild(m));
    const T = () => {
      o.current = new window.YT.Player(m, {
        videoId: yg,
        playerVars: { loop: 1, playlist: yg, controls: 0, playsinline: 1 },
        events: { onReady: () => {} },
      });
    };
    if (window.YT && window.YT.Player) T();
    else if (
      ((window.onYouTubeIframeAPIReady = T),
      !document.querySelector('script[src*="youtube.com/iframe_api"]'))
    ) {
      const x = document.createElement("script");
      ((x.src = "https://www.youtube.com/iframe_api"),
        document.head.appendChild(x));
    }
    return () => {
      var x, P;
      ((P = (x = o.current) == null ? void 0 : x.destroy) == null || P.call(x),
        document.body.removeChild(m));
    };
  }, []),
    V.useEffect(() => {
      const m = u.current;
      if (!m) return;
      const T = new IntersectionObserver(
        (P) => {
          P.forEach((D) => {
            if (D.isIntersecting) {
              D.target.classList.add("in-view");
              const _ = l.current.indexOf(D.target);
              _ !== -1 && i(_);
            }
          });
        },
        { threshold: 0.5, root: m },
      );
      return (
        l.current.filter(Boolean).forEach((P) => T.observe(P)),
        () => T.disconnect()
      );
    }, []));
  const d = () => {
      const m = o.current;
      m && (n ? m.pauseVideo() : m.playVideo(), r((T) => !T));
    },
    p = [
      I.jsx(V1, { onStart: () => h(1) }),
      I.jsx(D1, { onStart: () => h(2) }),
      I.jsx(zu, { onContinue: () => h(3), event: bu[0] }),
      I.jsx(zu, { onContinue: () => h(4), event: bu[1] }),
      I.jsx(zu, { onContinue: () => h(5), event: bu[2] }),
      I.jsx(b1, { onContinue: () => h(6) }),
      I.jsx(B1, { onContinue: () => h(7) }),
      I.jsx(Qx, {
        onContinue: () => {},
        guestName: t ? k1(t) : void 0,
        maxGuests: t == null ? void 0 : t.maxGuests,
        slug: e,
      }),
    ];
  return I.jsxs("div", {
    style: { height: "100dvh", overflow: "hidden", background: "#0d0605" },
    children: [
      I.jsx("button", {
        className: "music-btn",
        onClick: d,
        "aria-label": "Toggle music",
        children: n
          ? I.jsxs("svg", {
              width: "22",
              height: "22",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "#d4a44c",
              strokeWidth: "1.8",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              children: [
                I.jsx("polygon", {
                  points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
                }),
                I.jsx("path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07" }),
                I.jsx("path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14" }),
              ],
            })
          : I.jsxs("svg", {
              width: "22",
              height: "22",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "#d4a44c",
              strokeWidth: "1.8",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              children: [
                I.jsx("polygon", {
                  points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
                }),
                I.jsx("line", { x1: "23", y1: "9", x2: "17", y2: "15" }),
                I.jsx("line", { x1: "17", y1: "9", x2: "23", y2: "15" }),
              ],
            }),
      }),
      I.jsx("div", {
        className: "nav-dots",
        children: p.map((m, T) =>
          I.jsx(
            "button",
            {
              className: `nav-dot${s === T ? " active" : ""}`,
              onClick: () => h(T),
              "aria-label": `Go to section ${T + 1}`,
            },
            T,
          ),
        ),
      }),
      I.jsx("div", {
        className: "snap-container",
        ref: u,
        children: p.map((m, T) =>
          I.jsxs(
            "div",
            {
              ref: (x) => {
                l.current[T] = x;
              },
              className: "snap-section",
              style: vg[T] ? { backgroundImage: `url('${vg[T]}')` } : {},
              children: [
                m,
                T < p.length - 1 &&
                  I.jsx("button", {
                    className: "scroll-hint",
                    onClick: () => h(T + 1),
                    "aria-label": "Scroll to next section",
                    children: I.jsx("svg", {
                      width: "22",
                      height: "13",
                      viewBox: "0 0 22 13",
                      fill: "none",
                      children: I.jsx("polyline", {
                        points: "2,2 11,11 20,2",
                        stroke: "rgba(255,255,255,0.75)",
                        strokeWidth: "1.8",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                    }),
                  }),
              ],
            },
            T,
          ),
        ),
      }),
    ],
  });
}
function e2() {
  const { slug: t } = DS(),
    e = N1.find((n) => n.slug === t);
  return e ? I.jsx(Zx, { guest: e, slug: t }) : null;
}
function t2() {
  return I.jsxs(KS, {
    children: [
      I.jsx(di, { path: "/", element: null }),
      I.jsx(di, { path: "/admin", element: I.jsx(Jx, {}) }),
      I.jsx(di, { path: "/et", element: I.jsx(Xx, {}) }),
      I.jsx(di, { path: "/:slug", element: I.jsx(e2, {}) }),
    ],
  });
}
const _g = sessionStorage.getItem("spa_path");
_g &&
  (sessionStorage.removeItem("spa_path"),
  window.history.replaceState(null, "", _g));
Ju.createRoot(document.getElementById("root")).render(
  I.jsx(jw.StrictMode, { children: I.jsx(v1, { children: I.jsx(t2, {}) }) }),
);
