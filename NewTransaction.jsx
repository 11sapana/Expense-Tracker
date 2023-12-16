import { Button, TextField } from "@mui/material";
import { useState } from "react";
// import Transaction from "./Transactions";

function NewTransaction({ setTransaction }) {
    const [text, setText] = useState('');
    const [amount, setAamount] = useState()

    const addTransaction = () => {
        const transaction = {
            id: Math.floor(Math.random() * 1000000),
            text: text,
            amount: +amount
        }
        setTransaction(prevState => [transaction, ...prevState]);
    }
    return (
        <div className="third" >
            <h3>New Transaction</h3>
            <TextField label="Entre Input" onChange={(event) => setText(event.target.value)} />
            <TextField label="Entre amount" onChange={(event) => setAamount(event.target.value)} />
            <Button variant="contained" onClick={() => addTransaction()} >Add Transaction</Button>
        </div>
    )

}
export default NewTransaction;