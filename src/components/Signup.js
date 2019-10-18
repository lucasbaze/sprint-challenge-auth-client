import React from 'react';
import { useForm } from '../hooks';
import { Form } from 'semantic-ui-react';
import { axiosWithAuth } from '../utils';

export const Signup = ({ history }) => {
    const submitHandler = async values => {
        let register = await axiosWithAuth().post('/auth/register', {
            ...values,
        });
        if (register) {
            history.push('/jokes');
        } else {
            console.log('There was an error!');
        }
    };

    const [values, handleChange, handleSubmit] = useForm(
        { email: '', password: '' },
        submitHandler
    );

    return (
        <>
            <h2>Signup Here</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <input
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                    />
                    <Form.Button type="submit" size="large" color="blue">
                        Submit
                    </Form.Button>
                </Form.Field>
            </Form>
        </>
    );
};
