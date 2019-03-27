import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import { withGesture } from 'react-with-gesture'

const unit = 40

@withGesture
class App extends Component {
  constructor() {
    super();

    this.state = {
      idx: 0
    }
  }

  componentWillReceiveProps(nextProps){
    const {down, yDelta} = nextProps
    const {down: down_prev} = this.props

    if(down_prev && !down){
      const sign = yDelta > 0 ? 1 : -1, absDelta = Math.abs(yDelta)
      const steps = (Math.floor(absDelta / unit) + ((absDelta % unit > unit * 0.4) ? 1 : 0)) * sign

      this.setState({
        idx: this.state.idx + steps
      })
    }
  }

  componentDidUpdate(prevProps){
    if(!this.props.down && prevProps.down){
      const selIdx = this.state.idx * -1 + 2
      alert(`select index: ${selIdx}`)
    }
  }

  render() {
    const { down, x, y, xDelta, yDelta, xInitial, yInitial } = this.props
    const {idx} = this.state

    const base = idx * 40

    return (
      <div>
        <div className="outer">        
          <div className="wrapper" style={{transform: `translateY(${base + (down ? yDelta : 0)}px)`}}>
            <div className="item">aaa</div>
            <div className="item">bbb</div>
            <div className="item">ccc</div>
            <div className="item">ddd</div>
            <div className="item">eee</div>
            <div className="item">fff</div>
            <div className="item">ggg</div>
            <div className="item">hhh</div>
            <div className="item">iii</div>
            <div className="item">jjj</div>
            <div className="item">kkk</div>
            <div className="item">lll</div>
            <div className="item">mmm</div>
            <div className="item">nnn</div>
            <div className="item">ooo</div>
            <div className="item">ppp</div>
          </div>
          <div className="block up" />
          <div className="block down" />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
