import { atom } from "recoil"

const modalState = atom({
    key: "modalState",
    default: {
        loginModal: false,
        signupModal: false,

    }
})


export default modalState