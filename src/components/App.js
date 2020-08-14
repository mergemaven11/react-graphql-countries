import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import Search from "../pages/search";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Search} />
      </Switch>
    </div>
  );
};

export default App;
