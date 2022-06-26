import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddName2 from './forms/AddName2';
import ShowDetails from './forms/ShowDetails';
import EditDetails from './forms/EditDetails';
import Home from './Home';
  
ReactDOM.render(
  
  <BrowserRouter>
    <Routes>
      <Route path ='/' element={<App/>}>
        <Route path='/' element={<Home/>}/>
        <Route path ='/addFriend' element={<AddName2/>}/>
        <Route path='/showFriend' element={<ShowDetails/>}>
           <Route path=':name'element={<EditDetails/>}/>
        </Route> 
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'));