function ListItem(props) {
    const { carInfo } = props;
    const { brand, color } = carInfo;
    return <li>I'm a {brand} and {color}</li>;
}

function ListGen() {
    const carInfo = [
        { brand: "BMW", color: "white" },
        { brand: "BMW2", color: "white" },
        { brand: "BMW3", color: "white" }
    ];

    return (
        <ul>
            {carInfo.map((val) => 
                <ListItem  carInfo={val} />
            )}
        </ul>
    );
}

export default ListGen;