import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Link,useHistory} from 'react-router-dom'

const Main = (props) => {
    const [authors, setAuthors] =useState([])
    const history = useHistory();

    useEffect(()=>{
        getAuthorsfromDB()
    },[])

    const getAuthorsfromDB=()=>{
        axios.get("http://localhost:8000/api/path")
            .then((res)=>{
                console.log(res.data)
                setAuthors(res.data)
            })
            .catch(err=>{
                console.log("This is an error",err)
            })
    }
    
    const deleteAuthor = (deleteId)=>{
        axios.delete("http://localhost:8000/api/path/"+deleteId)
            .then(res =>{
                setAuthors(authors.filter(author=>author._id!==deleteId))
            })
            .catch(err=>console.log(err))
    }
    
    return (
        <div>
            <h1>Favorite authors</h1>
            {/* {JSON.stringify(authors)} */}
            <table>
                <thead style={{}}>
                    <tr>
                        <p>
                            <th>
                                <Link to="/authors/new">
                                    Add an Author
                                </Link>
                            </th>
                        </p>
                        <p>
                            <th>We have quotes by:</th>
                        </p>
                    </tr>
                </thead>
                <tbody>
                {authors.map((author,id) =>{
                return(
                    <tr>
                        <td key={author._id}>
                            <Link to= {"/authors/"+author._id}>
                                {author.name}
                            </Link>
                        </td>
                        <td>
                            <Link to={"/authors/edit/"+author._id}>
                                Edit
                            </Link>
                            <button onClick={()=>deleteAuthor(author._id)}>Delete</button>
                        </td>
                    </tr>

                )
            })}
                </tbody>
            </table>
        </div>
    )
}
export default Main

