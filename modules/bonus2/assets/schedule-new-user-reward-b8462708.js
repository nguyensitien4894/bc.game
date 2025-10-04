import {
    e as o,
    ab as i,
    j as p,
    at as m
} from "./manifest-d92afe19.js";
import {
    d as a
} from "./solid-js-871c99e1.js";
import {
    f as s,
    F as n
} from "./feature-gating-8d37864b.js";
import {
    c,
    p as u
} from "./createHasNewUserSpin-7b900825.js";
import {
    p as f
} from "./reward-after-login-46916028.js";
import "./tools-398e478b.js";
import "./web-46c35164.js";
import "./index-9f4ab8bd.js";
import "./http-696896a0.js";
import "./baseService-102e5148.js";
import "./_baseGetTag-c2e287b9.js";
import "./_baseFor-371c5662.js";
import "./_MapCache-91cc8331.js";
import "./isArray-79a0be9c.js";
import "./index-a51223a0.js";
import "./i18n-fd9a94dd.js";
import "./api-utils-1baf21e5.js";
import "./helpers-ece5dfb8.js";
import "./utils-0702ff35.js";
import "./vip-5eda96e7.js";
import "./enums-fd45c1cf.js";
import "./cancel-bonus-b00319b6.js";
import "./noop-cb277961.js";
import "./currency-format-c1ee851b.js";
import "./animate-number-04f5b3b8.js";
import "./last-862de5a8.js";
import "./countdown-91927513.js";
import "./index-feaa71f9.js";
import "./index-a140eea6.js";
const C = () => {
    const r = o.initSearchParams.get("bcn"),
        t = o.initSearchParams.get("bcn_bonus"),
        {
            autoSpin: e
        } = c();
    a(() => {
        s.isEnabled(n.NEW_USER) && (r && t ? i(() => p.login).then(() => f({
            currency: r,
            amount: Number(t)
        })) : e() && setTimeout(() => {
            m.add(() => u())
        }, 1e3))
    })
};
export {
    C as
    default, C as scheduleNewUserReward
};