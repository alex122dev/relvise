(() => {
  var t = {
      732: function (t) {
        t.exports = (function () {
          "use strict";
          function t() {
            return (
              (t =
                Object.assign ||
                function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var o in n)
                      Object.prototype.hasOwnProperty.call(n, o) &&
                        (t[o] = n[o]);
                  }
                  return t;
                }),
              t.apply(this, arguments)
            );
          }
          var e = "undefined" != typeof window,
            n =
              (e && !("onscroll" in window)) ||
              ("undefined" != typeof navigator &&
                /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
            o = e && "IntersectionObserver" in window,
            r = e && "classList" in document.createElement("p"),
            i = e && window.devicePixelRatio > 1,
            a = {
              elements_selector: ".lazy",
              container: n || e ? document : null,
              threshold: 300,
              thresholds: null,
              data_src: "src",
              data_srcset: "srcset",
              data_sizes: "sizes",
              data_bg: "bg",
              data_bg_hidpi: "bg-hidpi",
              data_bg_multi: "bg-multi",
              data_bg_multi_hidpi: "bg-multi-hidpi",
              data_poster: "poster",
              class_applied: "applied",
              class_loading: "loading",
              class_loaded: "loaded",
              class_error: "error",
              class_entered: "entered",
              class_exited: "exited",
              unobserve_completed: !0,
              unobserve_entered: !1,
              cancel_on_exit: !0,
              callback_enter: null,
              callback_exit: null,
              callback_applied: null,
              callback_loading: null,
              callback_loaded: null,
              callback_error: null,
              callback_finish: null,
              callback_cancel: null,
              use_native: !1,
            },
            s = function (e) {
              return t({}, a, e);
            },
            l = function (t, e) {
              var n,
                o = "LazyLoad::Initialized",
                r = new t(e);
              try {
                n = new CustomEvent(o, { detail: { instance: r } });
              } catch (t) {
                (n = document.createEvent("CustomEvent")).initCustomEvent(
                  o,
                  !1,
                  !1,
                  { instance: r }
                );
              }
              window.dispatchEvent(n);
            },
            c = "src",
            u = "srcset",
            d = "sizes",
            f = "poster",
            h = "llOriginalAttrs",
            g = "loading",
            m = "loaded",
            p = "applied",
            v = "error",
            _ = "native",
            y = "data-",
            b = "ll-status",
            w = function (t, e) {
              return t.getAttribute(y + e);
            },
            E = function (t) {
              return w(t, b);
            },
            L = function (t, e) {
              return (function (t, e, n) {
                var o = "data-ll-status";
                null !== n ? t.setAttribute(o, n) : t.removeAttribute(o);
              })(t, 0, e);
            },
            A = function (t) {
              return L(t, null);
            },
            I = function (t) {
              return null === E(t);
            },
            x = function (t) {
              return E(t) === _;
            },
            k = [g, m, p, v],
            C = function (t, e, n, o) {
              t &&
                (void 0 === o ? (void 0 === n ? t(e) : t(e, n)) : t(e, n, o));
            },
            S = function (t, e) {
              r
                ? t.classList.add(e)
                : (t.className += (t.className ? " " : "") + e);
            },
            W = function (t, e) {
              r
                ? t.classList.remove(e)
                : (t.className = t.className
                    .replace(new RegExp("(^|\\s+)" + e + "(\\s+|$)"), " ")
                    .replace(/^\s+/, "")
                    .replace(/\s+$/, ""));
            },
            O = function (t) {
              return t.llTempImage;
            },
            P = function (t, e) {
              if (e) {
                var n = e._observer;
                n && n.unobserve(t);
              }
            },
            M = function (t, e) {
              t && (t.loadingCount += e);
            },
            R = function (t, e) {
              t && (t.toLoadCount = e);
            },
            T = function (t) {
              for (var e, n = [], o = 0; (e = t.children[o]); o += 1)
                "SOURCE" === e.tagName && n.push(e);
              return n;
            },
            z = function (t, e) {
              var n = t.parentNode;
              n && "PICTURE" === n.tagName && T(n).forEach(e);
            },
            N = function (t, e) {
              T(t).forEach(e);
            },
            $ = [c],
            q = [c, f],
            D = [c, u, d],
            B = function (t) {
              return !!t[h];
            },
            G = function (t) {
              return t[h];
            },
            F = function (t) {
              return delete t[h];
            },
            U = function (t, e) {
              if (!B(t)) {
                var n = {};
                e.forEach(function (e) {
                  n[e] = t.getAttribute(e);
                }),
                  (t[h] = n);
              }
            },
            V = function (t, e) {
              if (B(t)) {
                var n = G(t);
                e.forEach(function (e) {
                  !(function (t, e, n) {
                    n ? t.setAttribute(e, n) : t.removeAttribute(e);
                  })(t, e, n[e]);
                });
              }
            },
            H = function (t, e, n) {
              S(t, e.class_loading),
                L(t, g),
                n && (M(n, 1), C(e.callback_loading, t, n));
            },
            j = function (t, e, n) {
              n && t.setAttribute(e, n);
            },
            Y = function (t, e) {
              j(t, d, w(t, e.data_sizes)),
                j(t, u, w(t, e.data_srcset)),
                j(t, c, w(t, e.data_src));
            },
            Z = {
              IMG: function (t, e) {
                z(t, function (t) {
                  U(t, D), Y(t, e);
                }),
                  U(t, D),
                  Y(t, e);
              },
              IFRAME: function (t, e) {
                U(t, $), j(t, c, w(t, e.data_src));
              },
              VIDEO: function (t, e) {
                N(t, function (t) {
                  U(t, $), j(t, c, w(t, e.data_src));
                }),
                  U(t, q),
                  j(t, f, w(t, e.data_poster)),
                  j(t, c, w(t, e.data_src)),
                  t.load();
              },
            },
            X = ["IMG", "IFRAME", "VIDEO"],
            J = function (t, e) {
              !e ||
                (function (t) {
                  return t.loadingCount > 0;
                })(e) ||
                (function (t) {
                  return t.toLoadCount > 0;
                })(e) ||
                C(t.callback_finish, e);
            },
            Q = function (t, e, n) {
              t.addEventListener(e, n), (t.llEvLisnrs[e] = n);
            },
            K = function (t, e, n) {
              t.removeEventListener(e, n);
            },
            tt = function (t) {
              return !!t.llEvLisnrs;
            },
            et = function (t) {
              if (tt(t)) {
                var e = t.llEvLisnrs;
                for (var n in e) {
                  var o = e[n];
                  K(t, n, o);
                }
                delete t.llEvLisnrs;
              }
            },
            nt = function (t, e, n) {
              !(function (t) {
                delete t.llTempImage;
              })(t),
                M(n, -1),
                (function (t) {
                  t && (t.toLoadCount -= 1);
                })(n),
                W(t, e.class_loading),
                e.unobserve_completed && P(t, n);
            },
            ot = function (t, e, n) {
              var o = O(t) || t;
              tt(o) ||
                (function (t, e, n) {
                  tt(t) || (t.llEvLisnrs = {});
                  var o = "VIDEO" === t.tagName ? "loadeddata" : "load";
                  Q(t, o, e), Q(t, "error", n);
                })(
                  o,
                  function (r) {
                    !(function (t, e, n, o) {
                      var r = x(e);
                      nt(e, n, o),
                        S(e, n.class_loaded),
                        L(e, m),
                        C(n.callback_loaded, e, o),
                        r || J(n, o);
                    })(0, t, e, n),
                      et(o);
                  },
                  function (r) {
                    !(function (t, e, n, o) {
                      var r = x(e);
                      nt(e, n, o),
                        S(e, n.class_error),
                        L(e, v),
                        C(n.callback_error, e, o),
                        r || J(n, o);
                    })(0, t, e, n),
                      et(o);
                  }
                );
            },
            rt = function (t, e, n) {
              !(function (t) {
                t.llTempImage = document.createElement("IMG");
              })(t),
                ot(t, e, n),
                (function (t) {
                  B(t) || (t[h] = { backgroundImage: t.style.backgroundImage });
                })(t),
                (function (t, e, n) {
                  var o = w(t, e.data_bg),
                    r = w(t, e.data_bg_hidpi),
                    a = i && r ? r : o;
                  a &&
                    ((t.style.backgroundImage = 'url("'.concat(a, '")')),
                    O(t).setAttribute(c, a),
                    H(t, e, n));
                })(t, e, n),
                (function (t, e, n) {
                  var o = w(t, e.data_bg_multi),
                    r = w(t, e.data_bg_multi_hidpi),
                    a = i && r ? r : o;
                  a &&
                    ((t.style.backgroundImage = a),
                    (function (t, e, n) {
                      S(t, e.class_applied),
                        L(t, p),
                        n &&
                          (e.unobserve_completed && P(t, e),
                          C(e.callback_applied, t, n));
                    })(t, e, n));
                })(t, e, n);
            },
            it = function (t, e, n) {
              !(function (t) {
                return X.indexOf(t.tagName) > -1;
              })(t)
                ? rt(t, e, n)
                : (function (t, e, n) {
                    ot(t, e, n),
                      (function (t, e, n) {
                        var o = Z[t.tagName];
                        o && (o(t, e), H(t, e, n));
                      })(t, e, n);
                  })(t, e, n);
            },
            at = function (t) {
              t.removeAttribute(c), t.removeAttribute(u), t.removeAttribute(d);
            },
            st = function (t) {
              z(t, function (t) {
                V(t, D);
              }),
                V(t, D);
            },
            lt = {
              IMG: st,
              IFRAME: function (t) {
                V(t, $);
              },
              VIDEO: function (t) {
                N(t, function (t) {
                  V(t, $);
                }),
                  V(t, q),
                  t.load();
              },
            },
            ct = function (t, e) {
              (function (t) {
                var e = lt[t.tagName];
                e
                  ? e(t)
                  : (function (t) {
                      if (B(t)) {
                        var e = G(t);
                        t.style.backgroundImage = e.backgroundImage;
                      }
                    })(t);
              })(t),
                (function (t, e) {
                  I(t) ||
                    x(t) ||
                    (W(t, e.class_entered),
                    W(t, e.class_exited),
                    W(t, e.class_applied),
                    W(t, e.class_loading),
                    W(t, e.class_loaded),
                    W(t, e.class_error));
                })(t, e),
                A(t),
                F(t);
            },
            ut = ["IMG", "IFRAME", "VIDEO"],
            dt = function (t) {
              return t.use_native && "loading" in HTMLImageElement.prototype;
            },
            ft = function (t, e, n) {
              t.forEach(function (t) {
                return (function (t) {
                  return t.isIntersecting || t.intersectionRatio > 0;
                })(t)
                  ? (function (t, e, n, o) {
                      var r = (function (t) {
                        return k.indexOf(E(t)) >= 0;
                      })(t);
                      L(t, "entered"),
                        S(t, n.class_entered),
                        W(t, n.class_exited),
                        (function (t, e, n) {
                          e.unobserve_entered && P(t, n);
                        })(t, n, o),
                        C(n.callback_enter, t, e, o),
                        r || it(t, n, o);
                    })(t.target, t, e, n)
                  : (function (t, e, n, o) {
                      I(t) ||
                        (S(t, n.class_exited),
                        (function (t, e, n, o) {
                          n.cancel_on_exit &&
                            (function (t) {
                              return E(t) === g;
                            })(t) &&
                            "IMG" === t.tagName &&
                            (et(t),
                            (function (t) {
                              z(t, function (t) {
                                at(t);
                              }),
                                at(t);
                            })(t),
                            st(t),
                            W(t, n.class_loading),
                            M(o, -1),
                            A(t),
                            C(n.callback_cancel, t, e, o));
                        })(t, e, n, o),
                        C(n.callback_exit, t, e, o));
                    })(t.target, t, e, n);
              });
            },
            ht = function (t) {
              return Array.prototype.slice.call(t);
            },
            gt = function (t) {
              return t.container.querySelectorAll(t.elements_selector);
            },
            mt = function (t) {
              return (function (t) {
                return E(t) === v;
              })(t);
            },
            pt = function (t, e) {
              return (function (t) {
                return ht(t).filter(I);
              })(t || gt(e));
            },
            vt = function (t, n) {
              var r = s(t);
              (this._settings = r),
                (this.loadingCount = 0),
                (function (t, e) {
                  o &&
                    !dt(t) &&
                    (e._observer = new IntersectionObserver(
                      function (n) {
                        ft(n, t, e);
                      },
                      (function (t) {
                        return {
                          root: t.container === document ? null : t.container,
                          rootMargin: t.thresholds || t.threshold + "px",
                        };
                      })(t)
                    ));
                })(r, this),
                (function (t, n) {
                  e &&
                    window.addEventListener("online", function () {
                      !(function (t, e) {
                        var n;
                        ((n = gt(t)), ht(n).filter(mt)).forEach(function (e) {
                          W(e, t.class_error), A(e);
                        }),
                          e.update();
                      })(t, n);
                    });
                })(r, this),
                this.update(n);
            };
          return (
            (vt.prototype = {
              update: function (t) {
                var e,
                  r,
                  i = this._settings,
                  a = pt(t, i);
                R(this, a.length),
                  !n && o
                    ? dt(i)
                      ? (function (t, e, n) {
                          t.forEach(function (t) {
                            -1 !== ut.indexOf(t.tagName) &&
                              (function (t, e, n) {
                                t.setAttribute("loading", "lazy"),
                                  ot(t, e, n),
                                  (function (t, e) {
                                    var n = Z[t.tagName];
                                    n && n(t, e);
                                  })(t, e),
                                  L(t, _);
                              })(t, e, n);
                          }),
                            R(n, 0);
                        })(a, i, this)
                      : ((r = a),
                        (function (t) {
                          t.disconnect();
                        })((e = this._observer)),
                        (function (t, e) {
                          e.forEach(function (e) {
                            t.observe(e);
                          });
                        })(e, r))
                    : this.loadAll(a);
              },
              destroy: function () {
                this._observer && this._observer.disconnect(),
                  gt(this._settings).forEach(function (t) {
                    F(t);
                  }),
                  delete this._observer,
                  delete this._settings,
                  delete this.loadingCount,
                  delete this.toLoadCount;
              },
              loadAll: function (t) {
                var e = this,
                  n = this._settings;
                pt(t, n).forEach(function (t) {
                  P(t, e), it(t, n, e);
                });
              },
              restoreAll: function () {
                var t = this._settings;
                gt(t).forEach(function (e) {
                  ct(e, t);
                });
              },
            }),
            (vt.load = function (t, e) {
              var n = s(e);
              it(t, n);
            }),
            (vt.resetStatus = function (t) {
              A(t);
            }),
            e &&
              (function (t, e) {
                if (e)
                  if (e.length) for (var n, o = 0; (n = e[o]); o += 1) l(t, n);
                  else l(t, e);
              })(vt, window.lazyLoadOptions),
            vt
          );
        })();
      },
    },
    e = {};
  function n(o) {
    var r = e[o];
    if (void 0 !== r) return r.exports;
    var i = (e[o] = { exports: {} });
    return t[o].call(i.exports, i, i.exports, n), i.exports;
  }
  (() => {
    "use strict";
    const t = {};
    let e = (t, e = 500, n = 0) => {
        t.classList.contains("_slide") ||
          (t.classList.add("_slide"),
          (t.style.transitionProperty = "height, margin, padding"),
          (t.style.transitionDuration = e + "ms"),
          (t.style.height = `${t.offsetHeight}px`),
          t.offsetHeight,
          (t.style.overflow = "hidden"),
          (t.style.height = n ? `${n}px` : "0px"),
          (t.style.paddingTop = 0),
          (t.style.paddingBottom = 0),
          (t.style.marginTop = 0),
          (t.style.marginBottom = 0),
          window.setTimeout(() => {
            (t.hidden = !n),
              !n && t.style.removeProperty("height"),
              t.style.removeProperty("padding-top"),
              t.style.removeProperty("padding-bottom"),
              t.style.removeProperty("margin-top"),
              t.style.removeProperty("margin-bottom"),
              !n && t.style.removeProperty("overflow"),
              t.style.removeProperty("transition-duration"),
              t.style.removeProperty("transition-property"),
              t.classList.remove("_slide"),
              document.dispatchEvent(
                new CustomEvent("slideUpDone", { detail: { target: t } })
              );
          }, e));
      },
      o = (t, e = 500, n = 0) => {
        if (!t.classList.contains("_slide")) {
          t.classList.add("_slide"),
            (t.hidden = !t.hidden && null),
            n && t.style.removeProperty("height");
          let o = t.offsetHeight;
          (t.style.overflow = "hidden"),
            (t.style.height = n ? `${n}px` : "0px"),
            (t.style.paddingTop = 0),
            (t.style.paddingBottom = 0),
            (t.style.marginTop = 0),
            (t.style.marginBottom = 0),
            t.offsetHeight,
            (t.style.transitionProperty = "height, margin, padding"),
            (t.style.transitionDuration = e + "ms"),
            (t.style.height = o + "px"),
            t.style.removeProperty("padding-top"),
            t.style.removeProperty("padding-bottom"),
            t.style.removeProperty("margin-top"),
            t.style.removeProperty("margin-bottom"),
            window.setTimeout(() => {
              t.style.removeProperty("height"),
                t.style.removeProperty("overflow"),
                t.style.removeProperty("transition-duration"),
                t.style.removeProperty("transition-property"),
                t.classList.remove("_slide"),
                document.dispatchEvent(
                  new CustomEvent("slideDownDone", { detail: { target: t } })
                );
            }, e);
        }
      };
    function r(t) {
      return t.filter(function (t, e, n) {
        return n.indexOf(t) === e;
      });
    }
    function i(t, e) {
      const n = Array.from(t).filter(function (t, n, o) {
        if (t.dataset[e]) return t.dataset[e].split(",")[0];
      });
      if (n.length) {
        const t = [];
        n.forEach((n) => {
          const o = {},
            r = n.dataset[e].split(",");
          (o.value = r[0]),
            (o.type = r[1] ? r[1].trim() : "max"),
            (o.item = n),
            t.push(o);
        });
        let o = t.map(function (t) {
          return (
            "(" +
            t.type +
            "-width: " +
            t.value +
            "px)," +
            t.value +
            "," +
            t.type
          );
        });
        o = r(o);
        const i = [];
        if (o.length)
          return (
            o.forEach((e) => {
              const n = e.split(","),
                o = n[1],
                r = n[2],
                a = window.matchMedia(n[0]),
                s = t.filter(function (t) {
                  if (t.value === o && t.type === r) return !0;
                });
              i.push({ itemsArray: s, matchMedia: a });
            }),
            i
          );
      }
    }
    new (n(732))({
      elements_selector: "[data-src],[data-srcset]",
      class_loaded: "_lazy-loaded",
      use_native: !0,
    });
    t.watcher = new (class {
      constructor(t) {
        (this.config = Object.assign({ logging: !0 }, t)),
          this.observer,
          !document.documentElement.classList.contains("watcher") &&
            this.scrollWatcherRun();
      }
      scrollWatcherUpdate() {
        this.scrollWatcherRun();
      }
      scrollWatcherRun() {
        document.documentElement.classList.add("watcher"),
          this.scrollWatcherConstructor(
            document.querySelectorAll("[data-watch]")
          );
      }
      scrollWatcherConstructor(t) {
        if (t.length) {
          this.scrollWatcherLogging(
            `Проснулся, слежу за объектами (${t.length})...`
          ),
            r(
              Array.from(t).map(function (t) {
                return `${
                  t.dataset.watchRoot ? t.dataset.watchRoot : null
                }|${t.dataset.watchMargin ? t.dataset.watchMargin : "0px"}|${t.dataset.watchThreshold ? t.dataset.watchThreshold : 0}`;
              })
            ).forEach((e) => {
              let n = e.split("|"),
                o = { root: n[0], margin: n[1], threshold: n[2] },
                r = Array.from(t).filter(function (t) {
                  let e = t.dataset.watchRoot ? t.dataset.watchRoot : null,
                    n = t.dataset.watchMargin ? t.dataset.watchMargin : "0px",
                    r = t.dataset.watchThreshold ? t.dataset.watchThreshold : 0;
                  if (
                    String(e) === o.root &&
                    String(n) === o.margin &&
                    String(r) === o.threshold
                  )
                    return t;
                }),
                i = this.getScrollWatcherConfig(o);
              this.scrollWatcherInit(r, i);
            });
        } else
          this.scrollWatcherLogging("Сплю, нет объектов для слежения. ZzzZZzz");
      }
      getScrollWatcherConfig(t) {
        let e = {};
        if (
          (document.querySelector(t.root)
            ? (e.root = document.querySelector(t.root))
            : "null" !== t.root &&
              this.scrollWatcherLogging(
                `Эмм... родительского объекта ${t.root} нет на странице`
              ),
          (e.rootMargin = t.margin),
          !(t.margin.indexOf("px") < 0 && t.margin.indexOf("%") < 0))
        ) {
          if ("prx" === t.threshold) {
            t.threshold = [];
            for (let e = 0; e <= 1; e += 0.005) t.threshold.push(e);
          } else t.threshold = t.threshold.split(",");
          return (e.threshold = t.threshold), e;
        }
        this.scrollWatcherLogging(
          "Ой ой, настройку data-watch-margin нужно задавать в PX или %"
        );
      }
      scrollWatcherCreate(t) {
        this.observer = new IntersectionObserver((t, e) => {
          t.forEach((t) => {
            this.scrollWatcherCallback(t, e);
          });
        }, t);
      }
      scrollWatcherInit(t, e) {
        this.scrollWatcherCreate(e), t.forEach((t) => this.observer.observe(t));
      }
      scrollWatcherIntersecting(t, e) {
        t.isIntersecting
          ? (!e.classList.contains("_watcher-view") &&
              e.classList.add("_watcher-view"),
            this.scrollWatcherLogging(
              `Я вижу ${e.classList}, добавил класс _watcher-view`
            ))
          : (e.classList.contains("_watcher-view") &&
              e.classList.remove("_watcher-view"),
            this.scrollWatcherLogging(
              `Я не вижу ${e.classList}, убрал класс _watcher-view`
            ));
      }
      scrollWatcherOff(t, e) {
        e.unobserve(t),
          this.scrollWatcherLogging(`Я перестал следить за ${t.classList}`);
      }
      scrollWatcherLogging(t) {
        this.config.logging &&
          (function (t) {
            setTimeout(() => {
              window.FLS && console.log(t);
            }, 0);
          })(`[Наблюдатель]: ${t}`);
      }
      scrollWatcherCallback(t, e) {
        const n = t.target;
        this.scrollWatcherIntersecting(t, n),
          n.hasAttribute("data-watch-once") &&
            t.isIntersecting &&
            this.scrollWatcherOff(n, e),
          document.dispatchEvent(
            new CustomEvent("watcherCallback", { detail: { entry: t } })
          );
      }
    })({});
    let a = !1;
    setTimeout(() => {
      if (a) {
        let t = new Event("windowScroll");
        window.addEventListener("scroll", function (e) {
          document.dispatchEvent(t);
        });
      }
    }, 0),
      document.addEventListener("click", function (t) {
        const e = t.target;
        let n = document.querySelector(".about__video"),
          o = document.querySelector(".about__button");
        e === o && (n.play(), (o.style.display = "none"));
        n.addEventListener("pause", function () {
          o.style.display = "block";
        }),
          n.addEventListener("play", function (t) {
            o.style.display = "none";
          });
      }),
      document.addEventListener("scroll", function () {
        let t = document.querySelector(".header");
        pageYOffset > 0 && t.classList.add("header__scroll");
        0 === pageYOffset && t.classList.remove("header__scroll");
      }),
      (function () {
        let t = document.querySelector(".icon-menu");
        t &&
          t.addEventListener("click", function () {
            document.documentElement.classList.toggle("lock"),
              document.documentElement.classList.toggle("menu-open");
          });
      })(),
      (window.FLS = !1),
      (function (t) {
        let e = new Image();
        (e.onload = e.onerror =
          function () {
            t(2 == e.height);
          }),
          (e.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
      })(function (t) {
        let e = !0 === t ? "webp" : "no-webp";
        document.documentElement.classList.add(e);
      }),
      (function () {
        const t = document.querySelectorAll("[data-spollers]");
        if (t.length > 0) {
          const n = Array.from(t).filter(function (t, e, n) {
            return !t.dataset.spollers.split(",")[0];
          });
          n.length && a(n);
          let r = i(t, "spollers");
          function a(t, e = !1) {
            t.forEach((t) => {
              (t = e ? t.item : t),
                e.matches || !e
                  ? (t.classList.add("_spoller-init"),
                    s(t),
                    t.addEventListener("click", l))
                  : (t.classList.remove("_spoller-init"),
                    s(t, !1),
                    t.removeEventListener("click", l));
            });
          }
          function s(t, e = !0) {
            let n = t.querySelectorAll("[data-spoller]");
            n.length &&
              ((n = Array.from(n).filter(
                (e) => e.closest("[data-spollers]") === t
              )),
              n.forEach((t) => {
                e
                  ? (t.removeAttribute("tabindex"),
                    t.classList.contains("_spoller-active") ||
                      (t.nextElementSibling.hidden = !0))
                  : (t.setAttribute("tabindex", "-1"),
                    (t.nextElementSibling.hidden = !1));
              }));
          }
          function l(t) {
            const n = t.target;
            if (n.closest("[data-spoller]")) {
              const r = n.closest("[data-spoller]"),
                i = r.closest("[data-spollers]"),
                a = !!i.hasAttribute("data-one-spoller");
              i.querySelectorAll("._slide").length ||
                (a && !r.classList.contains("_spoller-active") && c(i),
                r.classList.toggle("_spoller-active"),
                ((t, n = 500) => {
                  t.hidden ? o(t, n) : e(t, n);
                })(r.nextElementSibling, 500)),
                t.preventDefault();
            }
          }
          function c(t) {
            const n = t.querySelector("[data-spoller]._spoller-active");
            n &&
              (n.classList.remove("_spoller-active"),
              e(n.nextElementSibling, 500));
          }
          r &&
            r.length &&
            r.forEach((t) => {
              t.matchMedia.addEventListener("change", function () {
                a(t.itemsArray, t.matchMedia);
              }),
                a(t.itemsArray, t.matchMedia);
            });
        }
      })();
  })();
})();
