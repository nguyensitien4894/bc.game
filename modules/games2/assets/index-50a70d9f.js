var b0 = (p, g, x) => new Promise((M, z) => {
    var h = I => {
            try {
                V(x.next(I))
            } catch (k) {
                z(k)
            }
        },
        f = I => {
            try {
                V(x.throw(I))
            } catch (k) {
                z(k)
            }
        },
        V = I => I.done ? M(I.value) : Promise.resolve(I.value).then(h, f);
    V((x = x.apply(p, g)).next())
});
import {
    a4 as _0,
    A as n,
    J as Z0,
    c as m,
    f as O0,
    w as h0,
    v as t,
    n as l,
    H as e0,
    C as y,
    x as B,
    z as J,
    y as Y,
    al as $0,
    am as N0,
    an as D0,
    ah as F0,
    t as m0,
    r as X,
    a as R0,
    u as A0,
    j as J0,
    Z as G0,
    L as x0,
    S as Z,
    b as E,
    ad as i0,
    I as u0,
    F as S,
    q as W,
    G as K0,
    m as Q0,
    ao as W0,
    k as $,
    B as H,
    ap as Y0
} from "./manifest-794ca152.js";
import {
    t as s
} from "./i18n-3675d599.js";
import {
    u as M0
} from "./user-dca4827e.js";
import {
    f as z0,
    a as I0
} from "./amount-63fd0790.js";
import "./_commonjsHelpers-0f403cef.js";
var X0 = n('<svg viewBox="0 0 32 32"xmlns=http://www.w3.org/2000/svg width=32 height=32 fill=none> <g clipl-path=url(#pinned_svg__a)> <path fill=currentColor d="M5.07 14.474a.677.677 0 0 1-.004-.957l1.232-1.245a.68.68 0 0 1 .478-.2l6.82-.034c.36-.002.704-.146.957-.402l3.894-3.932-1.685-1.668a.34.34 0 0 1-.002-.48l1.43-1.443a.34.34 0 0 1 .479-.002l9.144 9.054a.34.34 0 0 1 .002.479l-1.43 1.444a.34.34 0 0 1-.479.002l-1.684-1.668-3.894 3.933c-.253.255-.394.6-.392.96l.034 6.82c0 .18-.07.352-.196.48L18.54 26.86a.677.677 0 0 1-.957.004l-5.535-5.48-5.48 5.535a.34.34 0 0 1-.479.002l-.963-.953a.34.34 0 0 1-.002-.479l5.48-5.535z"></path> </g> <defs> <clipPath id=pinned_svg__a> <path fill=#fff d="M0 0h32v32H0z"></path> </clipPath> </defs> ');
const e1 = p => {
    return g = X0(), _0(g, p, !0, !0), g;
    var g
};
var t1 = n('<svg><path d="M16.005 28.133c6.702 0 12.135-5.433 12.135-12.135s-5.433-12.135-12.135-12.135c-6.702 0-12.135 5.433-12.135 12.135v0c0.008 6.699 5.436 12.127 12.134 12.135h0.001zM16.005 2.002c7.73 0.003 13.996 6.27 13.996 14 0 7.732-6.268 14-14 14s-14-6.268-14-14c0-0.002 0-0.003 0-0.005v0c0.010-7.73 6.275-13.994 14.005-14h0.001zM16.941 15.993l4.11 4.11c0.135 0.161 0.217 0.371 0.217 0.6 0 0.517-0.419 0.936-0.936 0.936-0.229 0-0.438-0.082-0.601-0.218l0.001 0.001-4.668-4.652v-7.882c0-0.517 0.419-0.936 0.936-0.936s0.936 0.419 0.936 0.936v0z"></svg>', !1, !0),
    l1 = n('<svg><path d="M17.388 17.534v0h-2.777v-7.511c0-0.317-0.257-0.574-0.574-0.574s-0.574 0.257-0.574 0.574v0 8.090c0 0.009 0 0.019 0 0.028 0.001 0.029 0.004 0.057 0.009 0.084l-0-0.004c0.005 0.021 0.010 0.039 0.016 0.056l-0.001-0.003c0.005 0.021 0.011 0.039 0.018 0.056l-0.001-0.003c0.007 0.018 0.017 0.033 0.025 0.051s0.017 0.033 0.027 0.049c0.012 0.017 0.023 0.032 0.036 0.045l-0-0c0.012 0.014 0.021 0.027 0.033 0.040 0.022 0.021 0.045 0.041 0.069 0.059l0.002 0.001 0.014 0.011 2.642 1.807h-8.957v-13.816h6.060v0.842c0 0.317 0.257 0.574 0.574 0.574s0.574-0.257 0.574-0.574v0-3.702h9.982l-4.269 6.984 4.269 6.834zM17.388 19.708l-1.493-1.022h1.493zM22.348 10.695l3.693-6.037c0.175-0.265 0.278-0.589 0.278-0.938 0-0.95-0.77-1.72-1.72-1.72-0 0-0.001 0-0.001 0h-9.989c-0.95 0-1.721 0.77-1.721 1.721v0 1.141h-5.488c-0 0-0.001 0-0.001 0-0.95 0-1.72 0.77-1.72 1.72v0 22.559c0 0.475 0.385 0.86 0.86 0.86s0.86-0.385 0.86-0.86v-7.023h9.982c0.951-0.001 1.721-0.771 1.721-1.722 0 0 0 0 0 0v0-1.141h5.489c0 0 0 0 0.001 0 0.95 0 1.72-0.77 1.72-1.72 0-0.338-0.098-0.653-0.266-0.919l0.004 0.007z"></svg>', !1, !0),
    n1 = n('<svg><path d="M21.37 25.301h3.372c-1.393 1.315-3.091 2.322-4.974 2.906l-0.091 0.024zM21.37 6.7l-1.693-2.931c1.974 0.608 3.672 1.616 5.071 2.937l-0.006-0.006zM11.699 24.7l2.187-3.787h4.226l2.187 3.787-2.139 3.704h-4.324zM6.29 16.644h4.393l2.104 3.644-2.187 3.787h-4.276l-2.163-3.746zM10.601 7.926l2.187 3.782-2.104 3.644h-4.393l-2.129-3.686 2.163-3.745zM18.12 11.088h-4.226l-2.187-3.781 2.139-3.704h4.324l2.139 3.704zM25.683 7.926l2.162 3.745-2.128 3.686h-4.393l-2.104-3.644 2.187-3.781zM21.406 24.075l-2.187-3.787 2.104-3.644h4.393l2.128 3.685-2.162 3.746zM3.229 16c0-0.002 0-0.004 0-0.006 0-1.028 0.122-2.027 0.351-2.984l-0.018 0.087 1.676 2.903-1.675 2.906c-0.212-0.87-0.334-1.87-0.334-2.897 0-0.002 0-0.005 0-0.007v0zM16 2.001c-7.732 0-13.999 6.268-13.999 13.999s6.268 13.999 13.999 13.999c7.732 0 13.999-6.268 13.999-13.999v0c-0.008-7.728-6.271-13.991-13.999-13.999h-0.001z"></svg>', !1, !0),
    r1 = n('<svg><path d="M27.549 7.858c0.082-0.238 0.129-0.512 0.129-0.797 0-0.605-0.213-1.16-0.569-1.595l0.004 0.004c-0.435-0.37-1.004-0.594-1.625-0.594-0.269 0-0.528 0.042-0.771 0.12l0.018-0.005c-0.853 0.197-1.604 0.541-2.262 1.009l0.019-0.013c1.646 1.048 2.993 2.421 3.98 4.038l0.031 0.054c0.47-0.631 0.83-1.374 1.036-2.178l0.009-0.044zM15.959 27.063c5.89 0 10.665-4.775 10.665-10.665s-4.775-10.665-10.665-10.665c-5.89 0-10.665 4.775-10.665 10.665v0c0.006 5.888 4.777 10.659 10.664 10.665h0.001zM3.905 7.858c0.254 0.994 0.707 1.86 1.316 2.59l-0.008-0.010c0.985-1.747 2.322-3.186 3.924-4.261l0.045-0.028c-0.694-0.534-1.52-0.935-2.418-1.147l-0.044-0.009c-0.225-0.073-0.484-0.115-0.752-0.115-0.621 0-1.19 0.225-1.63 0.597l0.004-0.003c-0.352 0.43-0.565 0.985-0.565 1.59 0 0.285 0.047 0.559 0.134 0.814l-0.005-0.018zM28.273 4.332c0.642 0.716 1.034 1.667 1.034 2.71 0 0.42-0.064 0.824-0.182 1.205l0.008-0.029c-0.342 1.347-0.974 2.515-1.828 3.483l0.008-0.009c0.594 1.392 0.939 3.011 0.939 4.711 0 6.788-5.503 12.291-12.291 12.291s-12.291-5.503-12.291-12.291c0-1.56 0.291-3.053 0.821-4.426l-0.029 0.084c-1.008-1.037-1.754-2.333-2.13-3.779l-0.013-0.059c-0.11-0.352-0.174-0.757-0.174-1.176 0-1.043 0.392-1.995 1.038-2.715l-0.003 0.004c0.724-0.672 1.697-1.085 2.767-1.085 0.393 0 0.773 0.056 1.133 0.16l-0.029-0.007c1.42 0.336 2.654 0.991 3.669 1.888l-0.009-0.008c1.536-0.745 3.341-1.18 5.248-1.18 1.792 0 3.494 0.384 5.028 1.075l-0.077-0.031c0.97-0.821 2.148-1.429 3.443-1.733l0.056-0.011c0.329-0.096 0.707-0.151 1.098-0.151 1.069 0 2.041 0.412 2.768 1.086l-0.003-0.002zM18.386 21.667c0.015-0.001 0.034-0.002 0.052-0.002 0.337 0 0.611 0.273 0.611 0.611s-0.273 0.611-0.611 0.611c-0.018 0-0.036-0.001-0.054-0.002l0.002 0c-0.017 0-0.037 0-0.057 0-0.937 0-1.781-0.402-2.367-1.043l-0.002-0.002c-0.589 0.644-1.432 1.046-2.37 1.046-0.020 0-0.040-0-0.060-0l0.003 0c-0.015 0.001-0.034 0.002-0.052 0.002-0.337 0-0.611-0.273-0.611-0.611s0.273-0.611 0.611-0.611c0.018 0 0.036 0.001 0.054 0.002l-0.002-0c0.037 0.003 0.080 0.004 0.123 0.004 0.705 0 1.315-0.409 1.604-1.004l0.005-0.011c-0.598-0.176-1.014-0.564-1.014-1.017 0-0.618 0.774-1.118 1.728-1.118s1.728 0.5 1.728 1.118c0 0.46-0.432 0.856-1.048 1.028 0.296 0.601 0.905 1.007 1.608 1.007 0.042 0 0.084-0.001 0.125-0.004l-0.006 0zM11.437 13.407c0.936 0 1.696 0.759 1.696 1.696s-0.759 1.696-1.696 1.696c-0.936 0-1.696-0.759-1.696-1.696v0c0.003-0.935 0.761-1.691 1.696-1.691 0 0 0 0 0 0v0zM20.481 13.407c0.936 0 1.696 0.759 1.696 1.696s-0.759 1.696-1.696 1.696c-0.936 0-1.696-0.759-1.696-1.696v0c0.003-0.935 0.761-1.691 1.696-1.691 0 0 0 0 0 0v0z"></svg>', !1, !0),
    i1 = n('<svg><path d="M15.999 28.131c6.701 0 12.133-5.432 12.133-12.133s-5.432-12.133-12.133-12.133c-6.701 0-12.133 5.432-12.133 12.133v0c0.007 6.698 5.435 12.125 12.132 12.133h0.001zM15.999 2.005c0 0 0.001 0 0.001 0 7.731 0 13.998 6.267 13.998 13.998s-6.267 13.998-13.998 13.998c-7.731 0-13.998-6.267-13.998-13.998v0c0.006-7.729 6.268-13.993 13.995-14.002h0.001zM16.322 24.298c2.867 0 4.398-1.287 4.565-2.157 0.194-1.013-1.274-1.699-4.529-1.699-3.434 0-4.782 0.642-4.602 1.699 0.132 0.732 1.81 2.157 4.566 2.157zM21.628 17.234c1.724 0 2.21 1.034 1.953 2.517-0.651 3.402-3.602 5.939-7.147 5.939-0.052 0-0.104-0-0.156-0.002l0.008 0c-0.073 0.003-0.159 0.004-0.245 0.004-3.601 0-6.615-2.516-7.379-5.886l-0.010-0.051c-0.274-1.485 0.229-2.517 1.953-2.517zM21.321 13.943c-0.755-0.003-1.365-0.614-1.367-1.368v-1.7c0-0.757 0.614-1.372 1.372-1.372s1.372 0.614 1.372 1.372v0 1.699c-0.001 0.756-0.615 1.369-1.371 1.369 0 0 0 0 0 0v0zM11.043 13.943c-0.754-0.003-1.365-0.614-1.366-1.368v-1.7c0-0.757 0.614-1.371 1.371-1.371s1.371 0.614 1.371 1.371v0 1.699c-0.001 0.756-0.614 1.368-1.37 1.369h-0z"></svg>', !1, !0),
    s1 = n('<svg><path d="M6.711 21.273c-3.255 0-4.108-2.192-4.143-2.291-0.033-0.085-0.052-0.183-0.052-0.286 0-0.446 0.361-0.807 0.807-0.807 0.343 0 0.636 0.214 0.753 0.516l0.002 0.006c0.031 0.072 0.562 1.244 2.633 1.244 0.869 0 1.028-0.265 1.379-0.844 0.515-1.053 1.578-1.764 2.808-1.764 0.108 0 0.215 0.006 0.321 0.016l-0.013-0.001c0.083-0.007 0.179-0.012 0.276-0.012 1.234 0 2.307 0.689 2.856 1.703l0.008 0.017c0.227 0.534 0.748 0.902 1.354 0.902 0.066 0 0.13-0.004 0.193-0.013l-0.007 0.001c0.054 0.007 0.117 0.011 0.18 0.011 0.616 0 1.146-0.372 1.376-0.903l0.004-0.010c0.55-1.017 1.608-1.697 2.825-1.697 0.083 0 0.166 0.003 0.248 0.009l-0.011-0.001h0.031c0.056-0.003 0.122-0.005 0.188-0.005 1.281 0 2.404 0.678 3.028 1.695l0.009 0.015c0.429 0.577 0.616 0.884 1.468 0.89 0.082 0.009 0.177 0.015 0.273 0.015 0.935 0 1.751-0.507 2.19-1.26l0.007-0.012c0.127-0.293 0.413-0.493 0.746-0.493 0.11 0 0.214 0.022 0.31 0.061l-0.005-0.002c0.297 0.121 0.503 0.408 0.503 0.742 0 0.105-0.020 0.205-0.057 0.296l0.002-0.005c-0.676 1.363-2.057 2.283-3.654 2.283-0.107 0-0.213-0.004-0.318-0.012l0.014 0.001h-0.027c-0.018 0-0.039 0.001-0.060 0.001-1.139 0-2.135-0.612-2.678-1.525l-0.008-0.014c-0.34-0.637-1-1.063-1.759-1.063-0.060 0-0.119 0.003-0.177 0.008l0.008-0h-0.025c-0.064-0.009-0.138-0.014-0.213-0.014-0.669 0-1.244 0.397-1.505 0.968l-0.004 0.010c-0.607 0.983-1.679 1.629-2.902 1.629-1.218 0-2.287-0.641-2.887-1.604l-0.008-0.014c-0.274-0.592-0.864-0.995-1.547-0.995-0.088 0-0.175 0.007-0.259 0.020l0.009-0.001c-0.079-0.014-0.17-0.022-0.262-0.022-0.66 0-1.226 0.403-1.466 0.976l-0.004 0.010c-0.46 0.972-1.433 1.632-2.56 1.632-0.069 0-0.138-0.003-0.207-0.007l0.009 0zM26.133 28.386c0.955 0 1.729-0.774 1.729-1.729s-0.774-1.729-1.729-1.729h-19.766c-0.955 0-1.729 0.774-1.729 1.729s0.774 1.729 1.729 1.729v0zM26.133 23.314c1.846 0 3.343 1.497 3.343 3.343s-1.497 3.343-3.343 3.343h-19.766c-1.846 0-3.343-1.497-3.343-3.343s1.497-3.343 3.343-3.343v0zM4.66 13.88h23.181c-0.728-5.813-5.639-10.265-11.591-10.265s-10.863 4.452-11.585 10.208l-0.006 0.057zM16.287 2.006c0.116-0.004 0.252-0.006 0.389-0.006 7.031 0 12.739 5.666 12.808 12.681l0 0.007v0.808h-26.47v-0.808c0-7.113 5.833-12.685 13.274-12.685z"></svg>', !1, !0),
    c1 = n('<svg><path d="M15.977 16.146l-1.469-2.684h2.918zM19.268 19.34v0l-0.411 0.176v2.077h-2.195v-4.038c0.111-0.085 0.202-0.189 0.272-0.308l0.003-0.005 1.998-3.683c0.077-0.133 0.122-0.293 0.122-0.464 0-0.184-0.053-0.356-0.144-0.501l0.002 0.004c-0.199-0.308-0.54-0.509-0.929-0.509-0.004 0-0.009 0-0.013 0h-4.015c-0.004-0-0.008-0-0.012-0-0.388 0-0.73 0.201-0.926 0.505l-0.003 0.004c-0.089 0.141-0.142 0.313-0.142 0.497 0 0.171 0.045 0.33 0.125 0.468l-0.002-0.005 2.018 3.703c0.072 0.124 0.164 0.228 0.272 0.311l0.002 0.002v4.016h-2.194v-2.077l-0.411-0.176c-2.976-1.313-5.016-4.238-5.016-7.64 0-4.599 3.728-8.326 8.326-8.326s8.326 3.728 8.326 8.326v0c-0.027 3.404-2.074 6.323-5.001 7.619l-0.054 0.021zM18.876 24.611c-0.017 0.842-0.699 1.519-1.541 1.528h-2.704c-0.843-0.001-1.527-0.685-1.528-1.528v-1.648h5.779zM17.152 28.159c-0.004 0.258-0.212 0.467-0.47 0.47h-1.411c-0.258-0.004-0.467-0.212-0.47-0.47v-0.647h2.351zM15.977 2v0c-0.004 0-0.008 0-0.013 0-5.354 0-9.695 4.34-9.695 9.695 0 3.813 2.202 7.112 5.403 8.695l0.057 0.025v4.193c0.002 1.174 0.701 2.183 1.706 2.637l0.018 0.007v0.907c0 0.001 0 0.001 0 0.002 0 1.015 0.823 1.839 1.839 1.839 0.001 0 0.002 0 0.003 0h1.411c0.001 0 0.001 0 0.002 0 1.015 0 1.839-0.823 1.839-1.839 0-0.001 0-0.002 0-0.002v0-0.901c1.023-0.46 1.723-1.47 1.724-2.644v-4.199c3.258-1.608 5.46-4.907 5.46-8.721 0-5.354-4.34-9.695-9.695-9.695-0.020 0-0.040 0-0.059 0l0.003-0z"></svg>', !1, !0),
    a1 = n('<div><div class="flex flex-row flex-wrap overflow-y-auto size-full pb-4"></div><div class="absolute bottom-0 leading-10 h-10 w-full flex justify-between bg-layer5 rounded-md pt-1">'),
    o1 = n('<div class="size-9 text-2xl cursor-pointer text-center leading-8">'),
    d1 = n('<svg viewBox="0 0 32 32"xmlns=http://www.w3.org/2000/svg>');
