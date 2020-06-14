import React from 'react';

import classes from './Arrow.module.css';

const arrow = (props) => {
    let classesDiv = [classes.Arrow , classes.LeftArrow];
    let classesSpan = [classes.arrow , classes.arrowLeft];
    if (props.content === "Right") {
        classesDiv = [classes.Arrow , classes.RightArrow];
        classesSpan = [classes.arrow , classes.arrowRight];
    }
    return (
        
        <div className={classesDiv.join(' ')}>
            <span className={classesSpan.join(' ')} onClick={props.clicked}></span>
        </div>  
    );
};

export default arrow;