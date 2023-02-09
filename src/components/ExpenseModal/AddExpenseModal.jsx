import React from "react";
import {Form, Modal} from "react-bootstrap";
import { useBudgets } from "../../contexts/BudgetsContext";

export default function AddExpenseModal(props){
    const descriptionRef = React.useRef();
    const amountRef = React.useRef();
    const budgetIDRef = React.useRef();

    const {addExpense,budgets} = useBudgets();

    function handleSubmit(e){
        e.preventDefault();
        addExpense({
            description : descriptionRef.current.value,
            amount: parseFloat(amountRef.current.value),
            budget : budgetIDRef.current.value
        });
        props.handleClose();
    }

    return(
        <Modal show={props.show} onHide={props.handleClose}>
            {/* onHide is a callback that is triggered when closeButton is pressed */}
            <Form onSubmit={handleSubmit}>

                <Modal.Header closeButton>
                    <Modal.Title>New Expense</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" ref={descriptionRef} required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="amount">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control type="number" ref={amountRef} min={0} step={0.01} required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="budgetID">
                        <Form.Label>Budget</Form.Label>
                        <Form.Select defaultValue={props.defaultBudgetID} ref={budgetIDRef} required>
                       
                            {budgets.map((budget)=>(
                                <option key={budget.id} value={budget.id}>{budget.name}</option>
                            ))
                            }
                        </Form.Select>
                    </Form.Group>

                    <div className="d-flex justify-content-end">
                        <button className="btn btn-primary" type="submit">Add</button>
                    </div>
                </Modal.Body>

            </Form>

        </Modal>
    );
}