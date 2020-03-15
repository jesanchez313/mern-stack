import React from "react";
import Home from "pages/Home";
import Create from "pages/Create";

import { Switch, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/create" component={Create} />
      </Switch>
    </>
  );
};

export default App;
