import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./Example/MyComponent";

/**
 * 2 component types: class component, function cmp(function, arrow)
 *
 *
 *
 */

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello world from React to Torres</p>

        <MyComponent />
      </header>
    </div>
  );
};

export default App;
