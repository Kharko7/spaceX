import { Route, Routes } from 'react-router-dom';

import Home from 'pages/home';
import { RoutesPath } from './path';
import Favourites from 'pages/favourites';
import Login from 'pages/login';

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