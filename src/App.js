// import Email from "./assets/email.svg";
// import Location from "./assets/location.svg";
// import Phone from "./assets/phone.svg";
import "./App.css";

import { useEffect, useState } from "react";
import axios from "axios"
function App() {


const [info,setInfo] = useState("")
 
const getUser = async () => {
    const url = "https://randomuser.me/api/"
    try {
      const { data:{results} } = await axios(url)
      console.log(results[0])
      
      const {
        picture: {large},
        name: {title, first, last},
        email,
        cell,
        location: {state, country},
        registered: {date,age},
      } = results[0]
    
  setInfo({
    large,
    title,
    first, last,
    email,cell,state,country,date,age,
  })
 
    } catch (error) {
      console.log(error)
    }

  }
  console.log(info);


  
  useEffect(() => {
    getUser()
  },[])

 return (
    <div className="App m-5 ">
  
      <img src={info?.large} alt="img" /> 
      <button className="btn btn-success" onClick={()=>getUser()}>RANDOM</button>
    </div>
  );
}
export default App;
