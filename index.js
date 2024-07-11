/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {Amplify} from 'aws-amplify';
import {initializePushNotifications} from 'aws-amplify/push-notifications';
import amplifyconfig from './src/amplifyconfiguration.json';

import {backgroundNotificationListener} from './listeners/notificationListener';

Amplify.configure(amplifyconfig);
initializePushNotifications();

let _ = backgroundNotificationListener();

AppRegistry.registerComponent(appName, () => App);
