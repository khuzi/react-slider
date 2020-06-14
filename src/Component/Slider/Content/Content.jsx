import React  from 'react';

import 'animate.css';

import classes from './Content.module.css';

const Content = (props) => {

    return (
        <div>
        <div className={classes.content1}>
            <h1>{props.h1}</h1>
            <h1>{props.h2}</h1>
            <h1>{props.h3}</h1>
        </div>
        <div className={classes.content2}>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing. <br/>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum. <br/>
                Lorem, ipsum.
            </p>
            <button className={classes.pgBtn}> 
                CONTACT US
            </button>
        </div>
    </div>
    );
}; 

export default Content;