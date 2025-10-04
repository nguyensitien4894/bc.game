import {
    ap as s,
    b as m
} from "./manifest-d92afe19.js";
import {
    t as a,
    z as i
} from "./solid-js-871c99e1.js";
import {
    R as n
} from "./enums-fd45c1cf.js";
import {
    d as p
} from "./proto-d99c76ac.js";
const l = a(() => {
        const o = s("/game-support").connect();
        return i(r => {
            const t = s();
            return o.on("bonus-crocodile", t.decodeBind(e => {
                r(e)
            }, "json")), () => {
                o.off("bonus-crocodile"), o.disconnect()
            }
        })
    }),
    g = a(() => {
        const o = s().socket("/g/tasks/verify").connect(),
            r = t => {
                let e = "";
                if (t) {
                    switch (t) {
                        case n.PHONE:
                            e = "phone_verified";
                            break;
                        case n.TELEGRAM:
                            e = "telegram_verified";
                            break
                    }
                    e && m.emit("sensorsTrack", {
                        event: e
                    })
                }
            };
        return i(t => (o.on("usercomplete", e => {
            const c = p(new Uint8Array(e));
            r(c.taskId), t(c)
        }), () => o.off("usercomplete")))
    });
export {
    l as c, g as r
};