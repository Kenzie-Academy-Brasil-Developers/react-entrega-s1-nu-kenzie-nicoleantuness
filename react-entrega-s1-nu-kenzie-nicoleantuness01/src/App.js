import { useState } from "react";

import Form from "./Components/Form/index.jsx";
import List from "./Components/List/index.jsx";
import logo from "./assets/logo.png";

import "./App.css";

function App() {
  const [listTransactions, setListTransactions] = useState([
   
  ]);
  const [filter, setFilter] = useState([
   
  ])

  return (
    <div className="App">
      <header>
        <img src={logo} alt="teste" />
        <button>Início</button>
      </header>
      <div className="wrapper">
        <Form
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
          setFilter={setFilter}
        />
        <List setListTransactions={setListTransactions} listTransactions={listTransactions} filter={filter} setFilter={setFilter}  />
      
      </div>
    </div>
  );
}

export default App;
