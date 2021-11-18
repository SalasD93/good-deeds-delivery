import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import { Button, Form } from 'semantic-ui-react';
import { FormContainer, FormH2, LoginCard } from './PageStyles';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
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
      <Link to="/signup"><Button>← Go to Signup</Button></Link>

      <FormContainer>
        <LoginCard>
          <FormH2>LOGIN</FormH2>
          <Form onSubmit={handleFormSubmit}>
            <Form.Field>
              <label htmlFor="email">Email address:</label>
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
            {error ? (
              <div>
                <p>The provided credentials are incorrect</p>
              </div>
            ) : null}
            <div>
              <Button type="submit">Submit</Button>
            </div>
          </Form>
        </LoginCard>
      </FormContainer>
    </div>
  );
}

export default Login;