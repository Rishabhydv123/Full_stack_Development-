import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    const links = [
        { path: '/', title: 'Todo' },
        { path: '/user', title: 'Users' },
        { path: '/login', title: 'Login' },
        { path: '/signup', title: 'Signup' },
    ];

    const defaultStyle = {
        color: 'white',
    };

    const activeStyle = {
        color: 'tomato',
    };

    return (
        <>
            <div
                style={{
                    border: '1px solid red',
                    padding: '10px',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    width: '80%',
                    margin: 'auto',
                    textDecoration: 'none',
                    background: '#000',
                }}
            >
                {links.map((data) => {
                    return (
                        <NavLink
                            style={({ isActive }) => {
                                return isActive
                                    ? activeStyle
                                    : defaultStyle;
                            }}
                            key={data.path}
                            to={data.path}
                            end
                        >
                            {data.title}
                        </NavLink>
                    );
                })}
            </div>
        </>
    );
};