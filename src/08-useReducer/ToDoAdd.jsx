import {useForm} from "../hooks";

export const ToDoAdd = ({ onNewToDo }) => {

    // const [tarea, setTarea] = useState({
    //     id: new Date().getTime() * 3,
    //     description: '',
    //     done: false,
    // });
    //
    //
    // const onInputChange = ({ target }) => {
    //     setTarea({ ...tarea, description: target.value });
    // }

    const {
        description,
        onInputChange,
        onResetForm,
    } = useForm({
        description: '',
    });

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (description?.length <= 1) return;

        const newToDo = {
            description,
            done: false,
            id: new Date().getTime() * 3,
        }

        onNewToDo(newToDo);
        onResetForm();
    }

    return (
        <form onSubmit={ onFormSubmit }>
            <input
                className='form-control'
                name='description'
                onChange={ onInputChange }
                placeholder='Que hay que hacer?'
                type='text'
                value={ description }
            />
            <button
                className='btn btn-outline-primary mt-2'
                type='submit'
            >
                Agregar
            </button>
        </form>
    );
};
