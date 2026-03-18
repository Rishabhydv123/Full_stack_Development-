import {Routes , Route} from 'react-router-dom';
import {Login} from '../Components/Login';
import {PageNotFound} from '../Pages/PageNotFound';
import {Home} from '../Pages/Home';
import { Todo } from '../Pages/Todo';

export const AllRoutes = ()=>{
    return(
        <Routes>
            <Route path = "/" element={<Home />}></Route>
            <Route path = "/login" element = {<Login />}></Route>
            <Route path = "/single" element></Route>
            <Route path = "*" element={<PageNotFound />}></Route>
            <Route path='/todo' element={<Todo />}></Route>
        </Routes>
    )
}