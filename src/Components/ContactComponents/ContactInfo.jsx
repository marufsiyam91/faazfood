import ContactCard from "./ContactCard"
import { GrMapLocation } from "react-icons/gr";
import { RxStopwatch } from "react-icons/rx";
import { PiPhoneLight } from "react-icons/pi";




const ContactInfo = () => {
  return (
      <div className="max-w-screen-2xl mx-auto py-20">
          <div className="flex flex-col items-center mt-8 px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] text-center font-bold text-stone-800">GET IN TOUCH WITH US</h1>
            <p className="max-w-[670px] text-slate-700 font-light text-center mt-4">Get in touch to discuss your employee wellbeing needs today. Please give us a call, drop us an email or fill out the contact form and we’ll get back to you.</p>
          </div>

          <div className="py-12 flex sm:flex-row flex-col sm:gap-0 gap-8 justify-between max-w-screen-lg mx-auto px-4">
              <ContactCard icon={<GrMapLocation />} title={'ADDRESS'} info={"Box 565, Pinney's Beach, Charlestown,"} mInfo={'Nevis, West Indies, Caribbean'} detail={'CHECK LOCATION'} style={'text-md font-normal text-red-600 hover:text-green-600 transition mt-3'}/>
              <ContactCard icon={<PiPhoneLight />} title={'GET IN TOUCH'} info={<div className="flex items-center font-normal">Mobile: <span className='text-lg text-black font-normal'>084 3456 19 89</span></div>} mInfo={<div className="flex items-center">Hotline: <span className="text-lg text-black">(850) 435-4155</span></div>} detail={'E-mail: hello@Fazfood.com'} />
              <ContactCard icon={<RxStopwatch />} title={'HOUR OF OPERATION'} info={"Monday-Friday: 8am-5pm"} mInfo={'Saturday: 9am-Midday'} detail={'SUNDAY: CLOSE'} style={'text-md font-normal text-green-600 hover:text-red-600 transition mt-3'}/>
          </div>
    </div>
  )
}

export default ContactInfo