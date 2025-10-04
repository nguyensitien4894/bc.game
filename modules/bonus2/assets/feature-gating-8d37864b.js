import {
    m as r,
    z as l,
    j as s
} from "./manifest-d92afe19.js";
import {
    g as N
} from "./tools-398e478b.js";
import {
    b as U
} from "./index-9f4ab8bd.js";
import {
    h as L,
    g as S,
    y as T,
    i as d,
    k as o,
    l as v
} from "./helpers-ece5dfb8.js";
import {
    R as m
} from "./enums-fd45c1cf.js";
class C {
    constructor(a) {
        this.features = a
    }
    isEnabled(a) {
        const t = this.features.find(n => n.name === a);
        return t ? t.isFeatureEnabled() : !1
    }
    getMeta(a) {
        var n;
        const t = this.features.find(_ => _.name === a);
        return t ? (n = t.meta) == null ? void 0 : n.call(t) : null
    }
}
const O = [];

function i(e) {
    var t, n;
    const a = {
        name: e.name,
        isEnabled: e.isEnabled,
        features: (t = e.childFeatures) != null ? t : [],
        parent: null,
        isFeatureEnabled: () => {
            var _;
            return !(!a.isEnabled() || a.parent && !((_ = a.parent) != null && _.isEnabled()))
        },
        meta: e.meta
    };
    return (n = e.childFeatures) == null || n.forEach(_ => {
        _.parent = a
    }), O.push(a), a
}
var c = (e => (e.NEW_USER = "NEW_USER", e.REWARD = "REWARD", e.VAULT_PRO = "VAULT_PRO", e.LUCKY_SPIN = "LUCKY_SPIN", e.LUCKY_SPIN_NOTIFICATION = "LUCKY_SPIN_NOTIFICATION", e.QUEST_NOTIFICATION = "QUEST_NOTIFICATION", e.TIPS_RAIN = "TIPS_RAIN", e.LEVELUP_BONUS = "LEVELUP_BONUS", e.LEVELUP_BONUS_UNLOCKED = "LEVELUP_BONUS_UNLOCKED", e.MONTHLY_BONUS = "MONTHLY_BONUS", e.MONTHLY_BONUS_UNLOCKED = "MONTHLY_BONUS_UNLOCKED", e.WEEKLY_BONUS = "WEEKLY_BONUS", e.WEEKLY_BONUS_UNLOCKED = "WEEKLY_BONUS_UNLOCKED", e.RECHARGE_UNLOCKED = "RECHARGE_UNLOCKED", e.VIP_BONUS_UNLOCKED = "VIP_BONUS_UNLOCKED", e.RECALL_TASKS = "RECALL_TASKS", e.TACO_TUESDAY_BONUS = "TACO_TUESDAY_BONUS", e.TACO_TUESDAY_BONUS_UNLOCKED = "TACO_TUESDAY_BONUS_UNLOCKED", e.TG_SUB_TASK = "TG_SUB_TASK", e.KYC_FIRST_BONUS = "KYC_FIRST_BONUS", e.ATTENDANCE_BONUS = "ATTENDANCE_BONUS", e.RAKEBACK = "RAKEBACK", e.SPORT_WEEKLY_BONUS_UNLOCKED = "SPORT_WEEKLY_BONUS_UNLOCKED", e.SPORT_WEEKLY_BONUS = "SPORT_WEEKLY_BONUS", e.DEPOSIT = "DEPOSIT", e.ROLL_COMPETITION = "ROLL_COMPETITION", e.RECHARGE = "RECHARGE", e))(c || {});
i({
    name: "NEW_USER",
    isEnabled: () => !1,
    childFeatures: []
});
const E = () => {
        var a, t, n;
        if (!s.login) return 22;
        const [e] = U.bonusDashboardResource();
        return (n = (t = (a = e()) == null ? void 0 : a[0]) == null ? void 0 : t.levelLimit) != null ? n : 22
    },
    A = () => {
        var e, a;
        return (a = (e = N().first) == null ? void 0 : e.krw) != null ? a : !1
    };
