import { FC, useState, useContext } from "react"
import AuthContext from "../../../context/Context"
import { Button, Input } from "../../ui"
import getStateInstance from "../../../http/GetStateInstance"
import style from './lognScreen.module.scss'

const LoginScreen: FC = () => {
  const [IdInstance, setIdInstance] = useState('')
  const [ApiTokenInstance, setApiTokenInstance] = useState('')
  const {setIsAuthC, setIdInstanceC, setApiTokenInstanceC} = useContext(AuthContext)
  const changeIdInstance = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIdInstance(e.target.value)
  }
  const changeApiTokenInstance = (e: React.ChangeEvent<HTMLInputElement>) => {
    setApiTokenInstance(e.target.value)
  }
  const clickAuth = () => {
    if(!IdInstance || !ApiTokenInstance){
      return
    }
    const request = getStateInstance(IdInstance, ApiTokenInstance)
    request.then((response) => {
      setIsAuthC(response.ok)
      setIdInstanceC(IdInstance)
      setApiTokenInstanceC(ApiTokenInstance)
    })
  }

  return (
    <div className={style._}>
      <h2>Авторизация</h2>
      <div className={style.input_block}>
        <span>IdInstance</span>
        <Input value={IdInstance} onChange={changeIdInstance}></Input>
      </div>
      <div className={style.input_block}>
        <span>ApiTokenInstance</span>
        <Input value={ApiTokenInstance} onChange={changeApiTokenInstance}></Input>
      </div>
      <Button text="Войти" onClick={clickAuth}></Button>
    </div>
  )
}

export default LoginScreen