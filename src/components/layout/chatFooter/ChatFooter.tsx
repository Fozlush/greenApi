import { FC, useState, useContext } from 'react'
import SendMessage from '../../../http/SendMessage'
import AuthContext from "../../../context/Context"
import { Button } from '../../ui'
import style from './chatFooter.module.scss'

const ChatFooter: FC = ({chatId}) => {
  const [message, setMessage] = useState('')
  const {IdInstanceC, ApiTokenInstanceC} = useContext(AuthContext)
  const messageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value)
  }
  const send = () => {
    const requestSend = SendMessage(IdInstanceC, ApiTokenInstanceC, chatId, message)
    setMessage('')
  }
  return (
    <div className={style._}>
      <textarea value={message} onChange={messageChange}></textarea>
      <Button text='Отправить' onClick={send}></Button>
    </div>
  )
}

export default ChatFooter