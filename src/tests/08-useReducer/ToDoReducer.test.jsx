import { toDoReducer } from "../../08-useReducer";

describe('Pruebas en el ToDoReducer', () => {

    const initialState = [{
        id: 1,
        description: 'Demo ToDo',
        done: false,
    }];

    test('debe de regresar el estado inicial', () => {
        const newState = toDoReducer( initialState, {} );

        expect( newState ).toBe( initialState );
    });

    test('debe de agregar un ToDo', () => {
        const action = {
            type: '[ToDo] Add ToDo',
            payload: {
                id: 2,
                description: 'Nuevo toDo #2',
                done: false,
            }
        }

        const newState = toDoReducer( initialState, action );

        expect( newState.length ).toBe( 2 );
        expect( newState ).toContain( action.payload );
    });

    test('debe de eliminar un ToDo', () => {
        const action = {
            type: '[ToDo] Remove ToDo',
            payload: 1,
        }

        const newState = toDoReducer( initialState, action );

        expect( newState.length ).toBe( 0 );
    });

    test('debe de eliminar un ToDo', () => {
        const action = {
            type: '[ToDo] Done ToDo',
            payload: 1,
        }

        const newState = toDoReducer( initialState, action );
        expect( newState[0].done ).toBe( true );

        const newState2 = toDoReducer( newState, action );
        expect( newState2[0].done ).toBe( false );
    });
})