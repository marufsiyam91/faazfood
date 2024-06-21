

const ContactCard = ({icon, title, info, mInfo, detail, style}) => {
  return (
      <div className="flex flex-col items-center ">
          <div>
              <div className="text-4xl">
                {icon}
              </div>
          </div>
          <div className="text-center mt-6">
              <h3 className="text-xl text-black font-semibold mb-4">{title}</h3>
              <p className="text-md font-light">{info}</p>
              <p className="text-md font-light">{mInfo}</p>
              <p className={style ? style : 'text-md font-light'}>{detail}</p>
          </div>
    </div>
  )
}

export default ContactCard