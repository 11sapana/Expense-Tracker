import { Divider, List } from "@mui/material"

import Transaction2 from "./Transaction2";
function Transaction({ transaction, setTransaction }) {
    return (
        <>
            <div className="forth">
                <p>Transaction History</p>
            </div>
            <Divider />
            <List>
                {
                    transaction.map(transaction => (
                        <Transaction2 transaction={transaction} />
                    ))

                }
            </List>
        </>
    )
}

export default Transaction;