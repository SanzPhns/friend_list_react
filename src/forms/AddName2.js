import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Context';
import './AddName.css'
    
function AddName2(){
    const initialValue = {
        "name": '',
        "phone": '',
        "email": '',
        'work': '',
        "city": ''
    }
    const {details, setDetails, setFriendDetails} = 
    useContext(Context);
    const [added, setAdded] = useState(false);
   
    const handleChange = (e) => {
        setDetails({...details, [e.target.name]:e.target.value})
    }
    useEffect(()=>{
        setDetails(initialValue);
    },[])

    const handleSubmit = (e) => {
        setFriendDetails(prevState =>
            [...prevState, details]
        );
        e.preventDefault();
        setDetails(initialValue)
        setAdded(true);
    }
    
    return (
        
        <div className="addName">
            <h2>Add Friend Details</h2>
            <form className="addName-form" onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" value={details.name} required
                onChange={handleChange}/>
                <label>Phone</label>
                    <input type="text" name="phone" value={details.phone} 
                    onChange={handleChange}/>
                
                <label>Email</label>
                    <input type="text" name="email" value={details.email} 
                    onChange={handleChange}/>
                
                <label>Work</label>
                    <input type="text" name="work" value={details.work} 
                    onChange={handleChange}/>
                
                <label>City</label>
                    <input type="text" name="city" value={details.city} 
                    onChange={handleChange}/>
                
                <div className='submit'>
                <input type="submit" value="Add"/>
                </div>
            </form>
            <div>
                {added?
                <div>
                <h4>New friend added</h4>
                <Link to="/showFriend">Show</Link>
                </div>
                :''}
                
            </div>
        </div>
    );
}

export default AddName2;