# Gauge component for React Native
React Native component for displaying semi circular gauge, with animation. **Works on both iOS & Android.**

You might also be interested in [my blogs]( https://crazysigma.com/blogs/).


### Installation
```bash
npm install react-native-semi-circular-gauge
```

Then link the ART library found in `node_modules/react-native/Libraries/ART/ART.xcodeproj`  to your xcode project. ([More Info]( https://facebook.github.io/react-native/docs/linking-libraries-ios.html))

## Usage

```js
import AnimatedSemiCircularGauge from 'react-native-semi-circular-gauge';
```

And then in your render method:

```jsx
<AnimatedSemiCircularGauge
    size={100}
    graphWidth={10}
    fill={20}
    prefill={-50}/>
```

## Props

Name | PropType | Required | Default Value | Description
--- | --- | --- | --- | ---
style | Object | No | None | ```View.propTypes.style``` object for the outer conatiner that comprises the chart
chartWidth | Number | Yes | None | width of the chart, height is determined automatically
fill | Number | Yes | None | amount of the chart to be filled
prefill | Number | No | 0 | starting point for the chart that is filled till props.fill
strokeWidth | Number | Yes | None | width of the stroke that is used to draw the chart
tension | Number | Yes | RNdefault | used by the animated chart component [more info]( https://facebook.github.io/react-native/docs/animations.html)
friction | Number | Yes | RNdefault | used by the animated chart component

## License

MIT
