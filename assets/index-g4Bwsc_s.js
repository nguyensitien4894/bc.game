import "./index-DxYPFwcM.js";
import "./Application-CExkuTua.js";
import {
    a as d,
    V as v,
    e as n,
    u as _,
    d as r,
    b as h,
    i as o,
    h as w
} from "./common-jbtJucx3.js";
import "./vendor-CR7NILRE.js";
class S {
    constructor(e) {
        this._isOpen = !1, this.activeSupport = () => {}, this.preInited = new Promise(t => this.activeSupport = t), this.options = e, d.on("logout", () => this.onLogout()), v().then(async () => {
            await this.inited, this.onLogin()
        }), this.inited = this.preInited.then(() => this.init(e))
    }
    get isOpen() {
        return this._isOpen
    }
    set isOpen(e) {
        this._isOpen = e
    }
    onLogout() {}
    async openLiveSupport(e = !this.isOpen) {
        e && (d.emit("track_assistance_requested"), await this.getPayment()), this.activeSupport(), this.isOpen = e, await this.inited, this.toggle(e)
    }
    sendOrder(e) {}
    async sendLiveSupport(e) {
        this.activeSupport(), await this.inited, this.isOpen || this.toggle(!0), this.sendMsg(e)
    }
}

function L() {
    return o().get("/user/intercom/hash/")
}
const C = function() {
    const e = w.isBrHost ? "BRLFIAT" : "INRFIAT";
    return o().post("/payment/order/list/", {
        currencyName: e
    })
};
let g = null;
class I extends S {
    constructor(e) {
        super({
            id: e
        }), this.bootedAsUser = !1
    }
    injectSafeAreaStyle() {
        const e = "intercom-safe-area-style";
        if (!n.isAPP || document.getElementById(e)) return;
        const t = document.createElement("style");
        t.id = e, t.innerHTML = `
      .intercom-messenger-frame {
        top: var(--safe-top) !important;
        height: calc(100vh - var(--safe-top) - var(--safe-bottom)) !important;
      }
    `, document.head.appendChild(t)
    }
    async init() {
        var e = window,
            t = function() {
                t.c(arguments)
            };
        t.q = [], t.c = function(c) {
            t.q.push(c)
        }, e.Intercom = t, await _.loadScript(`https://widget.intercom.io/widget/${this.options.id}`), this.exec("onHide", () => this.isOpen = !1), this.exec("onShow", () => {
            this.isOpen = !0, this.injectSafeAreaStyle()
        });
        const s = await this.buildBootConfig();
        this.bootedAsUser = !!(s && s.user_id), this.exec("boot", s)
    }
    async getPayment() {
        if (r.login) try {
            const e = await C(),
                t = e && e.length > 0;
            this.exec("update", {
                verifyINR: t,
                INRverify: t,
                INRverify2: t ? 1 : 0
            })
        } catch (e) {
            console.log(e)
        }
    }
    async onLogin() {
        if (this.bootedAsUser) {
            this.isOpen && this.exec("show");
            return
        }
        const e = await this.getUserConfig();
        this.exec("update", e), this.isOpen && this.exec("show")
    }
    onLogout() {
        this.exec("shutdown")
    }
    async sendOrder(e) {
        g ? .OrderId !== e.OrderId && (g = e, this.exec("update", e))
    }
    sendMsg(e) {}
    async toggle(e) {
        this.exec(e ? "show" : "hide")
    }
    async exec(...e) {
        await this.inited, window.Intercom(...e)
    }
    async buildBootConfig() {
        const e = this.getBaseConfig();
        if (!r.login) return e;
        const t = await this.getUserConfig();
        return { ...e,
            ...t
        }
    }
    getBaseConfig() {
        return {
            hide_default_launcher: !0,
            app_id: this.options.id,
            Level: 0,
            language_override: h.lang,
            brands: n.siteName.toLocaleUpperCase()
        }
    }
    async getUserConfig() {
        const [{
            appId: e,
            name: t,
            userId: s,
            userHash: c
        }, u, m, a] = await Promise.all([L(), o().get("/payment/deposit/transactionCount/"), o().get("/account/kyc/statusV2/"), o().get("/agent/affiliate/community-links")]), p = O(m);
        return {
            has_affiliate_link: Array.isArray(a) && a.length,
            affiliate_community_link: Array.isArray(a) ? a.map(y => y.link).join(`
`) : "",
            KYC_level: p.kyclevel,
            KYC_rejection_reason: p.rejectionReason,
            total_deposit_count: u.totalDepositCount,
            fiat_deposit_count: u.fiatDepositCount,
            crypto_deposit_count: u.cryptoDepositCount,
            app_id: e,
            name: `${s}-${t}`,
            user_name: t,
            user_id: s,
            email: "",
            Level: r.vipLevel,
            L: r.vipLevel,
            created_at: Math.floor(Date.now() / 1e3),
            user_hash: c,
            language_override: h.lang,
            INRverify: !1
        }
    }
}

function O(i) {
    let e = {
        kyclevel: "",
        rejectionReason: ""
    };
    return i && (i.advancedKycStatus === "approved" ? e.kyclevel = "Advanced" : i.basicKycStatus === "approved" ? e.kyclevel = "Basic" : i.advancedKycStatus !== "none" ? (e.kyclevel = i.advancedKycStatus || "", e.rejectionReason = i.levelResults[1].moderationComment || "") : i.basicKycStatus !== "none" && (e.kyclevel = i.basicKycStatus || "", e.rejectionReason = i.levelResults[0].moderationComment || "")), e
}

function x() {
    const i = n.isStage || n.isTest || n.isDev ? "i5ulmyr4" : "t87ss9s4";
    return i ? new I(String(i)) : null
}
let l = null;

function f() {
    return l || (l = x()), l
}
async function B(i) {
    return f() ? .openLiveSupport(i)
}
async function P(i) {
    return f() ? .sendOrder(i)
}
export {
    B as openLiveSupport, P as sendOrder
};