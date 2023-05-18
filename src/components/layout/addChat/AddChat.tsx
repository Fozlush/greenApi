import { FC, useState } from 'react'
import { Button, Input } from "../../ui"
import style from './addChat.module.scss'

const AddChat: FC = ({functions}) => {
  const [chatId, setChatId] = useState('')
  const changechatId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChatId(e.target.value)
  }
  const handleClickConfirm = () => {
    functions.clickConfirm(chatId)
  }
  return (
    <div className={style._}>
      <div>
        <span>Номер телефона</span>
        <Input value={chatId} onChange={changechatId}></Input>
      </div>
      <div className={style.buttons_block}>
        <Button text="Открыть" onClick={handleClickConfirm}></Button>
        <Button text="Отмена" onClick={functions.clickCancel}></Button>
      </div>
    </div>
  )
}

export default AddChat