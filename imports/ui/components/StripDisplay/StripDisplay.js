import React, { Component } from 'react';
import { fabric } from 'fabric';

import './StripDisplay.css';

class StripDisplay extends Component {
  componentDidMount() {
    this.fabricCanvas = new fabric.Canvas(this.canvas.id);
    this.fabricCanvas.defaultCursor = 'pointer';
    this.fabricCanvas.setBackgroundColor('#000');

    window.addEventListener('resize', this.resizeCanvas, false);

    this.resizeCanvas();
  }

  resizeCanvas = () => {
    this.fabricCanvas.setWidth(window.innerWidth);
    this.fabricCanvas.setHeight(window.innerHeight * 0.6);
    this.fabricCanvas.renderAll();
  }

  addMaterial = () => {
    const material = new fabric.Rect({
      left: 0,
      top: 0,
      fill: 'red',
      width: 100,
      height: 10,
    });

    this.fabricCanvas.add(material);
  }

  handleFormChange = (e) => {
    e.preventDefault();

    const name = e.target.name;
    console.log(name);
  }

  render() {
    return (
      <div>
        <canvas id="stripView" ref={(elem) => this.canvas = elem}></canvas>
        <div id="stripControls">
          <button onClick={this.addMaterial}>Add Material</button>
          <form onChange={this.handleFormChange}>
            <div>
              <input type="text" name="name" placeholder="Enter Material Name" />
            </div>
            <div>
              <input type="number" name="length" placeholder="Enter Material Length (in millimeters)" />
            </div>
            <div>
              <input type="number" name="offset" placeholder="Enter Material Name (in millimeters)" />
            </div>
            <div>
              <label>Front: <input type="checkbox" name="front" /></label>
            </div>
            <div>
              <label>Back: <input type="checkbox" name="back" /></label>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default StripDisplay;
