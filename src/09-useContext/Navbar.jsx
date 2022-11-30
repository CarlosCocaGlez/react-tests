import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark rounded-3'>
            <div className='container-fluid'>
                <Link className='navbar-brand' to='/'>UseContext</Link>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav'>
                        <NavLink
                            aria-label='Home'
                            className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }` }
                            to='/'
                        >
                            Home
                        </NavLink>
                        <NavLink
                            aria-label='About'
                            className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }` }
                            to='/about'
                        >
                            About
                        </NavLink>
                        <NavLink
                            aria-label='Login'
                            className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }` }
                            to='/login'
                        >
                            Login
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
