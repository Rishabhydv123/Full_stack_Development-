function Passhtml( { children, color="green" }){
    return(
        <>
        <div 
        style={{
            color:color,
            border:"2px solid Red",
            padding:"10px",
            margin:"10px"
            }}>
    { children}
        </div>
        </>
    );
}

export default Passhtml;