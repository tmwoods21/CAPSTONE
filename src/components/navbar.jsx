import {Link} from 'react-router-dom'

function Navbar() {
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/informationpage">Information</Link>
            <Link to="/testimonies">Testimonies</Link>
            <Link to="resourceslist">Resources</Link>
            <div className="rside_link">
                <Link to="/resources">Create a Resource</Link>
            </div>
            
        </nav>
    )
}

export default Navbar;