import React from 'react'
const Landingpage = ({setUser}) => {
    return (
        <div>
            <h1>Navbar</h1>
            <button onClick={()=> {
                   window.localStorage.setItem("user", "1")
                   setUser("1") 
            }}>login</button>
        </div>
    )
}

export default Landingpage
