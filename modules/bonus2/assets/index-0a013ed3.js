import {
    c as e,
    i as N,
    D as g,
    t as f
} from "./web-46c35164.js";
import {
    a8 as y,
    n as c,
    p as s,
    P as m
} from "./manifest-d92afe19.js";
import {
    T as u
} from "./TermWithData-92578748.js";
import {
    t
} from "./i18n-fd9a94dd.js";
import {
    S as h,
    b as B,
    F as T
} from "./solid-js-871c99e1.js";
import "./utils-0702ff35.js";
import "./popup-game-limits-38371d44.js";
import "./index-feaa71f9.js";
import "./http-696896a0.js";
import "./_arrayMap-2bcec0e7.js";
import "./_baseFor-371c5662.js";
import "./_MapCache-91cc8331.js";
import "./_baseGetTag-c2e287b9.js";
import "./isArray-79a0be9c.js";
import "./_baseIsEqual-7dac899d.js";
import "./groupBy-843aaa6e.js";
import "./_baseIteratee-a7d854cc.js";
import "./toString-1f7cb583.js";
import "./memoize-91f976fa.js";
import "./helpers-ece5dfb8.js";
import "./vip-5eda96e7.js";
import "./index-9f4ab8bd.js";
import "./baseService-102e5148.js";
import "./enums-fd45c1cf.js";
import "./index-d963c58c.js";
var w = f('<div class="flex min-h-48 items-center justify-center">');
const D = n => {
    const o = {
            "newbie.casino": t("Casino"),
            "newbie.sport": t("Sport"),
            "daily.casino": t("Casino"),
            monthlyDeposit: t("Monthly"),
            weeklyDepositRewards: t("Weekly"),
            inrCompensation: t(""),
            "newbie.none": t("None"),
            invitationBonus: t("Invitation Bonus")
        },
        a = () => ({
            "COMMON-NEWBIE": [{
                region: "global",
                termName: "newbie.casino",
                isDefault: n.defaultBonusType === "casino"
            }, {
                region: "global",
                termName: "newbie.sport",
                isDefault: n.defaultBonusType === "sport"
            }],
            "KR-DAILY": [{
                region: "kr",
                termName: "daily.casino"
            }],
            "KR-NEWBIE": [{
                region: "kr",
                termName: "newbie.casino"
            }],
            "VN-DAILY": [{
                region: "vn",
                termName: "daily.casino"
            }],
            "VN-NEWBIE": [{
                region: "global",
                termName: "newbie.casino",
                isDefault: n.defaultBonusType === "casino"
            }, {
                region: "global",
                termName: "newbie.sport",
                isDefault: n.defaultBonusType === "sport"
            }],
            MONTHLY: [{
                region: "global",
                termName: "monthlyDeposit"
            }],
            WEEKLY: [{
                region: "global",
                termName: "weeklyDepositRewards"
            }]
        })[n.depositBonusType];
    return e(h, {
        get when() {
            return a()
        },
        get fallback() {
            return (() => {
                var r = w();
                return N(r, e(y, {})), r
            })()
        },
        children: r => {
            var p;
            const [d, b] = B((p = r().findIndex(i => i.isDefault)) != null ? p : 0), l = () => r().length > 1;
            return e(g, {
                get component() {
                    return l() ? c : "div"
                },
                type: "inner",
                get value() {
                    return d()
                },
                onChange: b,
                get children() {
                    return e(T, {
                        get each() {
                            return r()
                        },
                        children: i => e(g, {
                            get component() {
                                return l() ? c.TabItem : "div"
                            },
                            get title() {
                                return o[i.termName]
                            },
                            class: "!bg-transparent",
                            get children() {
                                return e(u, {
                                    get termsName() {
                                        return i.termName
                                    },
                                    get region() {
                                        return i.region
                                    }
                                })
                            }
                        })
                    })
                }
            })
        }
    })
};

function J(n) {
    const {
        type: o,
        bonusType: a
    } = n;
    if (o !== "SPECIAL") {
        if ((o === "COMMON-NEWBIE" || o === "VN-NEWBIE") && !a) {
            s.push(() => e(m, {
                get title() {
                    return t("Bonus T&C")
                },
                get children() {
                    return e(u, {
                        termsName: "newbie.none",
                        region: "global"
                    })
                }
            }));
            return
        }
        s.push(() => e(m, {
            get title() {
                return t("Bonus T&C")
            },
            get children() {
                return e(D, {
                    depositBonusType: o,
                    defaultBonusType: a
                })
            }
        }))
    }
}

function Q() {
    return s.push(() => e(m, {
        get title() {
            return t("Bonus T&C")
        },
        get children() {
            return e(u, {
                termsName: "invitationBonus",
                region: "global"
            })
        }
    }))
}
export {
    J as
    default, J as popupBonusTerms, Q as popupInvitationBonusTerms
};