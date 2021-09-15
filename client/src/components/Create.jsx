import React,{useState} from 'react'
import axios from 'axios'
import {Link,useHistory} from 'react-router-dom'
const Create = (props) => {
    const[name ,setName] = useState("")
    const[errs,setErrs] = useState([]);
    const history = useHistory();
    
    
    const submitHandler=e=>{
        e.preventDefault();

        const newAuthor = {
            "name": name
        }

        axios.post("http://localhost:8000/api/path",newAuthor)
        .then(res=>{
            console.log(res.data)
            history.push("/")
        })
        .catch((err)=> {
            const errorResponse = err.response.data.errors;
            const errorArr = [];
            for(const key of Object.keys(errorResponse)){
                errorArr.push(errorResponse[key].message)
            }
            setErrs(errorArr);
        })

    }
    

    return (
        <div>
            <Link to={"/"}>
                Home
            </Link>
            <br/>
            <Link to={"/authors/new"}>
                Add a new author: 
            </Link>
            <form onSubmit={submitHandler}>
                {errs.map((err,index)=>{
                    return(
                        <p key={index} style={{color:"red"}}>{err}</p>
                    )
                })}
                <label>Name:</label>
                <input type="text" onChange={e=>setName(e.target.value)} value={name} /><br/>
                <input type="submit" value="Submit" />
                <Link to ="/">Cancel</Link>
            </form>
            
                
        </div>
    )
}

export default Create
