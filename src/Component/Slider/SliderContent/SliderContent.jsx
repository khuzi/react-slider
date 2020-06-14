import React from 'react';

import classes from './SliderContent.module.css';
import Aux from '../../../hoc/Auxilary/Auxilary';
import Content from '../Content/Content';

const sliderContent = (props) => {
    return (
        <Aux>
            <img className={classes.image} src={props.url} alt="slide-img"/>
            <Content h1={props.h1} h2={props.h2} h3={props.h3} c1={props.c1} c2={props.c2} c3={props.c3}/>
        </Aux>
    );

};

export default sliderContent;