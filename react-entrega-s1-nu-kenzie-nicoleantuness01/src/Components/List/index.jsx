import Cards from "../Card/index.jsx";
/* import CardVazio from "../Card/CardVazio.jsx" */


function List({ listTransactions, setListTransactions, filter, setFilter}) {
 
  function filterTodos() {
    setFilter([])
  }

  function filterEntradas() {
    setFilter(listTransactions.filter((elem) => elem.type === "Entrada"))
   }

   function filterSaidas() {
    setFilter(listTransactions.filter((elem) => elem.type === "Saida"))  
    console.log(listTransactions)
   }

  return (
    <main className="card-historico">
      <section className="container-filter">
        <h1>Resumo financeiro</h1>
        <div className="filter">
          <button onClick={() => filterTodos()}>Todos</button>
          <button onClick={() => filterEntradas()}>Entradas</button>
          <button onClick={() => filterSaidas()}>Despesas</button>
        </div>
      </section>
      <ul>
        {
          filter.length > 0 ? (
            filter.map((transaction, index) => 
          (<Cards transaction={transaction} key={index} />)
          )):(
            listTransactions.map((transaction, index) => 
          (<Cards transaction={transaction} key={index} />)
          ))
        }
        
      </ul>
    </main>
  );
}

export default List;
