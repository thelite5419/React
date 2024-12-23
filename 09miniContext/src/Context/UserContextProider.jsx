import React from "react";
import USerContext from "./UserContext";

const UserContextProvider = ({children}) => {
const [user, setUser] = React.useState(null)
    return (
        <USerContext.Provider value={{user, setUser}}>
        {children}
        </USerContext.Provider>
)

}

export default UserContextProvider
