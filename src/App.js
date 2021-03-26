// Standard imports
import './CustomApp.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// Custom components
import TopNavBar from './components/nav-bar.component';
import MainBody from './components/body.component';

function App() {
  return (
    <div className="App">
      <Router>
       <TopNavBar />
       <br/>
       <Route path ="/" exact component={MainBody}/>
       {/*<Route path ="/Experience" component={MainBody}/>*/}
    </Router>
    </div>
  );
}

export default App;
