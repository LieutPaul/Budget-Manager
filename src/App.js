import './App.css';
import BudgetCard from './components/BudgetCard';
function App() {
  return (
    <div className="container" style={{"marginTop":"15px"}}>
      <div className="row heading">

        <div className="col-6">
            <h1>Budgets</h1>
        </div> 
        
        <div className="col-6">
            <div className="row">
              <div className="col-6">
                <button className="btn btn-primary"><span style={{"fontSize":"15px"}}>Add Budget</span></button>
              </div>
              <div className="col-6">
                <button className="btn btn-outline-primary"><span style={{"fontSize":"15px"}}>Add Expense</span></button>
              </div>
            </div>
        </div>
      </div>  
      <div className="cards">
        <BudgetCard name="Entertainment" amount={200} max={1000}/>
      </div>

    </div>
  );
}

export default App;
