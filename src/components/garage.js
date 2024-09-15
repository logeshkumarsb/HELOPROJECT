import Car from "./car"

function Garage(){
     return(
        <>
        <h1>we are in garage</h1>
        <Car brand="bmw" color="white"/>
        {/* <Car brand={some v1} /> this also possible   */}
        </>
     )
}

export default Garage;