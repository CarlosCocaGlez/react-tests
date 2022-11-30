import { Route, Routes, Navigate } from 'react-router-dom';
import { HomePage } from "./HomePage";
import { AboutPage } from "./AboutPage";
import { LoginPage } from "./LoginPage";
import { Navbar } from "./Navbar";
import { UserProvider } from "./context/UserProvider";

export const MainApp = () => {
    return (
        <UserProvider>
            <Navbar />
            <hr/>

            <Routes>
                <Route path='/' element={ <HomePage /> } />
                <Route path='/about' element={ <AboutPage /> } />
                <Route path='/login' element={ <LoginPage /> } />

                {/*<Route path='/*' element={ <LoginPage /> } />*/}
                <Route path='/*' elemeent={ <Navigate to='/about' /> } />
            </Routes>

        </UserProvider>
    );
};
