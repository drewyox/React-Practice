import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import {Switch, Route} from 'react-app-dom';
import NewTicketForm from './NewTicketForm';

function App(){
  return(
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={TicketList} />
      </Switch>
    </div>
  );
}

export default App;
