import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from "../pages/components/nav";
import Home from "../pages/home";
import Login from '../pages/login';
import Register from '../pages/register';
import AddTrack from '../pages/pannels/addTrack';



const Router = props => {
    return (
        <BrowserRouter>
            <NavBar />
            <div className="d-flex justify-content-center w-100">
                <Routes>
                    <Route path="/" Component={Home} />
                    <Route path='/login' Component={Login}/>
                    <Route path='/register' Component={Register}/>
                    <Route path='/addTrack' Component={AddTrack}/>
                </Routes>
            </div>

        </BrowserRouter>
    )
}

export default Router