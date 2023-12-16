

function ExpenseCard({transaction }){
  const amount = transaction.map(transaction => transaction.amount);
  const income = amount. filter(item => item>0).reduce((amount,item) => (amount +=item),0).toFixed(2)
  const expense = amount. filter(item => item<0).reduce((amount,item) => (amount +=item),0).toFixed(2)


    return(
    <div className="second">
          <div className="section1">
            <p1 >Income</p1>
            <h3 style={{color:'green'}}> ₹ {income}</h3>
            </div>
    <div className="section2">
       <p1>Expense</p1>
       <h3 style={{color:'red'}} >₹{expense}</h3>
</div>  
    </div>
    )
}
export default ExpenseCard;