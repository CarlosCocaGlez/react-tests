import {fireEvent, render, screen} from "@testing-library/react";
import {ToDoItem} from "../../08-useReducer/ToDoItem";

describe('Pruebas en el ToDoItem', () => {
    const toDo = {
        id: 1,
        description: 'Piedra del Alma',
        done: false,
    };

    const onDeleteToDoMock = jest.fn();
    const onToggleToDoMock = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks()
    })

    test('debe de mostrar el ToDo pendiente de completar', () => {
        render(
            <ToDoItem
                state={ toDo }
                onToogleToDo={ onToggleToDoMock }
                onDeleteToDo={ onDeleteToDoMock }
            />
        );

        const liElement = screen.getByRole('listitem');
        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between')

        const spanElement = screen.getByLabelText('span');
        console.log(spanElement.className, 'spanElement')
        expect( spanElement.className ).toContain('align-self-center');
        expect( spanElement.className ).not.toContain('text-decoration-line-through');
    });

    test('debe de mostrar el ToDo completado', () => {
        toDo.done = true;

        render(
            <ToDoItem
                state={ toDo }
                onToogleToDo={ onToggleToDoMock }
                onDeleteToDo={ onDeleteToDoMock }
            />
        );

        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className ).toContain('text-decoration-line-through');
    });

    test('span debe de llamar el ToggleToDo cuando se hace click', () => {
        render(
            <ToDoItem
                state={ toDo }
                onToogleToDo={ onToggleToDoMock }
                onDeleteToDo={ onDeleteToDoMock }
            />
        );

        const spanElement = screen.getByLabelText('span');
        fireEvent.click( spanElement );

        expect( onToggleToDoMock ).toHaveBeenCalledWith( toDo.id );
    });

    test('el button debe de llamar el deleteTodo', () => {
        render(
            <ToDoItem
                state={ toDo }
                onToogleToDo={ onToggleToDoMock }
                onDeleteToDo={ onDeleteToDoMock }
            />
        );

        const deleteButton = screen.getByRole( 'button', { name: 'Borrar' } );
        fireEvent.click( deleteButton );

        expect( onDeleteToDoMock ).toHaveBeenCalledWith( toDo.id );
    });
})