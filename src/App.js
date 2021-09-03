import 'emoji-mart/css/emoji-mart.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { UserContext } from './context/context';
import ProtectedRoute from './helpers/ProtectedRoute';
import useAuthListener from './hooks/useAuthListener';
import Dashboard from './pages/Dashboard';
import EditProfile from './pages/EditProfile';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Registration from './pages/Registration';

function App() {
    const { loggedInUser } = useAuthListener();

    return (
        <UserContext.Provider value={{ loggedInUser }}>
            <div className="bg-gray-bg">
                <Router>
                    <Switch>
                        <ProtectedRoute loggedInUser={loggedInUser} path="/" exact>
                            <Route component={Dashboard} />
                        </ProtectedRoute>
                        <Route path="/login" component={Login} />
                        <Route path="/registration" component={Registration} />
                        <Route path="/edit" component={EditProfile} />
                        <ProtectedRoute loggedInUser={loggedInUser} path="/:username">
                            <Route component={Profile} />
                        </ProtectedRoute>
                    </Switch>
                </Router>
            </div>
        </UserContext.Provider>
    );
}

export default App;