i({
    name: "REWARD",
    isEnabled: () => !0,
    childFeatures: [i({
        name: "ATTENDANCE_BONUS",
        isEnabled: A,
        childFeatures: []
    }), i({
        name: "VAULT_PRO",
        isEnabled: () => !r.isUsHost
    }), i({
        name: "LUCKY_SPIN",
        isEnabled: () => !r.isUsHost && !l.isesportsbr,
        childFeatures: [i({
            name: "LUCKY_SPIN_NOTIFICATION",
            isEnabled: () => s.vipLevel < 50
        })]
    }), i({
        name: "QUEST_NOTIFICATION",
        isEnabled: () => s.vipLevel < 50
    }), i({
        name: "TIPS_RAIN",
        isEnabled: () => !r.isUsHost
    }), i({
        name: "LEVELUP_BONUS",
        isEnabled: () => !0,
        childFeatures: [i({
            name: "LEVELUP_BONUS_UNLOCKED",
            isEnabled: () => s.vipLevel >= E(),
            meta: () => ({
                levelLimit: E()
            })
        })]
    }), i({
        name: "VIP_BONUS_UNLOCKED",
        isEnabled: () => s.login ? (L()().privilegeLevel || s.vipLevel) >= E() : !0,
        childFeatures: [i({
            name: "MONTHLY_BONUS",
            isEnabled: () => !0,
            childFeatures: [i({
                name: "MONTHLY_BONUS_UNLOCKED",
                isEnabled: () => (L()().privilegeLevel || s.vipLevel) >= E(),
                meta: () => ({
                    levelLimit: E()
                })
            })]
        }), i({
            name: "WEEKLY_BONUS",
            isEnabled: () => !0,
            childFeatures: [i({
                name: "WEEKLY_BONUS_UNLOCKED",
                isEnabled: () => (S()().privilegeLevel || s.vipLevel) >= E(),
                meta: () => ({
                    levelLimit: E()
                })
            })]
        }), i({
            name: "RECHARGE",
            isEnabled: () => !l.isesportsbr,
            childFeatures: [i({
                name: "RECHARGE_UNLOCKED",
                isEnabled: () => s.login ? (T()().privilegeLevel || s.vipLevel) >= E() : !1,
                meta: () => ({
                    levelLimit: E()
                })
            })]
        }), i({
            name: "SPORT_WEEKLY_BONUS",
            isEnabled: () => !r.isUsHost,
            childFeatures: [i({
                name: "SPORT_WEEKLY_BONUS_UNLOCKED",
                isEnabled: () => (d()().privilegeLevel || s.vipLevel) >= E(),
                meta: () => ({
                    levelLimit: E()
                })
            })]
        })]
    }), i({
        name: "RAKEBACK",
        isEnabled: () => !l.isesportsbr
    }), i({
        name: "DEPOSIT",
        isEnabled: () => !l.isesportsbr
    }), i({
        name: "ROLL_COMPETITION",
        isEnabled: () => !1
    }), i({
        name: "RECALL_TASKS",
        isEnabled: () => !l.isesportsbr,
        childFeatures: [i({
            name: "TG_SUB_TASK",
            isEnabled: () => {
                const a = o()().tasks.find(t => t.taskId === m.TELEGRAM);
                return s.vipLevel <= E() || !!(a && a.status === 2)
            }
        })]
    }), i({
        name: "TACO_TUESDAY_BONUS",
        isEnabled: () => !r.isUsHost && !l.isbzall && s.vipLevel >= E()
    }), i({
        name: "KYC_FIRST_BONUS",
        isEnabled: () => {
            var t;
            const e = v(),
                a = () => l.isbcng || l.isbcke || l.isbzall || r.isBrHost || r.isUsHost;
            return ((t = e()) == null ? void 0 : t.claimedTime) === 0 && !a()
        }
    })]
});
const D = new C(O);
export {
    c as F, D as f
};