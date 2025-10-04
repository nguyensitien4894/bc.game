import {
    k as e,
    v as s,
    N as l,
    o as i,
    X as c,
    a2 as p,
    m as u
} from "./vendor-CR7NILRE.js";
import {
    B as a,
    a as h,
    w as g,
    aA as d,
    aP as m,
    a9 as C,
    K as f
} from "./common-jbtJucx3.js";
var w = s('<svg xmlns=http://www.w3.org/2000/svg width=24 height=25 viewBox="0 0 24 25"><path d="M9.03211 13.5894C9.73461 13.5894 10.3042 14.159 10.3042 14.8615V19.8219C10.3042 20.5244 9.73461 21.094 9.03211 21.094H7.69816C6.6441 21.094 5.79032 20.2396 5.79032 19.1862V15.4979C5.79032 14.4438 6.64471 13.59 7.69816 13.59H9.03211V13.5894ZM16.3554 13.5894C17.4094 13.5894 18.2632 14.4438 18.2632 15.4973V19.1855C18.2632 20.2396 17.4088 21.0934 16.3554 21.0934H15.0214C14.3189 21.0934 13.7493 20.5238 13.7493 19.8213V14.8609C13.7493 14.1584 14.3189 13.5888 15.0214 13.5888L16.3554 13.5894ZM11.9995 4.55737C17.0156 4.55737 21.0965 8.54944 21.219 13.5202L21.2221 13.7505V17.5055C21.2221 18.0237 20.8007 18.4438 20.2807 18.4438C19.7932 18.4438 19.3926 18.0745 19.3442 17.6017L19.3393 17.5055V13.7505C19.3393 9.70945 16.0528 6.43397 11.9989 6.43397C8.01358 6.43397 4.77056 9.59982 4.66154 13.5459L4.65848 13.7505V17.5172C4.65848 18.0353 4.2371 18.4555 3.71712 18.4555C3.22959 18.4555 2.82904 18.0862 2.78127 17.6133L2.77637 17.5172V13.7505C2.77637 8.67377 6.90562 4.55799 11.9989 4.55799L11.9995 4.55737Z">');
const b = () => e(a, {
    onClick: () => {
        h.emit("live_support", !0)
    },
    type: "second",
    class: "bg-brand text-alw_dark",
    size: "m",
    get children() {
        return w()
    }
});
var v = s('<svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox="0 0 24 24"class=fill-current><path d="M19.2343 18.3342C19.5467 18.0218 19.5467 17.5153 19.2343 17.2029L12.5657 10.5342C12.2533 10.2218 11.7467 10.2218 11.4343 10.5342L4.76568 17.2029C4.45326 17.5153 4.45326 18.0218 4.76568 18.3342L5.89751 19.4661C6.20993 19.7785 6.71646 19.7785 7.02888 19.4661L11.4343 15.0606C11.7467 14.7482 12.2533 14.7482 12.5657 15.0606L16.9711 19.4661C17.2835 19.7785 17.7901 19.7785 18.1025 19.4661L19.2343 18.3342Z"></path><path d="M4.125 4.125H19.875V7.125H4.125V4.125Z">');

function L() {
    const t = d(),
        r = m(),
        n = u(() => r() > innerHeight),
        o = () => {
            t().scrollBy({
                top: -1 * document.body.scrollHeight,
                left: 0,
                behavior: "smooth"
            })
        };
    return e(f, {
        name: "fadeRight",
        get children() {
            return e(C, {
                get when() {
                    return n()
                },
                get children() {
                    return e(a, {
                        onClick: o,
                        type: "second",
                        class: "bg-layer5",
                        size: "m",
                        get children() {
                            return v()
                        }
                    })
                }
            })
        }
    })
}

function V() {
    let t;
    return l(() => {
        const r = new MutationObserver(n => {
            for (const o of n) o.type === "attributes" && o.attributeName === "class" && (document.body.classList.contains("chat-unfold") ? t && (t.style.marginRight = "380px") : t && (t.style.marginRight = "0px"))
        });
        r.observe(document.body, {
            attributes: !0,
            attributeFilter: ["class"]
        }), i(() => r.disconnect())
    }), e(p, {
        ref: r => {
            t = r, r.className = "fixed flex flex-col bottom-3 right-2 z-100 gap-y-3"
        },
        get children() {
            return [e(L, {}), e(c, {
                get when() {
                    return !g.isOfflineAgent
                },
                get children() {
                    return e(b, {})
                }
            })]
        }
    })
}
export {
    V as
    default
};