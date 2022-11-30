

const initialState = [{
    id: 1,
    toDo: 'Recolectar la piedra del Alma',
    done: false,
}];


const toDoReducer = ( state = initialState, action = {} ) => {

    if (action.type === '[TODO] addToDo') {
        return [ ...state, action.payload ]
    }

    return state;
}

let toDos = toDoReducer();

const newTodo = {
    id: 2,
    toDo: 'Recolectar la piedra del Poder',
    done: false,
}

const addToDoAction = {
    type: '[TODO] addToDo',
    payload: newTodo
}

toDos = toDoReducer( toDos, addToDoAction )

console.log(toDos)


