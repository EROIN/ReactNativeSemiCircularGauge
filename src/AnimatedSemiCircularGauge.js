import React, { PropTypes, Component } from 'react';
import { View, Animated } from 'react-native';

import SemiCircularGauge from './SemiCircularGauge';
const AnimatedProgress = Animated.createAnimatedComponent(SemiCircularGauge);

export default class AnimatedSemiCircularGauge extends Component {

  constructor(props) {
    super(props);
    this.state = {
      chartFillAnimation: new Animated.Value(props.prefill || 0)
    }
  }

  componentDidMount() {
    this.animateFill();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.fill !== this.props.fill) {
      this.animateFill();
    }
  }

  animateFill() {
    const { tension, friction } = this.props;
    Animated.spring(
      this.state.chartFillAnimation,
      {
        toValue: this.props.fill,
        tension,
        friction
      }
    ).start();
  }

  render() {
    const { fill, prefill, ...other } = this.props;
    return (
        <AnimatedProgress
          {...other}
          fill={this.state.chartFillAnimation}
          />
      )
  }
}

AnimatedSemiCircularGauge.propTypes = {
  style: View.propTypes.style,
  chartWidth: PropTypes.number.isRequired,
  fill: PropTypes.number.isRequired,
  prefill: PropTypes.number,
  strokeWidth: PropTypes.number.isRequired,
  tension: PropTypes.number,
  friction: PropTypes.number
}

AnimatedSemiCircularGauge.defaultProps = {
  tension: 1,
  friction: 6,
};
