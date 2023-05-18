import { createContext, SetStateAction, Dispatch } from 'react';

interface IAuthContext {
  isAuthC: boolean;
  setIsAuthC: Dispatch<SetStateAction<boolean>>;
  IdInstanceC: string
  setIdInstanceC: Dispatch<SetStateAction<string>>;
  ApiTokenInstanceC: string
  setApiTokenInstanceC: Dispatch<SetStateAction<string>>;
}

const AuthContext = createContext<IAuthContext>({
  isAuthC: false,
  setIsAuthC: () => {},
  IdInstanceC: '',
  setIdInstanceC: () => {},
  ApiTokenInstanceC: '',
  setApiTokenInstanceC: () => {}
})

export default AuthContext