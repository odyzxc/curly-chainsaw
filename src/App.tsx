import React from "react";
import "./App.css";
import { Users } from "./features/users/Users";
import Notifications from "./features/notifications/Notifications";

function App() {
  return (
    <div className="App">
      <Users />
      <Notifications />
    </div>
  );
}

export default App;
