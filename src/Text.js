import React, {useState} from "react";
import "./Main.css";



export default function Text(props){
    const [view, setView] = useState(false);


    return (
        <div className='textBox'>
            <h2 onClick={() => setView(!view)}>{props.title} + </h2>
            
                {view === true ? 
                     <div>
                         <h3 id="date">{props.date}</h3>
                         <p>{props.desc}</p>
                         <p id="copy">©  {props.author}</p>
                     </div> : console.log("hidden")}
           
           
        </div>
    );
}



