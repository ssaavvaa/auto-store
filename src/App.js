import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/app.scss';
import MainPage from './pages/main_page';
import CatalogAllTypes from './pages/catalog';
import CatalogTypes from './pages/catalog_types';
import CatalogTypeMarks from './pages/catalog_types_marks';
import NotFound from './pages/404';
import Header from './components/header';
import Footer from './components/footer';

export default () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/catalog" component={CatalogAllTypes} />
        <Route exact path="/catalog/:type" component={CatalogTypes} />
        <Route exact path="/catalog/:type/:mark" component={CatalogTypeMarks} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
};
