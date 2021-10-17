import FilteredExpense from '../FilteredExpenses/FilteredExpenses';
import Card from '../UI/Card';
import './Expenses.css';

import { useState } from 'react';
import ExpensesList from './ExpensesList';

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <FilteredExpense
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expense;
