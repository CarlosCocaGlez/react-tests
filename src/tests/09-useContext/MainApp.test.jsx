import {render, screen} from "@testing-library/react";
import { MainApp } from "../../09-useContext/MainApp";
import { MemoryRouter } from "react-router-dom";

describe('Pruebas en el MainApp', () => {
    test('debe de mostrar el HomePage', () => {
        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        );

        expect(screen.getByText('HomePage')).toBeTruthy();
    });

    test('debe de mostrar el LoginPage', () => {
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        );

        expect(screen.getByText('LoginPage')).toBeTruthy();

        const anchorElement = screen.getByLabelText('Login');
        expect( anchorElement.className ).toContain('active')
        // console.log(screen.getBy('page'), 'ola')
    });
})