import {
    t as e
} from "./i18n-da87ffb5.js";
const r = [{
        value: "wager",
        label: () => e("Wager Limit")
    }, {
        value: "loss",
        label: () => e("Loss Limit")
    }],
    i = [{
        value: "daily",
        label: () => e("24 Hours"),
        period: () => e("Daily")
    }, {
        value: "weekly",
        label: () => e("1 Week"),
        period: () => e("Weekly")
    }, {
        value: "monthly",
        label: () => e("1 Month"),
        period: () => e("Monthly")
    }];

function y(a) {
    const t = r.find(o => o.value === a);
    return t ? t.label() : "-"
}

function s(a, t) {
    if (console.log("startTime", a, t), t === "daily") return e("Every 24hrs at 00:00 UTC");
    if (t === "weekly") {
        const o = new Date(a).getDay();
        return ["-", e("Every Monday of the week at 00:00 UTC"), e("Every Tuesday of the week at 00:00 UTC"), e("Every Wednesday of the week at 00:00 UTC"), e("Every Thursday of the week at 00:00 UTC"), e("Every Friday of the week at 00:00 UTC"), e("Every Saturday of the week at 00:00 UTC"), e("Every Sunday of the week at 00:00 UTC")][o] || "-"
    } else if (t === "monthly") {
        const o = new Date(a).getDate();
        return e("Every __daynum__ of the month at 00:00 UTC", {
            daynum: o
        })
    }
    return "-"
}
export {
    s as a, i as b, y as g, r as l
};