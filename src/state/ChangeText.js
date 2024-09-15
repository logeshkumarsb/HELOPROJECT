import {useState} from "react";
function ChangeText(){
     const[color,setColor]=useState("blue");
     let cnt=0;
     return(
         <>
            <h1>Hi im logesh my favorite color is {color}</h1>
            <button onClick={()=>{cnt%2===0?setColor('red'):setColor('blue');cnt++;}}>Click me</button>
         </>
     );
}
export default ChangeText;