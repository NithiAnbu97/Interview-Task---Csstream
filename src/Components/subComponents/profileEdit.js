function ProfileEdit(props){
      let handleChange=({target:{name,value}})=>{
        if(name==="name"){ props.setName(value);}
        if(name==="avatar"){props.setAvatar(value);}
        if(name==="dept"){props.setDept(value);}
        if(name==="phone"){props.setPhone(value);}
        if(name==="location"){props.setLocation(value);}
        
 }
      
return(
        <>
         <div className="card editcard mx-auto mb-5 createuser" >
            <div className="card-body">
             <form className="form">
                 <div className="form-group">
                    <label className="font-weight-bold">Name:</label><br/>
                    <input className="form-control" type="text" placeholder="Enter Your Name"
                    value={props.name}
                    name="name"
                    onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label className="font-weight-bold">Avatar:</label><br/>
                    <input className="form-control" type="img" placeholder="Enter Your Profile-img"
                    value={props.avatar}
                    name="avatar"
                    onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label className="font-weight-bold">Dept:</label><br/>
                    <input className="form-control" type="text" placeholder="Enter Your Dept"
                    value={props.dept}
                    name="dept"
                    onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label className="font-weight-bold">phone:</label><br/>
                    <input className="form-control" type="number" placeholder="Enter Your Number"
                    value={props.phone}
                    name="phone"
                    onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label className="font-weight-bold">Location:</label><br/>
                    <input className="form-control" type="number" placeholder="Enter Your Place"
                    value={props.location}
                    name="location"
                    onChange={handleChange}
                    />
                </div>
                <br/>
                        
                <div className="text-center">
                <button className="mx-auto btn btn-primary" type="submit" onClick={props.handleSubmit}>Submit</button>
                </div>
             </form>
            </div>
        </div>
        </>
    );
}

export default ProfileEdit;
