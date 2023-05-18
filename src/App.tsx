import { FC, useState } from "react"
import AuthContext from "./context/Context"
import { LoginScreen, MainScreen } from "./components/screens"
import './variables.scss'
import './style.scss'

const App: FC = () => {
  const [isAuthC, setIsAuthC] = useState(false)
  const [IdInstanceC, setIdInstanceC] = useState('')
  const [ApiTokenInstanceC, setApiTokenInstanceC] = useState('')

  return (
    <div className="app-wrapper">
      <div className="two">
        <AuthContext.Provider value={{isAuthC, setIsAuthC, IdInstanceC, setIdInstanceC, ApiTokenInstanceC, setApiTokenInstanceC}}>
          { isAuthC ? <MainScreen></MainScreen> : <LoginScreen></LoginScreen>}
        </AuthContext.Provider>
      </div>
    </div>
  )
}

export default App