const u1 = JSON.parse('{"people":["😀","😃","😄","😁","😆","😅","😂","🤣","😊","😇","🙂","🙃","😉","😌","😍","😘","😗","😙","😚","😋","😛","😝","😜","🤪","🤨","🧐","🤓","😎","🤩","😏","😒","😞","😔","😟","😕","🙁","😣","😖","😫","😩","😢","😭","😤","😠","😡","🤬","🤯","😳","😱","😨","😰","😥","😓","🤗","🤔","🤭","🤫","🤥","😶","😐","😑","😬","🙄","😯","😦","😧","😮","😲","😴","🤤","😪","😵","🤐","🤢","🤮","🤧","😷","🤒","🤕","🤑","🤠","😈","👿","👹","👺","🤡","💩","👻","💀","👽","👾","🤖","🎃","😺","😸","😹","😻","😼","😽","🙀","😿","😾"],"gesture":["🤲","👐","🙌","👏","🤝","👍","👎","👊","✊","🤛","🤜","🤞","🤟","🤘","👌","👈","👉","👆","👇","✋","🤚","🖖","👋","🤙","💪","🖕","🙏"],"nature":["🐶","🐱","🐭","🐹","🐰","🦊","🐻","🐼","🐨","🐯","🦁","🐮","🐷","🐽","🐸","🐵","🙈","🙉","🙊","🐒","🐔","🐳","🐋","🦈","🐊","💧","💦","☔","🌞","🌈","🌙"],"food":["🍏","🍎","🍐","🍊","🍋","🍌","🍉","🍇","🍓","🍈","🍒","🥐","🍞"],"activity":["⚽","🏀","🏈","⚾","🎾","🏐","🏉","🎱","🏓","🏸","🥅","🏒","🎳","🎮","🎰"],"symbols":["🧡","💔","🔞","📵","🚭","❗","❓","💤","🏧","🚾","🕐","🌹","🏴","🏁","🚩","☠"]}'),
    N = Object.assign({
        history: []
    }, u1),
    k0 = localStorage.getItem("emojiHistory");
