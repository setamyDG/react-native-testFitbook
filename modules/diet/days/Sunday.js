import React, { Component } from 'react';
import Days from './Days';

export default class Sunday extends Component {
  render() {
    return (
      <Days
        dayName="SUNDAY"
        dayBreakfast="SUNDAY BREAKFAST"
        imageBreakfastSrc={require('../../../assets/images/breakfast4.jpeg')}

        dayLunch="SUNDAY LUNCH"
        imageLunchSrc={require('../../../assets/images/secondBreakfast.jpeg')}

        dayDinner="SUNDAY DINNER"
        imageDinnerSrc={require('../../../assets/images/dinner.jpeg')}

        daySnack="SUNDAY SNACK"
        imageSnackSrc={require('../../../assets/images/snack.jpeg')}

        daySupper="SUNDAY SUPPER"
        imageSupperSrc={require('../../../assets/images/dinner2.jpeg')}

      />
    );
  }
}
