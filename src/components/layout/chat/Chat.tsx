import { FC, useState, useEffect, useContext } from 'react'
import AuthContext from "../../../context/Context"
import ReceiveNotification from '../../../http/ReceiveNotification'
import DeleteNotification from '../../../http/DeleteNotification'
import { ChatFooter } from '..'
import style from './chat.module.scss'

interface IChat {
  contactInfo: {
    avatar: string
    chatId: string
    name: string
  }
}

interface IMessage {
  idMessage: string
  type: string
  textMessage: string
}

const Chat: FC<IChat> = ({contactInfo}) => {
  const [history, setHistory] = useState<IMessage[]>([])
  const {IdInstanceC, ApiTokenInstanceC} = useContext(AuthContext)

  const fetchNotification = () => {
    const requestReceiveNotification = ReceiveNotification(IdInstanceC, ApiTokenInstanceC)
    requestReceiveNotification.then(response => response.json()).then(commits => {
      if(commits){
        try{
          if(commits.body.typeWebhook === 'outgoingAPIMessageReceived' && commits.body.senderData.chatId === contactInfo.chatId){
            const newMessage:IMessage = {
              idMessage: commits.body.idMessage,
              type: 'outgoing',
              textMessage: commits.body.messageData.extendedTextMessageData.text
            }
            history.push(newMessage)
            setHistory([...history])
          }else if(commits.body.typeWebhook === 'incomingMessageReceived' && commits.body.senderData.chatId === contactInfo.chatId){
            const newMessage:IMessage = {
              idMessage: commits.body.idMessage,
              type: 'incoming',
              textMessage: commits.body.messageData.textMessageData.textMessage
            }
            history.push(newMessage)
            setHistory([...history])
          }
        }catch(e){
          console.log('Кажется пришло не текстовое сообщение(')
        }
        DeleteNotification(IdInstanceC, ApiTokenInstanceC, commits.receiptId)
      }
    })
  }

  useEffect(() => {
    const notificationInterval = setInterval(fetchNotification, 5000)
    return () => clearTimeout(notificationInterval)
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