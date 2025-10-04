import {
    x as e
} from "./manifest-d92afe19.js";
class i {
    constructor() {
        this.getLevelDesc = a => e.getLevelInfo(a)
    }
    level(a) {
        return e.getUserLevelInfo(a)
    }
}
class t {
    constructor(a) {
        this.rgba = a
    }
    opacity(a) {
        return new t([this.rgba[0], this.rgba[1], this.rgba[2], a])
    }
    toString() {
        return `rgba(${this.rgba.join(",")})`
    }
}
const n = {
        [e.VipLevelStatus.None]: ["#B9B9B9", "#F1F1F1"],
        [e.VipLevelStatus.Bronze]: ["#EEC2A8", "#E6CDBD"],
        [e.VipLevelStatus.Silver]: ["#9CAED3", "#B6CEF5"],
        [e.VipLevelStatus.Gold]: ["#FAE9C1", "#FAAF16"],
        [e.VipLevelStatus.Platinum_I]: ["#FAC1F7", "#AB7DE8"],
        [e.VipLevelStatus.Platinum_II]: ["#FAC1F7", "#AB7DE8"],
        [e.VipLevelStatus.Diamond_I]: ["#D4A1EB", "#4FC4FF"],
        [e.VipLevelStatus.Diamond_II]: ["#D4A1EB", "#4FC4FF"],
        [e.VipLevelStatus.Diamond_III]: ["#D4A1EB", "#4FC4FF"]
    },
    u = {
        [e.VipLevelStatus.None]: new t([113, 113, 113, .5]),
        [e.VipLevelStatus.Bronze]: new t([242, 181, 161, .5]),
        [e.VipLevelStatus.Silver]: new t([74, 114, 252, .5]),
        [e.VipLevelStatus.Gold]: new t([229, 214, 140, .5]),
        [e.VipLevelStatus.Platinum_I]: new t([147, 93, 233, .5]),
        [e.VipLevelStatus.Platinum_II]: new t([147, 93, 233, .5]),
        [e.VipLevelStatus.Diamond_I]: new t([147, 93, 233, .5]),
        [e.VipLevelStatus.Diamond_II]: new t([147, 93, 233, .5]),
        [e.VipLevelStatus.Diamond_III]: new t([147, 93, 233, .5])
    },
    S = {
        [e.VipLevelStatus.None]: "",
        [e.VipLevelStatus.Bronze]: "",
        [e.VipLevelStatus.Silver]: "",
        [e.VipLevelStatus.Gold]: "",
        [e.VipLevelStatus.Platinum_I]: "",
        [e.VipLevelStatus.Platinum_II]: "",
        [e.VipLevelStatus.Diamond_I]: new t([118, 196, 255, .5]),
        [e.VipLevelStatus.Diamond_II]: new t([118, 196, 255, .5]),
        [e.VipLevelStatus.Diamond_III]: new t([118, 196, 255, .5])
    },
    v = {
        [e.VipLevelStatus.None]: "#B9B9B9",
        [e.VipLevelStatus.Bronze]: "#A25F3F",
        [e.VipLevelStatus.Silver]: "#FDFDFD",
        [e.VipLevelStatus.Gold]: "#FBB321",
        [e.VipLevelStatus.Platinum_I]: "#B183EA",
        [e.VipLevelStatus.Platinum_II]: "#B183EA",
        [e.VipLevelStatus.Diamond_I]: "#E865A8",
        [e.VipLevelStatus.Diamond_II]: "#E865A8",
        [e.VipLevelStatus.Diamond_III]: "#E865A8"
    },
    L = new i;
export {
    u as V, S as a, n as b, v as c, L as v
};