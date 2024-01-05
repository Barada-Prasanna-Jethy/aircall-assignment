import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header.jsx";
import CallListContainer from "./components/CallListContainer.jsx";

const App = () => {
  return (
    <div className="container">
      <Header />
      <CallListContainer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
