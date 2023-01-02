import React , {useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { useDispatch } from 'react-redux';
import { registerUser } from '../slices/userSlice';

const SignUp = () => {
const [name , setName] = useState('');
const [email , setEmail] = useState('');
const [password , setPassword] = useState('');

const dispatch = useDispatch();

const handleRegister = (e)=>{
e.preventDefault();
console.log(name , email , password);
dispatch(registerUser(name , email , password))
}

useEffect(()=>{

},[])

  return (
    <>
     <Card style={{ width: '24rem' }}>
     <Alert variant={'primary'}>
          This is a alert—check it out!
        </Alert>
     <Form onSubmit={handleRegister}>
     <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Enter your Name</Form.Label>
        <Form.Control type="text" required={true} value={name} onChange={(e)=> setName(e.target.value)} placeholder="Enter Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={email} required={true} onChange={(e)=> setEmail(e.target.value)} placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control required={true} type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Password" />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
    </Card>
    </>
  )
}

export default SignUp