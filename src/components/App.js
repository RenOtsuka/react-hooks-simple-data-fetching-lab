// create your App component here
import React, {useState, useEffect} from "react";


function App(){

    const [isLoaded, setIsLoaded] = useState(false);
    const [randomDogImage, setRandomDogImage] = useState("");

    useEffect( () => {
        fetch(`https://dog.ceo/api/breeds/image/random`)
        .then(resp => resp.json())
        .then(data => {
            setRandomDogImage(data.message)
            setIsLoaded(true);
        });
    }, []);

    if(!isLoaded){
        return <p>Loading...</p>;
    }

    return (
        <img src={randomDogImage} alt="A Random Dog"/>
    );
}


export default App;
