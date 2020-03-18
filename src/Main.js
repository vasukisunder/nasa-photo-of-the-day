import React, {useState, useEffect} from "react";
import axios from "axios";
import Image from "./Image.js";
import Text from "./Text.js";
import "./index.css";
import "./Main.css";


export default function Main() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=x6Odw95aWRckf2rOsKvIrS3MNjyFWgnQvwkk5W3D')
        .then(response => {
            console.log(response.data);
            setData(response.data);
            
        })
        .catch(error => {
            console.log("error: ", error);
        })
    }, []);

    return (
        <div className='mainPage'>
            {[data].map(item => {
                return (
                    <div>
                    <Image imgUrl = {item.hdurl} />
                    <img id="nasa" src="https://salient-tech.com/wp-content/uploads/2014/08/NASA-worm-logo.png"></img>
                    
                    <Text 
                        title = {item.title}
                        date = {item.date}
                        desc = {item.explanation}
                        author = {item.copyright}
                     /> 
                
                    </div>
            )})}

        </div>

    )

}