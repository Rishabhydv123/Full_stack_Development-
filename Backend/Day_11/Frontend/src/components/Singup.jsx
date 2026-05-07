import React from 'react';
import axios from 'axios';

export const Signup = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();

        axios
            .post('http://localhost:7300/signup', {
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
    );
};