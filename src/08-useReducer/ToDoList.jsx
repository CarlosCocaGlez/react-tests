import { ToDoItem } from "./ToDoItem";

export const ToDoList = ({ state = [], onDeleteToDo, onToogleToDo }) => {
    return (
        <ul className='list-group'>
            {
                state.map( state => (
                    <ToDoItem
                        key={ state.id }
                        onDeleteToDo={ onDeleteToDo }
                        onToogleToDo={ onToogleToDo }
                        state={ state }
                    />
                ))
            }
        </ul>
    );
};
