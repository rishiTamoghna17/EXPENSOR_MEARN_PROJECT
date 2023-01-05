
// import './App.css';
import {useEffect, useState} from 'react' 
function App() {
  const initialForm={
    amount:0,
    description:"",
    date:""
  }
  const [form, setform] = useState(initialForm)
  async function handleSubmit(e){
    e.preventDefault()
    const res= await fetch("http://localhost:4000/transaction",{
      method: "POST",
      body:JSON.stringify(form),
      headers: {'Content-Type': 'application/json'}
    })
    if (res.ok){
      setform(initialForm)
      fetchTransactions()
    }
    // const data = await res.json();
    // console.log(data)
  }
  function handleInput(e){
    setform({...form,[e.target.name]:e.target.value})
  }
  useEffect(()=>{
    fetchTransactions()
  },[]) 
  const [transactions, settransactions] = useState([])
  async function fetchTransactions(){
    const res = await fetch("http://localhost:4000/transaction",{method: "GET"})
    const {data} = await res.json()
    settransactions(data)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="number" name="amount" value={form.amount}  onChange={handleInput} placeholder = "enter transaction amount"/>
        <input type="text" name="description" value={form.description} onChange={handleInput} placeholder = "enter transaction details"/>
        <input type="date" name="date" value={form.date} onChange={handleInput}/>
        <button type="submit">submit</button>
      </form>

      <br />
      <section>
        <table>
          <thead>
            <th>amount</th>
            <th>description</th>
            <th>date</th>
          </thead>
          <tbody>
            {transactions.map((trx)=>(
              <tr key={trx._id}>
              <td>{trx.amount}</td>
              <td>{trx.description}</td>
              <td>{trx.date}</td>
            </tr>
              
            ))}
            </tbody>
        </table>
      </section>
    </div>
  );
} 

export default App;
