// import Email from "./assets/email.svg";
// import Location from "./assets/location.svg";
// import Phone from "./assets/phone.svg";
import "./App.css";
import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import axios from "axios"
function App() {


const [info, setInfo] = useState("")
 
  const getUser = async () => {
    const url = "https://randomuser.me/api/"
    try {
      const { data:{results} } = await axios(url)
      console.log(results[0])
      setInfo(results[0])
      const {
        picture: { large },
        name: { title, first, last },
        email,
        cell,
        location: { state, country },
        registred: { date, age },
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
      <Table
        style={{
          width: "400px",
          height: "400px",
          boxShadow:
            "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
        }}
        className=" mx-auto rounded-3"
        striped
        bgcolor="f4a261"
        hover
      >
        <thead>
          <tr className=" justify-content-center">
            <th style={{ width: "100px" }}>
             <img className="rounded-circle">{large}</img>
            </th>
            <th className="justify-content-center align-items-center py-5">
              <p className="d-block"></p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {/* <Email /> */}
            </td>
            <td colSpan={2}></td>
          </tr>
          <tr>
            <td>
              {/* <Phone /> */}
            </td>
            <td colSpan={2}></td>
          </tr>
          <tr>
            <td>
              {/* <Location /> */}
            </td>
            <td colSpan={2}></td>
          </tr>
          <tr>
            <td colSpan={2}>Age : </td>
          </tr>
          <tr>
            <td style={{ border: "none" }} colSpan={2}>
              Register Date:
            </td>
          </tr>
        </tbody>
      </Table>
      <button className="btn btn-success">RANDOM</button>
    </div>
  );
}
export default App;
