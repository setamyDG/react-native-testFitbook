import { AppRegistry } from 'react-native';

import { name as appName } from './app.json';
import RootStack from './config/navigation/AppNavigator';

AppRegistry.registerComponent(appName, () => RootStack);
