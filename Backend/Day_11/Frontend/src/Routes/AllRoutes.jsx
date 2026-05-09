// AllRoutes.jsx

import { Routes, Route } from 'react-router-dom';
import { Todos } from '../Pages/Todos';
import { User } from '../Pages/User';
import { Login } from '../Pages/login';
import { Signup } from '../Pages/Singup';

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Todos />}></Route>

            <Route path="/user" element={<User />}></Route>

            <Route path="/login" element={<Login />}></Route>

            <Route path="/signup" element={<Signup />}></Route>
        </Routes>
    );
};