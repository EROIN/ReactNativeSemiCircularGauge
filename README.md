# Gauge component for React Native
---

### Installation
```bash
npm install react-native-carousel
```

Then link the ART library found in `node_modules/react-native/Libraries/ART/ART.xcodeproj`  to your xcode project. (More info: ```https://facebook.github.io/react-native/docs/linking-libraries-ios.html``` )

## Usage

```js
import AnimatedCircularProgress from 'react-native-semi-circular-gauge';
```

And then in your render method:

```jsx
<AnimatedCircularProgress
    size={100}
    width={10}
    fill={-10}/>
```

## Props

Name | propType | required | default value | description
--- | --- | --- | --- | ---
style | Object | No | {} | ```View.propTypes.style``` object for the outer conatiner that comprises the chart
size | Number | Yes | None | width of the chart, height is determined automatically
fill | Number | Yes | None | amount of the chart to be filled
prefill | Number | No | 0 | starting point for the chart that is filled till props.fill
width | Number | Yes | None | width of the stroke that is used to draw the chart
tension | Number | Yes | RNdefault | used by the animated chart component [more info here]( https://facebook.github.io/react-native/docs/animations.html) 
friction | Number | Yes | RNdefault | used by the animated chart component

## License

MIT
