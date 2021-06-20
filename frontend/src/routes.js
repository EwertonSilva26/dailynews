import { Redirect, Route, Switch } from 'react-router-dom';

import NewsList from './components/NewsList/NewsList';
import NewDetails from './components/NewDetails/NewDetails';
import Login from './components/Login/Login';
import CreateNews from './components/CreateNews/CreateNews';
import ErrorPage from './components/ErrorPage/ErrorPage';

const routes = () => {

    return (
        <Switch>
            <Redirect from="/" to="/news" exact />
            <Route path="/news" exact>
            <NewsList ></NewsList>
            </Route>

            <Route path="/news/:id" exact>
                <NewDetails />
            </Route>

            <Route path="/login" exact>
                <Login />
            </Route>

            <Route path="/create-news" exact>
                <CreateNews />
            </Route>

            <Route render={() => <ErrorPage />} />
        </Switch>
    );
}

export default routes;