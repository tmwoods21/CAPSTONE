import { useState, useEffect } from 'react';
import staticData from '../data'
import { useNavigate } from 'react-router-dom'

console.log(staticData)

function Resources(){
    let navigate = useNavigate();

    const initialInput = {
        name: "",
        location:"",
        description:"",
        website:""
      }
    const [resources, setResources] = useState([]);
    console.log(resources)
    
    const [resourceInput, setResourceInput] = useState(initialInput)
    
    const handleFetch = async () => {
        const URL =`${process.env.REACT_APP_SERVER_URI}/resources` || "http://localhost:8000/resources"
        fetch(URL)
        .then(resp=>{
          console.log(resp)
          return resp.json()
        })
        .then(data=>{
          console.log(data)
        })
        .catch(err => {
            console.log(err) 
        });
      }
    async function handleCreateResource(e){
        e.preventDefault()
        console.log(resourceInput)
        
        await newResource(resourceInput)
        
        navigate(`/resourceslist`, {replace: true})
    }

    function handleChange(e){
        const newObject = {...resourceInput, [e.target.name]:e.target.value}
        setResourceInput(newObject)
    }

    const newResource = async (data)  => {
        const URL =process.env.REACT_APP_SERVER_URI || "http://localhost:8000/resources"
        const options = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type" : "application/json"
            }
        }
        try{
           console.log('data inside the newResource', data)
           const createdResource = await fetch(URL, options)
           const parsedResource = await createdResource.json()
           console.log(parsedResource)
           setResources([...resources, parsedResource])

        }catch(err){
            console.log(err)
        }
    }


    useEffect(()=>{
        console.log("testing use effect")
        handleFetch()
      }, [])



    return(
        <div>
            <h2>Create a New Resource</h2>
            <form className="whole_form" onSubmit={handleCreateResource}>
                <input
                    onChange={handleChange}
                    className="form_name"
                    name="name"
                    placeholder="Your Name Here"
                    value={resourceInput.name}
                />
                <br/>
                 <input 
                    onChange={handleChange}
                    className="form_location"
                    name="location"
                    placeholder="City and State Here"
                    value={resourceInput.location}
                />
                <br/>
                 <input 
                    onChange={handleChange}
                    className="form_description"
                    name="description"
                    placeholder="Put Description Here"
                    value={resourceInput.description}
                />
                <br/>
                   <input 
                    onChange={handleChange}
                    className="form_url"
                    name="website"
                    placeholder="Put Website URL Here"
                    value={resourceInput.website}
                />
                <br/>
                <button>Create Resource!</button>
            </form>
        </div>
    )
}


export default Resources