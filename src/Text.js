import React, {useState} from "react";
import "./Main.css";
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import styled, { css } from 'styled-components';



// export default function Text(props){
//     const [view, setView] = useState(false);
//     return (
//         <div className='textBox'>
//             <h2 onClick={() => setView(!view)}>{props.title} + </h2>
//                 {view === true ? 
//                      <div>
//                          <h3 id="date">{props.date}</h3>
//                          <p>{props.desc}</p>
//                          <p id="copy">©  {props.author}</p>
//                      </div> : console.log("hidden")}
//         </div>
//     );
// }




export default function Text(props){
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='textBox'>
      <Button color="info" onClick={toggle} style={{ marginBottom: '1rem' }}>What's This?</Button>
      <Collapse isOpen={isOpen}>
        <Card  style = {  {backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
          <CardBody className="text-white" style ={{fontSize: '20px'}}>
            <h2 style ={{fontSize: '16px'}}>{props.title}</h2>
            <h3 id="date">{props.date}</h3>
            <p style ={{fontSize: '14px'}}>{props.desc}</p>
            <p id="copy">©  {props.author}</p>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}
