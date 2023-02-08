import { currencyFormatter } from "../../utils";
import './BudgetCard.css'
export default function BudgetCard(props){
    
    const classNames=[];
    
    if(props.amount>props.max){
        classNames.push("bg-danger","bg-opacity-10");
    }else if(props.amount>props.max/2){
        classNames.push("bg-warning","bg-opacity-10")
    }else{
        classNames.push("bg-light");
    }

    return(
        <div className={"card " + classNames.join(" ")}>
            <div className="card-body">
                <div className="card-title d-flex justify-content-between align-items-baseline fw-normal ">
                    {/* me = margin-right and ms = margin-left */}
                    <div className="me-2"><span className="fs-5">{props.name}</span></div>
                    <div className="d-flex align-items-baseline me-1">
                    <span className="fs-5">{currencyFormatter.format(props.amount)}</span>
                        / 
                        <span className="text-muted fs-6 ms-1">{currencyFormatter.format(props.max)}</span>
                    </div>
                </div>
            </div>

            <div className="progress mb-3 me-2 ms-2">
                <div className={getProgressBarVariant(props.amount,props.max)} role="progressbar" style={{"width": (props.amount/props.max) * 100+"%"}}></div>
            </div>

            <div className="container">
                <div className="row mb-3 me-2">
                    <div className="col-4">

                    </div>
                    <div className="col-4">
                        <button className="btn btn-outline-primary">
                            <span style={{"overflowX":"scroll"}}>Add Expense</span>
                        </button>
                    </div>
                    <div className="col-4">
                        <button className="btn btn-outline-secondary">View Expenses</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function getProgressBarVariant(amount,max){
    const ratio=amount/max
    if(ratio < 0.5){
        return "progress-bar"
    }else if(ratio < 0.75){
        return "progress-bar bg-warning"
    }else{
        return "progress-bar bg-danger"
    }
}