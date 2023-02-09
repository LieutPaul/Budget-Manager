import {Form, Modal} from "react-bootstrap";

export default function AddBudgetModal(props){
    function handleSubmit(e){
        e.preventDefault();
    }
    return(
        <Modal show={props.show} onHide={props.handleClose}>
            <Form onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>New Budget</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="max">
                        <Form.Label>Maximum Spending</Form.Label>
                        <Form.Control type="number" min={0} step={0.01} required/>
                    </Form.Group>

                    <div className="d-flex justify-content-end">
                        <button className="btn btn-primary" type="submit">Add</button>
                    </div>
                </Modal.Body>
            </Form>
        </Modal>
    );
}