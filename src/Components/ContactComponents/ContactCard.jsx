

const ContactCard = ({icon, title, info, mInfo, detail, style}) => {
  return (
      <div className="flex flex-col items-center ">
          <div>
              <div className="text-4xl">
                {icon}
              </div>
          </div>
          <div className="text-center mt-6">
              <h3 className="text-2xl text-black font-bold mb-4">{title}</h3>
              <p className="text-lg font-normal">{info}</p>
              <p className="text-lg font-normal">{mInfo}</p>
              <p className={style ? style : 'text-lg font-normal'}>{detail}</p>
          </div>
    </div>
  )
}

export default ContactCard