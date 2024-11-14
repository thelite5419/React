import React , {useContext} from 'react'
import UserContext from '../Context/UserContext';
import UserContextProvider from '../Context/UserContextProider';

function Profile() {
    const {user} = useContext(UserContext)
    console.log('user :>> ', user);
  if (user) {
    return <div>welcome {user.userName}</div>
  }
  else{
    return <div>enter </div>
  }
  
}

export default Profile
