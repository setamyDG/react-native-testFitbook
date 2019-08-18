import React, { Component } from 'react';
import Days from './Days';

export default class Thursrday extends Component {
  render() {
    return (
      <Days
        dayName="THURSDAY"

        dayBreakfast="THURSDAY BREAKFAST"
        imageBreakfastSrc={require('../../../assets/images/breakfast4.jpeg')}

        dayLunch="THURSDAY LUNCH"
        imageLunchSrc={require('../../../assets/images/secondBreakfast.jpeg')}

        dayDinner="THURSDAY DINNER"
        imageDinnerSrc={require('../../../assets/images/dinner.jpeg')}

        daySnack="THURSDAY SNACK"
        imageSnackSrc={require('../../../assets/images/snack.jpeg')}

        daySupper="THURSDAY SUPPER"
        imageSupperSrc={require('../../../assets/images/dinner2.jpeg')}
      />
    );
  }
}
