import { Routes, Route } from 'react-router-dom';
import { Todo } from '../Pages/Todos';
import { User } from '../Pages/User';
import { Login } from '../Pages/Login';
import { Signup } from '../Pages/Singup';

export const AllRoutes = () => {
return(
    <Routes>
        <Route path='/' element={<Todo/>}></Route>
        <Route path='/user' element={<User/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>

    </Routes>
);
};
