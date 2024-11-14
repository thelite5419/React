
import './App.css'
import UserContext from './Context/UserContext'
import UserContextProvider from './Context/UserContextProider'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {


  return (
    <>
     <UserContextProvider>
      <h1>hael</h1>
      <Login/>
      <Profile />
     </UserContextProvider>
    </>
  )
}

export default App
