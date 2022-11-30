import { useState } from "react";
import {Message} from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        email: 'charles@charles.com',
        username: 'charles',
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value,
        });
    }

    return (
        <>
            <h1>Formulario Simple</h1>
            <hr/>

            <input
                className='form-control'
                name='username'
                placeholder='Username'
                type='text'
                value={ username }
                onChange={ onInputChange }
            />

            <input
                className='form-control mt-2'
                name='email'
                placeholder='example@example.com'
                type='email'
                value={ email }
                onChange={ onInputChange }
            />

            {
                username === 'charles2' &&
                <Message/>
            }
        </>
    );
};
