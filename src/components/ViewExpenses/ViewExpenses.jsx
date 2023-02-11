import React from "react";
import { currencyFormatter } from "../../utils";
import {Modal} from "react-bootstrap";
import { useBudgets } from "../../contexts/BudgetsContext";

export default function ViewExpenses(props){

    const {deleteExpense,deleteBudget,getBudgetExpenses} = useBudgets();
    const expenses = getBudgetExpenses(props.id);
    
    return(
        <Modal show={props.show} onHide={props.handleClose}>
                
                <Modal.Header closeButton>
                    <Modal.Title>Expenses for {props.name} &nbsp;
                    <button className="btn btn-outline-danger" onClick={()=>{
                        deleteBudget({id:props.id})
                    }}>Delete</button>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                        <div className="container-fluid">
                                {expenses.map((expense)=>{
                                    return (
                                        <div className="row mb-2" key={expense.id}>
                                                <div className="col-6" style={{"textAlign":"left"}}>
                                                    {expense.description}
                                                </div>
                                                <div className="col-6" style={{"textAlign":"right"}}>
                                                    {currencyFormatter.format(expense.amount)} <button className="btn btn-sm btn-outline-danger" onClick={()=>{
                                                        deleteExpense({id:expense.id})
                                                    }}>&times;</button>
                                                </div>
                                        </div>
                                    )
                                })}
                        </div>
                </Modal.Body>

        </Modal>
    );
}