import React from 'react';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import {NavLink, Link , Route, Switch} from 'react-router-dom';
import Product from './Product';
import CategoriesInDb from './CategoriesInDb';
import LastProductInDb from './LastProductInDb';
import Error from './Error';


function App() {
  return (
    <React.Fragment>
      	<div id="wrapper">
          <SideBar />
          <Switch>

          <Route path='/' exact>
              <ContentWrapper/>
          </Route>

          <Route path="/Product" component={Product}/>

          <Route path="/CategoriesInDb" component={CategoriesInDb}/>

          <Route path="/LastProductInDb" component={LastProductInDb}/>

          <Route component={Error}/>

          </Switch>
        </div>
    </React.Fragment>
  );
}

export default App;
