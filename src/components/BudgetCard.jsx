import { currencyFormatter } from "../utils";
export default function BudgetCard(props){
    return(
        <div className="card">
            <div className="card-body">
                <div className="card-title">
                    <div>{props.name}</div>
                    <div>{currencyFormatter.format(props.amount)} / {currencyFormatter.format(props.max)}</div>
                </div>
            </div>
        </div>
    );
}