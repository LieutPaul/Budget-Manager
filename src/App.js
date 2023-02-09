import './App.css';
import BudgetCard from './components/BudgetCard/BudgetCard';
import AddBudgetModal from './components/BudgetModal/AddBudgetModal';
function App() {
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
                  <button className="btn btn-primary" >Add Budget</button> 
                </div>
                <div className="col-6">
                  <button className="btn btn-outline-primary">Add Expense</button>
                </div>
              </div>
          </div>
        </div>  
        <div className="cards">
          <BudgetCard name="Entertainment" amount={700} max={1000}/>
          <BudgetCard name="Entertainment" amount={200} max={1000}/>
          <BudgetCard name="Entertainment" amount={200} max={1000}/>
          <BudgetCard name="Entertainment" amount={200} max={1000}/>
          <BudgetCard name="Entertainment" amount={200} max={1000}/>
        </div>
      </div>
      <AddBudgetModal show={false}/>
    </>
  );
}

export default App;
