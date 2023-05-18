import { FC, useState, useEffect, useContext } from 'react'
import AuthContext from "../../../context/Context"
import getChatHistory from '../../../http/GetChatHistory'
import ReceiveNotification from '../../../http/ReceiveNotification'
import { ChatFooter } from '..'
import style from './chat.module.scss'

interface IChat {
  contactInfo: {
    avatar: string
    chatId: string
    name: string
  }
}

const Chat: FC<IChat> = ({contactInfo}) => {
  const [history, setHistory] = useState([])
  const {IdInstanceC, ApiTokenInstanceC} = useContext(AuthContext)

  useEffect(() => {
    console.trace()
    const requestHistory = getChatHistory(IdInstanceC, ApiTokenInstanceC, contactInfo.chatId)
    requestHistory.then(response => response.json()).then(commits => {
      setHistory(commits.reverse())
    });
    ReceiveNotification(IdInstanceC, ApiTokenInstanceC)
  }, [])
  return (
    <div className={style._}>
      <div className={style.header}>
        <img src={contactInfo.avatar}></img>
        <span>{contactInfo.name}</span>
      </div>
      <div className={style.chat}>
        {history.map((element) => {
          return (
            <div key={element.idMessage} className={element.type === "outgoing" ? style.outgoing : style.incoming}>{element.textMessage}</div>
          )
        })}
      </div>
      <ChatFooter chatId={contactInfo.chatId}></ChatFooter>
    </div>
  )
}

export default Chat