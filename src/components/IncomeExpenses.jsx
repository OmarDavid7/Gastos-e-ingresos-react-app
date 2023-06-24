import { useGlobalState } from "../context/GlobalState";

export function IncomeExpenses() {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((tran) => tran.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, sum) => (acc += sum), 0)
    .toFixed(2)


   const expenses = amounts
                    .filter((item)=> item < 0)
                    .reduce((acc,res) => acc+=res, 0)
                    .toFixed(2) * -1

  return (
    <>
      <div className="flex justify-between my-2">
        <h4>Income</h4>
        <p>{income}</p>
      </div>
      <div className="flex justify-between my-2">
        <h4>Expenses</h4>
        <p>{expenses}</p>
      </div>
    </>
  );
}
