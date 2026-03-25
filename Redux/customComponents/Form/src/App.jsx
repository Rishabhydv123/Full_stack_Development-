import { Button } from "./Components/button";
import { Form } from './Components/Form';

export const App() => {
  const formData =[
    {
      type: 'text',
      name: 'userName',
      placeholde: 'enter your name...',
      id: 'username'
    },
    {
      type: 'email',
      name: 'userEmail',
      placeholde: 'enter your email...',
      id: 'useremail'
    },
    {
      type: 'password',
      name: 'userPassword',
      placeholde: 'enter your password...',
      id: 'userpassword'
    },
    {
      type: 'textAres',
      name: 'userAddress',
      placeholde: 'enter your address...',
      id: 'useraddress'
    },
    {
      type: 'tel',
      name: 'userphone',
      placeholde: 'enter your phone...',
      id: 'userphone'
    },
  ];

  return (
    <>
    <Form data={formData}/>
  
    </>
  );
};