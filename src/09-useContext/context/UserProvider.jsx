import { UserContext } from "./UserContext";
import {useState} from "react";

// const user = {
//     id: 123,
//     name: 'Charles Layet',
//     email: 'example@gmail.com',
// }

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState();

    return (
        <UserContext.Provider value={{ user, setUser }}>
            { children }
        </UserContext.Provider>
    );
};