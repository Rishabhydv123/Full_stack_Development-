import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { LOGIN_SUCESS,LOGIN_REQUEST,LOGIN_FAILUER } from "../Redux/Action";

import axios from "axios";

export const Login =()=>{
    const dispatch = useDispatch();
    const value = useSelector((store)=>store.isLoading);
    const [userValue, setUserValue] =React.useState({
        email:'',
        password:'',
    });

    const handleChange =(e)=>{
        const {name , value}= e.target;

        setUserValue((prev)=>{
            return{
                ...prev,
                [name]: value,
            };
        });
    };

    const handleFormSubmit =(e)=>{
        e.preventDefault();

        dispatch({type:LOGIN_REQUEST});
        axios
        .post('https://reqres.in/api/login', userValue, {
           headers:
         {'x-api-key': 'reqres_e9afee0fc80e48fea658c39df3124409'},
        })
        .then((res)=> 
         dispatch({
            type: LOGIN_SUCESS,
            payload:{users:userValue, token: res.data.token},
         }),
        )
        .catch((err)=>{
            console.log(err);

            dispatch({type:LOGIN_FAILUER});
        });
    };

    if(value){
        return <h1>Loading....</h1>
    }

    return(
        <>
        <div>
            <form onSubmit={handleFormSubmit}
            style={{display:'flex', alignItems:'center', flexDirection:'column', height:'30vh',gap:'1rem'}}>
            <div>
                <label htmlFor="">email</label>{' '}
                <input type="text" name="email" onChange={(e)=>handleChange(e)}/>
            </div>
            <div>
                <label htmlFor="">Password</label> { ' '}
                <input type="text" name="password" onChange={(e)=>handleChange(e)}/>
            </div>
            <button type="submit">Submit</button>
            </form>

        </div>
        </>
    )
}