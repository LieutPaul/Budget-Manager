import React from 'react';
import './App.css';
import BudgetCard from './components/BudgetCard/BudgetCard';
import AddBudgetModal from './components/BudgetModal/AddBudgetModal';
import AddExpenseModal from './components/ExpenseModal/AddExpenseModal'
import { useBudgets } from './contexts/BudgetsContext';
function App() {
  const [showBudgetModal,setShowBudgetModal] = React.useState(false);
  const [showExpenseModal,setShowExpenseModal] = React.useState(false);
  const {budgets,getBudgetExpenses} = useBudgets();

  return (
    <>
      <div className="container" style={{"marginTop":"15px"}}>
        <div className="row heading">

          <div className="col-6">
              <h1>Budgets</h1>
          </div> 
          
          <div className="col-6">
              <div className="row">
                <div className="col-6">
                  {/* Add media query for font size of buttons */}
                  <button className="btn btn-primary" onClick={() => setShowBudgetModal(true)}>Add Budget</button> 
                </div>
                <div className="col-6">
                  <button className="btn btn-outline-primary" onClick={() => setShowExpenseModal(true)}>Add Expense</button>
                </div>
              </div>
          </div>
        </div>  
        <div className="cards">

          {budgets.map((budget)=>{

            let amount=0;
            const expenses = getBudgetExpenses(budget.id);
            console.log(expenses)
            for(var i=0;i<expenses.length;i++){
              amount+=expenses[i].amount
            }

            return(
              <BudgetCard key={budget.id} name={budget.name} amount={amount} max={budget.max}/> //budget.id is being set in addBudget function in useBudgets()
            )

          })}
        </div>
      </div>
      <AddBudgetModal show={showBudgetModal} handleClose={()=> setShowBudgetModal(false)}/>
      <AddExpenseModal show={showExpenseModal} handleClose={()=> setShowExpenseModal(false)}/>
    </>
  );
}

export default App;
