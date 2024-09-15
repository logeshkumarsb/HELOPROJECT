function Header1(){
    return (
      <>
      <h1 style={{color:"red"}}>
         Hello Styling
      </h1>
      <p>
         add a little style
      </p>
      </>
    );
}
function Header(){
    const mystyle={
        color:"red",
        backgroundcolor:"lightblue",
        padding:"10px"
    }
    return (
      <>
      <h1 style={mystyle}>
         Hello Styling
      </h1>
      <p>
         add a little style
      </p>
      </>
    );
}
export default Header; 