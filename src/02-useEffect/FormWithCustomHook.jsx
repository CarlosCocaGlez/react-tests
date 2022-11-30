import { useForm } from "../hooks";

export const FormWithCustomHook = () => {

    const { formState, onInputChange, onResetForm } = useForm({
        email: '',
        username: '',
        password: '',
    })

    const { email, username, password } = formState;

    return (
        <>
            <h1>Formulario con Custom Hook</h1>
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

            <input
                className='form-control mt-2'
                name='password'
                placeholder='Contraseña'
                type='password'
                value={ password }
                onChange={ onInputChange }
            />

            <button onClick={ onResetForm } className="btn btn-primary mt-2">Borrar</button>
        </>
    );
};
