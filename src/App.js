import Header from "./Components/Header";
import {BrowserRouter,Route,Switch} from "react-router-dom"
import Users from "./Components/users";
import CreateUser from "./Components/createUser";
import EditUser from "./Components/EditUser";
import Profile from "./Components/Profile";
import EditProfile from "./Components/EditProfile";
import {useEffect,useState} from "react";
import {Context} from "./Context";
import "./Components/components.css";
// import "./Components/Charts1"
// import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';

function App()
{
    const [users,setUsers]= useState([]);
    
    let GetUsers= async()=>{
        const userdata = await fetch("https://632c0cea5568d3cad87b03a5.mockapi.io/users/");
        const data = await userdata.json();
        setUsers(data);
       
    }
useEffect(()=>
    {   
        GetUsers();
        console.log("rendered");
    },[])

    // const App = () => {
  
    //     // Sample data
    //     const data = [
    //       {name: 'Geeksforgeeks', students: 400},
    //       {name: 'Technical scripter', students: 700},
    //       {name: 'Geek-i-knack', students: 200},
    //       {name: 'Geek-o-mania', students: 1000}
    //     ];
          
    return (
        <>
        {/* <BarChart width={600} height={600} data={data}>
    <Bar dataKey="students" fill="green" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
  </BarChart>
 */}

       <Context.Provider 
       value={{
           users,
           setUsers
       }} 
       >
        <BrowserRouter>
        <Header />
        <Switch>
        <Route exact path="/" component={Users} />
        <Route  path="/createuser" component={CreateUser} />
        <Route path="/edituser/:id" component={EditUser} />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/edit-profile/:id" component={EditProfile} />
        {/* <Route  path="/charts1" component={Charts1} /> */}

        </Switch>
        </BrowserRouter>
        </Context.Provider>
        
        </>
    );
}  
// }
export default App;
