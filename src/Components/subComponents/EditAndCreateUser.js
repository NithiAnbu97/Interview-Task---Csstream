function EditAndCreateUser(props){
   let handleInput =({target:{value,name}})=>{
        if(name==="name"){props.setName(value);}
        if(name==="sub1"){props.setEmail(value);}
        if(name==="sub2"){props.setLocation(value);}
        if(name==="sub3"){props.setPhone(value);}
        if(name==="sub4"){props.setEmail(value);}
        if(name==="sub5"){props.setEmail(value);}
        if(name==="avg"){props.setEmail(value);}


   }
return(
        <>
        <div className="card mx-auto createuser" >
            <div className="card-body">
             <form className="form">
                 <div className="form-group">
                    <label className="font-weight-bold">Name:</label><br/>
                    <input className="form-control" type="text" placeholder="Enter Your Name"
                     value={props.name} 
                     onChange={handleInput}
                     name="name"
                    />
                </div>
                <div className="form-group">
                    <label className="font-weight-bold">Sub 1:</label><br/>
                    <input className="form-control" type="number" placeholder="Enter the value" 
                    value={props.sub1} 
                    onChange={handleInput}
                    name="number"
                    />
                </div>
                <div className="form-group">
                    <label className="font-weight-bold">Sub 2:</label><br/>
                    <input className="form-control" type="number" placeholder="Enter Your value" 
                    value={props.sub2} 
                    onChange={handleInput}
                    name="number"
                    />
                </div>
                <div className="form-group">
                    <label className="font-weight-bold">Sub 3:</label><br/>
                    <input className="form-control" type="number" placeholder="Enter Your value" 
                    value={props.sub3} 
                    onChange={handleInput}
                    name="value"
                    />
                </div>
                <div className="form-group">
                    <label className="font-weight-bold">Sub 4:</label><br/>
                    <input className="form-control" type="text" placeholder="Enter Your value" 
                    value={props.sub4} 
                    onChange={handleInput}
                    name="number"
                    />
                </div>
                 <div className="form-group">
                    <label className="font-weight-bold">Sub 5:</label><br/>
                    <input className="form-control" type="text" placeholder="Enter Your value" 
                    value={props.sub5} 
                    onChange={handleInput}
                    name="number"
                    />
                </div>
                <div className="form-group">
                    <label className="font-weight-bold">Avg:</label><br/>
                    <input className="form-control" type="text" placeholder="Enter Your value" 
                    value={props.avg} 
                    onChange={handleInput}
                    name="number"
                    />
                </div>
                <br/>
                <div className="text-center">
                <button className="mx-auto btn btn-sucess"  type="submit" onClick={props.handleSubmit}>Submit</button>
                </div>
             </form>
            </div>
        </div> 
        </>
    );
}

export default EditAndCreateUser;
