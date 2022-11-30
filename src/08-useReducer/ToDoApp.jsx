import { ToDoAdd, ToDoList } from './';
import { useToDo } from '../hooks';

export const ToDoApp = () => {

    const {
        handleDeleteToDo,
        handleNewToDo,
        onToogleToDo,
        pendingToDosCount,
        state,
        toDosCount,
    } = useToDo();

    return (
        <>
            <h1>ToDoApp { toDosCount }, <small>pendientes: { pendingToDosCount }</small></h1>
            <hr/>

            <div className='row'>
                <div className='col-7'>
                    <ToDoList
                        onDeleteToDo={ handleDeleteToDo }
                        onToogleToDo={ onToogleToDo }
                        state={ state }
                    />
                </div>
                <div className="col-5">
                    <h4>Agregar ToDo</h4>
                    <hr/>
                    <ToDoAdd onNewToDo={ handleNewToDo } />
                </div>
            </div>

        </>
    );
};
