import {render, screen} from "@testing-library/react";
import {ToDoApp} from "../../08-useReducer/ToDoApp";
import {useToDo} from "../../hooks";

jest.mock('../../hooks/useToDo');

describe('Pruebas en el ToDoApp', () => {

    useToDo.mockReturnValue({
        handleDeleteToDo: jest.fn(),
        handleNewToDo: jest.fn(),
        onToogleToDo: jest.fn(),
        pendingToDosCount: 1,
        state: [
            { id: 1, description: 'ToDo #1', done: false },
            { id: 2, description: 'ToDo #2', done: true }
        ],
        toDosCount: 2,
    });

    test('debe de mostrar el componente correctamente', () => {
        render( <ToDoApp /> );
        screen.debug();
        expect( screen.getByText('ToDo #1') ).toBeTruthy();
        expect( screen.getByText('ToDo #2') ).toBeTruthy();
        expect( screen.getByRole('textbox') ).toBeTruthy();
    });
})