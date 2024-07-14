import React from 'react';
import { Link } from 'react-router-dom';
import AppRoutes from '../routes';

function Navbar() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/helloworld">Hello World</Link>
                    </li>
                    <li>
                        <Link to="/count">Count</Link>
                    </li>
                    <li>
                        <Link to="/forms">Forms</Link>
                    </li>
                </ul>
            </nav>

            <AppRoutes/>
        </div>
    );
};

export default Navbar;
