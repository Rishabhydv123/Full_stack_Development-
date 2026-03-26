// import React from "react";

// export const Form = ({ data }) => {
//   const [formData, setFormData] = React.useState(() => {
//     return data.reduce((acc, curr) => {
//       acc[curr.name] = "";
//       return acc;
//     }, {});
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   console.log("🚀 ~ formData:", formData);

//   return (
//     <form>
//       {data.map((el, i) => {
//         return (
//           <div key={i}>
//             <label htmlFor={el.id}>{el.name}</label>

//             {el.type === "textarea" ? (
//               <textarea
//                 name={el.name}
//                 placeholder={el.placeholder}
//                 id={el.id}
//                 rows="4"
//                 onChange={handleChange}
//               />
//             ) : el.type === "radio" ? (
//               el.options.map((option, index) => (
//                 <label key={index} style={{ marginRight: "10px" }}>
//                   <input
//                     type="radio"
//                     name={el.name}
//                     value={option}
//                     onChange={handleChange}
//                   />
//                   {option}
//                 </label>
//               ))
//             ) : (
        
//               <input
//                 type={el.type}
//                 name={el.name}
//                 placeholder={el.placeholder}
//                 id={el.id}
//                 onChange={handleChange}
//               />
//             )}
//           </div>
//         );
//       })}
//     </form>
//   );
// };


import React from 'react';
import { Button } from './button';

/* 
{
name:"",
email:"",
pass:"",
phone:"",
addr:""
}
*/

export const Form = ({ data, button = 'submit' }) => {
  const [formData, setFormData] = React.useState(() => {
    return data.reduce((acc, curr) => {
      acc[curr.name] = '';
      return acc;
    }, {});
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log('🚀 ~ name, value:', name, value);

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let flag = false;

    for (let flag in formData) {
      if(formData[key].length > 0) {
        flag = true;
      } else {
        flag = false;
      }
    }
    if(flag) {
  localStorage.setItem('form', JSON.stringify(formData))
} else{
  alert("Please fill the form correcr way");
}
  };



  console.log('🚀 ~ formData:', formData);

  return (
    <>
      <form>
        {data.map((el, i) => {
          return (
            <div key={i + 1}>
              <label htmlFor={el.id}>{el.name} </label>
              {el.type === 'textArea' ? (
                <textarea
                  name={el.name}
                  placeholder={el.placeholder}
                  id={el.id}
                  rows="10"
                  cols="50"
                  onChange={handleChange}
                ></textarea>
              ) : (
                <input
                  type={el.type}
                  name={el.name}
                  placeholder={el.placeholder}
                  id={el.id}
                  onChange={handleChange}
                />
              )}
            </div>
          );
        })}
        <Button value={button} />
      </form>
    </>
  );
};