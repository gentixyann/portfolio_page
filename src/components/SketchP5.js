import { Component } from "react";

import React from 'react'
import Sketch from 'react-p5'

class SketchP5 extends Component {
    setup = (p5, canvasParentRef) => {
        p5.createCanvas(500, 400).parent(canvasParentRef)
    }
  
    draw = p5 => {
        p5.background(100, 130, 20)
        p5.ellipse(100, 100, 100)
        p5.ellipse(300, 100, 100)
    }

    render() {
        return <Sketch setup={this.setup} draw={this.draw} />
    }

}

export default SketchP5;