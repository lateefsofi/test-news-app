import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ArticleList from "../pages/article-list";
import ArticleDetails from "../pages/article-details";

export const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ArticleList}/>
        <Route path="/article-details/:itemIndex" component={ArticleDetails}/>
      </Switch>
    </Router>
  )
}

export default AppRoutes;