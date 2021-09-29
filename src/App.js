import './App.css';
import { useEffect, useState } from 'react'
import Header from './components/Header';
import Home from './components/Home';
import Burger from './components/Burger';
import Pizza from './components/Pizza';
import Cart from './components/Cart';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import axios from 'axios';
require('dotenv').config();

function App() {
  const [items, updateItems] = useState([]);
  const [pizaas,uptatePizaas] =useState([]);
  const [burgers,uptateBurgers] =useState([]);
  const [cartItems, setCartItems]= useState([]);

  async function getItems() {
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/foodItems/list`);
      console.log('response', response);
      updateItems([...response.data.result]);
      uptatePizaas([...response.data.result[0].subItemsData.subItems]);
      uptateBurgers([...response.data.result[1].subItemsData.subItems]);
    } catch (err) {
      console.log('error while listing', err);
    }
  }
  useEffect(() => {
    getItems();
  }, []);
  const onAdd = (item) => {
    const exist = cartItems.find((x) => x._id === item._id);
    if (exist) {
      setCartItems(cartItems.map((x) => x._id === item._id ? { ...exist, qty: exist.qty + 1 } : x));
    } else {
      setCartItems([...cartItems, { ...item, qty: 1 }]);
    }
  };
  const onRemove =(item)=>{
    const exist = cartItems.find((x)=> x._id === item._id);
    if(exist.qty=== 1){
      setCartItems(cartItems.filter((x)=> x._id !== item._id));
    }else{
      setCartItems(
        cartItems.map((x)=>
        x.id === item._id ? {...exist, qty: exist.qty-1}:x
        )
      );
    }
  };
  const order= ()=>{ 
    setCartItems([]);
  }
  return (
    <Router>
      <div className="App">
        <Header countCartItems={cartItems.length}/>
        
        <Switch>
          <Route exact path="/">
            <Home items={items} />
          </Route>
          <Route path="/Pizza">
            <Pizza pizaas={pizaas} onAdd={onAdd} />
          </Route>
          <Route path="/Burger">
            <Burger burgers={burgers} onAdd={onAdd} />
          </Route>
          <Route path="/Cart">
            <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} order={order}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
