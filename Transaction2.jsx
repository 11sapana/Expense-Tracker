import { ListItem, ListItemText, ListItemIcon } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


function Transaction2({ transaction,setTransaction }) {

  const deletTransaction = () => {

    setTransaction (transaction.filter()) 
    
  }
  return (
    <div className='fifth'>
      <ListItem>
        <ListItemIcon>
          <DeleteIcon onClick={() => deletTransaction()} />
        </ListItemIcon>
        <div>{transaction.text}</div>
        <div>{transaction.amount}</div>
      </ListItem>
    </div>
  )
}
export default Transaction2;