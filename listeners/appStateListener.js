import {
  onNotificationOpenedListener,
  foregroundNotificationListener,
} from './notificationListener';
import { tokenListener } from './deviceTokenListener';

let notificationOpen, token, foregroundNotification;
export const handleAppStateChange = nextAppState => {
  switch (nextAppState) {
    case 'active':
      notificationOpen = onNotificationOpenedListener();
      token = tokenListener();
      foregroundNotification = foregroundNotificationListener();
      break;
    case 'background':
    case 'inactive':
      if (notificationOpen && typeof notificationOpen.remove === 'function') {
        notificationOpen.remove();
        notificationOpen = null;
      }
      if (token && typeof token.remove === 'function') {
        token.remove();
        token = null;
      }
      if (foregroundNotification && typeof foregroundNotification.remove === 'function') {
        foregroundNotification.remove();
        foregroundNotification = null;
      }
      break;
    default:
      break;
  }
};