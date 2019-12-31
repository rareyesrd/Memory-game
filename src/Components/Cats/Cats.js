import React from 'react';
import './Cats.css';

const Cats = (props) =>{
    return(
        <div className='Cats'>
            <div className='CatsImages'>
                <img src={props.src} alt={props.alt} onClick={props.click}/>
            </div>
        </div>
    );
}
export default Cats;