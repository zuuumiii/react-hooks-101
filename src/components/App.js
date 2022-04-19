import React, { useReducer } from "react";
import AppContext from "../contexts/AppContext";
import "bootstrap/dist/css/bootstrap.min.css";
import reducer from "../reducers/index";
import Events from "./Events";
import EventForm from "./EventForm";

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <AppContext.Provider value={"HelloProvider"}>
      <div className="container-fluid">
        <EventForm state={state} dispatch={dispatch} />
        <Events state={state} dispatch={dispatch} />
      </div>
    </AppContext.Provider>
  );
};

export default App;
