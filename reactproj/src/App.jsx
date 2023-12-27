import React, { useEffect, useState } from 'react';
import UpperPart from './Components/LandingPage';
import CDash from '../src/Components/CDash';
import PDash from '../src/Components/PDash';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import ProviderProfile from '../src/Components/ProviderProf';
import ClientProf from '../src/Components/ClientProf';
import ClientPostReq from './Components/ClientPostReq';
import Signup from './Components/Signup';
import Login from './Components/Login';
import FindserviceProvider from './Components/FindserviceProvider';
// import axios from 'axios';
import { getUserService } from './services/user';
import Terms from './Components/Terms';
import FindClient from './Components/FindClient';

// Do routing here
function App()
{
    const [user, setUser] = useState({});
    const token = localStorage.getItem("token");
   /* const getUser = async () => { 
        try {
            const res = await axios.get('http://localhost:2003/user/CurrentUser', {
                headers: {
                    'Authorization': token
                }
            });
            if (res.data.status) {
                setUser(res.data.user);
            }
        }
        catch (err) {
            console.log(err);
        }
    };
    */

    useEffect(() => {
        if (token) {
            getUser();
        }
    }, []);

    const getUser = async () => {
        try {
            const res = await getUserService();
            if (res.data.status) 
            setUser(res.data.user);     
        }
        catch (err) {
            console.log(err);
        }
    };

    return (
        <div>

            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<UpperPart />}></Route>
                    <Route path='/Signup' element={token ?<Navigate to={user.desig === "client" ? "/client":"/provider"} /> :<Signup />} />
                    <Route path='/login' element={token ?<Navigate to={user.desig === "client" ? "/client":"/provider"} /> :<Login />} />
                    <Route path='/client' element={<CDash></CDash>}></Route>
                    <Route path='/provider' element={<PDash></PDash>}></Route>
                    <Route path='/pProfile' element={<ProviderProfile></ProviderProfile>}></Route>
                    <Route path='/cProfile' element={<ClientProf></ClientProf>}></Route>
                    <Route path='/cRequire' element={<ClientPostReq></ClientPostReq>}></Route>
                    <Route path='/ServiceP' element={<FindserviceProvider></FindserviceProvider>}></Route>
                    <Route path='/FindClient' element={<FindClient></FindClient>}></Route>
                    <Route path='/terms' element={<Terms></Terms>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;