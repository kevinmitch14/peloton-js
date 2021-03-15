import MenuItem from './Components/MenuItem'
import Header from './Components/Header'
import Input from './Components/Input';
import { useState } from 'react';



/*

API Implementation using fetch API, could also opt for axios here
API request inside useEffect to run on app load, could also alter to make an API call when User Input changes etc.
Depending on how many requests need to be made could add Promise.All or Promise.AllSettled

useEffect(() => {
  const APIFetch = async () => {
  try


  Option 1
  const data = fetch(endpoint)
  .then(res => res.json)
  .then(data => setData(data))
  .catch(err => handle eror)


  Option 1
  const endpoint = 'http://randomAPIendpoint/v1/5895786503562308
  let data = await fetch(endpoint)
  data = await data.json
  setData(data)
  catch
  .catch((err) => handle error)
  }

  APIFetch()

})

*/

const App = () => {
  // Initialising variables
  const [filterInput, setFilterInput] = useState('')
  const [sortInput, setSortInput] = useState('')
  const [categoryInput, setCategory] = useState('')
  const [cart, setCart] = useState([])


  /* Handler functions for the pieces of state would have used something like
   redux but as local storage was mentioned i nthe brief this was my approach
   */

  const filterHandler = (event) => {
    setFilterInput(event.target.value)
  }

  console.log(filterInput)

  const sortHandler = (event) => {
    setSortInput(event.target.value)
  }

  const cartHandler = (item) => {
    setCart((prevState) => [...prevState, item])
  }

  const categoryHandler = (category) => {
    setCategory(category)
  }

  return (
    <div className="App">
      <Header cart={cart} />
      <Input filterHandler={filterHandler} sortHandler={sortHandler} categoryHandler={categoryHandler} />
      <MenuItem filterInput={filterInput} cartHandler={cartHandler} sortInput={sortInput} categoryInput={categoryInput} />
    </div>
  );
}

export default App;
