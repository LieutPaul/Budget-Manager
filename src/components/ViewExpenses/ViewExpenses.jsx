import React from "react";
import {Modal} from "react-bootstrap";
import { useBudgets } from "../../contexts/BudgetsContext";

export default function ViewExpenses(props){
    // BudgetCard.props.key has budget.id which can be used
    return(
        <Modal show={props.show} onHide={props.handleClose}>
                
                <Modal.Header closeButton>
                    <Modal.Title>Expenses for {}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                </Modal.Body>
        </Modal>
    );
}