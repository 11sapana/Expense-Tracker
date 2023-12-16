
function Balance({ transaction }
) {
  const amount = transaction.map(transaction => transaction.amount);
  const total = amount.reduce((amount, item) => (amount += item), 0).toFixed(2)
  return (
    <div className="Header">
      <div>Balance:₹{total}</div>
    </div>
  )
}
export default Balance;