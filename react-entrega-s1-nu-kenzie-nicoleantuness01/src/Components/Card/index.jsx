function Cards({transaction, index }) {

  return (
    <li key={index}>
      {transaction.type === "Entrada" || transaction.value > 0 ? (
        <div
          className="container-in-out"
          style={{ backgroundColor: "#03B898" }}
        ></div>
      ) : (
        <div
          className="container-in-out"
          style={{ backgroundColor: "#E9ECEF" }}
        ></div>
      )}

      <div className="container-description">
        <h1>{transaction.description}</h1>
        {transaction.value > 0 ? <p >Entrada</p> : <p>Saída</p>}
      </div>
      <div className="container-valor">
        <h2>R${transaction.value}</h2>
        <button >x</button>
      </div>
    </li>
  );
}

export default Cards;
