
import "./App.css";
import Cards from "./components/cards";

function App() {
  let myObj = {
   username: "gauri" 
  }
  return (
    <>
      <Cards username="thelite" someObj={myObj}/>
      <Cards username="gauri"/>
      <Cards someObj={myObj}/>
    </>
  );
}

export default App;
