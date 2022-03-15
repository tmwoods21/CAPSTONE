import { useState, useEffect } from "react";


function Resourceslist(){
    const DB_URI = process.env.DB_URI || "http://localhost:8000/resources";

    const [resources, setResources] = useState([]);
    console.log(resources)


    const handleFetch = async () => {
        try {
          const resources = await fetch(DB_URI);
          const parsedResource = await resources.json();
          setResources(parsedResource);
        } catch (err) {
          console.log(err);
        }
      };


      const deleteResource = async (id) => {
        try {
          const deletedResource = await fetch(`${DB_URI}/${id}`, {
            method: "DELETE",
          });
          const parsedResource = await deletedResource.json();
    
          console.log(parsedResource);
    
          const updatedResource = resources.filter(
            (resource) => resource._id !== parsedResource._id
          );
    
          setResources(updatedResource);
        } catch (err) {
          console.log(err);
        }
      };

      useEffect(() => {
        handleFetch();
      }, []);

    return(
        <section className="container">
        
        <main className="container_main">
          <table className="main_resources">
            <thead>
            <h2 className="container_title"></h2>
              <tr>
              
                <th>Name:</th>
                
                <th>Location:</th>
                
                <th>Description:</th>
                
                <th>Website:</th>
                
              </tr>
            </thead>
            <tbody className="resource_body">
              {resources &&
                resources.map((resource, index) => (
                  <>
                    <tr className="identifier" key={resource._id, index}>
                    <td>{resource.name}</td>
                    <td>{resource.location}</td>
                    <td>{resource.description}</td>
                    <td>{resource.website}</td>
                    {/* <td onClick={() => this.deleteResource(resource._id)}>X</td> */}
                    <td><a href="#" alt="test" onClick={() => deleteResource(resource._id)}>X</a></td>
                  </tr>
                  </>
                 
                ))}
            </tbody>
          </table>
        </main>
      </section>
    )
}





export default Resourceslist