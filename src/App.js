import './App.css'
import { Link, Outlet } from "react-router-dom";
import { ContextProvider } from './Context';

const App = () => {

  return(
    //this is app
    <ContextProvider>
       <div className='wrapper'>
      <nav
        style={{
              borderBottom: "solid 1px",
              paddingBottom: "1rem",
            }}
      > 
        <Link to="/">Home</Link><br/>
        <Link to="/addFriend">Add Friend</Link><br/>
        <Link to="/showFriend">Friend Details</Link>
        
    </nav>
    <div>
    <Outlet/>
    </div>
    
    </div>
    </ContextProvider>
  );
}

export default App;