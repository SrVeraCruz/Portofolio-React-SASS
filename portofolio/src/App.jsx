import Sidebar from "./components/Sidebar"
import MainContent from "./components/MainContent"

import "./styles/components/app.sass"

function App() {

  return (
    <>
      <div id="portofolio">
        <h1>Vera Cruz Dúdú</h1>
        <Sidebar />
        <MainContent />
      </div>
    </>
  )
}

export default App
