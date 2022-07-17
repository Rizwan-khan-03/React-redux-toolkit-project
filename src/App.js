// import './App.css';
import Header from './containers/Header';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';
import Home from './containers/Home';
import Cart from './containers/Cart';
import Message from './containers/Message';
import { Provider } from 'react-redux';
import store from './store/store';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Router>
        <Header />
        <Routes>
           <Route  path = '/' exact element={<Home />} />
           <Route path = '/cart' exact element={<Cart />} />
           <Route path = '/message' exact element={<Message />} />
          <Route>404 Not Found</Route>
        </Routes>
        </Router>
        </Provider>
    </div>
  );
}

export default App;
