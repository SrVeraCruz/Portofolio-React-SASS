import SocialNetworks from "./SocialNetworks"
import InformationContainer from "./InformationContainer"

import avatar from "../img/vera_cruz.jpg"

import "../styles/components/sidebar.sass"

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <div className="sidebar-imgBox">
        <img src={avatar} alt="Dudu Vera Cruz" />
      </div>
      <p className="title">developer</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="#" className="btn">Download CV</a>
    </aside>
  )
}

export default Sidebar
