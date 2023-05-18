import { FC } from "react"
import style from './input.module.scss'

interface IInput {
  value: string,
  onChange: (event: any) => void
}

const Input: FC<IInput> = ({value, onChange}) => {
  return (
    <input value={value} onChange={onChange} className={style.input}></input>
  )
}

export default Input