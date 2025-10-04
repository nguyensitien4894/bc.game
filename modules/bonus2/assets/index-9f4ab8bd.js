var u = Object.defineProperty,
    c = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty,
    p = Object.prototype.propertyIsEnumerable;
var a = (e, t, r) => t in e ? u(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[t] = r,
    o = (e, t) => {
        for (var r in t || (t = {})) d.call(t, r) && a(e, r, t[r]);
        if (i)
            for (var r of i(t)) p.call(t, r) && a(e, r, t[r]);
        return e
    },
    n = (e, t) => c(e, l(t));
import {
    h as s
} from "./http-696896a0.js";
import {
    B as m
} from "./baseService-102e5148.js";
import {
    j as y
} from "./manifest-d92afe19.js";
const h = {
    getDashboardData: () => s.post("/activity/bonus-dashboard/get/?channel=2"),
    getDashboardStatistics: () => s.post("/activity/bonus-dashboard/statistics/"),
    getWeeklyDepositReward: () => s.get("/activity-extension/cycle-deposit-bonus/list/"),
    getWeeklyDepositRewardTerms: () => s.get("/activity-extension/cycle-deposit-bonus/term/"),
    getSpecialBonus: () => s.post("/new-reward/special/uncollected/"),
    receiveReward: e => s.post(`/activity/reward/receive/${e.rewardId}/`, {
        doubleBonus: e.doubleBonus,
        currency: e.currency
    }),
    receiveFreeSpin: e => s.post("/activity/reward/freeSpin/claim/", {
        rewardId: e
    }),
    checkUserClaimedFreeMoney: () => s.get("/activity/reward/hasUserClaimedFreeMoney"),
    getVaultAmountList: () => s.get("vault/amount/list/"),
    receiveBcBank() {
        return s.post("/activity/reward/bcbank/receive-batch/", {})
    },
    receiveWeeklyDepositBonus(e) {
        return s.post("/activity-extension/cycle-deposit-bonus/claim/", {
            ids: e
        })
    },
    getWagerProgress() {
        return s.get("/balance-controller/wager/task/bonus-wager-bar/")
    },
    getPddData() {
        return s.get("/activity-extension/in/share/fission/home/")
    }
};
class g extends m {
    constructor(t) {
        super(), this.api = t
    }
    bonusDashboardResource() {
        return this.createSharedResource(() => ({
            queryKey: [this.bonusDashboardResource.name, y.userId],
            queryFn: () => Promise.all([this.api.getDashboardData(), this.api.getDashboardStatistics(), this.api.getSpecialBonus()]),
            initialData: [{
                    tacoTuesdayBonus: null,
                    attendanceBonus: {
                        first: {
                            krw: !1,
                            claim: !1,
                            rewardAmount: 0,
                            signIn: !1,
                            makeupCount: 0,
                            todayRewardAmounts: {
                                first: 0,
                                second: 0
                            },
                            tomorrowRewardAmounts: {
                                first: 0,
                                second: 0
                            },
                            calendarAmounts: {
                                first: 0,
                                second: 0
                            },
                            _7dayRewardAmounts: {
                                first: 0,
                                second: 0
                            },
                            _14dayRewardAmounts: {
                                first: 0,
                                second: 0
                            },
                            _21dayRewardAmounts: {
                                first: 0,
                                second: 0
                            },
                            _25dayRewardAmounts: {
                                first: 0,
                                second: 0
                            },
                            currency: "KRWFIAT",
                            makeUpRemainingAmount: 0
                        },
                        second: 0
                    },
                    bcBankBonus: {
                        first: {
                            lumpSum: {},
                            period: []
                        },
                        second: 0
                    },
                    freeBetCountInfo: {
                        first: {
                            freeBetDataList: []
                        },
                        second: 0
                    },
                    dailyBonus: {
                        first: {
                            currencyName: "USDFIAT",
                            claimAmount: 0,
                            targetWager: 0,
                            yesterdayClaimAmount: 0,
                            endTime: 0,
                            claimStatus: !1,
                            rewardId: "",
                            locked: !1
                        },
                        second: 0
                    },
                    levelLimit: 22,
                    bonusUnlock: {
                        first: {
                            bonusAmount: "0",
                            bonusThreshold: "0",
                            currencyName: "USDFIAT",
                            levelUnlockRate: 0,
                            releaseAmount: "0",
                            totalAmount: "0",
                            expireTime: 0,
                            nextClaimTime: 0,
                            boostRatio: 0,
                            boostRatioExpireAt: 0,
                            boostRatioMinute: 0
                        },
                        second: 0
                    },
                    userXpBooster: {
                        first: {
                            userId: 0,
                            boosterExpiredTime: 0,
                            effectBoosterTime: 0
                        },
                        second: 0
                    },
                    quests: {
                        first: {
                            rewardCurrency: "",
                            rewardsAmount: 0,
                            newbieTaskExpireTime: 0,
                            rewards: [],
                            dailyTasks: [],
                            weeklyTasks: []
                        },
                        second: 0
                    },
                    spin: {
                        first: {
                            leftTimes: 0,
                            level: 0,
                            fiat: !1,
                            levelUpdated: !1,
                            dailySpinTimes: 0,
                            dailyWager: 0,
                            levelWager: 200,
                            vipSpinTimes: 0
                        },
                        second: 0
                    },
                    recharge: {
                        first: {
                            privilegeLevel: 0,
                            endTime: 0,
                            intervalTime: 60 * 6e4,
                            lastBetUsd: "0",
                            lastReceiveTime: 0,
                            nextBetUsd: "0",
                            nextReceiveTime: 0,
                            receiveTimeMS: 0,
                            receiveUsd: "0",
                            rewards: [],
                            sendBonus: !1,
                            startTime: 0,
                            status: 0,
                            vipLevel: 0,
                            viphostUserId: 0,
                            tire: {
                                currentTire: null,
                                tires: []
                            }
                        },
                        second: 0
                    },
                    statistics: {
                        first: {
                            totalClaimed: 0,
                            totalGeneralBonus: 0,
                            totalSpecialBonus: 0,
                            totalVipBonus: 0,
                            totalLockedBonus: 0
                        },
                        second: 0
                    },
                    statisticsDetail: {
                        depositBonus: 0,
                        freeSpinBonus: 0,
                        levelUpBonus: 0,
                        luckySpinBonus: 0,
                        monthlyBonus: 0,
                        questsBonus: 0,
                        rechargeBonus: 0,
                        rollCompetitionBonus: 0,
                        sportsWeeklyBonus: 0,
                        weeklyBonus: 0
                    },
                    rollCompetition: {
                        first: {
                            currentTime: 0,
                            rollTimes: 0
                        },
                        second: 0
                    },
                    weeklyBonus: {
                        first: {
                            privilegeLevel: 0,
                            rewardResult: {
                                title: "",
                                content: "",
                                rewards: [],
                                resultType: "",
                                rewardId: 0,
                                status: ""
                            },
                            currentWager: 0,
                            expireTimeEpochSecond: 0,
                            startTimeEpochSecond: 0,
                            levelLimit: 22,
                            targetWager: 0
                        },
                        second: 0
                    },
                    monthlyBonus: {
                        first: {
                            privilegeLevel: 0,
                            rewardResult: {
                                title: "",
                                content: "",
                                rewards: [],
                                resultType: "",
                                rewardId: 0,
                                status: ""
                            },
                            currentWager: 0,
                            expireTimeEpochSecond: 0,
                            startTimeEpochSecond: 0,
                            levelLimit: 22,
                            targetWager: 0
                        },
                        second: 0
                    },
                    sportsWeeklyBonus: {
                        first: {
                            privilegeLevel: 0,
                            rewardResult: {
                                title: "",
                                content: "",
                                rewards: [],
                                resultType: "",
                                rewardId: 0,
                                status: ""
                            },
                            currentWager: "0",
                            expireTimeEpochSecond: 0,
                            levelLimit: 22,
                            startTimeEpochSecond: 0,
                            targetWager: "0"
                        },
                        second: 0
                    },
                    freeMoneyBonus: null,
                    lotteryWinningsBonus: {
                        first: [],
                        second: 0
                    },
                    specialBonus: {
                        first: [],
                        second: 0
                    },
                    kycFirstDepositBonus: null,
                    cashbackFirstDepositBonus: null,
                    sensorsExclusiveBonus: null,
                    campaignChallengeBonus: null
                }, {
                    depositBonus: 0,
                    freeSpinBonus: 0,
                    levelUpBonus: 0,
                    luckySpinBonus: 0,
                    monthlyBonus: 0,
                    questsBonus: 0,
                    rechargeBonus: 0,
                    rollCompetitionBonus: 0,
                    sportsWeeklyBonus: 0,
                    weeklyBonus: 0
                },
                []
            ]
        }), {
            persisted: !0
        })
    }
    checkUserClaimedFreeMoney(t) {
        return this.createSharedResource(() => ({
            queryKey: [this.checkUserClaimedFreeMoney.name],
            queryFn: this.api.checkUserClaimedFreeMoney
        }), n(o({}, t), {
            persisted: !1
        }))
    }
    get mutations() {
        return {
            receiveReward: this.api.receiveReward,
            receiveFreeSpin: this.api.receiveFreeSpin,
            receiveBcBank: this.api.receiveBcBank,
            receiveWeeklyDepositBonus: this.api.receiveWeeklyDepositBonus
        }
    }
    getWagerProgress() {
        return this.createSharedResource(() => ({
            queryKey: [this.getWagerProgress.name],
            queryFn: this.api.getWagerProgress
        }))
    }
    getWeeklyDepositReward() {
        return this.createSharedResource(() => ({
            queryKey: [this.getWeeklyDepositReward.name],
            queryFn: this.api.getWeeklyDepositReward
        }))
    }
    getWeeklyDepositRewardTerms() {
        return this.createSharedResource(() => ({
            queryKey: [this.getWeeklyDepositRewardTerms.name],
            queryFn: this.api.getWeeklyDepositRewardTerms
        }))
    }
    getVaultAmountList() {
        return this.createSharedResource(() => ({
            queryKey: [this.getVaultAmountList.name],
            queryFn: this.api.getVaultAmountList
        }), {
            persisted: !0
        })
    }
    getPddData() {
        return this.createSharedResource(() => ({
            queryKey: [this.getPddData.name],
            queryFn: this.api.getPddData
        }), {
            persisted: !0
        })
    }
}
const k = new g(h);
export {
    k as b
};