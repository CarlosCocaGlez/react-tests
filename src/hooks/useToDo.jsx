import {useEffect, useReducer} from "react";
import {toDoReducer} from "../08-useReducer";

const initialState = [];

const init = () => {
    return JSON.parse(localStorage.getItem('toDos')) || [];
}

export const useToDo = () => {

    const [state, dispatch] = useReducer(toDoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('toDos', JSON.stringify(state));
    }, [state]);

    const handleNewToDo = (toDo) => {
        const action = {
            type: '[ToDo] Add ToDo',
            payload: toDo,
        }
        dispatch( action );
    }

    const handleDeleteToDo = (id) => {
        const action = {
            type: '[ToDo] Remove ToDo',
            payload: id,
        }
        dispatch( action );
    }

    const onToogleToDo = (id) => {
        const action = {
            type: '[ToDo] Done ToDo',
            payload: id,
        }
        dispatch( action );
    }


    const toDosCount = state.length;
    const pendingToDosCount = state.filter( toDo => !toDo.done).length;

    return {
        handleDeleteToDo,
        handleNewToDo,
        onToogleToDo,
        pendingToDosCount,
        state,
        toDosCount,
    };
};
