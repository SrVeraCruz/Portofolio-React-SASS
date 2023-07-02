import AboutContainer from "./AboutContainer"
import TechnologiesContainer from "./TechnologiesContainer"
import ProjectsContainer from "./ProjectsContainer"

import "../styles/components/MainContent.sass"

const MainContent = () => {
  return (
    <main id="main-content">
      <AboutContainer />
      <TechnologiesContainer />
      <ProjectsContainer />
    </main>
  )
}

export default MainContent
