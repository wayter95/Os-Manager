import React,{useContext, createContext,useState,useCallback} from 'react';
import api from './api';

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface AuthState{
   user:User;
   token:string;
}

interface User {
  id:string;
  name: string;
  avatar_url:string
  codigo: Codigo
}

interface Codigo {
  id:string;
  codigo: string;
  idAdmin:boolean
}
export interface ISignInCredentials {
  email: string;
  password: string;
}
interface AuthContextData {
  user:User;
  signIn(data: ISignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext =  createContext<AuthContextData>({} as AuthContextData)

const [data, setData] = useState<AuthState>(() => {
  const token = localStorage.getItem('@OsManager:token');
  const user = localStorage.getItem('@OsManager:user');
  
  if(token && user) {
    return {
      token,
      user:JSON.parse(user),
    }
  }
  return {} as AuthState;
});

const signIn = useCallback(
  async ({email, password}: ISignInCredentials) => {
    try {
      const response = await api.post<AuthState>('',{
        email,
        password,
      });
      const { user, token} = response.data;

      localStorage.setItem('@OsManager:token',token);
      localStorage.setItem('@OsManager:user',JSON.stringify(user));

      setData({user,token});
    }catch (err) {
      toast.error('Usuario ou senha incorretos',{
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 8000
    });
    }
  },
  []
)

const signOut = useCallback(() => {
  localStorage.removeItem('@OsManager:token');
  localStorage.removeItem('@OsManager:user');

  setData({} as AuthState);
},[]);


function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  
  if(!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
}

export {AuthContext,useAuth}