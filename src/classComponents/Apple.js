import React from "react";
class Apple extends React.Component{
    constructor(){
        super();
        this.state={color:"red"};
    }
     render(){
        return(
            <>
            <h2>
                Im apple {this.state.color}
            </h2>
            <h2>
            </h2>
            <button onClick={()=>{this.setState({color:"blue"})}}>change</button>
            </>
        )
     }
}
export default Apple;