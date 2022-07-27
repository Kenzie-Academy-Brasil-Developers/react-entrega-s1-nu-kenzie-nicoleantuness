import { useState } from "react";
import TotalMoney from "../TotalMoney";

function Form({ listTransactions, setListTransactions, setFilter }) {
  const [description, setDescription] = useState("");
  const [valueInput, setValueInput] = useState("");
  const [selectInput, setSelectInput] = useState("Entrada");

  return (
    <main>
      <div className="container-form">
        <form>
          <p className="title">Descrição</p>
          <div className="input-description">
            <input
              type="text"
              placeholder="Digite aqui sua descrição"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>
          <p className="text-ex">Ex: Compra de roupas</p>
          <div className="container-sub">
            <p className="title" id="value">
              Valor
            </p>
            <p className="title">Tipo de valor</p>
          </div>
          <div className="container-valor">
            <input
              type="number"
              placeholder="R$"
              value={valueInput}
              onChange={(event) => setValueInput(event.target.value)}
            />
            <select
              name=""
              value={selectInput}
              onChange={(event) => setSelectInput(event.target.value)}
            >
              <option value="Entrada">Entrada</option>
              <option value="Saida">Saída</option>
            </select>
          </div>
          <button
            className="button-form"
            type="button"
            onClick={() => {
              setListTransactions([
                ...listTransactions,
                {
                  description: description,
                  type: selectInput,
                  value: parseInt(valueInput),
                },
              ]);
              setFilter([
                ...listTransactions,
                {
                  description: description,
                  type: selectInput,
                  value: parseInt(valueInput),
                },
              ]);
            }}
          >Inserir valor</button>
        </form>
      </div>
      <div className="wrapper-total">
        <div className="total-text">
          <h1>Valor total</h1>
          <p>O valor se refere ao saldo</p>
        </div>
        <TotalMoney listTransactions={listTransactions} />
      </div>
    </main>
  );
}

export default Form;
