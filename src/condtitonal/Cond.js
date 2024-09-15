function Cond(props){
    const {carInfo}=props;
    return(<>
       <h1></h1>
       {carInfo.brand!==undefined&&carInfo.color!==undefined?<h1>hello</h1>:<h2>not hello</h2>}
          </>
    );

}
export default Cond;