import { useState,useContext ,useEffect} from "react";
import { Context } from "../Context";
import "./components.css";
import EditAndCreateUser from "./subComponents/EditAndCreateUser";

export default function EditUser({match})
{
    const[name,setName]= useState("");
    const[dept,setDept]= useState("");
    const[phone,setPhone]= useState("");
    const[location,setLocation]= useState("");

    const[sub1,setSub1] = useState("");
    const[sub2,setSub2]= useState("")
    const[sub3,setSub3]= useState("");
    const[sub4,setSub4]= useState("");
    const[sub5,setSub5]= useState("");
    const[avg,setAvg]= useState("");

    const context = useContext(Context);
    const [userNotEdited,setUserNotEdited] = useState(true);
    let setInput = async()=>{
        let uservalue = context.users.filter((user)=>user.id===match.params.id)
         if(uservalue.length===0)
         {
          
            const userdata = await fetch(`https://611f26469771bf001785c730.mockapi.io/users/${match.params.id}`);
           const data = await userdata.json();
            uservalue.push(data);
         }
        uservalue.forEach((user)=>{
            setName(user.name);
            setDept(user.dept);
            setPhone(user.phone);
            setLocation(user.location);

            
            setSub1(user.sub1);
            setSub2(user.sub2);
            setSub3(user.sub3);
            setSub4(user.sub4);
            setSub5(user.sub5);
            setAvg(user.avg);

        })
    }

    useEffect(()=>{
      setInput();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
     

    let PutUser = async()=>{
        const userdata = await fetch(`https://632c0cea5568d3cad87b03a5.mockapi.io/user/${match.params.id}`,{
            method:"PUT",
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
                avg:avg
            })
        });
        const data = await userdata.json();
        console.log(data);
        let tempusers = [...context.users];
        let index = context.users.findIndex((user)=>user.id === match.params.id);
        tempusers[index] = data;
        context.setUsers(tempusers);
        setUserNotEdited(false);

    }
     let handleSubmit =(event)=>{
          event.preventDefault();
          PutUser();
     }

    return(
        <>
        <div className="container">
           { userNotEdited ? 
           (<> 
        <h1 className="text-center text-info">Update User of ID-{match.params.id}</h1>
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
        (<>
         <div className="confirmtext">
        <h1>User Edited</h1> 
        <i className="fas fa-check-circle"></i>
        </div>
        </>)}
        </div>
        </>
    );
}