k0 && (N.history = function(p) {
    for (var g = -1, x = p == null ? 0 : p.length, M = 0, z = []; ++g < x;) {
        var h = p[g];
        h && (z[M++] = h)
    }
    return z
}(k0.split(",")));
const g1 = p => {
    const [g, x] = m("people"), [M, z] = m(N[g()]);
    return O0(() => {
        z(N[g()])
    }), h = a1(), f = h.firstChild, V = f.nextSibling, typeof(I = p.ref) == "function" ? h0(I, h) : p.ref = h, t(f, l(e0, {
        get each() {
            return M()
        },
        children: k => {
            return (P = o1()).$$click = () => (U => {
                const D = N.history.filter(F => F !== U);
                N.history.length < 60 && D.unshift(U), N.history = D, localStorage.setItem("emojiHistory", N.history.join(",")), p.onChange(U)
            })(k), t(P, k), P;
            var P
        }
    })), t(V, l(e0, {
        get each() {
            return Object.entries({
                history: t1(),
                people: l1(),
                gesture: n1(),
                activity: r1(),
                nature: i1(),
                food: s1(),
                symbols: c1()
            })
        },
        children: ([k, P]) => l(y, {
            class: "size-9 !center",
            onClick: U => ((D, F) => {
                x(D), F.stopPropagation()
            })(k, U),
            get children() {
                var U = d1();
                return t(U, P), B(() => J(U, "class", "size-6 fill-[#babfcc] dark:fill-[#69717a] " + (k === g() ? "!fill-primary" : ""))), U
            }
        })
    })), B(() => Y(h, `h-52 w-64 ${p.class||""}`)), h;
    var h, f, V, I
};
Z0(["click"]);
var m1 = n('<svg xmlns=http://www.w3.org/2000/svg width=32 height=32 viewBox="0 0 24 24"fill=currentColor><path d="M12.4997 3.08008C17.4705 3.08008 21.5002 7.10971 21.5002 12.0805C21.5002 17.0514 17.4705 21.081 12.4997 21.081C7.5289 21.081 3.49927 17.0514 3.49927 12.0805C3.49927 7.10971 7.5289 3.08008 12.4997 3.08008ZM12.4997 4.96825C8.57424 4.96825 5.39194 8.15055 5.39194 12.076C5.39194 16.0015 8.57424 19.1838 12.4997 19.1838C16.4239 19.1838 19.6049 16.0041 19.6075 12.0812C19.6075 12.0786 19.6075 12.0754 19.6075 12.0715C19.6075 8.14862 16.4271 4.96825 12.5042 4.96825C12.5023 4.96825 12.501 4.96825 12.4991 4.96825H12.4997ZM9.23385 8.74394C9.72887 8.74394 10.1307 9.1451 10.1307 9.64077V10.6835C10.1307 11.1798 9.72951 11.5823 9.23449 11.5849H9.16313C9.15027 11.5855 9.13548 11.5862 9.1207 11.5862C8.63081 11.5862 8.23222 11.1953 8.21937 10.7086V9.6877C8.21937 9.67999 8.21872 9.67163 8.21872 9.66263C8.21872 9.1676 8.61989 8.7658 9.11555 8.7658C9.13227 8.7658 9.14898 8.76644 9.16506 8.76708H9.16248L9.23385 8.74394ZM15.8646 8.74394C15.8646 8.74394 15.8653 8.74394 15.8659 8.74394C16.3635 8.74394 16.7672 9.14767 16.7672 9.64527C16.7672 9.66006 16.7666 9.67484 16.7659 9.68963V9.6877V10.7305C16.7634 11.2274 16.3609 11.6292 15.8646 11.6318H15.7701C15.2732 11.6292 14.8713 11.2268 14.8688 10.7305V9.68706C14.8688 9.68127 14.8688 9.67484 14.8688 9.66841C14.8688 9.17082 15.2725 8.76708 15.7701 8.76708L15.8646 8.74394Z">'),
    h1 = n('<div class="relative mb-1">');

