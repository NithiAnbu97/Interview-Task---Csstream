import "./components.css";
//import axios from "axios";
import {useState,useContext} from "react";
import {Context} from "../Context";

import EditAndCreateUser from "./subComponents/EditAndCreateUser";
function CreateUser()
{
  
     const [name,setName] = useState("");
     const [dept,setDept] = useState("");
     const [phone,setPhone] = useState("");
     const [location,setLocation] = useState("");

     const[sub1,setSub1] = useState("");
     const[sub2,setSub2] = useState("");
     const[sub3,setSub3] = useState("");
     const[sub4,setSub4] = useState("");
     const[sub5,setSub5] = useState("");
     const[avg,setAvg] = useState("");
     const context = useContext(Context);
     const[useradded,setUseradded] = useState(true);
    //to post user to API
   let postuser= async()=>{
      const userdata = await fetch("https://632c0cea5568d3cad87b03a5.mockapi.io/users/",{
          method:"POST",
          headers:{
              "content-type":"application/json"
          },
          body:JSON.stringify({
            name:name,
            dept:dept,
            phone:phone,
            location:location,

            sub1:sub1,
            sub2:sub2,
            sub3:sub3,
            sub4:sub4,
            sub5:sub5,
            avg:avg,

          })
      });
      const data = await userdata.json();
      console.log(data);
      let tempusers = [...context.users];
      tempusers.push(data);
      console.log(tempusers);
      context.setUsers(tempusers);
      setUseradded(false);
   }



     //handling the form submit
     let handleSubmit =(event)=>{
           event.preventDefault();
          
           postuser();
     }

    
    

    return(
        <>
        <div className="container">
        {useradded ? (<>
            <h1 className="text-center text-info">Create User</h1>
            <EditAndCreateUser
              name={name}
              dept={dept}
              phone={phone}
              location={location}
              sub1={sub1}
              sub2={sub2}
              sub3={sub3}
              sub4={sub4}
              sub5={sub5}
              avg={avg}

              setName={setName}
              setDept={setDept}
              setPhone={setPhone}
              setLocation={setLocation}
              setSub1={setSub1}
              setSub2={setSub2}
              setSub3={setSub3}
              setSub4={setSub4}
              setSub5={setSub5}
              setAvg={setAvg}

              handleSubmit={handleSubmit}
            />
        </>)
        :
        (
        <>
        <div className="confirmtext">
        <h1>User added</h1>
        <i className="fas fa-check-circle"></i>
        </div>
        </>)}
       
        </div>
        </>
    );
}
export default CreateUser;
