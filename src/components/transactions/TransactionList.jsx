import { useGlobalState } from "../../context/GlobalState";

export function TransactionList() {
  const { transactions, deleteTransaction } = useGlobalState();

  return (
    <>
      <h3 className="text-slate-300 text-xl font-bold w-full">Historial</h3>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id} className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center">
            <p className="text-sm">{transaction.description}</p>
           <div>
           <span>${transaction.amount}</span>
            <button
              onClick={() => {
                deleteTransaction(transaction.id);
              }}
            >
              X
            </button>
           </div>
          </li>
        ))}
      </ul>
    </>
  );
}
