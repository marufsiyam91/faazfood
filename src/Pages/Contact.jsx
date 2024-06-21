import ContactForm from "../Components/ContactComponents/ContactForm"
import ContactInfo from "../Components/ContactComponents/ContactInfo"
import Subscribe from "../Components/HomeComponets/Subscribe"
import PageTop from "../Components/PageTop"


const Contact = () => {
  return (
      <div>
      <PageTop pageName={'CONTACT US'} />    
      <ContactInfo />
      <ContactForm/>
      <Subscribe/>
    </div>
  )
}

export default Contact