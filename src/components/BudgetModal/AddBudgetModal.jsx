import React from "react";
import {Form, Modal} from "react-bootstrap";
import { useBudgets } from "../../contexts/BudgetsContext";

export default function AddBudgetModal(props){
    const nameRef = React.useRef();
    const maxRef = React.useRef();
    const {addBudget} = useBudgets();

    function handleSubmit(e){
        e.preventDefault();
        addBudget({
            name : nameRef.current.value,
            max: parseFloat(maxRef.current.value)
        });
        props.handleClose();
    }

    return(
        <Modal show={props.show} onHide={props.handleClose}>
            {/* onHide is a callback that is triggered when closeButton is pressed */}
            <Form onSubmit={handleSubmit}>

                <Modal.Header closeButton>
                    <Modal.Title>New Budget</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" ref={nameRef} required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="max">
                        <Form.Label>Maximum Spending</Form.Label>
                        <Form.Control type="number" ref={maxRef} min={0} step={0.01} required/>
                    </Form.Group>

                    <div className="d-flex justify-content-end">
                        <button className="btn btn-primary" type="submit">Add</button>
                    </div>
                </Modal.Body>

            </Form>

        </Modal>
    );
}