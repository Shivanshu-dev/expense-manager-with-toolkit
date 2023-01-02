import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const CreateExpenseForm = () => {
  return (
    <>
         <Card style={{ width: '18rem' }}>
         <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Expense Name</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Amount</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Date</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
       
      </Form.Group>
      <Button variant="primary" type="submit">
        Save Expense
      </Button>
      <Button variant="danger" type="button">
        Clear Expense
      </Button>
    </Form>
    </Card>
    </>
  )
}

export default CreateExpenseForm;