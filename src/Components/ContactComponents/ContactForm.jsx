

const ContactForm = () => {
  return (
      <div className="max-w-screen-xl mx-auto">
          <form className="w-full lg:w-[80%] mx-auto px-4">
              <div className="w-full flex flex-col gap-4">
                <div className="w-full flex sm:flex-row flex-col gap-4">
                    <input className="w-full sm:w-1/2 border-2 border-slate-300 rounded-xl p-4" type="text" placeholder="Your Name"/>
                    <input className="w-full sm:w-1/2 border-2 border-slate-300 rounded-xl p-4" type="text" placeholder="Your Email"/>
                </div>
                <input className="w-full border-2 border-slate-300 rounded-xl p-4" type="text" placeholder="Subject"/>
                <textarea className="w-full border-2 border-slate-300 rounded-xl p-4 " rows={8} placeholder="Message"></textarea>
              </div>
          </form>
    </div>
  )
}

export default ContactForm