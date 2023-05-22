(self["webpackChunk_radiantearth_stac_browser"] =
  self["webpackChunk_radiantearth_stac_browser"] || []).push([
  [2407],
  {
    8820: function (e) {
      "use strict";
      function t(e) {
        if (e.length >= 255) throw new TypeError("Alphabet too long");
        for (var t = new Uint8Array(256), r = 0; r < t.length; r++) t[r] = 255;
        for (var n = 0; n < e.length; n++) {
          var i = e.charAt(n),
            a = i.charCodeAt(0);
          if (255 !== t[a]) throw new TypeError(i + " is ambiguous");
          t[a] = n;
        }
        var s = e.length,
          o = e.charAt(0),
          l = Math.log(s) / Math.log(256),
          u = Math.log(256) / Math.log(s);
        function c(t) {
          if (
            (t instanceof Uint8Array ||
              (ArrayBuffer.isView(t)
                ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                : Array.isArray(t) && (t = Uint8Array.from(t))),
            !(t instanceof Uint8Array))
          )
            throw new TypeError("Expected Uint8Array");
          if (0 === t.length) return "";
          var r = 0,
            n = 0,
            i = 0,
            a = t.length;
          while (i !== a && 0 === t[i]) i++, r++;
          var l = ((a - i) * u + 1) >>> 0,
            c = new Uint8Array(l);
          while (i !== a) {
            for (
              var d = t[i], p = 0, f = l - 1;
              (0 !== d || p < n) && -1 !== f;
              f--, p++
            )
              (d += (256 * c[f]) >>> 0),
                (c[f] = d % s >>> 0),
                (d = (d / s) >>> 0);
            if (0 !== d) throw new Error("Non-zero carry");
            (n = p), i++;
          }
          var h = l - n;
          while (h !== l && 0 === c[h]) h++;
          for (var m = o.repeat(r); h < l; ++h) m += e.charAt(c[h]);
          return m;
        }
        function d(e) {
          if ("string" !== typeof e) throw new TypeError("Expected String");
          if (0 === e.length) return new Uint8Array();
          var r = 0;
          if (" " !== e[r]) {
            var n = 0,
              i = 0;
            while (e[r] === o) n++, r++;
            var a = ((e.length - r) * l + 1) >>> 0,
              u = new Uint8Array(a);
            while (e[r]) {
              var c = t[e.charCodeAt(r)];
              if (255 === c) return;
              for (
                var d = 0, p = a - 1;
                (0 !== c || d < i) && -1 !== p;
                p--, d++
              )
                (c += (s * u[p]) >>> 0),
                  (u[p] = c % 256 >>> 0),
                  (c = (c / 256) >>> 0);
              if (0 !== c) throw new Error("Non-zero carry");
              (i = d), r++;
            }
            if (" " !== e[r]) {
              var f = a - i;
              while (f !== a && 0 === u[f]) f++;
              var h = new Uint8Array(n + (a - f)),
                m = n;
              while (f !== a) h[m++] = u[f++];
              return h;
            }
          }
        }
        function p(e) {
          var t = d(e);
          if (t) return t;
          throw new Error("Non-base" + s + " character");
        }
        return { encode: c, decodeUnsafe: d, decode: p };
      }
      e.exports = t;
    },
    8168: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          ar: function () {
            return L;
          },
          bg: function () {
            return T;
          },
          ca: function () {
            return N;
          },
          cs: function () {
            return O;
          },
          da: function () {
            return U;
          },
          de: function () {
            return F;
          },
          en: function () {
            return B;
          },
          es: function () {
            return M;
          },
          et: function () {
            return P;
          },
          fa: function () {
            return I;
          },
          fi: function () {
            return z;
          },
          fo: function () {
            return j;
          },
          fr: function () {
            return V;
          },
          gr: function () {
            return H;
          },
          he: function () {
            return G;
          },
          hr: function () {
            return W;
          },
          hu: function () {
            return Z;
          },
          is: function () {
            return J;
          },
          isoDuration: function () {
            return ke;
          },
          it: function () {
            return K;
          },
          ja: function () {
            return $;
          },
          ko: function () {
            return Y;
          },
          lo: function () {
            return X;
          },
          lt: function () {
            return ee;
          },
          lv: function () {
            return re;
          },
          ms: function () {
            return ne;
          },
          nl: function () {
            return ie;
          },
          no: function () {
            return ae;
          },
          pl: function () {
            return oe;
          },
          pt: function () {
            return le;
          },
          ro: function () {
            return ue;
          },
          ru: function () {
            return ce;
          },
          sk: function () {
            return de;
          },
          sv: function () {
            return pe;
          },
          tr: function () {
            return fe;
          },
          uk: function () {
            return he;
          },
          ur: function () {
            return me;
          },
          vi: function () {
            return be;
          },
          zhCN: function () {
            return ge;
          },
          zhTW: function () {
            return ye;
          },
        });
      /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
      var n = function () {
          return (
            (n =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in ((t = arguments[r]), t))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            n.apply(this, arguments)
          );
        },
        i = "\\d+(?:[\\.,]\\d+)?",
        a = "(" + i + "W)",
        s = "(" + i + "Y)?(" + i + "M)?(" + i + "D)?",
        o = "T(" + i + "H)?(" + i + "M)?(" + i + "S)?",
        l = "^P(?:" + a + "|" + s + "(?:" + o + ")?)$",
        u = new RegExp(l),
        c = ["weeks", "years", "months", "days", "hours", "minutes", "seconds"],
        d = {
          years: "Y",
          months: "M",
          days: "D",
          hours: "H",
          minutes: "M",
          seconds: "S",
          weeks: "W",
        },
        p = Object.freeze({
          weeks: 0,
          years: 0,
          months: 0,
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        }),
        f = function (e) {
          var t = e.match(u);
          if (!t) throw new Error("Invalid duration string");
          var r = t.slice(1).reduce(function (e, t, r) {
            return (e[c[r]] = parseFloat(t) || 0), e;
          }, {});
          return r;
        },
        h = function (e) {
          return e.weeks && e.weeks > 0
            ? Object.assign({}, p, { weeks: e.weeks })
            : c.reduce(function (t, r) {
                var i;
                return n(n({}, t), ((i = {}), (i[r] = e[r] || 0), i));
              }, {});
        },
        m = {
          locales: {},
          options: {},
          setLocales: function (e, t) {
            (this.locales = n(n({}, this.locales), e)),
              t && (this.options = n(n({}, this.options), t));
          },
          getLangConfig: function (e) {
            var t = this.locales[e];
            if (
              (!t &&
                this.options.fallbackLocale &&
                (t = this.locales[this.options.fallbackLocale]),
              !t)
            )
              throw new Error(
                "isoDuration: Translations for language: " +
                  e +
                  " are not provided"
              );
            return t;
          },
        },
        b = function (e) {
          for (
            var t = ["years", "months", "days"], r = "", n = 0, i = t;
            n < i.length;
            n++
          ) {
            var a = i[n];
            e[a] && (r += "" + e[a] + d[a]);
          }
          return r;
        },
        g = function (e) {
          for (
            var t = ["hours", "minutes", "seconds"], r = "", n = 0, i = t;
            n < i.length;
            n++
          ) {
            var a = i[n];
            e[a] && (r += "" + e[a] + d[a]);
          }
          return r;
        },
        y = function (e) {
          if (e.weeks > 0) return "P" + e.weeks + "W";
          var t = "P",
            r = b(e);
          r && (t += r);
          var n = g(e);
          return n && (t += "T" + n), r || n || (t += "0D"), t;
        },
        k = function (e, t) {
          var r = m.getLangConfig(t);
          return e.weeks + " " + r.weeks(e.weeks);
        },
        v = function (e, t, r) {
          for (
            var n = m.getLangConfig(t),
              i = "",
              a = ["years", "months", "days", "hours", "minutes", "seconds"],
              s = 0,
              o = 0;
            o < a.length;
            o++
          ) {
            var l = a[o],
              u = e[l];
            if (
              u &&
              ("" !== i && (i += " "),
              (i += u + " " + n[l](u)),
              s++,
              r && r.largest && r.largest <= s)
            )
              break;
          }
          return i;
        },
        w = function (e, t, r) {
          return e.weeks > 0 ? k(e, t) : v(e, t, r);
        },
        x = ["seconds", "minutes", "hours", "days", "months"],
        A = function (e) {
          return function (t) {
            return { nextUnitValue: Math.floor(t / e), value: t % e };
          };
        },
        C = function (e, t) {
          return new Date(t, e + 1, 0).getDate();
        },
        _ = {
          seconds: A(60),
          minutes: A(60),
          hours: A(24),
          days: function (e, t) {
            var r = t ? new Date(t.getTime()) : new Date(),
              n = e,
              i = 0,
              a = C(r.getMonth(), r.getFullYear());
            while (n > a)
              (n -= a),
                i++,
                r.setMonth(r.getMonth() + 1),
                (a = C(r.getMonth(), r.getFullYear()));
            return { nextUnitValue: i, value: n };
          },
          months: A(12),
        },
        D = function (e, t) {
          for (var r = n({}, e), i = 0; i < x.length; i++) {
            var a = x[i],
              s = r[a];
            if (s > 0) {
              var o = _[a](s, t);
              if (((r[a] = o.value), o.nextUnitValue)) {
                var l = "months" === a ? "years" : x[i + 1];
                r[l] = r[l] + o.nextUnitValue;
              }
            }
          }
          return r;
        },
        q = (function () {
          function e(e) {
            this.durationObj = e;
          }
          return (
            (e.prototype.parse = function () {
              return this.durationObj;
            }),
            (e.prototype.toString = function () {
              return y(this.durationObj);
            }),
            (e.prototype.humanize = function (e, t) {
              return w(this.durationObj, e, t);
            }),
            (e.prototype.normalize = function (e) {
              return (this.durationObj = D(this.durationObj, e)), this;
            }),
            (e.prototype.isEmpty = function () {
              var e = this;
              return Object.keys(this.durationObj).every(function (t) {
                return 0 === e.durationObj[t];
              });
            }),
            e
          );
        })();
      function E(e) {
        return e <= 2 ? 0 : e > 2 && e < 11 ? 1 : 0;
      }
      var L = {
        years: function (e) {
          return 1 === e ? "سنة" : "سنوات";
        },
        months: function (e) {
          return 1 === e ? "شهر" : "أشهر";
        },
        weeks: function (e) {
          return 1 === e ? "أسبوع" : "أسابيع";
        },
        days: function (e) {
          return 1 === e ? "يوم" : "أيام";
        },
        hours: function (e) {
          return 1 === e ? "ساعة" : "ساعات";
        },
        minutes: function (e) {
          return ["دقيقة", "دقائق"][E(e)];
        },
        seconds: function (e) {
          return 1 === e ? "ثانية" : "ثواني";
        },
        decimal: ",",
      };
      function S(e) {
        return Math.floor(e) !== e
          ? 2
          : (e % 100 >= 5 && e % 100 <= 20) ||
            (e % 10 >= 5 && e % 10 <= 9) ||
            e % 10 === 0
          ? 0
          : e % 10 === 1
          ? 1
          : e > 1
          ? 2
          : 0;
      }
      var T = {
          years: function (e) {
            return ["години", "година", "години"][S(e)];
          },
          months: function (e) {
            return ["месеца", "месец", "месеца"][S(e)];
          },
          weeks: function (e) {
            return ["седмици", "седмица", "седмици"][S(e)];
          },
          days: function (e) {
            return ["дни", "ден", "дни"][S(e)];
          },
          hours: function (e) {
            return ["часа", "час", "часа"][S(e)];
          },
          minutes: function (e) {
            return ["минути", "минута", "минути"][S(e)];
          },
          seconds: function (e) {
            return ["секунди", "секунда", "секунди"][S(e)];
          },
          decimal: ",",
        },
        N = {
          years: function (e) {
            return "any" + (1 === e ? "" : "s");
          },
          months: function (e) {
            return "mes" + (1 === e ? "" : "os");
          },
          weeks: function (e) {
            return "setman" + (1 === e ? "a" : "es");
          },
          days: function (e) {
            return "di" + (1 === e ? "a" : "es");
          },
          hours: function (e) {
            return "hor" + (1 === e ? "a" : "es");
          },
          minutes: function (e) {
            return "minut" + (1 === e ? "" : "s");
          },
          seconds: function (e) {
            return "segon" + (1 === e ? "" : "s");
          },
          decimal: ",",
        };
      function R(e) {
        return 1 === e
          ? 0
          : Math.floor(e) !== e
          ? 1
          : e % 10 >= 2 && e % 10 <= 4 && e % 100 < 10
          ? 2
          : 3;
      }
      var O = {
          years: function (e) {
            return ["rok", "roku", "roky", "let"][R(e)];
          },
          months: function (e) {
            return ["měsíc", "měsíce", "měsíce", "měsíců"][R(e)];
          },
          weeks: function (e) {
            return ["týden", "týdne", "týdny", "týdnů"][R(e)];
          },
          days: function (e) {
            return ["den", "dne", "dny", "dní"][R(e)];
          },
          hours: function (e) {
            return ["hodina", "hodiny", "hodiny", "hodin"][R(e)];
          },
          minutes: function (e) {
            return ["minuta", "minuty", "minuty", "minut"][R(e)];
          },
          seconds: function (e) {
            return ["sekunda", "sekundy", "sekundy", "sekund"][R(e)];
          },
          decimal: ",",
        },
        U = {
          years: function () {
            return "år";
          },
          months: function (e) {
            return "måned" + (1 === e ? "" : "er");
          },
          weeks: function (e) {
            return "uge" + (1 === e ? "" : "r");
          },
          days: function (e) {
            return "dag" + (1 === e ? "" : "e");
          },
          hours: function (e) {
            return "time" + (1 === e ? "" : "r");
          },
          minutes: function (e) {
            return "minut" + (1 === e ? "" : "ter");
          },
          seconds: function (e) {
            return "sekund" + (1 === e ? "" : "er");
          },
          decimal: ",",
        },
        F = {
          years: function (e) {
            return "Jahr" + (1 === e ? "" : "e");
          },
          months: function (e) {
            return "Monat" + (1 === e ? "" : "e");
          },
          weeks: function (e) {
            return "Woche" + (1 === e ? "" : "n");
          },
          days: function (e) {
            return "Tag" + (1 === e ? "" : "e");
          },
          hours: function (e) {
            return "Stunde" + (1 === e ? "" : "n");
          },
          minutes: function (e) {
            return "Minute" + (1 === e ? "" : "n");
          },
          seconds: function (e) {
            return "Sekunde" + (1 === e ? "" : "n");
          },
          decimal: ",",
        },
        B = {
          years: function (e) {
            return "year" + (1 === e ? "" : "s");
          },
          months: function (e) {
            return "month" + (1 === e ? "" : "s");
          },
          weeks: function (e) {
            return "week" + (1 === e ? "" : "s");
          },
          days: function (e) {
            return "day" + (1 === e ? "" : "s");
          },
          hours: function (e) {
            return "hour" + (1 === e ? "" : "s");
          },
          minutes: function (e) {
            return "minute" + (1 === e ? "" : "s");
          },
          seconds: function (e) {
            return "second" + (1 === e ? "" : "s");
          },
          decimal: ".",
        },
        M = {
          years: function (e) {
            return "año" + (1 === e ? "" : "s");
          },
          months: function (e) {
            return "mes" + (1 === e ? "" : "es");
          },
          weeks: function (e) {
            return "semana" + (1 === e ? "" : "s");
          },
          days: function (e) {
            return "día" + (1 === e ? "" : "s");
          },
          hours: function (e) {
            return "hora" + (1 === e ? "" : "s");
          },
          minutes: function (e) {
            return "minuto" + (1 === e ? "" : "s");
          },
          seconds: function (e) {
            return "segundo" + (1 === e ? "" : "s");
          },
          decimal: ",",
        },
        P = {
          years: function (e) {
            return "aasta" + (1 === e ? "" : "t");
          },
          months: function (e) {
            return "kuu" + (1 === e ? "" : "d");
          },
          weeks: function (e) {
            return "nädal" + (1 === e ? "" : "at");
          },
          days: function (e) {
            return "päev" + (1 === e ? "" : "a");
          },
          hours: function (e) {
            return "tund" + (1 === e ? "" : "i");
          },
          minutes: function (e) {
            return "minut" + (1 === e ? "" : "it");
          },
          seconds: function (e) {
            return "sekund" + (1 === e ? "" : "it");
          },
          decimal: ",",
        },
        I = {
          years: function () {
            return "سال";
          },
          months: function () {
            return "ماه";
          },
          weeks: function () {
            return "هفته";
          },
          days: function () {
            return "روز";
          },
          hours: function () {
            return "ساعت";
          },
          minutes: function () {
            return "دقیقه";
          },
          seconds: function () {
            return "ثانیه";
          },
          decimal: ".",
        },
        z = {
          years: function (e) {
            return 1 === e ? "vuosi" : "vuotta";
          },
          months: function (e) {
            return 1 === e ? "kuukausi" : "kuukautta";
          },
          weeks: function (e) {
            return "viikko" + (1 === e ? "" : "a");
          },
          days: function (e) {
            return "päivä" + (1 === e ? "" : "ä");
          },
          hours: function (e) {
            return "tunti" + (1 === e ? "" : "a");
          },
          minutes: function (e) {
            return "minuutti" + (1 === e ? "" : "a");
          },
          seconds: function (e) {
            return "sekunti" + (1 === e ? "" : "a");
          },
          decimal: ",",
        },
        j = {
          years: function () {
            return "ár";
          },
          months: function (e) {
            return 1 === e ? "mánaður" : "mánaðir";
          },
          weeks: function (e) {
            return 1 === e ? "vika" : "vikur";
          },
          days: function (e) {
            return 1 === e ? "dagur" : "dagar";
          },
          hours: function (e) {
            return 1 === e ? "tími" : "tímar";
          },
          minutes: function (e) {
            return 1 === e ? "minuttur" : "minuttir";
          },
          seconds: function () {
            return "sekund";
          },
          decimal: ",",
        },
        V = {
          years: function (e) {
            return "an" + (e >= 2 ? "s" : "");
          },
          months: function () {
            return "mois";
          },
          weeks: function (e) {
            return "semaine" + (e >= 2 ? "s" : "");
          },
          days: function (e) {
            return "jour" + (e >= 2 ? "s" : "");
          },
          hours: function (e) {
            return "heure" + (e >= 2 ? "s" : "");
          },
          minutes: function (e) {
            return "minute" + (e >= 2 ? "s" : "");
          },
          seconds: function (e) {
            return "seconde" + (e >= 2 ? "s" : "");
          },
          decimal: ",",
        },
        H = {
          years: function (e) {
            return 1 === e ? "χρόνος" : "χρόνια";
          },
          months: function (e) {
            return 1 === e ? "μήνας" : "μήνες";
          },
          weeks: function (e) {
            return 1 === e ? "εβδομάδα" : "εβδομάδες";
          },
          days: function (e) {
            return 1 === e ? "μέρα" : "μέρες";
          },
          hours: function (e) {
            return 1 === e ? "ώρα" : "ώρες";
          },
          minutes: function (e) {
            return 1 === e ? "λεπτό" : "λεπτά";
          },
          seconds: function (e) {
            return 1 === e ? "δευτερόλεπτο" : "δευτερόλεπτα";
          },
          decimal: ",",
        },
        G = {
          years: function (e) {
            return 1 === e ? "שנה" : "שנים";
          },
          months: function (e) {
            return 1 === e ? "חודש" : "חודשים";
          },
          weeks: function (e) {
            return 1 === e ? "שבוע" : "שבועות";
          },
          days: function (e) {
            return 1 === e ? "יום" : "ימים";
          },
          hours: function (e) {
            return 1 === e ? "שעה" : "שעות";
          },
          minutes: function (e) {
            return 1 === e ? "דקה" : "דקות";
          },
          seconds: function (e) {
            return 1 === e ? "שניה" : "שניות";
          },
          decimal: ".",
        },
        W = {
          years: function (e) {
            return e % 10 === 2 || e % 10 === 3 || e % 10 === 4
              ? "godine"
              : "godina";
          },
          months: function (e) {
            return 1 === e
              ? "mjesec"
              : 2 === e || 3 === e || 4 === e
              ? "mjeseca"
              : "mjeseci";
          },
          weeks: function (e) {
            return e % 10 === 1 && 11 !== e ? "tjedan" : "tjedna";
          },
          days: function (e) {
            return 1 === e ? "dan" : "dana";
          },
          hours: function (e) {
            return 1 === e
              ? "sat"
              : 2 === e || 3 === e || 4 === e
              ? "sata"
              : "sati";
          },
          minutes: function (e) {
            var t = e % 10;
            return (2 !== t && 3 !== t && 4 !== t) || !(e < 10 || e > 14)
              ? "minuta"
              : "minute";
          },
          seconds: function (e) {
            return 10 === e ||
              11 === e ||
              12 === e ||
              13 === e ||
              14 === e ||
              16 === e ||
              17 === e ||
              18 === e ||
              19 === e ||
              e % 10 === 5
              ? "sekundi"
              : e % 10 === 1
              ? "sekunda"
              : e % 10 === 2 || e % 10 === 3 || e % 10 === 4
              ? "sekunde"
              : "sekundi";
          },
          decimal: ",",
        },
        Z = {
          years: function () {
            return "év";
          },
          months: function () {
            return "hónap";
          },
          weeks: function () {
            return "hét";
          },
          days: function () {
            return "nap";
          },
          hours: function () {
            return "óra";
          },
          minutes: function () {
            return "perc";
          },
          seconds: function () {
            return "másodperc";
          },
          decimal: ",",
        },
        J = {
          years: function () {
            return "ár";
          },
          months: function (e) {
            return "mánuð" + (1 === e ? "ur" : "ir");
          },
          weeks: function (e) {
            return "vik" + (1 === e ? "a" : "ur");
          },
          days: function (e) {
            return "dag" + (1 === e ? "ur" : "ar");
          },
          hours: function (e) {
            return "klukkutím" + (1 === e ? "i" : "ar");
          },
          minutes: function (e) {
            return "mínút" + (1 === e ? "a" : "ur");
          },
          seconds: function (e) {
            return "sekúnd" + (1 === e ? "a" : "ur");
          },
          decimal: ".",
        },
        K = {
          years: function (e) {
            return "ann" + (1 === e ? "o" : "i");
          },
          months: function (e) {
            return "mes" + (1 === e ? "e" : "i");
          },
          weeks: function (e) {
            return "settiman" + (1 === e ? "a" : "e");
          },
          days: function (e) {
            return "giorn" + (1 === e ? "o" : "i");
          },
          hours: function (e) {
            return "or" + (1 === e ? "a" : "e");
          },
          minutes: function (e) {
            return "minut" + (1 === e ? "o" : "i");
          },
          seconds: function (e) {
            return "second" + (1 === e ? "o" : "i");
          },
          decimal: ",",
        },
        $ = {
          years: function () {
            return "年";
          },
          months: function () {
            return "月";
          },
          weeks: function () {
            return "週";
          },
          days: function () {
            return "日";
          },
          hours: function () {
            return "時間";
          },
          minutes: function () {
            return "分";
          },
          seconds: function () {
            return "秒";
          },
          decimal: ".",
        },
        Y = {
          years: function () {
            return "년";
          },
          months: function () {
            return "개월";
          },
          weeks: function () {
            return "주일";
          },
          days: function () {
            return "일";
          },
          hours: function () {
            return "시간";
          },
          minutes: function () {
            return "분";
          },
          seconds: function () {
            return "초";
          },
          decimal: ".",
        },
        X = {
          years: function () {
            return "ປີ";
          },
          months: function () {
            return "ເດືອນ";
          },
          weeks: function () {
            return "ອາທິດ";
          },
          days: function () {
            return "ມື້";
          },
          hours: function () {
            return "ຊົ່ວໂມງ";
          },
          minutes: function () {
            return "ນາທີ";
          },
          seconds: function () {
            return "ວິນາທີ";
          },
          decimal: ",",
        };
      function Q(e) {
        return 1 === e || (e % 10 === 1 && e % 100 > 20)
          ? 0
          : Math.floor(e) !== e ||
            (e % 10 >= 2 && e % 100 > 20) ||
            (e % 10 >= 2 && e % 100 < 10)
          ? 1
          : 2;
      }
      var ee = {
        years: function (e) {
          return e % 10 === 0 || (e % 100 >= 10 && e % 100 <= 20)
            ? "metų"
            : "metai";
        },
        months: function (e) {
          return ["mėnuo", "mėnesiai", "mėnesių"][Q(e)];
        },
        weeks: function (e) {
          return ["savaitė", "savaitės", "savaičių"][Q(e)];
        },
        days: function (e) {
          return ["diena", "dienos", "dienų"][Q(e)];
        },
        hours: function (e) {
          return ["valanda", "valandos", "valandų"][Q(e)];
        },
        minutes: function (e) {
          return ["minutė", "minutės", "minučių"][Q(e)];
        },
        seconds: function (e) {
          return ["sekundė", "sekundės", "sekundžių"][Q(e)];
        },
        decimal: ",",
      };
      function te(e) {
        return 1 === e || (e % 10 === 1 && e % 100 !== 11) ? 0 : 1;
      }
      var re = {
          years: function (e) {
            return ["gads", "gadi"][te(e)];
          },
          months: function (e) {
            return ["mēnesis", "mēneši"][te(e)];
          },
          weeks: function (e) {
            return ["nedēļa", "nedēļas"][te(e)];
          },
          days: function (e) {
            return ["diena", "dienas"][te(e)];
          },
          hours: function (e) {
            return ["stunda", "stundas"][te(e)];
          },
          minutes: function (e) {
            return ["minūte", "minūtes"][te(e)];
          },
          seconds: function (e) {
            return ["sekunde", "sekundes"][te(e)];
          },
          decimal: ",",
        },
        ne = {
          years: function () {
            return "tahun";
          },
          months: function () {
            return "bulan";
          },
          weeks: function () {
            return "minggu";
          },
          days: function () {
            return "hari";
          },
          hours: function () {
            return "jam";
          },
          minutes: function () {
            return "minit";
          },
          seconds: function () {
            return "saat";
          },
          decimal: ".",
        },
        ie = {
          years: function () {
            return "jaar";
          },
          months: function (e) {
            return 1 === e ? "maand" : "maanden";
          },
          weeks: function (e) {
            return 1 === e ? "week" : "weken";
          },
          days: function (e) {
            return 1 === e ? "dag" : "dagen";
          },
          hours: function () {
            return "uur";
          },
          minutes: function (e) {
            return 1 === e ? "minuut" : "minuten";
          },
          seconds: function (e) {
            return 1 === e ? "seconde" : "seconden";
          },
          decimal: ",",
        },
        ae = {
          years: function () {
            return "år";
          },
          months: function (e) {
            return "måned" + (1 === e ? "" : "er");
          },
          weeks: function (e) {
            return "uke" + (1 === e ? "" : "r");
          },
          days: function (e) {
            return "dag" + (1 === e ? "" : "er");
          },
          hours: function (e) {
            return "time" + (1 === e ? "" : "r");
          },
          minutes: function (e) {
            return "minutt" + (1 === e ? "" : "er");
          },
          seconds: function (e) {
            return "sekund" + (1 === e ? "" : "er");
          },
          decimal: ",",
        };
      function se(e) {
        return 1 === e
          ? 0
          : Math.floor(e) !== e
          ? 1
          : e % 10 >= 2 && e % 10 <= 4 && !(e % 100 > 10 && e % 100 < 20)
          ? 2
          : 3;
      }
      var oe = {
          years: function (e) {
            return ["rok", "roku", "lata", "lat"][se(e)];
          },
          months: function (e) {
            return ["miesiąc", "miesiąca", "miesiące", "miesięcy"][se(e)];
          },
          weeks: function (e) {
            return ["tydzień", "tygodnia", "tygodnie", "tygodni"][se(e)];
          },
          days: function (e) {
            return ["dzień", "dnia", "dni", "dni"][se(e)];
          },
          hours: function (e) {
            return ["godzina", "godziny", "godziny", "godzin"][se(e)];
          },
          minutes: function (e) {
            return ["minuta", "minuty", "minuty", "minut"][se(e)];
          },
          seconds: function (e) {
            return ["sekunda", "sekundy", "sekundy", "sekund"][se(e)];
          },
          decimal: ",",
        },
        le = {
          years: function (e) {
            return "ano" + (1 === e ? "" : "s");
          },
          months: function (e) {
            return 1 === e ? "mês" : "meses";
          },
          weeks: function (e) {
            return "semana" + (1 === e ? "" : "s");
          },
          days: function (e) {
            return "dia" + (1 === e ? "" : "s");
          },
          hours: function (e) {
            return "hora" + (1 === e ? "" : "s");
          },
          minutes: function (e) {
            return "minuto" + (1 === e ? "" : "s");
          },
          seconds: function (e) {
            return "segundo" + (1 === e ? "" : "s");
          },
          decimal: ",",
        },
        ue = {
          years: function (e) {
            return 1 === e ? "an" : "ani";
          },
          months: function (e) {
            return 1 === e ? "lună" : "luni";
          },
          weeks: function (e) {
            return 1 === e ? "săptămână" : "săptămâni";
          },
          days: function (e) {
            return 1 === e ? "zi" : "zile";
          },
          hours: function (e) {
            return 1 === e ? "oră" : "ore";
          },
          minutes: function (e) {
            return 1 === e ? "minut" : "minute";
          },
          seconds: function (e) {
            return 1 === e ? "secundă" : "secunde";
          },
          decimal: ",",
        },
        ce = {
          years: function (e) {
            return ["лет", "год", "года"][S(e)];
          },
          months: function (e) {
            return ["месяцев", "месяц", "месяца"][S(e)];
          },
          weeks: function (e) {
            return ["недель", "неделя", "недели"][S(e)];
          },
          days: function (e) {
            return ["дней", "день", "дня"][S(e)];
          },
          hours: function (e) {
            return ["часов", "час", "часа"][S(e)];
          },
          minutes: function (e) {
            return ["минут", "минута", "минуты"][S(e)];
          },
          seconds: function (e) {
            return ["секунд", "секунда", "секунды"][S(e)];
          },
          decimal: ",",
        },
        de = {
          years: function (e) {
            return ["rok", "roky", "roky", "rokov"][R(e)];
          },
          months: function (e) {
            return ["mesiac", "mesiace", "mesiace", "mesiacov"][R(e)];
          },
          weeks: function (e) {
            return ["týždeň", "týždne", "týždne", "týždňov"][R(e)];
          },
          days: function (e) {
            return ["deň", "dni", "dni", "dní"][R(e)];
          },
          hours: function (e) {
            return ["hodina", "hodiny", "hodiny", "hodín"][R(e)];
          },
          minutes: function (e) {
            return ["minúta", "minúty", "minúty", "minút"][R(e)];
          },
          seconds: function (e) {
            return ["sekunda", "sekundy", "sekundy", "sekúnd"][R(e)];
          },
          decimal: ",",
        },
        pe = {
          years: function () {
            return "år";
          },
          months: function (e) {
            return "månad" + (1 === e ? "" : "er");
          },
          weeks: function (e) {
            return "veck" + (1 === e ? "a" : "or");
          },
          days: function (e) {
            return "dag" + (1 === e ? "" : "ar");
          },
          hours: function (e) {
            return "timm" + (1 === e ? "e" : "ar");
          },
          minutes: function (e) {
            return "minut" + (1 === e ? "" : "er");
          },
          seconds: function (e) {
            return "sekund" + (1 === e ? "" : "er");
          },
          decimal: ",",
        },
        fe = {
          years: function () {
            return "yıl";
          },
          months: function () {
            return "ay";
          },
          weeks: function () {
            return "hafta";
          },
          days: function () {
            return "gün";
          },
          hours: function () {
            return "saat";
          },
          minutes: function () {
            return "dakika";
          },
          seconds: function () {
            return "saniye";
          },
          decimal: ",",
        },
        he = {
          years: function (e) {
            return ["років", "рік", "роки"][S(e)];
          },
          months: function (e) {
            return ["місяців", "місяць", "місяці"][S(e)];
          },
          weeks: function (e) {
            return ["тижнів", "тиждень", "тижні"][S(e)];
          },
          days: function (e) {
            return ["днів", "день", "дні"][S(e)];
          },
          hours: function (e) {
            return ["годин", "година", "години"][S(e)];
          },
          minutes: function (e) {
            return ["хвилин", "хвилина", "хвилини"][S(e)];
          },
          seconds: function (e) {
            return ["секунд", "секунда", "секунди"][S(e)];
          },
          decimal: ",",
        },
        me = {
          years: function () {
            return "سال";
          },
          months: function (e) {
            return 1 === e ? "مہینہ" : "مہینے";
          },
          weeks: function (e) {
            return 1 === e ? "ہفتہ" : "ہفتے";
          },
          days: function () {
            return "دن";
          },
          hours: function (e) {
            return 1 === e ? "گھنٹہ" : "گھنٹے";
          },
          minutes: function () {
            return "منٹ";
          },
          seconds: function () {
            return "سیکنڈ";
          },
          decimal: ".",
        },
        be = {
          years: function () {
            return "năm";
          },
          months: function () {
            return "tháng";
          },
          weeks: function () {
            return "tuần";
          },
          days: function () {
            return "ngày";
          },
          hours: function () {
            return "giờ";
          },
          minutes: function () {
            return "phút";
          },
          seconds: function () {
            return "giây";
          },
          decimal: ",",
        },
        ge = {
          years: function () {
            return "年";
          },
          months: function () {
            return "个月";
          },
          weeks: function () {
            return "周";
          },
          days: function () {
            return "天";
          },
          hours: function () {
            return "小时";
          },
          minutes: function () {
            return "分钟";
          },
          seconds: function () {
            return "秒";
          },
          decimal: ".",
        },
        ye = {
          years: function () {
            return "年";
          },
          months: function () {
            return "個月";
          },
          weeks: function () {
            return "周";
          },
          days: function () {
            return "天";
          },
          hours: function () {
            return "小時";
          },
          minutes: function () {
            return "分鐘";
          },
          seconds: function () {
            return "秒";
          },
          decimal: ".",
        };
      function ke(e) {
        return new q("string" === typeof e ? f(e) : h(e));
      }
      ke.setLocales = function (e, t) {
        m.setLocales(e, t);
      };
    },
    2407: function (e, t, r) {
      const n = r(5571);
      n.importFields(r(4851)),
        n.addDependency("@musement/iso-duration", r(8168)),
        n.addDependency("content-type", r(7811)),
        n.addDependency("commonmark", r(5062)),
        n.addDependency("multihashes", r(8370)),
        (e.exports = {
          ...r(7651),
          Fields: n.exportFields(),
          Registry: n,
          Helper: r(9263),
          DataTypes: r(1048),
          Formatters: r(5834),
          I18N: r(8713),
        });
    },
    7651: function (e, t, r) {
      const n = r(5571),
        i = r(9263),
        a = r(8713),
        s = r(1048),
        o = r(5834);
      function l(e, t, r, l, u) {
        let c = {};
        for (let a in t) {
          let p;
          try {
            let d = a.split(/:(.*)/);
            1 === d.length && d.unshift(u);
            let f = d[0];
            if ("function" === typeof l && !l(a)) continue;
            p = t[a];
            let h = n.getSpecification(a, r);
            h.ext && (f = h.ext);
            let y = !1;
            "summaries" === r &&
              h.listWithKeys &&
              Array.isArray(p) &&
              p.length > 0 &&
              ((p = p[0]), (y = !0));
            let k,
              v = null,
              w = [];
            if (i.isObject(h.items)) {
              let e = p;
              h.listWithKeys && (e = Object.values(e));
              let t = [];
              Array.isArray(e)
                ? (t = i.keysFromListOfObjects(e))
                : i.isObject(e) && (t = Object.keys(e)),
                (v = {}),
                (w = h.itemOrder.filter((e) => t.includes(e))),
                t.forEach((e) => {
                  "undefined" === typeof h.items[e]
                    ? ((v[e] = { label: i.formatKey(e), explain: e }),
                      w.push(e))
                    : ((v[e] = Object.assign({}, h.items[e])),
                      (v[e].label = b(e, h.items[e])));
                });
            }
            if ("summaries" === r)
              if (!y && i.isObject(p))
                k =
                  "undefined" !== typeof p.minimum &&
                  "undefined" !== typeof p.minimum
                    ? o.formatExtent([p.minimum, p.maximum], a, h)
                    : s.object(p);
              else if (n.externalRenderer && v) {
                let r = y ? Object.assign({}, p) : p.slice(0);
                for (let n in r) {
                  let a = i.isObject(r[n]) ? {} : [];
                  for (let i in v) a[i] = m(r[n][i], i, e, t, v[i]);
                  r[n] = a;
                }
              } else
                Array.isArray(p)
                  ? (k = i.toList(p, !h.custom && !h.items, (r) =>
                      m(r, a, e, t, h)
                    ))
                  : console.warn(`Invalid summary value: ${p}`);
            "undefined" === typeof k && (k = m(p, a, e, t, h)),
              i.isObject(c[f]) ||
                (c[f] = { extension: f, label: g(f), properties: {} }),
              (c[f].properties[a] = {
                label: b(a, h),
                value: p,
                formatted: k,
                items: v,
                itemOrder: w,
                spec: h,
              });
          } catch (d) {
            console.error(
              `Field '${a}' with value '${p}' resulted in an error`,
              d
            );
          }
        }
        return Object.values(c).sort((e, t) =>
          e.extension.localeCompare(t.extension, a.locales)
        );
      }
      function u(e, t, r = null, n = "") {
        return l(t, e, "assets", r, n);
      }
      function c(e, t, r = null, n = "") {
        return l(t, e, "links", r, n);
      }
      function d(e, t, r = null, n = "") {
        return l(t, e, "providers", r, n);
      }
      function p(e, t = null, r = "") {
        return l(e, e.summaries, "summaries", t, r);
      }
      function f(e, t = null, r = "") {
        return l(e, e, "collection", t, r);
      }
      function h(e, t = null, r = "") {
        return l(e, e.properties, "metadata", t, r);
      }
      function m(e, t, r = null, a = null, l = null) {
        if (
          (i.isObject(l) || (l = n.getSpecification(t)),
          "string" === typeof l.format)
        ) {
          let n = o[`format${l.format}`];
          return (
            n || console.warn("Formatter '{spec.format}' not available."),
            n(e, t, l, r, a)
          );
        }
        if (i.isObject(l.mapping)) {
          let t = String(e);
          return (
            "undefined" !== typeof l.mapping[t]
              ? (e = l.mapping[t])
              : "undefined" !== typeof l.mapping[t.toLowerCase()]
              ? (e = l.mapping[t.toLowerCase()])
              : "undefined" !== typeof l.mapping[t.toUpperCase()] &&
                (e = l.mapping[t.toUpperCase()]),
            s.format(i.t(e), l.unit)
          );
        }
        if (null === e && l.null) return s.null(l.null);
        if (Array.isArray(e)) {
          let s = (e) => m(e, t, r, a, l);
          return n.externalRenderer && (l.custom || l.items)
            ? e.map(s)
            : i.toList(e, !1, s);
        }
        if (i.isObject(e)) {
          let t = (e) =>
              i.isObject(l.items)
                ? l.listWithKeys
                  ? { items: l.items }
                  : l.items[e]
                : i.isObject(l.properties)
                ? l.properties[e]
                : {},
            a = (e, n, i) => m(e, n, r, i, t(n));
          if (n.externalRenderer && (l.custom || l.items || l.properties)) {
            let t = {};
            for (let r in e) t[r] = a(e[r], r, e);
            return t;
          }
          {
            let r = (e) => b(e, t(e));
            return i.toObject(e, a, r);
          }
        }
        return s.format(e, l.unit);
      }
      function b(e, t = null) {
        if (
          (i.isObject(t) || (t = n.getSpecification(e)),
          i.isObject(t) && "string" === typeof t.label)
        ) {
          if ("string" === typeof t.explain)
            return t.explain.match(/^https?:\/\//i)
              ? i.toLink(t.explain, i.t(t.label), "about")
              : i.abbrev(i.t(t.label), i.t(t.explain));
          if ("string" === typeof t.label) return i.t(t.label);
        }
        return i.formatKey(e);
      }
      function g(e) {
        return b(e, n.getExtension(e));
      }
      e.exports = {
        format: m,
        label: b,
        extension: g,
        formatCollection: f,
        formatSummaries: p,
        formatItemProperties: h,
        formatAsset: u,
        formatLink: c,
        formatProvider: d,
        formatGrouped: l,
      };
    },
    556: function (e, t, r) {
      "use strict";
      const { encodeText: n } = r(2413);
      class i {
        constructor(e, t, r, i) {
          (this.name = e),
            (this.code = t),
            (this.codeBuf = n(this.code)),
            (this.alphabet = i),
            (this.codec = r(i));
        }
        encode(e) {
          return this.codec.encode(e);
        }
        decode(e) {
          for (const t of e)
            if (this.alphabet && this.alphabet.indexOf(t) < 0)
              throw new Error(`invalid character '${t}' in '${e}'`);
          return this.codec.decode(e);
        }
      }
      e.exports = i;
    },
    5077: function (e, t, r) {
      "use strict";
      const n = r(8820),
        i = r(556),
        { rfc4648: a } = r(4108),
        { decodeText: s, encodeText: o } = r(2413),
        l = () => ({ encode: s, decode: o }),
        u = [
          ["identity", "\0", l, ""],
          ["base2", "0", a(1), "01"],
          ["base8", "7", a(3), "01234567"],
          ["base10", "9", n, "0123456789"],
          ["base16", "f", a(4), "0123456789abcdef"],
          ["base16upper", "F", a(4), "0123456789ABCDEF"],
          ["base32hex", "v", a(5), "0123456789abcdefghijklmnopqrstuv"],
          ["base32hexupper", "V", a(5), "0123456789ABCDEFGHIJKLMNOPQRSTUV"],
          ["base32hexpad", "t", a(5), "0123456789abcdefghijklmnopqrstuv="],
          ["base32hexpadupper", "T", a(5), "0123456789ABCDEFGHIJKLMNOPQRSTUV="],
          ["base32", "b", a(5), "abcdefghijklmnopqrstuvwxyz234567"],
          ["base32upper", "B", a(5), "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"],
          ["base32pad", "c", a(5), "abcdefghijklmnopqrstuvwxyz234567="],
          ["base32padupper", "C", a(5), "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567="],
          ["base32z", "h", a(5), "ybndrfg8ejkmcpqxot1uwisza345h769"],
          ["base36", "k", n, "0123456789abcdefghijklmnopqrstuvwxyz"],
          ["base36upper", "K", n, "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
          [
            "base58btc",
            "z",
            n,
            "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
          ],
          [
            "base58flickr",
            "Z",
            n,
            "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
          ],
          [
            "base64",
            "m",
            a(6),
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          ],
          [
            "base64pad",
            "M",
            a(6),
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          ],
          [
            "base64url",
            "u",
            a(6),
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
          ],
          [
            "base64urlpad",
            "U",
            a(6),
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
          ],
        ],
        c = u.reduce(
          (e, t) => ((e[t[0]] = new i(t[0], t[1], t[2], t[3])), e),
          {}
        ),
        d = u.reduce((e, t) => ((e[t[1]] = c[t[0]]), e), {});
      e.exports = { names: c, codes: d };
    },
    6957: function (e, t, r) {
      "use strict";
      const n = r(5077),
        { encodeText: i, decodeText: a, concat: s } = r(2413);
      function o(e, t) {
        if (!t) throw new Error("requires an encoded Uint8Array");
        const { name: r, codeBuf: n } = p(e);
        return d(r, t), s([n, t], n.length + t.length);
      }
      function l(e, t) {
        const r = p(e),
          n = i(r.encode(t));
        return s([r.codeBuf, n], r.codeBuf.length + n.length);
      }
      function u(e) {
        e instanceof Uint8Array && (e = a(e));
        const t = e[0];
        [
          "f",
          "F",
          "v",
          "V",
          "t",
          "T",
          "b",
          "B",
          "c",
          "C",
          "h",
          "k",
          "K",
        ].includes(t) && (e = e.toLowerCase());
        const r = p(e[0]);
        return r.decode(e.substring(1));
      }
      function c(e) {
        if (
          (e instanceof Uint8Array && (e = a(e)),
          "[object String]" !== Object.prototype.toString.call(e))
        )
          return !1;
        try {
          const t = p(e[0]);
          return t.name;
        } catch (t) {
          return !1;
        }
      }
      function d(e, t) {
        const r = p(e);
        r.decode(a(t));
      }
      function p(e) {
        if (Object.prototype.hasOwnProperty.call(n.names, e)) return n.names[e];
        if (Object.prototype.hasOwnProperty.call(n.codes, e)) return n.codes[e];
        throw new Error(`Unsupported encoding: ${e}`);
      }
      function f(e) {
        return e instanceof Uint8Array && (e = a(e)), p(e[0]);
      }
      (t = e.exports = o),
        (t.encode = l),
        (t.decode = u),
        (t.isEncoded = c),
        (t.encoding = p),
        (t.encodingFromData = f),
        (t.names = Object.freeze(n.names)),
        (t.codes = Object.freeze(n.codes));
    },
    4108: function (e) {
      "use strict";
      const t = (e, t, r) => {
          const n = {};
          for (let u = 0; u < t.length; ++u) n[t[u]] = u;
          let i = e.length;
          while ("=" === e[i - 1]) --i;
          const a = new Uint8Array(((i * r) / 8) | 0);
          let s = 0,
            o = 0,
            l = 0;
          for (let u = 0; u < i; ++u) {
            const t = n[e[u]];
            if (void 0 === t)
              throw new SyntaxError("Invalid character " + e[u]);
            (o = (o << r) | t),
              (s += r),
              s >= 8 && ((s -= 8), (a[l++] = 255 & (o >> s)));
          }
          if (s >= r || 255 & (o << (8 - s)))
            throw new SyntaxError("Unexpected end of data");
          return a;
        },
        r = (e, t, r) => {
          const n = "=" === t[t.length - 1],
            i = (1 << r) - 1;
          let a = "",
            s = 0,
            o = 0;
          for (let l = 0; l < e.length; ++l) {
            (o = (o << 8) | e[l]), (s += 8);
            while (s > r) (s -= r), (a += t[i & (o >> s)]);
          }
          if ((s && (a += t[i & (o << (r - s))]), n))
            while ((a.length * r) & 7) a += "=";
          return a;
        },
        n = (e) => (n) => ({
          encode(t) {
            return r(t, n, e);
          },
          decode(r) {
            return t(r, n, e);
          },
        });
      e.exports = { rfc4648: n };
    },
    2413: function (e, t, r) {
      "use strict";
      const { TextEncoder: n, TextDecoder: i } = r(7259),
        a = new i(),
        s = (e) => a.decode(e),
        o = new n(),
        l = (e) => o.encode(e);
      function u(e, t) {
        const r = new Uint8Array(t);
        let n = 0;
        for (const i of e) r.set(i, n), (n += i.length);
        return r;
      }
      e.exports = { decodeText: s, encodeText: l, concat: u };
    },
    1291: function (e) {
      "use strict";
      const t = Object.freeze({
        identity: 0,
        sha1: 17,
        "sha2-256": 18,
        "sha2-512": 19,
        "sha3-512": 20,
        "sha3-384": 21,
        "sha3-256": 22,
        "sha3-224": 23,
        "shake-128": 24,
        "shake-256": 25,
        "keccak-224": 26,
        "keccak-256": 27,
        "keccak-384": 28,
        "keccak-512": 29,
        blake3: 30,
        "murmur3-128": 34,
        "murmur3-32": 35,
        "dbl-sha2-256": 86,
        md4: 212,
        md5: 213,
        bmt: 214,
        "sha2-256-trunc254-padded": 4114,
        "ripemd-128": 4178,
        "ripemd-160": 4179,
        "ripemd-256": 4180,
        "ripemd-320": 4181,
        x11: 4352,
        kangarootwelve: 7425,
        "sm3-256": 21325,
        "blake2b-8": 45569,
        "blake2b-16": 45570,
        "blake2b-24": 45571,
        "blake2b-32": 45572,
        "blake2b-40": 45573,
        "blake2b-48": 45574,
        "blake2b-56": 45575,
        "blake2b-64": 45576,
        "blake2b-72": 45577,
        "blake2b-80": 45578,
        "blake2b-88": 45579,
        "blake2b-96": 45580,
        "blake2b-104": 45581,
        "blake2b-112": 45582,
        "blake2b-120": 45583,
        "blake2b-128": 45584,
        "blake2b-136": 45585,
        "blake2b-144": 45586,
        "blake2b-152": 45587,
        "blake2b-160": 45588,
        "blake2b-168": 45589,
        "blake2b-176": 45590,
        "blake2b-184": 45591,
        "blake2b-192": 45592,
        "blake2b-200": 45593,
        "blake2b-208": 45594,
        "blake2b-216": 45595,
        "blake2b-224": 45596,
        "blake2b-232": 45597,
        "blake2b-240": 45598,
        "blake2b-248": 45599,
        "blake2b-256": 45600,
        "blake2b-264": 45601,
        "blake2b-272": 45602,
        "blake2b-280": 45603,
        "blake2b-288": 45604,
        "blake2b-296": 45605,
        "blake2b-304": 45606,
        "blake2b-312": 45607,
        "blake2b-320": 45608,
        "blake2b-328": 45609,
        "blake2b-336": 45610,
        "blake2b-344": 45611,
        "blake2b-352": 45612,
        "blake2b-360": 45613,
        "blake2b-368": 45614,
        "blake2b-376": 45615,
        "blake2b-384": 45616,
        "blake2b-392": 45617,
        "blake2b-400": 45618,
        "blake2b-408": 45619,
        "blake2b-416": 45620,
        "blake2b-424": 45621,
        "blake2b-432": 45622,
        "blake2b-440": 45623,
        "blake2b-448": 45624,
        "blake2b-456": 45625,
        "blake2b-464": 45626,
        "blake2b-472": 45627,
        "blake2b-480": 45628,
        "blake2b-488": 45629,
        "blake2b-496": 45630,
        "blake2b-504": 45631,
        "blake2b-512": 45632,
        "blake2s-8": 45633,
        "blake2s-16": 45634,
        "blake2s-24": 45635,
        "blake2s-32": 45636,
        "blake2s-40": 45637,
        "blake2s-48": 45638,
        "blake2s-56": 45639,
        "blake2s-64": 45640,
        "blake2s-72": 45641,
        "blake2s-80": 45642,
        "blake2s-88": 45643,
        "blake2s-96": 45644,
        "blake2s-104": 45645,
        "blake2s-112": 45646,
        "blake2s-120": 45647,
        "blake2s-128": 45648,
        "blake2s-136": 45649,
        "blake2s-144": 45650,
        "blake2s-152": 45651,
        "blake2s-160": 45652,
        "blake2s-168": 45653,
        "blake2s-176": 45654,
        "blake2s-184": 45655,
        "blake2s-192": 45656,
        "blake2s-200": 45657,
        "blake2s-208": 45658,
        "blake2s-216": 45659,
        "blake2s-224": 45660,
        "blake2s-232": 45661,
        "blake2s-240": 45662,
        "blake2s-248": 45663,
        "blake2s-256": 45664,
        "skein256-8": 45825,
        "skein256-16": 45826,
        "skein256-24": 45827,
        "skein256-32": 45828,
        "skein256-40": 45829,
        "skein256-48": 45830,
        "skein256-56": 45831,
        "skein256-64": 45832,
        "skein256-72": 45833,
        "skein256-80": 45834,
        "skein256-88": 45835,
        "skein256-96": 45836,
        "skein256-104": 45837,
        "skein256-112": 45838,
        "skein256-120": 45839,
        "skein256-128": 45840,
        "skein256-136": 45841,
        "skein256-144": 45842,
        "skein256-152": 45843,
        "skein256-160": 45844,
        "skein256-168": 45845,
        "skein256-176": 45846,
        "skein256-184": 45847,
        "skein256-192": 45848,
        "skein256-200": 45849,
        "skein256-208": 45850,
        "skein256-216": 45851,
        "skein256-224": 45852,
        "skein256-232": 45853,
        "skein256-240": 45854,
        "skein256-248": 45855,
        "skein256-256": 45856,
        "skein512-8": 45857,
        "skein512-16": 45858,
        "skein512-24": 45859,
        "skein512-32": 45860,
        "skein512-40": 45861,
        "skein512-48": 45862,
        "skein512-56": 45863,
        "skein512-64": 45864,
        "skein512-72": 45865,
        "skein512-80": 45866,
        "skein512-88": 45867,
        "skein512-96": 45868,
        "skein512-104": 45869,
        "skein512-112": 45870,
        "skein512-120": 45871,
        "skein512-128": 45872,
        "skein512-136": 45873,
        "skein512-144": 45874,
        "skein512-152": 45875,
        "skein512-160": 45876,
        "skein512-168": 45877,
        "skein512-176": 45878,
        "skein512-184": 45879,
        "skein512-192": 45880,
        "skein512-200": 45881,
        "skein512-208": 45882,
        "skein512-216": 45883,
        "skein512-224": 45884,
        "skein512-232": 45885,
        "skein512-240": 45886,
        "skein512-248": 45887,
        "skein512-256": 45888,
        "skein512-264": 45889,
        "skein512-272": 45890,
        "skein512-280": 45891,
        "skein512-288": 45892,
        "skein512-296": 45893,
        "skein512-304": 45894,
        "skein512-312": 45895,
        "skein512-320": 45896,
        "skein512-328": 45897,
        "skein512-336": 45898,
        "skein512-344": 45899,
        "skein512-352": 45900,
        "skein512-360": 45901,
        "skein512-368": 45902,
        "skein512-376": 45903,
        "skein512-384": 45904,
        "skein512-392": 45905,
        "skein512-400": 45906,
        "skein512-408": 45907,
        "skein512-416": 45908,
        "skein512-424": 45909,
        "skein512-432": 45910,
        "skein512-440": 45911,
        "skein512-448": 45912,
        "skein512-456": 45913,
        "skein512-464": 45914,
        "skein512-472": 45915,
        "skein512-480": 45916,
        "skein512-488": 45917,
        "skein512-496": 45918,
        "skein512-504": 45919,
        "skein512-512": 45920,
        "skein1024-8": 45921,
        "skein1024-16": 45922,
        "skein1024-24": 45923,
        "skein1024-32": 45924,
        "skein1024-40": 45925,
        "skein1024-48": 45926,
        "skein1024-56": 45927,
        "skein1024-64": 45928,
        "skein1024-72": 45929,
        "skein1024-80": 45930,
        "skein1024-88": 45931,
        "skein1024-96": 45932,
        "skein1024-104": 45933,
        "skein1024-112": 45934,
        "skein1024-120": 45935,
        "skein1024-128": 45936,
        "skein1024-136": 45937,
        "skein1024-144": 45938,
        "skein1024-152": 45939,
        "skein1024-160": 45940,
        "skein1024-168": 45941,
        "skein1024-176": 45942,
        "skein1024-184": 45943,
        "skein1024-192": 45944,
        "skein1024-200": 45945,
        "skein1024-208": 45946,
        "skein1024-216": 45947,
        "skein1024-224": 45948,
        "skein1024-232": 45949,
        "skein1024-240": 45950,
        "skein1024-248": 45951,
        "skein1024-256": 45952,
        "skein1024-264": 45953,
        "skein1024-272": 45954,
        "skein1024-280": 45955,
        "skein1024-288": 45956,
        "skein1024-296": 45957,
        "skein1024-304": 45958,
        "skein1024-312": 45959,
        "skein1024-320": 45960,
        "skein1024-328": 45961,
        "skein1024-336": 45962,
        "skein1024-344": 45963,
        "skein1024-352": 45964,
        "skein1024-360": 45965,
        "skein1024-368": 45966,
        "skein1024-376": 45967,
        "skein1024-384": 45968,
        "skein1024-392": 45969,
        "skein1024-400": 45970,
        "skein1024-408": 45971,
        "skein1024-416": 45972,
        "skein1024-424": 45973,
        "skein1024-432": 45974,
        "skein1024-440": 45975,
        "skein1024-448": 45976,
        "skein1024-456": 45977,
        "skein1024-464": 45978,
        "skein1024-472": 45979,
        "skein1024-480": 45980,
        "skein1024-488": 45981,
        "skein1024-496": 45982,
        "skein1024-504": 45983,
        "skein1024-512": 45984,
        "skein1024-520": 45985,
        "skein1024-528": 45986,
        "skein1024-536": 45987,
        "skein1024-544": 45988,
        "skein1024-552": 45989,
        "skein1024-560": 45990,
        "skein1024-568": 45991,
        "skein1024-576": 45992,
        "skein1024-584": 45993,
        "skein1024-592": 45994,
        "skein1024-600": 45995,
        "skein1024-608": 45996,
        "skein1024-616": 45997,
        "skein1024-624": 45998,
        "skein1024-632": 45999,
        "skein1024-640": 46e3,
        "skein1024-648": 46001,
        "skein1024-656": 46002,
        "skein1024-664": 46003,
        "skein1024-672": 46004,
        "skein1024-680": 46005,
        "skein1024-688": 46006,
        "skein1024-696": 46007,
        "skein1024-704": 46008,
        "skein1024-712": 46009,
        "skein1024-720": 46010,
        "skein1024-728": 46011,
        "skein1024-736": 46012,
        "skein1024-744": 46013,
        "skein1024-752": 46014,
        "skein1024-760": 46015,
        "skein1024-768": 46016,
        "skein1024-776": 46017,
        "skein1024-784": 46018,
        "skein1024-792": 46019,
        "skein1024-800": 46020,
        "skein1024-808": 46021,
        "skein1024-816": 46022,
        "skein1024-824": 46023,
        "skein1024-832": 46024,
        "skein1024-840": 46025,
        "skein1024-848": 46026,
        "skein1024-856": 46027,
        "skein1024-864": 46028,
        "skein1024-872": 46029,
        "skein1024-880": 46030,
        "skein1024-888": 46031,
        "skein1024-896": 46032,
        "skein1024-904": 46033,
        "skein1024-912": 46034,
        "skein1024-920": 46035,
        "skein1024-928": 46036,
        "skein1024-936": 46037,
        "skein1024-944": 46038,
        "skein1024-952": 46039,
        "skein1024-960": 46040,
        "skein1024-968": 46041,
        "skein1024-976": 46042,
        "skein1024-984": 46043,
        "skein1024-992": 46044,
        "skein1024-1000": 46045,
        "skein1024-1008": 46046,
        "skein1024-1016": 46047,
        "skein1024-1024": 46048,
        "poseidon-bls12_381-a2-fc1": 46081,
        "poseidon-bls12_381-a2-fc1-sc": 46082,
      });
      e.exports = { names: t };
    },
    8370: function (e, t, r) {
      "use strict";
      const n = r(6957),
        i = r(4676),
        { names: a } = r(1291),
        s = r(3071),
        o = r(7962),
        l = r(6643),
        u = {};
      for (const w in a) {
        const e = w;
        u[a[e]] = e;
      }
      function c(e) {
        if (!(e instanceof Uint8Array))
          throw new Error("must be passed a Uint8Array");
        return s(e, "base16");
      }
      function d(e) {
        return o(e, "base16");
      }
      function p(e) {
        if (!(e instanceof Uint8Array))
          throw new Error("must be passed a Uint8Array");
        return s(n.encode("base58btc", e)).slice(1);
      }
      function f(e) {
        const t = e instanceof Uint8Array ? s(e) : e;
        return n.decode("z" + t);
      }
      function h(e) {
        if (!(e instanceof Uint8Array))
          throw new Error("multihash must be a Uint8Array");
        if (e.length < 2)
          throw new Error("multihash too short. must be > 2 bytes.");
        const t = i.decode(e);
        if (!y(t))
          throw new Error(
            `multihash unknown function code: 0x${t.toString(16)}`
          );
        e = e.slice(i.decode.bytes);
        const r = i.decode(e);
        if (r < 0) throw new Error(`multihash invalid length: ${r}`);
        if (((e = e.slice(i.decode.bytes)), e.length !== r))
          throw new Error(`multihash length inconsistent: 0x${s(e, "base16")}`);
        return { code: t, name: u[t], length: r, digest: e };
      }
      function m(e, t, r) {
        if (!e || void 0 === t)
          throw new Error(
            "multihash encode requires at least two args: digest, code"
          );
        const n = b(t);
        if (!(e instanceof Uint8Array))
          throw new Error("digest should be a Uint8Array");
        if ((null == r && (r = e.length), r && e.length !== r))
          throw new Error("digest length should be equal to specified length.");
        const a = i.encode(n),
          s = i.encode(r);
        return l([a, s, e], a.length + s.length + e.length);
      }
      function b(e) {
        let t = e;
        if ("string" === typeof e) {
          if (void 0 === a[e])
            throw new Error(`Unrecognized hash function named: ${e}`);
          t = a[e];
        }
        if ("number" !== typeof t)
          throw new Error(`Hash function code should be a number. Got: ${t}`);
        if (void 0 === u[t] && !g(t))
          throw new Error(`Unrecognized function code: ${t}`);
        return t;
      }
      function g(e) {
        return e > 0 && e < 16;
      }
      function y(e) {
        return !!g(e) || !!u[e];
      }
      function k(e) {
        h(e);
      }
      function v(e) {
        return k(e), e.subarray(0, 2);
      }
      e.exports = {
        names: a,
        codes: Object.freeze(u),
        toHexString: c,
        fromHexString: d,
        toB58String: p,
        fromB58String: f,
        decode: h,
        encode: m,
        coerceCode: b,
        isAppCode: g,
        validate: k,
        prefix: v,
        isValidCode: y,
      };
    },
    6643: function (e) {
      "use strict";
      function t(e, t) {
        t || (t = e.reduce((e, t) => e + t.length, 0));
        const r = new Uint8Array(t);
        let n = 0;
        for (const i of e) r.set(i, n), (n += i.length);
        return r;
      }
      e.exports = t;
    },
    7962: function (e, t, r) {
      "use strict";
      const n = r(5743);
      function i(e, t = "utf8") {
        const r = n[t];
        if (!r) throw new Error(`Unsupported encoding "${t}"`);
        return r.decoder.decode(`${r.prefix}${e}`);
      }
      e.exports = i;
    },
    3071: function (e, t, r) {
      "use strict";
      const n = r(5743);
      function i(e, t = "utf8") {
        const r = n[t];
        if (!r) throw new Error(`Unsupported encoding "${t}"`);
        return r.encoder.encode(e).substring(1);
      }
      e.exports = i;
    },
    5743: function (e, t, r) {
      "use strict";
      const { bases: n } = r(1835);
      function i(e, t, r, n) {
        return {
          name: e,
          prefix: t,
          encoder: { name: e, prefix: t, encode: r },
          decoder: { decode: n },
        };
      }
      const a = i(
          "utf8",
          "u",
          (e) => {
            const t = new TextDecoder("utf8");
            return "u" + t.decode(e);
          },
          (e) => {
            const t = new TextEncoder();
            return t.encode(e.substring(1));
          }
        ),
        s = i(
          "ascii",
          "a",
          (e) => {
            let t = "a";
            for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
            return t;
          },
          (e) => {
            e = e.substring(1);
            const t = new Uint8Array(e.length);
            for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
            return t;
          }
        ),
        o = {
          utf8: a,
          "utf-8": a,
          hex: n.base16,
          latin1: s,
          ascii: s,
          binary: s,
          ...n,
        };
      e.exports = o;
    },
    6988: function (e) {
      e.exports = n;
      var t = 128,
        r = 127;
      function n(e, i) {
        var a,
          s = 0,
          o = ((i = i || 0), 0),
          l = i,
          u = e.length;
        do {
          if (l >= u || o > 49)
            throw ((n.bytes = 0), new RangeError("Could not decode varint"));
          (a = e[l++]),
            (s += o < 28 ? (a & r) << o : (a & r) * Math.pow(2, o)),
            (o += 7);
        } while (a >= t);
        return (n.bytes = l - i), s;
      }
    },
    1312: function (e) {
      e.exports = a;
      var t = 128,
        r = 127,
        n = ~r,
        i = Math.pow(2, 31);
      function a(e, r, s) {
        if (Number.MAX_SAFE_INTEGER && e > Number.MAX_SAFE_INTEGER)
          throw ((a.bytes = 0), new RangeError("Could not encode varint"));
        (r = r || []), (s = s || 0);
        var o = s;
        while (e >= i) (r[s++] = (255 & e) | t), (e /= 128);
        while (e & n) (r[s++] = (255 & e) | t), (e >>>= 7);
        return (r[s] = 0 | e), (a.bytes = s - o + 1), r;
      }
    },
    4676: function (e, t, r) {
      e.exports = { encode: r(1312), decode: r(6988), encodingLength: r(82) };
    },
    82: function (e) {
      var t = Math.pow(2, 7),
        r = Math.pow(2, 14),
        n = Math.pow(2, 21),
        i = Math.pow(2, 28),
        a = Math.pow(2, 35),
        s = Math.pow(2, 42),
        o = Math.pow(2, 49),
        l = Math.pow(2, 56),
        u = Math.pow(2, 63);
      e.exports = function (e) {
        return e < t
          ? 1
          : e < r
          ? 2
          : e < n
          ? 3
          : e < i
          ? 4
          : e < a
          ? 5
          : e < s
          ? 6
          : e < o
          ? 7
          : e < l
          ? 8
          : e < u
          ? 9
          : 10;
      };
    },
    7259: function (e, t, r) {
      "use strict";
      (t.TextEncoder =
        "undefined" !== typeof TextEncoder ? TextEncoder : r(9539).TextEncoder),
        (t.TextDecoder =
          "undefined" !== typeof TextDecoder
            ? TextDecoder
            : r(9539).TextDecoder);
    },
    5062: function (e, t, r) {
      /* commonmark 0.29 https://github.com/commonmark/commonmark.js @license BSD3 */
      (function (e, r) {
        r(t);
      })(0, function (e) {
        "use strict";
        function t(e) {
          switch (e._type) {
            case "document":
            case "block_quote":
            case "list":
            case "item":
            case "paragraph":
            case "heading":
            case "emph":
            case "strong":
            case "link":
            case "image":
            case "custom_inline":
            case "custom_block":
              return !0;
            default:
              return !1;
          }
        }
        var n = function (e, t) {
            (this.current = e), (this.entering = !0 === t);
          },
          i = function () {
            var e = this.current,
              r = this.entering;
            if (null === e) return null;
            var n = t(e);
            return (
              r && n
                ? e._firstChild
                  ? ((this.current = e._firstChild), (this.entering = !0))
                  : (this.entering = !1)
                : e === this.root
                ? (this.current = null)
                : null === e._next
                ? ((this.current = e._parent), (this.entering = !1))
                : ((this.current = e._next), (this.entering = !0)),
              { entering: r, node: e }
            );
          },
          a = function (e) {
            return { current: e, root: e, entering: !0, next: i, resumeAt: n };
          },
          s = function (e, t) {
            (this._type = e),
              (this._parent = null),
              (this._firstChild = null),
              (this._lastChild = null),
              (this._prev = null),
              (this._next = null),
              (this._sourcepos = t),
              (this._lastLineBlank = !1),
              (this._lastLineChecked = !1),
              (this._open = !0),
              (this._string_content = null),
              (this._literal = null),
              (this._listData = {}),
              (this._info = null),
              (this._destination = null),
              (this._title = null),
              (this._isFenced = !1),
              (this._fenceChar = null),
              (this._fenceLength = 0),
              (this._fenceOffset = null),
              (this._level = null),
              (this._onEnter = null),
              (this._onExit = null);
          },
          o = s.prototype;
        Object.defineProperty(o, "isContainer", {
          get: function () {
            return t(this);
          },
        }),
          Object.defineProperty(o, "type", {
            get: function () {
              return this._type;
            },
          }),
          Object.defineProperty(o, "firstChild", {
            get: function () {
              return this._firstChild;
            },
          }),
          Object.defineProperty(o, "lastChild", {
            get: function () {
              return this._lastChild;
            },
          }),
          Object.defineProperty(o, "next", {
            get: function () {
              return this._next;
            },
          }),
          Object.defineProperty(o, "prev", {
            get: function () {
              return this._prev;
            },
          }),
          Object.defineProperty(o, "parent", {
            get: function () {
              return this._parent;
            },
          }),
          Object.defineProperty(o, "sourcepos", {
            get: function () {
              return this._sourcepos;
            },
          }),
          Object.defineProperty(o, "literal", {
            get: function () {
              return this._literal;
            },
            set: function (e) {
              this._literal = e;
            },
          }),
          Object.defineProperty(o, "destination", {
            get: function () {
              return this._destination;
            },
            set: function (e) {
              this._destination = e;
            },
          }),
          Object.defineProperty(o, "title", {
            get: function () {
              return this._title;
            },
            set: function (e) {
              this._title = e;
            },
          }),
          Object.defineProperty(o, "info", {
            get: function () {
              return this._info;
            },
            set: function (e) {
              this._info = e;
            },
          }),
          Object.defineProperty(o, "level", {
            get: function () {
              return this._level;
            },
            set: function (e) {
              this._level = e;
            },
          }),
          Object.defineProperty(o, "listType", {
            get: function () {
              return this._listData.type;
            },
            set: function (e) {
              this._listData.type = e;
            },
          }),
          Object.defineProperty(o, "listTight", {
            get: function () {
              return this._listData.tight;
            },
            set: function (e) {
              this._listData.tight = e;
            },
          }),
          Object.defineProperty(o, "listStart", {
            get: function () {
              return this._listData.start;
            },
            set: function (e) {
              this._listData.start = e;
            },
          }),
          Object.defineProperty(o, "listDelimiter", {
            get: function () {
              return this._listData.delimiter;
            },
            set: function (e) {
              this._listData.delimiter = e;
            },
          }),
          Object.defineProperty(o, "onEnter", {
            get: function () {
              return this._onEnter;
            },
            set: function (e) {
              this._onEnter = e;
            },
          }),
          Object.defineProperty(o, "onExit", {
            get: function () {
              return this._onExit;
            },
            set: function (e) {
              this._onExit = e;
            },
          }),
          (s.prototype.appendChild = function (e) {
            e.unlink(),
              (e._parent = this),
              this._lastChild
                ? ((this._lastChild._next = e),
                  (e._prev = this._lastChild),
                  (this._lastChild = e))
                : ((this._firstChild = e), (this._lastChild = e));
          }),
          (s.prototype.prependChild = function (e) {
            e.unlink(),
              (e._parent = this),
              this._firstChild
                ? ((this._firstChild._prev = e),
                  (e._next = this._firstChild),
                  (this._firstChild = e))
                : ((this._firstChild = e), (this._lastChild = e));
          }),
          (s.prototype.unlink = function () {
            this._prev
              ? (this._prev._next = this._next)
              : this._parent && (this._parent._firstChild = this._next),
              this._next
                ? (this._next._prev = this._prev)
                : this._parent && (this._parent._lastChild = this._prev),
              (this._parent = null),
              (this._next = null),
              (this._prev = null);
          }),
          (s.prototype.insertAfter = function (e) {
            e.unlink(),
              (e._next = this._next),
              e._next && (e._next._prev = e),
              (e._prev = this),
              (this._next = e),
              (e._parent = this._parent),
              e._next || (e._parent._lastChild = e);
          }),
          (s.prototype.insertBefore = function (e) {
            e.unlink(),
              (e._prev = this._prev),
              e._prev && (e._prev._next = e),
              (e._next = this),
              (this._prev = e),
              (e._parent = this._parent),
              e._prev || (e._parent._firstChild = e);
          }),
          (s.prototype.walker = function () {
            var e = new a(this);
            return e;
          });
        var l = {};
        function u(e) {
          var t,
            r,
            n = l[e];
          if (n) return n;
          for (n = l[e] = [], t = 0; t < 128; t++)
            (r = String.fromCharCode(t)),
              /^[0-9a-z]$/i.test(r)
                ? n.push(r)
                : n.push("%" + ("0" + t.toString(16).toUpperCase()).slice(-2));
          for (t = 0; t < e.length; t++) n[e.charCodeAt(t)] = e[t];
          return n;
        }
        function c(e, t, r) {
          var n,
            i,
            a,
            s,
            o,
            l = "";
          for (
            "string" !== typeof t && ((r = t), (t = c.defaultChars)),
              "undefined" === typeof r && (r = !0),
              o = u(t),
              n = 0,
              i = e.length;
            n < i;
            n++
          )
            if (
              ((a = e.charCodeAt(n)),
              r &&
                37 === a &&
                n + 2 < i &&
                /^[0-9a-f]{2}$/i.test(e.slice(n + 1, n + 3)))
            )
              (l += e.slice(n, n + 3)), (n += 2);
            else if (a < 128) l += o[a];
            else if (a >= 55296 && a <= 57343) {
              if (
                a >= 55296 &&
                a <= 56319 &&
                n + 1 < i &&
                ((s = e.charCodeAt(n + 1)), s >= 56320 && s <= 57343)
              ) {
                (l += encodeURIComponent(e[n] + e[n + 1])), n++;
                continue;
              }
              l += "%EF%BF%BD";
            } else l += encodeURIComponent(e[n]);
          return l;
        }
        (c.defaultChars = ";/?:@&=+$,-_.!~*'()#"),
          (c.componentChars = "-_.!~*'()");
        var d = c,
          p =
            "undefined" !== typeof globalThis
              ? globalThis
              : "undefined" !== typeof window
              ? window
              : "undefined" !== typeof r.g
              ? r.g
              : "undefined" !== typeof self
              ? self
              : {};
        function f(e) {
          return e &&
            e.__esModule &&
            Object.prototype.hasOwnProperty.call(e, "default")
            ? e["default"]
            : e;
        }
        function h(e, t) {
          return (t = { exports: {} }), e(t, t.exports), t.exports;
        }
        function m(e) {
          return (e && e["default"]) || e;
        }
        var b = "Á",
          g = "á",
          y = "Ă",
          k = "ă",
          v = "∾",
          w = "∿",
          x = "∾̳",
          A = "Â",
          C = "â",
          _ = "´",
          D = "А",
          q = "а",
          E = "Æ",
          L = "æ",
          S = "⁡",
          T = "𝔄",
          N = "𝔞",
          R = "À",
          O = "à",
          U = "ℵ",
          F = "ℵ",
          B = "Α",
          M = "α",
          P = "Ā",
          I = "ā",
          z = "⨿",
          j = "&",
          V = "&",
          H = "⩕",
          G = "⩓",
          W = "∧",
          Z = "⩜",
          J = "⩘",
          K = "⩚",
          $ = "∠",
          Y = "⦤",
          X = "∠",
          Q = "⦨",
          ee = "⦩",
          te = "⦪",
          re = "⦫",
          ne = "⦬",
          ie = "⦭",
          ae = "⦮",
          se = "⦯",
          oe = "∡",
          le = "∟",
          ue = "⊾",
          ce = "⦝",
          de = "∢",
          pe = "Å",
          fe = "⍼",
          he = "Ą",
          me = "ą",
          be = "𝔸",
          ge = "𝕒",
          ye = "⩯",
          ke = "≈",
          ve = "⩰",
          we = "≊",
          xe = "≋",
          Ae = "'",
          Ce = "⁡",
          _e = "≈",
          De = "≊",
          qe = "Å",
          Ee = "å",
          Le = "𝒜",
          Se = "𝒶",
          Te = "≔",
          Ne = "*",
          Re = "≈",
          Oe = "≍",
          Ue = "Ã",
          Fe = "ã",
          Be = "Ä",
          Me = "ä",
          Pe = "∳",
          Ie = "⨑",
          ze = "≌",
          je = "϶",
          Ve = "‵",
          He = "∽",
          Ge = "⋍",
          We = "∖",
          Ze = "⫧",
          Je = "⊽",
          Ke = "⌅",
          $e = "⌆",
          Ye = "⌅",
          Xe = "⎵",
          Qe = "⎶",
          et = "≌",
          tt = "Б",
          rt = "б",
          nt = "„",
          it = "∵",
          at = "∵",
          st = "∵",
          ot = "⦰",
          lt = "϶",
          ut = "ℬ",
          ct = "ℬ",
          dt = "Β",
          pt = "β",
          ft = "ℶ",
          ht = "≬",
          mt = "𝔅",
          bt = "𝔟",
          gt = "⋂",
          yt = "◯",
          kt = "⋃",
          vt = "⨀",
          wt = "⨁",
          xt = "⨂",
          At = "⨆",
          Ct = "★",
          _t = "▽",
          Dt = "△",
          qt = "⨄",
          Et = "⋁",
          Lt = "⋀",
          St = "⤍",
          Tt = "⧫",
          Nt = "▪",
          Rt = "▴",
          Ot = "▾",
          Ut = "◂",
          Ft = "▸",
          Bt = "␣",
          Mt = "▒",
          Pt = "░",
          It = "▓",
          zt = "█",
          jt = "=⃥",
          Vt = "≡⃥",
          Ht = "⫭",
          Gt = "⌐",
          Wt = "𝔹",
          Zt = "𝕓",
          Jt = "⊥",
          Kt = "⊥",
          $t = "⋈",
          Yt = "⧉",
          Xt = "┐",
          Qt = "╕",
          er = "╖",
          tr = "╗",
          rr = "┌",
          nr = "╒",
          ir = "╓",
          ar = "╔",
          sr = "─",
          or = "═",
          lr = "┬",
          ur = "╤",
          cr = "╥",
          dr = "╦",
          pr = "┴",
          fr = "╧",
          hr = "╨",
          mr = "╩",
          br = "⊟",
          gr = "⊞",
          yr = "⊠",
          kr = "┘",
          vr = "╛",
          wr = "╜",
          xr = "╝",
          Ar = "└",
          Cr = "╘",
          _r = "╙",
          Dr = "╚",
          qr = "│",
          Er = "║",
          Lr = "┼",
          Sr = "╪",
          Tr = "╫",
          Nr = "╬",
          Rr = "┤",
          Or = "╡",
          Ur = "╢",
          Fr = "╣",
          Br = "├",
          Mr = "╞",
          Pr = "╟",
          Ir = "╠",
          zr = "‵",
          jr = "˘",
          Vr = "˘",
          Hr = "¦",
          Gr = "𝒷",
          Wr = "ℬ",
          Zr = "⁏",
          Jr = "∽",
          Kr = "⋍",
          $r = "⧅",
          Yr = "\\",
          Xr = "⟈",
          Qr = "•",
          en = "•",
          tn = "≎",
          rn = "⪮",
          nn = "≏",
          an = "≎",
          sn = "≏",
          on = "Ć",
          ln = "ć",
          un = "⩄",
          cn = "⩉",
          dn = "⩋",
          pn = "∩",
          fn = "⋒",
          hn = "⩇",
          mn = "⩀",
          bn = "ⅅ",
          gn = "∩︀",
          yn = "⁁",
          kn = "ˇ",
          vn = "ℭ",
          wn = "⩍",
          xn = "Č",
          An = "č",
          Cn = "Ç",
          _n = "ç",
          Dn = "Ĉ",
          qn = "ĉ",
          En = "∰",
          Ln = "⩌",
          Sn = "⩐",
          Tn = "Ċ",
          Nn = "ċ",
          Rn = "¸",
          On = "¸",
          Un = "⦲",
          Fn = "¢",
          Bn = "·",
          Mn = "·",
          Pn = "𝔠",
          In = "ℭ",
          zn = "Ч",
          jn = "ч",
          Vn = "✓",
          Hn = "✓",
          Gn = "Χ",
          Wn = "χ",
          Zn = "ˆ",
          Jn = "≗",
          Kn = "↺",
          $n = "↻",
          Yn = "⊛",
          Xn = "⊚",
          Qn = "⊝",
          ei = "⊙",
          ti = "®",
          ri = "Ⓢ",
          ni = "⊖",
          ii = "⊕",
          ai = "⊗",
          si = "○",
          oi = "⧃",
          li = "≗",
          ui = "⨐",
          ci = "⫯",
          di = "⧂",
          pi = "∲",
          fi = "”",
          hi = "’",
          mi = "♣",
          bi = "♣",
          gi = ":",
          yi = "∷",
          ki = "⩴",
          vi = "≔",
          wi = "≔",
          xi = ",",
          Ai = "@",
          Ci = "∁",
          _i = "∘",
          Di = "∁",
          qi = "ℂ",
          Ei = "≅",
          Li = "⩭",
          Si = "≡",
          Ti = "∮",
          Ni = "∯",
          Ri = "∮",
          Oi = "𝕔",
          Ui = "ℂ",
          Fi = "∐",
          Bi = "∐",
          Mi = "©",
          Pi = "©",
          Ii = "℗",
          zi = "∳",
          ji = "↵",
          Vi = "✗",
          Hi = "⨯",
          Gi = "𝒞",
          Wi = "𝒸",
          Zi = "⫏",
          Ji = "⫑",
          Ki = "⫐",
          $i = "⫒",
          Yi = "⋯",
          Xi = "⤸",
          Qi = "⤵",
          ea = "⋞",
          ta = "⋟",
          ra = "↶",
          na = "⤽",
          ia = "⩈",
          aa = "⩆",
          sa = "≍",
          oa = "∪",
          la = "⋓",
          ua = "⩊",
          ca = "⊍",
          da = "⩅",
          pa = "∪︀",
          fa = "↷",
          ha = "⤼",
          ma = "⋞",
          ba = "⋟",
          ga = "⋎",
          ya = "⋏",
          ka = "¤",
          va = "↶",
          wa = "↷",
          xa = "⋎",
          Aa = "⋏",
          Ca = "∲",
          _a = "∱",
          Da = "⌭",
          qa = "†",
          Ea = "‡",
          La = "ℸ",
          Sa = "↓",
          Ta = "↡",
          Na = "⇓",
          Ra = "‐",
          Oa = "⫤",
          Ua = "⊣",
          Fa = "⤏",
          Ba = "˝",
          Ma = "Ď",
          Pa = "ď",
          Ia = "Д",
          za = "д",
          ja = "‡",
          Va = "⇊",
          Ha = "ⅅ",
          Ga = "ⅆ",
          Wa = "⤑",
          Za = "⩷",
          Ja = "°",
          Ka = "∇",
          $a = "Δ",
          Ya = "δ",
          Xa = "⦱",
          Qa = "⥿",
          es = "𝔇",
          ts = "𝔡",
          rs = "⥥",
          ns = "⇃",
          is = "⇂",
          as = "´",
          ss = "˙",
          os = "˝",
          ls = "`",
          us = "˜",
          cs = "⋄",
          ds = "⋄",
          ps = "⋄",
          fs = "♦",
          hs = "♦",
          ms = "¨",
          bs = "ⅆ",
          gs = "ϝ",
          ys = "⋲",
          ks = "÷",
          vs = "÷",
          ws = "⋇",
          xs = "⋇",
          As = "Ђ",
          Cs = "ђ",
          _s = "⌞",
          Ds = "⌍",
          qs = "$",
          Es = "𝔻",
          Ls = "𝕕",
          Ss = "¨",
          Ts = "˙",
          Ns = "⃜",
          Rs = "≐",
          Os = "≑",
          Us = "≐",
          Fs = "∸",
          Bs = "∔",
          Ms = "⊡",
          Ps = "⌆",
          Is = "∯",
          zs = "¨",
          js = "⇓",
          Vs = "⇐",
          Hs = "⇔",
          Gs = "⫤",
          Ws = "⟸",
          Zs = "⟺",
          Js = "⟹",
          Ks = "⇒",
          $s = "⊨",
          Ys = "⇑",
          Xs = "⇕",
          Qs = "∥",
          eo = "⤓",
          to = "↓",
          ro = "↓",
          no = "⇓",
          io = "⇵",
          ao = "̑",
          so = "⇊",
          oo = "⇃",
          lo = "⇂",
          uo = "⥐",
          co = "⥞",
          po = "⥖",
          fo = "↽",
          ho = "⥟",
          mo = "⥗",
          bo = "⇁",
          go = "↧",
          yo = "⊤",
          ko = "⤐",
          vo = "⌟",
          wo = "⌌",
          xo = "𝒟",
          Ao = "𝒹",
          Co = "Ѕ",
          _o = "ѕ",
          Do = "⧶",
          qo = "Đ",
          Eo = "đ",
          Lo = "⋱",
          So = "▿",
          To = "▾",
          No = "⇵",
          Ro = "⥯",
          Oo = "⦦",
          Uo = "Џ",
          Fo = "џ",
          Bo = "⟿",
          Mo = "É",
          Po = "é",
          Io = "⩮",
          zo = "Ě",
          jo = "ě",
          Vo = "Ê",
          Ho = "ê",
          Go = "≖",
          Wo = "≕",
          Zo = "Э",
          Jo = "э",
          Ko = "⩷",
          $o = "Ė",
          Yo = "ė",
          Xo = "≑",
          Qo = "ⅇ",
          el = "≒",
          tl = "𝔈",
          rl = "𝔢",
          nl = "⪚",
          il = "È",
          al = "è",
          sl = "⪖",
          ol = "⪘",
          ll = "⪙",
          ul = "∈",
          cl = "⏧",
          dl = "ℓ",
          pl = "⪕",
          fl = "⪗",
          hl = "Ē",
          ml = "ē",
          bl = "∅",
          gl = "∅",
          yl = "◻",
          kl = "∅",
          vl = "▫",
          wl = " ",
          xl = " ",
          Al = " ",
          Cl = "Ŋ",
          _l = "ŋ",
          Dl = " ",
          ql = "Ę",
          El = "ę",
          Ll = "𝔼",
          Sl = "𝕖",
          Tl = "⋕",
          Nl = "⧣",
          Rl = "⩱",
          Ol = "ε",
          Ul = "Ε",
          Fl = "ε",
          Bl = "ϵ",
          Ml = "≖",
          Pl = "≕",
          Il = "≂",
          zl = "⪖",
          jl = "⪕",
          Vl = "⩵",
          Hl = "=",
          Gl = "≂",
          Wl = "≟",
          Zl = "⇌",
          Jl = "≡",
          Kl = "⩸",
          $l = "⧥",
          Yl = "⥱",
          Xl = "≓",
          Ql = "ℯ",
          eu = "ℰ",
          tu = "≐",
          ru = "⩳",
          nu = "≂",
          iu = "Η",
          au = "η",
          su = "Ð",
          ou = "ð",
          lu = "Ë",
          uu = "ë",
          cu = "€",
          du = "!",
          pu = "∃",
          fu = "∃",
          hu = "ℰ",
          mu = "ⅇ",
          bu = "ⅇ",
          gu = "≒",
          yu = "Ф",
          ku = "ф",
          vu = "♀",
          wu = "ﬃ",
          xu = "ﬀ",
          Au = "ﬄ",
          Cu = "𝔉",
          _u = "𝔣",
          Du = "ﬁ",
          qu = "◼",
          Eu = "▪",
          Lu = "fj",
          Su = "♭",
          Tu = "ﬂ",
          Nu = "▱",
          Ru = "ƒ",
          Ou = "𝔽",
          Uu = "𝕗",
          Fu = "∀",
          Bu = "∀",
          Mu = "⋔",
          Pu = "⫙",
          Iu = "ℱ",
          zu = "⨍",
          ju = "½",
          Vu = "⅓",
          Hu = "¼",
          Gu = "⅕",
          Wu = "⅙",
          Zu = "⅛",
          Ju = "⅔",
          Ku = "⅖",
          $u = "¾",
          Yu = "⅗",
          Xu = "⅜",
          Qu = "⅘",
          ec = "⅚",
          tc = "⅝",
          rc = "⅞",
          nc = "⁄",
          ic = "⌢",
          ac = "𝒻",
          sc = "ℱ",
          oc = "ǵ",
          lc = "Γ",
          uc = "γ",
          cc = "Ϝ",
          dc = "ϝ",
          pc = "⪆",
          fc = "Ğ",
          hc = "ğ",
          mc = "Ģ",
          bc = "Ĝ",
          gc = "ĝ",
          yc = "Г",
          kc = "г",
          vc = "Ġ",
          wc = "ġ",
          xc = "≥",
          Ac = "≧",
          Cc = "⪌",
          _c = "⋛",
          Dc = "≥",
          qc = "≧",
          Ec = "⩾",
          Lc = "⪩",
          Sc = "⩾",
          Tc = "⪀",
          Nc = "⪂",
          Rc = "⪄",
          Oc = "⋛︀",
          Uc = "⪔",
          Fc = "𝔊",
          Bc = "𝔤",
          Mc = "≫",
          Pc = "⋙",
          Ic = "⋙",
          zc = "ℷ",
          jc = "Ѓ",
          Vc = "ѓ",
          Hc = "⪥",
          Gc = "≷",
          Wc = "⪒",
          Zc = "⪤",
          Jc = "⪊",
          Kc = "⪊",
          $c = "⪈",
          Yc = "≩",
          Xc = "⪈",
          Qc = "≩",
          ed = "⋧",
          td = "𝔾",
          rd = "𝕘",
          nd = "`",
          id = "≥",
          ad = "⋛",
          sd = "≧",
          od = "⪢",
          ld = "≷",
          ud = "⩾",
          cd = "≳",
          dd = "𝒢",
          pd = "ℊ",
          fd = "≳",
          hd = "⪎",
          md = "⪐",
          bd = "⪧",
          gd = "⩺",
          yd = ">",
          kd = ">",
          vd = "≫",
          wd = "⋗",
          xd = "⦕",
          Ad = "⩼",
          Cd = "⪆",
          _d = "⥸",
          Dd = "⋗",
          qd = "⋛",
          Ed = "⪌",
          Ld = "≷",
          Sd = "≳",
          Td = "≩︀",
          Nd = "≩︀",
          Rd = "ˇ",
          Od = " ",
          Ud = "½",
          Fd = "ℋ",
          Bd = "Ъ",
          Md = "ъ",
          Pd = "⥈",
          Id = "↔",
          zd = "⇔",
          jd = "↭",
          Vd = "^",
          Hd = "ℏ",
          Gd = "Ĥ",
          Wd = "ĥ",
          Zd = "♥",
          Jd = "♥",
          Kd = "…",
          $d = "⊹",
          Yd = "𝔥",
          Xd = "ℌ",
          Qd = "ℋ",
          ep = "⤥",
          tp = "⤦",
          rp = "⇿",
          np = "∻",
          ip = "↩",
          ap = "↪",
          sp = "𝕙",
          op = "ℍ",
          lp = "―",
          up = "─",
          cp = "𝒽",
          dp = "ℋ",
          pp = "ℏ",
          fp = "Ħ",
          hp = "ħ",
          mp = "≎",
          bp = "≏",
          gp = "⁃",
          yp = "‐",
          kp = "Í",
          vp = "í",
          wp = "⁣",
          xp = "Î",
          Ap = "î",
          Cp = "И",
          _p = "и",
          Dp = "İ",
          qp = "Е",
          Ep = "е",
          Lp = "¡",
          Sp = "⇔",
          Tp = "𝔦",
          Np = "ℑ",
          Rp = "Ì",
          Op = "ì",
          Up = "ⅈ",
          Fp = "⨌",
          Bp = "∭",
          Mp = "⧜",
          Pp = "℩",
          Ip = "Ĳ",
          zp = "ĳ",
          jp = "Ī",
          Vp = "ī",
          Hp = "ℑ",
          Gp = "ⅈ",
          Wp = "ℐ",
          Zp = "ℑ",
          Jp = "ı",
          Kp = "ℑ",
          $p = "⊷",
          Yp = "Ƶ",
          Xp = "⇒",
          Qp = "℅",
          ef = "∞",
          tf = "⧝",
          rf = "ı",
          nf = "⊺",
          af = "∫",
          sf = "∬",
          of = "ℤ",
          lf = "∫",
          uf = "⊺",
          cf = "⋂",
          df = "⨗",
          pf = "⨼",
          ff = "⁣",
          hf = "⁢",
          mf = "Ё",
          bf = "ё",
          gf = "Į",
          yf = "į",
          kf = "𝕀",
          vf = "𝕚",
          wf = "Ι",
          xf = "ι",
          Af = "⨼",
          Cf = "¿",
          _f = "𝒾",
          Df = "ℐ",
          qf = "∈",
          Ef = "⋵",
          Lf = "⋹",
          Sf = "⋴",
          Tf = "⋳",
          Nf = "∈",
          Rf = "⁢",
          Of = "Ĩ",
          Uf = "ĩ",
          Ff = "І",
          Bf = "і",
          Mf = "Ï",
          Pf = "ï",
          If = "Ĵ",
          zf = "ĵ",
          jf = "Й",
          Vf = "й",
          Hf = "𝔍",
          Gf = "𝔧",
          Wf = "ȷ",
          Zf = "𝕁",
          Jf = "𝕛",
          Kf = "𝒥",
          $f = "𝒿",
          Yf = "Ј",
          Xf = "ј",
          Qf = "Є",
          eh = "є",
          th = "Κ",
          rh = "κ",
          nh = "ϰ",
          ih = "Ķ",
          ah = "ķ",
          sh = "К",
          oh = "к",
          lh = "𝔎",
          uh = "𝔨",
          ch = "ĸ",
          dh = "Х",
          ph = "х",
          fh = "Ќ",
          hh = "ќ",
          mh = "𝕂",
          bh = "𝕜",
          gh = "𝒦",
          yh = "𝓀",
          kh = "⇚",
          vh = "Ĺ",
          wh = "ĺ",
          xh = "⦴",
          Ah = "ℒ",
          Ch = "Λ",
          _h = "λ",
          Dh = "⟨",
          qh = "⟪",
          Eh = "⦑",
          Lh = "⟨",
          Sh = "⪅",
          Th = "ℒ",
          Nh = "«",
          Rh = "⇤",
          Oh = "⤟",
          Uh = "←",
          Fh = "↞",
          Bh = "⇐",
          Mh = "⤝",
          Ph = "↩",
          Ih = "↫",
          zh = "⤹",
          jh = "⥳",
          Vh = "↢",
          Hh = "⤙",
          Gh = "⤛",
          Wh = "⪫",
          Zh = "⪭",
          Jh = "⪭︀",
          Kh = "⤌",
          $h = "⤎",
          Yh = "❲",
          Xh = "{",
          Qh = "[",
          em = "⦋",
          tm = "⦏",
          rm = "⦍",
          nm = "Ľ",
          im = "ľ",
          am = "Ļ",
          sm = "ļ",
          om = "⌈",
          lm = "{",
          um = "Л",
          cm = "л",
          dm = "⤶",
          pm = "“",
          fm = "„",
          hm = "⥧",
          mm = "⥋",
          bm = "↲",
          gm = "≤",
          ym = "≦",
          km = "⟨",
          vm = "⇤",
          wm = "←",
          xm = "←",
          Am = "⇐",
          Cm = "⇆",
          _m = "↢",
          Dm = "⌈",
          qm = "⟦",
          Em = "⥡",
          Lm = "⥙",
          Sm = "⇃",
          Tm = "⌊",
          Nm = "↽",
          Rm = "↼",
          Om = "⇇",
          Um = "↔",
          Fm = "↔",
          Bm = "⇔",
          Mm = "⇆",
          Pm = "⇋",
          Im = "↭",
          zm = "⥎",
          jm = "↤",
          Vm = "⊣",
          Hm = "⥚",
          Gm = "⋋",
          Wm = "⧏",
          Zm = "⊲",
          Jm = "⊴",
          Km = "⥑",
          $m = "⥠",
          Ym = "⥘",
          Xm = "↿",
          Qm = "⥒",
          eb = "↼",
          tb = "⪋",
          rb = "⋚",
          nb = "≤",
          ib = "≦",
          ab = "⩽",
          sb = "⪨",
          ob = "⩽",
          lb = "⩿",
          ub = "⪁",
          cb = "⪃",
          db = "⋚︀",
          pb = "⪓",
          fb = "⪅",
          hb = "⋖",
          mb = "⋚",
          bb = "⪋",
          gb = "⋚",
          yb = "≦",
          kb = "≶",
          vb = "≶",
          wb = "⪡",
          xb = "≲",
          Ab = "⩽",
          Cb = "≲",
          _b = "⥼",
          Db = "⌊",
          qb = "𝔏",
          Eb = "𝔩",
          Lb = "≶",
          Sb = "⪑",
          Tb = "⥢",
          Nb = "↽",
          Rb = "↼",
          Ob = "⥪",
          Ub = "▄",
          Fb = "Љ",
          Bb = "љ",
          Mb = "⇇",
          Pb = "≪",
          Ib = "⋘",
          zb = "⌞",
          jb = "⇚",
          Vb = "⥫",
          Hb = "◺",
          Gb = "Ŀ",
          Wb = "ŀ",
          Zb = "⎰",
          Jb = "⎰",
          Kb = "⪉",
          $b = "⪉",
          Yb = "⪇",
          Xb = "≨",
          Qb = "⪇",
          eg = "≨",
          tg = "⋦",
          rg = "⟬",
          ng = "⇽",
          ig = "⟦",
          ag = "⟵",
          sg = "⟵",
          og = "⟸",
          lg = "⟷",
          ug = "⟷",
          cg = "⟺",
          dg = "⟼",
          pg = "⟶",
          fg = "⟶",
          hg = "⟹",
          mg = "↫",
          bg = "↬",
          gg = "⦅",
          yg = "𝕃",
          kg = "𝕝",
          vg = "⨭",
          wg = "⨴",
          xg = "∗",
          Ag = "_",
          Cg = "↙",
          _g = "↘",
          Dg = "◊",
          qg = "◊",
          Eg = "⧫",
          Lg = "(",
          Sg = "⦓",
          Tg = "⇆",
          Ng = "⌟",
          Rg = "⇋",
          Og = "⥭",
          Ug = "‎",
          Fg = "⊿",
          Bg = "‹",
          Mg = "𝓁",
          Pg = "ℒ",
          Ig = "↰",
          zg = "↰",
          jg = "≲",
          Vg = "⪍",
          Hg = "⪏",
          Gg = "[",
          Wg = "‘",
          Zg = "‚",
          Jg = "Ł",
          Kg = "ł",
          $g = "⪦",
          Yg = "⩹",
          Xg = "<",
          Qg = "<",
          ey = "≪",
          ty = "⋖",
          ry = "⋋",
          ny = "⋉",
          iy = "⥶",
          ay = "⩻",
          sy = "◃",
          oy = "⊴",
          ly = "◂",
          uy = "⦖",
          cy = "⥊",
          dy = "⥦",
          py = "≨︀",
          fy = "≨︀",
          hy = "¯",
          my = "♂",
          by = "✠",
          gy = "✠",
          yy = "↦",
          ky = "↦",
          vy = "↧",
          wy = "↤",
          xy = "↥",
          Ay = "▮",
          Cy = "⨩",
          _y = "М",
          Dy = "м",
          qy = "—",
          Ey = "∺",
          Ly = "∡",
          Sy = " ",
          Ty = "ℳ",
          Ny = "𝔐",
          Ry = "𝔪",
          Oy = "℧",
          Uy = "µ",
          Fy = "*",
          By = "⫰",
          My = "∣",
          Py = "·",
          Iy = "⊟",
          zy = "−",
          jy = "∸",
          Vy = "⨪",
          Hy = "∓",
          Gy = "⫛",
          Wy = "…",
          Zy = "∓",
          Jy = "⊧",
          Ky = "𝕄",
          $y = "𝕞",
          Yy = "∓",
          Xy = "𝓂",
          Qy = "ℳ",
          ek = "∾",
          tk = "Μ",
          rk = "μ",
          nk = "⊸",
          ik = "⊸",
          ak = "∇",
          sk = "Ń",
          ok = "ń",
          lk = "∠⃒",
          uk = "≉",
          ck = "⩰̸",
          dk = "≋̸",
          pk = "ŉ",
          fk = "≉",
          hk = "♮",
          mk = "ℕ",
          bk = "♮",
          gk = " ",
          yk = "≎̸",
          kk = "≏̸",
          vk = "⩃",
          wk = "Ň",
          xk = "ň",
          Ak = "Ņ",
          Ck = "ņ",
          _k = "≇",
          Dk = "⩭̸",
          qk = "⩂",
          Ek = "Н",
          Lk = "н",
          Sk = "–",
          Tk = "⤤",
          Nk = "↗",
          Rk = "⇗",
          Ok = "↗",
          Uk = "≠",
          Fk = "≐̸",
          Bk = "​",
          Mk = "​",
          Pk = "​",
          Ik = "​",
          zk = "≢",
          jk = "⤨",
          Vk = "≂̸",
          Hk = "≫",
          Gk = "≪",
          Wk = "\n",
          Zk = "∄",
          Jk = "∄",
          Kk = "𝔑",
          $k = "𝔫",
          Yk = "≧̸",
          Xk = "≱",
          Qk = "≱",
          ev = "≧̸",
          tv = "⩾̸",
          rv = "⩾̸",
          nv = "⋙̸",
          iv = "≵",
          av = "≫⃒",
          sv = "≯",
          ov = "≯",
          lv = "≫̸",
          uv = "↮",
          cv = "⇎",
          dv = "⫲",
          pv = "∋",
          fv = "⋼",
          hv = "⋺",
          mv = "∋",
          bv = "Њ",
          gv = "њ",
          yv = "↚",
          kv = "⇍",
          vv = "‥",
          wv = "≦̸",
          xv = "≰",
          Av = "↚",
          Cv = "⇍",
          _v = "↮",
          Dv = "⇎",
          qv = "≰",
          Ev = "≦̸",
          Lv = "⩽̸",
          Sv = "⩽̸",
          Tv = "≮",
          Nv = "⋘̸",
          Rv = "≴",
          Ov = "≪⃒",
          Uv = "≮",
          Fv = "⋪",
          Bv = "⋬",
          Mv = "≪̸",
          Pv = "∤",
          Iv = "⁠",
          zv = " ",
          jv = "𝕟",
          Vv = "ℕ",
          Hv = "⫬",
          Gv = "¬",
          Wv = "≢",
          Zv = "≭",
          Jv = "∦",
          Kv = "∉",
          $v = "≠",
          Yv = "≂̸",
          Xv = "∄",
          Qv = "≯",
          ew = "≱",
          tw = "≧̸",
          rw = "≫̸",
          nw = "≹",
          iw = "⩾̸",
          aw = "≵",
          sw = "≎̸",
          ow = "≏̸",
          lw = "∉",
          uw = "⋵̸",
          cw = "⋹̸",
          dw = "∉",
          pw = "⋷",
          fw = "⋶",
          hw = "⧏̸",
          mw = "⋪",
          bw = "⋬",
          gw = "≮",
          yw = "≰",
          kw = "≸",
          vw = "≪̸",
          ww = "⩽̸",
          xw = "≴",
          Aw = "⪢̸",
          Cw = "⪡̸",
          _w = "∌",
          Dw = "∌",
          qw = "⋾",
          Ew = "⋽",
          Lw = "⊀",
          Sw = "⪯̸",
          Tw = "⋠",
          Nw = "∌",
          Rw = "⧐̸",
          Ow = "⋫",
          Uw = "⋭",
          Fw = "⊏̸",
          Bw = "⋢",
          Mw = "⊐̸",
          Pw = "⋣",
          Iw = "⊂⃒",
          zw = "⊈",
          jw = "⊁",
          Vw = "⪰̸",
          Hw = "⋡",
          Gw = "≿̸",
          Ww = "⊃⃒",
          Zw = "⊉",
          Jw = "≁",
          Kw = "≄",
          $w = "≇",
          Yw = "≉",
          Xw = "∤",
          Qw = "∦",
          ex = "∦",
          tx = "⫽⃥",
          rx = "∂̸",
          nx = "⨔",
          ix = "⊀",
          ax = "⋠",
          sx = "⊀",
          ox = "⪯̸",
          lx = "⪯̸",
          ux = "⤳̸",
          cx = "↛",
          dx = "⇏",
          px = "↝̸",
          fx = "↛",
          hx = "⇏",
          mx = "⋫",
          bx = "⋭",
          gx = "⊁",
          yx = "⋡",
          kx = "⪰̸",
          vx = "𝒩",
          wx = "𝓃",
          xx = "∤",
          Ax = "∦",
          Cx = "≁",
          _x = "≄",
          Dx = "≄",
          qx = "∤",
          Ex = "∦",
          Lx = "⋢",
          Sx = "⋣",
          Tx = "⊄",
          Nx = "⫅̸",
          Rx = "⊈",
          Ox = "⊂⃒",
          Ux = "⊈",
          Fx = "⫅̸",
          Bx = "⊁",
          Mx = "⪰̸",
          Px = "⊅",
          Ix = "⫆̸",
          zx = "⊉",
          jx = "⊃⃒",
          Vx = "⊉",
          Hx = "⫆̸",
          Gx = "≹",
          Wx = "Ñ",
          Zx = "ñ",
          Jx = "≸",
          Kx = "⋪",
          $x = "⋬",
          Yx = "⋫",
          Xx = "⋭",
          Qx = "Ν",
          eA = "ν",
          tA = "#",
          rA = "№",
          nA = " ",
          iA = "≍⃒",
          aA = "⊬",
          sA = "⊭",
          oA = "⊮",
          lA = "⊯",
          uA = "≥⃒",
          cA = ">⃒",
          dA = "⤄",
          pA = "⧞",
          fA = "⤂",
          hA = "≤⃒",
          mA = "<⃒",
          bA = "⊴⃒",
          gA = "⤃",
          yA = "⊵⃒",
          kA = "∼⃒",
          vA = "⤣",
          wA = "↖",
          xA = "⇖",
          AA = "↖",
          CA = "⤧",
          _A = "Ó",
          DA = "ó",
          qA = "⊛",
          EA = "Ô",
          LA = "ô",
          SA = "⊚",
          TA = "О",
          NA = "о",
          RA = "⊝",
          OA = "Ő",
          UA = "ő",
          FA = "⨸",
          BA = "⊙",
          MA = "⦼",
          PA = "Œ",
          IA = "œ",
          zA = "⦿",
          jA = "𝔒",
          VA = "𝔬",
          HA = "˛",
          GA = "Ò",
          WA = "ò",
          ZA = "⧁",
          JA = "⦵",
          KA = "Ω",
          $A = "∮",
          YA = "↺",
          XA = "⦾",
          QA = "⦻",
          eC = "‾",
          tC = "⧀",
          rC = "Ō",
          nC = "ō",
          iC = "Ω",
          aC = "ω",
          sC = "Ο",
          oC = "ο",
          lC = "⦶",
          uC = "⊖",
          cC = "𝕆",
          dC = "𝕠",
          pC = "⦷",
          fC = "“",
          hC = "‘",
          mC = "⦹",
          bC = "⊕",
          gC = "↻",
          yC = "⩔",
          kC = "∨",
          vC = "⩝",
          wC = "ℴ",
          xC = "ℴ",
          AC = "ª",
          CC = "º",
          _C = "⊶",
          DC = "⩖",
          qC = "⩗",
          EC = "⩛",
          LC = "Ⓢ",
          SC = "𝒪",
          TC = "ℴ",
          NC = "Ø",
          RC = "ø",
          OC = "⊘",
          UC = "Õ",
          FC = "õ",
          BC = "⨶",
          MC = "⨷",
          PC = "⊗",
          IC = "Ö",
          zC = "ö",
          jC = "⌽",
          VC = "‾",
          HC = "⏞",
          GC = "⎴",
          WC = "⏜",
          ZC = "¶",
          JC = "∥",
          KC = "∥",
          $C = "⫳",
          YC = "⫽",
          XC = "∂",
          QC = "∂",
          e_ = "П",
          t_ = "п",
          r_ = "%",
          n_ = ".",
          i_ = "‰",
          a_ = "⊥",
          s_ = "‱",
          o_ = "𝔓",
          l_ = "𝔭",
          u_ = "Φ",
          c_ = "φ",
          d_ = "ϕ",
          p_ = "ℳ",
          f_ = "☎",
          h_ = "Π",
          m_ = "π",
          b_ = "⋔",
          g_ = "ϖ",
          y_ = "ℏ",
          k_ = "ℎ",
          v_ = "ℏ",
          w_ = "⨣",
          x_ = "⊞",
          A_ = "⨢",
          C_ = "+",
          __ = "∔",
          D_ = "⨥",
          q_ = "⩲",
          E_ = "±",
          L_ = "±",
          S_ = "⨦",
          T_ = "⨧",
          N_ = "±",
          R_ = "ℌ",
          O_ = "⨕",
          U_ = "𝕡",
          F_ = "ℙ",
          B_ = "£",
          M_ = "⪷",
          P_ = "⪻",
          I_ = "≺",
          z_ = "≼",
          j_ = "⪷",
          V_ = "≺",
          H_ = "≼",
          G_ = "≺",
          W_ = "⪯",
          Z_ = "≼",
          J_ = "≾",
          K_ = "⪯",
          $_ = "⪹",
          Y_ = "⪵",
          X_ = "⋨",
          Q_ = "⪯",
          eD = "⪳",
          tD = "≾",
          rD = "′",
          nD = "″",
          iD = "ℙ",
          aD = "⪹",
          sD = "⪵",
          oD = "⋨",
          lD = "∏",
          uD = "∏",
          cD = "⌮",
          dD = "⌒",
          pD = "⌓",
          fD = "∝",
          hD = "∝",
          mD = "∷",
          bD = "∝",
          gD = "≾",
          yD = "⊰",
          kD = "𝒫",
          vD = "𝓅",
          wD = "Ψ",
          xD = "ψ",
          AD = " ",
          CD = "𝔔",
          _D = "𝔮",
          DD = "⨌",
          qD = "𝕢",
          ED = "ℚ",
          LD = "⁗",
          SD = "𝒬",
          TD = "𝓆",
          ND = "ℍ",
          RD = "⨖",
          OD = "?",
          UD = "≟",
          FD = '"',
          BD = '"',
          MD = "⇛",
          PD = "∽̱",
          ID = "Ŕ",
          zD = "ŕ",
          jD = "√",
          VD = "⦳",
          HD = "⟩",
          GD = "⟫",
          WD = "⦒",
          ZD = "⦥",
          JD = "⟩",
          KD = "»",
          $D = "⥵",
          YD = "⇥",
          XD = "⤠",
          QD = "⤳",
          eq = "→",
          tq = "↠",
          rq = "⇒",
          nq = "⤞",
          iq = "↪",
          aq = "↬",
          sq = "⥅",
          oq = "⥴",
          lq = "⤖",
          uq = "↣",
          cq = "↝",
          dq = "⤚",
          pq = "⤜",
          fq = "∶",
          hq = "ℚ",
          mq = "⤍",
          bq = "⤏",
          gq = "⤐",
          yq = "❳",
          kq = "}",
          vq = "]",
          wq = "⦌",
          xq = "⦎",
          Aq = "⦐",
          Cq = "Ř",
          _q = "ř",
          Dq = "Ŗ",
          qq = "ŗ",
          Eq = "⌉",
          Lq = "}",
          Sq = "Р",
          Tq = "р",
          Nq = "⤷",
          Rq = "⥩",
          Oq = "”",
          Uq = "”",
          Fq = "↳",
          Bq = "ℜ",
          Mq = "ℛ",
          Pq = "ℜ",
          Iq = "ℝ",
          zq = "ℜ",
          jq = "▭",
          Vq = "®",
          Hq = "®",
          Gq = "∋",
          Wq = "⇋",
          Zq = "⥯",
          Jq = "⥽",
          Kq = "⌋",
          $q = "𝔯",
          Yq = "ℜ",
          Xq = "⥤",
          Qq = "⇁",
          eE = "⇀",
          tE = "⥬",
          rE = "Ρ",
          nE = "ρ",
          iE = "ϱ",
          aE = "⟩",
          sE = "⇥",
          oE = "→",
          lE = "→",
          uE = "⇒",
          cE = "⇄",
          dE = "↣",
          pE = "⌉",
          fE = "⟧",
          hE = "⥝",
          mE = "⥕",
          bE = "⇂",
          gE = "⌋",
          yE = "⇁",
          kE = "⇀",
          vE = "⇄",
          wE = "⇌",
          xE = "⇉",
          AE = "↝",
          CE = "↦",
          _E = "⊢",
          DE = "⥛",
          qE = "⋌",
          EE = "⧐",
          LE = "⊳",
          SE = "⊵",
          TE = "⥏",
          NE = "⥜",
          RE = "⥔",
          OE = "↾",
          UE = "⥓",
          FE = "⇀",
          BE = "˚",
          ME = "≓",
          PE = "⇄",
          IE = "⇌",
          zE = "‏",
          jE = "⎱",
          VE = "⎱",
          HE = "⫮",
          GE = "⟭",
          WE = "⇾",
          ZE = "⟧",
          JE = "⦆",
          KE = "𝕣",
          $E = "ℝ",
          YE = "⨮",
          XE = "⨵",
          QE = "⥰",
          eL = ")",
          tL = "⦔",
          rL = "⨒",
          nL = "⇉",
          iL = "⇛",
          aL = "›",
          sL = "𝓇",
          oL = "ℛ",
          lL = "↱",
          uL = "↱",
          cL = "]",
          dL = "’",
          pL = "’",
          fL = "⋌",
          hL = "⋊",
          mL = "▹",
          bL = "⊵",
          gL = "▸",
          yL = "⧎",
          kL = "⧴",
          vL = "⥨",
          wL = "℞",
          xL = "Ś",
          AL = "ś",
          CL = "‚",
          _L = "⪸",
          DL = "Š",
          qL = "š",
          EL = "⪼",
          LL = "≻",
          SL = "≽",
          TL = "⪰",
          NL = "⪴",
          RL = "Ş",
          OL = "ş",
          UL = "Ŝ",
          FL = "ŝ",
          BL = "⪺",
          ML = "⪶",
          PL = "⋩",
          IL = "⨓",
          zL = "≿",
          jL = "С",
          VL = "с",
          HL = "⊡",
          GL = "⋅",
          WL = "⩦",
          ZL = "⤥",
          JL = "↘",
          KL = "⇘",
          $L = "↘",
          YL = "§",
          XL = ";",
          QL = "⤩",
          eS = "∖",
          tS = "∖",
          rS = "✶",
          nS = "𝔖",
          iS = "𝔰",
          aS = "⌢",
          sS = "♯",
          oS = "Щ",
          lS = "щ",
          uS = "Ш",
          cS = "ш",
          dS = "↓",
          pS = "←",
          fS = "∣",
          hS = "∥",
          mS = "→",
          bS = "↑",
          gS = "­",
          yS = "Σ",
          kS = "σ",
          vS = "ς",
          wS = "ς",
          xS = "∼",
          AS = "⩪",
          CS = "≃",
          _S = "≃",
          DS = "⪞",
          qS = "⪠",
          ES = "⪝",
          LS = "⪟",
          SS = "≆",
          TS = "⨤",
          NS = "⥲",
          RS = "←",
          OS = "∘",
          US = "∖",
          FS = "⨳",
          BS = "⧤",
          MS = "∣",
          PS = "⌣",
          IS = "⪪",
          zS = "⪬",
          jS = "⪬︀",
          VS = "Ь",
          HS = "ь",
          GS = "⌿",
          WS = "⧄",
          ZS = "/",
          JS = "𝕊",
          KS = "𝕤",
          $S = "♠",
          YS = "♠",
          XS = "∥",
          QS = "⊓",
          eT = "⊓︀",
          tT = "⊔",
          rT = "⊔︀",
          nT = "√",
          iT = "⊏",
          aT = "⊑",
          sT = "⊏",
          oT = "⊑",
          lT = "⊐",
          uT = "⊒",
          cT = "⊐",
          dT = "⊒",
          pT = "□",
          fT = "□",
          hT = "⊓",
          mT = "⊏",
          bT = "⊑",
          gT = "⊐",
          yT = "⊒",
          kT = "⊔",
          vT = "▪",
          wT = "□",
          xT = "▪",
          AT = "→",
          CT = "𝒮",
          _T = "𝓈",
          DT = "∖",
          qT = "⌣",
          ET = "⋆",
          LT = "⋆",
          ST = "☆",
          TT = "★",
          NT = "ϵ",
          RT = "ϕ",
          OT = "¯",
          UT = "⊂",
          FT = "⋐",
          BT = "⪽",
          MT = "⫅",
          PT = "⊆",
          IT = "⫃",
          zT = "⫁",
          jT = "⫋",
          VT = "⊊",
          HT = "⪿",
          GT = "⥹",
          WT = "⊂",
          ZT = "⋐",
          JT = "⊆",
          KT = "⫅",
          $T = "⊆",
          YT = "⊊",
          XT = "⫋",
          QT = "⫇",
          eN = "⫕",
          tN = "⫓",
          rN = "⪸",
          nN = "≻",
          iN = "≽",
          aN = "≻",
          sN = "⪰",
          oN = "≽",
          lN = "≿",
          uN = "⪰",
          cN = "⪺",
          dN = "⪶",
          pN = "⋩",
          fN = "≿",
          hN = "∋",
          mN = "∑",
          bN = "∑",
          gN = "♪",
          yN = "¹",
          kN = "²",
          vN = "³",
          wN = "⊃",
          xN = "⋑",
          AN = "⪾",
          CN = "⫘",
          _N = "⫆",
          DN = "⊇",
          qN = "⫄",
          EN = "⊃",
          LN = "⊇",
          SN = "⟉",
          TN = "⫗",
          NN = "⥻",
          RN = "⫂",
          ON = "⫌",
          UN = "⊋",
          FN = "⫀",
          BN = "⊃",
          MN = "⋑",
          PN = "⊇",
          IN = "⫆",
          zN = "⊋",
          jN = "⫌",
          VN = "⫈",
          HN = "⫔",
          GN = "⫖",
          WN = "⤦",
          ZN = "↙",
          JN = "⇙",
          KN = "↙",
          $N = "⤪",
          YN = "ß",
          XN = "\t",
          QN = "⌖",
          eR = "Τ",
          tR = "τ",
          rR = "⎴",
          nR = "Ť",
          iR = "ť",
          aR = "Ţ",
          sR = "ţ",
          oR = "Т",
          lR = "т",
          uR = "⃛",
          cR = "⌕",
          dR = "𝔗",
          pR = "𝔱",
          fR = "∴",
          hR = "∴",
          mR = "∴",
          bR = "Θ",
          gR = "θ",
          yR = "ϑ",
          kR = "ϑ",
          vR = "≈",
          wR = "∼",
          xR = "  ",
          AR = " ",
          CR = " ",
          _R = "≈",
          DR = "∼",
          qR = "Þ",
          ER = "þ",
          LR = "˜",
          SR = "∼",
          TR = "≃",
          NR = "≅",
          RR = "≈",
          OR = "⨱",
          UR = "⊠",
          FR = "×",
          BR = "⨰",
          MR = "∭",
          PR = "⤨",
          IR = "⌶",
          zR = "⫱",
          jR = "⊤",
          VR = "𝕋",
          HR = "𝕥",
          GR = "⫚",
          WR = "⤩",
          ZR = "‴",
          JR = "™",
          KR = "™",
          $R = "▵",
          YR = "▿",
          XR = "◃",
          QR = "⊴",
          eO = "≜",
          tO = "▹",
          rO = "⊵",
          nO = "◬",
          iO = "≜",
          aO = "⨺",
          sO = "⃛",
          oO = "⨹",
          lO = "⧍",
          uO = "⨻",
          cO = "⏢",
          dO = "𝒯",
          pO = "𝓉",
          fO = "Ц",
          hO = "ц",
          mO = "Ћ",
          bO = "ћ",
          gO = "Ŧ",
          yO = "ŧ",
          kO = "≬",
          vO = "↞",
          wO = "↠",
          xO = "Ú",
          AO = "ú",
          CO = "↑",
          _O = "↟",
          DO = "⇑",
          qO = "⥉",
          EO = "Ў",
          LO = "ў",
          SO = "Ŭ",
          TO = "ŭ",
          NO = "Û",
          RO = "û",
          OO = "У",
          UO = "у",
          FO = "⇅",
          BO = "Ű",
          MO = "ű",
          PO = "⥮",
          IO = "⥾",
          zO = "𝔘",
          jO = "𝔲",
          VO = "Ù",
          HO = "ù",
          GO = "⥣",
          WO = "↿",
          ZO = "↾",
          JO = "▀",
          KO = "⌜",
          $O = "⌜",
          YO = "⌏",
          XO = "◸",
          QO = "Ū",
          eU = "ū",
          tU = "¨",
          rU = "_",
          nU = "⏟",
          iU = "⎵",
          aU = "⏝",
          sU = "⋃",
          oU = "⊎",
          lU = "Ų",
          uU = "ų",
          cU = "𝕌",
          dU = "𝕦",
          pU = "⤒",
          fU = "↑",
          hU = "↑",
          mU = "⇑",
          bU = "⇅",
          gU = "↕",
          yU = "↕",
          kU = "⇕",
          vU = "⥮",
          wU = "↿",
          xU = "↾",
          AU = "⊎",
          CU = "↖",
          _U = "↗",
          DU = "υ",
          qU = "ϒ",
          EU = "ϒ",
          LU = "Υ",
          SU = "υ",
          TU = "↥",
          NU = "⊥",
          RU = "⇈",
          OU = "⌝",
          UU = "⌝",
          FU = "⌎",
          BU = "Ů",
          MU = "ů",
          PU = "◹",
          IU = "𝒰",
          zU = "𝓊",
          jU = "⋰",
          VU = "Ũ",
          HU = "ũ",
          GU = "▵",
          WU = "▴",
          ZU = "⇈",
          JU = "Ü",
          KU = "ü",
          $U = "⦧",
          YU = "⦜",
          XU = "ϵ",
          QU = "ϰ",
          eF = "∅",
          tF = "ϕ",
          rF = "ϖ",
          nF = "∝",
          iF = "↕",
          aF = "⇕",
          sF = "ϱ",
          oF = "ς",
          lF = "⊊︀",
          uF = "⫋︀",
          cF = "⊋︀",
          dF = "⫌︀",
          pF = "ϑ",
          fF = "⊲",
          hF = "⊳",
          mF = "⫨",
          bF = "⫫",
          gF = "⫩",
          yF = "В",
          kF = "в",
          vF = "⊢",
          wF = "⊨",
          xF = "⊩",
          AF = "⊫",
          CF = "⫦",
          _F = "⊻",
          DF = "∨",
          qF = "⋁",
          EF = "≚",
          LF = "⋮",
          SF = "|",
          TF = "‖",
          NF = "|",
          RF = "‖",
          OF = "∣",
          UF = "|",
          FF = "❘",
          BF = "≀",
          MF = " ",
          PF = "𝔙",
          IF = "𝔳",
          zF = "⊲",
          jF = "⊂⃒",
          VF = "⊃⃒",
          HF = "𝕍",
          GF = "𝕧",
          WF = "∝",
          ZF = "⊳",
          JF = "𝒱",
          KF = "𝓋",
          $F = "⫋︀",
          YF = "⊊︀",
          XF = "⫌︀",
          QF = "⊋︀",
          eB = "⊪",
          tB = "⦚",
          rB = "Ŵ",
          nB = "ŵ",
          iB = "⩟",
          aB = "∧",
          sB = "⋀",
          oB = "≙",
          lB = "℘",
          uB = "𝔚",
          cB = "𝔴",
          dB = "𝕎",
          pB = "𝕨",
          fB = "℘",
          hB = "≀",
          mB = "≀",
          bB = "𝒲",
          gB = "𝓌",
          yB = "⋂",
          kB = "◯",
          vB = "⋃",
          wB = "▽",
          xB = "𝔛",
          AB = "𝔵",
          CB = "⟷",
          _B = "⟺",
          DB = "Ξ",
          qB = "ξ",
          EB = "⟵",
          LB = "⟸",
          SB = "⟼",
          TB = "⋻",
          NB = "⨀",
          RB = "𝕏",
          OB = "𝕩",
          UB = "⨁",
          FB = "⨂",
          BB = "⟶",
          MB = "⟹",
          PB = "𝒳",
          IB = "𝓍",
          zB = "⨆",
          jB = "⨄",
          VB = "△",
          HB = "⋁",
          GB = "⋀",
          WB = "Ý",
          ZB = "ý",
          JB = "Я",
          KB = "я",
          $B = "Ŷ",
          YB = "ŷ",
          XB = "Ы",
          QB = "ы",
          eM = "¥",
          tM = "𝔜",
          rM = "𝔶",
          nM = "Ї",
          iM = "ї",
          aM = "𝕐",
          sM = "𝕪",
          oM = "𝒴",
          lM = "𝓎",
          uM = "Ю",
          cM = "ю",
          dM = "ÿ",
          pM = "Ÿ",
          fM = "Ź",
          hM = "ź",
          mM = "Ž",
          bM = "ž",
          gM = "З",
          yM = "з",
          kM = "Ż",
          vM = "ż",
          wM = "ℨ",
          xM = "​",
          AM = "Ζ",
          CM = "ζ",
          _M = "𝔷",
          DM = "ℨ",
          qM = "Ж",
          EM = "ж",
          LM = "⇝",
          SM = "𝕫",
          TM = "ℤ",
          NM = "𝒵",
          RM = "𝓏",
          OM = "‍",
          UM = "‌",
          FM = {
            Aacute: b,
            aacute: g,
            Abreve: y,
            abreve: k,
            ac: v,
            acd: w,
            acE: x,
            Acirc: A,
            acirc: C,
            acute: _,
            Acy: D,
            acy: q,
            AElig: E,
            aelig: L,
            af: S,
            Afr: T,
            afr: N,
            Agrave: R,
            agrave: O,
            alefsym: U,
            aleph: F,
            Alpha: B,
            alpha: M,
            Amacr: P,
            amacr: I,
            amalg: z,
            amp: j,
            AMP: V,
            andand: H,
            And: G,
            and: W,
            andd: Z,
            andslope: J,
            andv: K,
            ang: $,
            ange: Y,
            angle: X,
            angmsdaa: Q,
            angmsdab: ee,
            angmsdac: te,
            angmsdad: re,
            angmsdae: ne,
            angmsdaf: ie,
            angmsdag: ae,
            angmsdah: se,
            angmsd: oe,
            angrt: le,
            angrtvb: ue,
            angrtvbd: ce,
            angsph: de,
            angst: pe,
            angzarr: fe,
            Aogon: he,
            aogon: me,
            Aopf: be,
            aopf: ge,
            apacir: ye,
            ap: ke,
            apE: ve,
            ape: we,
            apid: xe,
            apos: Ae,
            ApplyFunction: Ce,
            approx: _e,
            approxeq: De,
            Aring: qe,
            aring: Ee,
            Ascr: Le,
            ascr: Se,
            Assign: Te,
            ast: Ne,
            asymp: Re,
            asympeq: Oe,
            Atilde: Ue,
            atilde: Fe,
            Auml: Be,
            auml: Me,
            awconint: Pe,
            awint: Ie,
            backcong: ze,
            backepsilon: je,
            backprime: Ve,
            backsim: He,
            backsimeq: Ge,
            Backslash: We,
            Barv: Ze,
            barvee: Je,
            barwed: Ke,
            Barwed: $e,
            barwedge: Ye,
            bbrk: Xe,
            bbrktbrk: Qe,
            bcong: et,
            Bcy: tt,
            bcy: rt,
            bdquo: nt,
            becaus: it,
            because: at,
            Because: st,
            bemptyv: ot,
            bepsi: lt,
            bernou: ut,
            Bernoullis: ct,
            Beta: dt,
            beta: pt,
            beth: ft,
            between: ht,
            Bfr: mt,
            bfr: bt,
            bigcap: gt,
            bigcirc: yt,
            bigcup: kt,
            bigodot: vt,
            bigoplus: wt,
            bigotimes: xt,
            bigsqcup: At,
            bigstar: Ct,
            bigtriangledown: _t,
            bigtriangleup: Dt,
            biguplus: qt,
            bigvee: Et,
            bigwedge: Lt,
            bkarow: St,
            blacklozenge: Tt,
            blacksquare: Nt,
            blacktriangle: Rt,
            blacktriangledown: Ot,
            blacktriangleleft: Ut,
            blacktriangleright: Ft,
            blank: Bt,
            blk12: Mt,
            blk14: Pt,
            blk34: It,
            block: zt,
            bne: jt,
            bnequiv: Vt,
            bNot: Ht,
            bnot: Gt,
            Bopf: Wt,
            bopf: Zt,
            bot: Jt,
            bottom: Kt,
            bowtie: $t,
            boxbox: Yt,
            boxdl: Xt,
            boxdL: Qt,
            boxDl: er,
            boxDL: tr,
            boxdr: rr,
            boxdR: nr,
            boxDr: ir,
            boxDR: ar,
            boxh: sr,
            boxH: or,
            boxhd: lr,
            boxHd: ur,
            boxhD: cr,
            boxHD: dr,
            boxhu: pr,
            boxHu: fr,
            boxhU: hr,
            boxHU: mr,
            boxminus: br,
            boxplus: gr,
            boxtimes: yr,
            boxul: kr,
            boxuL: vr,
            boxUl: wr,
            boxUL: xr,
            boxur: Ar,
            boxuR: Cr,
            boxUr: _r,
            boxUR: Dr,
            boxv: qr,
            boxV: Er,
            boxvh: Lr,
            boxvH: Sr,
            boxVh: Tr,
            boxVH: Nr,
            boxvl: Rr,
            boxvL: Or,
            boxVl: Ur,
            boxVL: Fr,
            boxvr: Br,
            boxvR: Mr,
            boxVr: Pr,
            boxVR: Ir,
            bprime: zr,
            breve: jr,
            Breve: Vr,
            brvbar: Hr,
            bscr: Gr,
            Bscr: Wr,
            bsemi: Zr,
            bsim: Jr,
            bsime: Kr,
            bsolb: $r,
            bsol: Yr,
            bsolhsub: Xr,
            bull: Qr,
            bullet: en,
            bump: tn,
            bumpE: rn,
            bumpe: nn,
            Bumpeq: an,
            bumpeq: sn,
            Cacute: on,
            cacute: ln,
            capand: un,
            capbrcup: cn,
            capcap: dn,
            cap: pn,
            Cap: fn,
            capcup: hn,
            capdot: mn,
            CapitalDifferentialD: bn,
            caps: gn,
            caret: yn,
            caron: kn,
            Cayleys: vn,
            ccaps: wn,
            Ccaron: xn,
            ccaron: An,
            Ccedil: Cn,
            ccedil: _n,
            Ccirc: Dn,
            ccirc: qn,
            Cconint: En,
            ccups: Ln,
            ccupssm: Sn,
            Cdot: Tn,
            cdot: Nn,
            cedil: Rn,
            Cedilla: On,
            cemptyv: Un,
            cent: Fn,
            centerdot: Bn,
            CenterDot: Mn,
            cfr: Pn,
            Cfr: In,
            CHcy: zn,
            chcy: jn,
            check: Vn,
            checkmark: Hn,
            Chi: Gn,
            chi: Wn,
            circ: Zn,
            circeq: Jn,
            circlearrowleft: Kn,
            circlearrowright: $n,
            circledast: Yn,
            circledcirc: Xn,
            circleddash: Qn,
            CircleDot: ei,
            circledR: ti,
            circledS: ri,
            CircleMinus: ni,
            CirclePlus: ii,
            CircleTimes: ai,
            cir: si,
            cirE: oi,
            cire: li,
            cirfnint: ui,
            cirmid: ci,
            cirscir: di,
            ClockwiseContourIntegral: pi,
            CloseCurlyDoubleQuote: fi,
            CloseCurlyQuote: hi,
            clubs: mi,
            clubsuit: bi,
            colon: gi,
            Colon: yi,
            Colone: ki,
            colone: vi,
            coloneq: wi,
            comma: xi,
            commat: Ai,
            comp: Ci,
            compfn: _i,
            complement: Di,
            complexes: qi,
            cong: Ei,
            congdot: Li,
            Congruent: Si,
            conint: Ti,
            Conint: Ni,
            ContourIntegral: Ri,
            copf: Oi,
            Copf: Ui,
            coprod: Fi,
            Coproduct: Bi,
            copy: Mi,
            COPY: Pi,
            copysr: Ii,
            CounterClockwiseContourIntegral: zi,
            crarr: ji,
            cross: Vi,
            Cross: Hi,
            Cscr: Gi,
            cscr: Wi,
            csub: Zi,
            csube: Ji,
            csup: Ki,
            csupe: $i,
            ctdot: Yi,
            cudarrl: Xi,
            cudarrr: Qi,
            cuepr: ea,
            cuesc: ta,
            cularr: ra,
            cularrp: na,
            cupbrcap: ia,
            cupcap: aa,
            CupCap: sa,
            cup: oa,
            Cup: la,
            cupcup: ua,
            cupdot: ca,
            cupor: da,
            cups: pa,
            curarr: fa,
            curarrm: ha,
            curlyeqprec: ma,
            curlyeqsucc: ba,
            curlyvee: ga,
            curlywedge: ya,
            curren: ka,
            curvearrowleft: va,
            curvearrowright: wa,
            cuvee: xa,
            cuwed: Aa,
            cwconint: Ca,
            cwint: _a,
            cylcty: Da,
            dagger: qa,
            Dagger: Ea,
            daleth: La,
            darr: Sa,
            Darr: Ta,
            dArr: Na,
            dash: Ra,
            Dashv: Oa,
            dashv: Ua,
            dbkarow: Fa,
            dblac: Ba,
            Dcaron: Ma,
            dcaron: Pa,
            Dcy: Ia,
            dcy: za,
            ddagger: ja,
            ddarr: Va,
            DD: Ha,
            dd: Ga,
            DDotrahd: Wa,
            ddotseq: Za,
            deg: Ja,
            Del: Ka,
            Delta: $a,
            delta: Ya,
            demptyv: Xa,
            dfisht: Qa,
            Dfr: es,
            dfr: ts,
            dHar: rs,
            dharl: ns,
            dharr: is,
            DiacriticalAcute: as,
            DiacriticalDot: ss,
            DiacriticalDoubleAcute: os,
            DiacriticalGrave: ls,
            DiacriticalTilde: us,
            diam: cs,
            diamond: ds,
            Diamond: ps,
            diamondsuit: fs,
            diams: hs,
            die: ms,
            DifferentialD: bs,
            digamma: gs,
            disin: ys,
            div: ks,
            divide: vs,
            divideontimes: ws,
            divonx: xs,
            DJcy: As,
            djcy: Cs,
            dlcorn: _s,
            dlcrop: Ds,
            dollar: qs,
            Dopf: Es,
            dopf: Ls,
            Dot: Ss,
            dot: Ts,
            DotDot: Ns,
            doteq: Rs,
            doteqdot: Os,
            DotEqual: Us,
            dotminus: Fs,
            dotplus: Bs,
            dotsquare: Ms,
            doublebarwedge: Ps,
            DoubleContourIntegral: Is,
            DoubleDot: zs,
            DoubleDownArrow: js,
            DoubleLeftArrow: Vs,
            DoubleLeftRightArrow: Hs,
            DoubleLeftTee: Gs,
            DoubleLongLeftArrow: Ws,
            DoubleLongLeftRightArrow: Zs,
            DoubleLongRightArrow: Js,
            DoubleRightArrow: Ks,
            DoubleRightTee: $s,
            DoubleUpArrow: Ys,
            DoubleUpDownArrow: Xs,
            DoubleVerticalBar: Qs,
            DownArrowBar: eo,
            downarrow: to,
            DownArrow: ro,
            Downarrow: no,
            DownArrowUpArrow: io,
            DownBreve: ao,
            downdownarrows: so,
            downharpoonleft: oo,
            downharpoonright: lo,
            DownLeftRightVector: uo,
            DownLeftTeeVector: co,
            DownLeftVectorBar: po,
            DownLeftVector: fo,
            DownRightTeeVector: ho,
            DownRightVectorBar: mo,
            DownRightVector: bo,
            DownTeeArrow: go,
            DownTee: yo,
            drbkarow: ko,
            drcorn: vo,
            drcrop: wo,
            Dscr: xo,
            dscr: Ao,
            DScy: Co,
            dscy: _o,
            dsol: Do,
            Dstrok: qo,
            dstrok: Eo,
            dtdot: Lo,
            dtri: So,
            dtrif: To,
            duarr: No,
            duhar: Ro,
            dwangle: Oo,
            DZcy: Uo,
            dzcy: Fo,
            dzigrarr: Bo,
            Eacute: Mo,
            eacute: Po,
            easter: Io,
            Ecaron: zo,
            ecaron: jo,
            Ecirc: Vo,
            ecirc: Ho,
            ecir: Go,
            ecolon: Wo,
            Ecy: Zo,
            ecy: Jo,
            eDDot: Ko,
            Edot: $o,
            edot: Yo,
            eDot: Xo,
            ee: Qo,
            efDot: el,
            Efr: tl,
            efr: rl,
            eg: nl,
            Egrave: il,
            egrave: al,
            egs: sl,
            egsdot: ol,
            el: ll,
            Element: ul,
            elinters: cl,
            ell: dl,
            els: pl,
            elsdot: fl,
            Emacr: hl,
            emacr: ml,
            empty: bl,
            emptyset: gl,
            EmptySmallSquare: yl,
            emptyv: kl,
            EmptyVerySmallSquare: vl,
            emsp13: wl,
            emsp14: xl,
            emsp: Al,
            ENG: Cl,
            eng: _l,
            ensp: Dl,
            Eogon: ql,
            eogon: El,
            Eopf: Ll,
            eopf: Sl,
            epar: Tl,
            eparsl: Nl,
            eplus: Rl,
            epsi: Ol,
            Epsilon: Ul,
            epsilon: Fl,
            epsiv: Bl,
            eqcirc: Ml,
            eqcolon: Pl,
            eqsim: Il,
            eqslantgtr: zl,
            eqslantless: jl,
            Equal: Vl,
            equals: Hl,
            EqualTilde: Gl,
            equest: Wl,
            Equilibrium: Zl,
            equiv: Jl,
            equivDD: Kl,
            eqvparsl: $l,
            erarr: Yl,
            erDot: Xl,
            escr: Ql,
            Escr: eu,
            esdot: tu,
            Esim: ru,
            esim: nu,
            Eta: iu,
            eta: au,
            ETH: su,
            eth: ou,
            Euml: lu,
            euml: uu,
            euro: cu,
            excl: du,
            exist: pu,
            Exists: fu,
            expectation: hu,
            exponentiale: mu,
            ExponentialE: bu,
            fallingdotseq: gu,
            Fcy: yu,
            fcy: ku,
            female: vu,
            ffilig: wu,
            fflig: xu,
            ffllig: Au,
            Ffr: Cu,
            ffr: _u,
            filig: Du,
            FilledSmallSquare: qu,
            FilledVerySmallSquare: Eu,
            fjlig: Lu,
            flat: Su,
            fllig: Tu,
            fltns: Nu,
            fnof: Ru,
            Fopf: Ou,
            fopf: Uu,
            forall: Fu,
            ForAll: Bu,
            fork: Mu,
            forkv: Pu,
            Fouriertrf: Iu,
            fpartint: zu,
            frac12: ju,
            frac13: Vu,
            frac14: Hu,
            frac15: Gu,
            frac16: Wu,
            frac18: Zu,
            frac23: Ju,
            frac25: Ku,
            frac34: $u,
            frac35: Yu,
            frac38: Xu,
            frac45: Qu,
            frac56: ec,
            frac58: tc,
            frac78: rc,
            frasl: nc,
            frown: ic,
            fscr: ac,
            Fscr: sc,
            gacute: oc,
            Gamma: lc,
            gamma: uc,
            Gammad: cc,
            gammad: dc,
            gap: pc,
            Gbreve: fc,
            gbreve: hc,
            Gcedil: mc,
            Gcirc: bc,
            gcirc: gc,
            Gcy: yc,
            gcy: kc,
            Gdot: vc,
            gdot: wc,
            ge: xc,
            gE: Ac,
            gEl: Cc,
            gel: _c,
            geq: Dc,
            geqq: qc,
            geqslant: Ec,
            gescc: Lc,
            ges: Sc,
            gesdot: Tc,
            gesdoto: Nc,
            gesdotol: Rc,
            gesl: Oc,
            gesles: Uc,
            Gfr: Fc,
            gfr: Bc,
            gg: Mc,
            Gg: Pc,
            ggg: Ic,
            gimel: zc,
            GJcy: jc,
            gjcy: Vc,
            gla: Hc,
            gl: Gc,
            glE: Wc,
            glj: Zc,
            gnap: Jc,
            gnapprox: Kc,
            gne: $c,
            gnE: Yc,
            gneq: Xc,
            gneqq: Qc,
            gnsim: ed,
            Gopf: td,
            gopf: rd,
            grave: nd,
            GreaterEqual: id,
            GreaterEqualLess: ad,
            GreaterFullEqual: sd,
            GreaterGreater: od,
            GreaterLess: ld,
            GreaterSlantEqual: ud,
            GreaterTilde: cd,
            Gscr: dd,
            gscr: pd,
            gsim: fd,
            gsime: hd,
            gsiml: md,
            gtcc: bd,
            gtcir: gd,
            gt: yd,
            GT: kd,
            Gt: vd,
            gtdot: wd,
            gtlPar: xd,
            gtquest: Ad,
            gtrapprox: Cd,
            gtrarr: _d,
            gtrdot: Dd,
            gtreqless: qd,
            gtreqqless: Ed,
            gtrless: Ld,
            gtrsim: Sd,
            gvertneqq: Td,
            gvnE: Nd,
            Hacek: Rd,
            hairsp: Od,
            half: Ud,
            hamilt: Fd,
            HARDcy: Bd,
            hardcy: Md,
            harrcir: Pd,
            harr: Id,
            hArr: zd,
            harrw: jd,
            Hat: Vd,
            hbar: Hd,
            Hcirc: Gd,
            hcirc: Wd,
            hearts: Zd,
            heartsuit: Jd,
            hellip: Kd,
            hercon: $d,
            hfr: Yd,
            Hfr: Xd,
            HilbertSpace: Qd,
            hksearow: ep,
            hkswarow: tp,
            hoarr: rp,
            homtht: np,
            hookleftarrow: ip,
            hookrightarrow: ap,
            hopf: sp,
            Hopf: op,
            horbar: lp,
            HorizontalLine: up,
            hscr: cp,
            Hscr: dp,
            hslash: pp,
            Hstrok: fp,
            hstrok: hp,
            HumpDownHump: mp,
            HumpEqual: bp,
            hybull: gp,
            hyphen: yp,
            Iacute: kp,
            iacute: vp,
            ic: wp,
            Icirc: xp,
            icirc: Ap,
            Icy: Cp,
            icy: _p,
            Idot: Dp,
            IEcy: qp,
            iecy: Ep,
            iexcl: Lp,
            iff: Sp,
            ifr: Tp,
            Ifr: Np,
            Igrave: Rp,
            igrave: Op,
            ii: Up,
            iiiint: Fp,
            iiint: Bp,
            iinfin: Mp,
            iiota: Pp,
            IJlig: Ip,
            ijlig: zp,
            Imacr: jp,
            imacr: Vp,
            image: Hp,
            ImaginaryI: Gp,
            imagline: Wp,
            imagpart: Zp,
            imath: Jp,
            Im: Kp,
            imof: $p,
            imped: Yp,
            Implies: Xp,
            incare: Qp,
            in: "∈",
            infin: ef,
            infintie: tf,
            inodot: rf,
            intcal: nf,
            int: af,
            Int: sf,
            integers: of,
            Integral: lf,
            intercal: uf,
            Intersection: cf,
            intlarhk: df,
            intprod: pf,
            InvisibleComma: ff,
            InvisibleTimes: hf,
            IOcy: mf,
            iocy: bf,
            Iogon: gf,
            iogon: yf,
            Iopf: kf,
            iopf: vf,
            Iota: wf,
            iota: xf,
            iprod: Af,
            iquest: Cf,
            iscr: _f,
            Iscr: Df,
            isin: qf,
            isindot: Ef,
            isinE: Lf,
            isins: Sf,
            isinsv: Tf,
            isinv: Nf,
            it: Rf,
            Itilde: Of,
            itilde: Uf,
            Iukcy: Ff,
            iukcy: Bf,
            Iuml: Mf,
            iuml: Pf,
            Jcirc: If,
            jcirc: zf,
            Jcy: jf,
            jcy: Vf,
            Jfr: Hf,
            jfr: Gf,
            jmath: Wf,
            Jopf: Zf,
            jopf: Jf,
            Jscr: Kf,
            jscr: $f,
            Jsercy: Yf,
            jsercy: Xf,
            Jukcy: Qf,
            jukcy: eh,
            Kappa: th,
            kappa: rh,
            kappav: nh,
            Kcedil: ih,
            kcedil: ah,
            Kcy: sh,
            kcy: oh,
            Kfr: lh,
            kfr: uh,
            kgreen: ch,
            KHcy: dh,
            khcy: ph,
            KJcy: fh,
            kjcy: hh,
            Kopf: mh,
            kopf: bh,
            Kscr: gh,
            kscr: yh,
            lAarr: kh,
            Lacute: vh,
            lacute: wh,
            laemptyv: xh,
            lagran: Ah,
            Lambda: Ch,
            lambda: _h,
            lang: Dh,
            Lang: qh,
            langd: Eh,
            langle: Lh,
            lap: Sh,
            Laplacetrf: Th,
            laquo: Nh,
            larrb: Rh,
            larrbfs: Oh,
            larr: Uh,
            Larr: Fh,
            lArr: Bh,
            larrfs: Mh,
            larrhk: Ph,
            larrlp: Ih,
            larrpl: zh,
            larrsim: jh,
            larrtl: Vh,
            latail: Hh,
            lAtail: Gh,
            lat: Wh,
            late: Zh,
            lates: Jh,
            lbarr: Kh,
            lBarr: $h,
            lbbrk: Yh,
            lbrace: Xh,
            lbrack: Qh,
            lbrke: em,
            lbrksld: tm,
            lbrkslu: rm,
            Lcaron: nm,
            lcaron: im,
            Lcedil: am,
            lcedil: sm,
            lceil: om,
            lcub: lm,
            Lcy: um,
            lcy: cm,
            ldca: dm,
            ldquo: pm,
            ldquor: fm,
            ldrdhar: hm,
            ldrushar: mm,
            ldsh: bm,
            le: gm,
            lE: ym,
            LeftAngleBracket: km,
            LeftArrowBar: vm,
            leftarrow: wm,
            LeftArrow: xm,
            Leftarrow: Am,
            LeftArrowRightArrow: Cm,
            leftarrowtail: _m,
            LeftCeiling: Dm,
            LeftDoubleBracket: qm,
            LeftDownTeeVector: Em,
            LeftDownVectorBar: Lm,
            LeftDownVector: Sm,
            LeftFloor: Tm,
            leftharpoondown: Nm,
            leftharpoonup: Rm,
            leftleftarrows: Om,
            leftrightarrow: Um,
            LeftRightArrow: Fm,
            Leftrightarrow: Bm,
            leftrightarrows: Mm,
            leftrightharpoons: Pm,
            leftrightsquigarrow: Im,
            LeftRightVector: zm,
            LeftTeeArrow: jm,
            LeftTee: Vm,
            LeftTeeVector: Hm,
            leftthreetimes: Gm,
            LeftTriangleBar: Wm,
            LeftTriangle: Zm,
            LeftTriangleEqual: Jm,
            LeftUpDownVector: Km,
            LeftUpTeeVector: $m,
            LeftUpVectorBar: Ym,
            LeftUpVector: Xm,
            LeftVectorBar: Qm,
            LeftVector: eb,
            lEg: tb,
            leg: rb,
            leq: nb,
            leqq: ib,
            leqslant: ab,
            lescc: sb,
            les: ob,
            lesdot: lb,
            lesdoto: ub,
            lesdotor: cb,
            lesg: db,
            lesges: pb,
            lessapprox: fb,
            lessdot: hb,
            lesseqgtr: mb,
            lesseqqgtr: bb,
            LessEqualGreater: gb,
            LessFullEqual: yb,
            LessGreater: kb,
            lessgtr: vb,
            LessLess: wb,
            lesssim: xb,
            LessSlantEqual: Ab,
            LessTilde: Cb,
            lfisht: _b,
            lfloor: Db,
            Lfr: qb,
            lfr: Eb,
            lg: Lb,
            lgE: Sb,
            lHar: Tb,
            lhard: Nb,
            lharu: Rb,
            lharul: Ob,
            lhblk: Ub,
            LJcy: Fb,
            ljcy: Bb,
            llarr: Mb,
            ll: Pb,
            Ll: Ib,
            llcorner: zb,
            Lleftarrow: jb,
            llhard: Vb,
            lltri: Hb,
            Lmidot: Gb,
            lmidot: Wb,
            lmoustache: Zb,
            lmoust: Jb,
            lnap: Kb,
            lnapprox: $b,
            lne: Yb,
            lnE: Xb,
            lneq: Qb,
            lneqq: eg,
            lnsim: tg,
            loang: rg,
            loarr: ng,
            lobrk: ig,
            longleftarrow: ag,
            LongLeftArrow: sg,
            Longleftarrow: og,
            longleftrightarrow: lg,
            LongLeftRightArrow: ug,
            Longleftrightarrow: cg,
            longmapsto: dg,
            longrightarrow: pg,
            LongRightArrow: fg,
            Longrightarrow: hg,
            looparrowleft: mg,
            looparrowright: bg,
            lopar: gg,
            Lopf: yg,
            lopf: kg,
            loplus: vg,
            lotimes: wg,
            lowast: xg,
            lowbar: Ag,
            LowerLeftArrow: Cg,
            LowerRightArrow: _g,
            loz: Dg,
            lozenge: qg,
            lozf: Eg,
            lpar: Lg,
            lparlt: Sg,
            lrarr: Tg,
            lrcorner: Ng,
            lrhar: Rg,
            lrhard: Og,
            lrm: Ug,
            lrtri: Fg,
            lsaquo: Bg,
            lscr: Mg,
            Lscr: Pg,
            lsh: Ig,
            Lsh: zg,
            lsim: jg,
            lsime: Vg,
            lsimg: Hg,
            lsqb: Gg,
            lsquo: Wg,
            lsquor: Zg,
            Lstrok: Jg,
            lstrok: Kg,
            ltcc: $g,
            ltcir: Yg,
            lt: Xg,
            LT: Qg,
            Lt: ey,
            ltdot: ty,
            lthree: ry,
            ltimes: ny,
            ltlarr: iy,
            ltquest: ay,
            ltri: sy,
            ltrie: oy,
            ltrif: ly,
            ltrPar: uy,
            lurdshar: cy,
            luruhar: dy,
            lvertneqq: py,
            lvnE: fy,
            macr: hy,
            male: my,
            malt: by,
            maltese: gy,
            Map: "⤅",
            map: yy,
            mapsto: ky,
            mapstodown: vy,
            mapstoleft: wy,
            mapstoup: xy,
            marker: Ay,
            mcomma: Cy,
            Mcy: _y,
            mcy: Dy,
            mdash: qy,
            mDDot: Ey,
            measuredangle: Ly,
            MediumSpace: Sy,
            Mellintrf: Ty,
            Mfr: Ny,
            mfr: Ry,
            mho: Oy,
            micro: Uy,
            midast: Fy,
            midcir: By,
            mid: My,
            middot: Py,
            minusb: Iy,
            minus: zy,
            minusd: jy,
            minusdu: Vy,
            MinusPlus: Hy,
            mlcp: Gy,
            mldr: Wy,
            mnplus: Zy,
            models: Jy,
            Mopf: Ky,
            mopf: $y,
            mp: Yy,
            mscr: Xy,
            Mscr: Qy,
            mstpos: ek,
            Mu: tk,
            mu: rk,
            multimap: nk,
            mumap: ik,
            nabla: ak,
            Nacute: sk,
            nacute: ok,
            nang: lk,
            nap: uk,
            napE: ck,
            napid: dk,
            napos: pk,
            napprox: fk,
            natural: hk,
            naturals: mk,
            natur: bk,
            nbsp: gk,
            nbump: yk,
            nbumpe: kk,
            ncap: vk,
            Ncaron: wk,
            ncaron: xk,
            Ncedil: Ak,
            ncedil: Ck,
            ncong: _k,
            ncongdot: Dk,
            ncup: qk,
            Ncy: Ek,
            ncy: Lk,
            ndash: Sk,
            nearhk: Tk,
            nearr: Nk,
            neArr: Rk,
            nearrow: Ok,
            ne: Uk,
            nedot: Fk,
            NegativeMediumSpace: Bk,
            NegativeThickSpace: Mk,
            NegativeThinSpace: Pk,
            NegativeVeryThinSpace: Ik,
            nequiv: zk,
            nesear: jk,
            nesim: Vk,
            NestedGreaterGreater: Hk,
            NestedLessLess: Gk,
            NewLine: Wk,
            nexist: Zk,
            nexists: Jk,
            Nfr: Kk,
            nfr: $k,
            ngE: Yk,
            nge: Xk,
            ngeq: Qk,
            ngeqq: ev,
            ngeqslant: tv,
            nges: rv,
            nGg: nv,
            ngsim: iv,
            nGt: av,
            ngt: sv,
            ngtr: ov,
            nGtv: lv,
            nharr: uv,
            nhArr: cv,
            nhpar: dv,
            ni: pv,
            nis: fv,
            nisd: hv,
            niv: mv,
            NJcy: bv,
            njcy: gv,
            nlarr: yv,
            nlArr: kv,
            nldr: vv,
            nlE: wv,
            nle: xv,
            nleftarrow: Av,
            nLeftarrow: Cv,
            nleftrightarrow: _v,
            nLeftrightarrow: Dv,
            nleq: qv,
            nleqq: Ev,
            nleqslant: Lv,
            nles: Sv,
            nless: Tv,
            nLl: Nv,
            nlsim: Rv,
            nLt: Ov,
            nlt: Uv,
            nltri: Fv,
            nltrie: Bv,
            nLtv: Mv,
            nmid: Pv,
            NoBreak: Iv,
            NonBreakingSpace: zv,
            nopf: jv,
            Nopf: Vv,
            Not: Hv,
            not: Gv,
            NotCongruent: Wv,
            NotCupCap: Zv,
            NotDoubleVerticalBar: Jv,
            NotElement: Kv,
            NotEqual: $v,
            NotEqualTilde: Yv,
            NotExists: Xv,
            NotGreater: Qv,
            NotGreaterEqual: ew,
            NotGreaterFullEqual: tw,
            NotGreaterGreater: rw,
            NotGreaterLess: nw,
            NotGreaterSlantEqual: iw,
            NotGreaterTilde: aw,
            NotHumpDownHump: sw,
            NotHumpEqual: ow,
            notin: lw,
            notindot: uw,
            notinE: cw,
            notinva: dw,
            notinvb: pw,
            notinvc: fw,
            NotLeftTriangleBar: hw,
            NotLeftTriangle: mw,
            NotLeftTriangleEqual: bw,
            NotLess: gw,
            NotLessEqual: yw,
            NotLessGreater: kw,
            NotLessLess: vw,
            NotLessSlantEqual: ww,
            NotLessTilde: xw,
            NotNestedGreaterGreater: Aw,
            NotNestedLessLess: Cw,
            notni: _w,
            notniva: Dw,
            notnivb: qw,
            notnivc: Ew,
            NotPrecedes: Lw,
            NotPrecedesEqual: Sw,
            NotPrecedesSlantEqual: Tw,
            NotReverseElement: Nw,
            NotRightTriangleBar: Rw,
            NotRightTriangle: Ow,
            NotRightTriangleEqual: Uw,
            NotSquareSubset: Fw,
            NotSquareSubsetEqual: Bw,
            NotSquareSuperset: Mw,
            NotSquareSupersetEqual: Pw,
            NotSubset: Iw,
            NotSubsetEqual: zw,
            NotSucceeds: jw,
            NotSucceedsEqual: Vw,
            NotSucceedsSlantEqual: Hw,
            NotSucceedsTilde: Gw,
            NotSuperset: Ww,
            NotSupersetEqual: Zw,
            NotTilde: Jw,
            NotTildeEqual: Kw,
            NotTildeFullEqual: $w,
            NotTildeTilde: Yw,
            NotVerticalBar: Xw,
            nparallel: Qw,
            npar: ex,
            nparsl: tx,
            npart: rx,
            npolint: nx,
            npr: ix,
            nprcue: ax,
            nprec: sx,
            npreceq: ox,
            npre: lx,
            nrarrc: ux,
            nrarr: cx,
            nrArr: dx,
            nrarrw: px,
            nrightarrow: fx,
            nRightarrow: hx,
            nrtri: mx,
            nrtrie: bx,
            nsc: gx,
            nsccue: yx,
            nsce: kx,
            Nscr: vx,
            nscr: wx,
            nshortmid: xx,
            nshortparallel: Ax,
            nsim: Cx,
            nsime: _x,
            nsimeq: Dx,
            nsmid: qx,
            nspar: Ex,
            nsqsube: Lx,
            nsqsupe: Sx,
            nsub: Tx,
            nsubE: Nx,
            nsube: Rx,
            nsubset: Ox,
            nsubseteq: Ux,
            nsubseteqq: Fx,
            nsucc: Bx,
            nsucceq: Mx,
            nsup: Px,
            nsupE: Ix,
            nsupe: zx,
            nsupset: jx,
            nsupseteq: Vx,
            nsupseteqq: Hx,
            ntgl: Gx,
            Ntilde: Wx,
            ntilde: Zx,
            ntlg: Jx,
            ntriangleleft: Kx,
            ntrianglelefteq: $x,
            ntriangleright: Yx,
            ntrianglerighteq: Xx,
            Nu: Qx,
            nu: eA,
            num: tA,
            numero: rA,
            numsp: nA,
            nvap: iA,
            nvdash: aA,
            nvDash: sA,
            nVdash: oA,
            nVDash: lA,
            nvge: uA,
            nvgt: cA,
            nvHarr: dA,
            nvinfin: pA,
            nvlArr: fA,
            nvle: hA,
            nvlt: mA,
            nvltrie: bA,
            nvrArr: gA,
            nvrtrie: yA,
            nvsim: kA,
            nwarhk: vA,
            nwarr: wA,
            nwArr: xA,
            nwarrow: AA,
            nwnear: CA,
            Oacute: _A,
            oacute: DA,
            oast: qA,
            Ocirc: EA,
            ocirc: LA,
            ocir: SA,
            Ocy: TA,
            ocy: NA,
            odash: RA,
            Odblac: OA,
            odblac: UA,
            odiv: FA,
            odot: BA,
            odsold: MA,
            OElig: PA,
            oelig: IA,
            ofcir: zA,
            Ofr: jA,
            ofr: VA,
            ogon: HA,
            Ograve: GA,
            ograve: WA,
            ogt: ZA,
            ohbar: JA,
            ohm: KA,
            oint: $A,
            olarr: YA,
            olcir: XA,
            olcross: QA,
            oline: eC,
            olt: tC,
            Omacr: rC,
            omacr: nC,
            Omega: iC,
            omega: aC,
            Omicron: sC,
            omicron: oC,
            omid: lC,
            ominus: uC,
            Oopf: cC,
            oopf: dC,
            opar: pC,
            OpenCurlyDoubleQuote: fC,
            OpenCurlyQuote: hC,
            operp: mC,
            oplus: bC,
            orarr: gC,
            Or: yC,
            or: kC,
            ord: vC,
            order: wC,
            orderof: xC,
            ordf: AC,
            ordm: CC,
            origof: _C,
            oror: DC,
            orslope: qC,
            orv: EC,
            oS: LC,
            Oscr: SC,
            oscr: TC,
            Oslash: NC,
            oslash: RC,
            osol: OC,
            Otilde: UC,
            otilde: FC,
            otimesas: BC,
            Otimes: MC,
            otimes: PC,
            Ouml: IC,
            ouml: zC,
            ovbar: jC,
            OverBar: VC,
            OverBrace: HC,
            OverBracket: GC,
            OverParenthesis: WC,
            para: ZC,
            parallel: JC,
            par: KC,
            parsim: $C,
            parsl: YC,
            part: XC,
            PartialD: QC,
            Pcy: e_,
            pcy: t_,
            percnt: r_,
            period: n_,
            permil: i_,
            perp: a_,
            pertenk: s_,
            Pfr: o_,
            pfr: l_,
            Phi: u_,
            phi: c_,
            phiv: d_,
            phmmat: p_,
            phone: f_,
            Pi: h_,
            pi: m_,
            pitchfork: b_,
            piv: g_,
            planck: y_,
            planckh: k_,
            plankv: v_,
            plusacir: w_,
            plusb: x_,
            pluscir: A_,
            plus: C_,
            plusdo: __,
            plusdu: D_,
            pluse: q_,
            PlusMinus: E_,
            plusmn: L_,
            plussim: S_,
            plustwo: T_,
            pm: N_,
            Poincareplane: R_,
            pointint: O_,
            popf: U_,
            Popf: F_,
            pound: B_,
            prap: M_,
            Pr: P_,
            pr: I_,
            prcue: z_,
            precapprox: j_,
            prec: V_,
            preccurlyeq: H_,
            Precedes: G_,
            PrecedesEqual: W_,
            PrecedesSlantEqual: Z_,
            PrecedesTilde: J_,
            preceq: K_,
            precnapprox: $_,
            precneqq: Y_,
            precnsim: X_,
            pre: Q_,
            prE: eD,
            precsim: tD,
            prime: rD,
            Prime: nD,
            primes: iD,
            prnap: aD,
            prnE: sD,
            prnsim: oD,
            prod: lD,
            Product: uD,
            profalar: cD,
            profline: dD,
            profsurf: pD,
            prop: fD,
            Proportional: hD,
            Proportion: mD,
            propto: bD,
            prsim: gD,
            prurel: yD,
            Pscr: kD,
            pscr: vD,
            Psi: wD,
            psi: xD,
            puncsp: AD,
            Qfr: CD,
            qfr: _D,
            qint: DD,
            qopf: qD,
            Qopf: ED,
            qprime: LD,
            Qscr: SD,
            qscr: TD,
            quaternions: ND,
            quatint: RD,
            quest: OD,
            questeq: UD,
            quot: FD,
            QUOT: BD,
            rAarr: MD,
            race: PD,
            Racute: ID,
            racute: zD,
            radic: jD,
            raemptyv: VD,
            rang: HD,
            Rang: GD,
            rangd: WD,
            range: ZD,
            rangle: JD,
            raquo: KD,
            rarrap: $D,
            rarrb: YD,
            rarrbfs: XD,
            rarrc: QD,
            rarr: eq,
            Rarr: tq,
            rArr: rq,
            rarrfs: nq,
            rarrhk: iq,
            rarrlp: aq,
            rarrpl: sq,
            rarrsim: oq,
            Rarrtl: lq,
            rarrtl: uq,
            rarrw: cq,
            ratail: dq,
            rAtail: pq,
            ratio: fq,
            rationals: hq,
            rbarr: mq,
            rBarr: bq,
            RBarr: gq,
            rbbrk: yq,
            rbrace: kq,
            rbrack: vq,
            rbrke: wq,
            rbrksld: xq,
            rbrkslu: Aq,
            Rcaron: Cq,
            rcaron: _q,
            Rcedil: Dq,
            rcedil: qq,
            rceil: Eq,
            rcub: Lq,
            Rcy: Sq,
            rcy: Tq,
            rdca: Nq,
            rdldhar: Rq,
            rdquo: Oq,
            rdquor: Uq,
            rdsh: Fq,
            real: Bq,
            realine: Mq,
            realpart: Pq,
            reals: Iq,
            Re: zq,
            rect: jq,
            reg: Vq,
            REG: Hq,
            ReverseElement: Gq,
            ReverseEquilibrium: Wq,
            ReverseUpEquilibrium: Zq,
            rfisht: Jq,
            rfloor: Kq,
            rfr: $q,
            Rfr: Yq,
            rHar: Xq,
            rhard: Qq,
            rharu: eE,
            rharul: tE,
            Rho: rE,
            rho: nE,
            rhov: iE,
            RightAngleBracket: aE,
            RightArrowBar: sE,
            rightarrow: oE,
            RightArrow: lE,
            Rightarrow: uE,
            RightArrowLeftArrow: cE,
            rightarrowtail: dE,
            RightCeiling: pE,
            RightDoubleBracket: fE,
            RightDownTeeVector: hE,
            RightDownVectorBar: mE,
            RightDownVector: bE,
            RightFloor: gE,
            rightharpoondown: yE,
            rightharpoonup: kE,
            rightleftarrows: vE,
            rightleftharpoons: wE,
            rightrightarrows: xE,
            rightsquigarrow: AE,
            RightTeeArrow: CE,
            RightTee: _E,
            RightTeeVector: DE,
            rightthreetimes: qE,
            RightTriangleBar: EE,
            RightTriangle: LE,
            RightTriangleEqual: SE,
            RightUpDownVector: TE,
            RightUpTeeVector: NE,
            RightUpVectorBar: RE,
            RightUpVector: OE,
            RightVectorBar: UE,
            RightVector: FE,
            ring: BE,
            risingdotseq: ME,
            rlarr: PE,
            rlhar: IE,
            rlm: zE,
            rmoustache: jE,
            rmoust: VE,
            rnmid: HE,
            roang: GE,
            roarr: WE,
            robrk: ZE,
            ropar: JE,
            ropf: KE,
            Ropf: $E,
            roplus: YE,
            rotimes: XE,
            RoundImplies: QE,
            rpar: eL,
            rpargt: tL,
            rppolint: rL,
            rrarr: nL,
            Rrightarrow: iL,
            rsaquo: aL,
            rscr: sL,
            Rscr: oL,
            rsh: lL,
            Rsh: uL,
            rsqb: cL,
            rsquo: dL,
            rsquor: pL,
            rthree: fL,
            rtimes: hL,
            rtri: mL,
            rtrie: bL,
            rtrif: gL,
            rtriltri: yL,
            RuleDelayed: kL,
            ruluhar: vL,
            rx: wL,
            Sacute: xL,
            sacute: AL,
            sbquo: CL,
            scap: _L,
            Scaron: DL,
            scaron: qL,
            Sc: EL,
            sc: LL,
            sccue: SL,
            sce: TL,
            scE: NL,
            Scedil: RL,
            scedil: OL,
            Scirc: UL,
            scirc: FL,
            scnap: BL,
            scnE: ML,
            scnsim: PL,
            scpolint: IL,
            scsim: zL,
            Scy: jL,
            scy: VL,
            sdotb: HL,
            sdot: GL,
            sdote: WL,
            searhk: ZL,
            searr: JL,
            seArr: KL,
            searrow: $L,
            sect: YL,
            semi: XL,
            seswar: QL,
            setminus: eS,
            setmn: tS,
            sext: rS,
            Sfr: nS,
            sfr: iS,
            sfrown: aS,
            sharp: sS,
            SHCHcy: oS,
            shchcy: lS,
            SHcy: uS,
            shcy: cS,
            ShortDownArrow: dS,
            ShortLeftArrow: pS,
            shortmid: fS,
            shortparallel: hS,
            ShortRightArrow: mS,
            ShortUpArrow: bS,
            shy: gS,
            Sigma: yS,
            sigma: kS,
            sigmaf: vS,
            sigmav: wS,
            sim: xS,
            simdot: AS,
            sime: CS,
            simeq: _S,
            simg: DS,
            simgE: qS,
            siml: ES,
            simlE: LS,
            simne: SS,
            simplus: TS,
            simrarr: NS,
            slarr: RS,
            SmallCircle: OS,
            smallsetminus: US,
            smashp: FS,
            smeparsl: BS,
            smid: MS,
            smile: PS,
            smt: IS,
            smte: zS,
            smtes: jS,
            SOFTcy: VS,
            softcy: HS,
            solbar: GS,
            solb: WS,
            sol: ZS,
            Sopf: JS,
            sopf: KS,
            spades: $S,
            spadesuit: YS,
            spar: XS,
            sqcap: QS,
            sqcaps: eT,
            sqcup: tT,
            sqcups: rT,
            Sqrt: nT,
            sqsub: iT,
            sqsube: aT,
            sqsubset: sT,
            sqsubseteq: oT,
            sqsup: lT,
            sqsupe: uT,
            sqsupset: cT,
            sqsupseteq: dT,
            square: pT,
            Square: fT,
            SquareIntersection: hT,
            SquareSubset: mT,
            SquareSubsetEqual: bT,
            SquareSuperset: gT,
            SquareSupersetEqual: yT,
            SquareUnion: kT,
            squarf: vT,
            squ: wT,
            squf: xT,
            srarr: AT,
            Sscr: CT,
            sscr: _T,
            ssetmn: DT,
            ssmile: qT,
            sstarf: ET,
            Star: LT,
            star: ST,
            starf: TT,
            straightepsilon: NT,
            straightphi: RT,
            strns: OT,
            sub: UT,
            Sub: FT,
            subdot: BT,
            subE: MT,
            sube: PT,
            subedot: IT,
            submult: zT,
            subnE: jT,
            subne: VT,
            subplus: HT,
            subrarr: GT,
            subset: WT,
            Subset: ZT,
            subseteq: JT,
            subseteqq: KT,
            SubsetEqual: $T,
            subsetneq: YT,
            subsetneqq: XT,
            subsim: QT,
            subsub: eN,
            subsup: tN,
            succapprox: rN,
            succ: nN,
            succcurlyeq: iN,
            Succeeds: aN,
            SucceedsEqual: sN,
            SucceedsSlantEqual: oN,
            SucceedsTilde: lN,
            succeq: uN,
            succnapprox: cN,
            succneqq: dN,
            succnsim: pN,
            succsim: fN,
            SuchThat: hN,
            sum: mN,
            Sum: bN,
            sung: gN,
            sup1: yN,
            sup2: kN,
            sup3: vN,
            sup: wN,
            Sup: xN,
            supdot: AN,
            supdsub: CN,
            supE: _N,
            supe: DN,
            supedot: qN,
            Superset: EN,
            SupersetEqual: LN,
            suphsol: SN,
            suphsub: TN,
            suplarr: NN,
            supmult: RN,
            supnE: ON,
            supne: UN,
            supplus: FN,
            supset: BN,
            Supset: MN,
            supseteq: PN,
            supseteqq: IN,
            supsetneq: zN,
            supsetneqq: jN,
            supsim: VN,
            supsub: HN,
            supsup: GN,
            swarhk: WN,
            swarr: ZN,
            swArr: JN,
            swarrow: KN,
            swnwar: $N,
            szlig: YN,
            Tab: XN,
            target: QN,
            Tau: eR,
            tau: tR,
            tbrk: rR,
            Tcaron: nR,
            tcaron: iR,
            Tcedil: aR,
            tcedil: sR,
            Tcy: oR,
            tcy: lR,
            tdot: uR,
            telrec: cR,
            Tfr: dR,
            tfr: pR,
            there4: fR,
            therefore: hR,
            Therefore: mR,
            Theta: bR,
            theta: gR,
            thetasym: yR,
            thetav: kR,
            thickapprox: vR,
            thicksim: wR,
            ThickSpace: xR,
            ThinSpace: AR,
            thinsp: CR,
            thkap: _R,
            thksim: DR,
            THORN: qR,
            thorn: ER,
            tilde: LR,
            Tilde: SR,
            TildeEqual: TR,
            TildeFullEqual: NR,
            TildeTilde: RR,
            timesbar: OR,
            timesb: UR,
            times: FR,
            timesd: BR,
            tint: MR,
            toea: PR,
            topbot: IR,
            topcir: zR,
            top: jR,
            Topf: VR,
            topf: HR,
            topfork: GR,
            tosa: WR,
            tprime: ZR,
            trade: JR,
            TRADE: KR,
            triangle: $R,
            triangledown: YR,
            triangleleft: XR,
            trianglelefteq: QR,
            triangleq: eO,
            triangleright: tO,
            trianglerighteq: rO,
            tridot: nO,
            trie: iO,
            triminus: aO,
            TripleDot: sO,
            triplus: oO,
            trisb: lO,
            tritime: uO,
            trpezium: cO,
            Tscr: dO,
            tscr: pO,
            TScy: fO,
            tscy: hO,
            TSHcy: mO,
            tshcy: bO,
            Tstrok: gO,
            tstrok: yO,
            twixt: kO,
            twoheadleftarrow: vO,
            twoheadrightarrow: wO,
            Uacute: xO,
            uacute: AO,
            uarr: CO,
            Uarr: _O,
            uArr: DO,
            Uarrocir: qO,
            Ubrcy: EO,
            ubrcy: LO,
            Ubreve: SO,
            ubreve: TO,
            Ucirc: NO,
            ucirc: RO,
            Ucy: OO,
            ucy: UO,
            udarr: FO,
            Udblac: BO,
            udblac: MO,
            udhar: PO,
            ufisht: IO,
            Ufr: zO,
            ufr: jO,
            Ugrave: VO,
            ugrave: HO,
            uHar: GO,
            uharl: WO,
            uharr: ZO,
            uhblk: JO,
            ulcorn: KO,
            ulcorner: $O,
            ulcrop: YO,
            ultri: XO,
            Umacr: QO,
            umacr: eU,
            uml: tU,
            UnderBar: rU,
            UnderBrace: nU,
            UnderBracket: iU,
            UnderParenthesis: aU,
            Union: sU,
            UnionPlus: oU,
            Uogon: lU,
            uogon: uU,
            Uopf: cU,
            uopf: dU,
            UpArrowBar: pU,
            uparrow: fU,
            UpArrow: hU,
            Uparrow: mU,
            UpArrowDownArrow: bU,
            updownarrow: gU,
            UpDownArrow: yU,
            Updownarrow: kU,
            UpEquilibrium: vU,
            upharpoonleft: wU,
            upharpoonright: xU,
            uplus: AU,
            UpperLeftArrow: CU,
            UpperRightArrow: _U,
            upsi: DU,
            Upsi: qU,
            upsih: EU,
            Upsilon: LU,
            upsilon: SU,
            UpTeeArrow: TU,
            UpTee: NU,
            upuparrows: RU,
            urcorn: OU,
            urcorner: UU,
            urcrop: FU,
            Uring: BU,
            uring: MU,
            urtri: PU,
            Uscr: IU,
            uscr: zU,
            utdot: jU,
            Utilde: VU,
            utilde: HU,
            utri: GU,
            utrif: WU,
            uuarr: ZU,
            Uuml: JU,
            uuml: KU,
            uwangle: $U,
            vangrt: YU,
            varepsilon: XU,
            varkappa: QU,
            varnothing: eF,
            varphi: tF,
            varpi: rF,
            varpropto: nF,
            varr: iF,
            vArr: aF,
            varrho: sF,
            varsigma: oF,
            varsubsetneq: lF,
            varsubsetneqq: uF,
            varsupsetneq: cF,
            varsupsetneqq: dF,
            vartheta: pF,
            vartriangleleft: fF,
            vartriangleright: hF,
            vBar: mF,
            Vbar: bF,
            vBarv: gF,
            Vcy: yF,
            vcy: kF,
            vdash: vF,
            vDash: wF,
            Vdash: xF,
            VDash: AF,
            Vdashl: CF,
            veebar: _F,
            vee: DF,
            Vee: qF,
            veeeq: EF,
            vellip: LF,
            verbar: SF,
            Verbar: TF,
            vert: NF,
            Vert: RF,
            VerticalBar: OF,
            VerticalLine: UF,
            VerticalSeparator: FF,
            VerticalTilde: BF,
            VeryThinSpace: MF,
            Vfr: PF,
            vfr: IF,
            vltri: zF,
            vnsub: jF,
            vnsup: VF,
            Vopf: HF,
            vopf: GF,
            vprop: WF,
            vrtri: ZF,
            Vscr: JF,
            vscr: KF,
            vsubnE: $F,
            vsubne: YF,
            vsupnE: XF,
            vsupne: QF,
            Vvdash: eB,
            vzigzag: tB,
            Wcirc: rB,
            wcirc: nB,
            wedbar: iB,
            wedge: aB,
            Wedge: sB,
            wedgeq: oB,
            weierp: lB,
            Wfr: uB,
            wfr: cB,
            Wopf: dB,
            wopf: pB,
            wp: fB,
            wr: hB,
            wreath: mB,
            Wscr: bB,
            wscr: gB,
            xcap: yB,
            xcirc: kB,
            xcup: vB,
            xdtri: wB,
            Xfr: xB,
            xfr: AB,
            xharr: CB,
            xhArr: _B,
            Xi: DB,
            xi: qB,
            xlarr: EB,
            xlArr: LB,
            xmap: SB,
            xnis: TB,
            xodot: NB,
            Xopf: RB,
            xopf: OB,
            xoplus: UB,
            xotime: FB,
            xrarr: BB,
            xrArr: MB,
            Xscr: PB,
            xscr: IB,
            xsqcup: zB,
            xuplus: jB,
            xutri: VB,
            xvee: HB,
            xwedge: GB,
            Yacute: WB,
            yacute: ZB,
            YAcy: JB,
            yacy: KB,
            Ycirc: $B,
            ycirc: YB,
            Ycy: XB,
            ycy: QB,
            yen: eM,
            Yfr: tM,
            yfr: rM,
            YIcy: nM,
            yicy: iM,
            Yopf: aM,
            yopf: sM,
            Yscr: oM,
            yscr: lM,
            YUcy: uM,
            yucy: cM,
            yuml: dM,
            Yuml: pM,
            Zacute: fM,
            zacute: hM,
            Zcaron: mM,
            zcaron: bM,
            Zcy: gM,
            zcy: yM,
            Zdot: kM,
            zdot: vM,
            zeetrf: wM,
            ZeroWidthSpace: xM,
            Zeta: AM,
            zeta: CM,
            zfr: _M,
            Zfr: DM,
            ZHcy: qM,
            zhcy: EM,
            zigrarr: LM,
            zopf: SM,
            Zopf: TM,
            Zscr: NM,
            zscr: RM,
            zwj: OM,
            zwnj: UM,
          },
          BM = Object.freeze({
            __proto__: null,
            Aacute: b,
            aacute: g,
            Abreve: y,
            abreve: k,
            ac: v,
            acd: w,
            acE: x,
            Acirc: A,
            acirc: C,
            acute: _,
            Acy: D,
            acy: q,
            AElig: E,
            aelig: L,
            af: S,
            Afr: T,
            afr: N,
            Agrave: R,
            agrave: O,
            alefsym: U,
            aleph: F,
            Alpha: B,
            alpha: M,
            Amacr: P,
            amacr: I,
            amalg: z,
            amp: j,
            AMP: V,
            andand: H,
            And: G,
            and: W,
            andd: Z,
            andslope: J,
            andv: K,
            ang: $,
            ange: Y,
            angle: X,
            angmsdaa: Q,
            angmsdab: ee,
            angmsdac: te,
            angmsdad: re,
            angmsdae: ne,
            angmsdaf: ie,
            angmsdag: ae,
            angmsdah: se,
            angmsd: oe,
            angrt: le,
            angrtvb: ue,
            angrtvbd: ce,
            angsph: de,
            angst: pe,
            angzarr: fe,
            Aogon: he,
            aogon: me,
            Aopf: be,
            aopf: ge,
            apacir: ye,
            ap: ke,
            apE: ve,
            ape: we,
            apid: xe,
            apos: Ae,
            ApplyFunction: Ce,
            approx: _e,
            approxeq: De,
            Aring: qe,
            aring: Ee,
            Ascr: Le,
            ascr: Se,
            Assign: Te,
            ast: Ne,
            asymp: Re,
            asympeq: Oe,
            Atilde: Ue,
            atilde: Fe,
            Auml: Be,
            auml: Me,
            awconint: Pe,
            awint: Ie,
            backcong: ze,
            backepsilon: je,
            backprime: Ve,
            backsim: He,
            backsimeq: Ge,
            Backslash: We,
            Barv: Ze,
            barvee: Je,
            barwed: Ke,
            Barwed: $e,
            barwedge: Ye,
            bbrk: Xe,
            bbrktbrk: Qe,
            bcong: et,
            Bcy: tt,
            bcy: rt,
            bdquo: nt,
            becaus: it,
            because: at,
            Because: st,
            bemptyv: ot,
            bepsi: lt,
            bernou: ut,
            Bernoullis: ct,
            Beta: dt,
            beta: pt,
            beth: ft,
            between: ht,
            Bfr: mt,
            bfr: bt,
            bigcap: gt,
            bigcirc: yt,
            bigcup: kt,
            bigodot: vt,
            bigoplus: wt,
            bigotimes: xt,
            bigsqcup: At,
            bigstar: Ct,
            bigtriangledown: _t,
            bigtriangleup: Dt,
            biguplus: qt,
            bigvee: Et,
            bigwedge: Lt,
            bkarow: St,
            blacklozenge: Tt,
            blacksquare: Nt,
            blacktriangle: Rt,
            blacktriangledown: Ot,
            blacktriangleleft: Ut,
            blacktriangleright: Ft,
            blank: Bt,
            blk12: Mt,
            blk14: Pt,
            blk34: It,
            block: zt,
            bne: jt,
            bnequiv: Vt,
            bNot: Ht,
            bnot: Gt,
            Bopf: Wt,
            bopf: Zt,
            bot: Jt,
            bottom: Kt,
            bowtie: $t,
            boxbox: Yt,
            boxdl: Xt,
            boxdL: Qt,
            boxDl: er,
            boxDL: tr,
            boxdr: rr,
            boxdR: nr,
            boxDr: ir,
            boxDR: ar,
            boxh: sr,
            boxH: or,
            boxhd: lr,
            boxHd: ur,
            boxhD: cr,
            boxHD: dr,
            boxhu: pr,
            boxHu: fr,
            boxhU: hr,
            boxHU: mr,
            boxminus: br,
            boxplus: gr,
            boxtimes: yr,
            boxul: kr,
            boxuL: vr,
            boxUl: wr,
            boxUL: xr,
            boxur: Ar,
            boxuR: Cr,
            boxUr: _r,
            boxUR: Dr,
            boxv: qr,
            boxV: Er,
            boxvh: Lr,
            boxvH: Sr,
            boxVh: Tr,
            boxVH: Nr,
            boxvl: Rr,
            boxvL: Or,
            boxVl: Ur,
            boxVL: Fr,
            boxvr: Br,
            boxvR: Mr,
            boxVr: Pr,
            boxVR: Ir,
            bprime: zr,
            breve: jr,
            Breve: Vr,
            brvbar: Hr,
            bscr: Gr,
            Bscr: Wr,
            bsemi: Zr,
            bsim: Jr,
            bsime: Kr,
            bsolb: $r,
            bsol: Yr,
            bsolhsub: Xr,
            bull: Qr,
            bullet: en,
            bump: tn,
            bumpE: rn,
            bumpe: nn,
            Bumpeq: an,
            bumpeq: sn,
            Cacute: on,
            cacute: ln,
            capand: un,
            capbrcup: cn,
            capcap: dn,
            cap: pn,
            Cap: fn,
            capcup: hn,
            capdot: mn,
            CapitalDifferentialD: bn,
            caps: gn,
            caret: yn,
            caron: kn,
            Cayleys: vn,
            ccaps: wn,
            Ccaron: xn,
            ccaron: An,
            Ccedil: Cn,
            ccedil: _n,
            Ccirc: Dn,
            ccirc: qn,
            Cconint: En,
            ccups: Ln,
            ccupssm: Sn,
            Cdot: Tn,
            cdot: Nn,
            cedil: Rn,
            Cedilla: On,
            cemptyv: Un,
            cent: Fn,
            centerdot: Bn,
            CenterDot: Mn,
            cfr: Pn,
            Cfr: In,
            CHcy: zn,
            chcy: jn,
            check: Vn,
            checkmark: Hn,
            Chi: Gn,
            chi: Wn,
            circ: Zn,
            circeq: Jn,
            circlearrowleft: Kn,
            circlearrowright: $n,
            circledast: Yn,
            circledcirc: Xn,
            circleddash: Qn,
            CircleDot: ei,
            circledR: ti,
            circledS: ri,
            CircleMinus: ni,
            CirclePlus: ii,
            CircleTimes: ai,
            cir: si,
            cirE: oi,
            cire: li,
            cirfnint: ui,
            cirmid: ci,
            cirscir: di,
            ClockwiseContourIntegral: pi,
            CloseCurlyDoubleQuote: fi,
            CloseCurlyQuote: hi,
            clubs: mi,
            clubsuit: bi,
            colon: gi,
            Colon: yi,
            Colone: ki,
            colone: vi,
            coloneq: wi,
            comma: xi,
            commat: Ai,
            comp: Ci,
            compfn: _i,
            complement: Di,
            complexes: qi,
            cong: Ei,
            congdot: Li,
            Congruent: Si,
            conint: Ti,
            Conint: Ni,
            ContourIntegral: Ri,
            copf: Oi,
            Copf: Ui,
            coprod: Fi,
            Coproduct: Bi,
            copy: Mi,
            COPY: Pi,
            copysr: Ii,
            CounterClockwiseContourIntegral: zi,
            crarr: ji,
            cross: Vi,
            Cross: Hi,
            Cscr: Gi,
            cscr: Wi,
            csub: Zi,
            csube: Ji,
            csup: Ki,
            csupe: $i,
            ctdot: Yi,
            cudarrl: Xi,
            cudarrr: Qi,
            cuepr: ea,
            cuesc: ta,
            cularr: ra,
            cularrp: na,
            cupbrcap: ia,
            cupcap: aa,
            CupCap: sa,
            cup: oa,
            Cup: la,
            cupcup: ua,
            cupdot: ca,
            cupor: da,
            cups: pa,
            curarr: fa,
            curarrm: ha,
            curlyeqprec: ma,
            curlyeqsucc: ba,
            curlyvee: ga,
            curlywedge: ya,
            curren: ka,
            curvearrowleft: va,
            curvearrowright: wa,
            cuvee: xa,
            cuwed: Aa,
            cwconint: Ca,
            cwint: _a,
            cylcty: Da,
            dagger: qa,
            Dagger: Ea,
            daleth: La,
            darr: Sa,
            Darr: Ta,
            dArr: Na,
            dash: Ra,
            Dashv: Oa,
            dashv: Ua,
            dbkarow: Fa,
            dblac: Ba,
            Dcaron: Ma,
            dcaron: Pa,
            Dcy: Ia,
            dcy: za,
            ddagger: ja,
            ddarr: Va,
            DD: Ha,
            dd: Ga,
            DDotrahd: Wa,
            ddotseq: Za,
            deg: Ja,
            Del: Ka,
            Delta: $a,
            delta: Ya,
            demptyv: Xa,
            dfisht: Qa,
            Dfr: es,
            dfr: ts,
            dHar: rs,
            dharl: ns,
            dharr: is,
            DiacriticalAcute: as,
            DiacriticalDot: ss,
            DiacriticalDoubleAcute: os,
            DiacriticalGrave: ls,
            DiacriticalTilde: us,
            diam: cs,
            diamond: ds,
            Diamond: ps,
            diamondsuit: fs,
            diams: hs,
            die: ms,
            DifferentialD: bs,
            digamma: gs,
            disin: ys,
            div: ks,
            divide: vs,
            divideontimes: ws,
            divonx: xs,
            DJcy: As,
            djcy: Cs,
            dlcorn: _s,
            dlcrop: Ds,
            dollar: qs,
            Dopf: Es,
            dopf: Ls,
            Dot: Ss,
            dot: Ts,
            DotDot: Ns,
            doteq: Rs,
            doteqdot: Os,
            DotEqual: Us,
            dotminus: Fs,
            dotplus: Bs,
            dotsquare: Ms,
            doublebarwedge: Ps,
            DoubleContourIntegral: Is,
            DoubleDot: zs,
            DoubleDownArrow: js,
            DoubleLeftArrow: Vs,
            DoubleLeftRightArrow: Hs,
            DoubleLeftTee: Gs,
            DoubleLongLeftArrow: Ws,
            DoubleLongLeftRightArrow: Zs,
            DoubleLongRightArrow: Js,
            DoubleRightArrow: Ks,
            DoubleRightTee: $s,
            DoubleUpArrow: Ys,
            DoubleUpDownArrow: Xs,
            DoubleVerticalBar: Qs,
            DownArrowBar: eo,
            downarrow: to,
            DownArrow: ro,
            Downarrow: no,
            DownArrowUpArrow: io,
            DownBreve: ao,
            downdownarrows: so,
            downharpoonleft: oo,
            downharpoonright: lo,
            DownLeftRightVector: uo,
            DownLeftTeeVector: co,
            DownLeftVectorBar: po,
            DownLeftVector: fo,
            DownRightTeeVector: ho,
            DownRightVectorBar: mo,
            DownRightVector: bo,
            DownTeeArrow: go,
            DownTee: yo,
            drbkarow: ko,
            drcorn: vo,
            drcrop: wo,
            Dscr: xo,
            dscr: Ao,
            DScy: Co,
            dscy: _o,
            dsol: Do,
            Dstrok: qo,
            dstrok: Eo,
            dtdot: Lo,
            dtri: So,
            dtrif: To,
            duarr: No,
            duhar: Ro,
            dwangle: Oo,
            DZcy: Uo,
            dzcy: Fo,
            dzigrarr: Bo,
            Eacute: Mo,
            eacute: Po,
            easter: Io,
            Ecaron: zo,
            ecaron: jo,
            Ecirc: Vo,
            ecirc: Ho,
            ecir: Go,
            ecolon: Wo,
            Ecy: Zo,
            ecy: Jo,
            eDDot: Ko,
            Edot: $o,
            edot: Yo,
            eDot: Xo,
            ee: Qo,
            efDot: el,
            Efr: tl,
            efr: rl,
            eg: nl,
            Egrave: il,
            egrave: al,
            egs: sl,
            egsdot: ol,
            el: ll,
            Element: ul,
            elinters: cl,
            ell: dl,
            els: pl,
            elsdot: fl,
            Emacr: hl,
            emacr: ml,
            empty: bl,
            emptyset: gl,
            EmptySmallSquare: yl,
            emptyv: kl,
            EmptyVerySmallSquare: vl,
            emsp13: wl,
            emsp14: xl,
            emsp: Al,
            ENG: Cl,
            eng: _l,
            ensp: Dl,
            Eogon: ql,
            eogon: El,
            Eopf: Ll,
            eopf: Sl,
            epar: Tl,
            eparsl: Nl,
            eplus: Rl,
            epsi: Ol,
            Epsilon: Ul,
            epsilon: Fl,
            epsiv: Bl,
            eqcirc: Ml,
            eqcolon: Pl,
            eqsim: Il,
            eqslantgtr: zl,
            eqslantless: jl,
            Equal: Vl,
            equals: Hl,
            EqualTilde: Gl,
            equest: Wl,
            Equilibrium: Zl,
            equiv: Jl,
            equivDD: Kl,
            eqvparsl: $l,
            erarr: Yl,
            erDot: Xl,
            escr: Ql,
            Escr: eu,
            esdot: tu,
            Esim: ru,
            esim: nu,
            Eta: iu,
            eta: au,
            ETH: su,
            eth: ou,
            Euml: lu,
            euml: uu,
            euro: cu,
            excl: du,
            exist: pu,
            Exists: fu,
            expectation: hu,
            exponentiale: mu,
            ExponentialE: bu,
            fallingdotseq: gu,
            Fcy: yu,
            fcy: ku,
            female: vu,
            ffilig: wu,
            fflig: xu,
            ffllig: Au,
            Ffr: Cu,
            ffr: _u,
            filig: Du,
            FilledSmallSquare: qu,
            FilledVerySmallSquare: Eu,
            fjlig: Lu,
            flat: Su,
            fllig: Tu,
            fltns: Nu,
            fnof: Ru,
            Fopf: Ou,
            fopf: Uu,
            forall: Fu,
            ForAll: Bu,
            fork: Mu,
            forkv: Pu,
            Fouriertrf: Iu,
            fpartint: zu,
            frac12: ju,
            frac13: Vu,
            frac14: Hu,
            frac15: Gu,
            frac16: Wu,
            frac18: Zu,
            frac23: Ju,
            frac25: Ku,
            frac34: $u,
            frac35: Yu,
            frac38: Xu,
            frac45: Qu,
            frac56: ec,
            frac58: tc,
            frac78: rc,
            frasl: nc,
            frown: ic,
            fscr: ac,
            Fscr: sc,
            gacute: oc,
            Gamma: lc,
            gamma: uc,
            Gammad: cc,
            gammad: dc,
            gap: pc,
            Gbreve: fc,
            gbreve: hc,
            Gcedil: mc,
            Gcirc: bc,
            gcirc: gc,
            Gcy: yc,
            gcy: kc,
            Gdot: vc,
            gdot: wc,
            ge: xc,
            gE: Ac,
            gEl: Cc,
            gel: _c,
            geq: Dc,
            geqq: qc,
            geqslant: Ec,
            gescc: Lc,
            ges: Sc,
            gesdot: Tc,
            gesdoto: Nc,
            gesdotol: Rc,
            gesl: Oc,
            gesles: Uc,
            Gfr: Fc,
            gfr: Bc,
            gg: Mc,
            Gg: Pc,
            ggg: Ic,
            gimel: zc,
            GJcy: jc,
            gjcy: Vc,
            gla: Hc,
            gl: Gc,
            glE: Wc,
            glj: Zc,
            gnap: Jc,
            gnapprox: Kc,
            gne: $c,
            gnE: Yc,
            gneq: Xc,
            gneqq: Qc,
            gnsim: ed,
            Gopf: td,
            gopf: rd,
            grave: nd,
            GreaterEqual: id,
            GreaterEqualLess: ad,
            GreaterFullEqual: sd,
            GreaterGreater: od,
            GreaterLess: ld,
            GreaterSlantEqual: ud,
            GreaterTilde: cd,
            Gscr: dd,
            gscr: pd,
            gsim: fd,
            gsime: hd,
            gsiml: md,
            gtcc: bd,
            gtcir: gd,
            gt: yd,
            GT: kd,
            Gt: vd,
            gtdot: wd,
            gtlPar: xd,
            gtquest: Ad,
            gtrapprox: Cd,
            gtrarr: _d,
            gtrdot: Dd,
            gtreqless: qd,
            gtreqqless: Ed,
            gtrless: Ld,
            gtrsim: Sd,
            gvertneqq: Td,
            gvnE: Nd,
            Hacek: Rd,
            hairsp: Od,
            half: Ud,
            hamilt: Fd,
            HARDcy: Bd,
            hardcy: Md,
            harrcir: Pd,
            harr: Id,
            hArr: zd,
            harrw: jd,
            Hat: Vd,
            hbar: Hd,
            Hcirc: Gd,
            hcirc: Wd,
            hearts: Zd,
            heartsuit: Jd,
            hellip: Kd,
            hercon: $d,
            hfr: Yd,
            Hfr: Xd,
            HilbertSpace: Qd,
            hksearow: ep,
            hkswarow: tp,
            hoarr: rp,
            homtht: np,
            hookleftarrow: ip,
            hookrightarrow: ap,
            hopf: sp,
            Hopf: op,
            horbar: lp,
            HorizontalLine: up,
            hscr: cp,
            Hscr: dp,
            hslash: pp,
            Hstrok: fp,
            hstrok: hp,
            HumpDownHump: mp,
            HumpEqual: bp,
            hybull: gp,
            hyphen: yp,
            Iacute: kp,
            iacute: vp,
            ic: wp,
            Icirc: xp,
            icirc: Ap,
            Icy: Cp,
            icy: _p,
            Idot: Dp,
            IEcy: qp,
            iecy: Ep,
            iexcl: Lp,
            iff: Sp,
            ifr: Tp,
            Ifr: Np,
            Igrave: Rp,
            igrave: Op,
            ii: Up,
            iiiint: Fp,
            iiint: Bp,
            iinfin: Mp,
            iiota: Pp,
            IJlig: Ip,
            ijlig: zp,
            Imacr: jp,
            imacr: Vp,
            image: Hp,
            ImaginaryI: Gp,
            imagline: Wp,
            imagpart: Zp,
            imath: Jp,
            Im: Kp,
            imof: $p,
            imped: Yp,
            Implies: Xp,
            incare: Qp,
            infin: ef,
            infintie: tf,
            inodot: rf,
            intcal: nf,
            int: af,
            Int: sf,
            integers: of,
            Integral: lf,
            intercal: uf,
            Intersection: cf,
            intlarhk: df,
            intprod: pf,
            InvisibleComma: ff,
            InvisibleTimes: hf,
            IOcy: mf,
            iocy: bf,
            Iogon: gf,
            iogon: yf,
            Iopf: kf,
            iopf: vf,
            Iota: wf,
            iota: xf,
            iprod: Af,
            iquest: Cf,
            iscr: _f,
            Iscr: Df,
            isin: qf,
            isindot: Ef,
            isinE: Lf,
            isins: Sf,
            isinsv: Tf,
            isinv: Nf,
            it: Rf,
            Itilde: Of,
            itilde: Uf,
            Iukcy: Ff,
            iukcy: Bf,
            Iuml: Mf,
            iuml: Pf,
            Jcirc: If,
            jcirc: zf,
            Jcy: jf,
            jcy: Vf,
            Jfr: Hf,
            jfr: Gf,
            jmath: Wf,
            Jopf: Zf,
            jopf: Jf,
            Jscr: Kf,
            jscr: $f,
            Jsercy: Yf,
            jsercy: Xf,
            Jukcy: Qf,
            jukcy: eh,
            Kappa: th,
            kappa: rh,
            kappav: nh,
            Kcedil: ih,
            kcedil: ah,
            Kcy: sh,
            kcy: oh,
            Kfr: lh,
            kfr: uh,
            kgreen: ch,
            KHcy: dh,
            khcy: ph,
            KJcy: fh,
            kjcy: hh,
            Kopf: mh,
            kopf: bh,
            Kscr: gh,
            kscr: yh,
            lAarr: kh,
            Lacute: vh,
            lacute: wh,
            laemptyv: xh,
            lagran: Ah,
            Lambda: Ch,
            lambda: _h,
            lang: Dh,
            Lang: qh,
            langd: Eh,
            langle: Lh,
            lap: Sh,
            Laplacetrf: Th,
            laquo: Nh,
            larrb: Rh,
            larrbfs: Oh,
            larr: Uh,
            Larr: Fh,
            lArr: Bh,
            larrfs: Mh,
            larrhk: Ph,
            larrlp: Ih,
            larrpl: zh,
            larrsim: jh,
            larrtl: Vh,
            latail: Hh,
            lAtail: Gh,
            lat: Wh,
            late: Zh,
            lates: Jh,
            lbarr: Kh,
            lBarr: $h,
            lbbrk: Yh,
            lbrace: Xh,
            lbrack: Qh,
            lbrke: em,
            lbrksld: tm,
            lbrkslu: rm,
            Lcaron: nm,
            lcaron: im,
            Lcedil: am,
            lcedil: sm,
            lceil: om,
            lcub: lm,
            Lcy: um,
            lcy: cm,
            ldca: dm,
            ldquo: pm,
            ldquor: fm,
            ldrdhar: hm,
            ldrushar: mm,
            ldsh: bm,
            le: gm,
            lE: ym,
            LeftAngleBracket: km,
            LeftArrowBar: vm,
            leftarrow: wm,
            LeftArrow: xm,
            Leftarrow: Am,
            LeftArrowRightArrow: Cm,
            leftarrowtail: _m,
            LeftCeiling: Dm,
            LeftDoubleBracket: qm,
            LeftDownTeeVector: Em,
            LeftDownVectorBar: Lm,
            LeftDownVector: Sm,
            LeftFloor: Tm,
            leftharpoondown: Nm,
            leftharpoonup: Rm,
            leftleftarrows: Om,
            leftrightarrow: Um,
            LeftRightArrow: Fm,
            Leftrightarrow: Bm,
            leftrightarrows: Mm,
            leftrightharpoons: Pm,
            leftrightsquigarrow: Im,
            LeftRightVector: zm,
            LeftTeeArrow: jm,
            LeftTee: Vm,
            LeftTeeVector: Hm,
            leftthreetimes: Gm,
            LeftTriangleBar: Wm,
            LeftTriangle: Zm,
            LeftTriangleEqual: Jm,
            LeftUpDownVector: Km,
            LeftUpTeeVector: $m,
            LeftUpVectorBar: Ym,
            LeftUpVector: Xm,
            LeftVectorBar: Qm,
            LeftVector: eb,
            lEg: tb,
            leg: rb,
            leq: nb,
            leqq: ib,
            leqslant: ab,
            lescc: sb,
            les: ob,
            lesdot: lb,
            lesdoto: ub,
            lesdotor: cb,
            lesg: db,
            lesges: pb,
            lessapprox: fb,
            lessdot: hb,
            lesseqgtr: mb,
            lesseqqgtr: bb,
            LessEqualGreater: gb,
            LessFullEqual: yb,
            LessGreater: kb,
            lessgtr: vb,
            LessLess: wb,
            lesssim: xb,
            LessSlantEqual: Ab,
            LessTilde: Cb,
            lfisht: _b,
            lfloor: Db,
            Lfr: qb,
            lfr: Eb,
            lg: Lb,
            lgE: Sb,
            lHar: Tb,
            lhard: Nb,
            lharu: Rb,
            lharul: Ob,
            lhblk: Ub,
            LJcy: Fb,
            ljcy: Bb,
            llarr: Mb,
            ll: Pb,
            Ll: Ib,
            llcorner: zb,
            Lleftarrow: jb,
            llhard: Vb,
            lltri: Hb,
            Lmidot: Gb,
            lmidot: Wb,
            lmoustache: Zb,
            lmoust: Jb,
            lnap: Kb,
            lnapprox: $b,
            lne: Yb,
            lnE: Xb,
            lneq: Qb,
            lneqq: eg,
            lnsim: tg,
            loang: rg,
            loarr: ng,
            lobrk: ig,
            longleftarrow: ag,
            LongLeftArrow: sg,
            Longleftarrow: og,
            longleftrightarrow: lg,
            LongLeftRightArrow: ug,
            Longleftrightarrow: cg,
            longmapsto: dg,
            longrightarrow: pg,
            LongRightArrow: fg,
            Longrightarrow: hg,
            looparrowleft: mg,
            looparrowright: bg,
            lopar: gg,
            Lopf: yg,
            lopf: kg,
            loplus: vg,
            lotimes: wg,
            lowast: xg,
            lowbar: Ag,
            LowerLeftArrow: Cg,
            LowerRightArrow: _g,
            loz: Dg,
            lozenge: qg,
            lozf: Eg,
            lpar: Lg,
            lparlt: Sg,
            lrarr: Tg,
            lrcorner: Ng,
            lrhar: Rg,
            lrhard: Og,
            lrm: Ug,
            lrtri: Fg,
            lsaquo: Bg,
            lscr: Mg,
            Lscr: Pg,
            lsh: Ig,
            Lsh: zg,
            lsim: jg,
            lsime: Vg,
            lsimg: Hg,
            lsqb: Gg,
            lsquo: Wg,
            lsquor: Zg,
            Lstrok: Jg,
            lstrok: Kg,
            ltcc: $g,
            ltcir: Yg,
            lt: Xg,
            LT: Qg,
            Lt: ey,
            ltdot: ty,
            lthree: ry,
            ltimes: ny,
            ltlarr: iy,
            ltquest: ay,
            ltri: sy,
            ltrie: oy,
            ltrif: ly,
            ltrPar: uy,
            lurdshar: cy,
            luruhar: dy,
            lvertneqq: py,
            lvnE: fy,
            macr: hy,
            male: my,
            malt: by,
            maltese: gy,
            map: yy,
            mapsto: ky,
            mapstodown: vy,
            mapstoleft: wy,
            mapstoup: xy,
            marker: Ay,
            mcomma: Cy,
            Mcy: _y,
            mcy: Dy,
            mdash: qy,
            mDDot: Ey,
            measuredangle: Ly,
            MediumSpace: Sy,
            Mellintrf: Ty,
            Mfr: Ny,
            mfr: Ry,
            mho: Oy,
            micro: Uy,
            midast: Fy,
            midcir: By,
            mid: My,
            middot: Py,
            minusb: Iy,
            minus: zy,
            minusd: jy,
            minusdu: Vy,
            MinusPlus: Hy,
            mlcp: Gy,
            mldr: Wy,
            mnplus: Zy,
            models: Jy,
            Mopf: Ky,
            mopf: $y,
            mp: Yy,
            mscr: Xy,
            Mscr: Qy,
            mstpos: ek,
            Mu: tk,
            mu: rk,
            multimap: nk,
            mumap: ik,
            nabla: ak,
            Nacute: sk,
            nacute: ok,
            nang: lk,
            nap: uk,
            napE: ck,
            napid: dk,
            napos: pk,
            napprox: fk,
            natural: hk,
            naturals: mk,
            natur: bk,
            nbsp: gk,
            nbump: yk,
            nbumpe: kk,
            ncap: vk,
            Ncaron: wk,
            ncaron: xk,
            Ncedil: Ak,
            ncedil: Ck,
            ncong: _k,
            ncongdot: Dk,
            ncup: qk,
            Ncy: Ek,
            ncy: Lk,
            ndash: Sk,
            nearhk: Tk,
            nearr: Nk,
            neArr: Rk,
            nearrow: Ok,
            ne: Uk,
            nedot: Fk,
            NegativeMediumSpace: Bk,
            NegativeThickSpace: Mk,
            NegativeThinSpace: Pk,
            NegativeVeryThinSpace: Ik,
            nequiv: zk,
            nesear: jk,
            nesim: Vk,
            NestedGreaterGreater: Hk,
            NestedLessLess: Gk,
            NewLine: Wk,
            nexist: Zk,
            nexists: Jk,
            Nfr: Kk,
            nfr: $k,
            ngE: Yk,
            nge: Xk,
            ngeq: Qk,
            ngeqq: ev,
            ngeqslant: tv,
            nges: rv,
            nGg: nv,
            ngsim: iv,
            nGt: av,
            ngt: sv,
            ngtr: ov,
            nGtv: lv,
            nharr: uv,
            nhArr: cv,
            nhpar: dv,
            ni: pv,
            nis: fv,
            nisd: hv,
            niv: mv,
            NJcy: bv,
            njcy: gv,
            nlarr: yv,
            nlArr: kv,
            nldr: vv,
            nlE: wv,
            nle: xv,
            nleftarrow: Av,
            nLeftarrow: Cv,
            nleftrightarrow: _v,
            nLeftrightarrow: Dv,
            nleq: qv,
            nleqq: Ev,
            nleqslant: Lv,
            nles: Sv,
            nless: Tv,
            nLl: Nv,
            nlsim: Rv,
            nLt: Ov,
            nlt: Uv,
            nltri: Fv,
            nltrie: Bv,
            nLtv: Mv,
            nmid: Pv,
            NoBreak: Iv,
            NonBreakingSpace: zv,
            nopf: jv,
            Nopf: Vv,
            Not: Hv,
            not: Gv,
            NotCongruent: Wv,
            NotCupCap: Zv,
            NotDoubleVerticalBar: Jv,
            NotElement: Kv,
            NotEqual: $v,
            NotEqualTilde: Yv,
            NotExists: Xv,
            NotGreater: Qv,
            NotGreaterEqual: ew,
            NotGreaterFullEqual: tw,
            NotGreaterGreater: rw,
            NotGreaterLess: nw,
            NotGreaterSlantEqual: iw,
            NotGreaterTilde: aw,
            NotHumpDownHump: sw,
            NotHumpEqual: ow,
            notin: lw,
            notindot: uw,
            notinE: cw,
            notinva: dw,
            notinvb: pw,
            notinvc: fw,
            NotLeftTriangleBar: hw,
            NotLeftTriangle: mw,
            NotLeftTriangleEqual: bw,
            NotLess: gw,
            NotLessEqual: yw,
            NotLessGreater: kw,
            NotLessLess: vw,
            NotLessSlantEqual: ww,
            NotLessTilde: xw,
            NotNestedGreaterGreater: Aw,
            NotNestedLessLess: Cw,
            notni: _w,
            notniva: Dw,
            notnivb: qw,
            notnivc: Ew,
            NotPrecedes: Lw,
            NotPrecedesEqual: Sw,
            NotPrecedesSlantEqual: Tw,
            NotReverseElement: Nw,
            NotRightTriangleBar: Rw,
            NotRightTriangle: Ow,
            NotRightTriangleEqual: Uw,
            NotSquareSubset: Fw,
            NotSquareSubsetEqual: Bw,
            NotSquareSuperset: Mw,
            NotSquareSupersetEqual: Pw,
            NotSubset: Iw,
            NotSubsetEqual: zw,
            NotSucceeds: jw,
            NotSucceedsEqual: Vw,
            NotSucceedsSlantEqual: Hw,
            NotSucceedsTilde: Gw,
            NotSuperset: Ww,
            NotSupersetEqual: Zw,
            NotTilde: Jw,
            NotTildeEqual: Kw,
            NotTildeFullEqual: $w,
            NotTildeTilde: Yw,
            NotVerticalBar: Xw,
            nparallel: Qw,
            npar: ex,
            nparsl: tx,
            npart: rx,
            npolint: nx,
            npr: ix,
            nprcue: ax,
            nprec: sx,
            npreceq: ox,
            npre: lx,
            nrarrc: ux,
            nrarr: cx,
            nrArr: dx,
            nrarrw: px,
            nrightarrow: fx,
            nRightarrow: hx,
            nrtri: mx,
            nrtrie: bx,
            nsc: gx,
            nsccue: yx,
            nsce: kx,
            Nscr: vx,
            nscr: wx,
            nshortmid: xx,
            nshortparallel: Ax,
            nsim: Cx,
            nsime: _x,
            nsimeq: Dx,
            nsmid: qx,
            nspar: Ex,
            nsqsube: Lx,
            nsqsupe: Sx,
            nsub: Tx,
            nsubE: Nx,
            nsube: Rx,
            nsubset: Ox,
            nsubseteq: Ux,
            nsubseteqq: Fx,
            nsucc: Bx,
            nsucceq: Mx,
            nsup: Px,
            nsupE: Ix,
            nsupe: zx,
            nsupset: jx,
            nsupseteq: Vx,
            nsupseteqq: Hx,
            ntgl: Gx,
            Ntilde: Wx,
            ntilde: Zx,
            ntlg: Jx,
            ntriangleleft: Kx,
            ntrianglelefteq: $x,
            ntriangleright: Yx,
            ntrianglerighteq: Xx,
            Nu: Qx,
            nu: eA,
            num: tA,
            numero: rA,
            numsp: nA,
            nvap: iA,
            nvdash: aA,
            nvDash: sA,
            nVdash: oA,
            nVDash: lA,
            nvge: uA,
            nvgt: cA,
            nvHarr: dA,
            nvinfin: pA,
            nvlArr: fA,
            nvle: hA,
            nvlt: mA,
            nvltrie: bA,
            nvrArr: gA,
            nvrtrie: yA,
            nvsim: kA,
            nwarhk: vA,
            nwarr: wA,
            nwArr: xA,
            nwarrow: AA,
            nwnear: CA,
            Oacute: _A,
            oacute: DA,
            oast: qA,
            Ocirc: EA,
            ocirc: LA,
            ocir: SA,
            Ocy: TA,
            ocy: NA,
            odash: RA,
            Odblac: OA,
            odblac: UA,
            odiv: FA,
            odot: BA,
            odsold: MA,
            OElig: PA,
            oelig: IA,
            ofcir: zA,
            Ofr: jA,
            ofr: VA,
            ogon: HA,
            Ograve: GA,
            ograve: WA,
            ogt: ZA,
            ohbar: JA,
            ohm: KA,
            oint: $A,
            olarr: YA,
            olcir: XA,
            olcross: QA,
            oline: eC,
            olt: tC,
            Omacr: rC,
            omacr: nC,
            Omega: iC,
            omega: aC,
            Omicron: sC,
            omicron: oC,
            omid: lC,
            ominus: uC,
            Oopf: cC,
            oopf: dC,
            opar: pC,
            OpenCurlyDoubleQuote: fC,
            OpenCurlyQuote: hC,
            operp: mC,
            oplus: bC,
            orarr: gC,
            Or: yC,
            or: kC,
            ord: vC,
            order: wC,
            orderof: xC,
            ordf: AC,
            ordm: CC,
            origof: _C,
            oror: DC,
            orslope: qC,
            orv: EC,
            oS: LC,
            Oscr: SC,
            oscr: TC,
            Oslash: NC,
            oslash: RC,
            osol: OC,
            Otilde: UC,
            otilde: FC,
            otimesas: BC,
            Otimes: MC,
            otimes: PC,
            Ouml: IC,
            ouml: zC,
            ovbar: jC,
            OverBar: VC,
            OverBrace: HC,
            OverBracket: GC,
            OverParenthesis: WC,
            para: ZC,
            parallel: JC,
            par: KC,
            parsim: $C,
            parsl: YC,
            part: XC,
            PartialD: QC,
            Pcy: e_,
            pcy: t_,
            percnt: r_,
            period: n_,
            permil: i_,
            perp: a_,
            pertenk: s_,
            Pfr: o_,
            pfr: l_,
            Phi: u_,
            phi: c_,
            phiv: d_,
            phmmat: p_,
            phone: f_,
            Pi: h_,
            pi: m_,
            pitchfork: b_,
            piv: g_,
            planck: y_,
            planckh: k_,
            plankv: v_,
            plusacir: w_,
            plusb: x_,
            pluscir: A_,
            plus: C_,
            plusdo: __,
            plusdu: D_,
            pluse: q_,
            PlusMinus: E_,
            plusmn: L_,
            plussim: S_,
            plustwo: T_,
            pm: N_,
            Poincareplane: R_,
            pointint: O_,
            popf: U_,
            Popf: F_,
            pound: B_,
            prap: M_,
            Pr: P_,
            pr: I_,
            prcue: z_,
            precapprox: j_,
            prec: V_,
            preccurlyeq: H_,
            Precedes: G_,
            PrecedesEqual: W_,
            PrecedesSlantEqual: Z_,
            PrecedesTilde: J_,
            preceq: K_,
            precnapprox: $_,
            precneqq: Y_,
            precnsim: X_,
            pre: Q_,
            prE: eD,
            precsim: tD,
            prime: rD,
            Prime: nD,
            primes: iD,
            prnap: aD,
            prnE: sD,
            prnsim: oD,
            prod: lD,
            Product: uD,
            profalar: cD,
            profline: dD,
            profsurf: pD,
            prop: fD,
            Proportional: hD,
            Proportion: mD,
            propto: bD,
            prsim: gD,
            prurel: yD,
            Pscr: kD,
            pscr: vD,
            Psi: wD,
            psi: xD,
            puncsp: AD,
            Qfr: CD,
            qfr: _D,
            qint: DD,
            qopf: qD,
            Qopf: ED,
            qprime: LD,
            Qscr: SD,
            qscr: TD,
            quaternions: ND,
            quatint: RD,
            quest: OD,
            questeq: UD,
            quot: FD,
            QUOT: BD,
            rAarr: MD,
            race: PD,
            Racute: ID,
            racute: zD,
            radic: jD,
            raemptyv: VD,
            rang: HD,
            Rang: GD,
            rangd: WD,
            range: ZD,
            rangle: JD,
            raquo: KD,
            rarrap: $D,
            rarrb: YD,
            rarrbfs: XD,
            rarrc: QD,
            rarr: eq,
            Rarr: tq,
            rArr: rq,
            rarrfs: nq,
            rarrhk: iq,
            rarrlp: aq,
            rarrpl: sq,
            rarrsim: oq,
            Rarrtl: lq,
            rarrtl: uq,
            rarrw: cq,
            ratail: dq,
            rAtail: pq,
            ratio: fq,
            rationals: hq,
            rbarr: mq,
            rBarr: bq,
            RBarr: gq,
            rbbrk: yq,
            rbrace: kq,
            rbrack: vq,
            rbrke: wq,
            rbrksld: xq,
            rbrkslu: Aq,
            Rcaron: Cq,
            rcaron: _q,
            Rcedil: Dq,
            rcedil: qq,
            rceil: Eq,
            rcub: Lq,
            Rcy: Sq,
            rcy: Tq,
            rdca: Nq,
            rdldhar: Rq,
            rdquo: Oq,
            rdquor: Uq,
            rdsh: Fq,
            real: Bq,
            realine: Mq,
            realpart: Pq,
            reals: Iq,
            Re: zq,
            rect: jq,
            reg: Vq,
            REG: Hq,
            ReverseElement: Gq,
            ReverseEquilibrium: Wq,
            ReverseUpEquilibrium: Zq,
            rfisht: Jq,
            rfloor: Kq,
            rfr: $q,
            Rfr: Yq,
            rHar: Xq,
            rhard: Qq,
            rharu: eE,
            rharul: tE,
            Rho: rE,
            rho: nE,
            rhov: iE,
            RightAngleBracket: aE,
            RightArrowBar: sE,
            rightarrow: oE,
            RightArrow: lE,
            Rightarrow: uE,
            RightArrowLeftArrow: cE,
            rightarrowtail: dE,
            RightCeiling: pE,
            RightDoubleBracket: fE,
            RightDownTeeVector: hE,
            RightDownVectorBar: mE,
            RightDownVector: bE,
            RightFloor: gE,
            rightharpoondown: yE,
            rightharpoonup: kE,
            rightleftarrows: vE,
            rightleftharpoons: wE,
            rightrightarrows: xE,
            rightsquigarrow: AE,
            RightTeeArrow: CE,
            RightTee: _E,
            RightTeeVector: DE,
            rightthreetimes: qE,
            RightTriangleBar: EE,
            RightTriangle: LE,
            RightTriangleEqual: SE,
            RightUpDownVector: TE,
            RightUpTeeVector: NE,
            RightUpVectorBar: RE,
            RightUpVector: OE,
            RightVectorBar: UE,
            RightVector: FE,
            ring: BE,
            risingdotseq: ME,
            rlarr: PE,
            rlhar: IE,
            rlm: zE,
            rmoustache: jE,
            rmoust: VE,
            rnmid: HE,
            roang: GE,
            roarr: WE,
            robrk: ZE,
            ropar: JE,
            ropf: KE,
            Ropf: $E,
            roplus: YE,
            rotimes: XE,
            RoundImplies: QE,
            rpar: eL,
            rpargt: tL,
            rppolint: rL,
            rrarr: nL,
            Rrightarrow: iL,
            rsaquo: aL,
            rscr: sL,
            Rscr: oL,
            rsh: lL,
            Rsh: uL,
            rsqb: cL,
            rsquo: dL,
            rsquor: pL,
            rthree: fL,
            rtimes: hL,
            rtri: mL,
            rtrie: bL,
            rtrif: gL,
            rtriltri: yL,
            RuleDelayed: kL,
            ruluhar: vL,
            rx: wL,
            Sacute: xL,
            sacute: AL,
            sbquo: CL,
            scap: _L,
            Scaron: DL,
            scaron: qL,
            Sc: EL,
            sc: LL,
            sccue: SL,
            sce: TL,
            scE: NL,
            Scedil: RL,
            scedil: OL,
            Scirc: UL,
            scirc: FL,
            scnap: BL,
            scnE: ML,
            scnsim: PL,
            scpolint: IL,
            scsim: zL,
            Scy: jL,
            scy: VL,
            sdotb: HL,
            sdot: GL,
            sdote: WL,
            searhk: ZL,
            searr: JL,
            seArr: KL,
            searrow: $L,
            sect: YL,
            semi: XL,
            seswar: QL,
            setminus: eS,
            setmn: tS,
            sext: rS,
            Sfr: nS,
            sfr: iS,
            sfrown: aS,
            sharp: sS,
            SHCHcy: oS,
            shchcy: lS,
            SHcy: uS,
            shcy: cS,
            ShortDownArrow: dS,
            ShortLeftArrow: pS,
            shortmid: fS,
            shortparallel: hS,
            ShortRightArrow: mS,
            ShortUpArrow: bS,
            shy: gS,
            Sigma: yS,
            sigma: kS,
            sigmaf: vS,
            sigmav: wS,
            sim: xS,
            simdot: AS,
            sime: CS,
            simeq: _S,
            simg: DS,
            simgE: qS,
            siml: ES,
            simlE: LS,
            simne: SS,
            simplus: TS,
            simrarr: NS,
            slarr: RS,
            SmallCircle: OS,
            smallsetminus: US,
            smashp: FS,
            smeparsl: BS,
            smid: MS,
            smile: PS,
            smt: IS,
            smte: zS,
            smtes: jS,
            SOFTcy: VS,
            softcy: HS,
            solbar: GS,
            solb: WS,
            sol: ZS,
            Sopf: JS,
            sopf: KS,
            spades: $S,
            spadesuit: YS,
            spar: XS,
            sqcap: QS,
            sqcaps: eT,
            sqcup: tT,
            sqcups: rT,
            Sqrt: nT,
            sqsub: iT,
            sqsube: aT,
            sqsubset: sT,
            sqsubseteq: oT,
            sqsup: lT,
            sqsupe: uT,
            sqsupset: cT,
            sqsupseteq: dT,
            square: pT,
            Square: fT,
            SquareIntersection: hT,
            SquareSubset: mT,
            SquareSubsetEqual: bT,
            SquareSuperset: gT,
            SquareSupersetEqual: yT,
            SquareUnion: kT,
            squarf: vT,
            squ: wT,
            squf: xT,
            srarr: AT,
            Sscr: CT,
            sscr: _T,
            ssetmn: DT,
            ssmile: qT,
            sstarf: ET,
            Star: LT,
            star: ST,
            starf: TT,
            straightepsilon: NT,
            straightphi: RT,
            strns: OT,
            sub: UT,
            Sub: FT,
            subdot: BT,
            subE: MT,
            sube: PT,
            subedot: IT,
            submult: zT,
            subnE: jT,
            subne: VT,
            subplus: HT,
            subrarr: GT,
            subset: WT,
            Subset: ZT,
            subseteq: JT,
            subseteqq: KT,
            SubsetEqual: $T,
            subsetneq: YT,
            subsetneqq: XT,
            subsim: QT,
            subsub: eN,
            subsup: tN,
            succapprox: rN,
            succ: nN,
            succcurlyeq: iN,
            Succeeds: aN,
            SucceedsEqual: sN,
            SucceedsSlantEqual: oN,
            SucceedsTilde: lN,
            succeq: uN,
            succnapprox: cN,
            succneqq: dN,
            succnsim: pN,
            succsim: fN,
            SuchThat: hN,
            sum: mN,
            Sum: bN,
            sung: gN,
            sup1: yN,
            sup2: kN,
            sup3: vN,
            sup: wN,
            Sup: xN,
            supdot: AN,
            supdsub: CN,
            supE: _N,
            supe: DN,
            supedot: qN,
            Superset: EN,
            SupersetEqual: LN,
            suphsol: SN,
            suphsub: TN,
            suplarr: NN,
            supmult: RN,
            supnE: ON,
            supne: UN,
            supplus: FN,
            supset: BN,
            Supset: MN,
            supseteq: PN,
            supseteqq: IN,
            supsetneq: zN,
            supsetneqq: jN,
            supsim: VN,
            supsub: HN,
            supsup: GN,
            swarhk: WN,
            swarr: ZN,
            swArr: JN,
            swarrow: KN,
            swnwar: $N,
            szlig: YN,
            Tab: XN,
            target: QN,
            Tau: eR,
            tau: tR,
            tbrk: rR,
            Tcaron: nR,
            tcaron: iR,
            Tcedil: aR,
            tcedil: sR,
            Tcy: oR,
            tcy: lR,
            tdot: uR,
            telrec: cR,
            Tfr: dR,
            tfr: pR,
            there4: fR,
            therefore: hR,
            Therefore: mR,
            Theta: bR,
            theta: gR,
            thetasym: yR,
            thetav: kR,
            thickapprox: vR,
            thicksim: wR,
            ThickSpace: xR,
            ThinSpace: AR,
            thinsp: CR,
            thkap: _R,
            thksim: DR,
            THORN: qR,
            thorn: ER,
            tilde: LR,
            Tilde: SR,
            TildeEqual: TR,
            TildeFullEqual: NR,
            TildeTilde: RR,
            timesbar: OR,
            timesb: UR,
            times: FR,
            timesd: BR,
            tint: MR,
            toea: PR,
            topbot: IR,
            topcir: zR,
            top: jR,
            Topf: VR,
            topf: HR,
            topfork: GR,
            tosa: WR,
            tprime: ZR,
            trade: JR,
            TRADE: KR,
            triangle: $R,
            triangledown: YR,
            triangleleft: XR,
            trianglelefteq: QR,
            triangleq: eO,
            triangleright: tO,
            trianglerighteq: rO,
            tridot: nO,
            trie: iO,
            triminus: aO,
            TripleDot: sO,
            triplus: oO,
            trisb: lO,
            tritime: uO,
            trpezium: cO,
            Tscr: dO,
            tscr: pO,
            TScy: fO,
            tscy: hO,
            TSHcy: mO,
            tshcy: bO,
            Tstrok: gO,
            tstrok: yO,
            twixt: kO,
            twoheadleftarrow: vO,
            twoheadrightarrow: wO,
            Uacute: xO,
            uacute: AO,
            uarr: CO,
            Uarr: _O,
            uArr: DO,
            Uarrocir: qO,
            Ubrcy: EO,
            ubrcy: LO,
            Ubreve: SO,
            ubreve: TO,
            Ucirc: NO,
            ucirc: RO,
            Ucy: OO,
            ucy: UO,
            udarr: FO,
            Udblac: BO,
            udblac: MO,
            udhar: PO,
            ufisht: IO,
            Ufr: zO,
            ufr: jO,
            Ugrave: VO,
            ugrave: HO,
            uHar: GO,
            uharl: WO,
            uharr: ZO,
            uhblk: JO,
            ulcorn: KO,
            ulcorner: $O,
            ulcrop: YO,
            ultri: XO,
            Umacr: QO,
            umacr: eU,
            uml: tU,
            UnderBar: rU,
            UnderBrace: nU,
            UnderBracket: iU,
            UnderParenthesis: aU,
            Union: sU,
            UnionPlus: oU,
            Uogon: lU,
            uogon: uU,
            Uopf: cU,
            uopf: dU,
            UpArrowBar: pU,
            uparrow: fU,
            UpArrow: hU,
            Uparrow: mU,
            UpArrowDownArrow: bU,
            updownarrow: gU,
            UpDownArrow: yU,
            Updownarrow: kU,
            UpEquilibrium: vU,
            upharpoonleft: wU,
            upharpoonright: xU,
            uplus: AU,
            UpperLeftArrow: CU,
            UpperRightArrow: _U,
            upsi: DU,
            Upsi: qU,
            upsih: EU,
            Upsilon: LU,
            upsilon: SU,
            UpTeeArrow: TU,
            UpTee: NU,
            upuparrows: RU,
            urcorn: OU,
            urcorner: UU,
            urcrop: FU,
            Uring: BU,
            uring: MU,
            urtri: PU,
            Uscr: IU,
            uscr: zU,
            utdot: jU,
            Utilde: VU,
            utilde: HU,
            utri: GU,
            utrif: WU,
            uuarr: ZU,
            Uuml: JU,
            uuml: KU,
            uwangle: $U,
            vangrt: YU,
            varepsilon: XU,
            varkappa: QU,
            varnothing: eF,
            varphi: tF,
            varpi: rF,
            varpropto: nF,
            varr: iF,
            vArr: aF,
            varrho: sF,
            varsigma: oF,
            varsubsetneq: lF,
            varsubsetneqq: uF,
            varsupsetneq: cF,
            varsupsetneqq: dF,
            vartheta: pF,
            vartriangleleft: fF,
            vartriangleright: hF,
            vBar: mF,
            Vbar: bF,
            vBarv: gF,
            Vcy: yF,
            vcy: kF,
            vdash: vF,
            vDash: wF,
            Vdash: xF,
            VDash: AF,
            Vdashl: CF,
            veebar: _F,
            vee: DF,
            Vee: qF,
            veeeq: EF,
            vellip: LF,
            verbar: SF,
            Verbar: TF,
            vert: NF,
            Vert: RF,
            VerticalBar: OF,
            VerticalLine: UF,
            VerticalSeparator: FF,
            VerticalTilde: BF,
            VeryThinSpace: MF,
            Vfr: PF,
            vfr: IF,
            vltri: zF,
            vnsub: jF,
            vnsup: VF,
            Vopf: HF,
            vopf: GF,
            vprop: WF,
            vrtri: ZF,
            Vscr: JF,
            vscr: KF,
            vsubnE: $F,
            vsubne: YF,
            vsupnE: XF,
            vsupne: QF,
            Vvdash: eB,
            vzigzag: tB,
            Wcirc: rB,
            wcirc: nB,
            wedbar: iB,
            wedge: aB,
            Wedge: sB,
            wedgeq: oB,
            weierp: lB,
            Wfr: uB,
            wfr: cB,
            Wopf: dB,
            wopf: pB,
            wp: fB,
            wr: hB,
            wreath: mB,
            Wscr: bB,
            wscr: gB,
            xcap: yB,
            xcirc: kB,
            xcup: vB,
            xdtri: wB,
            Xfr: xB,
            xfr: AB,
            xharr: CB,
            xhArr: _B,
            Xi: DB,
            xi: qB,
            xlarr: EB,
            xlArr: LB,
            xmap: SB,
            xnis: TB,
            xodot: NB,
            Xopf: RB,
            xopf: OB,
            xoplus: UB,
            xotime: FB,
            xrarr: BB,
            xrArr: MB,
            Xscr: PB,
            xscr: IB,
            xsqcup: zB,
            xuplus: jB,
            xutri: VB,
            xvee: HB,
            xwedge: GB,
            Yacute: WB,
            yacute: ZB,
            YAcy: JB,
            yacy: KB,
            Ycirc: $B,
            ycirc: YB,
            Ycy: XB,
            ycy: QB,
            yen: eM,
            Yfr: tM,
            yfr: rM,
            YIcy: nM,
            yicy: iM,
            Yopf: aM,
            yopf: sM,
            Yscr: oM,
            yscr: lM,
            YUcy: uM,
            yucy: cM,
            yuml: dM,
            Yuml: pM,
            Zacute: fM,
            zacute: hM,
            Zcaron: mM,
            zcaron: bM,
            Zcy: gM,
            zcy: yM,
            Zdot: kM,
            zdot: vM,
            zeetrf: wM,
            ZeroWidthSpace: xM,
            Zeta: AM,
            zeta: CM,
            zfr: _M,
            Zfr: DM,
            ZHcy: qM,
            zhcy: EM,
            zigrarr: LM,
            zopf: SM,
            Zopf: TM,
            Zscr: NM,
            zscr: RM,
            zwj: OM,
            zwnj: UM,
            default: FM,
          }),
          MM = "Á",
          PM = "á",
          IM = "Â",
          zM = "â",
          jM = "´",
          VM = "Æ",
          HM = "æ",
          GM = "À",
          WM = "à",
          ZM = "&",
          JM = "&",
          KM = "Å",
          $M = "å",
          YM = "Ã",
          XM = "ã",
          QM = "Ä",
          eP = "ä",
          tP = "¦",
          rP = "Ç",
          nP = "ç",
          iP = "¸",
          aP = "¢",
          sP = "©",
          oP = "©",
          lP = "¤",
          uP = "°",
          cP = "÷",
          dP = "É",
          pP = "é",
          fP = "Ê",
          hP = "ê",
          mP = "È",
          bP = "è",
          gP = "Ð",
          yP = "ð",
          kP = "Ë",
          vP = "ë",
          wP = "½",
          xP = "¼",
          AP = "¾",
          CP = ">",
          _P = ">",
          DP = "Í",
          qP = "í",
          EP = "Î",
          LP = "î",
          SP = "¡",
          TP = "Ì",
          NP = "ì",
          RP = "¿",
          OP = "Ï",
          UP = "ï",
          FP = "«",
          BP = "<",
          MP = "<",
          PP = "¯",
          IP = "µ",
          zP = "·",
          jP = " ",
          VP = "¬",
          HP = "Ñ",
          GP = "ñ",
          WP = "Ó",
          ZP = "ó",
          JP = "Ô",
          KP = "ô",
          $P = "Ò",
          YP = "ò",
          XP = "ª",
          QP = "º",
          eI = "Ø",
          tI = "ø",
          rI = "Õ",
          nI = "õ",
          iI = "Ö",
          aI = "ö",
          sI = "¶",
          oI = "±",
          lI = "£",
          uI = '"',
          cI = '"',
          dI = "»",
          pI = "®",
          fI = "®",
          hI = "§",
          mI = "­",
          bI = "¹",
          gI = "²",
          yI = "³",
          kI = "ß",
          vI = "Þ",
          wI = "þ",
          xI = "×",
          AI = "Ú",
          CI = "ú",
          _I = "Û",
          DI = "û",
          qI = "Ù",
          EI = "ù",
          LI = "¨",
          SI = "Ü",
          TI = "ü",
          NI = "Ý",
          RI = "ý",
          OI = "¥",
          UI = "ÿ",
          FI = {
            Aacute: MM,
            aacute: PM,
            Acirc: IM,
            acirc: zM,
            acute: jM,
            AElig: VM,
            aelig: HM,
            Agrave: GM,
            agrave: WM,
            amp: ZM,
            AMP: JM,
            Aring: KM,
            aring: $M,
            Atilde: YM,
            atilde: XM,
            Auml: QM,
            auml: eP,
            brvbar: tP,
            Ccedil: rP,
            ccedil: nP,
            cedil: iP,
            cent: aP,
            copy: sP,
            COPY: oP,
            curren: lP,
            deg: uP,
            divide: cP,
            Eacute: dP,
            eacute: pP,
            Ecirc: fP,
            ecirc: hP,
            Egrave: mP,
            egrave: bP,
            ETH: gP,
            eth: yP,
            Euml: kP,
            euml: vP,
            frac12: wP,
            frac14: xP,
            frac34: AP,
            gt: CP,
            GT: _P,
            Iacute: DP,
            iacute: qP,
            Icirc: EP,
            icirc: LP,
            iexcl: SP,
            Igrave: TP,
            igrave: NP,
            iquest: RP,
            Iuml: OP,
            iuml: UP,
            laquo: FP,
            lt: BP,
            LT: MP,
            macr: PP,
            micro: IP,
            middot: zP,
            nbsp: jP,
            not: VP,
            Ntilde: HP,
            ntilde: GP,
            Oacute: WP,
            oacute: ZP,
            Ocirc: JP,
            ocirc: KP,
            Ograve: $P,
            ograve: YP,
            ordf: XP,
            ordm: QP,
            Oslash: eI,
            oslash: tI,
            Otilde: rI,
            otilde: nI,
            Ouml: iI,
            ouml: aI,
            para: sI,
            plusmn: oI,
            pound: lI,
            quot: uI,
            QUOT: cI,
            raquo: dI,
            reg: pI,
            REG: fI,
            sect: hI,
            shy: mI,
            sup1: bI,
            sup2: gI,
            sup3: yI,
            szlig: kI,
            THORN: vI,
            thorn: wI,
            times: xI,
            Uacute: AI,
            uacute: CI,
            Ucirc: _I,
            ucirc: DI,
            Ugrave: qI,
            ugrave: EI,
            uml: LI,
            Uuml: SI,
            uuml: TI,
            Yacute: NI,
            yacute: RI,
            yen: OI,
            yuml: UI,
          },
          BI = Object.freeze({
            __proto__: null,
            Aacute: MM,
            aacute: PM,
            Acirc: IM,
            acirc: zM,
            acute: jM,
            AElig: VM,
            aelig: HM,
            Agrave: GM,
            agrave: WM,
            amp: ZM,
            AMP: JM,
            Aring: KM,
            aring: $M,
            Atilde: YM,
            atilde: XM,
            Auml: QM,
            auml: eP,
            brvbar: tP,
            Ccedil: rP,
            ccedil: nP,
            cedil: iP,
            cent: aP,
            copy: sP,
            COPY: oP,
            curren: lP,
            deg: uP,
            divide: cP,
            Eacute: dP,
            eacute: pP,
            Ecirc: fP,
            ecirc: hP,
            Egrave: mP,
            egrave: bP,
            ETH: gP,
            eth: yP,
            Euml: kP,
            euml: vP,
            frac12: wP,
            frac14: xP,
            frac34: AP,
            gt: CP,
            GT: _P,
            Iacute: DP,
            iacute: qP,
            Icirc: EP,
            icirc: LP,
            iexcl: SP,
            Igrave: TP,
            igrave: NP,
            iquest: RP,
            Iuml: OP,
            iuml: UP,
            laquo: FP,
            lt: BP,
            LT: MP,
            macr: PP,
            micro: IP,
            middot: zP,
            nbsp: jP,
            not: VP,
            Ntilde: HP,
            ntilde: GP,
            Oacute: WP,
            oacute: ZP,
            Ocirc: JP,
            ocirc: KP,
            Ograve: $P,
            ograve: YP,
            ordf: XP,
            ordm: QP,
            Oslash: eI,
            oslash: tI,
            Otilde: rI,
            otilde: nI,
            Ouml: iI,
            ouml: aI,
            para: sI,
            plusmn: oI,
            pound: lI,
            quot: uI,
            QUOT: cI,
            raquo: dI,
            reg: pI,
            REG: fI,
            sect: hI,
            shy: mI,
            sup1: bI,
            sup2: gI,
            sup3: yI,
            szlig: kI,
            THORN: vI,
            thorn: wI,
            times: xI,
            Uacute: AI,
            uacute: CI,
            Ucirc: _I,
            ucirc: DI,
            Ugrave: qI,
            ugrave: EI,
            uml: LI,
            Uuml: SI,
            uuml: TI,
            Yacute: NI,
            yacute: RI,
            yen: OI,
            yuml: UI,
            default: FI,
          }),
          MI = "&",
          PI = "'",
          II = ">",
          zI = "<",
          jI = '"',
          VI = { amp: MI, apos: PI, gt: II, lt: zI, quot: jI },
          HI = Object.freeze({
            __proto__: null,
            amp: MI,
            apos: PI,
            gt: II,
            lt: zI,
            quot: jI,
            default: VI,
          }),
          GI = {
            0: 65533,
            128: 8364,
            130: 8218,
            131: 402,
            132: 8222,
            133: 8230,
            134: 8224,
            135: 8225,
            136: 710,
            137: 8240,
            138: 352,
            139: 8249,
            140: 338,
            142: 381,
            145: 8216,
            146: 8217,
            147: 8220,
            148: 8221,
            149: 8226,
            150: 8211,
            151: 8212,
            152: 732,
            153: 8482,
            154: 353,
            155: 8250,
            156: 339,
            158: 382,
            159: 376,
          },
          WI = Object.freeze({ __proto__: null, default: GI }),
          ZI = m(WI),
          JI = h(function (e, t) {
            var r =
              (p && p.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n = r(ZI);
            function i(e) {
              if ((e >= 55296 && e <= 57343) || e > 1114111) return "�";
              e in n.default && (e = n.default[e]);
              var t = "";
              return (
                e > 65535 &&
                  ((e -= 65536),
                  (t += String.fromCharCode(((e >>> 10) & 1023) | 55296)),
                  (e = 56320 | (1023 & e))),
                (t += String.fromCharCode(e)),
                t
              );
            }
            t.default = i;
          });
        f(JI);
        var KI = m(BM),
          $I = m(BI),
          YI = m(HI),
          XI = h(function (e, t) {
            var r =
              (p && p.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n = r(KI),
              i = r($I),
              a = r(YI),
              s = r(JI);
            function o(e) {
              var t = Object.keys(e).join("|"),
                r = u(e);
              t += "|#[xX][\\da-fA-F]+|#\\d+";
              var n = new RegExp("&(?:" + t + ");", "g");
              return function (e) {
                return String(e).replace(n, r);
              };
            }
            (t.decodeXML = o(a.default)), (t.decodeHTMLStrict = o(n.default));
            var l = function (e, t) {
              return e < t ? 1 : -1;
            };
            function u(e) {
              return function (t) {
                return "#" === t.charAt(1)
                  ? "X" === t.charAt(2) || "x" === t.charAt(2)
                    ? s.default(parseInt(t.substr(3), 16))
                    : s.default(parseInt(t.substr(2), 10))
                  : e[t.slice(1, -1)];
              };
            }
            t.decodeHTML = (function () {
              for (
                var e = Object.keys(i.default).sort(l),
                  t = Object.keys(n.default).sort(l),
                  r = 0,
                  a = 0;
                r < t.length;
                r++
              )
                e[a] === t[r] ? ((t[r] += ";?"), a++) : (t[r] += ";");
              var s = new RegExp(
                  "&(?:" + t.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)",
                  "g"
                ),
                o = u(n.default);
              function c(e) {
                return ";" !== e.substr(-1) && (e += ";"), o(e);
              }
              return function (e) {
                return String(e).replace(s, c);
              };
            })();
          });
        f(XI);
        XI.decodeXML, XI.decodeHTMLStrict, XI.decodeHTML;
        var QI = h(function (e, t) {
          var r =
            (p && p.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
          Object.defineProperty(t, "__esModule", { value: !0 });
          var n = r(YI),
            i = u(n.default),
            a = c(i);
          t.encodeXML = b(i, a);
          var s = r(KI),
            o = u(s.default),
            l = c(o);
          function u(e) {
            return Object.keys(e)
              .sort()
              .reduce(function (t, r) {
                return (t[e[r]] = "&" + r + ";"), t;
              }, {});
          }
          function c(e) {
            var t = [],
              r = [];
            return (
              Object.keys(e).forEach(function (e) {
                return 1 === e.length ? t.push("\\" + e) : r.push(e);
              }),
              r.unshift("[" + t.join("") + "]"),
              new RegExp(r.join("|"), "g")
            );
          }
          t.encodeHTML = b(o, l);
          var d = /[^\0-\x7F]/g,
            f = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
          function h(e) {
            return "&#x" + e.charCodeAt(0).toString(16).toUpperCase() + ";";
          }
          function m(e, t) {
            var r = e.charCodeAt(0),
              n = e.charCodeAt(1),
              i = 1024 * (r - 55296) + n - 56320 + 65536;
            return "&#x" + i.toString(16).toUpperCase() + ";";
          }
          function b(e, t) {
            return function (r) {
              return r
                .replace(t, function (t) {
                  return e[t];
                })
                .replace(f, m)
                .replace(d, h);
            };
          }
          var g = c(i);
          function y(e) {
            return e.replace(g, h).replace(f, m).replace(d, h);
          }
          t.escape = y;
        });
        f(QI);
        QI.encodeXML, QI.encodeHTML, QI.escape;
        var ez = h(function (e, t) {
          function r(e, t) {
            return (!t || t <= 0 ? XI.decodeXML : XI.decodeHTML)(e);
          }
          function n(e, t) {
            return (!t || t <= 0 ? XI.decodeXML : XI.decodeHTMLStrict)(e);
          }
          function i(e, t) {
            return (!t || t <= 0 ? QI.encodeXML : QI.encodeHTML)(e);
          }
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.decode = r),
            (t.decodeStrict = n),
            (t.encode = i);
          var a = QI;
          (t.encodeXML = a.encodeXML),
            (t.encodeHTML = a.encodeHTML),
            (t.escape = a.escape),
            (t.encodeHTML4 = a.encodeHTML),
            (t.encodeHTML5 = a.encodeHTML);
          var s = XI;
          (t.decodeXML = s.decodeXML),
            (t.decodeHTML = s.decodeHTML),
            (t.decodeHTMLStrict = s.decodeHTMLStrict),
            (t.decodeHTML4 = s.decodeHTML),
            (t.decodeHTML5 = s.decodeHTML),
            (t.decodeHTML4Strict = s.decodeHTMLStrict),
            (t.decodeHTML5Strict = s.decodeHTMLStrict),
            (t.decodeXMLStrict = s.decodeXML);
        });
        f(ez);
        ez.decode,
          ez.decodeStrict,
          ez.encode,
          ez.encodeXML,
          ez.encodeHTML,
          ez.escape,
          ez.encodeHTML4,
          ez.encodeHTML5,
          ez.decodeXML;
        var tz,
          rz = ez.decodeHTML,
          nz =
            (ez.decodeHTMLStrict,
            ez.decodeHTML4,
            ez.decodeHTML5,
            ez.decodeHTML4Strict,
            ez.decodeHTML5Strict,
            ez.decodeXMLStrict,
            92),
          iz = "&(?:#x[a-f0-9]{1,6}|#[0-9]{1,7}|[a-z][a-z0-9]{1,31});",
          az = "[A-Za-z][A-Za-z0-9-]*",
          sz = "[a-zA-Z_:][a-zA-Z0-9:._-]*",
          oz = "[^\"'=<>`\\x00-\\x20]+",
          lz = "'[^']*'",
          uz = '"[^"]*"',
          cz = "(?:" + oz + "|" + lz + "|" + uz + ")",
          dz = "(?:\\s*=\\s*" + cz + ")",
          pz = "(?:\\s+" + sz + dz + "?)",
          fz = "<" + az + pz + "*\\s*/?>",
          hz = "</" + az + "\\s*[>]",
          mz = "\x3c!----\x3e|\x3c!--(?:-?[^>-])(?:-?[^-])*--\x3e",
          bz = "[<][?][\\s\\S]*?[?][>]",
          gz = "<![A-Z]+\\s+[^>]*>",
          yz = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
          kz =
            "(?:" +
            fz +
            "|" +
            hz +
            "|" +
            mz +
            "|" +
            bz +
            "|" +
            gz +
            "|" +
            yz +
            ")",
          vz = new RegExp("^" + kz),
          wz = /[\\&]/,
          xz = "[!\"#$%&'()*+,./:;<=>?@[\\\\\\]^_`{|}~-]",
          Az = new RegExp("\\\\" + xz + "|" + iz, "gi"),
          Cz = '[&<>"]',
          _z = new RegExp(Cz, "g"),
          Dz = function (e) {
            return e.charCodeAt(0) === nz ? e.charAt(1) : rz(e);
          },
          qz = function (e) {
            return wz.test(e) ? e.replace(Az, Dz) : e;
          },
          Ez = function (e) {
            try {
              return d(e);
            } catch (t) {
              return e;
            }
          },
          Lz = function (e) {
            switch (e) {
              case "&":
                return "&amp;";
              case "<":
                return "&lt;";
              case ">":
                return "&gt;";
              case '"':
                return "&quot;";
              default:
                return e;
            }
          },
          Sz = function (e) {
            return _z.test(e) ? e.replace(_z, Lz) : e;
          };
        function Tz(e) {
          return tz(e);
        }
        if (String.fromCodePoint)
          tz = function (e) {
            try {
              return String.fromCodePoint(e);
            } catch (t) {
              if (t instanceof RangeError) return String.fromCharCode(65533);
              throw t;
            }
          };
        else {
          var Nz = String.fromCharCode,
            Rz = Math.floor;
          tz = function () {
            var e,
              t,
              r = 16384,
              n = [],
              i = -1,
              a = arguments.length;
            if (!a) return "";
            var s = "";
            while (++i < a) {
              var o = Number(arguments[i]);
              if (!isFinite(o) || o < 0 || o > 1114111 || Rz(o) !== o)
                return String.fromCharCode(65533);
              o <= 65535
                ? n.push(o)
                : ((o -= 65536),
                  (e = 55296 + (o >> 10)),
                  (t = (o % 1024) + 56320),
                  n.push(e, t)),
                (i + 1 === a || n.length > r) &&
                  ((s += Nz.apply(null, n)), (n.length = 0));
            }
            return s;
          };
        }
        /*! http://mths.be/repeat v0.2.0 by @mathias */ String.prototype
          .repeat ||
          (function () {
            var e = (function () {
                try {
                  var e = {},
                    t = Object.defineProperty,
                    r = t(e, e, e) && t;
                } catch (n) {}
                return r;
              })(),
              t = function (e) {
                if (null == this) throw TypeError();
                var t = String(this),
                  r = e ? Number(e) : 0;
                if ((r != r && (r = 0), r < 0 || r == 1 / 0))
                  throw RangeError();
                var n = "";
                while (r) r % 2 == 1 && (n += t), r > 1 && (t += t), (r >>= 1);
                return n;
              };
            e
              ? e(String.prototype, "repeat", {
                  value: t,
                  configurable: !0,
                  writable: !0,
                })
              : (String.prototype.repeat = t);
          })();
        var Oz = Ez,
          Uz = qz,
          Fz = 10,
          Bz = 42,
          Mz = 95,
          Pz = 96,
          Iz = 91,
          zz = 93,
          jz = 60,
          Vz = 33,
          Hz = 92,
          Gz = 38,
          Wz = 40,
          Zz = 41,
          Jz = 58,
          Kz = 39,
          $z = 34,
          Yz = xz,
          Xz = "\\\\" + Yz,
          Qz = iz,
          ej = vz,
          tj = new RegExp(
            /[!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDF3C-\uDF3E]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]/
          ),
          rj = new RegExp(
            '^(?:"(' +
              Xz +
              '|[^"\\x00])*"|\'(' +
              Xz +
              "|[^'\\x00])*'|\\((" +
              Xz +
              "|[^()\\x00])*\\))"
          ),
          nj = /^(?:<(?:[^<>\n\\\x00]|\\.)*>)/,
          ij = new RegExp("^" + Yz),
          aj = new RegExp("^" + Qz, "i"),
          sj = /`+/,
          oj = /^`+/,
          lj = /\.\.\./g,
          uj = /--+/g,
          cj =
            /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/,
          dj = /^<[A-Za-z][A-Za-z0-9.+-]{1,31}:[^<>\x00-\x20]*>/i,
          pj = /^ *(?:\n *)?/,
          fj = /^[ \t\n\x0b\x0c\x0d]/,
          hj = /^\s/,
          mj = / *$/,
          bj = /^ */,
          gj = /^ *(?:\n|$)/,
          yj = /^\[(?:[^\\\[\]]|\\.){0,1000}\]/,
          kj = /^[^\n`\[\]\\!<&*_'"]+/m,
          vj = function (e) {
            var t = new s("text");
            return (t._literal = e), t;
          },
          wj = function (e) {
            return e
              .slice(1, e.length - 1)
              .trim()
              .replace(/[ \t\r\n]+/, " ")
              .toLowerCase()
              .toUpperCase();
          },
          xj = function (e) {
            var t = e.exec(this.subject.slice(this.pos));
            return null === t
              ? null
              : ((this.pos += t.index + t[0].length), t[0]);
          },
          Aj = function () {
            return this.pos < this.subject.length
              ? this.subject.charCodeAt(this.pos)
              : -1;
          },
          Cj = function () {
            return this.match(pj), !0;
          },
          _j = function (e) {
            var t = this.match(oj);
            if (null === t) return !1;
            var r,
              n,
              i,
              a = this.pos;
            while (null !== (r = this.match(sj)))
              if (r === t)
                return (
                  (n = new s("code")),
                  (i = this.subject
                    .slice(a, this.pos - t.length)
                    .replace(/\n/gm, " ")),
                  i.length > 0 &&
                  null !== i.match(/[^ ]/) &&
                  " " == i[0] &&
                  " " == i[i.length - 1]
                    ? (n._literal = i.slice(1, i.length - 1))
                    : (n._literal = i),
                  e.appendChild(n),
                  !0
                );
            return (this.pos = a), e.appendChild(vj(t)), !0;
          },
          Dj = function (e) {
            var t,
              r = this.subject;
            return (
              (this.pos += 1),
              this.peek() === Fz
                ? ((this.pos += 1), (t = new s("linebreak")), e.appendChild(t))
                : ij.test(r.charAt(this.pos))
                ? (e.appendChild(vj(r.charAt(this.pos))), (this.pos += 1))
                : e.appendChild(vj("\\")),
              !0
            );
          },
          qj = function (e) {
            var t, r, n;
            return (t = this.match(cj))
              ? ((r = t.slice(1, t.length - 1)),
                (n = new s("link")),
                (n._destination = Oz("mailto:" + r)),
                (n._title = ""),
                n.appendChild(vj(r)),
                e.appendChild(n),
                !0)
              : !!(t = this.match(dj)) &&
                  ((r = t.slice(1, t.length - 1)),
                  (n = new s("link")),
                  (n._destination = Oz(r)),
                  (n._title = ""),
                  n.appendChild(vj(r)),
                  e.appendChild(n),
                  !0);
          },
          Ej = function (e) {
            var t = this.match(ej);
            if (null === t) return !1;
            var r = new s("html_inline");
            return (r._literal = t), e.appendChild(r), !0;
          },
          Lj = function (e) {
            var t,
              r,
              n,
              i,
              a,
              s,
              o,
              l,
              u,
              c,
              d,
              p = 0,
              f = this.pos;
            if (e === Kz || e === $z) p++, this.pos++;
            else while (this.peek() === e) p++, this.pos++;
            return 0 === p
              ? null
              : ((t = 0 === f ? "\n" : this.subject.charAt(f - 1)),
                (n = this.peek()),
                (r = -1 === n ? "\n" : Tz(n)),
                (l = hj.test(r)),
                (u = tj.test(r)),
                (c = hj.test(t)),
                (d = tj.test(t)),
                (i = !l && (!u || c || d)),
                (a = !c && (!d || l || u)),
                e === Mz
                  ? ((s = i && (!a || d)), (o = a && (!i || u)))
                  : e === Kz || e === $z
                  ? ((s = i && !a), (o = a))
                  : ((s = i), (o = a)),
                (this.pos = f),
                { numdelims: p, can_open: s, can_close: o });
          },
          Sj = function (e, t) {
            var r = this.scanDelims(e);
            if (!r) return !1;
            var n,
              i = r.numdelims,
              a = this.pos;
            (this.pos += i),
              (n =
                e === Kz
                  ? "’"
                  : e === $z
                  ? "“"
                  : this.subject.slice(a, this.pos));
            var s = vj(n);
            return (
              t.appendChild(s),
              (r.can_open || r.can_close) &&
                (this.options.smart || (e !== Kz && e !== $z)) &&
                ((this.delimiters = {
                  cc: e,
                  numdelims: i,
                  origdelims: i,
                  node: s,
                  previous: this.delimiters,
                  next: null,
                  can_open: r.can_open,
                  can_close: r.can_close,
                }),
                null !== this.delimiters.previous &&
                  (this.delimiters.previous.next = this.delimiters)),
              !0
            );
          },
          Tj = function (e) {
            null !== e.previous && (e.previous.next = e.next),
              null === e.next
                ? (this.delimiters = e.previous)
                : (e.next.previous = e.previous);
          },
          Nj = function (e, t) {
            e.next !== t && ((e.next = t), (t.previous = e));
          },
          Rj = function (e) {
            for (
              var t, r, n, i, a, o, l, u, c, d, p = [[], [], []], f = !1, h = 0;
              h < 3;
              h++
            )
              (p[h][Mz] = e), (p[h][Bz] = e), (p[h][Kz] = e), (p[h][$z] = e);
            r = this.delimiters;
            while (null !== r && r.previous !== e) r = r.previous;
            while (null !== r) {
              var m = r.cc;
              if (r.can_close) {
                (t = r.previous), (d = !1);
                while (null !== t && t !== e && t !== p[r.origdelims % 3][m]) {
                  if (
                    ((f =
                      (r.can_open || t.can_close) &&
                      r.origdelims % 3 !== 0 &&
                      (t.origdelims + r.origdelims) % 3 === 0),
                    t.cc === r.cc && t.can_open && !f)
                  ) {
                    d = !0;
                    break;
                  }
                  t = t.previous;
                }
                if (((n = r), m === Bz || m === Mz))
                  if (d) {
                    (l = r.numdelims >= 2 && t.numdelims >= 2 ? 2 : 1),
                      (i = t.node),
                      (a = r.node),
                      (t.numdelims -= l),
                      (r.numdelims -= l),
                      (i._literal = i._literal.slice(0, i._literal.length - l)),
                      (a._literal = a._literal.slice(0, a._literal.length - l));
                    var b = new s(1 === l ? "emph" : "strong");
                    u = i._next;
                    while (u && u !== a)
                      (c = u._next), u.unlink(), b.appendChild(u), (u = c);
                    i.insertAfter(b),
                      Nj(t, r),
                      0 === t.numdelims &&
                        (i.unlink(), this.removeDelimiter(t)),
                      0 === r.numdelims &&
                        (a.unlink(),
                        (o = r.next),
                        this.removeDelimiter(r),
                        (r = o));
                  } else r = r.next;
                else
                  m === Kz
                    ? ((r.node._literal = "’"),
                      d && (t.node._literal = "‘"),
                      (r = r.next))
                    : m === $z &&
                      ((r.node._literal = "”"),
                      d && (t.node.literal = "“"),
                      (r = r.next));
                d ||
                  ((p[n.origdelims % 3][m] = n.previous),
                  n.can_open || this.removeDelimiter(n));
              } else r = r.next;
            }
            while (null !== this.delimiters && this.delimiters !== e)
              this.removeDelimiter(this.delimiters);
          },
          Oj = function () {
            var e = this.match(rj);
            return null === e ? null : Uz(e.substr(1, e.length - 2));
          },
          Uj = function () {
            var e = this.match(nj);
            if (null === e) {
              if (this.peek() === jz) return null;
              var t,
                r = this.pos,
                n = 0;
              while (-1 !== (t = this.peek()))
                if (t === Hz && ij.test(this.subject.charAt(this.pos + 1)))
                  (this.pos += 1), -1 !== this.peek() && (this.pos += 1);
                else if (t === Wz) (this.pos += 1), (n += 1);
                else if (t === Zz) {
                  if (n < 1) break;
                  (this.pos += 1), (n -= 1);
                } else {
                  if (null !== fj.exec(Tz(t))) break;
                  this.pos += 1;
                }
              return (this.pos === r && t !== Zz) || 0 !== n
                ? null
                : ((e = this.subject.substr(r, this.pos - r)), Oz(Uz(e)));
            }
            return Oz(Uz(e.substr(1, e.length - 2)));
          },
          Fj = function () {
            var e = this.match(yj);
            return null === e || e.length > 1001 ? 0 : e.length;
          },
          Bj = function (e) {
            var t = this.pos;
            this.pos += 1;
            var r = vj("[");
            return e.appendChild(r), this.addBracket(r, t, !1), !0;
          },
          Mj = function (e) {
            var t = this.pos;
            if (((this.pos += 1), this.peek() === Iz)) {
              this.pos += 1;
              var r = vj("![");
              e.appendChild(r), this.addBracket(r, t + 1, !0);
            } else e.appendChild(vj("!"));
            return !0;
          },
          Pj = function (e) {
            var t,
              r,
              n,
              i,
              a,
              o,
              l = !1;
            if (
              ((this.pos += 1), (t = this.pos), (o = this.brackets), null === o)
            )
              return e.appendChild(vj("]")), !0;
            if (!o.active)
              return e.appendChild(vj("]")), this.removeBracket(), !0;
            r = o.image;
            var u = this.pos;
            if (
              (this.peek() === Wz &&
                (this.pos++,
                this.spnl() &&
                null !== (n = this.parseLinkDestination()) &&
                this.spnl() &&
                (fj.test(this.subject.charAt(this.pos - 1)) &&
                  (i = this.parseLinkTitle()),
                1) &&
                this.spnl() &&
                this.peek() === Zz
                  ? ((this.pos += 1), (l = !0))
                  : (this.pos = u)),
              !l)
            ) {
              var c = this.pos,
                d = this.parseLinkLabel();
              if (
                (d > 2
                  ? (a = this.subject.slice(c, c + d))
                  : o.bracketAfter || (a = this.subject.slice(o.index, t)),
                0 === d && (this.pos = u),
                a)
              ) {
                var p = this.refmap[wj(a)];
                p && ((n = p.destination), (i = p.title), (l = !0));
              }
            }
            if (l) {
              var f,
                h,
                m = new s(r ? "image" : "link");
              (m._destination = n), (m._title = i || ""), (f = o.node._next);
              while (f) (h = f._next), f.unlink(), m.appendChild(f), (f = h);
              if (
                (e.appendChild(m),
                this.processEmphasis(o.previousDelimiter),
                this.removeBracket(),
                o.node.unlink(),
                !r)
              ) {
                o = this.brackets;
                while (null !== o) o.image || (o.active = !1), (o = o.previous);
              }
              return !0;
            }
            return (
              this.removeBracket(), (this.pos = t), e.appendChild(vj("]")), !0
            );
          },
          Ij = function (e, t, r) {
            null !== this.brackets && (this.brackets.bracketAfter = !0),
              (this.brackets = {
                node: e,
                previous: this.brackets,
                previousDelimiter: this.delimiters,
                index: t,
                image: r,
                active: !0,
              });
          },
          zj = function () {
            this.brackets = this.brackets.previous;
          },
          jj = function (e) {
            var t;
            return !!(t = this.match(aj)) && (e.appendChild(vj(rz(t))), !0);
          },
          Vj = function (e) {
            var t;
            return (
              !!(t = this.match(kj)) &&
              (this.options.smart
                ? e.appendChild(
                    vj(
                      t.replace(lj, "…").replace(uj, function (e) {
                        var t = 0,
                          r = 0;
                        return (
                          e.length % 3 === 0
                            ? (r = e.length / 3)
                            : e.length % 2 === 0
                            ? (t = e.length / 2)
                            : e.length % 3 === 2
                            ? ((t = 1), (r = (e.length - 2) / 3))
                            : ((t = 2), (r = (e.length - 4) / 3)),
                          "—".repeat(r) + "–".repeat(t)
                        );
                      })
                    )
                  )
                : e.appendChild(vj(t)),
              !0)
            );
          },
          Hj = function (e) {
            this.pos += 1;
            var t = e._lastChild;
            if (
              t &&
              "text" === t.type &&
              " " === t._literal[t._literal.length - 1]
            ) {
              var r = " " === t._literal[t._literal.length - 2];
              (t._literal = t._literal.replace(mj, "")),
                e.appendChild(new s(r ? "linebreak" : "softbreak"));
            } else e.appendChild(new s("softbreak"));
            return this.match(bj), !0;
          },
          Gj = function (e, t) {
            var r, n, i, a;
            (this.subject = e), (this.pos = 0);
            var s = this.pos;
            if (((a = this.parseLinkLabel()), 0 === a)) return 0;
            if (((r = this.subject.substr(0, a)), this.peek() !== Jz))
              return (this.pos = s), 0;
            if (
              (this.pos++,
              this.spnl(),
              (n = this.parseLinkDestination()),
              null === n)
            )
              return (this.pos = s), 0;
            var o = this.pos;
            this.spnl(),
              this.pos !== o && (i = this.parseLinkTitle()),
              null === i && ((i = ""), (this.pos = o));
            var l = !0;
            if (
              (null === this.match(gj) &&
                ("" === i
                  ? (l = !1)
                  : ((i = ""), (this.pos = o), (l = null !== this.match(gj)))),
              !l)
            )
              return (this.pos = s), 0;
            var u = wj(r);
            return "" === u
              ? ((this.pos = s), 0)
              : (t[u] || (t[u] = { destination: n, title: i }), this.pos - s);
          },
          Wj = function (e) {
            var t = !1,
              r = this.peek();
            if (-1 === r) return !1;
            switch (r) {
              case Fz:
                t = this.parseNewline(e);
                break;
              case Hz:
                t = this.parseBackslash(e);
                break;
              case Pz:
                t = this.parseBackticks(e);
                break;
              case Bz:
              case Mz:
                t = this.handleDelim(r, e);
                break;
              case Kz:
              case $z:
                t = this.options.smart && this.handleDelim(r, e);
                break;
              case Iz:
                t = this.parseOpenBracket(e);
                break;
              case Vz:
                t = this.parseBang(e);
                break;
              case zz:
                t = this.parseCloseBracket(e);
                break;
              case jz:
                t = this.parseAutolink(e) || this.parseHtmlTag(e);
                break;
              case Gz:
                t = this.parseEntity(e);
                break;
              default:
                t = this.parseString(e);
                break;
            }
            return t || ((this.pos += 1), e.appendChild(vj(Tz(r)))), !0;
          },
          Zj = function (e) {
            (this.subject = e._string_content.trim()),
              (this.pos = 0),
              (this.delimiters = null),
              (this.brackets = null);
            while (this.parseInline(e));
            (e._string_content = null), this.processEmphasis(null);
          };
        function Jj(e) {
          return {
            subject: "",
            delimiters: null,
            brackets: null,
            pos: 0,
            refmap: {},
            match: xj,
            peek: Aj,
            spnl: Cj,
            parseBackticks: _j,
            parseBackslash: Dj,
            parseAutolink: qj,
            parseHtmlTag: Ej,
            scanDelims: Lj,
            handleDelim: Sj,
            parseLinkTitle: Oj,
            parseLinkDestination: Uj,
            parseLinkLabel: Fj,
            parseOpenBracket: Bj,
            parseBang: Mj,
            parseCloseBracket: Pj,
            addBracket: Ij,
            removeBracket: zj,
            parseEntity: jj,
            parseString: Vj,
            parseNewline: Hj,
            parseReference: Gj,
            parseInline: Wj,
            processEmphasis: Rj,
            removeDelimiter: Tj,
            options: e || {},
            parse: Zj,
          };
        }
        var Kj = 4,
          $j = 9,
          Yj = 10,
          Xj = 62,
          Qj = 60,
          eV = 32,
          tV = 91,
          rV = [
            /./,
            /^<(?:script|pre|textarea|style)(?:\s|>|$)/i,
            /^<!--/,
            /^<[?]/,
            /^<![A-Z]/,
            /^<!\[CDATA\[/,
            /^<[/]?(?:address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[123456]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul)(?:\s|[/]?[>]|$)/i,
            new RegExp("^(?:" + fz + "|" + hz + ")\\s*$", "i"),
          ],
          nV = [
            /./,
            /<\/(?:script|pre|textarea|style)>/i,
            /-->/,
            /\?>/,
            />/,
            /\]\]>/,
          ],
          iV = /^(?:(?:\*[ \t]*){3,}|(?:_[ \t]*){3,}|(?:-[ \t]*){3,})[ \t]*$/,
          aV = /^[#`~*+_=<>0-9-]/,
          sV = /[^ \t\f\v\r\n]/,
          oV = /^[*+-]/,
          lV = /^(\d{1,9})([.)])/,
          uV = /^#{1,6}(?:[ \t]+|$)/,
          cV = /^`{3,}(?!.*`)|^~{3,}/,
          dV = /^(?:`{3,}|~{3,})(?= *$)/,
          pV = /^(?:=+|-+)[ \t]*$/,
          fV = /\r\n|\n|\r/,
          hV = function (e) {
            return !sV.test(e);
          },
          mV = function (e) {
            return e === eV || e === $j;
          },
          bV = function (e, t) {
            return t < e.length ? e.charCodeAt(t) : -1;
          },
          gV = function (e) {
            while (e) {
              if (e._lastLineBlank) return !0;
              var t = e.type;
              if (e._lastLineChecked || ("list" !== t && "item" !== t)) {
                e._lastLineChecked = !0;
                break;
              }
              (e._lastLineChecked = !0), (e = e._lastChild);
            }
            return !1;
          },
          yV = function () {
            if (this.partiallyConsumedTab) {
              this.offset += 1;
              var e = 4 - (this.column % 4);
              this.tip._string_content += " ".repeat(e);
            }
            this.tip._string_content +=
              this.currentLine.slice(this.offset) + "\n";
          },
          kV = function (e, t) {
            while (!this.blocks[this.tip.type].canContain(e))
              this.finalize(this.tip, this.lineNumber - 1);
            var r = t + 1,
              n = new s(e, [
                [this.lineNumber, r],
                [0, 0],
              ]);
            return (
              (n._string_content = ""),
              this.tip.appendChild(n),
              (this.tip = n),
              n
            );
          },
          vV = function (e, t) {
            var r,
              n,
              i,
              a,
              s = e.currentLine.slice(e.nextNonspace),
              o = {
                type: null,
                tight: !0,
                bulletChar: null,
                start: null,
                delimiter: null,
                padding: null,
                markerOffset: e.indent,
              };
            if (e.indent >= 4) return null;
            if ((r = s.match(oV)))
              (o.type = "bullet"), (o.bulletChar = r[0][0]);
            else {
              if (
                !(r = s.match(lV)) ||
                ("paragraph" === t.type && "1" !== r[1])
              )
                return null;
              (o.type = "ordered"),
                (o.start = parseInt(r[1])),
                (o.delimiter = r[2]);
            }
            if (
              ((n = bV(e.currentLine, e.nextNonspace + r[0].length)),
              -1 !== n && n !== $j && n !== eV)
            )
              return null;
            if (
              "paragraph" === t.type &&
              !e.currentLine.slice(e.nextNonspace + r[0].length).match(sV)
            )
              return null;
            e.advanceNextNonspace(),
              e.advanceOffset(r[0].length, !0),
              (i = e.column),
              (a = e.offset);
            do {
              e.advanceOffset(1, !0), (n = bV(e.currentLine, e.offset));
            } while (e.column - i < 5 && mV(n));
            var l = -1 === bV(e.currentLine, e.offset),
              u = e.column - i;
            return (
              u >= 5 || u < 1 || l
                ? ((o.padding = r[0].length + 1),
                  (e.column = i),
                  (e.offset = a),
                  mV(bV(e.currentLine, e.offset)) && e.advanceOffset(1, !0))
                : (o.padding = r[0].length + u),
              o
            );
          },
          wV = function (e, t) {
            return (
              e.type === t.type &&
              e.delimiter === t.delimiter &&
              e.bulletChar === t.bulletChar
            );
          },
          xV = function () {
            if (!this.allClosed) {
              while (this.oldtip !== this.lastMatchedContainer) {
                var e = this.oldtip._parent;
                this.finalize(this.oldtip, this.lineNumber - 1),
                  (this.oldtip = e);
              }
              this.allClosed = !0;
            }
          },
          AV = {
            document: {
              continue: function () {
                return 0;
              },
              finalize: function () {},
              canContain: function (e) {
                return "item" !== e;
              },
              acceptsLines: !1,
            },
            list: {
              continue: function () {
                return 0;
              },
              finalize: function (e, t) {
                var r = t._firstChild;
                while (r) {
                  if (gV(r) && r._next) {
                    t._listData.tight = !1;
                    break;
                  }
                  var n = r._firstChild;
                  while (n) {
                    if (gV(n) && (r._next || n._next)) {
                      t._listData.tight = !1;
                      break;
                    }
                    n = n._next;
                  }
                  r = r._next;
                }
              },
              canContain: function (e) {
                return "item" === e;
              },
              acceptsLines: !1,
            },
            block_quote: {
              continue: function (e) {
                var t = e.currentLine;
                return e.indented || bV(t, e.nextNonspace) !== Xj
                  ? 1
                  : (e.advanceNextNonspace(),
                    e.advanceOffset(1, !1),
                    mV(bV(t, e.offset)) && e.advanceOffset(1, !0),
                    0);
              },
              finalize: function () {},
              canContain: function (e) {
                return "item" !== e;
              },
              acceptsLines: !1,
            },
            item: {
              continue: function (e, t) {
                if (e.blank) {
                  if (null == t._firstChild) return 1;
                  e.advanceNextNonspace();
                } else {
                  if (
                    !(
                      e.indent >=
                      t._listData.markerOffset + t._listData.padding
                    )
                  )
                    return 1;
                  e.advanceOffset(
                    t._listData.markerOffset + t._listData.padding,
                    !0
                  );
                }
                return 0;
              },
              finalize: function () {},
              canContain: function (e) {
                return "item" !== e;
              },
              acceptsLines: !1,
            },
            heading: {
              continue: function () {
                return 1;
              },
              finalize: function () {},
              canContain: function () {
                return !1;
              },
              acceptsLines: !1,
            },
            thematic_break: {
              continue: function () {
                return 1;
              },
              finalize: function () {},
              canContain: function () {
                return !1;
              },
              acceptsLines: !1,
            },
            code_block: {
              continue: function (e, t) {
                var r = e.currentLine,
                  n = e.indent;
                if (t._isFenced) {
                  var i =
                    n <= 3 &&
                    r.charAt(e.nextNonspace) === t._fenceChar &&
                    r.slice(e.nextNonspace).match(dV);
                  if (i && i[0].length >= t._fenceLength)
                    return (
                      (e.lastLineLength = e.offset + n + i[0].length),
                      e.finalize(t, e.lineNumber),
                      2
                    );
                  var a = t._fenceOffset;
                  while (a > 0 && mV(bV(r, e.offset)))
                    e.advanceOffset(1, !0), a--;
                } else if (n >= Kj) e.advanceOffset(Kj, !0);
                else {
                  if (!e.blank) return 1;
                  e.advanceNextNonspace();
                }
                return 0;
              },
              finalize: function (e, t) {
                if (t._isFenced) {
                  var r = t._string_content,
                    n = r.indexOf("\n"),
                    i = r.slice(0, n),
                    a = r.slice(n + 1);
                  (t.info = qz(i.trim())), (t._literal = a);
                } else t._literal = t._string_content.replace(/(\n *)+$/, "\n");
                t._string_content = null;
              },
              canContain: function () {
                return !1;
              },
              acceptsLines: !0,
            },
            html_block: {
              continue: function (e, t) {
                return !e.blank ||
                  (6 !== t._htmlBlockType && 7 !== t._htmlBlockType)
                  ? 0
                  : 1;
              },
              finalize: function (e, t) {
                (t._literal = t._string_content.replace(/(\n *)+$/, "")),
                  (t._string_content = null);
              },
              canContain: function () {
                return !1;
              },
              acceptsLines: !0,
            },
            paragraph: {
              continue: function (e) {
                return e.blank ? 1 : 0;
              },
              finalize: function (e, t) {
                var r,
                  n = !1;
                while (
                  bV(t._string_content, 0) === tV &&
                  (r = e.inlineParser.parseReference(
                    t._string_content,
                    e.refmap
                  ))
                )
                  (t._string_content = t._string_content.slice(r)), (n = !0);
                n && hV(t._string_content) && t.unlink();
              },
              canContain: function () {
                return !1;
              },
              acceptsLines: !0,
            },
          },
          CV = [
            function (e) {
              return e.indented || bV(e.currentLine, e.nextNonspace) !== Xj
                ? 0
                : (e.advanceNextNonspace(),
                  e.advanceOffset(1, !1),
                  mV(bV(e.currentLine, e.offset)) && e.advanceOffset(1, !0),
                  e.closeUnmatchedBlocks(),
                  e.addChild("block_quote", e.nextNonspace),
                  1);
            },
            function (e) {
              var t;
              if (
                !e.indented &&
                (t = e.currentLine.slice(e.nextNonspace).match(uV))
              ) {
                e.advanceNextNonspace(),
                  e.advanceOffset(t[0].length, !1),
                  e.closeUnmatchedBlocks();
                var r = e.addChild("heading", e.nextNonspace);
                return (
                  (r.level = t[0].trim().length),
                  (r._string_content = e.currentLine
                    .slice(e.offset)
                    .replace(/^[ \t]*#+[ \t]*$/, "")
                    .replace(/[ \t]+#+[ \t]*$/, "")),
                  e.advanceOffset(e.currentLine.length - e.offset),
                  2
                );
              }
              return 0;
            },
            function (e) {
              var t;
              if (
                !e.indented &&
                (t = e.currentLine.slice(e.nextNonspace).match(cV))
              ) {
                var r = t[0].length;
                e.closeUnmatchedBlocks();
                var n = e.addChild("code_block", e.nextNonspace);
                return (
                  (n._isFenced = !0),
                  (n._fenceLength = r),
                  (n._fenceChar = t[0][0]),
                  (n._fenceOffset = e.indent),
                  e.advanceNextNonspace(),
                  e.advanceOffset(r, !1),
                  2
                );
              }
              return 0;
            },
            function (e, t) {
              if (!e.indented && bV(e.currentLine, e.nextNonspace) === Qj) {
                var r,
                  n = e.currentLine.slice(e.nextNonspace);
                for (r = 1; r <= 7; r++)
                  if (rV[r].test(n) && (r < 7 || "paragraph" !== t.type)) {
                    e.closeUnmatchedBlocks();
                    var i = e.addChild("html_block", e.offset);
                    return (i._htmlBlockType = r), 2;
                  }
              }
              return 0;
            },
            function (e, t) {
              var r;
              if (
                !e.indented &&
                "paragraph" === t.type &&
                (r = e.currentLine.slice(e.nextNonspace).match(pV))
              ) {
                var n;
                e.closeUnmatchedBlocks();
                while (
                  bV(t._string_content, 0) === tV &&
                  (n = e.inlineParser.parseReference(
                    t._string_content,
                    e.refmap
                  ))
                )
                  t._string_content = t._string_content.slice(n);
                if (t._string_content.length > 0) {
                  var i = new s("heading", t.sourcepos);
                  return (
                    (i.level = "=" === r[0][0] ? 1 : 2),
                    (i._string_content = t._string_content),
                    t.insertAfter(i),
                    t.unlink(),
                    (e.tip = i),
                    e.advanceOffset(e.currentLine.length - e.offset, !1),
                    2
                  );
                }
                return 0;
              }
              return 0;
            },
            function (e) {
              return !e.indented && iV.test(e.currentLine.slice(e.nextNonspace))
                ? (e.closeUnmatchedBlocks(),
                  e.addChild("thematic_break", e.nextNonspace),
                  e.advanceOffset(e.currentLine.length - e.offset, !1),
                  2)
                : 0;
            },
            function (e, t) {
              var r;
              return (e.indented && "list" !== t.type) || !(r = vV(e, t))
                ? 0
                : (e.closeUnmatchedBlocks(),
                  ("list" === e.tip.type && wV(t._listData, r)) ||
                    ((t = e.addChild("list", e.nextNonspace)),
                    (t._listData = r)),
                  (t = e.addChild("item", e.nextNonspace)),
                  (t._listData = r),
                  1);
            },
            function (e) {
              return e.indented && "paragraph" !== e.tip.type && !e.blank
                ? (e.advanceOffset(Kj, !0),
                  e.closeUnmatchedBlocks(),
                  e.addChild("code_block", e.offset),
                  2)
                : 0;
            },
          ],
          _V = function (e, t) {
            var r,
              n,
              i,
              a = this.currentLine;
            while (e > 0 && (i = a[this.offset]))
              "\t" === i
                ? ((r = 4 - (this.column % 4)),
                  t
                    ? ((this.partiallyConsumedTab = r > e),
                      (n = r > e ? e : r),
                      (this.column += n),
                      (this.offset += this.partiallyConsumedTab ? 0 : 1),
                      (e -= n))
                    : ((this.partiallyConsumedTab = !1),
                      (this.column += r),
                      (this.offset += 1),
                      (e -= 1)))
                : ((this.partiallyConsumedTab = !1),
                  (this.offset += 1),
                  (this.column += 1),
                  (e -= 1));
          },
          DV = function () {
            (this.offset = this.nextNonspace),
              (this.column = this.nextNonspaceColumn),
              (this.partiallyConsumedTab = !1);
          },
          qV = function () {
            var e,
              t = this.currentLine,
              r = this.offset,
              n = this.column;
            while ("" !== (e = t.charAt(r)))
              if (" " === e) r++, n++;
              else {
                if ("\t" !== e) break;
                r++, (n += 4 - (n % 4));
              }
            (this.blank = "\n" === e || "\r" === e || "" === e),
              (this.nextNonspace = r),
              (this.nextNonspaceColumn = n),
              (this.indent = this.nextNonspaceColumn - this.column),
              (this.indented = this.indent >= Kj);
          },
          EV = function (e) {
            var t,
              r,
              n = !0,
              i = this.doc;
            (this.oldtip = this.tip),
              (this.offset = 0),
              (this.column = 0),
              (this.blank = !1),
              (this.partiallyConsumedTab = !1),
              (this.lineNumber += 1),
              -1 !== e.indexOf("\0") && (e = e.replace(/\0/g, "�")),
              (this.currentLine = e);
            while ((r = i._lastChild) && r._open) {
              switch (
                ((i = r),
                this.findNextNonspace(),
                this.blocks[i.type].continue(this, i))
              ) {
                case 0:
                  break;
                case 1:
                  n = !1;
                  break;
                case 2:
                  return;
                default:
                  throw "continue returned illegal value, must be 0, 1, or 2";
              }
              if (!n) {
                i = i._parent;
                break;
              }
            }
            (this.allClosed = i === this.oldtip),
              (this.lastMatchedContainer = i);
            var a = "paragraph" !== i.type && AV[i.type].acceptsLines,
              s = this.blockStarts,
              o = s.length;
            while (!a) {
              if (
                (this.findNextNonspace(),
                !this.indented && !aV.test(e.slice(this.nextNonspace)))
              ) {
                this.advanceNextNonspace();
                break;
              }
              var l = 0;
              while (l < o) {
                var u = s[l](this, i);
                if (1 === u) {
                  i = this.tip;
                  break;
                }
                if (2 === u) {
                  (i = this.tip), (a = !0);
                  break;
                }
                l++;
              }
              if (l === o) {
                this.advanceNextNonspace();
                break;
              }
            }
            if (this.allClosed || this.blank || "paragraph" !== this.tip.type) {
              this.closeUnmatchedBlocks(),
                this.blank && i.lastChild && (i.lastChild._lastLineBlank = !0),
                (t = i.type);
              var c =
                  this.blank &&
                  !(
                    "block_quote" === t ||
                    ("code_block" === t && i._isFenced) ||
                    ("item" === t &&
                      !i._firstChild &&
                      i.sourcepos[0][0] === this.lineNumber)
                  ),
                d = i;
              while (d) (d._lastLineBlank = c), (d = d._parent);
              this.blocks[t].acceptsLines
                ? (this.addLine(),
                  "html_block" === t &&
                    i._htmlBlockType >= 1 &&
                    i._htmlBlockType <= 5 &&
                    nV[i._htmlBlockType].test(
                      this.currentLine.slice(this.offset)
                    ) &&
                    ((this.lastLineLength = e.length),
                    this.finalize(i, this.lineNumber)))
                : this.offset < e.length &&
                  !this.blank &&
                  ((i = this.addChild("paragraph", this.offset)),
                  this.advanceNextNonspace(),
                  this.addLine());
            } else this.addLine();
            this.lastLineLength = e.length;
          },
          LV = function (e, t) {
            var r = e._parent;
            (e._open = !1),
              (e.sourcepos[1] = [t, this.lastLineLength]),
              this.blocks[e.type].finalize(this, e),
              (this.tip = r);
          },
          SV = function (e) {
            var t,
              r,
              n,
              i = e.walker();
            (this.inlineParser.refmap = this.refmap),
              (this.inlineParser.options = this.options);
            while ((r = i.next()))
              (t = r.node),
                (n = t.type),
                r.entering ||
                  ("paragraph" !== n && "heading" !== n) ||
                  this.inlineParser.parse(t);
          },
          TV = function () {
            var e = new s("document", [
              [1, 1],
              [0, 0],
            ]);
            return e;
          },
          NV = function (e) {
            (this.doc = new TV()),
              (this.tip = this.doc),
              (this.refmap = {}),
              (this.lineNumber = 0),
              (this.lastLineLength = 0),
              (this.offset = 0),
              (this.column = 0),
              (this.lastMatchedContainer = this.doc),
              (this.currentLine = ""),
              this.options.time && console.time("preparing input");
            var t = e.split(fV),
              r = t.length;
            e.charCodeAt(e.length - 1) === Yj && (r -= 1),
              this.options.time && console.timeEnd("preparing input"),
              this.options.time && console.time("block parsing");
            for (var n = 0; n < r; n++) this.incorporateLine(t[n]);
            while (this.tip) this.finalize(this.tip, r);
            return (
              this.options.time && console.timeEnd("block parsing"),
              this.options.time && console.time("inline parsing"),
              this.processInlines(this.doc),
              this.options.time && console.timeEnd("inline parsing"),
              this.doc
            );
          };
        function RV(e) {
          return {
            doc: new TV(),
            blocks: AV,
            blockStarts: CV,
            tip: this.doc,
            oldtip: this.doc,
            currentLine: "",
            lineNumber: 0,
            offset: 0,
            column: 0,
            nextNonspace: 0,
            nextNonspaceColumn: 0,
            indent: 0,
            indented: !1,
            blank: !1,
            partiallyConsumedTab: !1,
            allClosed: !0,
            lastMatchedContainer: this.doc,
            refmap: {},
            lastLineLength: 0,
            inlineParser: new Jj(e),
            findNextNonspace: qV,
            advanceOffset: _V,
            advanceNextNonspace: DV,
            addLine: yV,
            addChild: kV,
            incorporateLine: EV,
            finalize: LV,
            processInlines: SV,
            closeUnmatchedBlocks: xV,
            parse: NV,
            options: e || {},
          };
        }
        function OV() {}
        function UV(e) {
          var t,
            r,
            n = e.walker();
          (this.buffer = ""), (this.lastOut = "\n");
          while ((t = n.next()))
            (r = t.node.type), this[r] && this[r](t.node, t.entering);
          return this.buffer;
        }
        function FV(e) {
          (this.buffer += e), (this.lastOut = e);
        }
        function BV() {
          "\n" !== this.lastOut && this.lit("\n");
        }
        function MV(e) {
          this.lit(e);
        }
        function PV(e) {
          return e;
        }
        (OV.prototype.render = UV),
          (OV.prototype.out = MV),
          (OV.prototype.lit = FV),
          (OV.prototype.cr = BV),
          (OV.prototype.esc = PV);
        var IV = /^javascript:|vbscript:|file:|data:/i,
          zV = /^data:image\/(?:png|gif|jpeg|webp)/i,
          jV = function (e) {
            return IV.test(e) && !zV.test(e);
          };
        function VV(e, t, r) {
          if (!(this.disableTags > 0)) {
            if (((this.buffer += "<" + e), t && t.length > 0)) {
              var n,
                i = 0;
              while (void 0 !== (n = t[i]))
                (this.buffer += " " + n[0] + '="' + n[1] + '"'), i++;
            }
            r && (this.buffer += " /"),
              (this.buffer += ">"),
              (this.lastOut = ">");
          }
        }
        function HV(e) {
          (e = e || {}),
            (e.softbreak = e.softbreak || "\n"),
            (this.disableTags = 0),
            (this.lastOut = "\n"),
            (this.options = e);
        }
        function GV(e) {
          this.out(e.literal);
        }
        function WV() {
          this.lit(this.options.softbreak);
        }
        function ZV() {
          this.tag("br", [], !0), this.cr();
        }
        function JV(e, t) {
          var r = this.attrs(e);
          t
            ? ((this.options.safe && jV(e.destination)) ||
                r.push(["href", this.esc(e.destination)]),
              e.title && r.push(["title", this.esc(e.title)]),
              this.tag("a", r))
            : this.tag("/a");
        }
        function KV(e, t) {
          t
            ? (0 === this.disableTags &&
                (this.options.safe && jV(e.destination)
                  ? this.lit('<img src="" alt="')
                  : this.lit(
                      '<img src="' + this.esc(e.destination) + '" alt="'
                    )),
              (this.disableTags += 1))
            : ((this.disableTags -= 1),
              0 === this.disableTags &&
                (e.title && this.lit('" title="' + this.esc(e.title)),
                this.lit('" />')));
        }
        function $V(e, t) {
          this.tag(t ? "em" : "/em");
        }
        function YV(e, t) {
          this.tag(t ? "strong" : "/strong");
        }
        function XV(e, t) {
          var r = e.parent.parent,
            n = this.attrs(e);
          (null !== r && "list" === r.type && r.listTight) ||
            (t ? (this.cr(), this.tag("p", n)) : (this.tag("/p"), this.cr()));
        }
        function QV(e, t) {
          var r = "h" + e.level,
            n = this.attrs(e);
          t ? (this.cr(), this.tag(r, n)) : (this.tag("/" + r), this.cr());
        }
        function eH(e) {
          this.tag("code"), this.out(e.literal), this.tag("/code");
        }
        function tH(e) {
          var t = e.info ? e.info.split(/\s+/) : [],
            r = this.attrs(e);
          t.length > 0 &&
            t[0].length > 0 &&
            r.push(["class", "language-" + this.esc(t[0])]),
            this.cr(),
            this.tag("pre"),
            this.tag("code", r),
            this.out(e.literal),
            this.tag("/code"),
            this.tag("/pre"),
            this.cr();
        }
        function rH(e) {
          var t = this.attrs(e);
          this.cr(), this.tag("hr", t, !0), this.cr();
        }
        function nH(e, t) {
          var r = this.attrs(e);
          t
            ? (this.cr(), this.tag("blockquote", r), this.cr())
            : (this.cr(), this.tag("/blockquote"), this.cr());
        }
        function iH(e, t) {
          var r = "bullet" === e.listType ? "ul" : "ol",
            n = this.attrs(e);
          if (t) {
            var i = e.listStart;
            null !== i && 1 !== i && n.push(["start", i.toString()]),
              this.cr(),
              this.tag(r, n),
              this.cr();
          } else this.cr(), this.tag("/" + r), this.cr();
        }
        function aH(e, t) {
          var r = this.attrs(e);
          t ? this.tag("li", r) : (this.tag("/li"), this.cr());
        }
        function sH(e) {
          this.options.safe
            ? this.lit("\x3c!-- raw HTML omitted --\x3e")
            : this.lit(e.literal);
        }
        function oH(e) {
          this.cr(),
            this.options.safe
              ? this.lit("\x3c!-- raw HTML omitted --\x3e")
              : this.lit(e.literal),
            this.cr();
        }
        function lH(e, t) {
          t && e.onEnter
            ? this.lit(e.onEnter)
            : !t && e.onExit && this.lit(e.onExit);
        }
        function uH(e, t) {
          this.cr(),
            t && e.onEnter
              ? this.lit(e.onEnter)
              : !t && e.onExit && this.lit(e.onExit),
            this.cr();
        }
        function cH(e) {
          this.lit(this.esc(e));
        }
        function dH(e) {
          var t = [];
          if (this.options.sourcepos) {
            var r = e.sourcepos;
            r &&
              t.push([
                "data-sourcepos",
                String(r[0][0]) +
                  ":" +
                  String(r[0][1]) +
                  "-" +
                  String(r[1][0]) +
                  ":" +
                  String(r[1][1]),
              ]);
          }
          return t;
        }
        (HV.prototype = Object.create(OV.prototype)),
          (HV.prototype.text = GV),
          (HV.prototype.html_inline = sH),
          (HV.prototype.html_block = oH),
          (HV.prototype.softbreak = WV),
          (HV.prototype.linebreak = ZV),
          (HV.prototype.link = JV),
          (HV.prototype.image = KV),
          (HV.prototype.emph = $V),
          (HV.prototype.strong = YV),
          (HV.prototype.paragraph = XV),
          (HV.prototype.heading = QV),
          (HV.prototype.code = eH),
          (HV.prototype.code_block = tH),
          (HV.prototype.thematic_break = rH),
          (HV.prototype.block_quote = nH),
          (HV.prototype.list = iH),
          (HV.prototype.item = aH),
          (HV.prototype.custom_inline = lH),
          (HV.prototype.custom_block = uH),
          (HV.prototype.esc = Sz),
          (HV.prototype.out = cH),
          (HV.prototype.tag = VV),
          (HV.prototype.attrs = dH);
        var pH = /\<[^>]*\>/;
        function fH(e) {
          return e.replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase();
        }
        function hH(e) {
          (e = e || {}),
            (this.disableTags = 0),
            (this.lastOut = "\n"),
            (this.indentLevel = 0),
            (this.indent = "  "),
            (this.options = e);
        }
        function mH(e) {
          var t, r;
          this.buffer = "";
          var n,
            i,
            a,
            s,
            o,
            l,
            u = e.walker(),
            c = this.options;
          c.time && console.time("rendering"),
            (this.buffer += '<?xml version="1.0" encoding="UTF-8"?>\n'),
            (this.buffer += '<!DOCTYPE document SYSTEM "CommonMark.dtd">\n');
          while ((n = u.next()))
            if (
              ((a = n.entering),
              (i = n.node),
              (l = i.type),
              (s = i.isContainer),
              (o =
                "thematic_break" === l ||
                "linebreak" === l ||
                "softbreak" === l),
              (r = fH(l)),
              a)
            ) {
              switch (((t = []), l)) {
                case "document":
                  t.push(["xmlns", "http://commonmark.org/xml/1.0"]);
                  break;
                case "list":
                  null !== i.listType &&
                    t.push(["type", i.listType.toLowerCase()]),
                    null !== i.listStart &&
                      t.push(["start", String(i.listStart)]),
                    null !== i.listTight &&
                      t.push(["tight", i.listTight ? "true" : "false"]);
                  var d = i.listDelimiter;
                  if (null !== d) {
                    var p = "";
                    (p = "." === d ? "period" : "paren"),
                      t.push(["delimiter", p]);
                  }
                  break;
                case "code_block":
                  i.info && t.push(["info", i.info]);
                  break;
                case "heading":
                  t.push(["level", String(i.level)]);
                  break;
                case "link":
                case "image":
                  t.push(["destination", i.destination]),
                    t.push(["title", i.title]);
                  break;
                case "custom_inline":
                case "custom_block":
                  t.push(["on_enter", i.onEnter]),
                    t.push(["on_exit", i.onExit]);
                  break;
              }
              if (c.sourcepos) {
                var f = i.sourcepos;
                f &&
                  t.push([
                    "sourcepos",
                    String(f[0][0]) +
                      ":" +
                      String(f[0][1]) +
                      "-" +
                      String(f[1][0]) +
                      ":" +
                      String(f[1][1]),
                  ]);
              }
              if ((this.cr(), this.out(this.tag(r, t, o)), s))
                this.indentLevel += 1;
              else if (!s && !o) {
                var h = i.literal;
                h && this.out(this.esc(h)), this.out(this.tag("/" + r));
              }
            } else
              (this.indentLevel -= 1), this.cr(), this.out(this.tag("/" + r));
          return (
            c.time && console.timeEnd("rendering"),
            (this.buffer += "\n"),
            this.buffer
          );
        }
        function bH(e) {
          this.disableTags > 0
            ? (this.buffer += e.replace(pH, ""))
            : (this.buffer += e),
            (this.lastOut = e);
        }
        function gH() {
          if ("\n" !== this.lastOut) {
            (this.buffer += "\n"), (this.lastOut = "\n");
            for (var e = this.indentLevel; e > 0; e--)
              this.buffer += this.indent;
          }
        }
        function yH(e, t, r) {
          var n = "<" + e;
          if (t && t.length > 0) {
            var i,
              a = 0;
            while (void 0 !== (i = t[a]))
              (n += " " + i[0] + '="' + this.esc(i[1]) + '"'), a++;
          }
          return r && (n += " /"), (n += ">"), n;
        }
        (hH.prototype = Object.create(OV.prototype)),
          (hH.prototype.render = mH),
          (hH.prototype.out = bH),
          (hH.prototype.cr = gH),
          (hH.prototype.tag = yH),
          (hH.prototype.esc = Sz),
          (e.HtmlRenderer = HV),
          (e.Node = s),
          (e.Parser = RV),
          (e.Renderer = OV),
          (e.XmlRenderer = hH),
          Object.defineProperty(e, "__esModule", { value: !0 });
      });
    },
    1835: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          CID: function () {
            return ht;
          },
          bases: function () {
            return qt;
          },
          bytes: function () {
            return n;
          },
          codecs: function () {
            return Lt;
          },
          digest: function () {
            return m;
          },
          hasher: function () {
            return b;
          },
          hashes: function () {
            return Et;
          },
          varint: function () {
            return h;
          },
        });
      var n = {};
      r.r(n),
        r.d(n, {
          coerce: function () {
            return L;
          },
          empty: function () {
            return _;
          },
          equals: function () {
            return E;
          },
          fromHex: function () {
            return q;
          },
          fromString: function () {
            return T;
          },
          isBinary: function () {
            return S;
          },
          toHex: function () {
            return D;
          },
          toString: function () {
            return N;
          },
        });
      var i = {};
      r.r(i),
        r.d(i, {
          identity: function () {
            return V;
          },
        });
      var a = {};
      r.r(a),
        r.d(a, {
          base2: function () {
            return H;
          },
        });
      var s = {};
      r.r(s),
        r.d(s, {
          base8: function () {
            return G;
          },
        });
      var o = {};
      r.r(o),
        r.d(o, {
          base10: function () {
            return W;
          },
        });
      var l = {};
      r.r(l),
        r.d(l, {
          base16: function () {
            return Z;
          },
          base16upper: function () {
            return J;
          },
        });
      var u = {};
      r.r(u),
        r.d(u, {
          base32: function () {
            return K;
          },
          base32hex: function () {
            return Q;
          },
          base32hexpad: function () {
            return te;
          },
          base32hexpadupper: function () {
            return re;
          },
          base32hexupper: function () {
            return ee;
          },
          base32pad: function () {
            return Y;
          },
          base32padupper: function () {
            return X;
          },
          base32upper: function () {
            return $;
          },
          base32z: function () {
            return ne;
          },
        });
      var c = {};
      r.r(c),
        r.d(c, {
          base36: function () {
            return ie;
          },
          base36upper: function () {
            return ae;
          },
        });
      var d = {};
      r.r(d),
        r.d(d, {
          base58btc: function () {
            return se;
          },
          base58flickr: function () {
            return oe;
          },
        });
      var p = {};
      r.r(p),
        r.d(p, {
          base64: function () {
            return le;
          },
          base64pad: function () {
            return ue;
          },
          base64url: function () {
            return ce;
          },
          base64urlpad: function () {
            return de;
          },
        });
      var f = {};
      r.r(f),
        r.d(f, {
          base256emoji: function () {
            return ge;
          },
        });
      var h = {};
      r.r(h),
        r.d(h, {
          decode: function () {
            return ze;
          },
          encodeTo: function () {
            return je;
          },
          encodingLength: function () {
            return Ve;
          },
        });
      var m = {};
      r.r(m),
        r.d(m, {
          Digest: function () {
            return Ze;
          },
          create: function () {
            return He;
          },
          decode: function () {
            return Ge;
          },
          equals: function () {
            return We;
          },
        });
      var b = {};
      r.r(b),
        r.d(b, {
          Hasher: function () {
            return Ke;
          },
          from: function () {
            return Je;
          },
        });
      var g = {};
      r.r(g),
        r.d(g, {
          sha256: function () {
            return Ye;
          },
          sha512: function () {
            return Xe;
          },
        });
      var y = {};
      r.r(y),
        r.d(y, {
          identity: function () {
            return nt;
          },
        });
      var k = {};
      r.r(k),
        r.d(k, {
          code: function () {
            return at;
          },
          decode: function () {
            return ot;
          },
          encode: function () {
            return st;
          },
          name: function () {
            return it;
          },
        });
      var v = {};
      function w(e, t) {
        if (e.length >= 255) throw new TypeError("Alphabet too long");
        for (var r = new Uint8Array(256), n = 0; n < r.length; n++) r[n] = 255;
        for (var i = 0; i < e.length; i++) {
          var a = e.charAt(i),
            s = a.charCodeAt(0);
          if (255 !== r[s]) throw new TypeError(a + " is ambiguous");
          r[s] = i;
        }
        var o = e.length,
          l = e.charAt(0),
          u = Math.log(o) / Math.log(256),
          c = Math.log(256) / Math.log(o);
        function d(t) {
          if (
            (t instanceof Uint8Array ||
              (ArrayBuffer.isView(t)
                ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                : Array.isArray(t) && (t = Uint8Array.from(t))),
            !(t instanceof Uint8Array))
          )
            throw new TypeError("Expected Uint8Array");
          if (0 === t.length) return "";
          var r = 0,
            n = 0,
            i = 0,
            a = t.length;
          while (i !== a && 0 === t[i]) i++, r++;
          var s = ((a - i) * c + 1) >>> 0,
            u = new Uint8Array(s);
          while (i !== a) {
            for (
              var d = t[i], p = 0, f = s - 1;
              (0 !== d || p < n) && -1 !== f;
              f--, p++
            )
              (d += (256 * u[f]) >>> 0),
                (u[f] = d % o >>> 0),
                (d = (d / o) >>> 0);
            if (0 !== d) throw new Error("Non-zero carry");
            (n = p), i++;
          }
          var h = s - n;
          while (h !== s && 0 === u[h]) h++;
          for (var m = l.repeat(r); h < s; ++h) m += e.charAt(u[h]);
          return m;
        }
        function p(e) {
          if ("string" !== typeof e) throw new TypeError("Expected String");
          if (0 === e.length) return new Uint8Array();
          var t = 0;
          if (" " !== e[t]) {
            var n = 0,
              i = 0;
            while (e[t] === l) n++, t++;
            var a = ((e.length - t) * u + 1) >>> 0,
              s = new Uint8Array(a);
            while (e[t]) {
              var c = r[e.charCodeAt(t)];
              if (255 === c) return;
              for (
                var d = 0, p = a - 1;
                (0 !== c || d < i) && -1 !== p;
                p--, d++
              )
                (c += (o * s[p]) >>> 0),
                  (s[p] = c % 256 >>> 0),
                  (c = (c / 256) >>> 0);
              if (0 !== c) throw new Error("Non-zero carry");
              (i = d), t++;
            }
            if (" " !== e[t]) {
              var f = a - i;
              while (f !== a && 0 === s[f]) f++;
              var h = new Uint8Array(n + (a - f)),
                m = n;
              while (f !== a) h[m++] = s[f++];
              return h;
            }
          }
        }
        function f(e) {
          var r = p(e);
          if (r) return r;
          throw new Error(`Non-${t} character`);
        }
        return { encode: d, decodeUnsafe: p, decode: f };
      }
      r.r(v),
        r.d(v, {
          code: function () {
            return dt;
          },
          decode: function () {
            return ft;
          },
          encode: function () {
            return pt;
          },
          name: function () {
            return ct;
          },
        });
      var x = w,
        A = x,
        C = A;
      const _ = new Uint8Array(0),
        D = (e) => e.reduce((e, t) => e + t.toString(16).padStart(2, "0"), ""),
        q = (e) => {
          const t = e.match(/../g);
          return t ? new Uint8Array(t.map((e) => parseInt(e, 16))) : _;
        },
        E = (e, t) => {
          if (e === t) return !0;
          if (e.byteLength !== t.byteLength) return !1;
          for (let r = 0; r < e.byteLength; r++) if (e[r] !== t[r]) return !1;
          return !0;
        },
        L = (e) => {
          if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name)
            return e;
          if (e instanceof ArrayBuffer) return new Uint8Array(e);
          if (ArrayBuffer.isView(e))
            return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
          throw new Error("Unknown type, must be binary type");
        },
        S = (e) => e instanceof ArrayBuffer || ArrayBuffer.isView(e),
        T = (e) => new TextEncoder().encode(e),
        N = (e) => new TextDecoder().decode(e);
      class R {
        constructor(e, t, r) {
          (this.name = e), (this.prefix = t), (this.baseEncode = r);
        }
        encode(e) {
          if (e instanceof Uint8Array)
            return `${this.prefix}${this.baseEncode(e)}`;
          throw Error("Unknown type, must be binary type");
        }
      }
      class O {
        constructor(e, t, r) {
          if (((this.name = e), (this.prefix = t), void 0 === t.codePointAt(0)))
            throw new Error("Invalid prefix character");
          (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = r);
        }
        decode(e) {
          if ("string" === typeof e) {
            if (e.codePointAt(0) !== this.prefixCodePoint)
              throw Error(
                `Unable to decode multibase string ${JSON.stringify(e)}, ${
                  this.name
                } decoder only supports inputs prefixed with ${this.prefix}`
              );
            return this.baseDecode(e.slice(this.prefix.length));
          }
          throw Error("Can only multibase decode strings");
        }
        or(e) {
          return F(this, e);
        }
      }
      class U {
        constructor(e) {
          this.decoders = e;
        }
        or(e) {
          return F(this, e);
        }
        decode(e) {
          const t = e[0],
            r = this.decoders[t];
          if (r) return r.decode(e);
          throw RangeError(
            `Unable to decode multibase string ${JSON.stringify(
              e
            )}, only inputs prefixed with ${Object.keys(
              this.decoders
            )} are supported`
          );
        }
      }
      const F = (e, t) =>
        new U({
          ...(e.decoders || { [e.prefix]: e }),
          ...(t.decoders || { [t.prefix]: t }),
        });
      class B {
        constructor(e, t, r, n) {
          (this.name = e),
            (this.prefix = t),
            (this.baseEncode = r),
            (this.baseDecode = n),
            (this.encoder = new R(e, t, r)),
            (this.decoder = new O(e, t, n));
        }
        encode(e) {
          return this.encoder.encode(e);
        }
        decode(e) {
          return this.decoder.decode(e);
        }
      }
      const M = ({ name: e, prefix: t, encode: r, decode: n }) =>
          new B(e, t, r, n),
        P = ({ prefix: e, name: t, alphabet: r }) => {
          const { encode: n, decode: i } = C(r, t);
          return M({ prefix: e, name: t, encode: n, decode: (e) => L(i(e)) });
        },
        I = (e, t, r, n) => {
          const i = {};
          for (let c = 0; c < t.length; ++c) i[t[c]] = c;
          let a = e.length;
          while ("=" === e[a - 1]) --a;
          const s = new Uint8Array(((a * r) / 8) | 0);
          let o = 0,
            l = 0,
            u = 0;
          for (let c = 0; c < a; ++c) {
            const t = i[e[c]];
            if (void 0 === t) throw new SyntaxError(`Non-${n} character`);
            (l = (l << r) | t),
              (o += r),
              o >= 8 && ((o -= 8), (s[u++] = 255 & (l >> o)));
          }
          if (o >= r || 255 & (l << (8 - o)))
            throw new SyntaxError("Unexpected end of data");
          return s;
        },
        z = (e, t, r) => {
          const n = "=" === t[t.length - 1],
            i = (1 << r) - 1;
          let a = "",
            s = 0,
            o = 0;
          for (let l = 0; l < e.length; ++l) {
            (o = (o << 8) | e[l]), (s += 8);
            while (s > r) (s -= r), (a += t[i & (o >> s)]);
          }
          if ((s && (a += t[i & (o << (r - s))]), n))
            while ((a.length * r) & 7) a += "=";
          return a;
        },
        j = ({ name: e, prefix: t, bitsPerChar: r, alphabet: n }) =>
          M({
            prefix: t,
            name: e,
            encode(e) {
              return z(e, n, r);
            },
            decode(t) {
              return I(t, n, r, e);
            },
          }),
        V = M({
          prefix: "\0",
          name: "identity",
          encode: (e) => N(e),
          decode: (e) => T(e),
        }),
        H = j({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 }),
        G = j({
          prefix: "7",
          name: "base8",
          alphabet: "01234567",
          bitsPerChar: 3,
        }),
        W = P({ prefix: "9", name: "base10", alphabet: "0123456789" }),
        Z = j({
          prefix: "f",
          name: "base16",
          alphabet: "0123456789abcdef",
          bitsPerChar: 4,
        }),
        J = j({
          prefix: "F",
          name: "base16upper",
          alphabet: "0123456789ABCDEF",
          bitsPerChar: 4,
        }),
        K = j({
          prefix: "b",
          name: "base32",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567",
          bitsPerChar: 5,
        }),
        $ = j({
          prefix: "B",
          name: "base32upper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
          bitsPerChar: 5,
        }),
        Y = j({
          prefix: "c",
          name: "base32pad",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
          bitsPerChar: 5,
        }),
        X = j({
          prefix: "C",
          name: "base32padupper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
          bitsPerChar: 5,
        }),
        Q = j({
          prefix: "v",
          name: "base32hex",
          alphabet: "0123456789abcdefghijklmnopqrstuv",
          bitsPerChar: 5,
        }),
        ee = j({
          prefix: "V",
          name: "base32hexupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
          bitsPerChar: 5,
        }),
        te = j({
          prefix: "t",
          name: "base32hexpad",
          alphabet: "0123456789abcdefghijklmnopqrstuv=",
          bitsPerChar: 5,
        }),
        re = j({
          prefix: "T",
          name: "base32hexpadupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
          bitsPerChar: 5,
        }),
        ne = j({
          prefix: "h",
          name: "base32z",
          alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
          bitsPerChar: 5,
        }),
        ie = P({
          prefix: "k",
          name: "base36",
          alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
        }),
        ae = P({
          prefix: "K",
          name: "base36upper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        }),
        se = P({
          name: "base58btc",
          prefix: "z",
          alphabet:
            "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
        }),
        oe = P({
          name: "base58flickr",
          prefix: "Z",
          alphabet:
            "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
        }),
        le = j({
          prefix: "m",
          name: "base64",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          bitsPerChar: 6,
        }),
        ue = j({
          prefix: "M",
          name: "base64pad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          bitsPerChar: 6,
        }),
        ce = j({
          prefix: "u",
          name: "base64url",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
          bitsPerChar: 6,
        }),
        de = j({
          prefix: "U",
          name: "base64urlpad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
          bitsPerChar: 6,
        }),
        pe = Array.from(
          "🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"
        ),
        fe = pe.reduce((e, t, r) => ((e[r] = t), e), []),
        he = pe.reduce((e, t, r) => ((e[t.codePointAt(0)] = r), e), []);
      function me(e) {
        return e.reduce((e, t) => ((e += fe[t]), e), "");
      }
      function be(e) {
        const t = [];
        for (const r of e) {
          const e = he[r.codePointAt(0)];
          if (void 0 === e) throw new Error(`Non-base256emoji character: ${r}`);
          t.push(e);
        }
        return new Uint8Array(t);
      }
      const ge = M({
        prefix: "🚀",
        name: "base256emoji",
        encode: me,
        decode: be,
      });
      var ye = Ae,
        ke = 128,
        ve = 127,
        we = ~ve,
        xe = Math.pow(2, 31);
      function Ae(e, t, r) {
        (t = t || []), (r = r || 0);
        var n = r;
        while (e >= xe) (t[r++] = (255 & e) | ke), (e /= 128);
        while (e & we) (t[r++] = (255 & e) | ke), (e >>>= 7);
        return (t[r] = 0 | e), (Ae.bytes = r - n + 1), t;
      }
      var Ce = qe,
        _e = 128,
        De = 127;
      function qe(e, t) {
        var r,
          n = 0,
          i = ((t = t || 0), 0),
          a = t,
          s = e.length;
        do {
          if (a >= s)
            throw ((qe.bytes = 0), new RangeError("Could not decode varint"));
          (r = e[a++]),
            (n += i < 28 ? (r & De) << i : (r & De) * Math.pow(2, i)),
            (i += 7);
        } while (r >= _e);
        return (qe.bytes = a - t), n;
      }
      var Ee = Math.pow(2, 7),
        Le = Math.pow(2, 14),
        Se = Math.pow(2, 21),
        Te = Math.pow(2, 28),
        Ne = Math.pow(2, 35),
        Re = Math.pow(2, 42),
        Oe = Math.pow(2, 49),
        Ue = Math.pow(2, 56),
        Fe = Math.pow(2, 63),
        Be = function (e) {
          return e < Ee
            ? 1
            : e < Le
            ? 2
            : e < Se
            ? 3
            : e < Te
            ? 4
            : e < Ne
            ? 5
            : e < Re
            ? 6
            : e < Oe
            ? 7
            : e < Ue
            ? 8
            : e < Fe
            ? 9
            : 10;
        },
        Me = { encode: ye, decode: Ce, encodingLength: Be },
        Pe = Me,
        Ie = Pe;
      const ze = (e, t = 0) => {
          const r = Ie.decode(e, t);
          return [r, Ie.decode.bytes];
        },
        je = (e, t, r = 0) => (Ie.encode(e, t, r), t),
        Ve = (e) => Ie.encodingLength(e),
        He = (e, t) => {
          const r = t.byteLength,
            n = Ve(e),
            i = n + Ve(r),
            a = new Uint8Array(i + r);
          return je(e, a, 0), je(r, a, n), a.set(t, i), new Ze(e, r, t, a);
        },
        Ge = (e) => {
          const t = L(e),
            [r, n] = ze(t),
            [i, a] = ze(t.subarray(n)),
            s = t.subarray(n + a);
          if (s.byteLength !== i) throw new Error("Incorrect length");
          return new Ze(r, i, s, t);
        },
        We = (e, t) =>
          e === t ||
          (e.code === t.code && e.size === t.size && E(e.bytes, t.bytes));
      class Ze {
        constructor(e, t, r, n) {
          (this.code = e), (this.size = t), (this.digest = r), (this.bytes = n);
        }
      }
      const Je = ({ name: e, code: t, encode: r }) => new Ke(e, t, r);
      class Ke {
        constructor(e, t, r) {
          (this.name = e), (this.code = t), (this.encode = r);
        }
        digest(e) {
          if (e instanceof Uint8Array) {
            const t = this.encode(e);
            return t instanceof Uint8Array
              ? He(this.code, t)
              : t.then((e) => He(this.code, e));
          }
          throw Error("Unknown type, must be binary type");
        }
      }
      const $e = (e) => async (t) =>
          new Uint8Array(await crypto.subtle.digest(e, t)),
        Ye = Je({ name: "sha2-256", code: 18, encode: $e("SHA-256") }),
        Xe = Je({ name: "sha2-512", code: 19, encode: $e("SHA-512") }),
        Qe = 0,
        et = "identity",
        tt = L,
        rt = (e) => He(Qe, tt(e)),
        nt = { code: Qe, name: et, encode: tt, digest: rt },
        it = "raw",
        at = 85,
        st = (e) => L(e),
        ot = (e) => L(e),
        lt = new TextEncoder(),
        ut = new TextDecoder(),
        ct = "json",
        dt = 512,
        pt = (e) => lt.encode(JSON.stringify(e)),
        ft = (e) => JSON.parse(ut.decode(e));
      class ht {
        constructor(e, t, r, n) {
          (this.code = t),
            (this.version = e),
            (this.multihash = r),
            (this.bytes = n),
            (this.byteOffset = n.byteOffset),
            (this.byteLength = n.byteLength),
            (this.asCID = this),
            (this._baseCache = new Map()),
            Object.defineProperties(this, {
              byteOffset: At,
              byteLength: At,
              code: xt,
              version: xt,
              multihash: xt,
              bytes: xt,
              _baseCache: At,
              asCID: At,
            });
        }
        toV0() {
          switch (this.version) {
            case 0:
              return this;
            default: {
              const { code: e, multihash: t } = this;
              if (e !== yt)
                throw new Error("Cannot convert a non dag-pb CID to CIDv0");
              if (t.code !== kt)
                throw new Error(
                  "Cannot convert non sha2-256 multihash CID to CIDv0"
                );
              return ht.createV0(t);
            }
          }
        }
        toV1() {
          switch (this.version) {
            case 0: {
              const { code: e, digest: t } = this.multihash,
                r = He(e, t);
              return ht.createV1(this.code, r);
            }
            case 1:
              return this;
            default:
              throw Error(
                `Can not convert CID version ${this.version} to version 0. This is a bug please report`
              );
          }
        }
        equals(e) {
          return (
            e &&
            this.code === e.code &&
            this.version === e.version &&
            We(this.multihash, e.multihash)
          );
        }
        toString(e) {
          const { bytes: t, version: r, _baseCache: n } = this;
          switch (r) {
            case 0:
              return bt(t, n, e || se.encoder);
            default:
              return gt(t, n, e || K.encoder);
          }
        }
        toJSON() {
          return {
            code: this.code,
            version: this.version,
            hash: this.multihash.bytes,
          };
        }
        get [Symbol.toStringTag]() {
          return "CID";
        }
        [Symbol.for("nodejs.util.inspect.custom")]() {
          return "CID(" + this.toString() + ")";
        }
        static isCID(e) {
          return _t(/^0\.0/, Dt), !(!e || (!e[wt] && e.asCID !== e));
        }
        get toBaseEncodedString() {
          throw new Error("Deprecated, use .toString()");
        }
        get codec() {
          throw new Error(
            '"codec" property is deprecated, use integer "code" property instead'
          );
        }
        get buffer() {
          throw new Error(
            "Deprecated .buffer property, use .bytes to get Uint8Array instead"
          );
        }
        get multibaseName() {
          throw new Error('"multibaseName" property is deprecated');
        }
        get prefix() {
          throw new Error('"prefix" property is deprecated');
        }
        static asCID(e) {
          if (e instanceof ht) return e;
          if (null != e && e.asCID === e) {
            const { version: t, code: r, multihash: n, bytes: i } = e;
            return new ht(t, r, n, i || vt(t, r, n.bytes));
          }
          if (null != e && !0 === e[wt]) {
            const { version: t, multihash: r, code: n } = e,
              i = Ge(r);
            return ht.create(t, n, i);
          }
          return null;
        }
        static create(e, t, r) {
          if ("number" !== typeof t)
            throw new Error("String codecs are no longer supported");
          switch (e) {
            case 0:
              if (t !== yt)
                throw new Error(
                  `Version 0 CID must use dag-pb (code: ${yt}) block encoding`
                );
              return new ht(e, t, r, r.bytes);
            case 1: {
              const n = vt(e, t, r.bytes);
              return new ht(e, t, r, n);
            }
            default:
              throw new Error("Invalid version");
          }
        }
        static createV0(e) {
          return ht.create(0, yt, e);
        }
        static createV1(e, t) {
          return ht.create(1, e, t);
        }
        static decode(e) {
          const [t, r] = ht.decodeFirst(e);
          if (r.length) throw new Error("Incorrect length");
          return t;
        }
        static decodeFirst(e) {
          const t = ht.inspectBytes(e),
            r = t.size - t.multihashSize,
            n = L(e.subarray(r, r + t.multihashSize));
          if (n.byteLength !== t.multihashSize)
            throw new Error("Incorrect length");
          const i = n.subarray(t.multihashSize - t.digestSize),
            a = new Ze(t.multihashCode, t.digestSize, i, n),
            s = 0 === t.version ? ht.createV0(a) : ht.createV1(t.codec, a);
          return [s, e.subarray(t.size)];
        }
        static inspectBytes(e) {
          let t = 0;
          const r = () => {
            const [r, n] = ze(e.subarray(t));
            return (t += n), r;
          };
          let n = r(),
            i = yt;
          if (
            (18 === n ? ((n = 0), (t = 0)) : 1 === n && (i = r()),
            0 !== n && 1 !== n)
          )
            throw new RangeError(`Invalid CID version ${n}`);
          const a = t,
            s = r(),
            o = r(),
            l = t + o,
            u = l - a;
          return {
            version: n,
            codec: i,
            multihashCode: s,
            digestSize: o,
            multihashSize: u,
            size: l,
          };
        }
        static parse(e, t) {
          const [r, n] = mt(e, t),
            i = ht.decode(n);
          return i._baseCache.set(r, e), i;
        }
      }
      const mt = (e, t) => {
          switch (e[0]) {
            case "Q": {
              const r = t || se;
              return [se.prefix, r.decode(`${se.prefix}${e}`)];
            }
            case se.prefix: {
              const r = t || se;
              return [se.prefix, r.decode(e)];
            }
            case K.prefix: {
              const r = t || K;
              return [K.prefix, r.decode(e)];
            }
            default:
              if (null == t)
                throw Error(
                  "To parse non base32 or base58btc encoded CID multibase decoder must be provided"
                );
              return [e[0], t.decode(e)];
          }
        },
        bt = (e, t, r) => {
          const { prefix: n } = r;
          if (n !== se.prefix)
            throw Error(`Cannot string encode V0 in ${r.name} encoding`);
          const i = t.get(n);
          if (null == i) {
            const i = r.encode(e).slice(1);
            return t.set(n, i), i;
          }
          return i;
        },
        gt = (e, t, r) => {
          const { prefix: n } = r,
            i = t.get(n);
          if (null == i) {
            const i = r.encode(e);
            return t.set(n, i), i;
          }
          return i;
        },
        yt = 112,
        kt = 18,
        vt = (e, t, r) => {
          const n = Ve(e),
            i = n + Ve(t),
            a = new Uint8Array(i + r.byteLength);
          return je(e, a, 0), je(t, a, n), a.set(r, i), a;
        },
        wt = Symbol.for("@ipld/js-cid/CID"),
        xt = { writable: !1, configurable: !1, enumerable: !0 },
        At = { writable: !1, enumerable: !1, configurable: !1 },
        Ct = "0.0.0-dev",
        _t = (e, t) => {
          if (!e.test(Ct)) throw new Error(t);
          console.warn(t);
        },
        Dt =
          "CID.isCID(v) is deprecated and will be removed in the next major release.\nFollowing code pattern:\n\nif (CID.isCID(value)) {\n  doSomethingWithCID(value)\n}\n\nIs replaced with:\n\nconst cid = CID.asCID(value)\nif (cid) {\n  // Make sure to use cid instead of value\n  doSomethingWithCID(cid)\n}\n",
        qt = { ...i, ...a, ...s, ...o, ...l, ...u, ...c, ...d, ...p, ...f },
        Et = { ...g, ...y },
        Lt = { raw: k, json: v };
    },
    4851: function (e) {
      "use strict";
      e.exports = JSON.parse(
        '{"extensions":{"alternate":"Alternative Access Methods","anon":"Anonymized Location","card4l":{"label":"CARD4L","explain":"CEOS Analysis Ready Data for Land"},"classification":"Classification","cube":"Data Cube","eo":"Electro-Optical","forecast":"Forecast","file":"File","grid":"Gridded Data","goes":{"label":"NOAA GOES","explain":"NOAA Geostationary Operational Environmental Satellite"},"label":"Labels / ML","language":"Internationalization / Localization","mgrs":{"label":"MGRS","explain":"Military Grid Reference System"},"noaa_mrms_qpe":{"label":"NOAA MRMS QPE","explain":"NOAA Multi-Radar Multi-Sensor Quantitative Precipitation Estimation"},"odc":"Open Data Cube","order":"Order","pc":"Point Cloud","processing":"Processing","proj":"Projection","raster":"Raster Imagery","sar":{"label":"SAR","explain":"Synthetic Aperture Radar"},"sat":"Satellite","sci":"Scientific","ssys":"Solar System","storage":"Cloud Storage","table":"Tabular Data","tiles":"Tiled Assets","view":"View Geometry","web-map-links":"Web Maps","xarray":"xarray","gee":"Google Earth Engine","landsat":"Landsat","msft":"Microsoft","openeo":"openEO","pl":"Planet Labs Inc.","sentinel":"Copernicus Sentinel","cbers":{"label":"CBERS","explain":"China-Brazil Earth Resources Satellite Program"},"geoadmin":{"label":"swisstopo","explain":"Federal Office of Topography (Switzerland)"}},"links":{"href":{"label":"URL","format":"Url"},"hreflang":{"label":"Language","format":"LanguageCode"},"rel":{"label":"Relation","explain":"Based on IANA relation types","mapping":{"self":"This document","root":"Root STAC Catalog","parent":"Parent STAC Catalog","collection":"STAC Collection","derived_from":"STAC Item for input data","about":"About this resource","alternate":"Alternative representation","via":"Source metadata","next":"Next page","prev":"Previous page","canonical":"Origin of this document","processing-expression":"Processing inctructions/code","latest-version":"Latest version","predecessor-version":"Predecessor version","successor-version":"Successor version","source":"Source data","cite-as":"Citation information","related":"Related resource","describedby":"Description of the resource","service-desc":"API definitions","service-doc":"API user documentation","conformance":"API conformance declaration","order":"Order details","xyz":"XYZ web map","wmts":"OGC WMTS web map"}},"type":{"label":"File Format","explain":"Based on the IANA media (MIME) types","format":"MediaType"},"href:servers":{"label":"Servers","ext":"web-map-links"},"wmts:layer":{"label":"WMTS Layers","ext":"web-map-links"},"wmts:dimensions":{"label":"WMTS Dimensions","ext":"web-map-links"}},"assets":{"href":{"label":"URL","format":"Url"},"hreflang":{"label":"Language","format":"LanguageCode"},"type":{"label":"File Format","explain":"Based on the IANA media (MIME) types","format":"MediaType"},"roles":{"label":"Purpose","mapping":{"thumbnail":"Preview","overview":"Overview","visual":"Visualization","data":"Data","metadata":"Metadata","graphic":"Illustration"}},"alternate":{"label":"Alternatives","listWithKeys":true,"items":{"href":{"label":"URL","format":"Url"},"title":{"alias":"title"},"description":{"alias":"description"}},"summary":false,"ext":"alternate"},"pl:asset_type":"Asset Type","pl:bundle_type":"Bundle Type","table:storage_options":{"alias":"xarray:storage_options"},"xarray:open_kwargs":{"label":"Read Options","custom":true,"summary":false},"xarray:storage_options":{"label":"fsspec Options","custom":true,"summary":false}},"metadata":{"id":"Identifier","keywords":"Keywords","datetime":{"label":"Time of Data","format":"Timestamp","summary":false},"title":{"label":"Title","summary":false},"description":{"label":"Description","format":"CommonMark","summary":false},"start_datetime":{"label":"Time of Data begins","format":"Timestamp","summary":false},"end_datetime":{"label":"Time of Data ends","format":"Timestamp","summary":false},"created":{"label":"Created","format":"Timestamp","summary":"r"},"updated":{"label":"Updated","format":"Timestamp","summary":"r"},"published":{"label":"Published","format":"Timestamp","summary":"r"},"expires":{"label":"Expires","format":"Timestamp","summary":"r"},"unpublished":{"label":"Unpublished","format":"Timestamp","summary":"r"},"license":{"label":"License","format":"License","summary":false},"providers":{"label":"Providers","format":"Providers","summary":false},"platform":"Platform","instruments":{"label":"Instruments","format":"CSV"},"constellation":"Constellation","mission":"Mission","gsd":{"label":"GSD","explain":"Ground Sample Distance","unit":"m"},"version":{"label":"Data Version","summary":false},"deprecated":{"label":"Deprecated","summary":false},"language":{"label":"Current Language","ext":"language","summary":"v","properties":{"name":{"label":"Name"},"alternate":{"label":"Alternate Name"},"code":{"label":"Code"},"dir":{"label":"Direction","explain":"Reading and writing direction","mapping":{"ltr":"left-to-right","rtl":"right-to-left"},"default":"ltr"}}},"languages":{"label":"Available Languages","ext":"language","summary":false,"items":{"name":{"label":"Name","sortable":true,"order":0},"alternate":{"label":"Alternate Name","sortable":true,"order":1},"code":{"label":"Code","sortable":true,"order":2},"dir":{"label":"Direction","explain":"Reading and writing direction","sortable":true,"order":3,"mapping":{"ltr":"left-to-right","rtl":"right-to-left"},"default":"ltr"}}},"crs":{"label":"CRS","format":"CRS","explain":"Coordinate Reference System"},"anon:size":{"label":"Uncertainty","unit":"°","explain":"The size of one side of the anonymized bounding box"},"anon:warning":{"label":"Warning","summary":false},"classification:classes":{"summary":false,"label":"Classes","items":{"color_hint":{"label":"Color","order":0,"format":"HexColor"},"value":{"label":"Value","order":1},"title":{"label":"Title","order":2},"name":{"label":"Identifier","order":3},"description":{"label":"Description","order":4,"format":"CommonMark"},"nodata":{"label":"No-data value","order":5,"default":false}}},"classification:bitfields":{"summary":false,"label":"Bit Mask","items":{"name":{"label":"Name","order":0},"offset":{"label":"Offset","explain":"Offset to the first bit","order":1},"length":{"label":"Number of bits","order":2},"description":{"label":"Description","order":3,"format":"CommonMark"},"classes":{"alias":"classification:classes"},"roles":{"label":"Purpose"}}},"cube:dimensions":{"label":"Dimensions","summary":false,"listWithKeys":true,"items":{"type":{"label":"Type","order":0},"axis":{"label":"Axis","order":1},"description":{"label":"Description","format":"CommonMark","order":2},"extent":{"label":"Extent","format":"Extent","order":3},"values":{"label":"Values","order":4},"step":{"label":"Step","order":5},"unit":{"alias":"file:unit","order":5},"reference_system":{"label":"Reference System","explain":"Coordinate / Temporal / Other Reference System","order":6}}},"cube:variables":{"label":"Variables","summary":false,"listWithKeys":true,"items":{"dimensions":{"label":"Dimensions","order":0},"type":{"label":"Type","order":1,"mapping":{"data":"Measured values","auxiliary":"Coordinate data"}},"description":{"label":"Description","format":"CommonMark","order":2},"extent":{"label":"Extent","format":"Extent","order":3},"values":{"label":"Values","order":4},"step":{"label":"Step","order":5},"unit":{"alias":"file:unit","order":6}}},"eo:bands":{"label":"Spectral Bands","items":{"name":{"label":"Name","sortable":true,"id":true,"order":0},"common_name":{"label":"Common Name","sortable":true,"order":1},"description":{"label":"Description","format":"CommonMark","order":2},"center_wavelength":{"label":"Wavelength","explain":"The center wavelength of the band","unit":"μm","sortable":true,"order":5},"full_width_half_max":{"label":"FWHM","explain":"Full Width Half Max","unit":"μm","sortable":true,"order":6},"gsd":{"alias":"gsd","sortable":true,"order":3},"cloud_cover":{"alias":"eo:cloud_cover","sortable":true,"order":4},"solar_illumination":{"label":"Solar Illumination","sortable":true,"order":7,"unit":"W/m²/μm"},"classification:classes":{"alias":"classification:classes"},"classification:bitfields":{"alias":"classification:bitfields"}}},"eo:cloud_cover":{"label":"Cloud Cover","unit":"%"},"eo:snow_cover":{"label":"Snow/Ice Cover","unit":"%"},"forecast:reference_datetime":{"label":"Reference Time","format":"Timestamp","summary":"r"},"forecast:horizon":{"label":"Forecast Horizon","explain":"The time between the reference time and the forecast time","format":"Duration","summary":"r"},"forecast:duration":{"label":"Forecast Length","format":"Duration","summary":"r"},"file:bits_per_sample":"Bits per Sample","file:byte_order":"Byte Order","file:checksum":{"label":"Checksum","format":"Checksum","summary":false},"file:data_type":{"label":"Data Type of Values","format":"FileDataType"},"file:header_size":{"label":"Header Size","format":"FileSize","summary":false},"file:nodata":{"label":"No-Data Values","format":"CSV","summary":false},"file:size":{"label":"Size","format":"FileSize","summary":false},"file:unit":"Unit of Values","file:values":{"label":"Map of Values","summary":false,"items":{"values":{"label":"Values","format":"CSV","order":1},"summary":{"label":"Summary","order":0}}},"file:local_path":{"label":"Local Path","summary":false},"goes:orbital_slot":"Orbital Slot","goes:system_environment":{"label":"System Environment","mapping":{"OR":"Operational system, real-time data","OT":"Operational system, test data","IR":"Test system, real-time data","IT":"Test system, test data","IP":"Test system, playback data","IS":"Test system, simulated data"}},"goes:image_type":{"label":"Area","mapping":{"FULL DISK":"The Americas (full disk)","CONUS":"North America (continental US)","MESOSCALE":"Central/South America (mesoscale)"}},"goes:mesoscale_image_number":{"label":"Area in Central/South America","mapping":{"1":"Region 1","2":"Region 2"}},"goes:mode":{"label":"Capture Mode","mapping":{"3":"3: 1x full disk, 3x continental US, 30x mesoscale region 1, 30x mesoscale region 2 (every 15 minutes)","4":"4: 1x full disk (every 5 minutes)","6":"6: 1x full disk, 2x continental US, 20x mesoscale region 1, 20x mesoscale region 2 (every 10 minutes)"}},"goes:group_time_threshold":{"label":"Time Threshold in a Group","explain":"Lightning group maximum time difference among lightning events in a group","unit":"s"},"goes:flash_time_threshold":{"label":"Time Threshold in a Flash","explain":"Lightning flash maximum time difference among lightning events in a flash","unit":"s"},"goes:lightning_wavelength":{"label":"Central Wavelength","unit":"nm"},"goes:yaw_flip_flag":{"label":"Yaw Flip Configuration","explain":"Flag indicating that the spacecraft is operating in yaw flip configuration.","mapping":{"0":"Upright","1":"Neither","2":"Inverted"}},"goes:event_count":"Lightning Events","goes:group_count":"Lightning Groups","goes:flash_count":"Lightning Flashes","goes:nominal_satellite_subpoint_lat":{"label":"Satellite Subpoint Latitude","unit":"°N"},"goes:nominal_satellite_subpoint_lon":{"label":"Satellite Subpoint Longitude","unit":"°E"},"goes:nominal_satellite_height":{"label":"Satellite Height","explain":"Nominal satellite height above GRS 80 ellipsoid","unit":"km"},"goes:percent_navigated_L1b_events":{"label":"Events navigated by Instrument","format":"Percent0to1","unit":"%"},"goes:percent_uncorrectable_L0_errors":{"label":"Data Lost","format":"Percent0to1","unit":"%"},"grid:code":{"label":"Grid","format":"GridCode"},"raster:bands":{"label":"Bands","items":{"nodata":{"alias":"file:nodata"},"sampling":{"label":"Sampling","mapping":{"area":"Area","point":"Point (at pixel center)"}},"data_type":{"alias":"file:data_type"},"bits_per_sample":{"alias":"file:bits_per_sample"},"spatial_resolution":{"label":"Resolution","explain":"Average spatial resolution","unit":"m"},"statistics":{"label":"Statistics","items":{"mean":"Average","maximum":{"label":"Max.","explain":"Maxmimum value"},"minimum":{"label":"Min.","explain":"Minimum value"},"stdev":{"label":"Std. Dev.","explain":"Standard Deviation"},"valid_percent":{"label":"Valid","explain":"Percentage of valid pixels","unit":"%"}}},"unit":{"alias":"file:unit"},"scale":"Scale","offset":"Offset","histogram":{"label":"Histogram","custom":true},"classification:classes":{"alias":"classification:classes"},"classification:bitfields":{"alias":"classification:bitfields"}}},"label:properties":{"label":"Properties","null":"raster data"},"label:classes":{"label":"Classes","items":{"name":{"label":"Name","null":"raster-formatted","sortable":true,"id":true},"classes":"Classes"}},"label:description":{"label":"Description","format":"CommonMark","summary":false},"label:type":"Type","label:tasks":"Tasks","label:methods":"Methods","label:overviews":{"label":"Overviews","summary":false,"items":{"property_key":{"label":"Property Key","id":true},"counts":{"label":"Counts","custom":true},"statistics":{"label":"Statistics","custom":true}}},"mgrs:latitude_band":"Latitude Band","mgrs:grid_square":"Grid Square","mgrs:utm_zone":"UTM Zone","noaa_mrms_qpe:pass":{"label":"Pass Number","mapping":{"1":"1 (less latency / less gauges)","2":"2 (more latency / more gauges)"}},"noaa_mrms_qpe:period":{"label":"Accumulation Period","unit":"h"},"noaa_mrms_qpe:region":{"label":"Region","mapping":{"CONUS":"Continental US","HAWAII":"Hawaii","GUAM":"Guam","ALASKA":"Alaska","CARIB":"Caribbean Islands"}},"openeo:status":"Processing Status","api_version":{"label":"API Version","ext":"openeo"},"backend_version":{"label":"Back-End Version","ext":"openeo"},"production":{"label":"Production-Ready","ext":"openeo"},"endpoints":{"label":"Supported Endpoints","ext":"openeo","summary":false,"items":{"path":{"label":"Path Template","order":0},"methods":{"label":"HTTP Methods","order":1,"format":"CSV"}}},"billing":{"label":"Billing","ext":"openeo","custom":true,"summary":false},"order:status":{"label":"Status","mapping":{"orderable":"Orderable (data can be ordered)","ordered":"Ordered (preparing to deliver data)","pending":"Pending (waiting for activation)","shipping":"Shipping (data is getting processed)","succeeded":"Delivered (data is available)","failed":"Failed (unable to deliver)","canceled":"Canceled (delivery stopped)"}},"order:id":"Identifier","order:date":{"label":"Submitted","format":"Timestamp","summary":"r"},"order:expiration_date":{"alias":"expires"},"pc:count":{"label":"Points","explain":"Number of Points"},"pc:type":"Type","pc:encoding":"Format","pc:schemas":{"label":"Schemas","summary":false,"items":{"name":{"label":"Name","sortable":true,"id":true},"size":{"label":"Size","unit":"bytes","sortable":true},"type":{"label":"Type","sortable":true}}},"pc:density":"Density","pc:statistics":{"label":"Statistics","summary":"s","items":{"name":{"label":"Name","id":true},"position":"Position","average":"Average","count":"Count","maximum":{"label":"Max.","explain":"Maxmimum value"},"minimum":{"label":"Min.","explain":"Minimum value"},"stddev":{"label":"Std. Dev.","explain":"Standard Deviation"},"variance":"Variance"}},"processing:expression":{"label":"Processing Instructions","summary":false},"processing:lineage":{"label":"Lineage","format":"CommonMark","summary":false},"processing:level":"Level","processing:facility":"Facility","processing:software":{"label":"Software","format":"Software","summary":false},"proj:epsg":{"label":"EPSG Code","format":"EPSG","summary":"v"},"proj:wkt2":{"label":"WKT2","explain":"Well-Known Text, version 2","format":"WKT2","summary":false},"proj:projjson":{"label":"PROJJSON","explain":"JSON encoding of WKT2","format":"PROJJSON","summary":false},"proj:geometry":{"label":"Footprint","custom":true,"summary":false},"proj:bbox":{"label":"Bounding Box","custom":true,"summary":false},"proj:centroid":{"label":"Centroid","custom":true,"summary":false},"proj:shape":{"label":"Image Dimensions","format":"Shape","summary":false},"proj:transform":{"label":"Transformation Matrix","format":"Transform","summary":false},"sar:instrument_mode":"Instrument Mode","sar:frequency_band":"Frequency Band","sar:center_frequency":{"label":"Center Frequency","unit":"GHz"},"sar:polarizations":{"label":"Polarizations","format":"CSV"},"sar:product_type":"Product Type","sar:resolution_range":{"label":"Range Resolution","unit":"m"},"sar:resolution_azimuth":{"label":"Azimuth Resolution","unit":"m"},"sar:pixel_spacing_range":{"label":"Range Pixel Spacing","unit":"m"},"sar:pixel_spacing_azimuth":{"label":"Aziumth Pixel Spacing","unit":"m"},"sar:looks_range":"Range Looks","sar:looks_azimuth":"Azimuth Looks","sar:looks_equivalent_number":{"label":"ENL","explain":"Equivalent Number of Looks"},"sar:observation_direction":"Observation Direction","sat:platform_international_designator":{"label":"Int. Designator","explain":"International designator for the platform, also known as COSPAR ID and NSSDCA ID."},"sat:orbit_state":"Orbit State","sat:absolute_orbit":{"label":"Abs. Orbit Number","explain":"Absolute Orbit Number"},"sat:relative_orbit":{"label":"Rel. Orbit Number","explain":"Relative Orbit Number"},"sat:anx_datetime":{"label":"ANX Time","explain":"Ascending Node Crossing time","summary":"r"},"sci:doi":{"label":"DOI","format":"DOI"},"sci:citation":"Citation","sci:publications":{"label":"Publications","summary":false,"items":{"citation":{"label":"Publication","sortable":true,"order":0},"doi":{"label":"DOI","format":"DOI","sortable":true,"order":1}}},"ssys:targets":"Target Body","storage:platform":{"label":"Provider","mapping":{"ALIBABA":"Alibaba Cloud","AWS":"Amazon AWS","AZURE":"Microsoft Azure","GCP":"Google Cloud Platform","IBM":"IBM Cloud","ORACLE":"Oracle Cloud"}},"storage:region":"Region","storage:requester_pays":"Requester Pays","storage:tier":"Tier Type","table:columns":{"label":"Columns","items":{"name":{"label":"Name","sortable":true,"id":true,"order":0},"type":{"label":"Data Type","sortable":true,"order":1},"description":{"label":"Description","format":"CommonMark","order":2}}},"table:primary_geometry":"Primary Geometry Column","table:row_count":"Rows","table:tables":{"label":"Tables","summary":false,"listWithKeys":true,"items":{"name":{"label":"Name","sortable":true,"id":true,"order":0},"description":{"label":"Description","format":"CommonMark","order":1}}},"tiles:tile_matrix_sets":{"label":"Tile Matrix Sets","custom":true,"summary":false},"tiles:tile_matrix_set_links":{"label":"Tile Matrix Set Links","custom":true,"summary":false},"view:off_nadir":{"label":"Off-Nadir Angle","unit":"°"},"view:incidence_angle":{"label":"Incidence Angle","unit":"°"},"view:azimuth":{"label":"Viewing Azimuth","unit":"°"},"view:sun_azimuth":{"label":"Sun Azimuth","unit":"°"},"view:sun_elevation":{"label":"Sun Elevation","unit":"°"},"pl:black_fill":{"label":"Unfilled Image Parts","unit":"%"},"pl:clear_percent":{"label":"Clear Sky","unit":"%"},"pl:grid_cell":"Grid Cell","pl:ground_control":"Positional Accuracy","pl:ground_control_ratio":"Successful Rectification Ratio","pl:item_type":"Type","pl:pixel_resolution":{"label":"Spatial Resolution","unit":"m"},"pl:publishing_stage":{"label":"Publishing Stage","mapping":{"preview":"Preview","standard":"Standard","finalized":"Finalized"}},"pl:quality_category":{"label":"Quality Category","mapping":{"standard":"Standard","test":"Test"}},"pl:strip_id":"Image Strip ID","gee:type":{"label":"Type","mapping":{"image":"Single image","image_collection":"Image collection","table":"Table"}},"gee:cadence":"Cadence","gee:schema":{"label":"Variables","items":{"name":"Name","description":"Description","type":"Data Type"},"summary":false},"gee:revisit_interval":"Revisit Interval","gee:terms_of_use":{"label":"Terms of Use","format":"CommonMark","summary":false},"gee:visualizations":{"label":"Visualizations","custom":true,"summary":false},"landsat:scene_id":"Scene ID","landsat:collection_category":"Collection Category","landsat:collection_number":"Collection Number","landsat:wrs_type":{"label":"WRS Type","explain":"Worldwide Reference System Type"},"landsat:wrs_path":{"label":"WRS Path","explain":"Worldwide Reference System Path"},"landsat:wrs_row":{"label":"WRS Row","explain":"Worldwide Reference System Row"},"landsat:cloud_cover_land":{"label":"Land Cloud Cover","unit":"%"},"msft:container":"Container","msft:storage_account":"Storage Account","msft:short_description":{"label":"Summary","summary":false},"sentinel:utm_zone":"UTM Zone","sentinel:latitude_band":"Latitude Band","sentinel:grid_square":"Grid Square","sentinel:sequence":"Sequence","sentinel:product_id":{"label":"Product ID","summary":"s"},"sentinel:data_coverage":{"label":"Data Coverage","unit":"%"},"sentinel:valid_cloud_cover":"Valid Cloud Cover","cbers:data_type":{"label":"Processing Level","explain":"Geolocation precision level","mapping":{"L2":"Geolocation using only satellite telemetry","L3":"Control points used to geolocate image, no terrain correction","L4":"Control points used to geolocate image, orthorectified"},"summary":"v"},"cbers:path":"Reference Grid Path","cbers:row":"Reference Grid Row","card4l:specification":{"label":"Specification","mapping":{"SR":"Surface Reflectance (Optical)","ST":"Surface Temperature (Optical)","NRB":"Normalized Radar Backscatter (SAR)","POL":"Polarimetric Radar (SAR)"}},"card4l:specification_version":"Specification Version","card4l:orbit_mean_altitude":{"label":"Platform Altitude","unit":"m"},"card4l:incidence_angle_near_range":{"label":"Incidence Angle (near)","unit":"°"},"card4l:incidence_angle_far_range":{"label":"Incidence Angle (far)","unit":"°"},"card4l:noise_equivalent_intensity":{"label":"Noise Equivalent Intensity","unit":"dB"},"card4l:mean_faraday_rotation_angle":{"label":"Mean Faraday Rotation","unit":"°"},"card4l:speckle_filtering":{"label":"Speckle Filtering","custom":true,"summary":false,"null":"not applied"},"card4l:relative_rtc_accuracy":{"label":"Rel. RTC Accuracy","explain":"Relative accuracy of the Radiometric Terrain Correction","unit":"dB"},"card4l:absolute_rtc_accuracy":{"label":"Abs. RTC Accuracy","explain":"Absolute accuracy of the Radiometric Terrain Correction","unit":"dB"},"card4l:northern_geometric_accuracy":{"label":"Northern Geometric Accuracy","unit":"m"},"card4l:eastern_geometric_accuracy":{"label":"Eastern Geometric Accuracy","unit":"m"},"card4l:ellipsoidal_height":{"label":"Ellipsoidal Height","unit":"m"},"geoadmin:variant":{"label":"Product Variant","mapping":{"krel":"RGB color with relief","komb":"RGB color without relief","kgrel":"Grayscale with relief","kgrs":"Grayscale without relief"}}}}'
      );
    },
  },
]);
//# sourceMappingURL=2407.101b6a3f.js.map
