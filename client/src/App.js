import logo from './logo.svg';
import {Link,Switch,Route,Redirect} from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import ViewOne from './components/ViewOne';
import Create from './components/Create';
import UpdateOne from './components/UpdateOne'
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Redirect to="/authors"/>
        </Route>
        {/* Create */}
        <Route exact path="/authors">
          <Main/>
        </Route>
        <Route exact path="/authors/new">
          <Create/>
        </Route>
        {/* Read One */}
        <Route exact path="/authors/:id">
          <ViewOne/>
        </Route>
        
        {/* updateOne */}
        <Route exact path="/authors/edit/:id">
          <UpdateOne/>
        </Route>
        {/* Read all */}

      </Switch>
    </div>
  );
}

export default App;
