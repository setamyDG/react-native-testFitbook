/**
 * Created by hoangnd on 7/5/17.
 */
import React from 'react';
import { Animated } from 'react-native';

export default class SpringAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      springValue: new Animated.Value(0.3),
    };
  }

  componentDidMount() {
    Animated.spring(this.state.springValue, {
      toValue: 1,
      friction: 1,
    }).start();
  }

  render() {
    return (
      <Animated.Image
        style={{
          ...this.props.style,
          transform: [{ scale: this.state.springValue }],
          alignSelf: 'center',
        }}
        source={this.props.source}
      >
        {this.props.children}
      </Animated.Image>
    );
  }
}
