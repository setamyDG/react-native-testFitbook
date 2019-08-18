import React, { Component } from 'react';
import Days from './Days';

export default class Friday extends Component {
  render() {
    return (
      <Days
        dayName="FRIDAY"

        dayBreakfast="fRIDAY BREAKFAST"
        imageBreakfastSrc={require('../../../assets/images/breakfast4.jpeg')}

        dayLunch="fRIDAY LUNCH"
        imageLunchSrc={require('../../../assets/images/secondBreakfast.jpeg')}

        dayDinner="fRIDAY DINNER"
        imageDinnerSrc={require('../../../assets/images/dinner.jpeg')}

        daySnack="fRIDAY SNACK"
        imageSnackSrc={require('../../../assets/images/snack.jpeg')}

        daySupper="fRIDAY SUPPER"
        imageSupperSrc={require('../../../assets/images/dinner2.jpeg')}
      />
    );
  }
}
