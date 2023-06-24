import { useGlobalState} from '../context/GlobalState'

export const Balance = () => {
  const {transactions} = useGlobalState();

  const amounts = transactions.map(tran=> tran.amount)

  const calcularMonto = amounts.reduce((acc,item) => (acc += item), 0).toFixed(2);

  return (
    <div className='flex justify-between'>
      <h3>Su Balance</h3>
      <h1 className='text-2xl font-bold'>${calcularMonto}</h1>
    </div>
  );  
};
