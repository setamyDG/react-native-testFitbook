import React, { Component } from 'react';
import Days from './Days';

export default class Friday extends Component {
  render() {
    return (
      <Days
        dayName="FRIDAY"

        dayBreakfast="FRIDAY BREAKFAST"
        imageBreakfastSrc={require('../../../assets/images/breakfast4.jpeg')}

        dayLunch="FRIDAY LUNCH"
        imageLunchSrc={require('../../../assets/images/secondBreakfast.jpeg')}

        dayDinner="FRIDAY DINNER"
        imageDinnerSrc={require('../../../assets/images/dinner.jpeg')}

        daySnack="FRIDAY SNACK"
        imageSnackSrc={require('../../../assets/images/snack.jpeg')}

        daySupper="FRIDAY SUPPER"
        imageSupperSrc={require('../../../assets/images/dinner2.jpeg')}
      />
    );
  }
}
