// Standard imports
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

// Custom components
import TopNavBar from './components/nav-bar.component';
import MainBody from './components/body.component';
import Projects from './components/projects.component';
import Contact from './components/contact.component';
import Footer from './components/footer.component';

// Custom Styles
import "./styles/app.css";

function App() {
  return (
    <div className="App" id="App">
      <Router basename={process.env.PUBLIC_URL} >
       <TopNavBar />
       <br/>
       <Switch>
        <Route path ="/" exact component={MainBody}/>
        <Route path ="/Projects" component={Projects}/>
        <Route path ="/Contact" component={Contact}/>
       </Switch>
       <Footer />
    </Router>
    </div>
  );
}

export default App;
