var U = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var $ = Object.prototype.hasOwnProperty,
    l = Object.prototype.propertyIsEnumerable;
var f = (t, e, s) => e in t ? U(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: s
    }) : t[e] = s,
    D = (t, e) => {
        for (var s in e || (e = {})) $.call(e, s) && f(t, s, e[s]);
        if (m)
            for (var s of m(e)) l.call(e, s) && f(t, s, e[s]);
        return t
    };
var i = (t, e, s) => new Promise((a, o) => {
    var r = p => {
            try {
                y(s.next(p))
            } catch (c) {
                o(c)
            }
        },
        u = p => {
            try {
                y(s.throw(p))
            } catch (c) {
                o(c)
            }
        },
        y = p => p.done ? a(p.value) : Promise.resolve(p.value).then(r, u);
    y((s = s.apply(t, e)).next())
});
import {
    z as d,
    j as n,
    M as g
} from "./manifest-c14db982.js";
import {
    u as v
} from "./useCommonPostPR-02a6e986.js";

function M(t) {
    return d(t, ([e, s]) => n().post(e, s), {
        expires: 1e3
    })
}
var h;
(t => {
    function e(o) {
        return M(() => {
            const r = o();
            return r && [`/payment/deposit/crypto/${r.currencyName}/address/`, r]
        })[0]
    }
    t.useAddress = e;

    function s() {
        return i(this, null, function*() {
            return n().post("/payment/lnurl/pay/")
        })
    }
    t.satsPay = s;

    function a(o) {
        return i(this, null, function*() {
            return n().post("/payment/deposit/crypto/create-sats/", {
                amount: o
            })
        })
    }
    t.satsCreat = a
})(h || (h = {}));
var H;
(t => {
    function e(o) {
        return v(`/payment/deposit${g.isUsHost?"/us":""}/history/`, o)
    }
    t.useDepositHistory = e;

    function s(o) {
        return n().post(`/payment/deposit${g.isUsHost?"/us":""}/history/`, o)
    }
    t.getDepositHistory = s;

    function a(o) {
        return i(this, null, function*() {
            return n().get(`/payment/deposit/order/${o}/`)
        })
    }
    t.getDepositDetail = a
})(H || (H = {}));
var P;
(t => {
    function e(r) {
        return d(() => ["/payment/deposit/fiat/kyc/", r()], ([u, y]) => n().post(u, y))
    }
    t.useDepositKycData = e;

    function s(r) {
        return i(this, null, function*() {
            return n().post("/payment/deposit/fiat/create/", D({}, r))
        })
    }
    t.deposit = s;

    function a(r) {
        return d(() => [r(), {
            key: "deposit-methods"
        }], ([u]) => n().get(`/payment/deposit/fiat/${u}/methods/`))
    }
    t.useDepositMethods = a;

    function o(r, u) {
        return i(this, null, function*() {
            return n().post("/payment/deposit/fiat/order/updateUTR/", {
                orderId: r,
                utr: u
            })
        })
    }
    t.updateUtr = o
})(P || (P = {}));
export {
    P as D, h as a, H as b
};