
import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Context } from '../Context';
import './AddName.css'

const ShowDetails = ()=> {

    const {friendDetails, setFriendDetails} = 
    useContext(Context);

    const handleDelete = (name)=>{
        setFriendDetails(current => 
           current.filter(detail => {
               return detail.name !== name
           })
        )
     }

    const det = friendDetails.map(({name, phone, email, work, city}) => (
        
            <div className="showDetails" key={name}>
                <ul>
                    <p>Name: {name}</p>
                    <p>Email: {email}</p>
                    <p>Phone: {phone}</p>
                    <p>Work: {work}</p>
                    <p>City: {city}</p>
                </ul>
                <div className='editDeleteButtons'>
                <Link to={`/showFriend/${name}`}><button>Edit</button></Link>
                <button onClick={() => handleDelete(name)}>Delete</button>
            </div>
            </div>
    ));
    const element = <div>
        <h3>No Friend added.</h3><Link to='/addFriend'>Add</Link>
    </div>
    return(
        <div>
            <div>
                <h2>Friend Details</h2>
                {friendDetails.length === 0?element:''}
            </div>
            <div className='friendDetails'>
              {det}
            </div>
            <Outlet/>
        </div>
    );
}

export default ShowDetails;