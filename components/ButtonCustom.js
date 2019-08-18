import React, { Component } from 'react';
import { Button } from 'react-native-elements/src/index';

export default class ButtonCustom extends Component {
  render() {
    return (
      <Button>
        {this.props.title}
        {this.props.borderRadius}
        {this.props.backgroundColor}
      </Button>
    );
  }
}
