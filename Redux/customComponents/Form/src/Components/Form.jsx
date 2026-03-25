import React from "react";

export const Form = ({ data }) => {
  const [formData, setFormData] = React.useState(() => {
    return data.reduce((acc, curr) => {
      acc[curr.name] = "";
      return acc;
    }, {});
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  console.log("🚀 ~ formData:", formData);

  return (
    <form>
      {data.map((el, i) => {
        return (
          <div key={i}>
            <label htmlFor={el.id}>{el.name}</label>

            {el.type === "textarea" ? (
              <textarea
                name={el.name}
                placeholder={el.placeholder}
                id={el.id}
                rows="4"
                onChange={handleChange}
              />
            ) : el.type === "radio" ? (
              el.options.map((option, index) => (
                <label key={index} style={{ marginRight: "10px" }}>
                  <input
                    type="radio"
                    name={el.name}
                    value={option}
                    onChange={handleChange}
                  />
                  {option}
                </label>
              ))
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
    </form>
  );
};



// import React from "react";

// /*
// {
//   name: "",
//   email: "",
//   pass: "",
//   phone: "",
//   add: ""
// }
// */

// export const Form = ({ data }) => {
//   const [formData, setFormData] = React.useState(() => {
//     return data.reduce((acc, curr) => {
//       acc[curr.name] = "";
//       return acc;
//     }, {});
//   });

//   console.log("🚀 ~ formData:", formData);

//   return (
//     <>
//       <form>
//         {data.map((el, i) => {
//           return (
//             <div key={i + 1}>
//               <label htmlFor={el.id}>{el.name}</label>

//               {el.type === "textarea" ? (
//                 <textarea
//                   name={el.name}
//                   placeholder={el.placeholder}
//                   id={el.id}
//                   rows="10"
//                   cols="50"
//                 ></textarea>
//               ) : (
//                 <input
//                   type={el.type}
//                   name={el.name}
//                   placeholder={el.placeholder}
//                   id={el.id}
//                 />
//               )}
//             </div>
//           );
//         })}
//       </form>
//     </>
//   );
// };