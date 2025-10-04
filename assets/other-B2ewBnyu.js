import {
    E as a,
    i as o,
    l as n
} from "./common-jbtJucx3.js";
import {
    l as u
} from "./Application-CExkuTua.js";

function l(e) {
    const [r] = a(() => ["/game/home/provider/list/", {
        categoryId: e
    }], async ([s, i]) => {
        const {
            areaCode: t
        } = await u();
        return o().get(s, {
            params: {
                areaCode: t,
                isBrazil: n.isesportsbr,
                ...i
            }
        })
    }, {
        version: 1,
        expires: 1 / 0,
        initialValue: []
    });
    return r
}
export {
    l as u
};