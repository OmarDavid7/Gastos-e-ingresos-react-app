import { VictoryPie, VictoryLabel } from "victory";
import { useGlobalState } from "../../context/GlobalState";

export function ExpenseChart() {
  const { transactions } = useGlobalState();
    
  const totalIncomes = transactions
    .filter((item) => item.amount > 0)
    .reduce((acc, transac) => (acc += transac.amount), 0);

  const totalExpenses = transactions
    .filter((item) => item.amount < 0)
    .reduce((acc, transac) => (acc += transac.amount), 0) * -1;

    const totalExpensesPercentaje = Math.round((totalExpenses/totalIncomes)*100)
    const totalIncomePercentaje = 100 - totalExpensesPercentaje

  return (
    <>
      <VictoryPie
        colorScale={["#e74c3c", "#2ecc71"]}
        data={[
          { x: "Expenses", y: totalExpensesPercentaje },
          { x: "Income", y: totalIncomePercentaje    },
        ]}
        animate={{
          duration: 200,
        }}
        labels={({ datum }) => `${datum.y}%`}
        labelComponent={<VictoryLabel angle={45} style={{ fill: "white" }} />}
      />
    </>
  );
}
