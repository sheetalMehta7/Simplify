import { RecoilRoot } from "recoil"
import Router from "./layout/Router"

function App() {

  return (
    <>
      <div className="w-screen overflow-x-hidden">
        <RecoilRoot>
          <Router/>
        </RecoilRoot>
      </div>
    </>
  )
}

export default App
