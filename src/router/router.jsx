import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from "../pages/components/nav";
import Home from "../pages/home";
import Login from '../pages/login';
import Register from '../pages/register';
import AddTrack from '../pages/pannels/addTrack';
import Player from '../pages/components/player';
import { ContextProvider } from '../pages/context/context';



const Router = props => {
    return (
        <BrowserRouter>
            <ContextProvider>
                <NavBar />
                <Player />
                <div className="c d-flex justify-content-center">
                    <Routes>
                        <Route path="/" Component={Home} />
                        <Route path='/login' Component={Login} />
                        <Route path='/register' Component={Register} />
                        <Route path='/addTrack' Component={AddTrack} />
                    </Routes>
                </div>
            </ContextProvider>


        </BrowserRouter>
    )
}

export default Router