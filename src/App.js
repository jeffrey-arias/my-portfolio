// Standard imports
import './CustomApp.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// Custom components
import TopNavBar from './components/nav-bar.component';
import MainBody from './components/body.component';
import Projects from './components/projects.component';
import Contact from './components/contact.component';
import Footer from './components/footer.component';


function App() {
  return (
    <div className="App" id="App">
      <Router>
       <TopNavBar />
       <br/>
       <Route path ="/" exact component={MainBody}/>
       <Route path ="/Projects" component={Projects}/>
       <Route path ="/Contact" component={Contact}/>
       <Footer />
    </Router>
    </div>
  );
}

export default App;
