import { HiOutlineArrowRight } from "react-icons/hi"


const ContactForm = () => {
  return (
      <div className="max-w-screen-xl mx-auto py-12">
          <h2 className="text-center text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-800 mb-8">SEND A MESSAGE</h2>
          <form className="w-full lg:w-[80%] mx-auto px-4">
              <div className="w-full flex flex-col gap-4">
                <div className="w-full flex sm:flex-row flex-col gap-4">
                    <input className="w-full sm:w-1/2 border-2 border-stone-400 rounded-xl p-4 bg-transparent" type="text" placeholder="Your Name"/>
                    <input className="w-full sm:w-1/2 border-2 border-stone-400 rounded-xl p-4 bg-transparent" type="text" placeholder="Your Email"/>
                </div>
                <input className="w-full border-2 border-stone-400 rounded-xl p-4 bg-transparent" type="text" placeholder="Subject"/>
                <textarea className="w-full border-2 border-stone-400 rounded-xl p-4 bg-transparent " rows={8} placeholder="Message"></textarea>
        </div>
        <div className="flex items-center justify-center mt-12">
          <button className=" flex items-center gap-2 text-xl font-semibold py-4 px-8 rounded-xl bg-green-600 text-white">SUBMIT <span><HiOutlineArrowRight/></span></button>
        </div>
          </form>
    </div>
  )
}

export default ContactForm