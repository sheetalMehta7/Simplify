import { atom } from "recoil"
import { modalTypes } from "../../utils/modalConstants"

interface ModalState {
    modalTypeActive: keyof typeof modalTypes | ""
}

const modalState = atom<ModalState>({
    key: "modalState",
    default: {
        modalTypeActive: ""
    }
})


export default modalState