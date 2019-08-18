import React, { Component } from 'react';
import Days from './Days';

export default class Tuesday extends Component {
  render() {
    return (
      <Days
        dayName="TUESDAY"

        dayBreakfast="TUESDAY BREAKFAST"
        imageBreakfastSrc={require('../../../assets/images/breakfast4.jpeg')}

        dayLunch="TUESDAY LUNCH"
        imageLunchSrc={require('../../../assets/images/secondBreakfast.jpeg')}

        dayDinner="TUESDAY DINNER"
        imageDinnerSrc={require('../../../assets/images/dinner.jpeg')}

        daySnack="TUESDAY SNACK"
        imageSnackSrc={require('../../../assets/images/snack.jpeg')}

        daySupper="TUESDAY SUPPER"
        imageSupperSrc={require('../../../assets/images/dinner2.jpeg')}
      />
    );
  }
}
