import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import Register from "./pages/Register";
import MyProfile from "./pages/MyProfile";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/signup" component={Signup} />
      <Route path="/register" component={Register} />
      <Route path="/myprofile" component={MyProfile} />
    </BrowserRouter>
  );
};

export default Routes;