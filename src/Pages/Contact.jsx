import ContactForm from "../Components/ContactComponents/ContactForm"
import ContactInfo from "../Components/ContactComponents/ContactInfo"
import Subscribe from "../Components/Subscribe"
import PageTop from "../Components/PageTop"


const Contact = () => {
  return (
      <div className="bg-[#F4F1EA]">
      <PageTop pageName={'CONTACT US'} />    
      <ContactInfo />
      <ContactForm/>
      <Subscribe/>
    </div>
  )
}

export default Contact