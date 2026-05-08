import React from 'react';
import axios from 'axios';

export const Login = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();

        axios
            .post('http://localhost:7300/login', {
                email,
                password,
            })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="email"></label>

            <input
                id="email"
                type="email"
                placeholder="Enter your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password"></label>

            <input
                id="password"
                type="password"
                placeholder="Enter your password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">Login</button>
        </form>
    );
};