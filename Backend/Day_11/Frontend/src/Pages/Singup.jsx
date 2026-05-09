import React from 'react';
import { useLocation } from 'react-router-dom';

import { Api } from '../Utils/Api';

export const Signup = () => {
    const location = useLocation();

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    console.log('🚀 ~ location:', location);

    const handeFormSubmit = (e) => {
        e.preventDefault();

        Api.post(location.pathname, { email, password })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };

    return (
        <>
            <h1>Signup</h1>

            <form onSubmit={handeFormSubmit}>
                <label htmlFor="email"></label>

                <input
                    id="email"
                    type="text"
                    placeholder="enter your email....."
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="password"></label>

                <input
                    id="password"
                    type="text"
                    placeholder="enter your password....."
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">submit</button>
            </form>
        </>
    );
};