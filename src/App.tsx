import { RecoilRoot } from "recoil"
import Router from "./layout/Router"
import Modal from "./components/modal"

function App() {

  return (
    <>
      <div className="w-screen overflow-x-hidden">
        <RecoilRoot>
          <Router/>
          <Modal/>
        </RecoilRoot>
      </div>
    </>
  )
}

export default App
