var v = (E => (E[E.EXPIRED = -1] = "EXPIRED", E[E.AVAILABLE = 0] = "AVAILABLE", E[E.TO_BE_UNLOCKED = 1] = "TO_BE_UNLOCKED", E[E.RECEIVED = 2] = "RECEIVED", E))(v || {}),
    r = (E => (E[E.rollAvailable = 0] = "rollAvailable", E[E.rollPending = 1] = "rollPending", E[E.rollUnavailable = 2] = "rollUnavailable", E))(r || {}),
    i = (E => (E[E.Claimed = 1] = "Claimed", E[E.UnClaimed = 0] = "UnClaimed", E[E.NoReward = -1] = "NoReward", E))(i || {}),
    O = (E => (E[E.NOT_START = 1] = "NOT_START", E[E.ONGOING = 2] = "ONGOING", E[E.PRE_DONE = 6] = "PRE_DONE", E))(O || {}),
    N = (E => (E.Used = "used", E.Receive = "receive", E))(N || {}),
    _ = (E => (E[E.Svip = 11] = "Svip", E[E.Deposit = 3] = "Deposit", E))(_ || {}),
    D = (E => (E.EMAIL = "tid075", E.PHONE = "tid076", E.TELEGRAM = "tid077", E))(D || {}),
    b = (E => (E.newbie = "newbie_free_spin", E.deposit = "deposit_bonus", E.shitlink = "shitlink", E))(b || {});
export {
    v as B, N as C, b as N, D as R, O as W, r as a, i as b, _ as c
};