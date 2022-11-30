import {MultipleCustomHooks} from "../../03-Examples/MultipleCustomHooks";
import {fireEvent, render, screen} from "@testing-library/react";
import {useCounter, useFetch} from "../../hooks";

jest.mock('../../hooks/useFetch')
jest.mock('../../hooks/useCounter')

describe('Pruebas en el componente MultipleCustomHooks', () => {

    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement,
    });

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('debe de mostrar el componente por defecto', () => {
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null,
        });

        render( <MultipleCustomHooks /> );
        expect( screen.getByText('Loading...') );
        expect( screen.getByText('BreakingBad Quotes') );

        const nextButton = screen.getByRole('button', { name: 'Next quote'})
        expect( nextButton.disabled ).toBeTruthy();
    });

    test('debe de mostrar un Quote', () => {
        useFetch.mockReturnValue({
            data: [{ author: 'Charles', quote: 'Hola Mundo' }],
            isLoading: false,
            hasError: null,
        });

        render( <MultipleCustomHooks />);

        expect( screen.getByText('Hola Mundo') ).toBeTruthy();
        expect( screen.getByText('Charles') ).toBeTruthy();

        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        expect(nextButton.disabled).toBeFalsy();
    });

    test('debe de llamar la funcion de incrementar', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'Charles', quote: 'Hola Mundo' }],
            isLoading: false,
            hasError: null,
        });

        render( <MultipleCustomHooks /> );

        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        fireEvent.click( nextButton );

        expect(mockIncrement).toHaveBeenCalled();
    });
})