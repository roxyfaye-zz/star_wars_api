import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';

// IMPORT REACT ROUTER <<<<<<<<<<<<<<<<<<<<<<
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// IMPORT COMPONENTS <<<<<<<<<<<<<<<<<<<<<<
import Explorer from '../src/components/Explorer.js';
import Films from '../src/components/Films.js';
import BaseLayout from '../src/components/Layout.js';
import People from '../src/components/People.js';
import Starships from '../src/components/Starships.js';

ReactDOM.render(


    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route exact path="/" component={Explorer}/>
          <Route path="/Starships" component={Starships} />
          <Route path="/Films" component={Films}/>
          <Route path="/People" component={People}/>
        </Switch>
      </BaseLayout>
    </BrowserRouter>


,document.getElementById('root'));
registerServiceWorker();
