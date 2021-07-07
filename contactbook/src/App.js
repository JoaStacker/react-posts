import './App.css'; 
import { Provider } from 'react-redux';
import { Contact } from './components/contacts/Contact';
import { Navbar } from './components/Navbar';
import { AddContact } from './components/AddContact';
import { EditContact } from './components/EditContact';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import store from "./store"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <div className="py-3">
              <Switch>
                <Route exact path="/" component={Contact} />
                <Route exact path="/contacts/add" component={AddContact} />
                <Route exact path="/contacts/edit/:id" component={EditContact} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
