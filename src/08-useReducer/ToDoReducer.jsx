
export const toDoReducer = ( initialState = [], action ) => {
    switch (action.type) {
        case '[ToDo] Add ToDo':
            return [ ...initialState, action.payload ];

        case '[ToDo] Remove ToDo':
            return initialState.filter( toDo => {
                console.log(toDo, 'toDo')
                return toDo.id !== action.payload
            } );

        case '[ToDo] Done ToDo':
            return initialState.map( toDo => {
                if (toDo.id === action.payload) {
                    return {
                        ...toDo,
                        done: !toDo.done
                    }
                }

                return toDo;
            });

        default:
            return initialState;
    }
}
