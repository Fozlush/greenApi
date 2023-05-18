import { FC } from "react"
import style from './button.module.scss'

interface IButton {
  text: string,
  onClick: (event: any) => void
}

const Button: FC<IButton> = ({text, onClick}) => {
  return (
    <button onClick={onClick} className={style.button}>{text}</button>
  )
}

export default Button