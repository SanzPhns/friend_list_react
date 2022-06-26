import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../Context";
import './AddName.css';

function EditDetails(){
   
    const {details, setDetails, friendDetails, setFriendDetails} = 
    useContext(Context);
    
    let params = useParams();

    const navigate = useNavigate();

    let current = friendDetails.filter(obj => {
        return obj.name === params.name;
    })
    useEffect(()=>{
        console.log(current[0]);
        setDetails(current[0])
    },[])

    const handleChange = (e) => {
        setDetails({...details, [e.target.name]:e.target.value})
    }
    const handleSubmit = (e) => {
        setFriendDetails(current =>
            current.filter(detail => {
                return detail.name !== params.name;
        }))
        setFriendDetails(prevState =>
            [...prevState, details]
        );
        navigate('/showFriend')
        e.preventDefault();
    }

    return(
        <div>
            <hr/>
            <h2>Edit Details</h2>
            <form className="editDetails" onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={details.name}
                    onChange={handleChange}/>
                </label>
                <label>
                    Email:
                   <input type="text" name="email" value={details.email}
                   onChange={handleChange}/>
                </label>
                <label>
                    Phone:
                   <input type="text" name="phone" value={details.phone}
                   onChange={handleChange}/>
                </label>
                <label>
                    Work:
                   <input type="text" name="work" value={details.work}
                   onChange={handleChange}/>
                </label>
                <label>
                    City:
                   <input type="text" name="city" value={details.city}
                   onChange={handleChange}/>
                </label>
                <input type="submit" value="Save"/>
            </form>
        </div>
    );
}

export default EditDetails;