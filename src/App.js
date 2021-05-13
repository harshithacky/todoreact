import React, {useState} from 'react';
import Item from './Item';
const App = () => {

  const [inputVal, setInputVal] = useState("");
  const [items, setItems] = useState([]);

  const inputEvent = (event) => {
    setInputVal(event.target.value);
  };

  const listOfItems = () => {
    setItems( (oldvalue) => {
      return [...oldvalue, inputVal];
    } )
    setInputVal("");
  };

  const deleteItem = (id) => {
    setItems((oldvalue)=>{
      return oldvalue.filter((elem,index)=>{
        return id!==index;
      })
    })
  }

  return(
    <>
      <div className='main_div'>
        <div className='center_div'>
          <br/>
          <h1>ToDo List</h1>
          <br/>
          <input placeholder='Enter an item' onChange={inputEvent} value={inputVal}/>
          <button onClick={listOfItems}> + </button>
          <ol>
            {items.map( (itemval, index) => {
             return itemval!==""? <Item itemval={itemval} key={index} id={index} onSelect={deleteItem}/>:null
            } )}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;