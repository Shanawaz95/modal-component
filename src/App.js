import "./App.css";
import Modal from "./components/modal/Modal";
import Home from "./components/Home/Home";
import { Switch, Route, useLocation } from "react-router-dom";

function App() {
  let location = useLocation();
  let BASE_URL = `${window.location.origin}${location.pathname}`;

  return (
    <div className="container">
      <h1 className="App-header">Modal component</h1>
      <hr />

      <Switch>
        <Route exact path="/" children={<Home />} />
        <Route
          path="/modal1"
          children={<Modal BASE_URL={BASE_URL} heading={"modal"}></Modal>}
        />
      </Switch>
    </div>
  );
}

export default App;
