import {
    b as Z,
    d as j,
    i as g,
    e as z,
    a as F,
    s as Q,
    t as R,
    m as w,
    c as f,
    u as tt,
    r as et,
    h as nt
} from "./web-46c35164.js";
import {
    z as q,
    c as C,
    l as M,
    D as s,
    a as u,
    a2 as ot,
    s as S,
    e as J,
    al as e,
    T as rt
} from "./manifest-d92afe19.js";
import {
    j as it,
    S as lt,
    d as _t,
    a as x,
    m as st,
    c as U,
    F as y
} from "./solid-js-871c99e1.js";
import {
    t as T,
    T as W
} from "./i18n-fd9a94dd.js";
import {
    s as $
} from "./utils-0702ff35.js";
import {
    p as mt
} from "./popup-game-limits-38371d44.js";
import {
    z as at
} from "./helpers-ece5dfb8.js";
import {
    D as ut
} from "./index-d963c58c.js";
import {
    b as dt
} from "./index-9f4ab8bd.js";
var ht = R('<div><div class="light-darkness size-full overflow-hidden rounded-xl bg-layer4"><div><h3 class="text-sm font-extrabold text-primary"></h3><span class="text-lg font-extrabold leading-tight text-brand"></span><span class="text-xs font-semibold text-secondary"></span><div><img class=h-full>');
const Et = t => {
    const [i, a] = it(t, ["type", "ratio", "freeBet", "freeSpin", "minDeposit", "sequence", "minDepositCurrency"]), o = () => t.type ? t.type === "casino" ? M("/bonus/bonus/deposit-dashboard/kr-casino.png")() : M("/bonus/bonus/deposit-dashboard/kr-sports.png")() : M("/bonus/deposit-activity-new/component/deposit.png")(), m = () => `${$(t.sequence)} ${T("Deposit Bonus")}`, E = () => {
        const _ = t.freeSpin || 0,
            p = t.freeBet || 0,
            n = _ || p ? `+ ${p||_} ${_?"FS":"FB"}` : "",
            r = () => t.type === "casino" ? T("in Casino") : t.type === "sport" ? T("in Sports") : "";
        return [w(() => new s(t.ratio).mul(100)), "% ", n, " ", w(() => w(() => t.layout === "vertical")() ? "" : r())]
    }, l = () => [w(() => T("Min. deposit: ")), w(() => u.printCurrency(new s(t.minDeposit), t.minDepositCurrency))];
    return (() => {
        var _ = ht(),
            p = _.firstChild,
            n = p.firstChild,
            r = n.firstChild,
            d = r.nextSibling,
            h = d.nextSibling,
            b = h.nextSibling,
            D = b.firstChild;
        return Z(n, j(a, {
            get style() {
                return {
                    "background-image": `linear-gradient(138deg, transparent 33.73%, ${q.isjb?"#292D2E":"rgba(36, 238, 137, 0.20)"} 98.57%)`
                }
            },
            get class() {
                return C("justify-center-center relative flex h-full flex-col p-3", a.class)
            }
        }), !1, !0), g(r, m), g(d, E), g(h, l), z(c => {
            var v = C("bg-from-special h-full rounded-xl bg-gradient-to-b from-[#24EE89] to-layer4 p-[1px]"),
                P = C(t.layout === "vertical" ? "-mb-3 -mr-3 flex h-18 justify-end" : "absolute bottom-0 right-0 top-0 h-full"),
                V = o();
            return v !== c.e && F(_, c.e = v), P !== c.t && F(b, c.t = P), V !== c.a && Q(D, "src", c.a = V), c
        }, {
            e: void 0,
            t: void 0,
            a: void 0
        }), _
    })()
};
class G {
    constructor(i) {
        this.termsData = i
    }
    getNthBonus(i, a, o = "") {
        let m = {
            selectedBonusType: "",
            meetMinDeposit: !1,
            done: !1,
            title: "",
            bonusRatio: 0,
            maxBonus: 0,
            freeSpin: 0,
            minDeposit: 0,
            maxDeposit: 0,
            currency: "USDFIAT",
            seq: 0,
            freeBet: 0,
            wagerTimes: 0,
            fiatRecharge: {},
            fiatRechargeV2: {
                minDepositCurrencies: null,
                usdBasedCurrencies: null
            }
        };
        return i.endsWith("DAILY") ? this.termsData.dailyDepositBonusTerms.find(n => n.depositBonusType === i).bonusList.find(n => n.seq === a && (!o || n.selectedBonusType === o)) || m : i.endsWith("MONTHLY") ? this.termsData.monthlyDepositBonusTerm.bonusList.find(n => n.seq === a && (!o || n.selectedBonusType === o)) || m : this.termsData.newUserDepositBonusTerms.find(_ => _.depositBonusType === i).bonusList.find(_ => _.seq === a && (!o || _.selectedBonusType === o)) || m
    }
    hasNthBonus(i, a, o) {
        return this.getNthBonus(i, a, o) !== void 0
    }
    getNthBonusList(i, a = "casino") {
        if (i.endsWith("DAILY")) {
            const m = this.termsData.dailyDepositBonusTerms.find(E => E.depositBonusType === i);
            return m ? m.bonusList.filter(E => E.selectedBonusType === a) : []
        }
        if (i.endsWith("MONTHLY")) {
            const m = this.termsData.monthlyDepositBonusTerm;
            return m ? m.bonusList : []
        }
        const o = this.termsData.newUserDepositBonusTerms.find(m => m.depositBonusType === i);
        return o ? o.bonusList.filter(m => m.selectedBonusType === a) : []
    }
}

function I(t, i, a, o) {
    return new G(t).getNthBonus(i, a, o)
}

function A(t, i, a) {
    return new G(t).getNthBonusList(i, a)
}