function p1(p) {
    let g;
    const [x, M] = m(!1);

    function z(f) {
        p.onChange(f), M(!1)
    }
    return h = h1(), h0(f => $0(() => f, () => M(!1)), h), t(h, l(y, {
        ref(f) {
            typeof g == "function" ? g(f) : g = f
        },
        class: "text-secondary !center p-0 -mx-1",
        onClick: () => M(!x()),
        get children() {
            return m1()
        }
    }), null), t(h, l(N0, {
        name: "fadeZoom",
        get children() {
            return l(D0, {
                get when() {
                    return x()
                },
                get children() {
                    return l(F0, {
                        component: g1,
                        onChange: z,
                        get class() {
                            return m0("absolute z-10 bg-layer2 shadow-sm rounded bottom-12 h-36 pb-6", X.mobile ? "right-0" : "left-0")
                        }
                    })
                }
            })
        }
    }), null), h;
    var h
}
var v1 = n('<textarea class="bg-layer3 h-36 p-2 mt-px rounded-xl focus:outline-none focus:ring-1 focus:ring-brand resize-none w-full border-third border"rows=3>'),
    L0 = n("<div>"),
    C1 = n('<div class="w-full flex items-center justify-between px-4"><span>'),
    f1 = n("<div class=text-center>"),
    y1 = n('<div class="h-10 leading-10 text-center bg-layer5 rounded-md mx-1">'),
    w1 = n('<img class="size-full rounded-full">'),
    H0 = n('<svg xmlns=http://www.w3.org/2000/svg width=25 height=24 viewBox="0 0 25 24"fill=none><path d="M12.6896 3C17.202 3 20.8606 6.45854 20.8606 10.7255C20.8606 13.0618 19.7637 15.1555 18.031 16.5725L12.6903 21.4608L12.689 18.4511C8.17658 18.4504 4.51923 14.9919 4.51923 10.7255C4.51923 6.45918 8.17723 3 12.6903 3H12.6896Z"fill=#B3BEC1>'),
    b1 = n('<svg xmlns=http://www.w3.org/2000/svg width=25 height=24 viewBox="0 0 25 24"fill=none><path d="M5.41808 20.7927H5.15117C4.18633 20.7927 3.39648 20.022 3.39648 19.0807V11.4504C3.39648 10.5091 4.18633 9.73842 5.15117 9.73842H5.41808C6.38292 9.73842 7.17277 10.5091 7.17277 11.4504V19.0787C7.17481 20.022 6.38496 20.7933 5.41808 20.7933V20.7927ZM17.9283 20.9987H17.9011C17.0663 20.99 16.2294 20.99 15.3919 20.99H14.1152C13.2628 20.99 12.4096 20.99 11.555 20.9793C11.0818 20.966 10.6147 20.87 10.1749 20.6947C9.42791 20.41 9.00099 19.7754 9.00371 18.9494L9.00575 15.8535C9.00575 14.1396 9.00575 12.423 9.02141 10.7084C9.02346 10.2417 9.33122 9.80441 9.59405 9.57442C10.6106 8.66779 11.7151 7.5385 12.1767 6.01455C12.3047 5.5899 12.3537 5.12125 12.4055 4.62661C12.509 3.64131 13.164 3 14.039 3C14.3822 3 14.726 3.10066 15.0624 3.29532C15.7378 3.69131 16.1886 4.31328 16.4378 5.19992C16.8375 6.60787 16.6332 7.97382 16.4085 9.14511V9.14977C16.3568 9.42376 16.5678 9.67775 16.8552 9.67775H19.7722C20.2747 9.67775 20.9951 9.73908 21.4397 10.2644C21.7631 10.6477 21.855 11.1644 21.7182 11.8477C21.3008 13.9476 20.7894 16.0642 20.2999 18.0374C20.1473 18.6528 19.8941 19.2221 19.6489 19.7734L19.5434 20.01C19.2649 20.6493 18.6909 21 17.9276 21L17.9283 20.9987Z"fill=#B3BEC1>'),
    x1 = n('<div class="text-primary_brand bg-[#9FE871] rounded-md px-2 py-0 font-semibold absolute left-8 -top-1 text-xs">'),
    B0 = n('<svg xmlns=http://www.w3.org/2000/svg width=25 height=24 viewBox="0 0 25 24"fill=none><path d="M12.4866 16.3629C13.8541 16.3629 14.9622 17.4478 14.9622 18.7866C14.9622 20.1255 13.8541 21.2103 12.4866 21.2103C11.1191 21.2103 10.011 20.1255 10.011 18.7866C10.011 17.4478 11.1191 16.3629 12.4866 16.3629ZM12.4866 9.57599C13.8541 9.57599 14.9622 10.6609 14.9622 11.9997C14.9622 13.3385 13.8541 14.4234 12.4866 14.4234C11.1191 14.4234 10.011 13.3385 10.011 11.9997C10.011 10.6609 11.1191 9.57599 12.4866 9.57599ZM12.4866 2.78906C13.8541 2.78906 14.9622 3.87394 14.9622 5.21278C14.9622 6.55161 13.8541 7.63649 12.4866 7.63649C11.1191 7.63649 10.011 6.55161 10.011 5.21278C10.011 3.87394 11.1191 2.78906 12.4866 2.78906Z"fill=#B3BEC1>'),
    M1 = n('<span class="text-brand mr-2 cursor-pointer"> @'),
    z1 = n('<div><div class="flex items-center justify-between"><div class="flex items-center justify-between gap-2"><div class="size-7 bg-primary rounded-full"></div><span class="text-secondary font-semibold"></span><span class=text-tertiary></span></div><div class="flex items-center gap-2"></div></div><p class="text-tertiary mt-2.5">'),
    I1 = n("<div><div>"),
    U0 = n('<img class="w-full h-full rounded-full">'),
    k1 = n('<svg xmlns=http://www.w3.org/2000/svg width=25 height=24 viewBox="0 0 25 24"><path d="M5.41808 20.7927H5.15117C4.18633 20.7927 3.39648 20.022 3.39648 19.0807V11.4504C3.39648 10.5091 4.18633 9.73842 5.15117 9.73842H5.41808C6.38292 9.73842 7.17277 10.5091 7.17277 11.4504V19.0787C7.17481 20.022 6.38496 20.7933 5.41808 20.7933V20.7927ZM17.9283 20.9987H17.9011C17.0663 20.99 16.2294 20.99 15.3919 20.99H14.1152C13.2628 20.99 12.4096 20.99 11.555 20.9793C11.0818 20.966 10.6147 20.87 10.1749 20.6947C9.42791 20.41 9.00099 19.7754 9.00371 18.9494L9.00575 15.8535C9.00575 14.1396 9.00575 12.423 9.02141 10.7084C9.02346 10.2417 9.33122 9.80441 9.59405 9.57442C10.6106 8.66779 11.7151 7.5385 12.1767 6.01455C12.3047 5.5899 12.3537 5.12125 12.4055 4.62661C12.509 3.64131 13.164 3 14.039 3C14.3822 3 14.726 3.10066 15.0624 3.29532C15.7378 3.69131 16.1886 4.31328 16.4378 5.19992C16.8375 6.60787 16.6332 7.97382 16.4085 9.14511V9.14977C16.3568 9.42376 16.5678 9.67775 16.8552 9.67775H19.7722C20.2747 9.67775 20.9951 9.73908 21.4397 10.2644C21.7631 10.6477 21.855 11.1644 21.7182 11.8477C21.3008 13.9476 20.7894 16.0642 20.2999 18.0374C20.1473 18.6528 19.8941 19.2221 19.6489 19.7734L19.5434 20.01C19.2649 20.6493 18.6909 21 17.9276 21L17.9283 20.9987Z">'),
    L1 = n('<div class="text-primary_brand bg-[#9FE871] rounded-md px-2 py-0 font-semibold absolute left-5 -top-1 text-xs">'),
    H1 = n('<div class="flex justify-end w-full mt-0 mb-4"><div class="flex items-center justify-center w-20 h-6 text-success bg-success/[0.3] rounded-sm">'),
    B1 = n("<span class=text-brand> "),
    g0 = n('<svg xmlns=http://www.w3.org/2000/svg width=21 height=20 viewBox="0 0 21 20"fill=none><path d="M8.19301 3.5L14.693 10L8.19301 16.5L6.30701 14.614L10.921 10L6.30701 5.386L8.19301 3.5Z"fill=#B3BEC1>'),
    U1 = n("<span class=text-brand>"),
    S1 = n('<div class="bg-layer3 mt-3 p-4 rounded-xl light-darkness"><div class="flex items-center justify-between"><div class="flex items-center justify-between gap-2"><div class="size-9 bg-primary rounded-full"></div><span class="text-secondary font-semibold"></span><span class=text-tertiary></span></div><div class="flex items-center gap-5 relative"><div></div></div></div><p class="text-secondary mt-2">'),
    Z1 = n('<svg xmlns=http://www.w3.org/2000/svg width=26 height=24 viewBox="0 0 26 24"fill=none><path d="M21.0114 16.6905C21.8412 16.6905 22.5143 17.3405 22.5143 18.1423C22.5143 18.9039 21.907 19.5281 21.1348 19.5889L21.0115 19.5935H5.80182C4.97209 19.5935 4.29901 18.9435 4.29901 18.1417C4.29901 17.3801 4.90624 16.7559 5.67842 16.6952L5.8018 16.6905H21.0114ZM21.0114 10.5527C21.8412 10.5527 22.5143 11.2026 22.5143 12.0045C22.5143 12.766 21.907 13.3902 21.1348 13.451L21.0115 13.4556H5.80182C4.97209 13.4556 4.29901 12.8057 4.29901 12.0038C4.29901 11.2422 4.90624 10.6181 5.67842 10.5573L5.8018 10.5527H21.0114ZM21.0114 4.40698C21.8412 4.40698 22.5143 5.05692 22.5143 5.85879C22.5143 6.62036 21.907 7.24455 21.1348 7.30531L21.0115 7.30993H5.80182C4.97209 7.30993 4.29901 6.66 4.29901 5.85812C4.29901 5.09656 4.90624 4.47237 5.67842 4.4116L5.8018 4.40698H21.0114Z"fill=#B3BEC1>'),
    $1 = n('<div class="size-12 bg-primary rounded-full mr-4">'),
    V1 = n('<div class="center mt-4">'),
    j1 = n('<div><div class="flex items-center justify-between mb-2 relative"><span class="text-secondary font-semibold"></span><div></div></div><div class="flex "><div class="flex-1 flex items-center h-11 justify-between pl-4 py-1 pr-1 bg-layer3 light-darkness rounded-xl"><div class="text-secondary font-semibold"></div><div class="size-6 text-secondary"><svg xmlns=http://www.w3.org/2000/svg width=25 height=24 viewBox="0 0 25 24"fill=none><path d="M12.3259 3C17.2967 3 21.3264 7.02963 21.3264 12.0005C21.3264 16.9713 17.2967 21.0009 12.3259 21.0009C7.35507 21.0009 3.32544 16.9713 3.32544 12.0005C3.32544 7.02963 7.35507 3 12.3259 3ZM12.3259 4.88817C8.40041 4.88817 5.21811 8.07047 5.21811 11.996C5.21811 15.9214 8.40041 19.1037 12.3259 19.1037C16.2501 19.1037 19.4311 15.924 19.4337 12.0011C19.4337 11.9985 19.4337 11.9953 19.4337 11.9915C19.4337 8.06854 16.2533 4.88817 12.3304 4.88817C12.3285 4.88817 12.3272 4.88817 12.3253 4.88817H12.3259ZM9.06002 8.66386C9.55504 8.66386 9.95685 9.06502 9.95685 9.56069V10.6035C9.95685 11.0998 9.55568 11.5022 9.06066 11.5048H8.9893C8.97644 11.5054 8.96166 11.5061 8.94687 11.5061C8.45699 11.5061 8.05839 11.1152 8.04554 10.6285V9.60762C8.04554 9.59991 8.04489 9.59155 8.04489 9.58255C8.04489 9.08752 8.44606 8.68572 8.94173 8.68572C8.95844 8.68572 8.97516 8.68636 8.99123 8.687H8.98866L9.06002 8.66386ZM15.6908 8.66386C15.6908 8.66386 15.6914 8.66386 15.6921 8.66386C16.1897 8.66386 16.5934 9.06759 16.5934 9.56519C16.5934 9.57998 16.5928 9.59476 16.5921 9.60955V9.60762V10.6504C16.5895 11.1473 16.1871 11.5491 15.6908 11.5517H15.5963C15.0993 11.5491 14.6975 11.1467 14.6949 10.6504V9.60698C14.6949 9.60119 14.6949 9.59476 14.6949 9.58834C14.6949 9.09074 15.0987 8.687 15.5963 8.687L15.6908 8.66386Z"fill=#B3BEC1>');
