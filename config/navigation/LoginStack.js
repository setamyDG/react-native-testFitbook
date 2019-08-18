import { createStackNavigator } from 'react-navigation';
import { fromRight } from 'react-navigation-transitions';
import CreateAccountScreen from '../../modules/createAccount/CreateAccountScreen';
import LoginScreen from '../../modules/login/LoginScreen';

export const LoginStack = createStackNavigator({
  Login: LoginScreen,
  CreateAccount: CreateAccountScreen,
},
{
  initialRouteName: 'Login',
  headerMode: 'none',
  transitionConfig: () => fromRight(),
});
