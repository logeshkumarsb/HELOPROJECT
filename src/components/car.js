import Cond from "../condtitonal/Cond";
function Bike(){
    function shoot(){
        alert("trigger");
        alert("shooting");
    }
    return (
        <>
          <h1>im bike</h1>
          <button onClick={shoot}>triiger the pul</button>
        </>
    );
}
function Car(props){
    const {brand}=props;
    const {color}=props;
    const carInfo={brand:"bmw",color:"white"};
    //const {brand,color}=props both are possibe
    const text=`hi im a ${brand} with ${color}`;
    return (
        <>
         <h1>{text}</h1>
         <Bike/>
         <Cond carInfo={carInfo}/>
         </>
    );
}
export default Car;
