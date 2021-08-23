import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Registration from './pages/Registration';

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/registration" component={Registration} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
