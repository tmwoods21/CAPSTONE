import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './views/home'
import './App.css';
import './components/navbar'
import Navbar from './components/navbar';
import Informationpage from './views/informationpage';
import Resources from './views/resources';
import Testimonies from './views/testimonies';
import staticData from './data'
import Resourceslist from './views/resourceslist'

console.log(staticData)
function App() {
  
  const [resources, setResources] = useState([...staticData]);
  console.log(resources)



  const handleFetch = async () => {
    const URL =`${process.env.REACT_APP_SERVER_URI}/resources` ||  "http://localhost:8000/resources"
    fetch(URL)
    .then(resp=>{
      console.log(resp)
      return resp.json()
    })
    .then(data=>{
      console.log(data)
      setResources(data)
    })
  }

  useEffect(()=>{
    console.log("testing use effect")
    handleFetch()
  }, [])

  return (
  
      <div className="App">
        <Navbar />
        <h4>Anxiety and Me &#127807;</h4> 

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Informationpage" element={<Informationpage />} />
          <Route path="/Resources" element={<Resources />} />
          <Route path="/Testimonies" element={<Testimonies />} />
          <Route path="/Resourceslist" element={<Resourceslist />} />
        </Routes>
      </div>
  
  );
}

export default App;
