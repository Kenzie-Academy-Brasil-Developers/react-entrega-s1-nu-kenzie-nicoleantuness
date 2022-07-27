function TotalMoney({ listTransactions }) {
  
  return (
    <>
      <h2> $ {
               
              listTransactions.reduce((valorAtual, valorAnterior) => {
                    return valorAtual - valorAnterior.value
                  
                
              }, 0)
            }
      </h2>
    </>
  );
}


export default TotalMoney;
