import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Registration from './pages/Registration';

function App() {
    return (
        <div className="bg-gray-bg">
            <Router>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/registration" component={Registration} />
                    <Route path="/dashboard" component={Dashboard} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
