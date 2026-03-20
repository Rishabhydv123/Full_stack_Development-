import { useState } from "react";

export const useToggle = (defaultValu) => {
 const [state, setState] = useState(defaultValu);

 function setToggleState(val) {
    if(typeof val != 'boolean') {
        setState(!val);
    }else{
        setState(val);
    }
 }
 return [state, setToggleState];
}