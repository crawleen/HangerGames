import React from 'react';
import PropTypes from 'prop-types';

import './Roulette.css';


class Roulette extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spinAngleStart: 0,
      startAngle: 0,
      spinTime: 0,
      arc: Math.PI / (props.options.length / 2),
    }
    this.spinTimer = null;
    this.handleOnClick = this.handleOnClick.bind(this);
    this.spin = this.spin.bind(this);
    this.rotate = this.rotate.bind(this);
    this.drawRouletteWheel = this.drawRouletteWheel.bind(this);
    this.getColor = this.getColor.bind(this);
    this.RGB2Color = this.RGB2Color.bind(this);
    this.stopRotateWheel = this.stopRotateWheel.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  static propTypes = {
    className: PropTypes.string,
    options: PropTypes.array,
    baseSize: PropTypes.number,
    spinAngleStart: PropTypes.number,
    spinTimeTotal: PropTypes.number,
    onComplete: PropTypes.func,
  };

  static defaultProps = {
    options:  ['item1', 'item2', 'item3', 'item4', 'item5'],
    baseSize: 400,
    spinAngleStart: Math.random() * 10 + 10,
    spinTimeTotal: Math.random() * 3 + 4 * 1000,
  };

  componentDidMount() {
    this.drawRouletteWheel();
  }
  componentDidUpdate(){
    this.state.arc = Math.PI / (this.props.options.length / 2);
    this.drawRouletteWheel();
  }

  byte2Hex(n) {
    const nybHexString = '0123456789ABCDEF';
    return String(nybHexString.substr((n >> 4) & 0x0F,1)) + nybHexString.substr(n & 0x0F,1);
  }

  RGB2Color(r,g,b) {
  	return '#' + this.byte2Hex(r) + this.byte2Hex(g) + this.byte2Hex(b);
  }

  getColor(item, maxitem) {
    const phase = 0;
    const center = 128;
    const width = 128;
    const frequency = Math.PI*2/maxitem;

    const red   = Math.sin(frequency*item+2+phase) * width + center;
    const green = Math.sin(frequency*item+0+phase) * width + center;
    const blue  = Math.sin(frequency*item+4+phase) * width + center;

    return this.RGB2Color(red,green,blue);
  }

  drawRouletteWheel() {
    const { options, baseSize } = this.props;
    let { startAngle, arc } = this.state;

    // const spinTimeout = null;
    // const spinTime = 0;
    // const spinTimeTotal = 0;

    let ctx;

    const canvas = this.refs.canvas;
    if (canvas.getContext) {
      const outsideRadius = baseSize -5; // - 25;
      const textRadius = baseSize - 55; // - 45;
      const insideRadius = baseSize - 95; // - 55;

      ctx = canvas.getContext('2d');
      ctx.clearRect(0,0,600,600);

      ctx.strokeStyle = 'white';
      ctx.lineWidth = 2;

      ctx.font = '16px Montserrat, sans-serif';

      for(let i = 0; i < options.length; i++) {
        const angle = startAngle + i * arc;

        ctx.fillStyle = this.getColor(i, options.length);

        ctx.beginPath();
        ctx.arc(baseSize, baseSize, outsideRadius, angle, angle + arc, false);
        ctx.arc(baseSize, baseSize, insideRadius, angle + arc, angle, true);
        ctx.fill();

        ctx.save();
        ctx.fillStyle = 'white';
        ctx.translate(baseSize + Math.cos(angle + arc / 2) * textRadius,
                      baseSize + Math.sin(angle + arc / 2) * textRadius);
        ctx.rotate(angle + arc / 2 + Math.PI / 2);
        const text = options[i].name;
        ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
        ctx.restore();
      }

      //Arrow
      ctx.fillStyle = 'black';
      ctx.beginPath();
      ctx.lineTo(baseSize + 10, baseSize - (outsideRadius + 20));
      ctx.lineTo(baseSize + 0, baseSize - (outsideRadius - 5));
      ctx.lineTo(baseSize - 10, baseSize - (outsideRadius + 20));
      ctx.fill();
      ctx.stroke();
    }
  }

  spin() {
    this.spinTimer = null;
    this.setState({ spinTime: 0}, () => this.rotate());
  }

  rotate(){
    const { spinAngleStart, spinTimeTotal } = this.props;
    if(this.state.spinTime > 2800) {
      clearTimeout(this.spinTimer);
      this.stopRotateWheel();
    } else {
      const spinAngle = spinAngleStart - this.easeOut(this.state.spinTime, 0, spinAngleStart, spinTimeTotal);
      this.setState({
        startAngle: this.state.startAngle + spinAngle * Math.PI / 180,
        spinTime: this.state.spinTime + 30,
      }, () => {
        this.drawRouletteWheel();
        clearTimeout(this.spinTimer);
        this.spinTimer = setTimeout(() => this.rotate(), 30);
      })
    }
  }

  stopRotateWheel() {
    let { startAngle, arc } = this.state;
    const { options, baseSize } = this.props;

    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');

    const degrees = startAngle * 180 / Math.PI + 90;
    const arcd = arc * 180 / Math.PI;
    const index = Math.floor((360 - degrees % 360) / arcd);
    ctx.save();
    ctx.font = ' 20px Montserrat, sans-serif';

    /************************************************************** */
    const name = `${options[index].name}`; 
    const location = `${options[index].location}`;
    const category = `Category: ${options[index].category}`;
    const phone = `${options[index].contact}`;
    const price = `${options[index].price}`;
    const rating = `${options[index].rating}`;
    //const menu = `Rating: ${options[index].menu}`;
    
    ctx.fillText(name, baseSize - ctx.measureText(name).width / 2, 300, baseSize*2);
    ctx.fillText(location, baseSize - ctx.measureText(location).width / 2, 350, baseSize*2);
    ctx.fillText(category, baseSize - ctx.measureText(category).width / 2, 400, baseSize*2);
    ctx.fillText(phone, baseSize - ctx.measureText(phone).width / 2, 450, baseSize*2);
    ctx.fillText(price, baseSize - ctx.measureText(price).width / 2, 500, baseSize*2);
    ctx.fillText(rating, baseSize - ctx.measureText(rating).width / 2, 550, baseSize*2);
    //ctx.fillText(menu, baseSize - ctx.measureText(menu).width / 2, 500, baseSize*2);

    ctx.restore();
    this.props.onComplete(name);
  }

  easeOut(t, b, c, d) {
    const ts = (t/=d)*t;
    const tc = ts*t;
    return b+c*(tc + -3*ts + 3*t);
  }

  handleOnClick() {
    this.spin();
  }

  render() {

    const { baseSize } = this.props;

    return (
      <div className="roulette">
        <div className="roulette-container">
          <canvas ref="canvas" width={baseSize * 2} height={baseSize * 2} className="roulette-canvas"></canvas>
        </div>
        <div className="roulette-container">
          <input type="button" value="Spin the Wheel" onClick={this.handleOnClick} className="btn btn-default" id="spin" />
        </div>
        {
          
        }
      </div>
    );

  }
}

export default Roulette;
