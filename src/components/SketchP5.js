import { Component } from "react";

import React from 'react'
import Sketch from 'react-p5'

class SketchP5 extends Component {
    
    constructor(props) {
        super();
    }

    colorPalette = ["#780000","#c1121f","#fdf0d5","#003049","#669bbc"];

    setup = (p5, canvasParentRef) => {
        p5.createCanvas(p5.windowWidth, 200).parent(canvasParentRef);
        p5.background(255);
    }

  
    draw = p5 => {
        p5.strokeWeight(0.2);
        let randomColor = p5.random(this.colorPalette);
        p5.stroke(randomColor);
        p5.line(p5.windowWidth /2, 100, p5.mouseX, p5.mouseY);
    }

    

    render() {
        return <Sketch setup={this.setup} draw={this.draw} />
    }

}

export default SketchP5;