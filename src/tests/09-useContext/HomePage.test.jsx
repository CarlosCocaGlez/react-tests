import { render, screen } from "@testing-library/react";
import { HomePage } from "../../09-useContext/HomePage";
import {UserContext} from "../../09-useContext/context/UserContext";

describe('Pruebas en el HomePage', () => {
    test('debe de mostrar el componente sin el usuario', () => {
        render(
            <UserContext.Provider value={{ user: null }}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null')
        // screen.debug();
    });

    test('debe de mostrar el componente CON el usuario', () => {

        const user = {
            id: 123,
            name: 'Charles Layet',
            email: 'example@gmail.com',
        }

        render(
            <UserContext.Provider value={{ user }}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toContain(user.name)
        // expect(preTag.innerHTML).toContain(user.id.toString())
        expect(preTag.innerHTML).toContain(`${ user.id }`)
    });
})