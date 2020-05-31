import React,{ Component } from 'react';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';

import '../src/navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import ContactList from    "./components/contact-list.component";
import UpdateContact from  "./components/update-contact.component";
import CreateContact from  "./components/create-contact.component";


class App extends Component {
  render(){
  return (
    

    <Router>
      
    <div className="container">
    <body class="page-body">
    <header class='page-header'>
    <div>
    <p class='logo'>Phonebook</p>
      </div>
    </header>
    <nav class="navbar">   
    <Link to="/" class="navbar-brand">PhoneBook-Web-App</Link>
    </nav>
    <Link to="/" class="js-insert btn btn-danger  margin-left">Show All</Link>
    <Link to="/create" class="js-insert btn btn-primary  margin-left">Insert</Link> 
    <Link to="/update/:id" class="js-delete btn btn-danger  margin-left">delete</Link> 
    
     <Route path="/" exact component={ContactList} />
     <Route path="/create" component={CreateContact} />
     <Route path="/update/:id" component={UpdateContact} />
     </body>
    </div>
 
    </Router>
  );
  }
}

export default App;
