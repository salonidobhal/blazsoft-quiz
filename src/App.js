import Register from './components/Form/Register';
import './App.css';
import SignIn from './components/Form/SignIn';
import {BrowserRouter as Router, Route} from 'react-router-dom';
function App() {
  return (
    <div>
      <Router>
      <Route exact path="/" component={Register}/>
      <Route path ="/signIn" component={SignIn}/>
      </Router>
      
    </div>
  );
}

export default App;