function k(t, i) {
    var a, o;
    return i.endsWith("DAILY") ? (a = t.dailyDepositBonusTerms.find(m => m.depositBonusType === i)) == null ? void 0 : a.wagerTerm : (o = t.newUserDepositBonusTerms.find(m => m.depositBonusType === i)) == null ? void 0 : o.wagerTerm
}
var pt = R("<div>");
const bt = Object.assign({
        "/terms/global/ar-SA/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-af666861.js"), []).then(t => t.default),
        "/terms/global/ar-SA/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-ea75337a.js"), []).then(t => t.default),
        "/terms/global/ar-SA/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-5f926735.js"), []).then(t => t.default),
        "/terms/global/ar-SA/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-ade96b09.js"), []).then(t => t.default),
        "/terms/global/ar-SA/newbie.none.html": () => e(() =>
            import ("./newbie.none-93c3fb09.js"), []).then(t => t.default),
        "/terms/global/ar-SA/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-c5ca8435.js"), []).then(t => t.default),
        "/terms/global/bn-BD/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-99111b87.js"), []).then(t => t.default),
        "/terms/global/bn-BD/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-e55c16e0.js"), []).then(t => t.default),
        "/terms/global/bn-BD/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-0a0e2484.js"), []).then(t => t.default),
        "/terms/global/bn-BD/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-9863725d.js"), []).then(t => t.default),
        "/terms/global/bn-BD/newbie.none.html": () => e(() =>
            import ("./newbie.none-958dec3a.js"), []).then(t => t.default),
        "/terms/global/bn-BD/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-3cd41ac3.js"), []).then(t => t.default),
        "/terms/global/de-DE/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-d0952abb.js"), []).then(t => t.default),
        "/terms/global/de-DE/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-72a848e9.js"), []).then(t => t.default),
        "/terms/global/de-DE/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-dae397bd.js"), []).then(t => t.default),
        "/terms/global/de-DE/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-da02ca3e.js"), []).then(t => t.default),
        "/terms/global/de-DE/newbie.none.html": () => e(() =>
            import ("./newbie.none-1750d372.js"), []).then(t => t.default),
        "/terms/global/de-DE/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-97726614.js"), []).then(t => t.default),
        "/terms/global/en-IN/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-6909ce34.js"), []).then(t => t.default),
        "/terms/global/en-IN/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-efb29cb4.js"), []).then(t => t.default),
        "/terms/global/en-IN/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-515b1e96.js"), []).then(t => t.default),
        "/terms/global/en-IN/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-6664a728.js"), []).then(t => t.default),
        "/terms/global/en-IN/newbie.none.html": () => e(() =>
            import ("./newbie.none-672d4ef3.js"), []).then(t => t.default),
        "/terms/global/en-IN/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-6a0f012f.js"), []).then(t => t.default),
        "/terms/global/en-US/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-657644b0.js"), []).then(t => t.default),
        "/terms/global/en-US/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-09d6189e.js"), []).then(t => t.default),
        "/terms/global/en-US/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-db11da20.js"), []).then(t => t.default),
        "/terms/global/en-US/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-b0c2077a.js"), []).then(t => t.default),
        "/terms/global/en-US/newbie.none.html": () => e(() =>
            import ("./newbie.none-e7f9cd9a.js"), []).then(t => t.default),
        "/terms/global/en-US/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-2b897e02.js"), []).then(t => t.default),
        "/terms/global/en-US/weeklyDepositRewards.html": () => e(() =>
            import ("./weeklyDepositRewards-34a25999.js"), []).then(t => t.default),
        "/terms/global/es-ES/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-0aa776a9.js"), []).then(t => t.default),
        "/terms/global/es-ES/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-3dea3ceb.js"), []).then(t => t.default),
        "/terms/global/es-ES/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-a1a98825.js"), []).then(t => t.default),
        "/terms/global/es-ES/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-725ba5fc.js"), []).then(t => t.default),
        "/terms/global/es-ES/newbie.none.html": () => e(() =>
            import ("./newbie.none-41b47f7c.js"), []).then(t => t.default),
        "/terms/global/es-ES/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-03dae4c8.js"), []).then(t => t.default),
        "/terms/global/es-MX/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-eb323629.js"), []).then(t => t.default),
        "/terms/global/es-MX/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-eab6fd0b.js"), []).then(t => t.default),
        "/terms/global/es-MX/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-4b63c84d.js"), []).then(t => t.default),
        "/terms/global/es-MX/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-b324366d.js"), []).then(t => t.default),
        "/terms/global/es-MX/newbie.none.html": () => e(() =>
            import ("./newbie.none-d35e8bc1.js"), []).then(t => t.default),
        "/terms/global/es-MX/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-6331330c.js"), []).then(t => t.default),
        "/terms/global/fa-IR/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-f209f6ab.js"), []).then(t => t.default),
        "/terms/global/fa-IR/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-1486a0ac.js"), []).then(t => t.default),
        "/terms/global/fa-IR/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-0005bb15.js"), []).then(t => t.default),
        "/terms/global/fa-IR/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-509101c4.js"), []).then(t => t.default),
        "/terms/global/fa-IR/newbie.none.html": () => e(() =>
            import ("./newbie.none-b746762b.js"), []).then(t => t.default),
        "/terms/global/fa-IR/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-3eb38d76.js"), []).then(t => t.default),
        "/terms/global/fi-FI/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-090bd461.js"), []).then(t => t.default),
        "/terms/global/fi-FI/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-9308ff3c.js"), []).then(t => t.default),
        "/terms/global/fi-FI/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-0debbb80.js"), []).then(t => t.default),
        "/terms/global/fi-FI/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-e7016a9b.js"), []).then(t => t.default),
        "/terms/global/fi-FI/newbie.none.html": () => e(() =>
            import ("./newbie.none-35835c2a.js"), []).then(t => t.default),
        "/terms/global/fi-FI/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-12d7af57.js"), []).then(t => t.default),
        "/terms/global/fil-PH/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-4531138c.js"), []).then(t => t.default),
        "/terms/global/fil-PH/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-7bc08abc.js"), []).then(t => t.default),
        "/terms/global/fil-PH/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-624c3804.js"), []).then(t => t.default),
        "/terms/global/fil-PH/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-b58d4d4f.js"), []).then(t => t.default),
        "/terms/global/fil-PH/newbie.none.html": () => e(() =>
            import ("./newbie.none-a9582032.js"), []).then(t => t.default),
        "/terms/global/fil-PH/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-af6d73d4.js"), []).then(t => t.default),
        "/terms/global/fr-FR/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-604910e8.js"), []).then(t => t.default),
        "/terms/global/fr-FR/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-7ceca47a.js"), []).then(t => t.default),
        "/terms/global/fr-FR/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-e8051654.js"), []).then(t => t.default),
        "/terms/global/fr-FR/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-8d9dc9e0.js"), []).then(t => t.default),
        "/terms/global/fr-FR/newbie.none.html": () => e(() =>
            import ("./newbie.none-617f91fa.js"), []).then(t => t.default),
        "/terms/global/fr-FR/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-cad0cf60.js"), []).then(t => t.default),
        "/terms/global/hi-IN/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-0f2fd05e.js"), []).then(t => t.default),
        "/terms/global/hi-IN/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-8242bc63.js"), []).then(t => t.default),
        "/terms/global/hi-IN/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-01d9d67b.js"), []).then(t => t.default),
        "/terms/global/hi-IN/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-2f860cd6.js"), []).then(t => t.default),
        "/terms/global/hi-IN/newbie.none.html": () => e(() =>
            import ("./newbie.none-d87e89e1.js"), []).then(t => t.default),
        "/terms/global/hi-IN/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-60b64021.js"), []).then(t => t.default),
        "/terms/global/hy-AM/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-44d8ac8e.js"), []).then(t => t.default),
        "/terms/global/hy-AM/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-1e66b7f4.js"), []).then(t => t.default),
        "/terms/global/hy-AM/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-ed0509ad.js"), []).then(t => t.default),
        "/terms/global/hy-AM/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-00a3fb50.js"), []).then(t => t.default),
        "/terms/global/hy-AM/newbie.none.html": () => e(() =>
            import ("./newbie.none-1437acec.js"), []).then(t => t.default),
        "/terms/global/hy-AM/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-73bcd6ef.js"), []).then(t => t.default),
        "/terms/global/id-ID/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-833bd615.js"), []).then(t => t.default),
        "/terms/global/id-ID/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-d3b1354c.js"), []).then(t => t.default),
        "/terms/global/id-ID/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-3df1388c.js"), []).then(t => t.default),
        "/terms/global/id-ID/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-4a2e239f.js"), []).then(t => t.default),
        "/terms/global/id-ID/newbie.none.html": () => e(() =>
            import ("./newbie.none-34cea753.js"), []).then(t => t.default),
        "/terms/global/id-ID/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-7b4a42da.js"), []).then(t => t.default),
        "/terms/global/it-IT/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-6cbbcc22.js"), []).then(t => t.default),
        "/terms/global/it-IT/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-201ab085.js"), []).then(t => t.default),
        "/terms/global/it-IT/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-06212f04.js"), []).then(t => t.default),
        "/terms/global/it-IT/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-36ebb350.js"), []).then(t => t.default),
        "/terms/global/it-IT/newbie.none.html": () => e(() =>
            import ("./newbie.none-ff98f42c.js"), []).then(t => t.default),
        "/terms/global/it-IT/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-23b43b3f.js"), []).then(t => t.default),
        "/terms/global/ja-JP/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-cfd3e205.js"), []).then(t => t.default),
        "/terms/global/ja-JP/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-372d6aeb.js"), []).then(t => t.default),
        "/terms/global/ja-JP/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-5aad9137.js"), []).then(t => t.default),
        "/terms/global/ja-JP/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-271d63ae.js"), []).then(t => t.default),
        "/terms/global/ja-JP/newbie.none.html": () => e(() =>
            import ("./newbie.none-23509451.js"), []).then(t => t.default),
        "/terms/global/ja-JP/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-d66cafe9.js"), []).then(t => t.default),
        "/terms/global/ko-KR/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-44032ff6.js"), []).then(t => t.default),
        "/terms/global/ko-KR/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-dbdc2df2.js"), []).then(t => t.default),
        "/terms/global/ko-KR/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-325beb32.js"), []).then(t => t.default),
        "/terms/global/ko-KR/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-b0a1d534.js"), []).then(t => t.default),
        "/terms/global/ko-KR/newbie.none.html": () => e(() =>
            import ("./newbie.none-17727c7c.js"), []).then(t => t.default),
        "/terms/global/ko-KR/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-7a5a6e89.js"), []).then(t => t.default),
        "/terms/global/mr-IN/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-1c05c936.js"), []).then(t => t.default),
        "/terms/global/mr-IN/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-5d839357.js"), []).then(t => t.default),
        "/terms/global/mr-IN/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-f7a133a6.js"), []).then(t => t.default),
        "/terms/global/mr-IN/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-6c13be49.js"), []).then(t => t.default),
        "/terms/global/mr-IN/newbie.none.html": () => e(() =>
            import ("./newbie.none-7c34b9b1.js"), []).then(t => t.default),
        "/terms/global/mr-IN/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-32d370b0.js"), []).then(t => t.default),
        "/terms/global/ms-MY/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-99d39b3d.js"), []).then(t => t.default),
        "/terms/global/ms-MY/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-9e2627e6.js"), []).then(t => t.default),
        "/terms/global/ms-MY/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-427993e4.js"), []).then(t => t.default),
        "/terms/global/ms-MY/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-67494abd.js"), []).then(t => t.default),
        "/terms/global/ms-MY/newbie.none.html": () => e(() =>
            import ("./newbie.none-a1766044.js"), []).then(t => t.default),
        "/terms/global/ms-MY/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-d73ba613.js"), []).then(t => t.default),
        "/terms/global/my-MM/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-fc95fe21.js"), []).then(t => t.default),
        "/terms/global/my-MM/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-b0eb83f3.js"), []).then(t => t.default),
        "/terms/global/my-MM/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-32d68fe2.js"), []).then(t => t.default),
        "/terms/global/my-MM/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-492bbbb4.js"), []).then(t => t.default),
        "/terms/global/my-MM/newbie.none.html": () => e(() =>
            import ("./newbie.none-12172d33.js"), []).then(t => t.default),
        "/terms/global/my-MM/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-41011992.js"), []).then(t => t.default),
        "/terms/global/nl-NL/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-34a76850.js"), []).then(t => t.default),
        "/terms/global/nl-NL/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-4b46ea97.js"), []).then(t => t.default),
        "/terms/global/nl-NL/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-57ec6ad0.js"), []).then(t => t.default),
        "/terms/global/nl-NL/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-15c71d65.js"), []).then(t => t.default),
        "/terms/global/nl-NL/newbie.none.html": () => e(() =>
            import ("./newbie.none-244efbb6.js"), []).then(t => t.default),
        "/terms/global/nl-NL/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-caf95880.js"), []).then(t => t.default),
        "/terms/global/pl-PL/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-9ef53729.js"), []).then(t => t.default),
        "/terms/global/pl-PL/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-8f7b7d42.js"), []).then(t => t.default),
        "/terms/global/pl-PL/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-77580106.js"), []).then(t => t.default),
        "/terms/global/pl-PL/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-0b2110e0.js"), []).then(t => t.default),
        "/terms/global/pl-PL/newbie.none.html": () => e(() =>
            import ("./newbie.none-515ada9e.js"), []).then(t => t.default),
        "/terms/global/pl-PL/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-33f4b02b.js"), []).then(t => t.default),
        "/terms/global/pt-BR/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-86f40fbe.js"), []).then(t => t.default),
        "/terms/global/pt-BR/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-695dcb0b.js"), []).then(t => t.default),
        "/terms/global/pt-BR/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-091a8b59.js"), []).then(t => t.default),
        "/terms/global/pt-BR/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-5a5cd7f3.js"), []).then(t => t.default),
        "/terms/global/pt-BR/newbie.none.html": () => e(() =>
            import ("./newbie.none-30fdd2f3.js"), []).then(t => t.default),
        "/terms/global/pt-BR/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-2ef7627e.js"), []).then(t => t.default),
        "/terms/global/ru-RU/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-343e48ad.js"), []).then(t => t.default),
        "/terms/global/ru-RU/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-53c5e9ff.js"), []).then(t => t.default),
        "/terms/global/ru-RU/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-45b8b7eb.js"), []).then(t => t.default),
        "/terms/global/ru-RU/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-36ef4eb4.js"), []).then(t => t.default),
        "/terms/global/ru-RU/newbie.none.html": () => e(() =>
            import ("./newbie.none-c96d5fda.js"), []).then(t => t.default),
        "/terms/global/ru-RU/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-576eba1e.js"), []).then(t => t.default),
        "/terms/global/ta-IN/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-881836b8.js"), []).then(t => t.default),
        "/terms/global/ta-IN/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-fe80335e.js"), []).then(t => t.default),
        "/terms/global/ta-IN/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-fa0c15db.js"), []).then(t => t.default),
        "/terms/global/ta-IN/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-43a7d266.js"), []).then(t => t.default),
        "/terms/global/ta-IN/newbie.none.html": () => e(() =>
            import ("./newbie.none-a60fa4e6.js"), []).then(t => t.default),
        "/terms/global/ta-IN/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-0047fcd8.js"), []).then(t => t.default),
        "/terms/global/te-IN/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-33a87f30.js"), []).then(t => t.default),
        "/terms/global/te-IN/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-16901420.js"), []).then(t => t.default),
        "/terms/global/te-IN/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-fed14af5.js"), []).then(t => t.default),
        "/terms/global/te-IN/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-360b92f9.js"), []).then(t => t.default),
        "/terms/global/te-IN/newbie.none.html": () => e(() =>
            import ("./newbie.none-0db669d1.js"), []).then(t => t.default),
        "/terms/global/te-IN/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-0eee8b67.js"), []).then(t => t.default),
        "/terms/global/th-TH/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-c45390a7.js"), []).then(t => t.default),
        "/terms/global/th-TH/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-8d3c28ea.js"), []).then(t => t.default),
        "/terms/global/th-TH/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-c1120c22.js"), []).then(t => t.default),
        "/terms/global/th-TH/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-e7cf1803.js"), []).then(t => t.default),
        "/terms/global/th-TH/newbie.none.html": () => e(() =>
            import ("./newbie.none-f6a668e6.js"), []).then(t => t.default),
        "/terms/global/th-TH/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-9c6e1a57.js"), []).then(t => t.default),
        "/terms/global/tr-TR/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-fce09913.js"), []).then(t => t.default),
        "/terms/global/tr-TR/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-fba2275d.js"), []).then(t => t.default),
        "/terms/global/tr-TR/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-fea3a932.js"), []).then(t => t.default),
        "/terms/global/tr-TR/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-b0a0a0fb.js"), []).then(t => t.default),
        "/terms/global/tr-TR/newbie.none.html": () => e(() =>
            import ("./newbie.none-0fc9890b.js"), []).then(t => t.default),
        "/terms/global/tr-TR/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-83600bf7.js"), []).then(t => t.default),
        "/terms/global/uk-UA/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-3feb7ad1.js"), []).then(t => t.default),
        "/terms/global/uk-UA/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-9ab8896b.js"), []).then(t => t.default),
        "/terms/global/uk-UA/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-c1a340c7.js"), []).then(t => t.default),
        "/terms/global/uk-UA/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-1e1ccb51.js"), []).then(t => t.default),
        "/terms/global/uk-UA/newbie.none.html": () => e(() =>
            import ("./newbie.none-a91aa119.js"), []).then(t => t.default),
        "/terms/global/uk-UA/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-3acc41b5.js"), []).then(t => t.default),
        "/terms/global/ur-PK/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-08a98dcc.js"), []).then(t => t.default),
        "/terms/global/ur-PK/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-54966d61.js"), []).then(t => t.default),
        "/terms/global/ur-PK/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-1855be9f.js"), []).then(t => t.default),
        "/terms/global/ur-PK/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-c3a52019.js"), []).then(t => t.default),
        "/terms/global/ur-PK/newbie.none.html": () => e(() =>
            import ("./newbie.none-fab14c0c.js"), []).then(t => t.default),
        "/terms/global/ur-PK/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-2963b52a.js"), []).then(t => t.default),
        "/terms/global/vi-VN/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-2ad7331d.js"), []).then(t => t.default),
        "/terms/global/vi-VN/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-5ac3c614.js"), []).then(t => t.default),
        "/terms/global/vi-VN/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-6e403a1b.js"), []).then(t => t.default),
        "/terms/global/vi-VN/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-8ea24484.js"), []).then(t => t.default),
        "/terms/global/vi-VN/newbie.none.html": () => e(() =>
            import ("./newbie.none-656b09a9.js"), []).then(t => t.default),
        "/terms/global/vi-VN/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-cfd459d0.js"), []).then(t => t.default),
        "/terms/global/zh-CN/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-333d8a03.js"), []).then(t => t.default),
        "/terms/global/zh-CN/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-f02a03eb.js"), []).then(t => t.default),
        "/terms/global/zh-CN/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-63d032ad.js"), []).then(t => t.default),
        "/terms/global/zh-CN/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-6c321cd7.js"), []).then(t => t.default),
        "/terms/global/zh-CN/newbie.none.html": () => e(() =>
            import ("./newbie.none-7e4599e1.js"), []).then(t => t.default),
        "/terms/global/zh-CN/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-cdb0b3bf.js"), []).then(t => t.default),
        "/terms/global/zh-TW/inrCompensation.html": () => e(() =>
            import ("./inrCompensation-bad47a5c.js"), []).then(t => t.default),
        "/terms/global/zh-TW/invitationBonus.html": () => e(() =>
            import ("./invitationBonus-c89198ea.js"), []).then(t => t.default),
        "/terms/global/zh-TW/monthlyDeposit.html": () => e(() =>
            import ("./monthlyDeposit-be8be0ec.js"), []).then(t => t.default),
        "/terms/global/zh-TW/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-cc0ecaf4.js"), []).then(t => t.default),
        "/terms/global/zh-TW/newbie.none.html": () => e(() =>
            import ("./newbie.none-123b0b98.js"), []).then(t => t.default),
        "/terms/global/zh-TW/newbie.sport.html": () => e(() =>
            import ("./newbie.sport-dc9f1af1.js"), []).then(t => t.default),
        "/terms/kr/en-US/daily.casino.html": () => e(() =>
            import ("./daily.casino-10c192e0.js"), []).then(t => t.default),
        "/terms/kr/en-US/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-342716f5.js"), []).then(t => t.default),
        "/terms/kr/ko-KR/daily.casino.html": () => e(() =>
            import ("./daily.casino-c4f8c514.js"), []).then(t => t.default),
        "/terms/kr/ko-KR/newbie.casino.html": () => e(() =>
            import ("./newbie.casino-a1cb8f58.js"), []).then(t => t.default),
        "/terms/vn/en-US/daily.casino.html": () => e(() =>
            import ("./daily.casino-d588885a.js"), []).then(t => t.default)
    }),
    ct = (t, i = "en-us", a = "global") => {
        const o = [`/terms/${a}/${i}/${t}.html`, `/terms/${a}/en-US/${t}.html`, `/terms/global/${i}/${t}.html`, `/terms/global/en-US/${t}.html`];
        for (const m of o) {
            const E = bt[m];
            if (E) return E()
        }
        return ""
    },
    Dt = t => {
        const [i] = ot(() => [
            [t.region, t.termsName, S.lang].join("/")
        ], () => {
            const o = E => {
                var l, _;
                return (_ = (l = J.langs[E]) == null ? void 0 : l[1]) != null ? _ : E
            };
            return ct(t.termsName, o(S.lang), t.region)
        });

        function a(o, m, E) {
            var l, _, p;
            for (const [n, r] of Object.entries(m)) {
                if ((p = (_ = (l = t.filters) == null ? void 0 : l.slots) == null ? void 0 : _.blacklist) != null && p.includes(n)) continue;
                const d = new RegExp(`__${n}__`, "g");
                o = o.replace(d, r)
            }
            for (const n of Object.keys(E)) {
                const r = new RegExp(`{{\\s*${n}\\s*}}`, "g");
                o = o.replace(r, `<div id="${n}"></div>`)
            }
            return o
        }
        return f(lt, {
            get when() {
                return i()
            },
            children: o => (() => {
                var m = pt();
                return tt(E => {
                    _t(() => {
                        E.innerHTML = a(o(), "slots" in t ? t.slots : {}, "components" in t ? t.components : {}), x(() => {
                            E.innerHTML = ""
                        }), "components" in t && Object.entries(t.components).forEach(([l, _]) => {
                            var n, r, d;
                            if ((d = (r = (n = t.filters) == null ? void 0 : n.components) == null ? void 0 : r.blacklist) != null && d.includes(l)) return;
                            const p = E.querySelector(`#${l}`);
                            if (p) {
                                const h = et(_, p);
                                x(h)
                            }
                        }), "actions" in t && Object.entries(t.actions).forEach(([l, _]) => {
                            var n, r, d;
                            if ((d = (r = (n = t.filters) == null ? void 0 : n.actions) == null ? void 0 : r.blacklist) != null && d.includes(l)) return;
                            const p = E.querySelector(`[data-bind-action="${l}"]`);
                            p && (console.log(p, "el"), p.addEventListener("click", _), x(() => {
                                p.removeEventListener("click", _)
                            }))
                        })
                    })
                }, m), m
            })()
        })
    };
