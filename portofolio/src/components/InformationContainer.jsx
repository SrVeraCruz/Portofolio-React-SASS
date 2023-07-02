import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai"

import "../styles/components/InformationContainer.sass"

const contactIcons = [
  {name: "phone", contact: "(+212) 714-55930", icon: <AiFillPhone />},
  {name: "mail", contact: "veracruzdudu@gmail.com", icon: <AiOutlineMail />},
  {name: "environment", contact: "Maroc", icon: <AiFillEnvironment />},
]

const InformationContainer = () => {
  return (
    <section id="information-container">
      {contactIcons.map((contact)=> (
        <div className="info-card" key={contact.name}>
          <p id={contact.name}>{contact.icon}</p>
          <div>
            <h3>{contact.name}:</h3>
            <p>{contact.contact}</p>
          </div>
        </div>
      ))}
    </section>
  )
}

export default InformationContainer
