import React,{useState,useEffect} from 'react'
import axios from 'axios'   
import { useParams, Link } from 'react-router-dom'

const ViewOne = (props) => {
    const[author, setAuthor] = useState("")
    const {id} = useParams()
    useEffect(() => {
        axios.get("http://localhost:8000/api/path/"+id)
            .then((res)=>{
                console.log(res.data)
                setAuthor(res.data)
            })
            .catch(err=>console.log(err))
    }, [id])
    
    return (
        <div>
            {/* {JSON.stringify(author)} */}
            <Link to ="/">Home</Link>
            | <Link to="/authors/new">Add a new Author</Link> <br/>
            <label>Name:</label><br/>
            <p>
                {author.name}
            </p>
            <Link to ="/">Cancel</Link>
            <button>Submit</button>
        </div>
    )
}

export default ViewOne
