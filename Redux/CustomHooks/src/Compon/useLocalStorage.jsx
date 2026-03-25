import React from "react";

export const useLocalStorage =(key ,initialValue)=>{
    const [state , setState]=React.useState(()=>{
        const saved = localStorage.getItem(key);
        return saved? JSON.parse(saved): initialValue;
    });

    React.useEffect(()=>{

        localStorage.setItem(key, JSON.stringify(state));
    },[key,state]);

    return [state, setState];
}