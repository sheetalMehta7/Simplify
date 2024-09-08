import React from 'react'
import { useRecoilState } from 'recoil'
import modalState from '../../recoil/atoms/modalAtoms'
import Login from './Login'
import { modalTypes } from '../../utils/modalConstants'

import { RxCross2 } from "react-icons/rx";
import Signup from './Signup'


const Modal = () => {
  const [modals, setModals] = useRecoilState(modalState);

  const toggleModal = (type: keyof typeof modalTypes | "") => {
    setModals({ modalTypeActive: modals.modalTypeActive === type ? "" : type });
  };

  const modalContent = () => {
    switch (modals.modalTypeActive) {
      case modalTypes.loginModal:
        return <Login />;
      case modalTypes.signupModal:
        return <Signup />;
      default:
        return null;
    }
  };

  return (
    <>
      {modals.modalTypeActive &&
        <div
          aria-hidden="true"
          className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-slate-900 bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-md max-h-full rounded-lg shadow bg-slate-800 border border-gray-600">
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 border-b rounded-t border-gray-600">
              <h3 className="text-xl font-semibold text-gray-300">
                {modals.modalTypeActive === modalTypes.loginModal ? 'Log in' : 'Sign up'}
              </h3>
              <button
                type="button"
                onClick={() => toggleModal(modals.modalTypeActive)}
                className="text-gray-300 bg-transparent rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center hover:bg-slate-600 hover:text-white"
              >
                <RxCross2 />
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* Modal Body */}
            {modalContent()}
          </div>
        </div>}
    </>
  )
}

export default Modal