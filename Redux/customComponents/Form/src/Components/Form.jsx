import React from "react";

export const Form = ({ data}) => {
    const [FromData, setFormData] = React.useState(() => {
        return data.reduc((acc, curr) => {}, {});

    });

    return(
        <>
        <form>
            <label htmlFor=""></label>
            <input type="name" name="" placeholder="" id=""/>
        </form>
        </>
    );
};