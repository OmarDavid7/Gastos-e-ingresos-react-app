import { useState } from "react";
import { useGlobalState } from "../../context/GlobalState";

export const TransactionForm = () => {

    const {addTransaction} = useGlobalState();
   const [description,setDescription] = useState("")
   const [amount,setAmount] = useState(0)

const onSubmit = (e)=>{
    e.preventDefault(e)
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount: + amount,// recibe un valor en string y lo convierte en un numero
    })
    setAmount(0),
    setDescription("")
 
}

  return (
    <>
      <div>
        <form action="" onSubmit={onSubmit}>
          <input value={description} type="text" placeholder="ingresa una descripcion" 
          onChange={(e)=>setDescription(e.target.value)} className="bg-zinc-600 tex-white px-3 py-2 rounded-lg block mb-2 w-9/12" />
          <input value={amount} className="bg-zinc-600 tex-white px-3 py-2 rounded-lg block mb-2 w-9/12" type="number" placeholder="00.00" step="0.01" onChange={(e)=>setAmount(e.target.value)}/>
          <button className="bg-indigo-700 text-white px-3 py-2 rounded-lg block mb-2 w-9/12">Agrega una transaccion</button>
        </form>
      </div>
    </>
  );
};
