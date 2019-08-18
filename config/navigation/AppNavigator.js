import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { LoginStack } from './LoginStack';
import MainTabNavigator from './MainTabNavigator';

const RootStack = createSwitchNavigator({
  Login: LoginStack,
  Main: MainTabNavigator,
});

export default createAppContainer(RootStack);
