import React , { Component } from 'react';

import classes from './Slider.module.css';
import SliderContent from './SliderContent/SliderContent';
import Arrow from './Arrow/Arrow';


import img1 from '../../assets/image/img_1.jpg';
import img2 from '../../assets/image/img_2.jpg';
import img3 from '../../assets/image/img_3.jpg';


const headings = {
    cont1: {
        h1: 'alpha',
        h2: 'in all digital',
        h3: 'agencies',
    },
    cont2: {
        h1: 'dominate',
        h2: 'your',
        h3: 'online market'  
    },
    cont3: {
        h1: 'sky rocket',
        h2: 'your',
        h3: 'business'
    },
}
const heading1 = headings.cont1;
const heading2 = headings.cont2;
const heading3 = headings.cont3;



class Slider extends Component {
    constructor() {
        super();
        this.autoplayRef = React.createRef();
    }
    state = {
        sliderArray: [
            <SliderContent url={img1} h1={heading1.h1} h2={heading1.h2} h3={heading1.h3} />,
            <SliderContent url={img2} h1={heading2.h1} h2={heading2.h2} h3={heading3.h3} />,
            <SliderContent url={img3} h1={heading3.h1} h2={heading3.h2} h3={heading3.h3} />,
        ],
        x: 0
    }
    componentDidMount() {
        this.autoplayRef.current = this.goRight;
        const play = () => {
            this.autoplayRef.current();
        }
        const interval = setInterval(play,3000);
        return () => clearInterval(interval);
    }

    
    goLeft = () => {
        //  this.setState({x: this.state.x + 100})
        this.state.x === 0 ? this.setState((prevState) => {
           return {x: -100*(prevState.sliderArray.length - 1)}
        }) :
        this.setState((prevState) => {
           return {
            x: prevState.x + 100
           }
        })
    }

    goRight = () => {
        // this.setState({x: this.state.x - 100})
        this.state.x === -100*(this.state.sliderArray.length-1) ?
        this.setState({x: 0}) : this.setState((prevState) => {
            return {
                x: prevState.x - 100
            }
        })
    }

    render() {
        
        return (
            <div className={classes.Slider}>
                
                {this.state.sliderArray.map((item , i) => {
                    return (
                        <div key={i} className={classes.slide} style={{transform: `translateX(${this.state.x}%)`}}>
                            {item}
                            
                        </div>
                    );
                })}
                <Arrow content="Left" clicked={this.goLeft}/>
                <Arrow content="Right" clicked={this.goRight}/>
            </div>
        )
    }
}

export default Slider;