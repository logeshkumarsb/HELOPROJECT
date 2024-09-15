import { useState } from "react";
import ReactDOM from 'react-dom/client';

function Form() {
  const [name, setName] = useState("");

  return (
    <form>
      <label>Enter your name:
        <input
          type="text"
          id="name1" 
          value={name}
        //   onChange={(e) => setName(e.target.value)}
        />
        {/* const val=document.getElementById("name1"); */}
        <button onClick={(val)=>setName(val.target.value)}>change</button>
      </label>
      {/* <label></label> */}
      <h1>My name is {name}</h1>
    </form>
  )
}
export default Form;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Form />);