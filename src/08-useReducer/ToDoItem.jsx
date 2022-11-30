
export const ToDoItem = ({ state, onDeleteToDo, onToogleToDo }) => {
    const {
        description,
        done,
        id,
    } = state;

    return (
        <li key={ id } className='list-group-item d-flex justify-content-between'>
            <span
                className={ `align-self-center ${ done ? 'text-decoration-line-through' : '' }` }
                onClick={ () => onToogleToDo(id) }
                aria-label='span'
            >
                { description }
            </span>
            <button
                className='btn btn-danger'
                onClick={ () => onDeleteToDo(id) }
            >
                Borrar
            </button>
        </li>
    );
};