const S0 = [{
    value: "Inappropriate content (spam, ad, ref links, etc.)",
    label: s("Inappropriate content (spam, ad, ref links, etc.)")
}, {
    value: "Insults, provocations, cursing",
    label: s("Insults, provocations, cursing")
}, {
    value: "Begging",
    label: s("Begging")
}, {
    value: "Scam attempt",
    label: s("Scam attempt")
}];

function N1(p) {
    const g = R0(),
        [x, M] = m(!1),
        [z, h] = m("createTime"),
        [f, V] = m([]),
        {
            user: I
        } = M0();
    A0();
    const [k, P] = m(1), [U, D] = m(0), [F, p0] = m(!1), [v0, G] = m(!1);
    let j;

    function t0(e) {
        var C;
        const [a, o] = m(e.type ? (C = e.item) == null ? void 0 : C.content : ""), d = () => {
            var r;
            if (E.vipLevel < 4) return void H.error(s("Unlock at VIP 4"));
            const u = (r = e.item) == null ? void 0 : r.replyId;
            if (G(!0), e.type) {
                if (!e.item) return void H.error(s("Comment not found"));
                u ? $().post("/comment/reply/edit/", {
                    commentId: e.item.commentId,
                    content: a(),
                    replyId: e.item.replyId,
                    replyUserId: e.item.replyUserId,
                    id: e.item.id
                }).then(c => {}).catch(c => H(c)).finally(() => {
                    S.pop(), q(), G(!1)
                }) : $().post("/comment/edit/", {
                    gameUnique: e.gameUnique,
                    content: a(),
                    commentId: e.item.commentId
                }).then(c => {}).catch(c => H(c)).finally(() => {
                    S.pop(), q(), G(!1)
                })
            } else e.item ? $().post("/comment/reply/add/", {
                commentId: e.item.commentId,
                content: a(),
                replyId: e.item.replyId,
                replyUserId: e.item.replyUserId
            }).then(c => {}).catch(c => H(c)).finally(() => {
                S.pop(), q(), G(!1)
            }) : $().post("/comment/add/", {
                gameUnique: e.gameUnique,
                content: a()
            }).then(c => {}).catch(c => H(c)).finally(() => {
                S.pop(), q(), G(!1)
            })
        }, L = u => {
            const r = u + " ";
            j && (j.setRangeText(r), o(j.value), j.focus(), j.selectionStart = j.selectionEnd = (j.selectionStart || 0) + r.length)
        };
        return l(K0, {
            get title() {
                return W(() => !!X.mobile)() ? (r = C1(), c = r.firstChild, t(r, l(y, {
                    class: "text-brand px-0",
                    onClick: () => {
                        S.pop()
                    },
                    get children() {
                        return s("Cancel")
                    }
                }), c), t(c, () => e.title), t(r, l(y, {
                    type: "brand",
                    class: "h-8",
                    onClick: d,
                    get disabled() {
                        return v0()
                    },
                    get children() {
                        return s("Post")
                    }
                }), null), r) : (u = f1(), t(u, () => e.title), u);
                var u, r, c
            },
            get close() {
                return !X.mobile
            },
            class: "!min-h-20",
            get children() {
                return [(r = v1(), r.addEventListener("change", c => o(c.target.value)), h0(c => j = c, r), B(() => J(r, "placeholder", s("Add a comment"))), B(() => r.value = a()), r), (u = L0(), t(u, l(p1, {
                    onChange: L
                }), null), t(u, l(Z, {
                    get when() {
                        return !X.mobile
                    },
                    get children() {
                        return l(y, {
                            type: "brand",
                            class: "w-40",
                            onClick: d,
                            get disabled() {
                                return v0()
                            },
                            get children() {
                                return s("Post")
                            }
                        })
                    }
                }), null), B(() => Y(u, m0("flex mt-2", X.mobile ? "justify-end" : "justify-between"))), u)];
                var u, r
            }
        })
    }

    function s0(e, a) {
        return (o = L0()).$$click = d => {
            d.stopPropagation(), h(e), M(!1), q()
        }, t(o, a), B(d => {
            var L = "sort-option h-10 leading-10 text-center bg-layer5 rounded-md mx-1 " + (z() === e ? "selected" : ""),
                C = z() === e ? "linear-gradient(270deg, rgba(36, 238, 137, 0.00) 39.79%, #24EE89 158.45%), #3A4142" : "";
            return L !== d.e && Y(o, d.e = L), C !== d.t && ((d.t = C) != null ? o.style.setProperty("background", C) : o.style.removeProperty("background")), d
        }, {
            e: void 0,
            t: void 0
        }), o;
        var o
    }

    function V0(e) {
        return (a = y1()).$$click = o => {
            e.setSelectedOperateOption(e.value), e.onHandleClick(o)
        }, t(a, () => s(e.label)), a;
        var a
    }

    function j0(e) {
        const [a, o] = m(e.item.likeCount), [d, L] = m(e.item.isLike === 1);
        return C = z1(), u = C.firstChild, r = u.firstChild, c = r.firstChild, K = c.nextSibling, l0 = K.nextSibling, T = r.nextSibling, _ = u.nextSibling, t(c, l(i0, {
            get href() {
                return `/user/profile/${e.item.userId}`
            },
            get children() {
                var w = w1();
                return B(() => J(w, "src", u0.avatar(e.item.userId, "s"))), w
            }
        })), t(K, () => e.item.userName), t(l0, () => z0(e.item.createTime, new Date)), t(T, l(y, {
            onClick: () => {
                E.login ? S.push(() => l(t0, {
                    get title() {
                        return `${s("Reply to")} ${e.item.userName}`
                    },
                    get item() {
                        return e.item
                    },
                    get gameUnique() {
                        return e.gameUnique
                    }
                }), {
                    close: !1
                }) : g("/login/signin")
            },
            get children() {
                return H0()
            }
        }), null), t(T, l(y, {
            class: "relative",
            onClick: () => (w => {
                const n0 = {
                    contentId: e.item.id,
                    contentType: 2
                };
                E.login ? $().post(`/comment/like/${w?"undo":"do"}/`, n0).then(() => {
                    const R = w ? -1 : 1;
                    o(a() + R), L(!d())
                }).catch(R => H(R)).finally() : g("/login/signin")
            })(d()),
            get children() {
                return [b1(), l(Z, {
                    get when() {
                        return a() > 0
                    },
                    get children() {
                        var w = x1();
                        return t(w, a), w
                    }
                })]
            }
        }), null), t(T, l(y, {
            get children() {
                return B0()
            }
        }), null), t(_, l(Z, {
            get when() {
                return e.item.replyUserName
            },
            get children() {
                return l(i0, {
                    get href() {
                        return `/user/profile/${e.item.replyUserId}`
                    },
                    get children() {
                        var w = M1();
                        return w.firstChild, t(w, () => e.item.replyUserName, null), w
                    }
                })
            }
        }), null), t(_, () => I0(e.item.content), null), C;
        var C, u, r, c, K, l0, T, _
    }

    function q0(e) {
        const [a, o] = m(e.item.likeCount), {
            user: d
        } = M0(), [L, C] = m(e.item.isCommentLike === 1), [u, r] = m([]), [c, K] = m(0), [l0, T] = m(!1), [_, w] = m(""), [n0, R] = m(!1), [C0, E0] = m(S0[0].value), P0 = Q0(() => e.item.userId === d.userId && e.item.replyCount === 0 ? [{
            value: "edit",
            label: s("Edit your comment")
        }, {
            value: "delete",
            label: s("Delete your comment")
        }] : e.item.userId === d.userId && e.item.replyCount > 0 ? [{
            value: "delete",
            label: s("Delete your comment")
        }] : [{
            value: "report",
            label: s("Report the comment")
        }]), f0 = (i = 1) => {
            l0() || (T(!0), $().post("/comment/reply/list/", {
                commentId: e.item.commentId,
                page: i,
                pageSize: 20
            }).then(v => {
                v && (r(b => [...b, ...v.list]), K(v.total))
            }).catch(v => H(v)).finally(() => {
                T(!1)
            }))
        };
        return O = S1(), c0 = O.firstChild, r0 = c0.firstChild, a0 = r0.firstChild, o0 = a0.nextSibling, d0 = o0.nextSibling, Q = r0.nextSibling, A = Q.firstChild, y0 = c0.nextSibling, t(a0, l(i0, {
            get href() {
                return `/user/profile/${e.item.userId}`
            },
            get children() {
                var i = U0();
                return B(() => J(i, "src", u0.avatar(e.item.userId, "s"))), i
            }
        })), t(o0, () => e.item.userName), t(r0, l(W0, {
            get code() {
                return e.item.titles
            },
            get desc() {
                return e.item.titleDesc
            }
        }), d0), t(d0, () => z0(e.item.createTime, new Date)), t(Q, l(y, {
            class: "p-0",
            onClick: () => {
                E.login ? S.push(() => l(t0, {
                    get title() {
                        return `${s("Reply to")} ${e.item.userName}`
                    },
                    get item() {
                        return e.item
                    },
                    get gameUnique() {
                        return e.gameUnique
                    }
                }), {
                    close: !1
                }) : g("/login/signin")
            },
            get children() {
                return H0()
            }
        }), A), t(Q, l(y, {
            class: "p-0 relative",
            onClick: () => (i => {
                if (!E.login) return void g("/login/signin");
                const v = {
                    contentId: e.item.commentId,
                    contentType: 1
                };
                $().post(`/comment/like/${i?"undo":"do"}/`, v).then(() => {
                    const b = i ? -1 : 1;
                    o(a() + b), C(!L())
                }).catch(b => H(b)).finally()
            })(L()),
            get children() {
                return [(i = k1(), B(() => J(i, "class", m0(L() ? "fill-brand" : "fill-[#B3BEC1]"))), i), l(Z, {
                    get when() {
                        return a() > 0
                    },
                    get children() {
                        var v = L1();
                        return t(v, a), v
                    }
                })];
                var i
            }
        }), A), t(Q, l(y, {
            class: "p-0",
            onClick: () => R(!n0()),
            get children() {
                return B0()
            }
        }), A), t(A, l(e0, {
            get each() {
                return P0()
            },
            children: i => l(V0, {
                get value() {
                    return i.value
                },
                get label() {
                    return i.label
                },
                setSelectedOperateOption: w,
                onHandleClick: v => {
                    v.stopPropagation(), R(!1), (() => b0(this, null, function*() {
                        _() === "delete" && (yield S.confirm(() => s("Are you sure to delete this comment?"))) && $().post(`/comment/del/${e.item.commentId}/`, {}).then(() => {}).catch(b => H(b)).finally(() => {
                            q()
                        }), _() === "edit" && (E.login ? S.push(() => l(t0, {
                            get title() {
                                return `${s("Edit your comment")}`
                            },
                            get item() {
                                return e.item
                            },
                            type: "edit",
                            get gameUnique() {
                                return e.gameUnique
                            }
                        }), {
                            close: !1
                        }) : g("/login/signin")), _() === "report" && (yield S.confirm(() => {
                            return w0 = (b = I1()).firstChild, t(w0, () => s("Please choose the reporting reason:")), t(b, l(Y0, {
                                get value() {
                                    return C0()
                                },
                                get options() {
                                    return S0.map(T0 => T0.value)
                                },
                                onChange: E0
                            }), null), b;
                            var b, w0
                        })) && $().post("/comment/report/do/", {
                            contentId: e.item.replyId ? e.item.replyId : e.item.commentId,
                            contentType: e.item.replyId ? 2 : 1,
                            reason: C0()
                        }).then(b => {
                            H.success("Success!")
                        }).catch(b => H(b)).finally(() => {})
                    }))(i.value)
                }
            })
        })), t(y0, () => I0(e.item.content)), t(O, l(Z, {
            get when() {
                return e.item.pinned
            },
            get children() {
                var i = H1(),
                    v = i.firstChild;
                return t(v, l(e1, {
                    width: "16px",
                    height: "16px",
                    class: "mr-1"
                }), null), t(v, () => s("Pinned"), null), i
            }
        }), null), t(O, l(Z, {
            get when() {
                return W(() => e.item.replyCount > 0)() && u().length === 0
            },
            get children() {
                return l(y, {
                    class: "gap-1 h-5 mt-2.5 p-0",
                    onClick: () => {
                        f0()
                    },
                    get children() {
                        return [(i = B1(), v = i.firstChild, t(i, () => e.item.replyCount, v), t(i, () => s("Replies"), null), i), g0()];
                        var i, v
                    }
                })
            }
        }), null), t(O, l(e0, {
            get each() {
                return u()
            },
            children: i => l(j0, {
                item: i,
                get gameUnique() {
                    return e.gameUnique
                }
            })
        }), null), t(O, l(Z, {
            get when() {
                return W(() => !!u().length)() && u().length < c()
            },
            get children() {
                return l(y, {
                    class: "gap-1 h-5 mt-2.5 p-0",
                    onClick: () => {
                        f0(k() + 1)
                    },
                    get children() {
                        return [(i = U1(), t(i, () => s("More Replies")), i), g0()];
                        var i
                    }
                })
            }
        }), null), B(() => Y(A, "flex flex-col gap-1 w-56 p-1 bg-layer4 rounded-md absolute right-0 top-14 transition-all duration-300 z-20 " + (n0() ? "opacity-100 visible" : "opacity-0 invisible"))), O;
        var O, c0, r0, a0, o0, d0, Q, A, y0
    }
    const q = (e = 1, a = !1) => {
        $().post("/comment/list/", {
            page: e,
            pageSize: 10,
            gameUnique: p.gameUnique,
            sortField: z()
        }).then(o => {
            P(o.page), D(o.totalPage), p0(!1);
            const d = a ? [...f(), ...o.list] : o.list;
            o.list && V(d)
        })
    };
    return J0(() => {
        q()
    }), l(G0, {
        get fallback() {
            return l(x0, {})
        },
        get children() {
            var e = j1(),
                a = e.firstChild,
                o = a.firstChild,
                d = o.nextSibling,
                L = a.nextSibling,
                C = L.firstChild,
                u = C.firstChild;
            return t(o, () => s("Comments")), t(a, l(y, {
                onClick: () => M(r => !r),
                ref: r => $0(() => r, () => M(!1)),
                get children() {
                    return Z1()
                }
            }), d), t(d, () => s0("createTime", s("Newest First")), null), t(d, () => s0("replyCount", s("Top Comments")), null), t(d, () => s0("likeCount", s("Top Likes")), null), t(L, l(Z, {
                get when() {
                    return E.login
                },
                get children() {
                    var r = $1();
                    return t(r, l(i0, {
                        get href() {
                            return `/user/profile/${I.userId}`
                        },
                        get children() {
                            var c = U0();
                            return B(() => J(c, "src", u0.avatar(I.userId, "s"))), c
                        }
                    })), r
                }
            }), C), C.$$click = () => {
                E.login ? S.push(() => l(t0, {
                    get title() {
                        return s("Leave Comments")
                    },
                    get gameUnique() {
                        return p.gameUnique
                    }
                }), {
                    close: !1
                }) : g("/login/signin")
            }, t(u, () => s("Leave your Comment")), t(e, l(e0, {
                get each() {
                    return f()
                },
                children: r => l(q0, {
                    item: r,
                    get gameUnique() {
                        return p.gameUnique
                    }
                })
            }), null), t(e, l(Z, {
                get when() {
                    return W(() => k() < U())() && !F()
                },
                get children() {
                    return l(y, {
                        class: "flex items-center gap-2 bg-layer6 p-2 mx-auto mt-4 text-secondary",
                        onClick: () => {
                            p0(!0), q(k() + 1, !0)
                        },
                        get children() {
                            return [W(() => s("View More Comments")), g0()]
                        }
                    })
                }
            }), null), t(e, l(Z, {
                get when() {
                    return F()
                },
                get children() {
                    var r = V1();
                    return t(r, l(x0, {})), r
                }
            }), null), B(() => Y(d, "flex flex-col gap-1 w-36 p-1 bg-layer4 rounded-md absolute right-0 bottom-full transition-all duration-300 z-10 " + (x() ? "opacity-100 visible" : "opacity-0 invisible"))), e
        }
    })
}
Z0(["click"]);
export {
    N1 as
    default
};