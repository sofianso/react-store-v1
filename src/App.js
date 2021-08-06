import "./App.css";
import Navbar from "./components/Navbar";
import home from "./pages/home";
import about from "./pages/about";
import menu from "./pages/menu";
import cart from "./pages/cart";
import error from "./pages/error";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import homeBanner from "./pages/homeBanner";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={home}></Route>
          <Route exact path="/about" component={about}></Route>
          <Route exact path="/menu" component={menu}></Route>
          <Route exact path="/cart" component={cart}></Route>
          <Route path="*" component={error}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
