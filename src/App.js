import React from 'react';
import './App.css';
import BudgetCard from './components/BudgetCard/BudgetCard';
import AddBudgetModal from './components/BudgetModal/AddBudgetModal';
import { useBudgets } from './contexts/BudgetsContext';
function App() {
  const [showModal,setShowModal] = React.useState(false);
  const {budgets} = useBudgets();

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
                  <button className="btn btn-primary" onClick={() => setShowModal(true)}>Add Budget</button> 
                </div>
                <div className="col-6">
                  <button className="btn btn-outline-primary">Add Expense</button>
                </div>
              </div>
          </div>
        </div>  
        <div className="cards">
          {budgets.map((budget)=>{
            return(
              <BudgetCard key={budget.id} name={budget.name} amount={0} max={budget.max}/> //budget.id is being set in addBudget function in useBudgets()
            )
          })}
        </div>
      </div>
      <AddBudgetModal show={showModal} handleClose={()=> setShowModal(false)}/>
    </>
  );
}

export default App;
