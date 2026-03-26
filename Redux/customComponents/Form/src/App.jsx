import { Button } from './Components/button';
import { Form } from './Components/Form';
import './App.css'

export const App = () => {
  const formData = [
    {
      type: 'text',
      name: 'userName',
      placeholder: 'enter your name...',
      id: 'username',
    },
    {
      type: 'email',
      name: 'userEmail',
      placeholder: 'enter your email...',
      id: 'useremail',
    },
    {
      type: 'password',
      name: 'userPassword',
      placeholder: 'enter your password...',
      id: 'userpassword',
    },

    {
      type: 'tel',
      name: 'userPhone',
      placeholder: 'enter your phone...',
      id: 'userphone',
    },
    {
      type: 'radio',
      name: 'userGender',
      // placeholder: 'enter your phone...',
      id: 'usergender',
    },
    {
      type: 'textArea',
      name: 'userAddress',
      placeholder: 'enter your address...',
      id: 'useraddress',
    },
  ];

  return (
    <>
      <Form data={formData} />
      {/* <Button
        style={{ padding: '0.5rem 2rem', background: 'red' }}
        value={'login'}
      />
      <Button
        style={{ padding: '0.5rem 2rem', background: 'green' }}
        value={'signin'} 
      />
      */}
    </>
  );
};