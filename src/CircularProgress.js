import React, { PropTypes, Component } from 'react';
import { View, Platform, Text } from 'react-native';
//import { Surface, Shape, Path, Group } from 'ReactNativeART'; // can be uncommented for development purposes, can't be used in production.
import { Surface, Shape, Path, Group } from '../../react-native/Libraries/ART/ReactNativeART';

export default class CircularProgress extends Component {

  extractFill(fill) {
    if(fill < -50)
      return -50;
    else if(fill > 50)
      return 50;

    return fill;
  }

  getPath(cx, cy, r, startDegree, endDegree, clockWise) {
    let p = Path();
    let multiplier = clockWise === 1? clockWise: (clockWise-1)
    if (Platform.OS === 'ios')
    {
      p.path.push(0, cx+r, cy);
      p.path.push(4, cx, cy, r, (startDegree) * Math.PI / 180, (endDegree * multiplier) * Math.PI / 180, clockWise);
    }
    else
    {
      // Android needs support!!!
      p.path.push(4, cx, cy, r, startDegree * Math.PI / 180, (startDegree - endDegree) * Math.PI / 180, 0);
    }
    return p;
  }

  drawChartPath()
  {
    const { size, width, fill, style } = this.props;
    const purgedFill = this.extractFill(fill);

    let graph;
    let chartPath, chartColor;
    const backgroundPath = this.getPath(size / 2, size / 2, size / 2 - width / 2, 0, 180, 1);

    if(purgedFill<0)
    {
      chartPath = this.getPath(size / 2, size / 2, size / 2 - width / 2, 0, 90 * Math.abs(purgedFill)*2 / 100, 0);
      chartColor = "rgb(245,40,55)"
    }
    else
    {
      chartPath = this.getPath(size / 2, size / 2, size / 2 - width / 2, 0, 90 * Math.abs(purgedFill)*2 / 100, 1);
      chartColor = "rgb(120,200,65)"
    }

    return(
      <Surface
        width={size}
        height={size/2}>
          <Group rotation={180} originX={size/2} originY={size/2}>
            <Shape
              d={backgroundPath}
              stroke="rgba(225,235,235,1)"
              strokeWidth={width}/>
          </Group>
          <Group rotation={270} originX={size/2} originY={size/2}>
            <Shape
              d={chartPath}
              stroke={chartColor}
              strokeCap="butt"
              strokeWidth={width}/>
          </Group>
      </Surface>
    )
  }

  render() {
    const { fill, style } = this.props;

    const customViewStyle={
      ...style,
      alignItems:'center',
      marginBottom:-30
    };
    const textStyle = {
      fontSize:20+(customViewStyle.marginBottom/5),
      top:-20,
      backgroundColor:'white',
      textAlign:'center'
    };

    return (
      <View style={customViewStyle}>
        {this.drawChartPath()}
        <Text
          style={textStyle}>
            &nbsp;{Math.round(fill,2)}&nbsp;
        </Text>
      </View>
    )
  }
}

CircularProgress.propTypes = {
  style: View.propTypes.style,
  size: PropTypes.number.isRequired,
  fill: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
}
