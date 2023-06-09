import { FC, useState, useContext } from "react"
import AuthContext from "../../../context/Context"
import getContactInfo from "../../../http/GetContactInfo"
import { AddChat, Chat } from "../../layout"
import style from './mainScreen.module.scss'

interface IContactInfo {
  avatar: string
  chatId: string
  name: string
}

const MainScreen: FC = () => {
  const [addChat, setAddChat] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [contactInfo, setContactInfo] = useState<IContactInfo>({avatar: '', chatId: '', name: ''})
  const {IdInstanceC, ApiTokenInstanceC} = useContext(AuthContext)
  const clickAddChat = () => {
    setAddChat(true)
  }
  const clickCancel = () => {
    setAddChat(false)
  }
  const clickConfirm = (chatId:string) => {
    const tel = `7${chatId}@c.us`
    if(tel.length === 16){
      setIsChatOpen(false)
      const requestContact = getContactInfo(IdInstanceC, ApiTokenInstanceC, tel)
      requestContact.then(response => response.json()).then(commits => {
        setContactInfo(commits)
        setIsChatOpen(true)
        setAddChat(false)
      });
    }
  }

  return (
    <div className={style._}>
      <div className={style.chatlist}>
        <div className={style.chatlist_header}>
        </div>
        {addChat ?
          <AddChat functions={{clickCancel, clickConfirm}}></AddChat> :
          <div className={style.addchat_button} onClick={clickAddChat}>
            <p>Открыть новый чат</p>
          </div>
        }
      </div>
      {isChatOpen ? <Chat contactInfo={contactInfo}></Chat> : <div></div>}
    </div>
  )
}

export default MainScreen