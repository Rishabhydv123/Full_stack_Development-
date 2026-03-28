function user({name = "new User"}){
    return (
        <>
        <h2 style={{
            color:"green", border:"2px solid red"
        }}>hello...{name} </h2>
        </>
    )
}

export default user;