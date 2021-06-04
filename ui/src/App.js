import {BrowserRouter, Route} from 'react-router-dom';
import ProductScreen from './routes/ProductScreen';
import HomeScreen from './routes/HomeScreen';
import CartScreen from './routes/CartScreen';
function App() {
  return (
      <BrowserRouter>
    <div className="grid-container">
    <header className="row">
        <div>
            <a className="brand" href="/">Wingers</a>
        </div>
        <div>
            <a href="/signin">Sign in</a>
            <a href="/cart">Cart</a>
        </div>
    </header>
        <main>
    <Route path="/cart/:id?" component={CartScreen}></Route>
    <Route path="/product/:id" component={ProductScreen}></Route>
    <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center">
            Copyright Wingers.in 2021
        </footer>
        </div>
        </BrowserRouter>
  );
}

export default App;