var B = R("<div>"),
    K = R("<span>__index__"),
    H = R('<span class="pl-1 font-extrabold text-brand">__percentage__'),
    ft = R('<span class="pl-1 font-extrabold text-brand">__registrationPercentage__'),
    Y = R("<span>__bonusAmount__"),
    gt = R("<li>"),
    It = R('<table class="w-full mt-4 text-center"><thead><tr><th class="p-4 border-third border"></th><th class="p-4 border-third border"></th></tr></thead><tbody>'),
    Tt = R('<tr><td class="p-4 border-third border"></td><td class="p-4 border-third border">');
const O = t => {
        const i = () => t.bonusList.length % 2 === 1;
        return (() => {
            var a = B();
            return g(a, f(y, {
                get each() {
                    return t.bonusList
                },
                children: o => f(Et, {
                    get layout() {
                        return i() ? "horizontal" : "vertical"
                    },
                    get type() {
                        return o.selectedBonusType
                    },
                    get ratio() {
                        return o.bonusRatio
                    },
                    get freeBet() {
                        return o.freeBet
                    },
                    get freeSpin() {
                        return o.freeSpin
                    },
                    get minDeposit() {
                        return o.minDeposit
                    },
                    get minDepositCurrency() {
                        return o.currency
                    },
                    get sequence() {
                        return o.seq
                    }
                })
            })), z(o => {
                var m = C("mb-4 mt-2 grid gap-2", i() ? "" : "grid-cols-2"),
                    E = i() ? {} : {
                        "grid-auto-rows": "minmax(8rem, 1fr)"
                    };
                return m !== o.e && F(a, o.e = m), o.t = nt(a, E, o.t), o
            }, {
                e: void 0,
                t: void 0
            }), a
        })()
    },
    N = () => q.isbcmx ? `PRODUCCIONES MÓVILES S.A. DE C.V., PERMISIONARIA EN MATERIA DE JUEGOS Y SORTEOS CONFORME AL PERMISO DGAJS/SCEVF/P-06/2005-TER Y AL
  OFICIO DE AUTORIZACIÓN DGJS/ 1670 /2025 DE LA PROMOCIÓN: BONO POR DEPÓSITO. LA VIGENCIA DE LA AUTORIZACIÓN ES HASTA EL 31 DE
  DICIEMBRE DE 2025. LA PROMOCIÓN ES PERSONAL E INTRANSFERIBLE. JUEGUE RESPONSABLEMENTE. RECUERDE QUE EL PRINCIPAL PROPÓSITO ES EL
  ENTRETENIMIENTO, LA DIVERSIÓN Y EL ESPARCIMIENTO. JUEGOS PROHIBIDOS PARA MENORES DE EDAD` : "",
    L = () => {
        mt()
    },
    Bt = t => {
        const i = st({
                region: "global"
            }, t),
            [a] = ut.useDepositTerms(),
            o = U(() => {
                const l = a(),
                    _ = J.licenseHost.toUpperCase();
                return {
                    kr: {
                        "newbie.casino": () => {
                            const n = I(l, "KR-NEWBIE", 1),
                                r = A(l, "KR-NEWBIE", "casino");
                            return {
                                actions: {
                                    popUpGameNameList: L
                                },
                                components: {
                                    bonusStructureImg: () => f(O, {
                                        bonusList: r
                                    })
                                },
                                slots: {
                                    domain: _,
                                    firstBonusRate: new s(n.bonusRatio).mul(100).toFixed(0) + "%",
                                    firstMinDepositAmount: u.printCurrency(new s(n.minDeposit), n.currency, {
                                        target: "KRWFIAT"
                                    }),
                                    firstMaxBonusAmount: u.printCurrency(new s(n.maxBonus), n.currency, {
                                        target: "KRWFIAT"
                                    })
                                }
                            }
                        },
                        "daily.casino": () => {
                            const n = I(l, "KR-DAILY", 1),
                                r = I(l, "KR-DAILY", 2),
                                d = A(l, "KR-DAILY", "casino");
                            return {
                                actions: {
                                    popUpGameNameList: L
                                },
                                components: {
                                    bonusStructureImg: () => f(O, {
                                        bonusList: d
                                    })
                                },
                                slots: {
                                    domain: _,
                                    firstMinDepositAmount: u.printCurrency(new s(n.minDeposit), n.currency, {
                                        target: "KRWFIAT"
                                    }),
                                    firstBonusPercentage: new s(n.bonusRatio).mul(100).toFixed(0) + "%",
                                    firstMaxBonusAmount: u.printCurrency(new s(n.maxBonus), n.currency, {
                                        target: "KRWFIAT"
                                    }),
                                    secondMinDepositAmount: u.printCurrency(new s(r.minDeposit), r.currency, {
                                        target: "KRWFIAT"
                                    }),
                                    secondBonusPercentage: new s(r.bonusRatio).mul(100).toFixed(0) + "%",
                                    secondMaxBonusAmount: u.printCurrency(new s(r.maxBonus), r.currency, {
                                        target: "KRWFIAT"
                                    })
                                }
                            }
                        }
                    },
                    vn: {
                        "daily.casino": () => {
                            const n = I(l, "VN-DAILY", 1),
                                r = I(l, "VN-DAILY", 2),
                                d = A(l, "VN-DAILY", "casino");
                            return {
                                actions: {
                                    popUpGameNameList: L
                                },
                                components: {
                                    bonusStructureImg: () => f(O, {
                                        bonusList: d
                                    })
                                },
                                slots: {
                                    domain: _,
                                    firstMinDeposit: u.printCurrency(new s(n.minDeposit), n.currency, {
                                        target: "VNDFIAT"
                                    }),
                                    firstBonusRate: new s(n.bonusRatio).mul(100).toFixed(0) + "%",
                                    firstMaximumBonusAmount: u.printCurrency(new s(n.maxBonus), n.currency, {
                                        target: "VNDFIAT"
                                    }),
                                    secondMinDeposit: u.printCurrency(new s(r.minDeposit), r.currency, {
                                        target: "VNDFIAT"
                                    }),
                                    secondBonusRate: new s(r.bonusRatio).mul(100).toFixed(0) + "%",
                                    secondMaximumBonusAmount: u.printCurrency(new s(r.maxBonus), r.currency, {
                                        target: "VNDFIAT"
                                    })
                                }
                            }
                        }
                    },
                    global: {
                        invitationBonus: () => {
                            const n = at(),
                                r = () => {
                                    var h, b;
                                    return (b = (h = n()) == null ? void 0 : h[0]) != null ? b : {
                                        depositLimitDay: 0,
                                        bonusPercentage: 0,
                                        minDeposit: 0,
                                        maxDeposit: 0,
                                        maxWithdrawal: 0,
                                        rolloverTimes: 0,
                                        claimLimitDay: 0,
                                        currency: "USDFIAT"
                                    }
                                },
                                d = () => {
                                    var h;
                                    return (h = r().currency) != null ? h : "USDFIAT"
                                };
                            return {
                                actions: {},
                                components: {},
                                slots: {
                                    domain: _,
                                    eventDuration: r().depositLimitDay.toString(),
                                    bonusAmount: r().bonusPercentage + "%",
                                    minimumDeposit: u.printCurrency(new s(r().minDeposit), d()),
                                    maximumDeposit: u.printCurrency(new s(r().maxDeposit), d()),
                                    maximumCashOut: u.printCurrency(new s(r().maxWithdrawal), d()),
                                    wagerTimes: r().rolloverTimes.toString(),
                                    claimLimitDay: r().claimLimitDay.toString()
                                }
                            }
                        },
                        monthlyDeposit: () => {
                            const n = A(l, "MONTHLY").slice(1);
                            return {
                                actions: {},
                                components: {
                                    bonusStructureImg: () => f(O, {
                                        bonusList: n
                                    }),
                                    bonusStructure: () => {
                                        const r = () => A(l, "MONTHLY")[0].bonusRatio * 100,
                                            d = () => f(y, {
                                                each: n,
                                                children: (h, b) => {
                                                    const D = () => {
                                                        switch (b()) {
                                                            case 0:
                                                                return T("first");
                                                            case 1:
                                                                return T("second");
                                                            case 2:
                                                                return T("third");
                                                            case 3:
                                                                return T("fourth");
                                                            default:
                                                                return T("unknown")
                                                        }
                                                    };
                                                    return (() => {
                                                        var c = gt();
                                                        return g(c, f(rt, {
                                                            get when() {
                                                                return b() === 0
                                                            },
                                                            get fallback() {
                                                                return f(W, {
                                                                    get index() {
                                                                        return D()
                                                                    },
                                                                    get percentage() {
                                                                        return h.bonusRatio * 100 + "%"
                                                                    },
                                                                    get bonusAmount() {
                                                                        return u.toFiatStr(new s(h.maxBonus), "USDFIAT", S.lang)
                                                                    },
                                                                    i18nKey: "bonus.welecome.newtext.desc5",
                                                                    get children() {
                                                                        return ["The ", K(), " deposit earns you", H(), ", up to a maximum of", " ", Y(), " or an equivalent amount in other currencies."]
                                                                    }
                                                                })
                                                            },
                                                            get children() {
                                                                return f(W, {
                                                                    get index() {
                                                                        return D()
                                                                    },
                                                                    get percentage() {
                                                                        return h.bonusRatio * 100 + "%"
                                                                    },
                                                                    get bonusAmount() {
                                                                        return u.toFiatStr(new s(h.maxBonus), "USDFIAT", S.lang)
                                                                    },
                                                                    get registrationPercentage() {
                                                                        return r() + "%"
                                                                    },
                                                                    i18nKey: "bonus.welecome.newtext.desc6",
                                                                    get children() {
                                                                        return ["The ", K(), " deposit earns you", H(), "(or", ft(), "for new registrations within 7 minutes), up to a maximum of", Y(), " or an equivalent amount in other currencies."]
                                                                    }
                                                                })
                                                            }
                                                        })), c
                                                    })()
                                                }
                                            });
                                        return (() => {
                                            var h = B();
                                            return g(h, d), h
                                        })()
                                    }
                                },
                                slots: {
                                    domain: _,
                                    extraFooter: N()
                                }
                            }
                        },
                        weeklyDepositRewards: () => {
                            const [n] = dt.getWeeklyDepositRewardTerms();
                            return {
                                actions: {},
                                components: {
                                    bonusList: () => (() => {
                                        var r = It(),
                                            d = r.firstChild,
                                            h = d.firstChild,
                                            b = h.firstChild,
                                            D = b.nextSibling,
                                            c = d.nextSibling;
                                        return g(b, () => T("Tier")), g(D, () => T("Rewards")), g(c, f(y, {
                                            get each() {
                                                return n()
                                            },
                                            children: v => (() => {
                                                var P = Tt(),
                                                    V = P.firstChild,
                                                    X = V.nextSibling;
                                                return g(V, () => u.printCurrency(new s(v.targetDepositAmount), v.currency)), g(X, () => u.printCurrency(new s(v.bonusAmount), v.currency)), P
                                            })()
                                        })), r
                                    })()
                                }
                            }
                        },
                        inrCompensation: () => ({
                            actions: {
                                popUpGameNameList: L
                            },
                            components: {},
                            slots: {
                                domain: _,
                                wagerTimes: "25",
                                currency: "INR"
                            }
                        }),
                        "newbie.casino": () => {
                            var n, r, d;
                            return {
                                actions: {
                                    popUpGameNameList: L
                                },
                                components: {
                                    bonusStructure: () => {
                                        const h = A(l, "COMMON-NEWBIE", "casino").map((b, D) => T("__sequence__ Deposit Bonus: __rate__ match bonus up to __amount__ + __freeSpin__ Free Spins.", {
                                            sequence: $(D + 1),
                                            rate: b.bonusRatio * 100 + "%",
                                            amount: u.printCurrency(new s(b.maxBonus), b.currency),
                                            freeSpin: b.freeSpin
                                        }));
                                        return (() => {
                                            var b = B();
                                            return g(b, f(y, {
                                                each: h,
                                                children: D => (() => {
                                                    var c = B();
                                                    return g(c, D), c
                                                })()
                                            })), b
                                        })()
                                    },
                                    bonusStructureImg: () => {
                                        const h = A(l, "COMMON-NEWBIE", "casino");
                                        return f(O, {
                                            bonusList: h
                                        })
                                    }
                                },
                                slots: {
                                    extraFooter: N(),
                                    domain: _,
                                    minDepositAmount1: u.printCurrency(new s(I(l, "COMMON-NEWBIE", 1, "casino").minDeposit), "USDFIAT"),
                                    minDepositAmount2: u.printCurrency(new s(I(l, "COMMON-NEWBIE", 2, "casino").minDeposit), "USDFIAT"),
                                    minDepositAmount3: u.printCurrency(new s(I(l, "COMMON-NEWBIE", 3, "casino").minDeposit), "USDFIAT"),
                                    minDepositAmount4: u.printCurrency(new s(I(l, "COMMON-NEWBIE", 4, "casino").minDeposit), "USDFIAT"),
                                    wagerTimes: (d = (r = (n = k(l, "COMMON-NEWBIE")) == null ? void 0 : n.bonusWagerTimes) == null ? void 0 : r.toString()) != null ? d : "0",
                                    maximumWithdrawAmount: u.printCurrency(new s(l.newUserBonusTerm.freeSpinMaxWinnings))
                                }
                            }
                        },
                        "newbie.sport": () => {
                            var r, d, h;
                            const n = A(l, "COMMON-NEWBIE", "sport");
                            return {
                                actions: {
                                    popUpGameNameList: L
                                },
                                components: {
                                    bonusStructure: () => {
                                        const b = A(l, "COMMON-NEWBIE", "sport").map((D, c) => T("__sequence__ Deposit Bonus: __rate__ match bonus up to __amount__ + __freeBet__ Free Bets.", {
                                            sequence: $(c + 1),
                                            rate: D.bonusRatio * 100 + "%",
                                            freeBet: D.freeBet,
                                            amount: u.printCurrency(new s(D.maxBonus), D.currency)
                                        }));
                                        return f(y, {
                                            each: b,
                                            children: D => (() => {
                                                var c = B();
                                                return g(c, D), c
                                            })()
                                        })
                                    },
                                    bonusStructureImg: () => f(O, {
                                        bonusList: n
                                    })
                                },
                                slots: {
                                    domain: _,
                                    extraFooter: N(),
                                    minDepositAmount1: u.printCurrency(new s(I(l, "COMMON-NEWBIE", 1, "sport").minDeposit), "USDFIAT"),
                                    minDepositAmount2: u.printCurrency(new s(I(l, "COMMON-NEWBIE", 2, "sport").minDeposit), "USDFIAT"),
                                    minDepositAmount3: u.printCurrency(new s(I(l, "COMMON-NEWBIE", 3, "sport").minDeposit), "USDFIAT"),
                                    minDepositAmount4: u.printCurrency(new s(I(l, "COMMON-NEWBIE", 4, "sport").minDeposit), "USDFIAT"),
                                    wagerTimes: (h = (d = (r = k(l, "COMMON-NEWBIE")) == null ? void 0 : r.sportBonusWagerTimes) == null ? void 0 : d.toString()) != null ? h : "0"
                                }
                            }
                        },
                        "newbie.none": () => ({
                            actions: {},
                            components: {},
                            slots: {
                                domain: _,
                                extraFooter: N(),
                                freeSpinWagerTimes: l.newUserBonusTerm.freeSpinWagerTimes.toString(),
                                maximumWinning: l.newUserBonusTerm.freeSpinMaxWinnings.toString(),
                                totalWinnings: u.printCurrency(new s(l.newUserBonusTerm.freeSpinMaxWinnings * 3))
                            }
                        })
                    }
                }
            }),
            m = U(() => {
                if (i.region) {
                    const p = o()[i.region];
                    if (i.termsName in p) {
                        const n = i.termsName;
                        return p[n]()
                    }
                }
                const l = o().global,
                    _ = i.termsName;
                return l[_]()
            }),
            E = U(() => Object.assign(m(), "slots" in i ? {
                slots: i.slots
            } : {}, "components" in i ? {
                components: i.components
            } : {}, "actions" in i ? {
                actions: i.actions
            } : {}));
        return f(Dt, j({
            get region() {
                return i.region
            },
            get termsName() {
                return i.termsName
            },
            get filters() {
                return i.filters
            }
        }, E))
    };
export {
    Bt as T
};