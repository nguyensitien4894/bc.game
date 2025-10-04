var o = (r, g, s) => new Promise((u, t) => {
    var m = e => {
            try {
                i(s.next(e))
            } catch (n) {
                t(n)
            }
        },
        T = e => {
            try {
                i(s.throw(e))
            } catch (n) {
                t(n)
            }
        },
        i = e => e.done ? u(e.value) : Promise.resolve(e.value).then(m, T);
    i((s = s.apply(r, g)).next())
});
import {
    a2 as a,
    j as W,
    ag as B
} from "./manifest-d92afe19.js";
import {
    h as p
} from "./http-696896a0.js";
const b = {
    useDepositProgress: () => a(() => ["/activity/recharge-bonus/progress/", {
        login: W.login
    }], g => o(void 0, [g], function*([r]) {
        return yield p.get(r)
    })),
    useCurrentDepositItem: () => B,
    useDepositTerms: () => a(() => ["/activity/recharge-bonus/term/"], g => o(void 0, [g], function*([r]) {
        return yield p.get(r)
    }), {
        initialValue: {
            monthlyDepositBonusTerm: {
                depositBonusType: "MONTHLY",
                bonusList: []
            },
            newUserBonusTerm: {
                bonusWagerTimes: 0,
                sportBonusWagerTimes: 0,
                freeBetWagerTimes: 0,
                freeSpinMaxWinnings: 0,
                freeSpinWagerTimes: 0
            },
            newUserDepositBonusTerms: [{
                depositBonusType: "COMMON-NEWBIE",
                bonusList: [],
                wagerTerm: {
                    bonusWagerTimes: 0,
                    freeBetWagerTimes: 0,
                    freeSpinMaxWinnings: 0,
                    sportBonusWagerTimes: 0,
                    freeSpinWagerTimes: 0
                }
            }, {
                depositBonusType: "KR-NEWBIE",
                wagerTerm: {
                    bonusWagerTimes: 0,
                    freeBetWagerTimes: 0,
                    freeSpinMaxWinnings: 0,
                    freeSpinWagerTimes: 0,
                    sportBonusWagerTimes: 0
                },
                bonusList: []
            }],
            dailyDepositBonusTerms: [{
                depositBonusType: "KR-DAILY",
                wagerTerm: {
                    bonusWagerTimes: 0,
                    freeBetWagerTimes: 0,
                    freeSpinMaxWinnings: 0,
                    freeSpinWagerTimes: 0,
                    sportBonusWagerTimes: 0
                },
                bonusList: []
            }, {
                depositBonusType: "VN-DAILY",
                bonusList: [],
                wagerTerm: {
                    sportBonusWagerTimes: 0,
                    bonusWagerTimes: 0,
                    freeBetWagerTimes: 0,
                    freeSpinMaxWinnings: 0,
                    freeSpinWagerTimes: 0
                }
            }]
        }
    })
};
export {
    b as D
};