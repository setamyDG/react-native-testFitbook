import React, { Component } from 'react';
import Days from './Days';

export default class Wednesday extends Component {
  render() {
    return (
      <Days
        dayName="WEDNESDAY"

        dayBreakfast="WEDNESDAY BREAKFAST"
        imageBreakfastSrc={require('../../../assets/images/breakfast4.jpeg')}

        dayLunch="WEDNESDAY LUNCH"
        imageLunchSrc={require('../../../assets/images/secondBreakfast.jpeg')}

        dayDinner="WEDNESDAY DINNER"
        imageDinnerSrc={require('../../../assets/images/dinner.jpeg')}

        daySnack="WEDNESDAY SNACK"
        imageSnackSrc={require('../../../assets/images/snack.jpeg')}

        daySupper="WEDNESDAY SUPPER"
        imageSupperSrc={require('../../../assets/images/dinner2.jpeg')}


      />
    );
  }
}
