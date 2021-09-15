import React,{useState,useEffect} from 'react'
import {Link,useParams,useHistory} from 'react-router-dom'
import axios from 'axios'

const UpdateOne = (props) => {
    const [name, setName] = useState("")
    const [errs, setErrs] = useState([])
    const {id} = useParams();
    const history = useHistory();

    useEffect(() => {
        axios.get("http://localhost:8000/api/path/"+id)
            .then(res=>{
                console.log(res.data.name)
                setName(res.data.name)
            })
            .catch(err=>{console.log(err)})
    }, [id])

    const updateAuthor =e =>{
        e.preventDefault()

        const newAuthor = {
            "name": name
        }

        axios.put("http://localhost:8000/api/path/"+id,newAuthor)
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
            <h1>Favorite Authors</h1>
            <Link to="/">
                Home
            </Link><br/>
            <Link>
                Edit this author
            </Link>
            <form onSubmit={updateAuthor}>
                {errs.map((err,index)=>{
                        return(
                            <p key={index} style={{color:"red"}}>{err}</p>
                        )
                })}
                <label htmlFor="input">Name:</label><br/>
                <input type="text" value={name} onChange={e=>setName(e.target.value)} />
                <button>Submit</button>
                <Link to ="/">Cancel</Link>
            </form>
        </div>
    )
}

export default UpdateOne
