import Email from "./assets/Email.svg";
import Location from "./assets/Location.svg";
import Phone from "./assets/Phone.svg";
import Table from "react-bootstrap/Table";
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
     <Table Table
            style={{
                width: "400px",
                height: "400px",
                boxShadow:
                    "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
            }
            }
            className=" mx-auto rounded-3"
            striped
            bgcolor="f4a261"
            hover
        >
            <thead>
                <tr className=" justify-content-center">
                    <th style={{ width: "100px" }}>
                        <img className="rounded-circle" src={info?.large} alt="person"></img>
                    </th>
                    <th className="justify-content-center align-items-center py-5">
                        <p className="d-block"></p>
                        {info?.title}{info?.first}{info?.last}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <img src={Email} alt="email" style={{
                            width: "40px",
                            height: "40px",

                        }
                        } />
                    </td>
                    <td colSpan={2}>{info?.email}</td>
                </tr>
                <tr>
                    <td>
                        <img src={Phone} alt="phone" style={{
                            width: "40px",
                            height: "40px",

                        }
                        } />
                    </td>
                    <td colSpan={2}>{info?.cell}</td>
                </tr>
                <tr>
                    <td>
                        <img src={Location} alt="location" style={{
                            width: "40px",
                            height: "40px",

                        }
                        } />
                    </td>
                    <td colSpan={2}>{info?.state} / {info?.country}</td>
                </tr>
                <tr>
                    <td colSpan={2}>Age : {info?.age}</td>
                </tr>
                <tr>
                    <td style={{ border: "none" }} colSpan={2}>
                        {info.date?.slice(0, 10)}
                    </td>
                </tr>
            </tbody>
        </Table>
      <button className="btn btn-success random" onClick={()=>getUser()}>RANDOM</button> 
    </div>
  );
}
export default App;
