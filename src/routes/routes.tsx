import { Route, Routes } from 'react-router-dom';

import { RoutesPath } from './path';
import Home from 'pages/home/Home';
import Favourites from 'pages/favourites/Favourites';
import Login from 'pages/login/Login';

const AppRouter = () => {

    return (
        <Routes>
            <Route path={RoutesPath.home} element={<Home />}></Route>
            <Route path={RoutesPath.favourites} element={<Favourites />}></Route>
            <Route path={RoutesPath.login} element={<Login />}></Route>
        </Routes>
    );
};

export default AppRouter;