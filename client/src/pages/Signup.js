import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import { Button, Form } from 'semantic-ui-react';
import { FormContainer, FormH2, SignupCard } from './PageStyles';
import redirectToLogin from '../utils/AuthenticationKroger';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div>
      <Link to="/login"><Button>← Go to Login</Button></Link>

      <FormContainer>
        <SignupCard>
          <FormH2>SIGNUP</FormH2>
          <Form onSubmit={handleFormSubmit}>
            <Form.Field>
              <label htmlFor="firstName">First Name:</label>
              <input
                placeholder="First"
                name="firstName"
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="lastName">Last Name:</label>
              <input
                placeholder="Last"
                name="lastName"
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="email">Email:</label>
              <input
                placeholder="youremail@test.com"
                name="email"
                type="email"
                id="email"
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="pwd">Password:</label>
              <input
                placeholder="******"
                name="password"
                type="password"
                id="pwd"
                onChange={handleChange}
              />
            </Form.Field>
            <div>
              <Button type="submit" onClick={redirectToLogin}>SIGNUP</Button>
            </div>
          </Form>
        </SignupCard>
      </FormContainer>
    </div>
  );
}

export default Signup;