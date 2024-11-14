import React, {useState, useContext} from 'react'
import UserContext from '../Context/UserContext';
import UserContextProvider from '../Context/UserContextProider';

function Login() {
const [userName, setuserName] = useState('');
const [password, setpassword] = useState('');

const {setUser} = useContext(UserContext)

   const handleSubmit = (e) => {
     e.preventDefault()
    // console.log('setuser({userName, password}) :>> ', setuser({userName, password}));
    setUser({userName, password})
   }

  return (
    <div>
      <h2>login</h2>
      <input type="text" placeholder='username' value={userName} onChange={(e)=> setuserName(e.target.value)}/>
      <input type="password" placeholder='password' value={password} onChange={(e)=> setpassword(e.target.value)}/>
      <button onClick={handleSubmit}>submit</button>

    </div>
  )
}

export default Login
