import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { UserContext } from './context/context';
import useContextUser from './hooks/useContextUser';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Registration from './pages/Registration';

function App() {
    const { dispatchEvent, state } = useContextUser();
    return (
        <UserContext.Provider value={{ state, dispatchEvent }}>
            <div className="bg-gray-bg">
                <Router>
                    <Switch>
                        <Route path="/" exact component={Login} />
                        <Route path="/registration" component={Registration} />
                        <Route path="/dashboard" component={Dashboard} />
                    </Switch>
                </Router>
            </div>
        </UserContext.Provider>
    );
}

export default App;
