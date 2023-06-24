import { createContext, useContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

//agarramos y creamos un custom hook para utilizar el context y el use context
//para no tener que llamar a los dos en los demas componentes 

export const Context = createContext();
export const useGlobalState = ()=>{
   const context = useContext(Context)
   return context
}

const initialState = {
  transactions: []
}

export const GlobalProvider = ({ children }) => {

  const [state, dispatch] = useReducer(AppReducer,initialState, 
    ()=>{//permite cambiar el valor
      const localData = localStorage.getItem('transactions')
     return localData ? JSON.parse(localData): initialState
    });

    useEffect(()=>{
      localStorage.setItem('transactions', JSON.stringify(state))
    },[state])//cuando el estado cambie, lo guardamos dentro del local storage

  //funcion agregar
  
  const addTransaction = (transaction)=>{
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    })
  }

  //funcion eliminar

  const deleteTransaction = (id)=>{
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    })
  }

  return <Context.Provider value={{
    transactions: state.transactions,
    addTransaction,
    deleteTransaction

  }}>{children}
  
  
  </Context.Provider>;
};
