import {
    m as d,
    v as l,
    D as o,
    F as r
} from "./vendor-CR7NILRE.js";
import {
    v as a
} from "./common-jbtJucx3.js";
import {
    t as e
} from "./Application-CExkuTua.js";
var i = l("<img class>");
const _ = n => {
    const s = () => [{
            key: "1",
            label: e("Step") + "01",
            guideTitle: e("Open website in __browser__.", {
                browser: "Safari"
            }),
            guideDesc: e("Click to open the __browser__ on the phone desktop.", {
                browser: "Safari"
            }),
            img: (() => {
                var t = i();
                return o(() => r(t, "src", a("/platform/pwa-guide/ios1.png")())), t
            })()
        }, {
            key: "2",
            label: e("Step") + "02",
            guideTitle: e("Tap Sharing button."),
            guideDesc: e("Use Safari Explore APP and go to __ENV_HOST__, Then tap the Sharing Button."),
            img: (() => {
                var t = i();
                return o(() => r(t, "src", a("/platform/pwa-guide/ios2.png")())), t
            })()
        }, {
            key: "3",
            label: e("Step") + "03",
            guideTitle: e("Tap Add to Home Screen."),
            guideDesc: e("Press Add to Home Screen in the list popup to add to the home screen. You may need to swipe left to locate the Add to Home Screen button."),
            img: (() => {
                var t = i();
                return o(() => r(t, "src", a("/platform/pwa-guide/ios3.png")())), t
            })()
        }],
        p = () => [{
            key: "1",
            label: e("Step") + "01",
            guideTitle: e("Open website in __browser__.", {
                browser: "Google Chrome"
            }),
            guideDesc: e("Click to open the __browser__ on the phone desktop.", {
                browser: "Google Chrome"
            }),
            img: (() => {
                var t = i();
                return o(() => r(t, "src", a("/platform/pwa-guide/android1.png")())), t
            })()
        }, {
            key: "2",
            label: e("Step") + "02",
            guideTitle: e("Tap Menu button."),
            guideDesc: e("Use Google Chrome APP and go to __ENV_HOST__, Then tap the Sharing Button."),
            img: (() => {
                var t = i();
                return o(() => r(t, "src", a("/platform/pwa-guide/android2.png")())), t
            })()
        }, {
            key: "3",
            label: e("Step") + "03",
            guideTitle: e("Tap Menu button."),
            guideDesc: e("Press Install app in the list popup to add to the home screen. You may need to swipe left to locate the Add to Home Screen button."),
            img: (() => {
                var t = i();
                return o(() => r(t, "src", a("/platform/pwa-guide/android3.png")())), t
            })()
        }];
    return d(() => ({
        iOS: s(),
        android: p()
    })[n])
};
export {
    _ as c
};