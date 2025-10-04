function n() {
    return !!("standalone" in window.navigator && window.navigator.standalone) || !!window.matchMedia("(display-mode: standalone)").matches
}
export {
    n as i
};