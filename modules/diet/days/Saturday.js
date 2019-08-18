import React, { Component } from 'react';
import Days from './Days';

export default class Saturday extends Component {
  render() {
    return (
      <Days
        dayName="SATURDAY"

        dayBreakfast="SATURDAY BREAKFAST"
        imageBreakfastSrc={require('../../../assets/images/breakfast4.jpeg')}

        dayLunch="SATURDAY LUNCH"
        imageLunchSrc={require('../../../assets/images/secondBreakfast.jpeg')}

        dayDinner="SATURDAY DINNER"
        imageDinnerSrc={require('../../../assets/images/dinner.jpeg')}

        daySnack="SATURDAY SNACK"
        imageSnackSrc={require('../../../assets/images/snack.jpeg')}

        daySupper="SATURDAY SUPPER"
        imageSupperSrc={require('../../../assets/images/dinner2.jpeg')}
      />
    );
  }
}
